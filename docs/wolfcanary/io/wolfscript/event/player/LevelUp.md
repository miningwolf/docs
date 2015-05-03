## LevelUp __class__

>io.wolfscript.event.player.LevelUp
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

LevelUp hook. Called when a `Player` levels up

Method | Type   
--- | :--- 
new __LevelUp__(player) <br> _LevelUp constructor_ | _constructor_
 readonly property __Player__ <br> _Get: Get the `Player` instance_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`LevelUp`](LevelUp.md)

##### <a id='levelup'></a>new __LevelUp__(player) 

_LevelUp constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument

---

### Public Properties for [`LevelUp`](LevelUp.md)

##### <a id='player'></a>public  readonly property __Player__

_Get: Get the `Player` instance_

Get | Description
--- | --- 
`Player` | the `Player` leveling up



---

### Public Methods for [`LevelUp`](LevelUp.md)

##### <a id='tostring'></a>public final function __toString__()

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
	

