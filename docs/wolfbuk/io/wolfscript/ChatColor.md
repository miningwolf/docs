## ChatColor __enum__

>io.wolfscript.ChatColor

---

### Enum Overview

All supported color values for chat

Item | Type   
--- | :--- 
'0': <br> _'0' ChatColor_ | ChatColor
'1': <br> _'1' ChatColor_ | ChatColor
'2': <br> _'2' ChatColor_ | ChatColor
'3': <br> _'3' ChatColor_ | ChatColor
'4': <br> _'4' ChatColor_ | ChatColor
'5': <br> _'5' ChatColor_ | ChatColor
'6': <br> _'6' ChatColor_ | ChatColor
'7': <br> _'7' ChatColor_ | ChatColor
'8': <br> _'8' ChatColor_ | ChatColor
'9': <br> _'9' ChatColor_ | ChatColor
'a': <br> _'a' ChatColor_ | ChatColor
'b': <br> _'b' ChatColor_ | ChatColor
'c': <br> _'c' ChatColor_ | ChatColor
'd': <br> _'d' ChatColor_ | ChatColor
'e': <br> _'e' ChatColor_ | ChatColor
'f': <br> _'f' ChatColor_ | ChatColor
'k': <br> _'k' ChatColor_ | ChatColor
0x10: <br> _0x10 ChatColor_ | ChatColor
'l': <br> _'l' ChatColor_ | ChatColor
0x11: <br> _0x11 ChatColor_ | ChatColor
'm': <br> _'m' ChatColor_ | ChatColor
0x12: <br> _0x12 ChatColor_ | ChatColor
'n': <br> _'n' ChatColor_ | ChatColor
0x13: <br> _0x13 ChatColor_ | ChatColor
'o': <br> _'o' ChatColor_ | ChatColor
0x14: <br> _0x14 ChatColor_ | ChatColor
'r': <br> _'r' ChatColor_ | ChatColor
static function __getLastColors__(input) <br> _Represents black_ | `String`
static final var __COLOR__ <br> _Represents black_ | `char`



---


### Public Methods for [`ChatColor`](ChatColor.md)

##### <a id='getlastcolors'></a>public static function __getLastColors__(input)

_Represents black /
    BLACK('0', 0x00),
    /** Represents dark blue /
    DARK_BLUE('1', 0x1),
    /** Represents dark green /
    DARK_GREEN('2', 0x2),
    /** Represents dark blue (aqua) /
    DARK_AQUA('3', 0x3),
    /** Represents dark red /
    DARK_RED('4', 0x4),
    /** Represents dark purple /
    DARK_PURPLE('5', 0x5),
    /** Represents gold /
    GOLD('6', 0x6),
    /** Represents gray /
    GRAY('7', 0x7),
    /** Represents dark gray /
    DARK_GRAY('8', 0x8),
    /** Represents blue /
    BLUE('9', 0x9),
    /** Represents green /
    GREEN('a', 0xA),
    /** Represents aqua /
    AQUA('b', 0xB),
    /** Represents red /
    RED('c', 0xC),
    /** Represents light purple /
    LIGHT_PURPLE('d', 0xD),
    /** Represents yellow /
    YELLOW('e', 0xE),
    /** Represents white /
    WHITE('f', 0xF),
    /** Represents magical characters that change around randomly /
    MAGIC('k', 0x10, true),
    /** Makes the text bold. /
    BOLD('l', 0x11, true),
    /** Makes a line appear through the text. /
    STRIKETHROUGH('m', 0x12, true),
    /** Makes the text appear underlined. /
    UNDERLINE('n', 0x13, true),
    /** Makes the text italic. /
    ITALIC('o', 0x14, true),
    /** Resets all previous chat colors or formats. /
    RESET('r', 0x15);

    /** The special character which prefixes all chat colour codes. Use this if you need to dynamically convert colour codes from your custom format. /
    public static final char COLOR_CHAR = '\u00A7';
    private static final Pattern STRIP_COLOR_PATTERN = Pattern.compile("(?i)" + String.valueOf(COLOR_CHAR) + "[0-9A-FK-OR]");

    private final int intCode;
    private final char code;
    private final boolean isFormat;
    private final String toString;
    private final static Map<Integer, ChatColor> BY_ID = Maps.newHashMap();
    private final static Map<Character, ChatColor> BY_CHAR = Maps.newHashMap();

    private ChatColor(char code, int intCode) {
        this(code, intCode, false);
    }

    private ChatColor(char code, int intCode, boolean isFormat) {
        this.code = code;
        this.intCode = intCode;
        this.isFormat = isFormat;
        this.toString = new String(new char[] {COLOR_CHAR, code});
    }

    /** Gets the char value associated with this color_

Argument | Type | Description  
--- | --- | --- 
input | `String` | String to strip of color

Returns | Description
--- | --- 
`String` | A char value of this color code /
    public char getChar() {
        return code;
    }

    @Override
    public String toString() {
        return toString;
    }

    /** Checks if this code is a format code as opposed to a color code.


---

### Public Fields for [`ChatColor`](ChatColor.md)

##### <a id='color'></a>public static final var __COLOR__

_Represents black /
    BLACK('0', 0x00),
    /** Represents dark blue /
    DARK_BLUE('1', 0x1),
    /** Represents dark green /
    DARK_GREEN('2', 0x2),
    /** Represents dark blue (aqua) /
    DARK_AQUA('3', 0x3),
    /** Represents dark red /
    DARK_RED('4', 0x4),
    /** Represents dark purple /
    DARK_PURPLE('5', 0x5),
    /** Represents gold /
    GOLD('6', 0x6),
    /** Represents gray /
    GRAY('7', 0x7),
    /** Represents dark gray /
    DARK_GRAY('8', 0x8),
    /** Represents blue /
    BLUE('9', 0x9),
    /** Represents green /
    GREEN('a', 0xA),
    /** Represents aqua /
    AQUA('b', 0xB),
    /** Represents red /
    RED('c', 0xC),
    /** Represents light purple /
    LIGHT_PURPLE('d', 0xD),
    /** Represents yellow /
    YELLOW('e', 0xE),
    /** Represents white /
    WHITE('f', 0xF),
    /** Represents magical characters that change around randomly /
    MAGIC('k', 0x10, true),
    /** Makes the text bold. /
    BOLD('l', 0x11, true),
    /** Makes a line appear through the text. /
    STRIKETHROUGH('m', 0x12, true),
    /** Makes the text appear underlined. /
    UNDERLINE('n', 0x13, true),
    /** Makes the text italic. /
    ITALIC('o', 0x14, true),
    /** Resets all previous chat colors or formats. /
    RESET('r', 0x15);

    /** The special character which prefixes all chat colour codes. Use this if you need to dynamically convert colour codes from your custom format._

>Returns
>  `char`

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

