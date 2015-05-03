## AnvilProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.AnvilProperties
>Extends `BlockProperties`

---

### Class Overview

Anvil properties helper

Method | Type   
--- | :--- 
static function __applyDamage__(block, value) <br> _Anvil damage property, Values: 0 - 2_ | [`Block`](..\..\Block.md)
static final var __facing__ <br> _Anvil damage property, Values: 0 - 2_ | [`BlockDirectionProperty`](..\BlockDirectionProperty.md)



---


### Public Methods for [`AnvilProperties`](AnvilProperties.md)

##### <a id='applydamage'></a>public static function __applyDamage__(block, value)

_Anvil damage property, Values: 0 - 2 /
    public static final BlockIntegerProperty damage = getInstanceFor(Anvil, "damage");

    /** Anvil facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP & BOTTOM) /
    public static final BlockDirectionProperty facing = getInstanceFor(Anvil, "facing");

    /** Applies a [`BlockFace`](..\..\BlockFace.md) facing property to the `Anvil`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `int` | the [`BlockFace`](..\..\BlockFace.md) value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`AnvilProperties`](AnvilProperties.md)

##### <a id='facing'></a>public static final var __facing__

_Anvil damage property, Values: 0 - 2 /
    public static final BlockIntegerProperty damage = getInstanceFor(Anvil, "damage");

    /** Anvil facing property, Values: [`BlockFace`](..\..\BlockFace.md) (Excluding TOP & BOTTOM)_

>Returns
>  [`BlockDirectionProperty`](..\BlockDirectionProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

