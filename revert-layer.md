## ✔️ revert-layer 
 ---<br/>title: revert-layer<br/>slug: Web/CSS/revert-layer<br/>tags:<br/>  - CSS<br/>  - CSS Value<br/>  - Keyword<br/>  - Reference<br/>  - revert-layer<br/>browser-compat: css.types.global_keywords.revert-layer<br/>---<br/>{{CSSRef}}<br/><br/>The **`revert-layer`** CSS keyword rolls back the value of a property in a {{cssxref(@layer, cascade layer)}} to the value of the property in a CSS rule matching the element in a previous cascade layer. The value of the property with this keyword is recalculated as if no rules were specified on the target element in the current cascade layer.<br/><br/>If there is no other cascade layer to revert to for the matching CSS rule, the property value rolls back to the {{cssxref(computed_value, computed value)}} derived from the current layer. Furthermore, if there is no matching CSS rule in the current layer, the property value for the element rolls back to the style defined in a previous [style origin](/en-US/docs/Glossary/Style_origin).<br/><br/>This keyword can be applied to any CSS property, including the CSS shorthand property {{cssxref(all)}}.<br/><br/>## Revert-layer vs revert<br/><br/>The `revert-layer` keyword lets you rollback styles to the ones specified in previous cascade layers. All cascade layers exist in the [author origin](/en-US/docs/Glossary/Style_origin). The {{cssxref(revert)}} keyword, in comparison, lets you remove styles applied in the author origin and roll back to styles in user origin or user-agent origin.<br/><br/>The `revert-layer` keyword is ideally meant for applying on properties inside a layer. However, if the `revert-layer` keyword is set on a property outside a layer, the value of the property will roll back to the default value established by the user agent's stylesheet (or by user styles, if any exist). So in this scenario, the `revert-layer` keyword behaves like the {{cssxref(revert)}} keyword.<br/><br/>## Examples<br/><br/>### Default cascade layer behavior<br/><br/>In the example below, two cascade layers are defined in the CSS, `base` and `special`. By default, rules in the `special` layer will override competing rules in the `base` layer because `special` is listed after `base` in the `@layer` declaration statement.<br/><br/>#### HTML<br/><br/>```html<br/><p>This example contains a list.</p><br/><br/><ul><br/>  <li class=item feature>Item one</li><br/>  <li class=item>Item two</li><br/>  <li class=item>Item three</li><br/></ul><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>@layer base, special;<br/><br/>@layer special {<br/>  .item {<br/>    color: red;<br/>  }<br/>}<br/><br/>@layer base {<br/>  .item {<br/>    color: blue;<br/>  }<br/>  .feature {<br/>    color: green;<br/>  }<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample('Default_cascade_layer_behavior')}}<br/><br/>All the `<li>` elements match the `item` rule in the `special` layer and are red. This is the default cascade layer behavior, where rules in the `special` layer take precedence over rules in the `base` layer.<br/><br/>### Revert to style in previous cascade layer<br/><br/>Let's examine how the `revert-layer` keyword changes the default cascade layer behavior. For this example, the `special` layer contains an additional `feature` rule targeting the first `<li>` element. The `color` property in this rule is set to `revert-layer`.<br/><br/>#### HTML<br/><br/>```html<br/><p>This example contains a list.</p><br/><br/><ul><br/>  <li class=item feature>Item one</li><br/>  <li class=item>Item two</li><br/>  <li class=item>Item three</li><br/></ul><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>@layer base, special;<br/><br/>@layer special {<br/>  .item {<br/>    color: red;<br/>  }<br/>  .feature {<br/>    color: revert-layer;<br/>  }<br/>}<br/><br/>@layer base {<br/>  .item {<br/>    color: blue;<br/>  }<br/>  .feature {<br/>    color: green;<br/>  }<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample('Revert_to_style_in_previous_cascade_layer')}}<br/><br/>With `color` set to `revert-layer`, the `color` property value rolls back to the value in the matching `feature` rule in the previous layer `base`, and so 'Item one' is now green.<br/><br/>### Revert to style in previous origin<br/><br/>This example shows the `revert-layer` keyword behavior when there is no cascade layer to revert to _and_ there is no matching CSS rule in the current layer to inherit the property value.<br/><br/>#### HTML<br/><br/>```html<br/><p>This example contains a list.</p><br/><br/><ul><br/>  <li class=item feature>Item one</li><br/>  <li class=item>Item two</li><br/>  <li class=item>Item three</li><br/></ul><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>@layer base {<br/>  .item {<br/>    color: revert-layer;<br/>  }<br/>}<br/>```<br/><br/>{{EmbedLiveSample('Revert_to_style_in_previous_origin')}}<br/><br/>The style for all `<li>` elements rolls back to the defaults in the user-agent origin.<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- Use the {{cssxref(initial)}} keyword to set a property to its initial value.<br/>- Use the {{cssxref(inherit)}} keyword to make an element's property the same as its parent.<br/>- Use the {{cssxref(revert)}} keyword to reset a property to the value established by the user-agent stylesheet (or by user styles, if any exist).<br/>- Use the {{cssxref(unset)}} keyword to set a property to its inherited value if it inherits or to its initial value if not.<br/>- The {{cssxref(all)}} property lets you reset all properties to their initial, inherited, reverted, or unset state at once.<br/>