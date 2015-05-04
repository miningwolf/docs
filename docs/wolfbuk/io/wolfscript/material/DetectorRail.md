## DetectorRail __class__

>io.wolfscript.material.DetectorRail
>Extends [`ExtendedRails`](ExtendedRails.md)
>Implements [`PressureSensor`](PressureSensor.md)

---

### Class Overview

Represents a detector rail

Method | Type   
--- | :--- 
new __DetectorRail__() <br> _DetectorRail constructor_ | _constructor_
new __DetectorRail__(Material) <br> _DetectorRail constructor_ | _constructor_
 writeonly property __Pressed__ <br> _Pressed property_ | `void`
 function __clone__() <br> _clone method_ | [`DetectorRail`](DetectorRail.md)
 function __isPressed__() <br> _isPressed method_ | `boolean`
 |
__Inherited items from [`ExtendedRails`](ExtendedRails.md)__ |
new __ExtendedRails__(Material) <br> _ExtendedRails constructor_ | _constructor_
 function __clone__() <br> _clone method_ | [`ExtendedRails`](ExtendedRails.md)
 function __isCurve__() <br> _isCurve method_ | `boolean`
 function __setDirection__(face, isOnSlope) <br> _setDirection method_ | `void`
 |
__Inherited items from [`Rails`](Rails.md)__ |
new __Rails__() <br> _Rails constructor_ | _constructor_
new __Rails__(Material) <br> _Rails constructor_ | _constructor_
 readonly property __Direction__ <br> _Direction property_ | [`BlockFace`](../block/BlockFace.md)
 function __clone__() <br> _clone method_ | [`Rails`](Rails.md)
 function __isCurve__() <br> _isCurve method_ | `boolean`
 function __isOnSlope__() <br> _isOnSlope method_ | `boolean`
 function __setDirection__(face, isOnSlope) <br> _Set the direction of these tracks_ | `void`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
new __MaterialData__(Material) <br> _MaterialData constructor_ | _constructor_
 readonly property __ItemType__ <br> _Get: Gets the Material that this MaterialData represents_ | [`Material`](../Material.md)
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__() <br> _Creates a new ItemStack based on this MaterialData_ | `ItemStack`
 function __toItemStack__(amount) <br> _Creates a new ItemStack based on this MaterialData_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`









---

### Public Constructors for [`DetectorRail`](DetectorRail.md)

##### <a id='detectorrail'></a>new __DetectorRail__() 

_DetectorRail constructor_


##### <a id='detectorrail'></a>new __DetectorRail__(int) 
_Deprecated: Magic value_

_DetectorRail constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='detectorrail'></a>new __DetectorRail__(Material) 

_DetectorRail constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument

##### <a id='detectorrail'></a>new __DetectorRail__(int, byte) 
_Deprecated: Magic value_

_DetectorRail constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='detectorrail'></a>new __DetectorRail__(Material, byte) 
_Deprecated: Magic value_

_DetectorRail constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`DetectorRail`](DetectorRail.md)

##### <a id='pressed'></a>public  writeonly property __Pressed__

_Pressed property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
isPressed | `boolean` | isPressed argument


---

### Public Methods for [`DetectorRail`](DetectorRail.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`DetectorRail`](DetectorRail.md) |


##### <a id='ispressed'></a>public  function __isPressed__()

_isPressed method_

Returns | 
--- | 
`boolean` |


---
### Public Constructors for [`ExtendedRails`](ExtendedRails.md)

##### <a id='extendedrails'></a>new __ExtendedRails__(int) 
_Deprecated: Magic value_

_ExtendedRails constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='extendedrails'></a>new __ExtendedRails__(Material) 

_ExtendedRails constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument

##### <a id='extendedrails'></a>new __ExtendedRails__(int, byte) 
_Deprecated: Magic value_

_ExtendedRails constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='extendedrails'></a>new __ExtendedRails__(Material, byte) 
_Deprecated: Magic value_

_ExtendedRails constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Methods for [`ExtendedRails`](ExtendedRails.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`ExtendedRails`](ExtendedRails.md) |


##### <a id='iscurve'></a>public  function __isCurve__()

_isCurve method_

Returns | 
--- | 
`boolean` |


##### <a id='setdirection'></a>public  function __setDirection__(face, isOnSlope)

_setDirection method_

Argument | Type | Description  
--- | --- | --- 
face | [`BlockFace`](../block/BlockFace.md) | face argument
isOnSlope | `boolean` | isOnSlope argument

Returns | 
--- | 
`void` |


---
### Public Constructors for [`Rails`](Rails.md)

##### <a id='rails'></a>new __Rails__() 

_Rails constructor_


##### <a id='rails'></a>new __Rails__(int) 
_Deprecated: Magic value_

_Rails constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='rails'></a>new __Rails__(Material) 

_Rails constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument

##### <a id='rails'></a>new __Rails__(int, byte) 
_Deprecated: Magic value_

_Rails constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='rails'></a>new __Rails__(Material, byte) 
_Deprecated: Magic value_

_Rails constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`Rails`](Rails.md)

##### <a id='direction'></a>public  readonly property __Direction__

_Direction property_

Get | Description
--- | --- 
[`BlockFace`](../block/BlockFace.md) | the direction these tracks are set <p> Note that tracks are bidirectional and that the direction returned is the ascending direction if the track is set on a slope. If it is set as a curve, the corner of the track is returned.



---

### Public Methods for [`Rails`](Rails.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Rails`](Rails.md) |


##### <a id='iscurve'></a>public  function __isCurve__()

_isCurve method_

Returns | Description
--- | --- 
`boolean` | the whether this track is set as a curve


##### <a id='isonslope'></a>public  function __isOnSlope__()

_isOnSlope method_

Returns | Description
--- | --- 
`boolean` | the whether this track is set on a slope


##### <a id='setdirection'></a>public  function __setDirection__(face, isOnSlope)

_Set the direction of these tracks <p> Note that tracks are bidirectional and that the direction returned is the ascending direction if the track is set on a slope. If it is set as a curve, the corner of the track should be supplied._

Argument | Type | Description  
--- | --- | --- 
face | [`BlockFace`](../block/BlockFace.md) | the direction the track should be facing
isOnSlope | `boolean` | whether or not the track should be on a slope

Returns | 
--- | 
`void` |


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---
### Public Constructors for [`MaterialData`](MaterialData.md)

##### <a id='materialdata'></a>new __MaterialData__(int) 
_Deprecated: Magic value_

_MaterialData constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument

##### <a id='materialdata'></a>new __MaterialData__(Material) 

_MaterialData constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument

##### <a id='materialdata'></a>new __MaterialData__(int, byte) 
_Deprecated: Magic value_

_MaterialData constructor_

Argument | Type | Description  
--- | --- | --- 
int | `final` | int argument
byte | `final` | byte argument

##### <a id='materialdata'></a>new __MaterialData__(Material, byte) 
_Deprecated: Magic value_

_MaterialData constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`MaterialData`](MaterialData.md)

##### <a id='data'></a>public   property __Data__
_Deprecated: Magic value_

_Get: Gets the raw data in this material<br>Set: Sets the raw data of this material_

Get | 
--- | 
`byte` |

Set | Type | Description  
--- | --- | --- 
data | `byte` | New raw data


##### <a id='itemtype'></a>public  readonly property __ItemType__

_Get: Gets the Material that this MaterialData represents_

Get | Description
--- | --- 
[`Material`](../Material.md) | Material represented by this MaterialData



##### <a id='itemtypeid'></a>public  readonly property __ItemTypeId__
_Deprecated: Magic value_

_Get: Gets the Material Id that this MaterialData represents_

Get | Description
--- | --- 
`int` | Material Id represented by this MaterialData



---

### Public Methods for [`MaterialData`](MaterialData.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`MaterialData`](MaterialData.md) |


##### <a id='equals'></a>public  function __equals__(obj)

_equals method_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | 
--- | 
`boolean` |


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


##### <a id='toitemstack'></a>public  function __toItemStack__()

_Creates a new ItemStack based on this MaterialData_

Returns | Description
--- | --- 
`ItemStack` | New ItemStack containing a copy of this MaterialData


##### <a id='toitemstack'></a>public  function __toItemStack__(amount)

_Creates a new ItemStack based on this MaterialData_

Argument | Type | Description  
--- | --- | --- 
amount | `int` | The stack size of the new stack

Returns | Description
--- | --- 
`ItemStack` | New ItemStack containing a copy of this MaterialData


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---


---


---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

