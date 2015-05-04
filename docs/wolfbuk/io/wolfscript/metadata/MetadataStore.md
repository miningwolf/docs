## MetadataStore __interface__

>io.wolfscript.metadata.MetadataStore

---

### Interface Overview

interface MetadataStore

Method | Type   
--- | :--- 
 function __getMetadata__(subject, metadataKey) <br> _Returns all metadata values attached to an object. If multiple plugins_ | `List<MetadataValue>`
 function __hasMetadata__(subject, metadataKey) <br> _Tests to see if a metadata attribute has been set on an object._ | `boolean`
 function __invalidateAll__(owningPlugin) <br> _Invalidates all metadata in the metadata store that originates from the_ | `void`
 function __removeMetadata__(subject, metadataKey, owningPlugin) <br> _Removes a metadata item owned by a plugin from a subject._ | `void`
 function __setMetadata__(subject, metadataKey, newMetadataValue) <br> _Adds a metadata value to an object._ | `void`



---


### Public Methods for [`MetadataStore`](MetadataStore.md)

##### <a id='getmetadata'></a>public  function __getMetadata__(subject, metadataKey)

_Returns all metadata values attached to an object. If multiple plugins have attached metadata, each will value will be included._

Argument | Type | Description  
--- | --- | --- 
subject | `T` | the object being interrogated.
metadataKey | `String` | the unique metadata key being sought.

Returns | Description
--- | --- 
`List<MetadataValue>` | A list of values, one for each plugin that has set the requested value.


##### <a id='hasmetadata'></a>public  function __hasMetadata__(subject, metadataKey)

_Tests to see if a metadata attribute has been set on an object._

Argument | Type | Description  
--- | --- | --- 
subject | `T` | the object upon which the has-metadata test is performed.
metadataKey | `String` | the unique metadata key being queried.

Returns | Description
--- | --- 
`boolean` | the existence of the metadataKey within subject.


##### <a id='invalidateall'></a>public  function __invalidateAll__(owningPlugin)

_Invalidates all metadata in the metadata store that originates from the given plugin. Doing this will force each invalidated metadata item to be recalculated the next time it is accessed._

Argument | Type | Description  
--- | --- | --- 
owningPlugin | [`Plugin`](../plugin/Plugin.md) | the plugin requesting the invalidation.

Returns | 
--- | 
`void` |


##### <a id='removemetadata'></a>public  function __removeMetadata__(subject, metadataKey, owningPlugin)

_Removes a metadata item owned by a plugin from a subject._

Argument | Type | Description  
--- | --- | --- 
subject | `T` | the object to remove the metadata from.
metadataKey | `String` | the unique metadata key identifying the metadata to remove.
owningPlugin | [`Plugin`](../plugin/Plugin.md) | the plugin attempting to remove a metadata item.

Returns | 
--- | 
`void` |


##### <a id='setmetadata'></a>public  function __setMetadata__(subject, metadataKey, newMetadataValue)

_Adds a metadata value to an object._

Argument | Type | Description  
--- | --- | --- 
subject | `T` | The object receiving the metadata.
metadataKey | `String` | A unique key to identify this metadata.
newMetadataValue | [`MetadataValue`](MetadataValue.md) | The metadata value to apply.

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

