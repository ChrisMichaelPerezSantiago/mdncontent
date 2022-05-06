## ✔️ color_value 
 ---<br/>title: <color><br/>slug: Web/CSS/color_value<br/>tags:<br/>  - CSS<br/>  - CSS Data Type<br/>  - Data Type<br/>  - Layout<br/>  - Reference<br/>  - Web<br/>  - color<br/>  - hsl<br/>  - hsla<br/>  - rgb<br/>  - rgba<br/>  - unit<br/>  - lch<br/>  - lab<br/>  - lwb<br/>browser-compat: css.types.color<br/>---<br/>{{CSSRef}}<br/><br/>The **`<color>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a color.<br/>A `<color>` may also include an [alpha-channel](https://en.wikipedia.org/wiki/Alpha_compositing) _transparency value_, indicating how the color should [composite](https://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending) with its background.<br/><br/>A `<color>` can be defined in any of the following ways:<br/><br/>- Using a keyword (such as `blue` or `transparent`). All existing keywords specify a color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB)<br/>- Using the [RGB cubic-coordinate](https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation) system (via the #-hexadecimal or the `rgb()` and `rgba()` functional notations).<br/>  These always specify a color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB)<br/>- Using the [HSL cylindrical-coordinate](https://en.wikipedia.org/wiki/HSL_and_HSV) system (via the {{cssxref(color_value/hsl,hsl())}} and {{cssxref(color_value/hsla,hsla())}} functional notations).<br/>  These always specify a color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB)<br/>- Using the [HWB cylindrical-coordinate](https://en.wikipedia.org/wiki/HWB_color_model) system (via the {{cssxref(color_value/hwb,hwb())}} functional notation).<br/>  These always specify a color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB)<br/>- Using the [LCH cylindrical coordinate system](https://en.wikipedia.org/wiki/CIELAB_color_space#Cylindrical_representation:_CIELCh_or_CIEHLC), via the {{cssxref(color_value/lch,lch())}} functional notation.<br/>  This can specify any visible color.<br/>- Using the [Lab coordinate system](https://en.wikipedia.org/wiki/CIELAB_color_space), via the {{cssxref(color_value/lab,lab())}} functional notation.<br/>  This can specify any visible color.<br/>- Using the {{cssxref(color_value/color,color())}} functional notation, to specify a color in a variety of predefined or custom color spaces.<br/><br/>> **Note:** This article describes the `<color>` data type in detail. To learn more about using color in HTML, see [Applying color to HTML elements using CSS](/en-US/docs/Web/HTML/Applying_color).<br/><br/>## Syntax<br/><br/>The `<color>` data type is specified using one of the options listed below.<br/><br/>> **Note:** Although `<color>` values are precisely defined, their actual appearance may vary (sometimes significantly) from device to device. This is because most devices are not calibrated, and some browsers do not support output devices' [color profiles](https://en.wikipedia.org/wiki/ICC_profile).<br/><br/>### Color keywords<br/><br/>Color keywords are case-insensitive identifiers that represent a specific color, such as `red`, `blue`, `black`, or `lightseagreen`. Although the names more or less describe their respective colors, they are essentially artificial, without a strict rationale behind the names used.<br/><br/>The complete list of such keywords is available [here](/en-US/docs/Web/CSS/color_value/color_keywords).<br/><br/>### transparent keyword<br/><br/>The `transparent` keyword represents a fully transparent color. This makes the background behind the colored item completely visible. Technically, `transparent` is a shortcut for `rgba(0,0,0,0)`.<br/><br/>> **Note:** To prevent unexpected behavior, such as in a {{cssxref(gradient)}}, the current CSS spec states that `transparent` should be calculated in the [alpha-premultiplied color space](https://www.w3.org/TR/css-color-4/#interpolation-alpha). However, be aware that older browsers may treat it as black with an alpha value of `0`.<br/><br/>> **Note:** `transparent` wasn't a true color in CSS Level 2 (Revision 1). It was a special keyword that could be used instead of a regular `<color>` value on two CSS properties: {{Cssxref(background)}} and {{Cssxref(border)}}. It was essentially added to allow developers to override an inherited solid color. With the advent of alpha channels in CSS Colors Level 3, `transparent` was redefined as a true color. It can now be used wherever a `<color>` value can be used.<br/><br/>### currentColor keyword<br/><br/>The `currentColor` keyword represents the value of an element's {{Cssxref(color)}} property. This lets you use the `color` value on properties that do not receive it by default.<br/><br/>If `currentColor` is used as the value of the `color` property, it instead takes its value from the inherited value of the `color` property.<br/><br/>```html<br/><div style=color: blue; border: 1px dashed currentColor;><br/>  The color of this text is blue.<br/>  <div style=background: currentColor; height:9px;></div><br/>  This block is surrounded by a blue border.<br/></div><br/>```<br/><br/>{{EmbedLiveSample('currentColor_keyword', 600, 80)}}<br/><br/>### RGB color model<br/><br/>The RGB color model defines a given color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB) according to its red, green, and blue components. An optional alpha component represents the color's transparency.<br/><br/>RGB colors can be expressed through both hexadecimal (prefixed with `#`) and functional (`rgb()`, `rgba()`) notations.<br/><br/>- [Hexadecimal notation](/en-US/docs/Web/CSS/color_value/hexadecimal_rgb): `#RGB[A]` or`#RRGGBB[AA]`<br/>  - : `R` (red), `G` (green), `B` (blue), and `A` (alpha) are hexadecimal characters (0–9, A–F). `A` is optional. For example, `#ff0000` is equivalent to `#ff0000ff`. The three-digit notation (`#RGB`) is a shorter version of the six-digit form (`#RRGGBB`). For example, `#f09` is the same color as `#ff0099`. Likewise, the four-digit RGB notation (`#RGBA`) is a shorter version of the eight-digit form (`#RRGGBBAA`). For example, `#0f38` is the same color as `#00ff3388`.<br/>- [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb) or [`rgba()`](/en-US/docs/Web/CSS/color_value/rgba): `rgb[a](R, G, B[, A])` or `rgb[a](R G B[ / A])`<br/>  - : `R` (red), `G` (green), and `B` (blue) can be either {{cssxref(&lt;number&gt;)}}s or {{cssxref(&lt;percentage&gt;)}}s, where the number `255` corresponds to `100%`. `A` (alpha) can be a {{cssxref(&lt;number&gt;)}} between `0` and `1`, or a {{cssxref(&lt;percentage&gt;)}}, where the number `1` corresponds to `100%` (full opacity).<br/><br/>### HSL color model<br/><br/>The HSL color model defines a given color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB) according to its hue, saturation, and lightness components. An optional alpha component represents the color's transparency.<br/><br/>Many designers find HSL more intuitive than RGB, since it allows hue, saturation, and lightness to each be adjusted independently. HSL can also make it easier to create a set of matching colors (such as when you want multiple shades of a single hue).<br/>However, using HSL to create color variations can produce surprising results, as it is not [perceptually uniform](https://en.wikipedia.org/wiki/Color_difference#Tolerance). For example, both `hsl(240 100% 50%)` and `hsl(60 100% 50%)` have the same lightness, even though the former is much darker than the latter.<br/><br/>HSL colors are expressed through the functional `hsl()` and `hsla()` notations.<br/><br/>- [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl) or [`hsla()`](/en-US/docs/Web/CSS/color_value/hsla): `hsl[a](H, S, L[, A])` or `hsl[a](H S L[ / A])`<br/><br/>  - : `H` (hue) is an {{cssxref(&lt;angle&gt;)}} of the color circle given in `deg`s, `rad`s, `grad`s, or `turn`s in {{SpecName(CSS4 Colors,#the-hsl-notation)}}. When written as a unitless {{cssxref(&lt;number&gt;)}}, it is interpreted as degrees, as specified in {{SpecName(CSS3 Colors, #hsl-color)}}. By definition, red=0deg=360deg, with the other colors spread around the circle, so green=120deg, blue=240deg, etc. As an `<angle>`, it implicitly wraps around such that -120deg=240deg, 480deg=120deg, -1turn=1turn, etc.<br/><br/>    `S` (saturation) and `L` (lightness) are percentages. `100%` **saturation** is completely saturated, while `0%` is completely unsaturated (gray). `100%` **lightness** is white, `0%` lightness is black, and `50%` lightness is normal.<br/><br/>    `A` (alpha) can be a {{cssxref(&lt;number&gt;)}} between `0` and `1`, or a {{cssxref(&lt;percentage&gt;)}}, where the number `1` corresponds to `100%` (full opacity).<br/><br/>### HWB color model<br/><br/>Similar to HSL color model, the HWB color model defines a given color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB) according to its hue, whiteness and blackness components.<br/><br/>As with HSL, HWB can be more intuitive to use than RGB. A hue is specified in the same way, followed by the amount of whiteness and blackness, respectively, in percentage values. This function also accepts a alpha value.<br/><br/>> **Note:** There is **no** separate `hwba()` function as there is with HSL, the alpha value is an optional parameter, if it is not specified an alpha value of 1 (or 100%) is used. To specify this value a forward slash (`/`) must follow the blackness value before the alpha value is specified.<br/><br/>HWB colors are expressed through the functional `hwb()` notation.<br/><br/>> **Note:** The HWB function does **not** use commas to separate it's values as with previous color functions.<br/><br/>- [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb): `hwb(H W B[ / A])`<br/><br/>  - : Same as HSL: `H` (hue) is an {{cssxref(&lt;angle&gt;)}} of the color circle given in `deg`s, `rad`s, `grad`s, or `turn`s in {{SpecName(CSS4 Colors,#the-hsl-notation)}}. When written as a unitless {{cssxref(&lt;number&gt;)}}, it is interpreted as degrees, as specified in {{SpecName(CSS3 Colors, #hsl-color)}}. By definition, red=0deg=360deg, with the other colors spread around the circle, so green=120deg, blue=240deg, etc. As an `<angle>`, it implicitly wraps around such that -120deg=240deg, 480deg=120deg, -1turn=1turn, etc.<br/><br/>    `W` (whiteness) and `B` (blackness) are percentages. These two colors mix, so you would need `0%` **whiteness** and `100%` **blackness** to produce the color black. And vice versa `100%` whiteness and `0%` blackness for the color white. `50%` of both values renders a mid grey and any other variations a shade of the hue specified.<br/><br/>    `A` (alpha), optional, can be a {{cssxref(&lt;number&gt;)}} between `0` and `1`, or a {{cssxref(&lt;percentage&gt;)}}, where the number `1` corresponds to `100%` (full opacity). When specifying an alpha value it must be preceded with a forward slash (`/`).<br/><br/>### System Colors<br/><br/>In _forced colors mode_ (detectable with the [forced-colors](/en-US/docs/Web/CSS/@media/forced-colors) media query), most colors are restricted into a user- and browser-defined palette. These system colors are exposed by the following keywords, which can be used to ensure that the rest of the page integrates well with the restricted palette. These values may also be used in other contexts, but are not widely supported by browsers.<br/><br/>The keywords in the following list are defined by the CSS Color Module Level 4 specification: `ActiveText`, `ButtonBorder`, `ButtonFace`, `ButtonText`, `Canvas`, `CanvasText`, `Field`, `FieldText`, `GrayText`, `Highlight`, `HighlightText`, `LinkText`, `Mark`, `MarkText`, `VisitedText`.<br/><br/>> **Note:** Note that these keywords are _case insensitive_, but are listed here with mixed case for readability.<br/><br/>### Lab colors<br/><br/>CSS Color 4 introduced Lab colors.<br/>Lab colors are specified via the {{cssxref(color_value/lab,lab())}} functional notation.<br/>They are not limited to a specific color space, and can represent the entire spectrum of human vision.<br/><br/>### LCH color model<br/><br/>CSS Color 4 introduced LCH colors.<br/>LCH colors are specified via the {{cssxref(color_value/lch,lch())}} functional notation.<br/>They are not limited to a specific color space, and can represent the entire spectrum of human vision.<br/><br/>In fact, LCH is the polar form of Lab. It is more human friendly than Lab, as its chroma and hue components specify qualities of the desired color, as opposed to mixing.<br/>It is similar to HSL in that way, although it is far more perceptually uniform.<br/>Unlike HSL that describes both `hsl(60 100% 50%)` `hsl(240 100% 50%)` as having the same lightness, LCH (and Lab) correctly ascribes different lightnesses to them:<br/>the former (yellow) has an L of 97.6 and the latter (blue) an L of 29.6.<br/>Therefore, LCH can be used to create palettes across entirely different colors, with predictable results.<br/>Please note that LCH hue is not the same as HSL hue and LCH chroma is not the same as HSL saturation, although they do share some conceptual similarities.<br/><br/>### color() colors<br/><br/>CSS Color 4 introduced this notation.<br/>Colors specified via the {{cssxref(color_value/color,color())}} function can specify a color in any of the predefined color spaces,<br/>as well as custom color spaces, defined via the [`@color-profile`](/en-US/docs/Web/CSS/@color-profile) rule.<br/><br/>## Interpolation<br/><br/>In animations and [gradients](/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients), `<color>` values are {{Glossary(interpolation, interpolated)}} on each of their red, green, and blue components. Each component is interpolated as a real, floating-point number. Note that interpolation of colors happens in the [alpha-premultiplied sRGBA color space](https://www.w3.org/TR/css-color-4/#interpolation-alpha) to prevent unexpected gray colors from appearing. In animations, the interpolation's speed is determined by the [timing function](/en-US/docs/Web/CSS/easing-function).<br/><br/>## Accessibility considerations<br/><br/>Some people have difficulty distinguishing colors. The [WCAG 2.0](https://www.w3.org/TR/WCAG/#visual-audio-contrast) recommendation strongly advises against using color as the only means of conveying a specific message, action, or result. See [Color and color contrast](/en-US/docs/Learn/Accessibility/CSS_and_JavaScript#color_and_color_contrast) for more information.<br/><br/>## Examples<br/><br/>### Color value tester<br/><br/>In this example we provide a `<div>` and a text input. Entering a valid color into the input causes the `<div>` to adopt that color, allowing you to test our color values.<br/><br/>#### HTML<br/><br/>```html<br/><div></div><br/><hr><br/><label for=color>Enter a valid color value:</label><br/><input type=text id=color><br/>```<br/><br/>#### CSS<br/><br/>```css<br/>div {<br/>  width: 100%;<br/>  height: 200px;<br/>}<br/>```<br/><br/>```js hidden<br/>const inputElem = document.querySelector('input');<br/>const divElem = document.querySelector('div');<br/><br/>function validTextColor(stringToTest) {<br/>  if (stringToTest === ) { return false; }<br/>  if (stringToTest === inherit) { return false; }<br/>  if (stringToTest === transparent) { return false; }<br/><br/>  const image = document.createElement(img);<br/>  image.style.color = rgb(0, 0, 0);<br/>  image.style.color = stringToTest;<br/>  if (image.style.color !== rgb(0, 0, 0)) { return true; }<br/>  image.style.color = rgb(255, 255, 255);<br/>  image.style.color = stringToTest;<br/>  return image.style.color !== rgb(255, 255, 255);<br/>}<br/><br/>inputElem.addEventListener('change', () => {<br/>  if(validTextColor(inputElem.value)) {<br/>    divElem.style.backgroundColor = inputElem.value;<br/>    divElem.textContent = '';<br/>  } else {<br/>    divElem.style.backgroundColor = 'white';<br/>    divElem.textContent = 'Invalid color value';<br/>  }<br/>});<br/>```<br/><br/>#### Result<br/><br/>{{EmbedLiveSample('Color_value_tester','100%', 300)}}<br/><br/>### RGB syntax variations<br/><br/>This example shows the many ways in which a single color can be created with the various RGB color syntaxes.<br/><br/>```css<br/>/* These syntax variations all specify the same color: a fully opaque hot pink. */<br/><br/>/* Hexadecimal syntax */<br/>#f09<br/>#F09<br/>#ff0099<br/>#FF0099<br/><br/>/* Functional syntax */<br/>rgb(255,0,153)<br/>rgb(255, 0, 153)<br/>rgb(255, 0, 153.0)<br/>rgb(100%,0%,60%)<br/>rgb(100%, 0%, 60%)<br/>rgb(100%, 0, 60%) /* ERROR! Don't mix numbers and percentages. */<br/>rgb(255 0 153)<br/><br/>/* Hexadecimal syntax with alpha value */<br/>#f09f<br/>#F09F<br/>#ff0099ff<br/>#FF0099FF<br/><br/>/* Functional syntax with alpha value */<br/>rgb(255, 0, 153, 1)<br/>rgb(255, 0, 153, 100%)<br/><br/>/* Whitespace syntax */<br/>rgb(255 0 153 / 1)<br/>rgb(255 0 153 / 100%)<br/><br/>/* Functional syntax with floats value */<br/>rgb(255, 0, 153.6, 1)<br/>rgb(2.55e2, 0e0, 1.53e2, 1e2%)<br/>```<br/><br/>### RGB transparency variations<br/><br/>```css<br/>/* Hexadecimal syntax */<br/>#3a30                    /*   0% opaque green */<br/>#3A3F                    /* full opaque green */<br/>#33aa3300                /*   0% opaque green */<br/>#33AA3380                /*  50% opaque green */<br/><br/>/* Functional syntax */<br/>rgba(51, 170, 51, .1)    /*  10% opaque green */<br/>rgba(51, 170, 51, .4)    /*  40% opaque green */<br/>rgba(51, 170, 51, .7)    /*  70% opaque green */<br/>rgba(51, 170, 51,  1)    /* full opaque green */<br/><br/>/* Whitespace syntax */<br/>rgba(51 170 51 / 0.4)    /*  40% opaque green */<br/>rgba(51 170 51 / 40%)    /*  40% opaque green */<br/><br/>/* Functional syntax with floats value */<br/>rgba(51, 170, 51.6, 1)<br/>rgba(5.1e1, 1.7e2, 5.1e1, 1e2%)<br/>```<br/><br/>### HSL syntax variations<br/><br/>```css<br/>/* These examples all specify the same color: a lavender. */<br/>hsl(270,60%,70%)<br/>hsl(270, 60%, 70%)<br/>hsl(270 60% 70%)<br/>hsl(270deg, 60%, 70%)<br/>hsl(4.71239rad, 60%, 70%)<br/>hsl(.75turn, 60%, 70%)<br/><br/>/* These examples all specify the same color: a lavender that is 15% opaque. */<br/>hsl(270, 60%, 50%, .15)<br/>hsl(270, 60%, 50%, 15%)<br/>hsl(270 60% 50% / .15)<br/>hsl(270 60% 50% / 15%)<br/>```<br/><br/>### HWB syntax variations<br/><br/>```css<br/>/* These examples all specify varying shades of a lime green. */<br/>hwb(90 10% 10%)<br/>hwb(90 50% 10%)<br/>hwb(90deg 10% 10%)<br/>hwb(1.5708rad 60% 0%)<br/>hwb(.25turn 0% 40%)<br/><br/>/* Same lime green but with an alpha value */<br/>hwb(90 10% 10% / 0.5)<br/>hwb(90 10% 10% / 50%)<br/>```<br/><br/>### Fully saturated colors<br/><br/><table><br/>  <thead><br/>    <tr><br/>      <th scope=col>Notation</th><br/>      <th scope=col>Description</th><br/>      <th scope=col>Live</th><br/>    </tr><br/>  </thead><br/>  <tbody><br/>    <tr><br/>      <td><code>hsl(0, 100%, 50%)</code></td><br/>      <td>red</td><br/>      <td style=background: hsl(0, 100%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(30, 100%, 50%)</code></td><br/>      <td>orange</td><br/>      <td style=background: hsl(30, 100%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(60, 100%, 50%)</code></td><br/>      <td>yellow</td><br/>      <td style=background: hsl(60, 100%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(90, 100%, 50%)</code></td><br/>      <td>lime green</td><br/>      <td style=background: hsl(90, 100%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(120, 100%, 50%)</code></td><br/>      <td>green</td><br/>      <td style=background: hsl(120, 100%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(150, 100%, 50%)</code></td><br/>      <td>blue-green</td><br/>      <td style=background: hsl(150, 100%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(180, 100%, 50%)</code></td><br/>      <td>cyan</td><br/>      <td style=background: hsl(180, 100%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(210, 100%, 50%)</code></td><br/>      <td>sky blue</td><br/>      <td style=background: hsl(210, 100%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(240, 100%, 50%)</code></td><br/>      <td>blue</td><br/>      <td style=background: hsl(240, 100%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(270, 100%, 50%)</code></td><br/>      <td>purple</td><br/>      <td style=background: hsl(270, 100%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(300, 100%, 50%)</code></td><br/>      <td>magenta</td><br/>      <td style=background: hsl(300, 100%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(330, 100%, 50%)</code></td><br/>      <td>pink</td><br/>      <td style=background: hsl(330, 100%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(360, 100%, 50%)</code></td><br/>      <td>red</td><br/>      <td style=background: hsl(360, 100%, 50%)></td><br/>    </tr><br/>  </tbody><br/></table><br/><br/>### Lighter and darker greens<br/><br/><table><br/>  <thead><br/>    <tr><br/>      <th scope=col>Notation</th><br/>      <th scope=col>Description</th><br/>      <th scope=col>Live</th><br/>    </tr><br/>  </thead><br/>  <tbody><br/>    <tr><br/>      <td><code>hsl(120, 100%, 0%)</code></td><br/>      <td>black</td><br/>      <td style=background: hsl(120, 100%, 0%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(120, 100%, 20%)</code></td><br/>      <td></td><br/>      <td style=background: hsl(120, 100%, 20%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(120, 100%, 40%)</code></td><br/>      <td></td><br/>      <td style=background: hsl(120, 100%, 40%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(120, 100%, 60%)</code></td><br/>      <td></td><br/>      <td style=background: hsl(120, 100%, 60%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(120, 100%, 80%)</code></td><br/>      <td></td><br/>      <td style=background: hsl(120, 100%, 80%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(120, 100%, 100%)</code></td><br/>      <td>white</td><br/>      <td style=background: hsl(120, 100%, 100%)></td><br/>    </tr><br/>  </tbody><br/></table><br/><br/>### Saturated and desaturated greens<br/><br/><table><br/>  <thead><br/>    <tr><br/>      <th scope=col>Notation</th><br/>      <th scope=col>Description</th><br/>      <th scope=col>Live</th><br/>    </tr><br/>  </thead><br/>  <tbody><br/>    <tr><br/>      <td><code>hsl(120, 100%, 50%)</code></td><br/>      <td>green</td><br/>      <td style=background: hsl(120, 100%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(120, 80%, 50%)</code></td><br/>      <td></td><br/>      <td style=background: hsl(120, 80%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(120, 60%, 50%)</code></td><br/>      <td></td><br/>      <td style=background: hsl(120, 60%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(120, 40%, 50%)</code></td><br/>      <td></td><br/>      <td style=background: hsl(120, 40%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(120, 20%, 50%)</code></td><br/>      <td></td><br/>      <td style=background: hsl(120, 20%, 50%)></td><br/>    </tr><br/>    <tr><br/>      <td><code>hsl(120, 0%, 50%)</code></td><br/>      <td>gray</td><br/>      <td style=background: hsl(120, 0%, 50%)></td><br/>    </tr><br/>  </tbody><br/></table><br/><br/>### HSL transparency variations<br/><br/>```css<br/>hsla(240, 100%, 50%, .05)     /*   5% opaque blue */<br/>hsla(240, 100%, 50%, .4)      /*  40% opaque blue */<br/>hsla(240, 100%, 50%, .7)      /*  70% opaque blue */<br/>hsla(240, 100%, 50%, 1)       /* full opaque blue */<br/><br/>/* Whitespace syntax */<br/>hsla(240 100% 50% / .05)      /*   5% opaque blue */<br/><br/>/* Percentage value for alpha */<br/>hsla(240 100% 50% / 5%)       /*   5% opaque blue */<br/>```<br/><br/>## Specifications<br/><br/>{{Specifications}}<br/><br/>## Browser compatibility<br/><br/>{{Compat}}<br/><br/>## See also<br/><br/>- The {{Cssxref(opacity)}} property lets you define transparency at the element level.<br/>- Some common properties that use this data type: {{Cssxref(color)}}, {{Cssxref(background-color)}}, {{Cssxref(border-color)}}, {{Cssxref(box-shadow)}}, {{Cssxref(outline-color)}}, {{Cssxref(text-shadow)}}<br/>- [Applying color to HTML elements using CSS](/en-US/docs/Web/HTML/Applying_color)<br/>