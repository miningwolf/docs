## Dispatcher __class__

>io.wolfscript.hook.Dispatcher

---

### Class Overview

This class invokes a method on a listener. It is inline-implemented in HookExecutor.registerHook, for each hook seperately

Method | Type   
--- | :--- 
abstract function __execute__(listener, hook) <br> _execute method_ | `void`
 var __ignoreCanceled__ <br> _ignoreCanceled field_ | `boolean`



---


### Public Methods for [`Dispatcher`](Dispatcher.md)

##### <a id='execute'></a>public abstract function __execute__(listener, hook)

_execute method_

Argument | Type | Description  
--- | --- | --- 
listener | [`PluginListener`](..\plugin\PluginListener.md) | listener argument
hook | [`Hook`](Hook.md) | hook argument

Returns | 
--- | 
`void` |


---

### Public Fields for [`Dispatcher`](Dispatcher.md)

##### <a id='ignorecanceled'></a>public  var __ignoreCanceled__

_ignoreCanceled field_

>Returns
>  `boolean`

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

