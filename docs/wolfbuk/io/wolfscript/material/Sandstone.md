## Sandstone __class__

>io.wolfscript.material.Sandstone
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents the different types of sandstone.

Method | Type   
--- | :--- 
new __Sandstone__() <br> _Sandstone constructor_ | _constructor_
new __Sandstone__(type) <br> _Sandstone constructor_ | _constructor_
 writeonly property __Type__ <br> _Type property_ | `void`
 function __clone__() <br> _clone method_ | [`Sandstone`](Sandstone.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`Sandstone`](Sandstone.md)

##### <a id='sandstone'></a>new __Sandstone__() 

_Sandstone constructor_


##### <a id='sandstone'></a>new __Sandstone__(type) 

_Sandstone constructor_

Argument | Type | Description  
--- | --- | --- 
type | [`SandstoneType`](..\SandstoneType.md) | type argument

---

### Public Properties for [`Sandstone`](Sandstone.md)

##### <a id='type'></a>public  writeonly property __Type__

_Type property_

Get | Description
--- | --- 
`void` | SandstoneType of this sandstone /
    public SandstoneType getType() {
        return SandstoneType.getByData(getData());
    }

    /** Sets the type of this sandstone

Set | Type | Description  
--- | --- | --- 
type | [`SandstoneType`](..\SandstoneType.md) | the raw type id


---

### Public Methods for [`Sandstone`](Sandstone.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Sandstone`](Sandstone.md) |


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
	

