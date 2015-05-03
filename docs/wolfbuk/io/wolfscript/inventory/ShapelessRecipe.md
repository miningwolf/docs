## ShapelessRecipe __class__

>io.wolfscript.inventory.ShapelessRecipe
>Implements [`Recipe`](Recipe.md)

---

### Class Overview

Represents a shapeless recipe, where the arrangement of the ingredients on the crafting grid does not matter.

Method | Type   
--- | :--- 
 readonly property __IngredientList__ <br> _Get: Create a shapeless recipe to craft the specified ItemStack. The_ | `List<ItemStack>`



---


### Public Properties for [`ShapelessRecipe`](ShapelessRecipe.md)

##### <a id='ingredientlist'></a>public  readonly property __IngredientList__

_Get: Create a shapeless recipe to craft the specified ItemStack. The constructor merely determines the result and type; to set the actual recipe, you'll need to call the appropriate methods._

Get | Description
--- | --- 
`List<ItemStack>` | The changed recipe, so you can chain calls. /
    public ShapelessRecipe addIngredient(MaterialData ingredient) {
        return addIngredient(1, ingredient);
    }

    /** Adds the specified ingredient.



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

