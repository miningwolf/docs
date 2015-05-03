## NetherWarts __class__

>io.wolfscript.material.NetherWarts
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents nether wart

Method | Type   
--- | :--- 
new __NetherWarts__() <br> _NetherWarts constructor_ | _constructor_
new __NetherWarts__(state) <br> _NetherWarts constructor_ | _constructor_
 writeonly property __State__ <br> _State property_ | `void`
 function __clone__() <br> _clone method_ | [`NetherWarts`](NetherWarts.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---

### Public Constructors for [`NetherWarts`](NetherWarts.md)

##### <a id='netherwarts'></a>new __NetherWarts__() 

_NetherWarts constructor_


##### <a id='netherwarts'></a>new __NetherWarts__(state) 

_NetherWarts constructor_

Argument | Type | Description  
--- | --- | --- 
state | [`NetherWartsState`](..\NetherWartsState.md) | state argument

---

### Public Properties for [`NetherWarts`](NetherWarts.md)

##### <a id='state'></a>public  writeonly property __State__

_State property_

Get | Description
--- | --- 
`void` | NetherWartsState of this nether wart /
    public NetherWartsState getState() {
        switch (getData()) {
            case 0:
                return NetherWartsState.SEEDED;
            case 1:
                return NetherWartsState.STAGE_ONE;
            case 2:
                return NetherWartsState.STAGE_TWO;
            default:
                return NetherWartsState.RIPE;
        }
    }

    /** Sets the growth state of this nether wart

Set | Type | Description  
--- | --- | --- 
state | [`NetherWartsState`](..\NetherWartsState.md) | New growth state of this nether wart


---

### Public Methods for [`NetherWarts`](NetherWarts.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`NetherWarts`](NetherWarts.md) |


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
	

