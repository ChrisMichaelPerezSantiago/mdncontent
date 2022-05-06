## ✔️ align-items 
 ---<br/>title: align-items<br/>slug: Web/CSS/align-items<br/>tags:<br/>  - CSS<br/>  - CSS Flexible Boxes<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.align-items<br/>---<br/>The [CSS](/en-US/docs/Web/CSS) **`align-items`** property sets the {{cssxref(align-self)}} value on all direct children as a group. In Flexbox, it controls the alignment of items on the {{glossary(Cross Axis)}}. In Grid Layout, it controls the alignment of items on the Block Axis within their {{glossary(Grid Areas, grid area)}}.<br/><br/>The interactive example below demonstrates some of the values for `align-items` using grid layout.<br/><br/>{{EmbedInteractiveExample(pages/css/align-items.html)}}<br/><br/>## Syntax<br/><br/>```css<br/>/* Basic keywords */<br/>align-items: normal;<br/>align-items: stretch;<br/><br/>/* Positional alignment */<br/>/* align-items does not take left and right values */<br/>align-items: center; /* Pack items around the center */<br/>align-items: start; /* Pack items from the start */<br/>align-items: end; /* Pack items from the end */<br/>align-items: flex-start; /* Pack flex items from the start */<br/>align-items: flex-end; /* Pack flex items from the end */<br/><br/>/* Baseline alignment */<br/>align-items: baseline;<br/>align-items: first baseline;<br/>align-items: last baseline; /* Overflow alignment (for positional alignment only) */<br/>align-items: safe center;<br/>align-items: unsafe center;<br/><br/>/* Global values */<br/>align-items: inherit;<br/>align-items: initial;<br/>align-items: revert;<br/>align-items: revert-layer;<br/>align-items: unset;<br/>```<br/><br/>### Values<br/><br/>- `normal`<br/><br/>  - : The effect of this keyword is dependent of the layout mode we are in:<br/><br/>    - In absolutely-positioned layouts, the keyword behaves like `start` on _replaced_ absolutely-positioned boxes, and as `stretch` on _all other_ absolutely-positioned boxes.<br/>    - In static position of absolutely-positioned layouts, the keyword behaves as `stretch`.<br/>    - For flex items, the keyword behaves as `stretch`.<br/>    - For grid items, this keyword leads to a behavior similar to the one of `stretch`, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like `start`.<br/>    - The property doesn't apply to block-level boxes, and to table cells.<br/><br/>- `flex-start`<br/>  - : The cross-start margin edges of the flex items are flushed with the cross-start edge of the line.<br/>- `flex-end`<br/>  - : The cross-end margin edges of the flex items are flushed with the cross-end edge of the line.<br/>- `center`<br/>  - : The flex items' margin boxes are centered within the line on the cross-axis. If the cross-size of an item is larger than the flex container, it will overflow equally in both directions.<br/>- `start`<br/>  - : The items are packed flush to each other toward the start edge of the alignment container in the appropriate axis.<br/>- `end`<br/>  - : The items are packed flush to each other toward the end edge of the alignment container in the appropriate axis.<br/>- `self-start`<br/>  - : The items are packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.<br/>- `self-end`<br/>  - : The items are packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.<br/>- `baseline`, `first baseline`, `last baseline`<br/>  - : All flex items are aligned such that their [flex container baselines](https://drafts.csswg.org/css-flexbox-1/#flex-baselines) align. The item with the largest distance between its cross-start margin edge and its baseline is flushed with the cross-start edge of the line.<br/>- `stretch`<br/>  - : Flex items are stretched such that the cross-size of the item's margin box is the same as the line while respecting width and height constraints.<br/>- `safe`<br/>  - : Used alongside an alignment keyword. If the chosen keyword means that the item overflows the alignment container causing data loss, the item is instead aligned as if the alignment mode were `start`.<br/>- `unsafe`<br/>  - : Used alongside an alignment keyword. Regardless of the relative sizes of the item and alignment container and whether overflow which causes data loss might happen, the given alignment value is honored.<br/><br/>## Formal definition<br/><br/>{{CSSInfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### CSS<br/><br/>```css<br/>#container {<br/>  height:200px;<br/>  width: 240px;<br/>  align-items: center; /* Can be changed in the live sample */<br/>  background-color: #8c8c8c;<br/>}<br/><br/>.flex {<br/>  display: flex;<br/>  flex-wrap: wrap;<br/>}<br/><br/>.grid {<br/>  display: grid;<br/>  grid-template-columns: repeat(auto-fill, 50px);<br/>}<br/><br/>div > div {<br/>  box-sizing: border-box;<br/>  border: 2px solid #8c8c8c;<br/>  width: 50px;<br/>  display: flex;<br/>  align-items: center;<br/>  justify-content: center;<br/>}<br/><br/>#item1 {<br/>  background-color: #8cffa0;<br/>  min-height: 30px;<br/>}<br/><br/>#item2 {<br/>  background-color: #a0c8ff;<br/>  min-height: 50px;<br/>}<br/><br/>#item3 {<br/>  background-color: #ffa08c;<br/>  min-height: 40px;<br/>}<br/><br/>#item4 {<br/>  background-color: #ffff8c;<br/>  min-height: 60px;<br/>}<br/><br/>#item5 {<br/>  background-color: #ff8cff;<br/>  min-height: 70px;<br/>}<br/><br/>#item6 {<br/>  background-color: #8cffff;<br/>  min-height: 50px;<br/>  font-size: 30px;<br/>}<br/><br/>select {<br/>  font-size: 16px;<br/>}<br/><br/>.row {<br/>  margin-top: 10px;<br/>}<br/>```<br/><br/>### HTML<br/><br/>```html<br/><div id=container class=flex><br/>  <div id=item1>1</div><br/>  <div id=item2>2</div><br/>  <div id=item3>3</div><br/>  <div id=item4>4</div><br/>  <div id=item5>5</div><br/>  <div id=item6>6</div><br/></div><br/><br/><div class=row><br/>  <label for=display>display: </label><br/>  <select id=display><br/>    <option value=flex>flex</option><br/>    <option value=grid>grid</option><br/>  </select><br/></div><br/><br/><div class=row><br/>  <label for=values>align-items: </label><br/>  <select id=values><br/>    <option value=normal>normal</option><br/>    <option value=flex-start>flex-start</option><br/>    <option value=flex-end>flex-end</option><br/>    <option value=center selected>center</option><br/>    <option value=baseline>baseline</option><br/>    <option value=stretch>stretch</option><br/><br/>    <option value=start>start</option><br/>    <option value=end>end</option><br/>    <option value=self-start>self-start</option><br/>    <option value=self-end>self-end</option><br/><br/>    <option value=first baseline>first baseline</option><br/>    <option value=last baseline>last baseline</option><br/><br/>    <option value=safe center>safe center</option><br/>    <option value=unsafe center>unsafe center</option><br/>    <option value=safe right>safe right</option><br/>    <option value=unsafe right>unsafe right</option><br/>    <option value=safe end>safe end</option><br/>    <option value=unsafe end>unsafe end</option><br/>    <option value=safe self-end>safe self-end</option><br/>    <option value=unsafe self-end>unsafe self-end</option><br/>    <option value=safe flex-end>safe flex-end</option><br/>    <option value=unsafe flex-end>unsafe flex-end</option><br/>  </select><br/></div><br/>```<br/><br/>```js hidden<br/>var values = document.getElementById('values');<br/>var display = document.getElementById('display');<br/>var container = document.getElementById('container');<br/><br/>values.addEventListener('change', function (evt) {<br/>  container.style.alignItems = evt.target.value;<br/>});<br/><br/>display.addEventListener('change', function (evt) {<br/>  container.className = evt.target.value;<br/>});<br/>```<br/><br/>### Result<br/><br/>{{EmbedLiveSample(Examples, 260px, 290px)}}<br/><br/>## Specifications<br/><br/>{{Specifications(css.properties.align-items.grid_context)}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_<br/>- CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_<br/>- CSS Grid Guide: _[Box alignment in CSS Grid layouts](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_<br/>- [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment)<br/>- The {{cssxref(align-self)}} property<br/><br/>{{CSSRef}}<br/>