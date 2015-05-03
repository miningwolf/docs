## PluginNameConversationPrefix __class__

>io.wolfscript.conversations.PluginNameConversationPrefix
>Implements [`ConversationPrefix`](ConversationPrefix.md)

---

### Class Overview

PluginNameConversationPrefix is a [`ConversationPrefix`](ConversationPrefix.md) implementation that displays the plugin name in front of conversation output.

Method | Type   
--- | :--- 
new __PluginNameConversationPrefix__(plugin) <br> _PluginNameConversationPrefix constructor_ | _constructor_
new __PluginNameConversationPrefix__(plugin, separator, prefixColor) <br> _PluginNameConversationPrefix constructor_ | _constructor_
 function __getPrefix__(context) <br> _Prepends each conversation message with the plugin name._ | `String`



---

### Public Constructors for [`PluginNameConversationPrefix`](PluginNameConversationPrefix.md)

##### <a id='pluginnameconversationprefix'></a>new __PluginNameConversationPrefix__(plugin) 

_PluginNameConversationPrefix constructor_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](..\plugin\Plugin.md) | plugin argument

##### <a id='pluginnameconversationprefix'></a>new __PluginNameConversationPrefix__(plugin, separator, prefixColor) 

_PluginNameConversationPrefix constructor_

Argument | Type | Description  
--- | --- | --- 
plugin | [`Plugin`](..\plugin\Plugin.md) | plugin argument
separator | `String` | separator argument
prefixColor | [`ChatColor`](..\ChatColor.md) | prefixColor argument

---

### Public Methods for [`PluginNameConversationPrefix`](PluginNameConversationPrefix.md)

##### <a id='getprefix'></a>public  function __getPrefix__(context)

_Prepends each conversation message with the plugin name._

Argument | Type | Description  
--- | --- | --- 
context | [`ConversationContext`](ConversationContext.md) | Context information about the conversation.

Returns | Description
--- | --- 
`String` | An empty string.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

