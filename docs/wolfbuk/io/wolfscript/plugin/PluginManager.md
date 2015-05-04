## PluginManager __interface__

>io.wolfscript.plugin.PluginManager

---

### Interface Overview

Handles all plugin management from the Server

Method | Type   
--- | :--- 
 readonly property __Permissions__ <br> _Get: Gets a set of all registered permissions._ | `Set<Permission>`
 readonly property __Plugins__ <br> _Get: Gets a list of all currently loaded plugins_ | `Plugin[]`
 function __addPermission__(perm) <br> _Adds a [`Permission`](../permissions/Permission.md) to this plugin manager._ | `void`
 function __getPlugin__(name) <br> _Registers the specified plugin loader_ | [`Plugin`](Plugin.md)
 function __getDefaultPermSubscriptions__(op) <br> _Gets a set containing all subscribed [`Permissible`](../permissions/Permissible.md)s to the given_ | `Set<Permissible>`
 function __getPermissionSubscriptions__(permission) <br> _Gets a set containing all subscribed [`Permissible`](../permissions/Permissible.md)s to the given_ | `Set<Permissible>`
 function __disablePlugins__() <br> _Disables all the loaded plugins_ | `void`
 function __clearPlugins__() <br> _Disables and removes all plugins_ | `void`
 function __getDefaultPermissions__(op) <br> _Gets the default permissions for the given op status_ | `Set<Permission>`
 function __getPermission__(name) <br> _Gets a [`Permission`](../permissions/Permission.md) from its fully qualified name_ | [`Permission`](../permissions/Permission.md)
 function __disablePlugin__(plugin) <br> _Disables the specified plugin_ | `void`
 function __enablePlugin__(plugin) <br> _Enables the specified plugin_ | `void`
 function __subscribeToPermission__(permission, permissible) <br> _Subscribes the given Permissible for information about the requested_ | `void`
 function __registerEvent__(Event, listener, priority, executor, plugin, ignoreCancelled) <br> _Registers the specified executor to the given event class_ | `void`
 function __isPluginEnabled__(name) <br> _Checks if the given plugin is enabled or not_ | `boolean`
 function __isPluginEnabled__(plugin) <br> _Checks if the given plugin is enabled or not_ | `boolean`
 function __loadPlugins__(directory) <br> _Loads the plugin in the specified file_ | `Plugin[]`
 function __recalculatePermissionDefaults__(perm) <br> _Recalculates the defaults for the given [`Permission`](../permissions/Permission.md)._ | `void`
 function __registerEvent__(Event, listener, priority, executor, plugin) <br> _Registers the specified executor to the given event class_ | `void`
 function __registerEvents__(listener, plugin) <br> _Calls an event with the given details_ | `void`
 function __removePermission__(name) <br> _Removes a [`Permission`](../permissions/Permission.md) registration from this plugin manager._ | `void`
 function __removePermission__(perm) <br> _Removes a [`Permission`](../permissions/Permission.md) registration from this plugin manager._ | `void`
 function __subscribeToDefaultPerms__(op, permissible) <br> _Subscribes to the given Default permissions by operator status_ | `void`
 function __unsubscribeFromDefaultPerms__(op, permissible) <br> _Unsubscribes from the given Default permissions by operator status_ | `void`
 function __unsubscribeFromPermission__(permission, permissible) <br> _Unsubscribes the given Permissible for information about the requested_ | `void`
 function __useTimings__() <br> _Returns whether or not timing code should be used for event calls_ | `boolean`



---


### Public Properties for [`PluginManager`](PluginManager.md)

##### <a id='permissions'></a>public  readonly property __Permissions__

_Get: Gets a set of all registered permissions. <p> This set is a copy and will not be modified live._

Get | Description
--- | --- 
`Set<Permission>` | Set containing all current registered permissions



##### <a id='plugins'></a>public  readonly property __Plugins__

_Get: Gets a list of all currently loaded plugins_

Get | Description
--- | --- 
`Plugin[]` | Array of Plugins



---

### Public Methods for [`PluginManager`](PluginManager.md)

##### <a id='addpermission'></a>public  function __addPermission__(perm)

_Adds a [`Permission`](../permissions/Permission.md) to this plugin manager. <p> If a permission is already defined with the given name of the new permission, an exception will be thrown._

Argument | Type | Description  
--- | --- | --- 
perm | [`Permission`](../permissions/Permission.md) | Permission to add

Returns | 
--- | 
`void` |


##### <a id='getplugin'></a>public  function __getPlugin__(name)

_Registers the specified plugin loader_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the plugin to check

Returns | Description
--- | --- 
[`Plugin`](Plugin.md) | Plugin if it exists, otherwise null


##### <a id='getdefaultpermsubscriptions'></a>public  function __getDefaultPermSubscriptions__(op)

_Gets a set containing all subscribed [`Permissible`](../permissions/Permissible.md)s to the given default list, by op status_

Argument | Type | Description  
--- | --- | --- 
op | `boolean` | Default list to query for

Returns | Description
--- | --- 
`Set<Permissible>` | Set containing all subscribed permissions


##### <a id='getpermissionsubscriptions'></a>public  function __getPermissionSubscriptions__(permission)

_Gets a set containing all subscribed [`Permissible`](../permissions/Permissible.md)s to the given permission, by name_

Argument | Type | Description  
--- | --- | --- 
permission | `String` | Permission to query for

Returns | Description
--- | --- 
`Set<Permissible>` | Set containing all subscribed permissions


##### <a id='disableplugins'></a>public  function __disablePlugins__()

_Disables all the loaded plugins_

Returns | 
--- | 
`void` |


##### <a id='clearplugins'></a>public  function __clearPlugins__()

_Disables and removes all plugins_

Returns | 
--- | 
`void` |


##### <a id='getdefaultpermissions'></a>public  function __getDefaultPermissions__(op)

_Gets the default permissions for the given op status_

Argument | Type | Description  
--- | --- | --- 
op | `boolean` | Which set of default permissions to get

Returns | Description
--- | --- 
`Set<Permission>` | The default permissions


##### <a id='getpermission'></a>public  function __getPermission__(name)

_Gets a [`Permission`](../permissions/Permission.md) from its fully qualified name_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the permission

Returns | Description
--- | --- 
[`Permission`](../permissions/Permission.md) | Permission, or null if none


##### <a id='disableplugin'></a>public  function __disablePlugin__(plugin)

_Disables the specified plugin <p> Attempting to disable a plugin that is not enabled will have no effect_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](Plugin.md) | Plugin to disable

Returns | 
--- | 
`void` |


##### <a id='enableplugin'></a>public  function __enablePlugin__(plugin)

_Enables the specified plugin <p> Attempting to enable a plugin that is already enabled will have no effect_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](Plugin.md) | Plugin to enable

Returns | 
--- | 
`void` |


##### <a id='subscribetopermission'></a>public  function __subscribeToPermission__(permission, permissible)

_Subscribes the given Permissible for information about the requested Permission, by name. <p> If the specified Permission changes in any form, the Permissible will be asked to recalculate._

Argument | Type | Description  
--- | --- | --- 
permission | `String` | Permission to subscribe to
permissible | [`Permissible`](../permissions/Permissible.md) | Permissible subscribing

Returns | 
--- | 
`void` |


##### <a id='registerevent'></a>public  function __registerEvent__(Event, listener, priority, executor, plugin, ignoreCancelled)

_Registers the specified executor to the given event class_

Argument | Type | Description  
--- | --- | --- 
Event | `extends` | Event argument
listener | [`Listener`](../event/Listener.md) | Listener to register
priority | [`EventPriority`](../event/EventPriority.md) | Priority to register this event at
executor | [`EventExecutor`](EventExecutor.md) | EventExecutor to register
plugin | [`Plugin`](Plugin.md) | Plugin to register
ignoreCancelled | `boolean` | Whether to pass cancelled events or not

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


##### <a id='ispluginenabled'></a>public  function __isPluginEnabled__(plugin)

_Checks if the given plugin is enabled or not_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](Plugin.md) | Plugin to check

Returns | Description
--- | --- 
`boolean` | true if the plugin is enabled, otherwise false


##### <a id='loadplugins'></a>public  function __loadPlugins__(directory)

_Loads the plugin in the specified file <p> File must be valid according to the current enabled Plugin interfaces_

Argument | Type | Description  
--- | --- | --- 
directory | `File` | Directory to check for plugins

Returns | Description
--- | --- 
`Plugin[]` | The Plugin loaded, or null if it was invalid


##### <a id='recalculatepermissiondefaults'></a>public  function __recalculatePermissionDefaults__(perm)

_Recalculates the defaults for the given [`Permission`](../permissions/Permission.md). <p> This will have no effect if the specified permission is not registered here._

Argument | Type | Description  
--- | --- | --- 
perm | [`Permission`](../permissions/Permission.md) | Permission to recalculate

Returns | 
--- | 
`void` |


##### <a id='registerevent'></a>public  function __registerEvent__(Event, listener, priority, executor, plugin)

_Registers the specified executor to the given event class_

Argument | Type | Description  
--- | --- | --- 
Event | `extends` | Event argument
listener | [`Listener`](../event/Listener.md) | Listener to register
priority | [`EventPriority`](../event/EventPriority.md) | Priority to register this event at
executor | [`EventExecutor`](EventExecutor.md) | EventExecutor to register
plugin | [`Plugin`](Plugin.md) | Plugin to register

Returns | 
--- | 
`void` |


##### <a id='registerevents'></a>public  function __registerEvents__(listener, plugin)

_Calls an event with the given details_

Argument | Type | Description  
--- | --- | --- 
listener | [`Listener`](../event/Listener.md) | Listener to register
plugin | [`Plugin`](Plugin.md) | Plugin to register

Returns | 
--- | 
`void` |


##### <a id='removepermission'></a>public  function __removePermission__(name)

_Removes a [`Permission`](../permissions/Permission.md) registration from this plugin manager. <p> If the specified permission does not exist in this plugin manager, nothing will happen. <p> Removing a permission registration will <b>not</b> remove the permission from any [`Permissible`](../permissions/Permissible.md)s that have it._

Argument | Type | Description  
--- | --- | --- 
name | `String` | Permission to remove

Returns | 
--- | 
`void` |


##### <a id='removepermission'></a>public  function __removePermission__(perm)

_Removes a [`Permission`](../permissions/Permission.md) registration from this plugin manager. <p> If the specified permission does not exist in this plugin manager, nothing will happen. <p> Removing a permission registration will <b>not</b> remove the permission from any [`Permissible`](../permissions/Permissible.md)s that have it._

Argument | Type | Description  
--- | --- | --- 
perm | [`Permission`](../permissions/Permission.md) | Permission to remove

Returns | 
--- | 
`void` |


##### <a id='subscribetodefaultperms'></a>public  function __subscribeToDefaultPerms__(op, permissible)

_Subscribes to the given Default permissions by operator status <p> If the specified defaults change in any form, the Permissible will be asked to recalculate._

Argument | Type | Description  
--- | --- | --- 
op | `boolean` | Default list to subscribe to
permissible | [`Permissible`](../permissions/Permissible.md) | Permissible subscribing

Returns | 
--- | 
`void` |


##### <a id='unsubscribefromdefaultperms'></a>public  function __unsubscribeFromDefaultPerms__(op, permissible)

_Unsubscribes from the given Default permissions by operator status_

Argument | Type | Description  
--- | --- | --- 
op | `boolean` | Default list to unsubscribe from
permissible | [`Permissible`](../permissions/Permissible.md) | Permissible subscribing

Returns | 
--- | 
`void` |


##### <a id='unsubscribefrompermission'></a>public  function __unsubscribeFromPermission__(permission, permissible)

_Unsubscribes the given Permissible for information about the requested Permission, by name._

Argument | Type | Description  
--- | --- | --- 
permission | `String` | Permission to unsubscribe from
permissible | [`Permissible`](../permissions/Permissible.md) | Permissible subscribing

Returns | 
--- | 
`void` |


##### <a id='usetimings'></a>public  function __useTimings__()

_Returns whether or not timing code should be used for event calls_

Returns | Description
--- | --- 
`boolean` | True if event timings are to be used


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

