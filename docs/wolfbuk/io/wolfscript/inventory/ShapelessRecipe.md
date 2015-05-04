## ShapelessRecipe __class__

>io.wolfscript.inventory.ShapelessRecipe
>Implements [`Recipe`](Recipe.md)

---

### Class Overview

Represents a shapeless recipe, where the arrangement of the ingredients on the crafting grid does not matter.

Method | Type   
--- | :--- 
new __ShapelessRecipe__(result) <br> _Create a shapeless recipe to craft the specified ItemStack. The_ | _constructor_
 readonly property __IngredientList__ <br> _Get: Get the list of ingredients used for this recipe._ | `List<ItemStack>`
 readonly property __Result__ <br> _Get: Get the result of this recipe._ | `ItemStack`
 function __removeIngredient__(ingredient) <br> _Removes an ingredient from the list. If the ingredient occurs multiple_ | [`ShapelessRecipe`](ShapelessRecipe.md)
 function __addIngredient__(ingredient) <br> _Adds the specified ingredient._ | [`ShapelessRecipe`](ShapelessRecipe.md)
 function __addIngredient__(count, ingredient) <br> _Adds multiples of the specified ingredient._ | [`ShapelessRecipe`](ShapelessRecipe.md)
 function __addIngredient__(count, ingredient) <br> _Adds multiples of the specified ingredient._ | [`ShapelessRecipe`](ShapelessRecipe.md)
 function __addIngredient__(ingredient) <br> _Adds the specified ingredient._ | [`ShapelessRecipe`](ShapelessRecipe.md)
 function __removeIngredient__(ingredient) <br> _Removes an ingredient from the list. If the ingredient occurs multiple_ | [`ShapelessRecipe`](ShapelessRecipe.md)
 function __removeIngredient__(count, ingredient) <br> _Removes multiple instances of an ingredient from the list. If there are_ | [`ShapelessRecipe`](ShapelessRecipe.md)
 function __removeIngredient__(count, ingredient) <br> _Removes multiple instances of an ingredient from the list. If there are_ | [`ShapelessRecipe`](ShapelessRecipe.md)



---

### Public Constructors for [`ShapelessRecipe`](ShapelessRecipe.md)

##### <a id='shapelessrecipe'></a>new __ShapelessRecipe__(result) 

_Create a shapeless recipe to craft the specified ItemStack. The constructor merely determines the result and type; to set the actual recipe, you'll need to call the appropriate methods._

Argument | Type | Description  
--- | --- | --- 
result | `ItemStack` | The item you want the recipe to create.

---

### Public Properties for [`ShapelessRecipe`](ShapelessRecipe.md)

##### <a id='ingredientlist'></a>public  readonly property __IngredientList__

_Get: Get the list of ingredients used for this recipe._

Get | Description
--- | --- 
`List<ItemStack>` | The input list



##### <a id='result'></a>public  readonly property __Result__

_Get: Get the result of this recipe._

Get | Description
--- | --- 
`ItemStack` | The result stack.



---

### Public Methods for [`ShapelessRecipe`](ShapelessRecipe.md)

##### <a id='removeingredient'></a>public  function __removeIngredient__(ingredient)

_Removes an ingredient from the list. If the ingredient occurs multiple times, only one instance of it is removed. If the data value is -1, only ingredients with a -1 data value will be removed._

Argument | Type | Description  
--- | --- | --- 
ingredient | [`MaterialData`](../material/MaterialData.md) | The ingredient to remove

Returns | Description
--- | --- 
[`ShapelessRecipe`](ShapelessRecipe.md) | The changed recipe.


##### <a id='addingredient'></a>public  function __addIngredient__(ingredient)

_Adds the specified ingredient._

Argument | Type | Description  
--- | --- | --- 
ingredient | [`MaterialData`](../material/MaterialData.md) | The ingredient to add.

Returns | Description
--- | --- 
[`ShapelessRecipe`](ShapelessRecipe.md) | The changed recipe, so you can chain calls.


##### <a id='addingredient'></a>public  function __addIngredient__(ingredient, rawdata)
_Deprecated: Magic value_

_Adds the specified ingredient._

Argument | Type | Description  
--- | --- | --- 
ingredient | [`Material`](../Material.md) | The ingredient to add.
rawdata | `int` | The data value, or -1 to allow any data value.

Returns | Description
--- | --- 
[`ShapelessRecipe`](ShapelessRecipe.md) | The changed recipe, so you can chain calls.


##### <a id='addingredient'></a>public  function __addIngredient__(count, ingredient)

_Adds multiples of the specified ingredient._

Argument | Type | Description  
--- | --- | --- 
count | `int` | How many to add (can't be more than 9!)
ingredient | [`MaterialData`](../material/MaterialData.md) | The ingredient to add.

Returns | Description
--- | --- 
[`ShapelessRecipe`](ShapelessRecipe.md) | The changed recipe, so you can chain calls.


##### <a id='addingredient'></a>public  function __addIngredient__(count, ingredient)

_Adds multiples of the specified ingredient._

Argument | Type | Description  
--- | --- | --- 
count | `int` | How many to add (can't be more than 9!)
ingredient | [`Material`](../Material.md) | The ingredient to add.

Returns | Description
--- | --- 
[`ShapelessRecipe`](ShapelessRecipe.md) | The changed recipe, so you can chain calls.


##### <a id='addingredient'></a>public  function __addIngredient__(count, ingredient, rawdata)
_Deprecated: Magic value_

_Adds multiples of the specified ingredient._

Argument | Type | Description  
--- | --- | --- 
count | `int` | How many to add (can't be more than 9!)
ingredient | [`Material`](../Material.md) | The ingredient to add.
rawdata | `int` | The data value, or -1 to allow any data value.

Returns | Description
--- | --- 
[`ShapelessRecipe`](ShapelessRecipe.md) | The changed recipe, so you can chain calls.


##### <a id='addingredient'></a>public  function __addIngredient__(ingredient)

_Adds the specified ingredient._

Argument | Type | Description  
--- | --- | --- 
ingredient | [`Material`](../Material.md) | The ingredient to add.

Returns | Description
--- | --- 
[`ShapelessRecipe`](ShapelessRecipe.md) | The changed recipe, so you can chain calls.


##### <a id='removeingredient'></a>public  function __removeIngredient__(ingredient)

_Removes an ingredient from the list. If the ingredient occurs multiple times, only one instance of it is removed. Only removes exact matches, with a data value of 0._

Argument | Type | Description  
--- | --- | --- 
ingredient | [`Material`](../Material.md) | The ingredient to remove

Returns | Description
--- | --- 
[`ShapelessRecipe`](ShapelessRecipe.md) | The changed recipe.


##### <a id='removeingredient'></a>public  function __removeIngredient__(count, ingredient)

_Removes multiple instances of an ingredient from the list. If there are less instances then specified, all will be removed. Only removes exact matches, with a data value of 0._

Argument | Type | Description  
--- | --- | --- 
count | `int` | The number of copies to remove.
ingredient | [`Material`](../Material.md) | The ingredient to remove

Returns | Description
--- | --- 
[`ShapelessRecipe`](ShapelessRecipe.md) | The changed recipe.


##### <a id='removeingredient'></a>public  function __removeIngredient__(count, ingredient)

_Removes multiple instances of an ingredient from the list. If there are less instances then specified, all will be removed. If the data value is -1, only ingredients with a -1 data value will be removed._

Argument | Type | Description  
--- | --- | --- 
count | `int` | The number of copies to remove.
ingredient | [`MaterialData`](../material/MaterialData.md) | The ingredient to remove.

Returns | Description
--- | --- 
[`ShapelessRecipe`](ShapelessRecipe.md) | The changed recipe.


##### <a id='removeingredient'></a>public  function __removeIngredient__(ingredient, rawdata)
_Deprecated: Magic value_

_Removes an ingredient from the list. If the ingredient occurs multiple times, only one instance of it is removed. If the data value is -1, only ingredients with a -1 data value will be removed._

Argument | Type | Description  
--- | --- | --- 
ingredient | [`Material`](../Material.md) | The ingredient to remove
rawdata | `int` | The data value;

Returns | Description
--- | --- 
[`ShapelessRecipe`](ShapelessRecipe.md) | The changed recipe.


##### <a id='removeingredient'></a>public  function __removeIngredient__(count, ingredient, rawdata)
_Deprecated: Magic value_

_Removes multiple instances of an ingredient from the list. If there are less instances then specified, all will be removed. If the data value is -1, only ingredients with a -1 data value will be removed._

Argument | Type | Description  
--- | --- | --- 
count | `int` | The number of copies to remove.
ingredient | [`Material`](../Material.md) | The ingredient to remove.
rawdata | `int` | The data value.

Returns | Description
--- | --- 
[`ShapelessRecipe`](ShapelessRecipe.md) | The changed recipe.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

