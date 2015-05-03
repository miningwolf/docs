## Dye __class__

>io.wolfscript.material.Dye
>Extends [`MaterialData`](MaterialData.md)
>Implements [`Colorable`](Colorable.md)

---

### Class Overview

Represents dye

Method | Type   
--- | :--- 
new __Dye__() <br> _Dye constructor_ | _constructor_
 writeonly property __Color__ <br> _Color property_ | `void`
 function __clone__() <br> _clone method_ | [`Dye`](Dye.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`Dye`](Dye.md)

##### <a id='dye'></a>new __Dye__() 

_Dye constructor_


---

### Public Properties for [`Dye`](Dye.md)

##### <a id='color'></a>public  writeonly property __Color__

_Color property_

Get | Description
--- | --- 
`void` | DyeColor of this dye /
    public DyeColor getColor() {
        return DyeColor.getByDyeData(getData());
    }

    /** Sets the color of this dye

Set | Type | Description  
--- | --- | --- 
color | [`DyeColor`](..\DyeColor.md) | New color of this dye


---

### Public Methods for [`Dye`](Dye.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Dye`](Dye.md) |


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
	

