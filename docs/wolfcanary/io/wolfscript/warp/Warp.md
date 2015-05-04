## Warp __class__

>io.wolfscript.warp.Warp

---

### Class Overview

Contains information regarding warp points

Method | Type   
--- | :--- 
new __Warp__(l, name) <br> _Set up a group specific warp_ | _constructor_
new __Warp__(l, name) <br> _Set up a normal warp, access for all_ | _constructor_
new __Warp__(l, name, owner, isHome) <br> _Warp constructor_ | _constructor_
 readonly property __Name__ <br> _Get: Get the warps name_ | `String`
  property __Location__ <br> _Get: Get the warp location.<br>Set: Override the warp location_ | [`Location`](../api/world/position/Location.md)
 readonly property __GroupsAsString__ <br> _GroupsAsString property_ | `List<String>`
 readonly property __Groups__ <br> _Get: Return the array of allowed groups_ | `Group[]`
 readonly property __Owner__ <br> _Get: Get owners identity. May return null if this is no private home warp_ | `String`
 function __isGroupAllowed__(group) <br> _Check if the group with the specified name is allowed to use this warp._ | `boolean`
 function __canWarp__(player) <br> _Checks if a given `Player` can warp_ | `boolean`
 function __isGroupAllowed__(group) <br> _Check if the group with the specified name is allowed to use this warp._ | `boolean`
 function __isGroupRestricted__() <br> _Check if this warp is restricted to one or more groups_ | `boolean`
 function __isOwner__(player) <br> _isOwner method_ | `boolean`
 function __isPlayerHome__() <br> _Check if this warp is a player home_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 function __warp__(player) <br> _Check preconditions and warp a player to this warps location_ | `boolean`



---

### Public Constructors for [`Warp`](Warp.md)

##### <a id='warp'></a>new __Warp__(l, name) 

_Set up a group specific warp_

Argument | Type | Description  
--- | --- | --- 
l | [`Location`](../api/world/position/Location.md) | l argument
name | `String` | name argument

##### <a id='warp'></a>new __Warp__(l, name) 

_Set up a normal warp, access for all_

Argument | Type | Description  
--- | --- | --- 
l | [`Location`](../api/world/position/Location.md) | l argument
name | `String` | name argument

##### <a id='warp'></a>new __Warp__(l, name, owner, isHome) 

_Warp constructor_

Argument | Type | Description  
--- | --- | --- 
l | [`Location`](../api/world/position/Location.md) | l argument
name | `String` | name argument
owner | `String` | owner argument
isHome | `boolean` | isHome argument

---

### Public Properties for [`Warp`](Warp.md)

##### <a id='name'></a>public  readonly property __Name__

_Get: Get the warps name_

Get | 
--- | 
`String` |



##### <a id='location'></a>public   property __Location__

_Get: Get the warp location.<br>Set: Override the warp location_

Get | Description
--- | --- 
[`Location`](../api/world/position/Location.md) | Location object

Set | Type | Description  
--- | --- | --- 
l | [`Location`](../api/world/position/Location.md) | l argument


##### <a id='groupsasstring'></a>public  readonly property __GroupsAsString__

_GroupsAsString property_

Get | 
--- | 
`List<String>` |



##### <a id='groups'></a>public  readonly property __Groups__

_Get: Return the array of allowed groups_

Get | 
--- | 
`Group[]` |



##### <a id='owner'></a>public  readonly property __Owner__

_Get: Get owners identity. May return null if this is no private home warp_

Get | 
--- | 
`String` |



---

### Public Methods for [`Warp`](Warp.md)

##### <a id='isgroupallowed'></a>public  function __isGroupAllowed__(group)

_Check if the group with the specified name is allowed to use this warp._

Argument | Type | Description  
--- | --- | --- 
group | `String` | group argument

Returns | Description
--- | --- 
`boolean` | true if group is allowed, false otherwise


##### <a id='canwarp'></a>public  function __canWarp__(player)

_Checks if a given `Player` can warp_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the `Player` to check

Returns | Description
--- | --- 
`boolean` | `true` if can warp; `false` if not


##### <a id='isgroupallowed'></a>public  function __isGroupAllowed__(group)

_Check if the group with the specified name is allowed to use this warp._

Argument | Type | Description  
--- | --- | --- 
group | [`Group`](../user/Group.md) | group argument

Returns | Description
--- | --- 
`boolean` | true if group is allowed, false otherwise


##### <a id='isgrouprestricted'></a>public  function __isGroupRestricted__()

_Check if this warp is restricted to one or more groups_

Returns | 
--- | 
`boolean` |


##### <a id='isowner'></a>public  function __isOwner__(player)

_isOwner method_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument

Returns | 
--- | 
`boolean` |


##### <a id='isplayerhome'></a>public  function __isPlayerHome__()

_Check if this warp is a player home_

Returns | 
--- | 
`boolean` |


##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


##### <a id='warp'></a>public  function __warp__(player)

_Check preconditions and warp a player to this warps location_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument

Returns | Description
--- | --- 
`boolean` | True if warped, false otherwise


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

