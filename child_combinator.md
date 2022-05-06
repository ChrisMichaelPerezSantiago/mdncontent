## ✔️ child_combinator 
 ---<br/>title: Child combinator<br/>slug: Web/CSS/Child_combinator<br/>tags:<br/>  - CSS<br/>  - Reference<br/>  - Selector<br/>  - Selectors<br/>browser-compat: css.selectors.child<br/>---<br/>{{CSSRef(Selectors)}}<br/><br/>The **child combinator** (`>`) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first.<br/><br/>```css<br/>/* List items that are children of the my-things list */<br/>ul.my-things > li {<br/>  margin: 2em;<br/>}<br/>```<br/><br/>Elements matched by the second selector must be the immediate children of the elements matched by the first selector. This is stricter than the [descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator), which matches all elements matched by the second selector for which there exists an ancestor element matched by the first selector, regardless of the number of hops up the DOM.<br/><br/>## Syntax<br/><br/>```css<br/>selector1 > selector2 { style properties }<br/>```<br/><br/>## Examples<br/><br/>### CSS<br/><br/>```css<br/>span {<br/>  background-color: aqua;<br/>}<br/><br/>div > span {<br/>  background-color: yellow;<br/>}<br/>```<br/><br/>### HTML<br/><br/>```html<br/><div><br/>  <span>Span #1, in the div.<br/>    <span>Span #2, in the span that's in the div.</span><br/>  </span><br/></div><br/><span>Span #3, not in the div at all.</span><br/>```<br/><br/>### Result<br/><br/>{{EmbedLiveSample(Examples, 100%, 100)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [Descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator)<br/>