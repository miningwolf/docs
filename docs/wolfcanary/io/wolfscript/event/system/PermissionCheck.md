## PermissionCheck __class__

>io.wolfscript.event.system.PermissionCheck
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

This hook is called after the PermissionProvider has resolved the permission, to alter the final outcome and eventually temporary allow a permission to a player

Method | Type   
--- | :--- 
new __PermissionCheck__(permission, player, result) <br> _PermissionCheck constructor_ | _constructor_
 writeonly property __Result__ <br> _Set: Gets the permission that was checked_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`PermissionCheck`](PermissionCheck.md)

##### <a id='permissioncheck'></a>new __PermissionCheck__(permission, player, result) 

_PermissionCheck constructor_

Argument | Type | Description  
--- | --- | --- 
permission | `String` | permission argument
player | [`MessageReceiver`](..\..\chat\MessageReceiver.md) | player argument
result | `boolean` | result argument

---

### Public Properties for [`PermissionCheck`](PermissionCheck.md)

##### <a id='result'></a>public  writeonly property __Result__

_Set: Gets the permission that was checked_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
result | `boolean` | result argument


---

### Public Methods for [`PermissionCheck`](PermissionCheck.md)

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
	

