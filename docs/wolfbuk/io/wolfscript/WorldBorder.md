## WorldBorder __interface__

>io.wolfscript.WorldBorder

---

### Interface Overview

interface WorldBorder

Method | Type   
--- | :--- 
  property __DamageBuffer__ <br> _Get: Gets the current border damage buffer.<br>Set: Sets the amount of blocks a player may safely be outside the border before taking damage._ | `double`
  property __WarningDistance__ <br> _Get: Gets the current border warning distance.<br>Set: Sets the warning distance that causes the screen to be tinted red when the player is within the specified number of blocks from the border._ | `int`
  property __WarningTime__ <br> _Get: Gets the current border warning time in seconds.<br>Set: Sets the warning time that causes the screen to be tinted red when a contracting border will reach the player within the specified time._ | `int`
  property __Center__ <br> _Center property_ | `Location`
  property __DamageAmount__ <br> _Get: Gets the current border damage amount.<br>Set: Sets the amount of damage a player takes when outside the border plus the border buffer._ | `double`
  property __Size__ <br> _Get: Gets the current side length of the border.<br>Set: Sets the border to a square region with the specified side length in blocks._ | `double`
 function __reset__() <br> _Resets the border to default values._ | `void`
 function __setCenter__(x, z) <br> _Sets the new border center._ | `void`
 function __setSize__(newSize, seconds) <br> _Sets the border to a square region with the specified side length in blocks._ | `void`



---


### Public Properties for [`WorldBorder`](WorldBorder.md)

##### <a id='damagebuffer'></a>public   property __DamageBuffer__

_Get: Gets the current border damage buffer.<br>Set: Sets the amount of blocks a player may safely be outside the border before taking damage._

Get | Description
--- | --- 
`double` | The current border damage buffer.

Set | Type | Description  
--- | --- | --- 
blocks | `double` | The amount of blocks. (The default is 5 blocks.)


##### <a id='warningdistance'></a>public   property __WarningDistance__

_Get: Gets the current border warning distance.<br>Set: Sets the warning distance that causes the screen to be tinted red when the player is within the specified number of blocks from the border._

Get | Description
--- | --- 
`int` | The current border warning distance.

Set | Type | Description  
--- | --- | --- 
distance | `int` | The distance in blocks. (The default is 5 blocks.)


##### <a id='warningtime'></a>public   property __WarningTime__

_Get: Gets the current border warning time in seconds.<br>Set: Sets the warning time that causes the screen to be tinted red when a contracting border will reach the player within the specified time._

Get | Description
--- | --- 
`int` | The current border warning time in seconds.

Set | Type | Description  
--- | --- | --- 
seconds | `int` | The amount of time in seconds. (The default is 15 seconds.)


##### <a id='center'></a>public   property __Center__

_Center property_

Get | Description
--- | --- 
`Location` | The current border center.

Set | Type | Description  
--- | --- | --- 
location | `Location` | location argument


##### <a id='damageamount'></a>public   property __DamageAmount__

_Get: Gets the current border damage amount.<br>Set: Sets the amount of damage a player takes when outside the border plus the border buffer._

Get | Description
--- | --- 
`double` | The current border damage amount.

Set | Type | Description  
--- | --- | --- 
damage | `double` | The amount of damage. (The default is 0.2 damage per second per block.)


##### <a id='size'></a>public   property __Size__

_Get: Gets the current side length of the border.<br>Set: Sets the border to a square region with the specified side length in blocks._

Get | Description
--- | --- 
`double` | The current side length of the border.

Set | Type | Description  
--- | --- | --- 
newSize | `double` | The new size of the border.


---

### Public Methods for [`WorldBorder`](WorldBorder.md)

##### <a id='reset'></a>public  function __reset__()

_Resets the border to default values._

Returns | 
--- | 
`void` |


##### <a id='setcenter'></a>public  function __setCenter__(x, z)

_Sets the new border center._

Argument | Type | Description  
--- | --- | --- 
x | `double` | The new center x-coordinate.
z | `double` | The new center z-coordinate.

Returns | 
--- | 
`void` |


##### <a id='setsize'></a>public  function __setSize__(newSize, seconds)

_Sets the border to a square region with the specified side length in blocks._

Argument | Type | Description  
--- | --- | --- 
newSize | `double` | The new side length of the border.
seconds | `long` | The time in seconds in which the border grows or shrinks from the previous size to that being set.

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

