## Cake __class__

>io.wolfscript.material.Cake
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

class Cake

Method | Type   
--- | :--- 
new __Cake__() <br> _Cake constructor_ | _constructor_
 writeonly property __SlicesRemaining__ <br> _SlicesRemaining property_ | `void`
 function __clone__() <br> _clone method_ | [`Cake`](Cake.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`Cake`](Cake.md)

##### <a id='cake'></a>new __Cake__() 

_Cake constructor_


---

### Public Properties for [`Cake`](Cake.md)

##### <a id='slicesremaining'></a>public  writeonly property __SlicesRemaining__

_SlicesRemaining property_

Get | Description
--- | --- 
`void` | The number of slices eaten /
    public int getSlicesEaten() {
        return getData();
    }

    /** Gets the number of slices remaining on this cake

Set | Type | Description  
--- | --- | --- 
n | `int` | The number of slices eaten /
    public void setSlicesEaten(int n) {
        if (n < 6) {
            setData((byte) n);
        } // TODO: else destroy the block? Probably not possible though
    }

    /** Sets the number of slices remaining on this cake


---

### Public Methods for [`Cake`](Cake.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Cake`](Cake.md) |


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
	

