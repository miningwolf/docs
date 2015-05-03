## SignChange __class__

>io.wolfscript.event.player.SignChange
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Sign Change hook. Contains information about a sign either being changed by a player

Method | Type   
--- | :--- 
new __SignChange__(player, sign) <br> _SignChange constructor_ | _constructor_
 readonly property __Sign__ <br> _Get: Gets the `Player`_ | [`Sign`](..\..\api\world\blocks\Sign.md)
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

### Public Constructors for [`SignChange`](SignChange.md)

##### <a id='signchange'></a>new __SignChange__(player, sign) 

_SignChange constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
sign | [`Sign`](..\..\api\world\blocks\Sign.md) | sign argument

---

### Public Properties for [`SignChange`](SignChange.md)

##### <a id='sign'></a>public  readonly property __Sign__

_Get: Gets the `Player`_

Get | Description
--- | --- 
[`Sign`](..\..\api\world\blocks\Sign.md) | player /
    public Player getPlayer() {
        return player;
    }

    /** Gets the [`Sign`](..\..\api\world\blocks\Sign.md)



---

### Public Methods for [`SignChange`](SignChange.md)

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
	

