## ✔️ widows 
 ---<br/>title: widows<br/>slug: Web/CSS/widows<br/>tags:<br/>  - CSS<br/>  - CSS Fragmentation<br/>  - CSS Multi-column Layout<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.widows<br/>---<br/>{{CSSRef}}<br/><br/>The **`widows`** [CSS](/en-US/docs/Web/CSS) property sets the minimum number of lines in a block container that must be shown at the _top_ of a [page](/en-US/docs/Web/CSS/Paged_Media), region, or [column](/en-US/docs/Web/CSS/CSS_Columns).<br/><br/>```css<br/>/* <integer> values */<br/>widows: 2;<br/>widows: 3;<br/><br/>/* Global values */<br/>widows: inherit;<br/>widows: initial;<br/>widows: revert;<br/>widows: revert-layer;<br/>widows: unset;<br/>```<br/><br/>In typography, a _widow_ is the last line of a paragraph that appears alone at the top of a page. (The paragraph is continued from a prior page.)<br/><br/>## Syntax<br/><br/>### Values<br/><br/>- {{cssxref(&lt;integer&gt;)}}<br/>  - : The minimum number of lines that can stay by themselves at the top of a new fragment after a fragmentation break. The value must be positive.<br/><br/>## Formal definition<br/><br/>{{CSSInfo}}<br/><br/>## Formal syntax<br/><br/>{{CSSSyntax}}<br/><br/>## Examples<br/><br/>### Controlling column widows<br/><br/>#### HTML<br/><br/>```html<br/><div><br/>  <p>This is the first paragraph containing some text.</p><br/>  <p>This is the second paragraph containing some more text than the first one. It is used to demonstrate how widows work.</p><br/>  <p>This is the third paragraph. It has a little bit more text than the first one.</p><br/></div><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>div {<br/>  background-color: #8cffa0;<br/>  columns: 3;<br/>  widows: 2;<br/>}<br/><br/>p {<br/>  background-color: #8ca0ff;<br/>}<br/><br/>p:first-child {<br/>  margin-top: 0;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Controlling_column_widows, 400, 160)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{cssxref(orphans)}}<br/>- [Paged media](/en-US/docs/Web/CSS/Paged_Media)<br/>