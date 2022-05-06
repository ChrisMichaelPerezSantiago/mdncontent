## ✔️ color 
 ---<br/>title: color<br/>slug: Web/CSS/color<br/>tags:<br/>  - CSS<br/>  - CSS Colors<br/>  - CSS Property<br/>  - CSS Text<br/>  - HTML Colors<br/>  - HTML Styles<br/>  - Layout<br/>  - Reference<br/>  - Styling HTML<br/>  - Styling text<br/>  - Web<br/>  - color<br/>  - recipe:css-property<br/>browser-compat: css.properties.color<br/>---<br/>{{CSSRef}}<br/><br/>The **`color`** CSS property sets the foreground [color value](/en-US/docs/Web/CSS/color_value) of an element's text and [text decorations](/en-US/docs/Web/CSS/text-decoration), and sets the {{cssxref(currentcolor)}} value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as {{cssxref(border-color)}}.<br/><br/>{{EmbedInteractiveExample(pages/css/color.html)}}<br/><br/>For an overview of using color in HTML, see [Applying color to HTML elements using CSS](/en-US/docs/Web/HTML/Applying_color).<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword values */<br/>color: currentcolor;<br/><br/>/* <named-color> values */<br/>color: red;<br/>color: orange;<br/>color: tan;<br/>color: rebeccapurple;<br/><br/>/* <hex-color> values */<br/>color: #090;<br/>color: #009900;<br/>color: #090a;<br/>color: #009900aa;<br/><br/>/* <rgb()> values */<br/>color: rgb(34, 12, 64, 0.6);<br/>color: rgba(34, 12, 64, 0.6);<br/>color: rgb(34 12 64 / 0.6);<br/>color: rgba(34 12 64 / 0.3);<br/>color: rgb(34.0 12 64 / 60%);<br/>color: rgba(34.6 12 64 / 30%);<br/><br/>/* <hsl()> values */<br/>color: hsl(30, 100%, 50%, 0.6);<br/>color: hsla(30, 100%, 50%, 0.6);<br/>color: hsl(30 100% 50% / 0.6);<br/>color: hsla(30 100% 50% / 0.6);<br/>color: hsl(30.0 100% 50% / 60%);<br/>color: hsla(30.2 100% 50% / 60%);<br/><br/>/* <hwb()> values */<br/>color: hwb(90 10% 10%);<br/>color: hwb(90 10% 10% / 0.5);<br/>color: hwb(90deg 10% 10%);<br/>color: hwb(1.5708rad 60% 0%);<br/>color: hwb(.25turn 0% 40% / 50%);<br/><br/>/* Global values */<br/>color: inherit;<br/>color: initial;<br/>color: revert;<br/>color: revert-layer;<br/>color: unset;<br/>```<br/><br/>The `color` property is specified as a single {{cssxref(&lt;color&gt;)}} value.<br/><br/>Note that the value must be a uniform {{cssxref(color)}}. It can't be a {{cssxref(&lt;gradient&gt;)}}, which is actually a type of {{cssxref(&lt;image&gt;)}}.<br/><br/>### Values<br/><br/>- {{cssxref(&lt;color&gt;)}}<br/>  - : Sets the color of the textual and decorative parts of the element.<br/><br/>## Accessibility concerns<br/><br/>It is important to ensure that the contrast ratio between the color of the text and the background the text is placed over is high enough that people experiencing low vision conditions will be able to read the content of the page.<br/><br/>Color contrast ratio is determined by comparing the luminosity of the text and background color values. In order to meet current [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/intro/wcag), a ratio of 4.5:1 is required for text content and 3:1 for larger text such as headings. Large text is defined as 18.66px and [bold](/en-US/docs/Web/CSS/font-weight) or larger, or 24px or larger.<br/><br/>- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)<br/>- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)<br/>- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Making text red<br/><br/>The following are all ways to make a paragraph's text red:<br/><br/>```css<br/>p { color: red; }<br/>p { color: #f00; }<br/>p { color: #ff0000; }<br/>p { color: rgb(255,0,0); }<br/>p { color: rgb(100%, 0%, 0%); }<br/>p { color: hsl(0, 100%, 50%); }<br/><br/>/* 50% translucent */<br/>p { color: #ff000080; }<br/>p { color: rgba(255, 0, 0, 0.5); }<br/>p { color: hsla(0, 100%, 50%, 0.5); }<br/>```<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- The {{cssxref(&lt;color&gt;)}} data type<br/>- Other color-related properties: {{cssxref(background-color)}}, {{cssxref(border-color)}}, {{cssxref(outline-color)}}, {{cssxref(text-decoration-color)}}, {{cssxref(text-emphasis-color)}}, {{cssxref(text-shadow)}}, {{cssxref(caret-color)}}, {{cssxref(column-rule-color)}}, and {{cssxref(print-color-adjust)}}<br/>- [Applying color to HTML elements using CSS](/en-US/docs/Web/HTML/Applying_color)<br/>