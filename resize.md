## ✔️ resize 
 ---<br/>title: resize<br/>slug: Web/CSS/resize<br/>tags:<br/>  - Basic User Interface<br/>  - CSS<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.resize<br/>---<br/>{{CSSRef}}<br/><br/>The **`resize`** [CSS](/en-US/docs/Web/CSS) property sets whether an element is resizable, and if so, in which directions.<br/><br/>{{EmbedInteractiveExample(pages/css/resize.html)}}<br/><br/>`resize` does not apply to the following:<br/><br/>- Inline elements<br/>- Block elements for which the {{cssxref(overflow)}} property is set to `visible`<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword values */<br/>resize: none;<br/>resize: both;<br/>resize: horizontal;<br/>resize: vertical;<br/>resize: block;<br/>resize: inline;<br/><br/>/* Global values */<br/>resize: inherit;<br/>resize: initial;<br/>resize: revert;<br/>resize: revert-layer;<br/>resize: unset;<br/>```<br/><br/>The `resize` property is specified as a single keyword value from the list below.<br/><br/>### Values<br/><br/>- `none`<br/>  - : The element offers no user-controllable method for resizing it.<br/>- `both`<br/>  - : The element displays a mechanism for allowing the user to resize it, which may be resized both horizontally and vertically.<br/>- `horizontal`<br/>  - : The element displays a mechanism for allowing the user to resize it in the _horizontal_ direction.<br/>- `vertical`<br/>  - : The element displays a mechanism for allowing the user to resize it in the _vertical_ direction.<br/>- `block` {{experimental_inline}}<br/>  - : The element displays a mechanism for allowing the user to resize it in the _block_ direction (either horizontally or vertically, depending on the {{cssxref(writing-mode)}} and {{cssxref(direction)}} value).<br/>- `inline` {{experimental_inline}}<br/>  - : The element displays a mechanism for allowing the user to resize it in the _inline_ direction (either horizontally or vertically, depending on the {{cssxref(writing-mode)}} and {{cssxref(direction)}} value).<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Disabling resizability of textareas<br/><br/>In many browsers, {{HTMLElement(textarea)}} elements are resizable by default. You may override this behavior with the `resize` property.<br/><br/>#### HTML<br/><br/>```html<br/><textarea>Type some text here.</textarea><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>textarea {<br/>  resize: none; /* Disables resizability */<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Disabling_resizability_of_textareas,200,100)}}<br/><br/>### Using resize with arbitrary elements<br/><br/>You can use the `resize` property to make any element resizable. In the example below, a resizable {{HTMLElement(div)}} contains a resizable paragraph ({{HTMLElement(p)}} element).<br/><br/>#### HTML<br/><br/>```html<br/><div class=resizable><br/>  <p class=resizable><br/>    This paragraph is resizable in all directions, because<br/>    the CSS `resize` property is set to `both` on this element.<br/>  </p><br/></div><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>.resizable {<br/>  resize: both;<br/>  overflow: scroll;<br/>  border: 1px solid black;<br/>}<br/><br/>div {<br/>  height: 300px;<br/>  width: 300px;<br/>}<br/><br/>p {<br/>  height: 200px;<br/>  width: 200px;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Using_resize_with_arbitrary_elements,450,450)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{HTMLElement(textarea)}}<br/>