## Metadatable __interface__

>io.wolfscript.metadata.Metadatable

---

### Interface Overview

This interface is implemented by all objects that can provide metadata about themselves.

Method | Type   
--- | :--- 
 function __removeMetadata__(metadataKey, owningPlugin) <br> _Sets a metadata value in the implementing object's metadata store._ | `void`



---


### Public Methods for [`Metadatable`](Metadatable.md)

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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

