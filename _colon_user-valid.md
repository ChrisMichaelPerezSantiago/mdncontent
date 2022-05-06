## ✔️ _colon_user-valid 
 ---<br/>title: ':user-valid (:-moz-ui-valid)'<br/>slug: web/css/:user-valid<br/>tags:<br/>  - CSS<br/>  - CSS Selectors<br/>  - Pseudo-class<br/>  - Reference<br/>  - Selector<br/>browser-compat: css.selectors.user-valid<br/>---<br/>{{CSSRef}}<br/><br/>The **`:user-valid`** CSS [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents any validated form element whose value validates correctly based on its [validation constraints](/en-US/docs/Learn/Forms#constraint_validation). However, unlike {{cssxref(:valid)}} it only matches once the user has interacted with it.<br/><br/>> **Note:** The pseudo-class behaves in the same way as the non-standard `:-moz-ui-valid` pseudo-class.<br/><br/>This pseudo-class is applied according to the following rules:<br/><br/>- If the control does not have focus, and the value is valid, apply this pseudo-class.<br/>- If the control has focus, and the value was valid (including empty) when it gained focus, apply this pseudo-class.<br/>- If the control has focus, and the value was invalid when it gained focus, re-validate on every keystroke.<br/>- If the element is required, the preceding rules apply only if the user has changed the value or attempted to submit the form.<br/><br/>The result is that if the control was valid when the user started interacting with it, the validity styling is changed only when the user shifts focus to another control. However, if the user is trying to correct a previously-flagged value, the control shows immediately when the value becomes valid. Required items are flagged as invalid only if the user changes them or attempts to submit an unchanged invalid value.<br/><br/>## Syntax<br/><br/>{{CSSSyntax}}<br/><br/>## Examples<br/><br/>### Setting a color and symbol on :user-valid<br/><br/>In the following example, the green border and ✅ only display once the user has interacted with the field.<br/>Try changing the email address to another valid email to see it in action.<br/><br/>```html<br/><form><br/>  <label for=email>Email *: </label><br/>  <input id=email name=email type=email value=test@example.com required><br/>  <span></span><br/></form><br/>```<br/><br/>```css<br/>input:user-valid {<br/>  border: 2px solid green;<br/>}<br/><br/>input:user-valid + span::before {<br/>  content: '✓';<br/>  color: green;<br/>}<br/>```<br/><br/>{{EmbedLiveSample(Setting_a_color_and_symbol_on_user-valid, 140, 100)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{CSSxRef(:valid)}}<br/>- {{CSSxRef(:invalid)}}<br/>- {{CSSxRef(:required)}}<br/>- {{CSSxRef(:optional)}}<br/>- {{CSSxRef(:user-invalid)}}<br/>