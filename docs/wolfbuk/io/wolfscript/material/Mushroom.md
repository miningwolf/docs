## Mushroom __class__

>io.wolfscript.material.Mushroom
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents a huge mushroom block

Method | Type   
--- | :--- 
new __Mushroom__(shroom) <br> _Mushroom constructor_ | _constructor_
 readonly property __PaintedFaces__ <br> _PaintedFaces property_ | `Set<BlockFace>`
 function __clone__() <br> _clone method_ | [`Mushroom`](Mushroom.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`Mushroom`](Mushroom.md)

##### <a id='mushroom'></a>new __Mushroom__(shroom) 

_Mushroom constructor_

Argument | Type | Description  
--- | --- | --- 
shroom | [`Material`](..\Material.md) | shroom argument

---

### Public Properties for [`Mushroom`](Mushroom.md)

##### <a id='paintedfaces'></a>public  readonly property __PaintedFaces__

_PaintedFaces property_

Get | Description
--- | --- 
`Set<BlockFace>` | Whether this is a mushroom stem. /
    public boolean isStem() {
        return getData() == SHROOM_STEM;
    }

    /** Sets this to be a mushroom stem. /
    public void setStem() {
        setData((byte) 10);
    }

    /** Checks whether a face of the block is painted.



---

### Public Methods for [`Mushroom`](Mushroom.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Mushroom`](Mushroom.md) |


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
	

