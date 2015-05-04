## MapPalette __class__

>io.wolfscript.map.MapPalette

---

### Class Overview

Represents the palette that map items use. <p> These fields are hee base color ranges. Each entry corresponds to four colors of varying shades with values entry to entry + 3.

Method | Type   
--- | :--- 
static function __resizeImage__(image) <br> _Resize an image to 128x128._ | `BufferedImage`
static final var __TRANSPARENT__ <br> _TRANSPARENT field_ | `byte`
static final var __LIGHT__ <br> _LIGHT field_ | `byte`
static final var __LIGHT__ <br> _LIGHT field_ | `byte`
static final var __GRAY__ <br> _GRAY field_ | `byte`
static final var __RED__ <br> _RED field_ | `byte`
static final var __PALE__ <br> _PALE field_ | `byte`
static final var __GRAY__ <br> _GRAY field_ | `byte`
static final var __DARK__ <br> _DARK field_ | `byte`
static final var __WHITE__ <br> _WHITE field_ | `byte`
static final var __LIGHT__ <br> _LIGHT field_ | `byte`
static final var __BROWN__ <br> _BROWN field_ | `byte`
static final var __DARK__ <br> _DARK field_ | `byte`
static final var __BLUE__ <br> _BLUE field_ | `byte`
static final var __DARK__ <br> _DARK field_ | `byte`



---


### Public Methods for [`MapPalette`](MapPalette.md)

##### <a id='getcolor'></a>public static function __getColor__(index)
_Deprecated: Magic value_

_Get the value of the given color in the palette._

Argument | Type | Description  
--- | --- | --- 
index | `byte` | The index in the palette.

Returns | Description
--- | --- 
`Color` | The Color of the palette entry.


##### <a id='imagetobytes'></a>public static function __imageToBytes__(image)
_Deprecated: Magic value_

_Convert an Image to a byte[] using the palette._

Argument | Type | Description  
--- | --- | --- 
image | `Image` | The image to convert.

Returns | Description
--- | --- 
`byte[]` | A byte[] containing the pixels of the image.


##### <a id='matchcolor'></a>public static function __matchColor__(r, g, b)
_Deprecated: Magic value_

_Get the index of the closest matching color in the palette to the given color._

Argument | Type | Description  
--- | --- | --- 
r | `int` | The red component of the color.
g | `int` | The green component of the color.
b | `int` | The blue component of the color.

Returns | Description
--- | --- 
`byte` | The index in the palette.


##### <a id='matchcolor'></a>public static function __matchColor__(color)
_Deprecated: Magic value_

_Get the index of the closest matching color in the palette to the given color._

Argument | Type | Description  
--- | --- | --- 
color | `Color` | The Color to match.

Returns | Description
--- | --- 
`byte` | The index in the palette.


##### <a id='resizeimage'></a>public static function __resizeImage__(image)

_Resize an image to 128x128._

Argument | Type | Description  
--- | --- | --- 
image | `Image` | The image to resize.

Returns | Description
--- | --- 
`BufferedImage` | The resized image.


---

### Public Fields for [`MapPalette`](MapPalette.md)

##### <a id='transparent'></a>public static final var __TRANSPARENT__

_TRANSPARENT field_

>Returns
>  `byte`

##### <a id='light'></a>public static final var __LIGHT__

_LIGHT field_

>Returns
>  `byte`

##### <a id='light'></a>public static final var __LIGHT__

_LIGHT field_

>Returns
>  `byte`

##### <a id='gray'></a>public static final var __GRAY__

_GRAY field_

>Returns
>  `byte`

##### <a id='red'></a>public static final var __RED__

_RED field_

>Returns
>  `byte`

##### <a id='pale'></a>public static final var __PALE__

_PALE field_

>Returns
>  `byte`

##### <a id='gray'></a>public static final var __GRAY__

_GRAY field_

>Returns
>  `byte`

##### <a id='dark'></a>public static final var __DARK__

_DARK field_

>Returns
>  `byte`

##### <a id='white'></a>public static final var __WHITE__

_WHITE field_

>Returns
>  `byte`

##### <a id='light'></a>public static final var __LIGHT__

_LIGHT field_

>Returns
>  `byte`

##### <a id='brown'></a>public static final var __BROWN__

_BROWN field_

>Returns
>  `byte`

##### <a id='dark'></a>public static final var __DARK__

_DARK field_

>Returns
>  `byte`

##### <a id='blue'></a>public static final var __BLUE__

_BLUE field_

>Returns
>  `byte`

##### <a id='dark'></a>public static final var __DARK__

_DARK field_

>Returns
>  `byte`

---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

