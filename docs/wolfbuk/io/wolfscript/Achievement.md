## Achievement __enum__

>io.wolfscript.Achievement

---

### Enum Overview

Represents an achievement, which may be given to players.

Item | Type   
--- | :--- 
OPEN_INVENTORY: <br> _OPEN_INVENTORY Achievement_ | Achievement
MINE_WOOD: OPEN_INVENTORY<br> _MINE_WOOD Achievement_ | Achievement
BUILD_WORKBENCH: MINE_WOOD<br> _BUILD_WORKBENCH Achievement_ | Achievement
BUILD_PICKAXE: BUILD_WORKBENCH<br> _BUILD_PICKAXE Achievement_ | Achievement
BUILD_FURNACE: BUILD_PICKAXE<br> _BUILD_FURNACE Achievement_ | Achievement
ACQUIRE_IRON: BUILD_FURNACE<br> _ACQUIRE_IRON Achievement_ | Achievement
BUILD_HOE: BUILD_WORKBENCH<br> _BUILD_HOE Achievement_ | Achievement
MAKE_BREAD: BUILD_HOE<br> _MAKE_BREAD Achievement_ | Achievement
BAKE_CAKE: BUILD_HOE<br> _BAKE_CAKE Achievement_ | Achievement
BUILD_BETTER_PICKAXE: BUILD_PICKAXE<br> _BUILD_BETTER_PICKAXE Achievement_ | Achievement
COOK_FISH: BUILD_FURNACE<br> _COOK_FISH Achievement_ | Achievement
ON_A_RAIL: ACQUIRE_IRON<br> _ON_A_RAIL Achievement_ | Achievement
BUILD_SWORD: BUILD_WORKBENCH<br> _BUILD_SWORD Achievement_ | Achievement
KILL_ENEMY: BUILD_SWORD<br> _KILL_ENEMY Achievement_ | Achievement
KILL_COW: BUILD_SWORD<br> _KILL_COW Achievement_ | Achievement
FLY_PIG: KILL_COW<br> _FLY_PIG Achievement_ | Achievement
SNIPE_SKELETON: KILL_ENEMY<br> _SNIPE_SKELETON Achievement_ | Achievement
GET_DIAMONDS: ACQUIRE_IRON<br> _GET_DIAMONDS Achievement_ | Achievement
NETHER_PORTAL: GET_DIAMONDS<br> _NETHER_PORTAL Achievement_ | Achievement
GHAST_RETURN: NETHER_PORTAL<br> _GHAST_RETURN Achievement_ | Achievement
GET_BLAZE_ROD: NETHER_PORTAL<br> _GET_BLAZE_ROD Achievement_ | Achievement
BREW_POTION: GET_BLAZE_ROD<br> _BREW_POTION Achievement_ | Achievement
END_PORTAL: GET_BLAZE_ROD<br> _END_PORTAL Achievement_ | Achievement
THE_END: END_PORTAL<br> _THE_END Achievement_ | Achievement
ENCHANTMENTS: GET_DIAMONDS<br> _ENCHANTMENTS Achievement_ | Achievement
OVERKILL: ENCHANTMENTS<br> _OVERKILL Achievement_ | Achievement
BOOKCASE: ENCHANTMENTS<br> _BOOKCASE Achievement_ | Achievement
EXPLORE_ALL_BIOMES: END_PORTAL<br> _EXPLORE_ALL_BIOMES Achievement_ | Achievement
SPAWN_WITHER: THE_END<br> _SPAWN_WITHER Achievement_ | Achievement
KILL_WITHER: SPAWN_WITHER<br> _KILL_WITHER Achievement_ | Achievement
FULL_BEACON: KILL_WITHER<br> _FULL_BEACON Achievement_ | Achievement
BREED_COW: KILL_COW<br> _BREED_COW Achievement_ | Achievement
DIAMONDS_TO_YOU: GET_DIAMONDS<br> _DIAMONDS_TO_YOU Achievement_ | Achievement
 readonly property __Parent__ <br> _Get: Returns whether or not this achievement has a parent achievement._ | [`Achievement`](Achievement.md)



---


### Public Properties for [`Achievement`](Achievement.md)

##### <a id='parent'></a>public  readonly property __Parent__

_Get: Returns whether or not this achievement has a parent achievement._

Get | Description
--- | --- 
[`Achievement`](Achievement.md) | whether the achievement has a parent achievement /
    public boolean hasParent() {
        return parent != null;
    }

    /** Returns the parent achievement of this achievement, or null if none.



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

