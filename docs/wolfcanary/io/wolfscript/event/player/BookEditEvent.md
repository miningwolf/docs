## BookEditEvent __class__

>io.wolfscript.event.player.BookEditEvent
>Extends [`CancelableHook`](../CancelableHook.md)
``` javascript
this.on('player.BookEditEvent', function (e) { });
```


---

### Class Overview

Called when a `Player` edits a Book [`Item`](../../api/inventory/Item.md)

Method | Type   
--- | :--- 
final readonly property __Book__ <br> _Get: Gets the Book [`Item`](../../api/inventory/Item.md) being editted_ | [`Item`](../../api/inventory/Item.md)
final readonly property __Player__ <br> _Get: Gets the `Player` editting the Book_ | `Player`
final function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`CancelableHook`](../CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](../CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](../Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







---


### Public Properties for [`BookEditEvent`](BookEditEvent.md)

##### <a id='book'></a>public final readonly property __Book__

_Get: Gets the Book [`Item`](../../api/inventory/Item.md) being editted_

Get | Description
--- | --- 
[`Item`](../../api/inventory/Item.md) | the book being editted



##### <a id='player'></a>public final readonly property __Player__

_Get: Gets the `Player` editting the Book_

Get | Description
--- | --- 
`Player` | the player doing the editting



---

### Public Methods for [`BookEditEvent`](BookEditEvent.md)

##### <a id='tostring'></a>public final function __toString__()

_{@inheritDoc}_

Returns | 
--- | 
`String` |


---

### Public Methods for [`CancelableHook`](../CancelableHook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`CancelableHook`](../CancelableHook.md) | this


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

### Public Properties for [`Hook`](../Hook.md)

##### <a id='hookname'></a>public final readonly property __HookName__

_Get: Get the name of this hook._

Get | Description
--- | --- 
`String` | simple class name



---

### Public Methods for [`Hook`](../Hook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`Hook`](../Hook.md) | this


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

