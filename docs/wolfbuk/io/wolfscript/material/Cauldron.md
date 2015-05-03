## Cauldron __class__

>io.wolfscript.material.Cauldron
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents a cauldron

Method | Type   
--- | :--- 
new __Cauldron__() <br> _Cauldron constructor_ | _constructor_
 function __clone__() <br> _clone method_ | [`Cauldron`](Cauldron.md)
 function __isEmpty__() <br> _isEmpty method_ | `boolean`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`Cauldron`](Cauldron.md)

##### <a id='cauldron'></a>new __Cauldron__() 

_Cauldron constructor_


---

### Public Methods for [`Cauldron`](Cauldron.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Cauldron`](Cauldron.md) |


##### <a id='isempty'></a>public  function __isEmpty__()

_isEmpty method_

Returns | Description
--- | --- 
`boolean` | True if it is full. /
    public boolean isFull() {
        return getData() >= CAULDRON_FULL;
    }

    /** Check if the cauldron is empty.


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
	
