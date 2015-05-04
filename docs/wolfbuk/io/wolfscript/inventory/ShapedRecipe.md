## ShapedRecipe __class__

>io.wolfscript.inventory.ShapedRecipe
>Implements [`Recipe`](Recipe.md)

---

### Class Overview

Represents a shaped (ie normal) crafting recipe.

Method | Type   
--- | :--- 
new __ShapedRecipe__(result) <br> _Create a shaped recipe to craft the specified ItemStack. The_ | _constructor_
 readonly property __Result__ <br> _Get: Get the result._ | `ItemStack`
 readonly property __Shape__ <br> _Get: Get the shape._ | `String[]`
 function __setIngredient__(key, ingredient) <br> _Sets the material that a character in the recipe shape refers to._ | [`ShapedRecipe`](ShapedRecipe.md)
 function __setIngredient__(key, ingredient) <br> _Sets the material that a character in the recipe shape refers to._ | [`ShapedRecipe`](ShapedRecipe.md)
 function __shape__(String) <br> _Set the shape of this recipe to the specified rows. Each character_ | [`ShapedRecipe`](ShapedRecipe.md)



---

### Public Constructors for [`ShapedRecipe`](ShapedRecipe.md)

##### <a id='shapedrecipe'></a>new __ShapedRecipe__(result) 

_Create a shaped recipe to craft the specified ItemStack. The constructor merely determines the result and type; to set the actual recipe, you'll need to call the appropriate methods._

Argument | Type | Description  
--- | --- | --- 
result | `ItemStack` | The item you want the recipe to create.

---

### Public Properties for [`ShapedRecipe`](ShapedRecipe.md)

##### <a id='result'></a>public  readonly property __Result__

_Get: Get the result._

Get | Description
--- | --- 
`ItemStack` | The result stack.



##### <a id='shape'></a>public  readonly property __Shape__

_Get: Get the shape._

Get | Description
--- | --- 
`String[]` | The recipe's shape.



---

### Public Methods for [`ShapedRecipe`](ShapedRecipe.md)

##### <a id='setingredient'></a>public  function __setIngredient__(key, ingredient)

_Sets the material that a character in the recipe shape refers to._

Argument | Type | Description  
--- | --- | --- 
key | `char` | The character that represents the ingredient in the shape.
ingredient | [`MaterialData`](../material/MaterialData.md) | The ingredient.

Returns | Description
--- | --- 
[`ShapedRecipe`](ShapedRecipe.md) | The changed recipe, so you can chain calls.


##### <a id='setingredient'></a>public  function __setIngredient__(key, ingredient)

_Sets the material that a character in the recipe shape refers to._

Argument | Type | Description  
--- | --- | --- 
key | `char` | The character that represents the ingredient in the shape.
ingredient | [`Material`](../Material.md) | The ingredient.

Returns | Description
--- | --- 
[`ShapedRecipe`](ShapedRecipe.md) | The changed recipe, so you can chain calls.


##### <a id='setingredient'></a>public  function __setIngredient__(key, ingredient, raw)
_Deprecated: Magic value_

_Sets the material that a character in the recipe shape refers to._

Argument | Type | Description  
--- | --- | --- 
key | `char` | The character that represents the ingredient in the shape.
ingredient | [`Material`](../Material.md) | The ingredient.
raw | `int` | The raw material data as an integer.

Returns | Description
--- | --- 
[`ShapedRecipe`](ShapedRecipe.md) | The changed recipe, so you can chain calls.


##### <a id='shape'></a>public  function __shape__(String)

_Set the shape of this recipe to the specified rows. Each character represents a different ingredient; exactly what each character represents is set separately. The first row supplied corresponds with the upper most part of the recipe on the workbench e.g. if all three rows are supplies the first string represents the top row on the workbench._

Argument | Type | Description  
--- | --- | --- 
String | `final` | String argument

Returns | Description
--- | --- 
[`ShapedRecipe`](ShapedRecipe.md) | The changed recipe, so you can chain calls.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

