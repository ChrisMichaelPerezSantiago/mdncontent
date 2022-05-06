## ✔️ user-select 
 ---<br/>title: user-select<br/>slug: Web/CSS/user-select<br/>tags:<br/>  - CSS<br/>  - CSS Property<br/>  - Property<br/>  - Reference<br/>  - Selection<br/>  - recipe:css-property<br/>  - user-select<br/>browser-compat: css.properties.user-select<br/>---<br/>{{CSSRef}}<br/><br/>The **`user-select`** [CSS](/en-US/docs/Web/CSS) property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its {{Glossary(Chrome, chrome)}}), except in textboxes.<br/><br/>{{EmbedInteractiveExample(pages/css/user-select.html)}}<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword values */<br/>user-select: none;<br/>user-select: auto;<br/>user-select: text;<br/>user-select: contain;<br/>user-select: all;<br/><br/>/* Global values */<br/>user-select: inherit;<br/>user-select: initial;<br/>user-select: revert;<br/>user-select: revert-layer;<br/>user-select: unset;<br/><br/>/* Mozilla-specific values */<br/>-moz-user-select: none;<br/>-moz-user-select: text;<br/>-moz-user-select: all;<br/><br/>/* WebKit-specific values */<br/>-webkit-user-select: none;<br/>-webkit-user-select: text;<br/>-webkit-user-select: all; /* Doesn't work in Safari; use only<br/>                             none or text, or else it will<br/>                             allow typing in the <html> container */<br/><br/>/* Microsoft-specific values */<br/>-ms-user-select: none;<br/>-ms-user-select: text;<br/>-ms-user-select: element;<br/>```<br/><br/>> **Note:** `user-select` is not an inherited property, though the initial `auto` value makes it behave like it is inherited most of the time. WebKit/Chromium-based browsers _do_ implement the property as inherited, which violates the behavior described in the spec, and this will bring some issues. Until now, Chromium chooses to [fix the issues](https://chromium.googlesource.com/chromium/src/+/b01af0b296ecb855aac95c4ed335d188e6eac2de), make the final behavior meets the specifications.<br/><br/>### Values<br/><br/>- `none`<br/>  - : The text of the element and its sub-elements is not selectable. Note that the {{domxref(Selection)}} object can contain these elements.<br/>- `auto`<br/><br/>  - : The used value of `auto` is determined as follows:<br/><br/>    - On the `::before` and `::after` pseudo elements, the used value is `none`<br/>    - If the element is an editable element, the used value is `contain`<br/>    - Otherwise, if the used value of `user-select` on the parent of this element is `all`, the used value is `all`<br/>    - Otherwise, if the used value of `user-select` on the parent of this element is `none`, the used value is `none`<br/>    - Otherwise, the used value is `text`<br/><br/>- `text`<br/>  - : The text can be selected by the user.<br/>- `all`<br/>  - : The content of the element shall be selected atomically: If a selection would contain part of the element, then the selection must contain the entire element including all its descendants.  If a double-click or context-click occurred in sub-elements, the highest ancestor with this value will be selected.<br/>- `contain`<br/>  - : Enables selection to start within the element; however, the selection will be contained by the bounds of that element.<br/>- `element`{{non-standard_inline}} (IE-specific alias)<br/>  - : Same as `contain`. Supported only in Internet Explorer.<br/><br/>> **Note:** CSS UI 4 [renames `user-select: element` to `contain`](https://github.com/w3c/csswg-drafts/commit/3f1d9db96fad8d9fc787d3ed66e2d5ad8cfadd05).<br/><br/>## Formal definition<br/><br/>{{CSSInfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### HTML<br/><br/>```html<br/><p>You should be able to select this text.</p><br/><p class=unselectable>Hey, you can't select this text!</p><br/><p class=all>Clicking once will select all of this text.</p><br/>```<br/><br/>### CSS<br/><br/>```css<br/>.unselectable {<br/>  -moz-user-select: none;<br/>  -webkit-user-select: none;<br/>  -ms-user-select: none;<br/>  user-select: none;<br/>}<br/><br/>.all {<br/>  -moz-user-select: all;<br/>  -webkit-user-select: all;<br/>  -ms-user-select: all;<br/>  user-select: all;<br/>}<br/>```<br/><br/>### Result<br/><br/>{{EmbedLiveSample(Examples)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{Cssxref(::selection)}} pseudo-element<br/>- The JavaScript {{domxref(Selection)}} object<br/>