## YamlConfigurationOptions __class__

>io.wolfscript.configuration.file.YamlConfigurationOptions
>Extends [`FileConfigurationOptions`](FileConfigurationOptions.md)

---

### Class Overview

Various settings for controlling the input and output of a [`YamlConfiguration`](YamlConfiguration.md)

Method | Type   
--- | :--- 
 function __configuration__() <br> _configuration method_ | [`YamlConfiguration`](YamlConfiguration.md)
 function __copyDefaults__(value) <br> _copyDefaults method_ | [`YamlConfigurationOptions`](YamlConfigurationOptions.md)
 function __copyHeader__(value) <br> _copyHeader method_ | [`YamlConfigurationOptions`](YamlConfigurationOptions.md)
 function __header__(value) <br> _header method_ | [`YamlConfigurationOptions`](YamlConfigurationOptions.md)
 function __indent__(value) <br> _Gets how much spaces should be used to indent each line._ | [`YamlConfigurationOptions`](YamlConfigurationOptions.md)
 function __pathSeparator__(value) <br> _pathSeparator method_ | [`YamlConfigurationOptions`](YamlConfigurationOptions.md)
 |
__Inherited items from [`FileConfigurationOptions`](FileConfigurationOptions.md)__ |
 function __configuration__() <br> _configuration method_ | [`FileConfiguration`](FileConfiguration.md)
 function __copyDefaults__(value) <br> _copyDefaults method_ | [`FileConfigurationOptions`](FileConfigurationOptions.md)
 function __copyHeader__(value) <br> _Gets the header that will be applied to the top of the saved output._ | [`FileConfigurationOptions`](FileConfigurationOptions.md)
 function __pathSeparator__(value) <br> _pathSeparator method_ | [`FileConfigurationOptions`](FileConfigurationOptions.md)





---


### Public Methods for [`YamlConfigurationOptions`](YamlConfigurationOptions.md)

##### <a id='configuration'></a>public  function __configuration__()

_configuration method_

Returns | 
--- | 
[`YamlConfiguration`](YamlConfiguration.md) |


##### <a id='copydefaults'></a>public  function __copyDefaults__(value)

_copyDefaults method_

Argument | Type | Description  
--- | --- | --- 
value | `boolean` | value argument

Returns | 
--- | 
[`YamlConfigurationOptions`](YamlConfigurationOptions.md) |


##### <a id='copyheader'></a>public  function __copyHeader__(value)

_copyHeader method_

Argument | Type | Description  
--- | --- | --- 
value | `boolean` | value argument

Returns | 
--- | 
[`YamlConfigurationOptions`](YamlConfigurationOptions.md) |


##### <a id='header'></a>public  function __header__(value)

_header method_

Argument | Type | Description  
--- | --- | --- 
value | `String` | value argument

Returns | 
--- | 
[`YamlConfigurationOptions`](YamlConfigurationOptions.md) |


##### <a id='indent'></a>public  function __indent__(value)

_Gets how much spaces should be used to indent each line. <p> The minimum value this may be is 2, and the maximum is 9._

Argument | Type | Description  
--- | --- | --- 
value | `int` | New indent

Returns | Description
--- | --- 
[`YamlConfigurationOptions`](YamlConfigurationOptions.md) | How much to indent by /
    public int indent() {
        return indent;
    }

    /** Sets how much spaces should be used to indent each line. <p> The minimum value this may be is 2, and the maximum is 9.


##### <a id='pathseparator'></a>public  function __pathSeparator__(value)

_pathSeparator method_

Argument | Type | Description  
--- | --- | --- 
value | `char` | value argument

Returns | 
--- | 
[`YamlConfigurationOptions`](YamlConfigurationOptions.md) |


---

### Public Methods for [`FileConfigurationOptions`](FileConfigurationOptions.md)

##### <a id='configuration'></a>public  function __configuration__()

_configuration method_

Returns | 
--- | 
[`FileConfiguration`](FileConfiguration.md) |


##### <a id='copydefaults'></a>public  function __copyDefaults__(value)

_copyDefaults method_

Argument | Type | Description  
--- | --- | --- 
value | `boolean` | value argument

Returns | 
--- | 
[`FileConfigurationOptions`](FileConfigurationOptions.md) |


##### <a id='copyheader'></a>public  function __copyHeader__(value)

_Gets the header that will be applied to the top of the saved output. <p> This header will be commented out and applied directly at the top of the generated output of the [`FileConfiguration`](FileConfiguration.md). It is not required to include a newline at the end of the header as it will automatically be applied, but you may include one if you wish for extra spacing. <p> Null is a valid value which will indicate that no header is to be applied. The default value is null._

Argument | Type | Description  
--- | --- | --- 
value | `boolean` | New header

Returns | Description
--- | --- 
[`FileConfigurationOptions`](FileConfigurationOptions.md) | Header /
    public String header() {
        return header;
    }

    /** Sets the header that will be applied to the top of the saved output. <p> This header will be commented out and applied directly at the top of the generated output of the [`FileConfiguration`](FileConfiguration.md). It is not required to include a newline at the end of the header as it will automatically be applied, but you may include one if you wish for extra spacing. <p> Null is a valid value which will indicate that no header is to be applied.


##### <a id='pathseparator'></a>public  function __pathSeparator__(value)

_pathSeparator method_

Argument | Type | Description  
--- | --- | --- 
value | `char` | value argument

Returns | 
--- | 
[`FileConfigurationOptions`](FileConfigurationOptions.md) |


---
---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

