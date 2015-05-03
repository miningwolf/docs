## BackboneGroups __class__

>io.wolfscript.backbone.BackboneGroups
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the groups System. This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackboneGroups__() <br> _BackboneGroups constructor_ | _constructor_
static function __createDefaults__() <br> _Add a new Group to the list of Groups._ | `void`
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

##### <a id='createdefaults'></a>public static function __createDefaults__()

_Add a new Group to the list of Groups._

Returns | Description
--- | --- 
`void` | true - the group is in the list<br> false - the group is not in the list. /
    private boolean alreadyInList(String name, List<Group> list) {
        for (Group g : list) {
            if (g.getName().equals(name)) {
                return true;
            }
        }
        return false;
    }

    /** Load and return all recorded groups


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
	

