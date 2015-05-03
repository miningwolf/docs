## HelpNode __class__

>io.wolfscript.help.HelpNode

---

### Class Overview

Contains relevant information about a piece of help. One help node contains the localized description of a command, its tooltip, required permissions, keywords (currently unused), parent and a list of sub commands.

Method | Type   
--- | :--- 
 function __canUse__(caller) <br> _The Plugin (or Server) that has registered this command_ | `boolean`
 var __subCommands__ <br> _The Plugin (or Server) that has registered this command_ | `String[]`



---


### Public Methods for [`HelpNode`](HelpNode.md)

##### <a id='canuse'></a>public  function __canUse__(caller)

_The Plugin (or Server) that has registered this command /
    private CommandOwner plugin;
    /** A list of names of sub commands /
    public String[] subCommands;

    private WolfCommand command;

    public HelpNode(CommandOwner owner, WolfCommand command) {
        this.command = command;
        this.plugin = owner;
        this.subCommands = HelpManager.subCommandsToStringArray(command.getSubCommands());
    }

    /** get the Plugin (or WolfScript instance) that has registered this help_

Argument | Type | Description  
--- | --- | --- 
caller | [`MessageReceiver`](..\chat\MessageReceiver.md) | caller argument

Returns | Description
--- | --- 
`boolean` | true if player can use this command, false otherwise


---

### Public Fields for [`HelpNode`](HelpNode.md)

##### <a id='subcommands'></a>public  var __subCommands__

_The Plugin (or Server) that has registered this command /
    private CommandOwner plugin;
    /** A list of names of sub commands_

>Returns
>  `String[]`

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

