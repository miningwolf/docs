## HelpMap __interface__

>io.wolfscript.help.HelpMap

---

### Interface Overview

The HelpMap tracks all help topics registered in a WolfScript server. When the server starts up or is reloaded, help is processed and topics are added in the following order: <ol> <li>General topics are loaded from the help.yml <li>Plugins load and optionally call `addTopic()` <li>Registered plugin commands are processed by [`HelpTopicFactory`](HelpTopicFactory.md) objects to create topics <li>Topic contents are amended as directed in help.yml </ol>

Method | Type   
--- | :--- 
 readonly property __IgnoredPlugins__ <br> _Get: Returns a help topic for a given topic name._ | `List<String>`



---


### Public Properties for [`HelpMap`](HelpMap.md)

##### <a id='ignoredplugins'></a>public  readonly property __IgnoredPlugins__

_Get: Returns a help topic for a given topic name._

Get | Description
--- | --- 
`List<String>` | A [`HelpTopic`](HelpTopic.md) object matching the topic name or null if none can be found. /
    public HelpTopic getHelpTopic(String topicName);

    /** Returns a collection of all the registered help topics.



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

