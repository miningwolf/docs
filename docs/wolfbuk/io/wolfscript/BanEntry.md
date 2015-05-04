## BanEntry __interface__

>io.wolfscript.BanEntry

---

### Interface Overview

interface BanEntry

Method | Type   
--- | :--- 
  property __Created__ <br> _Get: Gets the date this ban entry was created.<br>Set: Sets the date this ban entry was created._ | `Date`
  property __Expiration__ <br> _Get: Gets the date this ban expires on, or null for no defined end date.<br>Set: Sets the date this ban expires on. Null values are considered_ | `Date`
  property __Reason__ <br> _Get: Gets the reason for this ban.<br>Set: Sets the reason for this ban. Reasons must not be null._ | `String`
  property __Source__ <br> _Get: Gets the source of this ban.<br>Set: Sets the source of this ban._ | `String`
 readonly property __Target__ <br> _Get: Gets the target involved. This may be in the form of an IP or a player_ | `String`
 function __save__() <br> _Saves the ban entry, overwriting any previous data in the ban list._ | `void`



---


### Public Properties for [`BanEntry`](BanEntry.md)

##### <a id='created'></a>public   property __Created__

_Get: Gets the date this ban entry was created.<br>Set: Sets the date this ban entry was created._

Get | 
--- | 
`Date` |

Set | Type | Description  
--- | --- | --- 
created | `Date` | the new created date, cannot be null


##### <a id='expiration'></a>public   property __Expiration__

_Get: Gets the date this ban expires on, or null for no defined end date.<br>Set: Sets the date this ban expires on. Null values are considered "infinite" bans._

Get | 
--- | 
`Date` |

Set | Type | Description  
--- | --- | --- 
expiration | `Date` | the new expiration date, or null to indicate an eternity


##### <a id='reason'></a>public   property __Reason__

_Get: Gets the reason for this ban.<br>Set: Sets the reason for this ban. Reasons must not be null._

Get | 
--- | 
`String` |

Set | Type | Description  
--- | --- | --- 
reason | `String` | the new reason, null values assume the implementation default


##### <a id='source'></a>public   property __Source__

_Get: Gets the source of this ban. <p> Note: A source is considered any String, although this is generally a player name.<br>Set: Sets the source of this ban. <p> Note: A source is considered any String, although this is generally a player name._

Get | 
--- | 
`String` |

Set | Type | Description  
--- | --- | --- 
source | `String` | the new source where null values become empty strings


##### <a id='target'></a>public  readonly property __Target__

_Get: Gets the target involved. This may be in the form of an IP or a player name._

Get | Description
--- | --- 
`String` | the target name or IP address



---

### Public Methods for [`BanEntry`](BanEntry.md)

##### <a id='save'></a>public  function __save__()

_Saves the ban entry, overwriting any previous data in the ban list. <p> Saving the ban entry of an unbanned player will cause the player to be banned once again._

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

