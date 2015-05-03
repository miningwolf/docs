## IgniteCause __enum__

>io.wolfscript.event.block.IgniteCause

---

### Enum Overview

Called when a block is ignited. If you want to catch when a Player places fire, you need to use [`BlockPlaceEvent`](BlockPlaceEvent.md). <p> If a Block Ignite event is cancelled, the block will not be ignited. /
public class BlockIgniteEvent extends BlockEvent implements Cancellable {
    private static final HandlerList handlers = new HandlerList();
    private final IgniteCause cause;
    private final Entity ignitingEntity;
    private final Block ignitingBlock;
    private boolean cancel;

    @Deprecated
    public BlockIgniteEvent(final Block theBlock, final IgniteCause cause, final Player thePlayer) {
        this(theBlock, cause, (Entity) thePlayer);
    }

    public BlockIgniteEvent(final Block theBlock, final IgniteCause cause, final Entity ignitingEntity) {
        this(theBlock, cause, ignitingEntity, null);
    }

    public BlockIgniteEvent(final Block theBlock, final IgniteCause cause, final Block ignitingBlock) {
        this(theBlock, cause, null, ignitingBlock);
    }

    public BlockIgniteEvent(final Block theBlock, final IgniteCause cause, final Entity ignitingEntity, final Block ignitingBlock) {
        super(theBlock);
        this.cause = cause;
        this.ignitingEntity = ignitingEntity;
        this.ignitingBlock = ignitingBlock;
        this.cancel = false;
    }

    public boolean isCancelled() {
        return cancel;
    }

    public void setCancelled(boolean cancel) {
        this.cancel = cancel;
    }

    /** Gets the cause of block ignite.

Item | Type   
--- | :--- 
EXPLOSION: <br> _Block ignition caused by lava._ | IgniteCause



---



###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

