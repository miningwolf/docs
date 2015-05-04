## PowerCause __enum__

>io.wolfscript.event.entity.PowerCause

---

### Enum Overview

Called when a Creeper is struck by lightning. <p> If a Creeper Power event is cancelled, the Creeper will not be powered. /
public class CreeperPowerEvent extends EntityEvent implements Cancellable {
    private static final HandlerList handlers = new HandlerList();
    private boolean canceled;
    private final PowerCause cause;
    private LightningStrike bolt;

    public CreeperPowerEvent(final Creeper creeper, final LightningStrike bolt, final PowerCause cause) {
        this(creeper, cause);
        this.bolt = bolt;
    }

    public CreeperPowerEvent(final Creeper creeper, final PowerCause cause) {
        super(creeper);
        this.cause = cause;
    }

    public boolean isCancelled() {
        return canceled;
    }

    public void setCancelled(boolean cancel) {
        canceled = cancel;
    }

    @Override
    public Creeper getEntity() {
        return (Creeper) entity;
    }

    /** Gets the lightning bolt which is striking the Creeper.

Item | Type   
--- | :--- 
SET_ON: <br> _Power change caused by a lightning bolt_ | PowerCause



---



###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

