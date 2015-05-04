## PlayerListData __class__

>io.wolfscript.api.PlayerListData

---

### Class Overview

The information shown in the PlayerList ("Tab List")

Method | Type   
--- | :--- 
new __PlayerListData__(action, profile, ping, mode, displayName) <br> _Constructs a PlayerListData with [`PlayerListAction`](PlayerListAction.md) information_ | _constructor_
new __PlayerListData__(action, uuid, ping, mode, displayName) <br> _Constructs a PlayerListData with [`PlayerListAction`](PlayerListAction.md) information_ | _constructor_
new __PlayerListData__(action, player) <br> _Constructs a PlayerListData with [`PlayerListAction`](PlayerListAction.md) information_ | _constructor_
final writeonly property __Mode__ <br> _Set: Sets the [`GameMode`](GameMode.md) of this ListData_ | `void`
final readonly property __Action__ <br> _Get: Gets the [`PlayerListAction`](PlayerListAction.md) of this ListData_ | [`PlayerListAction`](PlayerListAction.md)
final  property __DisplayName__ <br> _DisplayName property_ | [`ChatComponent`](chat/ChatComponent.md)
final readonly property __Mode__ <br> _Get: Gets the [`GameMode`](GameMode.md) of the `Player` this ListData is for_ | [`GameMode`](GameMode.md)
final  property __Ping__ <br> _Get: Gets the ping of the `Player` this ListData is for<br>Set: Sets the ping of this ListData_ | `int`
final  property __Profile__ <br> _Get: Gets the `GameProfile` of this ListData<br>Set: Sets the `GameProfile` of this ListData_ | `GameProfile`
 function __copy__() <br> _copy method_ | [`PlayerListData`](PlayerListData.md)
final function __displayNameSet__() <br> _Checks if the [`ChatComponent`](chat/ChatComponent.md) display name is not null_ | `boolean`
final function __toString__() <br> _toString method_ | `String`



---

### Public Constructors for [`PlayerListData`](PlayerListData.md)

##### <a id='playerlistdata'></a>new __PlayerListData__(action, profile, ping, mode, displayName) 

_Constructs a PlayerListData with [`PlayerListAction`](PlayerListAction.md) information_

Argument | Type | Description  
--- | --- | --- 
action | [`PlayerListAction`](PlayerListAction.md) | the [`PlayerListAction`](PlayerListAction.md) this data if for
profile | `GameProfile` | the `GameProfile` of the `Player` this ListData is for
ping | `int` | the ping of the `Player` this ListData is for
mode | [`GameMode`](GameMode.md) | the mode of the `Player` this ListData is for
displayName | [`ChatComponent`](chat/ChatComponent.md) | the [`ChatComponent`](chat/ChatComponent.md) used as a DisplayName in the list

##### <a id='playerlistdata'></a>new __PlayerListData__(action, uuid, ping, mode, displayName) 

_Constructs a PlayerListData with [`PlayerListAction`](PlayerListAction.md) information_

Argument | Type | Description  
--- | --- | --- 
action | [`PlayerListAction`](PlayerListAction.md) | action argument
uuid | `UUID` | uuid argument
ping | `int` | ping argument
mode | [`GameMode`](GameMode.md) | mode argument
displayName | [`ChatComponent`](chat/ChatComponent.md) | displayName argument

##### <a id='playerlistdata'></a>new __PlayerListData__(action, player) 

_Constructs a PlayerListData with [`PlayerListAction`](PlayerListAction.md) information_

Argument | Type | Description  
--- | --- | --- 
action | [`PlayerListAction`](PlayerListAction.md) | the [`PlayerListAction`](PlayerListAction.md) of this ListData
player | `Player` | the `Player` to use data from

---

### Public Properties for [`PlayerListData`](PlayerListData.md)

##### <a id='mode'></a>public final writeonly property __Mode__

_Set: Sets the [`GameMode`](GameMode.md) of this ListData_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
mode | [`GameMode`](GameMode.md) | the [`GameMode`](GameMode.md)


##### <a id='action'></a>public final readonly property __Action__

_Get: Gets the [`PlayerListAction`](PlayerListAction.md) of this ListData_

Get | Description
--- | --- 
[`PlayerListAction`](PlayerListAction.md) | action



##### <a id='displayname'></a>public final  property __DisplayName__

_DisplayName property_

Get | 
--- | 
[`ChatComponent`](chat/ChatComponent.md) |

Set | Type | Description  
--- | --- | --- 
displayName | [`ChatComponent`](chat/ChatComponent.md) | displayName argument


##### <a id='mode'></a>public final readonly property __Mode__

_Get: Gets the [`GameMode`](GameMode.md) of the `Player` this ListData is for_

Get | Description
--- | --- 
[`GameMode`](GameMode.md) | gamemode



##### <a id='ping'></a>public final  property __Ping__

_Get: Gets the ping of the `Player` this ListData is for<br>Set: Sets the ping of this ListData_

Get | Description
--- | --- 
`int` | ping

Set | Type | Description  
--- | --- | --- 
ping | `int` | the ping to be set


##### <a id='profile'></a>public final  property __Profile__

_Get: Gets the `GameProfile` of this ListData<br>Set: Sets the `GameProfile` of this ListData_

Get | Description
--- | --- 
`GameProfile` | profile

Set | Type | Description  
--- | --- | --- 
profile | `GameProfile` | the `GameProfile` to


---

### Public Methods for [`PlayerListData`](PlayerListData.md)

##### <a id='copy'></a>public  function __copy__()

_copy method_

Returns | 
--- | 
[`PlayerListData`](PlayerListData.md) |


##### <a id='displaynameset'></a>public final function __displayNameSet__()

_Checks if the [`ChatComponent`](chat/ChatComponent.md) display name is not null_

Returns | Description
--- | --- 
`boolean` | `true` if not null; `false` if null


##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

