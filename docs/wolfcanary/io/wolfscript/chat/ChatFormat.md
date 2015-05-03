## ChatFormat __enum__

>io.wolfscript.chat.ChatFormat

---

### Enum Overview

Enum containing all chat styles and colors.

Item | Type   
--- | :--- 
RESET: 'R'<br> _<b>MARKER §</b>_ | ChatFormat
final function __consoleFormat__(text) <br> _<b>MARKER §</b>_ | `String`



---


### Public Methods for [`ChatFormat`](ChatFormat.md)

##### <a id='consoleformat'></a>public final function __consoleFormat__(text)

_<b>MARKER §</b> /
    MARKER('\u00A7'),

    /** <FONT COLOR=000000><b>BLACK</b></FONT> /
    BLACK('0'),

    /** <font color="000066"><b>DARK_BLUE</b></font> /
    DARK_BLUE('1'),

    /** <font color="006600"><b>DARK_GREEN</b></font> /
    DARK_GREEN('2'),

    /** <font color="006666"><b>DARK_AQUA</b></font> /
    DARK_AQUA('3'),

    /** <font color="990000"><b>DARK_RED</b></font> /
    DARK_RED('4'),

    /** <font color="540054"><b>DARK_PURPLE</b></font> /
    DARK_PURPLE('5'),

    /** <font color="FF9933"><b>GOLD</b></font> /
    GOLD('6'),

    /** <font color="CCCCCC"><b>GRAY</b></font> /
    GRAY('7'),

    /** <font color="333333"><b>DARK_GRAY</b></font> /
    DARK_GRAY('8'),

    /** <font color="2A2A7F"><b>BLUE</b></font> /
    BLUE('9'),

    /** <font color="33FF33"><b>GREEN</b></font> /
    GREEN('A'),

    /** <font color="00FFFF"><b>AQUA</b></font> /
    AQUA('B'),

    /** <font color="FF0022"><b>RED</b></font> /
    RED('C'),

    /** <font color="FF00FF"><b>LIGHT_PURPLE</b></font> /
    LIGHT_PURPLE('D'),

    /** <font color="FFFF00"><b>YELLOW</b></font> /
    YELLOW('E'),

    /** <font color="000000"><b>WHITE</b></font> /
    WHITE('F'),

    /** <b>OBFUSCATED</b> /
    OBFUSCATED('K'),

    /** <b>BOLD</b> /
    BOLD('L'),

    /** <s>STRIKED</s> /
    STRIKED('M'),

    /** <u>UNDERLINED</u> /
    UNDERLINED('N'),

    /** <i>ITALIC</i> /
    ITALIC('O'),

    /** RESET /
    RESET('R');

    private final char code;

    private ChatFormat(char code) {
        this.code = code;
    }

    public final String concat(String str) {
        if (this == MARKER) {
            return stringValue().concat(str);
        }
        else {
            return toString().concat(str);
        }
    }

    public final String concat(ChatFormat format) {
        if (this == MARKER) {
            return stringValue().concat(format.toString());
        }
        else {
            return toString().concat(format.toString());
        }
    }

    /** Returns the char value of the `ChatFormat`_

Argument | Type | Description  
--- | --- | --- 
text | `String` | the text to be formatted

Returns | Description
--- | --- 
`String` | char value of the `ChatFormat` /
    public final char charValue() {
        return code;
    }

    /** Returns the `ChatFormat` as a `String`


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

