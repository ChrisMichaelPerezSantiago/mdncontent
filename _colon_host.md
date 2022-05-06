## ✔️ _colon_host 
 ---<br/>title: ':host'<br/>slug: Web/CSS/:host<br/>tags:<br/>  - ':host'<br/>  - CSS<br/>  - DOM<br/>  - Layout<br/>  - Pseudo-class<br/>  - Reference<br/>  - Selector<br/>  - Web<br/>  - Web Components<br/>  - shadow<br/>  - shadow dom<br/>browser-compat: css.selectors.host<br/>---<br/>{{ CSSRef }}<br/><br/>The **`:host`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selects the shadow host of the [shadow DOM](/en-US/docs/Web/Web_Components/Using_shadow_DOM) containing the CSS it is used inside — in other words, this allows you to select a custom element from inside its shadow DOM.<br/><br/>> **Note:** This has no effect when used outside a shadow DOM.<br/><br/>```css<br/>/* Selects a shadow root host */<br/>:host {<br/>  font-weight: bold;<br/>}<br/>```<br/><br/>## Syntax<br/><br/>```css<br/>:host<br/>```<br/><br/>## Examples<br/><br/>### Styling the shadow host<br/><br/>The following snippets are taken from our [host-selectors example](https://github.com/mdn/web-components-examples/tree/master/host-selectors) ([see it live also](https://mdn.github.io/web-components-examples/host-selectors/)).<br/><br/>In this example we have a simple custom element — `<context-span>` — that you can wrap around text:<br/><br/>```html<br/><h1>Host selectors <a href=#><context-span>example</context-span></a></h1><br/>```<br/><br/>Inside the element's constructor, we create `style` and `span` elements, fill the `span` with the content of the custom element, and fill the `style` element with some CSS rules:<br/><br/>```js<br/>let style = document.createElement('style');<br/>let span = document.createElement('span');<br/>span.textContent = this.textContent;<br/><br/>const shadowRoot = this.attachShadow({mode: 'open'});<br/>shadowRoot.appendChild(style);<br/>shadowRoot.appendChild(span);<br/><br/>style.textContent = 'span:hover { text-decoration: underline; }' +<br/>                    ':host-context(h1) { font-style: italic; }' +<br/>                    ':host-context(h1):after { content:  - no links in headers! }' +<br/>                    ':host-context(article, aside) { color: gray; }' +<br/>                    ':host(.footer) { color : red; }' +<br/>                    ':host { background: rgba(0,0,0,0.1); padding: 2px 5px; }';<br/>```<br/><br/>The `:host { background: rgba(0,0,0,0.1); padding: 2px 5px; }` rule styles all instances of the `<context-span>` element (the shadow host in this instance) in the document.<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [Web components](/en-US/docs/Web/Web_Components)<br/>- {{cssxref(:host_function, :host())}}<br/>- {{cssxref(:host-context, :host-context())}}<br/>