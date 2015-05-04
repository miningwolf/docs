## DispenserProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.DispenserProperties
>Extends [`BlockProperties`](BlockProperties.md)

---

### Class Overview

Dispenser/Dropper properties helper

Method | Type   
--- | :--- 
static function __applyFacing__(block, value) <br> _Dispenser/Dropper facing property, Values: [`BlockFace`](../../BlockFace.md)_ | [`Block`](../../Block.md)
static function __applyTriggered__(block, value) <br> _Applies triggered to the `Dispenser/Dropper`_ | [`Block`](../../Block.md)
static final var __facing__ <br> _Dispenser/Dropper facing property, Values: [`BlockFace`](../../BlockFace.md)_ | [`BlockDirectionProperty`](../BlockDirectionProperty.md)
static final var __triggered__ <br> _Dispenser/Dropper triggered property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |





---


### Public Methods for [`DispenserProperties`](DispenserProperties.md)

##### <a id='applyfacing'></a>public static function __applyFacing__(block, value)

_Dispenser/Dropper facing property, Values: [`BlockFace`](../../BlockFace.md) /
    public static final BlockDirectionProperty facing = getInstanceFor(Dispenser, "facing");

    /** Dispenser/Dropper triggered property, Values: true, false /
    public static final BlockBooleanProperty triggered = getInstanceFor(Dispenser, "triggered");

    /** Applies facing to the `Dispsener/Dropper`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | [`BlockFace`](../../BlockFace.md) | the [`BlockFace`](../../BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='applytriggered'></a>public static function __applyTriggered__(block, value)

_Applies triggered to the `Dispenser/Dropper`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`DispenserProperties`](DispenserProperties.md)

##### <a id='facing'></a>public static final var __facing__

_Dispenser/Dropper facing property, Values: [`BlockFace`](../../BlockFace.md)_

>Returns
>  [`BlockDirectionProperty`](../BlockDirectionProperty.md)

##### <a id='triggered'></a>public static final var __triggered__

_Dispenser/Dropper triggered property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

