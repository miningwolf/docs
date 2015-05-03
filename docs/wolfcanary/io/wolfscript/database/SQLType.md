## SQLType __class__

>io.wolfscript.database.SQLType

---

### Class Overview

Helper class so we can easily identify the driver type further down the code

Method | Type   
--- | :--- 
 readonly property __ClassPath__ <br> _ClassPath property_ | `String`
 readonly property __Identifier__ <br> _Identifier property_ | `String`
final function __equals__(obj) <br> _equals method_ | `boolean`
static function __forName__(name) <br> _forName method_ | [`SQLType`](SQLType.md)
static function __registerSQLDriver__(identifier, classpath) <br> _registerSQLDriver method_ | [`SQLType`](SQLType.md)
static function __registerSQLDriver__(identifier, classpath, useJDBCManager) <br> _registerSQLDriver method_ | [`SQLType`](SQLType.md)
 function __usesJDBCManager__() <br> _usesJDBCManager method_ | `boolean`
final var __classpath__ <br> _classpath field_ | `String`
final var __useJDBCManager__ <br> _useJDBCManager field_ | `boolean`



---


### Public Properties for [`SQLType`](SQLType.md)

##### <a id='classpath'></a>public  readonly property __ClassPath__

_ClassPath property_

Get | 
--- | 
`String` |



##### <a id='identifier'></a>public  readonly property __Identifier__

_Identifier property_

Get | 
--- | 
`String` |



---

### Public Methods for [`SQLType`](SQLType.md)

##### <a id='equals'></a>public final function __equals__(obj)

_equals method_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | 
--- | 
`boolean` |


##### <a id='forname'></a>public static function __forName__(name)

_forName method_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

Returns | 
--- | 
[`SQLType`](SQLType.md) |


##### <a id='registersqldriver'></a>public static function __registerSQLDriver__(identifier, classpath)

_registerSQLDriver method_

Argument | Type | Description  
--- | --- | --- 
identifier | `String` | identifier argument
classpath | `String` | classpath argument

Returns | 
--- | 
[`SQLType`](SQLType.md) |


##### <a id='registersqldriver'></a>public static function __registerSQLDriver__(identifier, classpath, useJDBCManager)

_registerSQLDriver method_

Argument | Type | Description  
--- | --- | --- 
identifier | `String` | identifier argument
classpath | `String` | classpath argument
useJDBCManager | `boolean` | useJDBCManager argument

Returns | 
--- | 
[`SQLType`](SQLType.md) |


##### <a id='usesjdbcmanager'></a>public  function __usesJDBCManager__()

_usesJDBCManager method_

Returns | 
--- | 
`boolean` |


---

### Public Fields for [`SQLType`](SQLType.md)

##### <a id='classpath'></a>public final var __classpath__

_classpath field_

>Returns
>  `String`

##### <a id='usejdbcmanager'></a>public final var __useJDBCManager__

_useJDBCManager field_

>Returns
>  `boolean`

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

