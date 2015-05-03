## GrassProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.GrassProperties
>Extends `BlockProperties`

---

### Class Overview

Grass properties helper

Method | Type   
--- | :--- 
static function __applySnowy__(block, value) <br> _Grass snowy property, Values: true, false_ | [`Block`](..\..\Block.md)
static final var __snowy__ <br> _Grass snowy property, Values: true, false_ | [`BlockBooleanProperty`](..\BlockBooleanProperty.md)



---


### Public Methods for [`GrassProperties`](GrassProperties.md)

##### <a id='applysnowy'></a>public static function __applySnowy__(block, value)

_Grass snowy property, Values: true, false /
    public static final BlockBooleanProperty snowy = getInstanceFor(Grass, "snowy");

    /** Applies whether the `Grass` is snowy or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`GrassProperties`](GrassProperties.md)

##### <a id='snowy'></a>public static final var __snowy__

_Grass snowy property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](..\BlockBooleanProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

