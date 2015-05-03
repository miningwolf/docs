## JdbcConnectionManager __class__

>io.wolfscript.database.JdbcConnectionManager

---

### Class Overview

Represents a connection (pool) manager for all sorts of JDBC connections. In our particular case that is mysql and sqlite. For sqlite, due to the minimal nature of it, there need to be a separate handling. TODO: Configure statement caching!

Method | Type   
--- | :--- 
static function __shutdown__() <br> _Instantiates the connection manager_ | `void`



---


### Public Methods for [`JdbcConnectionManager`](JdbcConnectionManager.md)

##### <a id='shutdown'></a>public static function __shutdown__()

_Instantiates the connection manager_

Returns | Description
--- | --- 
`void` | the type /
    public SQLType getType() {
        return this.type;
    }

    /** Create a new instance of this connection manager.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

