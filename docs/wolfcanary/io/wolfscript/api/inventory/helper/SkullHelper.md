## SkullHelper __class__

>io.wolfscript.api.inventory.helper.SkullHelper
>Extends `ItemHelper`

---

### Class Overview

Skull helper

Method | Type   
--- | :--- 
static function __getSkullType__(skull) <br> _Skeleton Skull_ | `SkullType`



---


### Public Methods for [`SkullHelper`](SkullHelper.md)

##### <a id='getskulltype'></a>public static function __getSkullType__(skull)

_Skeleton Skull /
        SKELETON,
        //
        /** Wither Skull /
        WITHER,
        //
        /** Zombie Skull /
        ZOMBIE,
        //
        /** Player Skull /
        PLAYER,
        //
        /** Creeper Skull /
        CREEPER,
        //
        ;
    }

    /** Checks if the Skull has a owner_

Argument | Type | Description  
--- | --- | --- 
skull | [`Item`](..\Item.md) | the skull [`Item`](..\Item.md)

Returns | Description
--- | --- 
`SkullType` | `true` if has owner; `false` if not /
    public static boolean hasOwner(Item skull) {
        if (skull == null || !validSkull(skull.getType()) || getSkullType(skull) != SkullType.PLAYER) {
            return false;
        }
        if (!verifyTags(skull, "SkullOwner", COMPOUND, false)) {
            if (!verifyTags(skull, "SkullOwner", STRING, false)) {
                String owner = skull.getDataTag().getString("SkullOwner");
                return !owner.isEmpty();
            }
            return false;
        }
        return skull.getDataTag().getCompoundTag("SkullOwner").containsKey("Name", STRING);
    }

    /** Gets the name of the owner if present


---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

