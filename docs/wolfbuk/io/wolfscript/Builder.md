## Builder __class__

>io.wolfscript.Builder

---

### Class Overview

Represents a single firework effect. /
@SerializableAs("Firework")
public final class FireworkEffect implements ConfigurationSerializable {

    /** The type or shape of the effect. /
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

    /** Construct a firework effect.

Method | Type   
--- | :--- 
 function __build__() <br> _Specify the type of the firework effect._ | `FireworkEffect`



---


### Public Methods for [`Builder`](Builder.md)

##### <a id='build'></a>public  function __build__()

_Specify the type of the firework effect._

Returns | Description
--- | --- 
`FireworkEffect` | This object, for chaining


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

