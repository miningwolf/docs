## ConfigurationSerialization __class__

>io.wolfscript.configuration.serialization.ConfigurationSerialization

---

### Class Overview

Utility class for storing and retrieving classes for [`Configuration`](..\Configuration.md).

Method | Type   
--- | :--- 
 function __deserialize__() <br> _deserialize method_ | [`ConfigurationSerializable`](ConfigurationSerializable.md)
static function __getAlias__(ConfigurationSerializable) <br> _Attempts to deserialize the given arguments into a new instance of the_ | `String`
static final var __SERIALIZED__ <br> _SERIALIZED field_ | `String`



---


### Public Methods for [`ConfigurationSerialization`](ConfigurationSerialization.md)

##### <a id='deserialize'></a>public  function __deserialize__()

_deserialize method_

Returns | 
--- | 
[`ConfigurationSerializable`](ConfigurationSerializable.md) |


##### <a id='getalias'></a>public static function __getAlias__(ConfigurationSerializable)

_Attempts to deserialize the given arguments into a new instance of the given class. <p> The class must implement [`ConfigurationSerializable`](ConfigurationSerializable.md), including the extra methods as specified in the javadoc of ConfigurationSerializable. <p> If a new instance could not be made, an example being the class not fully implementing the interface, null will be returned._

Argument | Type | Description  
--- | --- | --- 
ConfigurationSerializable | `extends` | ConfigurationSerializable argument

Returns | Description
--- | --- 
`String` | New instance of the specified class /
    public static ConfigurationSerializable deserializeObject(Map<String, ?> args, Class<? extends ConfigurationSerializable> clazz) {
        return new ConfigurationSerialization(clazz).deserialize(args);
    }

    /** Attempts to deserialize the given arguments into a new instance of the given class. <p> The class must implement [`ConfigurationSerializable`](ConfigurationSerializable.md), including the extra methods as specified in the javadoc of ConfigurationSerializable. <p> If a new instance could not be made, an example being the class not fully implementing the interface, null will be returned.


---

### Public Fields for [`ConfigurationSerialization`](ConfigurationSerialization.md)

##### <a id='serialized'></a>public static final var __SERIALIZED__

_SERIALIZED field_

>Returns
>  `String`

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

