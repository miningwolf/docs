## Statistic __enum__

>io.wolfscript.Statistic

---

### Enum Overview

Represents a countable statistic, which is tracked by the server.

Item | Type   
--- | :--- 
DAMAGE_DEALT: <br> _DAMAGE_DEALT Statistic_ | Statistic
DAMAGE_TAKEN: <br> _DAMAGE_TAKEN Statistic_ | Statistic
DEATHS: <br> _DEATHS Statistic_ | Statistic
MOB_KILLS: <br> _MOB_KILLS Statistic_ | Statistic
PLAYER_KILLS: <br> _PLAYER_KILLS Statistic_ | Statistic
FISH_CAUGHT: <br> _FISH_CAUGHT Statistic_ | Statistic
ANIMALS_BRED: <br> _ANIMALS_BRED Statistic_ | Statistic
TREASURE_FISHED: <br> _TREASURE_FISHED Statistic_ | Statistic
JUNK_FISHED: <br> _JUNK_FISHED Statistic_ | Statistic
LEAVE_GAME: <br> _LEAVE_GAME Statistic_ | Statistic
JUMP: <br> _JUMP Statistic_ | Statistic
DROP: <br> _DROP Statistic_ | Statistic
PLAY_ONE_TICK: <br> _PLAY_ONE_TICK Statistic_ | Statistic
WALK_ONE_CM: <br> _WALK_ONE_CM Statistic_ | Statistic
SWIM_ONE_CM: <br> _SWIM_ONE_CM Statistic_ | Statistic
FALL_ONE_CM: <br> _FALL_ONE_CM Statistic_ | Statistic
CLIMB_ONE_CM: <br> _CLIMB_ONE_CM Statistic_ | Statistic
FLY_ONE_CM: <br> _FLY_ONE_CM Statistic_ | Statistic
DIVE_ONE_CM: <br> _DIVE_ONE_CM Statistic_ | Statistic
MINECART_ONE_CM: <br> _MINECART_ONE_CM Statistic_ | Statistic
BOAT_ONE_CM: <br> _BOAT_ONE_CM Statistic_ | Statistic
PIG_ONE_CM: <br> _PIG_ONE_CM Statistic_ | Statistic
HORSE_ONE_CM: <br> _HORSE_ONE_CM Statistic_ | Statistic
SPRINT_ONE_CM: <br> _SPRINT_ONE_CM Statistic_ | Statistic
CROUCH_ONE_CM: <br> _CROUCH_ONE_CM Statistic_ | Statistic
MINE_BLOCK: Type.BLOCK<br> _MINE_BLOCK Statistic_ | Statistic
USE_ITEM: Type.ITEM<br> _USE_ITEM Statistic_ | Statistic
BREAK_ITEM: Type.ITEM<br> _BREAK_ITEM Statistic_ | Statistic
CRAFT_ITEM: Type.ITEM<br> _CRAFT_ITEM Statistic_ | Statistic
KILL_ENTITY: Type.ENTITY<br> _KILL_ENTITY Statistic_ | Statistic
ENTITY_KILLED_BY: Type.ENTITY<br> _ENTITY_KILLED_BY Statistic_ | Statistic
TIME_SINCE_DEATH: <br> _TIME_SINCE_DEATH Statistic_ | Statistic
TALKED_TO_VILLAGER: <br> _TALKED_TO_VILLAGER Statistic_ | Statistic
TRADED_WITH_VILLAGER: <br> _TRADED_WITH_VILLAGER Statistic_ | Statistic
CAKE_SLICES_EATEN: <br> _CAKE_SLICES_EATEN Statistic_ | Statistic
CAULDRON_FILLED: <br> _CAULDRON_FILLED Statistic_ | Statistic
CAULDRON_USED: <br> _CAULDRON_USED Statistic_ | Statistic
ARMOR_CLEANED: <br> _ARMOR_CLEANED Statistic_ | Statistic
BANNER_CLEANED: <br> _BANNER_CLEANED Statistic_ | Statistic
BREWINGSTAND_INTERACTION: <br> _BREWINGSTAND_INTERACTION Statistic_ | Statistic
BEACON_INTERACTION: <br> _BEACON_INTERACTION Statistic_ | Statistic
DROPPER_INSPECTED: <br> _DROPPER_INSPECTED Statistic_ | Statistic
HOPPER_INSPECTED: <br> _HOPPER_INSPECTED Statistic_ | Statistic
DISPENSER_INSPECTED: <br> _DISPENSER_INSPECTED Statistic_ | Statistic
NOTEBLOCK_PLAYED: <br> _NOTEBLOCK_PLAYED Statistic_ | Statistic
NOTEBLOCK_TUNED: <br> _NOTEBLOCK_TUNED Statistic_ | Statistic
FLOWER_POTTED: <br> _FLOWER_POTTED Statistic_ | Statistic
TRAPPED_CHEST_TRIGGERED: <br> _TRAPPED_CHEST_TRIGGERED Statistic_ | Statistic
ENDERCHEST_OPENED: <br> _ENDERCHEST_OPENED Statistic_ | Statistic
ITEM_ENCHANTED: <br> _ITEM_ENCHANTED Statistic_ | Statistic
RECORD_PLAYED: <br> _RECORD_PLAYED Statistic_ | Statistic
FURNACE_INTERACTION: <br> _FURNACE_INTERACTION Statistic_ | Statistic
CRAFTING_TABLE_INTERACTION: <br> _CRAFTING_TABLE_INTERACTION Statistic_ | Statistic
CHEST_OPENED: <br> _CHEST_OPENED Statistic_ | Statistic
 readonly property __Type__ <br> _Get: Gets the type of this statistic._ | `Type`
 function __isBlock__() <br> _Checks if this is a substatistic dealing with blocks._ | `boolean`
 function __isSubstatistic__() <br> _Checks if this is a substatistic._ | `boolean`



---


### Public Properties for [`Statistic`](Statistic.md)

##### <a id='type'></a>public  readonly property __Type__

_Get: Gets the type of this statistic._

Get | Description
--- | --- 
`Type` | the type of this statistic



---

### Public Methods for [`Statistic`](Statistic.md)

##### <a id='isblock'></a>public  function __isBlock__()

_Checks if this is a substatistic dealing with blocks. <p> This is a redundant method and equivalent to checking <code>getType() == Type.BLOCK</code>_

Returns | Description
--- | --- 
`boolean` | true if this deals with blocks


##### <a id='issubstatistic'></a>public  function __isSubstatistic__()

_Checks if this is a substatistic. <p> A substatistic exists en masse for each block, item, or entitytype, depending on `#getType()`. <p> This is a redundant method and equivalent to checking <code>getType() != Type.UNTYPED</code>_

Returns | Description
--- | --- 
`boolean` | true if this is a substatistic


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

