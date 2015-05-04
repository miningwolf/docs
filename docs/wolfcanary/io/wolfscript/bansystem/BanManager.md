## BanManager __class__

>io.wolfscript.bansystem.BanManager

---

### Class Overview

Used to issue bans

Method | Type   
--- | :--- 
new __BanManager__() <br> _BanManager constructor_ | _constructor_
 readonly property __AllBans__ <br> _Get: Get all bans_ | `Ban[]`
 function __isIpBanned__(ip) <br> _Check if the given IP is banned_ | `boolean`
 function __issueBan__(player, reason) <br> _Issue a permanent ban for this player with a given reason_ | `void`
 function __issueBan__(player, reason, time) <br> _Issue a temporary ban._ | `void`
 function __getAllBans__(banType) <br> _Get all bans of a certain BanType_ | `Ban[]`
 function __getBan__(uuid) <br> _Gets a [`Ban`](Ban.md) for a given player's uuid_ | [`Ban`](Ban.md)
 function __isBanned__(subject) <br> _Check if banned and unban if ban has expired. Returns true if still_ | `boolean`
 function __issueBan__(ban) <br> _Issues a ban using the given [`Ban`](Ban.md)_ | `void`
 function __getBanFromName__(player) <br> _Gets a [`Ban`](Ban.md) for a given player's name_ | [`Ban`](Ban.md)
 function __issueIpBan__(player, reason, bantime) <br> _issueIpBan method_ | `void`
 function __issueIpBan__(player, reason, time) <br> _Issue an IP Ban with the given amount of time_ | `void`
 function __issueIpBan__(player, reason) <br> _Ban player by IP_ | `void`
 function __reload__() <br> _Take a string and parse an amount of seconds. A String should be_ | `void`
 function __unban__(subject) <br> _Unban a subject, player or ip_ | `void`
 function __unban__(player) <br> _Unban this player (this will NOT work with IPBans!)_ | `void`



---

### Public Constructors for [`BanManager`](BanManager.md)

##### <a id='banmanager'></a>new __BanManager__() 

_BanManager constructor_


---

### Public Properties for [`BanManager`](BanManager.md)

##### <a id='allbans'></a>public  readonly property __AllBans__

_Get: Get all bans_

Get | Description
--- | --- 
`Ban[]` | an Array of [`Ban`](Ban.md)(s)



---

### Public Methods for [`BanManager`](BanManager.md)

##### <a id='isipbanned'></a>public  function __isIpBanned__(ip)

_Check if the given IP is banned_

Argument | Type | Description  
--- | --- | --- 
ip | `String` | the IP address

Returns | Description
--- | --- 
`boolean` | `true` if banned; `false` if not


##### <a id='issueban'></a>public  function __issueBan__(player, reason)

_Issue a permanent ban for this player with a given reason_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the `Player` being banned
reason | `String` | the reason for the ban

Returns | 
--- | 
`void` |


##### <a id='issueban'></a>public  function __issueBan__(player, reason, time)

_Issue a temporary ban._

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the `Player` being banned
reason | `String` | the reason for the ban
time | `String` | The time component must be NUMBER HOUR/DAY/WEEK/MONTH. <br> Example: /ban player Being incredibly stupid 5 HOURS If you put nothing as time unit, it will evaluate as HOURS!

Returns | 
--- | 
`void` |


##### <a id='getallbans'></a>public  function __getAllBans__(banType)

_Get all bans of a certain BanType_

Argument | Type | Description  
--- | --- | --- 
banType | [`BanType`](BanType.md) | The BanType the ban will be sorted by

Returns | Description
--- | --- 
`Ban[]` | an Array of [`Ban`](Ban.md)(s)


##### <a id='getban'></a>public  function __getBan__(uuid)

_Gets a [`Ban`](Ban.md) for a given player's uuid_

Argument | Type | Description  
--- | --- | --- 
uuid | `String` | the uuid of the player

Returns | Description
--- | --- 
[`Ban`](Ban.md) | the Ban if exists; `null` otherwise


##### <a id='isbanned'></a>public  function __isBanned__(subject)

_Check if banned and unban if ban has expired. Returns true if still banned, false otherwise. THIS WILL ALSO WORK FOR IP!_

Argument | Type | Description  
--- | --- | --- 
subject | `String` | the uuid/ip of the subject who was banned

Returns | Description
--- | --- 
`boolean` | `true` if banned; `false` if not


##### <a id='issueban'></a>public  function __issueBan__(ban)

_Issues a ban using the given [`Ban`](Ban.md)_

Argument | Type | Description  
--- | --- | --- 
ban | [`Ban`](Ban.md) | the [`Ban`](Ban.md) to be issued

Returns | 
--- | 
`void` |


##### <a id='getbanfromname'></a>public  function __getBanFromName__(player)

_Gets a [`Ban`](Ban.md) for a given player's name_

Argument | Type | Description  
--- | --- | --- 
player | `String` | the name of the player

Returns | Description
--- | --- 
[`Ban`](Ban.md) | the Ban if exists; `null` otherwise


##### <a id='issueipban'></a>public  function __issueIpBan__(player, reason, bantime)

_issueIpBan method_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | player argument
reason | `String` | reason argument
bantime | `long` | bantime argument

Returns | 
--- | 
`void` |


##### <a id='issueipban'></a>public  function __issueIpBan__(player, reason, time)

_Issue an IP Ban with the given amount of time_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the `Player` who's IP is being banned
reason | `String` | the reason for the ban
time | `String` | The time component must be NUMBER HOUR/DAY/WEEK/MONTH. <br> Example: /ban player Being incredibly stupid 5 HOURS If you put nothing as time unit, it will evaluate as HOURS!

Returns | 
--- | 
`void` |


##### <a id='issueipban'></a>public  function __issueIpBan__(player, reason)

_Ban player by IP_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the `Player` who's IP is being banned
reason | `String` | the reason for the ban

Returns | 
--- | 
`void` |


##### <a id='reload'></a>public  function __reload__()

_Take a string and parse an amount of seconds. A String should be formatted like this: number hours|days|months Ex: 1 month and it will return the amount of seconds that contain one month_

Returns | Description
--- | --- 
`void` | long amount of seconds /
    private long parseTimeSpec(String ts) throws NumberFormatException {
        String[] split = ts.split(" ");

        if (split.length < 2) {
            return -1;
        }
        long seconds = Integer.parseInt(split[0]);

        if (split[1].toLowerCase().startsWith("hour")) {
            seconds = 3600;
        }
        else if (split[1].toLowerCase().startsWith("day")) {
            seconds = 86400;
        }
        else if (split[1].toLowerCase().startsWith("week")) {
            seconds = 604800;
        }
        else if (split[1].toLowerCase().startsWith("month")) {
            seconds = 2629743;
        }
        return seconds;
    }

    /** Reloads the bans from datasource


##### <a id='unban'></a>public  function __unban__(subject)

_Unban a subject, player or ip_

Argument | Type | Description  
--- | --- | --- 
subject | `String` | the uuid/ip of the subject

Returns | 
--- | 
`void` |


##### <a id='unban'></a>public  function __unban__(player)

_Unban this player (this will NOT work with IPBans!)_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the `Player` to unban

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

