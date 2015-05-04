## HandlerList __class__

>io.wolfscript.event.HandlerList
``` javascript
this.on('event.HandlerList', function (e) { });
```


---

### Class Overview

A list of event handlers, stored per-event. Based on lahwran's fevents.

Method | Type   
--- | :--- 
new __HandlerList__() <br> _Create a new handler list and initialize using EventPriority._ | _constructor_
static readonly property __HandlerLists__ <br> _Get: Get a list of all handler lists for every event type_ | `ArrayList<HandlerList>`
 readonly property __RegisteredListeners__ <br> _Get: Get the baked registered listeners associated with this handler list_ | `RegisteredListener[]`
static function __bakeAll__() <br> _Bake all handler lists. Best used just after all normal event_ | `void`
static function __getRegisteredListeners__(plugin) <br> _Get a specific plugin's registered listeners associated with this_ | `ArrayList<RegisteredListener>`
 function __registerAll__() <br> _Register a collection of new listeners in this handler list_ | `void`
static function __unregisterAll__() <br> _Unregister all listeners from all handler lists._ | `void`
static function __unregisterAll__(plugin) <br> _Unregister a specific plugin's listeners from all handler lists._ | `void`
static function __unregisterAll__(listener) <br> _Unregister a specific listener from all handler lists._ | `void`



---

### Public Constructors for [`HandlerList`](HandlerList.md)

##### <a id='handlerlist'></a>new __HandlerList__() 

_Create a new handler list and initialize using EventPriority. <p> The HandlerList is then added to meta-list for use in bakeAll()_


---

### Public Properties for [`HandlerList`](HandlerList.md)

##### <a id='handlerlists'></a>public static readonly property __HandlerLists__

_Get: Get a list of all handler lists for every event type_

Get | Description
--- | --- 
`ArrayList<HandlerList>` | the list of all handler lists



##### <a id='registeredlisteners'></a>public  readonly property __RegisteredListeners__

_Get: Get the baked registered listeners associated with this handler list_

Get | Description
--- | --- 
`RegisteredListener[]` | the array of registered listeners



---

### Public Methods for [`HandlerList`](HandlerList.md)

##### <a id='bakeall'></a>public static function __bakeAll__()

_Bake all handler lists. Best used just after all normal event registration is complete, ie just after all plugins are loaded if you're using fevents in a plugin system._

Returns | 
--- | 
`void` |


##### <a id='getregisteredlisteners'></a>public static function __getRegisteredListeners__(plugin)

_Get a specific plugin's registered listeners associated with this handler list_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | the plugin to get the listeners of

Returns | Description
--- | --- 
`ArrayList<RegisteredListener>` | the list of registered listeners


##### <a id='registerall'></a>public  function __registerAll__()

_Register a collection of new listeners in this handler list_

Returns | 
--- | 
`void` |


##### <a id='unregisterall'></a>public static function __unregisterAll__()

_Unregister all listeners from all handler lists._

Returns | 
--- | 
`void` |


##### <a id='unregisterall'></a>public static function __unregisterAll__(plugin)

_Unregister a specific plugin's listeners from all handler lists._

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](../plugin/Plugin.md) | plugin to unregister

Returns | 
--- | 
`void` |


##### <a id='unregisterall'></a>public static function __unregisterAll__(listener)

_Unregister a specific listener from all handler lists._

Argument | Type | Description  
--- | --- | --- 
listener | [`Listener`](Listener.md) | listener to unregister

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

