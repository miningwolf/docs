## Flags __enum__

>io.wolfscript.plugin.Flags
>Implements `PluginAwareness`

---

### Enum Overview

Represents a concept that a plugin is aware of. <p> The internal representation may be singleton, or be a parameterized instance, but must be immutable. /
public interface PluginAwareness {
    /** Each entry here represents a particular plugin's awareness. These can be checked by using `PluginDescriptionFile#getAwareness()`.{@link Set#contains(Object) contains(flag)}.

Item | Type   
--- | :--- 
UTF8: <br> _This specifies that all (text) resources stored in a plugin's jar_ | Flags



---



###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

