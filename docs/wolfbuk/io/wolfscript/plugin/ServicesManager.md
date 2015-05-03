## ServicesManager __interface__

>io.wolfscript.plugin.ServicesManager

---

### Interface Overview

Manages services and service providers. Services are an interface specifying a list of methods that a provider must implement. Providers are implementations of these services. A provider can be queried from the services manager in order to use a service (if one is available). If multiple plugins register a service, then the service with the highest priority takes precedence.

Method | Type   
--- | :--- 
 readonly property __KnownServices__ <br> _Get: Register a provider of a service._ | `Collection<Class<?>>`



---


### Public Properties for [`ServicesManager`](ServicesManager.md)

##### <a id='knownservices'></a>public  readonly property __KnownServices__

_Get: Register a provider of a service._

Get | Description
--- | --- 
`Collection<Class<?>>` | provider or null /
    public <T> T load(Class<T> service);

    /** Queries for a provider registration. This may return if no provider has been registered for a service.



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

