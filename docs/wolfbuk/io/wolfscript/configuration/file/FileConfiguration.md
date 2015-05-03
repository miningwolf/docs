## FileConfiguration __class__

>io.wolfscript.configuration.file.FileConfiguration
>Extends [`MemoryConfiguration`](..\MemoryConfiguration.md)

---

### Class Overview

This is a base class for all File based implementations of [`Configuration`](..\Configuration.md)

Method | Type   
--- | :--- 
 function __options__() <br> _options method_ | [`FileConfigurationOptions`](FileConfigurationOptions.md)
 |
__Inherited items from [`MemoryConfiguration`](..\MemoryConfiguration.md)__ |
new __MemoryConfiguration__(defaults) <br> _Creates an empty [`MemoryConfiguration`](..\MemoryConfiguration.md) with no default values._ | _constructor_
  property __Defaults__ <br> _Defaults property_ | [`Configuration`](..\Configuration.md)
 readonly property __Parent__ <br> _Parent property_ | [`ConfigurationSection`](..\ConfigurationSection.md)
 function __addDefault__(path, value) <br> _addDefault method_ | `void`
 function __addDefaults__() <br> _addDefaults method_ | `void`
 function __addDefaults__(defaults) <br> _addDefaults method_ | `void`
 function __options__() <br> _options method_ | [`MemoryConfigurationOptions`](..\MemoryConfigurationOptions.md)
 |
__Inherited items from [`MemorySection`](..\MemorySection.md)__ |
static function __createPath__(section, key, relativeTo) <br> _Creates an empty MemorySection for use as a root [`Configuration`](..\Configuration.md)_ | `String`
 function __toString__() <br> _toString method_ | `String`







---


### Public Methods for [`FileConfiguration`](FileConfiguration.md)

##### <a id='options'></a>public  function __options__()

_options method_

Returns | 
--- | 
[`FileConfigurationOptions`](FileConfigurationOptions.md) |


---

### Public Fields for [`FileConfiguration`](FileConfiguration.md)

##### <a id='system'></a>public static final var __SYSTEM__
_Deprecated: temporary compatibility measure /
    @Deprecated
    public static final boolean UTF8_OVERRIDE;
    /** This value specifies if the system default encoding is unicode, but cannot parse standard ASCII. temporary compatibility measure /
    @Deprecated
    public static final boolean UTF_BIG;
    /** This value specifies if the system supports unicode. temporary compatibility measure_

_This value specified that the system default encoding should be completely ignored, as it cannot handle the ASCII character set, or it is a strict-subset of UTF8 already (plain ASCII)._

>Returns
>  `boolean`

---
### Public Constructors for [`MemoryConfiguration`](..\MemoryConfiguration.md)

##### <a id='memoryconfiguration'></a>new __MemoryConfiguration__(defaults) 

_Creates an empty [`MemoryConfiguration`](..\MemoryConfiguration.md) with no default values. /
    public MemoryConfiguration() {}

    /** Creates an empty [`MemoryConfiguration`](..\MemoryConfiguration.md) using the specified [`Configuration`](..\Configuration.md) as a source for all default values._

Argument | Type | Description  
--- | --- | --- 
defaults | [`Configuration`](..\Configuration.md) | Default value provider

---

### Public Properties for [`MemoryConfiguration`](..\MemoryConfiguration.md)

##### <a id='defaults'></a>public   property __Defaults__

_Defaults property_

Get | 
--- | 
[`Configuration`](..\Configuration.md) |

Set | Type | Description  
--- | --- | --- 
defaults | [`Configuration`](..\Configuration.md) | defaults argument


##### <a id='parent'></a>public  readonly property __Parent__

_Parent property_

Get | 
--- | 
[`ConfigurationSection`](..\ConfigurationSection.md) |



---

### Public Methods for [`MemoryConfiguration`](..\MemoryConfiguration.md)

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
defaults | [`Configuration`](..\Configuration.md) | defaults argument

Returns | 
--- | 
`void` |


##### <a id='options'></a>public  function __options__()

_options method_

Returns | 
--- | 
[`MemoryConfigurationOptions`](..\MemoryConfigurationOptions.md) |


---

### Public Methods for [`MemorySection`](..\MemorySection.md)

##### <a id='createpath'></a>public static function __createPath__(section, key, relativeTo)

_Creates an empty MemorySection for use as a root [`Configuration`](..\Configuration.md) section. <p> Note that calling this without being yourself a [`Configuration`](..\Configuration.md) will throw an exception!_

Argument | Type | Description  
--- | --- | --- 
section | [`ConfigurationSection`](..\ConfigurationSection.md) | Section to create a path for.
key | `String` | Name of the specified section.
relativeTo | [`ConfigurationSection`](..\ConfigurationSection.md) | Section to create the path relative to.

Returns | Description
--- | --- 
`String` | Full path of the section from its root. /
    public static String createPath(ConfigurationSection section, String key) {
        return createPath(section, key, (section == null) ? null : section.getRoot());
    }

    /** Creates a relative path to the given [`ConfigurationSection`](..\ConfigurationSection.md) from the given relative section. <p> You may use this method for any given [`ConfigurationSection`](..\ConfigurationSection.md), not only [`MemorySection`](..\MemorySection.md).


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

