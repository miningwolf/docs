## EntityTame __class__

>io.wolfscript.event.entity.EntityTame
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

this.on('entity.EntityTame', function (e) { });

---

### Class Overview

Entity tame hook

Method | Type   
--- | :--- 
new __EntityTame__(animal, player, isTamed) <br> _EntityTame constructor_ | _constructor_
 readonly property __Animal__ <br> _Get: Get the animal in question_ | [`EntityAnimal`](../../api/entity/living/animal/EntityAnimal.md)
 readonly property __Player__ <br> _Get: Get the player that is wanting to tame the animal_ | `Player`
 writeonly property __Tamed__ <br> _Set: Override the tame result._ | `void`
 function __isTamed__() <br> _Check the default tame result._ | `boolean`
final function __toString__() <br> _toString method_ | `String`
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

### Public Constructors for [`EntityTame`](EntityTame.md)

##### <a id='entitytame'></a>new __EntityTame__(animal, player, isTamed) 

_EntityTame constructor_

Argument | Type | Description  
--- | --- | --- 
animal | [`EntityAnimal`](../../api/entity/living/animal/EntityAnimal.md) | animal argument
player | `Player` | player argument
isTamed | `boolean` | isTamed argument

---

### Public Properties for [`EntityTame`](EntityTame.md)

##### <a id='animal'></a>public  readonly property __Animal__

_Get: Get the animal in question_

Get | Description
--- | --- 
[`EntityAnimal`](../../api/entity/living/animal/EntityAnimal.md) | the [`EntityAnimal`](../../api/entity/living/animal/EntityAnimal.md)



##### <a id='player'></a>public  readonly property __Player__

_Get: Get the player that is wanting to tame the animal_

Get | Description
--- | --- 
`Player` | the `Player`



##### <a id='tamed'></a>public  writeonly property __Tamed__

_Set: Override the tame result._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
isTamed | `boolean` | True to force the animal being tamed, false to force the taming to fail


---

### Public Methods for [`EntityTame`](EntityTame.md)

##### <a id='istamed'></a>public  function __isTamed__()

_Check the default tame result._

Returns | Description
--- | --- 
`boolean` | True if the animal was tamed, false otherwise


##### <a id='tostring'></a>public final function __toString__()

_toString method_

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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

