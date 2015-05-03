## CommandManager __class__

>io.wolfscript.commandsys.CommandManager

---

### Class Overview

Manages all commands. Add commands using one of the methods below.

Method | Type   
--- | :--- 
 function __tabComplete__(msgrec, command) <br> _Remove a command from the command list._ | `List<String>`



---


### Public Methods for [`CommandManager`](CommandManager.md)

##### <a id='tabcomplete'></a>public  function __tabComplete__(msgrec, command)

_Remove a command from the command list._

Argument | Type | Description  
--- | --- | --- 
msgrec | [`MessageReceiver`](..\chat\MessageReceiver.md) | the caller of the tab complete
command | `String` | The command to search for.

Returns | Description
--- | --- 
`List<String>` | <tt>true</tt> if the command was removed, <tt>false</tt> otherwise. /
    public boolean unregisterCommand(String name) {

        if (name == null) {
            return false;
        }

        String[] commandchain = name.split("\\.");
        WolfCommand temp = null;
        for (int i = 0; i < commandchain.length; i++) {
            if (i == 0) {
                temp = commands.get(commandchain[i]);
            }
            else {
                if (temp == null) {
                    break;
                }
                if (temp.hasSubCommand(commandchain[i])) {
                    temp = temp.getSubCommand(commandchain[i]);
                }
                else {
                    temp = null;
                    break;
                }
            }
        }
        if (temp == null) {
            return false;
        }
        else {
            if (!temp.meta.helpLookup().isEmpty() && Wolf.help().hasHelp(temp.meta.helpLookup())) {
                Wolf.help().unregisterCommand(temp.owner, temp.meta.helpLookup());
            }
            else {
                Wolf.help().unregisterCommand(temp.owner, temp.meta.aliases()[0]);
            }
            if (temp.getParent() != null) {
                temp.getParent().removeSubCommand(temp);
                return true;
            }
            else {
                for (int i = 0; i < temp.meta.aliases().length; i++) {
                    commands.remove(temp.meta.aliases()[i].toLowerCase());
                }
                return true;
            }
        }
    }

    /** Remove all commands that belong to the specified command owner.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

