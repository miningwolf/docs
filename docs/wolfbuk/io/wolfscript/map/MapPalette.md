## MapPalette __class__

>io.wolfscript.map.MapPalette

---

### Class Overview

Represents the palette that map items use. <p> These fields are hee base color ranges. Each entry corresponds to four colors of varying shades with values entry to entry + 3.

Method | Type   
--- | :--- 
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
_Deprecated: Magic value /
    @Deprecated
    public static final byte TRANSPARENT = 0;
    /** Magic value /
    @Deprecated
    public static final byte LIGHT_GREEN = 4;
    /** Magic value /
    @Deprecated
    public static final byte LIGHT_BROWN = 8;
    /** Magic value /
    @Deprecated
    public static final byte GRAY_1 = 12;
    /** Magic value /
    @Deprecated
    public static final byte RED = 16;
    /** Magic value /
    @Deprecated
    public static final byte PALE_BLUE = 20;
    /** Magic value /
    @Deprecated
    public static final byte GRAY_2 = 24;
    /** Magic value /
    @Deprecated
    public static final byte DARK_GREEN = 28;
    /** Magic value /
    @Deprecated
    public static final byte WHITE = 32;
    /** Magic value /
    @Deprecated
    public static final byte LIGHT_GRAY = 36;
    /** Magic value /
    @Deprecated
    public static final byte BROWN = 40;
    /** Magic value /
    @Deprecated
    public static final byte DARK_GRAY = 44;
    /** Magic value /
    @Deprecated
    public static final byte BLUE = 48;
    /** Magic value /
    @Deprecated
    public static final byte DARK_BROWN = 52;

    /** Resize an image to 128x128. Magic value /
    @Deprecated
    public static byte[] imageToBytes(Image image) {
        BufferedImage temp = new BufferedImage(image.getWidth(null), image.getHeight(null), BufferedImage.TYPE_INT_ARGB);
        Graphics2D graphics = temp.createGraphics();
        graphics.drawImage(image, 0, 0, null);
        graphics.dispose();

        int[] pixels = new int[temp.getWidth() temp.getHeight()];
        temp.getRGB(0, 0, temp.getWidth(), temp.getHeight(), pixels, 0, temp.getWidth());

        byte[] result = new byte[temp.getWidth() temp.getHeight()];
        for (int i = 0; i < pixels.length; i++) {
            result[i] = matchColor(new Color(pixels[i], true));
        }
        return result;
    }

    /** Get the index of the closest matching color in the palette to the given color. Magic value /
    @Deprecated
    public static byte matchColor(int r, int g, int b) {
        return matchColor(new Color(r, g, b));
    }

    /** Get the index of the closest matching color in the palette to the given color. Magic value /
    @Deprecated
    public static byte matchColor(Color color) {
        if (color.getAlpha() < 128) return 0;

        int index = 0;
        double best = -1;

        for (int i = 4; i < colors.length; i++) {
            double distance = getDistance(color, colors[i]);
            if (distance < best || best == -1) {
                best = distance;
                index = i;
            }
        }

        // Minecraft has 143 colors, some of which have negative byte representations
        return (byte) (index < 128 ? index : -129 + (index - 127));
    }

    /** Get the value of the given color in the palette. Magic value_

_getColor method_

Argument | Type | Description  
--- | --- | --- 
index | `byte` | The index in the palette.

Returns | Description
--- | --- 
`Color` | The resized image. /
    public static BufferedImage resizeImage(Image image) {
        BufferedImage result = new BufferedImage(128, 128, BufferedImage.TYPE_INT_ARGB);
        Graphics2D graphics = result.createGraphics();
        graphics.drawImage(image, 0, 0, 128, 128, null);
        graphics.dispose();
        return result;
    }

    /** Convert an Image to a byte[] using the palette.


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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

