## FenceProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.FenceProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Fence properties helper

Method | Type   
--- | :--- 
static function __applyEast__(block, value) <br> _Applies whether the `Fence` is connected east or not_ | [`Block`](../../Block.md)
static function __applyNorth__(block, value) <br> _Applies whether the `Fence` is connected north or not_ | [`Block`](../../Block.md)
static function __applySouth__(block, value) <br> _Applies whether the `Fence` is connected south or not_ | [`Block`](../../Block.md)
static function __applyWest__(block, value) <br> _Applies whether the `Fence` is connected west or not_ | [`Block`](../../Block.md)
static final var __north__ <br> _Fence north property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __east__ <br> _Fence east property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __south__ <br> _Fence south property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __west__ <br> _Fence west property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`FenceProperties`](FenceProperties.md)

##### <a id='applyeast'></a>public static function __applyEast__(block, value)

_Applies whether the `Fence` is connected east or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applynorth'></a>public static function __applyNorth__(block, value)

_Applies whether the `Fence` is connected north or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applysouth'></a>public static function __applySouth__(block, value)

_Applies whether the `Fence` is connected south or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applywest'></a>public static function __applyWest__(block, value)

_Applies whether the `Fence` is connected west or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`FenceProperties`](FenceProperties.md)

##### <a id='north'></a>public static final var __north__

_Fence north property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='east'></a>public static final var __east__

_Fence east property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='south'></a>public static final var __south__

_Fence south property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='west'></a>public static final var __west__

_Fence west property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

