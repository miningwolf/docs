## BanListCommand __class__

>io.wolfscript.command.defaults.BanListCommand
>Extends [`VanillaCommand`](VanillaCommand.md)

---

### Class Overview

class BanListCommand

Method | Type   
--- | :--- 
new __BanListCommand__() <br> _BanListCommand constructor_ | _constructor_
 function __execute__(sender, currentAlias) <br> _execute method_ | `boolean`
 function __tabComplete__(sender, alias) <br> _tabComplete method_ | `List<String>`
 |
__Inherited items from [`VanillaCommand`](VanillaCommand.md)__ |
static function __getDouble__(sender, input) <br> _getDouble method_ | `double`
static function __getDouble__(sender, input, min, max) <br> _getDouble method_ | `double`
static function __getRelativeDouble__(original, sender, input) <br> _getRelativeDouble method_ | `double`
 function __matches__(input) <br> _matches method_ | `boolean`
 |
__Inherited items from [`Command`](../Command.md)__ |
  property __PermissionMessage__ <br> _Get: Returns a message to be displayed on a failed permission check for this<br>Set: Sets the message sent when a permission check fails_ | `String`
 writeonly property __Permission__ <br> _Set: Sets the permission required by users to be able to perform this_ | `void`
 readonly property __Name__ <br> _Get: Executed on tab completion for this command, returning a list of_ | `String`
  property __Label__ <br> _Get: Returns the current label for this command<br>Set: Sets the label of this command._ | `String`
 readonly property __Permission__ <br> _Get: Gets the permission required by users to be able to perform this_ | `String`
 writeonly property __Description__ <br> _Set: Sets a brief description of this command. Defining a description in the_ | [`Command`](../Command.md)
 readonly property __Aliases__ <br> _Get: Returns a list of active aliases of this command_ | `List<String>`
 readonly property __Description__ <br> _Get: Gets a brief description of this command_ | `String`
  property __Usage__ <br> _Get: Gets an example usage of this command<br>Set: Sets the example usage of this command_ | `String`
 function __isRegistered__() <br> _Returns the current registered state of this command_ | `boolean`
abstract function __execute__(sender, commandLabel) <br> _Executes the command, returning its success_ | `boolean`
static function __broadcastCommandMessage__(source, message, sendToSource) <br> _broadcastCommandMessage method_ | `void`
static function __broadcastCommandMessage__(source, message) <br> _broadcastCommandMessage method_ | `void`
 function __register__(commandMap) <br> _Registers this command to a CommandMap._ | `boolean`
 function __setAliases__() <br> _Sets the list of aliases to request on registration for this command._ | [`Command`](../Command.md)
 function __testPermission__(target) <br> _Tests the given [`CommandSender`](../CommandSender.md) to see if they can perform this_ | `boolean`
 function __testPermissionSilent__(target) <br> _Tests the given [`CommandSender`](../CommandSender.md) to see if they can perform this_ | `boolean`
 function __toString__() <br> _toString method_ | `String`
 function __unregister__(commandMap) <br> _Unregisters this command from the passed CommandMap applying any_ | `boolean`







---

### Public Constructors for [`BanListCommand`](BanListCommand.md)

##### <a id='banlistcommand'></a>new __BanListCommand__() 

_BanListCommand constructor_


---

### Public Methods for [`BanListCommand`](BanListCommand.md)

##### <a id='execute'></a>public  function __execute__(sender, currentAlias)

_execute method_

Argument | Type | Description  
--- | --- | --- 
sender | [`CommandSender`](../CommandSender.md) | sender argument
currentAlias | `String` | currentAlias argument

Returns | 
--- | 
`boolean` |


##### <a id='tabcomplete'></a>public  function __tabComplete__(sender, alias)

_tabComplete method_

Argument | Type | Description  
--- | --- | --- 
sender | [`CommandSender`](../CommandSender.md) | sender argument
alias | `String` | alias argument

Returns | 
--- | 
`List<String>` |


---

### Public Methods for [`VanillaCommand`](VanillaCommand.md)

##### <a id='getdouble'></a>public static function __getDouble__(sender, input)

_getDouble method_

Argument | Type | Description  
--- | --- | --- 
sender | [`CommandSender`](../CommandSender.md) | sender argument
input | `String` | input argument

Returns | 
--- | 
`double` |


##### <a id='getdouble'></a>public static function __getDouble__(sender, input, min, max)

_getDouble method_

Argument | Type | Description  
--- | --- | --- 
sender | [`CommandSender`](../CommandSender.md) | sender argument
input | `String` | input argument
min | `double` | min argument
max | `double` | max argument

Returns | 
--- | 
`double` |


##### <a id='getrelativedouble'></a>public static function __getRelativeDouble__(original, sender, input)

_getRelativeDouble method_

Argument | Type | Description  
--- | --- | --- 
original | `double` | original argument
sender | [`CommandSender`](../CommandSender.md) | sender argument
input | `String` | input argument

Returns | 
--- | 
`double` |


##### <a id='matches'></a>public  function __matches__(input)

_matches method_

Argument | Type | Description  
--- | --- | --- 
input | `String` | input argument

Returns | 
--- | 
`boolean` |


---

### Public Properties for [`Command`](../Command.md)

##### <a id='permissionmessage'></a>public   property __PermissionMessage__

_Get: Returns a message to be displayed on a failed permission check for this command<br>Set: Sets the message sent when a permission check fails_

Get | Description
--- | --- 
`String` | this command object, for chaining

Set | Type | Description  
--- | --- | --- 
permissionMessage | `String` | new permission message, null to indicate default message, or an empty string to indicate no message


##### <a id='permission'></a>public  writeonly property __Permission__

_Set: Sets the permission required by users to be able to perform this command_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
permission | `String` | Permission name or null


##### <a id='name'></a>public  readonly property __Name__

_Get: Executed on tab completion for this command, returning a list of options the player can tab through._

Get | Description
--- | --- 
`String` | a list of tab-completions for the specified arguments. This will never be null. List may be immutable.



##### <a id='label'></a>public   property __Label__

_Get: Returns the current label for this command<br>Set: Sets the label of this command. <p> If the command is currently registered the label change will only take effect after its been re-registered e.g. after a /reload_

Get | Description
--- | --- 
`String` | returns true if the name change happened instantly or false if it was scheduled for re-registration

Set | Type | Description  
--- | --- | --- 
name | `String` | The command's name


##### <a id='permission'></a>public  readonly property __Permission__

_Get: Gets the permission required by users to be able to perform this command_

Get | Description
--- | --- 
`String` | Permission name, or null if none



##### <a id='description'></a>public  writeonly property __Description__

_Set: Sets a brief description of this command. Defining a description in the `PluginDescriptionFile#getCommands()` (under the `<code>description</code>' node) is equivalent to this method._

Get | Description
--- | --- 
[`Command`](../Command.md) | this command object, for chaining

Set | Type | Description  
--- | --- | --- 
description | `String` | new command description


##### <a id='aliases'></a>public  readonly property __Aliases__

_Get: Returns a list of active aliases of this command_

Get | Description
--- | --- 
`List<String>` | List of aliases



##### <a id='description'></a>public  readonly property __Description__

_Get: Gets a brief description of this command_

Get | Description
--- | --- 
`String` | Description of this command



##### <a id='usage'></a>public   property __Usage__

_Get: Gets an example usage of this command<br>Set: Sets the example usage of this command_

Get | Description
--- | --- 
`String` | this command object, for chaining

Set | Type | Description  
--- | --- | --- 
usage | `String` | new example usage


---

### Public Methods for [`Command`](../Command.md)

##### <a id='isregistered'></a>public  function __isRegistered__()

_Returns the current registered state of this command_

Returns | Description
--- | --- 
`boolean` | true if this command is currently registered false otherwise


##### <a id='execute'></a>public abstract function __execute__(sender, commandLabel)

_Executes the command, returning its success_

Argument | Type | Description  
--- | --- | --- 
sender | [`CommandSender`](../CommandSender.md) | Source object which is executing this command
commandLabel | `String` | The alias of the command used

Returns | Description
--- | --- 
`boolean` | true if the command was successful, otherwise false


##### <a id='broadcastcommandmessage'></a>public static function __broadcastCommandMessage__(source, message, sendToSource)

_broadcastCommandMessage method_

Argument | Type | Description  
--- | --- | --- 
source | [`CommandSender`](../CommandSender.md) | source argument
message | `String` | message argument
sendToSource | `boolean` | sendToSource argument

Returns | 
--- | 
`void` |


##### <a id='broadcastcommandmessage'></a>public static function __broadcastCommandMessage__(source, message)

_broadcastCommandMessage method_

Argument | Type | Description  
--- | --- | --- 
source | [`CommandSender`](../CommandSender.md) | source argument
message | `String` | message argument

Returns | 
--- | 
`void` |


##### <a id='register'></a>public  function __register__(commandMap)

_Registers this command to a CommandMap. Once called it only allows changes the registered CommandMap_

Argument | Type | Description  
--- | --- | --- 
commandMap | [`CommandMap`](../CommandMap.md) | the CommandMap to register this command to

Returns | Description
--- | --- 
`boolean` | true if the registration was successful (the current registered CommandMap was the passed CommandMap or null) false otherwise


##### <a id='setaliases'></a>public  function __setAliases__()

_Sets the list of aliases to request on registration for this command. This is not effective outside of defining aliases in the `PluginDescriptionFile#getCommands()` (under the `<code>aliases</code>' node) is equivalent to this method._

Returns | Description
--- | --- 
[`Command`](../Command.md) | this command object, for chaining


##### <a id='tabcomplete'></a>public  function __tabComplete__(sender)
_Deprecated: This method is not supported and returns null_

_Executed on tab completion for this command, returning a list of options the player can tab through._

Argument | Type | Description  
--- | --- | --- 
sender | [`CommandSender`](../CommandSender.md) | Source object which is executing this command

Returns | Description
--- | --- 
`List<String>` | a list of tab-completions for the specified arguments. This will never be null. List may be immutable.


##### <a id='testpermission'></a>public  function __testPermission__(target)

_Tests the given [`CommandSender`](../CommandSender.md) to see if they can perform this command. <p> If they do not have permission, they will be informed that they cannot do this._

Argument | Type | Description  
--- | --- | --- 
target | [`CommandSender`](../CommandSender.md) | User to test

Returns | Description
--- | --- 
`boolean` | true if they can use it, otherwise false


##### <a id='testpermissionsilent'></a>public  function __testPermissionSilent__(target)

_Tests the given [`CommandSender`](../CommandSender.md) to see if they can perform this command. <p> No error is sent to the sender._

Argument | Type | Description  
--- | --- | --- 
target | [`CommandSender`](../CommandSender.md) | User to test

Returns | Description
--- | --- 
`boolean` | true if they can use it, otherwise false


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


##### <a id='unregister'></a>public  function __unregister__(commandMap)

_Unregisters this command from the passed CommandMap applying any outstanding changes_

Argument | Type | Description  
--- | --- | --- 
commandMap | [`CommandMap`](../CommandMap.md) | the CommandMap to unregister

Returns | Description
--- | --- 
`boolean` | true if the unregistration was successfull (the current registered CommandMap was the passed CommandMap or null) false otherwise


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

