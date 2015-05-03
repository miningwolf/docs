## Furnace __class__

>io.wolfscript.material.Furnace
>Extends [`FurnaceAndDispenser`](FurnaceAndDispenser.md)

---

### Class Overview

Represents a furnace.

Method | Type   
--- | :--- 
new __Furnace__() <br> _Furnace constructor_ | _constructor_
 function __clone__() <br> _clone method_ | [`Furnace`](Furnace.md)
 |
__Inherited items from [`FurnaceAndDispenser`](FurnaceAndDispenser.md)__ |
 function __clone__() <br> _clone method_ | [`FurnaceAndDispenser`](FurnaceAndDispenser.md)
 |
__Inherited items from [`DirectionalContainer`](DirectionalContainer.md)__ |
 readonly property __Facing__ <br> _Facing property_ | [`BlockFace`](..\block\BlockFace.md)
 writeonly property __FacingDirection__ <br> _FacingDirection property_ | `void`
 function __clone__() <br> _clone method_ | [`DirectionalContainer`](DirectionalContainer.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`









---

### Public Constructors for [`Furnace`](Furnace.md)

##### <a id='furnace'></a>new __Furnace__() 

_Furnace constructor_


##### <a id='furnace'></a>new __Furnace__(Material, byte) 
_Deprecated: Magic value /
    @Deprecated
    public Furnace(final int type) {
        super(type);
    }

    public Furnace(final Material type) {
        super(type);
    }

    /** Magic value /
    @Deprecated
    public Furnace(final int type, final byte data) {
        super(type, data);
    }

    /** Magic value_

_Instantiate a furnace facing in a particular direction._

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Methods for [`Furnace`](Furnace.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`Furnace`](Furnace.md) |


---
### Public Constructors for [`FurnaceAndDispenser`](FurnaceAndDispenser.md)

##### <a id='furnaceanddispenser'></a>new __FurnaceAndDispenser__(Material, byte) 
_Deprecated: Magic value /
    @Deprecated
    public FurnaceAndDispenser(final int type) {
        super(type);
    }

    public FurnaceAndDispenser(final Material type) {
        super(type);
    }

    /** Magic value /
    @Deprecated
    public FurnaceAndDispenser(final int type, final byte data) {
        super(type, data);
    }

    /** Magic value_

_FurnaceAndDispenser constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Methods for [`FurnaceAndDispenser`](FurnaceAndDispenser.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`FurnaceAndDispenser`](FurnaceAndDispenser.md) |


---
### Public Constructors for [`DirectionalContainer`](DirectionalContainer.md)

##### <a id='directionalcontainer'></a>new __DirectionalContainer__(Material, byte) 
_Deprecated: Magic value /
    @Deprecated
    public DirectionalContainer(final int type) {
        super(type);
    }

    public DirectionalContainer(final Material type) {
        super(type);
    }

    /** Magic value /
    @Deprecated
    public DirectionalContainer(final int type, final byte data) {
        super(type, data);
    }

    /** Magic value_

_DirectionalContainer constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`DirectionalContainer`](DirectionalContainer.md)

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

### Public Methods for [`DirectionalContainer`](DirectionalContainer.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`DirectionalContainer`](DirectionalContainer.md) |


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


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

