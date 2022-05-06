## ✔️ zoom 
 ---<br/>title: zoom<br/>slug: Web/CSS/zoom<br/>tags:<br/>  - CSS<br/>  - CSS Property<br/>  - Non-standard<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.zoom<br/>---<br/>{{CSSRef}}{{Non-standard_header}}<br/><br/>The non-standard **_`zoom`_** [CSS](/en-US/docs/Web/CSS) property can be used to control the magnification level of an element. {{cssxref(transform-function/scale, transform: scale())}} should be used instead of this property, if possible. However, unlike CSS Transforms, `zoom` affects the layout size of the element.<br/><br/>```css<br/>/* Keyword values */<br/>zoom: normal;<br/>zoom: reset;<br/><br/>/* <percentage> values */<br/>zoom: 50%;<br/>zoom: 200%;<br/><br/>/* <number> values */<br/>zoom: 1.1;<br/>zoom: 0.7;<br/><br/>/* Global values */<br/>zoom: inherit;<br/>zoom: initial;<br/>zoom: revert;<br/>zoom: revert-layer;<br/>zoom: unset;<br/>```<br/><br/>## Syntax<br/><br/>### Values<br/><br/>- `normal`<br/>  - : Render this element at its normal size.<br/>- `reset` {{non-standard_inline}}<br/><br/>  - : Do not (de)magnify this element if the user applies non-pinch-based zooming (e.g. by pressing <kbd>Ctrl</kbd> \- <kbd>-</kbd> or <kbd>Ctrl</kbd> \+ <kbd>+</kbd> keyboard shortcuts) to the document. Only supported by WebKit (and possibly Blink).<br/><br/>- {{cssxref(&lt;percentage&gt;)}}<br/>  - : Zoom factor. `100%` is equivalent to `normal`. Values larger than `100%` zoom in. Values smaller than `100%` zoom out.<br/>- {{cssxref(&lt;number&gt;)}}<br/>  - : Zoom factor. Equivalent to the corresponding percentage (`1.0` = `100%` = `normal`). Values larger than `1.0` zoom in. Values smaller than `1.0` zoom out.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### First example<br/><br/>#### HTML<br/><br/>```html<br/><p class=small>Small</p><br/><p class=normal>Normal</p><br/><p class=big>Big</p><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>p.small {<br/>  zoom: 75%;<br/>}<br/>p.normal {<br/>  zoom: normal;<br/>}<br/>p.big {<br/>  zoom: 2.5;<br/>}<br/>p {<br/>  display: inline-block;<br/>}<br/>p:hover {<br/>  zoom: reset;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample('First_example')}}<br/><br/>### Second example<br/><br/>#### HTML<br/><br/>```html<br/><div id=a class=circle></div><br/><div id=b class=circle></div><br/><div id=c class=circle></div><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>div.circle {<br/>  width: 25px;<br/>  height: 25px;<br/>  border-radius: 100%;<br/>  text-align: center;<br/>  vertical-align: middle;<br/>  display: inline-block;<br/>  zoom: 1.5;<br/>}<br/>div#a {<br/>  background-color: gold;<br/>  zoom: normal;<br/>}<br/>div#b {<br/>  background-color: green;<br/>  zoom: 200%;<br/>}<br/>div#c {<br/>  background-color: blue;<br/>  zoom: 2.9;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample('Second_example')}}<br/><br/>## Specifications<br/><br/>Not part of any standard. This property originated in Internet Explorer. Apple has [a description in the Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW15). Rossen Atanassov of Microsoft has [an unofficial draft specification proposal on GitHub](https://cdn.jsdelivr.net/gh/atanassov/css-zoom@master/Overview.html).<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [`zoom` entry in CSS-Tricks' CSS Almanac](https://css-tricks.com/almanac/properties/z/zoom/)<br/>- The `zoom` viewport descriptor used with [`@viewport`](/en-US/docs/Web/CSS/@viewport)<br/>- [Bug 390936: Implement Internet Explorer `zoom` property for CSS](https://bugzilla.mozilla.org/show_bug.cgi?id=390936) on the Firefox issue tracker Bugzilla<br/>