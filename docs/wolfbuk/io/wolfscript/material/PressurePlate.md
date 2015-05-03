## PressurePlate __class__

>io.wolfscript.material.PressurePlate
>Extends [`MaterialData`](MaterialData.md)
>Implements [`PressureSensor`](PressureSensor.md)

---

### Class Overview

Represents a pressure plate

Method | Type   
--- | :--- 
new __PressurePlate__() <br> _PressurePlate constructor_ | _constructor_
 function __clone__() <br> _clone method_ | [`PressurePlate`](PressurePlate.md)
 function __isPressed__() <br> _isPressed method_ | `boolean`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`PressurePlate`](PressurePlate.md)

##### <a id='pressureplate'></a>new __PressurePlate__() 

_PressurePlate constructor_


##### <a id='pressureplate'></a>new __PressurePlate__(type, data) 
_Deprecated: Magic value /
    @Deprecated
    public PressurePlate(int type) {
        super(type);
    }

    public PressurePlate(Material type) {
        super(type);
    }

    /** Magic value /
    @Deprecated
    public PressurePlate(int type, byte data) {
        super(type, data);
    }

    /** Magic value_

_PressurePlate constructor_

Argument | Type | Description  
--- | --- | --- 
type | [`Material`](..\Material.md) | the raw type id
data | `byte` | the raw data value

---

### Public Methods for [`PressurePlate`](PressurePlate.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`PressurePlate`](PressurePlate.md) |


##### <a id='ispressed'></a>public  function __isPressed__()

_isPressed method_

Returns | 
--- | 
`boolean` |


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
	

