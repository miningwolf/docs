## BanManager __class__

>io.wolfscript.bansystem.BanManager

---

### Class Overview

Used to issue bans

Method | Type   
--- | :--- 
new __BanManager__() <br> _BanManager constructor_ | _constructor_
 function __reload__() <br> _Issue a permanent ban for this player with a given reason_ | `void`



---

### Public Constructors for [`BanManager`](BanManager.md)

##### <a id='banmanager'></a>new __BanManager__() 

_BanManager constructor_


---

### Public Methods for [`BanManager`](BanManager.md)

##### <a id='reload'></a>public  function __reload__()

_Issue a permanent ban for this player with a given reason_

Returns | Description
--- | --- 
`void` | `true` if banned; `false` if not /
    public boolean isBanned(String subject) {
        Ban test = null;

        for (Ban b : bans) {
            if (b.getUUID().equals(subject)) {
                test = b;
                break;
            }
            else if (b.getIp().equals(subject)) {
                test = b;
                break;
            }
        }
        if (test == null) {
            return false;
        }
        else if (test.isExpired()) {
            if (test.isIpBan()) {
                backbone.liftIpBan(test.getIp());
            }
            else {
                backbone.liftBan(test.getUUID());
            }
            bans.remove(test);
            return false;
        }
        else {
            return true;
        }
    }

    /** Check if the given IP is banned


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

