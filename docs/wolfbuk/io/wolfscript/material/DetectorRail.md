## DetectorRail __class__

>io.wolfscript.material.DetectorRail
>Extends [`ExtendedRails`](ExtendedRails.md)
>Implements [`PressureSensor`](PressureSensor.md)

---

### Class Overview

Represents a detector rail

Method | Type   
--- | :--- 
new __DetectorRail__() <br> _DetectorRail constructor_ | _constructor_
 writeonly property __Pressed__ <br> _Pressed property_ | `void`
 function __clone__() <br> _clone method_ | [`DetectorRail`](DetectorRail.md)
 function __isPressed__() <br> _isPressed method_ | `boolean`
 |
__Inherited items from [`ExtendedRails`](ExtendedRails.md)__ |
 function __clone__() <br> _clone method_ | [`ExtendedRails`](ExtendedRails.md)
 function __setDirection__(face, isOnSlope) <br> _setDirection method_ | `void`
 |
__Inherited items from [`Rails`](Rails.md)__ |
new __Rails__() <br> _Rails constructor_ | _constructor_
 function __clone__() <br> _clone method_ | [`Rails`](Rails.md)
 function __setDirection__(face, isOnSlope) <br> _setDirection method_ | `void`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`









---

### Public Constructors for [`DetectorRail`](DetectorRail.md)

##### <a id='detectorrail'></a>new __DetectorRail__() 

_DetectorRail constructor_


##### <a id='detectorrail'></a>new __DetectorRail__(Material, byte) 
_Deprecated: Magic value /
    @Deprecated
    public DetectorRail(final int type) {
        super(type);
    }

    public DetectorRail(final Material type) {
        super(type);
    }

    /** Magic value /
    @Deprecated
    public DetectorRail(final int type, final byte data) {
        super(type, data);
    }

    /** Magic value_

_DetectorRail constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`DetectorRail`](DetectorRail.md)

##### <a id='pressed'></a>public  writeonly property __Pressed__

_Pressed property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
isPressed | `boolean` | isPressed argument


---

### Public Methods for [`DetectorRail`](DetectorRail.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`DetectorRail`](DetectorRail.md) |


##### <a id='ispressed'></a>public  function __isPressed__()

_isPressed method_

Returns | 
--- | 
`boolean` |


---

### Public Methods for [`ExtendedRails`](ExtendedRails.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`ExtendedRails`](ExtendedRails.md) |


##### <a id='setdirection'></a>public  function __setDirection__(face, isOnSlope)

_setDirection method_

Argument | Type | Description  
--- | --- | --- 
face | [`BlockFace`](..\block\BlockFace.md) | face argument
isOnSlope | `boolean` | isOnSlope argument

Returns | 
--- | 
`void` |


---
### Public Constructors for [`Rails`](Rails.md)

##### <a id='rails'></a>new __Rails__() 

_Rails constructor_


---

### Public Methods for [`Rails`](Rails.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Rails`](Rails.md) |


##### <a id='setdirection'></a>public  function __setDirection__(face, isOnSlope)

_setDirection method_

Argument | Type | Description  
--- | --- | --- 
face | [`BlockFace`](..\block\BlockFace.md) | the direction the track should be facing
isOnSlope | `boolean` | whether or not the track should be on a slope

Returns | Description
--- | --- 
`void` | the whether this track is set on a slope /
    public boolean isOnSlope() {
        byte d = getConvertedData();

        return (d == 0x2 || d == 0x3 || d == 0x4 || d == 0x5);
    }

    /**


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


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	
