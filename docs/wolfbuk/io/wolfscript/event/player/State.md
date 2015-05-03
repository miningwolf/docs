## State __enum__

>io.wolfscript.event.player.State

---

### Enum Overview

Thrown when a player is fishing /
public class PlayerFishEvent extends PlayerEvent implements Cancellable {
    private static final HandlerList handlers = new HandlerList();
    private final Entity entity;
    private boolean cancel = false;
    private int exp;
    private final State state;
    private final Fish hookEntity;

    /**

Item | Type   
--- | :--- 
FAILED_ATTEMPT: <br> _When a player is fishing, ie casting the line out._ | State



---



###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

