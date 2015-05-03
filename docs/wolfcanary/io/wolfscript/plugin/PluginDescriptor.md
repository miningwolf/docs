## PluginDescriptor __class__

>io.wolfscript.plugin.PluginDescriptor

---

### Class Overview

Describes information about a plugin, including meta information and start/stop/load information. It also contains a refrence to the loaded instance of the plugin, should there be one.

Method | Type   
--- | :--- 
 readonly property __WolfInf__ <br> _WolfInf property_ | `PropertiesFile`
 readonly property __Author__ <br> _Author property_ | `String`
 readonly property __Version__ <br> _Version property_ | `String`
 readonly property __Path__ <br> _Path property_ | `String`
 readonly property __Language__ <br> _Language property_ | `String`
 readonly property __Name__ <br> _Name property_ | `String`
 readonly property __PluginLifecycle__ <br> _PluginLifecycle property_ | [`PluginLifecycle`](PluginLifecycle.md)
 readonly property __Plugin__ <br> _Plugin property_ | `Plugin`
  property __Priority__ <br> _Priority property_ | `int`
 readonly property __Dependencies__ <br> _Dependencies property_ | `String[]`
 writeonly property __CurrentState__ <br> _Set: DO NOT CALL THIS METHOD. It is for internal use only._ | `void`
 function __enableEarly__() <br> _enableEarly method_ | `boolean`



---


### Public Properties for [`PluginDescriptor`](PluginDescriptor.md)

##### <a id='wolfinf'></a>public  readonly property __WolfInf__

_WolfInf property_

Get | 
--- | 
`PropertiesFile` |



##### <a id='author'></a>public  readonly property __Author__

_Author property_

Get | 
--- | 
`String` |



##### <a id='version'></a>public  readonly property __Version__

_Version property_

Get | 
--- | 
`String` |



##### <a id='path'></a>public  readonly property __Path__

_Path property_

Get | 
--- | 
`String` |



##### <a id='language'></a>public  readonly property __Language__

_Language property_

Get | 
--- | 
`String` |



##### <a id='name'></a>public  readonly property __Name__

_Name property_

Get | 
--- | 
`String` |



##### <a id='pluginlifecycle'></a>public  readonly property __PluginLifecycle__

_PluginLifecycle property_

Get | 
--- | 
[`PluginLifecycle`](PluginLifecycle.md) |



##### <a id='plugin'></a>public  readonly property __Plugin__

_Plugin property_

Get | 
--- | 
`Plugin` |



##### <a id='priority'></a>public   property __Priority__

_Priority property_

Get | 
--- | 
`int` |

Set | Type | Description  
--- | --- | --- 
priority | `int` | priority argument


##### <a id='dependencies'></a>public  readonly property __Dependencies__

_Dependencies property_

Get | 
--- | 
`String[]` |



##### <a id='currentstate'></a>public  writeonly property __CurrentState__

_Set: DO NOT CALL THIS METHOD. It is for internal use only._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
state | [`PluginState`](PluginState.md) | New plugin state


---

### Public Methods for [`PluginDescriptor`](PluginDescriptor.md)

##### <a id='enableearly'></a>public  function __enableEarly__()

_enableEarly method_

Returns | 
--- | 
`boolean` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

