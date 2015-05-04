## Painting __interface__

>io.wolfscript.entity.Painting
>Extends `Hanging`

---

### Interface Overview

Represents a Painting.

Method | Type   
--- | :--- 
  property __Art__ <br> _Get: Get the art on this painting<br>Set: Set the art on this painting_ | [`Art`](../Art.md)
 function __setArt__(art, force) <br> _Set the art on this painting_ | `boolean`



---


### Public Properties for [`Painting`](Painting.md)

##### <a id='art'></a>public   property __Art__

_Get: Get the art on this painting<br>Set: Set the art on this painting_

Get | Description
--- | --- 
[`Art`](../Art.md) | False if the new art won't fit at the painting's current location

Set | Type | Description  
--- | --- | --- 
art | [`Art`](../Art.md) | The new art


---

### Public Methods for [`Painting`](Painting.md)

##### <a id='setart'></a>public  function __setArt__(art, force)

_Set the art on this painting_

Argument | Type | Description  
--- | --- | --- 
art | [`Art`](../Art.md) | The new art
force | `boolean` | If true, force the new art regardless of whether it fits at the current location. Note that forcing it where it can't fit normally causes it to drop as an item unless you override this by catching the [`PaintingBreakEvent`](../event/painting/PaintingBreakEvent.md).

Returns | Description
--- | --- 
`boolean` | False if force was false and the new art won't fit at the painting's current location


---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

