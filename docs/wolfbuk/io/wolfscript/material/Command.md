## Command __class__

>io.wolfscript.material.Command
>Extends [`MaterialData`](MaterialData.md)
>Implements [`Redstone`](Redstone.md)

---

### Class Overview

Represents a command block

Method | Type   
--- | :--- 
new __Command__() <br> _Command constructor_ | _constructor_
 writeonly property __Powered__ <br> _Powered property_ | `void`
 function __clone__() <br> _clone method_ | [`Command`](Command.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`Command`](Command.md)

##### <a id='command'></a>new __Command__() 

_Command constructor_


---

### Public Properties for [`Command`](Command.md)

##### <a id='powered'></a>public  writeonly property __Powered__

_Powered property_

Get | Description
--- | --- 
`void` | true if powered, otherwise false /
    public boolean isPowered() {
        return (getData() & 1) != 0;
    }

    /** Sets the current state of this Material

Set | Type | Description  
--- | --- | --- 
bool | `boolean` | whether or not the command block is powered


---

### Public Methods for [`Command`](Command.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Command`](Command.md) |


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
	

