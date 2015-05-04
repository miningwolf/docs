## BackboneKits __class__

>io.wolfscript.backbone.BackboneKits
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the kits System. This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackboneKits__() <br> _BackboneKits constructor_ | _constructor_
 function __addKit__(kit) <br> _Add a new Kit to the list of Kits._ | `void`
 function __getKit__(name) <br> _Get a Kit with the given name_ | [`Kit`](../kit/Kit.md)
 function __loadKits__() <br> _Load and return all kits_ | `List<Kit>`
 function __removeKit__(kit) <br> _Remove a Kit from the data source_ | `void`
 function __updateKit__(kit) <br> _Update a Kit_ | `void`
 |
__Inherited items from [`Backbone`](Backbone.md)__ |
new __Backbone__(system) <br> _Backbone constructor_ | _constructor_
 readonly property __System__ <br> _Get: Get the System of this backbone_ | `System`





---

### Public Constructors for [`BackboneKits`](BackboneKits.md)

##### <a id='backbonekits'></a>new __BackboneKits__() 

_BackboneKits constructor_


---

### Public Methods for [`BackboneKits`](BackboneKits.md)

##### <a id='addkit'></a>public  function __addKit__(kit)

_Add a new Kit to the list of Kits._

Argument | Type | Description  
--- | --- | --- 
kit | [`Kit`](../kit/Kit.md) | Adds the kit instance to the list of kits.

Returns | 
--- | 
`void` |


##### <a id='getkit'></a>public  function __getKit__(name)

_Get a Kit with the given name_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the kit to get.

Returns | Description
--- | --- 
[`Kit`](../kit/Kit.md) | a Kit object if that Kit was found, null otherwise


##### <a id='loadkits'></a>public  function __loadKits__()

_Load and return all kits_

Returns | Description
--- | --- 
`List<Kit>` | An ArrayList of all kits.


##### <a id='removekit'></a>public  function __removeKit__(kit)

_Remove a Kit from the data source_

Argument | Type | Description  
--- | --- | --- 
kit | [`Kit`](../kit/Kit.md) | Removes the kit instance from the list of kits.

Returns | 
--- | 
`void` |


##### <a id='updatekit'></a>public  function __updateKit__(kit)

_Update a Kit_

Argument | Type | Description  
--- | --- | --- 
kit | [`Kit`](../kit/Kit.md) | Update this kit instance to the database.

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
	

