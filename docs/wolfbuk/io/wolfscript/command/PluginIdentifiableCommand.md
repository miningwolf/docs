## PluginIdentifiableCommand __interface__

>io.wolfscript.command.PluginIdentifiableCommand

---

### Interface Overview

This interface is used by the help system to group commands into sub-indexes based on the [`Plugin`](..\plugin\Plugin.md) they are a part of. Custom command implementations will need to implement this interface to have a sub-index automatically generated on the plugin's behalf.

Method | Type   
--- | :--- 
 readonly property __Plugin__ <br> _Get: Gets the owner of this PluginIdentifiableCommand._ | [`Plugin`](..\plugin\Plugin.md)



---


### Public Properties for [`PluginIdentifiableCommand`](PluginIdentifiableCommand.md)

##### <a id='plugin'></a>public  readonly property __Plugin__

_Get: Gets the owner of this PluginIdentifiableCommand._

Get | Description
--- | --- 
[`Plugin`](..\plugin\Plugin.md) | Plugin that owns this PluginIdentifiableCommand.



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

