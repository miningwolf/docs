## TargetReason __enum__

>io.wolfscript.event.entity.TargetReason

---

### Enum Overview

Called when a creature targets or untargets another entity /
public class EntityTargetEvent extends EntityEvent implements Cancellable {
    private static final HandlerList handlers = new HandlerList();
    private boolean cancel = false;
    private Entity target;
    private final TargetReason reason;

    public EntityTargetEvent(final Entity entity, final Entity target, final TargetReason reason) {
        super(entity);
        this.target = target;
        this.reason = reason;
    }

    public boolean isCancelled() {
        return cancel;
    }

    public void setCancelled(boolean cancel) {
        this.cancel = cancel;
    }

    /** Returns the reason for the targeting

Item | Type   
--- | :--- 
UNKNOWN: <br> _When the entity's target has died, and so it no longer targets it_ | TargetReason



---



###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

