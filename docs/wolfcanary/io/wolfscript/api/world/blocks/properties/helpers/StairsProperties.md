## StairsProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.StairsProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Stairs properties helper

Method | Type   
--- | :--- 
static function __applyFacing__(block, value) <br> _Applies a [`BlockFace`](../../BlockFace.md) facing property to the `Stairs`_ | [`Block`](../../Block.md)
static function __applyHalf__(block, value) <br> _Applies half to the `Stairs`_ | [`Block`](../../Block.md)
static function __applyShape__(block, value) <br> _Applies shape to the `Stairs`_ | [`Block`](../../Block.md)
static function __valueOf__(ordinal) <br> _valueOf method_ | `Half`
static function __valueOf__(ordinal) <br> _valueOf method_ | `Shape`
static final var __facing__ <br> _Stairs facing property, Values: [`BlockFace`](../../BlockFace.md)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
static final var __half__ <br> _Stairs half property, Values: `Half`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __shape__ <br> _Stairs shape property, Values: `Shape`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`StairsProperties`](StairsProperties.md)

##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Applies a [`BlockFace`](../../BlockFace.md) facing property to the `Stairs`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyhalf'></a>public static function __applyHalf__(block, value)

_Applies half to the `Stairs`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Half` | the `Half` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyshape'></a>public static function __applyShape__(block, value)

_Applies shape to the `Stairs`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Shape` | the `Shape` value to apply

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
`Shape` |


---

### Public Fields for [`StairsProperties`](StairsProperties.md)

##### <a id='facing'></a>public static final var __facing__

_Stairs facing property, Values: [`BlockFace`](../../BlockFace.md)_

>Returns
>  [`BlockDirectionProperty`](../BlockDirectionProperty.md)

##### <a id='half'></a>public static final var __half__

_Stairs half property, Values: `Half`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='shape'></a>public static final var __shape__

_Stairs shape property, Values: `Shape`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

