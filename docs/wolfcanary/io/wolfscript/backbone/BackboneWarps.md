## BackboneWarps __class__

>io.wolfscript.backbone.BackboneWarps
>Extends [`Backbone`](Backbone.md)

---

### Class Overview

Backbone to the warps system This contains NO logic, it is only the data source access!

Method | Type   
--- | :--- 
new __BackboneWarps__() <br> _BackboneWarps constructor_ | _constructor_
 function __addWarp__(warp) <br> _Add a new Warp to the list of Warps._ | `void`
 function __loadWarps__() <br> _Load and return all warps_ | `List<Warp>`
 function __removeWarp__(warp) <br> _Remove a Warp from the data source_ | `void`
 function __updateWarp__(warp) <br> _Update a Warp_ | `void`
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

##### <a id='addwarp'></a>public  function __addWarp__(warp)

_Add a new Warp to the list of Warps._

Argument | Type | Description  
--- | --- | --- 
warp | [`Warp`](../warp/Warp.md) | Warp instance to add to the data source.

Returns | 
--- | 
`void` |


##### <a id='loadwarps'></a>public  function __loadWarps__()

_Load and return all warps_

Returns | Description
--- | --- 
`List<Warp>` | An ArrayList containing all loaded Warp instances.


##### <a id='removewarp'></a>public  function __removeWarp__(warp)

_Remove a Warp from the data source_

Argument | Type | Description  
--- | --- | --- 
warp | [`Warp`](../warp/Warp.md) | Warp instance to remove from the data source.

Returns | 
--- | 
`void` |


##### <a id='updatewarp'></a>public  function __updateWarp__(warp)

_Update a Warp_

Argument | Type | Description  
--- | --- | --- 
warp | [`Warp`](../warp/Warp.md) | Warp instance to update to the data source.

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


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

