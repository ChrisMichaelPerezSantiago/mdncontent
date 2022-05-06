## ✔️ margin 
 ---<br/>title: margin<br/>slug: Web/CSS/margin<br/>tags:<br/>  - CSS<br/>  - CSS Property<br/>  - Property<br/>  - recipe:css-shorthand-property<br/>browser-compat: css.properties.margin<br/>---<br/>{{CSSRef}}<br/><br/>The **`margin`** [CSS](/en-US/docs/Web/CSS) shorthand property sets the [margin area](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#margin_area) on all four sides of an element.<br/><br/>{{EmbedInteractiveExample(pages/css/margin.html)}}<br/><br/>## Constituent properties<br/><br/>This property is a shorthand for the following CSS properties:<br/><br/>- {{cssxref(margin-bottom)}}<br/>- {{cssxref(margin-left)}}<br/>- {{cssxref(margin-right)}}<br/>- {{cssxref(margin-top)}}<br/><br/>## Syntax<br/><br/>```css<br/>/* Apply to all four sides */<br/>margin: 1em;<br/>margin: -3px;<br/><br/>/* vertical | horizontal */<br/>margin: 5% auto;<br/><br/>/* top | horizontal | bottom */<br/>margin: 1em auto 2em;<br/><br/>/* top | right | bottom | left */<br/>margin: 2px 1em 0 auto;<br/><br/>/* Global values */<br/>margin: inherit;<br/>margin: initial;<br/>margin: revert;<br/>margin: revert-layer;<br/>margin: unset;<br/>```<br/><br/>The `margin` property may be specified using one, two, three, or four values. Each value is a {{cssxref(&lt;length&gt;)}}, a {{cssxref(&lt;percentage&gt;)}}, or the keyword `auto`. Negative values draw the element closer to its neighbors than it would be by default.<br/><br/>- When **one** value is specified, it applies the same margin to **all four sides**.<br/>- When **two** values are specified, the first margin applies to the **top and bottom**, the second to the **left and right**.<br/>- When **three** values are specified, the first margin applies to the **top**, the second to the **right and left**, the third to the **bottom**.<br/>- When **four** values are specified, the margins apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).<br/><br/>### Values<br/><br/>- {{cssxref(length)}}<br/>  - : The size of the margin as a fixed value.<br/>- {{cssxref(percentage)}}<br/>  - : The size of the margin as a percentage, relative to the inline size (_width_ in a horizontal language, defined by {{cssxref(writing-mode)}}) of the [containing block](/en-US/docs/Web/CSS/Containing_block).<br/>- `auto`<br/>  - : The browser selects a suitable margin to use. For example, in certain cases this value can be used to center an element.<br/><br/>## Description<br/><br/>This property can be used to set a margin on all four sides of an element. Margins create extra space _around_ an element, unlike {{cssxref(padding)}}, which creates extra space _within_ an element.<br/><br/>The top and bottom margins have no effect on _non-[replaced](/en-US/docs/Web/CSS/Replaced_element)_ inline elements, such as {{HTMLElement(span)}} or {{HTMLElement(code)}}.<br/><br/>### Horizontal centering<br/><br/>To center something horizontally in modern browsers, you can use {{cssxref(display)}}`: flex;` {{cssxref(justify-content)}}`: center;`.<br/><br/>However, in older browsers like IE8-9 that do not support Flexible Box Layout, these are not available. In order to center an element inside its parent, use `margin: 0 auto;`.<br/><br/>### Margin collapsing<br/><br/>Elements' top and bottom margins are sometimes collapsed into a single margin that is equal to the larger of the two margins. See [Mastering margin collapsing](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing) for more information.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Simple example<br/><br/>#### HTML<br/><br/>```html<br/><div class=center>This element is centered.</div><br/><br/><div class=outside>This element is positioned outside of its container.</div><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>.center {<br/>  margin: auto;<br/>  background: lime;<br/>  width: 66%;<br/>}<br/><br/>.outside {<br/>  margin: 3rem 0 0 -3rem;<br/>  background: cyan;<br/>  width: 66%;<br/>}<br/>```<br/><br/>{{ EmbedLiveSample('Simple_example','100%',120) }}<br/><br/>### More examples<br/><br/>```css<br/>margin: 5%;                 /* All sides: 5% margin */<br/><br/>margin: 10px;               /* All sides: 10px margin */<br/><br/>margin: 1.6em 20px;         /* top and bottom: 1.6em margin */<br/>                            /* left and right: 20px margin  */<br/><br/>margin: 10px 3% -1em;       /* top:            10px margin */<br/>                            /* left and right: 3% margin   */<br/>                            /* bottom:         -1em margin */<br/><br/>margin: 10px 3px 30px 5px;  /* top:    10px margin */<br/>                            /* right:  3px margin  */<br/>                            /* bottom: 30px margin */<br/>                            /* left:   5px margin  */<br/><br/>margin: 2em auto;           /* top and bottom: 2em margin   */<br/>                            /* Box is horizontally centered */<br/><br/>margin: auto;               /* top and bottom: 0 margin     */<br/>                            /* Box is horizontally centered */<br/>```<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [Introduction to the CSS basic box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)<br/>- [Margin collapsing](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)<br/>- {{cssxref(margin-top)}}, {{cssxref(margin-right)}}, {{cssxref(margin-bottom)}}, and {{cssxref(margin-left)}}<br/>- The mapped logical properties: {{cssxref(margin-block-start)}}, {{cssxref(margin-block-end)}}, {{cssxref(margin-inline-start)}}, and {{cssxref(margin-inline-end)}} and the shorthands {{cssxref(margin-block)}} and {{cssxref(margin-inline)}}<br/>