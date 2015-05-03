## SpawnEgg __class__

>io.wolfscript.material.SpawnEgg
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents a spawn egg that can be used to spawn mobs

Method | Type   
--- | :--- 
new __SpawnEgg__() <br> _SpawnEgg constructor_ | _constructor_
 writeonly property __SpawnedType__ <br> _SpawnedType property_ | `void`
 function __clone__() <br> _clone method_ | [`SpawnEgg`](SpawnEgg.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`SpawnEgg`](SpawnEgg.md)

##### <a id='spawnegg'></a>new __SpawnEgg__() 

_SpawnEgg constructor_


---

### Public Properties for [`SpawnEgg`](SpawnEgg.md)

##### <a id='spawnedtype'></a>public  writeonly property __SpawnedType__

_SpawnedType property_

Get | Description
--- | --- 
`void` | The entity type. /
    public EntityType getSpawnedType() {
        return EntityType.fromId(getData());
    }

    /** Set the type of entity this egg will spawn.

Set | Type | Description  
--- | --- | --- 
type | [`EntityType`](..\entity\EntityType.md) | the raw type id


---

### Public Methods for [`SpawnEgg`](SpawnEgg.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`SpawnEgg`](SpawnEgg.md) |


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
	

