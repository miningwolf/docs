## FenceGateProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.FenceGateProperties
>Extends [`DirectionalBlockProperties`](DirectionalBlockProperties.md)

---

### Class Overview

Fence Gate properties helper

Method | Type   
--- | :--- 
static function __applyInWall__(block, value) <br> _Applies whether the {@code Fence Gate} is in wall or not_ | [`Block`](../../Block.md)
static function __applyOpen__(block, value) <br> _Fence Gate open property, Values: true, false_ | [`Block`](../../Block.md)
static function __applyPowered__(block, value) <br> _Applies whether the {@code Fence Gate} is powered or not_ | [`Block`](../../Block.md)
static final var __open__ <br> _Fence Gate open property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __powered__ <br> _Fence Gate powered property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __inWall__ <br> _Fence Gate in_wall property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`DirectionalBlockProperties`](DirectionalBlockProperties.md)__ |
static function __applyFacing__(block, value) <br> _Directional facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_ | [`Block`](../../Block.md)
static final var __facing__ <br> _Directional facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |







---


### Public Methods for [`FenceGateProperties`](FenceGateProperties.md)

##### <a id='applyinwall'></a>public static function __applyInWall__(block, value)

_Applies whether the {@code Fence Gate} is in wall or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyopen'></a>public static function __applyOpen__(block, value)

_Fence Gate open property, Values: true, false /
    public static final BlockBooleanProperty open = getInstanceFor(FenceGate, "open");

    /** Fence Gate powered property, Values: true, false /
    public static final BlockBooleanProperty powered = getInstanceFor(FenceGate, "powered");

    /** Fence Gate in_wall property, Values: true, false /
    public static final BlockBooleanProperty inWall = getInstanceFor(FenceGate, "in_wall");

    /** Applies whether the {@code Fence Gate} is open or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applypowered'></a>public static function __applyPowered__(block, value)

_Applies whether the {@code Fence Gate} is powered or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`FenceGateProperties`](FenceGateProperties.md)

##### <a id='open'></a>public static final var __open__

_Fence Gate open property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='powered'></a>public static final var __powered__

_Fence Gate powered property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='inwall'></a>public static final var __inWall__

_Fence Gate in_wall property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---

### Public Methods for [`DirectionalBlockProperties`](DirectionalBlockProperties.md)

##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Directional facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM) /
    public static final BlockDirectionProperty facing = getInstanceFor(Bed, "facing");

    /** Applies a [`BlockFace`](../../BlockFace.md) facing property to the `DirectionalBlock`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`DirectionalBlockProperties`](DirectionalBlockProperties.md)

##### <a id='facing'></a>public static final var __facing__

_Directional facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_

>Returns
>  [`BlockDirectionProperty`](../BlockDirectionProperty.md)

---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

