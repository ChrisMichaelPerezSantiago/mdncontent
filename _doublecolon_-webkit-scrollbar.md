## ✔️ _doublecolon_-webkit-scrollbar 
 ---<br/>title: '::-webkit-scrollbar'<br/>slug: Web/CSS/::-webkit-scrollbar<br/>tags:<br/>  - '::-webkit-scrollbar'<br/>  - CSS<br/>  - CSS Selectors<br/>  - CSS:WebKit Extensions<br/>  - Non-standard<br/>  - Pseudo-element<br/>  - Reference<br/>  - Selector<br/>---<br/>{{CSSRef}}{{Non-standard_Header}}<br/><br/>The `::-webkit-scrollbar` CSS pseudo-element affects the style of an element's scrollbar when it has `overflow:scroll;` set.<br/><br/>> **Note:** If `overflow:scroll;` is not set, no scrollbar is displayed.<br/><br/>> **Note:** `::-webkit-scrollbar` is only available in [Blink](https://www.chromium.org/blink/)- and [WebKit](https://webkit.org)-based browsers (e.g., Chrome, Edge, Opera, Safari, all browsers on iOS, and [others](https://en.wikipedia.org/wiki/List_of_web_browsers#WebKit-based)). A standardized method of styling scrollbars is available with {{cssxref(scrollbar-color)}} and {{cssxref(scrollbar-width)}}.<br/><br/>## CSS Scrollbar Selectors<br/><br/>You can use the following pseudo-elements to customize various parts of the scrollbar for WebKit browsers:<br/><br/>- `::-webkit-scrollbar` — the entire scrollbar.<br/>- `::-webkit-scrollbar-button` — the buttons on the scrollbar (arrows pointing upwards and downwards that scroll one line at a time).<br/>- `::-webkit-scrollbar-thumb` — the draggable scrolling handle.<br/>- `::-webkit-scrollbar-track` — the track (progress bar) of the scrollbar, where there is a gray bar on top of a white bar.<br/>- `::-webkit-scrollbar-track-piece` — the part of the track (progress bar) not covered by the handle.<br/>- `::-webkit-scrollbar-corner` — the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet. This is often the bottom-right corner of the browser window.<br/>- `::-webkit-resizer` — the draggable resizing handle that appears at the bottom corner of some elements.<br/><br/>## Examples<br/><br/>### CSS<br/><br/>```css<br/>.visible-scrollbar, .invisible-scrollbar, .mostly-customized-scrollbar {<br/>  display: block;<br/>  width: 10em;<br/>  overflow: auto;<br/>  height: 2em;<br/>}<br/><br/>.invisible-scrollbar::-webkit-scrollbar {<br/>  display: none;<br/>}<br/><br/>/* Demonstrate a mostly customized scrollbar<br/> * (won't be visible otherwise if width/height is specified) */<br/>.mostly-customized-scrollbar::-webkit-scrollbar {<br/>  width: 5px;<br/>  height: 8px;<br/>  background-color: #aaa; /* or add it to the track */<br/>}<br/><br/>/* Add a thumb */<br/>.mostly-customized-scrollbar::-webkit-scrollbar-thumb {<br/>  background: #000;<br/>}<br/>```<br/><br/>### HTML<br/><br/>```html<br/><div class=visible-scrollbar><br/>  Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor.<br/>  Proin at nulla elementum, consectetur ex eget, commodo ante.<br/>  Sed eros mi, bibendum ut dignissim et, maximus eget nibh. Phasellus<br/>  blandit quam turpis, at mollis velit pretium ut. Nunc consequat<br/>  efficitur ultrices. Nullam hendrerit posuere est. Nulla libero<br/>  sapien, egestas ac felis porta, cursus ultricies quam. Vestibulum<br/>  tincidunt accumsan sapien, a fringilla dui semper in. Vivamus<br/>  consectetur ipsum a ornare blandit. Aenean tempus at lorem sit<br/>  amet faucibus. Curabitur nibh justo, faucibus sed velit cursus,<br/>  mattis cursus dolor. Pellentesque id pretium est. Quisque<br/>  convallis nisi a diam malesuada mollis. Aliquam at enim ligula.<br/></div><br/><br/><div class=invisible-scrollbar><br/>Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword<br/></div><br/><br/><div class=mostly-customized-scrollbar><br/>Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword<br><br/>And pretty tall<br><br/>thing with weird scrollbars.<br><br/>Who thought scrollbars could be made weeeeird?<br/></div><br/>```<br/><br/>### Result<br/><br/>{{EmbedLiveSample(Examples)}}<br/><br/>## Specifications<br/><br/>Not part of any standard.<br/><br/>## Browser compatibility<br/><br/>### `::-webkit-scrollbar`<br/><br/>{{Compat(css.selectors.-webkit-scrollbar)}}<br/><br/>### `::-webkit-scrollbar-button`<br/><br/>{{Compat(css.selectors.-webkit-scrollbar-button)}}<br/><br/>### `::-webkit-scrollbar-thumb`<br/><br/>{{Compat(css.selectors.-webkit-scrollbar-thumb)}}<br/><br/>### `::-webkit-scrollbar-track`<br/><br/>{{Compat(css.selectors.-webkit-scrollbar-track)}}<br/><br/>### `::-webkit-scrollbar-track-piece`<br/><br/>{{Compat(css.selectors.-webkit-scrollbar-track-piece)}}<br/><br/>### `::-webkit-scrollbar-corner`<br/><br/>{{Compat(css.selectors.-webkit-scrollbar-corner)}}<br/><br/>### `::-webkit-resizer`<br/><br/>{{Compat(css.selectors.-webkit-resizer)}}<br/><br/>## See also<br/><br/>- WebKit blog on [Styling Scrollbars](https://webkit.org/blog/363/styling-scrollbars/)<br/>- {{CSSxRef(scrollbar-width)}}<br/>- {{CSSxRef(scrollbar-color)}}<br/>