## DefaultPluginManager __class__

>io.wolfscript.plugin.DefaultPluginManager
>Implements [`PluginManager`](PluginManager.md)

---

### Class Overview

{@inheritDoc}

Method | Type   
--- | :--- 
new __DefaultPluginManager__() <br> _DefaultPluginManager constructor_ | _constructor_
 readonly property __Plugins__ <br> _Get: {@inheritDoc}_ | `Collection<Plugin>`
 readonly property __PluginNames__ <br> _Get: {@inheritDoc}_ | `Collection<String>`
 readonly property __PluginDescriptors__ <br> _Get: {@inheritDoc}_ | `Collection<PluginDescriptor>`
 function __accept__(pathname) <br> _accept method_ | `boolean`
 function __disablePlugin__(name) <br> _{@inheritDoc}_ | `boolean`
 function __disableAllPlugins__(log) <br> _{@inheritDoc}_ | `void`
 function __disableAllPlugins__() <br> _{@inheritDoc}_ | `void`
 function __enableEarlyPlugins__() <br> _enableEarlyPlugins method_ | `void`
 function __enableLatePlugins__() <br> _{@inheritDoc}_ | `void`
 function __getPlugin__(name) <br> _{@inheritDoc}_ | `Plugin`
 function __getPluginDescriptor__(plugin) <br> _{@inheritDoc}_ | [`PluginDescriptor`](PluginDescriptor.md)
 function __getPluginDescriptor__(plugin) <br> _{@inheritDoc}_ | [`PluginDescriptor`](PluginDescriptor.md)
 function __scanForPlugins__() <br> _{@inheritDoc}_ | `void`



---

### Public Constructors for [`DefaultPluginManager`](DefaultPluginManager.md)

##### <a id='defaultpluginmanager'></a>new __DefaultPluginManager__() 

_DefaultPluginManager constructor_


---

### Public Properties for [`DefaultPluginManager`](DefaultPluginManager.md)

##### <a id='plugins'></a>public  readonly property __Plugins__

_Get: {@inheritDoc}_

Get | 
--- | 
`Collection<Plugin>` |



##### <a id='pluginnames'></a>public  readonly property __PluginNames__

_Get: {@inheritDoc}_

Get | 
--- | 
`Collection<String>` |



##### <a id='plugindescriptors'></a>public  readonly property __PluginDescriptors__

_Get: {@inheritDoc}_

Get | 
--- | 
`Collection<PluginDescriptor>` |



---

### Public Methods for [`DefaultPluginManager`](DefaultPluginManager.md)

##### <a id='accept'></a>public  function __accept__(pathname)

_accept method_

Argument | Type | Description  
--- | --- | --- 
pathname | `File` | pathname argument

Returns | 
--- | 
`boolean` |


##### <a id='disableplugin'></a>public  function __disablePlugin__(name)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

Returns | 
--- | 
`boolean` |


##### <a id='disableallplugins'></a>public  function __disableAllPlugins__(log)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
log | `Logger` | log argument

Returns | 
--- | 
`void` |


##### <a id='disableallplugins'></a>public  function __disableAllPlugins__()

_{@inheritDoc}_

Returns | 
--- | 
`void` |


##### <a id='enableearlyplugins'></a>public  function __enableEarlyPlugins__()

_enableEarlyPlugins method_

Returns | 
--- | 
`void` |


##### <a id='enablelateplugins'></a>public  function __enableLatePlugins__()

_{@inheritDoc} /
    @Override
    public boolean enablePlugin(String name) throws PluginLoadFailedException {
        PluginDescriptor descriptor = getPluginDescriptor(name);
        if (descriptor == null) {
            return false;
        }
        if (descriptor.getCurrentState() == PluginState.ENABLED) {
            return true;
        }
        Set<String> deps = dependencies.getDependencies(descriptor.getName());
        for (String s : deps) {
            PluginDescriptor dep = getPluginDescriptor(s);
            if (dep == null) {
                log.warn("Dependency " + s + " of " + descriptor.getName() + " is unsatisfied; cannot enable.");
                return false;
            }
            if (dep.getCurrentState() == PluginState.ENABLED) {
                continue;
            }
            if (!enablePlugin(s)) {
                log.warn("Dependency " + s + " of " + descriptor.getName() + " cannot be enabled; cannot enable.");
                return false;
            }
        }
        if (descriptor.getCurrentState() == PluginState.KNOWN) {
            descriptor.getPluginLifecycle().load();
        }
        log.info("Enabling plugin " + name);
        boolean enabled = descriptor.getPluginLifecycle().enable();
        if (!enabled) {
            log.warn("Unable to enable plugin " + descriptor.getName() + ". Will disable it.");
            disablePlugin(name);
            return false;
        }
        Wolf.hooks().callHook(new PluginEnable(descriptor.getPlugin()));
        Set<String> rdeps = dependencies.getDependants(descriptor.getName());
        for (String s : rdeps) {
            PluginDescriptor dep = getPluginDescriptor(s);
            if (dep == null) {
                //Don't really care... although, shouldn't be possible
                continue;
            }
            if (dep.getCurrentState() == PluginState.ENABLED) {
                continue;
            }
            if (!enablePlugin(s)) {
                log.warn(s + " (dependent on " + descriptor.getName() + ") could not be enabled");
            }
        }
        return true;
    }

    /** {@inheritDoc}_

Returns | 
--- | 
`void` |


##### <a id='getplugin'></a>public  function __getPlugin__(name)

_{@inheritDoc} /
    @Override
    public boolean reloadPlugin(String name) throws PluginLoadFailedException, InvalidPluginException {
        PluginDescriptor descriptor = getPluginDescriptor(name);
        if (descriptor != null) {
            disablePlugin(name);
            log.info("Unloading plugin " + name);
            descriptor.getPluginLifecycle().unload();
            descriptor.reloadInf();
            updateDependencies(descriptor);
            //Call enable directly instead of enable() to avoid recursing
            log.info("Loading plugin " + name);
            descriptor.getPluginLifecycle().load();
            log.info("Enabling plugin " + name);
            boolean enabled = descriptor.getPluginLifecycle().enable();
            if (!enabled) {
                log.warn("Failed to enable " + name + " after reloading");
                return false;
            }
            Set<String> rdeps = dependencies.getDependants(descriptor.getName());
            for (String s : rdeps) {
                PluginDescriptor dep = getPluginDescriptor(s);
                if (dep == null) {
                    //Don't really care... although, shouldn't be possible
                    continue;
                }
                if (dep.getCurrentState() == PluginState.KNOWN) {
                    continue;
                }
                if (!reloadPlugin(s)) {
                    log.warn(s + " (dependent on " + descriptor.getName() + ") could not be reloaded...");
                }
            }
            return true;
        }
        return false;
    }

    /** {@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

Returns | 
--- | 
`Plugin` |


##### <a id='getplugindescriptor'></a>public  function __getPluginDescriptor__(plugin)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
plugin | `Plugin` | plugin argument

Returns | 
--- | 
[`PluginDescriptor`](PluginDescriptor.md) |


##### <a id='getplugindescriptor'></a>public  function __getPluginDescriptor__(plugin)

_{@inheritDoc}_

Argument | Type | Description  
--- | --- | --- 
plugin | `String` | plugin argument

Returns | 
--- | 
[`PluginDescriptor`](PluginDescriptor.md) |


##### <a id='scanforplugins'></a>public  function __scanForPlugins__()

_{@inheritDoc}_

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

