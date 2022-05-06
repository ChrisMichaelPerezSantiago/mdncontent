## ✔️ mask-border-source 
 ---<br/>title: mask-border-source<br/>slug: Web/CSS/mask-border-source<br/>tags:<br/>  - CSS<br/>  - CSS Masking<br/>  - CSS Property<br/>  - NeedsCompatTable<br/>  - NeedsExample<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.mask-border-source<br/>---<br/>{{CSSRef}}<br/><br/>The **`mask-border-source`** [CSS](/en-US/docs/Web/CSS) property sets the source image used to create an element's [mask border](/en-US/docs/Web/CSS/mask-border).<br/><br/>The {{cssxref(mask-border-slice)}} property is used to divide the source image into regions, which are then dynamically applied to the final mask border.<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword value */<br/>mask-border-source: none;<br/><br/>/* <image> values */<br/>mask-border-source: url(image.jpg);<br/>mask-border-source: linear-gradient(to top, red, yellow);<br/><br/>/* Global values */<br/>mask-border-source: inherit;<br/>mask-border-source: initial;<br/>mask-border-source: revert;<br/>mask-border-source: revert-layer;<br/>mask-border-source: unset;<br/>```<br/><br/>### Values<br/><br/>- `none`<br/>  - : No mask border is used.<br/>- {{cssxref(&lt;image&gt;)}}<br/>  - : Image reference to use for the mask border.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Basic usage<br/><br/>This property doesn't appear to be supported anywhere yet. When it eventually starts to be supported, it will serve to define the source of the border mask.<br/><br/>```css<br/>mask-border-source: url(image.jpg);<br/>```<br/><br/>Chromium-based browsers support an outdated version of this property — `mask-box-image-source` — with a prefix:<br/><br/>```css<br/>-webkit-mask-box-image-source: url(image.jpg);<br/>```<br/><br/>> **Note:** The [`mask-border`](/en-US/docs/Web/CSS/mask-border) page features a working example (using the out-of-date prefixed border mask properties supported in Chromium), so you can get an idea of the effect.<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{cssxref(mask-border)}}<br/>- {{cssxref(mask-border-mode)}}<br/>- {{cssxref(mask-border-outset)}}<br/>- {{cssxref(mask-border-repeat)}}<br/>- {{cssxref(mask-border-width)}}<br/>