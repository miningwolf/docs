## Wolf __class__

>io.wolfscript.Wolf
>Implements [`TaskOwner`](tasks\TaskOwner.md)

---

### Class Overview

The interface to the brains of the bird! AKA Utils

Method | Type   
--- | :--- 
static function __jsonNBT__() <br> _Get the ban System to manage bans_ | [`JsonNBTUtility`](util\JsonNBTUtility.md)
final static var __log__ <br> _log field_ | [`Logman`](logger\Logman.md)



---


### Public Methods for [`Wolf`](Wolf.md)

##### <a id='jsonnbt'></a>public static function __jsonNBT__()

_Get the ban System to manage bans_

Returns | Description
--- | --- 
[`JsonNBTUtility`](util\JsonNBTUtility.md) | [`BanManager`](bansystem\BanManager.md) /
    public static BanManager bans() {
        return instance.banManager;
    }

    /** Get the Groups provider to manage groups


---

### Public Fields for [`Wolf`](Wolf.md)

##### <a id='log'></a>public final static var __log__

_log field_

>Returns
>  [`Logman`](logger\Logman.md)

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

