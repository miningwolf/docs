## JdbcConnectionManager __class__

>io.wolfscript.database.JdbcConnectionManager

---

### Class Overview

Represents a connection (pool) manager for all sorts of JDBC connections. In our particular case that is mysql and sqlite. For sqlite, due to the minimal nature of it, there need to be a separate handling. TODO: Configure statement caching!

Method | Type   
--- | :--- 
static readonly property __Connection__ <br> _Get: Create a new instance of this connection manager._ | `Connection`
 readonly property __Type__ <br> _Get: Instantiates the connection manager_ | [`SQLType`](SQLType.md)
static function __shutdown__() <br> _Shut down the connection pool._ | `void`



---


### Public Properties for [`JdbcConnectionManager`](JdbcConnectionManager.md)

##### <a id='connection'></a>public static readonly property __Connection__

_Get: Create a new instance of this connection manager._

Get | Description
--- | --- 
`Connection` | an instance of the manager



##### <a id='type'></a>public  readonly property __Type__

_Get: Instantiates the connection manager_

Get | Description
--- | --- 
[`SQLType`](SQLType.md) | the type



---

### Public Methods for [`JdbcConnectionManager`](JdbcConnectionManager.md)

##### <a id='shutdown'></a>public static function __shutdown__()

_Shut down the connection pool. Should be called when the system is reloaded or goes down to prevent data loss._

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

