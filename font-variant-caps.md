## ✔️ font-variant-caps 
 ---<br/>title: font-variant-caps<br/>slug: Web/CSS/font-variant-caps<br/>tags:<br/>  - CSS<br/>  - CSS Fonts<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.font-variant-caps<br/>---<br/>{{CSSRef}}<br/><br/>The **`font-variant-caps`** [CSS](/en-US/docs/Web/CSS) property controls the use of alternate glyphs for capital letters.<br/><br/>{{EmbedInteractiveExample(pages/css/font-variant-caps.html)}}<br/><br/>When a given font includes capital letter glyphs of multiple different sizes, this property selects the most appropriate ones. If petite capital glyphs are not available, they are rendered using small capital glyphs. If these are not present, the browser synthesizes them from the uppercase glyphs.<br/><br/>Fonts sometimes include special glyphs for various caseless characters (such as punctuation marks) to better match the capitalized characters around them. However, small capital glyphs are never synthesized for caseless characters.<br/><br/>### Language-specific rules<br/><br/>This property accounts for language-specific case mapping rules. For example:<br/><br/>- In Turkic languages, such as Turkish (tr), Azerbaijani (az), Crimean Tatar (crh), Volga Tatar (tt), and Bashkir (ba), there are two kinds of `i` (one with the dot, one without) and two case pairings: `i`/`İ` and `ı`/`I`.<br/>- In German (de), the `ß` may become `ẞ` (U+1E9E) in uppercase.<br/>- In Greek (el), vowels lose their accent when the whole word is in uppercase (`ά`/`Α`), except for the disjunctive eta (`ή`/`Ή`). Also, diphthongs with an accent on the first vowel lose the accent and gain a diacritic on the second vowel (`άι`/`ΑΪ`).<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword values */<br/>font-variant-caps: normal;<br/>font-variant-caps: small-caps;<br/>font-variant-caps: all-small-caps;<br/>font-variant-caps: petite-caps;<br/>font-variant-caps: all-petite-caps;<br/>font-variant-caps: unicase;<br/>font-variant-caps: titling-caps;<br/><br/>/* Global values */<br/>font-variant-caps: inherit;<br/>font-variant-caps: initial;<br/>font-variant-caps: revert;<br/>font-variant-caps: revert-layer;<br/>font-variant-caps: unset;<br/>```<br/><br/>The `font-variant-caps` property is specified using a single keyword value from the list below. In each case, if the font doesn't support the OpenType value, then it synthesizes the glyphs.<br/><br/>### Values<br/><br/>- `normal`<br/>  - : Deactivates of the use of alternate glyphs.<br/>- `small-caps`<br/>  - : Enables display of small capitals (OpenType feature: `smcp`). Small-caps glyphs typically use the form of uppercase letters but are reduced to the size of lowercase letters.<br/>- `all-small-caps`<br/>  - : Enables display of small capitals for both upper and lowercase letters (OpenType features: `c2sc`, `smcp`).<br/>- `petite-caps`<br/>  - : Enables display of petite capitals (OpenType feature: `pcap`).<br/>- `all-petite-caps`<br/>  - : Enables display of petite capitals for both upper and lowercase letters (OpenType features: `c2pc`, `pcap`).<br/>- `unicase`<br/>  - : Enables display of mixture of small capitals for uppercase letters with normal lowercase letters (OpenType feature: `unic`).<br/>- `titling-caps`<br/>  - : Enables display of titling capitals (OpenType feature: `titl`). Uppercase letter glyphs are often designed for use with lowercase letters. When used in all uppercase titling sequences they can appear too strong. Titling capitals are designed specifically for this situation.<br/><br/>## Accessibility concerns<br/><br/>Large sections of text set with a `font-variant` value of `all-small-caps` or `all-petite-caps` may be difficult for people with cognitive concerns such as Dyslexia to read.<br/><br/>- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)<br/>- [W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Setting the small-caps font variant<br/><br/>#### HTML<br/><br/>```html<br/><p class=small-caps>Firefox rocks, small caps!</p><br/><p class=normal>Firefox rocks, normal caps!</p><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>.small-caps {<br/>  font-variant-caps: small-caps;<br/>  font-style: italic;<br/>}<br/>.normal {<br/>  font-variant-caps: normal;<br/>  font-style: italic;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{ EmbedLiveSample('Setting_the_small-caps_font_variant') }}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See Also<br/><br/>- {{cssxref(font-variant-alternates)}}<br/>- {{cssxref(font-variant)}}<br/>- {{cssxref(font-variant-east-asian)}}<br/>- {{cssxref(font-variant-ligatures)}}<br/>- {{cssxref(font-variant-numeric)}}<br/>