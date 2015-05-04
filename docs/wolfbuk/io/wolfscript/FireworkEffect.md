## FireworkEffect __class__

>io.wolfscript.FireworkEffect
>Implements [`ConfigurationSerializable`](configuration/serialization/ConfigurationSerializable.md)

---

### Class Overview

Represents a single firework effect.

Method | Type   
--- | :--- 
 readonly property __FadeColors__ <br> _Get: Get the fade colors of the firework effect._ | `List<Color>`
 readonly property __Colors__ <br> _Get: Get the primary colors of the firework effect._ | `List<Color>`
 readonly property __Type__ <br> _Get: Get the type of the firework effect._ | `Type`
 function __hasTrail__() <br> _Get whether the firework effect has a trail._ | `boolean`
static function __builder__() <br> _The type or shape of the effect._ | `Builder`
 function __build__() <br> _Add a primary color to the firework effect._ | [`FireworkEffect`](FireworkEffect.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
static function __deserialize__() <br> _deserialize method_ | [`ConfigurationSerializable`](configuration/serialization/ConfigurationSerializable.md)
 function __flicker__(flicker) <br> _Set whether the firework effect should flicker._ | `Builder`
 function __hasFlicker__() <br> _Get whether the firework effect flickers._ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toString__() <br> _toString method_ | `String`
 function __trail__(trail) <br> _Set whether the firework effect should have a trail._ | `Builder`
 function __withFlicker__() <br> _This is a builder for FireworkEffects._ | `Builder`
 function __withTrail__() <br> _Add a trail to the firework effect._ | `Builder`



---


### Public Properties for [`FireworkEffect`](FireworkEffect.md)

##### <a id='fadecolors'></a>public  readonly property __FadeColors__

_Get: Get the fade colors of the firework effect._

Get | Description
--- | --- 
`List<Color>` | An immutable list of the fade colors



##### <a id='colors'></a>public  readonly property __Colors__

_Get: Get the primary colors of the firework effect._

Get | Description
--- | --- 
`List<Color>` | An immutable list of the primary colors



##### <a id='type'></a>public  readonly property __Type__

_Get: Get the type of the firework effect._

Get | Description
--- | --- 
`Type` | The effect type



---

### Public Methods for [`FireworkEffect`](FireworkEffect.md)

##### <a id='hastrail'></a>public  function __hasTrail__()

_Get whether the firework effect has a trail._

Returns | Description
--- | --- 
`boolean` | true if it has a trail, false if not


##### <a id='builder'></a>public static function __builder__()

_The type or shape of the effect. /
    public enum Type {
        /** A small ball effect. /
        BALL,
        /** A large ball effect. /
        BALL_LARGE,
        /** A star-shaped effect. /
        STAR,
        /** A burst effect. /
        BURST,
        /** A creeper-face effect. /
        CREEPER,
        ;
    }

    /** Construct a firework effect._

Returns | Description
--- | --- 
`Builder` | A utility object for building a firework effect


##### <a id='build'></a>public  function __build__()

_Add a primary color to the firework effect._

Returns | Description
--- | --- 
[`FireworkEffect`](FireworkEffect.md) | This object, for chaining


##### <a id='equals'></a>public  function __equals__(obj)

_equals method_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | 
--- | 
`boolean` |


##### <a id='deserialize'></a>public static function __deserialize__()

_deserialize method_

Returns | Description
--- | --- 
[`ConfigurationSerializable`](configuration/serialization/ConfigurationSerializable.md) | the resulting serializable


##### <a id='flicker'></a>public  function __flicker__(flicker)

_Set whether the firework effect should flicker._

Argument | Type | Description  
--- | --- | --- 
flicker | `boolean` | true if it should flicker, false if not

Returns | Description
--- | --- 
`Builder` | This object, for chaining


##### <a id='hasflicker'></a>public  function __hasFlicker__()

_Get whether the firework effect flickers._

Returns | Description
--- | --- 
`boolean` | true if it flickers, false if not


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


##### <a id='trail'></a>public  function __trail__(trail)

_Set whether the firework effect should have a trail._

Argument | Type | Description  
--- | --- | --- 
trail | `boolean` | true if it should have a trail, false for no trail

Returns | Description
--- | --- 
`Builder` | This object, for chaining


##### <a id='withflicker'></a>public  function __withFlicker__()

_This is a builder for FireworkEffects._

Returns | Description
--- | --- 
`Builder` | This object, for chaining


##### <a id='withtrail'></a>public  function __withTrail__()

_Add a trail to the firework effect._

Returns | Description
--- | --- 
`Builder` | This object, for chaining


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

