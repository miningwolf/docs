## TrapDoorProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.TrapDoorProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

TrapDoor properties helper

Method | Type   
--- | :--- 
static function __applyFacing__(block, value) <br> _Applies a [`BlockFace`](../../BlockFace.md) facing property to the `TrapDoor`_ | [`Block`](../../Block.md)
static function __applyHalf__(block, value) <br> _Applies half to the `TrapDoor`_ | [`Block`](../../Block.md)
static function __applyOpen__(block, value) <br> _Applies whether the `TrapDoor` is open or not_ | [`Block`](../../Block.md)
static function __valueOf__(ordinal) <br> _valueOf method_ | `Half`
static final var __facing__ <br> _TrapDoor facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
static final var __half__ <br> _TrapDoor half property, Values: `Half`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __open__ <br> _TrapDoor open property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`TrapDoorProperties`](TrapDoorProperties.md)

##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Applies a [`BlockFace`](../../BlockFace.md) facing property to the `TrapDoor`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyhalf'></a>public static function __applyHalf__(block, value)

_Applies half to the `TrapDoor`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Half` | the `Half` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyopen'></a>public static function __applyOpen__(block, value)

_Applies whether the `TrapDoor` is open or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='valueof'></a>public static function __valueOf__(ordinal)

_valueOf method_

Argument | Type | Description  
--- | --- | --- 
ordinal | `int` | ordinal argument

Returns | 
--- | 
`Half` |


---

### Public Fields for [`TrapDoorProperties`](TrapDoorProperties.md)

##### <a id='facing'></a>public static final var __facing__

_TrapDoor facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_

>Returns
>  [`BlockDirectionProperty`](../BlockDirectionProperty.md)

##### <a id='half'></a>public static final var __half__

_TrapDoor half property, Values: `Half`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='open'></a>public static final var __open__

_TrapDoor open property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

