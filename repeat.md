## ✔️ repeat 
 ---<br/>title: repeat()<br/>slug: Web/CSS/repeat<br/>tags:<br/>  - CSS<br/>  - CSS Function<br/>  - CSS Grid<br/>  - Function<br/>  - Layout<br/>  - Reference<br/>  - Web<br/>browser-compat: css.properties.grid-template-columns.repeat<br/>---<br/>{{CSSRef}}<br/><br/>The **`repeat()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form.<br/><br/>This function can be used in the CSS Grid properties {{cssxref(grid-template-columns)}} and {{cssxref(grid-template-rows)}}.<br/><br/>```css<br/>/* <track-repeat> values */<br/>repeat(4, 1fr)<br/>repeat(4, [col-start] 250px [col-end])<br/>repeat(4, [col-start] 60% [col-end])<br/>repeat(4, [col-start] 1fr [col-end])<br/>repeat(4, [col-start] min-content [col-end])<br/>repeat(4, [col-start] max-content [col-end])<br/>repeat(4, [col-start] auto [col-end])<br/>repeat(4, [col-start] minmax(100px, 1fr) [col-end])<br/>repeat(4, [col-start] fit-content(200px) [col-end])<br/>repeat(4, 10px [col-start] 30% [col-middle] auto [col-end])<br/>repeat(4, [col-start] min-content [col-middle] max-content [col-end])<br/><br/>/* <auto-repeat> values */<br/>repeat(auto-fill, 250px)<br/>repeat(auto-fit, 250px)<br/>repeat(auto-fill, [col-start] 250px [col-end])<br/>repeat(auto-fit, [col-start] 250px [col-end])<br/>repeat(auto-fill, [col-start] minmax(100px, 1fr) [col-end])<br/>repeat(auto-fill, 10px [col-start] 30% [col-middle] 400px [col-end])<br/><br/>/* <fixed-repeat> values */<br/>repeat(4, 250px)<br/>repeat(4, [col-start] 250px [col-end])<br/>repeat(4, [col-start] 60% [col-end])<br/>repeat(4, [col-start] minmax(100px, 1fr) [col-end])<br/>repeat(4, [col-start] fit-content(200px) [col-end])<br/>repeat(4, 10px [col-start] 30% [col-middle] 400px [col-end])<br/>```<br/><br/>## Syntax<br/><br/>### Values<br/><br/>- {{cssxref(&lt;length&gt;)}}<br/>  - : A positive integer length.<br/>- {{cssxref(&lt;percentage&gt;)}}<br/>  - : A non-negative percentage relative to the inline size of the grid container in column grid tracks, and the block size of the grid container in row grid tracks. If the size of the grid container depends on the size of its tracks, then the `<percentage>` must be treated as `auto`. The user-agent may adjust the intrinsic size contributions of the track to the size of the grid container and increase the final size of the track by the minimum amount that would result in honoring the percentage.<br/>- {{cssxref(&lt;flex&gt;)}}<br/>  - : A non-negative dimension with the unit `fr` specifying the track's flex factor. Each `<flex>`-sized track takes a share of the remaining space in proportion to its flex factor.<br/>- `max-content`<br/>  - : Represents the largest max-content contribution of the grid items occupying the grid track.<br/>- `min-content`<br/>  - : Represents the largest min-content contribution of the grid items occupying the grid track.<br/>- `auto`<br/>  - : As a maximum, identical to `max-content`. As a minimum it represents the largest minimum size (as specified by {{cssxref(min-width)}}/{{cssxref(min-height)}}) of the grid items occupying the grid track.<br/>- `auto-fill`<br/>  - : If the grid container has a definite or maximal size in the relevant axis, then the number of repetitions is the largest possible positive integer that does not cause the grid to overflow its grid container. Treating each track as its maximal track sizing function (each independent value used to define `grid-template-rows` or `grid-template-columns`), if that is definite. Otherwise, as its minimum track sizing function, and taking grid-gap into account. If any number of repetitions would overflow, then the repetition is `1`. Otherwise, if the grid container has a definite minimal size in the relevant axis, the number of repetitions is the smallest possible positive integer that fulfills that minimum requirement. Otherwise, the specified track list repeats only once.<br/>- `auto-fit`<br/><br/>  - : Behaves the same as `auto-fill`, except that after placing the grid items any empty repeated tracks are collapsed. An empty track is one with no in-flow grid items placed into or spanning across it. (This can result in all tracks being collapsed, if they're all empty.)<br/><br/>    A collapsed track is treated as having a single fixed track sizing function of `0px`, and the gutters on either side of it collapse.<br/><br/>    For the purpose of finding the number of auto-repeated tracks, the user agent floors the track size to a user agent specified value (e.g., `1px`), to avoid division by zero.<br/><br/>## Examples<br/><br/>### Specifying grid columns using repeat()<br/><br/>#### HTML<br/><br/>```html<br/><div id=container><br/>  <div><br/>    This item is 50 pixels wide.<br/>  </div><br/>  <div><br/>    Item with flexible width.<br/>  </div><br/>  <div><br/>    This item is 50 pixels wide.<br/>  </div><br/>  <div><br/>    Item with flexible width.<br/>  </div><br/>  <div><br/>    Inflexible item of 100 pixels width.<br/>  </div><br/></div><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>#container {<br/>  display: grid;<br/>  grid-template-columns: repeat(2, 50px 1fr) 100px;<br/>  grid-gap: 5px;<br/>  box-sizing: border-box;<br/>  height: 200px;<br/>  width: 100%;<br/>  background-color: #8cffa0;<br/>  padding: 10px;<br/>}<br/><br/>#container > div {<br/>  background-color: #8ca0ff;<br/>  padding: 5px;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Specifying_grid_columns_using_repeat, 100%, 200)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- Related CSS properties: {{cssxref(grid-template)}}, {{cssxref(grid-template-rows)}}, {{cssxref(grid-template-columns)}}, {{cssxref(grid-template-areas)}}, {{cssxref(grid-auto-columns)}}, {{cssxref(grid-auto-rows)}}, {{cssxref(grid-auto-flow)}}<br/>- Grid Layout Guide: _[Line-based placement with CSS Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_<br/>- Grid Layout Guide: _[Grid template areas - Grid definition shorthands](/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#Grid_definition_shorthands)_<br/>