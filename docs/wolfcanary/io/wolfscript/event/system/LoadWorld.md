## LoadWorld __class__

>io.wolfscript.event.system.LoadWorld
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Load World Hook <p/> Called when a [`World`](..\..\api\world\World.md) is loaded and initialized

Method | Type   
--- | :--- 
new __LoadWorld__(world) <br> _LoadWorld constructor_ | _constructor_
 function __toString__() <br> _Gets the [`World`](..\..\api\world\World.md) that has loaded_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`LoadWorld`](LoadWorld.md)

##### <a id='loadworld'></a>new __LoadWorld__(world) 

_LoadWorld constructor_

Argument | Type | Description  
--- | --- | --- 
world | [`World`](..\..\api\world\World.md) | world argument

---

### Public Methods for [`LoadWorld`](LoadWorld.md)

##### <a id='tostring'></a>public  function __toString__()

_Gets the [`World`](..\..\api\world\World.md) that has loaded_

Returns | Description
--- | --- 
`String` | the [`World`](..\..\api\world\World.md) that loaded /
    public World getWorld() {
        return world;
    }

    /** {@inheritDoc}


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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

