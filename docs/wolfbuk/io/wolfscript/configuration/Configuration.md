## Configuration __interface__

>io.wolfscript.configuration.Configuration
>Extends [`ConfigurationSection`](ConfigurationSection.md)

---

### Interface Overview

Represents a source of configurable options and settings

Method | Type   
--- | :--- 
  property __Defaults__ <br> _Get: Gets the source [`Configuration`](Configuration.md) for this configuration.<br>Set: Sets the source of all default values for this [`Configuration`](Configuration.md)._ | [`Configuration`](Configuration.md)
 function __addDefault__(path, value) <br> _Sets the default value of the given path as provided._ | `void`
 function __addDefaults__() <br> _Sets the default values of the given paths as provided._ | `void`
 function __addDefaults__(defaults) <br> _Sets the default values of the given paths as provided._ | `void`
 function __options__() <br> _Gets the [`ConfigurationOptions`](ConfigurationOptions.md) for this [`Configuration`](Configuration.md)._ | [`ConfigurationOptions`](ConfigurationOptions.md)
 |
__Inherited items from [`ConfigurationSection`](ConfigurationSection.md)__ |
 readonly property __DefaultSection__ <br> _Get: Gets the equivalent [`ConfigurationSection`](ConfigurationSection.md) from the default_ | [`ConfigurationSection`](ConfigurationSection.md)
 readonly property __CurrentPath__ <br> _Get: Gets the path of this [`ConfigurationSection`](ConfigurationSection.md) from its root {@link_ | `String`
 readonly property __Name__ <br> _Get: Gets the name of this individual [`ConfigurationSection`](ConfigurationSection.md), in the_ | `String`
 readonly property __Root__ <br> _Get: Gets the root [`Configuration`](Configuration.md) that contains this {@link_ | [`Configuration`](Configuration.md)
 readonly property __Parent__ <br> _Get: Gets the parent [`ConfigurationSection`](ConfigurationSection.md) that directly contains_ | [`ConfigurationSection`](ConfigurationSection.md)
 function __getList__(path) <br> _Gets the requested List by path._ | `List<?>`
 function __addDefault__(path, value) <br> _Sets the default value in the root at the given path as provided._ | `void`
 function __getList__(path) <br> _Gets the requested List by path, returning a default value if not_ | `List<?>`
 function __getKeys__(deep) <br> _Gets a set containing all keys in this section._ | `Set<String>`
 function __getConfigurationSection__(path) <br> _Gets the requested ConfigurationSection by path._ | [`ConfigurationSection`](ConfigurationSection.md)
 function __getColor__(path, def) <br> _Gets the requested [`Color`](../Color.md) by path, returning a default value if_ | [`Color`](../Color.md)
 function __get__(path) <br> _Gets the requested Object by path._ | `Object`
 function __get__(path, def) <br> _Gets the requested Object by path, returning a default value if not_ | `Object`
 function __getColor__(path) <br> _Gets the requested Color by path._ | [`Color`](../Color.md)
 function __createSection__(path) <br> _Creates an empty [`ConfigurationSection`](ConfigurationSection.md) at the specified path._ | [`ConfigurationSection`](ConfigurationSection.md)
 function __createSection__(path) <br> _Creates a [`ConfigurationSection`](ConfigurationSection.md) at the specified path, with_ | [`ConfigurationSection`](ConfigurationSection.md)
 function __getItemStack__(path, def) <br> _Gets the requested `ItemStack` by path, returning a default value_ | `ItemStack`
 function __getItemStack__(path) <br> _Gets the requested ItemStack by path._ | `ItemStack`
 function __getCharacterList__(path) <br> _Gets the requested List of Character by path._ | `List<Character>`
 function __getInt__(path) <br> _Gets the requested int by path._ | `int`
 function __getInt__(path, def) <br> _Gets the requested int by path, returning a default value if not found._ | `int`
 function __getByteList__(path) <br> _Gets the requested List of Byte by path._ | `List<Byte>`
 function __getBoolean__(path) <br> _Gets the requested boolean by path._ | `boolean`
 function __getBoolean__(path, def) <br> _Gets the requested boolean by path, returning a default value if not_ | `boolean`
 function __getFloatList__(path) <br> _Gets the requested List of Float by path._ | `List<Float>`
 function __getDouble__(path) <br> _Gets the requested double by path._ | `double`
 function __getDouble__(path, def) <br> _Gets the requested double by path, returning a default value if not_ | `double`
 function __getDoubleList__(path) <br> _Gets the requested List of Double by path._ | `List<Double>`
 function __getBooleanList__(path) <br> _Gets the requested List of Boolean by path._ | `List<Boolean>`
 function __getIntegerList__(path) <br> _Gets the requested List of Integer by path._ | `List<Integer>`
 function __contains__(path) <br> _Checks if this [`ConfigurationSection`](ConfigurationSection.md) contains the given path._ | `boolean`
 function __isVector__(path) <br> _Checks if the specified path is a Vector._ | `boolean`
 function __isLong__(path) <br> _Checks if the specified path is a long._ | `boolean`
 function __getStringList__(path) <br> _Gets the requested List of String by path._ | `List<String>`
 function __getLong__(path, def) <br> _Gets the requested long by path, returning a default value if not_ | `long`
 function __getLong__(path) <br> _Gets the requested long by path._ | `long`
 function __isDouble__(path) <br> _Checks if the specified path is a double._ | `boolean`
 function __isBoolean__(path) <br> _Checks if the specified path is a boolean._ | `boolean`
 function __getLongList__(path) <br> _Gets the requested List of Long by path._ | `List<Long>`
 function __isInt__(path) <br> _Checks if the specified path is an int._ | `boolean`
 function __getShortList__(path) <br> _Gets the requested List of Short by path._ | `List<Short>`
 function __getVector__(path) <br> _Gets the requested Vector by path._ | `Vector`
 function __getVector__(path, def) <br> _Gets the requested `Vector` by path, returning a default value if_ | `Vector`
 function __isList__(path) <br> _Checks if the specified path is a List._ | `boolean`
 function __getOfflinePlayer__(path) <br> _Gets the requested OfflinePlayer by path._ | `OfflinePlayer`
 function __getOfflinePlayer__(path, def) <br> _Gets the requested `OfflinePlayer` by path, returning a default_ | `OfflinePlayer`
 function __isConfigurationSection__(path) <br> _Checks if the specified path is a ConfigurationSection._ | `boolean`
 function __getString__(path, def) <br> _Gets the requested String by path, returning a default value if not_ | `String`
 function __getString__(path) <br> _Gets the requested String by path._ | `String`
 function __isItemStack__(path) <br> _Checks if the specified path is an ItemStack._ | `boolean`
 function __isColor__(path) <br> _Checks if the specified path is a Color._ | `boolean`
 function __isOfflinePlayer__(path) <br> _Checks if the specified path is an OfflinePlayer._ | `boolean`
 function __isSet__(path) <br> _Checks if this [`ConfigurationSection`](ConfigurationSection.md) has a value set for the_ | `boolean`
 function __isString__(path) <br> _Checks if the specified path is a String._ | `boolean`
 function __set__(path, value) <br> _Sets the specified path to the given value._ | `void`





---


### Public Properties for [`Configuration`](Configuration.md)

##### <a id='defaults'></a>public   property __Defaults__

_Get: Gets the source [`Configuration`](Configuration.md) for this configuration. <p> If no configuration source was set, but default values were added, then a [`MemoryConfiguration`](MemoryConfiguration.md) will be returned. If no source was set and no defaults were set, then this method will return null.<br>Set: Sets the source of all default values for this [`Configuration`](Configuration.md). <p> If a previous source was set, or previous default values were defined, then they will not be copied to the new source._

Get | 
--- | 
[`Configuration`](Configuration.md) |

Set | Type | Description  
--- | --- | --- 
defaults | [`Configuration`](Configuration.md) | New source of default values for this configuration.


---

### Public Methods for [`Configuration`](Configuration.md)

##### <a id='adddefault'></a>public  function __addDefault__(path, value)

_Sets the default value of the given path as provided. <p> If no source [`Configuration`](Configuration.md) was provided as a default collection, then a new [`MemoryConfiguration`](MemoryConfiguration.md) will be created to hold the new default value. <p> If value is null, the value will be removed from the default Configuration source._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the value to set.
value | `Object` | Value to set the default to.

Returns | 
--- | 
`void` |


##### <a id='adddefaults'></a>public  function __addDefaults__()

_Sets the default values of the given paths as provided. <p> If no source [`Configuration`](Configuration.md) was provided as a default collection, then a new [`MemoryConfiguration`](MemoryConfiguration.md) will be created to hold the new default values._

Returns | 
--- | 
`void` |


##### <a id='adddefaults'></a>public  function __addDefaults__(defaults)

_Sets the default values of the given paths as provided. <p> If no source [`Configuration`](Configuration.md) was provided as a default collection, then a new [`MemoryConfiguration`](MemoryConfiguration.md) will be created to hold the new default value. <p> This method will not hold a reference to the specified Configuration, nor will it automatically update if that Configuration ever changes. If you require this, you should set the default source with `#setDefaults(Configuration)`._

Argument | Type | Description  
--- | --- | --- 
defaults | [`Configuration`](Configuration.md) | A configuration holding a list of defaults to copy.

Returns | 
--- | 
`void` |


##### <a id='options'></a>public  function __options__()

_Gets the [`ConfigurationOptions`](ConfigurationOptions.md) for this [`Configuration`](Configuration.md). <p> All setters through this method are chainable._

Returns | Description
--- | --- 
[`ConfigurationOptions`](ConfigurationOptions.md) | Options for this configuration


---

### Public Properties for [`ConfigurationSection`](ConfigurationSection.md)

##### <a id='defaultsection'></a>public  readonly property __DefaultSection__

_Get: Gets the equivalent [`ConfigurationSection`](ConfigurationSection.md) from the default [`Configuration`](Configuration.md) defined in `#getRoot()`. <p> If the root contains no defaults, or the defaults doesn't contain a value for this path, or the value at this path is not a [`ConfigurationSection`](ConfigurationSection.md) then this will return null._

Get | Description
--- | --- 
[`ConfigurationSection`](ConfigurationSection.md) | Equivalent section in root configuration



##### <a id='currentpath'></a>public  readonly property __CurrentPath__

_Get: Gets the path of this [`ConfigurationSection`](ConfigurationSection.md) from its root [`Configuration`](Configuration.md) <p> For any [`Configuration`](Configuration.md) themselves, this will return an empty string. <p> If the section is no longer contained within its root for any reason, such as being replaced with a different value, this may return null. <p> To retrieve the single name of this section, that is, the final part of the path returned by this method, you may use `#getName()`._

Get | Description
--- | --- 
`String` | Path of this section relative to its root



##### <a id='name'></a>public  readonly property __Name__

_Get: Gets the name of this individual [`ConfigurationSection`](ConfigurationSection.md), in the path. <p> This will always be the final part of `#getCurrentPath()`, unless the section is orphaned._

Get | Description
--- | --- 
`String` | Name of this section



##### <a id='root'></a>public  readonly property __Root__

_Get: Gets the root [`Configuration`](Configuration.md) that contains this [`ConfigurationSection`](ConfigurationSection.md) <p> For any [`Configuration`](Configuration.md) themselves, this will return its own object. <p> If the section is no longer contained within its root for any reason, such as being replaced with a different value, this may return null._

Get | Description
--- | --- 
[`Configuration`](Configuration.md) | Root configuration containing this section.



##### <a id='parent'></a>public  readonly property __Parent__

_Get: Gets the parent [`ConfigurationSection`](ConfigurationSection.md) that directly contains this [`ConfigurationSection`](ConfigurationSection.md). <p> For any [`Configuration`](Configuration.md) themselves, this will return null. <p> If the section is no longer contained within its parent for any reason, such as being replaced with a different value, this may return null._

Get | Description
--- | --- 
[`ConfigurationSection`](ConfigurationSection.md) | Parent section containing this section.



---

### Public Methods for [`ConfigurationSection`](ConfigurationSection.md)

##### <a id='getlist'></a>public  function __getList__(path)

_Gets the requested List by path. <p> If the List does not exist but a default value has been specified, this will return the default value. If the List does not exist and no default value was specified, this will return null._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the List to get.

Returns | Description
--- | --- 
`List<?>` | Requested List.


##### <a id='adddefault'></a>public  function __addDefault__(path, value)

_Sets the default value in the root at the given path as provided. <p> If no source [`Configuration`](Configuration.md) was provided as a default collection, then a new [`MemoryConfiguration`](MemoryConfiguration.md) will be created to hold the new default value. <p> If value is null, the value will be removed from the default Configuration source. <p> If the value as returned by `#getDefaultSection()` is null, then this will create a new section at the path, replacing anything that may have existed there previously._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the value to set.
value | `Object` | Value to set the default to.

Returns | 
--- | 
`void` |


##### <a id='getlist'></a>public  function __getList__(path)

_Gets the requested List by path, returning a default value if not found. <p> If the List does not exist then the specified default value will returned regardless of if a default has been identified in the root [`Configuration`](Configuration.md)._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the List to get.

Returns | Description
--- | --- 
`List<?>` | Requested List.


##### <a id='getkeys'></a>public  function __getKeys__(deep)

_Gets a set containing all keys in this section. <p> If deep is set to true, then this will contain all the keys within any child [`ConfigurationSection`](ConfigurationSection.md)s (and their children, etc). These will be in a valid path notation for you to use. <p> If deep is set to false, then this will contain only the keys of any direct children, and not their own children._

Argument | Type | Description  
--- | --- | --- 
deep | `boolean` | Whether or not to get a deep list, as opposed to a shallow list.

Returns | Description
--- | --- 
`Set<String>` | Set of keys contained within this ConfigurationSection.


##### <a id='getconfigurationsection'></a>public  function __getConfigurationSection__(path)

_Gets the requested ConfigurationSection by path. <p> If the ConfigurationSection does not exist but a default value has been specified, this will return the default value. If the ConfigurationSection does not exist and no default value was specified, this will return null._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the ConfigurationSection to get.

Returns | Description
--- | --- 
[`ConfigurationSection`](ConfigurationSection.md) | Requested ConfigurationSection.


##### <a id='getcolor'></a>public  function __getColor__(path, def)

_Gets the requested [`Color`](../Color.md) by path, returning a default value if not found. <p> If the Color does not exist then the specified default value will returned regardless of if a default has been identified in the root [`Configuration`](Configuration.md)._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the Color to get.
def | [`Color`](../Color.md) | The default value to return if the path is not found or is not a Color.

Returns | Description
--- | --- 
[`Color`](../Color.md) | Requested Color.


##### <a id='get'></a>public  function __get__(path)

_Gets the requested Object by path. <p> If the Object does not exist but a default value has been specified, this will return the default value. If the Object does not exist and no default value was specified, this will return null._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the Object to get.

Returns | Description
--- | --- 
`Object` | Requested Object.


##### <a id='get'></a>public  function __get__(path, def)

_Gets the requested Object by path, returning a default value if not found. <p> If the Object does not exist then the specified default value will returned regardless of if a default has been identified in the root [`Configuration`](Configuration.md)._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the Object to get.
def | `Object` | The default value to return if the path is not found.

Returns | Description
--- | --- 
`Object` | Requested Object.


##### <a id='getcolor'></a>public  function __getColor__(path)

_Gets the requested Color by path. <p> If the Color does not exist but a default value has been specified, this will return the default value. If the Color does not exist and no default value was specified, this will return null._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the Color to get.

Returns | Description
--- | --- 
[`Color`](../Color.md) | Requested Color.


##### <a id='createsection'></a>public  function __createSection__(path)

_Creates an empty [`ConfigurationSection`](ConfigurationSection.md) at the specified path. <p> Any value that was previously set at this path will be overwritten. If the previous value was itself a [`ConfigurationSection`](ConfigurationSection.md), it will be orphaned._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path to create the section at.

Returns | Description
--- | --- 
[`ConfigurationSection`](ConfigurationSection.md) | Newly created section


##### <a id='createsection'></a>public  function __createSection__(path)

_Creates a [`ConfigurationSection`](ConfigurationSection.md) at the specified path, with specified values. <p> Any value that was previously set at this path will be overwritten. If the previous value was itself a [`ConfigurationSection`](ConfigurationSection.md), it will be orphaned._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path to create the section at.

Returns | Description
--- | --- 
[`ConfigurationSection`](ConfigurationSection.md) | Newly created section


##### <a id='getitemstack'></a>public  function __getItemStack__(path, def)

_Gets the requested `ItemStack` by path, returning a default value if not found. <p> If the ItemStack does not exist then the specified default value will returned regardless of if a default has been identified in the root [`Configuration`](Configuration.md)._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the ItemStack to get.
def | `ItemStack` | The default value to return if the path is not found or is not an ItemStack.

Returns | Description
--- | --- 
`ItemStack` | Requested ItemStack.


##### <a id='getitemstack'></a>public  function __getItemStack__(path)

_Gets the requested ItemStack by path. <p> If the ItemStack does not exist but a default value has been specified, this will return the default value. If the ItemStack does not exist and no default value was specified, this will return null._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the ItemStack to get.

Returns | Description
--- | --- 
`ItemStack` | Requested ItemStack.


##### <a id='getcharacterlist'></a>public  function __getCharacterList__(path)

_Gets the requested List of Character by path. <p> If the List does not exist but a default value has been specified, this will return the default value. If the List does not exist and no default value was specified, this will return an empty List. <p> This method will attempt to cast any values into a Character if possible, but may miss any values out if they are not compatible._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the List to get.

Returns | Description
--- | --- 
`List<Character>` | Requested List of Character.


##### <a id='getint'></a>public  function __getInt__(path)

_Gets the requested int by path. <p> If the int does not exist but a default value has been specified, this will return the default value. If the int does not exist and no default value was specified, this will return 0._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the int to get.

Returns | Description
--- | --- 
`int` | Requested int.


##### <a id='getint'></a>public  function __getInt__(path, def)

_Gets the requested int by path, returning a default value if not found. <p> If the int does not exist then the specified default value will returned regardless of if a default has been identified in the root [`Configuration`](Configuration.md)._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the int to get.
def | `int` | The default value to return if the path is not found or is not an int.

Returns | Description
--- | --- 
`int` | Requested int.


##### <a id='getbytelist'></a>public  function __getByteList__(path)

_Gets the requested List of Byte by path. <p> If the List does not exist but a default value has been specified, this will return the default value. If the List does not exist and no default value was specified, this will return an empty List. <p> This method will attempt to cast any values into a Byte if possible, but may miss any values out if they are not compatible._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the List to get.

Returns | Description
--- | --- 
`List<Byte>` | Requested List of Byte.


##### <a id='getboolean'></a>public  function __getBoolean__(path)

_Gets the requested boolean by path. <p> If the boolean does not exist but a default value has been specified, this will return the default value. If the boolean does not exist and no default value was specified, this will return false._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the boolean to get.

Returns | Description
--- | --- 
`boolean` | Requested boolean.


##### <a id='getboolean'></a>public  function __getBoolean__(path, def)

_Gets the requested boolean by path, returning a default value if not found. <p> If the boolean does not exist then the specified default value will returned regardless of if a default has been identified in the root [`Configuration`](Configuration.md)._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the boolean to get.
def | `boolean` | The default value to return if the path is not found or is not a boolean.

Returns | Description
--- | --- 
`boolean` | Requested boolean.


##### <a id='getfloatlist'></a>public  function __getFloatList__(path)

_Gets the requested List of Float by path. <p> If the List does not exist but a default value has been specified, this will return the default value. If the List does not exist and no default value was specified, this will return an empty List. <p> This method will attempt to cast any values into a Float if possible, but may miss any values out if they are not compatible._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the List to get.

Returns | Description
--- | --- 
`List<Float>` | Requested List of Float.


##### <a id='getdouble'></a>public  function __getDouble__(path)

_Gets the requested double by path. <p> If the double does not exist but a default value has been specified, this will return the default value. If the double does not exist and no default value was specified, this will return 0._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the double to get.

Returns | Description
--- | --- 
`double` | Requested double.


##### <a id='getdouble'></a>public  function __getDouble__(path, def)

_Gets the requested double by path, returning a default value if not found. <p> If the double does not exist then the specified default value will returned regardless of if a default has been identified in the root [`Configuration`](Configuration.md)._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the double to get.
def | `double` | The default value to return if the path is not found or is not a double.

Returns | Description
--- | --- 
`double` | Requested double.


##### <a id='getdoublelist'></a>public  function __getDoubleList__(path)

_Gets the requested List of Double by path. <p> If the List does not exist but a default value has been specified, this will return the default value. If the List does not exist and no default value was specified, this will return an empty List. <p> This method will attempt to cast any values into a Double if possible, but may miss any values out if they are not compatible._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the List to get.

Returns | Description
--- | --- 
`List<Double>` | Requested List of Double.


##### <a id='getbooleanlist'></a>public  function __getBooleanList__(path)

_Gets the requested List of Boolean by path. <p> If the List does not exist but a default value has been specified, this will return the default value. If the List does not exist and no default value was specified, this will return an empty List. <p> This method will attempt to cast any values into a Boolean if possible, but may miss any values out if they are not compatible._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the List to get.

Returns | Description
--- | --- 
`List<Boolean>` | Requested List of Boolean.


##### <a id='getintegerlist'></a>public  function __getIntegerList__(path)

_Gets the requested List of Integer by path. <p> If the List does not exist but a default value has been specified, this will return the default value. If the List does not exist and no default value was specified, this will return an empty List. <p> This method will attempt to cast any values into a Integer if possible, but may miss any values out if they are not compatible._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the List to get.

Returns | Description
--- | --- 
`List<Integer>` | Requested List of Integer.


##### <a id='contains'></a>public  function __contains__(path)

_Checks if this [`ConfigurationSection`](ConfigurationSection.md) contains the given path. <p> If the value for the requested path does not exist but a default value has been specified, this will return true._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path to check for existence.

Returns | Description
--- | --- 
`boolean` | True if this section contains the requested path, either via default or being set.


##### <a id='isvector'></a>public  function __isVector__(path)

_Checks if the specified path is a Vector. <p> If the path exists but is not a Vector, this will return false. If the path does not exist, this will return false. If the path does not exist but a default value has been specified, this will check if that default value is a Vector and return appropriately._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the Vector to check.

Returns | Description
--- | --- 
`boolean` | Whether or not the specified path is a Vector.


##### <a id='islong'></a>public  function __isLong__(path)

_Checks if the specified path is a long. <p> If the path exists but is not a long, this will return false. If the path does not exist, this will return false. If the path does not exist but a default value has been specified, this will check if that default value is a long and return appropriately._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the long to check.

Returns | Description
--- | --- 
`boolean` | Whether or not the specified path is a long.


##### <a id='getstringlist'></a>public  function __getStringList__(path)

_Gets the requested List of String by path. <p> If the List does not exist but a default value has been specified, this will return the default value. If the List does not exist and no default value was specified, this will return an empty List. <p> This method will attempt to cast any values into a String if possible, but may miss any values out if they are not compatible._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the List to get.

Returns | Description
--- | --- 
`List<String>` | Requested List of String.


##### <a id='getlong'></a>public  function __getLong__(path, def)

_Gets the requested long by path, returning a default value if not found. <p> If the long does not exist then the specified default value will returned regardless of if a default has been identified in the root [`Configuration`](Configuration.md)._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the long to get.
def | `long` | The default value to return if the path is not found or is not a long.

Returns | Description
--- | --- 
`long` | Requested long.


##### <a id='getlong'></a>public  function __getLong__(path)

_Gets the requested long by path. <p> If the long does not exist but a default value has been specified, this will return the default value. If the long does not exist and no default value was specified, this will return 0._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the long to get.

Returns | Description
--- | --- 
`long` | Requested long.


##### <a id='isdouble'></a>public  function __isDouble__(path)

_Checks if the specified path is a double. <p> If the path exists but is not a double, this will return false. If the path does not exist, this will return false. If the path does not exist but a default value has been specified, this will check if that default value is a double and return appropriately._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the double to check.

Returns | Description
--- | --- 
`boolean` | Whether or not the specified path is a double.


##### <a id='isboolean'></a>public  function __isBoolean__(path)

_Checks if the specified path is a boolean. <p> If the path exists but is not a boolean, this will return false. If the path does not exist, this will return false. If the path does not exist but a default value has been specified, this will check if that default value is a boolean and return appropriately._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the boolean to check.

Returns | Description
--- | --- 
`boolean` | Whether or not the specified path is a boolean.


##### <a id='getlonglist'></a>public  function __getLongList__(path)

_Gets the requested List of Long by path. <p> If the List does not exist but a default value has been specified, this will return the default value. If the List does not exist and no default value was specified, this will return an empty List. <p> This method will attempt to cast any values into a Long if possible, but may miss any values out if they are not compatible._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the List to get.

Returns | Description
--- | --- 
`List<Long>` | Requested List of Long.


##### <a id='isint'></a>public  function __isInt__(path)

_Checks if the specified path is an int. <p> If the path exists but is not a int, this will return false. If the path does not exist, this will return false. If the path does not exist but a default value has been specified, this will check if that default value is a int and return appropriately._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the int to check.

Returns | Description
--- | --- 
`boolean` | Whether or not the specified path is an int.


##### <a id='getshortlist'></a>public  function __getShortList__(path)

_Gets the requested List of Short by path. <p> If the List does not exist but a default value has been specified, this will return the default value. If the List does not exist and no default value was specified, this will return an empty List. <p> This method will attempt to cast any values into a Short if possible, but may miss any values out if they are not compatible._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the List to get.

Returns | Description
--- | --- 
`List<Short>` | Requested List of Short.


##### <a id='getvector'></a>public  function __getVector__(path)

_Gets the requested Vector by path. <p> If the Vector does not exist but a default value has been specified, this will return the default value. If the Vector does not exist and no default value was specified, this will return null._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the Vector to get.

Returns | Description
--- | --- 
`Vector` | Requested Vector.


##### <a id='getvector'></a>public  function __getVector__(path, def)

_Gets the requested `Vector` by path, returning a default value if not found. <p> If the Vector does not exist then the specified default value will returned regardless of if a default has been identified in the root [`Configuration`](Configuration.md)._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the Vector to get.
def | `Vector` | The default value to return if the path is not found or is not a Vector.

Returns | Description
--- | --- 
`Vector` | Requested Vector.


##### <a id='islist'></a>public  function __isList__(path)

_Checks if the specified path is a List. <p> If the path exists but is not a List, this will return false. If the path does not exist, this will return false. If the path does not exist but a default value has been specified, this will check if that default value is a List and return appropriately._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the List to check.

Returns | Description
--- | --- 
`boolean` | Whether or not the specified path is a List.


##### <a id='getofflineplayer'></a>public  function __getOfflinePlayer__(path)

_Gets the requested OfflinePlayer by path. <p> If the OfflinePlayer does not exist but a default value has been specified, this will return the default value. If the OfflinePlayer does not exist and no default value was specified, this will return null._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the OfflinePlayer to get.

Returns | Description
--- | --- 
`OfflinePlayer` | Requested OfflinePlayer.


##### <a id='getofflineplayer'></a>public  function __getOfflinePlayer__(path, def)

_Gets the requested `OfflinePlayer` by path, returning a default value if not found. <p> If the OfflinePlayer does not exist then the specified default value will returned regardless of if a default has been identified in the root [`Configuration`](Configuration.md)._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the OfflinePlayer to get.
def | `OfflinePlayer` | The default value to return if the path is not found or is not an OfflinePlayer.

Returns | Description
--- | --- 
`OfflinePlayer` | Requested OfflinePlayer.


##### <a id='isconfigurationsection'></a>public  function __isConfigurationSection__(path)

_Checks if the specified path is a ConfigurationSection. <p> If the path exists but is not a ConfigurationSection, this will return false. If the path does not exist, this will return false. If the path does not exist but a default value has been specified, this will check if that default value is a ConfigurationSection and return appropriately._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the ConfigurationSection to check.

Returns | Description
--- | --- 
`boolean` | Whether or not the specified path is a ConfigurationSection.


##### <a id='getstring'></a>public  function __getString__(path, def)

_Gets the requested String by path, returning a default value if not found. <p> If the String does not exist then the specified default value will returned regardless of if a default has been identified in the root [`Configuration`](Configuration.md)._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the String to get.
def | `String` | The default value to return if the path is not found or is not a String.

Returns | Description
--- | --- 
`String` | Requested String.


##### <a id='getstring'></a>public  function __getString__(path)

_Gets the requested String by path. <p> If the String does not exist but a default value has been specified, this will return the default value. If the String does not exist and no default value was specified, this will return null._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the String to get.

Returns | Description
--- | --- 
`String` | Requested String.


##### <a id='isitemstack'></a>public  function __isItemStack__(path)

_Checks if the specified path is an ItemStack. <p> If the path exists but is not a ItemStack, this will return false. If the path does not exist, this will return false. If the path does not exist but a default value has been specified, this will check if that default value is a ItemStack and return appropriately._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the ItemStack to check.

Returns | Description
--- | --- 
`boolean` | Whether or not the specified path is an ItemStack.


##### <a id='iscolor'></a>public  function __isColor__(path)

_Checks if the specified path is a Color. <p> If the path exists but is not a Color, this will return false. If the path does not exist, this will return false. If the path does not exist but a default value has been specified, this will check if that default value is a Color and return appropriately._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the Color to check.

Returns | Description
--- | --- 
`boolean` | Whether or not the specified path is a Color.


##### <a id='isofflineplayer'></a>public  function __isOfflinePlayer__(path)

_Checks if the specified path is an OfflinePlayer. <p> If the path exists but is not a OfflinePlayer, this will return false. If the path does not exist, this will return false. If the path does not exist but a default value has been specified, this will check if that default value is a OfflinePlayer and return appropriately._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the OfflinePlayer to check.

Returns | Description
--- | --- 
`boolean` | Whether or not the specified path is an OfflinePlayer.


##### <a id='isset'></a>public  function __isSet__(path)

_Checks if this [`ConfigurationSection`](ConfigurationSection.md) has a value set for the given path. <p> If the value for the requested path does not exist but a default value has been specified, this will still return false._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path to check for existence.

Returns | Description
--- | --- 
`boolean` | True if this section contains the requested path, regardless of having a default.


##### <a id='isstring'></a>public  function __isString__(path)

_Checks if the specified path is a String. <p> If the path exists but is not a String, this will return false. If the path does not exist, this will return false. If the path does not exist but a default value has been specified, this will check if that default value is a String and return appropriately._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the String to check.

Returns | Description
--- | --- 
`boolean` | Whether or not the specified path is a String.


##### <a id='set'></a>public  function __set__(path, value)

_Sets the specified path to the given value. <p> If value is null, the entry will be removed. Any existing entry will be replaced, regardless of what the new value is. <p> Some implementations may have limitations on what you may store. See their individual javadocs for details. No implementations should allow you to store [`Configuration`](Configuration.md)s or [`ConfigurationSection`](ConfigurationSection.md)s, please use `#createSection(String)` for that._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path of the object to set.
value | `Object` | New value to set the path to.

Returns | 
--- | 
`void` |


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

