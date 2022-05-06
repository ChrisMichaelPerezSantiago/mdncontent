## ✔️ flex_value 
 ---<br/>title: <flex><br/>slug: Web/CSS/flex_value<br/>tags:<br/>  - CSS<br/>  - CSS Data Type<br/>  - Data Type<br/>  - Layout<br/>  - Reference<br/>  - Web<br/>browser-compat: css.types.flex<br/>---<br/>{{CSSRef}}<br/><br/>The **`<flex>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) denotes a flexible length within a grid container. It is used in {{cssxref(grid-template-columns)}}, {{cssxref(grid-template-rows)}} and other related properties.<br/><br/>## Syntax<br/><br/>The `<flex>` data type is specified as a {{cssxref(&lt;number&gt;)}} followed by the unit `fr`. The `fr` unit represents a fraction of the leftover space in the grid container. As with all CSS dimensions, there is no space between the unit and the number.<br/><br/>## Examples<br/><br/>### Examples of correct values for the fr data type<br/><br/>```css<br/>1fr    /* Using an integer value */<br/>2.5fr  /* Using a float value */<br/>```<br/><br/>### Example of use in a tracklisting for CSS Grid layout<br/><br/>```css<br/>.grid {<br/>  display: grid;<br/>  grid-template-columns: 1fr 1fr 2.5fr 1.5fr;<br/>}<br/>```<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout)<br/>