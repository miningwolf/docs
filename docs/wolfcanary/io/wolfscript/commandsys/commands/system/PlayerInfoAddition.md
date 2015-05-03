## PlayerInfoAddition __class__

>io.wolfscript.commandsys.commands.system.PlayerInfoAddition

---

### Class Overview

Extra data to be inserted with PlayerInformation

Method | Type   
--- | :--- 
abstract function __applyData__(caller, subject) <br> _Constructs a new PlayerInfoAddition and automatically adds it to the [`PlayerInformation`](PlayerInformation.md) command_ | `String`



---


### Public Methods for [`PlayerInfoAddition`](PlayerInfoAddition.md)

##### <a id='applydata'></a>public abstract function __applyData__(caller, subject)

_Constructs a new PlayerInfoAddition and automatically adds it to the [`PlayerInformation`](PlayerInformation.md) command_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](..\..\..\chat\MessageReceiver.md) | the [`MessageReceiver`](..\..\..\chat\MessageReceiver.md) making the call to the command
subject | [`PlayerReference`](..\..\..\api\PlayerReference.md) | the [`PlayerReference`](..\..\..\api\PlayerReference.md) who's information is being looked at

Returns | Description
--- | --- 
`String` | `true` if valid; `false` if not /
    public final boolean canApply() {
        return !plugin.isDisabled();
    }

    /** Checks if this PlayerInfoAddtion is for a given `Plugin`


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

