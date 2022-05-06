## ✔️ caret-color 
 ---<br/>title: caret-color<br/>slug: Web/CSS/caret-color<br/>tags:<br/>  - CSS<br/>  - CSS Property<br/>  - CSS User Interface<br/>  - Editing<br/>  - HTML Colors<br/>  - Input<br/>  - Reference<br/>  - Styling HTML<br/>  - Text Editing<br/>  - caret<br/>  - caret-color<br/>  - contenteditable<br/>  - recipe:css-property<br/>browser-compat: css.properties.caret-color<br/>---<br/>{{CSSRef}}<br/><br/>The **`caret-color`** CSS property sets the color of the **insertion caret**, the visible marker where the next character typed will be inserted. This is sometimes referred to as the **text input cursor**. The caret appears in elements such as {{HTMLElement(input)}} or those with the {{htmlattrxref(contenteditable)}} attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.<br/><br/>{{EmbedInteractiveExample(pages/css/caret-color.html)}}<br/><br/>Note that the insertion caret is only one type of caret. For example, many browsers have a navigation caret, which acts similarly to an insertion caret but can be moved around in non-editable text. On the other hand, the mouse cursor image shown when hovering over text where the {{cssxref(cursor)}} property is `auto`, or when hovering over an element where the `cursor` property is `text` or `vertical-text`, though it sometimes looks like a caret, is not a caret (it's a cursor).<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword values */<br/>caret-color: auto;<br/>caret-color: transparent;<br/>caret-color: currentcolor;<br/><br/>/* <color> values */<br/>caret-color: red;<br/>caret-color: #5729e9;<br/>caret-color: rgb(0, 200, 0);<br/>caret-color: hsla(228, 4%, 24%, 0.8);<br/><br/>/* Global values */<br/>caret-color: inherit;<br/>caret-color: initial;<br/>caret-color: revert;<br/>caret-color: revert-layer;<br/>caret-color: unset;<br/>```<br/><br/>### Values<br/><br/>- `auto`<br/><br/>  - : The user agent selects an appropriate color for the caret. This is generally {{cssxref(&lt;color&gt;,currentcolor,#currentcolor_keyword)}}, but the user agent may choose a different color to ensure good visibility and contrast with the surrounding content, taking into account the value of `currentcolor`, the background, shadows, and other factors.<br/><br/>    > **Note:** While user agents may use `currentcolor` (which is usually animatable) for the `auto` value, `auto` is not interpolated in transitions and animations.<br/><br/>- {{cssxref(&lt;color&gt;)}}<br/>  - : The color of the caret.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Setting a custom caret color<br/><br/>#### HTML<br/><br/>```html<br/><input value=This field uses a default caret. size=64/><br/><input class=custom value=I have a custom caret color! size=64/><br/><p contenteditable class=custom>This paragraph can be<br/>   edited, and its caret has a custom color as well!</p><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>input {<br/>  caret-color: auto;<br/>  display: block;<br/>  margin-bottom: .5em;<br/>}<br/><br/>input.custom {<br/>  caret-color: red;<br/>}<br/><br/>p.custom {<br/>  caret-color: green;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample('Setting_a_custom_caret_color', 500, 200)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- The {{HTMLElement(input)}} element<br/>- The HTML {{htmlattrxref(contenteditable)}} attribute, which can be used to make any element's text editable<br/>- [Making content editable](/en-US/docs/Web/Guide/HTML/Editable_content)<br/>- [Applying color to HTML elements using CSS](/en-US/docs/Web/HTML/Applying_color)<br/>- The {{cssxref(&lt;color&gt;)}} data type<br/>- Other color-related properties: {{cssxref(color)}}, {{cssxref(background-color)}}, {{cssxref(border-color)}}, {{cssxref(outline-color)}}, {{cssxref(text-decoration-color)}}, {{cssxref(text-emphasis-color)}}, {{cssxref(text-shadow)}}, {{cssxref(caret-color)}}, and {{cssxref(column-rule-color)}}<br/>