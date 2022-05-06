## ✔️ background-image 
 ---<br/>title: background-image<br/>slug: Web/CSS/background-image<br/>tags:<br/>  - CSS<br/>  - CSS Background<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.background-image<br/>---<br/>{{CSSRef}}<br/><br/>The **`background-image`** [CSS](/en-US/docs/Web/CSS) property sets one or more background images on an element.<br/><br/>{{EmbedInteractiveExample(pages/css/background-image.html)}}<br/><br/>The background images are drawn on stacking context layers on top of each other. The first layer specified is drawn as if it is closest to the user.<br/><br/>The [borders](/en-US/docs/Web/CSS/border) of the element are then drawn on top of them, and the {{cssxref(background-color)}} is drawn beneath them. How the images are drawn relative to the box and its borders is defined by the {{cssxref(background-clip)}} and {{cssxref(background-origin)}} CSS properties.<br/><br/>If a specified image cannot be drawn (for example, when the file denoted by the specified URI cannot be loaded), browsers handle it as they would a `none` value.<br/><br/>> **Note:** Even if the images are opaque and the color won't be displayed in normal circumstances, web developers should always specify a {{cssxref(background-color)}}. If the images cannot be loaded—for instance, when the network is down—the background color will be used as a fallback.<br/><br/>## Syntax<br/><br/>Each background image is specified either as the keyword `none` or as an {{cssxref(&lt;image&gt;)}} value.<br/><br/>To specify multiple background images, supply multiple values, separated by a comma:<br/><br/>```css<br/>background-image:<br/>  linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5)),<br/>  url('catfront.png');<br/><br/>/* Global values */<br/>background-image: inherit;<br/>background-image: initial;<br/>background-image: revert;<br/>background-image: revert-layer;<br/>background-image: unset;<br/>```<br/><br/>### Values<br/><br/>- `none`<br/>  - : Is a keyword denoting the absence of images.<br/>- `<image>`<br/>  - : Is an {{cssxref(&lt;image&gt;)}} denoting the image to display. There can be several of them, separated by commas, as [multiple backgrounds](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds) are supported.<br/><br/>## Accessibility concerns<br/><br/>Browsers do not provide any special information on background images to assistive technology. This is important primarily for screen readers, as a screen reader will not announce its presence and therefore convey nothing to its users. If the image contains information critical to understanding the page's overall purpose, it is better to describe it semantically in the document.<br/><br/>- [MDN Understanding WCAG, Guideline 1.1 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_%e2%80%94_providing_text_alternatives_for_non-text_content)<br/>- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Layering background images<br/><br/>Note that the star image is partially transparent and is layered over the cat image.<br/><br/>#### HTML<br/><br/>```html<br/><div><br/>  <p class=catsandstars><br/>    This paragraph is full of cats<br />and stars.<br/>  </p><br/>  <p>This paragraph is not.</p><br/>  <p class=catsandstars><br/>    Here are more cats for you.<br />Look at them!<br/>  </p><br/>  <p>And no more.</p><br/></div><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>p {<br/>  font-size: 1.5em;<br/>  color: #FE7F88;<br/>  background-image: none;<br/>  background-color: transparent;<br/>}<br/><br/>div {<br/>  background-image:<br/>      url(mdn_logo_only_color.png);<br/>}<br/><br/>.catsandstars {<br/>  background-image:<br/>      url(startransparent.gif),<br/>      url(catfront.png);<br/>  background-color: transparent;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample('Layering_background_images')}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [Implementing image sprites in CSS](/en-US/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS)<br/>- {{HTMLElement(img)}}<br/>- Image-related data types: {{cssxref(&lt;image&gt;)}}, {{cssxref(&lt;gradient&gt;)}}<br/>- Image-related functions:<br/><br/>  - {{cssxref(cross-fade, cross-fade())}}<br/>  - {{cssxref(element, element())}}<br/>  - {{cssxref(image/image, image())}}<br/>  - {{cssxref(image/image-set, image-set())}}<br/>  - {{cssxref(gradient/linear-gradient, linear-gradient())}}<br/>  - {{cssxref(gradient/radial-gradient, radial-gradient())}}<br/>  - {{cssxref(gradient/conic-gradient, conic-gradient())}}<br/>  - {{cssxref(gradient/repeating-linear-gradient, repeating-linear-gradient())}}<br/>  - {{cssxref(gradient/repeating-radial-gradient, repeating-radial-gradient())}}<br/>  - {{cssxref(gradient/repeating-conic-gradient, repeating-conic-gradient())}}<br/>  - {{cssxref(image/paint, paint())}}<br/>  - {{cssxref(url, url())}}<br/>