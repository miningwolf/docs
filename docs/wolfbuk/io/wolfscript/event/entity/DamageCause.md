## DamageCause __enum__

>io.wolfscript.event.entity.DamageCause

---

### Enum Overview

Stores data for damage events /
public class EntityDamageEvent extends EntityEvent implements Cancellable {
    private static final HandlerList handlers = new HandlerList();
    private static final DamageModifier[] MODIFIERS = DamageModifier.values();
    private static final Function<? super Double, Double> ZERO = Functions.constant(-0.0);
    private final Map<DamageModifier, Double> modifiers;
    private final Map<DamageModifier, ? extends Function<? super Double, Double>> modifierFunctions;
    private final Map<DamageModifier, Double> originals;
    private boolean cancelled;
    private final DamageCause cause;

    @Deprecated
    public EntityDamageEvent(final Entity damagee, final DamageCause cause, final int damage) {
        this(damagee, cause, (double) damage);
    }

    @Deprecated
    public EntityDamageEvent(final Entity damagee, final DamageCause cause, final double damage) {
        this(damagee, cause, new EnumMap<DamageModifier, Double>(ImmutableMap.of(DamageModifier.BASE, damage)), new EnumMap<DamageModifier, Function<? super Double, Double>>(ImmutableMap.of(DamageModifier.BASE, ZERO)));
    }

    public EntityDamageEvent(final Entity damagee, final DamageCause cause, final Map<DamageModifier, Double> modifiers, final Map<DamageModifier, ? extends Function<? super Double, Double>> modifierFunctions) {
        super(damagee);
        Validate.isTrue(modifiers.containsKey(DamageModifier.BASE), "BASE DamageModifier missing");
        Validate.isTrue(!modifiers.containsKey(null), "Cannot have null DamageModifier");
        Validate.noNullElements(modifiers.values(), "Cannot have null modifier values");
        Validate.isTrue(modifiers.keySet().equals(modifierFunctions.keySet()), "Must have a modifier function for each DamageModifier");
        Validate.noNullElements(modifierFunctions.values(), "Cannot have null modifier function");
        this.originals = new EnumMap<DamageModifier, Double>(modifiers);
        this.cause = cause;
        this.modifiers = modifiers;
        this.modifierFunctions = modifierFunctions;
    }

    public boolean isCancelled() {
        return cancelled;
    }

    public void setCancelled(boolean cancel) {
        cancelled = cancel;
    }

    /** Gets the original damage for the specified modifier, as defined at this event's construction.

Item | Type   
--- | :--- 
THORNS: <br> _Damage caused when an entity contacts a block such as a Cactus._ | DamageCause



---



###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

