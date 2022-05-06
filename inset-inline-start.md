## ✔️ inset-inline-start 
 ---<br/>title: inset-inline-start<br/>slug: Web/CSS/inset-inline-start<br/>tags:<br/>  - CSS<br/>  - CSS Logical Property<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.inset-inline-start<br/>---<br/>{{CSSRef}}<br/><br/>The **`inset-inline-start`** [CSS](/en-US/docs/Web/CSS) property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref(top)}}, {{cssxref(right)}}, {{cssxref(bottom)}}, or {{cssxref(left)}} property depending on the values defined for {{cssxref(writing-mode)}}, {{cssxref(direction)}}, and {{cssxref(text-orientation)}}.<br/><br/>{{EmbedInteractiveExample(pages/css/inset-inline-start.html)}}<br/><br/>## Syntax<br/><br/>```css<br/>/* <length> values */<br/>inset-inline-start: 3px;<br/>inset-inline-start: 2.4em;<br/><br/>/* <percentage>s of the width or height of the containing block */<br/>inset-inline-start: 10%;<br/><br/>/* Keyword value */<br/>inset-inline-start: auto;<br/><br/>/* Global values */<br/>inset-inline-start: inherit;<br/>inset-inline-start: initial;<br/>inset-inline-start: revert;<br/>inset-inline-start: revert-layer;<br/>inset-inline-start: unset;<br/>```<br/><br/>The shorthand for `inset-inline-start` and {{cssxref(inset-inline-end)}} is {{cssxref(inset-inline)}}.<br/><br/>### Values<br/><br/>The `inset-inline-start` property takes the same values as the {{cssxref(left)}} property.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Setting inline start offset<br/><br/>#### HTML<br/><br/>```html<br/><div><br/>  <p class=exampleText>Example text</p><br/></div><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>div {<br/>  background-color: yellow;<br/>  width: 120px;<br/>  height: 120px;<br/>}<br/><br/>.exampleText {<br/>  writing-mode: vertical-lr;<br/>  position: relative;<br/>  inset-inline-start: 20px;<br/>  background-color: #c8c800;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Setting_inline_start_offset, 140, 140)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- The properties which defines other insets: {{cssxref(inset-block-start)}}, {{cssxref(inset-block-end)}}, and {{cssxref(inset-inline-end)}}<br/>- The mapped physical properties: {{cssxref(top)}}, {{cssxref(right)}}, {{cssxref(bottom)}}, and {{cssxref(left)}}<br/>- {{cssxref(writing-mode)}}, {{cssxref(direction)}}, {{cssxref(text-orientation)}}<br/>