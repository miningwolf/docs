## PistonExtensionMaterial __class__

>io.wolfscript.material.PistonExtensionMaterial
>Extends [`MaterialData`](MaterialData.md)
>Implements [`Attachable`](Attachable.md)

---

### Class Overview

Material data for the piston extension block

Method | Type   
--- | :--- 
 readonly property __AttachedFace__ <br> _AttachedFace property_ | [`BlockFace`](..\block\BlockFace.md)
 writeonly property __Sticky__ <br> _Sticky property_ | `void`
 function __clone__() <br> _clone method_ | [`PistonExtensionMaterial`](PistonExtensionMaterial.md)
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---


### Public Properties for [`PistonExtensionMaterial`](PistonExtensionMaterial.md)

##### <a id='attachedface'></a>public  readonly property __AttachedFace__

_AttachedFace property_

Get | 
--- | 
[`BlockFace`](..\block\BlockFace.md) |



##### <a id='sticky'></a>public  writeonly property __Sticky__

_Sticky property_

Get | Description
--- | --- 
`void` | true if this piston is "sticky", or false /
    public boolean isSticky() {
        return (getData() & 8) == 8;
    }

    /** Sets whether or not this extension is sticky

Set | Type | Description  
--- | --- | --- 
sticky | `boolean` | true if sticky, otherwise false


---

### Public Methods for [`PistonExtensionMaterial`](PistonExtensionMaterial.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`PistonExtensionMaterial`](PistonExtensionMaterial.md) |


---

### Public Methods for [`MaterialData`](MaterialData.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`MaterialData`](MaterialData.md) |


##### <a id='equals'></a>public  function __equals__(obj)

_equals method_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | 
--- | 
`boolean` |


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


##### <a id='toitemstack'></a>public  function __toItemStack__(amount)

_toItemStack method_

Argument | Type | Description  
--- | --- | --- 
amount | `int` | The stack size of the new stack

Returns | Description
--- | --- 
`ItemStack` | Raw data


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

