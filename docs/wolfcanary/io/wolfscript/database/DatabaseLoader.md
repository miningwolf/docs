## DatabaseLoader __class__

>io.wolfscript.database.DatabaseLoader

---

### Class Overview

Checks a database folder in WolfScripts root folder for external Database Implementations and loads them

Method | Type   
--- | :--- 
static function __load__() <br> _Scans db adapters folder, loads all valid databases and registers them_ | `void`



---


### Public Methods for [`DatabaseLoader`](DatabaseLoader.md)

##### <a id='load'></a>public static function __load__()

_Scans db adapters folder, loads all valid databases and registers them at Database.Type. This must be the first bootstrapping step, as all other steps require a functional database. This also means this must not make use of anything that isn't loaded already_

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

