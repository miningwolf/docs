## Color __class__

>io.wolfscript.Color
>Implements [`ConfigurationSerializable`](configuration/serialization/ConfigurationSerializable.md)

---

### Class Overview

A container for a color palette. This class is immutable; the set methods return a new color. The color names listed as fields are HTML4 standards, but subject to change.

Method | Type   
--- | :--- 
  property __Red__ <br> _Get: Gets the red component<br>Set: Creates a new Color object with specified component_ | `int`
  property __Green__ <br> _Get: Gets the green component<br>Set: Creates a new Color object with specified component_ | `int`
  property __Blue__ <br> _Get: Gets the blue component<br>Set: Creates a new Color object with specified component_ | `int`
 function __asBGR__() <br> _asBGR method_ | `int`
static function __deserialize__() <br> _deserialize method_ | [`Color`](Color.md)
 function __equals__(o) <br> _equals method_ | `boolean`
 function __asRGB__() <br> _asRGB method_ | `int`
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
static final var __FUCHSIA__ <br> _Fuchsia, or (0xFF,0x00,0xFF) in (R,G,B)_ | [`Color`](Color.md)
static final var __PURPLE__ <br> _PURPLE field_ | [`Color`](Color.md)
static final var __ORANGE__ <br> _ORANGE field_ | [`Color`](Color.md)



---


### Public Properties for [`Color`](Color.md)

##### <a id='red'></a>public   property __Red__

_Get: Gets the red component<br>Set: Creates a new Color object with specified component_

Get | Description
--- | --- 
`int` | a new color object with the red component

Set | Type | Description  
--- | --- | --- 
red | `int` | the red component, from 0 to 255


##### <a id='green'></a>public   property __Green__

_Get: Gets the green component<br>Set: Creates a new Color object with specified component_

Get | Description
--- | --- 
`int` | a new color object with the red component

Set | Type | Description  
--- | --- | --- 
green | `int` | the red component, from 0 to 255


##### <a id='blue'></a>public   property __Blue__

_Get: Gets the blue component<br>Set: Creates a new Color object with specified component_

Get | Description
--- | --- 
`int` | a new color object with the red component

Set | Type | Description  
--- | --- | --- 
blue | `int` | the red component, from 0 to 255


---

### Public Methods for [`Color`](Color.md)

##### <a id='asbgr'></a>public  function __asBGR__()

_asBGR method_

Returns | Description
--- | --- 
`int` | An integer representation of this color, as 0xBBGGRR


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


##### <a id='asrgb'></a>public  function __asRGB__()

_asRGB method_

Returns | Description
--- | --- 
`int` | An integer representation of this color, as 0xRRGGBB


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

##### <a id='fuchsia'></a>public static final var __FUCHSIA__

_Fuchsia, or (0xFF,0x00,0xFF) in (R,G,B)_

>Returns
>  [`Color`](Color.md)

##### <a id='purple'></a>public static final var __PURPLE__

_PURPLE field_

>Returns
>  [`Color`](Color.md)

##### <a id='orange'></a>public static final var __ORANGE__

_ORANGE field_

>Returns
>  [`Color`](Color.md)

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

