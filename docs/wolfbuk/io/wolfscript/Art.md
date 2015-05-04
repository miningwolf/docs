## Art __enum__

>io.wolfscript.Art

---

### Enum Overview

Represents the art on a painting

Item | Type   
--- | :--- 
0: <br> _0 Art_ | Art
1: <br> _1 Art_ | Art
1: <br> _1 Art_ | Art
1: <br> _1 Art_ | Art
2: <br> _2 Art_ | Art
1: <br> _1 Art_ | Art
3: <br> _3 Art_ | Art
1: <br> _1 Art_ | Art
4: <br> _4 Art_ | Art
1: <br> _1 Art_ | Art
5: <br> _5 Art_ | Art
1: <br> _1 Art_ | Art
6: <br> _6 Art_ | Art
1: <br> _1 Art_ | Art
7: <br> _7 Art_ | Art
2: <br> _2 Art_ | Art
8: <br> _8 Art_ | Art
2: <br> _2 Art_ | Art
9: <br> _9 Art_ | Art
2: <br> _2 Art_ | Art
10: <br> _10 Art_ | Art
2: <br> _2 Art_ | Art
11: <br> _11 Art_ | Art
2: <br> _2 Art_ | Art
12: <br> _12 Art_ | Art
1: <br> _1 Art_ | Art
13: <br> _13 Art_ | Art
1: <br> _1 Art_ | Art
14: <br> _14 Art_ | Art
2: <br> _2 Art_ | Art
15: <br> _15 Art_ | Art
2: <br> _2 Art_ | Art
16: <br> _16 Art_ | Art
2: <br> _2 Art_ | Art
17: <br> _17 Art_ | Art
2: <br> _2 Art_ | Art
18: <br> _18 Art_ | Art
2: <br> _2 Art_ | Art
19: <br> _19 Art_ | Art
2: <br> _2 Art_ | Art
20: <br> _20 Art_ | Art
4: <br> _4 Art_ | Art
21: <br> _21 Art_ | Art
4: <br> _4 Art_ | Art
22: <br> _22 Art_ | Art
4: <br> _4 Art_ | Art
23: <br> _23 Art_ | Art
4: <br> _4 Art_ | Art
24: <br> _24 Art_ | Art
4: <br> _4 Art_ | Art
25: <br> _25 Art_ | Art
4: <br> _4 Art_ | Art
 readonly property __BlockHeight__ <br> _Get: Gets the height of the painting, in blocks_ | `int`
 readonly property __BlockWidth__ <br> _Get: Gets the width of the painting, in blocks_ | `int`
static function __getByName__(name) <br> _Get a painting by its unique name_ | [`Art`](Art.md)



---


### Public Properties for [`Art`](Art.md)

##### <a id='blockheight'></a>public  readonly property __BlockHeight__

_Get: Gets the height of the painting, in blocks_

Get | Description
--- | --- 
`int` | The height of the painting, in blocks



##### <a id='blockwidth'></a>public  readonly property __BlockWidth__

_Get: Gets the width of the painting, in blocks_

Get | Description
--- | --- 
`int` | The width of the painting, in blocks



##### <a id='id'></a>public  readonly property __Id__
_Deprecated: Magic value_

_Get: Get the ID of this painting._

Get | Description
--- | --- 
`int` | The ID of this painting



---

### Public Methods for [`Art`](Art.md)

##### <a id='getbyid'></a>public static function __getById__(id)
_Deprecated: Magic value_

_Get a painting by its numeric ID_

Argument | Type | Description  
--- | --- | --- 
id | `int` | The ID

Returns | Description
--- | --- 
[`Art`](Art.md) | The painting


##### <a id='getbyname'></a>public static function __getByName__(name)

_Get a painting by its unique name <p> This ignores underscores and capitalization_

Argument | Type | Description  
--- | --- | --- 
name | `String` | The name

Returns | Description
--- | --- 
[`Art`](Art.md) | The painting


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

