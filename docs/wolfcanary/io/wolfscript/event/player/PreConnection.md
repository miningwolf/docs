## PreConnection __class__

>io.wolfscript.event.player.PreConnection
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Login checks hook. Comes with ip, name and a kickReason that is to be returned, and should be null if a player should not be kicked.

Method | Type   
--- | :--- 
new __PreConnection__(ip, name, id, dimType, world) <br> _PreConnection constructor_ | _constructor_
  property __World__ <br> _World property_ | `String`
  property __WorldType__ <br> _WorldType property_ | [`DimensionType`](..\..\api\world\DimensionType.md)
 writeonly property __KickReason__ <br> _Set: Get the IP of the joining `Player`_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`PreConnection`](PreConnection.md)

##### <a id='preconnection'></a>new __PreConnection__(ip, name, id, dimType, world) 

_PreConnection constructor_

Argument | Type | Description  
--- | --- | --- 
ip | `String` | ip argument
name | `String` | name argument
id | `UUID` | id argument
dimType | [`DimensionType`](..\..\api\world\DimensionType.md) | dimType argument
world | `String` | world argument

---

### Public Properties for [`PreConnection`](PreConnection.md)

##### <a id='world'></a>public   property __World__

_World property_

Get | 
--- | 
`String` |

Set | Type | Description  
--- | --- | --- 
world | `String` | world argument


##### <a id='worldtype'></a>public   property __WorldType__

_WorldType property_

Get | 
--- | 
[`DimensionType`](..\..\api\world\DimensionType.md) |

Set | Type | Description  
--- | --- | --- 
dimensionType | [`DimensionType`](..\..\api\world\DimensionType.md) | dimensionType argument


##### <a id='kickreason'></a>public  writeonly property __KickReason__

_Set: Get the IP of the joining `Player`_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
reason | `String` | reason argument


---

### Public Methods for [`PreConnection`](PreConnection.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`Hook`](..\..\hook\Hook.md)

##### <a id='call'></a>public  function __call__()

_Get the name of this hook._

Returns | Description
--- | --- 
[`Hook`](..\..\hook\Hook.md) | simple class name /
    public final String getHookName() {
        return getClass().getSimpleName();
    }

    @Override
    public int hashCode() {
        int hash = getClass().getSimpleName().length();

        return hash getClass().getSimpleName().hashCode() + 2;
    }

    /** Calls a Hook if not already executed


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

