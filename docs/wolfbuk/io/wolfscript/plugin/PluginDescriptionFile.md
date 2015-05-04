## PluginDescriptionFile __class__

>io.wolfscript.plugin.PluginDescriptionFile

---

### Class Overview

This type is the runtime-container for the information in the plugin.yml. All plugins must have a respective plugin.yml. For plugins written in java using the standard plugin loader, this file must be in the root of the jar file. <p> When WolfScript loads a plugin, it needs to know some basic information about it. It reads this information from a YAML file, 'plugin.yml'. This file consists of a set of attributes, each defined on a new line and with no indentation. <p> Every (almost* every) method corresponds with a specific entry in the plugin.yml. These are the <b>required</b> entries for every plugin.yml: <ul> <li>`#getName()` - <code>name</code> <li>`#getVersion()` - <code>version</code> <li>`#getMain()` - <code>main</code> </ul> <p> Failing to include any of these items will throw an exception and cause the server to ignore your plugin. <p> This is a list of the possible yaml keys, with specific details included in the respective method documentations: <table border=1> <caption>The description of the plugin.yml layout</caption> <tr> <th>Node</th> <th>Method</th> <th>Summary</th> </tr><tr> <td><code>name</code></td> <td>`#getName()`</td> <td>The unique name of plugin</td> </tr><tr> <td><code>version</code></td> <td>`#getVersion()`</td> <td>A plugin revision identifier</td> </tr><tr> <td><code>main</code></td> <td>`#getMain()`</td> <td>The plugin's initial class file</td> </tr><tr> <td><code>author</code><br><code>authors</code></td> <td>`#getAuthors()`</td> <td>The plugin contributors</td> </tr><tr> <td><code>description</code></td> <td>`#getDescription()`</td> <td>Human readable plugin summary</td> </tr><tr> <td><code>website</code></td> <td>`#getWebsite()`</td> <td>The URL to the plugin's site</td> </tr><tr> <td><code>prefix</code></td> <td>`#getPrefix()`</td> <td>The token to prefix plugin log entries</td> </tr><tr> <td><code>database</code></td> <td>`#isDatabaseEnabled()`</td> <td>Indicator to enable database support</td> </tr><tr> <td><code>load</code></td> <td>`#getLoad()`</td> <td>The phase of server-startup this plugin will load during</td> </tr><tr> <td><code>depend</code></td> <td>`#getDepend()`</td> <td>Other required plugins</td> </tr><tr> <td><code>softdepend</code></td> <td>`#getSoftDepend()`</td> <td>Other plugins that add functionality</td> </tr><tr> <td><code>loadbefore</code></td> <td>`#getLoadBefore()`</td> <td>The inverse softdepend</td> </tr><tr> <td><code>commands</code></td> <td>`#getCommands()`</td> <td>The commands the plugin will register</td> </tr><tr> <td><code>permissions</code></td> <td>`#getPermissions()`</td> <td>The permissions the plugin will register</td> </tr><tr> <td><code>default-permission</code></td> <td>`#getPermissionDefault()`</td> <td>The default {@link Permission#getDefault() default} permission state for defined {@link #getPermissions() permissions} the plugin will register</td> </tr><tr> <td><code>awareness</code></td> <td>`#getAwareness()`</td> <td>The concepts that the plugin acknowledges</td> </tr> </table> <p> A plugin.yml example:<blockquote><pre> name: Inferno version: 1.4.1 description: This plugin is so 31337. You can set yourself on fire. # We could place every author in the authors list, but chose not to for illustrative purposes # Also, having an author distinguishes that person as the project lead, and ensures their # name is displayed first author: CaptainInflamo authors: [Cogito, verrier, EvilSeph] website: http://www.curse.com/server-mods/minecraft/myplugin main: com.captaininflamo.wolfscript.inferno.Inferno database: false depend: [NewFire, FlameWire] commands: flagrate: description: Set yourself on fire. aliases: [combust_me, combustMe] permission: inferno.flagrate usage: Syntax error! Simply type /&lt;command&gt; to ignite yourself. burningdeaths: description: List how many times you have died by fire. aliases: [burning_deaths, burningDeaths] permission: inferno.burningdeaths usage: | /&lt;command&gt; [player] Example: /&lt;command&gt; - see how many times you have burned to death Example: /&lt;command&gt; CaptainIce - see how many times CaptainIce has burned to death permissions: inferno.*: description: Gives access to all Inferno commands children: inferno.flagrate: true inferno.burningdeaths: true inferno.burningdeaths.others: true inferno.flagrate: description: Allows you to ignite yourself default: true inferno.burningdeaths: description: Allows you to see how many times you have burned to death default: true inferno.burningdeaths.others: description: Allows you to see how many times others have burned to death default: op children: inferno.burningdeaths: true </pre></blockquote>

Method | Type   
--- | :--- 
new __PluginDescriptionFile__(String, String, String) <br> _Loads a PluginDescriptionFile from the specified reader_ | _constructor_
 readonly property __LoadBefore__ <br> _Get: Gets the list of plugins that should consider this plugin a_ | `List<String>`
 readonly property __Name__ <br> _Get: Gives the name of the plugin. This name is a unique identifier for_ | `String`
 readonly property __Main__ <br> _Get: Gives the fully qualified name of the main class for a plugin. The_ | `String`
 readonly property __Description__ <br> _Get: Gives a human-friendly description of the functionality the plugin_ | `String`
 readonly property __Load__ <br> _Get: Gives the phase of server startup that the plugin should be loaded._ | [`PluginLoadOrder`](PluginLoadOrder.md)
 readonly property __Authors__ <br> _Get: Gives the list of authors for the plugin._ | `List<String>`
 readonly property __FullName__ <br> _Get: Returns the name of a plugin, including the version. This method is_ | `String`
 readonly property __Depend__ <br> _Get: Gives a list of other plugins that the plugin requires._ | `List<String>`
 readonly property __Awareness__ <br> _Get: Gives a set of every [`PluginAwareness`](PluginAwareness.md) for a plugin. An awareness_ | `Set<PluginAwareness>`
 readonly property __PermissionDefault__ <br> _Get: Gives the default {@link Permission#getDefault() default} state of_ | [`PermissionDefault`](../permissions/PermissionDefault.md)
 readonly property __Permissions__ <br> _Get: Gives the map of command-name to command-properties. Each entry in this_ | `List<Permission>`
 readonly property __Prefix__ <br> _Get: Gives the token to prefix plugin-specific logging messages with._ | `String`
 readonly property __SoftDepend__ <br> _Get: Gives a list of other plugins that the plugin requires for full_ | `List<String>`
 readonly property __Version__ <br> _Get: Gives the version of the plugin._ | `String`
 readonly property __Website__ <br> _Get: Gives the plugin's or plugin's author's website._ | `String`
 writeonly property __DatabaseEnabled__ <br> _DatabaseEnabled property_ | `void`
 function __isDatabaseEnabled__() <br> _Gives if the plugin uses a database._ | `boolean`
 function __save__(writer) <br> _Saves this PluginDescriptionFile to the given writer_ | `void`



---

### Public Constructors for [`PluginDescriptionFile`](PluginDescriptionFile.md)

##### <a id='plugindescriptionfile'></a>new __PluginDescriptionFile__(String, String, String) 

_Loads a PluginDescriptionFile from the specified reader_

Argument | Type | Description  
--- | --- | --- 
String | `final` | String argument
String | `final` | String argument
String | `final` | String argument

---

### Public Properties for [`PluginDescriptionFile`](PluginDescriptionFile.md)

##### <a id='loadbefore'></a>public  readonly property __LoadBefore__

_Get: Gets the list of plugins that should consider this plugin a soft-dependency. <ul> <li>Use the value in the `#getName()` of the target plugin to specify the dependency. <li>The plugin should load before any other plugins listed here. <li>Specifying another plugin here is strictly equivalent to having the specified plugin's `#getSoftDepend()` include {@link #getName() this plugin}. <li><code>loadbefore</code> must be in <a href="http://en.wikipedia.org/wiki/YAML#Lists">YAML list format</a>. </ul> <p> In the plugin.yml, this entry is named <code>loadbefore</code>. <p> Example: <blockquote><pre>loadbefore: - OnePlugin - AnotherPlugin</pre></blockquote>_

Get | Description
--- | --- 
`List<String>` | immutable list of plugins that should consider this plugin a soft-dependency



##### <a id='name'></a>public  readonly property __Name__

_Get: Gives the name of the plugin. This name is a unique identifier for plugins. <ul> <li>Must consist of all alphanumeric characters, underscores, hyphon, and period (a-z,A-Z,0-9, _.-). Any other character will cause the plugin.yml to fail loading. <li>Used to determine the name of the plugin's data folder. Data folders are placed in the ./plugins/ directory by default, but this behavior should not be relied on. `Plugin#getDataFolder()` should be used to reference the data folder. <li>It is good practice to name your jar the same as this, for example 'MyPlugin.jar'. <li>Case sensitive. <li>The is the token referenced in `#getDepend()`, `#getSoftDepend()`, and `#getLoadBefore()`. <li>Using spaces in the plugin's name is deprecated. </ul> <p> In the plugin.yml, this entry is named <code>name</code>. <p> Example:<blockquote><pre>name: MyPlugin</pre></blockquote>_

Get | Description
--- | --- 
`String` | the name of the plugin



##### <a id='main'></a>public  readonly property __Main__

_Get: Gives the fully qualified name of the main class for a plugin. The format should follow the `ClassLoader#loadClass(String)` syntax to successfully be resolved at runtime. For most plugins, this is the class that extends [`JavaPlugin`](java/JavaPlugin.md). <ul> <li>This must contain the full namespace including the class file itself. <li>If your namespace is <code>io.wolfscript.plugin</code>, and your class file is called <code>MyPlugin</code> then this must be <code>io.wolfscript.plugin.MyPlugin</code> <li>No plugin can use <code>io.wolfscript.</code> as a base package for <b>any class</b>, including the main class. </ul> <p> In the plugin.yml, this entry is named <code>main</code>. <p> Example: <blockquote><pre>main: io.wolfscript.plugin.MyPlugin</pre></blockquote>_

Get | Description
--- | --- 
`String` | the fully qualified main class for the plugin



##### <a id='description'></a>public  readonly property __Description__

_Get: Gives a human-friendly description of the functionality the plugin provides. <ul> <li>The description can have multiple lines. <li>Displayed when a user types <code>/version PluginName</code> </ul> <p> In the plugin.yml, this entry is named <code>description</code>. <p> Example: <blockquote><pre>description: This plugin is so 31337. You can set yourself on fire.</pre></blockquote>_

Get | Description
--- | --- 
`String` | description of this plugin, or null if not specified



##### <a id='load'></a>public  readonly property __Load__

_Get: Gives the phase of server startup that the plugin should be loaded. <ul> <li>Possible values are in [`PluginLoadOrder`](PluginLoadOrder.md). <li>Defaults to `PluginLoadOrder#POSTWORLD`. <li>Certain caveats apply to each phase. <li>When different, `#getDepend()`, `#getSoftDepend()`, and `#getLoadBefore()` become relative in order loaded per-phase. If a plugin loads at <code>STARTUP</code>, but a dependency loads at <code>POSTWORLD</code>, the dependency will not be loaded before the plugin is loaded. </ul> <p> In the plugin.yml, this entry is named <code>load</code>. <p> Example:<blockquote><pre>load: STARTUP</pre></blockquote>_

Get | Description
--- | --- 
[`PluginLoadOrder`](PluginLoadOrder.md) | the phase when the plugin should be loaded



##### <a id='authors'></a>public  readonly property __Authors__

_Get: Gives the list of authors for the plugin. <ul> <li>Gives credit to the developer. <li>Used in some server error messages to provide helpful feedback on who to contact when an error occurs. <li>A wolfscript.org forum handle or email address is recommended. <li>Is displayed when a user types <code>/version PluginName</code> <li><code>authors</code> must be in <a href="http://en.wikipedia.org/wiki/YAML#Lists">YAML list format</a>. </ul> <p> In the plugin.yml, this has two entries, <code>author</code> and <code>authors</code>. <p> Single author example: <blockquote><pre>author: CaptainInflamo</pre></blockquote> Multiple author example: <blockquote><pre>authors: [Cogito, verrier, EvilSeph]</pre></blockquote> When both are specified, author will be the first entry in the list, so this example: <blockquote><pre>author: Grum authors: - feildmaster - amaranth</pre></blockquote> Is equivilant to this example: <pre>authors: [Grum, feildmaster, aramanth]</pre>_

Get | Description
--- | --- 
`List<String>` | an immutable list of the plugin's authors



##### <a id='classloaderof'></a>public  readonly property __ClassLoaderOf__
_Deprecated: unused_

_ClassLoaderOf property_

Get | Description
--- | --- 
`String` | unused



##### <a id='fullname'></a>public  readonly property __FullName__

_Get: Returns the name of a plugin, including the version. This method is provided for convenience; it uses the `#getName()` and `#getVersion()` entries._

Get | Description
--- | --- 
`String` | a descriptive name of the plugin and respective version



##### <a id='depend'></a>public  readonly property __Depend__

_Get: Gives a list of other plugins that the plugin requires. <ul> <li>Use the value in the `#getName()` of the target plugin to specify the dependency. <li>If any plugin listed here is not found, your plugin will fail to load at startup. <li>If multiple plugins list each other in <code>depend</code>, creating a network with no individual plugin does not list another plugin in the <a href=https://en.wikipedia.org/wiki/Circular_dependency>network</a>, all plugins in that network will fail. <li><code>depend</code> must be in must be in <a href="http://en.wikipedia.org/wiki/YAML#Lists">YAML list format</a>. </ul> <p> In the plugin.yml, this entry is named <code>depend</code>. <p> Example: <blockquote><pre>depend: - OnePlugin - AnotherPlugin</pre></blockquote>_

Get | Description
--- | --- 
`List<String>` | immutable list of the plugin's dependencies



##### <a id='awareness'></a>public  readonly property __Awareness__

_Get: Gives a set of every [`PluginAwareness`](PluginAwareness.md) for a plugin. An awareness dictates something that a plugin developer acknowledges when the plugin is compiled. Some implementions may define extra awarenesses that are not included in the API. Any unrecognized awareness (one unsupported or in a future version) will cause a dummy object to be created instead of failing. <ul> <li>Currently only supports the enumerated values in `Flags`. <li>Each awareness starts the identifier with bang-at (<code>!@</code>). <li>Unrecognized (future / unimplemented) entries are quietly replaced by a generic object that implements PluginAwareness. <li>A type of awareness must be defined by the runtime and acknowledged by the API, effectively discluding any derived type from any plugin's classpath. <li><code>awareness</code> must be in <a href="http://en.wikipedia.org/wiki/YAML#Lists">YAML list format</a>. </ul> <p> In the plugin.yml, this entry is named <code>awareness</code>. <p> Example:<blockquote><pre>awareness: - !@UTF8</pre></blockquote> <p> <b>Note:</b> Although unknown versions of some future awareness are gracefully substituted, previous versions of WolfScript (ones prior to the first implementation of awareness) will fail to load a plugin that defines any awareness._

Get | Description
--- | --- 
`Set<PluginAwareness>` | a set containing every awareness for the plugin



##### <a id='permissiondefault'></a>public  readonly property __PermissionDefault__

_Get: Gives the default {@link Permission#getDefault() default} state of {@link #getPermissions() permissions} registered for the plugin. <ul> <li>If not specified, it will be `PermissionDefault#OP`. <li>It is matched using `PermissionDefault#getByName(String)` <li>It only affects permissions that do not define the <code>default</code> node. <li>It may be any value in [`PermissionDefault`](../permissions/PermissionDefault.md). </ul> <p> In the plugin.yml, this entry is named <code>default-permission</code>. <p> Example:<blockquote><pre>default-permission: NOT_OP</pre></blockquote>_

Get | Description
--- | --- 
[`PermissionDefault`](../permissions/PermissionDefault.md) | the default value for the plugin's permissions



##### <a id='permissions'></a>public  readonly property __Permissions__

_Get: Gives the map of command-name to command-properties. Each entry in this map corresponds to a single command and the respective values are the properties of the command. Each property, <i>with the exception of aliases</i>, can be defined at runtime using methods in [`PluginCommand`](../command/PluginCommand.md) and are defined here only as a convenience. <table border=1> <caption>The command section's description</caption> <tr> <th>Node</th> <th>Method</th> <th>Type</th> <th>Description</th> <th>Example</th> </tr><tr> <td><code>description</code></td> <td>`PluginCommand#setDescription(String)`</td> <td>String</td> <td>A user-friendly description for a command. It is useful for documentation purposes as well as in-game help.</td> <td><blockquote><pre>description: Set yourself on fire</pre></blockquote></td> </tr><tr> <td><code>aliases</code></td> <td>`PluginCommand#setAliases(List)`</td> <td>String or <a href="http://en.wikipedia.org/wiki/YAML#Lists">List</a> of strings</td> <td>Alternative command names, with special usefulness for commands that are already registered. <i>Aliases are not effective when defined at runtime,</i> so the plugin description file is the only way to have them properly defined. <p> Note: Command aliases may not have a colon in them.</td> <td>Single alias format: <blockquote><pre>aliases: combust_me</pre></blockquote> or multiple alias format: <blockquote><pre>aliases: [combust_me, combustMe]</pre></blockquote></td> </tr><tr> <td><code>permission</code></td> <td>`PluginCommand#setPermission(String)`</td> <td>String</td> <td>The name of the [`Permission`](../permissions/Permission.md) required to use the command. A user without the permission will receive the specified message (see {@linkplain PluginCommand#setPermissionMessage(String) below}), or a standard one if no specific message is defined. Without the permission node, no {@link PluginCommand#setExecutor(CommandExecutor) CommandExecutor} or {@link PluginCommand#setTabCompleter(TabCompleter) TabCompleter} will be called.</td> <td><blockquote><pre>permission: inferno.flagrate</pre></blockquote></td> </tr><tr> <td><code>permission-message</code></td> <td>`PluginCommand#setPermissionMessage(String)`</td> <td>String</td> <td><ul> <li>Displayed to a player that attempts to use a command, but does not have the required permission. See {@link PluginCommand#getPermission() above}. <li>&lt;permission&gt; is a macro that is replaced with the permission node required to use the command. <li>Using empty quotes is a valid way to indicate nothing should be displayed to a player. </ul></td> <td><blockquote><pre>permission-message: You do not have /&lt;permission&gt;</pre></blockquote></td> </tr><tr> <td><code>usage</code></td> <td>`PluginCommand#setUsage(String)`</td> <td>String</td> <td>This message is displayed to a player when the `PluginCommand#setExecutor(CommandExecutor)` {@linkplain CommandExecutor#onCommand(CommandSender,Command,String,String[]) returns false}. &lt;command&gt; is a macro that is replaced the command issued.</td> <td><blockquote><pre>usage: Syntax error! Perhaps you meant /&lt;command&gt; PlayerName?</pre></blockquote> It is worth noting that to use a colon in a yaml, like <code>`usage: Usage: /god [player]'</code>, you need to <a href="http://yaml.org/spec/current.html#id2503232">surround the message with double-quote</a>: <blockquote><pre>usage: "Usage: /god [player]"</pre></blockquote></td> </tr> </table> The commands are structured as a hiearchy of <a href="http://yaml.org/spec/current.html#id2502325">nested mappings</a>. The primary (top-level, no intendentation) node is `<code>commands</code>', while each individual command name is indented, indicating it maps to some value (in our case, the properties of the table above). <p> Here is an example bringing together the piecemeal examples above, as well as few more definitions:<blockquote><pre> commands: flagrate: description: Set yourself on fire. aliases: [combust_me, combustMe] permission: inferno.flagrate permission-message: You do not have /&lt;permission&gt; usage: Syntax error! Perhaps you meant /&lt;command&gt; PlayerName? burningdeaths: description: List how many times you have died by fire. aliases: - burning_deaths - burningDeaths permission: inferno.burningdeaths usage: | /&lt;command&gt; [player] Example: /&lt;command&gt; - see how many times you have burned to death Example: /&lt;command&gt; CaptainIce - see how many times CaptainIce has burned to death # The next command has no description, aliases, etc. defined, but is still valid # Having an empty declaration is useful for defining the description, permission, and messages from a configuration dynamically apocalypse: </pre></blockquote> Note: Command names may not have a colon in their name._

Get | Description
--- | --- 
`List<Permission>` | the commands this plugin will register /
    public Map<String, Map<String, Object>> getCommands() {
        return commands;
    }

    /** Gives the list of permissions the plugin will register at runtime, immediately proceding enabling. The format for defining permissions is a map from permission name to properties. To represent a map without any specific property, empty <a href="http://yaml.org/spec/current.html#id2502702">curly-braces</a> ( <code>&#123;&#125;</code> ) may be used (as a null value is not accepted, unlike the {@link #getCommands() commands} above). <p> A list of optional properties for permissions: <table border=1> <caption>The permission section's description</caption> <tr> <th>Node</th> <th>Description</th> <th>Example</th> </tr><tr> <td><code>description</code></td> <td>Plaintext (user-friendly) description of what the permission is for.</td> <td><blockquote><pre>description: Allows you to set yourself on fire</pre></blockquote></td> </tr><tr> <td><code>default</code></td> <td>The default state for the permission, as defined by `Permission#getDefault()`. If not defined, it will be set to the value of `PluginDescriptionFile#getPermissionDefault()`. <p> For reference:<ul> <li><code>true</code> - Represents a positive assignment to {@link Permissible permissibles}. <li><code>false</code> - Represents no assignment to {@link Permissible permissibles}. <li><code>op</code> - Represents a positive assignment to {@link Permissible#isOp() operator permissibles}. <li><code>notop</code> - Represents a positive assignment to {@link Permissible#isOp() non-operator permissibiles}. </ul></td> <td><blockquote><pre>default: true</pre></blockquote></td> </tr><tr> <td><code>children</code></td> <td>Allows other permissions to be set as a {@linkplain Permission#getChildren() relation} to the parent permission. When a parent permissions is assigned, child permissions are respectively assigned as well. <ul> <li>When a parent permission is assigned negatively, child permissions are assigned based on an inversion of their association. <li>When a parent permission is assigned positively, child permissions are assigned based on their association. </ul> <p> Child permissions may be defined in a number of ways:<ul> <li>Children may be defined as a <a href="http://en.wikipedia.org/wiki/YAML#Lists">list</a> of names. Using a list will treat all children associated positively to their parent. <li>Children may be defined as a map. Each permission name maps to either a boolean (representing the association), or a nested permission definition (just as another permission). Using a nested definition treats the child as a positive association. <li>A nested permission definition must be a map of these same properties. To define a valid nested permission without defining any specific property, empty curly-braces ( <code>&#123;&#125;</code> ) must be used. <li>A nested permission may carry it's own nested permissions as children, as they may also have nested permissions, and so forth. There is no direct limit to how deep the permission tree is defined. </ul></td> <td>As a list: <blockquote><pre>children: [inferno.flagrate, inferno.burningdeaths]</pre></blockquote> Or as a mapping: <blockquote><pre>children: inferno.flagrate: true inferno.burningdeaths: true</pre></blockquote> An additional example showing basic nested values can be seen <a href="doc-files/permissions-example_plugin.yml">here</a>. </td> </tr> </table> The permissions are structured as a hiearchy of <a href="http://yaml.org/spec/current.html#id2502325">nested mappings</a>. The primary (top-level, no intendentation) node is `<code>permissions</code>', while each individual permission name is indented, indicating it maps to some value (in our case, the properties of the table above). <p> Here is an example using some of the properties:<blockquote><pre> permissions: inferno.*: description: Gives access to all Inferno commands children: inferno.flagrate: true inferno.burningdeaths: true inferno.flagate: description: Allows you to ignite yourself default: true inferno.burningdeaths: description: Allows you to see how many times you have burned to death default: true </pre></blockquote> Another example, with nested definitions, can be found <a href="doc-files/permissions-example_plugin.yml">here</a>.



##### <a id='prefix'></a>public  readonly property __Prefix__

_Get: Gives the token to prefix plugin-specific logging messages with. <ul> <li>This includes all messages using `Plugin#getLogger()`. <li>If not specified, the server uses the plugin's {@link #getName() name}. <li>This should clearly indicate what plugin is being logged. </ul> <p> In the plugin.yml, this entry is named <code>prefix</code>. <p> Example:<blockquote><pre>prefix: ex-why-zee</pre></blockquote>_

Get | Description
--- | --- 
`String` | the prefixed logging token, or null if not specified



##### <a id='rawname'></a>public  readonly property __RawName__
_Deprecated: Internal use_

_RawName property_

Get | Description
--- | --- 
`String` | internal use



##### <a id='softdepend'></a>public  readonly property __SoftDepend__

_Get: Gives a list of other plugins that the plugin requires for full functionality. The [`PluginManager`](PluginManager.md) will make best effort to treat all entries here as if they were a {@link #getDepend() dependency}, but will never fail because of one of these entries. <ul> <li>Use the value in the `#getName()` of the target plugin to specify the dependency. <li>When an unresolvable plugin is listed, it will be ignored and does not affect load order. <li>When a circular dependency occurs (a network of plugins depending or soft-dependending each other), it will arbitrarily choose a plugin that can be resolved when ignoring soft-dependencies. <li><code>softdepend</code> must be in <a href="http://en.wikipedia.org/wiki/YAML#Lists">YAML list format</a>. </ul> <p> In the plugin.yml, this entry is named <code>softdepend</code>. <p> Example: <blockquote><pre>softdepend: [OnePlugin, AnotherPlugin]</pre></blockquote>_

Get | Description
--- | --- 
`List<String>` | immutable list of the plugin's preferred dependencies



##### <a id='version'></a>public  readonly property __Version__

_Get: Gives the version of the plugin. <ul> <li>Version is an arbitrary string, however the most common format is MajorRelease.MinorRelease.Build (eg: 1.4.1). <li>Typically you will increment this every time you release a new feature or bug fix. <li>Displayed when a user types <code>/version PluginName</code> </ul> <p> In the plugin.yml, this entry is named <code>version</code>. <p> Example:<blockquote><pre>version: 1.4.1</pre></blockquote>_

Get | Description
--- | --- 
`String` | the version of the plugin



##### <a id='website'></a>public  readonly property __Website__

_Get: Gives the plugin's or plugin's author's website. <ul> <li>A link to the Curse page that includes documentation and downloads is highly recommended. <li>Displayed when a user types <code>/version PluginName</code> </ul> <p> In the plugin.yml, this entry is named <code>website</code>. <p> Example: <blockquote><pre>website: http://www.curse.com/server-mods/minecraft/myplugin</pre></blockquote>_

Get | Description
--- | --- 
`String` | description of this plugin, or null if not specified



##### <a id='databaseenabled'></a>public  writeonly property __DatabaseEnabled__

_DatabaseEnabled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
database | `boolean` | database argument


---

### Public Methods for [`PluginDescriptionFile`](PluginDescriptionFile.md)

##### <a id='isdatabaseenabled'></a>public  function __isDatabaseEnabled__()

_Gives if the plugin uses a database. <ul> <li>Using a database is non-trivial. <li>Valid values include <code>true</code> and <code>false</code> </ul> <p> In the plugin.yml, this entry is named <code>database</code>. <p> Example: <blockquote><pre>database: false</pre></blockquote>_

Returns | Description
--- | --- 
`boolean` | if this plugin requires a database


##### <a id='save'></a>public  function __save__(writer)

_Saves this PluginDescriptionFile to the given writer_

Argument | Type | Description  
--- | --- | --- 
writer | `Writer` | Writer to output this file to

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

