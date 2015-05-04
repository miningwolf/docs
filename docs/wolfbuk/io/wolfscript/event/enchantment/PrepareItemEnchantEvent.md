## PrepareItemEnchantEvent __class__

>io.wolfscript.event.enchantment.PrepareItemEnchantEvent
>Extends [`InventoryEvent`](../inventory/InventoryEvent.md)
>Implements [`Cancellable`](../Cancellable.md)

---

### Class Overview

Called when an ItemStack is inserted in an enchantment table - can be called multiple times

Method | Type   
--- | :--- 
new __PrepareItemEnchantEvent__(Player, view, Block, ItemStack, int, int) <br> _PrepareItemEnchantEvent constructor_ | _constructor_
 readonly property __EnchantBlock__ <br> _Get: Gets the block being used to enchant the item_ | [`Block`](../../block/Block.md)
 readonly property __Enchanter__ <br> _Get: Gets the player enchanting the item_ | `Player`
 readonly property __EnchantmentBonus__ <br> _Get: Get enchantment bonus in effect - corresponds to number of bookshelves_ | `int`
 readonly property __ExpLevelCostsOffered__ <br> _Get: Get list of offered exp level costs of the enchantment (modify values_ | `int[]`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Item__ <br> _Get: Gets the item to be enchanted (can be modified)_ | `ItemStack`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`InventoryEvent`](../inventory/InventoryEvent.md)__ |
new __InventoryEvent__(transaction) <br> _InventoryEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
 readonly property __Inventory__ <br> _Get: Gets the primary Inventory involved in this transaction_ | [`Inventory`](../../inventory/Inventory.md)
 readonly property __View__ <br> _Get: Gets the view object itself_ | [`InventoryView`](../../inventory/InventoryView.md)
 readonly property __Viewers__ <br> _Get: Gets the list of players viewing the primary (upper) inventory involved_ | `List<HumanEntity>`
 |
__Inherited items from [`Event`](../Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](../HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







---

### Public Constructors for [`PrepareItemEnchantEvent`](PrepareItemEnchantEvent.md)

##### <a id='prepareitemenchantevent'></a>new __PrepareItemEnchantEvent__(Player, view, Block, ItemStack, int, int) 

_PrepareItemEnchantEvent constructor_

Argument | Type | Description  
--- | --- | --- 
Player | `final` | Player argument
view | [`InventoryView`](../../inventory/InventoryView.md) | view argument
Block | `final` | Block argument
ItemStack | `final` | ItemStack argument
int | `final` | int argument
int | `final` | int argument

---

### Public Properties for [`PrepareItemEnchantEvent`](PrepareItemEnchantEvent.md)

##### <a id='enchantblock'></a>public  readonly property __EnchantBlock__

_Get: Gets the block being used to enchant the item_

Get | Description
--- | --- 
[`Block`](../../block/Block.md) | the block used for enchanting



##### <a id='enchanter'></a>public  readonly property __Enchanter__

_Get: Gets the player enchanting the item_

Get | Description
--- | --- 
`Player` | enchanting player



##### <a id='enchantmentbonus'></a>public  readonly property __EnchantmentBonus__

_Get: Get enchantment bonus in effect - corresponds to number of bookshelves_

Get | Description
--- | --- 
`int` | enchantment bonus



##### <a id='explevelcostsoffered'></a>public  readonly property __ExpLevelCostsOffered__

_Get: Get list of offered exp level costs of the enchantment (modify values to change offer)_

Get | Description
--- | --- 
`int[]` | experience level costs offered



##### <a id='handlerlist'></a>public static readonly property __HandlerList__

_HandlerList property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='item'></a>public  readonly property __Item__

_Get: Gets the item to be enchanted (can be modified)_

Get | Description
--- | --- 
`ItemStack` | ItemStack of item



##### <a id='cancelled'></a>public  writeonly property __Cancelled__

_Cancelled property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
cancel | `boolean` | cancel argument


---

### Public Methods for [`PrepareItemEnchantEvent`](PrepareItemEnchantEvent.md)

##### <a id='iscancelled'></a>public  function __isCancelled__()

_isCancelled method_

Returns | 
--- | 
`boolean` |


---
### Public Constructors for [`InventoryEvent`](../inventory/InventoryEvent.md)

##### <a id='inventoryevent'></a>new __InventoryEvent__(transaction) 

_InventoryEvent constructor_

Argument | Type | Description  
--- | --- | --- 
transaction | [`InventoryView`](../../inventory/InventoryView.md) | transaction argument

---

### Public Properties for [`InventoryEvent`](../inventory/InventoryEvent.md)

##### <a id='handlerlist'></a>public static readonly property __HandlerList__

_HandlerList property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='handlers'></a>public  readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



##### <a id='inventory'></a>public  readonly property __Inventory__

_Get: Gets the primary Inventory involved in this transaction_

Get | Description
--- | --- 
[`Inventory`](../../inventory/Inventory.md) | The upper inventory.



##### <a id='view'></a>public  readonly property __View__

_Get: Gets the view object itself_

Get | Description
--- | --- 
[`InventoryView`](../../inventory/InventoryView.md) | InventoryView



##### <a id='viewers'></a>public  readonly property __Viewers__

_Get: Gets the list of players viewing the primary (upper) inventory involved in this event_

Get | Description
--- | --- 
`List<HumanEntity>` | A list of people viewing.



---
### Public Constructors for [`Event`](../Event.md)

##### <a id='event'></a>new __Event__() 

_The default constructor is defined for cleaner code. This constructor assumes the event is synchronous._


##### <a id='event'></a>new __Event__(isAsync) 

_This constructor is used to explicitly declare an event as synchronous or asynchronous._

Argument | Type | Description  
--- | --- | --- 
isAsync | `boolean` | true indicates the event will fire asynchronously, false by default from default constructor

---

### Public Properties for [`Event`](../Event.md)

##### <a id='eventname'></a>public  readonly property __EventName__

_Get: Convenience method for providing a user-friendly identifier. By default, it is the event's class's {@linkplain Class#getSimpleName() simple name}._

Get | Description
--- | --- 
`String` | name of this event



##### <a id='handlers'></a>public abstract readonly property __Handlers__

_Handlers property_

Get | 
--- | 
[`HandlerList`](../HandlerList.md) |



---

### Public Methods for [`Event`](../Event.md)

##### <a id='isasynchronous'></a>public final function __isAsynchronous__()

_isAsynchronous method_

Returns | 
--- | 
`boolean` |


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

