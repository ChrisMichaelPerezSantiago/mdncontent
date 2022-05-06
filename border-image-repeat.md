## ✔️ border-image-repeat 
 ---<br/>title: border-image-repeat<br/>slug: Web/CSS/border-image-repeat<br/>tags:<br/>  - CSS<br/>  - CSS Borders<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.border-image-repeat<br/>---<br/>{{CSSRef}}<br/><br/>The **`border-image-repeat`** [CSS](/en-US/docs/Web/CSS) property defines how the [edge regions](/en-US/docs/Web/CSS/border-image-slice#edge-regions) of a source image are adjusted to fit the dimensions of an element's [border image](/en-US/docs/Web/CSS/border-image).<br/><br/>{{EmbedInteractiveExample(pages/css/border-image-repeat.html)}}<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword value */<br/>border-image-repeat: stretch;<br/>border-image-repeat: repeat;<br/>border-image-repeat: round;<br/>border-image-repeat: space;<br/><br/>/* vertical | horizontal */<br/>border-image-repeat: round stretch;<br/><br/>/* Global values */<br/>border-image-repeat: inherit;<br/>border-image-repeat: initial;<br/>border-image-repeat: revert;<br/>border-image-repeat: revert-layer;<br/>border-image-repeat: unset;<br/>```<br/><br/>The `border-image-repeat` property may be specified using one or two values chosen from the list of values below.<br/><br/>- When **one** value is specified, it applies the same behavior on **all four sides**.<br/>- When **two** values are specified, the first applies to the **top and bottom**, the second to the **left and right**.<br/><br/>### Values<br/><br/>- `stretch`<br/>  - : The source image's edge regions are stretched to fill the gap between each border.<br/>- `repeat`<br/>  - : The source image's edge regions are tiled (repeated) to fill the gap between each border. Tiles may be clipped to achieve the proper fit.<br/>- `round`<br/>  - : The source image's edge regions are tiled (repeated) to fill the gap between each border. Tiles may be stretched to achieve the proper fit.<br/>- `space`<br/>  - : The source image's edge regions are tiled (repeated) to fill the gap between each border. Extra space will be distributed in between tiles to achieve the proper fit.<br/><br/>## Formal definition<br/><br/>{{CSSInfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Repeating border images<br/><br/>#### CSS<br/><br/>```css<br/>#bordered {<br/>  width: 12rem;<br/>  margin-bottom: 1rem;<br/>  padding: 1rem;<br/>  border: 40px solid;<br/>  border-image: url(border.png) 27;<br/>  border-image-repeat: stretch;  /* Can be changed in the live sample */<br/>}<br/>```<br/><br/>```html hidden<br/><div id=bordered>You can try out various border repetition rules on me!</div><br/><br/><select id=repetition><br/>  <option value=stretch>stretch</option><br/>  <option value=repeat>repeat</option><br/>  <option value=round>round</option><br/>  <option value=space>space</option><br/>  <option value=stretch repeat>stretch repeat</option><br/>  <option value=space round>space round</option><br/></select><br/>```<br/><br/>```js hidden<br/>var repetition = document.getElementById(repetition);<br/>repetition.addEventListener(change, function (evt) {<br/>  document.getElementById(bordered).style.borderImageRepeat = evt.target.value;<br/>});<br/>```<br/><br/>#### Results<br/><br/>{{EmbedLiveSample(Repeating_border_images, auto, 200)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [Backgrounds and borders](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders)<br/>- [Learn CSS: Backgrounds and borders](/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)<br/>