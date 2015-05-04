## SkullHelper __class__

>io.wolfscript.api.inventory.helper.SkullHelper
>Extends `ItemHelper`

---

### Class Overview

Skull helper

Method | Type   
--- | :--- 
static function __getOwner__(skull) <br> _Gets the name of the owner if present_ | `String`
static function __getOwnerProfile__(skull) <br> _Gets the profile of the owner if present_ | `GameProfile`
static function __getSkullType__(skull) <br> _Gets the SkullType for the Skull_ | `SkullType`
static function __hasOwner__(skull) <br> _Skeleton Skull_ | `boolean`
static function __setOwner__(skull, owner) <br> _Sets the owner of the skull._ | `void`
static function __setOwner__(skull, ownerUUID, ownerName) <br> _Sets the owner of the skull._ | `void`
static function __setOwner__(skull, owner) <br> _Sets the owner of the skull._ | `void`



---


### Public Methods for [`SkullHelper`](SkullHelper.md)

##### <a id='getowner'></a>public static function __getOwner__(skull)

_Gets the name of the owner if present_

Argument | Type | Description  
--- | --- | --- 
skull | [`Item`](../Item.md) | the skull [`Item`](../Item.md)

Returns | Description
--- | --- 
`String` | the owner's name or `null` if no owner


##### <a id='getownerprofile'></a>public static function __getOwnerProfile__(skull)

_Gets the profile of the owner if present_

Argument | Type | Description  
--- | --- | --- 
skull | [`Item`](../Item.md) | the skull [`Item`](../Item.md)

Returns | Description
--- | --- 
`GameProfile` | the owner's `GameProfile` or `null` if no owner


##### <a id='getskulltype'></a>public static function __getSkullType__(skull)

_Gets the SkullType for the Skull_

Argument | Type | Description  
--- | --- | --- 
skull | [`Item`](../Item.md) | the skull [`Item`](../Item.md)

Returns | Description
--- | --- 
`SkullType` | the SkullType


##### <a id='hasowner'></a>public static function __hasOwner__(skull)

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
skull | [`Item`](../Item.md) | the skull [`Item`](../Item.md)

Returns | Description
--- | --- 
`boolean` | `true` if has owner; `false` if not


##### <a id='setowner'></a>public static function __setOwner__(skull, owner)

_Sets the owner of the skull.<br> Providing a null owner will remove the current owner_

Argument | Type | Description  
--- | --- | --- 
skull | [`Item`](../Item.md) | the skull [`Item`](../Item.md)
owner | `String` | the owner to be set, or null to remove the owner

Returns | 
--- | 
`void` |


##### <a id='setowner'></a>public static function __setOwner__(skull, ownerUUID, ownerName)

_Sets the owner of the skull.<br/>_

Argument | Type | Description  
--- | --- | --- 
skull | [`Item`](../Item.md) | the skull [`Item`](../Item.md)
ownerUUID | `UUID` | the `UUID` of the Owner (can be null)
ownerName | `String` | the name of the owner

Returns | 
--- | 
`void` |


##### <a id='setowner'></a>public static function __setOwner__(skull, owner)

_Sets the owner of the skull.<br/>_

Argument | Type | Description  
--- | --- | --- 
skull | [`Item`](../Item.md) | the skull [`Item`](../Item.md)
owner | `GameProfile` | the `GameProfile` of the owner

Returns | 
--- | 
`void` |


---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

