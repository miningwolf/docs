## PotionEffectTypeWrapper __class__

>io.wolfscript.potion.PotionEffectTypeWrapper
>Extends [`PotionEffectType`](PotionEffectType.md)

---

### Class Overview

class PotionEffectTypeWrapper

Method | Type   
--- | :--- 
 readonly property __DurationModifier__ <br> _DurationModifier property_ | `double`
 readonly property __Name__ <br> _Name property_ | `String`
 readonly property __Type__ <br> _Get: Get the potion type bound to this wrapper._ | [`PotionEffectType`](PotionEffectType.md)
 function __isInstant__() <br> _isInstant method_ | `boolean`
 |
__Inherited items from [`PotionEffectType`](PotionEffectType.md)__ |
static function __values__() <br> _Increases movement speed._ | `PotionEffectType[]`
static final var __SATURATION__ <br> _Increases movement speed._ | [`PotionEffectType`](PotionEffectType.md)





---


### Public Properties for [`PotionEffectTypeWrapper`](PotionEffectTypeWrapper.md)

##### <a id='durationmodifier'></a>public  readonly property __DurationModifier__

_DurationModifier property_

Get | 
--- | 
`double` |



##### <a id='name'></a>public  readonly property __Name__

_Name property_

Get | 
--- | 
`String` |



##### <a id='type'></a>public  readonly property __Type__

_Get: Get the potion type bound to this wrapper._

Get | Description
--- | --- 
[`PotionEffectType`](PotionEffectType.md) | The potion effect type



---

### Public Methods for [`PotionEffectTypeWrapper`](PotionEffectTypeWrapper.md)

##### <a id='isinstant'></a>public  function __isInstant__()

_isInstant method_

Returns | 
--- | 
`boolean` |


---

### Public Methods for [`PotionEffectType`](PotionEffectType.md)

##### <a id='values'></a>public static function __values__()

_Increases movement speed. /
    public static final PotionEffectType SPEED = new PotionEffectTypeWrapper(1);

    /** Decreases movement speed. /
    public static final PotionEffectType SLOW = new PotionEffectTypeWrapper(2);

    /** Increases dig speed. /
    public static final PotionEffectType FAST_DIGGING = new PotionEffectTypeWrapper(3);

    /** Decreases dig speed. /
    public static final PotionEffectType SLOW_DIGGING = new PotionEffectTypeWrapper(4);

    /** Increases damage dealt. /
    public static final PotionEffectType INCREASE_DAMAGE = new PotionEffectTypeWrapper(5);

    /** Heals an entity. /
    public static final PotionEffectType HEAL = new PotionEffectTypeWrapper(6);

    /** Hurts an entity. /
    public static final PotionEffectType HARM = new PotionEffectTypeWrapper(7);

    /** Increases jump height. /
    public static final PotionEffectType JUMP = new PotionEffectTypeWrapper(8);

    /** Warps vision on the client. /
    public static final PotionEffectType CONFUSION = new PotionEffectTypeWrapper(9);

    /** Regenerates health. /
    public static final PotionEffectType REGENERATION = new PotionEffectTypeWrapper(10);

    /** Decreases damage dealt to an entity. /
    public static final PotionEffectType DAMAGE_RESISTANCE = new PotionEffectTypeWrapper(11);

    /** Stops fire damage. /
    public static final PotionEffectType FIRE_RESISTANCE = new PotionEffectTypeWrapper(12);

    /** Allows breathing underwater. /
    public static final PotionEffectType WATER_BREATHING = new PotionEffectTypeWrapper(13);

    /** Grants invisibility. /
    public static final PotionEffectType INVISIBILITY = new PotionEffectTypeWrapper(14);

    /** Blinds an entity. /
    public static final PotionEffectType BLINDNESS = new PotionEffectTypeWrapper(15);

    /** Allows an entity to see in the dark. /
    public static final PotionEffectType NIGHT_VISION = new PotionEffectTypeWrapper(16);

    /** Increases hunger. /
    public static final PotionEffectType HUNGER = new PotionEffectTypeWrapper(17);

    /** Decreases damage dealt by an entity. /
    public static final PotionEffectType WEAKNESS = new PotionEffectTypeWrapper(18);

    /** Deals damage to an entity over time. /
    public static final PotionEffectType POISON = new PotionEffectTypeWrapper(19);

    /** Deals damage to an entity over time and gives the health to the shooter. /
    public static final PotionEffectType WITHER = new PotionEffectTypeWrapper(20);

    /** Increases the maximum health of an entity. /
    public static final PotionEffectType HEALTH_BOOST = new PotionEffectTypeWrapper(21);

    /** Increases the maximum health of an entity with health that cannot be regenerated, but is refilled every 30 seconds. /
    public static final PotionEffectType ABSORPTION = new PotionEffectTypeWrapper(22);

    /** Increases the food level of an entity each tick. /
    public static final PotionEffectType SATURATION = new PotionEffectTypeWrapper(23);

    private final int id;

    protected PotionEffectType(int id) {
        this.id = id;
    }

    /** Creates a PotionEffect from this PotionEffectType, applying duration modifiers and checks._

Returns | Description
--- | --- 
`PotionEffectType[]` | a resulting potion effect /
    public PotionEffect createEffect(int duration, int amplifier) {
        return Potion.getBrewer().createEffect(this, duration, amplifier);
    }

    /** Returns the duration modifier applied to effects of this type.


---

### Public Fields for [`PotionEffectType`](PotionEffectType.md)

##### <a id='saturation'></a>public static final var __SATURATION__

_Increases movement speed. /
    public static final PotionEffectType SPEED = new PotionEffectTypeWrapper(1);

    /** Decreases movement speed. /
    public static final PotionEffectType SLOW = new PotionEffectTypeWrapper(2);

    /** Increases dig speed. /
    public static final PotionEffectType FAST_DIGGING = new PotionEffectTypeWrapper(3);

    /** Decreases dig speed. /
    public static final PotionEffectType SLOW_DIGGING = new PotionEffectTypeWrapper(4);

    /** Increases damage dealt. /
    public static final PotionEffectType INCREASE_DAMAGE = new PotionEffectTypeWrapper(5);

    /** Heals an entity. /
    public static final PotionEffectType HEAL = new PotionEffectTypeWrapper(6);

    /** Hurts an entity. /
    public static final PotionEffectType HARM = new PotionEffectTypeWrapper(7);

    /** Increases jump height. /
    public static final PotionEffectType JUMP = new PotionEffectTypeWrapper(8);

    /** Warps vision on the client. /
    public static final PotionEffectType CONFUSION = new PotionEffectTypeWrapper(9);

    /** Regenerates health. /
    public static final PotionEffectType REGENERATION = new PotionEffectTypeWrapper(10);

    /** Decreases damage dealt to an entity. /
    public static final PotionEffectType DAMAGE_RESISTANCE = new PotionEffectTypeWrapper(11);

    /** Stops fire damage. /
    public static final PotionEffectType FIRE_RESISTANCE = new PotionEffectTypeWrapper(12);

    /** Allows breathing underwater. /
    public static final PotionEffectType WATER_BREATHING = new PotionEffectTypeWrapper(13);

    /** Grants invisibility. /
    public static final PotionEffectType INVISIBILITY = new PotionEffectTypeWrapper(14);

    /** Blinds an entity. /
    public static final PotionEffectType BLINDNESS = new PotionEffectTypeWrapper(15);

    /** Allows an entity to see in the dark. /
    public static final PotionEffectType NIGHT_VISION = new PotionEffectTypeWrapper(16);

    /** Increases hunger. /
    public static final PotionEffectType HUNGER = new PotionEffectTypeWrapper(17);

    /** Decreases damage dealt by an entity. /
    public static final PotionEffectType WEAKNESS = new PotionEffectTypeWrapper(18);

    /** Deals damage to an entity over time. /
    public static final PotionEffectType POISON = new PotionEffectTypeWrapper(19);

    /** Deals damage to an entity over time and gives the health to the shooter. /
    public static final PotionEffectType WITHER = new PotionEffectTypeWrapper(20);

    /** Increases the maximum health of an entity. /
    public static final PotionEffectType HEALTH_BOOST = new PotionEffectTypeWrapper(21);

    /** Increases the maximum health of an entity with health that cannot be regenerated, but is refilled every 30 seconds. /
    public static final PotionEffectType ABSORPTION = new PotionEffectTypeWrapper(22);

    /** Increases the food level of an entity each tick._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

