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
 function __isSpawnable__() <br> _An item resting on the ground._ | `boolean`



---


### Public Methods for [`EntityType`](EntityType.md)

##### <a id='isalive'></a>public  function __isAlive__()

_isAlive method_

Returns | 
--- | 
`boolean` |


##### <a id='isspawnable'></a>public  function __isSpawnable__()

_An item resting on the ground. <p> Spawn with {@link World#dropItem(Location, ItemStack)} or {@link World#dropItemNaturally(Location, ItemStack)} /
    DROPPED_ITEM("Item", Item.class, 1, false),
    /** An experience orb. /
    EXPERIENCE_ORB("XPOrb", ExperienceOrb.class, 2),
    /** A leash attached to a fencepost. /
    LEASH_HITCH("LeashKnot", LeashHitch.class, 8),
    /** A painting on a wall. /
    PAINTING("Painting", Painting.class, 9),
    /** An arrow projectile; may get stuck in the ground. /
    ARROW("Arrow", Arrow.class, 10),
    /** A flying snowball. /
    SNOWBALL("Snowball", Snowball.class, 11),
    /** A flying large fireball, as thrown by a Ghast for example. /
    FIREBALL("Fireball", LargeFireball.class, 12),
    /** A flying small fireball, such as thrown by a Blaze or player. /
    SMALL_FIREBALL("SmallFireball", SmallFireball.class, 13),
    /** A flying ender pearl. /
    ENDER_PEARL("ThrownEnderpearl", EnderPearl.class, 14),
    /** An ender eye signal. /
    ENDER_SIGNAL("EyeOfEnderSignal", EnderSignal.class, 15),
    /** A flying experience bottle. /
    THROWN_EXP_BOTTLE("ThrownExpBottle", ThrownExpBottle.class, 17),
    /** An item frame on a wall. /
    ITEM_FRAME("ItemFrame", ItemFrame.class, 18),
    /** A flying wither skull projectile. /
    WITHER_SKULL("WitherSkull", WitherSkull.class, 19),
    /** Primed TNT that is about to explode. /
    PRIMED_TNT("PrimedTnt", TNTPrimed.class, 20),
    /** A block that is going to or is about to fall. /
    FALLING_BLOCK("FallingSand", FallingBlock.class, 21, false),
    FIREWORK("FireworksRocketEntity", Firework.class, 22, false),
    ARMOR_STAND("ArmorStand", ArmorStand.class, 30, false),
    /**_

Returns | Description
--- | --- 
`boolean` | the entity type's name


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

