## DirtProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.DirtProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Dirt properties helper

Method | Type   
--- | :--- 
static function __applySnowy__(block, value) <br> _Applies whether the `Dirt` is snowy_ | [`Block`](../../Block.md)
static function __applyVariant__(block, value) <br> _Applies variant to the `Dirt`_ | [`Block`](../../Block.md)
static function __valueOf__(ordinal) <br> _valueOf method_ | `Variant`
static final var __variant__ <br> _Dirt variant property, Values: `Variant`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __snowy__ <br> _Dirt snowy property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`DirtProperties`](DirtProperties.md)

##### <a id='applysnowy'></a>public static function __applySnowy__(block, value)

_Applies whether the `Dirt` is snowy_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applyvariant'></a>public static function __applyVariant__(block, value)

_Applies variant to the `Dirt`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Variant` | the `Variant` value to apply

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
`Variant` |


---

### Public Fields for [`DirtProperties`](DirtProperties.md)

##### <a id='variant'></a>public static final var __variant__

_Dirt variant property, Values: `Variant`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='snowy'></a>public static final var __snowy__

_Dirt snowy property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

