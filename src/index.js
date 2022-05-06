const {
  cheerio: { load },
  fs,
  PromisePool: PromPool,
} = require("./packages");
const request = require("./request");

const PROPERTIES = require("../properties.json");
const DOCUMENTS = require("../document.json");

const { PromisePool } = PromPool;

const parseTable = async () => {
  const response = await request({
    method: "get",
    url: "https://github.com/mdn/content/tree/main/files/en-us/web/css",
  });

  const $ = load(response);

  let properties = await Promise.all(
    $(
      "div.js-details-container.Details div.Details-content--hidden-not-important div.Box-row"
    )
      .map(
        (_, element) =>
          new Promise((resolve, reject) => {
            try {
              const $el = $(element);
              const property = $el.find("a").html();
              resolve({ property });
            } catch (error) {
              reject(error);
            }
          })
      )
      .get()
  );

  properties.shift(); // remove first element (html content)
  properties.pop(); // remove last element (index.md)

  return properties;
};

const getPropertyCSSDoc = async () => {
  return PromisePool.for(PROPERTIES)
    .withConcurrency(10)
    .process(async (prop) => {
      const document = await request({
        method: "get",
        url: `https://raw.githubusercontent.com/mdn/content/main/files/en-us/web/css/${prop.property}/index.md`,
      });

      return {
        property: prop.property,
        document: document,
      };
    });
};

const generatePropertiesFile = async () => {
  const data = await parseTable();

  await fs.writeJSON("properties.json", data, { spaces: 2 });
};

const generatePropertiesDoc = async () => {
  const data = await getPropertyCSSDoc();

  await fs.writeJSON("document.json", data.results, { spaces: 2 });
};

const generateMarkdown = async (prop) => {
  const doc = prop.document.split("\n").join("<br/>").replace(/[\"]+/g, "");

  const md = `## ✔️ ${prop.property} \n ${doc}`;

  await fs.writeFile(`${prop.property}.md`, md);
};

// (async () => {
//   DOCUMENTS.forEach(async (prop) => {
//     await generateMarkdown(prop);
//     fs.unlink(`${prop.property}.md`);
//   });
// })();
