## Enchant __class__

>io.wolfscript.event.player.Enchant
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Enchant hook. Contains information about a player enchanting an item.

Method | Type   
--- | :--- 
new __Enchant__(player, item, enchtab) <br> _Enchant constructor_ | _constructor_
 function __isValid__(checkStackable) <br> _Gets the `Player` enchanting an [`Item`](..\..\api\inventory\Item.md)_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](..\..\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](..\..\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)







---

### Public Constructors for [`Enchant`](Enchant.md)

##### <a id='enchant'></a>new __Enchant__(player, item, enchtab) 

_Enchant constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
item | [`Item`](..\..\api\inventory\Item.md) | item argument
enchtab | `EnchantmentTable` | enchtab argument

---

### Public Methods for [`Enchant`](Enchant.md)

##### <a id='isvalid'></a>public  function __isValid__(checkStackable)

_Gets the `Player` enchanting an [`Item`](..\..\api\inventory\Item.md)_

Argument | Type | Description  
--- | --- | --- 
checkStackable | `boolean` | `true` to check if can stack; `false` for not

Returns | Description
--- | --- 
`boolean` | the `Player` enchanting /
    public Player getPlayer() {
        return player;
    }

    /** Gets the [`Item`](..\..\api\inventory\Item.md)


##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`CancelableHook`](..\..\hook\CancelableHook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`CancelableHook`](..\..\hook\CancelableHook.md) | this


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


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

