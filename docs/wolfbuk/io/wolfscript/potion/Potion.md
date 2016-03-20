## Potion __class__

>io.wolfscript.potion.Potion

---

### Class Overview

Potion Adapter for pre-1.9 data values see @PotionMeta for 1.9+

Method | Type   
--- | :--- 
new __Potion__(type) <br> _Construct a new potion of the given type. Unless the type is {@link_ | _constructor_
new __Potion__(type, level) <br> _Create a new potion of the given type and level._ | _constructor_
 writeonly property __Splash__ <br> _Set: Sets whether this potion is a splash potion. Splash potions can be_ | `void`
 readonly property __Effects__ <br> _Get: Returns a collection of [`PotionEffect`](PotionEffect.md)s that this [`Potion`](Potion.md)_ | `Collection<PotionEffect>`
  property __Level__ <br> _Get: Returns the level of this potion.<br>Set: Sets the level of this potion._ | `int`
static readonly property __Brewer__ <br> _Get: Returns an instance of [`PotionBrewer`](PotionBrewer.md)._ | [`PotionBrewer`](PotionBrewer.md)
 readonly property __DamageBit__ <br> _DamageBit property_ | `int`
 writeonly property __HasExtendedDuration__ <br> _HasExtendedDuration property_ | `void`
  property __Type__ <br> _Get: Returns the [`PotionType`](PotionType.md) of this potion.<br>Set: Sets the [`PotionType`](PotionType.md) of this potion._ | [`PotionType`](PotionType.md)
static writeonly property __PotionBrewer__ <br> _Set: Sets the current instance of [`PotionBrewer`](PotionBrewer.md). Generally not to be_ | `void`
 function __apply__(to) <br> _Applies the effects of this potion to the given `ItemStack`. The_ | `void`
 function __apply__(to) <br> _Applies the effects that would be applied by this potion to the given_ | `void`
 function __equals__(obj) <br> _equals method_ | `boolean`
static function __fromItemStack__(item) <br> _fromItemStack method_ | [`Potion`](Potion.md)
static function __fromDamage__(damage) <br> _fromDamage method_ | [`Potion`](Potion.md)
static function __getByDamageBit__(damageBit) <br> _getByDamageBit method_ | `Tier`
 function __extend__() <br> _Chain this to the constructor to extend the potion's duration._ | [`Potion`](Potion.md)
 function __isSplash__() <br> _Returns whether this potion is a splash potion._ | `boolean`
 function __hasExtendedDuration__() <br> _Returns whether this potion has an extended duration._ | `boolean`
 function __hashCode__() <br> _hashCode method_ | `int`
 function __splash__() <br> _Chain this to the constructor to make the potion a splash potion._ | [`Potion`](Potion.md)
 function __toItemStack__(amount) <br> _Converts this potion to an `ItemStack` with the specified amount_ | `ItemStack`



---

### Public Constructors for [`Potion`](Potion.md)

##### <a id='potion'></a>new __Potion__(type) 

_Construct a new potion of the given type. Unless the type is `PotionType#WATER`, it will be level one, without extended duration. Don't use this constructor to create a no-effect potion other than water bottle._

Argument | Type | Description  
--- | --- | --- 
type | [`PotionType`](PotionType.md) | The potion type

##### <a id='potion'></a>new __Potion__(type, tier) 
_Deprecated: In favour of {@link #Potion(PotionType, int)}_

_Potion constructor_

Argument | Type | Description  
--- | --- | --- 
type | [`PotionType`](PotionType.md) | type argument
tier | `Tier` | tier argument

##### <a id='potion'></a>new __Potion__(type, tier, splash) 
_Deprecated: In favour of {@link #Potion(PotionType, int, boolean)}_

_Potion constructor_

Argument | Type | Description  
--- | --- | --- 
type | [`PotionType`](PotionType.md) | type argument
tier | `Tier` | tier argument
splash | `boolean` | splash argument

##### <a id='potion'></a>new __Potion__(type, tier, splash, extended) 
_Deprecated: In favour of {@link #Potion(PotionType, int, boolean, boolean)}_

_Potion constructor_

Argument | Type | Description  
--- | --- | --- 
type | [`PotionType`](PotionType.md) | type argument
tier | `Tier` | tier argument
splash | `boolean` | splash argument
extended | `boolean` | extended argument

##### <a id='potion'></a>new __Potion__(type, level) 

_Create a new potion of the given type and level._

Argument | Type | Description  
--- | --- | --- 
type | [`PotionType`](PotionType.md) | The type of potion.
level | `int` | The potion's level.

##### <a id='potion'></a>new __Potion__(type, level, splash) 
_Deprecated: In favour of using {@link #Potion(PotionType)} with {@link #splash()}._

_Create a new potion of the given type and level._

Argument | Type | Description  
--- | --- | --- 
type | [`PotionType`](PotionType.md) | The type of potion.
level | `int` | The potion's level.
splash | `boolean` | Whether it is a splash potion.

##### <a id='potion'></a>new __Potion__(type, level, splash, extended) 
_Deprecated: In favour of using {@link #Potion(PotionType)} with {@link #extend()} and possibly {@link #splash()}._

_Create a new potion of the given type and level._

Argument | Type | Description  
--- | --- | --- 
type | [`PotionType`](PotionType.md) | The type of potion.
level | `int` | The potion's level.
splash | `boolean` | Whether it is a splash potion.
extended | `boolean` | Whether it has an extended duration.

##### <a id='potion'></a>new __Potion__(name) 
_Deprecated_

_Potion constructor_

Argument | Type | Description  
--- | --- | --- 
name | `int` | name argument

---

### Public Properties for [`Potion`](Potion.md)

##### <a id='splash'></a>public  writeonly property __Splash__

_Set: Sets whether this potion is a splash potion. Splash potions can be thrown for a radius effect._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
isSplash | `boolean` | Whether this is a splash potion


##### <a id='nameid'></a>public  readonly property __NameId__
_Deprecated: Non-functional_

_NameId property_

Get | Description
--- | --- 
`int` | the name id



##### <a id='effects'></a>public  readonly property __Effects__

_Get: Returns a collection of [`PotionEffect`](PotionEffect.md)s that this [`Potion`](Potion.md) would confer upon a `LivingEntity`._

Get | Description
--- | --- 
`Collection<PotionEffect>` | The effects that this potion applies



##### <a id='level'></a>public   property __Level__

_Get: Returns the level of this potion.<br>Set: Sets the level of this potion._

Get | Description
--- | --- 
`int` | The level of this potion

Set | Type | Description  
--- | --- | --- 
level | `int` | The new level of this potion


##### <a id='brewer'></a>public static readonly property __Brewer__

_Get: Returns an instance of [`PotionBrewer`](PotionBrewer.md)._

Get | Description
--- | --- 
[`PotionBrewer`](PotionBrewer.md) | An instance of PotionBrewer



##### <a id='damagebit'></a>public  readonly property __DamageBit__

_DamageBit property_

Get | 
--- | 
`int` |



##### <a id='hasextendedduration'></a>public  writeonly property __HasExtendedDuration__

_HasExtendedDuration property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
isExtended | `boolean` | isExtended argument


##### <a id='tier'></a>public   property __Tier__
_Deprecated: In favour of {@link #setLevel(int)}_

_Get: Returns the `Tier` of this potion.<br>Set: Sets the `Tier` of this potion._

Get | 
--- | 
`Tier` |

Set | Type | Description  
--- | --- | --- 
tier | `Tier` | The new tier of this potion


##### <a id='type'></a>public   property __Type__

_Get: Returns the [`PotionType`](PotionType.md) of this potion.<br>Set: Sets the [`PotionType`](PotionType.md) of this potion._

Get | Description
--- | --- 
[`PotionType`](PotionType.md) | The type of this potion

Set | Type | Description  
--- | --- | --- 
type | [`PotionType`](PotionType.md) | The new type of this potion


##### <a id='potionbrewer'></a>public static writeonly property __PotionBrewer__

_Set: Sets the current instance of [`PotionBrewer`](PotionBrewer.md). Generally not to be used from within a plugin._

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
other | [`PotionBrewer`](PotionBrewer.md) | The new PotionBrewer


---

### Public Methods for [`Potion`](Potion.md)

##### <a id='apply'></a>public  function __apply__(to)

_Applies the effects of this potion to the given `ItemStack`. The ItemStack must be a potion._

Argument | Type | Description  
--- | --- | --- 
to | `ItemStack` | The itemstack to apply to

Returns | 
--- | 
`void` |


##### <a id='apply'></a>public  function __apply__(to)

_Applies the effects that would be applied by this potion to the given `LivingEntity`._

Argument | Type | Description  
--- | --- | --- 
to | `LivingEntity` | The entity to apply the effects to

Returns | 
--- | 
`void` |


##### <a id='equals'></a>public  function __equals__(obj)

_equals method_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | 
--- | 
`boolean` |


##### <a id='fromitemstack'></a>public static function __fromItemStack__(item)

_fromItemStack method_

Argument | Type | Description  
--- | --- | --- 
item | `ItemStack` | item argument

Returns | 
--- | 
[`Potion`](Potion.md) |


##### <a id='fromdamage'></a>public static function __fromDamage__(damage)

_fromDamage method_

Argument | Type | Description  
--- | --- | --- 
damage | `int` | the damage value

Returns | Description
--- | --- 
[`Potion`](Potion.md) | the produced potion


##### <a id='getbydamagebit'></a>public static function __getByDamageBit__(damageBit)

_getByDamageBit method_

Argument | Type | Description  
--- | --- | --- 
damageBit | `int` | damageBit argument

Returns | 
--- | 
`Tier` |


##### <a id='extend'></a>public  function __extend__()

_Chain this to the constructor to extend the potion's duration._

Returns | Description
--- | --- 
[`Potion`](Potion.md) | The potion.


##### <a id='issplash'></a>public  function __isSplash__()

_Returns whether this potion is a splash potion._

Returns | Description
--- | --- 
`boolean` | Whether this is a splash potion


##### <a id='hasextendedduration'></a>public  function __hasExtendedDuration__()

_Returns whether this potion has an extended duration._

Returns | Description
--- | --- 
`boolean` | Whether this potion has extended duration


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


##### <a id='splash'></a>public  function __splash__()

_Chain this to the constructor to make the potion a splash potion._

Returns | Description
--- | --- 
[`Potion`](Potion.md) | The potion.


##### <a id='todamagevalue'></a>public  function __toDamageValue__()
_Deprecated: Non-functional_

_Converts this potion to a valid potion damage short, usable for potion item stacks._

Returns | Description
--- | --- 
`short` | The damage value of this potion


##### <a id='toitemstack'></a>public  function __toItemStack__(amount)

_Converts this potion to an `ItemStack` with the specified amount and a correct damage value._

Argument | Type | Description  
--- | --- | --- 
amount | `int` | The amount of the ItemStack

Returns | Description
--- | --- 
`ItemStack` | The created ItemStack


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

