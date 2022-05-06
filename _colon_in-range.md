## ✔️ _colon_in-range 
 ---<br/>title: ':in-range'<br/>slug: Web/CSS/:in-range<br/>tags:<br/>  - CSS<br/>  - Pseudo-class<br/>  - Reference<br/>  - Selector<br/>  - Web<br/>browser-compat: css.selectors.in-range<br/>---<br/>{{CSSRef}}<br/><br/>The **`:in-range`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an {{htmlelement(input)}} element whose current value is within the range limits specified by the {{htmlattrxref(min, input)}} and {{htmlattrxref(max,input)}} attributes.<br/><br/>```css<br/>/* Selects any <input>, but only when it has a range<br/>   specified, and its value is inside that range */<br/>input:in-range {<br/>  background-color: rgba(0, 255, 0, 0.25);<br/>}<br/>```<br/><br/>This pseudo-class is useful for giving the user a visual indication that a field's current value is within the permitted limits.<br/><br/>> **Note:** This pseudo-class only applies to elements that have (and can take) a range limitation. In the absence of such a limitation, the element can neither be in-range nor out-of-range.<br/><br/>## Syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### HTML<br/><br/>```html<br/><form action= id=form1><br/>  <ul>Values between 1 and 10 are valid.<br/>    <li><br/>      <input id=value1 name=value1 type=number placeholder=1 to 10 min=1 max=10 value=12 required><br/>      <label for=value1>Your value is </label><br/>    </li><br/>  </ul><br/></form><br/>```<br/><br/>### CSS<br/><br/>```css<br/>li {<br/>  list-style: none;<br/>  margin-bottom: 1em;<br/>}<br/><br/>input {<br/>  border: 1px solid black;<br/>}<br/><br/>input:in-range {<br/>  background-color: rgba(0, 255, 0, 0.25);<br/>}<br/><br/>input:out-of-range {<br/>  background-color: rgba(255, 0, 0, 0.25);<br/>  border: 2px solid red;<br/>}<br/><br/>input:in-range + label::after {<br/>  content: 'okay.';<br/>}<br/><br/>input:out-of-range + label::after {<br/>  content: 'out of range!';<br/>}<br/>```<br/><br/>### Result<br/><br/>{{EmbedLiveSample('Examples', 600, 140)}}<br/><br/>> **Note:** An empty `<input>` does not count as out of range, and will not be selected using the `:out-of-range` pseudo-class selector. The [`:blank`](/en-US/docs/Web/CSS/:blank) pseudo-class exists to select blank inputs, although at the time of writing this is experimental and not well-supported. You could also use the `required` attribute and the [`:invalid`](/en-US/docs/Web/CSS/:invalid) pseudo-class to provide more general logic and styling for making inputs mandatory (`:invalid` will style blank _and_ out-of-range inputs).<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{cssxref(:out-of-range)}}<br/>- [Form data validation](/en-US/docs/Learn/Forms/Form_validation)<br/>