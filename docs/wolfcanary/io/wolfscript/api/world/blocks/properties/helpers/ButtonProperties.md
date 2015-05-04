## ButtonProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.ButtonProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Button properties helper

Method | Type   
--- | :--- 
static function __applyFacing__(block, value) <br> _Applies [`BlockFace`](../../BlockFace.md) facing to the `Button`_ | [`Block`](../../Block.md)
static function __applyPowered__(block, value) <br> _Applies whether the `Button` is supplying power_ | [`Block`](../../Block.md)
static final var __facing__ <br> _Button facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
static final var __powered__ <br> _Button powered property (which could mean pressed in), Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`ButtonProperties`](ButtonProperties.md)

##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Applies [`BlockFace`](../../BlockFace.md) facing to the `Button`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applypowered'></a>public static function __applyPowered__(block, value)

_Applies whether the `Button` is supplying power_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`ButtonProperties`](ButtonProperties.md)

##### <a id='facing'></a>public static final var __facing__

_Button facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP)_

>Returns
>  [`BlockDirectionProperty`](../BlockDirectionProperty.md)

##### <a id='powered'></a>public static final var __powered__

_Button powered property (which could mean pressed in), Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

