## TripwireHookProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.TripwireHookProperties
>Extends `BlockProperties`

---

### Class Overview

Tripwire Hook properties helper

Method | Type   
--- | :--- 
static function __applySuspended__(block, value) <br> _Tripwire Hook facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP & BOTTOM)_ | [`Block`](..\..\Block.md)
static final var __suspended__ <br> _Tripwire Hook facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP & BOTTOM)_ | [`BlockBooleanProperty`](..\BlockBooleanProperty.md)



---


### Public Methods for [`TripwireHookProperties`](TripwireHookProperties.md)

##### <a id='applysuspended'></a>public static function __applySuspended__(block, value)

_Tripwire Hook facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP & BOTTOM) /
    public static final BlockDirectionProperty facing = getInstanceFor(TripwireHook, "facing");

    /** Tripwire Hook powered property, Values: true, false /
    public static final BlockBooleanProperty powered = getInstanceFor(TripwireHook, "powered");

    /** Tripwire Hook attached property, Values: true, false /
    public static final BlockBooleanProperty attached = getInstanceFor(TripwireHook, "attached");

    /** Tripwire Hook suspended property, Values: true, false /
    public static final BlockBooleanProperty suspended = getInstanceFor(TripwireHook, "suspended");

    /** Applies a [`BlockFace`](..\..\BlockFace.md) facing property to the `Tripwire`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `boolean` | the [`BlockFace`](..\..\BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`TripwireHookProperties`](TripwireHookProperties.md)

##### <a id='suspended'></a>public static final var __suspended__

_Tripwire Hook facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP & BOTTOM) /
    public static final BlockDirectionProperty facing = getInstanceFor(TripwireHook, "facing");

    /** Tripwire Hook powered property, Values: true, false /
    public static final BlockBooleanProperty powered = getInstanceFor(TripwireHook, "powered");

    /** Tripwire Hook attached property, Values: true, false /
    public static final BlockBooleanProperty attached = getInstanceFor(TripwireHook, "attached");

    /** Tripwire Hook suspended property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](..\BlockBooleanProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

