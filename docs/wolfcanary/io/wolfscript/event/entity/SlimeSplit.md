## SlimeSplit __class__

>io.wolfscript.event.entity.SlimeSplit
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Slime split hook, Contains information about a slime split.

Method | Type   
--- | :--- 
 readonly property __ChildSlimes__ <br> _Get: Constructs a new SlimeSplit_ | `List<Slime>`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---


### Public Properties for [`SlimeSplit`](SlimeSplit.md)

##### <a id='childslimes'></a>public  readonly property __ChildSlimes__

_Get: Constructs a new SlimeSplit_

Get | Description
--- | --- 
`List<Slime>` | the [`Slime`](..\..\api\entity\living\monster\Slime.md) that died /
    public Slime getOriginalSlime() {
        return this.originalSlime;
    }

    /** Get the [`Slime`](..\..\api\entity\living\monster\Slime.md)s that should be spawned



---

### Public Methods for [`SlimeSplit`](SlimeSplit.md)

##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


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
	

