## ✔️ scroll-snap-destination 
 ---<br/>title: scroll-snap-destination<br/>slug: Web/CSS/scroll-snap-destination<br/>tags:<br/>  - CSS<br/>  - CSS Property<br/>  - CSS Scroll Snap<br/>  - Deprecated<br/>  - Reference<br/>  - recipe:css-property<br/>browser-compat: css.properties.scroll-snap-destination<br/>---<br/>{{CSSRef}}{{deprecated_header}}<br/><br/>The **`scroll-snap-destination`** [CSS](/en-US/docs/Web/CSS) property defines the position in x and y coordinates within the scroll container's visual {{Glossary(viewport)}} which element snap points align with.<br/><br/>```css<br/>/* <position> value */<br/>scroll-snap-destination: 400px 600px;<br/><br/>/* Global values */<br/>scroll-snap-destination: inherit;<br/>scroll-snap-destination: initial;<br/>scroll-snap-destination: unset;<br/>```<br/><br/>## Syntax<br/><br/>### Values<br/><br/>- `<position>`<br/>  - : Specifies the offset of the snap destination from the start edge of the scroll container's visual viewport. The first value gives the x coordinate of the snap destination, the second value its y coordinate.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Setting scroll snap destination<br/><br/>#### HTML<br/><br/>```html<br/><div id=container><br/>  <div><br/>    <p>At coordinate (0, 0)</p><br/>    <div class=scrollContainer destination0><br/>      <div>1</div><br/>      <div>2</div><br/>      <div>3</div><br/>    </div><br/>  </div><br/><br/>  <div><br/>    <p>At coordinate (25, 0)</p><br/>    <div class=scrollContainer destination25><br/>      <div>1</div><br/>      <div>2</div><br/>      <div>3</div><br/>    </div><br/>  </div><br/><br/>  <div><br/>    <p>At coordinate (50, 0)</p><br/>    <div class=scrollContainer destination50><br/>      <div>1</div><br/>      <div>2</div><br/>      <div>3</div><br/>    </div><br/>  </div><br/></div><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>#container {<br/>  display: flex;<br/>}<br/><br/>#container > div:nth-child(-n+2) {<br/>  margin-right: 20px;<br/>}<br/><br/>.scrollContainer {<br/>  width: 100px;<br/>  overflow: auto;<br/>  white-space: nowrap;<br/>  scroll-snap-points-x: repeat(100%);<br/>  scroll-snap-type: mandatory;<br/>  scroll-snap-destination: 20px 0;<br/>  font-size: 0;<br/>}<br/><br/>.destination0 {<br/>  scroll-snap-destination: 0 0;<br/>}<br/><br/>.destination25 {<br/>  scroll-snap-destination: 25px 0;<br/>}<br/><br/>.destination50 {<br/>  scroll-snap-destination: 50px 0;<br/>}<br/><br/>.scrollContainer > div {<br/>  width: 100px;<br/>  height: 100px;<br/>  display: inline-block;<br/>  line-height: 100px;<br/>  text-align: center;<br/>  font-size: 50px;<br/>}<br/><br/>.scrollContainer > div:nth-child(even) {<br/>  background-color: #87EA87;<br/>}<br/><br/>.scrollContainer > div:nth-child(odd) {<br/>  background-color: #87CCEA;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Setting_scroll_snap_destination, 100%, 170)}}<br/><br/>## Specifications<br/><br/>Not part of any standard.<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_Scroll_Snap)<br/>- [Well-Controlled Scrolling with CSS Scroll Snap](https://web.dev/css-scroll-snap/)<br/>