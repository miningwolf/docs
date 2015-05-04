## ServicesManager __interface__

>io.wolfscript.plugin.ServicesManager

---

### Interface Overview

Manages services and service providers. Services are an interface specifying a list of methods that a provider must implement. Providers are implementations of these services. A provider can be queried from the services manager in order to use a service (if one is available). If multiple plugins register a service, then the service with the highest priority takes precedence.

Method | Type   
--- | :--- 
 readonly property __KnownServices__ <br> _Get: Get registrations of providers for a service. The returned list is_ | `Collection<Class<?>>`
 function __getRegistrations__(plugin) <br> _Queries for a provider. This may return if no provider has been_ | `List<RegisteredServiceProvider<?>>`
 function __unregister__(provider) <br> _Unregister a particular provider for a particular service._ | `void`
 function __unregister__(provider) <br> _Unregister a particular provider._ | `void`
 function __unregisterAll__(plugin) <br> _Register a provider of a service._ | `void`



---


### Public Properties for [`ServicesManager`](ServicesManager.md)

##### <a id='knownservices'></a>public  readonly property __KnownServices__

_Get: Get registrations of providers for a service. The returned list is unmodifiable._

Get | Description
--- | --- 
`Collection<Class<?>>` | list of registrations /
    public <T> Collection<RegisteredServiceProvider<T>> getRegistrations(Class<T> service);

    /** Get a list of known services. A service is known if it has registered providers for it.



---

### Public Methods for [`ServicesManager`](ServicesManager.md)

##### <a id='getregistrations'></a>public  function __getRegistrations__(plugin)

_Queries for a provider. This may return if no provider has been registered for a service. The highest priority provider is returned._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](Plugin.md) | The plugin

Returns | Description
--- | --- 
`List<RegisteredServiceProvider<?>>` | provider or null /
    public <T> T load(Class<T> service);

    /** Queries for a provider registration. This may return if no provider has been registered for a service.


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

_Register a provider of a service._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](Plugin.md) | plugin with the provider

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

