## TNTActivate __class__

>io.wolfscript.event.world.TNTActivate
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

---

### Class Overview

TNT Activate Hook <p/> Called when a TNT block or TNTMinecart is activated

Method | Type   
--- | :--- 
new __TNTActivate__(tnt, activator, cause) <br> _Constructs a new TNTActivate for a TNT Block_ | _constructor_
new __TNTActivate__(tntMinecart) <br> _Constucts a new TNTActivate for a `TNTMinecart`_ | _constructor_
 readonly property __Activator__ <br> _Get: Gets the [`LivingBase`](../../api/entity/living/LivingBase.md) that is causing the TNT to activate (if applicable)_ | [`LivingBase`](../../api/entity/living/LivingBase.md)
 readonly property __Cause__ <br> _Get: Gets the `ActivationCause` of the TNT Activation_ | `ActivationCause`
 readonly property __TNT__ <br> _Get: Gets the [`Block`](../../api/world/blocks/Block.md) of TNT being activated if not a TNTMinecart call_ | [`Block`](../../api/world/blocks/Block.md)
 readonly property __TNTCart__ <br> _Get: Gets the `TNTMinecart` being activated if not a TNT Block_ | `TNTMinecart`
 function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`CancelableHook`](../../hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](../../hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







---

### Public Constructors for [`TNTActivate`](TNTActivate.md)

##### <a id='tntactivate'></a>new __TNTActivate__(tnt, activator, cause) 

_Constructs a new TNTActivate for a TNT Block_

Argument | Type | Description  
--- | --- | --- 
tnt | [`Block`](../../api/world/blocks/Block.md) | the TNT being activated
activator | [`LivingBase`](../../api/entity/living/LivingBase.md) | the [`LivingBase`](../../api/entity/living/LivingBase.md) activating the TNT if present
cause | `ActivationCause` | the `ActivationCause`

##### <a id='tntactivate'></a>new __TNTActivate__(tntMinecart) 

_Constucts a new TNTActivate for a `TNTMinecart`_

Argument | Type | Description  
--- | --- | --- 
tntMinecart | `TNTMinecart` | the TNTMinecart being activated

---

### Public Properties for [`TNTActivate`](TNTActivate.md)

##### <a id='activator'></a>public  readonly property __Activator__

_Get: Gets the [`LivingBase`](../../api/entity/living/LivingBase.md) that is causing the TNT to activate (if applicable)_

Get | Description
--- | --- 
[`LivingBase`](../../api/entity/living/LivingBase.md) | the [`LivingBase`](../../api/entity/living/LivingBase.md) if present; `null` otherwise



##### <a id='cause'></a>public  readonly property __Cause__

_Get: Gets the `ActivationCause` of the TNT Activation_

Get | Description
--- | --- 
`ActivationCause` | the `ActivationCause`



##### <a id='tnt'></a>public  readonly property __TNT__

_Get: Gets the [`Block`](../../api/world/blocks/Block.md) of TNT being activated if not a TNTMinecart call_

Get | Description
--- | --- 
[`Block`](../../api/world/blocks/Block.md) | the [`Block`](../../api/world/blocks/Block.md) of TNT; `null` if TNTMinecart



##### <a id='tntcart'></a>public  readonly property __TNTCart__

_Get: Gets the `TNTMinecart` being activated if not a TNT Block_

Get | Description
--- | --- 
`TNTMinecart` | the `TNTMinecart`; `null` if TNT Block



---

### Public Methods for [`TNTActivate`](TNTActivate.md)

##### <a id='tostring'></a>public  function __toString__()

_{@inheritDoc}_

Returns | 
--- | 
`String` |


---

### Public Methods for [`CancelableHook`](../../hook/CancelableHook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`CancelableHook`](../../hook/CancelableHook.md) | this


##### <a id='iscanceled'></a>public  function __isCanceled__()

_isCanceled method_

Returns | 
--- | 
`boolean` |


##### <a id='setcanceled'></a>public  function __setCanceled__()

_setCanceled method_

Returns | 
--- | 
`void` |


---

### Public Properties for [`Hook`](../../hook/Hook.md)

##### <a id='hookname'></a>public final readonly property __HookName__

_Get: Get the name of this hook._

Get | Description
--- | --- 
`String` | simple class name



---

### Public Methods for [`Hook`](../../hook/Hook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`Hook`](../../hook/Hook.md) | this


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

