## AttributeModifier __class__

>io.wolfscript.attribute.AttributeModifier
>Implements [`ConfigurationSerializable`](../configuration/serialization/ConfigurationSerializable.md)

---

### Class Overview

Concrete implementation of an attribute modifier.

Method | Type   
--- | :--- 
new __AttributeModifier__(name, amount, operation) <br> _AttributeModifier constructor_ | _constructor_
new __AttributeModifier__(uuid, name, amount, operation) <br> _AttributeModifier constructor_ | _constructor_
 readonly property __Amount__ <br> _Get: Get the amount by which this modifier will apply its `Operation`._ | `double`
 readonly property __Name__ <br> _Get: Get the name of this modifier._ | `String`
 readonly property __Operation__ <br> _Get: Get the operation this modifier will apply._ | `Operation`
 readonly property __UniqueId__ <br> _Get: Get the unique ID for this modifier._ | `UUID`
static function __deserialize__() <br> _deserialize method_ | [`AttributeModifier`](AttributeModifier.md)



---

### Public Constructors for [`AttributeModifier`](AttributeModifier.md)

##### <a id='attributemodifier'></a>new __AttributeModifier__(name, amount, operation) 

_AttributeModifier constructor_

Argument | Type | Description  
--- | --- | --- 
name | `String` | name argument
amount | `double` | amount argument
operation | `Operation` | operation argument

##### <a id='attributemodifier'></a>new __AttributeModifier__(uuid, name, amount, operation) 

_AttributeModifier constructor_

Argument | Type | Description  
--- | --- | --- 
uuid | `UUID` | uuid argument
name | `String` | name argument
amount | `double` | amount argument
operation | `Operation` | operation argument

---

### Public Properties for [`AttributeModifier`](AttributeModifier.md)

##### <a id='amount'></a>public  readonly property __Amount__

_Get: Get the amount by which this modifier will apply its `Operation`._

Get | Description
--- | --- 
`double` | modification amount



##### <a id='name'></a>public  readonly property __Name__

_Get: Get the name of this modifier._

Get | Description
--- | --- 
`String` | name



##### <a id='operation'></a>public  readonly property __Operation__

_Get: Get the operation this modifier will apply._

Get | Description
--- | --- 
`Operation` | operation



##### <a id='uniqueid'></a>public  readonly property __UniqueId__

_Get: Get the unique ID for this modifier._

Get | Description
--- | --- 
`UUID` | unique id



---

### Public Methods for [`AttributeModifier`](AttributeModifier.md)

##### <a id='deserialize'></a>public static function __deserialize__()

_deserialize method_

Returns | 
--- | 
[`AttributeModifier`](AttributeModifier.md) |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

