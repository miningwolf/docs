## CreateReason __enum__

>io.wolfscript.event.world.CreateReason

---

### Enum Overview

Called when a portal is created /
public class PortalCreateEvent extends WorldEvent implements Cancellable {
    private static final HandlerList handlers = new HandlerList();
    private boolean cancel = false;
    private final ArrayList<Block> blocks = new ArrayList<Block>();
    private CreateReason reason = CreateReason.FIRE;

    public PortalCreateEvent(final Collection<Block> blocks, final World world, CreateReason reason) {
        super(world);

        this.blocks.addAll(blocks);
        this.reason = reason;
    }

    /** Gets an array list of all the blocks associated with the created portal

Item | Type   
--- | :--- 
FIRE: <br> _When a portal is created 'traditionally' due to a portal frame_ | CreateReason



---



###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

