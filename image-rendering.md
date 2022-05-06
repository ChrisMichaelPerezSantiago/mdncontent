## ✔️ image-rendering 
 ---<br/>title: image-rendering<br/>slug: Web/CSS/image-rendering<br/>tags:<br/>  - CSS<br/>  - CSS Images<br/>  - CSS Property<br/>  - Reference<br/>  - image-rendering<br/>  - recipe:css-property<br/>browser-compat: css.properties.image-rendering<br/>---<br/>{{CSSRef}}<br/><br/>The **`image-rendering`** [CSS](/en-US/docs/Web/CSS) property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.<br/><br/>{{EmbedInteractiveExample(pages/css/image-rendering.html)}}<br/><br/>The {{Glossary(user agent)}} will scale an image when the page author specifies dimensions other than its natural size. Scaling may also occur due to user interaction (zooming). For example, if the natural size of an image is `100×100px`_,_ but its actual dimensions are `200×200px` (or `50×50px`), then the image will be upscaled (or downscaled) using the algorithm specified by `image-rendering`. This property has no effect on non-scaled images.<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword values */<br/>image-rendering: auto;<br/>image-rendering: crisp-edges;<br/>image-rendering: pixelated;<br/><br/>/* Global values */<br/>image-rendering: inherit;<br/>image-rendering: initial;<br/>image-rendering: revert;<br/>image-rendering: revert-layer;<br/>image-rendering: unset;<br/>```<br/><br/>### Values<br/><br/>- `auto`<br/>  - : The scaling algorithm is UA dependent. Since version 1.9 (Firefox 3.0), Gecko uses _bilinear_ resampling (high quality).<br/>- `smooth` {{Experimental_Inline}}<br/>  - : The image should be scaled with an algorithm that maximizes the appearance of the image. In particular, scaling algorithms that smooth colors are acceptable, such as bilinear interpolation. This is intended for images such as photos.<br/>- `high-quality` {{Experimental_Inline}}<br/>  - : Identical to `smooth`, but with a preference for higher-quality scaling. If system resources are constrained, images with `high-quality` should be prioritized over those with any other value, when considering which images to degrade the quality of and to what degree.<br/>- `crisp-edges`<br/>  - : The image is scaled with the nearest-neighbor algorithm.<br/>- `pixelated`<br/>  - : Using the nearest-neighbor algorithm, the image is scaled up to the next integer multiple that is greater than or equal to its original size, then scaled down to the target size, as for `smooth`. When scaling up to integer multiples of the original size, this will have the same effect as `crisp-edges`.<br/><br/>> **Note:** The values `optimizeQuality` and `optimizeSpeed` present in an early draft (and coming from its SVG counterpart {{SVGAttr(image-rendering)}}) are defined as synonyms for the `smooth` and `pixelated` values respectively.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Setting image scaling algorithms<br/><br/>In practical use, the `pixelated` and `crisp-edges` rules can be combined to provide some fallback for each other. (Just prepend the actual rules with the fallback.) The [Canvas API](/en-US/docs/Web/API/Canvas_API) can provide a [fallback solution for `pixelated`](http://phrogz.net/tmp/canvas_image_zoom.html) through manual image data manipulation or with [`imageSmoothingEnabled`](/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled).<br/><br/>```html hidden<br/><div><br/>  <img class=auto alt=auto src=blumen.jpg /><br/>  <img class=pixelated alt=pixelated src=blumen.jpg /><br/>  <img class=crisp-edges alt=crisp-edges src=blumen.jpg /><br/></div><br/>```<br/><br/>```css hidden<br/>img {<br/>  height: 200px;<br/>}<br/>```<br/><br/>#### CSS<br/><br/>```css<br/>.auto {<br/>  image-rendering: auto;<br/>}<br/><br/>.pixelated {<br/>  -ms-interpolation-mode: nearest-neighbor;<br/>  image-rendering: pixelated;<br/>}<br/><br/>.crisp-edges {<br/>  image-rendering: -webkit-optimize-contrast;<br/>  image-rendering: crisp-edges;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample('Setting_image_scaling_algorithms')}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>> **Note:** Although `crisp-edges` is supposed to use a pixel-art scaler like in the specification example, in practice no browsers (as of January 2020) do so. [In Firefox](https://searchfox.org/mozilla-central/rev/5fd4cfacc90ddd975c82ba27fdc56f4187b3f180/gfx/wr/webrender/src/resource_cache.rs#1727), `crisp-edges` is interpreted as nearest-neighbor, `pixelated` is not supported, and `auto` is interpolated as trilinear or linear.<br/>><br/>> For behavior on Chromium and Safari (WebKit), see the [`GetInterpolationQuality`](https://cs.chromium.org/chromium/src/third_party/blink/renderer/core/style/computed_style.cc?type=cs&q=GetInterpolationQuality&g=0&l=1160) function and [`CSSPrimitiveValue::operator ImageRendering()`](https://github.com/WebKit/webkit/blob/9b169b6c85394d94f172e5d75ca2f6c74830e99c/Source/WebCore/css/CSSPrimitiveValueMappings.h#L4324) respectively.<br/><br/>## See also<br/><br/>- Other image-related CSS properties: {{cssxref(object-fit)}}, {{cssxref(object-position)}}, {{cssxref(image-orientation)}}, {{cssxref(image-rendering)}}, {{cssxref(image-resolution)}}.<br/>