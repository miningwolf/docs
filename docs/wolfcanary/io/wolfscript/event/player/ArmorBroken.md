## ArmorBroken __class__

>io.wolfscript.event.player.ArmorBroken
>Extends [`Hook`](../../hook/Hook.md)

---

### Class Overview

Called when a piece of Armor has been destroyed

Method | Type   
--- | :--- 
new __ArmorBroken__(player, armor) <br> _ArmorBroken constructor_ | _constructor_
 readonly property __Armor__ <br> _Get: Gets the armor that was broken<p/>_ | [`Item`](../../api/inventory/Item.md)
 readonly property __Player__ <br> _Get: Gets the `Player` who's armor has broken_ | `Player`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





---

### Public Constructors for [`ArmorBroken`](ArmorBroken.md)

##### <a id='armorbroken'></a>new __ArmorBroken__(player, armor) 

_ArmorBroken constructor_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
armor | [`Item`](../../api/inventory/Item.md) | armor argument

---

### Public Properties for [`ArmorBroken`](ArmorBroken.md)

##### <a id='armor'></a>public  readonly property __Armor__

_Get: Gets the armor that was broken<p/> NOTE: Amount will be 0; to restore the item set amount back to 1_

Get | Description
--- | --- 
[`Item`](../../api/inventory/Item.md) | the tool that was broken



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the `Player` who's armor has broken_

Get | Description
--- | --- 
`Player` | player who's armor has broken



---

### Public Methods for [`ArmorBroken`](ArmorBroken.md)

##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Properties for [`Hook`](../../hook/Hook.md)

##### <a id='hookname'></a>public final readonly property __HookName__

_Get: Get the name of this hook._

Get | Description
--- | --- 
`String` | simple class name



---

### Public Methods for [`Hook`](../../hook/Hook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`Hook`](../../hook/Hook.md) | this


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

