## CharacterSprite __class__

>io.wolfscript.map.CharacterSprite

---

### Class Overview

Represents a bitmap font drawable to a map. /
public class MapFont {

    private final HashMap<Character, CharacterSprite> chars = new HashMap<Character, CharacterSprite>();
    private int height = 0;
    protected boolean malleable = true;

    /** Set the sprite for a given character.

Method | Type   
--- | :--- 
new __CharacterSprite__(width, height) <br> _CharacterSprite constructor_ | _constructor_
 readonly property __Height__ <br> _Get: Get the value of a pixel of the character._ | `int`



---

### Public Constructors for [`CharacterSprite`](CharacterSprite.md)

##### <a id='charactersprite'></a>new __CharacterSprite__(width, height) 

_CharacterSprite constructor_

Argument | Type | Description  
--- | --- | --- 
width | `int` | width argument
height | `int` | height argument

---

### Public Properties for [`CharacterSprite`](CharacterSprite.md)

##### <a id='height'></a>public  readonly property __Height__

_Get: Get the value of a pixel of the character._

Get | Description
--- | --- 
`int` | True if the pixel is solid, false if transparent. /
        public boolean get(int row, int col) {
            if (row < 0 || col < 0 || row >= height || col >= width) return false;
            return data[row width + col];
        }

        /** Get the width of the character sprite.



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

