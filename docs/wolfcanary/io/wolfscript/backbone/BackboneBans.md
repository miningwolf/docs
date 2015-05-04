## BackboneBans __class__

>io.wolfscript.backbone.BackboneBans
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the ban System. This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackboneBans__() <br> _BackboneBans constructor_ | _constructor_
 function __addBan__(ban) <br> _Add a new Ban to the list of bans._ | `void`
 function __getBan__(uuid) <br> _Get a ban for this player uuid._ | [`Ban`](../bansystem/Ban.md)
 function __liftBan__(uuid) <br> _Lift a ban that was issued for the player with the given uuid_ | `void`
 function __liftIpBan__(subject) <br> _Lift an IP ban._ | `void`
 function __loadBans__() <br> _Load and return all recorded bans_ | `List<Ban>`
 function __updateBan__(ban) <br> _Update a ban._ | `void`
 |
__Inherited items from [`Backbone`](Backbone.md)__ |
new __Backbone__(system) <br> _Backbone constructor_ | _constructor_
 readonly property __System__ <br> _Get: Get the System of this backbone_ | `System`





---

### Public Constructors for [`BackboneBans`](BackboneBans.md)

##### <a id='backbonebans'></a>new __BackboneBans__() 

_BackboneBans constructor_


---

### Public Methods for [`BackboneBans`](BackboneBans.md)

##### <a id='addban'></a>public  function __addBan__(ban)

_Add a new Ban to the list of bans._

Argument | Type | Description  
--- | --- | --- 
ban | [`Ban`](../bansystem/Ban.md) | The ban to add.

Returns | 
--- | 
`void` |


##### <a id='getban'></a>public  function __getBan__(uuid)

_Get a ban for this player uuid. This may return null if the ban does not exist_

Argument | Type | Description  
--- | --- | --- 
uuid | `String` | Ban for the player with the given uuid or null if none.

Returns | Description
--- | --- 
[`Ban`](../bansystem/Ban.md) | Returns a ban object if that ban was found, null otherwise


##### <a id='liftban'></a>public  function __liftBan__(uuid)

_Lift a ban that was issued for the player with the given uuid_

Argument | Type | Description  
--- | --- | --- 
uuid | `String` | Player uuid to unban.

Returns | 
--- | 
`void` |


##### <a id='liftipban'></a>public  function __liftIpBan__(subject)

_Lift an IP ban._

Argument | Type | Description  
--- | --- | --- 
subject | `String` | IP Address to unban.

Returns | 
--- | 
`void` |


##### <a id='loadbans'></a>public  function __loadBans__()

_Load and return all recorded bans_

Returns | Description
--- | --- 
`List<Ban>` | An array list of all recorded ban instances.


##### <a id='updateban'></a>public  function __updateBan__(ban)

_Update a ban._

Argument | Type | Description  
--- | --- | --- 
ban | [`Ban`](../bansystem/Ban.md) | Ban instance to update.

Returns | 
--- | 
`void` |


---
### Public Constructors for [`Backbone`](Backbone.md)

##### <a id='backbone'></a>new __Backbone__(system) 

_Backbone constructor_

Argument | Type | Description  
--- | --- | --- 
system | `System` | system argument

---

### Public Properties for [`Backbone`](Backbone.md)

##### <a id='system'></a>public  readonly property __System__

_Get: Get the System of this backbone_

Get | Description
--- | --- 
`System` | The System instance.



---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

