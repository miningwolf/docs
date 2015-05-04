## ConfigurationSerialization __class__

>io.wolfscript.configuration.serialization.ConfigurationSerialization

---

### Class Overview

Utility class for storing and retrieving classes for [`Configuration`](../Configuration.md).

Method | Type   
--- | :--- 
 function __deserialize__() <br> _deserialize method_ | [`ConfigurationSerializable`](ConfigurationSerializable.md)
static function __deserializeObject__(ConfigurationSerializable) <br> _Attempts to deserialize the given arguments into a new instance of the_ | [`ConfigurationSerializable`](ConfigurationSerializable.md)
static function __deserializeObject__() <br> _Attempts to deserialize the given arguments into a new instance of the_ | [`ConfigurationSerializable`](ConfigurationSerializable.md)
static function __getAlias__(ConfigurationSerializable) <br> _Gets the correct alias for the given [`ConfigurationSerializable`](ConfigurationSerializable.md)_ | `String`
static function __registerClass__(ConfigurationSerializable) <br> _Registers the given [`ConfigurationSerializable`](ConfigurationSerializable.md) class by its_ | `void`
static function __registerClass__(ConfigurationSerializable, alias) <br> _Registers the given alias to the specified {@link_ | `void`
static function __unregisterClass__(alias) <br> _Unregisters the specified alias to a [`ConfigurationSerializable`](ConfigurationSerializable.md)_ | `void`
static function __unregisterClass__(ConfigurationSerializable) <br> _Unregisters any aliases for the specified {@link_ | `void`
static final var __SERIALIZED__ <br> _SERIALIZED field_ | `String`



---


### Public Methods for [`ConfigurationSerialization`](ConfigurationSerialization.md)

##### <a id='deserialize'></a>public  function __deserialize__()

_deserialize method_

Returns | 
--- | 
[`ConfigurationSerializable`](ConfigurationSerializable.md) |


##### <a id='deserializeobject'></a>public static function __deserializeObject__(ConfigurationSerializable)

_Attempts to deserialize the given arguments into a new instance of the given class. <p> The class must implement [`ConfigurationSerializable`](ConfigurationSerializable.md), including the extra methods as specified in the javadoc of ConfigurationSerializable. <p> If a new instance could not be made, an example being the class not fully implementing the interface, null will be returned._

Argument | Type | Description  
--- | --- | --- 
ConfigurationSerializable | `extends` | ConfigurationSerializable argument

Returns | Description
--- | --- 
[`ConfigurationSerializable`](ConfigurationSerializable.md) | New instance of the specified class


##### <a id='deserializeobject'></a>public static function __deserializeObject__()

_Attempts to deserialize the given arguments into a new instance of the given class. <p> The class must implement [`ConfigurationSerializable`](ConfigurationSerializable.md), including the extra methods as specified in the javadoc of ConfigurationSerializable. <p> If a new instance could not be made, an example being the class not fully implementing the interface, null will be returned._

Returns | Description
--- | --- 
[`ConfigurationSerializable`](ConfigurationSerializable.md) | New instance of the specified class


##### <a id='getalias'></a>public static function __getAlias__(ConfigurationSerializable)

_Gets the correct alias for the given [`ConfigurationSerializable`](ConfigurationSerializable.md) class_

Argument | Type | Description  
--- | --- | --- 
ConfigurationSerializable | `extends` | ConfigurationSerializable argument

Returns | Description
--- | --- 
`String` | Alias to use for the class


##### <a id='registerclass'></a>public static function __registerClass__(ConfigurationSerializable)

_Registers the given [`ConfigurationSerializable`](ConfigurationSerializable.md) class by its alias_

Argument | Type | Description  
--- | --- | --- 
ConfigurationSerializable | `extends` | ConfigurationSerializable argument

Returns | 
--- | 
`void` |


##### <a id='registerclass'></a>public static function __registerClass__(ConfigurationSerializable, alias)

_Registers the given alias to the specified [`ConfigurationSerializable`](ConfigurationSerializable.md) class_

Argument | Type | Description  
--- | --- | --- 
ConfigurationSerializable | `extends` | ConfigurationSerializable argument
alias | `String` | Alias to register as

Returns | 
--- | 
`void` |


##### <a id='unregisterclass'></a>public static function __unregisterClass__(alias)

_Unregisters the specified alias to a [`ConfigurationSerializable`](ConfigurationSerializable.md)_

Argument | Type | Description  
--- | --- | --- 
alias | `String` | Alias to unregister

Returns | 
--- | 
`void` |


##### <a id='unregisterclass'></a>public static function __unregisterClass__(ConfigurationSerializable)

_Unregisters any aliases for the specified [`ConfigurationSerializable`](ConfigurationSerializable.md) class_

Argument | Type | Description  
--- | --- | --- 
ConfigurationSerializable | `extends` | ConfigurationSerializable argument

Returns | 
--- | 
`void` |


---

### Public Fields for [`ConfigurationSerialization`](ConfigurationSerialization.md)

##### <a id='serialized'></a>public static final var __SERIALIZED__

_SERIALIZED field_

>Returns
>  `String`

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

