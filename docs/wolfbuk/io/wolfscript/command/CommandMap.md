## CommandMap __interface__

>io.wolfscript.command.CommandMap

---

### Interface Overview

interface CommandMap

Method | Type   
--- | :--- 
 function __getCommand__(name) <br> _Registers all the commands belonging to a certain plugin._ | [`Command`](Command.md)



---


### Public Methods for [`CommandMap`](CommandMap.md)

##### <a id='getcommand'></a>public  function __getCommand__(name)

_Registers all the commands belonging to a certain plugin. <p> Caller can use:- <ul> <li>command.getName() to determine the label registered for this command <li>command.getAliases() to determine the aliases which where registered </ul>_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the command to retrieve

Returns | Description
--- | --- 
[`Command`](Command.md) | true if command was registered with the passed in label, false otherwise, which indicates the fallbackPrefix was used one or more times /
    public boolean register(String label, String fallbackPrefix, Command command);

    /** Registers a command. Returns true on success; false if name is already taken and fallback had to be used. <p> Caller can use:- <ul> <li>command.getName() to determine the label registered for this command <li>command.getAliases() to determine the aliases which where registered </ul>


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

