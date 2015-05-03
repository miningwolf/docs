## WoodenStep __class__

>io.wolfscript.material.WoodenStep
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents the different types of wooden steps.

Method | Type   
--- | :--- 
new __WoodenStep__() <br> _WoodenStep constructor_ | _constructor_
 writeonly property __Inverted__ <br> _Inverted property_ | `void`
 function __clone__() <br> _clone method_ | [`WoodenStep`](WoodenStep.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`WoodenStep`](WoodenStep.md)

##### <a id='woodenstep'></a>new __WoodenStep__() 

_WoodenStep constructor_


---

### Public Properties for [`WoodenStep`](WoodenStep.md)

##### <a id='inverted'></a>public  writeonly property __Inverted__

_Inverted property_

Get | Description
--- | --- 
`void` | TreeSpecies of this tree /
    public TreeSpecies getSpecies() {
        return TreeSpecies.getByData((byte) (getData() & 0x3));
    }

    /** Sets the species of this tree

Set | Type | Description  
--- | --- | --- 
inv | `boolean` | - true if step is inverted (top half), false if step is normal (bottom half)


---

### Public Methods for [`WoodenStep`](WoodenStep.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`WoodenStep`](WoodenStep.md) |


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


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
	

