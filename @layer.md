## ✔️ @layer 
 ---<br/>title: '@layer'<br/>slug: Web/CSS/@layer<br/>tags:<br/>  - At-rule<br/>  - CSS<br/>  - Reference<br/>  - Web<br/>  - layer<br/>  - cascade<br/>browser-compat: css.at-rules.layer<br/>---<br/>{{CSSRef}}<br/><br/>The **`@layer`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) declares a _cascade layer_. Rules within a cascade layer cascade together, giving more control over the cascade to web developers.<br/><br/>```css<br/>@layer utilities {<br/>  /* creates a named layer called utilities. */<br/>}<br/>```<br/><br/>## Syntax<br/><br/>The `@layer` at-rule is used to create a cascade layer in one of three ways. The first is as in the example above, creating a block at-rule with the CSS rules for that layer inside.<br/><br/>```css<br/>@layer utilities {<br/>  .padding-sm {<br/>    padding: .5rem;<br/>  }<br/><br/>  .padding-lg {<br/>    padding: .8rem;<br/>  }<br/>}<br/>```<br/><br/>A cascade layer can be created with {{cssxref(@import)}}, in this case the rules would be in the imported stylesheet:<br/><br/>```css<br/>@import 'utilities.css' layer(utilities);<br/>```<br/><br/>You can also create a named cascade layer without assigning any styles. This can be a single name:<br/><br/>```css<br/>@layer utilities;<br/>```<br/><br/>Or, multiple layers can be defined at once. For example:<br/><br/>```css<br/>@layer theme, layout, utilities;<br/>```<br/><br/>This is useful because the initial order in which layers are declared indicates which layer has precedence. As with declarations, the last layer to be listed will win if declarations are found in multiple layers. Therefore, with the preceding example, if a competing rule was found in `theme` and `utilities` the one in `utilities` would win and be applied.<br/><br/>The rule in `utilities` would be applied _even if it has lower specificity_ than the rule in `theme`. This is because once layer order has been established, specificity and order of appearance are ignored. This enables the creation of simpler CSS selectors, as you do not have to ensure that a selector will have high enough specificity to override competing rules, all you need to ensure is that it appears in a later layer.<br/><br/>> **Note:** Having declared your layer names, thus setting their order, you can add CSS rules to the layer by re-declaring the name. The styles are then appended to the layer and the layer order will not be changed.<br/><br/>Any styles not in a layer are gathered together and placed into an anonymous layer that comes after all the declared layers. This means that any styles declared outside of a layer will override styles declared in a layer.<br/><br/>### Nesting layers<br/><br/>Layers may be nested. For example:<br/><br/>```css<br/>@layer framework {<br/>  @layer layout {<br/><br/>  }<br/>}<br/>```<br/><br/>To append rules to the `layout` layer inside `framework` join the two names with a `.`.<br/><br/>```css<br/>@layer framework.layout {<br/>  p {<br/>    margin-block: 1rem;<br/>  }<br/>}<br/>```<br/><br/>### Anonymous layers<br/><br/>If a layer is created with no name, for example:<br/><br/>```css<br/>@layer {<br/>  p {<br/>    margin-block: 1rem;<br/>  }<br/>}<br/>```<br/><br/>Then an anonymous, unnamed, layer is created. This functions in the same way as named layers, however rules cannot be assigned to it later.<br/><br/>## Formal syntax<br/><br/>{{CSSSyntax}}<br/><br/>## Examples<br/><br/>### Simple example<br/><br/>In the following example, two CSS rules are created. One for the {{htmlelement(p)}} element outside of any layer and one inside a layer named `type` for `.box p`.<br/><br/>Without layers, the selector `.box p` would have the highest specificity and therefore the text `Hello, world!` will display in green. As the `type` layer comes before the anonymous layer created to hold non-layer content, the text will be purple.<br/><br/>Also notice order. Even though we declare the non-layered style first, it's still applied _after_ the layer styles.<br/><br/>#### HTML<br/><br/>```html<br/><div class=box><br/>  <p>Hello, world!</p><br/></div><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>p {<br/>  color: rebeccapurple;<br/>}<br/><br/>@layer type {<br/>  .box p {<br/>    font-weight: bold;<br/>    font-size: 1.3em;<br/>    color: green;<br/>  }<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Simple_example)}}<br/><br/>### Assigning rules to existing layers<br/><br/>In the following example, two layers are created with no rules applied, then CSS rules are applied to the two layers. The `base` layer defines a color, border, font-size, and padding. The `special` layer defines a different color. As `special` comes last when the layers were defined, the color it provides is used and the text is displayed using `rebeccapurple`. All of the other rules from `base` still apply.<br/><br/>#### HTML<br/><br/>```html<br/><div class=item>I am displayed in <code>color: rebeccapurple</code><br/>because the <code>special</code> layer comes after the <code>base</code> layer.<br/>My green border, font-size, and padding come from the <code>base</code> layer.</div><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>@layer base, special;<br/><br/>@layer special {<br/>  .item {<br/>    color: rebeccapurple;<br/>  }<br/>}<br/><br/>@layer base {<br/>  .item {<br/>    color: green;<br/>    border: 5px solid green;<br/>    font-size: 1.3em;<br/>    padding: .5em;<br/>  }<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Assigning_rules_to_existing_layers)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [The Future of CSS: Cascade Layers](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/)<br/>