## ✔️ border-inline-width 
 ---<br/>title: border-inline-width<br/>slug: Web/CSS/border-inline-width<br/>tags:<br/>  - CSS<br/>  - CSS Logical Property<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.border-inline-width<br/>---<br/>{{CSSRef}}<br/><br/>The **`border-inline-width`** [CSS](/en-US/docs/Web/CSS) property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the {{cssxref(border-top-width)}} and {{cssxref(border-bottom-width)}}, or {{cssxref(border-left-width)}}, and {{cssxref(border-right-width)}} property depending on the values defined for {{cssxref(writing-mode)}}, {{cssxref(direction)}}, and {{cssxref(text-orientation)}}.<br/><br/>{{EmbedInteractiveExample(pages/css/border-inline-width.html)}}<br/><br/>The border width in the other dimension can be set with {{cssxref(border-block-width)}}, which sets {{cssxref(border-block-start-width)}}, and {{cssxref(border-block-end-width)}}.<br/><br/>## Syntax<br/><br/>```css<br/>/* <'border-width'> values */<br/>border-inline-width: 5px 10px;<br/>border-inline-width: 5px;<br/>border-inline-width: thick;<br/><br/>/* Global values */<br/>border-inline-width: inherit;<br/>border-inline-width: initial;<br/>border-inline-width: revert;<br/>border-inline-width: revert-layer;<br/>border-inline-width: unset;<br/>```<br/><br/>### Values<br/><br/>- `<'border-width'>`<br/>  - : The width of the border. See {{ cssxref(border-width) }}.<br/><br/>## Formal definition<br/><br/>{{CSSInfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### HTML<br/><br/>```html<br/><div><br/>  <p class=exampleText>Example text</p><br/></div><br/>```<br/><br/>### CSS<br/><br/>```css<br/>div {<br/>  background-color: yellow;<br/>  width: 120px;<br/>  height: 120px;<br/>}<br/><br/>.exampleText {<br/>  writing-mode: vertical-lr;<br/>  border: 1px solid blue;<br/>  border-inline-width: 5px 10px;<br/>}<br/>```<br/><br/>{{EmbedLiveSample(Examples, 140, 140)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- This property maps to one of the physical border properties: {{cssxref(border-top-width)}}, {{cssxref(border-right-width)}}, {{cssxref(border-bottom-width)}}, and {{cssxref(border-left-width)}}<br/>- {{cssxref(writing-mode)}}, {{cssxref(direction)}}, {{cssxref(text-orientation)}}<br/>