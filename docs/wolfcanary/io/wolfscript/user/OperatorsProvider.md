## OperatorsProvider __class__

>io.wolfscript.user.OperatorsProvider

---

### Class Overview

Access to the backbone for operators

Method | Type   
--- | :--- 
new __OperatorsProvider__() <br> _OperatorsProvider constructor_ | _constructor_
 readonly property __Ops__ <br> _Get: Gets an array of all Operators_ | `String[]`
 readonly property __Size__ <br> _Get: gets the current size of the ops list_ | `int`
 function __addPlayer__(entry) <br> _addPlayer method_ | `void`
 function __isOpped__(nameOrUUID) <br> _isOpped method_ | `boolean`
 function __isOpped__(playerReference) <br> _isOpped method_ | `boolean`
 function __reload__() <br> _Reload the ops from database_ | `void`
 function __removePlayer__(entry) <br> _removePlayer method_ | `void`



---

### Public Constructors for [`OperatorsProvider`](OperatorsProvider.md)

##### <a id='operatorsprovider'></a>new __OperatorsProvider__() 

_OperatorsProvider constructor_


---

### Public Properties for [`OperatorsProvider`](OperatorsProvider.md)

##### <a id='ops'></a>public  readonly property __Ops__

_Get: Gets an array of all Operators_

Get | 
--- | 
`String[]` |



##### <a id='size'></a>public  readonly property __Size__

_Get: gets the current size of the ops list_

Get | Description
--- | --- 
`int` | the size



---

### Public Methods for [`OperatorsProvider`](OperatorsProvider.md)

##### <a id='addplayer'></a>public  function __addPlayer__(entry)

_addPlayer method_

Argument | Type | Description  
--- | --- | --- 
entry | `String` | entry argument

Returns | 
--- | 
`void` |


##### <a id='isopped'></a>public  function __isOpped__(nameOrUUID)

_isOpped method_

Argument | Type | Description  
--- | --- | --- 
nameOrUUID | `String` | nameOrUUID argument

Returns | 
--- | 
`boolean` |


##### <a id='isopped'></a>public  function __isOpped__(playerReference)

_isOpped method_

Argument | Type | Description  
--- | --- | --- 
playerReference | [`PlayerReference`](../api/PlayerReference.md) | playerReference argument

Returns | 
--- | 
`boolean` |


##### <a id='reload'></a>public  function __reload__()

_Reload the ops from database_

Returns | 
--- | 
`void` |


##### <a id='removeplayer'></a>public  function __removePlayer__(entry)

_removePlayer method_

Argument | Type | Description  
--- | --- | --- 
entry | `String` | entry argument

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

