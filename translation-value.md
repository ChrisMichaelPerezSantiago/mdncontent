## ✔️ translation-value 
 ---<br/>title: <translation-value><br/>slug: Web/CSS/translation-value<br/>tags:<br/>  - CSS<br/>  - CSS Data Type<br/>  - CSS Transforms<br/>  - Data Type<br/>  - Reference<br/>browser-compat: css.types.transform-function<br/>---<br/>{{CSSRef}}<br/><br/>The **`<translation-value>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) is used in the arguments for certain {{cssxref(transform)}} functions, including [`translate()`](/en-US/docs/Web/CSS/transform-function/translate()), [`translateX()`](/en-US/docs/Web/CSS/transform-function/translateX()), [`translateY()`](/en-US/docs/Web/CSS/transform-function/translateY()), and [`translate3d()`](/en-US/docs/Web/CSS/transform-function/translate3d()).<br/><br/>## Syntax<br/><br/>The `<translation-value>` data type can be either a {{Cssxref(&lt;length&gt;)}} value or a {{Cssxref(&lt;percentage&gt;)}} value.<br/><br/>## Examples<br/><br/>### Translation function comparison<br/><br/>The following example provides a 3D cube created from DOM elements and transforms, and a select menu allowing you to choose different translation-related transform functions to transform the cube with, so you can compare the effects of the different types.<br/><br/>Choose one, and the transform is applied to the cube; after 2 seconds, the cube reverts back to its starting state. The cube's starting state is slightly rotated using `transform3d()`, to allow you to see the effect of all the transforms.<br/><br/>#### HTML<br/><br/>```html<br/><main><br/>  <section id=example-element><br/>      <div class=face front>1</div><br/>      <div class=face back>2</div><br/>      <div class=face right>3</div><br/>      <div class=face left>4</div><br/>      <div class=face top>5</div><br/>      <div class=face bottom>6</div><br/>  </section><br/><br/>  <div class=select-form><br/>    <label>Select a transform function</label><br/>    <select><br/>      <option selected>Choose a function</option><br/>      <option>translate(100px, 100px)</option><br/>      <option>translateX(100px)</option><br/>      <option>translateY(100px)</option><br/>      <option>translateZ(100px)</option><br/>      <option>translate3d(50px, 50px, 50px)</option><br/>    </select><br/>  </div><br/></main><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>main {<br/>  width: 400px;<br/>  height: 200px;<br/>  padding: 50px;<br/>  background-image: linear-gradient(135deg, white, cyan, white);<br/>}<br/><br/>#example-element {<br/>  width: 100px;<br/>  height: 100px;<br/>  transform-style: preserve-3d;<br/>  transition: transform 1.5s;<br/>  transform: rotate3d(1, 1, 1, 30deg);<br/>}<br/><br/>.face {<br/>  display: flex;<br/>  align-items: center;<br/>  justify-content: center;<br/>  width: 100%;<br/>  height: 100%;<br/>  position: absolute;<br/>  backface-visibility: inherit;<br/>  font-size: 60px;<br/>  color: #fff;<br/>}<br/><br/>.front {<br/>    background: rgba(90,90,90,.7);<br/>    transform: translateZ(50px);<br/>}<br/><br/>.back {<br/>    background: rgba(0,210,0,.7);<br/>    transform: rotateY(180deg) translateZ(50px);<br/>}<br/><br/>.right {<br/>  background: rgba(210,0,0,.7);<br/>  transform: rotateY(90deg) translateZ(50px);<br/>}<br/><br/>.left {<br/>  background: rgba(0,0,210,.7);<br/>  transform: rotateY(-90deg) translateZ(50px);<br/>}<br/><br/>.top {<br/>  background: rgba(210,210,0,.7);<br/>  transform: rotateX(90deg) translateZ(50px);<br/>}<br/><br/>.bottom {<br/>  background: rgba(210,0,210,.7);<br/>  transform: rotateX(-90deg) translateZ(50px);<br/>}<br/><br/>.select-form {<br/>  margin-top: 50px;<br/>}<br/>```<br/><br/>#### JavaScript<br/><br/>```js<br/>const selectElem = document.querySelector('select');<br/>const example = document.querySelector('#example-element');<br/><br/>selectElem.addEventListener('change', () => {<br/>  if(selectElem.value === 'Choose a function') {<br/>    return;<br/>  } else {<br/>    example.style.transform = `rotate3d(1, 1, 1, 30deg) ${selectElem.value}`;<br/>    setTimeout(function() {<br/>      example.style.transform = 'rotate3d(1, 1, 1, 30deg)';<br/>    }, 2000)<br/>  }<br/>})<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample('Translation_function_comparison', '100%', 300)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{cssxref(transform)}}<br/>