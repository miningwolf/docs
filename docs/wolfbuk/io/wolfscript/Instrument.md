## Instrument __enum__

>io.wolfscript.Instrument

---

### Enum Overview

enum Instrument

Item | Type   
--- | :--- 
BASS_GUITAR: 0x4<br> _Piano is the standard instrument for a note block._ | Instrument



---


### Public Methods for [`Instrument`](Instrument.md)

##### <a id='getbytype'></a>public static function __getByType__(byte)
_Deprecated: Magic value /
    @Deprecated
    public byte getType() {
        return this.type;
    }

    /** Get an instrument by its type ID. Magic value_

_Piano is the standard instrument for a note block. /
    PIANO(0x0),
    /** Bass drum is normally played when a note block is on top of a stone-like block /
    BASS_DRUM(0x1),
    /** Snare drum is normally played when a note block is on top of a sandy block. /
    SNARE_DRUM(0x2),
    /** Sticks are normally played when a note block is on top of a glass block. /
    STICKS(0x3),
    /** Bass guitar is normally played when a note block is on top of a wooden block. /
    BASS_GUITAR(0x4);

    private final byte type;
    private final static Map<Byte, Instrument> BY_DATA = Maps.newHashMap();

    private Instrument(final int type) {
        this.type = (byte) type;
    }

    /**_

Argument | Type | Description  
--- | --- | --- 
byte | `final` | byte argument

Returns | Description
--- | --- 
[`Instrument`](Instrument.md) | The type ID of this instrument.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

