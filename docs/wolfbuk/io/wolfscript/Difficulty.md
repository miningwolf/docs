## Difficulty __enum__

>io.wolfscript.Difficulty

---

### Enum Overview

Represents the various difficulty levels that are available.

Item | Type   
--- | :--- 
HARD: 3<br> _Players regain health over time, hostile mobs don't spawn, the hunger_ | Difficulty



---


### Public Methods for [`Difficulty`](Difficulty.md)

##### <a id='getbyvalue'></a>public static function __getByValue__(int)
_Deprecated: Magic value /
    @Deprecated
    public int getValue() {
        return value;
    }

    /** Gets the Difficulty represented by the specified value Magic value_

_Players regain health over time, hostile mobs don't spawn, the hunger bar does not deplete. /
    PEACEFUL(0),

    /** Hostile mobs spawn, enemies deal less damage than on normal difficulty, the hunger bar does deplete and starving deals up to 5 hearts of damage. (Default value) /
    EASY(1),

    /** Hostile mobs spawn, enemies deal normal amounts of damage, the hunger bar does deplete and starving deals up to 9.5 hearts of damage. /
    NORMAL(2),

    /** Hostile mobs spawn, enemies deal greater damage than on normal difficulty, the hunger bar does deplete and starving can kill players. /
    HARD(3);

    private final int value;
    private final static Map<Integer, Difficulty> BY_ID = Maps.newHashMap();

    private Difficulty(final int value) {
        this.value = value;
    }

    /** Gets the difficulty value associated with this Difficulty._

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

Returns | Description
--- | --- 
[`Difficulty`](Difficulty.md) | An integer value of this difficulty


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

