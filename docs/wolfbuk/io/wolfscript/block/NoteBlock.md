## NoteBlock __interface__

>io.wolfscript.block.NoteBlock
>Extends [`BlockState`](BlockState.md)

---

### Interface Overview

Represents a note.

Method | Type   
--- | :--- 
  property __Note__ <br> _Get: Gets the note.<br>Set: Set the note._ | [`Note`](../Note.md)
 function __play__() <br> _Attempts to play the note at block_ | `boolean`
 function __play__(instrument, note) <br> _Plays an arbitrary note with an arbitrary instrument_ | `boolean`
 |
__Inherited items from [`BlockState`](BlockState.md)__ |
 |
__Inherited items from [`Metadatable`](../metadata/Metadatable.md)__ |
 function __getMetadata__(metadataKey) <br> _Returns a list of previously set metadata values from the implementing_ | `List<MetadataValue>`
 function __hasMetadata__(metadataKey) <br> _Tests to see whether the implementing object contains the given_ | `boolean`
 function __removeMetadata__(metadataKey, owningPlugin) <br> _Removes the given metadata value from the implementing object's_ | `void`
 function __setMetadata__(metadataKey, newMetadataValue) <br> _Sets a metadata value in the implementing object's metadata store._ | `void`







---


### Public Properties for [`NoteBlock`](NoteBlock.md)

##### <a id='note'></a>public   property __Note__

_Get: Gets the note.<br>Set: Set the note._

Get | Description
--- | --- 
[`Note`](../Note.md) | The note.

Set | Type | Description  
--- | --- | --- 
note | [`Note`](../Note.md) | The note.


##### <a id='rawnote'></a>public   property __RawNote__
_Deprecated: Magic value_

_Get: Gets the note.<br>Set: Set the note._

Get | 
--- | 
`byte` |

Set | Type | Description  
--- | --- | --- 
note | `byte` | The note ID.


---

### Public Methods for [`NoteBlock`](NoteBlock.md)

##### <a id='play'></a>public  function __play__()

_Attempts to play the note at block <p> If the block is no longer a note block, this will return false_

Returns | Description
--- | --- 
`boolean` | true if successful, otherwise false


##### <a id='play'></a>public  function __play__(instrument, note)
_Deprecated: Magic value_

_Plays an arbitrary note with an arbitrary instrument_

Argument | Type | Description  
--- | --- | --- 
instrument | `byte` | Instrument ID
note | `byte` | Note ID

Returns | Description
--- | --- 
`boolean` | true if successful, otherwise false


##### <a id='play'></a>public  function __play__(instrument, note)

_Plays an arbitrary note with an arbitrary instrument_

Argument | Type | Description  
--- | --- | --- 
instrument | [`Instrument`](../Instrument.md) | The instrument
note | [`Note`](../Note.md) | The note

Returns | Description
--- | --- 
`boolean` | true if successful, otherwise false


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
	

