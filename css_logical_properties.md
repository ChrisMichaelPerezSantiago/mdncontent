## ✔️ css_logical_properties 
 ---<br/>title: CSS Logical Properties and Values<br/>slug: Web/CSS/CSS_Logical_Properties<br/>tags:<br/>  - CSS<br/>  - CSS Logical Properties<br/>  - Guide<br/>  - Landing<br/>  - Overview<br/>  - Reference<br/>spec-urls: https://drafts.csswg.org/css-logical/<br/>---<br/>{{CSSRef}}<br/><br/>**CSS Logical Properties and Values** is a module of [CSS](/en-US/docs/Web/CSS) introducing logical properties and values that provide the ability to control layout through logical, rather than physical, direction and dimension mappings.<br/><br/>The module also defines logical properties and values for properties previously defined in CSS 2.1. Logical properties define direction‐relative equivalents of their corresponding physical properties.<br/><br/>### Block vs. inline<br/><br/>Logical properties and values use the abstract terms _block_ and _inline_ to describe the direction in which they flow. The physical meaning of these terms depends on the [writing mode](/en-US/docs/Web/CSS/CSS_Writing_Modes).<br/><br/>- Block dimension<br/>  - : The dimension perpendicular to the flow of text within a line, i.e., the vertical dimension in horizontal writing modes, and the horizontal dimension in vertical writing modes. For standard English text, it is the vertical dimension.<br/>- Inline dimension<br/>  - : The dimension parallel to the flow of text within a line, i.e., the horizontal dimension in horizontal writing modes, and the vertical dimension in vertical writing modes. For standard English text, it is the horizontal dimension.<br/><br/>## Reference<br/><br/>### Properties for sizing<br/><br/>- {{CSSxRef(block-size)}}<br/>- {{CSSxRef(inline-size)}}<br/>- {{CSSxRef(max-block-size)}}<br/>- {{CSSxRef(max-inline-size)}}<br/>- {{CSSxRef(min-block-size)}}<br/>- {{CSSxRef(min-inline-size)}}<br/><br/>### Properties for margins, borders and padding<br/><br/>- {{CSSxRef(border-block)}}<br/>- {{CSSxRef(border-block-color)}}<br/>- {{CSSxRef(border-block-end)}}<br/>- {{CSSxRef(border-block-end-color)}}<br/>- {{CSSxRef(border-block-end-style)}}<br/>- {{CSSxRef(border-block-end-width)}}<br/>- {{CSSxRef(border-block-start)}}<br/>- {{CSSxRef(border-block-start-color)}}<br/>- {{CSSxRef(border-block-start-style)}}<br/>- {{CSSxRef(border-block-start-width)}}<br/>- {{CSSxRef(border-block-style)}}<br/>- {{CSSxRef(border-block-width)}}<br/>- {{CSSxRef(border-color)}}<br/>- {{CSSxRef(border-inline)}}<br/>- {{CSSxRef(border-inline-color)}}<br/>- {{CSSxRef(border-inline-end)}}<br/>- {{CSSxRef(border-inline-end-color)}}<br/>- {{CSSxRef(border-inline-end-style)}}<br/>- {{CSSxRef(border-inline-end-width)}}<br/>- {{CSSxRef(border-inline-start)}}<br/>- {{CSSxRef(border-inline-start-color)}}<br/>- {{CSSxRef(border-inline-start-style)}}<br/>- {{CSSxRef(border-inline-start-width)}}<br/>- {{CSSxRef(border-inline-style)}}<br/>- {{CSSxRef(border-inline-width)}}<br/>- {{CSSxRef(border-start-start-radius)}}<br/>- {{CSSxRef(border-start-end-radius)}}<br/>- {{CSSxRef(border-end-start-radius)}}<br/>- {{CSSxRef(border-end-end-radius)}}<br/>- {{CSSxRef(border-style)}}<br/>- {{CSSxRef(border-width)}}<br/>- {{CSSxRef(margin)}} (`logical` {{Experimental_Inline}} keyword)<br/>- {{CSSxRef(margin-block)}}<br/>- {{CSSxRef(margin-block-end)}}<br/>- {{CSSxRef(margin-block-start)}}<br/>- {{CSSxRef(margin-inline)}}<br/>- {{CSSxRef(margin-inline-end)}}<br/>- {{CSSxRef(margin-inline-start)}}<br/>- {{CSSxRef(padding)}} (`logical` {{Experimental_Inline}} keyword)<br/>- {{CSSxRef(padding-block)}}<br/>- {{CSSxRef(padding-block-end)}}<br/>- {{CSSxRef(padding-block-start)}}<br/>- {{CSSxRef(padding-inline)}}<br/>- {{CSSxRef(padding-inline-end)}}<br/>- {{CSSxRef(padding-inline-start)}}<br/><br/>### Properties for floating and positioning<br/><br/>- {{CSSxRef(clear)}} (`inline-end` and `inline-start` keywords)<br/>- {{CSSxRef(float)}} (`inline-end` and `inline-start` keywords)<br/>- {{CSSxRef(inset)}}<br/>- {{CSSxRef(inset-block)}}<br/>- {{CSSxRef(inset-block-end)}}<br/>- {{CSSxRef(inset-block-start)}}<br/>- {{CSSxRef(inset-inline)}}<br/>- {{CSSxRef(inset-inline-end)}}<br/>- {{CSSxRef(inset-inline-start)}}<br/><br/>### Other properties<br/><br/>- {{CSSxRef(caption-side)}} (`inline-end` and `inline-start` keywords)<br/>- {{CSSxRef(overflow-block)}}<br/>- {{CSSxRef(overflow-inline)}}<br/>- {{CSSxRef(overscroll-behavior-block)}}<br/>- {{CSSxRef(overscroll-behavior-inline)}}<br/>- {{CSSxRef(resize)}} (`block` and `inline` keywords)<br/>- {{CSSxRef(text-align)}} (`end` and `start` keywords)<br/><br/>### Deprecated properties<br/><br/>- {{CSSxRef(offset-block-end)}} {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef(inset-block-end)}})<br/>- {{CSSxRef(offset-block-start)}} {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef(inset-block-start)}})<br/>- {{CSSxRef(offset-inline-end)}} {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef(inset-inline-end)}})<br/>- {{CSSxRef(offset-inline-start)}} {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef(inset-inline-start)}})<br/><br/>## Guides<br/><br/>- [Basic concepts of logical properties and values](/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts)<br/>- [Logical Properties for sizing](/en-US/docs/Web/CSS/CSS_Logical_Properties/Sizing)<br/>- [Logical Properties for margins, borders and padding](/en-US/docs/Web/CSS/CSS_Logical_Properties/Margins_borders_padding)<br/>- [Logical Properties for floating and positioning](/en-US/docs/Web/CSS/CSS_Logical_Properties/Floating_and_positioning)<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>See the individual property pages for full compatibility information.<br/>