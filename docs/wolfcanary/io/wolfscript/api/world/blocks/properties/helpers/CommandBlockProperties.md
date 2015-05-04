## CommandBlockProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.CommandBlockProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Command Block properties helper

Method | Type   
--- | :--- 
static function __applyTriggered__(block, value) <br> _Applies whether the `CommandBlock` has triggered or not_ | [`Block`](../../Block.md)
static final var __triggered__ <br> _Command Block triggered property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`CommandBlockProperties`](CommandBlockProperties.md)

##### <a id='applytriggered'></a>public static function __applyTriggered__(block, value)

_Applies whether the `CommandBlock` has triggered or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`CommandBlockProperties`](CommandBlockProperties.md)

##### <a id='triggered'></a>public static final var __triggered__

_Command Block triggered property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

