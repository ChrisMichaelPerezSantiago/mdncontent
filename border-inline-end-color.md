## ✔️ border-inline-end-color 
 ---<br/>title: border-inline-end-color<br/>slug: Web/CSS/border-inline-end-color<br/>tags:<br/>  - CSS<br/>  - CSS Logical Property<br/>  - CSS Property<br/>  - Reference<br/>  - border-inline<br/>  - border-inline-color<br/>  - border-inline-end<br/>  - border-inline-end-color<br/>  - recipe:css-property<br/>browser-compat: css.properties.border-inline-end-color<br/>---<br/>{{CSSRef}}<br/><br/>The **`border-inline-end-color`** [CSS](/en-US/docs/Web/CSS) property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref(border-top-color)}}, {{cssxref(border-right-color)}}, {{cssxref(border-bottom-color)}}, or {{cssxref(border-left-color)}} property depending on the values defined for {{cssxref(writing-mode)}}, {{cssxref(direction)}}, and {{cssxref(text-orientation)}}.<br/><br/>{{EmbedInteractiveExample(pages/css/border-inline-end-color.html)}}<br/><br/>## Syntax<br/><br/>```css<br/>border-inline-end-color: rebeccapurple;<br/>border-inline-end-color: #663399;<br/><br/>/* Global values */<br/>border-inline-end-color: inherit;<br/>border-inline-end-color: initial;<br/>border-inline-end-color: revert;<br/>border-inline-end-color: revert-layer;<br/>border-inline-end-color: unset;<br/>```<br/><br/>Related properties are {{cssxref(border-block-start-color)}}, {{cssxref(border-block-end-color)}}, and {{cssxref(border-inline-start-color)}}, which define the other border colors of the element.<br/><br/>{{cssinfo}}<br/><br/>### Values<br/><br/>- `<'color'>`<br/>  - : The color of the border. See {{cssxref(color)}}.<br/><br/>## Formal definition<br/><br/>{{CSSInfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### HTML<br/><br/>```html<br/><div><br/>  <p class=exampleText>Example text</p><br/></div><br/>```<br/><br/>### CSS<br/><br/>```css<br/>div {<br/>  background-color: yellow;<br/>  width: 120px;<br/>  height: 120px;<br/>}<br/><br/>.exampleText {<br/>  writing-mode: vertical-lr;<br/>  border: 10px solid blue;<br/>  border-inline-end-color: red;<br/>}<br/>```<br/><br/>{{EmbedLiveSample(Examples, 140, 140)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- This property maps to one of the physical border properties: {{cssxref(border-top-color)}}, {{cssxref(border-right-color)}}, {{cssxref(border-bottom-color)}}, or {{cssxref(border-left-color)}}.<br/>- {{cssxref(writing-mode)}}, {{cssxref(direction)}}, {{cssxref(text-orientation)}}<br/>