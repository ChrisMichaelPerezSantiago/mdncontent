## ✔️ mask 
 ---<br/>title: mask<br/>slug: Web/CSS/mask<br/>tags:<br/>  - CSS<br/>  - CSS Masking<br/>  - CSS Property<br/>  - Layout<br/>  - Reference<br/>  - SVG<br/>  - Web<br/>  - recipe:css-shorthand-property<br/>browser-compat: css.properties.mask<br/>---<br/>{{CSSRef}}<br/><br/>The **`mask`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) hides an element (partially or fully) by masking or clipping the image at specific points.<br/><br/>> **Note:** As well as the properties listed below, the `mask` shorthand also resets {{cssxref(mask-border)}} to its initial value. It is therefore recommended to use the `mask` shorthand rather than other shorthands or the individual properties to override any mask settings earlier in the cascade. This will ensure that `mask-border` has also been reset to allow the new styles to take effect.<br/><br/>## Constituent properties<br/><br/>This property is a shorthand for the following CSS properties:<br/><br/>- [`mask-clip`](/en-US/docs/Web/CSS/mask-clip)<br/>- [`mask-composite`](/en-US/docs/Web/CSS/mask-composite)<br/>- [`mask-image`](/en-US/docs/Web/CSS/mask-image)<br/>- [`mask-mode`](/en-US/docs/Web/CSS/mask-mode)<br/>- [`mask-origin`](/en-US/docs/Web/CSS/mask-origin)<br/>- [`mask-position`](/en-US/docs/Web/CSS/mask-position)<br/>- [`mask-repeat`](/en-US/docs/Web/CSS/mask-repeat)<br/>- [`mask-size`](/en-US/docs/Web/CSS/mask-size)<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword values */<br/>mask: none;<br/><br/>/* Image values */<br/>mask: url(mask.png);                       /* Pixel image used as mask */<br/>mask: url(masks.svg#star);                 /* Element within SVG graphic used as mask */<br/><br/>/* Combined values */<br/>mask: url(masks.svg#star) luminance;       /* Element within SVG graphic used as luminance mask */<br/>mask: url(masks.svg#star) 40px 20px;       /* Element within SVG graphic used as mask positioned 40px from the top and 20px from the left */<br/>mask: url(masks.svg#star) 0 0/50px 50px;   /* Element within SVG graphic used as mask with a width and height of 50px */<br/>mask: url(masks.svg#star) repeat-x;        /* Element within SVG graphic used as horizontally repeated mask */<br/>mask: url(masks.svg#star) stroke-box;      /* Element within SVG graphic used as mask extending to the box enclosed by the stroke */<br/>mask: url(masks.svg#star) exclude;         /* Element within SVG graphic used as mask and combined with background using non-overlapping parts */<br/><br/>/* Global values */<br/>mask: inherit;<br/>mask: initial;<br/>mask: revert;<br/>mask: revert-layer;<br/>mask: unset;<br/><br/>/* Multiple masks */<br/>mask: url(masks.svg#star) left / 16px repeat-y,    /* Element within SVG graphic is used as a mask on the left-hand side with a width of 16px */<br/>      url(masks.svg#circle) right / 16px repeat-y; /* Element within SVG graphic is used as a mask on the right-hand side with a width of 16px */<br/>```<br/><br/>### Values<br/><br/>- `<mask-reference>`<br/>  - : Sets the mask image source. See {{cssxref(mask-image)}}.<br/>- `<masking-mode>`<br/>  - : Sets the masking mode of the mask image. See {{cssxref(mask-mode)}}.<br/>- `<position>`<br/>  - : Sets the position of the mask image. See {{cssxref(mask-position)}}.<br/>- `<bg-size>`<br/>  - : Sets the size of the mask image. See {{cssxref(mask-size)}}.<br/>- `<repeat-style>`<br/>  - : Sets the repetition of the mask image. See {{cssxref(mask-repeat)}}.<br/>- `<geometry-box>`<br/>  - : If only one `<geometry-box>` value is given, it sets both {{cssxref(mask-origin)}} and {{cssxref(mask-clip)}}. If two `<geometry-box>` values are present, then the first sets {{cssxref(mask-origin)}} and the second sets {{cssxref(mask-clip)}}.<br/>- `<geometry-box> | no-clip`<br/>  - : Sets the area that is affected by the mask image. See {{cssxref(mask-clip)}}.<br/>- `<compositing-operator>`<br/>  - : Sets the compositing operation used on the current mask layer. See {{cssxref(mask-composite)}}.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Masking an image<br/><br/>```css<br/>.target {<br/>  mask: url(#c1) luminance;<br/>}<br/><br/>.anothertarget {<br/>  mask: url(resources.svg#c1) 50px 30px/10px 10px repeat-x exclude;<br/>}<br/>```<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{Cssxref(clip-path)}}, {{Cssxref(filter)}}<br/>- [CSS Shapes, clipping and masking – and how to use them](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)<br/>- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)<br/>- [SVG](/en-US/docs/Web/SVG)<br/>