## BookEdit __class__

>io.wolfscript.event.player.BookEdit
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Called when a `Player` edits a Book [`Item`](..\..\api\inventory\Item.md)

Method | Type   
--- | :--- 
new __BookEdit__(book, player) <br> _BookEdit constructor_ | _constructor_
final function __toString__() <br> _Gets the `Player` editting the Book_ | `String`
 |
__Inherited items from [`CancelableHook`](..\..\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](..\..\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)







---

### Public Constructors for [`BookEdit`](BookEdit.md)

##### <a id='bookedit'></a>new __BookEdit__(book, player) 

_BookEdit constructor_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](..\..\api\inventory\Item.md) | book argument
player | `Player` | player argument

---

### Public Methods for [`BookEdit`](BookEdit.md)

##### <a id='tostring'></a>public final function __toString__()

_Gets the `Player` editting the Book_

Returns | Description
--- | --- 
`String` | the player doing the editting /
    public final Player getPlayer() {
        return player;
    }

    /** Gets the Book [`Item`](..\..\api\inventory\Item.md) being editted


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
	

