## CropState __enum__

>io.wolfscript.CropState

---

### Enum Overview

Represents the different growth states of crops

Item | Type   
--- | :--- 
SEEDED: 0x0<br> _State when first seeded_ | CropState
GERMINATED: 0x1<br> _First growth stage_ | CropState
VERY_SMALL: 0x2<br> _Second growth stage_ | CropState
SMALL: 0x3<br> _Third growth stage_ | CropState
MEDIUM: 0x4<br> _Fourth growth stage_ | CropState
TALL: 0x5<br> _Fifth growth stage_ | CropState
VERY_TALL: 0x6<br> _Almost ripe stage_ | CropState
RIPE: 0x7<br> _Ripe stage_ | CropState



---


### Public Properties for [`CropState`](CropState.md)

##### <a id='data'></a>public  readonly property __Data__
_Deprecated: Magic value_

_Get: Gets the associated data value representing this growth state_

Get | Description
--- | --- 
`byte` | A byte containing the data value of this growth state



---

### Public Methods for [`CropState`](CropState.md)

##### <a id='getbydata'></a>public static function __getByData__(byte)
_Deprecated: Magic value_

_Gets the CropState with the given data value_

Argument | Type | Description  
--- | --- | --- 
byte | `final` | byte argument

Returns | Description
--- | --- 
[`CropState`](CropState.md) | The [`CropState`](CropState.md) representing the given value, or null if it doesn't exist


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

