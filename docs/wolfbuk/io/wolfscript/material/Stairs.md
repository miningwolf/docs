## Stairs __class__

>io.wolfscript.material.Stairs
>Extends [`MaterialData`](MaterialData.md)
>Implements [`Directional`](Directional.md)

---

### Class Overview

Represents stairs.

Method | Type   
--- | :--- 
 writeonly property __Inverted__ <br> _Inverted property_ | `void`
 function __clone__() <br> _clone method_ | [`Stairs`](Stairs.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---


### Public Properties for [`Stairs`](Stairs.md)

##### <a id='inverted'></a>public  writeonly property __Inverted__

_Inverted property_

Get | Description
--- | --- 
`void` | the direction the stairs ascend towards /
    public BlockFace getAscendingDirection() {
        byte data = getData();

        switch (data & 0x3) {
        case 0x0:
        default:
            return BlockFace.EAST;

        case 0x1:
            return BlockFace.WEST;

        case 0x2:
            return BlockFace.SOUTH;

        case 0x3:
            return BlockFace.NORTH;
        }
    }

    /**

Set | Type | Description  
--- | --- | --- 
inv | `boolean` | - true if step is inverted (top half), false if step is normal (bottom half)


---

### Public Methods for [`Stairs`](Stairs.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Stairs`](Stairs.md) |


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
	

