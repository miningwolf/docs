## SignShow __class__

>io.wolfscript.event.player.SignShow
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Sign Change hook. Contains information about a sign shown to a player

Method | Type   
--- | :--- 
 readonly property __Sign__ <br> _Get: Constructs a new SignShow_ | [`Sign`](..\..\api\world\blocks\Sign.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---


### Public Properties for [`SignShow`](SignShow.md)

##### <a id='sign'></a>public  readonly property __Sign__

_Get: Constructs a new SignShow_

Get | Description
--- | --- 
[`Sign`](..\..\api\world\blocks\Sign.md) | the `Player` /
    public Player getPlayer() {
        return player;
    }

    /** Gets the [`Sign`](..\..\api\world\blocks\Sign.md) being shown



---

### Public Methods for [`SignShow`](SignShow.md)

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
	

