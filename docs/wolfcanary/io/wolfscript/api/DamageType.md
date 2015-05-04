## DamageType __enum__

>io.wolfscript.api.DamageType

---

### Enum Overview

DamageType enum

Item | Type   
--- | :--- 
ANVIL: <br> _Damage cause by an anvil_ | DamageType
ARROW: <br> _Damage cause by an arrow_ | DamageType
CACTUS: <br> _Damage caused by cactus (1)_ | DamageType
ENCHANTMENT: <br> _Damage caused by an enchantment_ | DamageType
EXPLOSION: <br> _Damage caused by explosion_ | DamageType
FALL: <br> _Damage caused from falling (fall distance - 3.0)_ | DamageType
FALLING_BLOCK: <br> _Damage caused from a falling block_ | DamageType
FIRE: <br> _Damage caused by fire (1)_ | DamageType
FIREBALL: <br> _Damage cause by a Fireball (Assuming Ghast Fireball)_ | DamageType
FIRE_TICK: <br> _Low periodic damage caused by burning (1)_ | DamageType
GENERIC: <br> _Typical Vanilla's /kill but could be used for other things_ | DamageType
LAVA: <br> _Damage caused from lava (4)_ | DamageType
LIGHTNINGBOLT: <br> _Damage caused from a lightning bolt_ | DamageType
MOB: <br> _Damage dealt by a Mob_ | DamageType
PLAYER: <br> _Damage caused by a Player_ | DamageType
POTION: <br> _Damage caused by poison (1) (Potions, Poison)_ | DamageType
STARVATION: <br> _Damage caused by starvation (1)_ | DamageType
SUFFOCATION: <br> _Damage caused by suffocating(1)_ | DamageType
THROWN: <br> _Damage caused by a thrown item (like a snowball)_ | DamageType
VOID: <br> _Damage caused from falling into the void_ | DamageType
WATER: <br> _Damage caused from drowning (2)_ | DamageType
WITHER: <br> _Damage caused from a Wither_ | DamageType
THORNS: <br> _Damage caused from thorns magic_ | DamageType
static function __fromDamageSource__(source) <br> _Damage cause by an anvil_ | [`DamageType`](DamageType.md)



---


### Public Methods for [`DamageType`](DamageType.md)

##### <a id='fromdamagesource'></a>public static function __fromDamageSource__(source)

_Damage cause by an anvil /
    ANVIL,
    //
    /** Damage cause by an arrow /
    ARROW,
    //
    /** Damage caused by cactus (1) /
    CACTUS,
    //
    /** Damage caused by an enchantment /
    ENCHANTMENT,
    //
    /** Damage caused by explosion /
    EXPLOSION,
    //
    /** Damage caused from falling (fall distance - 3.0) /
    FALL,
    //
    /** Damage caused from a falling block /
    FALLING_BLOCK,
    //
    /** Damage caused by fire (1) /
    FIRE,
    //
    /** Damage cause by a Fireball (Assuming Ghast Fireball) /
    FIREBALL,
    //
    /** Low periodic damage caused by burning (1) /
    FIRE_TICK,
    //
    /** Typical Vanilla's /kill but could be used for other things /
    GENERIC,
    //
    /** Damage caused from lava (4) /
    LAVA,
    //
    /** Damage caused from a lightning bolt /
    LIGHTNINGBOLT,
    /** Damage dealt by a Mob /
    MOB,
    //
    /** Damage caused by a Player /
    PLAYER,
    //
    /** Damage caused by poison (1) (Potions, Poison) /
    POTION,
    //
    /** Damage caused by starvation (1) /
    STARVATION,
    //
    /** Damage caused by suffocating(1) /
    SUFFOCATION,
    //
    /** Damage caused by a thrown item (like a snowball) /
    THROWN,
    //
    /** Damage caused from falling into the void /
    VOID,
    //
    /** Damage caused from drowning (2) /
    WATER,
    //
    /** Damage caused from a Wither /
    WITHER,
    //
    /** Damage caused from thorns magic /
    THORNS,
    //
    ;

    /** Gets the type from the [`DamageSource`](DamageSource.md)_

Argument | Type | Description  
--- | --- | --- 
source | [`DamageSource`](DamageSource.md) | the [`DamageSource`](DamageSource.md) to get the type for

Returns | Description
--- | --- 
[`DamageType`](DamageType.md) | the type of the [`DamageSource`](DamageSource.md) if valid; `null` if not


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

