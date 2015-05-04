## HopperProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.HopperProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Hopper properties helper

Method | Type   
--- | :--- 
static function __applyEnabled__(block, value) <br> _Applies whether the `Hopper` is enabled or not._ | [`Block`](../../Block.md)
static function __applyFacing__(block, value) <br> _Applies a [`BlockFace`](../../BlockFace.md) facing property to the `Hopper`_ | [`Block`](../../Block.md)
static final var __facing__ <br> _Hopper facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
static final var __enabled__ <br> _Hopper enabled property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`HopperProperties`](HopperProperties.md)

##### <a id='applyenabled'></a>public static function __applyEnabled__(block, value)

_Applies whether the `Hopper` is enabled or not._

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Applies a [`BlockFace`](../../BlockFace.md) facing property to the `Hopper`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`HopperProperties`](HopperProperties.md)

##### <a id='facing'></a>public static final var __facing__

_Hopper facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP)_

>Returns
>  [`BlockDirectionProperty`](../BlockDirectionProperty.md)

##### <a id='enabled'></a>public static final var __enabled__

_Hopper enabled property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

