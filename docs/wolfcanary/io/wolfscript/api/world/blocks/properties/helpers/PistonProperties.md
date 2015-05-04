## PistonProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.PistonProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

class PistonProperties

Method | Type   
--- | :--- 
static function __applyExtended__(block, value) <br> _Applies whether the `Piston` is extended or not_ | [`Block`](../../Block.md)
static function __applyFacing__(block, value) <br> _Applies a [`BlockFace`](../../BlockFace.md) facing property to the `Piston`_ | [`Block`](../../Block.md)
static final var __facing__ <br> _Piston facing property, Values: [`BlockFace`](../../BlockFace.md)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
static final var __extended__ <br> _Piston extended property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`PistonProperties`](PistonProperties.md)

##### <a id='applyextended'></a>public static function __applyExtended__(block, value)

_Applies whether the `Piston` is extended or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Applies a [`BlockFace`](../../BlockFace.md) facing property to the `Piston`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`PistonProperties`](PistonProperties.md)

##### <a id='facing'></a>public static final var __facing__

_Piston facing property, Values: [`BlockFace`](../../BlockFace.md)_

>Returns
>  [`BlockDirectionProperty`](../BlockDirectionProperty.md)

##### <a id='extended'></a>public static final var __extended__

_Piston extended property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

