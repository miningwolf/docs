## EnchantEvent __class__

>io.wolfscript.event.player.EnchantEvent
>Extends [`CancelableHook`](../../hook/CancelableHook.md)
``` javascript
this.on('player.EnchantEvent', function (e) { });
```


---

### Class Overview

Enchant event. Contains information about a player enchanting an item.

Method | Type   
--- | :--- 
 readonly property __EnchantmentList__ <br> _Get: Gets the new [`Enchantment`](../../api/inventory/Enchantment.md) as list_ | `List<Enchantment>`
 readonly property __EnchantmentTable__ <br> _Get: Gets the `EnchantmentTable` in use_ | `EnchantmentTable`
 readonly property __Item__ <br> _Get: Gets the [`Item`](../../api/inventory/Item.md)_ | [`Item`](../../api/inventory/Item.md)
 readonly property __Player__ <br> _Get: Gets the `Player` enchanting an [`Item`](../../api/inventory/Item.md)_ | `Player`
 function __addEnchantment__(enchantment) <br> _Add a new enchantment to the list of existing enchantments_ | `void`
 function __isValid__(checkStackable) <br> _Validate the enchantments_ | `boolean`
 function __removeEnchantment__(enchantment) <br> _Remove an enchantment from the list_ | `void`
 function __setEnchantmentList__() <br> _Override the whole list of enchantments_ | `void`
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


### Public Properties for [`EnchantEvent`](EnchantEvent.md)

##### <a id='enchantmentlist'></a>public  readonly property __EnchantmentList__

_Get: Gets the new [`Enchantment`](../../api/inventory/Enchantment.md) as list_

Get | Description
--- | --- 
`List<Enchantment>` | enchantment list



##### <a id='enchantmenttable'></a>public  readonly property __EnchantmentTable__

_Get: Gets the `EnchantmentTable` in use_

Get | Description
--- | --- 
`EnchantmentTable` | the in use `EnchantmentTable`



##### <a id='item'></a>public  readonly property __Item__

_Get: Gets the [`Item`](../../api/inventory/Item.md)_

Get | Description
--- | --- 
[`Item`](../../api/inventory/Item.md) | the [`Item`](../../api/inventory/Item.md) being enchanted



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` enchanting an [`Item`](../../api/inventory/Item.md)_

Get | Description
--- | --- 
`Player` | the `Player` enchanting



---

### Public Methods for [`EnchantEvent`](EnchantEvent.md)

##### <a id='addenchantment'></a>public  function __addEnchantment__(enchantment)

_Add a new enchantment to the list of existing enchantments_

Argument | Type | Description  
--- | --- | --- 
enchantment | [`Enchantment`](../../api/inventory/Enchantment.md) | the [`Enchantment`](../../api/inventory/Enchantment.md) to add

Returns | 
--- | 
`void` |


##### <a id='isvalid'></a>public  function __isValid__(checkStackable)

_Validate the enchantments_

Argument | Type | Description  
--- | --- | --- 
checkStackable | `boolean` | `true` to check if can stack; `false` for not

Returns | Description
--- | --- 
`boolean` | `true` if valid; `false` if not


##### <a id='removeenchantment'></a>public  function __removeEnchantment__(enchantment)

_Remove an enchantment from the list_

Argument | Type | Description  
--- | --- | --- 
enchantment | [`Enchantment`](../../api/inventory/Enchantment.md) | the [`Enchantment`](../../api/inventory/Enchantment.md) to remove

Returns | 
--- | 
`void` |


##### <a id='setenchantmentlist'></a>public  function __setEnchantmentList__()

_Override the whole list of enchantments_

Returns | 
--- | 
`void` |


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
	

