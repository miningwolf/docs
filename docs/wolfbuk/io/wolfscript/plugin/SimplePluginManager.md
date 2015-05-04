## SimplePluginManager __class__

>io.wolfscript.plugin.SimplePluginManager
>Implements [`PluginManager`](PluginManager.md)

---

### Class Overview

Handles all plugin management from the Server

Method | Type   
--- | :--- 
new __SimplePluginManager__(instance, commandMap) <br> _SimplePluginManager constructor_ | _constructor_
 readonly property __Permissions__ <br> _Permissions property_ | `Set<Permission>`
 function __getDefaultPermissions__(op) <br> _getDefaultPermissions method_ | `Set<Permission>`
 function __loadPlugins__(directory) <br> _Loads the plugins contained within the specified directory_ | `Plugin[]`
 function __isPluginEnabled__(plugin) <br> _Checks if the given plugin is enabled or not_ | `boolean`
 function __enablePlugin__(Plugin) <br> _enablePlugin method_ | `void`
 function __disablePlugins__() <br> _disablePlugins method_ | `void`
 function __disablePlugin__(Plugin) <br> _disablePlugin method_ | `void`
 function __clearPlugins__() <br> _clearPlugins method_ | `void`
 function __callEvent__(event) <br> _Calls an event with the given details._ | `void`
 function __getDefaultPermSubscriptions__(op) <br> _getDefaultPermSubscriptions method_ | `Set<Permissible>`
 function __getPermissionSubscriptions__(permission) <br> _getPermissionSubscriptions method_ | `Set<Permissible>`
 function __getPermission__(name) <br> _getPermission method_ | [`Permission`](../permissions/Permission.md)
 function __addPermission__(perm) <br> _addPermission method_ | `void`
 function __isPluginEnabled__(name) <br> _Checks if the given plugin is enabled or not_ | `boolean`
 function __subscribeToDefaultPerms__(op, permissible) <br> _subscribeToDefaultPerms method_ | `void`
 function __removePermission__(perm) <br> _removePermission method_ | `void`
 function __recalculatePermissionDefaults__(perm) <br> _recalculatePermissionDefaults method_ | `void`
 function __registerEvents__(listener, plugin) <br> _registerEvents method_ | `void`
 function __registerEvent__(Event, listener, priority, executor, plugin) <br> _registerEvent method_ | `void`
 function __registerEvent__(Event, listener, priority, executor, plugin, ignoreCancelled) <br> _Registers the given event to the specified listener using a directly_ | `void`
 function __removePermission__(name) <br> _removePermission method_ | `void`
 function __subscribeToPermission__(permission, permissible) <br> _subscribeToPermission method_ | `void`
 function __unsubscribeFromDefaultPerms__(op, permissible) <br> _unsubscribeFromDefaultPerms method_ | `void`
 function __unsubscribeFromPermission__(permission, permissible) <br> _unsubscribeFromPermission method_ | `void`
 function __useTimings__() <br> _useTimings method_ | `boolean`
 function __useTimings__(use) <br> _Sets whether or not per event timing code should be used_ | `void`



---

### Public Constructors for [`SimplePluginManager`](SimplePluginManager.md)

##### <a id='simplepluginmanager'></a>new __SimplePluginManager__(instance, commandMap) 

_SimplePluginManager constructor_

Argument | Type | Description  
--- | --- | --- 
instance | [`Server`](../Server.md) | instance argument
commandMap | [`SimpleCommandMap`](../command/SimpleCommandMap.md) | commandMap argument

---

### Public Properties for [`SimplePluginManager`](SimplePluginManager.md)

##### <a id='permissions'></a>public  readonly property __Permissions__

_Permissions property_

Get | 
--- | 
`Set<Permission>` |



---

### Public Methods for [`SimplePluginManager`](SimplePluginManager.md)

##### <a id='getdefaultpermissions'></a>public  function __getDefaultPermissions__(op)

_getDefaultPermissions method_

Argument | Type | Description  
--- | --- | --- 
op | `boolean` | op argument

Returns | 
--- | 
`Set<Permission>` |


##### <a id='loadplugins'></a>public  function __loadPlugins__(directory)

_Loads the plugins contained within the specified directory_

Argument | Type | Description  
--- | --- | --- 
directory | `File` | Directory to check for plugins

Returns | Description
--- | --- 
`Plugin[]` | A list of all plugins loaded


##### <a id='ispluginenabled'></a>public  function __isPluginEnabled__(plugin)

_Checks if the given plugin is enabled or not_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](Plugin.md) | Plugin to check

Returns | Description
--- | --- 
`boolean` | true if the plugin is enabled, otherwise false


##### <a id='enableplugin'></a>public  function __enablePlugin__(Plugin)

_enablePlugin method_

Argument | Type | Description  
--- | --- | --- 
Plugin | `final` | Plugin argument

Returns | 
--- | 
`void` |


##### <a id='disableplugins'></a>public  function __disablePlugins__()

_disablePlugins method_

Returns | 
--- | 
`void` |


##### <a id='disableplugin'></a>public  function __disablePlugin__(Plugin)

_disablePlugin method_

Argument | Type | Description  
--- | --- | --- 
Plugin | `final` | Plugin argument

Returns | 
--- | 
`void` |


##### <a id='clearplugins'></a>public  function __clearPlugins__()

_clearPlugins method_

Returns | 
--- | 
`void` |


##### <a id='callevent'></a>public  function __callEvent__(event)

_Calls an event with the given details. <p> This method only synchronizes when the event is not asynchronous._

Argument | Type | Description  
--- | --- | --- 
event | [`Event`](../event/Event.md) | Event details

Returns | 
--- | 
`void` |


##### <a id='getdefaultpermsubscriptions'></a>public  function __getDefaultPermSubscriptions__(op)

_getDefaultPermSubscriptions method_

Argument | Type | Description  
--- | --- | --- 
op | `boolean` | op argument

Returns | 
--- | 
`Set<Permissible>` |


##### <a id='getpermissionsubscriptions'></a>public  function __getPermissionSubscriptions__(permission)

_getPermissionSubscriptions method_

Argument | Type | Description  
--- | --- | --- 
permission | `String` | permission argument

Returns | 
--- | 
`Set<Permissible>` |


##### <a id='getpermission'></a>public  function __getPermission__(name)

_getPermission method_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

Returns | 
--- | 
[`Permission`](../permissions/Permission.md) |


##### <a id='addpermission'></a>public  function __addPermission__(perm)

_addPermission method_

Argument | Type | Description  
--- | --- | --- 
perm | [`Permission`](../permissions/Permission.md) | perm argument

Returns | 
--- | 
`void` |


##### <a id='ispluginenabled'></a>public  function __isPluginEnabled__(name)

_Checks if the given plugin is enabled or not <p> Please note that the name of the plugin is case-sensitive._

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the plugin to check

Returns | Description
--- | --- 
`boolean` | true if the plugin is enabled, otherwise false


##### <a id='subscribetodefaultperms'></a>public  function __subscribeToDefaultPerms__(op, permissible)

_subscribeToDefaultPerms method_

Argument | Type | Description  
--- | --- | --- 
op | `boolean` | op argument
permissible | [`Permissible`](../permissions/Permissible.md) | permissible argument

Returns | 
--- | 
`void` |


##### <a id='removepermission'></a>public  function __removePermission__(perm)

_removePermission method_

Argument | Type | Description  
--- | --- | --- 
perm | [`Permission`](../permissions/Permission.md) | perm argument

Returns | 
--- | 
`void` |


##### <a id='recalculatepermissiondefaults'></a>public  function __recalculatePermissionDefaults__(perm)

_recalculatePermissionDefaults method_

Argument | Type | Description  
--- | --- | --- 
perm | [`Permission`](../permissions/Permission.md) | perm argument

Returns | 
--- | 
`void` |


##### <a id='registerevents'></a>public  function __registerEvents__(listener, plugin)

_registerEvents method_

Argument | Type | Description  
--- | --- | --- 
listener | [`Listener`](../event/Listener.md) | listener argument
plugin | [`Plugin`](Plugin.md) | plugin argument

Returns | 
--- | 
`void` |


##### <a id='registerevent'></a>public  function __registerEvent__(Event, listener, priority, executor, plugin)

_registerEvent method_

Argument | Type | Description  
--- | --- | --- 
Event | `extends` | Event argument
listener | [`Listener`](../event/Listener.md) | listener argument
priority | [`EventPriority`](../event/EventPriority.md) | priority argument
executor | [`EventExecutor`](EventExecutor.md) | executor argument
plugin | [`Plugin`](Plugin.md) | plugin argument

Returns | 
--- | 
`void` |


##### <a id='registerevent'></a>public  function __registerEvent__(Event, listener, priority, executor, plugin, ignoreCancelled)

_Registers the given event to the specified listener using a directly passed EventExecutor_

Argument | Type | Description  
--- | --- | --- 
Event | `extends` | Event argument
listener | [`Listener`](../event/Listener.md) | PlayerListener to register
priority | [`EventPriority`](../event/EventPriority.md) | Priority of this event
executor | [`EventExecutor`](EventExecutor.md) | EventExecutor to register
plugin | [`Plugin`](Plugin.md) | Plugin to register
ignoreCancelled | `boolean` | Do not call executor if event was already cancelled

Returns | 
--- | 
`void` |


##### <a id='removepermission'></a>public  function __removePermission__(name)

_removePermission method_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument

Returns | 
--- | 
`void` |


##### <a id='subscribetopermission'></a>public  function __subscribeToPermission__(permission, permissible)

_subscribeToPermission method_

Argument | Type | Description  
--- | --- | --- 
permission | `String` | permission argument
permissible | [`Permissible`](../permissions/Permissible.md) | permissible argument

Returns | 
--- | 
`void` |


##### <a id='unsubscribefromdefaultperms'></a>public  function __unsubscribeFromDefaultPerms__(op, permissible)

_unsubscribeFromDefaultPerms method_

Argument | Type | Description  
--- | --- | --- 
op | `boolean` | op argument
permissible | [`Permissible`](../permissions/Permissible.md) | permissible argument

Returns | 
--- | 
`void` |


##### <a id='unsubscribefrompermission'></a>public  function __unsubscribeFromPermission__(permission, permissible)

_unsubscribeFromPermission method_

Argument | Type | Description  
--- | --- | --- 
permission | `String` | permission argument
permissible | [`Permissible`](../permissions/Permissible.md) | permissible argument

Returns | 
--- | 
`void` |


##### <a id='usetimings'></a>public  function __useTimings__()

_useTimings method_

Returns | 
--- | 
`boolean` |


##### <a id='usetimings'></a>public  function __useTimings__(use)

_Sets whether or not per event timing code should be used_

Argument | Type | Description  
--- | --- | --- 
use | `boolean` | True if per event timing code should be used

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

