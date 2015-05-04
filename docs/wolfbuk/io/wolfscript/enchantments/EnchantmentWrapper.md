## EnchantmentWrapper __class__

>io.wolfscript.enchantments.EnchantmentWrapper
>Extends [`Enchantment`](Enchantment.md)

---

### Class Overview

A simple wrapper for ease of selecting [`Enchantment`](Enchantment.md)s

Method | Type   
--- | :--- 
new __EnchantmentWrapper__(id) <br> _EnchantmentWrapper constructor_ | _constructor_
 readonly property __Enchantment__ <br> _Get: Gets the enchantment bound to this wrapper_ | [`Enchantment`](Enchantment.md)
 readonly property __ItemTarget__ <br> _ItemTarget property_ | [`EnchantmentTarget`](EnchantmentTarget.md)
 readonly property __MaxLevel__ <br> _MaxLevel property_ | `int`
 readonly property __Name__ <br> _Name property_ | `String`
 readonly property __StartLevel__ <br> _StartLevel property_ | `int`
 function __canEnchantItem__(item) <br> _canEnchantItem method_ | `boolean`
 function __conflictsWith__(other) <br> _conflictsWith method_ | `boolean`
 |
__Inherited items from [`Enchantment`](Enchantment.md)__ |
new __Enchantment__(id) <br> _Enchantment constructor_ | _constructor_
abstract readonly property __ItemTarget__ <br> _Get: Gets the type of `ItemStack` that may fit this Enchantment._ | [`EnchantmentTarget`](EnchantmentTarget.md)
abstract readonly property __MaxLevel__ <br> _Get: Gets the maximum level that this Enchantment may become._ | `int`
abstract readonly property __Name__ <br> _Get: Gets the unique name of this enchantment_ | `String`
abstract readonly property __StartLevel__ <br> _Get: Gets the level that this Enchantment should start at_ | `int`
 function __hashCode__() <br> _hashCode method_ | `int`
static function __getByName__(name) <br> _Gets the Enchantment at the specified name_ | [`Enchantment`](Enchantment.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
abstract function __conflictsWith__(other) <br> _Check if this enchantment conflicts with another enchantment._ | `boolean`
abstract function __canEnchantItem__(item) <br> _Checks if this Enchantment may be applied to the given {@link_ | `boolean`
static function __isAcceptingRegistrations__() <br> _Checks if this is accepting Enchantment registrations._ | `boolean`
static function __registerEnchantment__(enchantment) <br> _Registers an enchantment with the given ID and object._ | `void`
static function __stopAcceptingRegistrations__() <br> _Stops accepting any enchantment registrations_ | `void`
 function __toString__() <br> _toString method_ | `String`
static function __values__() <br> _Gets an array of all the registered [`Enchantment`](Enchantment.md)s_ | `Enchantment[]`
static final var __PROTECTION__ <br> _Provides protection against environmental damage_ | [`Enchantment`](Enchantment.md)
static final var __PROTECTION__ <br> _Provides protection against fire damage_ | [`Enchantment`](Enchantment.md)
static final var __PROTECTION__ <br> _Provides protection against fall damage_ | [`Enchantment`](Enchantment.md)
static final var __PROTECTION__ <br> _Provides protection against explosive damage_ | [`Enchantment`](Enchantment.md)
static final var __PROTECTION__ <br> _Provides protection against projectile damage_ | [`Enchantment`](Enchantment.md)
static final var __OXYGEN__ <br> _Decreases the rate of air loss whilst underwater_ | [`Enchantment`](Enchantment.md)
static final var __WATER__ <br> _Increases the speed at which a player may mine underwater_ | [`Enchantment`](Enchantment.md)
static final var __THORNS__ <br> _Damages the attacker_ | [`Enchantment`](Enchantment.md)
static final var __DEPTH__ <br> _Increases walking speed while in water_ | [`Enchantment`](Enchantment.md)
static final var __DAMAGE__ <br> _Increases damage against all targets_ | [`Enchantment`](Enchantment.md)
static final var __DAMAGE__ <br> _Increases damage against undead targets_ | [`Enchantment`](Enchantment.md)
static final var __DAMAGE__ <br> _Increases damage against arthropod targets_ | [`Enchantment`](Enchantment.md)
static final var __KNOCKBACK__ <br> _All damage to other targets will knock them back when hit_ | [`Enchantment`](Enchantment.md)
static final var __FIRE__ <br> _When attacking a target, has a chance to set them on fire_ | [`Enchantment`](Enchantment.md)
static final var __LOOT__ <br> _Provides a chance of gaining extra loot when killing monsters_ | [`Enchantment`](Enchantment.md)
static final var __DIG__ <br> _DIG field_ | [`Enchantment`](Enchantment.md)
static final var __SILK__ <br> _Allows blocks to drop themselves instead of fragments (for example,_ | [`Enchantment`](Enchantment.md)
static final var __DURABILITY__ <br> _Decreases the rate at which a tool looses durability_ | [`Enchantment`](Enchantment.md)
static final var __LOOT__ <br> _Provides a chance of gaining extra loot when destroying blocks_ | [`Enchantment`](Enchantment.md)
static final var __ARROW__ <br> _Provides extra damage when shooting arrows from bows_ | [`Enchantment`](Enchantment.md)
static final var __ARROW__ <br> _Provides a knockback when an entity is hit by an arrow from a bow_ | [`Enchantment`](Enchantment.md)
static final var __ARROW__ <br> _Sets entities on fire when hit by arrows shot from a bow_ | [`Enchantment`](Enchantment.md)
static final var __ARROW__ <br> _Provides infinite arrows when shooting a bow_ | [`Enchantment`](Enchantment.md)
static final var __LUCK__ <br> _Decreases odds of catching worthless junk_ | [`Enchantment`](Enchantment.md)
static final var __LURE__ <br> _Increases rate of fish biting your hook_ | [`Enchantment`](Enchantment.md)





---

### Public Constructors for [`EnchantmentWrapper`](EnchantmentWrapper.md)

##### <a id='enchantmentwrapper'></a>new __EnchantmentWrapper__(id) 

_EnchantmentWrapper constructor_

Argument | Type | Description  
--- | --- | --- 
id | `int` | id argument

---

### Public Properties for [`EnchantmentWrapper`](EnchantmentWrapper.md)

##### <a id='enchantment'></a>public  readonly property __Enchantment__

_Get: Gets the enchantment bound to this wrapper_

Get | Description
--- | --- 
[`Enchantment`](Enchantment.md) | Enchantment



##### <a id='itemtarget'></a>public  readonly property __ItemTarget__

_ItemTarget property_

Get | 
--- | 
[`EnchantmentTarget`](EnchantmentTarget.md) |



##### <a id='maxlevel'></a>public  readonly property __MaxLevel__

_MaxLevel property_

Get | 
--- | 
`int` |



##### <a id='name'></a>public  readonly property __Name__

_Name property_

Get | 
--- | 
`String` |



##### <a id='startlevel'></a>public  readonly property __StartLevel__

_StartLevel property_

Get | 
--- | 
`int` |



---

### Public Methods for [`EnchantmentWrapper`](EnchantmentWrapper.md)

##### <a id='canenchantitem'></a>public  function __canEnchantItem__(item)

_canEnchantItem method_

Argument | Type | Description  
--- | --- | --- 
item | `ItemStack` | item argument

Returns | 
--- | 
`boolean` |


##### <a id='conflictswith'></a>public  function __conflictsWith__(other)

_conflictsWith method_

Argument | Type | Description  
--- | --- | --- 
other | [`Enchantment`](Enchantment.md) | other argument

Returns | 
--- | 
`boolean` |


---
### Public Constructors for [`Enchantment`](Enchantment.md)

##### <a id='enchantment'></a>new __Enchantment__(id) 

_Enchantment constructor_

Argument | Type | Description  
--- | --- | --- 
id | `int` | id argument

---

### Public Properties for [`Enchantment`](Enchantment.md)

##### <a id='id'></a>public  readonly property __Id__
_Deprecated: Magic value_

_Get: Gets the unique ID of this enchantment_

Get | Description
--- | --- 
`int` | Unique ID



##### <a id='itemtarget'></a>public abstract readonly property __ItemTarget__

_Get: Gets the type of `ItemStack` that may fit this Enchantment._

Get | Description
--- | --- 
[`EnchantmentTarget`](EnchantmentTarget.md) | Target type of the Enchantment



##### <a id='maxlevel'></a>public abstract readonly property __MaxLevel__

_Get: Gets the maximum level that this Enchantment may become._

Get | Description
--- | --- 
`int` | Maximum level of the Enchantment



##### <a id='name'></a>public abstract readonly property __Name__

_Get: Gets the unique name of this enchantment_

Get | Description
--- | --- 
`String` | Unique name



##### <a id='startlevel'></a>public abstract readonly property __StartLevel__

_Get: Gets the level that this Enchantment should start at_

Get | Description
--- | --- 
`int` | Starting level of the Enchantment



---

### Public Methods for [`Enchantment`](Enchantment.md)

##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


##### <a id='getbyname'></a>public static function __getByName__(name)

_Gets the Enchantment at the specified name_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name to fetch

Returns | Description
--- | --- 
[`Enchantment`](Enchantment.md) | Resulting Enchantment, or null if not found


##### <a id='getbyid'></a>public static function __getById__(id)
_Deprecated: Magic value_

_Gets the Enchantment at the specified ID_

Argument | Type | Description  
--- | --- | --- 
id | `int` | ID to fetch

Returns | Description
--- | --- 
[`Enchantment`](Enchantment.md) | Resulting Enchantment, or null if not found


##### <a id='equals'></a>public  function __equals__(obj)

_equals method_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | 
--- | 
`boolean` |


##### <a id='conflictswith'></a>public abstract function __conflictsWith__(other)

_Check if this enchantment conflicts with another enchantment._

Argument | Type | Description  
--- | --- | --- 
other | [`Enchantment`](Enchantment.md) | The enchantment to check against

Returns | Description
--- | --- 
`boolean` | True if there is a conflict.


##### <a id='canenchantitem'></a>public abstract function __canEnchantItem__(item)

_Checks if this Enchantment may be applied to the given `ItemStack`. <p> This does not check if it conflicts with any enchantments already applied to the item._

Argument | Type | Description  
--- | --- | --- 
item | `ItemStack` | Item to test

Returns | Description
--- | --- 
`boolean` | True if the enchantment may be applied, otherwise False


##### <a id='isacceptingregistrations'></a>public static function __isAcceptingRegistrations__()

_Checks if this is accepting Enchantment registrations._

Returns | Description
--- | --- 
`boolean` | True if the server Implementation may add enchantments


##### <a id='registerenchantment'></a>public static function __registerEnchantment__(enchantment)

_Registers an enchantment with the given ID and object. <p> Generally not to be used from within a plugin._

Argument | Type | Description  
--- | --- | --- 
enchantment | [`Enchantment`](Enchantment.md) | Enchantment to register

Returns | 
--- | 
`void` |


##### <a id='stopacceptingregistrations'></a>public static function __stopAcceptingRegistrations__()

_Stops accepting any enchantment registrations_

Returns | 
--- | 
`void` |


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


##### <a id='values'></a>public static function __values__()

_Gets an array of all the registered [`Enchantment`](Enchantment.md)s_

Returns | Description
--- | --- 
`Enchantment[]` | Array of enchantments


---

### Public Fields for [`Enchantment`](Enchantment.md)

##### <a id='protection'></a>public static final var __PROTECTION__

_Provides protection against environmental damage_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='protection'></a>public static final var __PROTECTION__

_Provides protection against fire damage_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='protection'></a>public static final var __PROTECTION__

_Provides protection against fall damage_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='protection'></a>public static final var __PROTECTION__

_Provides protection against explosive damage_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='protection'></a>public static final var __PROTECTION__

_Provides protection against projectile damage_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='oxygen'></a>public static final var __OXYGEN__

_Decreases the rate of air loss whilst underwater_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='water'></a>public static final var __WATER__

_Increases the speed at which a player may mine underwater_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='thorns'></a>public static final var __THORNS__

_Damages the attacker_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='depth'></a>public static final var __DEPTH__

_Increases walking speed while in water_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='damage'></a>public static final var __DAMAGE__

_Increases damage against all targets_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='damage'></a>public static final var __DAMAGE__

_Increases damage against undead targets_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='damage'></a>public static final var __DAMAGE__

_Increases damage against arthropod targets_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='knockback'></a>public static final var __KNOCKBACK__

_All damage to other targets will knock them back when hit_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='fire'></a>public static final var __FIRE__

_When attacking a target, has a chance to set them on fire_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='loot'></a>public static final var __LOOT__

_Provides a chance of gaining extra loot when killing monsters_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='dig'></a>public static final var __DIG__

_DIG field_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='silk'></a>public static final var __SILK__

_Allows blocks to drop themselves instead of fragments (for example, stone instead of cobblestone)_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='durability'></a>public static final var __DURABILITY__

_Decreases the rate at which a tool looses durability_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='loot'></a>public static final var __LOOT__

_Provides a chance of gaining extra loot when destroying blocks_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='arrow'></a>public static final var __ARROW__

_Provides extra damage when shooting arrows from bows_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='arrow'></a>public static final var __ARROW__

_Provides a knockback when an entity is hit by an arrow from a bow_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='arrow'></a>public static final var __ARROW__

_Sets entities on fire when hit by arrows shot from a bow_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='arrow'></a>public static final var __ARROW__

_Provides infinite arrows when shooting a bow_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='luck'></a>public static final var __LUCK__

_Decreases odds of catching worthless junk_

>Returns
>  [`Enchantment`](Enchantment.md)

##### <a id='lure'></a>public static final var __LURE__

_Increases rate of fish biting your hook_

>Returns
>  [`Enchantment`](Enchantment.md)

---


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

