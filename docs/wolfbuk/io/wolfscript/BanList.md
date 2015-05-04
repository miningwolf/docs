## BanList __interface__

>io.wolfscript.BanList

---

### Interface Overview

A ban list, containing bans of some `Type`.

Method | Type   
--- | :--- 
 readonly property __BanEntries__ <br> _Get: Gets a set containing every [`BanEntry`](BanEntry.md) in this list._ | `Set<BanEntry>`
 function __addBan__(target, reason, expires, source) <br> _Adds a ban to the this list. If a previous ban exists, this will_ | [`BanEntry`](BanEntry.md)
 function __getBanEntry__(target) <br> _Gets a [`BanEntry`](BanEntry.md) by target._ | [`BanEntry`](BanEntry.md)
 function __isBanned__(target) <br> _Gets if a [`BanEntry`](BanEntry.md) exists for the target, indicating an active_ | `boolean`
 function __pardon__(target) <br> _Removes the specified target from this list, therefore indicating a_ | `void`



---


### Public Properties for [`BanList`](BanList.md)

##### <a id='banentries'></a>public  readonly property __BanEntries__

_Get: Gets a set containing every [`BanEntry`](BanEntry.md) in this list._

Get | Description
--- | --- 
`Set<BanEntry>` | an immutable set containing every entry tracked by this list



---

### Public Methods for [`BanList`](BanList.md)

##### <a id='addban'></a>public  function __addBan__(target, reason, expires, source)

_Adds a ban to the this list. If a previous ban exists, this will update the previous entry._

Argument | Type | Description  
--- | --- | --- 
target | `String` | the target of the ban
reason | `String` | reason for the ban, null indicates implementation default
expires | `Date` | date for the ban's expiration (unban), or null to imply forever
source | `String` | source of the ban, null indicates implementation default

Returns | Description
--- | --- 
[`BanEntry`](BanEntry.md) | the entry for the newly created ban, or the entry for the (updated) previous ban


##### <a id='getbanentry'></a>public  function __getBanEntry__(target)

_Gets a [`BanEntry`](BanEntry.md) by target._

Argument | Type | Description  
--- | --- | --- 
target | `String` | entry parameter to search for

Returns | Description
--- | --- 
[`BanEntry`](BanEntry.md) | the corresponding entry, or null if none found


##### <a id='isbanned'></a>public  function __isBanned__(target)

_Gets if a [`BanEntry`](BanEntry.md) exists for the target, indicating an active ban status._

Argument | Type | Description  
--- | --- | --- 
target | `String` | the target to find

Returns | Description
--- | --- 
`boolean` | true if a [`BanEntry`](BanEntry.md) exists for the name, indicating an active ban status, false otherwise


##### <a id='pardon'></a>public  function __pardon__(target)

_Removes the specified target from this list, therefore indicating a "not banned" status._

Argument | Type | Description  
--- | --- | --- 
target | `String` | the target to remove from this list

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

