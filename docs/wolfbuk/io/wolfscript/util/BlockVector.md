## BlockVector __class__

>io.wolfscript.util.BlockVector
>Extends `Vector`

---

### Class Overview

A vector with a hash function that floors the X, Y, Z components, a la BlockVector in WorldEdit. BlockVectors can be used in hash sets and hash maps. Be aware that BlockVectors are mutable, but it is important that BlockVectors are never changed once put into a hash set or hash map.

Method | Type   
--- | :--- 
 function __clone__() <br> _Construct the vector with all components as 0._ | [`BlockVector`](BlockVector.md)
static function __deserialize__() <br> _deserialize method_ | [`BlockVector`](BlockVector.md)



---


### Public Methods for [`BlockVector`](BlockVector.md)

##### <a id='clone'></a>public  function __clone__()

_Construct the vector with all components as 0. /
    public BlockVector() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }

    /** Construct the vector with another vector._

Returns | Description
--- | --- 
[`BlockVector`](BlockVector.md) | whether the other object is equivalent /
    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof BlockVector)) {
            return false;
        }
        BlockVector other = (BlockVector) obj;

        return (int) other.getX() == (int) this.x && (int) other.getY() == (int) this.y && (int) other.getZ() == (int) this.z;

    }

    /** Returns a hash code for this vector.


##### <a id='deserialize'></a>public static function __deserialize__()

_deserialize method_

Returns | 
--- | 
[`BlockVector`](BlockVector.md) |


---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

