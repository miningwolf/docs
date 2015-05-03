## LongGrass __class__

>io.wolfscript.material.LongGrass
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents the different types of long grasses.

Method | Type   
--- | :--- 
new __LongGrass__() <br> _LongGrass constructor_ | _constructor_
new __LongGrass__(species) <br> _LongGrass constructor_ | _constructor_
 writeonly property __Species__ <br> _Species property_ | `void`
 function __clone__() <br> _clone method_ | [`LongGrass`](LongGrass.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`LongGrass`](LongGrass.md)

##### <a id='longgrass'></a>new __LongGrass__() 

_LongGrass constructor_


##### <a id='longgrass'></a>new __LongGrass__(species) 

_LongGrass constructor_

Argument | Type | Description  
--- | --- | --- 
species | [`GrassSpecies`](..\GrassSpecies.md) | species argument

---

### Public Properties for [`LongGrass`](LongGrass.md)

##### <a id='species'></a>public  writeonly property __Species__

_Species property_

Get | Description
--- | --- 
`void` | GrassSpecies of this grass /
    public GrassSpecies getSpecies() {
        return GrassSpecies.getByData(getData());
    }

    /** Sets the species of this grass

Set | Type | Description  
--- | --- | --- 
species | [`GrassSpecies`](..\GrassSpecies.md) | New species of this grass


---

### Public Methods for [`LongGrass`](LongGrass.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`LongGrass`](LongGrass.md) |


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
	

