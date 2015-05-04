## PotionEffect __class__

>io.wolfscript.potion.PotionEffect
>Implements [`ConfigurationSerializable`](../configuration/serialization/ConfigurationSerializable.md)

---

### Class Overview

Represents a potion effect, that can be added to a `LivingEntity`. A potion effect has a duration that it will last for, an amplifier that will enhance its effects, and a [`PotionEffectType`](PotionEffectType.md), that represents its effect on an entity.

Method | Type   
--- | :--- 
new __PotionEffect__(type, duration, amplifier, ambient, particles) <br> _Creates a potion effect._ | _constructor_
new __PotionEffect__(type, duration, amplifier, ambient) <br> _Creates a potion effect. Assumes that particles are visible_ | _constructor_
new __PotionEffect__(type, duration, amplifier) <br> _Creates a potion effect. Assumes ambient is true._ | _constructor_
new __PotionEffect__() <br> _Constructor for deserialization._ | _constructor_
 readonly property __Amplifier__ <br> _Get: Returns the amplifier of this effect. A higher amplifier means the_ | `int`
 readonly property __Duration__ <br> _Get: Returns the duration (in ticks) that this effect will run for when_ | `int`
 readonly property __Type__ <br> _Get: Returns the [`PotionEffectType`](PotionEffectType.md) of this effect._ | [`PotionEffectType`](PotionEffectType.md)
 function __apply__(entity) <br> _Attempts to add the effect represented by this object to the given_ | `boolean`
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hasParticles__() <br> _hasParticles method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __isAmbient__() <br> _Makes potion effect produce more, translucent, particles._ | `boolean`
 function __toString__() <br> _toString method_ | `String`



---

### Public Constructors for [`PotionEffect`](PotionEffect.md)

##### <a id='potioneffect'></a>new __PotionEffect__(type, duration, amplifier, ambient, particles) 

_Creates a potion effect._

Argument | Type | Description  
--- | --- | --- 
type | [`PotionEffectType`](PotionEffectType.md) | effect type
duration | `int` | measured in ticks, see `PotionEffect#getDuration()`
amplifier | `int` | the amplifier, see `PotionEffect#getAmplifier()`
ambient | `boolean` | the ambient status, see `PotionEffect#isAmbient()`
particles | `boolean` | the particle status, see `PotionEffect#hasParticles()`

##### <a id='potioneffect'></a>new __PotionEffect__(type, duration, amplifier, ambient) 

_Creates a potion effect. Assumes that particles are visible_

Argument | Type | Description  
--- | --- | --- 
type | [`PotionEffectType`](PotionEffectType.md) | effect type
duration | `int` | measured in ticks, see `PotionEffect#getDuration()`
amplifier | `int` | the amplifier, see `PotionEffect#getAmplifier()`
ambient | `boolean` | the ambient status, see `PotionEffect#isAmbient()`

##### <a id='potioneffect'></a>new __PotionEffect__(type, duration, amplifier) 

_Creates a potion effect. Assumes ambient is true._

Argument | Type | Description  
--- | --- | --- 
type | [`PotionEffectType`](PotionEffectType.md) | Effect type
duration | `int` | measured in ticks
amplifier | `int` | the amplifier for the effect

##### <a id='potioneffect'></a>new __PotionEffect__() 

_Constructor for deserialization._


---

### Public Properties for [`PotionEffect`](PotionEffect.md)

##### <a id='amplifier'></a>public  readonly property __Amplifier__

_Get: Returns the amplifier of this effect. A higher amplifier means the potion effect happens more often over its duration and in some cases has more effect on its target._

Get | Description
--- | --- 
`int` | The effect amplifier



##### <a id='duration'></a>public  readonly property __Duration__

_Get: Returns the duration (in ticks) that this effect will run for when applied to a `LivingEntity`._

Get | Description
--- | --- 
`int` | The duration of the effect



##### <a id='type'></a>public  readonly property __Type__

_Get: Returns the [`PotionEffectType`](PotionEffectType.md) of this effect._

Get | Description
--- | --- 
[`PotionEffectType`](PotionEffectType.md) | The potion type of this effect



---

### Public Methods for [`PotionEffect`](PotionEffect.md)

##### <a id='apply'></a>public  function __apply__(entity)

_Attempts to add the effect represented by this object to the given `LivingEntity`._

Argument | Type | Description  
--- | --- | --- 
entity | `LivingEntity` | The entity to add this effect to

Returns | Description
--- | --- 
`boolean` | Whether the effect could be added


##### <a id='equals'></a>public  function __equals__(obj)

_equals method_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | 
--- | 
`boolean` |


##### <a id='hasparticles'></a>public  function __hasParticles__()

_hasParticles method_

Returns | Description
--- | --- 
`boolean` | whether this effect has particles or not


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


##### <a id='isambient'></a>public  function __isAmbient__()

_Makes potion effect produce more, translucent, particles._

Returns | Description
--- | --- 
`boolean` | if this effect is ambient


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

