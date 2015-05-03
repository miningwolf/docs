## Banner __class__

>io.wolfscript.material.Banner
>Extends [`MaterialData`](MaterialData.md)
>Implements [`Attachable`](Attachable.md)

---

### Class Overview

class Banner

Method | Type   
--- | :--- 
new __Banner__() <br> _Banner constructor_ | _constructor_
new __Banner__(type) <br> _Banner constructor_ | _constructor_
 readonly property __AttachedFace__ <br> _AttachedFace property_ | [`BlockFace`](..\block\BlockFace.md)
 readonly property __Facing__ <br> _Facing property_ | [`BlockFace`](..\block\BlockFace.md)
 writeonly property __FacingDirection__ <br> _FacingDirection property_ | `void`
 function __clone__() <br> _clone method_ | [`Banner`](Banner.md)
 function __isWallBanner__() <br> _isWallBanner method_ | `boolean`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`Banner`](Banner.md)

##### <a id='banner'></a>new __Banner__() 

_Banner constructor_


##### <a id='banner'></a>new __Banner__(type) 

_Banner constructor_

Argument | Type | Description  
--- | --- | --- 
type | [`Material`](..\Material.md) | type argument

##### <a id='banner'></a>new __Banner__(type, data) 
_Deprecated: Magic value /
    @Deprecated
    public Banner(int type) {
        super(type);
    }

    /** Magic value /
    @Deprecated
    public Banner(Material type, byte data) {
        super(type, data);
    }

    /** Magic value_

_Banner constructor_

Argument | Type | Description  
--- | --- | --- 
type | `int` | the raw type id
data | `byte` | the raw data value

---

### Public Properties for [`Banner`](Banner.md)

##### <a id='attachedface'></a>public  readonly property __AttachedFace__

_AttachedFace property_

Get | 
--- | 
[`BlockFace`](..\block\BlockFace.md) |



##### <a id='facing'></a>public  readonly property __Facing__

_Facing property_

Get | 
--- | 
[`BlockFace`](..\block\BlockFace.md) |



##### <a id='facingdirection'></a>public  writeonly property __FacingDirection__

_FacingDirection property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
face | [`BlockFace`](..\block\BlockFace.md) | face argument


---

### Public Methods for [`Banner`](Banner.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Banner`](Banner.md) |


##### <a id='iswallbanner'></a>public  function __isWallBanner__()

_isWallBanner method_

Returns | 
--- | 
`boolean` |


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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

