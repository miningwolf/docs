## Skull __interface__

>io.wolfscript.block.Skull
>Extends [`BlockState`](BlockState.md)

---

### Interface Overview

Represents a Skull

Method | Type   
--- | :--- 
  property __Owner__ <br> _Get: Gets the owner of the skull, if one exists<br>Set: Sets the owner of the skull_ | `String`
  property __Rotation__ <br> _Get: Gets the rotation of the skull in the world<br>Set: Sets the rotation of the skull in the world_ | [`BlockFace`](BlockFace.md)
  property __SkullType__ <br> _Get: Gets the type of skull<br>Set: Sets the type of skull_ | [`SkullType`](../SkullType.md)
 function __hasOwner__() <br> _Checks to see if the skull has an owner_ | `boolean`
 |
__Inherited items from [`BlockState`](BlockState.md)__ |
 |
__Inherited items from [`Metadatable`](../metadata/Metadatable.md)__ |
 function __getMetadata__(metadataKey) <br> _Returns a list of previously set metadata values from the implementing_ | `List<MetadataValue>`
 function __hasMetadata__(metadataKey) <br> _Tests to see whether the implementing object contains the given_ | `boolean`
 function __removeMetadata__(metadataKey, owningPlugin) <br> _Removes the given metadata value from the implementing object's_ | `void`
 function __setMetadata__(metadataKey, newMetadataValue) <br> _Sets a metadata value in the implementing object's metadata store._ | `void`







---


### Public Properties for [`Skull`](Skull.md)

##### <a id='owner'></a>public   property __Owner__

_Get: Gets the owner of the skull, if one exists<br>Set: Sets the owner of the skull <p> Involves a potentially blocking web request to acquire the profile data for the provided name._

Get | Description
--- | --- 
`String` | true if the owner was successfully set

Set | Type | Description  
--- | --- | --- 
name | `String` | the new owner of the skull


##### <a id='rotation'></a>public   property __Rotation__

_Get: Gets the rotation of the skull in the world<br>Set: Sets the rotation of the skull in the world_

Get | Description
--- | --- 
[`BlockFace`](BlockFace.md) | the rotation of the skull

Set | Type | Description  
--- | --- | --- 
rotation | [`BlockFace`](BlockFace.md) | the rotation of the skull


##### <a id='skulltype'></a>public   property __SkullType__

_Get: Gets the type of skull<br>Set: Sets the type of skull_

Get | Description
--- | --- 
[`SkullType`](../SkullType.md) | the type of skull

Set | Type | Description  
--- | --- | --- 
skullType | [`SkullType`](../SkullType.md) | the type of skull


---

### Public Methods for [`Skull`](Skull.md)

##### <a id='hasowner'></a>public  function __hasOwner__()

_Checks to see if the skull has an owner_

Returns | Description
--- | --- 
`boolean` | true if the skull has an owner


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
	

