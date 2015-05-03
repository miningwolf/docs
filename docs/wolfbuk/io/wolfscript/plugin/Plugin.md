## Plugin __interface__

>io.wolfscript.plugin.Plugin
>Extends `TabExecutor`

---

### Interface Overview

Represents a Plugin <p> The use of [`PluginBase`](PluginBase.md) is recommended for actual Implementation

Method | Type   
--- | :--- 
 readonly property __Name__ <br> _Get: Returns the folder that the plugin data's files are located in. The_ | `String`



---


### Public Properties for [`Plugin`](Plugin.md)

##### <a id='name'></a>public  readonly property __Name__

_Get: Returns the folder that the plugin data's files are located in. The folder may not yet exist._

Get | Description
--- | --- 
`String` | The folder /
    public File getDataFolder();

    /** Returns the plugin.yaml file containing the details for this plugin



---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

