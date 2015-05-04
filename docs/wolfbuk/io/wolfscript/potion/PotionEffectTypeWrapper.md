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
abstract readonly property __DurationModifier__ <br> _Get: Returns the duration modifier applied to effects of this type._ | `double`
abstract readonly property __Name__ <br> _Get: Returns the name of this effect type._ | `String`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __createEffect__(duration, amplifier) <br> _Increases movement speed._ | [`PotionEffect`](PotionEffect.md)
 function __toString__() <br> _toString method_ | `String`
static function __getByName__(name) <br> _Gets the effect type specified by the given name._ | [`PotionEffectType`](PotionEffectType.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
abstract function __isInstant__() <br> _Returns whether the effect of this type happens once, immediately._ | `boolean`
static function __registerPotionEffectType__(type) <br> _Registers an effect type with the given object._ | `void`
static function __stopAcceptingRegistrations__() <br> _Stops accepting any effect type registrations._ | `void`
static function __values__() <br> _Returns an array of all the registered [`PotionEffectType`](PotionEffectType.md)s._ | `PotionEffectType[]`
static final var __SPEED__ <br> _Increases movement speed._ | [`PotionEffectType`](PotionEffectType.md)
static final var __SLOW__ <br> _Decreases movement speed._ | [`PotionEffectType`](PotionEffectType.md)
static final var __FAST__ <br> _Increases dig speed._ | [`PotionEffectType`](PotionEffectType.md)
static final var __SLOW__ <br> _Decreases dig speed._ | [`PotionEffectType`](PotionEffectType.md)
static final var __INCREASE__ <br> _Increases damage dealt._ | [`PotionEffectType`](PotionEffectType.md)
static final var __HEAL__ <br> _Heals an entity._ | [`PotionEffectType`](PotionEffectType.md)
static final var __HARM__ <br> _Hurts an entity._ | [`PotionEffectType`](PotionEffectType.md)
static final var __JUMP__ <br> _Increases jump height._ | [`PotionEffectType`](PotionEffectType.md)
static final var __CONFUSION__ <br> _Warps vision on the client._ | [`PotionEffectType`](PotionEffectType.md)
static final var __REGENERATION__ <br> _Regenerates health._ | [`PotionEffectType`](PotionEffectType.md)
static final var __DAMAGE__ <br> _Decreases damage dealt to an entity._ | [`PotionEffectType`](PotionEffectType.md)
static final var __FIRE__ <br> _Stops fire damage._ | [`PotionEffectType`](PotionEffectType.md)
static final var __WATER__ <br> _Allows breathing underwater._ | [`PotionEffectType`](PotionEffectType.md)
static final var __INVISIBILITY__ <br> _Grants invisibility._ | [`PotionEffectType`](PotionEffectType.md)
static final var __BLINDNESS__ <br> _Blinds an entity._ | [`PotionEffectType`](PotionEffectType.md)
static final var __NIGHT__ <br> _Allows an entity to see in the dark._ | [`PotionEffectType`](PotionEffectType.md)
static final var __HUNGER__ <br> _Increases hunger._ | [`PotionEffectType`](PotionEffectType.md)
static final var __WEAKNESS__ <br> _Decreases damage dealt by an entity._ | [`PotionEffectType`](PotionEffectType.md)
static final var __POISON__ <br> _Deals damage to an entity over time._ | [`PotionEffectType`](PotionEffectType.md)
static final var __WITHER__ <br> _Deals damage to an entity over time and gives the health to the_ | [`PotionEffectType`](PotionEffectType.md)
static final var __HEALTH__ <br> _Increases the maximum health of an entity._ | [`PotionEffectType`](PotionEffectType.md)
static final var __ABSORPTION__ <br> _Increases the maximum health of an entity with health that cannot be_ | [`PotionEffectType`](PotionEffectType.md)
static final var __SATURATION__ <br> _Increases the food level of an entity each tick._ | [`PotionEffectType`](PotionEffectType.md)





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

### Public Properties for [`PotionEffectType`](PotionEffectType.md)

##### <a id='id'></a>public  readonly property __Id__
_Deprecated: Magic value_

_Get: Returns the unique ID of this type._

Get | Description
--- | --- 
`int` | Unique ID



##### <a id='durationmodifier'></a>public abstract readonly property __DurationModifier__

_Get: Returns the duration modifier applied to effects of this type._

Get | Description
--- | --- 
`double` | duration modifier



##### <a id='name'></a>public abstract readonly property __Name__

_Get: Returns the name of this effect type._

Get | Description
--- | --- 
`String` | The name of this effect type



---

### Public Methods for [`PotionEffectType`](PotionEffectType.md)

##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


##### <a id='createeffect'></a>public  function __createEffect__(duration, amplifier)

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

Argument | Type | Description  
--- | --- | --- 
duration | `int` | time in ticks
amplifier | `int` | the effect's amplifier

Returns | Description
--- | --- 
[`PotionEffect`](PotionEffect.md) | a resulting potion effect


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


##### <a id='getbyname'></a>public static function __getByName__(name)

_Gets the effect type specified by the given name._

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of PotionEffectType to fetch

Returns | Description
--- | --- 
[`PotionEffectType`](PotionEffectType.md) | Resulting PotionEffectType, or null if not found.


##### <a id='equals'></a>public  function __equals__(obj)

_equals method_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | 
--- | 
`boolean` |


##### <a id='getbyid'></a>public static function __getById__(id)
_Deprecated: Magic value_

_Gets the effect type specified by the unique id._

Argument | Type | Description  
--- | --- | --- 
id | `int` | Unique ID to fetch

Returns | Description
--- | --- 
[`PotionEffectType`](PotionEffectType.md) | Resulting type, or null if not found.


##### <a id='isinstant'></a>public abstract function __isInstant__()

_Returns whether the effect of this type happens once, immediately._

Returns | Description
--- | --- 
`boolean` | whether this type is normally instant


##### <a id='registerpotioneffecttype'></a>public static function __registerPotionEffectType__(type)

_Registers an effect type with the given object. <p> Generally not to be used from within a plugin._

Argument | Type | Description  
--- | --- | --- 
type | [`PotionEffectType`](PotionEffectType.md) | PotionType to register

Returns | 
--- | 
`void` |


##### <a id='stopacceptingregistrations'></a>public static function __stopAcceptingRegistrations__()

_Stops accepting any effect type registrations._

Returns | 
--- | 
`void` |


##### <a id='values'></a>public static function __values__()

_Returns an array of all the registered [`PotionEffectType`](PotionEffectType.md)s._

Returns | Description
--- | --- 
`PotionEffectType[]` | Array of types.


---

### Public Fields for [`PotionEffectType`](PotionEffectType.md)

##### <a id='speed'></a>public static final var __SPEED__

_Increases movement speed._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='slow'></a>public static final var __SLOW__

_Decreases movement speed._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='fast'></a>public static final var __FAST__

_Increases dig speed._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='slow'></a>public static final var __SLOW__

_Decreases dig speed._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='increase'></a>public static final var __INCREASE__

_Increases damage dealt._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='heal'></a>public static final var __HEAL__

_Heals an entity._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='harm'></a>public static final var __HARM__

_Hurts an entity._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='jump'></a>public static final var __JUMP__

_Increases jump height._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='confusion'></a>public static final var __CONFUSION__

_Warps vision on the client._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='regeneration'></a>public static final var __REGENERATION__

_Regenerates health._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='damage'></a>public static final var __DAMAGE__

_Decreases damage dealt to an entity._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='fire'></a>public static final var __FIRE__

_Stops fire damage._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='water'></a>public static final var __WATER__

_Allows breathing underwater._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='invisibility'></a>public static final var __INVISIBILITY__

_Grants invisibility._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='blindness'></a>public static final var __BLINDNESS__

_Blinds an entity._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='night'></a>public static final var __NIGHT__

_Allows an entity to see in the dark._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='hunger'></a>public static final var __HUNGER__

_Increases hunger._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='weakness'></a>public static final var __WEAKNESS__

_Decreases damage dealt by an entity._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='poison'></a>public static final var __POISON__

_Deals damage to an entity over time._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='wither'></a>public static final var __WITHER__

_Deals damage to an entity over time and gives the health to the shooter._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='health'></a>public static final var __HEALTH__

_Increases the maximum health of an entity._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='absorption'></a>public static final var __ABSORPTION__

_Increases the maximum health of an entity with health that cannot be regenerated, but is refilled every 30 seconds._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

##### <a id='saturation'></a>public static final var __SATURATION__

_Increases the food level of an entity each tick._

>Returns
>  [`PotionEffectType`](PotionEffectType.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

