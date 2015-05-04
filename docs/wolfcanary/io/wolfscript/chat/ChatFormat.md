## ChatFormat __enum__

>io.wolfscript.chat.ChatFormat

---

### Enum Overview

Enum containing all chat styles and colors.

Item | Type   
--- | :--- 
MARKER: '\u00A7'<br> _MARKER ChatFormat_ | ChatFormat
BLACK: '0'<br> _BLACK ChatFormat_ | ChatFormat
DARK_BLUE: '1'<br> _DARK_BLUE ChatFormat_ | ChatFormat
DARK_GREEN: '2'<br> _DARK_GREEN ChatFormat_ | ChatFormat
DARK_AQUA: '3'<br> _DARK_AQUA ChatFormat_ | ChatFormat
DARK_RED: '4'<br> _DARK_RED ChatFormat_ | ChatFormat
DARK_PURPLE: '5'<br> _DARK_PURPLE ChatFormat_ | ChatFormat
GOLD: '6'<br> _GOLD ChatFormat_ | ChatFormat
GRAY: '7'<br> _GRAY ChatFormat_ | ChatFormat
DARK_GRAY: '8'<br> _DARK_GRAY ChatFormat_ | ChatFormat
BLUE: '9'<br> _BLUE ChatFormat_ | ChatFormat
GREEN: 'A'<br> _GREEN ChatFormat_ | ChatFormat
AQUA: 'B'<br> _AQUA ChatFormat_ | ChatFormat
RED: 'C'<br> _RED ChatFormat_ | ChatFormat
LIGHT_PURPLE: 'D'<br> _LIGHT_PURPLE ChatFormat_ | ChatFormat
YELLOW: 'E'<br> _YELLOW ChatFormat_ | ChatFormat
WHITE: 'F'<br> _WHITE ChatFormat_ | ChatFormat
OBFUSCATED: 'K'<br> _OBFUSCATED ChatFormat_ | ChatFormat
BOLD: 'L'<br> _BOLD ChatFormat_ | ChatFormat
STRIKED: 'M'<br> _STRIKED ChatFormat_ | ChatFormat
UNDERLINED: 'N'<br> _UNDERLINED ChatFormat_ | ChatFormat
ITALIC: 'O'<br> _ITALIC ChatFormat_ | ChatFormat
RESET: 'R'<br> _RESET_ | ChatFormat
final function __charValue__() <br> _Returns the char value of the `ChatFormat`_ | `char`
final function __concat__(str) <br> _concat method_ | `String`
final function __concat__(format) <br> _concat method_ | `String`
static final function __consoleFormat__(text) <br> _Replaces all Color formatting with an & symbol_ | `String`
static function __formatString__(str, marker) <br> _Formats a given `String` by replacing the specified marker with the Section Symbol (§)_ | `String`
static function __removeFormatting__(str) <br> _removes all color formatting from a line_ | `String`
final function __stringValue__() <br> _Returns the `ChatFormat` as a `String`_ | `String`
final function __toString__() <br> _Returns a string of the `ChatFormat`_ | `String`



---


### Public Methods for [`ChatFormat`](ChatFormat.md)

##### <a id='charvalue'></a>public final function __charValue__()

_Returns the char value of the `ChatFormat`_

Returns | Description
--- | --- 
`char` | char value of the `ChatFormat`


##### <a id='concat'></a>public final function __concat__(str)

_concat method_

Argument | Type | Description  
--- | --- | --- 
str | `String` | str argument

Returns | 
--- | 
`String` |


##### <a id='concat'></a>public final function __concat__(format)

_concat method_

Argument | Type | Description  
--- | --- | --- 
format | [`ChatFormat`](ChatFormat.md) | format argument

Returns | 
--- | 
`String` |


##### <a id='consoleformat'></a>public static final function __consoleFormat__(text)

_Replaces all Color formatting with an & symbol_

Argument | Type | Description  
--- | --- | --- 
text | `String` | the text to be formatted

Returns | Description
--- | --- 
`String` | the formatted text


##### <a id='formatstring'></a>public static function __formatString__(str, marker)

_Formats a given `String` by replacing the specified marker with the Section Symbol (§)_

Argument | Type | Description  
--- | --- | --- 
str | `String` | the `String` to format
marker | `String` | the specified marker to replace

Returns | Description
--- | --- 
`String` | the formatted `String`


##### <a id='removeformatting'></a>public static function __removeFormatting__(str)

_removes all color formatting from a line_

Argument | Type | Description  
--- | --- | --- 
str | `String` | the string to remove formatting from

Returns | Description
--- | --- 
`String` | str with formatting removed


##### <a id='stringvalue'></a>public final function __stringValue__()

_Returns the `ChatFormat` as a `String`_

Returns | Description
--- | --- 
`String` | String value of `ChatFormat`


##### <a id='tostring'></a>public final function __toString__()

_Returns a string of the `ChatFormat`<br> If the `ChatFormat` is that other than `MARKER` then `MARKER` is appended to the front._

Returns | Description
--- | --- 
`String` | `MARKER` or `MARKER` + code


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

