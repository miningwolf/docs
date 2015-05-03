## TNTProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.TNTProperties
>Extends `BlockProperties`

---

### Class Overview

TNT properties helper

Method | Type   
--- | :--- 
static function __applyExplode__(block, value) <br> _TNT explode property, Values: true, false_ | [`Block`](..\..\Block.md)
static final var __explode__ <br> _TNT explode property, Values: true, false_ | [`BlockBooleanProperty`](..\BlockBooleanProperty.md)



---


### Public Methods for [`TNTProperties`](TNTProperties.md)

##### <a id='applyexplode'></a>public static function __applyExplode__(block, value)

_TNT explode property, Values: true, false /
    public static final BlockBooleanProperty explode = getInstanceFor(TNT, "explode");

    /** Applies whether the `TNT` is to explode or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`TNTProperties`](TNTProperties.md)

##### <a id='explode'></a>public static final var __explode__

_TNT explode property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](..\BlockBooleanProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

