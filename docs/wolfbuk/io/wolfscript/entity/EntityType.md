## EntityType __enum__

>io.wolfscript.entity.EntityType

---

### Enum Overview

enum EntityType

Item | Type   
--- | :--- 
Location: <br> _Location EntityType_ | EntityType
Location: <br> _Location EntityType_ | EntityType
"Item": <br> _"Item" EntityType_ | EntityType
Item.class: <br> _Item.class EntityType_ | EntityType
1: <br> _1 EntityType_ | EntityType
"XPOrb": <br> _"XPOrb" EntityType_ | EntityType
ExperienceOrb.class: <br> _ExperienceOrb.class EntityType_ | EntityType
"LeashKnot": <br> _"LeashKnot" EntityType_ | EntityType
LeashHitch.class: <br> _LeashHitch.class EntityType_ | EntityType
"Painting": <br> _"Painting" EntityType_ | EntityType
Painting.class: <br> _Painting.class EntityType_ | EntityType
projectile: <br> _projectile EntityType_ | EntityType
 function __isAlive__() <br> _isAlive method_ | `boolean`
 function __isSpawnable__() <br> _Some entities cannot be spawned using {@link_ | `boolean`



---


### Public Properties for [`EntityType`](EntityType.md)

##### <a id='name'></a>public  readonly property __Name__
_Deprecated: Magic value_

_Name property_

Get | Description
--- | --- 
`String` | the entity type's name



##### <a id='typeid'></a>public  readonly property __TypeId__
_Deprecated: Magic value_

_TypeId property_

Get | Description
--- | --- 
`short` | the raw type id



---

### Public Methods for [`EntityType`](EntityType.md)

##### <a id='fromid'></a>public static function __fromId__(id)
_Deprecated: Magic value_

_fromId method_

Argument | Type | Description  
--- | --- | --- 
id | `int` | the raw type id

Returns | Description
--- | --- 
[`EntityType`](EntityType.md) | the matching entity type or null


##### <a id='fromname'></a>public static function __fromName__(name)
_Deprecated: Magic value_

_fromName method_

Argument | Type | Description  
--- | --- | --- 
name | `String` | the entity type's name

Returns | Description
--- | --- 
[`EntityType`](EntityType.md) | the matching entity type or null


##### <a id='isalive'></a>public  function __isAlive__()

_isAlive method_

Returns | 
--- | 
`boolean` |


##### <a id='isspawnable'></a>public  function __isSpawnable__()

_Some entities cannot be spawned using {@link World#spawnEntity(Location, EntityType)} or {@link World#spawn(Location, Class)}, usually because they require additional information in order to spawn._

Returns | Description
--- | --- 
`boolean` | False if the entity type cannot be spawned


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

