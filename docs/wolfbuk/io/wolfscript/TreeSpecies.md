## TreeSpecies __enum__

>io.wolfscript.TreeSpecies

---

### Enum Overview

Represents the different species of trees regardless of size.

Item | Type   
--- | :--- 
GENERIC: 0x0<br> _Represents the common tree species._ | TreeSpecies
REDWOOD: 0x1<br> _Represents the darker barked/leaved tree species._ | TreeSpecies
BIRCH: 0x2<br> _Represents birches._ | TreeSpecies
JUNGLE: 0x3<br> _Represents jungle trees._ | TreeSpecies
ACACIA: 0x4<br> _Represents acacia trees._ | TreeSpecies
DARK_OAK: 0x5<br> _Represents dark oak trees._ | TreeSpecies



---


### Public Properties for [`TreeSpecies`](TreeSpecies.md)

##### <a id='data'></a>public  readonly property __Data__
_Deprecated: Magic value_

_Get: Represents the common tree species. /
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

Get | Description
--- | --- 
`byte` | A byte containing the data value of this tree species



---

### Public Methods for [`TreeSpecies`](TreeSpecies.md)

##### <a id='getbydata'></a>public static function __getByData__(byte)
_Deprecated: Magic value_

_Gets the TreeSpecies with the given data value_

Argument | Type | Description  
--- | --- | --- 
byte | `final` | byte argument

Returns | Description
--- | --- 
[`TreeSpecies`](TreeSpecies.md) | The [`TreeSpecies`](TreeSpecies.md) representing the given value, or null if it doesn't exist


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

