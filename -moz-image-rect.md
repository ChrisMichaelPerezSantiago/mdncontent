## ✔️ -moz-image-rect 
 ---<br/>title: '-moz-image-rect'<br/>slug: Web/CSS/-moz-image-rect<br/>tags:<br/>  - CSS<br/>  - CSS Function<br/>  - CSS Images<br/>  - CSS:Mozilla Extensions<br/>  - Function<br/>  - Non-standard<br/>  - Reference<br/>browser-compat: css.types.-moz-image-rect<br/>---<br/>{{CSSRef}}{{Non-standard_Header}}<br/><br/>The **`-moz-image-rect`** value for [CSS](/en-US/docs/Web/CSS) {{CSSxRef(background-image)}} lets you use a portion of a larger image as a background.<br/><br/>## Syntax<br/><br/>```css<br/>-moz-image-rect({{CSSxRef(url, url())}}, top, right, bottom, left);<br/>```<br/><br/>### Values<br/><br/>- {{CSSxRef(url, url())}}<br/>  - : The URI of the image from which to take the sub-image.<br/>- `top`<br/>  - : The top edge, specified as an {{CSSxRef(&lt;integer&gt;)}} or {{CSSxRef(&lt;percentage&gt;)}}, of the sub-image within the specified image.<br/>- `right`<br/>  - : The right edge, specified as an {{CSSxRef(&lt;integer&gt;)}} or {{CSSxRef(&lt;percentage&gt;)}}, of the sub-image within the specified image.<br/>- `bottom`<br/>  - : The bottom edge, specified as an {{CSSxRef(&lt;integer&gt;)}} or {{CSSxRef(&lt;percentage&gt;)}}, of the sub-image within the specified image.<br/>- `left`<br/>  - : The left edge, specified as an {{CSSxRef(&lt;integer&gt;)}} or {{CSSxRef(&lt;percentage&gt;)}}, of the sub-image within the specified image.<br/><br/>## Description<br/><br/>This property allows you to, for example, use different parts of one larger image as backgrounds in different parts of your content.<br/><br/>This works very similarly to the {{CSSxRef(-moz-image-region)}} property, which is used with the {{CSSxRef(list-style-image)}} property to use parts of an image as the bullets in lists. However, this can be used for any CSS background.<br/><br/>The syntax for the rectangle is similar to the [`rect()`](/en-US/docs/Web/CSS/shape#syntax) function generating a {{CSSxRef(&lt;shape&gt;)}} CSS type. All four values are relative to the upper left corner of the image.<br/><br/>## Examples<br/><br/>This example loads an image and uses it in four segments to draw the Firefox logo in four {{HTMLElement(div)}} blocks. Clicking on their container causes the four segments to rotate around by swapping the {{CSSxRef(background-image)}} property values among the four {{HTMLElement(div)}} blocks.<br/><br/>### CSS<br/><br/>The CSS defines one container style, then the styles for the four boxes that comprise the complete image.<br/><br/>The container looks like this:<br/><br/>```css<br/>#container {<br/>  width:267px;<br/>  height:272px;<br/>  top:100px;<br/>  left:100px;<br/>  position:absolute;<br/>  font-size:16px;<br/>  text-shadow:white 0px 0px 6px;<br/>  text-align:center;<br/>}<br/>```<br/><br/>Then the four boxes defining the segments of the image are defined. Let's look at them one at a time.<br/><br/>```css<br/>#box1 {<br/>  background-image: -moz-image-rect(url(firefox.png), 0%, 50%, 50%, 0%);<br/>  width:133px;<br/>  height:136px;<br/>  position:absolute;<br/>}<br/>```<br/><br/>This is the top-left corner of the image. It defines a rectangle containing the top-left quarter of the image in the file `firefox.jpg`.<br/><br/>```css<br/>#box2 {<br/>  background-image: -moz-image-rect(url(firefox.png), 0%, 100%, 50%, 50%);<br/>  width:133px;<br/>  height:136px;<br/>  position:absolute;<br/>}<br/>```<br/><br/>This defines the top-right corner of the image.<br/><br/>The other corners follow a similar pattern:<br/><br/>```css<br/>#box3 {<br/>  background-image: -moz-image-rect(url(firefox.png), 50%, 50%, 100%, 0%);<br/>  width:133px;<br/>  height:136px;<br/>  position:absolute;<br/>}<br/>#box4 {<br/>  background-image: -moz-image-rect(url(firefox.png), 50%, 100%, 100%, 50%);<br/>  width:133px;<br/>  height:136px;<br/>  position:absolute;<br/>}<br/>```<br/><br/>### HTML<br/><br/>The HTML is quite simple:<br/><br/>```html<br/><div id=container onclick=rotate()><br/>  <div id=box1 style=left:0px;top:0px;>Top left</div><br/>  <div id=box2 style=left:133px;top:0px;>Top right</div><br/>  <div id=box3 style=left:0px;top:136px;>Bottom left</div><br/>  <div id=box4 style=left:133px;top:136px;>Bottom right</div><br/></div><br/>```<br/><br/>This places the four segments of our image in a two-by-two box grid. These four segments are all contained within a larger {{HTMLElement(div)}} block whose primary purpose is to receive click events and dispatch them to our JavaScript code.<br/><br/>### The JavaScript code<br/><br/>This code handles the click event when the container receives a mouse click.<br/><br/>```js<br/>function rotate() {<br/>  var prevStyle = window.getComputedStyle(document.getElementById(box4), null).getPropertyValue(background-image);<br/><br/>  // Now that we've saved the last one, start rotating<br/><br/>  for (var i=1; i<=4; i++) {<br/>    var curId = box + i;<br/><br/>    // Shift the background images<br/><br/>    var curStyle = window.getComputedStyle(document.getElementById(curId), null).getPropertyValue(background-image);<br/>    document.getElementById(curId).style.backgroundImage = prevStyle;<br/>    prevStyle = curStyle;<br/>  }<br/>}<br/>```<br/><br/>This uses {{DOMxRef(window.getComputedStyle())}} to fetch the style of each element, shifting it to the following element. Notice that before it begins doing so it saves a copy of the last box's style since it will be overwritten by the third element's style. By copying the values of the {{CSSxRef(background-image)}} property from one element to the next with each mouse click, we achieve the desired effect.<br/><br/>### What it looks like<br/><br/>{{EmbedLiveSample(Examples,400,400)}}<br/><br/>## Specifications<br/><br/>Not part of any standard.<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [Mozilla CSS extensions](/en-US/docs/Web/CSS/Mozilla_Extensions)<br/>- [CSS Backgrounds and Borders module](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders)<br/>