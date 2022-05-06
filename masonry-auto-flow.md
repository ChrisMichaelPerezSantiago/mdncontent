## ✔️ masonry-auto-flow 
 ---<br/>title: masonry-auto-flow<br/>slug: Web/CSS/masonry-auto-flow<br/>tags:<br/>  - CSS<br/>  - Experimental<br/>  - Property<br/>  - Reference<br/>  - grid<br/>  - masonry<br/>  - masonry-auto-flow<br/>browser-compat: css.properties.masonry-auto-flow<br/>---<br/>{{CSSRef}}<br/><br/>{{SeeCompatTable}}<br/><br/>The **`masonry-auto-flow`** CSS property modifies how items are placed when using [masonry](/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout) in [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout).<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword values */<br/>masonry-auto-flow: pack;<br/>masonry-auto-flow: next;<br/>masonry-auto-flow: ordered;<br/>masonry-auto-flow: definite-first;<br/>masonry-auto-flow: next ordered;<br/><br/>/* Global values */<br/>masonry-auto-flow: inherit;<br/>masonry-auto-flow: initial;<br/>masonry-auto-flow: revert;<br/>masonry-auto-flow: revert-layer;<br/>masonry-auto-flow: unset;<br/>```<br/><br/>This property may take one of two forms:<br/><br/>- A single keyword: one of `pack`, `next`, `definite-first`, or `ordered`<br/>- Two keywords, for example `next ordered`.<br/><br/>### Values<br/><br/>- `pack`<br/>  - : As per the default masonry algorithm, items will be placed into the track with the most room.<br/>- `next`<br/>  - : Items will be placed one after the other in the grid axis.<br/>- `definite-first`<br/>  - : Display as in the default masonry algorithm, placing items with a definite place first before placing other masonry items.<br/>- `ordered`<br/>  - : Ignore any items with a definite placement, and place everything according to order-modified document order.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Using the next keyword<br/><br/>#### HTML<br/><br/>```html<br/><div id=grid><br/>  <div id=item1></div><br/>  <div id=item2></div><br/>  <div id=item3></div><br/>  <div id=item4></div><br/>  <div id=item5></div><br/></div><br/><select id=flow><br/>  <option value=pack>pack</option><br/>  <option value=next>next</option><br/></select><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>#grid {<br/>  height: 200px;<br/>  width: 200px;<br/>  display: grid;<br/>  gap: 10px;<br/>  grid-template-columns: repeat(3, 1fr);<br/>  grid-template-rows: masonry;<br/>  masonry-auto-flow: pack;<br/>}<br/><br/>#item1 {<br/>  background-color: lime;<br/>  height: 2em<br/>}<br/><br/>#item2 {<br/>  background-color: yellow;<br/>}<br/><br/>#item3 {<br/>  background-color: blue;<br/>  height: 3em;<br/>}<br/><br/>#item4 {<br/>  background-color: red;<br/>  height: 2.5em;<br/>}<br/><br/>#item5 {<br/>  background-color: aqua;<br/>  height: 4em;<br/>}<br/>```<br/><br/>```js<br/>const selectElem = document.querySelector('select');<br/><br/>function changeMasonryFlow() {<br/>  var grid = document.getElementById(grid);<br/>  var direction = document.getElementById(flow);<br/>  var masonryAutoFlow = direction.value === pack ? pack : next;<br/><br/>  grid.style.masonryAutoFlow = masonryAutoFlow;<br/>}<br/><br/>selectElem.addEventListener('change', changeMasonryFlow);<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Using_the_next_keyword, 200px, 230px)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- Related CSS properties: {{cssxref(align-tracks)}}, {{cssxref(justify-tracks)}}<br/>