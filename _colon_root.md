## ✔️ _colon_root 
 ---<br/>title: ':root'<br/>slug: Web/CSS/:root<br/>tags:<br/>  - CSS<br/>  - Element<br/>  - Layout<br/>  - Node<br/>  - Pseudo-class<br/>  - Reference<br/>  - Selector<br/>  - Web<br/>  - root<br/>browser-compat: css.selectors.root<br/>---<br/>{{CSSRef}}<br/><br/>The **`:root`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches the root element of a tree representing the document. In HTML, `:root` represents the {{HTMLElement(html)}} element and is identical to the selector `html`, except that its [specificity](/en-US/docs/Web/CSS/Specificity) is higher.<br/><br/>```css<br/>/* Selects the root element of the document:<br/>   <html> in the case of HTML */<br/>:root {<br/>  background: yellow;<br/>}<br/>```<br/><br/>## Syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Declaring global CSS variables<br/><br/>`:root` can be useful for declaring global [CSS variables](/en-US/docs/Web/CSS/Using_CSS_custom_properties):<br/><br/>```css<br/>:root {<br/>  --main-color: hotpink;<br/>  --pane-padding: 5px 42px;<br/>}<br/>```<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{HTMLElement(html)}}<br/>- {{domxref(Document.rootElement)}}<br/>- {{domxref(Node.getRootNode())}}<br/>- {{domxref(Element.shadowRoot)}}<br/>- {{domxref(ShadowRoot)}}<br/>