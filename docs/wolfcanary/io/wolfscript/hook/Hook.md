## Hook __class__

>io.wolfscript.hook.Hook

---

### Class Overview

A basic hook you can implement to create custom hooks. System Hooks also extend this

Method | Type   
--- | :--- 
 function __call__() <br> _Get the name of this hook._ | [`Hook`](Hook.md)



---


### Public Methods for [`Hook`](Hook.md)

##### <a id='call'></a>public  function __call__()

_Get the name of this hook._

Returns | Description
--- | --- 
[`Hook`](Hook.md) | simple class name /
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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

