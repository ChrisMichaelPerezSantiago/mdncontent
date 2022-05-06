## ✔️ align-self 
 ---<br/>title: align-self<br/>slug: Web/CSS/align-self<br/>tags:<br/>  - CSS<br/>  - CSS Box Alignment<br/>  - CSS Flexible Boxes<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.align-self<br/>---<br/>{{CSSRef}}<br/><br/>The **`align-self`** [CSS](/en-US/docs/Web/CSS) property overrides a grid or flex item's {{cssxref(align-items)}} value. In Grid, it aligns the item inside the {{glossary(Grid Areas, grid area)}}. In Flexbox, it aligns the item on the {{glossary(cross axis)}}.<br/><br/>{{EmbedInteractiveExample(pages/css/align-self.html)}}<br/><br/>The property doesn't apply to block-level boxes, or to table cells. If a flexbox item's cross-axis margin is `auto`, then `align-self` is ignored.<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword values */<br/>align-self: auto;<br/>align-self: normal;<br/><br/>/* Positional alignment */<br/>/* align-self does not take left and right values */<br/>align-self: center; /* Put the item around the center */<br/>align-self: start; /* Put the item at the start */<br/>align-self: end; /* Put the item at the end */<br/>align-self: self-start; /* Align the item flush at the start */<br/>align-self: self-end; /* Align the item flush at the end */<br/>align-self: flex-start; /* Put the flex item at the start */<br/>align-self: flex-end; /* Put the flex item at the end */<br/><br/>/* Baseline alignment */<br/>align-self: baseline;<br/>align-self: first baseline;<br/>align-self: last baseline;<br/>align-self: stretch; /* Stretch 'auto'-sized items to fit the container */<br/><br/>/* Overflow alignment */<br/>align-self: safe center;<br/>align-self: unsafe center;<br/><br/>/* Global values */<br/>align-self: inherit;<br/>align-self: initial;<br/>align-self: revert;<br/>align-self: revert-layer;<br/>align-self: unset;<br/>```<br/><br/>### Values<br/><br/>- `auto`<br/>  - : Computes to the parent's {{cssxref(align-items)}} value.<br/>- `normal`<br/><br/>  - : The effect of this keyword is dependent of the layout mode we are in:<br/><br/>    - In absolutely-positioned layouts, the keyword behaves like `start` on _replaced_ absolutely-positioned boxes, and as `stretch` on _all other_ absolutely-positioned boxes.<br/>    - In static position of absolutely-positioned layouts, the keyword behaves as `stretch`.<br/>    - For flex items, the keyword behaves as `stretch`.<br/>    - For grid items, this keyword leads to a behavior similar to the one of `stretch`, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like `start`.<br/>    - The property doesn't apply to block-level boxes, and to table cells.<br/><br/>- `self-start`<br/>  - : Aligns the items to be flush with the edge of the alignment container corresponding to the item's start side in the cross axis.<br/>- `self-end`<br/>  - : Aligns the items to be flush with the edge of the alignment container corresponding to the item's end side in the cross axis.<br/>- `flex-start`<br/>  - : The cross-start margin edge of the flex item is flushed with the cross-start edge of the line.<br/>- `flex-end`<br/>  - : The cross-end margin edge of the flex item is flushed with the cross-end edge of the line.<br/>- `center`<br/>  - : The flex item's margin box is centered within the line on the cross-axis. If the cross-size of the item is larger than the flex container, it will overflow equally in both directions.<br/>- `baseline`, `first baseline`, `last baseline`<br/>  - : Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box's first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.<br/>    The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.<br/>- `stretch`<br/>  - : If the combined size of the items along the cross axis is less than the size of the alignment container and the item is `auto`-sized, its size is increased equally (not proportionally), while still respecting the constraints imposed by {{cssxref(max-height)}}/{{cssxref(max-width)}} (or equivalent functionality), so that the combined size of all `auto`-sized items exactly fills the alignment container along the cross axis.<br/>- `safe`<br/>  - : If the size of the item overflows the alignment container, the item is instead aligned as if the alignment mode were `start`.<br/>- `unsafe`<br/>  - : Regardless of the relative sizes of the item and alignment container, the given alignment value is honored.<br/><br/>## Formal definition<br/><br/>{{CSSInfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### HTML<br/><br/>```html<br/><section><br/>  <div>Item #1</div><br/>  <div>Item #2</div><br/>  <div>Item #3</div><br/></section><br/>```<br/><br/>### CSS<br/><br/>```css<br/>section {<br/>  display: flex;<br/>  align-items: center;<br/>  height: 120px;<br/>  background: beige;<br/>}<br/><br/>div {<br/>  height: 60px;<br/>  background: cyan;<br/>  margin: 5px;<br/>}<br/><br/>div:nth-child(3) {<br/>  align-self: flex-end;<br/>  background: pink;<br/>}<br/>```<br/><br/>### Result<br/><br/>{{EmbedLiveSample('Examples')}}<br/><br/>## Specifications<br/><br/>{{Specifications(css.properties.align-self.grid_context)}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_<br/>- CSS Flexbox Guide: _[Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_<br/>- CSS Grid Guide: _[Box alignment in CSS Grid layouts](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_<br/>- [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment)<br/>- The {{cssxref(align-items)}} property<br/>