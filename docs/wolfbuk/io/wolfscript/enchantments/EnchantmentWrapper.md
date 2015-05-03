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
static function __values__() <br> _Provides protection against environmental damage_ | `Enchantment[]`
static final var __LURE__ <br> _Provides protection against environmental damage_ | [`Enchantment`](Enchantment.md)





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

### Public Methods for [`Enchantment`](Enchantment.md)

##### <a id='values'></a>public static function __values__()

_Provides protection against environmental damage /
    public static final Enchantment PROTECTION_ENVIRONMENTAL = new EnchantmentWrapper(0);

    /** Provides protection against fire damage /
    public static final Enchantment PROTECTION_FIRE = new EnchantmentWrapper(1);

    /** Provides protection against fall damage /
    public static final Enchantment PROTECTION_FALL = new EnchantmentWrapper(2);

    /** Provides protection against explosive damage /
    public static final Enchantment PROTECTION_EXPLOSIONS = new EnchantmentWrapper(3);

    /** Provides protection against projectile damage /
    public static final Enchantment PROTECTION_PROJECTILE = new EnchantmentWrapper(4);

    /** Decreases the rate of air loss whilst underwater /
    public static final Enchantment OXYGEN = new EnchantmentWrapper(5);

    /** Increases the speed at which a player may mine underwater /
    public static final Enchantment WATER_WORKER = new EnchantmentWrapper(6);

    /** Damages the attacker /
    public static final Enchantment THORNS = new EnchantmentWrapper(7);

    /** Increases walking speed while in water /
    public static final Enchantment DEPTH_STRIDER = new EnchantmentWrapper(8);

    /** Increases damage against all targets /
    public static final Enchantment DAMAGE_ALL = new EnchantmentWrapper(16);

    /** Increases damage against undead targets /
    public static final Enchantment DAMAGE_UNDEAD = new EnchantmentWrapper(17);

    /** Increases damage against arthropod targets /
    public static final Enchantment DAMAGE_ARTHROPODS = new EnchantmentWrapper(18);

    /** All damage to other targets will knock them back when hit /
    public static final Enchantment KNOCKBACK = new EnchantmentWrapper(19);

    /** When attacking a target, has a chance to set them on fire /
    public static final Enchantment FIRE_ASPECT = new EnchantmentWrapper(20);

    /** Provides a chance of gaining extra loot when killing monsters /
    public static final Enchantment LOOT_BONUS_MOBS = new EnchantmentWrapper(21);

    /** Increases the rate at which you mine/dig /
    public static final Enchantment DIG_SPEED = new EnchantmentWrapper(32);

    /** Allows blocks to drop themselves instead of fragments (for example, stone instead of cobblestone) /
    public static final Enchantment SILK_TOUCH = new EnchantmentWrapper(33);

    /** Decreases the rate at which a tool looses durability /
    public static final Enchantment DURABILITY = new EnchantmentWrapper(34);

    /** Provides a chance of gaining extra loot when destroying blocks /
    public static final Enchantment LOOT_BONUS_BLOCKS = new EnchantmentWrapper(35);

    /** Provides extra damage when shooting arrows from bows /
    public static final Enchantment ARROW_DAMAGE = new EnchantmentWrapper(48);

    /** Provides a knockback when an entity is hit by an arrow from a bow /
    public static final Enchantment ARROW_KNOCKBACK = new EnchantmentWrapper(49);

    /** Sets entities on fire when hit by arrows shot from a bow /
    public static final Enchantment ARROW_FIRE = new EnchantmentWrapper(50);

    /** Provides infinite arrows when shooting a bow /
    public static final Enchantment ARROW_INFINITE = new EnchantmentWrapper(51);

    /** Decreases odds of catching worthless junk /
    public static final Enchantment LUCK = new EnchantmentWrapper(61);

    /** Increases rate of fish biting your hook /
    public static final Enchantment LURE = new EnchantmentWrapper(62);

    private static final Map<Integer, Enchantment> byId = new HashMap<Integer, Enchantment>();
    private static final Map<String, Enchantment> byName = new HashMap<String, Enchantment>();
    private static boolean acceptingNew = true;
    private final int id;

    public Enchantment(int id) {
        this.id = id;
    }

    /** Gets the unique ID of this enchantment_

Returns | Description
--- | --- 
`Enchantment[]` | Unique ID


---

### Public Fields for [`Enchantment`](Enchantment.md)

##### <a id='lure'></a>public static final var __LURE__

_Provides protection against environmental damage /
    public static final Enchantment PROTECTION_ENVIRONMENTAL = new EnchantmentWrapper(0);

    /** Provides protection against fire damage /
    public static final Enchantment PROTECTION_FIRE = new EnchantmentWrapper(1);

    /** Provides protection against fall damage /
    public static final Enchantment PROTECTION_FALL = new EnchantmentWrapper(2);

    /** Provides protection against explosive damage /
    public static final Enchantment PROTECTION_EXPLOSIONS = new EnchantmentWrapper(3);

    /** Provides protection against projectile damage /
    public static final Enchantment PROTECTION_PROJECTILE = new EnchantmentWrapper(4);

    /** Decreases the rate of air loss whilst underwater /
    public static final Enchantment OXYGEN = new EnchantmentWrapper(5);

    /** Increases the speed at which a player may mine underwater /
    public static final Enchantment WATER_WORKER = new EnchantmentWrapper(6);

    /** Damages the attacker /
    public static final Enchantment THORNS = new EnchantmentWrapper(7);

    /** Increases walking speed while in water /
    public static final Enchantment DEPTH_STRIDER = new EnchantmentWrapper(8);

    /** Increases damage against all targets /
    public static final Enchantment DAMAGE_ALL = new EnchantmentWrapper(16);

    /** Increases damage against undead targets /
    public static final Enchantment DAMAGE_UNDEAD = new EnchantmentWrapper(17);

    /** Increases damage against arthropod targets /
    public static final Enchantment DAMAGE_ARTHROPODS = new EnchantmentWrapper(18);

    /** All damage to other targets will knock them back when hit /
    public static final Enchantment KNOCKBACK = new EnchantmentWrapper(19);

    /** When attacking a target, has a chance to set them on fire /
    public static final Enchantment FIRE_ASPECT = new EnchantmentWrapper(20);

    /** Provides a chance of gaining extra loot when killing monsters /
    public static final Enchantment LOOT_BONUS_MOBS = new EnchantmentWrapper(21);

    /** Increases the rate at which you mine/dig /
    public static final Enchantment DIG_SPEED = new EnchantmentWrapper(32);

    /** Allows blocks to drop themselves instead of fragments (for example, stone instead of cobblestone) /
    public static final Enchantment SILK_TOUCH = new EnchantmentWrapper(33);

    /** Decreases the rate at which a tool looses durability /
    public static final Enchantment DURABILITY = new EnchantmentWrapper(34);

    /** Provides a chance of gaining extra loot when destroying blocks /
    public static final Enchantment LOOT_BONUS_BLOCKS = new EnchantmentWrapper(35);

    /** Provides extra damage when shooting arrows from bows /
    public static final Enchantment ARROW_DAMAGE = new EnchantmentWrapper(48);

    /** Provides a knockback when an entity is hit by an arrow from a bow /
    public static final Enchantment ARROW_KNOCKBACK = new EnchantmentWrapper(49);

    /** Sets entities on fire when hit by arrows shot from a bow /
    public static final Enchantment ARROW_FIRE = new EnchantmentWrapper(50);

    /** Provides infinite arrows when shooting a bow /
    public static final Enchantment ARROW_INFINITE = new EnchantmentWrapper(51);

    /** Decreases odds of catching worthless junk /
    public static final Enchantment LUCK = new EnchantmentWrapper(61);

    /** Increases rate of fish biting your hook_

>Returns
>  [`Enchantment`](Enchantment.md)

---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

