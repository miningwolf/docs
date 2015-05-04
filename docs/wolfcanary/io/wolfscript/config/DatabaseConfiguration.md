## DatabaseConfiguration __class__

>io.wolfscript.config.DatabaseConfiguration
>Implements [`ConfigurationContainer`](ConfigurationContainer.md)

---

### Class Overview

Database Configuration settings

Method | Type   
--- | :--- 
new __DatabaseConfiguration__(path) <br> _DatabaseConfiguration constructor_ | _constructor_
 readonly property __NumHelperThreads__ <br> _Get: Defines the amount of threads to use when executing slow JDBC operations,_ | `int`
 readonly property __WhitelistTableName__ <br> _WhitelistTableName property_ | `String`
 readonly property __DatabaseHost__ <br> _Get: Get the database host, defaulting to localhost_ | `String`
 readonly property __DatabasePort__ <br> _Get: Get the database port_ | `int`
 readonly property __DatabaseName__ <br> _Get: Get the name of the database. Defaults to 'wolfscript'_ | `String`
 readonly property __DatabaseUser__ <br> _Get: Get database user_ | `String`
 readonly property __DatabasePassword__ <br> _Get: Get database password._ | `String`
 readonly property __DatabaseMaxConnections__ <br> _Get: Get the maximum number of concurrent connections to the database._ | `int`
 readonly property __MaxCachedStatements__ <br> _Get: Defines the total number PreparedStatements a DataSource will cache._ | `int`
 readonly property __MaxCachedStatementsPerConnection__ <br> _Get: Defines how many statements each pooled Connection is allowed to own._ | `int`
 readonly property __NumStatementCloseThreads__ <br> _Get: If greater than zero, the Statement pool will defer physically close()ing cached Statements_ | `int`
 readonly property __ConnectionTestFrequency__ <br> _Get: Defines the interval of checking validity of pooled connections in seconds._ | `int`
 readonly property __ReturnConnectionTimeout__ <br> _Get: Defines the time in seconds a connection can stay checked out, before it is returned to the connection pool._ | `int`
 readonly property __File__ <br> _Get: Get the configuration file_ | `PropertiesFile`
 readonly property __MinPoolSize__ <br> _Get: Defines the minimum amount of connections to keep alive in the connection pool._ | `int`
 readonly property __MaxPoolSize__ <br> _Get: Defines the maximum allowed number of connections in the connection pool._ | `int`
 readonly property __MaxExcessConnectionsIdleTime__ <br> _Get: Number of seconds that Connections in excess of minPoolSize_ | `int`
 readonly property __AcquireIncrement__ <br> _Get: Determines how many connections at a time to acquire when the pool is exhausted._ | `int`
 readonly property __MaxConnectionIdleTime__ <br> _Get: Time to keep idle connections in the pool before they are closed and discarded._ | `int`
 readonly property __BansTableName__ <br> _BansTableName property_ | `String`
 readonly property __GroupsTableName__ <br> _GroupsTableName property_ | `String`
 readonly property __KitsTableName__ <br> _KitsTableName property_ | `String`
 readonly property __OpertatorsTableName__ <br> _OpertatorsTableName property_ | `String`
 readonly property __PermissionsTableName__ <br> _PermissionsTableName property_ | `String`
 readonly property __PlayersTableName__ <br> _PlayersTableName property_ | `String`
 readonly property __ReservelistTableName__ <br> _ReservelistTableName property_ | `String`
 readonly property __WarpsTableName__ <br> _WarpsTableName property_ | `String`
 function __getDatabaseUrl__(driver) <br> _Get the URL to the database._ | `String`
 function __reload__() <br> _Reloads the configuration file_ | `void`



---

### Public Constructors for [`DatabaseConfiguration`](DatabaseConfiguration.md)

##### <a id='databaseconfiguration'></a>new __DatabaseConfiguration__(path) 

_DatabaseConfiguration constructor_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

---

### Public Properties for [`DatabaseConfiguration`](DatabaseConfiguration.md)

##### <a id='numhelperthreads'></a>public  readonly property __NumHelperThreads__

_Get: Defines the amount of threads to use when executing slow JDBC operations, such as closing connections and statements._

Get | Description
--- | --- 
`int` | num of threads to use for heavy JDBC operations



##### <a id='whitelisttablename'></a>public  readonly property __WhitelistTableName__

_WhitelistTableName property_

Get | 
--- | 
`String` |



##### <a id='databasehost'></a>public  readonly property __DatabaseHost__

_Get: Get the database host, defaulting to localhost_

Get | Description
--- | --- 
`String` | database host



##### <a id='databaseport'></a>public  readonly property __DatabasePort__

_Get: Get the database port_

Get | Description
--- | --- 
`int` | The configured port or 0



##### <a id='databasename'></a>public  readonly property __DatabaseName__

_Get: Get the name of the database. Defaults to 'wolfscript'_

Get | Description
--- | --- 
`String` | database name



##### <a id='databaseuser'></a>public  readonly property __DatabaseUser__

_Get: Get database user This might be null if the datasource is not a password protected database type such as XML._

Get | Description
--- | --- 
`String` | database username



##### <a id='databasepassword'></a>public  readonly property __DatabasePassword__

_Get: Get database password. This might be null if the datasource is not a password protected database type such as XML._

Get | Description
--- | --- 
`String` | database password



##### <a id='databasemaxconnections'></a>public  readonly property __DatabaseMaxConnections__

_Get: Get the maximum number of concurrent connections to the database. This might be null if the datasource is not a connection oriented database type such as XML._

Get | Description
--- | --- 
`int` | database maximum connections



##### <a id='maxcachedstatements'></a>public  readonly property __MaxCachedStatements__

_Get: Defines the total number PreparedStatements a DataSource will cache. The pool will destroy the least-recently-used PreparedStatement when it hits this limit._

Get | Description
--- | --- 
`int` | config for max cached statements



##### <a id='maxcachedstatementsperconnection'></a>public  readonly property __MaxCachedStatementsPerConnection__

_Get: Defines how many statements each pooled Connection is allowed to own. You can set this to a bit more than the number of PreparedStatements your application frequently uses, to avoid churning._

Get | Description
--- | --- 
`int` | config for max num of pooled statements per connection



##### <a id='numstatementclosethreads'></a>public  readonly property __NumStatementCloseThreads__

_Get: If greater than zero, the Statement pool will defer physically close()ing cached Statements until its parent Connection is not in use by any client or internally (in e.g. a test) by the pool itself._

Get | Description
--- | --- 
`int` | config num of threads used to defer closing statements



##### <a id='connectiontestfrequency'></a>public  readonly property __ConnectionTestFrequency__

_Get: Defines the interval of checking validity of pooled connections in seconds._

Get | Description
--- | --- 
`int` | connection re-check interval



##### <a id='returnconnectiontimeout'></a>public  readonly property __ReturnConnectionTimeout__

_Get: Defines the time in seconds a connection can stay checked out, before it is returned to the connection pool._

Get | Description
--- | --- 
`int` | num of seconds a connection can stay checked out



##### <a id='file'></a>public  readonly property __File__

_Get: Get the configuration file_

Get | 
--- | 
`PropertiesFile` |



##### <a id='minpoolsize'></a>public  readonly property __MinPoolSize__

_Get: Defines the minimum amount of connections to keep alive in the connection pool._

Get | Description
--- | --- 
`int` | min amount of connections



##### <a id='maxpoolsize'></a>public  readonly property __MaxPoolSize__

_Get: Defines the maximum allowed number of connections in the connection pool._

Get | Description
--- | --- 
`int` | max allowed connections in pool



##### <a id='maxexcessconnectionsidletime'></a>public  readonly property __MaxExcessConnectionsIdleTime__

_Get: Number of seconds that Connections in excess of minPoolSize should be permitted to remain idle in the pool before being culled. Set 0 to turn off culling_

Get | Description
--- | --- 
`int` | seconds to keep excess connections



##### <a id='acquireincrement'></a>public  readonly property __AcquireIncrement__

_Get: Determines how many connections at a time to acquire when the pool is exhausted._

Get | Description
--- | --- 
`int` | connections to acquire



##### <a id='maxconnectionidletime'></a>public  readonly property __MaxConnectionIdleTime__

_Get: Time to keep idle connections in the pool before they are closed and discarded._

Get | Description
--- | --- 
`int` | keep-alive time of connections in pool



##### <a id='banstablename'></a>public  readonly property __BansTableName__

_BansTableName property_

Get | 
--- | 
`String` |



##### <a id='groupstablename'></a>public  readonly property __GroupsTableName__

_GroupsTableName property_

Get | 
--- | 
`String` |



##### <a id='kitstablename'></a>public  readonly property __KitsTableName__

_KitsTableName property_

Get | 
--- | 
`String` |



##### <a id='opertatorstablename'></a>public  readonly property __OpertatorsTableName__

_OpertatorsTableName property_

Get | 
--- | 
`String` |



##### <a id='permissionstablename'></a>public  readonly property __PermissionsTableName__

_PermissionsTableName property_

Get | 
--- | 
`String` |



##### <a id='playerstablename'></a>public  readonly property __PlayersTableName__

_PlayersTableName property_

Get | 
--- | 
`String` |



##### <a id='reservelisttablename'></a>public  readonly property __ReservelistTableName__

_ReservelistTableName property_

Get | 
--- | 
`String` |



##### <a id='warpstablename'></a>public  readonly property __WarpsTableName__

_WarpsTableName property_

Get | 
--- | 
`String` |



---

### Public Methods for [`DatabaseConfiguration`](DatabaseConfiguration.md)

##### <a id='getdatabaseurl'></a>public  function __getDatabaseUrl__(driver)

_Get the URL to the database. This is a combination of host, port and database_

Argument | Type | Description  
--- | --- | --- 
driver | `String` | the JDBC driver name (ie: mysql or sqlite)

Returns | Description
--- | --- 
`String` | database url


##### <a id='reload'></a>public  function __reload__()

_Reloads the configuration file_

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

