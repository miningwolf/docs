## ConfigurationOptions __class__

>io.wolfscript.configuration.ConfigurationOptions

---

### Class Overview

Various settings for controlling the input and output of a [`Configuration`](Configuration.md)

Method | Type   
--- | :--- 
 function __configuration__() <br> _Returns the [`Configuration`](Configuration.md) that this object is responsible for._ | [`Configuration`](Configuration.md)
 function __copyDefaults__() <br> _Checks if the [`Configuration`](Configuration.md) should copy values from its default_ | `boolean`
 function __copyDefaults__(value) <br> _Sets if the [`Configuration`](Configuration.md) should copy values from its default_ | [`ConfigurationOptions`](ConfigurationOptions.md)
 function __pathSeparator__() <br> _Gets the char that will be used to separate {@link_ | `char`
 function __pathSeparator__(value) <br> _Sets the char that will be used to separate {@link_ | [`ConfigurationOptions`](ConfigurationOptions.md)



---


### Public Methods for [`ConfigurationOptions`](ConfigurationOptions.md)

##### <a id='configuration'></a>public  function __configuration__()

_Returns the [`Configuration`](Configuration.md) that this object is responsible for._

Returns | Description
--- | --- 
[`Configuration`](Configuration.md) | Parent configuration


##### <a id='copydefaults'></a>public  function __copyDefaults__()

_Checks if the [`Configuration`](Configuration.md) should copy values from its default [`Configuration`](Configuration.md) directly. <p> If this is true, all values in the default Configuration will be directly copied, making it impossible to distinguish between values that were set and values that are provided by default. As a result, `ConfigurationSection#contains(String)` will always return the same value as `ConfigurationSection#isSet(String)`. The default value is false._

Returns | Description
--- | --- 
`boolean` | Whether or not defaults are directly copied


##### <a id='copydefaults'></a>public  function __copyDefaults__(value)

_Sets if the [`Configuration`](Configuration.md) should copy values from its default [`Configuration`](Configuration.md) directly. <p> If this is true, all values in the default Configuration will be directly copied, making it impossible to distinguish between values that were set and values that are provided by default. As a result, `ConfigurationSection#contains(String)` will always return the same value as `ConfigurationSection#isSet(String)`. The default value is false._

Argument | Type | Description  
--- | --- | --- 
value | `boolean` | Whether or not defaults are directly copied

Returns | Description
--- | --- 
[`ConfigurationOptions`](ConfigurationOptions.md) | This object, for chaining


##### <a id='pathseparator'></a>public  function __pathSeparator__()

_Gets the char that will be used to separate [`ConfigurationSection`](ConfigurationSection.md)s <p> This value does not affect how the [`Configuration`](Configuration.md) is stored, only in how you access the data. The default value is '.'._

Returns | Description
--- | --- 
`char` | Path separator


##### <a id='pathseparator'></a>public  function __pathSeparator__(value)

_Sets the char that will be used to separate [`ConfigurationSection`](ConfigurationSection.md)s <p> This value does not affect how the [`Configuration`](Configuration.md) is stored, only in how you access the data. The default value is '.'._

Argument | Type | Description  
--- | --- | --- 
value | `char` | Path separator

Returns | Description
--- | --- 
[`ConfigurationOptions`](ConfigurationOptions.md) | This object, for chaining


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

