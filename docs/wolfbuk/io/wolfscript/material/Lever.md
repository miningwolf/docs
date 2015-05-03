## Lever __class__

>io.wolfscript.material.Lever
>Extends [`SimpleAttachableMaterialData`](SimpleAttachableMaterialData.md)
>Implements [`Redstone`](Redstone.md)

---

### Class Overview

Represents a lever

Method | Type   
--- | :--- 
new __Lever__() <br> _Lever constructor_ | _constructor_
 writeonly property __FacingDirection__ <br> _FacingDirection property_ | `void`
 function __clone__() <br> _clone method_ | [`Lever`](Lever.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`SimpleAttachableMaterialData`](SimpleAttachableMaterialData.md)__ |
 readonly property __Facing__ <br> _Facing property_ | [`BlockFace`](..\block\BlockFace.md)
 function __clone__() <br> _clone method_ | [`SimpleAttachableMaterialData`](SimpleAttachableMaterialData.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`







---

### Public Constructors for [`Lever`](Lever.md)

##### <a id='lever'></a>new __Lever__() 

_Lever constructor_


---

### Public Properties for [`Lever`](Lever.md)

##### <a id='facingdirection'></a>public  writeonly property __FacingDirection__

_FacingDirection property_

Get | Description
--- | --- 
`void` | true if powered, otherwise false /
    public boolean isPowered() {
        return (getData() & 0x8) == 0x8;
    }

    /** Set this lever to be powered or not.

Set | Type | Description  
--- | --- | --- 
face | [`BlockFace`](..\block\BlockFace.md) | face argument


---

### Public Methods for [`Lever`](Lever.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Lever`](Lever.md) |


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---
### Public Constructors for [`SimpleAttachableMaterialData`](SimpleAttachableMaterialData.md)

##### <a id='simpleattachablematerialdata'></a>new __SimpleAttachableMaterialData__(type, data) 
_Deprecated: Magic value /
    @Deprecated
    public SimpleAttachableMaterialData(int type) {
        super(type);
    }

    public SimpleAttachableMaterialData(int type, BlockFace direction) {
        this(type);
        setFacingDirection(direction);
    }

    public SimpleAttachableMaterialData(Material type, BlockFace direction) {
        this(type);
        setFacingDirection(direction);
    }

    public SimpleAttachableMaterialData(Material type) {
        super(type);
    }

    /** Magic value /
    @Deprecated
    public SimpleAttachableMaterialData(int type, byte data) {
        super(type, data);
    }

    /** Magic value_

_SimpleAttachableMaterialData constructor_

Argument | Type | Description  
--- | --- | --- 
type | [`Material`](..\Material.md) | the raw type id
data | `byte` | the raw data value

---

### Public Properties for [`SimpleAttachableMaterialData`](SimpleAttachableMaterialData.md)

##### <a id='facing'></a>public  readonly property __Facing__

_Facing property_

Get | 
--- | 
[`BlockFace`](..\block\BlockFace.md) |



---

### Public Methods for [`SimpleAttachableMaterialData`](SimpleAttachableMaterialData.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`SimpleAttachableMaterialData`](SimpleAttachableMaterialData.md) |


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`MaterialData`](MaterialData.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`MaterialData`](MaterialData.md) |


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


##### <a id='toitemstack'></a>public  function __toItemStack__(amount)

_toItemStack method_

Argument | Type | Description  
--- | --- | --- 
amount | `int` | The stack size of the new stack

Returns | Description
--- | --- 
`ItemStack` | Raw data


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

