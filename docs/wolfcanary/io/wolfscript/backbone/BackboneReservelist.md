## BackboneReservelist __class__

>io.wolfscript.backbone.BackboneReservelist
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the reservelist system. This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackboneReservelist__() <br> _BackboneReservelist constructor_ | _constructor_
 function __addSlotReservation__(player) <br> _Add a new reservelist entry_ | `void`
 function __isSlotReserved__(player) <br> _Checks if the player has a reserved slot_ | `boolean`
 function __loadReservelist__() <br> _Load and return all recorded reservelist entries_ | `List<String>`
 function __removeReservelistEntry__(subject) <br> _Removes a player from the reservelist_ | `void`
 function __validateReserveList__() <br> _Validate all user entries in the database._ | `void`
 |
__Inherited items from [`Backbone`](Backbone.md)__ |
new __Backbone__(system) <br> _Backbone constructor_ | _constructor_
 readonly property __System__ <br> _Get: Get the System of this backbone_ | `System`





---

### Public Constructors for [`BackboneReservelist`](BackboneReservelist.md)

##### <a id='backbonereservelist'></a>new __BackboneReservelist__() 

_BackboneReservelist constructor_


---

### Public Methods for [`BackboneReservelist`](BackboneReservelist.md)

##### <a id='addslotreservation'></a>public  function __addSlotReservation__(player)

_Add a new reservelist entry_

Argument | Type | Description  
--- | --- | --- 
player | `String` | the player's name or uuid

Returns | 
--- | 
`void` |


##### <a id='isslotreserved'></a>public  function __isSlotReserved__(player)

_Checks if the player has a reserved slot_

Argument | Type | Description  
--- | --- | --- 
player | `String` | the player's name to check

Returns | Description
--- | --- 
`boolean` | `true` if slot reserved; `false` otherwise


##### <a id='loadreservelist'></a>public  function __loadReservelist__()

_Load and return all recorded reservelist entries_

Returns | Description
--- | --- 
`List<String>` | An array list of all recorded reserve entries.


##### <a id='removereservelistentry'></a>public  function __removeReservelistEntry__(subject)

_Removes a player from the reservelist_

Argument | Type | Description  
--- | --- | --- 
subject | `String` | the player's name or uuid

Returns | 
--- | 
`void` |


##### <a id='validatereservelist'></a>public  function __validateReserveList__()

_Validate all user entries in the database. At this time it merely checks that all entries have a valid UUID.  If an entry does not, it attempts to retrieve it from Mojang's web service and_

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
	

