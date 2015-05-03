## ChickenLayEgg __class__

>io.wolfscript.event.entity.ChickenLayEgg
>Extends [`CancelableHook`](..\..\hook\CancelableHook.md)

---

### Class Overview

Chicken lay egg hook, called when a chicken lay an egg.

Method | Type   
--- | :--- 
 writeonly property __NextEggIn__ <br> _Set: Creates a new ChickenLayEgg_ | `void`
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


### Public Properties for [`ChickenLayEgg`](ChickenLayEgg.md)

##### <a id='nexteggin'></a>public  writeonly property __NextEggIn__

_Set: Creates a new ChickenLayEgg_

Get | Description
--- | --- 
`void` | the chicken that laid the egg /
    public Chicken getChicken() {
        return this.chicken;
    }

    /** Get the egg that was laid

Set | Type | Description  
--- | --- | --- 
nextEggIn | `int` | the time until next egg will be laid /
    public ChickenLayEgg(Chicken chicken, Item egg, int nextEggIn) {
        this.chicken = chicken;
        this.egg = egg;
        this.nextEggIn = nextEggIn;
    }

    /** Get the `Chicken` the laid the egg


---

### Public Methods for [`ChickenLayEgg`](ChickenLayEgg.md)

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
	

