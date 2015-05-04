## Jukebox __interface__

>io.wolfscript.block.Jukebox
>Extends [`BlockState`](BlockState.md)

---

### Interface Overview

Represents a Jukebox

Method | Type   
--- | :--- 
  property __Playing__ <br> _Get: Get the record currently playing<br>Set: Set the record currently playing_ | [`Material`](../Material.md)
 function __eject__() <br> _Stop the jukebox playing and eject the current record_ | `boolean`
 function __isPlaying__() <br> _Check if the jukebox is currently playing a record_ | `boolean`
 |
__Inherited items from [`BlockState`](BlockState.md)__ |
 |
__Inherited items from [`Metadatable`](../metadata/Metadatable.md)__ |
 function __getMetadata__(metadataKey) <br> _Returns a list of previously set metadata values from the implementing_ | `List<MetadataValue>`
 function __hasMetadata__(metadataKey) <br> _Tests to see whether the implementing object contains the given_ | `boolean`
 function __removeMetadata__(metadataKey, owningPlugin) <br> _Removes the given metadata value from the implementing object's_ | `void`
 function __setMetadata__(metadataKey, newMetadataValue) <br> _Sets a metadata value in the implementing object's metadata store._ | `void`







---


### Public Properties for [`Jukebox`](Jukebox.md)

##### <a id='playing'></a>public   property __Playing__

_Get: Get the record currently playing<br>Set: Set the record currently playing_

Get | Description
--- | --- 
[`Material`](../Material.md) | The record Material, or AIR if none is playing

Set | Type | Description  
--- | --- | --- 
record | [`Material`](../Material.md) | The record Material, or null/AIR to stop playing


---

### Public Methods for [`Jukebox`](Jukebox.md)

##### <a id='eject'></a>public  function __eject__()

_Stop the jukebox playing and eject the current record_

Returns | Description
--- | --- 
`boolean` | True if a record was ejected; false if there was none playing


##### <a id='isplaying'></a>public  function __isPlaying__()

_Check if the jukebox is currently playing a record_

Returns | Description
--- | --- 
`boolean` | True if there is a record playing


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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

