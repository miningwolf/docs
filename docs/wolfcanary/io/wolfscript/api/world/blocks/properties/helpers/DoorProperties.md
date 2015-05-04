## DoorProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.DoorProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Door properties helper

Method | Type   
--- | :--- 
static function __applyFacing__(block, value) <br> _Applies a [`BlockFace`](../../BlockFace.md) facing property to the `Door`_ | [`Block`](../../Block.md)
static function __applyHalf__(block, value) <br> _Applies open to the `Door`_ | [`Block`](../../Block.md)
static function __applyHinge__(block, value) <br> _Applies hinge to the `Door`_ | [`Block`](../../Block.md)
static function __applyOpen__(block, value) <br> _Applies open to the `Door`_ | [`Block`](../../Block.md)
static function __applyPowered__(block, value) <br> _Applies powered to the `Door`_ | [`Block`](../../Block.md)
static function __valueOf__(ordinal) <br> _valueOf method_ | `Half`
static function __valueOf__(ordinal) <br> _valueOf method_ | `HingePosition`
static final var __facing__ <br> _Door facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
static final var __hinge__ <br> _Door hinge position property, Values: `HingePosition`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __half__ <br> _Door half property, Values: `Half`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __open__ <br> _Door open property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __powered__ <br> _Door powered property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`DoorProperties`](DoorProperties.md)

##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Applies a [`BlockFace`](../../BlockFace.md) facing property to the `Door`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyhalf'></a>public static function __applyHalf__(block, value)

_Applies open to the `Door`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Half` | the `Half` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyhinge'></a>public static function __applyHinge__(block, value)

_Applies hinge to the `Door`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `HingePosition` | the `HingePosition` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyopen'></a>public static function __applyOpen__(block, value)

_Applies open to the `Door`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applypowered'></a>public static function __applyPowered__(block, value)

_Applies powered to the `Door`_

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


##### <a id='valueof'></a>public static function __valueOf__(ordinal)

_valueOf method_

Argument | Type | Description  
--- | --- | --- 
ordinal | `int` | ordinal argument

Returns | 
--- | 
`HingePosition` |


---

### Public Fields for [`DoorProperties`](DoorProperties.md)

##### <a id='facing'></a>public static final var __facing__

_Door facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_

>Returns
>  [`BlockDirectionProperty`](../BlockDirectionProperty.md)

##### <a id='hinge'></a>public static final var __hinge__

_Door hinge position property, Values: `HingePosition`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='half'></a>public static final var __half__

_Door half property, Values: `Half`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='open'></a>public static final var __open__

_Door open property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='powered'></a>public static final var __powered__

_Door powered property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

