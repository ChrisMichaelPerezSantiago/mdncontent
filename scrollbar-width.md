## ✔️ scrollbar-width 
 ---<br/>title: scrollbar-width<br/>slug: Web/CSS/scrollbar-width<br/>tags:<br/>  - CSS<br/>  - CSS Property<br/>  - Reference<br/>  - css scrollbars<br/>  - recipe:css-property<br/>  - scrollbar-width<br/>browser-compat: css.properties.scrollbar-width<br/>---<br/>{{CSSRef}}<br/><br/>The **`scrollbar-width`** property allows the author to set the maximum thickness of an element's scrollbars when they are shown.<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword values */<br/>scrollbar-width: auto;<br/>scrollbar-width: thin;<br/>scrollbar-width: none;<br/><br/>/* Global values */<br/>scrollbar-width: inherit;<br/>scrollbar-width: initial;<br/>scrollbar-width: revert;<br/>scrollbar-width: revert-layer;<br/>scrollbar-width: unset;<br/>```<br/><br/>### Values<br/><br/>- _\<scrollbar-width>_<br/><br/>  - : Defines the width of the scrollbar as a keyword. It must be one of the following values:<br/><br/>    <table class=standard-table><br/>      <tbody><br/>        <tr><br/>          <td><code>auto</code></td><br/>          <td>The default scrollbar width for the platform.</td><br/>        </tr><br/>        <tr><br/>          <td><code>thin</code></td><br/>          <td><br/>            A thin scrollbar width variant on platforms that provide that option, or<br/>            a thinner scrollbar than the default platform scrollbar width.<br/>          </td><br/>        </tr><br/>        <tr><br/>          <td><code>none</code></td><br/>          <td>No scrollbar shown, however the element will still be scrollable.</td><br/>        </tr><br/>      </tbody><br/>    </table><br/><br/>    > **Note:** User Agents must apply any `scrollbar-width` value set on the root element to the viewport.<br/><br/>## Accessibility concerns<br/><br/>Use this property with caution — setting `scrollbar-width` to `thin` or `none` can make content hard or impossible to scroll if the author does not provide an alternative scrolling mechanism. While swiping gestures or mouse wheels can enable scrolling on such content, some devices have no scroll alternative.<br/><br/>WCAG criterion 2.1.1 (Keyboard) has been in place for a long time to advise on basic keyboard accessibility, and this should include scrolling of content areas. And introduced in WCAG 2.1, criterion 2.5.5 (Target Size) advises that touch targets should be at least 44px in width and height (although the problem is compounded on high-resolution screens; thorough testing is advised).<br/><br/>- [MDN Understanding WCAG, Guideline 2.1 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.1_%E2%80%94_Keyboard_Accessible_Make_all_functionality_available_from_a_keyboard)<br/>- [MDN Understanding WCAG, Guideline 2.5 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.5_Input_Modalities_Make_it_easier_for_users_to_operate_functionality_through_various_inputs_beyond_keyboard.s/)<br/>- [Understanding Success Criterion 2.1.1 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)<br/>- [Understanding Success Criterion 2.5.5 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)<br/><br/>## Formal definition<br/><br/>{{CSSInfo}}<br/><br/>## Formal syntax<br/><br/>{{CSSSyntax}}<br/><br/>## Examples<br/><br/>### Sizing overflow scrollbars<br/><br/>#### CSS<br/><br/>```css<br/>.scroller {<br/>  width: 300px;<br/>  height: 100px;<br/>  overflow-y: scroll;<br/>  scrollbar-width: thin;<br/>}<br/>```<br/><br/>#### HTML<br/><br/>```html<br/><div class=scroller>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</div><br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Sizing_overflow_scrollbars)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{CSSxRef(-ms-overflow-style)}}<br/>- {{CSSxRef(::-webkit-scrollbar)}}<br/>