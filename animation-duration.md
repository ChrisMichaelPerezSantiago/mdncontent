## ✔️ animation-duration 
 ---<br/>title: animation-duration<br/>slug: Web/CSS/animation-duration<br/>tags:<br/>  - CSS<br/>  - CSS Animations<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.animation-duration<br/>---<br/>{{CSSRef}}<br/><br/>The **`animation-duration`** [CSS](/en-US/docs/Web/CSS) property sets the length of time that an animation takes to complete one cycle.<br/><br/>{{EmbedInteractiveExample(pages/css/animation-duration.html)}}<br/><br/>It is often convenient to use the shorthand property {{ cssxref(animation) }} to set all animation properties at once.<br/><br/>## Syntax<br/><br/>```css<br/>/* Single animation */<br/>animation-duration: 6s;<br/>animation-duration: 120ms;<br/><br/>/* Multiple animations */<br/>animation-duration: 1.64s, 15.22s;<br/>animation-duration: 10s, 35s, 230ms;<br/><br/>/* Global values */<br/>animation-duration: inherit;<br/>animation-duration: initial;<br/>animation-duration: revert;<br/>animation-duration: revert-layer;<br/>animation-duration: unset;<br/>```<br/><br/>### Values<br/><br/>- `{{cssxref(&lt;time&gt;)}}`<br/>  - : The time that an animation takes to complete one cycle. This may be specified in either seconds (`s`) or milliseconds (`ms`). The value must be positive or zero and the unit is required. A value of `0s`, which is the default value, indicates that no animation should occur.<br/><br/>> **Note:** Negative values are invalid, causing the declaration to be ignored. Some early, prefixed, implementations may consider them as identical to `0s`.<br/><br/>> **Note:** When you specify multiple comma-separated values on an `animation-*` property, they will be assigned to the animations specified in the {{cssxref(animation-name)}} property in different ways depending on how many there are. For more information, see [Setting multiple animation property values](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#setting_multiple_animation_property_values).<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### The animation has an animation-duration of 0.7 seconds<br/><br/>#### HTML<br/><br/>```html<br/><div class=box></div><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>.box {<br/>  background-color: rebeccapurple;<br/>  border-radius: 10px;<br/>  width: 100px;<br/>  height: 100px;<br/>  animation-name: rotate;<br/>  animation-duration: 0.7s;<br/>}<br/><br/>@keyframes rotate {<br/>  0% {<br/>    transform: rotate(0);<br/>  }<br/>  100% {<br/>    transform: rotate(360deg);<br/>  }<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Examples,100%,250)}}<br/><br/>See [CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) for more examples.<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [Using CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)<br/>- JavaScript {{domxref(AnimationEvent)}} API<br/>