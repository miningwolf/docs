## MerchantRecipe __class__

>io.wolfscript.inventory.MerchantRecipe
>Implements [`Recipe`](Recipe.md)

---

### Class Overview

Represents a Villager's trade. Trades can take one or two ingredients, and provide one result. The ingredients' Itemstack amounts are respected in the trade. <br> A trade has a limited number of uses, after which the trade can no longer be used, unless the player uses a different trade, which will cause its maximum uses to increase. <br> A trade may or may not reward experience for being completed.

Method | Type   
--- | :--- 
new __MerchantRecipe__(result, maxUses) <br> _MerchantRecipe constructor_ | _constructor_
new __MerchantRecipe__(result, uses, maxUses, experienceReward) <br> _MerchantRecipe constructor_ | _constructor_
  property __Uses__ <br> _Get: Get the number of times this trade has been used.<br>Set: Set the number of times this trade has been used._ | `int`
 readonly property __Result__ <br> _Result property_ | `ItemStack`
  property __MaxUses__ <br> _Get: Get the maximum number of uses this trade has.<br>Set: Set the maximum number of uses this trade has._ | `int`
 readonly property __Ingredients__ <br> _Ingredients property_ | `List<ItemStack>`
 writeonly property __ExperienceReward__ <br> _Set: Set whether to reward experience for the trade._ | `void`
 function __addIngredient__(item) <br> _addIngredient method_ | `void`
 function __hasExperienceReward__() <br> _Whether to reward experience for the trade._ | `boolean`
 function __removeIngredient__(index) <br> _removeIngredient method_ | `void`
 function __setIngredients__() <br> _setIngredients method_ | `void`



---

### Public Constructors for [`MerchantRecipe`](MerchantRecipe.md)

##### <a id='merchantrecipe'></a>new __MerchantRecipe__(result, maxUses) 

_MerchantRecipe constructor_

Argument | Type | Description  
--- | --- | --- 
result | `ItemStack` | result argument
maxUses | `int` | maxUses argument

##### <a id='merchantrecipe'></a>new __MerchantRecipe__(result, uses, maxUses, experienceReward) 

_MerchantRecipe constructor_

Argument | Type | Description  
--- | --- | --- 
result | `ItemStack` | result argument
uses | `int` | uses argument
maxUses | `int` | maxUses argument
experienceReward | `boolean` | experienceReward argument

---

### Public Properties for [`MerchantRecipe`](MerchantRecipe.md)

##### <a id='uses'></a>public   property __Uses__

_Get: Get the number of times this trade has been used.<br>Set: Set the number of times this trade has been used._

Get | Description
--- | --- 
`int` | the number of uses

Set | Type | Description  
--- | --- | --- 
uses | `int` | the number of uses


##### <a id='result'></a>public  readonly property __Result__

_Result property_

Get | 
--- | 
`ItemStack` |



##### <a id='maxuses'></a>public   property __MaxUses__

_Get: Get the maximum number of uses this trade has. <br> The maximum uses of this trade may increase when a player trades with the owning villager.<br>Set: Set the maximum number of uses this trade has._

Get | Description
--- | --- 
`int` | the maximum number of uses

Set | Type | Description  
--- | --- | --- 
maxUses | `int` | the maximum number of time this trade can be used


##### <a id='ingredients'></a>public  readonly property __Ingredients__

_Ingredients property_

Get | 
--- | 
`List<ItemStack>` |



##### <a id='experiencereward'></a>public  writeonly property __ExperienceReward__

_Set: Set whether to reward experience for the trade._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
flag | `boolean` | whether to reward experience for completing this trade


---

### Public Methods for [`MerchantRecipe`](MerchantRecipe.md)

##### <a id='addingredient'></a>public  function __addIngredient__(item)

_addIngredient method_

Argument | Type | Description  
--- | --- | --- 
item | `ItemStack` | item argument

Returns | 
--- | 
`void` |


##### <a id='hasexperiencereward'></a>public  function __hasExperienceReward__()

_Whether to reward experience for the trade._

Returns | Description
--- | --- 
`boolean` | whether to reward experience for completing this trade


##### <a id='removeingredient'></a>public  function __removeIngredient__(index)

_removeIngredient method_

Argument | Type | Description  
--- | --- | --- 
index | `int` | index argument

Returns | 
--- | 
`void` |


##### <a id='setingredients'></a>public  function __setIngredients__()

_setIngredients method_

Returns | 
--- | 
`void` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

