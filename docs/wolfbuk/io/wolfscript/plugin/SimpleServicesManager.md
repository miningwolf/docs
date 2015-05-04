## SimpleServicesManager __class__

>io.wolfscript.plugin.SimpleServicesManager
>Implements [`ServicesManager`](ServicesManager.md)

---

### Class Overview

A simple services manager.

Method | Type   
--- | :--- 
 readonly property __KnownServices__ <br> _Get: Get a list of known services. A service is known if it has registered_ | `Set<Class<?>>`
 function __getRegistrations__(plugin) <br> _Get registrations of providers for a plugin._ | `List<RegisteredServiceProvider<?>>`
 function __unregister__(provider) <br> _Unregister a particular provider for a particular service._ | `void`
 function __unregister__(provider) <br> _Unregister a particular provider._ | `void`
 function __unregisterAll__(plugin) <br> _Unregister all the providers registered by a particular plugin._ | `void`



---


### Public Properties for [`SimpleServicesManager`](SimpleServicesManager.md)

##### <a id='knownservices'></a>public  readonly property __KnownServices__

_Get: Get a list of known services. A service is known if it has registered providers for it._

Get | Description
--- | --- 
`Set<Class<?>>` | a copy of the set of known services



---

### Public Methods for [`SimpleServicesManager`](SimpleServicesManager.md)

##### <a id='getregistrations'></a>public  function __getRegistrations__(plugin)

_Get registrations of providers for a plugin._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](Plugin.md) | The plugin

Returns | Description
--- | --- 
`List<RegisteredServiceProvider<?>>` | provider registration or null


##### <a id='unregister'></a>public  function __unregister__(provider)

_Unregister a particular provider for a particular service._

Argument | Type | Description  
--- | --- | --- 
provider | `Object` | The service provider implementation

Returns | 
--- | 
`void` |


##### <a id='unregister'></a>public  function __unregister__(provider)

_Unregister a particular provider._

Argument | Type | Description  
--- | --- | --- 
provider | `Object` | The service provider implementation

Returns | 
--- | 
`void` |


##### <a id='unregisterall'></a>public  function __unregisterAll__(plugin)

_Unregister all the providers registered by a particular plugin._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](Plugin.md) | The plugin

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

