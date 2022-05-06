## ✔️ mask-clip 
 ---<br/>title: mask-clip<br/>slug: Web/CSS/mask-clip<br/>tags:<br/>  - CSS<br/>  - CSS Masking<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.mask-clip<br/>---<br/>{{CSSRef}}<br/><br/>The **`mask-clip`** [CSS](/en-US/docs/Web/CSS) property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.<br/><br/>```css<br/>/* <geometry-box> values */<br/>mask-clip: content-box;<br/>mask-clip: padding-box;<br/>mask-clip: border-box;<br/>mask-clip: margin-box;<br/>mask-clip: fill-box;<br/>mask-clip: stroke-box;<br/>mask-clip: view-box;<br/><br/>/* Keyword values */<br/>mask-clip: no-clip;<br/><br/>/* Non-standard keyword values */<br/>-webkit-mask-clip: border;<br/>-webkit-mask-clip: padding;<br/>-webkit-mask-clip: content;<br/>-webkit-mask-clip: text;<br/><br/>/* Multiple values */<br/>mask-clip: padding-box, no-clip;<br/>mask-clip: view-box, fill-box, border-box;<br/><br/>/* Global values */<br/>mask-clip: inherit;<br/>mask-clip: initial;<br/>mask-clip: revert;<br/>mask-clip: revert-layer;<br/>mask-clip: unset;<br/>```<br/><br/>## Syntax<br/><br/>One or more of the keyword values listed below, separated by commas.<br/><br/>### Values<br/><br/>- `content-box`<br/>  - : The painted content is clipped to the content box.<br/>- `padding-box`<br/>  - : The painted content is clipped to the padding box.<br/>- `border-box`<br/>  - : The painted content is clipped to the border box.<br/>- `margin-box`<br/>  - : The painted content is clipped to the margin box.<br/>- `fill-box`<br/>  - : The painted content is clipped to the object bounding box.<br/>- `stroke-box`<br/>  - : The painted content is clipped to the stroke bounding box.<br/>- `view-box`<br/>  - : Uses the nearest SVG viewport as reference box. If a [`viewBox`](/en-US/docs/Web/SVG/Attribute/viewBox) attribute is specified for the element creating the SVG viewport, the reference box is positioned at the origin of the coordinate system established by the `viewBox` attribute and the dimension of the reference box is set to the width and height values of the `viewBox` attribute.<br/>- `no-clip`<br/>  - : The painted content is not clipped.<br/>- `border`{{non-standard_inline}}<br/>  - : This keyword behaves the same as `border-box`.<br/>- `padding`{{non-standard_inline}}<br/>  - : This keyword behaves the same as `padding-box`.<br/>- `content`{{non-standard_inline}}<br/>  - : This keyword behaves the same as `content-box`.<br/>- `text`{{non-standard_inline}}<br/>  - : This keyword clips the mask image to the text of the element.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Clipping a mask to the border box<br/><br/>Change the `mask-clip` value to any of the allowed values detailed above. If viewing the example in a Chromium-based browser change the value of `-webkit-mask-clip`.<br/><br/>{{EmbedGHLiveSample(css-examples/masking/mask-clip.html, '100%', 800)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)<br/>