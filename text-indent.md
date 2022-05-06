## ✔️ text-indent 
 ---<br/>title: text-indent<br/>slug: Web/CSS/text-indent<br/>tags:<br/>  - CSS<br/>  - CSS Property<br/>  - CSS Text<br/>  - Indent<br/>  - Layout<br/>  - Reference<br/>  - recipe:css-property<br/>  - text-indent<br/>browser-compat: css.properties.text-indent<br/>---<br/>{{CSSRef}}<br/><br/>The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.<br/><br/>{{EmbedInteractiveExample(pages/css/text-indent.html)}}<br/><br/>Horizontal spacing is with respect to the left (or right, for right-to-left layout) edge of the containing block-level element's content box.<br/><br/>## Syntax<br/><br/>```css<br/>/* <length> values */<br/>text-indent: 3mm;<br/>text-indent: 40px;<br/><br/>/* <percentage> value<br/>   relative to the containing block width */<br/>text-indent: 15%;<br/><br/>/* Keyword values */<br/>text-indent: 5em each-line;<br/>text-indent: 5em hanging;<br/>text-indent: 5em hanging each-line;<br/><br/>/* Global values */<br/>text-indent: inherit;<br/>text-indent: initial;<br/>text-indent: revert;<br/>text-indent: revert-layer;<br/>text-indent: unset;<br/>```<br/><br/>### Values<br/><br/>- {{cssxref(&lt;length&gt;)}}<br/>  - : Indentation is specified as an absolute {{cssxref(&lt;length&gt;)}}. Negative values are allowed. See {{cssxref(&lt;length&gt;)}} values for possible units.<br/>- {{cssxref(&lt;percentage&gt;)}}<br/>  - : Indentation is a {{cssxref(&lt;percentage&gt;)}} of the containing block's width.<br/>- `each-line` {{experimental_inline}}<br/>  - : Indentation affects the first line of the block container as well as each line after a _forced line break_, but does not affect lines after a _soft wrap break_.<br/>- `hanging` {{experimental_inline}}<br/>  - : Inverts which lines are indented. All lines _except_ the first line will be indented.<br/><br/>## Formal definition<br/><br/>{{CSSInfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Simple indent<br/><br/>#### HTML<br/><br/>```html<br/><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy<br/>    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p><br/><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy<br/>    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>p {<br/>  text-indent: 5em;<br/>  background: powderblue;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{ EmbedLiveSample('Simple_indent','100%','100%') }}<br/><br/>### Skipping indentation on the first paragraph<br/><br/>A common typographic practice when paragraph indentation is present is to skip the indentation for the first paragraph. As the _The Chicago Manual of Style_ puts it, the first line of text following a subhead may begin flush left or be indented by the usual paragraph indention.<br/><br/>Treating first paragraphs differently from subsequent paragraphs can be done using the [adjacent sibling combinator](/en-US/docs/Web/CSS/Adjacent_sibling_combinator), as in the following example:<br/><br/>#### HTML<br/><br/>```html<br/><h2>Lorem ipsum</h2><br/><br/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu<br/>venenatis quam. Vivamus euismod eleifend metus vitae pharetra. In vel tempor metus.<br/>Donec dapibus feugiat euismod. Vivamus interdum tellus dolor. Vivamus blandit eros<br/>et imperdiet auctor. Mauris sapien nunc, condimentum a efficitur non, elementum ac<br/>sapien. Cras consequat turpis non augue ullamcorper, sit amet porttitor dui<br/>interdum.</p><br/><br/><p>Sed laoreet luctus erat at rutrum. Proin velit metus, luctus in sapien in,<br/>tincidunt mattis ex. Praesent venenatis orci at sagittis eleifend. Nulla facilisi.<br/>In feugiat vehicula magna iaculis vehicula. Nulla suscipit tempor odio a semper.<br/>Donec vitae dapibus ipsum. Donec libero purus, convallis eu efficitur id, pulvinar<br/>elementum diam. Maecenas mollis blandit placerat. Ut gravida pellentesque nunc, in<br/>eleifend ante convallis sit amet.</p><br/><br/><h2>Donec ullamcorper elit nisl</h2><br/><br/><p>Donec ullamcorper elit nisl, sagittis bibendum massa gravida in. Fusce<br/>tempor in ante gravida iaculis. Integer posuere tempor metus. Vestibulum lacinia,<br/>nunc et dictum viverra, urna massa aliquam tellus, id mollis sem velit vestibulum<br/>nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames<br/>ac turpis egestas. Donec vulputate leo ut iaculis ultrices. Cras egestas rhoncus<br/>lorem. Nunc blandit tempus lectus, rutrum hendrerit orci eleifend id. Ut at quam<br/>velit.</p><br/><br/><p>Aenean rutrum tempor ligula, at luctus ligula auctor vestibulum. Sed<br/>sollicitudin velit in leo fringilla sollicitudin. Proin eu gravida arcu. Nam<br/>iaculis malesuada massa, eget aliquet turpis sagittis sed. Sed mollis tellus ac<br/>dui ullamcorper, nec lobortis diam pellentesque. Quisque dapibus accumsan libero,<br/>sed euismod ipsum ullamcorper sed.</p><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>p {<br/>    text-align: justify;<br/>    margin: 1em 0 0 0;<br/>}<br/>p + p {<br/>    text-indent: 2em;<br/>    margin: 0;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{ EmbedLiveSample('Skipping_indentation_on_the_first_paragraph','','500px') }}<br/><br/>### Percentage indent<br/><br/>#### HTML<br/><br/>```html<br/><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy<br/>    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p><br/><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy<br/>    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>p {<br/>  text-indent: 30%;<br/>  background: plum;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{ EmbedLiveSample('Percentage_indent','100%','100%') }}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [Learn to style HTML using CSS](/en-US/docs/Learn/CSS)<br/>- Related CSS properties:<br/><br/>  - [`text-justify`](/en-US/docs/Web/CSS/text-justify)<br/>  - [`text-orientation`](/en-US/docs/Web/CSS/text-orientation)<br/>  - [`text-overflow`](/en-US/docs/Web/CSS/text-overflow)<br/>  - [`text-rendering`](/en-US/docs/Web/CSS/text-rendering)<br/>  - [`text-transform`](/en-US/docs/Web/CSS/text-transform)<br/>  - {{cssxref('hanging-punctuation')}}<br/><br/>- [CSS Text Decoration](/en-US/docs/Web/CSS/CSS_Text_Decoration) CSS module<br/>- [CSS Text module](/en-US/docs/Web/CSS/CSS_Text)<br/>