## Vine __class__

>io.wolfscript.material.Vine
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents a vine

Method | Type   
--- | :--- 
new __Vine__() <br> _Vine constructor_ | _constructor_
 function __clone__() <br> _clone method_ | [`Vine`](Vine.md)
 function __removeFromFace__(face) <br> _removeFromFace method_ | `void`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`Vine`](Vine.md)

##### <a id='vine'></a>new __Vine__() 

_Vine constructor_


---

### Public Methods for [`Vine`](Vine.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Vine`](Vine.md) |


##### <a id='removefromface'></a>public  function __removeFromFace__(face)

_removeFromFace method_

Argument | Type | Description  
--- | --- | --- 
face | [`BlockFace`](..\block\BlockFace.md) | The face to check.

Returns | Description
--- | --- 
`void` | Whether it is attached to that face. /
    public boolean isOnFace(BlockFace face) {
        switch (face) {
            case WEST:
                return (getData() & VINE_WEST) == VINE_WEST;
            case NORTH:
                return (getData() & VINE_NORTH) == VINE_NORTH;
            case SOUTH:
                return (getData() & VINE_SOUTH) == VINE_SOUTH;
            case EAST:
                return (getData() & VINE_EAST) == VINE_EAST;
            case NORTH_EAST:
                return isOnFace(BlockFace.EAST) && isOnFace(BlockFace.NORTH);
            case NORTH_WEST:
                return isOnFace(BlockFace.WEST) && isOnFace(BlockFace.NORTH);
            case SOUTH_EAST:
                return isOnFace(BlockFace.EAST) && isOnFace(BlockFace.SOUTH);
            case SOUTH_WEST:
                return isOnFace(BlockFace.WEST) && isOnFace(BlockFace.SOUTH);
            case UP: // It's impossible to be accurate with this since it's contextual
                return true;
            default:
                return false;
        }
    }

    /** Attach the vine to the specified face of an adjacent block.


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
	

