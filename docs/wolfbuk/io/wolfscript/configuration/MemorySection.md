## MemorySection __class__

>io.wolfscript.configuration.MemorySection
>Implements [`ConfigurationSection`](ConfigurationSection.md)

---

### Class Overview

A type of [`ConfigurationSection`](ConfigurationSection.md) that is stored in memory.

Method | Type   
--- | :--- 
static function __createPath__(section, key, relativeTo) <br> _Creates an empty MemorySection for use as a root [`Configuration`](Configuration.md)_ | `String`
 function __toString__() <br> _toString method_ | `String`



---


### Public Methods for [`MemorySection`](MemorySection.md)

##### <a id='createpath'></a>public static function __createPath__(section, key, relativeTo)

_Creates an empty MemorySection for use as a root [`Configuration`](Configuration.md) section. <p> Note that calling this without being yourself a [`Configuration`](Configuration.md) will throw an exception!_

Argument | Type | Description  
--- | --- | --- 
section | [`ConfigurationSection`](ConfigurationSection.md) | Section to create a path for.
key | `String` | Name of the specified section.
relativeTo | [`ConfigurationSection`](ConfigurationSection.md) | Section to create the path relative to.

Returns | Description
--- | --- 
`String` | Full path of the section from its root. /
    public static String createPath(ConfigurationSection section, String key) {
        return createPath(section, key, (section == null) ? null : section.getRoot());
    }

    /** Creates a relative path to the given [`ConfigurationSection`](ConfigurationSection.md) from the given relative section. <p> You may use this method for any given [`ConfigurationSection`](ConfigurationSection.md), not only [`MemorySection`](MemorySection.md).


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

