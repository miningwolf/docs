## TripwireProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.TripwireProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Tripwire properties helper

Method | Type   
--- | :--- 
static function __applyAttached__(block, value) <br> _Applies whether the `Tripwire` is attached or not_ | [`Block`](../../Block.md)
static function __applyDisarmed__(block, value) <br> _Applies whether the `Tripwire` is disarmed or not_ | [`Block`](../../Block.md)
static function __applyEast__(block, value) <br> _Applies whether the `Tripwire` is connected east or not_ | [`Block`](../../Block.md)
static function __applyNorth__(block, value) <br> _Applies whether the `Tripwire` is connected north or not_ | [`Block`](../../Block.md)
static function __applyPowered__(block, value) <br> _Tripwire powered property, Values: true, false_ | [`Block`](../../Block.md)
static function __applySouth__(block, value) <br> _Applies whether the `Tripwire` is connected south or not_ | [`Block`](../../Block.md)
static function __applySuspended__(block, value) <br> _Applies whether the `Tripwire` is suspended or not_ | [`Block`](../../Block.md)
static function __applyWest__(block, value) <br> _Applies whether the `Tripwire` is connected west or not_ | [`Block`](../../Block.md)
static final var __powered__ <br> _Tripwire powered property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __suspended__ <br> _Tripwire suspended property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __attached__ <br> _Tripwire attached property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __disarmed__ <br> _Tripwire disarmed property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __north__ <br> _Tripwire north property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __east__ <br> _Tripwire east property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __south__ <br> _Tripwire south property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __west__ <br> _Tripwire west property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`TripwireProperties`](TripwireProperties.md)

##### <a id='applyattached'></a>public static function __applyAttached__(block, value)

_Applies whether the `Tripwire` is attached or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applydisarmed'></a>public static function __applyDisarmed__(block, value)

_Applies whether the `Tripwire` is disarmed or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyeast'></a>public static function __applyEast__(block, value)

_Applies whether the `Tripwire` is connected east or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applynorth'></a>public static function __applyNorth__(block, value)

_Applies whether the `Tripwire` is connected north or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applypowered'></a>public static function __applyPowered__(block, value)

_Tripwire powered property, Values: true, false /
    public static final BlockBooleanProperty powered = getInstanceFor(Tripwire, "powered");

    /** Tripwire suspended property, Values: true, false /
    public static final BlockBooleanProperty suspended = getInstanceFor(Tripwire, "suspended");

    /** Tripwire attached property, Values: true, false /
    public static final BlockBooleanProperty attached = getInstanceFor(Tripwire, "attached");

    /** Tripwire disarmed property, Values: true, false /
    public static final BlockBooleanProperty disarmed = getInstanceFor(Tripwire, "disarmed");

    /** Tripwire north property, Values: true, false /
    public static final BlockBooleanProperty north = getInstanceFor(Tripwire, "north");

    /** Tripwire east property, Values: true, false /
    public static final BlockBooleanProperty east = getInstanceFor(Tripwire, "east");

    /** Tripwire south property, Values: true, false /
    public static final BlockBooleanProperty south = getInstanceFor(Tripwire, "south");

    /** Tripwire west property, Values: true, false /
    public static final BlockBooleanProperty west = getInstanceFor(Tripwire, "west");

    /** Applies whether the `Tripwire` is powered or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applysouth'></a>public static function __applySouth__(block, value)

_Applies whether the `Tripwire` is connected south or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applysuspended'></a>public static function __applySuspended__(block, value)

_Applies whether the `Tripwire` is suspended or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applywest'></a>public static function __applyWest__(block, value)

_Applies whether the `Tripwire` is connected west or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`TripwireProperties`](TripwireProperties.md)

##### <a id='powered'></a>public static final var __powered__

_Tripwire powered property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='suspended'></a>public static final var __suspended__

_Tripwire suspended property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='attached'></a>public static final var __attached__

_Tripwire attached property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='disarmed'></a>public static final var __disarmed__

_Tripwire disarmed property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='north'></a>public static final var __north__

_Tripwire north property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='east'></a>public static final var __east__

_Tripwire east property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='south'></a>public static final var __south__

_Tripwire south property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='west'></a>public static final var __west__

_Tripwire west property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

