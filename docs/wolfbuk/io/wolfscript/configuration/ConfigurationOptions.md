## ConfigurationOptions __class__

>io.wolfscript.configuration.ConfigurationOptions

---

### Class Overview

Various settings for controlling the input and output of a [`Configuration`](Configuration.md)

Method | Type   
--- | :--- 
 function __copyDefaults__(value) <br> _Returns the [`Configuration`](Configuration.md) that this object is responsible for._ | [`ConfigurationOptions`](ConfigurationOptions.md)



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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

