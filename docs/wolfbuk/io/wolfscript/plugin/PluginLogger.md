## PluginLogger __class__

>io.wolfscript.plugin.PluginLogger
>Extends `Logger`

---

### Class Overview

The PluginLogger class is a modified `Logger` that prepends all logging calls with the name of the plugin doing the logging. The API for PluginLogger is exactly the same as `Logger`.

Method | Type   
--- | :--- 
new __PluginLogger__(context) <br> _Creates a new PluginLogger that extracts the name from a plugin._ | _constructor_
 function __log__(logRecord) <br> _log method_ | `void`



---

### Public Constructors for [`PluginLogger`](PluginLogger.md)

##### <a id='pluginlogger'></a>new __PluginLogger__(context) 

_Creates a new PluginLogger that extracts the name from a plugin._

Argument | Type | Description  
--- | --- | --- 
context | [`Plugin`](Plugin.md) | A reference to the plugin

---

### Public Methods for [`PluginLogger`](PluginLogger.md)

##### <a id='log'></a>public  function __log__(logRecord)

_log method_

Argument | Type | Description  
--- | --- | --- 
logRecord | `LogRecord` | logRecord argument

Returns | 
--- | 
`void` |


---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

