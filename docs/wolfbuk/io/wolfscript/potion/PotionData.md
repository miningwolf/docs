## PotionData __class__

>io.wolfscript.potion.PotionData

---

### Class Overview

class PotionData

Method | Type   
--- | :--- 
new __PotionData__(type, extended, upgraded) <br> _Instantiates a final PotionData object to contain information about a_ | _constructor_
new __PotionData__(type) <br> _PotionData constructor_ | _constructor_
 readonly property __Type__ <br> _Get: Gets the type of the potion, Type matches up with each kind of craftable_ | [`PotionType`](PotionType.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __isExtended__() <br> _Checks if the potion is in an extended state. This refers to the extended_ | `boolean`
 function __isUpgraded__() <br> _Checks if the potion is in an upgraded state. This refers to whether or_ | `boolean`



---

### Public Constructors for [`PotionData`](PotionData.md)

##### <a id='potiondata'></a>new __PotionData__(type, extended, upgraded) 

_Instantiates a final PotionData object to contain information about a Potion_

Argument | Type | Description  
--- | --- | --- 
type | [`PotionType`](PotionType.md) | the type of the Potion
extended | `boolean` | whether the potion is extended PotionType#isExtendable() must be true
upgraded | `boolean` | whether the potion is upgraded PotionType#isUpgradable() must be true

##### <a id='potiondata'></a>new __PotionData__(type) 

_PotionData constructor_

Argument | Type | Description  
--- | --- | --- 
type | [`PotionType`](PotionType.md) | type argument

---

### Public Properties for [`PotionData`](PotionData.md)

##### <a id='type'></a>public  readonly property __Type__

_Get: Gets the type of the potion, Type matches up with each kind of craftable potion_

Get | Description
--- | --- 
[`PotionType`](PotionType.md) | the potion type



---

### Public Methods for [`PotionData`](PotionData.md)

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


##### <a id='isextended'></a>public  function __isExtended__()

_Checks if the potion is in an extended state. This refers to the extended duration potions_

Returns | Description
--- | --- 
`boolean` | true if the potion is extended


##### <a id='isupgraded'></a>public  function __isUpgraded__()

_Checks if the potion is in an upgraded state. This refers to whether or not the potion is Tier 2, such as Potion of Fire Resistance II._

Returns | Description
--- | --- 
`boolean` | true if the potion is upgraded;


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

