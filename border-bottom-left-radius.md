## ✔️ border-bottom-left-radius 
 ---<br/>title: border-bottom-left-radius<br/>slug: Web/CSS/border-bottom-left-radius<br/>tags:<br/>  - CSS<br/>  - CSS Borders<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.border-bottom-left-radius<br/>---<br/>{{CSSRef}}<br/><br/>The **`border-bottom-left-radius`** [CSS](/en-US/docs/Web/CSS) property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.<br/><br/>{{EmbedInteractiveExample(pages/css/border-bottom-left-radius.html)}}<br/><br/>The rounding can be a circle or an ellipse, or if one of the value is `0` no rounding is done and the corner is square.<br/><br/>![border-bottom-left-radius.png](border-bottom-left-radius.png)<br/><br/>A background, being an image or a color, is clipped at the border, even a rounded one; the exact location of the clipping is defined by the value of the {{cssxref(background-clip)}} property.<br/><br/>> **Note:** If the value of this property is not set in a {{cssxref(border-radius)}} shorthand property that is applied to the element after the `border-bottom-left-radius` CSS property, the value of this property is then reset to its initial value by the [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties).<br/><br/>## Syntax<br/><br/>```css<br/>/* the corner is a circle */<br/>/* border-bottom-left-radius: radius */<br/>border-bottom-left-radius: 3px;<br/><br/>/* Percentage values */<br/><br/>/* circle if box is a square or ellipse if box is a rectangle */<br/>border-bottom-left-radius: 20%;<br/><br/>/* same as above: 20% of horizontal(width) and vertical(height) */<br/>border-bottom-left-radius: 20% 20%;<br/><br/>/* 20% of horizontal(width) and 10% of vertical(height) */<br/>border-bottom-left-radius: 20% 10%;<br/><br/>/* the corner is an ellipse */<br/>/* border-bottom-left-radius: horizontal vertical */<br/>border-bottom-left-radius: 0.5em 1em;<br/><br/>/* Global values */<br/>border-bottom-left-radius: inherit;<br/>border-bottom-left-radius: initial;<br/>border-bottom-left-radius: revert;<br/>border-bottom-left-radius: revert-layer;<br/>border-bottom-left-radius: unset;<br/>```<br/><br/>With one value:<br/><br/>- the value is a {{cssxref(&lt;length&gt;)}} or a {{cssxref(&lt;percentage&gt;)}} denoting the radius of the circle to use for the border in that corner.<br/><br/>With two values:<br/><br/>- the first value is a {{cssxref(&lt;length&gt;)}} or a {{cssxref(&lt;percentage&gt;)}} denoting the horizontal semi-major axis of the ellipse to use for the border in that corner.<br/>- the second value is a {{cssxref(&lt;length&gt;)}} or a {{cssxref(&lt;percentage&gt;)}} denoting the vertical semi-major axis of the ellipse to use for the border in that corner.<br/><br/>### Values<br/><br/>- `<length-percentage>`<br/>  - : Denotes the size of the circle radius or the semi-major and semi-minor axes of the ellipse. As absolute length it can be expressed in any unit allowed by the CSS {{cssxref(&lt;length&gt;)}} data type. Percentages for the horizontal axis refer to the width of the box, percentages for the vertical axis refer to the height of the box. Negative values are invalid.<br/><br/>## Formal definition<br/><br/>{{CSSInfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Arc of a circle<br/><br/>A single `<length>` value produces an arc of a circle.<br/><br/>```html hidden<br/><div></div><br/>```<br/><br/>```css<br/>div {<br/>  border-bottom-left-radius: 40px;<br/>  background-color: lightgreen;<br/>  border: solid 1px black;<br/>  width: 100px;<br/>  height: 100px;<br/>}<br/>```<br/><br/>{{EmbedLiveSample(Arc_of_a_circle)}}<br/><br/>### Arc of an ellipse<br/><br/>Two different `<length>` values produce an arc of an ellipse.<br/><br/>```html hidden<br/><div></div><br/>```<br/><br/>```css<br/>div {<br/>  border-bottom-left-radius: 40px 20px;<br/>  background-color: lightgreen;<br/>  border: solid 1px black;<br/>  width: 100px;<br/>  height: 100px;<br/>}<br/>```<br/><br/>{{EmbedLiveSample(Arc_of_an_ellipse)}}<br/><br/>### Square element with percentage radius<br/><br/>A square element with a single `<percentage>` value produces an arc of a circle.<br/><br/>```html hidden<br/><div></div><br/>```<br/><br/>```css<br/>div {<br/>  border-bottom-left-radius: 40%;<br/>  background-color: lightgreen;<br/>  border: solid 1px black;<br/>  width: 100px;<br/>  height: 100px;<br/>}<br/>```<br/><br/>{{EmbedLiveSample(Square_element_with_percentage_radius)}}<br/><br/>### Non-square element with percentage radius<br/><br/>A non-square element with a single `<percentage>` value produces an arc of an ellipse.<br/><br/>```html hidden<br/><div></div><br/>```<br/><br/>```css<br/>div {<br/>  border-bottom-left-radius: 40%;<br/>  background-color: lightgreen;<br/>  border: solid 1px black;<br/>  width: 200px;<br/>  height: 100px;<br/>}<br/>```<br/><br/>{{EmbedLiveSample(Non-square_element_with_percentage_radius)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{cssxref(border-radius)}} shorthand property<br/>- {{cssxref(border-top-right-radius)}}, {{cssxref(border-bottom-right-radius)}}, and {{cssxref(border-top-left-radius)}}<br/>