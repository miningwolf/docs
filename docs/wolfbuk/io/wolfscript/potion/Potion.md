## Potion __class__

>io.wolfscript.potion.Potion

---

### Class Overview

Represents a minecraft potion

Method | Type   
--- | :--- 



---


### Public Properties for [`Potion`](Potion.md)

##### <a id='nameid'></a>public  readonly property __NameId__
_Deprecated: In favour of {@link #Potion(PotionType, int)} /    
    @Deprecated
    public Potion(PotionType type, Tier tier) {
        this(type, tier == Tier.TWO ? 2 : 1);
        Validate.notNull(type, "Type cannot be null");
    }

    /** In favour of {@link #Potion(PotionType, int, boolean)} /
    @Deprecated
    public Potion(PotionType type, Tier tier, boolean splash) {
        this(type, tier == Tier.TWO ? 2 : 1, splash);
    }

    /** In favour of {@link #Potion(PotionType, int, boolean, boolean)} /
    @Deprecated
    public Potion(PotionType type, Tier tier, boolean splash, boolean extended) {
        this(type, tier, splash);
        this.extended = extended;
    }

    /** Create a new potion of the given type and level. In favour of using {@link #Potion(PotionType)} with {@link #splash()}. /
    @Deprecated
    public Potion(PotionType type, int level, boolean splash) {
        this(type, level);
        this.splash = splash;
    }

    /** Create a new potion of the given type and level. In favour of using {@link #Potion(PotionType)} with {@link #extend()} and possibly {@link #splash()}. /
    @Deprecated
    public Potion(PotionType type, int level, boolean splash, boolean extended) {
        this(type, level, splash);
        this.extended = extended;
    }

    /** Create a potion with a specific name. In favour of {@link #setLevel(int)} /
    @Deprecated
    public void setTier(Tier tier) {
        Validate.notNull(tier, "tier cannot be null");
        this.level = (tier == Tier.TWO ? 2 : 1);
    }

    /** Sets the {@link io.wolfscript.potion.PotionType} of this potion. Magic value /
    @Deprecated
    public short toDamageValue() {
        short damage;
        if (type == PotionType.WATER) {
            return 0;
        } else if (type == null) {
            // Without this, mundanePotion.toDamageValue() would return 0
            damage = (short) (name == 0 ? 8192 : name);
        } else {
            damage = (short) (level - 1);
            damage <<= TIER_SHIFT;
            damage |= (short) type.getDamageValue();
        }
        if (splash) {
            damage |= SPLASH_BIT;
        }
        if (extended) {
            damage |= EXTENDED_BIT;
        }
        return damage;
    }

    /** Converts this potion to an {@link io.wolfscript.inventory.ItemStack} with the specified amount and a correct damage value. Magic value /
    @Deprecated
    public static Potion fromDamage(int damage) {
        PotionType type = PotionType.getByDamageValue(damage & POTION_BIT);
        Potion potion;
        if (type == null || type == PotionType.WATER) {
            potion = new Potion(damage & NAME_BIT);
        } else {
            int level = (damage & TIER_BIT) >> TIER_SHIFT;
            level++;
            potion = new Potion(type, level);
        }
        if ((damage & SPLASH_BIT) > 0) {
            potion = potion.splash();
        }
        if ((damage & EXTENDED_BIT) > 0) {
            potion = potion.extend();
        }
        return potion;
    }

    public static Potion fromItemStack(ItemStack item) {
        Validate.notNull(item, "item cannot be null");
        if (item.getType() != Material.POTION)
            throw new IllegalArgumentException("item is not a potion");
        return fromDamage(item.getDurability());
    }

    /** Returns an instance of {@link io.wolfscript.potion.PotionBrewer}. Magic value_

_Get: Construct a new potion of the given type. Unless the type is `PotionType#WATER`, it will be level one, without extended duration. Don't use this constructor to create a no-effect potion other than water bottle._

Get | Description
--- | --- 
`int` | The potion. /
    public Potion splash() {
        setSplash(true);
        return this;
    }

    /** Chain this to the constructor to extend the potion's duration.



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

