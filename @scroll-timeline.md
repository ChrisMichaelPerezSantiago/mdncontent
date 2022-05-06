## ✔️ @scroll-timeline 
 ---<br/>title: @scroll-timeline<br/>slug: Web/CSS/@scroll-timeline<br/>tags:<br/>  - Animations<br/>  - Scroll<br/>  - At-rule<br/>  - CSS<br/>  - Reference<br/>  - Experimental<br/>browser-compat: css.at-rules.scroll-timeline<br/>---<br/><br/>{{CSSRef}}<br/><br/>The **`@scroll-timeline`** CSS [at-rule](/en-US/docs/Web/CSS/At-rule) defines an [`AnimationTimeline`](/en-US/docs/Web/API/AnimationTimeline) whose time values are determined by scrolling progress within a scroll container and not by minutes or seconds. Once specified, a scroll timeline is associated with a [CSS Animation](/en-US/docs/Web/CSS/CSS_Animations) by using the `animation-timeline` property.<br/><br/>## Syntax<br/><br/>```css<br/>@scroll-timeline moveTimeline {<br/>  source: auto;<br/>  orientation: vertical;<br/>  scroll-offsets: 0px, 500px;<br/>}<br/>```<br/><br/>### Values<br/><br/>- {{cssxref(custom-ident)}}<br/><br/>  - : A name identifying the scroll timeline. This name is used when specifying the scroll timeline with the [`animation-timeline`](/en-US/docs/Web/CSS/animation-timeline) property.<br/><br/>- `source`<br/><br/>  - : The scrollable element whose scrolling position drives the progress of the timeline. Can be:<br/><br/>    - `auto`<br/><br/>      - : The `Document` associated with the current global [Window object](/en-US/docs/Web/API/Window).<br/><br/>    - `selector(id-selector)`<br/><br/>      - : The scroll container identified by an element's id.<br/><br/>    - `none`<br/>      - : No scroll container specified.<br/><br/>- `orientation`<br/><br/>  - : The scroll timeline's orientation:<br/><br/>    - `auto`<br/><br/>      - : Defaults to `vertical`<br/><br/>    - `block`<br/><br/>      - : Uses the scroll position along the block axis, conforming to writing mode and directionality.<br/><br/>    - `inline`<br/><br/>      - : Uses the scroll position along the inline axis, conforming to writing mode and directionality.<br/><br/>    - `horizontal`<br/><br/>      - : Uses the horizontal scroll position, regardless of writing mode or directionality.<br/><br/>    - `vertical`<br/>      - : Uses the vertical scroll position, regardless of writing mode or directionality.<br/><br/>- `scroll-offsets`<br/><br/>  - : Determines the scroll timeline's scroll offsets:<br/><br/>    - `none`<br/>      - : No scroll offsets specified.<br/>    - `<length-percentage>`<br/>      - : A comma separated list of [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) values.<br/>    - `<element-offset>`<br/>      - : An element's position determines the scroll offset.<br/><br/>## Description<br/><br/>To use the scroll timeline, create a `@scroll-timeline` rule, which is used by the {{cssxref(animation-timeline)}} property to match an animation's timeline to its timeline declaration.<br/><br/>Each `@scroll-timeline` rule includes properties to determine the source, orientation and scroll-offsets of the scroll timeline.<br/><br/>### Scroll offsets<br/><br/>The `scroll-offset` property determines where, within the scrolling, the animation should occur. This can be set in one of three ways:<br/><br/>1. By using the CSS keyword `none`, which means no `scroll-offset` is specified.<br/><br/>2. It can be determined by a comma-separated list of [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) values. Each value is mapped against the {{cssxref('animation-duration')}}. For instance, if an `animation-duration` is set to `2s` and the scroll offset to `0px, 30px, 100px`, then at 1s the scroll offset would be 30px. Typically, for a smooth scroll animation, you'd use two values here, such as `0px, 100px`.<br/><br/>3. The third way of determining a scroll offset is to use an element offset. This means you specify elements within the page, the locations of which determine the scroll timeline and which edge of these elements to use. Specifying elements is done using the `selector()` function, which receives an element's id. Edge is determined by keywords `start` or `end`. An optional threshold value between `0–1` can be used to represent the percentage of the element expected to be visible in the `source`.<br/><br/>```css<br/>@scroll-timeline element-move {<br/>  source: auto;<br/>  orientation: vertical;<br/>  scroll-offsets: selector(#myElement) start 0, selector(#myElement) end 0;<br/>}<br/>```<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Simple example<br/><br/>This example shows a square, which rotates as its container is scrolled vertically. We create an element (`#container`) with a fixed height to allow scroll. This is our `source` element.<br/><br/>Inside this container, we create another element (`#square`), which is styled appropriately to look like a square. This element has a rotation animation applied, using the {{cssxref('@keyframes')}} rule and `animation-name` property.<br/><br/>We create an `@scroll-timeline` called `squareTimeline`, setting the `source` as the container, the `orientation` as `vertical` and the `scroll-offset` to start at `0px` and end at `300px` (the height of our container). Then we apply this to the square using the `scroll-timeline` property.<br/><br/>#### HTML<br/><br/>```html<br/><div id=container><br/>  <div id=square></div><br/></div><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>#container {<br/>  height: 300px;<br/>}<br/><br/>#square {<br/>  background-color: deeppink;<br/>  width: 100px;<br/>  height: 100px;<br/>  margin-top: 100px;<br/>  animation-name: rotateAnimation;<br/>  animation-duration: 3s;<br/>  animation-direction: alternate;<br/>  animation-timeline: squareTimeline;<br/>}<br/><br/>@scroll-timeline squareTimeline {<br/>  source: selector(#container);<br/>  orientation: vertical;<br/>  scroll-offsets: 0px, 300px;<br/>}<br/><br/>@keyframes rotateAnimation {<br/>  from {<br/>    transform: rotate(0deg);<br/>  }<br/>  to {<br/>    transform: rotate(360deg);<br/>  }<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Simple_example)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- [CSS animations](/en-US/docs/Web/CSS/CSS_Animations)<br/>- [Practical use cases for scroll-linked animations in CSS with scroll timelines](https://css-tricks.com/practical-use-cases-for-scroll-linked-animations-in-css-with-scroll-timelines/)<br/>