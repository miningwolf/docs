## CauldronProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.CauldronProperties
>Extends `BlockProperties`

---

### Class Overview

Cauldron properties helper

Method | Type   
--- | :--- 
static function __applyLevel__(block, value) <br> _Cauldron [water] level property, Values: 0 - 3_ | [`Block`](..\..\Block.md)
static final var __level__ <br> _Cauldron [water] level property, Values: 0 - 3_ | [`BlockIntegerProperty`](..\BlockIntegerProperty.md)



---


### Public Methods for [`CauldronProperties`](CauldronProperties.md)

##### <a id='applylevel'></a>public static function __applyLevel__(block, value)

_Cauldron [water] level property, Values: 0 - 3 /
    public static final BlockIntegerProperty level = getInstanceFor(Cauldron, "level");

    /** Applies level to the `Cauldron`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `int` | the `int` value to apply (0 - 3)

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`CauldronProperties`](CauldronProperties.md)

##### <a id='level'></a>public static final var __level__

_Cauldron [water] level property, Values: 0 - 3_

>Returns
>  [`BlockIntegerProperty`](..\BlockIntegerProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

