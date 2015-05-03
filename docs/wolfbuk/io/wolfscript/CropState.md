## CropState __enum__

>io.wolfscript.CropState

---

### Enum Overview

Represents the different growth states of crops

Item | Type   
--- | :--- 
RIPE: 0x7<br> _State when first seeded_ | CropState



---


### Public Methods for [`CropState`](CropState.md)

##### <a id='getbydata'></a>public static function __getByData__(byte)
_Deprecated: Magic value /
    @Deprecated
    public byte getData() {
        return data;
    }

    /** Gets the CropState with the given data value Magic value_

_State when first seeded /
    SEEDED(0x0),
    /** First growth stage /
    GERMINATED(0x1),
    /** Second growth stage /
    VERY_SMALL(0x2),
    /** Third growth stage /
    SMALL(0x3),
    /** Fourth growth stage /
    MEDIUM(0x4),
    /** Fifth growth stage /
    TALL(0x5),
    /** Almost ripe stage /
    VERY_TALL(0x6),
    /** Ripe stage /
    RIPE(0x7);

    private final byte data;
    private final static Map<Byte, CropState> BY_DATA = Maps.newHashMap();

    private CropState(final int data) {
        this.data = (byte) data;
    }

    /** Gets the associated data value representing this growth state_

Argument | Type | Description  
--- | --- | --- 
byte | `final` | byte argument

Returns | Description
--- | --- 
[`CropState`](CropState.md) | A byte containing the data value of this growth state


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

