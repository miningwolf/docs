## ArmorBroken __class__

>io.wolfscript.event.player.ArmorBroken
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Called when a piece of Armor has been destroyed

Method | Type   
--- | :--- 
new __ArmorBroken__(player, armor) <br> _ArmorBroken constructor_ | _constructor_
 readonly property __Armor__ <br> _Get: Gets the `Player` who's armor has broken_ | [`Item`](..\..\api\inventory\Item.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`ArmorBroken`](ArmorBroken.md)

##### <a id='armorbroken'></a>new __ArmorBroken__(player, armor) 

_ArmorBroken constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
armor | [`Item`](..\..\api\inventory\Item.md) | armor argument

---

### Public Properties for [`ArmorBroken`](ArmorBroken.md)

##### <a id='armor'></a>public  readonly property __Armor__

_Get: Gets the `Player` who's armor has broken_

Get | Description
--- | --- 
[`Item`](..\..\api\inventory\Item.md) | player who's armor has broken /
    public Player getPlayer() {
        return player;
    }

    /** Gets the armor that was broken<p/> NOTE: Amount will be 0; to restore the item set amount back to 1



---

### Public Methods for [`ArmorBroken`](ArmorBroken.md)

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
	

