## Tripwire __class__

>io.wolfscript.material.Tripwire
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents the tripwire

Method | Type   
--- | :--- 
new __Tripwire__() <br> _Tripwire constructor_ | _constructor_
 writeonly property __ObjectTriggering__ <br> _ObjectTriggering property_ | `void`
 function __clone__() <br> _clone method_ | [`Tripwire`](Tripwire.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`Tripwire`](Tripwire.md)

##### <a id='tripwire'></a>new __Tripwire__() 

_Tripwire constructor_


---

### Public Properties for [`Tripwire`](Tripwire.md)

##### <a id='objecttriggering'></a>public  writeonly property __ObjectTriggering__

_ObjectTriggering property_

Get | Description
--- | --- 
`void` | true if activated, false if not /
    public boolean isActivated() {
        return (getData() & 0x4) != 0;
    }
    
    /** Set tripwire activated state

Set | Type | Description  
--- | --- | --- 
trig | `boolean` | - true if object activating tripwire, false if not


---

### Public Methods for [`Tripwire`](Tripwire.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Tripwire`](Tripwire.md) |


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
	

