## ScorePosition __enum__

>io.wolfscript.api.scoreboard.ScorePosition

---

### Enum Overview

Convenience enum for handle minecraft id protocol values for scoreboard positions.

Item | Type   
--- | :--- 
BELOW_NAME: 2<br> _Shows next to the players name in the player list when pressing the TAB key._ | ScorePosition
static function __fromId__(id) <br> _Shows next to the players name in the player list when pressing the TAB key._ | [`ScorePosition`](ScorePosition.md)



---


### Public Methods for [`ScorePosition`](ScorePosition.md)

##### <a id='fromid'></a>public static function __fromId__(id)

_Shows next to the players name in the player list when pressing the TAB key. /
    PLAYER_LIST(0),
    /** shows in a sidebar that pops up on the side of the players screen. /
    SIDEBAR(1),
    /** Shows below the name above a players head. /
    BELOW_NAME(2);

    /** Minecraft protocol ID value for the scoreboard position. /
    private int id;

    ScorePosition(int id) {
        this.id = id;
    }

    /** Get the id for this Position._

Argument | Type | Description  
--- | --- | --- 
id | `int` | id value to get the [`ScorePosition`](ScorePosition.md) for.

Returns | Description
--- | --- 
[`ScorePosition`](ScorePosition.md) | id value /
    public int getId() {
        return this.id;
    }

    /** Gets a [`ScorePosition`](ScorePosition.md) for the given id value.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

