## SmoothBrick __class__

>io.wolfscript.material.SmoothBrick
>Extends [`TexturedMaterial`](TexturedMaterial.md)

---

### Class Overview

Represents the different types of smooth bricks.

Method | Type   
--- | :--- 
new __SmoothBrick__() <br> _SmoothBrick constructor_ | _constructor_
 readonly property __Textures__ <br> _Textures property_ | `List<Material>`
 function __clone__() <br> _clone method_ | [`SmoothBrick`](SmoothBrick.md)
 |
__Inherited items from [`TexturedMaterial`](TexturedMaterial.md)__ |
new __TexturedMaterial__(m) <br> _TexturedMaterial constructor_ | _constructor_
 function __clone__() <br> _clone method_ | [`TexturedMaterial`](TexturedMaterial.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`







---

### Public Constructors for [`SmoothBrick`](SmoothBrick.md)

##### <a id='smoothbrick'></a>new __SmoothBrick__() 

_SmoothBrick constructor_


##### <a id='smoothbrick'></a>new __SmoothBrick__(Material, byte) 
_Deprecated: Magic value /
    @Deprecated
    public SmoothBrick(final int type) {
        super(type);
    }

    public SmoothBrick(final Material type) {
        super((textures.contains(type)) ? Material.SMOOTH_BRICK : type);
        if (textures.contains(type)) {
            setMaterial(type);
        }
    }

    /** Magic value /
    @Deprecated
    public SmoothBrick(final int type, final byte data) {
        super(type, data);
    }

    /** Magic value_

_SmoothBrick constructor_

Argument | Type | Description  
--- | --- | --- 
Material | `final` | Material argument
byte | `final` | byte argument

---

### Public Properties for [`SmoothBrick`](SmoothBrick.md)

##### <a id='textures'></a>public  readonly property __Textures__

_Textures property_

Get | 
--- | 
`List<Material>` |



---

### Public Methods for [`SmoothBrick`](SmoothBrick.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`SmoothBrick`](SmoothBrick.md) |


---
### Public Constructors for [`TexturedMaterial`](TexturedMaterial.md)

##### <a id='texturedmaterial'></a>new __TexturedMaterial__(m) 

_TexturedMaterial constructor_

Argument | Type | Description  
--- | --- | --- 
m | [`Material`](..\Material.md) | m argument

---

### Public Methods for [`TexturedMaterial`](TexturedMaterial.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`TexturedMaterial`](TexturedMaterial.md) |


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
	

