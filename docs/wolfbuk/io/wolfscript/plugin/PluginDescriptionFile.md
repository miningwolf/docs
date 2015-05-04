## PluginDescriptionFile __class__

>io.wolfscript.plugin.PluginDescriptionFile

---

### Class Overview

class PluginDescriptionFile

Method | Type   
--- | :--- 
new __PluginDescriptionFile__(String, String, String) <br> _Creates a new PluginDescriptionFile with the given detailed_ | _constructor_
 readonly property __LoadBefore__ <br> _LoadBefore property_ | `List<String>`
 readonly property __Name__ <br> _Name property_ | `String`
 readonly property __Main__ <br> _Main property_ | `String`
 readonly property __Description__ <br> _Description property_ | `String`
 readonly property __Load__ <br> _Load property_ | [`PluginLoadOrder`](PluginLoadOrder.md)
 readonly property __Authors__ <br> _Authors property_ | `List<String>`
 readonly property __FullName__ <br> _Get: Returns the name of a plugin, including the version. This method is_ | `String`
 readonly property __Depend__ <br> _Depend property_ | `List<String>`
 readonly property __Awareness__ <br> _Awareness property_ | `Set<PluginAwareness>`
 readonly property __PermissionDefault__ <br> _PermissionDefault property_ | [`PermissionDefault`](../permissions/PermissionDefault.md)
 readonly property __Permissions__ <br> _Permissions property_ | `List<Permission>`
 readonly property __Prefix__ <br> _Prefix property_ | `String`
 readonly property __SoftDepend__ <br> _SoftDepend property_ | `List<String>`
 readonly property __Version__ <br> _Version property_ | `String`
 readonly property __Website__ <br> _Website property_ | `String`
 writeonly property __DatabaseEnabled__ <br> _DatabaseEnabled property_ | `void`
 function __isDatabaseEnabled__() <br> _isDatabaseEnabled method_ | `boolean`
 function __save__(writer) <br> _Saves this PluginDescriptionFile to the given writer_ | `void`



---

### Public Constructors for [`PluginDescriptionFile`](PluginDescriptionFile.md)

##### <a id='plugindescriptionfile'></a>new __PluginDescriptionFile__(String, String, String) 

_Creates a new PluginDescriptionFile with the given detailed_

Argument | Type | Description  
--- | --- | --- 
String | `final` | String argument
String | `final` | String argument
String | `final` | String argument

---

### Public Properties for [`PluginDescriptionFile`](PluginDescriptionFile.md)

##### <a id='loadbefore'></a>public  readonly property __LoadBefore__

_LoadBefore property_

Get | 
--- | 
`List<String>` |



##### <a id='name'></a>public  readonly property __Name__

_Name property_

Get | 
--- | 
`String` |



##### <a id='main'></a>public  readonly property __Main__

_Main property_

Get | 
--- | 
`String` |



##### <a id='description'></a>public  readonly property __Description__

_Description property_

Get | 
--- | 
`String` |



##### <a id='load'></a>public  readonly property __Load__

_Load property_

Get | 
--- | 
[`PluginLoadOrder`](PluginLoadOrder.md) |



##### <a id='authors'></a>public  readonly property __Authors__

_Authors property_

Get | 
--- | 
`List<String>` |



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

_Depend property_

Get | 
--- | 
`List<String>` |



##### <a id='awareness'></a>public  readonly property __Awareness__

_Awareness property_

Get | 
--- | 
`Set<PluginAwareness>` |



##### <a id='permissiondefault'></a>public  readonly property __PermissionDefault__

_PermissionDefault property_

Get | 
--- | 
[`PermissionDefault`](../permissions/PermissionDefault.md) |



##### <a id='permissions'></a>public  readonly property __Permissions__

_Permissions property_

Get | 
--- | 
`List<Permission>` |



##### <a id='prefix'></a>public  readonly property __Prefix__

_Prefix property_

Get | 
--- | 
`String` |



##### <a id='rawname'></a>public  readonly property __RawName__
_Deprecated: Internal use_

_RawName property_

Get | Description
--- | --- 
`String` | internal use



##### <a id='softdepend'></a>public  readonly property __SoftDepend__

_SoftDepend property_

Get | 
--- | 
`List<String>` |



##### <a id='version'></a>public  readonly property __Version__

_Version property_

Get | 
--- | 
`String` |



##### <a id='website'></a>public  readonly property __Website__

_Website property_

Get | 
--- | 
`String` |



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

_isDatabaseEnabled method_

Returns | 
--- | 
`boolean` |


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
	

