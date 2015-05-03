## FenceProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.FenceProperties
>Extends `BlockProperties`

---

### Class Overview

Fence properties helper

Method | Type   
--- | :--- 
static function __applyWest__(block, value) <br> _Fence north property, Values: true, false_ | [`Block`](..\..\Block.md)
static final var __west__ <br> _Fence north property, Values: true, false_ | [`BlockBooleanProperty`](..\BlockBooleanProperty.md)



---


### Public Methods for [`FenceProperties`](FenceProperties.md)

##### <a id='applywest'></a>public static function __applyWest__(block, value)

_Fence north property, Values: true, false /
    public static final BlockBooleanProperty north = getInstanceFor(Fence, "north");

    /** Fence east property, Values: true, false /
    public static final BlockBooleanProperty east = getInstanceFor(Fence, "east");

    /** Fence south property, Values: true, false /
    public static final BlockBooleanProperty south = getInstanceFor(Fence, "south");

    /** Fence west property, Values: true, false /
    public static final BlockBooleanProperty west = getInstanceFor(Fence, "west");

    /** Applies whether the `Fence` is connected north or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`FenceProperties`](FenceProperties.md)

##### <a id='west'></a>public static final var __west__

_Fence north property, Values: true, false /
    public static final BlockBooleanProperty north = getInstanceFor(Fence, "north");

    /** Fence east property, Values: true, false /
    public static final BlockBooleanProperty east = getInstanceFor(Fence, "east");

    /** Fence south property, Values: true, false /
    public static final BlockBooleanProperty south = getInstanceFor(Fence, "south");

    /** Fence west property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](..\BlockBooleanProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

