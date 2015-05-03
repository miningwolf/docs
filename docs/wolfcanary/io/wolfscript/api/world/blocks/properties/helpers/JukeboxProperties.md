## JukeboxProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.JukeboxProperties
>Extends `BlockProperties`

---

### Class Overview

Jukebox properties helper

Method | Type   
--- | :--- 
static function __applyRecord__(block, value) <br> _Jukebox has_record property, Values: true, false_ | [`Block`](..\..\Block.md)
final static var __hasRecord__ <br> _Jukebox has_record property, Values: true, false_ | [`BlockBooleanProperty`](..\BlockBooleanProperty.md)



---


### Public Methods for [`JukeboxProperties`](JukeboxProperties.md)

##### <a id='applyrecord'></a>public static function __applyRecord__(block, value)

_Jukebox has_record property, Values: true, false /
    public final static BlockBooleanProperty hasRecord = getInstanceFor(Jukebox, "has_record");

    /** Applies whether the `Jukebox` has a record or not. The TileEntity should be used to set the record ID._

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`JukeboxProperties`](JukeboxProperties.md)

##### <a id='hasrecord'></a>public final static var __hasRecord__

_Jukebox has_record property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](..\BlockBooleanProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

