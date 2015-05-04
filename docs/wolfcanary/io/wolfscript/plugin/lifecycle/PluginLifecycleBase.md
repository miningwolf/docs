## PluginLifecycleBase __class__

>io.wolfscript.plugin.lifecycle.PluginLifecycleBase
>Implements [`PluginLifecycle`](../PluginLifecycle.md)

---

### Class Overview

Base class for plugin lifecycles

Method | Type   
--- | :--- 
new __PluginLifecycleBase__(desc) <br> _PluginLifecycleBase constructor_ | _constructor_
 function __disable__() <br> _{@inheritDoc}_ | `boolean`
 function __enable__() <br> _{@inheritDoc}_ | `boolean`
 function __unload__() <br> _Implement this method in order to do actual loading. Be sure to set the plugin object in_ | `void`



---

### Public Constructors for [`PluginLifecycleBase`](PluginLifecycleBase.md)

##### <a id='pluginlifecyclebase'></a>new __PluginLifecycleBase__(desc) 

_PluginLifecycleBase constructor_

Argument | Type | Description  
--- | --- | --- 
desc | [`PluginDescriptor`](../PluginDescriptor.md) | desc argument

---

### Public Methods for [`PluginLifecycleBase`](PluginLifecycleBase.md)

##### <a id='disable'></a>public  function __disable__()

_{@inheritDoc}_

Returns | 
--- | 
`boolean` |


##### <a id='enable'></a>public  function __enable__()

_{@inheritDoc}_

Returns | 
--- | 
`boolean` |


##### <a id='unload'></a>public  function __unload__()

_Implement this method in order to do actual loading. Be sure to set the plugin object in `PluginLifecycleBase#desc` /
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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

