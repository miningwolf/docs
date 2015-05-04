## Effect __enum__

>io.wolfscript.Effect

---

### Enum Overview

A list of effects that the server is able to send to players.

Item | Type   
--- | :--- 
1000: <br> _1000 Effect_ | Effect
1001: <br> _1001 Effect_ | Effect
1002: <br> _1002 Effect_ | Effect
1003: <br> _1003 Effect_ | Effect
1004: <br> _1004 Effect_ | Effect
1005: <br> _1005 Effect_ | Effect
Type.SOUND: <br> _Type.SOUND Effect_ | Effect
1007: <br> _1007 Effect_ | Effect
1008: <br> _1008 Effect_ | Effect
1009: <br> _1009 Effect_ | Effect
1010: <br> _1010 Effect_ | Effect
1011: <br> _1011 Effect_ | Effect
1012: <br> _1012 Effect_ | Effect
2000: <br> _2000 Effect_ | Effect
Type.VISUAL: <br> _Type.VISUAL Effect_ | Effect
2001: <br> _2001 Effect_ | Effect
Type.SOUND: <br> _Type.SOUND Effect_ | Effect
2002: <br> _2002 Effect_ | Effect
Type.VISUAL: <br> _Type.VISUAL Effect_ | Effect
signal: <br> _signal Effect_ | Effect
 readonly property __Data__ <br> _Data property_ | `Class<?>`
 readonly property __Type__ <br> _Type property_ | `Type`



---


### Public Properties for [`Effect`](Effect.md)

##### <a id='data'></a>public  readonly property __Data__

_Data property_

Get | Description
--- | --- 
`Class<?>` | The class which represents data for this effect, or null if none



##### <a id='id'></a>public  readonly property __Id__
_Deprecated: Magic value_

_Get: An alternate click sound. /
    CLICK2(1000, Type.SOUND),
    /** A click sound. /
    CLICK1(1001, Type.SOUND),
    /** Sound of a bow firing. /
    BOW_FIRE(1002, Type.SOUND),
    /** Sound of a door opening/closing. /
    DOOR_TOGGLE(1003, Type.SOUND),
    /** Sound of fire being extinguished. /
    EXTINGUISH(1004, Type.SOUND),
    /** A song from a record. Needs the record item ID as additional info /
    RECORD_PLAY(1005, Type.SOUND, Material.class),
    /** Sound of ghast shrieking. /
    GHAST_SHRIEK(1007, Type.SOUND),
    /** Sound of ghast firing. /
    GHAST_SHOOT(1008, Type.SOUND),
    /** Sound of blaze firing. /
    BLAZE_SHOOT(1009, Type.SOUND),
    /** Sound of zombies chewing on wooden doors. /
    ZOMBIE_CHEW_WOODEN_DOOR(1010, Type.SOUND),
    /** Sound of zombies chewing on iron doors. /
    ZOMBIE_CHEW_IRON_DOOR(1011, Type.SOUND),
    /** Sound of zombies destroying a door. /
    ZOMBIE_DESTROY_DOOR(1012, Type.SOUND),
    /** A visual smoke effect. Needs direction as additional info. /
    SMOKE(2000, Type.VISUAL, BlockFace.class),
    /** Sound of a block breaking. Needs block ID as additional info. /
    STEP_SOUND(2001, Type.SOUND, Material.class),
    /** Visual effect of a splash potion breaking. Needs potion data value as additional info. /
    POTION_BREAK(2002, Type.VISUAL, Potion.class),
    /** An ender eye signal; a visual effect. /
    ENDER_SIGNAL(2003, Type.VISUAL),
    /** The flames seen on a mobspawner; a visual effect. /
    MOBSPAWNER_FLAMES(2004, Type.VISUAL);

    private final int id;
    private final Type type;
    private final Class<?> data;
    private static final Map<Integer, Effect> BY_ID = Maps.newHashMap();

    Effect(int id, Type type) {
        this(id,type,null);
    }

    Effect(int id, Type type, Class<?> data) {
        this.id = id;
        this.type = type;
        this.data = data;
    }

    /** Gets the ID for this effect._

Get | Description
--- | --- 
`int` | ID of this effect



##### <a id='type'></a>public  readonly property __Type__

_Type property_

Get | Description
--- | --- 
`Type` | The type of the effect.



---

### Public Methods for [`Effect`](Effect.md)

##### <a id='getbyid'></a>public static function __getById__(id)
_Deprecated: Magic value_

_Gets the Effect associated with the given ID._

Argument | Type | Description  
--- | --- | --- 
id | `int` | ID of the Effect to return

Returns | Description
--- | --- 
[`Effect`](Effect.md) | Effect with the given ID


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

