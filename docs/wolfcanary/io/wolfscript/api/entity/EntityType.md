## EntityType __enum__

>io.wolfscript.api.entity.EntityType

---

### Enum Overview

EntityType enum

Item | Type   
--- | :--- 
0: <br> _0 EntityType_ | EntityType
0: <br> _0 EntityType_ | EntityType
0: <br> _0 EntityType_ | EntityType
49: <br> _49 EntityType_ | EntityType
49: <br> _49 EntityType_ | EntityType
48: <br> _48 EntityType_ | EntityType
0: <br> _0 EntityType_ | EntityType
0: <br> _0 EntityType_ | EntityType
30: <br> _30 EntityType_ | EntityType
10: <br> _10 EntityType_ | EntityType
65: <br> _65 EntityType_ | EntityType
120: <br> _120 EntityType_ | EntityType
61: <br> _61 EntityType_ | EntityType
120: <br> _120 EntityType_ | EntityType
41: <br> _41 EntityType_ | EntityType
59: <br> _59 EntityType_ | EntityType
43: <br> _43 EntityType_ | EntityType
93: <br> _93 EntityType_ | EntityType
0: <br> _0 EntityType_ | EntityType
40: <br> _40 EntityType_ | EntityType
92: <br> _92 EntityType_ | EntityType
50: <br> _50 EntityType_ | EntityType
100: <br> _100 EntityType_ | EntityType
42: <br> _42 EntityType_ | EntityType
200: <br> _200 EntityType_ | EntityType
63: <br> _63 EntityType_ | EntityType
15: <br> _15 EntityType_ | EntityType
58: <br> _58 EntityType_ | EntityType
67: <br> _67 EntityType_ | EntityType
14: <br> _14 EntityType_ | EntityType
1: <br> _1 EntityType_ | EntityType
16: <br> _16 EntityType_ | EntityType
21: <br> _21 EntityType_ | EntityType
120: <br> _120 EntityType_ | EntityType
22: <br> _22 EntityType_ | EntityType
ID: <br> _ID EntityType_ | EntityType
0: <br> _0 EntityType_ | EntityType
44: <br> _44 EntityType_ | EntityType
68: <br> _68 EntityType_ | EntityType
56: <br> _56 EntityType_ | EntityType
53: <br> _53 EntityType_ | EntityType
46: <br> _46 EntityType_ | EntityType
100: <br> _100 EntityType_ | EntityType
99: <br> _99 EntityType_ | EntityType
18: <br> _18 EntityType_ | EntityType
12: <br> _12 EntityType_ | EntityType
8: <br> _8 EntityType_ | EntityType
120: <br> _120 EntityType_ | EntityType
0: <br> _0 EntityType_ | EntityType
62: <br> _62 EntityType_ | EntityType
47: <br> _47 EntityType_ | EntityType
96: <br> _96 EntityType_ | EntityType
100: <br> _100 EntityType_ | EntityType
48: <br> _48 EntityType_ | EntityType
48: <br> _48 EntityType_ | EntityType
98: <br> _98 EntityType_ | EntityType
9: <br> _9 EntityType_ | EntityType
90: <br> _90 EntityType_ | EntityType
57: <br> _57 EntityType_ | EntityType
48: <br> _48 EntityType_ | EntityType
16: <br> _16 EntityType_ | EntityType
120: <br> _120 EntityType_ | EntityType
91: <br> _91 EntityType_ | EntityType
60: <br> _60 EntityType_ | EntityType
51: <br> _51 EntityType_ | EntityType
100: <br> _100 EntityType_ | EntityType
55: <br> _55 EntityType_ | EntityType
13: <br> _13 EntityType_ | EntityType
11: <br> _11 EntityType_ | EntityType
97: <br> _97 EntityType_ | EntityType
52: <br> _52 EntityType_ | EntityType
94: <br> _94 EntityType_ | EntityType
101: <br> _101 EntityType_ | EntityType
45: <br> _45 EntityType_ | EntityType
20: <br> _20 EntityType_ | EntityType
120: <br> _120 EntityType_ | EntityType
66: <br> _66 EntityType_ | EntityType
64: <br> _64 EntityType_ | EntityType
51: <br> _51 EntityType_ | EntityType
19: <br> _19 EntityType_ | EntityType
95: <br> _95 EntityType_ | EntityType
17: <br> _17 EntityType_ | EntityType
2: <br> _2 EntityType_ | EntityType
54: <br> _54 EntityType_ | EntityType
100: <br> _100 EntityType_ | EntityType
 readonly property __EntityID__ <br> _EntityID property_ | `short`
 function __isAnimal__() <br> _Checks if the EntityType is that of an Animal_ | `boolean`
 function __isEffect__() <br> _Checks if the EntityType is that of a Effect (ie: LightningBolt)_ | `boolean`
 function __isHanging__() <br> _Checks if the EntityType is that of a HangingEntity_ | `boolean`
 function __isLiving__() <br> _Checks if the EntityType is that of a EntityLiving_ | `boolean`
 function __isMob__() <br> _Checks if the EntityType is that of a Mob_ | `boolean`
 function __isOf__(type) <br> _Checks if the EntityType is of a given type_ | `boolean`
 function __isThrowable__() <br> _Checks if the EntityType is that of a Throwable_ | `boolean`
 function __isVehicle__() <br> _Checks if the EntityType is that of a Vehicle_ | `boolean`



---


### Public Properties for [`EntityType`](EntityType.md)

##### <a id='entityid'></a>public  readonly property __EntityID__

_EntityID property_

Get | 
--- | 
`short` |



---

### Public Methods for [`EntityType`](EntityType.md)

##### <a id='isanimal'></a>public  function __isAnimal__()

_Checks if the EntityType is that of an Animal_

Returns | Description
--- | --- 
`boolean` | `true` if animal; `false` if not


##### <a id='iseffect'></a>public  function __isEffect__()

_Checks if the EntityType is that of a Effect (ie: LightningBolt)_

Returns | Description
--- | --- 
`boolean` | `true` if effect; `false` if not


##### <a id='ishanging'></a>public  function __isHanging__()

_Checks if the EntityType is that of a HangingEntity_

Returns | Description
--- | --- 
`boolean` | `true` if hanging; `false` if not


##### <a id='isliving'></a>public  function __isLiving__()

_Checks if the EntityType is that of a EntityLiving_

Returns | Description
--- | --- 
`boolean` | `true` if living; `false` if not


##### <a id='ismob'></a>public  function __isMob__()

_Checks if the EntityType is that of a Mob_

Returns | Description
--- | --- 
`boolean` | `true` if mob; `false` if not


##### <a id='isof'></a>public  function __isOf__(type)

_Checks if the EntityType is of a given type_

Argument | Type | Description  
--- | --- | --- 
type | [`EntityType`](EntityType.md) | the type to check for

Returns | Description
--- | --- 
`boolean` | `true` if equal to or a subtype of; `false` if no relation


##### <a id='isthrowable'></a>public  function __isThrowable__()

_Checks if the EntityType is that of a Throwable_

Returns | Description
--- | --- 
`boolean` | `true` if throwable; `false` if not


##### <a id='isvehicle'></a>public  function __isVehicle__()

_Checks if the EntityType is that of a Vehicle_

Returns | Description
--- | --- 
`boolean` | `true` if vehicle; `false` if not


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

