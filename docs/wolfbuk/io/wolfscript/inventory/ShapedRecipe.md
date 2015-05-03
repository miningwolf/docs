## ShapedRecipe __class__

>io.wolfscript.inventory.ShapedRecipe
>Implements [`Recipe`](Recipe.md)

---

### Class Overview

Represents a shaped (ie normal) crafting recipe.

Method | Type   
--- | :--- 
 readonly property __Result__ <br> _Get: Create a shaped recipe to craft the specified ItemStack. The_ | `ItemStack`



---


### Public Properties for [`ShapedRecipe`](ShapedRecipe.md)

##### <a id='result'></a>public  readonly property __Result__

_Get: Create a shaped recipe to craft the specified ItemStack. The constructor merely determines the result and type; to set the actual recipe, you'll need to call the appropriate methods._

Get | Description
--- | --- 
`ItemStack` | The changed recipe, so you can chain calls. /
    public ShapedRecipe shape(final String... shape) {
        Validate.notNull(shape, "Must provide a shape");
        Validate.isTrue(shape.length > 0 && shape.length < 4, "Crafting recipes should be 1, 2, 3 rows, not ", shape.length);

        for (String row : shape) {
            Validate.notNull(row, "Shape cannot have null rows");
            Validate.isTrue(row.length() > 0 && row.length() < 4, "Crafting rows should be 1, 2, or 3 characters, not ", row.length());
        }
        this.rows = new String[shape.length];
        for (int i = 0; i < shape.length; i++) {
            this.rows[i] = shape[i];
        }

        // Remove character mappings for characters that no longer exist in the shape
        HashMap<Character, ItemStack> newIngredients = new HashMap<Character, ItemStack>();
        for (String row : shape) {
            for (Character c : row.toCharArray()) {
                newIngredients.put(c, ingredients.get(c));
            }
        }
        this.ingredients = newIngredients;

        return this;
    }

    /** Sets the material that a character in the recipe shape refers to.



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

