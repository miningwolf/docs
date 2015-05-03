## PluginEnable __class__

>io.wolfscript.event.system.PluginEnable
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Called when a plugin is enabled.

Method | Type   
--- | :--- 
new __PluginEnable__(plugin) <br> _PluginEnable constructor_ | _constructor_
 readonly property __Plugin__ <br> _Get: Retrieve the plugin that is enabled_ | `Plugin`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`PluginEnable`](PluginEnable.md)

##### <a id='pluginenable'></a>new __PluginEnable__(plugin) 

_PluginEnable constructor_

Argument | Type | Description  
--- | --- | --- 
plugin | `Plugin` | plugin argument

---

### Public Properties for [`PluginEnable`](PluginEnable.md)

##### <a id='plugin'></a>public  readonly property __Plugin__

_Get: Retrieve the plugin that is enabled_

Get | Description
--- | --- 
`Plugin` | The plugin that is enabled



---

### Public Methods for [`PluginEnable`](PluginEnable.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`Hook`](..\..\hook\Hook.md)

##### <a id='call'></a>public  function __call__()

_Get the name of this hook._

Returns | Description
--- | --- 
[`Hook`](..\..\hook\Hook.md) | simple class name /
    public final String getHookName() {
        return getClass().getSimpleName();
    }

    @Override
    public int hashCode() {
        int hash = getClass().getSimpleName().length();

        return hash getClass().getSimpleName().hashCode() + 2;
    }

    /** Calls a Hook if not already executed


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

