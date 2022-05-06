## ✔️ columns 
 ---<br/>title: columns<br/>slug: Web/CSS/columns<br/>tags:<br/>  - CSS<br/>  - CSS Multi-column Layout<br/>  - CSS Property<br/>  - Reference<br/>  - recipe:css-shorthand-property<br/>browser-compat: css.properties.columns<br/>---<br/>{{CSSRef}}<br/><br/>The **`columns`** [CSS](/en-US/docs/Web/CSS) shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.<br/><br/>{{EmbedInteractiveExample(pages/css/columns.html)}}<br/><br/>## Constituent properties<br/><br/>This property is a shorthand for the following CSS properties:<br/><br/>- [`column-count`](/en-US/docs/Web/CSS/column-count)<br/>- [`column-width`](/en-US/docs/Web/CSS/column-width)<br/><br/>## Syntax<br/><br/>```css<br/>/* Column width */<br/>columns: 18em;<br/><br/>/* Column count */<br/>columns: auto;<br/>columns: 2;<br/><br/>/* Both column width and count */<br/>columns: 2 auto;<br/>columns: auto 12em;<br/>columns: auto auto;<br/><br/>/* Global values */<br/>columns: inherit;<br/>columns: initial;<br/>columns: revert;<br/>columns: revert-layer;<br/>columns: unset;<br/>```<br/><br/>The `columns` property may be specified as one or two of the values listed below, in any order.<br/><br/>### Values<br/><br/>- `<'column-width'>`<br/>  - : The ideal column width, defined as a {{cssxref(&lt;length&gt;)}} or the keyword `auto`. The actual width may be wider or narrower to fit the available space. See {{cssxref(column-width)}}.<br/>- `<'column-count'>`<br/>  - : The ideal number of columns into which the element's content should be flowed, defined as an {{cssxref(&lt;integer&gt;)}} or the keyword `auto`. If neither this value nor the column's width are `auto`, it merely indicates the maximum allowable number of columns. See {{cssxref(column-count)}}.<br/><br/>## Formal definition<br/><br/>{{cssinfo}}<br/><br/>## Formal syntax<br/><br/>{{csssyntax}}<br/><br/>## Examples<br/><br/>### Setting three equal columns<br/><br/>#### HTML<br/><br/>```html<br/><p class=content-box><br/>  This is a bunch of text split into three columns<br/>  using the CSS `columns` property. The text<br/>  is equally distributed over the columns.<br/></p><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>.content-box {<br/>  columns: 3 auto;<br/>}<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample('Setting_three_equal_columns', 'auto', 120)}}<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- {{cssxref(widows)}}<br/>- {{cssxref(orphans)}}<br/>- [Paged media](/en-US/docs/Web/CSS/Paged_Media)<br/>- [Multiple-column Layout](/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)<br/>