## ChunkCreation __class__

>io.wolfscript.event.world.ChunkCreation
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

Chunk creation hook. Contains information about a new chunk being created.

Method | Type   
--- | :--- 
new __ChunkCreation__(x, z, dimension) <br> _ChunkCreation constructor_ | _constructor_
 readonly property __BiomeData__ <br> _Get: Gets the x coordinate of the chunk_ | `BiomeType[]`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---

### Public Constructors for [`ChunkCreation`](ChunkCreation.md)

##### <a id='chunkcreation'></a>new __ChunkCreation__(x, z, dimension) 

_ChunkCreation constructor_

Argument | Type | Description  
--- | --- | --- 
x | `int` | x argument
z | `int` | z argument
dimension | [`World`](..\..\api\world\World.md) | dimension argument

---

### Public Properties for [`ChunkCreation`](ChunkCreation.md)

##### <a id='biomedata'></a>public  readonly property __BiomeData__

_Get: Gets the x coordinate of the chunk_

Get | Description
--- | --- 
`BiomeType[]` | x coordinate. /
    public int getX() {
        return x;
    }

    /** Gets the z coordinate of the chunk



---

### Public Methods for [`ChunkCreation`](ChunkCreation.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`Hook`](..\..\hook\Hook.md)

##### <a id='call'></a>public  function __call__()

_Get the name of this hook._

Returns | Description
--- | --- 
[`Hook`](..\..\hook\Hook.md) | simple class name /
    public final String getHookName() {
        return getClass().getSimpleName();
    }

    @Override
    public int hashCode() {
        int hash = getClass().getSimpleName().length();

        return hash getClass().getSimpleName().hashCode() + 2;
    }

    /** Calls a Hook if not already executed


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

