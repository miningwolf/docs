## Ban __class__

>io.wolfscript.bansystem.Ban

---

### Class Overview

Contains information regarding a ban

Method | Type   
--- | :--- 
new __Ban__() <br> _Create a default ban object._ | _constructor_
new __Ban__(player, reason, ipBan) <br> _Ban constructor_ | _constructor_
new __Ban__(player, reason, expiration, ipBan) <br> _Ban constructor_ | _constructor_
new __Ban__(player, reason, banType) <br> _Ban constructor_ | _constructor_
new __Ban__(player, reason, expiration, banType) <br> _Ban constructor_ | _constructor_
  property __Subject__ <br> _Get: Get the banned subject (usually a player name)<br>Set: Set the banned Subject (usually a player name)_ | `String`
  property __Ip__ <br> _Get: If this is an IP ban, you can get the IP address here<br>Set: If this is an IP Ban, set the IP address_ | `String`
  property __IssuedDate__ <br> _Get: Gets the UNIX timestamp of when this ban was issued.<br>Set: Sets the UNIX timestamp of when this ban was issued._ | `long`
  property __Reason__ <br> _Get: Get the banning reasons. It defaults to the funny reason of<br>Set: Set the ban reason_ | `String`
  property __BanningPlayer__ <br> _Get: Gets the moderator who issued the Ban<br>Set: Sets the moderator who issued the Ban_ | `String`
  property __BanType__ <br> _Get: Checks the ban type<br>Set: Sets the ban type_ | [`BanType`](BanType.md)
  property __Expiration__ <br> _Get: Get the UNIX timestamp of when this ban will expire. You can use that<br>Set: Set the UNIX timestamp of when this ban will expire_ | `long`
 writeonly property __IsIpBan__ <br> _Set: Sets if the Ban is an IP Ban_ | `void`
  property __UUID__ <br> _Get: Gets the UUID of the user for this ban.<br>Set: Sets the UUID for the ban on this user_ | `String`
 function __isExpired__() <br> _Check if this ban has expired_ | `boolean`
 function __isIpBan__() <br> _Checks if the Ban is an IP Ban_ | `boolean`



---

### Public Constructors for [`Ban`](Ban.md)

##### <a id='ban'></a>new __Ban__() 

_Create a default ban object. It's highly recommended to override the values before saving to db_


##### <a id='ban'></a>new __Ban__(player, reason, ipBan) 

_Ban constructor_

Argument | Type | Description  
--- | --- | --- 
player | [`PlayerReference`](../api/PlayerReference.md) | player argument
reason | `String` | reason argument
ipBan | `boolean` | ipBan argument

##### <a id='ban'></a>new __Ban__(player, reason, expiration, ipBan) 

_Ban constructor_

Argument | Type | Description  
--- | --- | --- 
player | [`PlayerReference`](../api/PlayerReference.md) | player argument
reason | `String` | reason argument
expiration | `long` | expiration argument
ipBan | `boolean` | ipBan argument

##### <a id='ban'></a>new __Ban__(player, reason, banType) 

_Ban constructor_

Argument | Type | Description  
--- | --- | --- 
player | [`PlayerReference`](../api/PlayerReference.md) | player argument
reason | `String` | reason argument
banType | [`BanType`](BanType.md) | banType argument

##### <a id='ban'></a>new __Ban__(player, reason, expiration, banType) 

_Ban constructor_

Argument | Type | Description  
--- | --- | --- 
player | [`PlayerReference`](../api/PlayerReference.md) | player argument
reason | `String` | reason argument
expiration | `long` | expiration argument
banType | [`BanType`](BanType.md) | banType argument

---

### Public Properties for [`Ban`](Ban.md)

##### <a id='subject'></a>public   property __Subject__

_Get: Get the banned subject (usually a player name)<br>Set: Set the banned Subject (usually a player name)_

Get | Description
--- | --- 
`String` | subject name

Set | Type | Description  
--- | --- | --- 
subject | `String` | the subject's name


##### <a id='ip'></a>public   property __Ip__

_Get: If this is an IP ban, you can get the IP address here<br>Set: If this is an IP Ban, set the IP address_

Get | Description
--- | --- 
`String` | the ip address or null if this is not an ip ban

Set | Type | Description  
--- | --- | --- 
ip | `String` | the ip address


##### <a id='issueddate'></a>public   property __IssuedDate__

_Get: Gets the UNIX timestamp of when this ban was issued.<br>Set: Sets the UNIX timestamp of when this ban was issued._

Get | Description
--- | --- 
`long` | UNIX timestamp

Set | Type | Description  
--- | --- | --- 
issued | `long` | UNIX timestamp


##### <a id='reason'></a>public   property __Reason__

_Get: Get the banning reasons. It defaults to the funny reason of "Impersonating fictive characters"<br>Set: Set the ban reason_

Get | Description
--- | --- 
`String` | the ban reason

Set | Type | Description  
--- | --- | --- 
reason | `String` | the ban reason


##### <a id='banningplayer'></a>public   property __BanningPlayer__

_Get: Gets the moderator who issued the Ban<br>Set: Sets the moderator who issued the Ban_

Get | Description
--- | --- 
`String` | the moderator

Set | Type | Description  
--- | --- | --- 
banningPlayer | `String` | the moderator


##### <a id='bantype'></a>public   property __BanType__

_Get: Checks the ban type<br>Set: Sets the ban type_

Get | Description
--- | --- 
[`BanType`](BanType.md) | the correct ban type for this ban

Set | Type | Description  
--- | --- | --- 
banType | [`BanType`](BanType.md) | the ban type to apply to this ban


##### <a id='expiration'></a>public   property __Expiration__

_Get: Get the UNIX timestamp of when this ban will expire. You can use that with a date formatter if you need to.<br>Set: Set the UNIX timestamp of when this ban will expire_

Get | Description
--- | --- 
`long` | UNIX timestamp

Set | Type | Description  
--- | --- | --- 
expiration | `long` | the UNIX timestamp


##### <a id='isipban'></a>public  writeonly property __IsIpBan__

_Set: Sets if the Ban is an IP Ban_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
isIpBan | `boolean` | `true` for IP Ban; `false` for not


##### <a id='timestamp'></a>public   property __Timestamp__
_Deprecated: Use {@link Ban#getExpiration} instead_

_Get: Get the UNIX timestamp of when this ban will expire. You can use that with a date formatter if you need to.<br>Set: Set the UNIX timestamp of when this ban will expire_

Get | Description
--- | --- 
`long` | UNIX timestamp

Set | Type | Description  
--- | --- | --- 
timestamp | `long` | the UNIX timestamp


##### <a id='uuid'></a>public   property __UUID__

_Get: Gets the UUID of the user for this ban.<br>Set: Sets the UUID for the ban on this user_

Get | Description
--- | --- 
`String` | UUID of user

Set | Type | Description  
--- | --- | --- 
uuid | `String` | uuid argument


---

### Public Methods for [`Ban`](Ban.md)

##### <a id='isexpired'></a>public  function __isExpired__()

_Check if this ban has expired_

Returns | Description
--- | --- 
`boolean` | `true` if expired; `false` if not


##### <a id='isipban'></a>public  function __isIpBan__()

_Checks if the Ban is an IP Ban_

Returns | Description
--- | --- 
`boolean` | `true` if IP Ban; `false` if not


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

