## ✔️ mask-mode 
 ---<br/>title: mask-mode<br/>slug: Web/CSS/mask-mode<br/>tags:<br/>  - CSS<br/>  - CSS Masking<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.mask-mode<br/>---<br/>{{CSSRef}}<br/><br/>The **`mask-mode`** [CSS](/en-US/docs/Web/CSS) property sets whether the mask reference defined by {{cssxref(mask-image)}} is treated as a luminance or alpha mask.<br/><br/>```css<br/>/* Keyword values */<br/>mask-mode: alpha;<br/>mask-mode: luminance;<br/>mask-mode: match-source;<br/><br/>/* Multiple values */<br/>mask-mode: alpha, match-source;<br/><br/>/* Global values */<br/>mask-mode: inherit;<br/>mask-mode: initial;<br/>mask-mode: revert;<br/>mask-mode: revert-layer;<br/>mask-mode: unset;<br/>```<br/><br/>## Syntax<br/><br/>The `mask-mode` property is specified as one or more of the keyword values listed below, separated by commas.<br/><br/>### Values<br/><br/>- `alpha`<br/>  - : This keyword indicates that the transparency (alpha channel) values of the mask layer image should be used as the mask values.<br/>- `luminance`<br/>  - : This keyword indicates that the luminance values of the mask layer image should be used as the mask values.<br/>- `match-source`<br/><br/>  - : If the {{cssxref(mask-image)}} property is of type `<mask-source>`, the luminance values of the mask layer image should be used as the mask values.<br/><br/>    If it is of type {{cssxref(&lt;image&gt;)}}, the alpha values of the mask layer image should be used as the mask values.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Using alpha mask mode<br/><br/>{{EmbedGHLiveSample(css-examples/masking/mask-mode.html, '100%', 760)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)<br/>