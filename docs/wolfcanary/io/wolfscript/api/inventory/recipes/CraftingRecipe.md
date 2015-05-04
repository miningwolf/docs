## CraftingRecipe __class__

>io.wolfscript.api.inventory.recipes.CraftingRecipe

---

### Class Overview

Crafting recipe helper

Method | Type   
--- | :--- 
new __CraftingRecipe__(result) <br> _Constructs a new SHAPED CraftingRecipe_ | _constructor_
new __CraftingRecipe__(result) <br> _Constructs a new SHAPELESS CraftingRecipe_ | _constructor_
 readonly property __Items__ <br> _Get: If this is a shapeless recipe, get the [`Item`](../Item.md) array that makes up the recipe_ | `Item[]`
 readonly property __Result__ <br> _Get: Gets the [`Item`](../Item.md) result_ | [`Item`](../Item.md)
 readonly property __Rows__ <br> _Get: If this is a shaped recipe, gets the [`RecipeRow`](RecipeRow.md) array that makes up the shape_ | `RecipeRow[]`
static function __createShapedRecipe__(result) <br> _Constructs a new SHAPED CraftingRecipe. Provided for use by non-Java languages._ | [`CraftingRecipe`](CraftingRecipe.md)
static function __createShapelessRecipe__(result) <br> _Constructs a new SHAPELESS CraftingRecipe. Provided for use by non-Java languages._ | [`CraftingRecipe`](CraftingRecipe.md)
final function __equals__(obj) <br> _equals method_ | `boolean`
 function __hasShape__() <br> _Checks if this recipe has a shape_ | `boolean`



---

### Public Constructors for [`CraftingRecipe`](CraftingRecipe.md)

##### <a id='craftingrecipe'></a>new __CraftingRecipe__(result) 

_Constructs a new SHAPED CraftingRecipe_

Argument | Type | Description  
--- | --- | --- 
result | [`Item`](../Item.md) | the [`Item`](../Item.md) result of the recipe

##### <a id='craftingrecipe'></a>new __CraftingRecipe__(result) 

_Constructs a new SHAPELESS CraftingRecipe_

Argument | Type | Description  
--- | --- | --- 
result | [`Item`](../Item.md) | the [`Item`](../Item.md) result of the recipe

---

### Public Properties for [`CraftingRecipe`](CraftingRecipe.md)

##### <a id='items'></a>public  readonly property __Items__

_Get: If this is a shapeless recipe, get the [`Item`](../Item.md) array that makes up the recipe_

Get | Description
--- | --- 
`Item[]` | the items



##### <a id='result'></a>public  readonly property __Result__

_Get: Gets the [`Item`](../Item.md) result_

Get | Description
--- | --- 
[`Item`](../Item.md) | the [`Item`](../Item.md) result



##### <a id='rows'></a>public  readonly property __Rows__

_Get: If this is a shaped recipe, gets the [`RecipeRow`](RecipeRow.md) array that makes up the shape_

Get | Description
--- | --- 
`RecipeRow[]` | the rows



---

### Public Methods for [`CraftingRecipe`](CraftingRecipe.md)

##### <a id='createshapedrecipe'></a>public static function __createShapedRecipe__(result)

_Constructs a new SHAPED CraftingRecipe. Provided for use by non-Java languages._

Argument | Type | Description  
--- | --- | --- 
result | [`Item`](../Item.md) | the [`Item`](../Item.md) result of the recipe

Returns | 
--- | 
[`CraftingRecipe`](CraftingRecipe.md) |


##### <a id='createshapelessrecipe'></a>public static function __createShapelessRecipe__(result)

_Constructs a new SHAPELESS CraftingRecipe. Provided for use by non-Java languages._

Argument | Type | Description  
--- | --- | --- 
result | [`Item`](../Item.md) | the [`Item`](../Item.md) result of the recipe

Returns | 
--- | 
[`CraftingRecipe`](CraftingRecipe.md) |


##### <a id='equals'></a>public final function __equals__(obj)

_equals method_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | 
--- | 
`boolean` |


##### <a id='hasshape'></a>public  function __hasShape__()

_Checks if this recipe has a shape_

Returns | Description
--- | --- 
`boolean` | `true` if shaped; `false` if not


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

