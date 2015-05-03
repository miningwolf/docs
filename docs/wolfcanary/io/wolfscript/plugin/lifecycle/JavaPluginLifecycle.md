## JavaPluginLifecycle __class__

>io.wolfscript.plugin.lifecycle.JavaPluginLifecycle
>Extends [`PluginLifecycleBase`](PluginLifecycleBase.md)

---

### Class Overview

Lifecycle manager for a java plugin

Method | Type   
--- | :--- 
new __JavaPluginLifecycle__(desc) <br> _JavaPluginLifecycle constructor_ | _constructor_
 |
__Inherited items from [`PluginLifecycleBase`](PluginLifecycleBase.md)__ |
new __PluginLifecycleBase__(desc) <br> _PluginLifecycleBase constructor_ | _constructor_
 function __unload__() <br> _{@inheritDoc}_ | `void`





---

### Public Constructors for [`JavaPluginLifecycle`](JavaPluginLifecycle.md)

##### <a id='javapluginlifecycle'></a>new __JavaPluginLifecycle__(desc) 

_JavaPluginLifecycle constructor_

Argument | Type | Description  
--- | --- | --- 
desc | [`PluginDescriptor`](..\PluginDescriptor.md) | desc argument

---
### Public Constructors for [`PluginLifecycleBase`](PluginLifecycleBase.md)

##### <a id='pluginlifecyclebase'></a>new __PluginLifecycleBase__(desc) 

_PluginLifecycleBase constructor_

Argument | Type | Description  
--- | --- | --- 
desc | [`PluginDescriptor`](..\PluginDescriptor.md) | desc argument

---

### Public Methods for [`PluginLifecycleBase`](PluginLifecycleBase.md)

##### <a id='unload'></a>public  function __unload__()

_{@inheritDoc} /
    public boolean enable() {
        if (desc.getCurrentState() == PluginState.ENABLED) {
            return true;
        }
        if (desc.getCurrentState() == PluginState.DISABLED) {
            boolean en = desc.getPlugin().enable();
            if (en) {
                desc.setCurrentState(PluginState.ENABLED);
            }
            return en;
        }
        return false;
    }

    /** {@inheritDoc} /
    public boolean disable() {
        if (desc.getCurrentState() == PluginState.DISABLED) {
            return true;
        }
        if (desc.getCurrentState() == PluginState.ENABLED) {
            desc.getPlugin().disable();
            desc.setCurrentState(PluginState.DISABLED);
            Plugin p = desc.getPlugin();
            Wolf.hooks().unregisterPluginListeners(p);
            Wolf.commands().unregisterCommands(p);
            Wolf.motd().unregisterMOTDListener(p);
            PlayerInformation.removeInfoAdditions(p);
            ServerTaskManager.removeTasks(p);
            return true;
        }
        return false;
    }

    /** Implement this method in order to do actual loading. Be sure to set the plugin object in `PluginLifecycleBase#desc` /
    protected abstract void _load() throws PluginLoadFailedException;

    /** {@inheritDoc} /
    public Plugin load() throws PluginLoadFailedException {
        unload();
        _load();
        desc.setCurrentState(PluginState.DISABLED);
        return desc.getPlugin();
    }

    /** Implement this method in order to do specific unloading code /
    protected abstract void _unload();

    /** {@inheritDoc}_

Returns | 
--- | 
`void` |


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

