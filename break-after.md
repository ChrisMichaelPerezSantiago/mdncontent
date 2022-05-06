## ✔️ break-after 
 ---<br/>title: break-after<br/>slug: Web/CSS/break-after<br/>tags:<br/>  - CSS<br/>  - CSS Fragmentation<br/>  - CSS Multi-column Layout<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.break-after<br/>---<br/>{{CSSRef}}<br/><br/>The **`break-after`** [CSS](/en-US/docs/Web/CSS) property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.<br/><br/>```css<br/>/* Generic break values */<br/>break-after: auto;<br/>break-after: avoid;<br/>break-after: always;<br/>break-after: all;<br/><br/>/* Page break values */<br/>break-after: avoid-page;<br/>break-after: page;<br/>break-after: left;<br/>break-after: right;<br/>break-after: recto;<br/>break-after: verso;<br/><br/>/* Column break values */<br/>break-after: avoid-column;<br/>break-after: column;<br/><br/>/* Region break values */<br/>break-after: avoid-region;<br/>break-after: region;<br/><br/>/* Global values */<br/>break-after: inherit;<br/>break-after: initial;<br/>break-after: revert;<br/>break-after: revert-layer;<br/>break-after: unset;<br/>```<br/><br/>Each possible break point (in other words, each element boundary) is affected by three properties: the `break-after` value of the previous element, the {{cssxref(break-before)}} value of the next element, and the {{cssxref(break-inside)}} value of the containing element.<br/><br/>To determine if a break must be done, the following rules are applied:<br/><br/>1. If any of the three concerned values is a _forced break value_ (`always`, `left`, `right`, `page`, `column`, or `region`), it has precedence. If more than one of them are such a break, the one of the element that appears the latest in the flow is taken (i.e., the `break-before` value has precedence over the `break-after` value, which itself has precedence over the `break-inside` value).<br/>2. If any of the three concerned values is an _avoid break value_ (`avoid`, `avoid-page`, `avoid-region`, or `avoid-column`), no such break will be applied at that point.<br/><br/>Once forced breaks have been applied, soft breaks may be added if needed, but not on element boundaries that resolve in a corresponding `avoid` value.<br/><br/>## Syntax<br/><br/>The `break-after` property is specified as one of the keyword values from the list below.<br/><br/>### Values<br/><br/>#### Generic break values<br/><br/>- `auto`<br/>  - : Allows, but does not force, any break (page, column, or region) to be inserted right after the principal box.<br/>- `avoid`<br/>  - : Avoids any break (page, column, or region) from being inserted right after the principal box.<br/>- `always` {{experimental_inline}}<br/>  - : Forces a page break right after the principal box. The type of this break is that of the immediately-containing fragmentation context. If we are inside a multicol container then it would force a column break, inside paged media (but not inside a multicol container) a page break.<br/>- `all` {{experimental_inline}}<br/>  - : Forces a page break right after the principal box. Breaking through all possible fragmentation contexts. So a break inside a multicol container, which was inside a page container would force a column and page break.<br/><br/>#### Page break values<br/><br/>- `avoid-page`<br/>  - : Avoids any page break right after the principal box.<br/>- `page`<br/>  - : Forces a page break right after the principal box.<br/>- `left`<br/>  - : Forces one or two page breaks right after the principal box, whichever will make the next page into a left page. It's the page placed on the left side of the spine of the book or the back side of the page in duplex printing.<br/>- `right`<br/>  - : Forces one or two page breaks right after the principal box, whichever will make the next page into a right page. It's the page placed on the right side of the spine of the book or the front side of the page in duplex printing.<br/>- `recto` {{experimental_inline}}<br/>  - : Forces one or two page breaks right after the principal box, whichever will make the next page into a recto page. (A recto page is a right page in a left-to-right spread or a left page in a right-to-left spread.)<br/>- `verso` {{experimental_inline}}<br/>  - : Forces one or two page breaks right after the principal box, whichever will make the next page into a verso page. (A verso page is a left page in a left-to-right spread or a right page in a right-to-left spread.)<br/><br/>#### Column break values<br/><br/>- `avoid-column`<br/>  - : Avoids any column break right after the principal box.<br/>- `column`<br/>  - : Forces a column break right after the principal box.<br/><br/>#### Region break values<br/><br/>- `avoid-region` {{experimental_inline}}<br/>  - : Avoids any region break right after the principal box.<br/>- `region` {{experimental_inline}}<br/>  - : Forces a region break right after the principal box.<br/><br/>## Page break aliases<br/><br/>For compatibility reasons, the legacy {{cssxref(page-break-after)}} property should be treated by browsers as an alias of `break-after`. This ensures that sites using `page-break-after` continue to work as designed. A subset of values should be aliased as follows:<br/><br/>| page-break-after | break-after |<br/>| ---------------- | ----------- |<br/>| `auto`           | `auto`      |<br/>| `left`           | `left`      |<br/>| `right`          | `right`     |<br/>| `avoid`          | `avoid`     |<br/>| `always`         | `page`      |<br/><br/>> **Note:** The `always` value of `page-break-*` was implemented by browsers as a page break, and not as a column break. Therefore the aliasing is to `page`, rather than the `always` value in the Level 4 spec.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Breaking into neat columns<br/><br/>In the following example we have a container that contains an `<h1>` spanning all columns (achieved using `column-span: all`) and a series of `<h2>`s and paragraphs laid out in multiple columns using `column-width: 200px`.<br/><br/>By default, the subheadings and paragraphs were laid out rather messily because the headings were not in a uniform place. However, we used `break-after: column` on the `<p>` elements to force a column break after each one, meaning that you end up with an `<h2>` neatly at the top of each column.<br/><br/>#### HTML<br/><br/>```html<br/><article><br/>  <h1>Main heading</h1><br/><br/>  <h2>Subheading</h2><br/><br/>  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae fringilla mauris. Quisque commodo eget nisi sed pretium. Mauris luctus nec lacus in ultricies. Mauris vitae hendrerit arcu, ac scelerisque lacus. Aliquam lobortis in lacus sit amet posuere. Fusce iaculis urna id neque dapibus, eu lacinia lectus dictum.</p><br/><br/>  <h2>Subheading</h2><br/><br/>  <p>Praesent condimentum dui dui, sit amet rutrum diam tincidunt eu. Cras suscipit porta leo sit amet rutrum. Sed vehicula ornare tincidunt. Curabitur a ipsum ac diam mattis volutpat ac ut elit. Nullam luctus justo non vestibulum gravida. Morbi metus libero, pharetra non porttitor a, molestie nec nisi.</p><br/><br/>  <h2>Subheading</h2><br/><br/>  <p>Vivamus eleifend metus vitae neque placerat, eget interdum elit mattis. Donec eu vulputate nibh. Ut turpis leo, malesuada quis nisl nec, volutpat egestas tellus.<br/><br/>  <h2>Subheading</h2><br/><br/>  <p>In finibus viverra enim vel suscipit. Quisque consequat velit eu orci malesuada, ut interdum tortor molestie. Proin sed pellentesque augue. Nam risus justo, faucibus non porta a, congue vel massa. Cras luctus lacus nisl, sed tincidunt velit pharetra ac. Duis suscipit faucibus dui sed ultricies.</p><br/></article><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>html {<br/>  font-family: helvetica, arial, sans-serif;<br/>}<br/><br/>h1 {<br/>  font-size: 3rem;<br/>  letter-spacing: 2px;<br/>  column-span: all;<br/>}<br/><br/>h2 {<br/>  font-size: 1.2rem;<br/>  color: red;<br/>  letter-spacing: 1px;<br/>}<br/><br/>p {<br/>  line-height: 1.5;<br/>  break-after: column;<br/>}<br/><br/>article {<br/>  column-width: 200px;<br/>  gap: 20px;<br/>}<br/>```<br/><br/>### Result<br/><br/>{{EmbedLiveSample('Breaking_into_neat_columns', '100%', 600)}}<br/><br/>## Specifications<br/><br/>{{Specifications(css.properties.break-after.multicol_context)}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [Multiple-column Layout](/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)<br/>- [Breaking Boxes With CSS Fragmentation](https://www.smashingmagazine.com/2019/02/css-fragmentation/)<br/>