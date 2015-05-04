## MapFont __class__

>io.wolfscript.map.MapFont

---

### Class Overview

Represents a bitmap font drawable to a map.

Method | Type   
--- | :--- 
new __CharacterSprite__(width, height) <br> _CharacterSprite constructor_ | _constructor_
 readonly property __Height__ <br> _Get: Get the height of this font._ | `int`
 readonly property __Height__ <br> _Get: Get the height of the character sprite._ | `int`
 readonly property __Width__ <br> _Get: Get the width of the character sprite._ | `int`
 function __get__(row, col) <br> _Get the value of a pixel of the character._ | `boolean`
 function __getChar__(ch) <br> _Get the sprite for a given character._ | `CharacterSprite`
 function __getWidth__(text) <br> _Get the width of the given text as it would be rendered using this_ | `int`
 function __isValid__(text) <br> _Check whether the given text is valid._ | `boolean`
 function __setChar__(ch, sprite) <br> _Set the sprite for a given character._ | `void`



---

### Public Constructors for [`MapFont`](MapFont.md)

##### <a id='charactersprite'></a>new __CharacterSprite__(width, height) 

_CharacterSprite constructor_

Argument | Type | Description  
--- | --- | --- 
width | `int` | width argument
height | `int` | height argument

---

### Public Properties for [`MapFont`](MapFont.md)

##### <a id='height'></a>public  readonly property __Height__

_Get: Get the height of this font._

Get | Description
--- | --- 
`int` | The height of the font.



##### <a id='height'></a>public  readonly property __Height__

_Get: Get the height of the character sprite._

Get | Description
--- | --- 
`int` | The height of the character.



##### <a id='width'></a>public  readonly property __Width__

_Get: Get the width of the character sprite._

Get | Description
--- | --- 
`int` | The width of the character.



---

### Public Methods for [`MapFont`](MapFont.md)

##### <a id='get'></a>public  function __get__(row, col)

_Get the value of a pixel of the character._

Argument | Type | Description  
--- | --- | --- 
row | `int` | The row, in the range [0,8).
col | `int` | The column, in the range [0,8).

Returns | Description
--- | --- 
`boolean` | True if the pixel is solid, false if transparent.


##### <a id='getchar'></a>public  function __getChar__(ch)

_Get the sprite for a given character._

Argument | Type | Description  
--- | --- | --- 
ch | `char` | The character to get the sprite for.

Returns | Description
--- | --- 
`CharacterSprite` | The CharacterSprite associated with the character, or null if there is none.


##### <a id='getwidth'></a>public  function __getWidth__(text)

_Get the width of the given text as it would be rendered using this font._

Argument | Type | Description  
--- | --- | --- 
text | `String` | The text.

Returns | Description
--- | --- 
`int` | The width in pixels.


##### <a id='isvalid'></a>public  function __isValid__(text)

_Check whether the given text is valid._

Argument | Type | Description  
--- | --- | --- 
text | `String` | The text.

Returns | Description
--- | --- 
`boolean` | True if the string contains only defined characters, false otherwise.


##### <a id='setchar'></a>public  function __setChar__(ch, sprite)

_Set the sprite for a given character._

Argument | Type | Description  
--- | --- | --- 
ch | `char` | The character to set the sprite for.
sprite | `CharacterSprite` | The CharacterSprite to set.

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

