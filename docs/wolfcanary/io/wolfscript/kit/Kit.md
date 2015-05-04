## Kit __class__

>io.wolfscript.kit.Kit

---

### Class Overview

Contains information about a kit

Method | Type   
--- | :--- 
  property __Delay__ <br> _Delay property_ | `int`
 readonly property __Content__ <br> _Content property_ | `List<Item>`
 writeonly property __Id__ <br> _Set: Only set this if you're 110% sure what you're doing._ | `void`
 readonly property __Owner__ <br> _Owner property_ | `String[]`
 readonly property __Groups__ <br> _Groups property_ | `String[]`
 readonly property __Id__ <br> _Get: get the ID of this kit_ | `int`
  property __Name__ <br> _Name property_ | `String`
 readonly property __ItemsAsStringList__ <br> _Get: Mostly used for adding the items into the database_ | `List<String>`
 function __canBeGiven__(player) <br> _Tests if a given `Player` can receive this kit_ | `boolean`
 function __giveKit__(player, override) <br> _Give this kit to player, if possible_ | `boolean`
 function __setGroups__() <br> _setGroups method_ | `void`
 function __setContent__() <br> _setContent method_ | `void`
 function __setContentFromStrings__() <br> _Used to create a new item list from data coming from the database_ | `void`
 function __setOwner__() <br> _setOwner method_ | `void`



---


### Public Properties for [`Kit`](Kit.md)

##### <a id='delay'></a>public   property __Delay__

_Delay property_

Get | 
--- | 
`int` |

Set | Type | Description  
--- | --- | --- 
delay | `int` | delay argument


##### <a id='content'></a>public  readonly property __Content__

_Content property_

Get | 
--- | 
`List<Item>` |



##### <a id='id'></a>public  writeonly property __Id__

_Set: Only set this if you're 110% sure what you're doing. Changing the ID will not always have an effect. If you want to copy a kit and create a new one, change this kit to your likings, then add it as new to the BackboneKits. A new ID will be auto-assigned then._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
id | `int` | id argument


##### <a id='owner'></a>public  readonly property __Owner__

_Owner property_

Get | 
--- | 
`String[]` |



##### <a id='groups'></a>public  readonly property __Groups__

_Groups property_

Get | 
--- | 
`String[]` |



##### <a id='id'></a>public  readonly property __Id__

_Get: get the ID of this kit_

Get | 
--- | 
`int` |



##### <a id='name'></a>public   property __Name__

_Name property_

Get | 
--- | 
`String` |

Set | Type | Description  
--- | --- | --- 
name | `String` | name argument


##### <a id='itemsasstringlist'></a>public  readonly property __ItemsAsStringList__

_Get: Mostly used for adding the items into the database_

Get | 
--- | 
`List<String>` |



---

### Public Methods for [`Kit`](Kit.md)

##### <a id='canbegiven'></a>public  function __canBeGiven__(player)

_Tests if a given `Player` can receive this kit_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the `Player` to check

Returns | Description
--- | --- 
`boolean` | `true` if can be given; `false` if not


##### <a id='givekit'></a>public  function __giveKit__(player, override)

_Give this kit to player, if possible_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the `Player` to give a kit too
override | `boolean` | set to true to override delay, group, and owner checks

Returns | Description
--- | --- 
`boolean` | `true` if successful; `false` if not


##### <a id='setgroups'></a>public  function __setGroups__()

_setGroups method_

Returns | 
--- | 
`void` |


##### <a id='setcontent'></a>public  function __setContent__()

_setContent method_

Returns | 
--- | 
`void` |


##### <a id='setcontentfromstrings'></a>public  function __setContentFromStrings__()

_Used to create a new item list from data coming from the database_

Returns | 
--- | 
`void` |


##### <a id='setowner'></a>public  function __setOwner__()

_setOwner method_

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

