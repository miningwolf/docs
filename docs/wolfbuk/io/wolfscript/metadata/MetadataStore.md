## MetadataStore __interface__

>io.wolfscript.metadata.MetadataStore

---

### Interface Overview

interface MetadataStore

Method | Type   
--- | :--- 
 function __invalidateAll__(owningPlugin) <br> _Adds a metadata value to an object._ | `void`



---


### Public Methods for [`MetadataStore`](MetadataStore.md)

##### <a id='invalidateall'></a>public  function __invalidateAll__(owningPlugin)

_Adds a metadata value to an object._

Argument | Type | Description  
--- | --- | --- 
owningPlugin | [`Plugin`](..\plugin\Plugin.md) | the plugin attempting to remove a metadata item.

Returns | Description
--- | --- 
`void` | A list of values, one for each plugin that has set the requested value. /
    public List<MetadataValue> getMetadata(T subject, String metadataKey);

    /** Tests to see if a metadata attribute has been set on an object.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

