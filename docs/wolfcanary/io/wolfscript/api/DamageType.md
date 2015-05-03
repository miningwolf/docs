## DamageType __enum__

>io.wolfscript.api.DamageType

---

### Enum Overview

DamageType enum

Item | Type   
--- | :--- 
THORNS: <br> _Damage cause by an anvil_ | DamageType
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
	

