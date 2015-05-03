## SimpleServicesManager __class__

>io.wolfscript.plugin.SimpleServicesManager
>Implements [`ServicesManager`](ServicesManager.md)

---

### Class Overview

A simple services manager.

Method | Type   
--- | :--- 
 readonly property __KnownServices__ <br> _Get: Map of providers._ | `Set<Class<?>>`



---


### Public Properties for [`SimpleServicesManager`](SimpleServicesManager.md)

##### <a id='knownservices'></a>public  readonly property __KnownServices__

_Get: Map of providers. /
    private final Map<Class<?>, List<RegisteredServiceProvider<?>>> providers = new HashMap<Class<?>, List<RegisteredServiceProvider<?>>>();

    /** Register a provider of a service._

Get | Description
--- | --- 
`Set<Class<?>>` | provider or null /
    public <T> T load(Class<T> service) {
        synchronized (providers) {
            List<RegisteredServiceProvider<?>> registered = providers.get(service);

            if (registered == null) {
                return null;
            }

            // This should not be null!
            return service.cast(registered.get(0).getProvider());
        }
    }

    /** Queries for a provider registration. This may return if no provider has been registered for a service.



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

