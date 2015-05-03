## CreatureType __enum__

>io.wolfscript.entity.CreatureType

---

### Enum Overview

Represents a type of creature.

Item | Type   
--- | :--- 
"Creeper": <br> _"Creeper" CreatureType_ | CreatureType
Creeper.class: <br> _Creeper.class CreatureType_ | CreatureType
"Skeleton": <br> _"Skeleton" CreatureType_ | CreatureType
Skeleton.class: <br> _Skeleton.class CreatureType_ | CreatureType
"Spider": <br> _"Spider" CreatureType_ | CreatureType
Spider.class: <br> _Spider.class CreatureType_ | CreatureType
"Giant": <br> _"Giant" CreatureType_ | CreatureType
Giant.class: <br> _Giant.class CreatureType_ | CreatureType
"Zombie": <br> _"Zombie" CreatureType_ | CreatureType
Zombie.class: <br> _Zombie.class CreatureType_ | CreatureType
"Slime": <br> _"Slime" CreatureType_ | CreatureType
Slime.class: <br> _Slime.class CreatureType_ | CreatureType
"Ghast": <br> _"Ghast" CreatureType_ | CreatureType
Ghast.class: <br> _Ghast.class CreatureType_ | CreatureType
"PigZombie": <br> _"PigZombie" CreatureType_ | CreatureType
PigZombie.class: <br> _PigZombie.class CreatureType_ | CreatureType
"Enderman": <br> _"Enderman" CreatureType_ | CreatureType
Enderman.class: <br> _Enderman.class CreatureType_ | CreatureType
"CaveSpider": <br> _"CaveSpider" CreatureType_ | CreatureType
CaveSpider.class: <br> _CaveSpider.class CreatureType_ | CreatureType
"Silverfish": <br> _"Silverfish" CreatureType_ | CreatureType
Silverfish.class: <br> _Silverfish.class CreatureType_ | CreatureType
"Blaze": <br> _"Blaze" CreatureType_ | CreatureType
Blaze.class: <br> _Blaze.class CreatureType_ | CreatureType
"LavaSlime": <br> _"LavaSlime" CreatureType_ | CreatureType
MagmaCube.class: <br> _MagmaCube.class CreatureType_ | CreatureType
"EnderDragon": <br> _"EnderDragon" CreatureType_ | CreatureType
EnderDragon.class: <br> _EnderDragon.class CreatureType_ | CreatureType
"Endermite": <br> _"Endermite" CreatureType_ | CreatureType
Endermite.class: <br> _Endermite.class CreatureType_ | CreatureType
"Guardian": <br> _"Guardian" CreatureType_ | CreatureType
Guardian.class: <br> _Guardian.class CreatureType_ | CreatureType
"Pig": <br> _"Pig" CreatureType_ | CreatureType
Pig.class: <br> _Pig.class CreatureType_ | CreatureType
"Sheep": <br> _"Sheep" CreatureType_ | CreatureType
Sheep.class: <br> _Sheep.class CreatureType_ | CreatureType
"Cow": <br> _"Cow" CreatureType_ | CreatureType
Cow.class: <br> _Cow.class CreatureType_ | CreatureType
"Chicken": <br> _"Chicken" CreatureType_ | CreatureType
Chicken.class: <br> _Chicken.class CreatureType_ | CreatureType
"Squid": <br> _"Squid" CreatureType_ | CreatureType
Squid.class: <br> _Squid.class CreatureType_ | CreatureType
"Wolf": <br> _"Wolf" CreatureType_ | CreatureType
Wolf.class: <br> _Wolf.class CreatureType_ | CreatureType
"MushroomCow": <br> _"MushroomCow" CreatureType_ | CreatureType
MushroomCow.class: <br> _MushroomCow.class CreatureType_ | CreatureType
"SnowMan": <br> _"SnowMan" CreatureType_ | CreatureType
Snowman.class: <br> _Snowman.class CreatureType_ | CreatureType
"Rabbit": <br> _"Rabbit" CreatureType_ | CreatureType
Rabbit.class: <br> _Rabbit.class CreatureType_ | CreatureType
"Villager": <br> _"Villager" CreatureType_ | CreatureType
Villager.class: <br> _Villager.class CreatureType_ | CreatureType
 readonly property __Name__ <br> _Name property_ | `String`
static function __fromEntityType__(creatureType) <br> _fromEntityType method_ | [`CreatureType`](CreatureType.md)
 function __toEntityType__() <br> _toEntityType method_ | [`EntityType`](EntityType.md)



---


### Public Properties for [`CreatureType`](CreatureType.md)

##### <a id='name'></a>public  readonly property __Name__

_Name property_

Get | 
--- | 
`String` |



---

### Public Methods for [`CreatureType`](CreatureType.md)

##### <a id='fromentitytype'></a>public static function __fromEntityType__(creatureType)

_fromEntityType method_

Argument | Type | Description  
--- | --- | --- 
creatureType | [`EntityType`](EntityType.md) | creatureType argument

Returns | 
--- | 
[`CreatureType`](CreatureType.md) |


##### <a id='fromid'></a>public static function __fromId__(id)
_Deprecated: Magic value /
    @Deprecated
    public short getTypeId() {
        return typeId;
    }

    public static CreatureType fromName(String name) {
        return NAME_MAP.get(name);
    }

    /** Magic value_

_fromId method_

Argument | Type | Description  
--- | --- | --- 
id | `int` | the raw type id

Returns | Description
--- | --- 
[`CreatureType`](CreatureType.md) | the raw type id


##### <a id='toentitytype'></a>public  function __toEntityType__()

_toEntityType method_

Returns | 
--- | 
[`EntityType`](EntityType.md) |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

