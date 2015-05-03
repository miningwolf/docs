## Painting __interface__

>io.wolfscript.entity.Painting
>Extends `Hanging`

---

### Interface Overview

Represents a Painting.

Method | Type   
--- | :--- 
 function __setArt__(art, force) <br> _Get the art on this painting_ | `boolean`



---


### Public Methods for [`Painting`](Painting.md)

##### <a id='setart'></a>public  function __setArt__(art, force)

_Get the art on this painting_

Argument | Type | Description  
--- | --- | --- 
art | [`Art`](..\Art.md) | The new art
force | `boolean` | If true, force the new art regardless of whether it fits at the current location. Note that forcing it where it can't fit normally causes it to drop as an item unless you override this by catching the `PaintingBreakEvent`.

Returns | Description
--- | --- 
`boolean` | The art /
    public Art getArt();

    /** Set the art on this painting


---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

