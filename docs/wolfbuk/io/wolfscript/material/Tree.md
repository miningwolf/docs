## Tree __class__

>io.wolfscript.material.Tree
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents the different types of Trees.

Method | Type   
--- | :--- 
new __Tree__() <br> _Tree constructor_ | _constructor_
new __Tree__(species) <br> _Tree constructor_ | _constructor_
new __Tree__(species, dir) <br> _Tree constructor_ | _constructor_
 writeonly property __Direction__ <br> _Direction property_ | `void`
 function __clone__() <br> _clone method_ | [`Tree`](Tree.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`Tree`](Tree.md)

##### <a id='tree'></a>new __Tree__() 

_Tree constructor_


##### <a id='tree'></a>new __Tree__(species) 

_Tree constructor_

Argument | Type | Description  
--- | --- | --- 
species | [`TreeSpecies`](..\TreeSpecies.md) | species argument

##### <a id='tree'></a>new __Tree__(species, dir) 

_Tree constructor_

Argument | Type | Description  
--- | --- | --- 
species | [`TreeSpecies`](..\TreeSpecies.md) | species argument
dir | [`BlockFace`](..\block\BlockFace.md) | dir argument

---

### Public Properties for [`Tree`](Tree.md)

##### <a id='direction'></a>public  writeonly property __Direction__

_Direction property_

Get | Description
--- | --- 
`void` | TreeSpecies of this tree /
    public TreeSpecies getSpecies() {
        return TreeSpecies.getByData((byte) (getData() & 0x3));
    }

    /** Sets the species of this tree

Set | Type | Description  
--- | --- | --- 
dir | [`BlockFace`](..\block\BlockFace.md) | - direction of end of log (BlockFace.SELF for no direction)


---

### Public Methods for [`Tree`](Tree.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Tree`](Tree.md) |


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
	

