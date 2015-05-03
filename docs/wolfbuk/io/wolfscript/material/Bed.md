## Bed __class__

>io.wolfscript.material.Bed
>Extends [`MaterialData`](MaterialData.md)
>Implements [`Directional`](Directional.md)

---

### Class Overview

Represents a bed.

Method | Type   
--- | :--- 
 readonly property __Facing__ <br> _Get: Default constructor for a bed._ | [`BlockFace`](..\block\BlockFace.md)
 function __clone__() <br> _clone method_ | [`Bed`](Bed.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---


### Public Properties for [`Bed`](Bed.md)

##### <a id='facing'></a>public  readonly property __Facing__

_Get: Default constructor for a bed. /
    public Bed() {
        super(Material.BED_BLOCK);
    }

    /** Instantiate a bed facing in a particular direction._

Get | Description
--- | --- 
[`BlockFace`](..\block\BlockFace.md) | true if this is the head of the bed, false if it is the foot /
    public boolean isHeadOfBed() {
        return (getData() & 0x8) == 0x8;
    }

    /** Configure this to be either the head or the foot of the bed



---

### Public Methods for [`Bed`](Bed.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Bed`](Bed.md) |


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
	

