## ✔️ overscroll-behavior-y 
 ---<br/>title: overscroll-behavior-y<br/>slug: Web/CSS/overscroll-behavior-y<br/>tags:<br/>  - CSS<br/>  - CSS Box Model<br/>  - CSS Property<br/>  - Reference<br/>  - overscroll-behavior-y<br/>  - recipe:css-property<br/>browser-compat: css.properties.overscroll-behavior-y<br/>---<br/>{{CSSRef}}<br/><br/>The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.<br/><br/>See {{cssxref(overscroll-behavior)}} for a full explanation.<br/><br/>```css<br/>/* Keyword values */<br/>overscroll-behavior-y: auto; /* default */<br/>overscroll-behavior-y: contain;<br/>overscroll-behavior-y: none;<br/><br/>/* Global values */<br/>overscroll-behavior-y: inherit;<br/>overscroll-behavior-y: initial;<br/>overscroll-behavior-y: revert;<br/>overscroll-behavior-y: revert-layer;<br/>overscroll-behavior-y: unset;<br/>```<br/><br/>## Syntax<br/><br/>The `overscroll-behavior-y` property is specified as a keyword chosen from the list of values below.<br/><br/>### Values<br/><br/>- `auto`<br/>  - : The default scroll overflow behavior occurs as normal.<br/>- `contain`<br/>  - : Default scroll overflow behavior is observed inside the element this value is set on (e.g. bounce effects or refreshes), but no scroll chaining occurs to neighboring scrolling areas, e.g. underlying elements will not scroll.<br/>- `none`<br/>  - : No scroll chaining occurs to neighboring scrolling areas, and default scroll overflow behavior is prevented.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Preventing an underlying element from scrolling vertically<br/><br/>```css<br/>.messages {<br/>  height: 220px;<br/>  overflow: auto;<br/>  overscroll-behavior-y: contain;<br/>}<br/>```<br/><br/>See {{cssxref(overscroll-behavior)}} for a full example and explanation.<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [Take control of your scroll: customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior/#demo)<br/>- The mapped logical properties: {{cssxref(overscroll-behavior-inline)}}, {{cssxref(overscroll-behavior-block)}}<br/>