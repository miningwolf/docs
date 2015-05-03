## Crops __class__

>io.wolfscript.material.Crops
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents the different types of crops.

Method | Type   
--- | :--- 
new __Crops__() <br> _Crops constructor_ | _constructor_
new __Crops__(state) <br> _Crops constructor_ | _constructor_
 writeonly property __State__ <br> _State property_ | `void`
 function __clone__() <br> _clone method_ | [`Crops`](Crops.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`Crops`](Crops.md)

##### <a id='crops'></a>new __Crops__() 

_Crops constructor_


##### <a id='crops'></a>new __Crops__(state) 

_Crops constructor_

Argument | Type | Description  
--- | --- | --- 
state | [`CropState`](..\CropState.md) | state argument

---

### Public Properties for [`Crops`](Crops.md)

##### <a id='state'></a>public  writeonly property __State__

_State property_

Get | Description
--- | --- 
`void` | CropState of this crop /
    public CropState getState() {
        return CropState.getByData(getData());
    }

    /** Sets the growth state of this crop

Set | Type | Description  
--- | --- | --- 
state | [`CropState`](..\CropState.md) | New growth state of this crop


---

### Public Methods for [`Crops`](Crops.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Crops`](Crops.md) |


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
	

