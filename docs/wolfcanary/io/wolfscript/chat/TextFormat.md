## TextFormat __class__

>io.wolfscript.chat.TextFormat
>Extends [`Colors`](Colors.md)

---

### Class Overview

This class contains James' color list and additionally formatting options for underlining, bolding, striking text etc etc

Method | Type   
--- | :--- 
static function __getLastColor__(input) <br> _The character sequence to make the following text bold._ | `String`
static final var __RESET__ <br> _The character sequence to make the following text bold._ | `String`
 |
__Inherited items from [`Colors`](Colors.md)__ |
static final var __BLACK__ <br> _BLACK field_ | `String`
static final var __DARK__ <br> _DARK field_ | `String`
static final var __GREEN__ <br> _GREEN field_ | `String`
static final var __TURQUIOSE__ <br> _TURQUIOSE field_ | `String`
static final var __RED__ <br> _RED field_ | `String`
static final var __PURPLE__ <br> _PURPLE field_ | `String`
static final var __ORANGE__ <br> _ORANGE field_ | `String`
static final var __LIGHT__ <br> _LIGHT field_ | `String`
static final var __GRAY__ <br> _GRAY field_ | `String`
static final var __BLUE__ <br> _BLUE field_ | `String`
static final var __LIGHT__ <br> _LIGHT field_ | `String`
static final var __CYAN__ <br> _CYAN field_ | `String`
static final var __LIGHT__ <br> _LIGHT field_ | `String`
static final var __PINK__ <br> _PINK field_ | `String`
static final var __YELLOW__ <br> _YELLOW field_ | `String`
static final var __WHITE__ <br> _WHITE field_ | `String`
static final var __MARKER__ <br> _MARKER field_ | `String`





---


### Public Methods for [`TextFormat`](TextFormat.md)

##### <a id='getlastcolor'></a>public static function __getLastColor__(input)

_The character sequence to make the following text bold. /
    public static final String BOLD = "\u00A7l";

    /** The character seqence to make the following text striked. /
    public static final String STRIKE = "\u00A7m";

    /** The characted sequence to make the following text underlined. /
    public static final String UNDERLINED = "\u00A7n";

    /** The character sequence to make the following text italic. /
    public static final String ITALICS = "\u00A7o";

    /** The character sequence to display everything as completely random /
    public static final String RANDOM = "\u00A7k";
    /** The character sequence to create a new line of text /
    public static final String NEW_LINE = "\n";

    /** The character sequence to reset all text formatting. /
    public static final String RESET = "\u00A7r";

    /** Removes all minecraft-style formatting from <tt>text</tt>._

Argument | Type | Description  
--- | --- | --- 
input | `String` | the string to get the last color for

Returns | Description
--- | --- 
`String` | <tt>text</tt> with all color/style tags stripped. /
    public static final String removeFormatting(String text) {
        return text.replaceAll("\u00A7[A-FK-NRa-fk-nr0-9]", "");
    }

    /** Replaces all Color formatting with an & symbol


---

### Public Fields for [`TextFormat`](TextFormat.md)

##### <a id='reset'></a>public static final var __RESET__

_The character sequence to make the following text bold. /
    public static final String BOLD = "\u00A7l";

    /** The character seqence to make the following text striked. /
    public static final String STRIKE = "\u00A7m";

    /** The characted sequence to make the following text underlined. /
    public static final String UNDERLINED = "\u00A7n";

    /** The character sequence to make the following text italic. /
    public static final String ITALICS = "\u00A7o";

    /** The character sequence to display everything as completely random /
    public static final String RANDOM = "\u00A7k";
    /** The character sequence to create a new line of text /
    public static final String NEW_LINE = "\n";

    /** The character sequence to reset all text formatting._

>Returns
>  `String`

---

### Public Fields for [`Colors`](Colors.md)

##### <a id='black'></a>public static final var __BLACK__

_BLACK field_

>Returns
>  `String`

##### <a id='dark'></a>public static final var __DARK__

_DARK field_

>Returns
>  `String`

##### <a id='green'></a>public static final var __GREEN__

_GREEN field_

>Returns
>  `String`

##### <a id='turquiose'></a>public static final var __TURQUIOSE__

_TURQUIOSE field_

>Returns
>  `String`

##### <a id='red'></a>public static final var __RED__

_RED field_

>Returns
>  `String`

##### <a id='purple'></a>public static final var __PURPLE__

_PURPLE field_

>Returns
>  `String`

##### <a id='orange'></a>public static final var __ORANGE__

_ORANGE field_

>Returns
>  `String`

##### <a id='light'></a>public static final var __LIGHT__

_LIGHT field_

>Returns
>  `String`

##### <a id='gray'></a>public static final var __GRAY__

_GRAY field_

>Returns
>  `String`

##### <a id='blue'></a>public static final var __BLUE__

_BLUE field_

>Returns
>  `String`

##### <a id='light'></a>public static final var __LIGHT__

_LIGHT field_

>Returns
>  `String`

##### <a id='cyan'></a>public static final var __CYAN__

_CYAN field_

>Returns
>  `String`

##### <a id='light'></a>public static final var __LIGHT__

_LIGHT field_

>Returns
>  `String`

##### <a id='pink'></a>public static final var __PINK__

_PINK field_

>Returns
>  `String`

##### <a id='yellow'></a>public static final var __YELLOW__

_YELLOW field_

>Returns
>  `String`

##### <a id='white'></a>public static final var __WHITE__

_WHITE field_

>Returns
>  `String`

##### <a id='marker'></a>public static final var __MARKER__

_MARKER field_

>Returns
>  `String`

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

