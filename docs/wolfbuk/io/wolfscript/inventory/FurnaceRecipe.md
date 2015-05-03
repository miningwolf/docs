## FurnaceRecipe __class__

>io.wolfscript.inventory.FurnaceRecipe
>Implements [`Recipe`](Recipe.md)

---

### Class Overview

Represents a smelting recipe.

Method | Type   
--- | :--- 
 readonly property __Result__ <br> _Get: Create a furnace recipe to craft the specified ItemStack._ | `ItemStack`



---


### Public Properties for [`FurnaceRecipe`](FurnaceRecipe.md)

##### <a id='result'></a>public  readonly property __Result__

_Get: Create a furnace recipe to craft the specified ItemStack._

Get | Description
--- | --- 
`ItemStack` | The changed recipe, so you can chain calls. /
    public FurnaceRecipe setInput(MaterialData input) {
        return setInput(input.getItemType(), input.getData());
    }

    /** Sets the input of this furnace recipe.



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

