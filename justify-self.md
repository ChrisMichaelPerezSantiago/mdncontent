## ✔️ justify-self 
 ---<br/>title: justify-self<br/>slug: Web/CSS/justify-self<br/>tags:<br/>  - CSS<br/>  - CSS Box Alignment<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.justify-self<br/>---<br/>{{CSSRef}}<br/><br/>The [CSS](/en-US/docs/Web/CSS) **`justify-self`** property sets the way a box is justified inside its alignment container along the appropriate axis.<br/><br/>{{EmbedInteractiveExample(pages/css/justify-self.html)}}<br/><br/>The effect of this property is dependent of the layout mode we are in:<br/><br/>- In block-level layouts, it aligns an item inside its containing block on the inline axis.<br/>- For absolutely-positioned elements, it aligns an item inside its containing block on the inline axis, accounting for the offset values of top, left, bottom, and right.<br/>- In table cell layouts, this property is _ignored_ ([more](/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables) about alignment in block, absolute positioned and table layout)<br/>- In flexbox layouts, this property is _ignored_ ([more](/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox) about alignment in Flexbox)<br/>- In grid layouts, it aligns an item inside its grid area on the inline axis ([more](/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Grid_Layout) about alignment in grid layouts)<br/><br/>## Syntax<br/><br/>```css<br/>/* Basic keywords */<br/>justify-self: auto;<br/>justify-self: normal;<br/>justify-self: stretch;<br/><br/>/* Positional alignment */<br/>justify-self: center;     /* Pack item around the center */<br/>justify-self: start;      /* Pack item from the start */<br/>justify-self: end;        /* Pack item from the end */<br/>justify-self: flex-start; /* Equivalent to 'start'. Note that justify-self is ignored in Flexbox layouts. */<br/>justify-self: flex-end;   /* Equivalent to 'end'. Note that justify-self is ignored in Flexbox layouts. */<br/>justify-self: self-start;<br/>justify-self: self-end;<br/>justify-self: left;       /* Pack item from the left */<br/>justify-self: right;      /* Pack item from the right */<br/><br/>/* Baseline alignment */<br/>justify-self: baseline;<br/>justify-self: first baseline;<br/>justify-self: last baseline;<br/><br/>/* Overflow alignment (for positional alignment only) */<br/>justify-self: safe center;<br/>justify-self: unsafe center;<br/><br/>/* Global values */<br/>justify-self: inherit;<br/>justify-self: initial;<br/>justify-self: revert;<br/>justify-self: revert-layer;<br/>justify-self: unset;<br/>```<br/><br/>This property can take one of three different forms:<br/><br/>- Basic keywords: one of the keyword values `normal`, `auto`, or `stretch`.<br/>- Baseline alignment: the `baseline` keyword, plus optionally one of `first` or `last`.<br/>- Positional alignment:<br/><br/>  - one of: `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `left`, or `right`.<br/>  - Plus optionally `safe` or `unsafe`.<br/><br/>### Values<br/><br/>- `auto`<br/>  - : The value used is the value of the `justify-items` property of the parents box, unless the box has no parent, or is absolutely positioned, in these cases, `auto` represents `normal`.<br/>- `normal`<br/><br/>  - : The effect of this keyword is dependent of the layout mode we are in:<br/><br/>    - In block-level layouts, the keyword is a synonym of `start`.<br/>    - In absolutely-positioned layouts, the keyword behaves like `start` on _replaced_ absolutely-positioned boxes, and as `stretch` on _all other_ absolutely-positioned boxes.<br/>    - In table cell layouts, this keyword has no meaning as this property is _ignored_.<br/>    - In flexbox layouts, this keyword has no meaning as this property is _ignored._<br/>    - In grid layouts, this keyword leads to a behavior similar to the one of `stretch`, except for boxes with an aspect ratio or an intrinsic sizes where it behaves like `start`.<br/><br/>- `start`<br/>  - : The item is packed flush to each other toward the start edge of the alignment container in the appropriate axis.<br/>- `end`<br/>  - : The item is packed flush to each other toward the end edge of the alignment container in the appropriate axis.<br/>- `flex-start`<br/>  - : For items that are not children of a flex container, this value is treated like `start`.<br/>- `flex-end`<br/>  - : For items that are not children of a flex container, this value is treated like `end`.<br/>- `self-start`<br/>  - : The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis.<br/>- `self-end`<br/>  - : The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.<br/>- `center`<br/>  - : The items are packed flush to each other toward the center of the alignment container.<br/>- `left`<br/>  - : The items are packed flush to each other toward the left edge of the alignment container. If the property's axis is not parallel with the inline axis, this value behaves like `start`.<br/>- `right`<br/>  - : The items are packed flush to each other toward the right edge of the alignment container in the appropriate axis. If the property's axis is not parallel with the inline axis, this value behaves like `start`.<br/>- `baseline`, `first baseline`, `last baseline`<br/>  - : Specifies participation in first- or last-baseline alignment: aligns the alignment baseline of the box's first or last baseline set with the corresponding baseline in the shared first or last baseline set of all the boxes in its baseline-sharing group.<br/>    The fallback alignment for `first baseline` is `start`, the one for `last baseline` is `end`.<br/>- `stretch`<br/>  - : If the combined size of the items is less than the size of the alignment container, any `auto`-sized items have their size increased equally (not proportionally), while still respecting the constraints imposed by {{CSSxRef(max-height)}}/{{CSSxRef(max-width)}} (or equivalent functionality), so that the combined size exactly fills the alignment container.<br/>- `safe`<br/>  - : If the size of the item overflows the alignment container, the item is instead aligned as if the alignment mode were `start`.<br/>- `unsafe`<br/>  - : Regardless of the relative sizes of the item and alignment container, the given alignment value is honored.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Simple demonstration<br/><br/>In the following example we have a simple 2 x 2 grid layout. Initially the grid container is given a `justify-items` value of `stretch` — the default — which causes the grid items to stretch across the entire width of their cells.<br/><br/>The second, third, and fourth grid items are then given different values of `justify-self`, to show how these override the `justify-items` value. These values cause the grid items to span only as wide as their content width, and align in different positions across their cells.<br/><br/>#### HTML<br/><br/>```html<br/><article class=container><br/>  <span>First child</span><br/>  <span>Second child</span><br/>  <span>Third child</span><br/>  <span>Fourth child</span><br/></article><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>html {<br/>  font-family: helvetica, arial, sans-serif;<br/>  letter-spacing: 1px;<br/>}<br/><br/>article {<br/>  background-color: red;<br/>  display: grid;<br/>  grid-template-columns: 1fr 1fr;<br/>  grid-auto-rows: 40px;<br/>  grid-gap: 10px;<br/>  width: 300px;<br/>  justify-items: stretch;<br/>}<br/><br/>span:nth-child(2) {<br/>  justify-self: start;<br/>}<br/><br/>span:nth-child(3) {<br/>justify-self: center;<br/>}<br/><br/>span:nth-child(4) {<br/>justify-self: end;<br/>}<br/><br/>article span {<br/>  background-color: black;<br/>  color: white;<br/>  margin: 1px;<br/>  text-align: center;<br/>}<br/><br/>article, span {<br/>  padding: 10px;<br/>  border-radius: 7px;<br/>}<br/><br/>article {<br/>  margin: 20px;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample('Simple_demonstration', '100%', 200)}}<br/><br/>## Specifications<br/><br/>{{Specifications(css.properties.justify-self.grid_context)}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- CSS Grid Guide: _[Box alignment in CSS Grid layouts](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_<br/>- [CSS Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment)<br/>- The {{CSSxRef(justify-items)}} property<br/>