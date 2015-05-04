## SimpleServicesManager __class__

>io.wolfscript.plugin.SimpleServicesManager
>Implements [`ServicesManager`](ServicesManager.md)

---

### Class Overview

A simple services manager.

Method | Type   
--- | :--- 
 readonly property __KnownServices__ <br> _Get: Get registrations of providers for a service. The returned list is_ | `Set<Class<?>>`
 function __getRegistrations__(plugin) <br> _Queries for a provider. This may return if no provider has been_ | `List<RegisteredServiceProvider<?>>`
 function __unregister__(provider) <br> _Unregister a particular provider for a particular service._ | `void`
 function __unregister__(provider) <br> _Unregister a particular provider._ | `void`
 function __unregisterAll__(plugin) <br> _Map of providers._ | `void`



---


### Public Properties for [`SimpleServicesManager`](SimpleServicesManager.md)

##### <a id='knownservices'></a>public  readonly property __KnownServices__

_Get: Get registrations of providers for a service. The returned list is an unmodifiable copy._

Get | Description
--- | --- 
`Set<Class<?>>` | a copy of the list of registrations /
    @SuppressWarnings("unchecked")
    public <T> List<RegisteredServiceProvider<T>> getRegistrations(Class<T> service) {
        ImmutableList.Builder<RegisteredServiceProvider<T>> ret;
        synchronized (providers) {
            List<RegisteredServiceProvider<?>> registered = providers.get(service);

            if (registered == null) {
                return ImmutableList.<RegisteredServiceProvider<T>>of();
            }

            ret = ImmutableList.<RegisteredServiceProvider<T>>builder();

            for (RegisteredServiceProvider<?> provider : registered) {
                ret.add((RegisteredServiceProvider<T>) provider);
            }

        }
        return ret.build();
    }

    /** Get a list of known services. A service is known if it has registered providers for it.



---

### Public Methods for [`SimpleServicesManager`](SimpleServicesManager.md)

##### <a id='getregistrations'></a>public  function __getRegistrations__(plugin)

_Queries for a provider. This may return if no provider has been registered for a service. The highest priority provider is returned._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](Plugin.md) | The plugin

Returns | Description
--- | --- 
`List<RegisteredServiceProvider<?>>` | provider or null /
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

_Map of providers. /
    private final Map<Class<?>, List<RegisteredServiceProvider<?>>> providers = new HashMap<Class<?>, List<RegisteredServiceProvider<?>>>();

    /** Register a provider of a service._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](Plugin.md) | plugin with the provider

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

