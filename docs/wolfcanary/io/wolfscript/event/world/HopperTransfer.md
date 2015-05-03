## HopperTransfer __class__

>io.wolfscript.event.world.HopperTransfer
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Hook parameter for when Hoppers Transfer Items

Method | Type   
--- | :--- 
new __HopperTransfer__(hopper, itemTransferred, inputting) <br> _HopperTransfer constructor_ | _constructor_
 readonly property __ItemTransferred__ <br> _Get: Gets the hopper involved with this transfer._ | [`Item`](..\..\api\inventory\Item.md)
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

### Public Constructors for [`HopperTransfer`](HopperTransfer.md)

##### <a id='hoppertransfer'></a>new __HopperTransfer__(hopper, itemTransferred, inputting) 

_HopperTransfer constructor_

Argument | Type | Description  
--- | --- | --- 
hopper | [`Hopper`](..\..\api\inventory\Hopper.md) | hopper argument
itemTransferred | [`Item`](..\..\api\inventory\Item.md) | itemTransferred argument
inputting | `boolean` | inputting argument

---

### Public Properties for [`HopperTransfer`](HopperTransfer.md)

##### <a id='itemtransferred'></a>public  readonly property __ItemTransferred__

_Get: Gets the hopper involved with this transfer. Use instanceof to Check if it is a HopperBlock or HopperMincart._

Get | Description
--- | --- 
[`Item`](..\..\api\inventory\Item.md) | The Hopper.



---

### Public Methods for [`HopperTransfer`](HopperTransfer.md)

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
	

