## Skull __interface__

>io.wolfscript.block.Skull
>Extends [`BlockState`](BlockState.md)

---

### Interface Overview

Represents a Skull

Method | Type   
--- | :--- 
 writeonly property __SkullType__ <br> _Set: Checks to see if the skull has an owner_ | `void`
 |
__Inherited items from [`BlockState`](BlockState.md)__ |
 |
__Inherited items from [`Metadatable`](..\metadata\Metadatable.md)__ |
 function __removeMetadata__(metadataKey, owningPlugin) <br> _Sets a metadata value in the implementing object's metadata store._ | `void`







---


### Public Properties for [`Skull`](Skull.md)

##### <a id='skulltype'></a>public  writeonly property __SkullType__

_Set: Checks to see if the skull has an owner_

Get | Description
--- | --- 
`void` | true if the skull has an owner /
    public boolean hasOwner();

    /** Gets the owner of the skull, if one exists

Set | Type | Description  
--- | --- | --- 
skullType | [`SkullType`](..\SkullType.md) | the type of skull


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
	

