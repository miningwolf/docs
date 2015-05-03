## TreeSpecies __enum__

>io.wolfscript.TreeSpecies

---

### Enum Overview

Represents the different species of trees regardless of size.

Item | Type   
--- | :--- 
DARK_OAK: 0x5<br> _Represents the common tree species._ | TreeSpecies



---


### Public Methods for [`TreeSpecies`](TreeSpecies.md)

##### <a id='getbydata'></a>public static function __getByData__(byte)
_Deprecated: Magic value /
    @Deprecated
    public byte getData() {
        return data;
    }

    /** Gets the TreeSpecies with the given data value Magic value_

_Represents the common tree species. /
    GENERIC(0x0),
    /** Represents the darker barked/leaved tree species. /
    REDWOOD(0x1),
    /** Represents birches. /
    BIRCH(0x2),
    /** Represents jungle trees. /
    JUNGLE(0x3),
    /** Represents acacia trees. /
    ACACIA(0x4),
    /** Represents dark oak trees. /
    DARK_OAK(0x5),
    ;

    private final byte data;
    private final static Map<Byte, TreeSpecies> BY_DATA = Maps.newHashMap();

    private TreeSpecies(final int data) {
        this.data = (byte) data;
    }

    /** Gets the associated data value representing this species_

Argument | Type | Description  
--- | --- | --- 
byte | `final` | byte argument

Returns | Description
--- | --- 
[`TreeSpecies`](TreeSpecies.md) | A byte containing the data value of this tree species


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

