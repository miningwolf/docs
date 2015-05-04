## RegisteredServiceProvider __class__

>io.wolfscript.plugin.RegisteredServiceProvider
>Implements `Comparable<RegisteredServiceProvider<?>`

---

### Class Overview

A registered service provider.

Method | Type   
--- | :--- 
new __RegisteredServiceProvider__(provider, priority, plugin) <br> _RegisteredServiceProvider constructor_ | _constructor_
 readonly property __Plugin__ <br> _Plugin property_ | [`Plugin`](Plugin.md)
 readonly property __Priority__ <br> _Priority property_ | [`ServicePriority`](ServicePriority.md)
 readonly property __Provider__ <br> _Provider property_ | `T`
 readonly property __Service__ <br> _Service property_ | `Class<T>`
 function __compareTo__() <br> _compareTo method_ | `int`



---

### Public Constructors for [`RegisteredServiceProvider`](RegisteredServiceProvider.md)

##### <a id='registeredserviceprovider'></a>new __RegisteredServiceProvider__(provider, priority, plugin) 

_RegisteredServiceProvider constructor_

Argument | Type | Description  
--- | --- | --- 
provider | `T` | provider argument
priority | [`ServicePriority`](ServicePriority.md) | priority argument
plugin | [`Plugin`](Plugin.md) | plugin argument

---

### Public Properties for [`RegisteredServiceProvider`](RegisteredServiceProvider.md)

##### <a id='plugin'></a>public  readonly property __Plugin__

_Plugin property_

Get | 
--- | 
[`Plugin`](Plugin.md) |



##### <a id='priority'></a>public  readonly property __Priority__

_Priority property_

Get | 
--- | 
[`ServicePriority`](ServicePriority.md) |



##### <a id='provider'></a>public  readonly property __Provider__

_Provider property_

Get | 
--- | 
`T` |



##### <a id='service'></a>public  readonly property __Service__

_Service property_

Get | 
--- | 
`Class<T>` |



---

### Public Methods for [`RegisteredServiceProvider`](RegisteredServiceProvider.md)

##### <a id='compareto'></a>public  function __compareTo__()

_compareTo method_

Returns | 
--- | 
`int` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

