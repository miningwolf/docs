## MemoryConfigurationOptions __class__

>io.wolfscript.configuration.MemoryConfigurationOptions
>Extends [`ConfigurationOptions`](ConfigurationOptions.md)

---

### Class Overview

Various settings for controlling the input and output of a [`MemoryConfiguration`](MemoryConfiguration.md)

Method | Type   
--- | :--- 
 function __configuration__() <br> _configuration method_ | [`MemoryConfiguration`](MemoryConfiguration.md)
 function __copyDefaults__(value) <br> _copyDefaults method_ | [`MemoryConfigurationOptions`](MemoryConfigurationOptions.md)
 function __pathSeparator__(value) <br> _pathSeparator method_ | [`MemoryConfigurationOptions`](MemoryConfigurationOptions.md)
 |
__Inherited items from [`ConfigurationOptions`](ConfigurationOptions.md)__ |
 function __copyDefaults__(value) <br> _Returns the [`Configuration`](Configuration.md) that this object is responsible for._ | [`ConfigurationOptions`](ConfigurationOptions.md)





---


### Public Methods for [`MemoryConfigurationOptions`](MemoryConfigurationOptions.md)

##### <a id='configuration'></a>public  function __configuration__()

_configuration method_

Returns | 
--- | 
[`MemoryConfiguration`](MemoryConfiguration.md) |


##### <a id='copydefaults'></a>public  function __copyDefaults__(value)

_copyDefaults method_

Argument | Type | Description  
--- | --- | --- 
value | `boolean` | value argument

Returns | 
--- | 
[`MemoryConfigurationOptions`](MemoryConfigurationOptions.md) |


##### <a id='pathseparator'></a>public  function __pathSeparator__(value)

_pathSeparator method_

Argument | Type | Description  
--- | --- | --- 
value | `char` | value argument

Returns | 
--- | 
[`MemoryConfigurationOptions`](MemoryConfigurationOptions.md) |


---

### Public Methods for [`ConfigurationOptions`](ConfigurationOptions.md)

##### <a id='copydefaults'></a>public  function __copyDefaults__(value)

_Returns the [`Configuration`](Configuration.md) that this object is responsible for._

Argument | Type | Description  
--- | --- | --- 
value | `boolean` | Path separator

Returns | Description
--- | --- 
[`ConfigurationOptions`](ConfigurationOptions.md) | Parent configuration /
    public Configuration configuration() {
        return configuration;
    }

    /** Gets the char that will be used to separate [`ConfigurationSection`](ConfigurationSection.md)s <p> This value does not affect how the [`Configuration`](Configuration.md) is stored, only in how you access the data. The default value is '.'.


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

