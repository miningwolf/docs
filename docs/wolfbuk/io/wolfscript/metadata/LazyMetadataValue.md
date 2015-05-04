## LazyMetadataValue __class__

>io.wolfscript.metadata.LazyMetadataValue
>Extends [`MetadataValueAdapter`](MetadataValueAdapter.md)
>Implements [`MetadataValue`](MetadataValue.md)

---

### Class Overview

The LazyMetadataValue class implements a type of metadata that is not computed until another plugin asks for it. <p> By making metadata values lazy, no computation is done by the providing plugin until absolutely necessary (if ever). Additionally, LazyMetadataValue objects cache their values internally unless overridden by a `CacheStrategy` or invalidated at the individual or plugin level. Once invalidated, the LazyMetadataValue will recompute its value when asked.

Method | Type   
--- | :--- 
new __LazyMetadataValue__(owningPlugin) <br> _Initialized a LazyMetadataValue object with the default_ | _constructor_
new __LazyMetadataValue__(owningPlugin, cacheStrategy) <br> _Initializes a LazyMetadataValue object with a specific cache strategy._ | _constructor_
 function __value__() <br> _value method_ | `Object`
 |
__Inherited items from [`MetadataValueAdapter`](MetadataValueAdapter.md)__ |
 readonly property __OwningPlugin__ <br> _OwningPlugin property_ | [`Plugin`](../plugin/Plugin.md)
 function __asBoolean__() <br> _asBoolean method_ | `boolean`
 function __asByte__() <br> _asByte method_ | `byte`
 function __asDouble__() <br> _asDouble method_ | `double`
 function __asFloat__() <br> _asFloat method_ | `float`
 function __asInt__() <br> _asInt method_ | `int`
 function __asLong__() <br> _asLong method_ | `long`
 function __asShort__() <br> _asShort method_ | `short`
 function __asString__() <br> _asString method_ | `String`





---

### Public Constructors for [`LazyMetadataValue`](LazyMetadataValue.md)

##### <a id='lazymetadatavalue'></a>new __LazyMetadataValue__(owningPlugin) 

_Initialized a LazyMetadataValue object with the default CACHE_AFTER_FIRST_EVAL cache strategy._

Argument | Type | Description  
--- | --- | --- 
owningPlugin | [`Plugin`](../plugin/Plugin.md) | the [`Plugin`](../plugin/Plugin.md) that created this metadata value.

##### <a id='lazymetadatavalue'></a>new __LazyMetadataValue__(owningPlugin, cacheStrategy) 

_Initializes a LazyMetadataValue object with a specific cache strategy._

Argument | Type | Description  
--- | --- | --- 
owningPlugin | [`Plugin`](../plugin/Plugin.md) | the [`Plugin`](../plugin/Plugin.md) that created this metadata value.
cacheStrategy | `CacheStrategy` | determines the rules for caching this metadata value.

---

### Public Methods for [`LazyMetadataValue`](LazyMetadataValue.md)

##### <a id='value'></a>public  function __value__()

_value method_

Returns | 
--- | 
`Object` |


---

### Public Properties for [`MetadataValueAdapter`](MetadataValueAdapter.md)

##### <a id='owningplugin'></a>public  readonly property __OwningPlugin__

_OwningPlugin property_

Get | 
--- | 
[`Plugin`](../plugin/Plugin.md) |



---

### Public Methods for [`MetadataValueAdapter`](MetadataValueAdapter.md)

##### <a id='asboolean'></a>public  function __asBoolean__()

_asBoolean method_

Returns | 
--- | 
`boolean` |


##### <a id='asbyte'></a>public  function __asByte__()

_asByte method_

Returns | 
--- | 
`byte` |


##### <a id='asdouble'></a>public  function __asDouble__()

_asDouble method_

Returns | 
--- | 
`double` |


##### <a id='asfloat'></a>public  function __asFloat__()

_asFloat method_

Returns | 
--- | 
`float` |


##### <a id='asint'></a>public  function __asInt__()

_asInt method_

Returns | 
--- | 
`int` |


##### <a id='aslong'></a>public  function __asLong__()

_asLong method_

Returns | 
--- | 
`long` |


##### <a id='asshort'></a>public  function __asShort__()

_asShort method_

Returns | 
--- | 
`short` |


##### <a id='asstring'></a>public  function __asString__()

_asString method_

Returns | 
--- | 
`String` |


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

