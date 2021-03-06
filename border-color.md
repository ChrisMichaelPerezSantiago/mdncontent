## ✔️ border-color 
 ---<br/>title: border-color<br/>slug: Web/CSS/border-color<br/>tags:<br/>  - CSS<br/>  - CSS Borders<br/>  - CSS Property<br/>  - CSS Styles<br/>  - HTML Colors<br/>  - Reference<br/>  - Styling HTML<br/>  - border-color<br/>  - borders<br/>  - colors<br/>  - recipe:css-shorthand-property<br/>browser-compat: css.properties.border-color<br/>---<br/>{{CSSRef}}<br/><br/>The **`border-color`** [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property sets the color of an element's border.<br/><br/>{{EmbedInteractiveExample(pages/css/border-color.html)}}<br/><br/>Each side can be set individually using {{CSSxRef(border-top-color)}}, {{CSSxRef(border-right-color)}}, {{CSSxRef(border-bottom-color)}}, and {{CSSxRef(border-left-color)}}; or using the writing mode-aware {{CSSxRef(border-block-start-color)}}, {{CSSxRef(border-block-end-color)}}, {{CSSxRef(border-inline-start-color)}}, and {{CSSxRef(border-inline-end-color)}}.<br/><br/>You can find more information about border colors in {{SectionOnPage(/en-US/docs/Web/HTML/Applying_color, Borders)}}.<br/><br/>## Constituent properties<br/><br/>This property is a shorthand for the following CSS properties:<br/><br/>- [`border-bottom-color`](/en-US/docs/Web/CSS/border-bottom-color)<br/>- [`border-left-color`](/en-US/docs/Web/CSS/border-left-color)<br/>- [`border-right-color`](/en-US/docs/Web/CSS/border-right-color)<br/>- [`border-top-color`](/en-US/docs/Web/CSS/border-top-color)<br/><br/>## Syntax<br/><br/>```css<br/>/* <color> values */<br/>border-color: red;<br/><br/>/* top and bottom | left and right */<br/>border-color: red #f015ca;<br/><br/>/* top | left and right | bottom */<br/>border-color: red rgb(240,30,50,.7) green;<br/><br/>/* top | right | bottom | left */<br/>border-color: red yellow green blue;<br/><br/>/* Global values */<br/>border-color: inherit;<br/>border-color: initial;<br/>border-color: revert;<br/>border-color: revert-layer;<br/>border-color: unset;<br/>```<br/><br/>The `border-color` property may be specified using one, two, three, or four values.<br/><br/>- When **one** value is specified, it applies the same color to **all four sides**.<br/>- When **two** values are specified, the first color applies to the **top and bottom**, the second to the **left and right**.<br/>- When **three** values are specified, the first color applies to the **top**, the second to the **left and right**, the third to the **bottom**.<br/>- When **four** values are specified, the colors apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).<br/><br/>### Values<br/><br/>- {{CSSxRef(&lt;color&gt;)}}<br/>  - : Defines the color of the border.<br/><br/>## Formal definition<br/><br/>{{CSSInfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Complete border-color usage<br/><br/>#### HTML<br/><br/>```html<br/><div id=justone><br/>  <p><code>border-color: red;</code> is equivalent to</p><br/>  <ul><li><code>border-top-color: red;</code></li><br/>    <li><code>border-right-color: red;</code></li><br/>    <li><code>border-bottom-color: red;</code></li><br/>    <li><code>border-left-color: red;</code></li><br/>  </ul><br/></div><br/><div id=horzvert><br/>  <p><code>border-color: gold red;</code> is equivalent to</p><br/>  <ul><li><code>border-top-color: gold;</code></li><br/>    <li><code>border-right-color: red;</code></li><br/>    <li><code>border-bottom-color: gold;</code></li><br/>    <li><code>border-left-color: red;</code></li><br/>  </ul><br/></div><br/><div id=topvertbott><br/>  <p><code>border-color: red cyan gold;</code> is equivalent to</p><br/>  <ul><li><code>border-top-color: red;</code></li><br/>    <li><code>border-right-color: cyan;</code></li><br/>    <li><code>border-bottom-color: gold;</code></li><br/>    <li><code>border-left-color: cyan;</code></li><br/>  </ul><br/></div><br/><div id=trbl><br/>  <p><code>border-color: red cyan black gold;</code> is equivalent to</p><br/>  <ul><li><code>border-top-color: red;</code></li><br/>    <li><code>border-right-color: cyan;</code></li><br/>    <li><code>border-bottom-color: black;</code></li><br/>    <li><code>border-left-color: gold;</code></li><br/>  </ul><br/></div><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>#justone {<br/>  border-color: red;<br/>}<br/><br/>#horzvert {<br/>  border-color: gold red;<br/>}<br/><br/>#topvertbott {<br/>  border-color: red cyan gold;<br/>}<br/><br/>#trbl {<br/>  border-color: red cyan black gold;<br/>}<br/><br/>/* Set width and style for all divs */<br/>div {<br/>  border: solid 0.3em;<br/>  width: auto;<br/>  margin: 0.5em;<br/>  padding: 0.5em;<br/>}<br/><br/>ul {<br/>  margin: 0;<br/>  list-style: none;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Complete_border-color_usage, 600, 700)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- Border-color related CSS properties: {{CSSxRef(border)}}, {{CSSxRef(border-top-color)}}, {{CSSxRef(border-right-color)}}, {{CSSxRef(border-bottom-color)}}, {{CSSxRef(border-left-color)}},<br/>- Other border-related CSS properties: {{CSSxRef(border-width)}}, {{CSSxRef(border-style)}}<br/>- The {{CSSxRef(&lt;color&gt;)}} data type<br/>- Other color-related properties: {{CSSxRef(color)}}, {{CSSxRef(background-color)}}, {{CSSxRef(outline-color)}}, {{CSSxRef(text-decoration-color)}}, {{CSSxRef(text-emphasis-color)}}, {{CSSxRef(text-shadow)}}, {{CSSxRef(caret-color)}}, and {{CSSxRef(column-rule-color)}}<br/>- [Applying color to HTML elements using CSS](/en-US/docs/Web/HTML/Applying_color)<br/>