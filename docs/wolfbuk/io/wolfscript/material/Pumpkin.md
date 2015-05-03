## Pumpkin __class__

>io.wolfscript.material.Pumpkin
>Extends [`MaterialData`](MaterialData.md)
>Implements [`Directional`](Directional.md)

---

### Class Overview

Represents a pumpkin.

Method | Type   
--- | :--- 
new __Pumpkin__() <br> _Pumpkin constructor_ | _constructor_
 readonly property __Facing__ <br> _Facing property_ | [`BlockFace`](..\block\BlockFace.md)
 writeonly property __FacingDirection__ <br> _FacingDirection property_ | `void`
 function __clone__() <br> _clone method_ | [`Pumpkin`](Pumpkin.md)
 function __isLit__() <br> _isLit method_ | `boolean`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`Pumpkin`](Pumpkin.md)

##### <a id='pumpkin'></a>new __Pumpkin__() 

_Pumpkin constructor_


##### <a id='pumpkin'></a>new __Pumpkin__(Material, byte) 
_Deprecated: Magic value /
    @Deprecated
    public Pumpkin(final int type) {
        super(type);
    }

    public Pumpkin(final Material type) {
        super(type);
    }

    /** Magic value /
    @Deprecated
    public Pumpkin(final int type, final byte data) {
        super(type, data);
    }

    /** Magic value_

_Instantiate a pumpkin facing in a particular direction._

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`Pumpkin`](Pumpkin.md)

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

### Public Methods for [`Pumpkin`](Pumpkin.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Pumpkin`](Pumpkin.md) |


##### <a id='islit'></a>public  function __isLit__()

_isLit method_

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
	

