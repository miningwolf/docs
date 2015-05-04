## RegainReason __enum__

>io.wolfscript.event.entity.RegainReason

---

### Enum Overview

Stores data for health-regain events /
public class EntityRegainHealthEvent extends EntityEvent implements Cancellable {
    private static final HandlerList handlers = new HandlerList();
    private boolean cancelled;
    private double amount;
    private final RegainReason regainReason;

    @Deprecated
    public EntityRegainHealthEvent(final Entity entity, final int amount, final RegainReason regainReason) {
        this(entity, (double) amount, regainReason);
    }

    public EntityRegainHealthEvent(final Entity entity, final double amount, final RegainReason regainReason) {
        super(entity);
        this.amount = amount;
        this.regainReason = regainReason;
    }

    /** Gets the amount of regained health

Item | Type   
--- | :--- 
WITHER: <br> _When a player regains health from regenerating due to Peaceful mode_ | RegainReason



---



###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

