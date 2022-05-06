## ✔️ max-width 
 ---<br/>title: max-width<br/>slug: Web/CSS/max-width<br/>tags:<br/>  - CSS<br/>  - CSS Property<br/>  - Layout<br/>  - Limits<br/>  - Maximum<br/>  - Reference<br/>  - dimensions<br/>  - max-width<br/>  - recipe:css-property<br/>  - size<br/>  - width<br/>browser-compat: css.properties.max-width<br/>---<br/>{{CSSRef}}<br/><br/>The **`max-width`** [CSS](/en-US/docs/Web/CSS) property sets the maximum width of an element. It prevents the [used value](/en-US/docs/Web/CSS/used_value) of the {{cssxref(width)}} property from becoming larger than the value specified by `max-width`.<br/><br/>{{EmbedInteractiveExample(pages/css/max-width.html)}}<br/><br/>`max-width` overrides {{cssxref(width)}}, but {{cssxref(min-width)}} overrides `max-width`.<br/><br/>## Syntax<br/><br/>```css<br/>/* <length> value */<br/>max-width: 3.5em;<br/><br/>/* <percentage> value */<br/>max-width: 75%;<br/><br/>/* Keyword values */<br/>max-width: none;<br/>max-width: max-content;<br/>max-width: min-content;<br/>max-width: fit-content(20em);<br/><br/>/* Global values */<br/>max-width: inherit;<br/>max-width: initial;<br/>max-width: revert;<br/>max-width: revert-layer;<br/>max-width: unset;<br/>```<br/><br/>### Values<br/><br/>- {{cssxref(&lt;length&gt;)}}<br/>  - : Defines the `max-width` as an absolute value.<br/>- {{cssxref(&lt;percentage&gt;)}}<br/>  - : Defines the `max-width` as a percentage of the containing block's width.<br/>- `none`<br/>  - : No limit on the size of the box.<br/>- `max-content`<br/>  - : The intrinsic preferred `max-width`.<br/>- `min-content`<br/>  - : The intrinsic minimum `max-width`.<br/>- `fit-content({{cssxref(&lt;length-percentage&gt;)}})`<br/>  - : Uses the `fit-content` formula with the available space replaced by the specified argument, i.e. `min(max-content, max(min-content, argument))`.<br/><br/>## Accessibility concerns<br/><br/>Ensure that elements set with a `max-width` are not truncated and/or do not obscure other content when the page is zoomed to increase text size.<br/><br/>- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)<br/>- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Setting max width in pixels<br/><br/>In this example, the child will be either 150 pixels wide or the width of the parent, whichever is smaller.<br/><br/>#### HTML<br/><br/>```html<br/><div id=parent><br/>  <div id=child><br/>    Fusce pulvinar vestibulum eros, sed luctus ex lobortis quis.<br/>  </div><br/></div><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>#parent {<br/>  background: lightblue;<br/>  width: 300px;<br/>}<br/><br/>#child {<br/>  background: gold;<br/>  width: 100%;<br/>  max-width: 150px;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Setting_max_width_in_pixels, 350, 100)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [The box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), {{cssxref(box-sizing)}}<br/>- {{cssxref(width)}}, {{cssxref(min-width)}}<br/>- The mapped logical properties: {{cssxref(max-inline-size)}}, {{cssxref(max-block-size)}}<br/>