## ✔️ padding-right 
 ---<br/>title: padding-right<br/>slug: Web/CSS/padding-right<br/>tags:<br/>  - CSS<br/>  - CSS Padding<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.padding-right<br/>---<br/>{{CSSRef}}<br/><br/>The **`padding-right`** [CSS](/en-US/docs/Web/CSS) property sets the width of the [padding area](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding_area) on the right of an element.<br/><br/>{{EmbedInteractiveExample(pages/css/padding-right.html)}}<br/><br/>An element's padding area is the space between its content and its border.<br/><br/>> **Note:** The {{cssxref(padding)}} property can be used to set paddings on all four sides of an element with a single declaration.<br/><br/>## Syntax<br/><br/>```css<br/>/* <length> values */<br/>padding-right: 0.5em;<br/>padding-right: 0;<br/>padding-right: 2cm;<br/><br/>/* <percentage> value */<br/>padding-right: 10%;<br/><br/>/* Global values */<br/>padding-right: inherit;<br/>padding-right: initial;<br/>padding-right: revert;<br/>padding-right: revert-layer;<br/>padding-right: unset;<br/>```<br/><br/>The `padding-right` property is specified as a single value chosen from the list below. Unlike margins, negative values are not allowed for padding.<br/><br/>### Values<br/><br/>- {{cssxref(&lt;length&gt;)}}<br/>  - : The size of the padding as a fixed value. Must be nonnegative.<br/>- {{cssxref(&lt;percentage&gt;)}}<br/>  - : The size of the padding as a percentage, relative to the inline size (_width_ in a horizontal language, defined by {{cssxref(writing-mode)}}) of the [containing block](/en-US/docs/Web/CSS/Containing_block). Must be nonnegative.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Setting right padding using pixels and percentages<br/><br/>```css<br/>.content { padding-right: 5%; }<br/>.sidebox { padding-right: 10px; }<br/>```<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [Introduction to the CSS basic box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)<br/>- {{cssxref(padding-top)}}, {{cssxref(padding-bottom)}}, {{cssxref(padding-left)}} and the {{cssxref(padding)}} shorthand<br/>- The mapped logical properties: {{cssxref(padding-block-start)}}, {{cssxref(padding-block-end)}}, {{cssxref(padding-inline-start)}}, and {{cssxref(padding-inline-end)}} and the shorthands {{cssxref(padding-block)}} and {{cssxref(padding-inline)}}<br/>