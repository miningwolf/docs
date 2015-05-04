## PlayerInfoAddition __class__

>io.wolfscript.commandsys.commands.system.PlayerInfoAddition

---

### Class Overview

Extra data to be inserted with PlayerInformation

Method | Type   
--- | :--- 
new __PlayerInfoAddition__(plugin) <br> _Constructs a new PlayerInfoAddition and automatically adds it to the [`PlayerInformation`](PlayerInformation.md) command_ | _constructor_
abstract function __applyData__(caller, subject) <br> _Override this method to return the data you wish it have added to the [`PlayerInformation`](PlayerInformation.md) command_ | `String`
final function __canApply__() <br> _Checks if this PlayerInfoAddition is still valid_ | `boolean`
final function __isFor__(plugin) <br> _Checks if this PlayerInfoAddtion is for a given `Plugin`_ | `boolean`



---

### Public Constructors for [`PlayerInfoAddition`](PlayerInfoAddition.md)

##### <a id='playerinfoaddition'></a>new __PlayerInfoAddition__(plugin) 

_Constructs a new PlayerInfoAddition and automatically adds it to the [`PlayerInformation`](PlayerInformation.md) command_

Argument | Type | Description  
--- | --- | --- 
plugin | `Plugin` | plugin argument

---

### Public Methods for [`PlayerInfoAddition`](PlayerInfoAddition.md)

##### <a id='applydata'></a>public abstract function __applyData__(caller, subject)

_Override this method to return the data you wish it have added to the [`PlayerInformation`](PlayerInformation.md) command_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](../../../chat/MessageReceiver.md) | the [`MessageReceiver`](../../../chat/MessageReceiver.md) making the call to the command
subject | [`PlayerReference`](../../../api/PlayerReference.md) | the [`PlayerReference`](../../../api/PlayerReference.md) who's information is being looked at

Returns | Description
--- | --- 
`String` | The information to be displayed to the caller. Do not send the caller this data directly.


##### <a id='canapply'></a>public final function __canApply__()

_Checks if this PlayerInfoAddition is still valid_

Returns | Description
--- | --- 
`boolean` | `true` if valid; `false` if not


##### <a id='isfor'></a>public final function __isFor__(plugin)

_Checks if this PlayerInfoAddtion is for a given `Plugin`_

Argument | Type | Description  
--- | --- | --- 
plugin | `Plugin` | the plugin to check

Returns | Description
--- | --- 
`boolean` | `true` if is for given plugin; `false` if not


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

