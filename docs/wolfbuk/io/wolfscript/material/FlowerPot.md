## FlowerPot __class__

>io.wolfscript.material.FlowerPot
>Extends [`MaterialData`](MaterialData.md)

---

### Class Overview

Represents a flower pot.

Method | Type   
--- | :--- 
 writeonly property __Contents__ <br> _Set: Default constructor for a flower pot._ | `void`
 function __clone__() <br> _clone method_ | [`FlowerPot`](FlowerPot.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`MaterialData`](MaterialData.md)__ |
 function __clone__() <br> _clone method_ | [`MaterialData`](MaterialData.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __toItemStack__(amount) <br> _toItemStack method_ | `ItemStack`
 function __toString__() <br> _toString method_ | `String`





---


### Public Properties for [`FlowerPot`](FlowerPot.md)

##### <a id='contents'></a>public  writeonly property __Contents__

_Set: Default constructor for a flower pot. /
    public FlowerPot() {
        super(Material.FLOWER_POT);
    }

    /**_

Get | Description
--- | --- 
`void` | material MaterialData for the block currently in the flower pot or null if empty /
    public MaterialData getContents() {
        switch (getData()) {
            case 1:
                return new MaterialData(Material.RED_ROSE);
            case 2:
                return new MaterialData(Material.YELLOW_FLOWER);
            case 3:
                return new Tree(TreeSpecies.GENERIC);
            case 4:
                return new Tree(TreeSpecies.REDWOOD);
            case 5:
                return new Tree(TreeSpecies.BIRCH);
            case 6:
                return new Tree(TreeSpecies.JUNGLE);
            case 7:
                return new MaterialData(Material.RED_MUSHROOM);
            case 8:
                return new MaterialData(Material.BROWN_MUSHROOM);
            case 9:
                return new MaterialData(Material.CACTUS);
            case 10:
                return new MaterialData(Material.DEAD_BUSH);
            case 11:
                return new LongGrass(GrassSpecies.FERN_LIKE);
            default:
                return null;
        }
    }

    /** Set the contents of the flower pot

Set | Type | Description  
--- | --- | --- 
materialData | [`MaterialData`](MaterialData.md) | MaterialData of the block to put in the flower pot.


---

### Public Methods for [`FlowerPot`](FlowerPot.md)

##### <a id='clone'></a>public  function __clone__()

_clone method_

Returns | 
--- | 
[`FlowerPot`](FlowerPot.md) |


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
	

