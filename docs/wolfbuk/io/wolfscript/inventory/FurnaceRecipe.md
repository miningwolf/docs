## FurnaceRecipe __class__

>io.wolfscript.inventory.FurnaceRecipe
>Implements [`Recipe`](Recipe.md)

---

### Class Overview

Represents a smelting recipe.

Method | Type   
--- | :--- 
new __FurnaceRecipe__(result, source) <br> _Create a furnace recipe to craft the specified ItemStack._ | _constructor_
new __FurnaceRecipe__(result, source) <br> _Create a furnace recipe to craft the specified ItemStack._ | _constructor_
 writeonly property __Input__ <br> _Get: Get the input material.<br>Set: Sets the input of this furnace recipe.<br>Set: Sets the input of this furnace recipe._ | `ItemStack`
 readonly property __Result__ <br> _Get: Get the result of this recipe._ | `ItemStack`
 writeonly property __Input__ <br> _Get: Get the input material.<br>Set: Sets the input of this furnace recipe.<br>Set: Sets the input of this furnace recipe._ | `ItemStack`



---

### Public Constructors for [`FurnaceRecipe`](FurnaceRecipe.md)

##### <a id='furnacerecipe'></a>new __FurnaceRecipe__(result, source) 

_Create a furnace recipe to craft the specified ItemStack._

Argument | Type | Description  
--- | --- | --- 
result | `ItemStack` | The item you want the recipe to create.
source | [`Material`](../Material.md) | The input material.

##### <a id='furnacerecipe'></a>new __FurnaceRecipe__(result, source) 

_Create a furnace recipe to craft the specified ItemStack._

Argument | Type | Description  
--- | --- | --- 
result | `ItemStack` | The item you want the recipe to create.
source | [`MaterialData`](../material/MaterialData.md) | The input material.

##### <a id='furnacerecipe'></a>new __FurnaceRecipe__(result, source, data) 
_Deprecated: Magic value_

_Create a furnace recipe to craft the specified ItemStack._

Argument | Type | Description  
--- | --- | --- 
result | `ItemStack` | The item you want the recipe to create.
source | [`Material`](../Material.md) | The input material.
data | `int` | The data value. (Note: This is currently ignored by the CraftWolfScript server.)

---

### Public Properties for [`FurnaceRecipe`](FurnaceRecipe.md)

##### <a id='input'></a>public  writeonly property __Input__

_Get: Get the input material.<br>Set: Sets the input of this furnace recipe.<br>Set: Sets the input of this furnace recipe._

Get | Description
--- | --- 
`ItemStack` | The changed recipe, so you can chain calls.

Set | Type | Description  
--- | --- | --- 
input | [`Material`](../Material.md) | The input material.


##### <a id='result'></a>public  readonly property __Result__

_Get: Get the result of this recipe._

Get | Description
--- | --- 
`ItemStack` | The resulting stack.



##### <a id='input'></a>public  writeonly property __Input__

_Get: Get the input material.<br>Set: Sets the input of this furnace recipe.<br>Set: Sets the input of this furnace recipe._

Get | Description
--- | --- 
`ItemStack` | The changed recipe, so you can chain calls.

Set | Type | Description  
--- | --- | --- 
input | [`Material`](../Material.md) | The input material.


---

### Public Methods for [`FurnaceRecipe`](FurnaceRecipe.md)

##### <a id='setinput'></a>public  function __setInput__(input, data)
_Deprecated: Magic value_

_Sets the input of this furnace recipe._

Argument | Type | Description  
--- | --- | --- 
input | [`Material`](../Material.md) | The input material.
data | `int` | The data value. (Note: This is currently ignored by the CraftWolfScript server.)

Returns | Description
--- | --- 
[`FurnaceRecipe`](FurnaceRecipe.md) | The changed recipe, so you can chain calls.


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

