## RailPoweredProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.RailPoweredProperties
>Extends [`RailProperties`](RailProperties.md)

---

### Class Overview

class RailPoweredProperties

Method | Type   
--- | :--- 
static function __applyPowered__(block, value) <br> _Applies whether the `Rail` is powered or not_ | [`Block`](../../Block.md)
static final var __poweredPoweredRail__ <br> _Powered and Activator Rail powered property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
static final var __poweredDectectorRail__ <br> _Detector Rail powered property, Values: true, false_ | [`BlockBooleanProperty`](../BlockBooleanProperty.md)
 |
__Inherited items from [`RailProperties`](RailProperties.md)__ |
static function __applyShape__(block, value) <br> _Applies shape to the `Rail`_ | [`Block`](../../Block.md)
static function __valueOf__(ordinal) <br> _valueOf method_ | `Direction`
static final var __shapeNormalRail__ <br> _Normal Rail shape property, Values: `Direction`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __shapePoweredRail__ <br> _Powered and Activator Rail shape property, Values: `Direction`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
static final var __shapeDetectorRail__ <br> _Detector Rail shape property, Values: `Direction`_ | [`BlockEnumProperty`](../BlockEnumProperty.md)
 |
__Inherited items from [`BlockProperties`](BlockProperties.md)__ |







---


### Public Methods for [`RailPoweredProperties`](RailPoweredProperties.md)

##### <a id='applypowered'></a>public static function __applyPowered__(block, value)

_Applies whether the `Rail` is powered or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`RailPoweredProperties`](RailPoweredProperties.md)

##### <a id='poweredpoweredrail'></a>public static final var __poweredPoweredRail__

_Powered and Activator Rail powered property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

##### <a id='powereddectectorrail'></a>public static final var __poweredDectectorRail__

_Detector Rail powered property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](../BlockBooleanProperty.md)

---

### Public Methods for [`RailProperties`](RailProperties.md)

##### <a id='applyshape'></a>public static function __applyShape__(block, value)

_Applies shape to the `Rail`_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](../../Block.md) | the [`Block`](../../Block.md) to be modified
value | `Direction` | the `Shape` value to apply

Returns | Description
--- | --- 
[`Block`](../../Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


##### <a id='valueof'></a>public static function __valueOf__(ordinal)

_valueOf method_

Argument | Type | Description  
--- | --- | --- 
ordinal | `int` | ordinal argument

Returns | 
--- | 
`Direction` |


---

### Public Fields for [`RailProperties`](RailProperties.md)

##### <a id='shapenormalrail'></a>public static final var __shapeNormalRail__

_Normal Rail shape property, Values: `Direction`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='shapepoweredrail'></a>public static final var __shapePoweredRail__

_Powered and Activator Rail shape property, Values: `Direction`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

##### <a id='shapedetectorrail'></a>public static final var __shapeDetectorRail__

_Detector Rail shape property, Values: `Direction`_

>Returns
>  [`BlockEnumProperty`](../BlockEnumProperty.md)

---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

