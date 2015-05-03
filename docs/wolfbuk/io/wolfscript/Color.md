## Color __class__

>io.wolfscript.Color
>Implements [`ConfigurationSerializable`](configuration\serialization\ConfigurationSerializable.md)

---

### Class Overview

A container for a color palette. This class is immutable; the set methods return a new color. The color names listed as fields are HTML4 standards, but subject to change.

Method | Type   
--- | :--- 
 function __asBGR__() <br> _White, or (0xFF,0xFF,0xFF) in (R,G,B)_ | `int`
static function __deserialize__() <br> _deserialize method_ | [`Color`](Color.md)
 function __equals__(o) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __mixColors__() <br> _mixColors method_ | [`Color`](Color.md)
 function __mixDyes__() <br> _mixDyes method_ | [`Color`](Color.md)
 function __toString__() <br> _toString method_ | `String`
static final var __WHITE__ <br> _WHITE field_ | [`Color`](Color.md)
static final var __SILVER__ <br> _SILVER field_ | [`Color`](Color.md)
static final var __GRAY__ <br> _GRAY field_ | [`Color`](Color.md)
static final var __BLACK__ <br> _BLACK field_ | [`Color`](Color.md)
static final var __RED__ <br> _RED field_ | [`Color`](Color.md)
static final var __MAROON__ <br> _MAROON field_ | [`Color`](Color.md)
static final var __YELLOW__ <br> _YELLOW field_ | [`Color`](Color.md)
static final var __OLIVE__ <br> _OLIVE field_ | [`Color`](Color.md)
static final var __LIME__ <br> _LIME field_ | [`Color`](Color.md)
static final var __GREEN__ <br> _GREEN field_ | [`Color`](Color.md)
static final var __AQUA__ <br> _AQUA field_ | [`Color`](Color.md)
static final var __TEAL__ <br> _TEAL field_ | [`Color`](Color.md)
static final var __BLUE__ <br> _BLUE field_ | [`Color`](Color.md)
static final var __NAVY__ <br> _NAVY field_ | [`Color`](Color.md)
static final var __ORANGE__ <br> _Fuchsia, or (0xFF,0x00,0xFF) in (R,G,B)_ | [`Color`](Color.md)



---


### Public Methods for [`Color`](Color.md)

##### <a id='asbgr'></a>public  function __asBGR__()

_White, or (0xFF,0xFF,0xFF) in (R,G,B) /
    public static final Color WHITE = fromRGB(0xFFFFFF);

    /** Silver, or (0xC0,0xC0,0xC0) in (R,G,B) /
    public static final Color SILVER = fromRGB(0xC0C0C0);

    /** Gray, or (0x80,0x80,0x80) in (R,G,B) /
    public static final Color GRAY = fromRGB(0x808080);

    /** Black, or (0x00,0x00,0x00) in (R,G,B) /
    public static final Color BLACK = fromRGB(0x000000);

    /** Red, or (0xFF,0x00,0x00) in (R,G,B) /
    public static final Color RED = fromRGB(0xFF0000);

    /** Maroon, or (0x80,0x00,0x00) in (R,G,B) /
    public static final Color MAROON = fromRGB(0x800000);

    /** Yellow, or (0xFF,0xFF,0x00) in (R,G,B) /
    public static final Color YELLOW = fromRGB(0xFFFF00);

    /** Olive, or (0x80,0x80,0x00) in (R,G,B) /
    public static final Color OLIVE = fromRGB(0x808000);

    /** Lime, or (0x00,0xFF,0x00) in (R,G,B) /
    public static final Color LIME = fromRGB(0x00FF00);

    /** Green, or (0x00,0x80,0x00) in (R,G,B) /
    public static final Color GREEN = fromRGB(0x008000);

    /** Aqua, or (0x00,0xFF,0xFF) in (R,G,B) /
    public static final Color AQUA = fromRGB(0x00FFFF);

    /** Teal, or (0x00,0x80,0x80) in (R,G,B) /
    public static final Color TEAL = fromRGB(0x008080);

    /** Blue, or (0x00,0x00,0xFF) in (R,G,B) /
    public static final Color BLUE = fromRGB(0x0000FF);

    /** Navy, or (0x00,0x00,0x80) in (R,G,B) /
    public static final Color NAVY = fromRGB(0x000080);

    /** Fuchsia, or (0xFF,0x00,0xFF) in (R,G,B) /
    public static final Color FUCHSIA = fromRGB(0xFF00FF);

    /** Purple, or (0x80,0x00,0x80) in (R,G,B) /
    public static final Color PURPLE = fromRGB(0x800080);

    /** Orange, or (0xFF,0xA5,0x00) in (R,G,B) /
    public static final Color ORANGE = fromRGB(0xFFA500);

    private final byte red;
    private final byte green;
    private final byte blue;

    /** Creates a new Color object from a red, green, and blue_

Returns | Description
--- | --- 
`int` | a new Color object for the red, green, blue


##### <a id='deserialize'></a>public static function __deserialize__()

_deserialize method_

Returns | 
--- | 
[`Color`](Color.md) |


##### <a id='equals'></a>public  function __equals__(o)

_equals method_

Argument | Type | Description  
--- | --- | --- 
o | `Object` | o argument

Returns | 
--- | 
`boolean` |


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


##### <a id='mixcolors'></a>public  function __mixColors__()

_mixColors method_

Returns | 
--- | 
[`Color`](Color.md) |


##### <a id='mixdyes'></a>public  function __mixDyes__()

_mixDyes method_

Returns | 
--- | 
[`Color`](Color.md) |


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Fields for [`Color`](Color.md)

##### <a id='white'></a>public static final var __WHITE__

_WHITE field_

>Returns
>  [`Color`](Color.md)

##### <a id='silver'></a>public static final var __SILVER__

_SILVER field_

>Returns
>  [`Color`](Color.md)

##### <a id='gray'></a>public static final var __GRAY__

_GRAY field_

>Returns
>  [`Color`](Color.md)

##### <a id='black'></a>public static final var __BLACK__

_BLACK field_

>Returns
>  [`Color`](Color.md)

##### <a id='red'></a>public static final var __RED__

_RED field_

>Returns
>  [`Color`](Color.md)

##### <a id='maroon'></a>public static final var __MAROON__

_MAROON field_

>Returns
>  [`Color`](Color.md)

##### <a id='yellow'></a>public static final var __YELLOW__

_YELLOW field_

>Returns
>  [`Color`](Color.md)

##### <a id='olive'></a>public static final var __OLIVE__

_OLIVE field_

>Returns
>  [`Color`](Color.md)

##### <a id='lime'></a>public static final var __LIME__

_LIME field_

>Returns
>  [`Color`](Color.md)

##### <a id='green'></a>public static final var __GREEN__

_GREEN field_

>Returns
>  [`Color`](Color.md)

##### <a id='aqua'></a>public static final var __AQUA__

_AQUA field_

>Returns
>  [`Color`](Color.md)

##### <a id='teal'></a>public static final var __TEAL__

_TEAL field_

>Returns
>  [`Color`](Color.md)

##### <a id='blue'></a>public static final var __BLUE__

_BLUE field_

>Returns
>  [`Color`](Color.md)

##### <a id='navy'></a>public static final var __NAVY__

_NAVY field_

>Returns
>  [`Color`](Color.md)

##### <a id='orange'></a>public static final var __ORANGE__

_Fuchsia, or (0xFF,0x00,0xFF) in (R,G,B) /
    public static final Color FUCHSIA = fromRGB(0xFF00FF);

    /** Purple, or (0x80,0x00,0x80) in (R,G,B) /
    public static final Color PURPLE = fromRGB(0x800080);

    /** Orange, or (0xFF,0xA5,0x00) in (R,G,B)_

>Returns
>  [`Color`](Color.md)

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	
