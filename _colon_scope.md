## ✔️ _colon_scope 
 ---<br/>title: ':scope'<br/>slug: Web/CSS/:scope<br/>tags:<br/>  - ':scope'<br/>  - CSS<br/>  - Layout<br/>  - Pseudo-class<br/>  - Reference<br/>  - Scoped Elements<br/>  - Selector<br/>  - Web<br/>browser-compat: css.selectors.scope<br/>---<br/>{{CSSRef}}<br/><br/>The **`:scope`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents elements that are a reference point for selectors to match against.<br/><br/>```css<br/>/* Selects a scoped element */<br/>:scope {<br/>  background-color: lime;<br/>}<br/>```<br/><br/>Currently, when used in a stylesheet, `:scope` is the same as {{cssxref(:root)}}, since there is not at this time a way to explicitly establish a scoped element. When used from a DOM API such as {{domxref(Element.querySelector, querySelector())}}, {{domxref(Element.querySelectorAll, querySelectorAll())}}, {{domxref(Element.matches, matches())}}, or {{domxref(Element.closest())}}, `:scope` matches the element on which the method was called.<br/><br/>## Syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Identity match<br/><br/>In this simple example, we demonstrate that using the `:scope` pseudo-class from the {{domxref(Element.matches())}} method matches the element on which it's called.<br/><br/>#### JavaScript<br/><br/>```js<br/>let paragraph = document.getElementById(para);<br/>let output = document.getElementById(output);<br/><br/>if (paragraph.matches(:scope)) {<br/>  output.innerText = Yep, the element is its own scope as expected!;<br/>}<br/>```<br/><br/>#### HTML<br/><br/>```html<br/><p id=para><br/>  This is a paragraph. It is not an interesting paragraph. Sorry about that.<br/></p><br/><p id=output></p><br/>```<br/><br/>#### Result<br/><br/>{{ EmbedLiveSample('Identity_match') }}<br/><br/>### Direct children<br/><br/>A situation where the `:scope` pseudo-class prove to be useful is when you need to get direct descendant of an already retrieved {{domxref(Element)}}.<br/><br/>#### JavaScript<br/><br/>```js<br/>var context = document.getElementById('context');<br/>var selected = context.querySelectorAll(':scope > div');<br/><br/>document.getElementById('results').innerHTML = Array.prototype.map.call(selected, function (element) {<br/>    return '#' + element.getAttribute('id');<br/>}).join(', ');<br/>```<br/><br/>#### HTML<br/><br/>```html<br/><div id=context><br/>    <div id=element-1><br/>        <div id=element-1.1></div><br/>        <div id=element-1.2></div><br/>    </div><br/>    <div id=element-2><br/>        <div id=element-2.1></div><br/>    </div><br/></div><br/><p><br/>    Selected elements ids :<br/>    <span id=results></span><br/></p><br/>```<br/><br/>#### Result<br/><br/>{{ EmbedLiveSample('Direct_children') }}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- The {{cssxref(:root)}} [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes)<br/>- [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)<br/>- {{domxref(Element.querySelector())}} and {{domxref(Element.querySelectorAll())}}<br/>- {{domxref(Document.querySelector())}} and {{domxref(Document.querySelectorAll())}}<br/>- {{domxref(DocumentFragment.querySelector())}} and {{domxref(DocumentFragment.querySelectorAll())}}<br/>