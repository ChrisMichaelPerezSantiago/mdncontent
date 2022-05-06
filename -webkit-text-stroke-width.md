## ✔️ -webkit-text-stroke-width 
 ---<br/>title: '-webkit-text-stroke-width'<br/>slug: Web/CSS/-webkit-text-stroke-width<br/>tags:<br/>  - CSS<br/>  - CSS Property<br/>  - Non-standard<br/>  - Reference<br/>  - WebKit<br/>  - recipe:css-property<br/>browser-compat: css.properties.-webkit-text-stroke-width<br/>---<br/>{{CSSRef}}{{Non-standard_header}}<br/><br/>The **`-webkit-text-stroke-width`** [CSS](/en-US/docs/Web/CSS) property specifies the width of the stroke for text.<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword values */<br/>-webkit-text-stroke-width: thin;<br/>-webkit-text-stroke-width: medium;<br/>-webkit-text-stroke-width: thick;<br/><br/>/* <length> values */<br/>-webkit-text-stroke-width: 2px;<br/>-webkit-text-stroke-width: 0.1em;<br/>-webkit-text-stroke-width: 1mm;<br/>-webkit-text-stroke-width: 5pt;<br/><br/>/* Global values */<br/>-webkit-text-stroke-width: inherit;<br/>-webkit-text-stroke-width: initial;<br/>-webkit-text-stroke-width: unset;<br/>```<br/><br/>### Values<br/><br/>- `<line-width>`<br/>  - : The width of the stroke.<br/><br/>## Formal definition<br/><br/>{{CSSInfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Varying stroke widths<br/><br/>#### CSS<br/><br/>```css<br/>p {<br/>  margin: 0;<br/>  font-size: 4em;<br/>  -webkit-text-stroke-color: red;<br/>}<br/><br/>#thin {<br/>  -webkit-text-stroke-width: thin;<br/>}<br/><br/>#medium {<br/>  -webkit-text-stroke-width: 3px;<br/>}<br/><br/>#thick {<br/>  -webkit-text-stroke-width: 1.5mm;<br/>}<br/>```<br/><br/>#### HTML<br/><br/>```html<br/><p id=thin>Thin stroke</p><br/><p id=medium>Medium stroke</p><br/><p id=thick>Thick stroke</p><br/>```<br/><br/>#### Results<br/><br/>{{EmbedLiveSample(Varying_stroke_widths, 450px, 230px)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [Surfin' Safari blog post announcing this feature](https://webkit.org/blog/85/introducing-text-stroke/)<br/>- [CSS-Tricks article explaining this feature](https://css-tricks.com/adding-stroke-to-web-text/)<br/>- {{cssxref(-webkit-text-stroke-color)}}<br/>- {{cssxref(-webkit-text-stroke)}}<br/>- {{cssxref(-webkit-text-fill-color)}}<br/>