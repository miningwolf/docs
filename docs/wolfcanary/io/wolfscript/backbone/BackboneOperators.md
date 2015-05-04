## BackboneOperators __class__

>io.wolfscript.backbone.BackboneOperators
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the ops system. This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackboneOperators__() <br> _BackboneOperators constructor_ | _constructor_
 function __addOpEntry__(player) <br> _Add a new ops entry_ | `void`
 function __isOpped__(player) <br> _isOpped method_ | `boolean`
 function __loadOps__() <br> _Load and return all recorded bans_ | `List<String>`
 function __removeOpEntry__(subject) <br> _Removes a player from the op list_ | `void`
static var __schema__ <br> _schema field_ | [`OperatorsDataAccess`](OperatorsDataAccess.md)
 |
__Inherited items from [`Backbone`](Backbone.md)__ |
new __Backbone__(system) <br> _Backbone constructor_ | _constructor_
 readonly property __System__ <br> _Get: Get the System of this backbone_ | `System`





---

### Public Constructors for [`BackboneOperators`](BackboneOperators.md)

##### <a id='backboneoperators'></a>new __BackboneOperators__() 

_BackboneOperators constructor_


---

### Public Methods for [`BackboneOperators`](BackboneOperators.md)

##### <a id='addopentry'></a>public  function __addOpEntry__(player)

_Add a new ops entry_

Argument | Type | Description  
--- | --- | --- 
player | `String` | the name of the player to op

Returns | 
--- | 
`void` |


##### <a id='isopped'></a>public  function __isOpped__(player)

_isOpped method_

Argument | Type | Description  
--- | --- | --- 
player | `String` | player argument

Returns | 
--- | 
`boolean` |


##### <a id='loadops'></a>public  function __loadOps__()

_Load and return all recorded bans_

Returns | Description
--- | --- 
`List<String>` | An array list of all recorded ban instances.


##### <a id='removeopentry'></a>public  function __removeOpEntry__(subject)

_Removes a player from the op list_

Argument | Type | Description  
--- | --- | --- 
subject | `String` | the name of the player to de-op

Returns | 
--- | 
`void` |


---

### Public Fields for [`BackboneOperators`](BackboneOperators.md)

##### <a id='schema'></a>public static var __schema__

_schema field_

>Returns
>  [`OperatorsDataAccess`](OperatorsDataAccess.md)

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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

