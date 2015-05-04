## CommandBlock __interface__

>io.wolfscript.block.CommandBlock
>Extends [`BlockState`](BlockState.md)

---

### Interface Overview

interface CommandBlock

Method | Type   
--- | :--- 
  property __Command__ <br> _Get: Gets the command that this CommandBlock will run when powered.<br>Set: Sets the command that this CommandBlock will run when powered._ | `String`
  property __Name__ <br> _Get: Gets the name of this CommandBlock.  The name is used with commands<br>Set: Sets the name of this CommandBlock.  The name is used with commands_ | `String`
 |
__Inherited items from [`BlockState`](BlockState.md)__ |
 |
__Inherited items from [`Metadatable`](../metadata/Metadatable.md)__ |
 function __getMetadata__(metadataKey) <br> _Returns a list of previously set metadata values from the implementing_ | `List<MetadataValue>`
 function __hasMetadata__(metadataKey) <br> _Tests to see whether the implementing object contains the given_ | `boolean`
 function __removeMetadata__(metadataKey, owningPlugin) <br> _Removes the given metadata value from the implementing object's_ | `void`
 function __setMetadata__(metadataKey, newMetadataValue) <br> _Sets a metadata value in the implementing object's metadata store._ | `void`







---


### Public Properties for [`CommandBlock`](CommandBlock.md)

##### <a id='command'></a>public   property __Command__

_Get: Gets the command that this CommandBlock will run when powered. This will never return null.  If the CommandBlock does not have a command, an empty String will be returned instead.<br>Set: Sets the command that this CommandBlock will run when powered. Setting the command to null is the same as setting it to an empty String._

Get | Description
--- | --- 
`String` | Command that this CommandBlock will run when powered.

Set | Type | Description  
--- | --- | --- 
command | `String` | Command that this CommandBlock will run when powered.


##### <a id='name'></a>public   property __Name__

_Get: Gets the name of this CommandBlock.  The name is used with commands that this CommandBlock executes.  This name will never be null, and by default is "@".<br>Set: Sets the name of this CommandBlock.  The name is used with commands that this CommandBlock executes.  Setting the name to null is the same as setting it to "@"._

Get | Description
--- | --- 
`String` | Name of this CommandBlock.

Set | Type | Description  
--- | --- | --- 
name | `String` | New name for this CommandBlock.


---

### Public Properties for [`BlockState`](BlockState.md)

##### <a id='rawdata'></a>public   property __RawData__
_Deprecated: Magic value_

_RawData property_

Get | 
--- | 
`byte` |

Set | Type | Description  
--- | --- | --- 
data | `byte` | The new data value for the block.


---

### Public Methods for [`Metadatable`](../metadata/Metadatable.md)

##### <a id='getmetadata'></a>public  function __getMetadata__(metadataKey)

_Returns a list of previously set metadata values from the implementing object's metadata store._

Argument | Type | Description  
--- | --- | --- 
metadataKey | `String` | the unique metadata key being sought.

Returns | Description
--- | --- 
`List<MetadataValue>` | A list of values, one for each plugin that has set the requested value.


##### <a id='hasmetadata'></a>public  function __hasMetadata__(metadataKey)

_Tests to see whether the implementing object contains the given metadata value in its metadata store._

Argument | Type | Description  
--- | --- | --- 
metadataKey | `String` | the unique metadata key being queried.

Returns | Description
--- | --- 
`boolean` | the existence of the metadataKey within subject.


##### <a id='removemetadata'></a>public  function __removeMetadata__(metadataKey, owningPlugin)

_Removes the given metadata value from the implementing object's metadata store._

Argument | Type | Description  
--- | --- | --- 
metadataKey | `String` | the unique metadata key identifying the metadata to remove.
owningPlugin | [`Plugin`](../plugin/Plugin.md) | This plugin's metadata value will be removed. All other values will be left untouched.

Returns | 
--- | 
`void` |


##### <a id='setmetadata'></a>public  function __setMetadata__(metadataKey, newMetadataValue)

_Sets a metadata value in the implementing object's metadata store._

Argument | Type | Description  
--- | --- | --- 
metadataKey | `String` | A unique key to identify this metadata.
newMetadataValue | [`MetadataValue`](../metadata/MetadataValue.md) | The metadata value to apply.

Returns | 
--- | 
`void` |


---


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

