## CriteriaType __enum__

>io.wolfscript.api.scoreboard.CriteriaType

---

### Enum Overview

Scoreboard criteria type

Item | Type   
--- | :--- 
DUMMY: "dummy"<br> _DUMMY CriteriaType_ | CriteriaType
DEATH_COUNT: "deathCount"<br> _DEATH_COUNT CriteriaType_ | CriteriaType
PLAYER_KILL_COUNT: "playerKillCount"<br> _PLAYER_KILL_COUNT CriteriaType_ | CriteriaType
TOTAL_KILL_COUNT: "totalKillCount"<br> _TOTAL_KILL_COUNT CriteriaType_ | CriteriaType
HEALTH: "health"<br> _HEALTH CriteriaType_ | CriteriaType
static function __fromProtocolName__(protocol) <br> _Gets the Minecraft protocol name for this criteria._ | [`CriteriaType`](CriteriaType.md)



---


### Public Methods for [`CriteriaType`](CriteriaType.md)

##### <a id='fromprotocolname'></a>public static function __fromProtocolName__(protocol)

_Gets the Minecraft protocol name for this criteria._

Argument | Type | Description  
--- | --- | --- 
protocol | `String` | protocol name you wish to get.

Returns | Description
--- | --- 
[`CriteriaType`](CriteriaType.md) | protocol name /
    public String getProtocolName() {
        return this.protocol;
    }

    /** Gets the Criteria Type from the Minecraft protocol name.<br> This is not case sensitive.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

