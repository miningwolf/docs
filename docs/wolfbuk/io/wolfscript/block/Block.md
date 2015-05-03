## Block __interface__

>io.wolfscript.block.Block
>Extends [`Metadatable`](..\metadata\Metadatable.md)

---

### Interface Overview

Represents a block. This is a live object, and only one Block may exist for any given location in a world. The state of the block may change concurrently to your own handling of it; use block.getState() to get a snapshot state of a block which will not be modified.

Method | Type   
--- | :--- 
 |
__Inherited items from [`Metadatable`](..\metadata\Metadatable.md)__ |
 function __removeMetadata__(metadataKey, owningPlugin) <br> _Sets a metadata value in the implementing object's metadata store._ | `void`





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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

