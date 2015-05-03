## LiquidProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.LiquidProperties
>Extends `BlockProperties`

---

### Class Overview

Liquid properties helper<br/> Applies to:<br/> <ul>Water</ul> <ul>Lava</ul>

Method | Type   
--- | :--- 
static function __applyLevel__(block, value) <br> _Liquid level property, Values: 0 - 15_ | [`Block`](..\..\Block.md)
static final var __level__ <br> _Liquid level property, Values: 0 - 15_ | [`BlockIntegerProperty`](..\BlockIntegerProperty.md)



---


### Public Methods for [`LiquidProperties`](LiquidProperties.md)

##### <a id='applylevel'></a>public static function __applyLevel__(block, value)

_Liquid level property, Values: 0 - 15 /
    public static final BlockIntegerProperty level = getInstanceFor(Water, "level");

    /** Applies level to the `Liquid`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `int` | the `int` value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`LiquidProperties`](LiquidProperties.md)

##### <a id='level'></a>public static final var __level__

_Liquid level property, Values: 0 - 15_

>Returns
>  [`BlockIntegerProperty`](..\BlockIntegerProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

