## Tone __enum__

>io.wolfscript.Tone

---

### Enum Overview

A note class to store a specific note. /
public class Note {

    /** An enum holding tones.

Item | Type   
--- | :--- 
0x1: <br> _0x1 Tone_ | Tone
0x3: <br> _0x3 Tone_ | Tone
0x5: <br> _0x5 Tone_ | Tone
0x6: <br> _0x6 Tone_ | Tone
0x8: <br> _0x8 Tone_ | Tone
0xA: <br> _0xA Tone_ | Tone
0xB: <br> _0xB Tone_ | Tone
static final var __TONES__ <br> _The number of tones including sharped tones._ | `byte`



---


### Public Methods for [`Tone`](Tone.md)

##### <a id='getbyid'></a>public static function __getById__(id)
_Deprecated: Magic value /
        @Deprecated
        public byte getId() {
            return getId(false);
        }

        /** Returns the id of this tone. These method allows to return the sharped id of the tone. If the tone couldn't be sharped it always return the not sharped id of this tone. Magic value /
        @Deprecated
        public byte getId(boolean sharped) {
            byte id = (byte) (sharped && sharpable ? this.id + 1 : this.id);

            return (byte) (id % TONES_COUNT);
        }

        /** Returns if this tone could be sharped. Magic value /
        @Deprecated
        public boolean isSharped(byte id) {
            if (id == getId(false)) {
                return false;
            } else if (id == getId(true)) {
                return true;
            } else {
                // The id isn't matching to the tone!
                throw new IllegalArgumentException("The id isn't matching to the tone.");
            }
        }

        /** Returns the tone to id. Also returning the semitones. Magic value_

_The number of tones including sharped tones. /
        public static final byte TONES_COUNT = 12;

        private Tone(int id, boolean sharpable) {
            this.id = (byte) (id % TONES_COUNT);
            this.sharpable = sharpable;
        }

        /** Returns the not sharped id of this tone._

Argument | Type | Description  
--- | --- | --- 
id | `byte` | the id of the tone.

Returns | Description
--- | --- 
[`Tone`](Tone.md) | the not sharped id of this tone.


---

### Public Fields for [`Tone`](Tone.md)

##### <a id='tones'></a>public static final var __TONES__

_The number of tones including sharped tones._

>Returns
>  `byte`

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

