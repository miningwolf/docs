## PistonHeadProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.PistonHeadProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

class PistonHeadProperties

Method | Type   
--- | :--- 
static function __applyFacing__(block, value) <br> _Applies a [`BlockFace`](../../BlockFace.md) facing property to the {@code Piston Head}_ | [`Block`](../../Block.md)
static function __applyShort__(block, value) <br> _Applies whether the {@code Piston Head} arm is shorter than usual (by 4 pixels)_ | [`Block`](../../Block.md)
static function __applyType__(block, value) <br> _Applies type to the {@code Piston Head}_ | [`Block`](../../Block.md)
static function __valueOf__(ordinal) <br> _valueOf method_ | `Type`
static final var __facing__ <br> _Piston Head facing property, Values: [`BlockFace`](../../BlockFace.md)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
static final var __type__ <br> _Piston Head type property, Values: `Type`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __short__ <br> _Piston Head short property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`PistonHeadProperties`](PistonHeadProperties.md)

##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Applies a [`BlockFace`](../../BlockFace.md) facing property to the {@code Piston Head}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyshort'></a>public static function __applyShort__(block, value)

_Applies whether the {@code Piston Head} arm is shorter than usual (by 4 pixels)_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applytype'></a>public static function __applyType__(block, value)

_Applies type to the {@code Piston Head}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Type` | the `Type` value to apply

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
`Type` |


---

### Public Fields for [`PistonHeadProperties`](PistonHeadProperties.md)

##### <a id='facing'></a>public static final var __facing__

_Piston Head facing property, Values: [`BlockFace`](../../BlockFace.md)_

>Returns
>  [`BlockDirectionProperty`](../BlockDirectionProperty.md)

##### <a id='type'></a>public static final var __type__

_Piston Head type property, Values: `Type`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='short'></a>public static final var __short__

_Piston Head short property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

