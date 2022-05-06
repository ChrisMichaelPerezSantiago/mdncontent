## ✔️ break-inside 
 ---<br/>title: break-inside<br/>slug: Web/CSS/break-inside<br/>tags:<br/>  - CSS<br/>  - CSS Fragmentation<br/>  - CSS Multi-column Layout<br/>  - CSS Property<br/>  - NeedsExample<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.break-inside<br/>---<br/>{{CSSRef}}<br/><br/>The **`break-inside`** [CSS](/en-US/docs/Web/CSS) property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.<br/><br/>```css<br/>/* Keyword values */<br/>break-inside: auto;<br/>break-inside: avoid;<br/>break-inside: avoid-page;<br/>break-inside: avoid-column;<br/>break-inside: avoid-region;<br/><br/>/* Global values */<br/>break-inside: inherit;<br/>break-inside: initial;<br/>break-inside: revert;<br/>break-inside: revert-layer;<br/>break-inside: unset;<br/>```<br/><br/>Each possible break point (in other words, each element boundary) is affected by three properties: the {{cssxref(break-after)}} value of the previous element, the {{cssxref(break-before)}} value of the next element, and the `break-inside` value of the containing element.<br/><br/>To determine if a break must be done, the following rules are applied:<br/><br/>1. If any of the three concerned values is a _forced break value_ (`always`, `left`, `right`, `page`, `column`, or `region`), it has precedence. If more than one of them are such a break, the value of the element that appears the latest in the flow is used. Thus, the `break-before` value has precedence over the `break-after` value, which in turn has precedence over the `break-inside` value.<br/>2. If any of the three concerned values is an _avoid break value_ (`avoid`, `avoid-page`, `avoid-region`, or `avoid-column`), no such break will be applied at that point.<br/><br/>Once forced breaks have been applied, soft breaks may be added if needed, but not on element boundaries that resolve in a corresponding `avoid` value.<br/><br/>## Syntax<br/><br/>The `break-inside` property is specified as one of the keyword values from the list below.<br/><br/>### Values<br/><br/>- `auto`<br/>  - : Allows, but does not force, any break (page, column, or region) to be inserted within the principal box.<br/>- `avoid`<br/>  - : Avoids any break (page, column, or region) from being inserted within the principal box.<br/>- `avoid-page`<br/>  - : Avoids any page break within the principal box.<br/>- `avoid-column`<br/>  - : Avoids any column break within the principal box.<br/>- `avoid-region` {{experimental_inline}}<br/>  - : Avoids any region break within the principal box.<br/><br/>## Page break aliases<br/><br/>For compatibility reasons, the legacy {{cssxref(page-break-inside)}} property should be treated by browsers as an alias of `break-inside`. This ensures that sites using `page-break-inside` continue to work as designed. A subset of values should be aliased as follows:<br/><br/>| page-break-inside | break-inside |<br/>| ----------------- | ------------ |<br/>| `auto`            | `auto`       |<br/>| `avoid`           | `avoid`      |<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Avoiding breaking inside a figure<br/><br/>In the following example we have a container that contains an `<h1>` spanning all columns (achieved using `column-span: all`) and a series of paragraphs laid out in multiple columns using `column-width: 200px`. We also have a `<figure>` containing an image and a caption.<br/><br/>By default, it is possible for you to get a break between the image and its caption, which is not what we want. To avoid this, we have set `break-inside: avoid` on the `<figure>`, which causes them to always stay together.<br/><br/>#### HTML<br/><br/>```html<br/><article><br/>  <h1>Main heading</h1><br/><br/>  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae fringilla mauris. Quisque commodo eget nisi sed pretium. Mauris luctus nec lacus in ultricies. Mauris vitae hendrerit arcu, ac scelerisque lacus. Aliquam lobortis in lacus sit amet posuere. Fusce iaculis urna id neque dapibus, eu lacinia lectus dictum.</p><br/><br/>  <figure><br/>    <img src=https://media.prod.mdn.mozit.cloud/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png><br/>    <figcaption>The Firefox logo — fox wrapped around the world</figcaption><br/>  </figure><br/><br/>  <p>Praesent condimentum dui dui, sit amet rutrum diam tincidunt eu. Cras suscipit porta leo sit amet rutrum. Sed vehicula ornare tincidunt. Curabitur a ipsum ac diam mattis volutpat ac ut elit. Nullam luctus justo non vestibulum gravida. Morbi metus libero, pharetra non porttitor a, molestie nec nisi.</p><br/><br/>  <p>In finibus viverra enim vel suscipit. Quisque consequat velit eu orci malesuada, ut interdum tortor molestie. Proin sed pellentesque augue. Nam risus justo, faucibus non porta a, congue vel massa. Cras luctus lacus nisl, sed tincidunt velit pharetra ac. Duis suscipit faucibus dui sed ultricies.</p><br/></article><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>html {<br/>  font-family: helvetica, arial, sans-serif;<br/>}<br/><br/>body {<br/>  width: 80%;<br/>  margin: 0 auto;<br/>}<br/><br/>h1 {<br/>  font-size: 3rem;<br/>  letter-spacing: 2px;<br/>  column-span: all;<br/>}<br/><br/>h1 + p {<br/>  margin-top: 0;<br/>}<br/><br/>p {<br/>  line-height: 1.5;<br/>  break-after: column;<br/>}<br/><br/>figure {<br/>  break-inside: avoid;<br/>}<br/><br/>img {<br/>  max-width: 70%;<br/>  display: block;<br/>  margin: 0 auto;<br/>}<br/><br/>figcaption {<br/>  font-style: italic;<br/>  font-size: 0.8rem;<br/>  width: 70%;<br/>}<br/><br/>article {<br/>  column-width: 200px;<br/>  gap: 20px;<br/>}<br/>```<br/><br/>### Result<br/><br/>{{EmbedLiveSample('Avoiding_breaking_inside_a_figure', '100%', 600)}}<br/><br/>## Specifications<br/><br/>{{Specifications(css.properties.break-inside.multicol_context)}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [Multiple-column Layout](/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)<br/>- [Breaking Boxes With CSS Fragmentation](https://www.smashingmagazine.com/2019/02/css-fragmentation/)<br/>