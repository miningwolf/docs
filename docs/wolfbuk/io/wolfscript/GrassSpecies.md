## GrassSpecies __enum__

>io.wolfscript.GrassSpecies

---

### Enum Overview

Represents the different types of grass.

Item | Type   
--- | :--- 
FERN_LIKE: 0x2<br> _Represents the dead looking grass._ | GrassSpecies



---


### Public Methods for [`GrassSpecies`](GrassSpecies.md)

##### <a id='getbydata'></a>public static function __getByData__(byte)
_Deprecated: Magic value /
    @Deprecated
    public byte getData() {
        return data;
    }

    /** Gets the GrassSpecies with the given data value Magic value_

_Represents the dead looking grass. /
    DEAD(0x0),
    /** Represents the normal grass species. /
    NORMAL(0x1),
    /** Represents the fern-looking grass species. /
    FERN_LIKE(0x2);

    private final byte data;
    private final static Map<Byte, GrassSpecies> BY_DATA = Maps.newHashMap();

    private GrassSpecies(final int data) {
        this.data = (byte) data;
    }

    /** Gets the associated data value representing this species_

Argument | Type | Description  
--- | --- | --- 
byte | `final` | byte argument

Returns | Description
--- | --- 
[`GrassSpecies`](GrassSpecies.md) | A byte containing the data value of this grass species


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

