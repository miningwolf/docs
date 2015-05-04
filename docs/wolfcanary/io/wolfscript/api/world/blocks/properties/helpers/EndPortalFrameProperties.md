## EndPortalFrameProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.EndPortalFrameProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

End Portal Frame properties helper

Method | Type   
--- | :--- 
static function __applyEye__(block, value) <br> _Applies whether the {@code End Portal Frame} has an eye or not_ | [`Block`](../../Block.md)
static function __applyFacing__(block, value) <br> _Applies a [`BlockFace`](../../BlockFace.md) facing property to the {@code End Portal Frame}_ | [`Block`](../../Block.md)
static var __facing__ <br> _End Portal Frame facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
static var __eye__ <br> _End Portal Frame eye property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`EndPortalFrameProperties`](EndPortalFrameProperties.md)

##### <a id='applyeye'></a>public static function __applyEye__(block, value)

_Applies whether the {@code End Portal Frame} has an eye or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Applies a [`BlockFace`](../../BlockFace.md) facing property to the {@code End Portal Frame}_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`EndPortalFrameProperties`](EndPortalFrameProperties.md)

##### <a id='facing'></a>public static var __facing__

_End Portal Frame facing property, Values: [`BlockFace`](../../BlockFace.md) (Excluding TOP & BOTTOM)_

>Returns
>  [`BlockDirectionProperty`](../BlockDirectionProperty.md)

##### <a id='eye'></a>public static var __eye__

_End Portal Frame eye property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

