## BlockGrow __class__

>io.wolfscript.event.world.BlockGrow
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Called when a block "grows"

Method | Type   
--- | :--- 
new __BlockGrow__(original, growth) <br> _BlockGrow constructor_ | _constructor_
 readonly property __Growth__ <br> _Growth property_ | [`Block`](..\..\api\world\blocks\Block.md)
 readonly property __Original__ <br> _Original property_ | [`Block`](..\..\api\world\blocks\Block.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](..\..\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](..\..\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)







---

### Public Constructors for [`BlockGrow`](BlockGrow.md)

##### <a id='blockgrow'></a>new __BlockGrow__(original, growth) 

_BlockGrow constructor_

Argument | Type | Description  
--- | --- | --- 
original | [`Block`](..\..\api\world\blocks\Block.md) | original argument
growth | [`Block`](..\..\api\world\blocks\Block.md) | growth argument

---

### Public Properties for [`BlockGrow`](BlockGrow.md)

##### <a id='growth'></a>public  readonly property __Growth__

_Growth property_

Get | 
--- | 
[`Block`](..\..\api\world\blocks\Block.md) |



##### <a id='original'></a>public  readonly property __Original__

_Original property_

Get | 
--- | 
[`Block`](..\..\api\world\blocks\Block.md) |



---

### Public Methods for [`BlockGrow`](BlockGrow.md)

##### <a id='tostring'></a>public  function __toString__()

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
	
