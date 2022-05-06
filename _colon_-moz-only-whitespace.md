## ✔️ _colon_-moz-only-whitespace 
 ---<br/>title: ':-moz-only-whitespace'<br/>slug: Web/CSS/:-moz-only-whitespace<br/>tags:<br/>  - ':-moz-only-whitespace'<br/>  - CSS<br/>  - Non-standard<br/>  - Pseudo-class<br/>  - Reference<br/>  - Selector<br/>browser-compat: css.selectors.-moz-only-whitespace<br/>---<br/>{{CSSRef}}<br/><br/>{{Non-standard_Header}}<br/><br/>> **Note:** In {{SpecName(CSS4 Selectors, #the-empty-pseudo)}} the {{CSSxRef(:empty)}} selector was changed to act like `:-moz-only-whitespace`, but no browser currently supports this yet.<br/><br/>The **`:-moz-only-whitespace`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches elements that only contain text nodes that only contain {{Glossary(whitespace)}}. (This includes elements with empty text nodes and elements with no child nodes.)<br/><br/>## Syntax<br/><br/>{{CSSSyntax}}<br/><br/>## Examples<br/><br/>### Simple :-moz-only-whitespace example<br/><br/>#### HTML<br/><br/>```html<br/><div> </div><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>div {<br/>  border: 4px solid red;<br/>}<br/><br/>:-moz-only-whitespace {<br/>  border-color: lime;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample('Simple_-moz-only-whitespace_example', '100%', 50)}}<br/><br/>## Specifications<br/><br/>Briefly defined as `:blank` in {{SpecName(CSS4 Selectors, #changes-2018-02)}}, but then the functionality was merged into {{CSSxRef(:empty)}} and {{CSSxRef(:blank)}} redefined to mean empty {{HTMLElement(input)}}.<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{CSSxRef(:blank)}} {{Experimental_Inline}}<br/>- {{CSSxRef(:empty)}}<br/>