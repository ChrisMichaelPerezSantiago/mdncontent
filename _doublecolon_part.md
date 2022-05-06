## ✔️ _doublecolon_part 
 ---<br/>title: '::part()'<br/>slug: Web/CSS/::part<br/>tags:<br/>  - '::part'<br/>  - CSS<br/>  - Draft<br/>  - NeedsExample<br/>  - Pseudo-element<br/>  - Reference<br/>  - Selector<br/>browser-compat: css.selectors.part<br/>---<br/>{{CSSRef}}<br/><br/>The **`::part`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents any element within a [shadow tree](/en-US/docs/Web/Web_Components/Using_shadow_DOM) that has a matching {{HTMLAttrxRef(part)}} attribute.<br/><br/>```css<br/>custom-element::part(foo) {<br/>  /* Styles to apply to the `foo` part */<br/>}<br/>```<br/><br/>## Syntax<br/><br/>{{CSSSyntax}}<br/><br/>## Examples<br/><br/>### HTML<br/><br/>```html<br/><template id=tabbed-custom-element><br/><style type=text/css><br/>*, ::before, ::after {<br/>  box-sizing: border-box;<br/>  padding: 1rem;<br/>}<br/>:host {<br/>  display: flex;<br/>}<br/></style><br/><div part=tab active>Tab 1</div><br/><div part=tab>Tab 2</div><br/><div part=tab>Tab 3</div><br/></template><br/><br/><tabbed-custom-element></tabbed-custom-element><br/>```<br/><br/>### CSS<br/><br/>```css<br/>tabbed-custom-element::part(tab) {<br/>  color: #0c0dcc;<br/>  border-bottom: transparent solid 2px;<br/>}<br/><br/>tabbed-custom-element::part(tab):hover {<br/>  background-color: #0c0d19;<br/>  border-color: #0c0d33;<br/>}<br/><br/>tabbed-custom-element::part(tab):hover:active {<br/>  background-color: #0c0d33;<br/>}<br/><br/>tabbed-custom-element::part(tab):focus {<br/>  box-shadow:<br/>    0 0 0 1px #0a84ff inset,<br/>    0 0 0 1px #0a84ff,<br/>    0 0 0 4px rgba(10, 132, 255, 0.3);<br/>}<br/><br/>tabbed-custom-element::part(active) {<br/>  color: #0060df;<br/>  border-color: #0a84ff !important;<br/>}<br/>```<br/><br/>### JavaScript<br/><br/>```js<br/>let template = document.querySelector(#tabbed-custom-element);<br/>globalThis.customElements.define(template.id, class extends HTMLElement {<br/>  constructor() {<br/>    super();<br/>    this.attachShadow({ mode: open });<br/>    this.shadowRoot.appendChild(template.content);<br/>  }<br/>});<br/>```<br/><br/>### Result<br/><br/>{{EmbedLiveSample('Examples')}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- The {{HTMLAttrxRef(part)}} attribute - Used to define parts which can be selected by the `::part()` selector<br/>- The {{HTMLAttrxRef(exportparts)}} attribute - Used to transitively export shadow parts from a nested shadow tree into a containing light tree.<br/>- [Explainer: CSS Shadow ::part and ::theme](https://github.com/fergald/docs/blob/master/explainers/css-shadow-parts-1.md)<br/>