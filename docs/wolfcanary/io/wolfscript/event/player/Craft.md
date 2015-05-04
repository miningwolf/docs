## Craft __class__

>io.wolfscript.event.player.Craft
>Extends [`CancelableHook`](../../hook/CancelableHook.md)

---

### Class Overview

Craft Hook <p/> Called when a matching crafting recipe if found for a `Player` crafting

Method | Type   
--- | :--- 
new __Craft__(player, craftingMatrix, recipeResult) <br> _Creates a new Craft._ | _constructor_
 readonly property __CraftingMatrix__ <br> _Get: Returns the crafting inventory the player is working on._ | [`CraftingMatrix`](../../api/inventory/CraftingMatrix.md)
 readonly property __MatchingRecipe__ <br> _Get: Gets the recipe that matches the matrix_ | [`Recipe`](../../api/inventory/recipes/Recipe.md)
 readonly property __Player__ <br> _Get: Gets the crafting player._ | `Player`
  property __RecipeResult__ <br> _Get: Returns the recipe's result item.<br>Set: Sets the recipe's result._ | [`Item`](../../api/inventory/Item.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](../../hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](../../hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](../../hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](../../hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







---

### Public Constructors for [`Craft`](Craft.md)

##### <a id='craft'></a>new __Craft__(player, craftingMatrix, recipeResult) 

_Creates a new Craft._

Argument | Type | Description  
--- | --- | --- 
player | `Player` | The crafting player.
craftingMatrix | [`CraftingMatrix`](../../api/inventory/CraftingMatrix.md) | The crafting inventory used.
recipeResult | [`Item`](../../api/inventory/Item.md) | The recipe's result.

---

### Public Properties for [`Craft`](Craft.md)

##### <a id='craftingmatrix'></a>public  readonly property __CraftingMatrix__

_Get: Returns the crafting inventory the player is working on._

Get | Description
--- | --- 
[`CraftingMatrix`](../../api/inventory/CraftingMatrix.md) | The crafting inventory the player is working on.



##### <a id='matchingrecipe'></a>public  readonly property __MatchingRecipe__

_Get: Gets the recipe that matches the matrix_

Get | Description
--- | --- 
[`Recipe`](../../api/inventory/recipes/Recipe.md) | the matching [`Recipe`](../../api/inventory/recipes/Recipe.md)



##### <a id='player'></a>public  readonly property __Player__

_Get: Gets the crafting player._

Get | Description
--- | --- 
`Player` | The crafting player.



##### <a id='reciperesult'></a>public   property __RecipeResult__

_Get: Returns the recipe's result item.<br>Set: Sets the recipe's result._

Get | Description
--- | --- 
[`Item`](../../api/inventory/Item.md) | The recipe's result item.

Set | Type | Description  
--- | --- | --- 
recipeResult | [`Item`](../../api/inventory/Item.md) | The recipe's result.


---

### Public Methods for [`Craft`](Craft.md)

##### <a id='tostring'></a>public final function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Methods for [`CancelableHook`](../../hook/CancelableHook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`CancelableHook`](../../hook/CancelableHook.md) | this


##### <a id='iscanceled'></a>public  function __isCanceled__()

_isCanceled method_

Returns | 
--- | 
`boolean` |


##### <a id='setcanceled'></a>public  function __setCanceled__()

_setCanceled method_

Returns | 
--- | 
`void` |


---

### Public Properties for [`Hook`](../../hook/Hook.md)

##### <a id='hookname'></a>public final readonly property __HookName__

_Get: Get the name of this hook._

Get | Description
--- | --- 
`String` | simple class name



---

### Public Methods for [`Hook`](../../hook/Hook.md)

##### <a id='call'></a>public  function __call__()

_Calls a Hook if not already executed_

Returns | Description
--- | --- 
[`Hook`](../../hook/Hook.md) | this


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

