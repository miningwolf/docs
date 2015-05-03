## Configuration __interface__

>io.wolfscript.configuration.Configuration
>Extends [`ConfigurationSection`](ConfigurationSection.md)

---

### Interface Overview

Represents a source of configurable options and settings

Method | Type   
--- | :--- 
 function __options__() <br> _Sets the default value of the given path as provided._ | [`ConfigurationOptions`](ConfigurationOptions.md)
 |
__Inherited items from [`ConfigurationSection`](ConfigurationSection.md)__ |
 function __addDefault__(path, value) <br> _Gets a set containing all keys in this section._ | `void`





---


### Public Methods for [`Configuration`](Configuration.md)

##### <a id='options'></a>public  function __options__()

_Sets the default value of the given path as provided. <p> If no source [`Configuration`](Configuration.md) was provided as a default collection, then a new [`MemoryConfiguration`](MemoryConfiguration.md) will be created to hold the new default value. <p> If value is null, the value will be removed from the default Configuration source._

Returns | Description
--- | --- 
[`ConfigurationOptions`](ConfigurationOptions.md) | Configuration source for default values, or null if none exist. /
    public Configuration getDefaults();

    /** Gets the [`ConfigurationOptions`](ConfigurationOptions.md) for this [`Configuration`](Configuration.md). <p> All setters through this method are chainable.


---

### Public Methods for [`ConfigurationSection`](ConfigurationSection.md)

##### <a id='adddefault'></a>public  function __addDefault__(path, value)

_Gets a set containing all keys in this section. <p> If deep is set to true, then this will contain all the keys within any child [`ConfigurationSection`](ConfigurationSection.md)s (and their children, etc). These will be in a valid path notation for you to use. <p> If deep is set to false, then this will contain only the keys of any direct children, and not their own children._

Argument | Type | Description  
--- | --- | --- 
path | `String` | Path to check for existence.
value | `Object` | New value to set the path to. /
    public void set(String path, Object value);

    /** Creates an empty [`ConfigurationSection`](ConfigurationSection.md) at the specified path. <p> Any value that was previously set at this path will be overwritten. If the previous value was itself a [`ConfigurationSection`](ConfigurationSection.md), it will be orphaned.

Returns | Description
--- | --- 
`void` | Set of keys contained within this ConfigurationSection. /
    public Set<String> getKeys(boolean deep);

    /** Gets a Map containing all keys and their values for this section. <p> If deep is set to true, then this will contain all the keys and values within any child [`ConfigurationSection`](ConfigurationSection.md)s (and their children, etc). These keys will be in a valid path notation for you to use. <p> If deep is set to false, then this will contain only the keys and values of any direct children, and not their own children.


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

