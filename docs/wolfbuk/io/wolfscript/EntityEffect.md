## EntityEffect __enum__

>io.wolfscript.EntityEffect

---

### Enum Overview

A list of all Effects that can happen to entities.

Item | Type   
--- | :--- 
FIREWORK_EXPLODE: 17<br> _When mobs get hurt._ | EntityEffect



---


### Public Methods for [`EntityEffect`](EntityEffect.md)

##### <a id='getbydata'></a>public static function __getByData__(byte)
_Deprecated: Magic value /
    @Deprecated
    public byte getData() {
        return data;
    }

    /** Gets the EntityEffect with the given data value Magic value_

_When mobs get hurt. /
    HURT(2),

    /** When a mob dies. <p> <b>This will cause client-glitches!</b> /
    DEATH(3),

    /** The smoke when taming a wolf fails. <p> Without client-mods this will be ignored if the entity is not a wolf. /
    WOLF_SMOKE(6),

    /** The hearts when taming a wolf succeeds. <p> Without client-mods this will be ignored if the entity is not a wolf. /
    WOLF_HEARTS(7),

    /** When a wolf shakes (after being wet). <p> Without client-mods this will be ignored if the entity is not a wolf. /
    WOLF_SHAKE(8),

    /** When a sheep eats a LONG_GRASS block. /
    SHEEP_EAT(10),

    /** When an Iron Golem gives a rose. <p> This will not play an effect if the entity is not an iron golem. /
    IRON_GOLEM_ROSE(11),

    /** Hearts from a villager. <p> This will not play an effect if the entity is not a villager. /
    VILLAGER_HEART(12),

    /** When a villager is angry. <p> This will not play an effect if the entity is not a villager. /
    VILLAGER_ANGRY(13),

    /** Happy particles from a villager. <p> This will not play an effect if the entity is not a villager. /
    VILLAGER_HAPPY(14),

    /** Magic particles from a witch. <p> This will not play an effect if the entity is not a witch. /
    WITCH_MAGIC(15),

    /** When a zombie transforms into a villager by shaking violently. <p> This will not play an effect if the entity is not a zombie. /
    ZOMBIE_TRANSFORM(16),

    /** When a firework explodes. <p> This will not play an effect if the entity is not a firework. /
    FIREWORK_EXPLODE(17);

    private final byte data;
    private final static Map<Byte, EntityEffect> BY_DATA = Maps.newHashMap();

    EntityEffect(final int data) {
        this.data = (byte) data;
    }

    /** Gets the data value of this EntityEffect_

Argument | Type | Description  
--- | --- | --- 
byte | `final` | byte argument

Returns | Description
--- | --- 
[`EntityEffect`](EntityEffect.md) | The data value


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

