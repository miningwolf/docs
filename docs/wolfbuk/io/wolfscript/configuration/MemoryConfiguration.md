## MemoryConfiguration __class__

>io.wolfscript.configuration.MemoryConfiguration
>Extends [`MemorySection`](MemorySection.md)
>Implements [`Configuration`](Configuration.md)

---

### Class Overview

This is a [`Configuration`](Configuration.md) implementation that does not save or load from any source, and stores all values in memory only. This is useful for temporary Configurations for providing defaults.

Method | Type   
--- | :--- 
new __MemoryConfiguration__() <br> _Creates an empty [`MemoryConfiguration`](MemoryConfiguration.md) with no default values._ | _constructor_
new __MemoryConfiguration__(defaults) <br> _Creates an empty [`MemoryConfiguration`](MemoryConfiguration.md) using the specified {@link_ | _constructor_
  property __Defaults__ <br> _Defaults property_ | [`Configuration`](Configuration.md)
 readonly property __Parent__ <br> _Parent property_ | [`ConfigurationSection`](ConfigurationSection.md)
 function __addDefault__(path, value) <br> _addDefault method_ | `void`
 function __addDefaults__() <br> _addDefaults method_ | `void`
 function __addDefaults__(defaults) <br> _addDefaults method_ | `void`
 function __options__() <br> _options method_ | [`MemoryConfigurationOptions`](MemoryConfigurationOptions.md)
 |
__Inherited items from [`MemorySection`](MemorySection.md)__ |
 readonly property __CurrentPath__ <br> _CurrentPath property_ | `String`
 readonly property __DefaultSection__ <br> _DefaultSection property_ | [`ConfigurationSection`](ConfigurationSection.md)
 readonly property __Name__ <br> _Name property_ | `String`
 readonly property __Root__ <br> _Root property_ | [`Configuration`](Configuration.md)
 readonly property __Parent__ <br> _Parent property_ | [`ConfigurationSection`](ConfigurationSection.md)
 function __getList__(path) <br> _getList method_ | `List<?>`
 function __getKeys__(deep) <br> _getKeys method_ | `Set<String>`
static function __createPath__(section, key, relativeTo) <br> _Creates a relative path to the given [`ConfigurationSection`](ConfigurationSection.md) from_ | `String`
static function __createPath__(section, key) <br> _Creates a full path to the given [`ConfigurationSection`](ConfigurationSection.md) from its_ | `String`
 function __getConfigurationSection__(path) <br> _getConfigurationSection method_ | [`ConfigurationSection`](ConfigurationSection.md)
 function __getColor__(path, def) <br> _getColor method_ | [`Color`](../Color.md)
 function __addDefault__(path, value) <br> _addDefault method_ | `void`
 function __getColor__(path) <br> _getColor method_ | [`Color`](../Color.md)
 function __get__(path) <br> _get method_ | `Object`
 function __get__(path, def) <br> _get method_ | `Object`
 function __createSection__(path) <br> _createSection method_ | [`ConfigurationSection`](ConfigurationSection.md)
 function __createSection__(path) <br> _createSection method_ | [`ConfigurationSection`](ConfigurationSection.md)
 function __getItemStack__(path, def) <br> _getItemStack method_ | `ItemStack`
 function __getItemStack__(path) <br> _getItemStack method_ | `ItemStack`
 function __getCharacterList__(path) <br> _getCharacterList method_ | `List<Character>`
 function __getInt__(path) <br> _getInt method_ | `int`
 function __getInt__(path, def) <br> _getInt method_ | `int`
 function __getByteList__(path) <br> _getByteList method_ | `List<Byte>`
 function __getBoolean__(path) <br> _getBoolean method_ | `boolean`
 function __getBoolean__(path, def) <br> _getBoolean method_ | `boolean`
 function __getFloatList__(path) <br> _getFloatList method_ | `List<Float>`
 function __getDouble__(path) <br> _getDouble method_ | `double`
 function __getDouble__(path, def) <br> _getDouble method_ | `double`
 function __getDoubleList__(path) <br> _getDoubleList method_ | `List<Double>`
 function __getBooleanList__(path) <br> _getBooleanList method_ | `List<Boolean>`
 function __getIntegerList__(path) <br> _getIntegerList method_ | `List<Integer>`
 function __contains__(path) <br> _contains method_ | `boolean`
 function __isVector__(path) <br> _isVector method_ | `boolean`
 function __isLong__(path) <br> _isLong method_ | `boolean`
 function __isList__(path) <br> _isList method_ | `boolean`
 function __getStringList__(path) <br> _getStringList method_ | `List<String>`
 function __getLong__(path, def) <br> _getLong method_ | `long`
 function __getLong__(path) <br> _getLong method_ | `long`
 function __isDouble__(path) <br> _isDouble method_ | `boolean`
 function __isBoolean__(path) <br> _isBoolean method_ | `boolean`
 function __getLongList__(path) <br> _getLongList method_ | `List<Long>`
 function __isInt__(path) <br> _isInt method_ | `boolean`
 function __getShortList__(path) <br> _getShortList method_ | `List<Short>`
 function __getVector__(path) <br> _getVector method_ | `Vector`
 function __getVector__(path, def) <br> _getVector method_ | `Vector`
 function __getList__(path) <br> _getList method_ | `List<?>`
 function __getOfflinePlayer__(path) <br> _getOfflinePlayer method_ | `OfflinePlayer`
 function __getOfflinePlayer__(path, def) <br> _getOfflinePlayer method_ | `OfflinePlayer`
 function __isConfigurationSection__(path) <br> _isConfigurationSection method_ | `boolean`
 function __getString__(path, def) <br> _getString method_ | `String`
 function __getString__(path) <br> _getString method_ | `String`
 function __isItemStack__(path) <br> _isItemStack method_ | `boolean`
 function __isColor__(path) <br> _isColor method_ | `boolean`
 function __isOfflinePlayer__(path) <br> _isOfflinePlayer method_ | `boolean`
 function __isSet__(path) <br> _isSet method_ | `boolean`
 function __isString__(path) <br> _isString method_ | `boolean`
 function __set__(path, value) <br> _set method_ | `void`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`MemoryConfiguration`](MemoryConfiguration.md)

##### <a id='memoryconfiguration'></a>new __MemoryConfiguration__() 

_Creates an empty [`MemoryConfiguration`](MemoryConfiguration.md) with no default values._


##### <a id='memoryconfiguration'></a>new __MemoryConfiguration__(defaults) 

_Creates an empty [`MemoryConfiguration`](MemoryConfiguration.md) using the specified [`Configuration`](Configuration.md) as a source for all default values._

Argument | Type | Description  
--- | --- | --- 
defaults | [`Configuration`](Configuration.md) | Default value provider

---

### Public Properties for [`MemoryConfiguration`](MemoryConfiguration.md)

##### <a id='defaults'></a>public   property __Defaults__

_Defaults property_

Get | 
--- | 
[`Configuration`](Configuration.md) |

Set | Type | Description  
--- | --- | --- 
defaults | [`Configuration`](Configuration.md) | defaults argument


##### <a id='parent'></a>public  readonly property __Parent__

_Parent property_

Get | 
--- | 
[`ConfigurationSection`](ConfigurationSection.md) |



---

### Public Methods for [`MemoryConfiguration`](MemoryConfiguration.md)

##### <a id='adddefault'></a>public  function __addDefault__(path, value)

_addDefault method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
value | `Object` | value argument

Returns | 
--- | 
`void` |


##### <a id='adddefaults'></a>public  function __addDefaults__()

_addDefaults method_

Returns | 
--- | 
`void` |


##### <a id='adddefaults'></a>public  function __addDefaults__(defaults)

_addDefaults method_

Argument | Type | Description  
--- | --- | --- 
defaults | [`Configuration`](Configuration.md) | defaults argument

Returns | 
--- | 
`void` |


##### <a id='options'></a>public  function __options__()

_options method_

Returns | 
--- | 
[`MemoryConfigurationOptions`](MemoryConfigurationOptions.md) |


---

### Public Properties for [`MemorySection`](MemorySection.md)

##### <a id='currentpath'></a>public  readonly property __CurrentPath__

_CurrentPath property_

Get | 
--- | 
`String` |



##### <a id='defaultsection'></a>public  readonly property __DefaultSection__

_DefaultSection property_

Get | 
--- | 
[`ConfigurationSection`](ConfigurationSection.md) |



##### <a id='name'></a>public  readonly property __Name__

_Name property_

Get | 
--- | 
`String` |



##### <a id='root'></a>public  readonly property __Root__

_Root property_

Get | 
--- | 
[`Configuration`](Configuration.md) |



##### <a id='parent'></a>public  readonly property __Parent__

_Parent property_

Get | 
--- | 
[`ConfigurationSection`](ConfigurationSection.md) |



---

### Public Methods for [`MemorySection`](MemorySection.md)

##### <a id='getlist'></a>public  function __getList__(path)

_getList method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`List<?>` |


##### <a id='getkeys'></a>public  function __getKeys__(deep)

_getKeys method_

Argument | Type | Description  
--- | --- | --- 
deep | `boolean` | deep argument

Returns | 
--- | 
`Set<String>` |


##### <a id='createpath'></a>public static function __createPath__(section, key, relativeTo)

_Creates a relative path to the given [`ConfigurationSection`](ConfigurationSection.md) from the given relative section. <p> You may use this method for any given [`ConfigurationSection`](ConfigurationSection.md), not only [`MemorySection`](MemorySection.md)._

Argument | Type | Description  
--- | --- | --- 
section | [`ConfigurationSection`](ConfigurationSection.md) | Section to create a path for.
key | `String` | Name of the specified section.
relativeTo | [`ConfigurationSection`](ConfigurationSection.md) | Section to create the path relative to.

Returns | Description
--- | --- 
`String` | Full path of the section from its root.


##### <a id='createpath'></a>public static function __createPath__(section, key)

_Creates a full path to the given [`ConfigurationSection`](ConfigurationSection.md) from its root [`Configuration`](Configuration.md). <p> You may use this method for any given [`ConfigurationSection`](ConfigurationSection.md), not only [`MemorySection`](MemorySection.md)._

Argument | Type | Description  
--- | --- | --- 
section | [`ConfigurationSection`](ConfigurationSection.md) | Section to create a path for.
key | `String` | Name of the specified section.

Returns | Description
--- | --- 
`String` | Full path of the section from its root.


##### <a id='getconfigurationsection'></a>public  function __getConfigurationSection__(path)

_getConfigurationSection method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
[`ConfigurationSection`](ConfigurationSection.md) |


##### <a id='getcolor'></a>public  function __getColor__(path, def)

_getColor method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
def | [`Color`](../Color.md) | def argument

Returns | 
--- | 
[`Color`](../Color.md) |


##### <a id='adddefault'></a>public  function __addDefault__(path, value)

_addDefault method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
value | `Object` | value argument

Returns | 
--- | 
`void` |


##### <a id='getcolor'></a>public  function __getColor__(path)

_getColor method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
[`Color`](../Color.md) |


##### <a id='get'></a>public  function __get__(path)

_get method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`Object` |


##### <a id='get'></a>public  function __get__(path, def)

_get method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
def | `Object` | def argument

Returns | 
--- | 
`Object` |


##### <a id='createsection'></a>public  function __createSection__(path)

_createSection method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
[`ConfigurationSection`](ConfigurationSection.md) |


##### <a id='createsection'></a>public  function __createSection__(path)

_createSection method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
[`ConfigurationSection`](ConfigurationSection.md) |


##### <a id='getitemstack'></a>public  function __getItemStack__(path, def)

_getItemStack method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
def | `ItemStack` | def argument

Returns | 
--- | 
`ItemStack` |


##### <a id='getitemstack'></a>public  function __getItemStack__(path)

_getItemStack method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`ItemStack` |


##### <a id='getcharacterlist'></a>public  function __getCharacterList__(path)

_getCharacterList method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`List<Character>` |


##### <a id='getint'></a>public  function __getInt__(path)

_getInt method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`int` |


##### <a id='getint'></a>public  function __getInt__(path, def)

_getInt method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
def | `int` | def argument

Returns | 
--- | 
`int` |


##### <a id='getbytelist'></a>public  function __getByteList__(path)

_getByteList method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`List<Byte>` |


##### <a id='getboolean'></a>public  function __getBoolean__(path)

_getBoolean method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`boolean` |


##### <a id='getboolean'></a>public  function __getBoolean__(path, def)

_getBoolean method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
def | `boolean` | def argument

Returns | 
--- | 
`boolean` |


##### <a id='getfloatlist'></a>public  function __getFloatList__(path)

_getFloatList method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`List<Float>` |


##### <a id='getdouble'></a>public  function __getDouble__(path)

_getDouble method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`double` |


##### <a id='getdouble'></a>public  function __getDouble__(path, def)

_getDouble method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
def | `double` | def argument

Returns | 
--- | 
`double` |


##### <a id='getdoublelist'></a>public  function __getDoubleList__(path)

_getDoubleList method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`List<Double>` |


##### <a id='getbooleanlist'></a>public  function __getBooleanList__(path)

_getBooleanList method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`List<Boolean>` |


##### <a id='getintegerlist'></a>public  function __getIntegerList__(path)

_getIntegerList method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`List<Integer>` |


##### <a id='contains'></a>public  function __contains__(path)

_contains method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`boolean` |


##### <a id='isvector'></a>public  function __isVector__(path)

_isVector method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`boolean` |


##### <a id='islong'></a>public  function __isLong__(path)

_isLong method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`boolean` |


##### <a id='islist'></a>public  function __isList__(path)

_isList method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`boolean` |


##### <a id='getstringlist'></a>public  function __getStringList__(path)

_getStringList method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`List<String>` |


##### <a id='getlong'></a>public  function __getLong__(path, def)

_getLong method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
def | `long` | def argument

Returns | 
--- | 
`long` |


##### <a id='getlong'></a>public  function __getLong__(path)

_getLong method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`long` |


##### <a id='isdouble'></a>public  function __isDouble__(path)

_isDouble method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`boolean` |


##### <a id='isboolean'></a>public  function __isBoolean__(path)

_isBoolean method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`boolean` |


##### <a id='getlonglist'></a>public  function __getLongList__(path)

_getLongList method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`List<Long>` |


##### <a id='isint'></a>public  function __isInt__(path)

_isInt method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`boolean` |


##### <a id='getshortlist'></a>public  function __getShortList__(path)

_getShortList method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`List<Short>` |


##### <a id='getvector'></a>public  function __getVector__(path)

_getVector method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`Vector` |


##### <a id='getvector'></a>public  function __getVector__(path, def)

_getVector method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
def | `Vector` | def argument

Returns | 
--- | 
`Vector` |


##### <a id='getlist'></a>public  function __getList__(path)

_getList method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`List<?>` |


##### <a id='getofflineplayer'></a>public  function __getOfflinePlayer__(path)

_getOfflinePlayer method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`OfflinePlayer` |


##### <a id='getofflineplayer'></a>public  function __getOfflinePlayer__(path, def)

_getOfflinePlayer method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
def | `OfflinePlayer` | def argument

Returns | 
--- | 
`OfflinePlayer` |


##### <a id='isconfigurationsection'></a>public  function __isConfigurationSection__(path)

_isConfigurationSection method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`boolean` |


##### <a id='getstring'></a>public  function __getString__(path, def)

_getString method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
def | `String` | def argument

Returns | 
--- | 
`String` |


##### <a id='getstring'></a>public  function __getString__(path)

_getString method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`String` |


##### <a id='isitemstack'></a>public  function __isItemStack__(path)

_isItemStack method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`boolean` |


##### <a id='iscolor'></a>public  function __isColor__(path)

_isColor method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`boolean` |


##### <a id='isofflineplayer'></a>public  function __isOfflinePlayer__(path)

_isOfflinePlayer method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`boolean` |


##### <a id='isset'></a>public  function __isSet__(path)

_isSet method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`boolean` |


##### <a id='isstring'></a>public  function __isString__(path)

_isString method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

Returns | 
--- | 
`boolean` |


##### <a id='set'></a>public  function __set__(path, value)

_set method_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
value | `Object` | value argument

Returns | 
--- | 
`void` |


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

