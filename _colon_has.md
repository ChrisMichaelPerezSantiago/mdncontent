## ✔️ _colon_has 
 ---<br/>title: ':has()'<br/>slug: Web/CSS/:has<br/>tags:<br/>  - ':has'<br/>  - CSS<br/>  - Pseudo-class<br/>  - Reference<br/>  - Selector<br/>  - Selectors<br/>browser-compat: css.selectors.has<br/>---<br/>{{CSSRef}}<br/><br/>The **`:has()`** CSS [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element if any of the selectors passed as parameters (relative to the {{cssxref(:scope)}} of the given element) match at least one element.<br/><br/>```css<br/>/* Selects any <a>, as long as it has an <img> element directly inside it  */<br/>/* Note that this is not supported in any browser yet */<br/>let test = document.querySelector('a:has(> img)');<br/>```<br/><br/>## Syntax<br/><br/>{{CSSSyntax}}<br/><br/>## Description<br/><br/>The `:has()` pseudo-class takes a relative selector list as an argument. In earlier revisions of the CSS Selectors Level 4 specification, `:has` had a limitation that it couldn't be used within stylesheets. Instead, it could only be used with functions like {{domxref(document.querySelector())}}; this was due to performance concerns. _This limitation has been removed_ because no browser implemented it that way. Instead, browsers currently only support the use of `:has()` within stylesheets.<br/><br/>## Examples<br/><br/>### Matching \<a> elements that directly contain an \<img><br/><br/>The following selector matches only {{HTMLElement(a)}} elements that directly contain an {{HTMLElement(img)}} child:<br/><br/>```css<br/>a:has(> img)<br/>```<br/><br/>### Matching \<h1> elements that are followed by a \<p><br/><br/>The following selector matches {{HTMLElement(h1)}} elements only if they have a {{htmlelement(p)}} element directly following them:<br/><br/>```css<br/>h1:has(+ p)<br/>```<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [Locating DOM elements using selectors](/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)<br/>- [`:scope`](/en-US/docs/Web/CSS/:scope)<br/>