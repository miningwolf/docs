## CreatureSpawner __interface__

>io.wolfscript.block.CreatureSpawner
>Extends [`BlockState`](BlockState.md)

---

### Interface Overview

Represents a creature spawner.

Method | Type   
--- | :--- 
 writeonly property __Delay__ <br> _Set: Get the spawner's creature type._ | `void`
 |
__Inherited items from [`BlockState`](BlockState.md)__ |
 |
__Inherited items from [`Metadatable`](..\metadata\Metadatable.md)__ |
 function __removeMetadata__(metadataKey, owningPlugin) <br> _Sets a metadata value in the implementing object's metadata store._ | `void`







---


### Public Properties for [`CreatureSpawner`](CreatureSpawner.md)

##### <a id='delay'></a>public  writeonly property __Delay__

_Set: Get the spawner's creature type._

Get | Description
--- | --- 
`void` | The creature type.

Set | Type | Description  
--- | --- | --- 
delay | `int` | The delay.


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
	

