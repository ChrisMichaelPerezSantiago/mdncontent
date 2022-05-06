## ✔️ font-variant-east-asian 
 ---<br/>title: font-variant-east-asian<br/>slug: Web/CSS/font-variant-east-asian<br/>tags:<br/>  - CSS<br/>  - CSS Fonts<br/>  - CSS Property<br/>  - NeedsLiveSample<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.font-variant-east-asian<br/>---<br/>{{CSSRef}}<br/><br/>The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.<br/><br/>```css<br/>font-variant-east-asian: normal;<br/>font-variant-east-asian: ruby;<br/>font-variant-east-asian: jis78;              /* <east-asian-variant-values> */<br/>font-variant-east-asian: jis83;              /* <east-asian-variant-values> */<br/>font-variant-east-asian: jis90;              /* <east-asian-variant-values> */<br/>font-variant-east-asian: jis04;              /* <east-asian-variant-values> */<br/>font-variant-east-asian: simplified;         /* <east-asian-variant-values> */<br/>font-variant-east-asian: traditional;        /* <east-asian-variant-values> */<br/>font-variant-east-asian: full-width;         /* <east-asian-width-values> */<br/>font-variant-east-asian: proportional-width; /* <east-asian-width-values> */<br/>font-variant-east-asian: ruby full-width jis83;<br/><br/>/* Global values */<br/>font-variant-east-asian: inherit;<br/>font-variant-east-asian: initial;<br/>font-variant-east-asian: revert;<br/>font-variant-east-asian: revert-layer;<br/>font-variant-east-asian: unset;<br/>```<br/><br/>## Syntax<br/><br/>### Values<br/><br/>- `normal`<br/>  - : This keyword leads to the deactivation of the use of such alternate glyphs.<br/>- `ruby`<br/>  - : This keyword forces the use of special glyphs for ruby characters. As these are usually smaller, font creators often designs specific forms, usually slightly bolder to improve the contrast. This keyword corresponds to the OpenType values `ruby`.<br/>- `<east-asian-variant-values>`<br/><br/>  - : These values specify a set of logographic glyph variants which should be used for display. Possible values are:<br/><br/>    | Keyword       | Standard defining the glyphs                                                | OpenType equivalent |<br/>    | ------------- | --------------------------------------------------------------------------- | ------------------- |<br/>    | `jis78`       | [JIS X 0208:1978](https://en.wikipedia.org/wiki/JIS_X_0208#First_standard)  | `jp78`              |<br/>    | `jis83`       | [JIS X 0208:1983](https://en.wikipedia.org/wiki/JIS_X_0208#Second_standard) | `jp83`              |<br/>    | `jis90`       | [JIS X 0208:1990](https://en.wikipedia.org/wiki/JIS_X_0208#Third_standard)  | `jp90`              |<br/>    | `jis04`       | [JIS X 0213:2004](https://en.wikipedia.org/wiki/JIS_X_0213)                 | `jp04`              |<br/>    | `simplified`  | None, use the simplified Chinese glyphs                                     | `smpl`              |<br/>    | `traditional` | None, use the traditional Chinese glyphs                                    | `trad`              |<br/><br/>- `<east-asian-width-values>`<br/><br/>  - : These values control the sizing of figures used for East Asian characters. Two values are possible:<br/><br/>    - `proportional-width` activating the set of East Asian characters which vary in width. It corresponds to the OpenType values `pwid`.<br/>    - `full-width` activating the set of East Asian characters which are all of the same, roughly square, width metric. It corresponds to the OpenType values `fwid`.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Setting East Asian glyph variants<br/><br/>This example require font Yu Gothic installed in your OS, other fonts may not support OpenType features.<br/><br/>#### HTML<br/><br/>```html<br/><table><br/><thead></thead><br/><tbody style=border:0;><br/>  <tr><br/>    <th>normal/jis78:</th><br/>    <td>麹町</td><br/>    <td class=jis78>麹町</td><br/>  </tr><br/>  <tr><br/>    <th>normal/ruby:</th><br/>    <td>しんかんせん</td><br/>    <td class=ruby>しんかんせん</td><br/>  </tr><br/>  <tr><br/>    <th>normal/traditional:</th><br/>    <td>大学</td><br/>    <td class=traditional>大学</td><br/>  </tr><br/></tbody><br/></table><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>td{<br/>  font-family:Yu Gothic;<br/>  font-size:20px;<br/>}<br/>th{<br/>  color:grey;<br/>  padding-right:10px;<br/>}<br/><br/>.ruby {<br/>  font-variant-east-asian: ruby;<br/>}<br/><br/>.jis78 {<br/>  font-variant-east-asian: jis78;<br/>}<br/><br/>.traditional{<br/>  font-variant-east-asian: traditional;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample('Setting_East_Asian_glyph_variants')}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See Also<br/><br/>- {{cssxref(font-variant-alternates)}}<br/>- {{cssxref(font-variant-caps)}}<br/>- {{cssxref(font-variant)}}<br/>- {{cssxref(font-variant-ligatures)}}<br/>- {{cssxref(font-variant-numeric)}}<br/>