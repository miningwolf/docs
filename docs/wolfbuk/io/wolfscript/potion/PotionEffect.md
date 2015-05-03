## PotionEffect __class__

>io.wolfscript.potion.PotionEffect
>Implements [`ConfigurationSerializable`](..\configuration\serialization\ConfigurationSerializable.md)

---

### Class Overview

Represents a potion effect, that can be added to a `LivingEntity`. A potion effect has a duration that it will last for, an amplifier that will enhance its effects, and a [`PotionEffectType`](PotionEffectType.md), that represents its effect on an entity.

Method | Type   
--- | :--- 
 function __hasParticles__() <br> _Creates a potion effect._ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toString__() <br> _toString method_ | `String`



---


### Public Methods for [`PotionEffect`](PotionEffect.md)

##### <a id='hasparticles'></a>public  function __hasParticles__()

_Creates a potion effect._

Returns | Description
--- | --- 
`boolean` | Whether the effect could be added /
    public boolean apply(LivingEntity entity) {
        return entity.addPotionEffect(this);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof PotionEffect)) {
            return false;
        }
        PotionEffect that = (PotionEffect) obj;
        return this.type.equals(that.type) && this.ambient == that.ambient && this.amplifier == that.amplifier && this.duration == that.duration && this.particles == that.particles;
    }

    /** Returns the amplifier of this effect. A higher amplifier means the potion effect happens more often over its duration and in some cases has more effect on its target.


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

