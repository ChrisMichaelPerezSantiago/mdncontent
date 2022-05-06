## ✔️ _doublecolon_-webkit-meter-bar 
 ---<br/>title: '::-webkit-meter-bar'<br/>slug: Web/CSS/::-webkit-meter-bar<br/>tags:<br/>  - '-webkit-meter-bar'<br/>  - CSS<br/>  - Non-standard<br/>  - Pseudo-element<br/>  - Reference<br/>  - Selector<br/>  - WebKit<br/>browser-compat: css.selectors.-webkit-meter-bar<br/>---<br/>{{CSSRef}}{{Non-standard_header}}<br/><br/>The **`::-webkit-meter-bar`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Glossary/Pseudo-class) is a [WebKit extension](/en-US/docs/Web/CSS/WebKit_Extensions) that represents the meter bar in a {{HTMLElement(meter)}} element.<br/><br/>## Syntax<br/><br/>```css<br/>::-webkit-meter-bar<br/>```<br/><br/>## Specifications<br/><br/>Not part of any standard.<br/><br/>## Examples<br/><br/>### HTML<br/><br/>```html<br/><meter min=0 max=10 value=6>Score out of 10</meter><br/>```<br/><br/>### CSS<br/><br/>```css<br/>meter {<br/>  /* Reset the default appearance */<br/>  -webkit-appearance: none;<br/>  -moz-appearance: none;<br/>  appearance: none;<br/>}<br/><br/>meter::-webkit-meter-bar {<br/>  background: #eee;<br/>  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2) inset;<br/>  border-radius: 3px;<br/>}<br/>```<br/><br/>### Result<br/><br/>{{ EmbedLiveSample('Examples') }}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- The pseudo-elements used by WebKit/Blink to style other parts of a {{htmlelement(meter)}} element are as follows:<br/><br/>  - {{cssxref(::-webkit-meter-inner-element)}}<br/>  - {{cssxref(::-webkit-meter-even-less-good-value)}}<br/>  - {{cssxref(::-webkit-meter-optimum-value)}}<br/>  - {{cssxref(::-webkit-meter-suboptimum-value)}}<br/><br/>- [WebKit CSS extensions](/en-US/docs/Web/CSS/WebKit_Extensions)<br/>