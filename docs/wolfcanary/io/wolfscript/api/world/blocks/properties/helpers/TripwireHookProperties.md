## TripwireHookProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.TripwireHookProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Tripwire Hook properties helper

Method | Type   
--- | :--- 
static function __applyAttached__(block, value) <br> _Applies whether the {@code Tripwire Hook} is attached or not_ | [`Block`](../../Block.md)
static function __applyFacing__(block, value) <br> _Tripwire Hook facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_ | [`Block`](../../Block.md)
static function __applyPowered__(block, value) <br> _Applies whether the {@code Tripwire Hook} is powered or not_ | [`Block`](../../Block.md)
static function __applySuspended__(block, value) <br> _Applies whether the {@code Tripwire Hook} is suspended or not_ | [`Block`](../../Block.md)
static final var __facing__ <br> _Tripwire Hook facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
static final var __powered__ <br> _Tripwire Hook powered property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __attached__ <br> _Tripwire Hook attached property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __suspended__ <br> _Tripwire Hook suspended property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`TripwireHookProperties`](TripwireHookProperties.md)

##### <a id='applyattached'></a>public static function __applyAttached__(block, value)

_Applies whether the {@code Tripwire Hook} is attached or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Tripwire Hook facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM) /
    public static final BlockDirectionProperty facing = getInstanceFor(TripwireHook, "facing");

    /** Tripwire Hook powered property, Values: true, false /
    public static final BlockBooleanProperty powered = getInstanceFor(TripwireHook, "powered");

    /** Tripwire Hook attached property, Values: true, false /
    public static final BlockBooleanProperty attached = getInstanceFor(TripwireHook, "attached");

    /** Tripwire Hook suspended property, Values: true, false /
    public static final BlockBooleanProperty suspended = getInstanceFor(TripwireHook, "suspended");

    /** Applies a [`BlockFace`](../../BlockFace.md) facing property to the `Tripwire`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applypowered'></a>public static function __applyPowered__(block, value)

_Applies whether the {@code Tripwire Hook} is powered or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applysuspended'></a>public static function __applySuspended__(block, value)

_Applies whether the {@code Tripwire Hook} is suspended or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`TripwireHookProperties`](TripwireHookProperties.md)

##### <a id='facing'></a>public static final var __facing__

_Tripwire Hook facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_

>Returns
>  [`BlockDirectionProperty`](../BlockDirectionProperty.md)

##### <a id='powered'></a>public static final var __powered__

_Tripwire Hook powered property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='attached'></a>public static final var __attached__

_Tripwire Hook attached property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='suspended'></a>public static final var __suspended__

_Tripwire Hook suspended property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

