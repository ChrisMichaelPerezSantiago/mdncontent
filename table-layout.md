## ✔️ table-layout 
 ---<br/>title: table-layout<br/>slug: Web/CSS/table-layout<br/>tags:<br/>  - CSS<br/>  - CSS Property<br/>  - CSS Tables<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.table-layout<br/>---<br/>{{CSSRef}}<br/><br/>The **`table-layout`** CSS property sets the algorithm used to lay out {{htmlelement(table)}} cells, rows, and columns.<br/><br/>{{EmbedInteractiveExample(pages/css/table-layout.html)}}<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword values */<br/>table-layout: auto;<br/>table-layout: fixed;<br/><br/>/* Global values */<br/>table-layout: inherit;<br/>table-layout: initial;<br/>table-layout: revert;<br/>table-layout: revert-layer;<br/>table-layout: unset;<br/>```<br/><br/>### Values<br/><br/>- `auto`<br/>  - : By default, most browsers use an automatic table layout algorithm. The widths of the table and its cells are adjusted to fit the content.<br/>- `fixed`<br/><br/>  - : Table and column widths are set by the widths of `table` and `col` elements or by the width of the first row of cells. Cells in subsequent rows do not affect column widths.<br/><br/>    Under the fixed layout method, the entire table can be rendered once the first table row has been downloaded and analyzed. This can speed up rendering time over the automatic layout method, but subsequent cell content might not fit in the column widths provided. Cells use the {{Cssxref(overflow)}} property to determine whether to clip any overflowing content, but only if the table has a known width; otherwise, they won't overflow the cells.<br/><br/>## Formal definition<br/><br/>{{CSSInfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Fixed-width tables with text-overflow<br/><br/>This example uses a fixed table layout, combined with the {{cssxref(width)}} property, to restrict the table's width. The {{cssxref(text-overflow)}} property is used to apply an ellipsis to words that are too long to fit. If the table layout were `auto`, the table would grow to accommodate its contents, despite the specified `width`.<br/><br/>#### HTML<br/><br/>```html<br/><table><br/>  <tr><td>Ed</td><td>Wood</td></tr><br/>  <tr><td>Albert</td><td>Schweitzer</td></tr><br/>  <tr><td>Jane</td><td>Fonda</td></tr><br/>  <tr><td>William</td><td>Shakespeare</td></tr><br/></table><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>table {<br/>  table-layout: fixed;<br/>  width: 120px;<br/>  border: 1px solid red;<br/>}<br/><br/>td {<br/>  border: 1px solid blue;<br/>  overflow: hidden;<br/>  white-space: nowrap;<br/>  text-overflow: ellipsis;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample('Fixed-width_tables_with_text-overflow')}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [`<table>`](/en-US/docs/Web/HTML/Element/table)<br/>