## PluginDescriptionFile __class__

>io.wolfscript.plugin.PluginDescriptionFile

---

### Class Overview

This type is the runtime-container for the information in the plugin.yml. All plugins must have a respective plugin.yml. For plugins written in java using the standard plugin loader, this file must be in the root of the jar file. <p> When WolfScript loads a plugin, it needs to know some basic information about it. It reads this information from a YAML file, 'plugin.yml'. This file consists of a set of attributes, each defined on a new line and with no indentation. <p> Every (almost* every) method corresponds with a specific entry in the plugin.yml. These are the <b>required</b> entries for every plugin.yml: <ul> <li>`#getName()` - <code>name</code> <li>`#getVersion()` - <code>version</code> <li>`#getMain()` - <code>main</code> </ul> <p> Failing to include any of these items will throw an exception and cause the server to ignore your plugin. <p> This is a list of the possible yaml keys, with specific details included in the respective method documentations: <table border=1> <caption>The description of the plugin.yml layout</caption> <tr> <th>Node</th> <th>Method</th> <th>Summary</th> </tr><tr> <td><code>name</code></td> <td>`#getName()`</td> <td>The unique name of plugin</td> </tr><tr> <td><code>version</code></td> <td>`#getVersion()`</td> <td>A plugin revision identifier</td> </tr><tr> <td><code>main</code></td> <td>`#getMain()`</td> <td>The plugin's initial class file</td> </tr><tr> <td><code>author</code><br><code>authors</code></td> <td>`#getAuthors()`</td> <td>The plugin contributors</td> </tr><tr> <td><code>description</code></td> <td>`#getDescription()`</td> <td>Human readable plugin summary</td> </tr><tr> <td><code>website</code></td> <td>`#getWebsite()`</td> <td>The URL to the plugin's site</td> </tr><tr> <td><code>prefix</code></td> <td>`#getPrefix()`</td> <td>The token to prefix plugin log entries</td> </tr><tr> <td><code>database</code></td> <td>`#isDatabaseEnabled()`</td> <td>Indicator to enable database support</td> </tr><tr> <td><code>load</code></td> <td>`#getLoad()`</td> <td>The phase of server-startup this plugin will load during</td> </tr><tr> <td><code>depend</code></td> <td>`#getDepend()`</td> <td>Other required plugins</td> </tr><tr> <td><code>softdepend</code></td> <td>`#getSoftDepend()`</td> <td>Other plugins that add functionality</td> </tr><tr> <td><code>loadbefore</code></td> <td>`#getLoadBefore()`</td> <td>The inverse softdepend</td> </tr><tr> <td><code>commands</code></td> <td>`#getCommands()`</td> <td>The commands the plugin will register</td> </tr><tr> <td><code>permissions</code></td> <td>`#getPermissions()`</td> <td>The permissions the plugin will register</td> </tr><tr> <td><code>default-permission</code></td> <td>`#getPermissionDefault()`</td> <td>The default {@link Permission#getDefault() default} permission state for defined {@link #getPermissions() permissions} the plugin will register</td> </tr><tr> <td><code>awareness</code></td> <td>`#getAwareness()`</td> <td>The concepts that the plugin acknowledges</td> </tr> </table> <p> A plugin.yml example:<blockquote><pre> name: Inferno version: 1.4.1 description: This plugin is so 31337. You can set yourself on fire. # We could place every author in the authors list, but chose not to for illustrative purposes # Also, having an author distinguishes that person as the project lead, and ensures their # name is displayed first author: CaptainInflamo authors: [Cogito, verrier, EvilSeph] website: http://www.curse.com/server-mods/minecraft/myplugin main: com.captaininflamo.wolfscript.inferno.Inferno database: false depend: [NewFire, FlameWire] commands: flagrate: description: Set yourself on fire. aliases: [combust_me, combustMe] permission: inferno.flagrate usage: Syntax error! Simply type /&lt;command&gt; to ignite yourself. burningdeaths: description: List how many times you have died by fire. aliases: [burning_deaths, burningDeaths] permission: inferno.burningdeaths usage: | /&lt;command&gt; [player] Example: /&lt;command&gt; - see how many times you have burned to death Example: /&lt;command&gt; CaptainIce - see how many times CaptainIce has burned to death permissions: inferno.*: description: Gives access to all Inferno commands children: inferno.flagrate: true inferno.burningdeaths: true inferno.burningdeaths.others: true inferno.flagrate: description: Allows you to ignite yourself default: true inferno.burningdeaths: description: Allows you to see how many times you have burned to death default: true inferno.burningdeaths.others: description: Allows you to see how many times others have burned to death default: op children: inferno.burningdeaths: true </pre></blockquote>

Method | Type   
--- | :--- 



---


### Public Properties for [`PluginDescriptionFile`](PluginDescriptionFile.md)

##### <a id='rawname'></a>public  readonly property __RawName__
_Deprecated: unused /
    @Deprecated
    public String getClassLoaderOf() {
        return classLoaderOf;
    }

    public void setDatabaseEnabled(boolean database) {
        this.database = database;
    }

    /** Saves this PluginDescriptionFile to the given writer Internal use_

_Get: Loads a PluginDescriptionFile from the specified reader_

Get | Description
--- | --- 
`String` | the name of the plugin /
    public String getName() {
        return name;
    }

    /** Gives the version of the plugin. <ul> <li>Version is an arbitrary string, however the most common format is MajorRelease.MinorRelease.Build (eg: 1.4.1). <li>Typically you will increment this every time you release a new feature or bug fix. <li>Displayed when a user types <code>/version PluginName</code> </ul> <p> In the plugin.yml, this entry is named <code>version</code>. <p> Example:<blockquote><pre>version: 1.4.1</pre></blockquote>



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

