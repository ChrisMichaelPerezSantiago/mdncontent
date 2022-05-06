## ✔️ mask-border 
 ---<br/>title: mask-border<br/>slug: Web/CSS/mask-border<br/>tags:<br/>  - CSS<br/>  - CSS Masking<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-shorthand-property<br/>browser-compat: css.properties.mask-border<br/>---<br/>{{CSSRef}}<br/><br/>The **`mask-border`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) lets you create a mask along the edge of an element's border.<br/><br/>## Constituent properties<br/><br/>This property is a shorthand for the following CSS properties:<br/><br/>- [`mask-border-mode`](/en-US/docs/Web/CSS/mask-border-mode)<br/>- [`mask-border-outset`](/en-US/docs/Web/CSS/mask-border-outset)<br/>- [`mask-border-repeat`](/en-US/docs/Web/CSS/mask-border-repeat)<br/>- [`mask-border-slice`](/en-US/docs/Web/CSS/mask-border-slice)<br/>- [`mask-border-source`](/en-US/docs/Web/CSS/mask-border-source)<br/>- [`mask-border-width`](/en-US/docs/Web/CSS/mask-border-width)<br/><br/>## Syntax<br/><br/>```css<br/>/* source | slice */<br/>mask-border: url('border-mask.png') 25;<br/><br/>/* source | slice | repeat */<br/>mask-border: url('border-mask.png') 25 space;<br/><br/>/* source | slice | width */<br/>mask-border: url('border-mask.png') 25 / 35px;<br/><br/>/* source | slice | width | outset | repeat | mode */<br/>mask-border: url('border-mask.png') 25 / 35px / 12px space alpha;<br/><br/>/* Global values */<br/>mask-border: inherit;<br/>mask-border: initial;<br/>mask-border: revert;<br/>mask-border: revert-layer;<br/>mask-border: unset;<br/>```<br/><br/>### Values<br/><br/>- `<'mask-border-source'>`<br/>  - : The source image. See {{cssxref(mask-border-source)}}.<br/>- `<'mask-border-slice'>`<br/>  - : The dimensions for slicing the source image into regions. Up to four values may be specified. See {{cssxref(mask-border-slice)}}.<br/>- `<'mask-border-width'>`<br/>  - : The width of the border mask. Up to four values may be specified. See {{cssxref(mask-border-width)}}.<br/>- `<'mask-border-outset'>`<br/>  - : The distance of the border mask from the element's outside edge. Up to four values may be specified. See {{cssxref(mask-border-outset)}}.<br/>- `<'mask-border-repeat'>`<br/>  - : Defines how the edge regions of the source image are adjusted to fit the dimensions of the border mask. Up to two values may be specified. See {{cssxref(mask-border-repeat)}}.<br/>- `<'mask-border-mode'>`<br/>  - : Defines whether the source image is treated as a luminance mask or alpha mask. See {{cssxref(mask-border-mode)}}.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Setting a bitmap-based mask border<br/><br/>In this example, we will mask an element's border with a diamond pattern. The source for the mask is a .png file of 90 by 90 pixels, with three diamonds going vertically and horizontally:<br/><br/>![](mask-border-diamonds.png)<br/><br/>To match the size of a single diamond, we will use a value of 90 divided by 3, or `30`, for slicing the image into corner and edge regions. A repeat value of `round` will make the mask slices fit evenly, i.e., without clipping or gaps.<br/><br/>{{EmbedGHLiveSample(css-examples/masking/mask-border.html, '100%', 800)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{cssxref(mask-border-mode)}}<br/>- {{cssxref(mask-border-outset)}}<br/>- {{cssxref(mask-border-repeat)}}<br/>- {{cssxref(mask-border-source)}}<br/>- {{cssxref(mask-border-width)}}<br/>