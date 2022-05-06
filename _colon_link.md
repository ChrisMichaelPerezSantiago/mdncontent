## ✔️ _colon_link 
 ---<br/>title: ':link'<br/>slug: Web/CSS/:link<br/>tags:<br/>  - CSS<br/>  - Layout<br/>  - Pseudo-class<br/>  - Reference<br/>  - Selector<br/>  - Web<br/>browser-compat: css.selectors.link<br/>---<br/>{{ CSSRef }}<br/><br/>The **`:link`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element that has not yet been visited. It matches every unvisited {{HTMLElement(a)}} or {{HTMLElement(area)}} element that has an `href` attribute.<br/><br/>```css<br/>/* Selects any <a> that has not been visited yet */<br/>a:link {<br/>  color: red;<br/>}<br/>```<br/><br/>Styles defined by the `:link` pseudo-class will be overridden by any subsequent link-related pseudo-class ({{cssxref(:active)}}, {{cssxref(:hover)}}, or {{cssxref(:visited)}}) that has at least equal specificity. To style links appropriately, put the `:link` rule before all other link-related rules, as defined by the _LVHA-order_: `:link` — `:visited` — `:hover` — `:active`.<br/><br/>> **Note:** Use {{cssxref(:any-link)}} to select an element independent of whether it has been visited or not.<br/><br/>## Syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>By default, most browsers apply a special {{cssxref(color)}} value to visited links. Thus, the links in this example will probably have special font colors only before you visit them. (After that, you'll need to clear your browser history to see them again.) However, the {{cssxref(background-color)}} values are likely to remain, as most browsers do not set that property on visited links by default.<br/><br/>### HTML<br/><br/>```html<br/><a href=#ordinary-target>This is an ordinary link.</a><br><br/><a href=>You've already visited this link.</a><br><br/><a>Placeholder link (won't get styled)</a><br/>```<br/><br/>### CSS<br/><br/>```css<br/>a:link {<br/>  background-color: gold;<br/>  color: green;<br/>}<br/>```<br/><br/>### Result<br/><br/>{{EmbedLiveSample(Examples)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- Link-related pseudo-classes: {{ cssxref(:visited) }}, {{ cssxref(:hover) }}, {{ cssxref(:active) }}<br/>