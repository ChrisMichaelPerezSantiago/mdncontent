## ✔️ grid-template 
 ---<br/>title: grid-template<br/>slug: Web/CSS/grid-template<br/>tags:<br/>  - CSS<br/>  - CSS Grid<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-shorthand-property<br/>browser-compat: css.properties.grid-template<br/>---<br/>{{CSSRef}}<br/><br/>The **`grid-template`** CSS property is a [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) for defining {{glossary(grid column, grid columns)}}, {{glossary(grid rows, rows)}}, and {{glossary(grid areas, areas)}}.<br/><br/>{{EmbedInteractiveExample(pages/css/grid-template.html)}}<br/><br/>## Constituent properties<br/><br/>This property is a shorthand for the following CSS properties:<br/><br/>- [`grid-template-areas`](/en-US/docs/Web/CSS/grid-template-areas)<br/>- [`grid-template-columns`](/en-US/docs/Web/CSS/grid-template-columns)<br/>- [`grid-template-rows`](/en-US/docs/Web/CSS/grid-template-rows)<br/><br/>## Syntax<br/><br/>```css<br/>/* Keyword value */<br/>grid-template: none;<br/><br/>/* grid-template-rows / grid-template-columns values */<br/>grid-template: 100px 1fr / 50px 1fr;<br/>grid-template: auto 1fr / auto 1fr auto;<br/>grid-template: [linename] 100px / [columnname1] 30% [columnname2] 70%;<br/>grid-template: fit-content(100px) / fit-content(40%);<br/><br/>/* grid-template-areas grid-template-rows / grid-template-column values */<br/>grid-template: a a a<br/>               b b b;<br/>grid-template: a a a 20%<br/>               b b b auto;<br/>grid-template: [header-top] a a a     [header-bottom]<br/>                 [main-top] b b b 1fr [main-bottom]<br/>                            / auto 1fr auto;<br/><br/>/* Global values */<br/>grid-template: inherit;<br/>grid-template: initial;<br/>grid-template: revert;<br/>grid-template: revert-layer;<br/>grid-template: unset;<br/>```<br/><br/>### Values<br/><br/>- `none`<br/>  - : Is a keyword that sets all three longhand properties to `none`, meaning there is no explicit grid. There are no named grid areas. Rows and columns will be implicitly generated; their size will be determined by the {{cssxref(grid-auto-rows)}} and {{cssxref(grid-auto-columns)}} properties.<br/>- `<'grid-template-rows'> / <'grid-template-columns'>`<br/>  - : Sets {{cssxref(grid-template-rows)}} and {{cssxref(grid-template-columns)}} to the specified values, and sets {{cssxref(grid-template-areas)}} to `none`.<br/>- `[ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`<br/><br/>  - : Sets {{cssxref(grid-template-areas)}} to the strings listed, {{cssxref(grid-template-rows)}} to the track sizes following each string (filling in `auto` for any missing sizes), and splicing in the named lines defined before/after each size, and {{cssxref(grid-template-columns)}} to the track listing specified after the slash (or `none`, if not specified).<br/><br/>    > **Note:** The {{cssxref(repeat, repeat())}} function isn't allowed in these track listings, as the tracks are intended to visually line up one-to-one with the rows/columns in the ASCII art.<br/><br/>> **Note:** The {{cssxref(grid)}} shorthand accepts the same syntax, but also resets the implicit grid properties to their initial values. Use `grid` (as opposed to `grid-template`) to prevent these values from cascading in separately.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Defining a grid template<br/><br/>#### CSS<br/><br/>```css<br/>#page {<br/>  display: grid;<br/>  width: 100%;<br/>  height: 200px;<br/>  grid-template: [header-left] head head 30px [header-right]<br/>                 [main-left]   nav  main 1fr  [main-right]<br/>                 [footer-left] nav  foot 30px [footer-right]<br/>                 / 120px 1fr;<br/>}<br/><br/>header {<br/>  background-color: lime;<br/>  grid-area: head;<br/>}<br/><br/>nav {<br/>  background-color: lightblue;<br/>  grid-area: nav;<br/>}<br/><br/>main {<br/>  background-color: yellow;<br/>  grid-area: main;<br/>}<br/><br/>footer {<br/>  background-color: red;<br/>  grid-area: foot;<br/>}<br/>```<br/><br/>#### HTML<br/><br/>```html<br/><section id=page><br/>  <header>Header</header><br/>  <nav>Navigation</nav><br/>  <main>Main area</main><br/>  <footer>Footer</footer><br/></section><br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample(Defining_a_grid_template, 100%, 200px)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- Related CSS properties: {{cssxref(grid-template-rows)}}, {{cssxref(grid-template-columns)}}, {{cssxref(grid-template-areas)}}<br/>- Grid Layout Guide: _[Line-based placement with CSS Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_<br/>- Grid Layout Guide: _[Grid template areas - Grid definition shorthands](/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#grid_definition_shorthands)_<br/>- Video tutorial: _[Grid Template shorthand](https://gridbyexample.com/video/grid-template-shorthand/)_<br/>