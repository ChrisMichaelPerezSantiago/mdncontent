## ✔️ list-style 
 ---<br/>title: list-style<br/>slug: Web/CSS/list-style<br/>tags:<br/>  - CSS<br/>  - CSS Lists<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-shorthand-property<br/>browser-compat: css.properties.list-style<br/>---<br/>{{CSSRef}}<br/><br/>The **`list-style`** CSS [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) allows you to set all the list style properties at once.<br/><br/>{{EmbedInteractiveExample(pages/css/list-style.html)}}<br/><br/>> **Note:** This property is applied to list items, i.e., elements with `{{cssxref(display)}}: list-item;` . [By default](https://html.spec.whatwg.org/multipage/rendering.html#lists) this includes {{HTMLElement(li)}} elements. Because this property is inherited, it can be set on a parent element (normally {{HTMLElement(ol)}} or {{HTMLElement(ul)}}) to make the same list styling apply to all the items inside.<br/><br/>## Constituent properties<br/><br/>This property is a shorthand for the following CSS properties:<br/><br/>- [`list-style-image`](/en-US/docs/Web/CSS/list-style-image)<br/>- [`list-style-position`](/en-US/docs/Web/CSS/list-style-position)<br/>- [`list-style-type`](/en-US/docs/Web/CSS/list-style-type)<br/><br/>## Syntax<br/><br/>```css<br/>/* type */<br/>list-style: square;<br/><br/>/* image */<br/>list-style: url('../img/shape.png');<br/><br/>/* position */<br/>list-style: inside;<br/><br/>/* type | position */<br/>list-style: georgian inside;<br/><br/>/* type | image | position */<br/>list-style: lower-roman url('../img/shape.png') outside;<br/><br/>/* Keyword value */<br/>list-style: none;<br/><br/>/* Global values */<br/>list-style: inherit;<br/>list-style: initial;<br/>list-style: revert;<br/>list-style: revert-layer;<br/>list-style: unset;<br/>```<br/><br/>The `list-style` property is specified as one, two, or three keywords in any order. If {{cssxref(list-style-type)}} and {{cssxref(list-style-image)}} are both set, then `list-style-type` is used as a fallback if the image is unavailable.<br/><br/>### Values<br/><br/>- {{cssxref(list-style-type)}}<br/>  - : See {{cssxref(list-style-type)}}.<br/>- {{cssxref(list-style-image)}}<br/>  - : See {{cssxref(list-style-image)}}.<br/>- {{cssxref(list-style-position)}}<br/>  - : See {{cssxref(list-style-position)}}.<br/>- `none`<br/>  - : No list style is used.<br/><br/>## Accessibility concerns<br/><br/>In a notable exception, Safari will not recognize an unordered list as a list in the accessibility tree if has a `list-style` value of `none`.<br/><br/>The most straightforward way to address this is to add an explicit `role=list` to the `<ul>` element in the markup. This will restore the list semantics without affecting the design.<br/><br/>CSS-only workarounds are also available for those who do not have access to the markup. One is to add a [zero-width space](https://en.wikipedia.org/wiki/Zero-width_space) as [pseudo-content](/en-US/docs/Web/CSS/content) before each list item:<br/><br/>```css<br/>ul {<br/>  list-style: none;<br/>}<br/><br/>ul li::before {<br/>  content: \200B;<br/>}<br/>```<br/><br/>A second approach is to apply a url value to the list-style property:<br/><br/>```css<br/>nav ol, nav ul {<br/>  list-style: none;<br/>}<br/><br/>/* becomes */<br/><br/>nav ol, nav ul {<br/>  list-style: url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E);<br/>}<br/>```<br/><br/>These CSS workarounds should be used only when the HTML solution is not available, and only after testing to ensure that they don't result in unexpected behaviors that may negatively impact users' experiences.<br/><br/>- ['Fixing' Lists](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html)<br/>- [VoiceOver and list-style-type: none – Unfettered Thoughts](https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)<br/>- [MDN Understanding WCAG, Guideline 1.3 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)<br/>- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Setting list style type and position<br/><br/>#### HTML<br/><br/>```html<br/>List 1<br/><ul class=one><br/>  <li>List Item1</li><br/>  <li>List Item2</li><br/>  <li>List Item3</li><br/></ul><br/>List 2<br/><ul class=two><br/>  <li>List Item A</li><br/>  <li>List Item B</li><br/>  <li>List Item C</li><br/></ul><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>.one {<br/>  list-style: circle;<br/>}<br/><br/>.two {<br/>  list-style: square inside;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample('Setting_list_style_type_and_position', 'auto', 220)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{Cssxref(list-style-type)}}, {{Cssxref(list-style-image)}}, {{Cssxref(list-style-position)}}<br/>