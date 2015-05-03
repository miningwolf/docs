## CommandBlock __interface__

>io.wolfscript.block.CommandBlock
>Extends [`BlockState`](BlockState.md)

---

### Interface Overview

interface CommandBlock

Method | Type   
--- | :--- 
 writeonly property __Name__ <br> _Set: Gets the command that this CommandBlock will run when powered._ | `void`
 |
__Inherited items from [`BlockState`](BlockState.md)__ |
 |
__Inherited items from [`Metadatable`](..\metadata\Metadatable.md)__ |
 function __removeMetadata__(metadataKey, owningPlugin) <br> _Sets a metadata value in the implementing object's metadata store._ | `void`







---


### Public Properties for [`CommandBlock`](CommandBlock.md)

##### <a id='name'></a>public  writeonly property __Name__

_Set: Gets the command that this CommandBlock will run when powered. This will never return null.  If the CommandBlock does not have a command, an empty String will be returned instead._

Get | Description
--- | --- 
`void` | Command that this CommandBlock will run when powered. /
    public String getCommand();

    /** Sets the command that this CommandBlock will run when powered. Setting the command to null is the same as setting it to an empty String.

Set | Type | Description  
--- | --- | --- 
name | `String` | New name for this CommandBlock.


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
	

