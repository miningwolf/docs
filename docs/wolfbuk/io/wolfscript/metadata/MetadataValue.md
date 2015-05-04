## MetadataValue __interface__

>io.wolfscript.metadata.MetadataValue

---

### Interface Overview

interface MetadataValue

Method | Type   
--- | :--- 
 readonly property __OwningPlugin__ <br> _Get: Returns the [`Plugin`](../plugin/Plugin.md) that created this metadata item._ | [`Plugin`](../plugin/Plugin.md)
 function __asShort__() <br> _Attempts to convert the value of this metadata item into a short._ | `short`
 function __invalidate__() <br> _Invalidates this metadata item, forcing it to recompute when next_ | `void`
 function __asFloat__() <br> _Attempts to convert the value of this metadata item into a float._ | `float`
 function __asDouble__() <br> _Attempts to convert the value of this metadata item into a double._ | `double`
 function __asLong__() <br> _Attempts to convert the value of this metadata item into a long._ | `long`
 function __asInt__() <br> _Attempts to convert the value of this metadata item into an int._ | `int`
 function __asByte__() <br> _Attempts to convert the value of this metadata item into a byte._ | `byte`
 function __asBoolean__() <br> _Attempts to convert the value of this metadata item into a boolean._ | `boolean`
 function __asString__() <br> _Attempts to convert the value of this metadata item into a string._ | `String`
 function __value__() <br> _Fetches the value of this metadata item._ | `Object`



---


### Public Properties for [`MetadataValue`](MetadataValue.md)

##### <a id='owningplugin'></a>public  readonly property __OwningPlugin__

_Get: Returns the [`Plugin`](../plugin/Plugin.md) that created this metadata item._

Get | Description
--- | --- 
[`Plugin`](../plugin/Plugin.md) | the plugin that owns this metadata value. This should never be null.



---

### Public Methods for [`MetadataValue`](MetadataValue.md)

##### <a id='asshort'></a>public  function __asShort__()

_Attempts to convert the value of this metadata item into a short._

Returns | Description
--- | --- 
`short` | the value as a short.


##### <a id='invalidate'></a>public  function __invalidate__()

_Invalidates this metadata item, forcing it to recompute when next accessed._

Returns | 
--- | 
`void` |


##### <a id='asfloat'></a>public  function __asFloat__()

_Attempts to convert the value of this metadata item into a float._

Returns | Description
--- | --- 
`float` | the value as a float.


##### <a id='asdouble'></a>public  function __asDouble__()

_Attempts to convert the value of this metadata item into a double._

Returns | Description
--- | --- 
`double` | the value as a double.


##### <a id='aslong'></a>public  function __asLong__()

_Attempts to convert the value of this metadata item into a long._

Returns | Description
--- | --- 
`long` | the value as a long.


##### <a id='asint'></a>public  function __asInt__()

_Attempts to convert the value of this metadata item into an int._

Returns | Description
--- | --- 
`int` | the value as an int.


##### <a id='asbyte'></a>public  function __asByte__()

_Attempts to convert the value of this metadata item into a byte._

Returns | Description
--- | --- 
`byte` | the value as a byte.


##### <a id='asboolean'></a>public  function __asBoolean__()

_Attempts to convert the value of this metadata item into a boolean._

Returns | Description
--- | --- 
`boolean` | the value as a boolean.


##### <a id='asstring'></a>public  function __asString__()

_Attempts to convert the value of this metadata item into a string._

Returns | Description
--- | --- 
`String` | the value as a string.


##### <a id='value'></a>public  function __value__()

_Fetches the value of this metadata item._

Returns | Description
--- | --- 
`Object` | the metadata value.


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

