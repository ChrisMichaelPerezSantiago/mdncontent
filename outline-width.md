## ✔️ outline-width 
 ---<br/>title: outline-width<br/>slug: Web/CSS/outline-width<br/>tags:<br/>  - CSS<br/>  - CSS Outline<br/>  - CSS Property<br/>  - Layout<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.outline-width<br/>---<br/>{{CSSRef}}<br/><br/>The [CSS](/en-US/docs/Web/CSS) **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the {{cssxref(border)}}.<br/><br/>{{EmbedInteractiveExample(pages/css/outline-width.html)}}<br/><br/>It is often more convenient to use the shorthand property {{cssxref(outline)}} when defining the appearance of an outline.<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword values */<br/>outline-width: thin;<br/>outline-width: medium;<br/>outline-width: thick;<br/><br/>/* <length> values */<br/>outline-width: 1px;<br/>outline-width: 0.1em;<br/><br/>/* Global values */<br/>outline-width: inherit;<br/>outline-width: initial;<br/>outline-width: revert;<br/>outline-width: revert-layer;<br/>outline-width: unset;<br/>```<br/><br/>The `outline-width` property is specified as any one of the values listed below.<br/><br/>### Values<br/><br/>- {{cssxref(&lt;length&gt;)}}<br/>  - : The width of the outline specified as a `<length>`.<br/>- `thin`<br/>  - : Depends on the user agent. Typically equivalent to `1px` in desktop browsers (including Firefox).<br/>- `medium`<br/>  - : Depends on the user agent. Typically equivalent to `3px` in desktop browsers (including Firefox).<br/>- `thick`<br/>  - : Depends on the user agent. Typically equivalent to `5px` in desktop browsers (including Firefox).<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Setting an element's outline width<br/><br/>#### HTML<br/><br/>```html<br/><span id=thin>thin</span><br/><span id=medium>medium</span><br/><span id=thick>thick</span><br/><span id=twopixels>2px</span><br/><span id=oneex>1ex</span><br/><span id=em>1.2em</span><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>span {<br/>  outline-style: solid;<br/>  display: inline-block;<br/>  margin: 20px;<br/>}<br/><br/>#thin {<br/>  outline-width: thin;<br/>}<br/><br/>#medium {<br/>  outline-width: medium;<br/>}<br/><br/>#thick {<br/>  outline-width: thick;<br/>}<br/><br/>#twopixels {<br/>  outline-width: 2px;<br/>}<br/><br/>#oneex {<br/>  outline-width: 1ex;<br/>}<br/><br/>#em {<br/>  outline-width: 1.2em;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample('Setting_an_elements_outline_width', '100%', '80')}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{cssxref(outline)}}<br/>- {{cssxref(outline-color)}}<br/>- {{cssxref(outline-style)}}<br/>