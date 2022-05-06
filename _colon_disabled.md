## ✔️ _colon_disabled 
 ---<br/>title: ':disabled'<br/>slug: Web/CSS/:disabled<br/>tags:<br/>  - CSS<br/>  - Layout<br/>  - Pseudo-class<br/>  - Reference<br/>  - Selector<br/>  - Web<br/>browser-compat: css.selectors.disabled<br/>---<br/>{{CSSRef}}<br/><br/>The **`:disabled`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents any disabled element. An element is disabled if it can't be activated (selected, clicked on, typed into, etc.) or accept focus. The element also has an enabled state, in which it can be activated or accept focus.<br/><br/>```css<br/>/* Selects any disabled <input> */<br/>input:disabled {<br/>  background: #ccc;<br/>}<br/>```<br/><br/>## Syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>This example shows a basic shipping form. It uses the [JavaScript](/en-US/docs/Web/JavaScript) {{event(change)}} event to let the user enable/disable the billing fields.<br/><br/>### HTML<br/><br/>```html<br/><form action=#><br/>  <fieldset id=shipping><br/>    <legend>Shipping address</legend><br/>    <input type=text placeholder=Name><br/>    <input type=text placeholder=Address><br/>    <input type=text placeholder=Zip Code><br/>  </fieldset><br/>  <br><br/>  <fieldset id=billing><br/>    <legend>Billing address</legend><br/>    <label for=billing-checkbox>Same as shipping address:</label><br/>    <input type=checkbox id=billing-checkbox checked><br/>    <br><br/>    <input type=text placeholder=Name disabled><br/>    <input type=text placeholder=Address disabled><br/>    <input type=text placeholder=Zip Code disabled><br/>  </fieldset><br/></form><br/>```<br/><br/>### CSS<br/><br/>```css<br/>input[type=text]:disabled {<br/>  background: #ccc;<br/>}<br/>```<br/><br/>### JavaScript<br/><br/>```js<br/>// Wait for the page to finish loading<br/>document.addEventListener('DOMContentLoaded', function () {<br/>  // Attach `change` event listener to checkbox<br/>  document.getElementById('billing-checkbox').onchange = toggleBilling;<br/>}, false);<br/><br/>function toggleBilling() {<br/>  // Select the billing text fields<br/>  var billingItems = document.querySelectorAll('#billing input[type=text]');<br/><br/>  // Toggle the billing text fields<br/>  for (var i = 0; i < billingItems.length; i++) {<br/>    billingItems[i].disabled = !billingItems[i].disabled;<br/>  }<br/>}<br/>```<br/><br/>### Result<br/><br/>{{EmbedLiveSample('Examples', 300, 250)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{Cssxref(:enabled)}}<br/>