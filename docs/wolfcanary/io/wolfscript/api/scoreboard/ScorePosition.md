## ScorePosition __enum__

>io.wolfscript.api.scoreboard.ScorePosition

---

### Enum Overview

Convenience enum for handle minecraft id protocol values for scoreboard positions.

Item | Type   
--- | :--- 
PLAYER_LIST: 0<br> _Shows next to the players name in the player list when pressing the TAB key._ | ScorePosition
SIDEBAR: 1<br> _shows in a sidebar that pops up on the side of the players screen._ | ScorePosition
BELOW_NAME: 2<br> _Shows below the name above a players head._ | ScorePosition
 readonly property __Id__ <br> _Get: Get the id for this Position._ | `int`
static function __fromId__(id) <br> _Gets a [`ScorePosition`](ScorePosition.md) for the given id value._ | [`ScorePosition`](ScorePosition.md)



---


### Public Properties for [`ScorePosition`](ScorePosition.md)

##### <a id='id'></a>public  readonly property __Id__

_Get: Get the id for this Position._

Get | Description
--- | --- 
`int` | id value



---

### Public Methods for [`ScorePosition`](ScorePosition.md)

##### <a id='fromid'></a>public static function __fromId__(id)

_Gets a [`ScorePosition`](ScorePosition.md) for the given id value._

Argument | Type | Description  
--- | --- | --- 
id | `int` | id value to get the [`ScorePosition`](ScorePosition.md) for.

Returns | Description
--- | --- 
[`ScorePosition`](ScorePosition.md) | the [`ScorePosition`](ScorePosition.md) or null if it doesn't exist.


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

