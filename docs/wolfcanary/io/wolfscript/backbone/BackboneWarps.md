## BackboneWarps __class__

>io.wolfscript.backbone.BackboneWarps
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the warps system This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackboneWarps__() <br> _BackboneWarps constructor_ | _constructor_
 function __loadWarps__() <br> _Creates a groups array._ | `List<Warp>`
 |
__Inherited items from [`Backbone`](Backbone.md)__ |
new __Backbone__(system) <br> _Backbone constructor_ | _constructor_
 readonly property __System__ <br> _Get: Get the System of this backbone_ | `System`





---

### Public Constructors for [`BackboneWarps`](BackboneWarps.md)

##### <a id='backbonewarps'></a>new __BackboneWarps__() 

_BackboneWarps constructor_


---

### Public Methods for [`BackboneWarps`](BackboneWarps.md)

##### <a id='loadwarps'></a>public  function __loadWarps__()

_Creates a groups array. IMPORTANT NOTE: This requires the groups backbone to be loaded already!_

Returns | Description
--- | --- 
`List<Warp>` | group array /
    private Group[] makeGroupArray(List<String> groups) {
        Group[] data = new Group[groups.size()];

        for (int i = 0; i < groups.size(); ++i) {
            data[i] = Wolf.usersAndGroups().getGroup(groups.get(i));
        }
        return data;
    }

    /** Add a new Warp to the list of Warps.


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
	

