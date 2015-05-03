## Jukebox __interface__

>io.wolfscript.block.Jukebox
>Extends [`BlockState`](BlockState.md)

---

### Interface Overview

Represents a Jukebox

Method | Type   
--- | :--- 
 function __eject__() <br> _Get the record currently playing_ | `boolean`
 |
__Inherited items from [`BlockState`](BlockState.md)__ |
 |
__Inherited items from [`Metadatable`](..\metadata\Metadatable.md)__ |
 function __removeMetadata__(metadataKey, owningPlugin) <br> _Sets a metadata value in the implementing object's metadata store._ | `void`







---


### Public Methods for [`Jukebox`](Jukebox.md)

##### <a id='eject'></a>public  function __eject__()

_Get the record currently playing_

Returns | Description
--- | --- 
`boolean` | The record Material, or AIR if none is playing /
    public Material getPlaying();

    /** Set the record currently playing


---

### Public Methods for [`Metadatable`](..\metadata\Metadatable.md)

##### <a id='removemetadata'></a>public  function __removeMetadata__(metadataKey, owningPlugin)

_Sets a metadata value in the implementing object's metadata store._

Argument | Type | Description  
--- | --- | --- 
metadataKey | `String` | A unique key to identify this metadata.
owningPlugin | [`Plugin`](..\plugin\Plugin.md) | This plugin's metadata value will be removed. All other values will be left untouched.

Returns | Description
--- | --- 
`void` | A list of values, one for each plugin that has set the requested value. /
    public List<MetadataValue> getMetadata(String metadataKey);

    /** Tests to see whether the implementing object contains the given metadata value in its metadata store.


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

