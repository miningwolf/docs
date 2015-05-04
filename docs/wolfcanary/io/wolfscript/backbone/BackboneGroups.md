## BackboneGroups __class__

>io.wolfscript.backbone.BackboneGroups
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the groups System. This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackboneGroups__() <br> _BackboneGroups constructor_ | _constructor_
 function __addGroup__(group) <br> _Add a new Group to the list of Groups._ | `void`
static function __createDefaults__() <br> _Creates a set of default groups and puts them into the database_ | `void`
 function __removeGroup__(group) <br> _Remove a group from the data source_ | `void`
 function __renameGroup__(subject, newname) <br> _renameGroup method_ | `void`
 function __updateGroup__(group) <br> _Update a Group and all its child groups._ | `void`
 |
__Inherited items from [`Backbone`](Backbone.md)__ |
new __Backbone__(system) <br> _Backbone constructor_ | _constructor_
 readonly property __System__ <br> _Get: Get the System of this backbone_ | `System`





---

### Public Constructors for [`BackboneGroups`](BackboneGroups.md)

##### <a id='backbonegroups'></a>new __BackboneGroups__() 

_BackboneGroups constructor_


---

### Public Methods for [`BackboneGroups`](BackboneGroups.md)

##### <a id='addgroup'></a>public  function __addGroup__(group)

_Add a new Group to the list of Groups._

Argument | Type | Description  
--- | --- | --- 
group | [`Group`](../user/Group.md) | The group instance to add.

Returns | 
--- | 
`void` |


##### <a id='createdefaults'></a>public static function __createDefaults__()

_Creates a set of default groups and puts them into the database_

Returns | 
--- | 
`void` |


##### <a id='removegroup'></a>public  function __removeGroup__(group)

_Remove a group from the data source_

Argument | Type | Description  
--- | --- | --- 
group | [`Group`](../user/Group.md) | the Group instance to remove.

Returns | 
--- | 
`void` |


##### <a id='renamegroup'></a>public  function __renameGroup__(subject, newname)

_renameGroup method_

Argument | Type | Description  
--- | --- | --- 
subject | [`Group`](../user/Group.md) | subject argument
newname | `String` | newname argument

Returns | 
--- | 
`void` |


##### <a id='updategroup'></a>public  function __updateGroup__(group)

_Update a Group and all its child groups. This will not perform rename operations properly. For renaming groups, use renameGroup()_

Argument | Type | Description  
--- | --- | --- 
group | [`Group`](../user/Group.md) | The group instance to update to the database.

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
	

