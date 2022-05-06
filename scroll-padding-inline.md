## ✔️ scroll-padding-inline 
 ---<br/>title: scroll-padding-inline<br/>slug: Web/CSS/scroll-padding-inline<br/>tags:<br/>  - CSS<br/>  - CSS Property<br/>  - Reference<br/>  - Web<br/>  - recipe:css-shorthand-property<br/>  - scroll-padding-inline<br/>  - scroll-padding-inline-end<br/>  - scroll-padding-inline-start<br/>browser-compat: css.properties.scroll-padding-inline<br/>---<br/>{{CSSRef}}<br/><br/>The `scroll-padding-inline` [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) sets the scroll padding of an element in the inline dimension.<br/><br/>{{EmbedInteractiveExample(pages/css/scroll-padding-inline.html)}}<br/><br/>The scroll-padding properties define offsets for the _optimal viewing region_ of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.<br/><br/>## Constituent properties<br/><br/>This property is a shorthand for the following CSS properties:<br/><br/>- [`scroll-padding-inline-end`](/en-US/docs/Web/CSS/scroll-padding-inline-end)<br/>- [`scroll-padding-inline-start`](/en-US/docs/Web/CSS/scroll-padding-inline-start)<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword values */<br/>scroll-padding-inline: auto;<br/><br/>/* <length> values */<br/>scroll-padding-inline: 10px;<br/>scroll-padding-inline: 1em .5em;<br/>scroll-padding-inline: 10%;<br/><br/>/* Global values */<br/>scroll-padding-inline: inherit;<br/>scroll-padding-inline: initial;<br/>scroll-padding-inline: revert;<br/>scroll-padding-inline: revert-layer;<br/>scroll-padding-inline: unset;<br/>```<br/><br/>### Values<br/><br/>- `<length-percentage>`<br/>  - : An inwards offset from the corresponding edge of the scrollport, as a valid length or a percentage.<br/>- `auto`<br/>  - : The offset is determined by the user agent. This will generally be 0px, but a user agent is able to detect and do something else if a non-zero value is more appropriate.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_Scroll_Snap)<br/>- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)<br/>