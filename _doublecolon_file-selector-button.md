## ✔️ _doublecolon_file-selector-button 
 ---<br/>title: '::file-selector-button'<br/>slug: Web/CSS/::file-selector-button<br/>tags:<br/>  - CSS<br/>  - Pseudo-element<br/>  - Reference<br/>  - Selector<br/>browser-compat: css.selectors.file-selector-button<br/>---<br/>{{CSSRef}}<br/><br/>The **`::file-selector-button`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents the button of an {{HTMLElement(input) }} of  [`type=file`](/en-US/docs/Web/HTML/Element/input/file).<br/><br/>> **Note:** Older versions of WebKit/Blink compatible browsers like Chrome, Opera and Safari (indicated by the `-webkit` prefix) supported a non-standard pseudo-element `::-webkit-file-upload-button`.<br/>><br/>> Legacy Edge and later versions of IE supported a non-standard pseudo-element `::-ms-browse`.<br/>><br/>> Both of these pseudo-elements serve the same purpose as `::file-selector-button`.<br/><br/>## Syntax<br/><br/>```css<br/>selector::file-selector-button<br/>```<br/><br/>## Examples<br/><br/>### Basic example<br/><br/>#### HTML<br/><br/>```html<br/><form><br/>  <label for=fileUpload>Upload file</label><br/>  <input type=file id=fileUpload><br/></form><br/>```<br/><br/>#### CSS<br/><br/>```css hidden<br/>form {<br/>  display: flex;<br/>  gap: 1em;<br/>  align-items: center;<br/>}<br/>```<br/><br/>```css<br/>input[type=file]::file-selector-button {<br/>  border: 2px solid #6c5ce7;<br/>  padding: .2em .4em;<br/>  border-radius: .2em;<br/>  background-color: #a29bfe;<br/>  transition: 1s;<br/>}<br/><br/>input[type=file]::file-selector-button:hover {<br/>  background-color: #81ecec;<br/>  border: 2px solid #00cec9;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Basic_example, 100%, 150)}}<br/><br/>Example with fallback for older browsers supporting the `-webkit` and `-ms` prefixes. Note that as a selector you will need to write out the whole code block twice, as an unrecognized selector invalidates the whole list.<br/><br/>Note that `::file-selector-button` is a whole element, and as such matches the rules from the UA stylesheet. In particular, fonts and colors won't necessarily inherit from the `input` element.<br/><br/>### Fallback example<br/><br/>#### HTML<br/><br/>```html<br/><form><br/>  <label for=fileUpload>Upload file</label><br/>  <input type=file id=fileUpload><br/></form><br/>```<br/><br/>#### CSS<br/><br/>```css hidden<br/>form {<br/>  display: flex;<br/>  gap: 1em;<br/>  align-items: center;<br/>}<br/>```<br/><br/>```css<br/>input[type=file]::-ms-browse {<br/>  border: 2px solid #6c5ce7;<br/>  padding: .2em .4em;<br/>  border-radius: .2em;<br/>  background-color: #a29bfe;<br/>}<br/><br/>input[type=file]::-webkit-file-upload-button {<br/>  border: 2px solid #6c5ce7;<br/>  padding: .2em .4em;<br/>  border-radius: .2em;<br/>  background-color: #a29bfe;<br/>  transition: 1s;<br/>}<br/><br/>input[type=file]::file-selector-button {<br/>  border: 2px solid #6c5ce7;<br/>  padding: .2em .4em;<br/>  border-radius: .2em;<br/>  background-color: #a29bfe;<br/>  transition: 1s;<br/>}<br/><br/>input[type=file]::-ms-browse:hover {<br/>  background-color: #81ecec;<br/>  border: 2px solid #00cec9;<br/>}<br/><br/>input[type=file]::-webkit-file-upload-button:hover {<br/>  background-color: #81ecec;<br/>  border: 2px solid #00cec9;<br/>}<br/><br/>input[type=file]::file-selector-button:hover {<br/>  background-color: #81ecec;<br/>  border: 2px solid #00cec9;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Fallback_example, 100%, 150)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [WebKit CSS extensions](/en-US/docs/Web/CSS/WebKit_Extensions)<br/>- [Microsoft CSS extensions](/en-US/docs/Web/CSS/Microsoft_Extensions)<br/>- [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API)<br/>- [File and Directory Entries API support in Firefox](/en-US/docs/Web/API/File_and_Directory_Entries_API/Firefox_support)<br/>- [`<input type=file>`](/en-US/docs/Web/HTML/Element/input/file)<br/>