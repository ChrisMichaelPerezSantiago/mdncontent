## ✔️ privacy_and_the__colon_visited_selector 
 ---<br/>title: Privacy and the :visited selector<br/>slug: Web/CSS/Privacy_and_the_:visited_selector<br/>tags:<br/>  - CSS<br/>  - Guide<br/>  - Pseudo-class<br/>  - Reference<br/>  - Security<br/>  - Selectors<br/>---<br/>{{CSSRef}}<br/><br/>Before about 2010, the [CSS](/en-US/docs/Web/CSS) {{ cssxref(:visited) }} selector allowed websites to uncover a user's browsing history and figure out what sites the user had visited. This was done through {{domxref(window.getComputedStyle)}} and other techniques. This process was quick to execute, and made it possible not only to determine where the user had been on the web, but could also be used to guess a lot of information about the user's identity.<br/><br/>To mitigate this problem, browsers have limited the amount of information that can be obtained from visited links.<br/><br/>## Little white lies<br/><br/>To preserve users' privacy, Firefox and other browsers will lie to web applications under certain circumstances:<br/><br/>- The `window.getComputedStyle` method, and similar functions such as {{ domxref(element.querySelector) }}, will always return values indicating that a user has never visited any of the links on a page.<br/>- If you use a sibling selector such as `:visited + span`, the adjacent element (`span` in this example) will be styled as if the link were unvisited.<br/>- In rare scenarios, if you're using nested link elements and the element being matched is different from the link whose presence in history is being tested, the element will be rendered as if the link were unvisited, as well.<br/><br/>## Limits to visited link styles<br/><br/>You can style visited links, but there are limits to which styles you can use. Only the following styles can be applied to visited links:<br/><br/>- {{ cssxref(color) }}<br/>- {{ cssxref(background-color) }}<br/>- {{ cssxref(border-color) }} (and its sub-properties)<br/>- {{ cssxref(column-rule-color) }}<br/>- {{ cssxref(outline-color) }}<br/>- {{ cssxref(text-decoration-color) }}<br/>- {{ cssxref(text-emphasis-color) }}<br/>- The color parts of the {{SVGAttr(fill)}} and {{SVGAttr(stroke)}} attributes<br/><br/>In addition, even for the above styles, you won't be able to change the transparency between unvisited and visited links, as you otherwise would be able to using [`rgba()`](</en-US/docs/Web/CSS/color_value#rgba()>), [`hsla()`](</en-US/docs/Web/CSS/color_value#hsla()>), or the [`transparent`](/en-US/docs/Web/CSS/color_value#transparent_keyword) keyword.<br/><br/>Here is an example of how to use styles with the aforementioned restrictions:<br/><br/>```css<br/>:link {<br/>  outline: 1px dotted blue;<br/>  background-color: white;<br/>  /* The default value of background-color is `transparent`. You need to<br/>     specify a different value, otherwise changes on :visited won't apply. */<br/>}<br/><br/>:visited {<br/>  outline-color: orange;    /* Visited links have an orange outline */<br/>  background-color: green;  /* Visited links have a green background */<br/>  color: yellow;            /* Visited links have yellow colored text */<br/>}<br/>```<br/><br/>## Impact on web developers<br/><br/>Overall, these restrictions shouldn't affect web developers too significantly. They may, however, require the following changes to existing sites:<br/><br/>- Using background images to style links based on whether they've been visited will no longer work, since only colors can be used to style visited links.<br/>- Colors that are otherwise transparent will fail to appear if styled in a `:visited` selector.<br/><br/>## See also<br/><br/>- [privacy-related changes coming to CSS :visited](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) on Mozilla Hacks<br/>- [Plugging the CSS History Leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) on the Mozilla Security Blog<br/>- [Preventing attacks on a user's history through CSS :visited selectors](https://dbaron.org/mozilla/visited-privacy)<br/>