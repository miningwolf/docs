## GameMode __enum__

>io.wolfscript.GameMode

---

### Enum Overview

Represents the various type of game modes that `HumanEntity`s may have

Item | Type   
--- | :--- 
SPECTATOR: 3<br> _Creative mode may fly, build instantly, become invulnerable and create_ | GameMode



---


### Public Methods for [`GameMode`](GameMode.md)

##### <a id='getbyvalue'></a>public static function __getByValue__(int)
_Deprecated: Magic value /
    @Deprecated
    public int getValue() {
        return value;
    }

    /** Gets the GameMode represented by the specified value Magic value_

_Creative mode may fly, build instantly, become invulnerable and create free items. /
    CREATIVE(1),

    /** Survival mode is the "normal" gameplay type, with no special features. /
    SURVIVAL(0),

    /** Adventure mode cannot break blocks without the correct tools. /
    ADVENTURE(2),

    /** Spectator mode cannot interact with the world in anyway and is invisible to normal players. This grants the player the ability to no-clip through the world. /
    SPECTATOR(3);

    private final int value;
    private final static Map<Integer, GameMode> BY_ID = Maps.newHashMap();

    private GameMode(final int value) {
        this.value = value;
    }

    /** Gets the mode value associated with this GameMode_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

Returns | Description
--- | --- 
[`GameMode`](GameMode.md) | An integer value of this gamemode


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

