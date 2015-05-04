## FarmlandProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.FarmlandProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Farmland properties helper

Method | Type   
--- | :--- 
static function __applyMositure__(block, value) <br> _Applies moisture to the `Farmland`_ | [`Block`](../../Block.md)
static final var __moisture__ <br> _Farmland moisture property, Values: 0 - 7_ | [`BlockIntegerProperty`](../BlockIntegerProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`FarmlandProperties`](FarmlandProperties.md)

##### <a id='applymositure'></a>public static function __applyMositure__(block, value)

_Applies moisture to the `Farmland`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `int` | the `int` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`FarmlandProperties`](FarmlandProperties.md)

##### <a id='moisture'></a>public static final var __moisture__

_Farmland moisture property, Values: 0 - 7_

>Returns
>  [`BlockIntegerProperty`](../BlockIntegerProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

