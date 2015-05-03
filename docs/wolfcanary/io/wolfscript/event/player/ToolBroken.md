## ToolBroken __class__

>io.wolfscript.event.player.ToolBroken
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Called when a tool/sword runs out of uses and is destroyed

Method | Type   
--- | :--- 
new __ToolBroken__(player, tool) <br> _ToolBroken constructor_ | _constructor_
 readonly property __Tool__ <br> _Get: Gets the `Player` who's tool has broken_ | [`Item`](..\..\api\inventory\Item.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`ToolBroken`](ToolBroken.md)

##### <a id='toolbroken'></a>new __ToolBroken__(player, tool) 

_ToolBroken constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
tool | [`Item`](..\..\api\inventory\Item.md) | tool argument

---

### Public Properties for [`ToolBroken`](ToolBroken.md)

##### <a id='tool'></a>public  readonly property __Tool__

_Get: Gets the `Player` who's tool has broken_

Get | Description
--- | --- 
[`Item`](..\..\api\inventory\Item.md) | player who's tool has broken /
    public Player getPlayer() {
        return player;
    }

    /** Gets the tool that was broken<p/> NOTE: Amount will be 0; to restore the item set amount back to 1<br/> Also note the damage value will be 0



---

### Public Methods for [`ToolBroken`](ToolBroken.md)

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
	

