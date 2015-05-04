## ChatFormat __enum__

>io.wolfscript.chat.ChatFormat

---

### Enum Overview

Enum containing all chat styles and colors.

Item | Type   
--- | :--- 
MARKER: '\u00A7'<br> _<b>MARKER §</b>_ | ChatFormat
BLACK: '0'<br> _<FONT COLOR=000000><b>BLACK</b></FONT>_ | ChatFormat
DARK_BLUE: '1'<br> _<font color="000066"><b>DARK_BLUE</b></font>_ | ChatFormat
DARK_GREEN: '2'<br> _<font color="006600"><b>DARK_GREEN</b></font>_ | ChatFormat
DARK_AQUA: '3'<br> _<font color="006666"><b>DARK_AQUA</b></font>_ | ChatFormat
DARK_RED: '4'<br> _<font color="990000"><b>DARK_RED</b></font>_ | ChatFormat
DARK_PURPLE: '5'<br> _<font color="540054"><b>DARK_PURPLE</b></font>_ | ChatFormat
GOLD: '6'<br> _<font color="FF9933"><b>GOLD</b></font>_ | ChatFormat
GRAY: '7'<br> _<font color="CCCCCC"><b>GRAY</b></font>_ | ChatFormat
DARK_GRAY: '8'<br> _<font color="333333"><b>DARK_GRAY</b></font>_ | ChatFormat
BLUE: '9'<br> _<font color="2A2A7F"><b>BLUE</b></font>_ | ChatFormat
GREEN: 'A'<br> _<font color="33FF33"><b>GREEN</b></font>_ | ChatFormat
AQUA: 'B'<br> _<font color="00FFFF"><b>AQUA</b></font>_ | ChatFormat
RED: 'C'<br> _<font color="FF0022"><b>RED</b></font>_ | ChatFormat
LIGHT_PURPLE: 'D'<br> _<font color="FF00FF"><b>LIGHT_PURPLE</b></font>_ | ChatFormat
YELLOW: 'E'<br> _<font color="FFFF00"><b>YELLOW</b></font>_ | ChatFormat
WHITE: 'F'<br> _<font color="000000"><b>WHITE</b></font>_ | ChatFormat
OBFUSCATED: 'K'<br> _<b>OBFUSCATED</b>_ | ChatFormat
BOLD: 'L'<br> _<b>BOLD</b>_ | ChatFormat
STRIKED: 'M'<br> _<s>STRIKED</s>_ | ChatFormat
UNDERLINED: 'N'<br> _<u>UNDERLINED</u>_ | ChatFormat
ITALIC: 'O'<br> _<i>ITALIC</i>_ | ChatFormat
RESET: 'R'<br> _RESET_ | ChatFormat
final function __charValue__() <br> _Returns the char value of the `ChatFormat`_ | `char`
final function __concat__(str) <br> _concat method_ | `String`
final function __concat__(format) <br> _concat method_ | `String`
final function __consoleFormat__(text) <br> _Replaces all Color formatting with an & symbol_ | `String`
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


##### <a id='consoleformat'></a>public final function __consoleFormat__(text)

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
	

