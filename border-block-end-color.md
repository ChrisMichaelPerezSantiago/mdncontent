## ✔️ border-block-end-color 
 ---<br/>title: border-block-end-color<br/>slug: Web/CSS/border-block-end-color<br/>tags:<br/>  - CSS<br/>  - CSS Logical Property<br/>  - CSS Property<br/>  - Reference<br/>  - border-block<br/>  - border-block-color<br/>  - border-block-end<br/>  - border-block-end-color<br/>  - recipe:css-property<br/>browser-compat: css.properties.border-block-end-color<br/>---<br/>{{CSSRef}}<br/><br/>The **`border-block-end-color`** [CSS](/en-US/docs/Web/CSS) property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref(border-top-color)}}, {{cssxref(border-right-color)}}, {{cssxref(border-bottom-color)}}, or {{cssxref(border-left-color)}} property depending on the values defined for {{cssxref(writing-mode)}}, {{cssxref(direction)}}, and {{cssxref(text-orientation)}}.<br/><br/>{{EmbedInteractiveExample(pages/css/border-block-end-color.html)}}<br/><br/>## Syntax<br/><br/>```css<br/>border-block-end-color: yellow;<br/>border-block-end-color: #F5F6F7;<br/><br/>/* Global values */<br/>border-block-end-color: inherit;<br/>border-block-end-color: initial;<br/>border-block-end-color: revert;<br/>border-block-end-color: revert-layer;<br/>border-block-end-color: unset;<br/>```<br/><br/>Related properties are {{cssxref(border-block-start-color)}}, {{cssxref(border-inline-start-color)}}, and {{cssxref(border-inline-end-color)}}, which define the other border colors of the element.<br/><br/>### Values<br/><br/>- `<'color'>`<br/>  - : The color of the border. See {{cssxref(color)}}.<br/><br/>## Formal definition<br/><br/>{{CSSInfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Border color with vertical text<br/><br/>#### HTML<br/><br/>```html<br/><div><br/>  <p class=exampleText>Example text</p><br/></div><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>div {<br/>  background-color: yellow;<br/>  width: 120px;<br/>  height: 120px;<br/>}<br/><br/>.exampleText {<br/>  writing-mode: vertical-lr;<br/>  border: 10px solid blue;<br/>  border-block-end-color: red;<br/>}<br/>```<br/><br/>#### Results<br/><br/>{{EmbedLiveSample(Border_color_with_vertical_text, 140, 140)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- This property maps to one of the physical border properties: {{cssxref(border-top-color)}}, {{cssxref(border-right-color)}}, {{cssxref(border-bottom-color)}}, or {{cssxref(border-left-color)}}.<br/>- {{cssxref(writing-mode)}}, {{cssxref(direction)}}, {{cssxref(text-orientation)}}<br/>