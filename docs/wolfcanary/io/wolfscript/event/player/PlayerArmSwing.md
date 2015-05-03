## PlayerArmSwing __class__

>io.wolfscript.event.player.PlayerArmSwing
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Player Left Click Hook<br> Called when a `Player` swings their arm with a Left Click

Method | Type   
--- | :--- 
new __PlayerArmSwing__(player) <br> _PlayerArmSwing constructor_ | _constructor_
 readonly property __Player__ <br> _Get: Gets the `Player` clicking_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`PlayerArmSwing`](PlayerArmSwing.md)

##### <a id='playerarmswing'></a>new __PlayerArmSwing__(player) 

_PlayerArmSwing constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument

---

### Public Properties for [`PlayerArmSwing`](PlayerArmSwing.md)

##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` clicking_

Get | Description
--- | --- 
`Player` | the `Player`



---

### Public Methods for [`PlayerArmSwing`](PlayerArmSwing.md)

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
	

