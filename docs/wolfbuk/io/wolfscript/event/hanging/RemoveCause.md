## RemoveCause __enum__

>io.wolfscript.event.hanging.RemoveCause

---

### Enum Overview

Triggered when a hanging entity is removed /
public class HangingBreakEvent extends HangingEvent implements Cancellable {
    private static final HandlerList handlers = new HandlerList();
    private boolean cancelled;
    private final HangingBreakEvent.RemoveCause cause;

    public HangingBreakEvent(final Hanging hanging, final HangingBreakEvent.RemoveCause cause) {
        super(hanging);
        this.cause = cause;
    }

    /** Gets the cause for the hanging entity's removal

Item | Type   
--- | :--- 
DEFAULT: <br> _Removed by an entity_ | RemoveCause



---



###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

