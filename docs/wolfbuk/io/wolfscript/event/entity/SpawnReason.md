## SpawnReason __enum__

>io.wolfscript.event.entity.SpawnReason

---

### Enum Overview

Called when a creature is spawned into a world. <p> If a Creature Spawn event is cancelled, the creature will not spawn. /
public class CreatureSpawnEvent extends EntityEvent implements Cancellable {
    private static final HandlerList handlers = new HandlerList();
    private boolean canceled;
    private final SpawnReason spawnReason;

    public CreatureSpawnEvent(final LivingEntity spawnee, final SpawnReason spawnReason) {
        super(spawnee);
        this.spawnReason = spawnReason;
    }

    @Deprecated
    public CreatureSpawnEvent(Entity spawnee, CreatureType type, Location loc, SpawnReason reason) {
        super(spawnee);
        spawnReason = reason;
    }

    public boolean isCancelled() {
        return canceled;
    }

    public void setCancelled(boolean cancel) {
        canceled = cancel;
    }

    @Override
    public LivingEntity getEntity() {
        return (LivingEntity) entity;
    }

    /** Gets the location at which the creature is spawning.

Item | Type   
--- | :--- 
CUSTOM: <br> _When something spawns from natural means_ | SpawnReason



---



###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

