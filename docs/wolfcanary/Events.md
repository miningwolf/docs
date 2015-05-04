## WolfScript Events Summary

### Event.command Events
Event | Title 
--- | --- 
[`command.CommandBlockCommandEvent`](#command-commandblockcommandevent) | CommandBlockCommandEvent
[`command.ConsoleCommandEvent`](#command-consolecommandevent) | Server command event. Contains the command issued by the server
[`command.PlayerCommandEvent`](#command-playercommandevent) | Player command event. Contains a player and a command String Array

### Event.entity Events
Event | Title 
--- | --- 
[`entity.ChickenLayEggEvent`](#entity-chickenlayeggevent) | Chicken lay egg event, called when a chicken lay an egg.
[`entity.DamageEvent`](#entity-damageevent) | Damage event. Contains information about an entity taking damage.
[`entity.DimensionSwitchEvent`](#entity-dimensionswitchevent) | Dimension switch event. Contains information about an entity changeing
[`entity.EndermanDropBlockEvent`](#entity-endermandropblockevent) | Enderman drop block event. Contains information about an Enderman dropping a block.
[`entity.EndermanPickupBlockEvent`](#entity-endermanpickupblockevent) | Enderman pick up block event. Contains information about an Enderman picking up a block
[`entity.EntityDeathEvent`](#entity-entitydeathevent) | class EntityDeathEvent
[`entity.EntityDespawnEvent`](#entity-entitydespawnevent) | Entity despawn event. Contains information about an entity despawning.
[`entity.EntityLightningStruckEvent`](#entity-entitylightningstruckevent) | class EntityLightningStruckEvent
[`entity.EntityMountEvent`](#entity-entitymountevent) | Called when one entity is trying to mount another
[`entity.EntityMoveEvent`](#entity-entitymoveevent) | class EntityMoveEvent
[`entity.EntitySpawnEvent`](#entity-entityspawnevent) | Entity spawn event. Contains information about an entity spawning.
[`entity.EntityTameEvent`](#entity-entitytameevent) | Entity tame event
[`entity.HangingEntityDestroyEvent`](#entity-hangingentitydestroyevent) | HangingEntity destroy event. Contains information about a painting or item frame being destroyed.
[`entity.ItemTouchGroundEvent`](#entity-itemtouchgroundevent) | ItemTouchGroundEvent
[`entity.MinecartActivateEvent`](#entity-minecartactivateevent) | MinecartActivateEvent
[`entity.MobTargetEvent`](#entity-mobtargetevent) | class MobTargetEvent
[`entity.PotionEffectAppliedEvent`](#entity-potioneffectappliedevent) | PotionEffectAppliedEvent
[`entity.PotionEffectFinishEvent`](#entity-potioneffectfinishevent) | PotionEffectFinishEvent
[`entity.ProjectileHitEvent`](#entity-projectilehitevent) | ProjectileHitEvent
[`entity.SlimeSplitEvent`](#entity-slimesplitevent) | Slime split event, Contains information about a slime split.
[`entity.VehicleCollisionEvent`](#entity-vehiclecollisionevent) | Is called when a vehicle collides with a LivingEntity
[`entity.VehicleDamageEvent`](#entity-vehicledamageevent) | Vehicle Damage event. Contains information about a vehicle receiving damage.
[`entity.VehicleDestroyEvent`](#entity-vehicledestroyevent) | VehicleDestoryHook
[`entity.VehicleEnterEvent`](#entity-vehicleenterevent) | Is called when a LivingEntity enters a vehicle
[`entity.VehicleExitEvent`](#entity-vehicleexitevent) | Is called when a LivingEntity exits a vehicle
[`entity.VehicleMoveEvent`](#entity-vehiclemoveevent) | Is called when a LivingEntity moves a vehicle
[`entity.VillagerTradeUnlockEvent`](#entity-villagertradeunlockevent) | VillagerTradeUnlock event

### Event.player Events
Event | Title 
--- | --- 
[`player.AnvilUseEvent`](#player-anviluseevent) | class AnvilUseEvent
[`player.ArmorBrokenEvent`](#player-armorbrokenevent) | Called when a piece of Armor has been destroyed
[`player.ArmorStandModifyEvent`](#player-armorstandmodifyevent) | class ArmorStandModifyEvent
[`player.BanEvent`](#player-banevent) | Ban event. Contains information about an issued Ban
[`player.BedEnterEvent`](#player-bedenterevent) | Bed enter event, called when a player enters a bed
[`player.BedExitEvent`](#player-bedexitevent) | Bed exit event, called when a player leaves a bed
[`player.BlockDestroyEvent`](#player-blockdestroyevent) | Called when a player destroy a block
[`player.BlockLeftClickEvent`](#player-blockleftclickevent) | Left click event. Contains information about a Player left clicking.
[`player.BlockPlaceEvent`](#player-blockplaceevent) | Is called when a player right-clicks a block, eg. uses it.
[`player.BlockRightClickEvent`](#player-blockrightclickevent) | Is called when a player right-clicks a block, eg. uses it.
[`player.BookEditEvent`](#player-bookeditevent) | Called when a `humanoid.Player` edits a Book [`inventory.Item`](#inventory-item)
[`player.ChatEvent`](#player-chatevent) | Chat event. Contains player, prefix, message and receivers information
[`player.ConnectionEvent`](#player-connectionevent) | Connection event. Contains information about a player connecting.
[`player.CraftEvent`](#player-craftevent) | class CraftEvent
[`player.DisconnectionEvent`](#player-disconnectionevent) | Disconnection event. Contains information about a `humanoid.Player` disconnecting.
[`player.EatEvent`](#player-eatevent) | class EatEvent
[`player.EnchantEvent`](#player-enchantevent) | Enchant event. Contains information about a player enchanting an item.
[`player.EntityRightClickEvent`](#player-entityrightclickevent) | Is called when a player right-clicks an entity, for instance a villager for trading or a vehicle for entering
[`player.ExperienceEvent`](#player-experienceevent) | Experience event. Contains information about player experience changes.
[`player.FoodExhaustionEvent`](#player-foodexhaustionevent) | Food exhaustion change event. Contains information about a player's food exhaustion changes
[`player.FoodLevelEvent`](#player-foodlevelevent) | Food level event. Contains information about a player's food level changes
[`player.FoodSaturationEvent`](#player-foodsaturationevent) | Food saturation change event. Contains information about a player's food saturation changes
[`player.GameModeChangeEvent`](#player-gamemodechangeevent) | Called when a `humanoid.Player` changes GameModes
[`player.HealthChangeEvent`](#player-healthchangeevent) | Health Change event
[`player.HeldItemChangeEvent`](#player-helditemchangeevent) | Held item change event. Contains information about a player's held slot changes
[`player.InventoryEvent`](#player-inventoryevent) | Inventory event. Contains information about a player either opening or closing an inventory
[`player.ItemDropEvent`](#player-itemdropevent) | Item Hook. Contains EntityItem and Player
[`player.ItemFrameRotateEvent`](#player-itemframerotateevent) | Called when a `humanoid.Player` rotates an [`inventory.Item`](#inventory-item) in an [`hanging.ItemFrame`](#hanging-itemframe)
[`player.ItemFrameSetItemEvent`](#player-itemframesetitemevent) | Called when an `humanoid.Player` sets and [`inventory.Item`](#inventory-item) in a [`hanging.ItemFrame`](#hanging-itemframe)
[`player.ItemPickupEvent`](#player-itempickupevent) | Item Hook. Contains EntityItem and Player
[`player.ItemUseEvent`](#player-itemuseevent) | Item use event. Called when a `humanoid.Player` uses an [`inventory.Item`](#inventory-item)
[`player.KickEvent`](#player-kickevent) | Kick event. Contains the player who was kicked and the MessageReceiver who kicked them
[`player.LevelUpEvent`](#player-levelupevent) | LevelUp event. Called when a `humanoid.Player` levels up
[`player.PlayerArmSwingEvent`](#player-playerarmswingevent) | Player Left Click Hook
[`player.PlayerDeathEvent`](#player-playerdeathevent) | Player Death event
[`player.PlayerIdleEvent`](#player-playeridleevent) | class PlayerIdleEvent
[`player.PlayerListEvent`](#player-playerlistevent) | class PlayerListEvent
[`player.PlayerMoveEvent`](#player-playermoveevent) | Player move event. Contains information about a player's movement
[`player.PlayerRespawnedEvent`](#player-playerrespawnedevent) | Player respawned event. Contains the reference to the freshly spawned player entity
[`player.PlayerRespawningEvent`](#player-playerrespawningevent) | Player pre-respawn event.
[`player.PortalUseEvent`](#player-portaluseevent) | PortalUse Hook
[`player.PreConnectionEvent`](#player-preconnectionevent) | Login checks event. Comes with ip, name and a kickReason that is to be returned,
[`player.ReturnFromIdleEvent`](#player-returnfromidleevent) | Called when the Player is no longer idle
[`player.SignChangeEvent`](#player-signchangeevent) | Sign Change event. Contains information about a sign either being changed by a player
[`player.SignShowEvent`](#player-signshowevent) | Sign Change event. Contains information about a sign shown to a player
[`player.SlotClickEvent`](#player-slotclickevent) | class SlotClickEvent
[`player.StatGainedEvent`](#player-statgainedevent) | StatGainedEvent
[`player.TeleportEvent`](#player-teleportevent) | Teleport event. Contains player who is teleporting and their destination
[`player.ToolBrokenEvent`](#player-toolbrokenevent) | class ToolBrokenEvent
[`player.VillagerTradeEvent`](#player-villagertradeevent) | VillagerTrade Hook

### Event.system Events
Event | Title 
--- | --- 
[`system.LoadWorldEvent`](#system-loadworldevent) | class LoadWorldEvent
[`system.PermissionCheckEvent`](#system-permissioncheckevent) | This event is called after the PermissionProvider has resolved the permission,
[`system.PluginDisableEvent`](#system-plugindisableevent) | Called when a plugin is disabled
[`system.PluginEnableEvent`](#system-pluginenableevent) | Called when a plugin is enabled.
[`system.ServerGuiStartEvent`](#system-serverguistartevent) | Called when a GUI is started
[`system.ServerListPingEvent`](#system-serverlistpingevent) | Called when a client ping the server
[`system.ServerShutdownEvent`](#system-servershutdownevent) | Server shutdown event. Contains information about the reason the server is
[`system.ServerTickEvent`](#system-servertickevent) | Called in the servers tick loop, before world processing.
[`system.UnloadWorldEvent`](#system-unloadworldevent) | Called before a world is unloaded.

### Event.world Events
Event | Title 
--- | --- 
[`world.BlockDropXpEvent`](#world-blockdropxpevent) | Event thrown when a block that drop experience (spawner, ore, redstone ore) is destroyed
[`world.BlockGrowEvent`](#world-blockgrowevent) | Called when a block "grows"
[`world.BlockPhysicsEvent`](#world-blockphysicsevent) | Block physics event. Contains information about a block's physics being updated.
[`world.BlockUpdateEvent`](#world-blockupdateevent) | Block update event. Contains information about a block updating.
[`world.ChunkCreatedEvent`](#world-chunkcreatedevent) | Chunk created event
[`world.ChunkCreationEvent`](#world-chunkcreationevent) | Chunk creation event. Contains information about a new chunk being created.
[`world.ChunkLoadedEvent`](#world-chunkloadedevent) | Chunk created event
[`world.ChunkUnloadEvent`](#world-chunkunloadevent) | Chunk unload event
[`world.DecorateEvent`](#world-decorateevent) | Called when decorating terrain with trees, glowstone etc.
[`world.DispenseEvent`](#world-dispenseevent) | Dispense event. Contains information about a Dispenser dispensing an entity.
[`world.ExplosionEvent`](#world-explosionevent) | Explosion event. Contains information about an explosion.
[`world.FireworkExplodeEvent`](#world-fireworkexplodeevent) | class FireworkExplodeEvent
[`world.FlowEvent`](#world-flowevent) | Flow event. Contains information about a liquid flowing from one block to another
[`world.HopperTransferEvent`](#world-hoppertransferevent) | Hook parameter for when Hoppers Transfer Items
[`world.IgnitionEvent`](#world-ignitionevent) | Ignition event. Contains information about a [`blocks.Block`](#blocks-block) being set on fire.
[`world.LeafDecayEvent`](#world-leafdecayevent) | Block update event. Contains information about a block updating.
[`world.LightningStrikeEvent`](#world-lightningstrikeevent) | class LightningStrikeEvent
[`world.LiquidDestroyEvent`](#world-liquiddestroyevent) | Is called when a liquid is about to destroy something (crops, popping off torches etc)
[`world.NoteBlockPlayEvent`](#world-noteblockplayevent) | Called when a [`blocks.NoteBlock`](#blocks-noteblock) is played
[`world.PistonExtendEvent`](#world-pistonextendevent) | Piston Extend Hook
[`world.PistonRetractEvent`](#world-pistonretractevent) | Piston Retract event
[`world.PortalCreateEvent`](#world-portalcreateevent) | class PortalCreateEvent
[`world.PortalDestroyEvent`](#world-portaldestroyevent) | class PortalDestroyEvent
[`world.RedstoneChangeEvent`](#world-redstonechangeevent) | RedstoneChange event. Contains information about power flowing from one block to another
[`world.SmeltBeginEvent`](#world-smeltbeginevent) | class SmeltBeginEvent
[`world.SmeltEvent`](#world-smeltevent) | class SmeltEvent
[`world.TNTActivateEvent`](#world-tntactivateevent) | class TNTActivateEvent
[`world.TimeChangeEvent`](#world-timechangeevent) | Time Change event
[`world.TreeGrowEvent`](#world-treegrowevent) | class TreeGrowEvent
[`world.WeatherChangeEvent`](#world-weatherchangeevent) | WeatherChange Hook
 
## Wolfscript.event. Events

## <a id='system-permissioncheckevent'></a>__Event__ system.PermissionCheckEvent

This event is called after the PermissionProvider has resolved the permission, to alter the final outcome and eventually temporary allow a permission to a player

``` javascript
this.on('system.PermissionCheckEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Permission__ <br> _Get: Gets the permission that was checked_ | `String`
  property __Result__ <br> _Get: Get the result of the check.<br>Set: Override the final result for the permission check_ | `boolean`
 readonly property __Subject__ <br> _Get: Get the MessageReceiver for whom the permission check was issued_ | [`MessageReceiver`](io/wolfscript/chat/MessageReceiver.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`system.PermissionCheckEvent`](io/wolfscript/event/system/PermissionCheckEvent.md)

---

## <a id='world-dispenseevent'></a>__Event__ world.DispenseEvent

Dispense event. Contains information about a Dispenser dispensing an entity.

``` javascript
this.on('world.DispenseEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Dispenser__ <br> _Get: Gets the [`Dispenser`](io/wolfscript/api/world/blocks/Dispenser.md)_ | [`Dispenser`](io/wolfscript/api/world/blocks/Dispenser.md)
 readonly property __Entity__ <br> _Get: Gets the [`Entity`](io/wolfscript/api/entity/Entity.md) being dispensed_ | [`Entity`](io/wolfscript/api/entity/Entity.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.DispenseEvent`](io/wolfscript/event/world/DispenseEvent.md)

---

## <a id='player-blockdestroyevent'></a>__Event__ player.BlockDestroyEvent

Called when a player destroy a block

``` javascript
this.on('player.BlockDestroyEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Block__ <br> _Get: Get the [`Block`](io/wolfscript/api/world/blocks/Block.md) the `Player` is left clicking_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __Player__ <br> _Get: Gets the `Player` clicking_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.BlockDestroyEvent`](io/wolfscript/event/player/BlockDestroyEvent.md)

---

## <a id='player-itemframerotateevent'></a>__Event__ player.ItemFrameRotateEvent

Called when a `humanoid.Player` rotates an [`inventory.Item`](io/wolfscript/api/inventory/Item.md) in an [`hanging.ItemFrame`](io/wolfscript/api/entity/hanging/ItemFrame.md)

``` javascript
this.on('player.ItemFrameRotateEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __CurrentRotation__ <br> _CurrentRotation property_ | `int`
final readonly property __ItemFrame__ <br> _Get: Gets the [`ItemFrame`](io/wolfscript/api/entity/hanging/ItemFrame.md) being interacted with_ | [`ItemFrame`](io/wolfscript/api/entity/hanging/ItemFrame.md)
  property __NewRotation__ <br> _Get: Gets the new rotation that the [`Item`](io/wolfscript/api/inventory/Item.md) in the [`ItemFrame`](io/wolfscript/api/entity/hanging/ItemFrame.md) will be at.<br>Set: Sets the new rotation._ | `int`
final readonly property __Player__ <br> _Get: Gets the `Player` interacting with the [`ItemFrame`](io/wolfscript/api/entity/hanging/ItemFrame.md)_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.ItemFrameRotateEvent`](io/wolfscript/event/player/ItemFrameRotateEvent.md)

---

## <a id='player-playermoveevent'></a>__Event__ player.PlayerMoveEvent

Player move event. Contains information about a player's movement

``` javascript
this.on('player.PlayerMoveEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __From__ <br> _Get: Gets the from [`Location`](io/wolfscript/api/world/position/Location.md)_ | [`Location`](io/wolfscript/api/world/position/Location.md)
 readonly property __Player__ <br> _Get: Gets the `Player`_ | `Player`
 readonly property __To__ <br> _Get: Gets the to [`Location`](io/wolfscript/api/world/position/Location.md) (same as player's location)_ | [`Location`](io/wolfscript/api/world/position/Location.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.PlayerMoveEvent`](io/wolfscript/event/player/PlayerMoveEvent.md)

---

## <a id='entity-damageevent'></a>__Event__ entity.DamageEvent

Damage event. Contains information about an entity taking damage.

``` javascript
this.on('entity.DamageEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Attacker__ <br> _Get: Gets the attacking [`EntityLiving`](io/wolfscript/api/entity/living/EntityLiving.md) if present_ | [`Entity`](io/wolfscript/api/entity/Entity.md)
  property __DamageDealt__ <br> _Get: Gets the amount of damage dealt<br>Set: Sets the amount of damage dealt_ | `float`
  property __DamageSource__ <br> _Get: Gets the [`DamageSource`](io/wolfscript/api/DamageSource.md) type<br>Set: Sets the [`DamageSource`](io/wolfscript/api/DamageSource.md)_ | [`DamageSource`](io/wolfscript/api/DamageSource.md)
 readonly property __Defender__ <br> _Get: Gets the defending [`Entity`](io/wolfscript/api/entity/Entity.md)_ | [`Entity`](io/wolfscript/api/entity/Entity.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.DamageEvent`](io/wolfscript/event/entity/DamageEvent.md)

---

## <a id='player-gamemodechangeevent'></a>__Event__ player.GameModeChangeEvent

Called when a `humanoid.Player` changes GameModes

``` javascript
this.on('player.GameModeChangeEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __NewMode__ <br> _Get: Gets the new (changing to) [`GameMode`](io/wolfscript/api/GameMode.md)_ | [`GameMode`](io/wolfscript/api/GameMode.md)
 readonly property __OldMode__ <br> _Get: Gets the old (current) [`GameMode`](io/wolfscript/api/GameMode.md)_ | [`GameMode`](io/wolfscript/api/GameMode.md)
 readonly property __Player__ <br> _Get: Gets the `Player` changing modes_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.GameModeChangeEvent`](io/wolfscript/event/player/GameModeChangeEvent.md)

---

## <a id='player-blockrightclickevent'></a>__Event__ player.BlockRightClickEvent

Is called when a player right-clicks a block, eg. uses it.

``` javascript
this.on('player.BlockRightClickEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __BlockClicked__ <br> _Get: Get the [`Block`](io/wolfscript/api/world/blocks/Block.md) that was clicked._ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __Player__ <br> _Get: Get the `Player` who clicked the [`Block`](io/wolfscript/api/world/blocks/Block.md)_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.BlockRightClickEvent`](io/wolfscript/event/player/BlockRightClickEvent.md)

---

## <a id='world-weatherchangeevent'></a>__Event__ world.WeatherChangeEvent

WeatherChange Hook

``` javascript
this.on('world.WeatherChangeEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __World__ <br> _Get: Gets the [`World`](io/wolfscript/api/world/World.md) of the change_ | [`World`](io/wolfscript/api/world/World.md)
 function __isThunderChange__() <br> _Checks if it's a thunder change or rain change_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 function __turningOn__() <br> _Checks if weather is turning on or off_ | `boolean`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.WeatherChangeEvent`](io/wolfscript/event/world/WeatherChangeEvent.md)

---

## <a id='player-armorbrokenevent'></a>__Event__ player.ArmorBrokenEvent

Called when a piece of Armor has been destroyed

``` javascript
this.on('player.ArmorBrokenEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Armor__ <br> _Armor property_ | [`Item`](io/wolfscript/api/inventory/Item.md)
 readonly property __Player__ <br> _Get: Gets the `Player` who's armor has broken_ | `Player`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.ArmorBrokenEvent`](io/wolfscript/event/player/ArmorBrokenEvent.md)

---

## <a id='command-playercommandevent'></a>__Event__ command.PlayerCommandEvent

Player command event. Contains a player and a command String Array

``` javascript
this.on('command.PlayerCommandEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Command__ <br> _Get: Get command that was issued by the `Player`_ | `String[]`
 readonly property __Player__ <br> _Get: Get the `Player` who issued this command_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`command.PlayerCommandEvent`](io/wolfscript/event/command/PlayerCommandEvent.md)

---

## <a id='player-foodexhaustionevent'></a>__Event__ player.FoodExhaustionEvent

Food exhaustion change event. Contains information about a player's food exhaustion changes

``` javascript
this.on('player.FoodExhaustionEvent', function (e) { });
```

Method | Type   
--- | :---: 
  property __NewValue__ <br> _Get: Gets the new exhaustion level<br>Set: Sets the new value to actually be set_ | `float`
 readonly property __OldValue__ <br> _Get: Gets the old (current) exhaustion level_ | `float`
 readonly property __Player__ <br> _Get: Gets the `Player` who's food exhaustion is changing_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.FoodExhaustionEvent`](io/wolfscript/event/player/FoodExhaustionEvent.md)

---

## <a id='entity-chickenlayeggevent'></a>__Event__ entity.ChickenLayEggEvent

Chicken lay egg event, called when a chicken lay an egg.

``` javascript
this.on('entity.ChickenLayEggEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Chicken__ <br> _Get: Get the `Chicken` the laid the egg_ | `Chicken`
  property __Egg__ <br> _Get: Get the egg that was laid<br>Set: Change the egg that should be laid_ | [`Item`](io/wolfscript/api/inventory/Item.md)
  property __NextEggIn__ <br> _Get: Get the time until the next egg will be laid for the chicken that laid the egg<br>Set: Set the time until next egg will be laid from the chicken that laid the egg_ | `int`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.ChickenLayEggEvent`](io/wolfscript/event/entity/ChickenLayEggEvent.md)

---

## <a id='player-itempickupevent'></a>__Event__ player.ItemPickupEvent

Item Hook. Contains EntityItem and Player

``` javascript
this.on('player.ItemPickupEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Item__ <br> _Get: Gets the [`EntityItem`](io/wolfscript/api/entity/EntityItem.md)_ | [`EntityItem`](io/wolfscript/api/entity/EntityItem.md)
 readonly property __Player__ <br> _Get: Gets the `Player`_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.ItemPickupEvent`](io/wolfscript/event/player/ItemPickupEvent.md)

---

## <a id='world-leafdecayevent'></a>__Event__ world.LeafDecayEvent

Block update event. Contains information about a block updating.

``` javascript
this.on('world.LeafDecayEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Block__ <br> _Get: Get the leaf block that is about to decay_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.LeafDecayEvent`](io/wolfscript/event/world/LeafDecayEvent.md)

---

## <a id='player-returnfromidleevent'></a>__Event__ player.ReturnFromIdleEvent

Called when the Player is no longer idle

``` javascript
this.on('player.ReturnFromIdleEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Player__ <br> _Get: Get the `Player` that was Idle_ | `Player`
 readonly property __TimeIdle__ <br> _Get: Gets the amount of time the `Player` was idle_ | `long`
 function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.ReturnFromIdleEvent`](io/wolfscript/event/player/ReturnFromIdleEvent.md)

---

## <a id='system-unloadworldevent'></a>__Event__ system.UnloadWorldEvent

Called before a world is unloaded.<br> Before a world is unloaded, it will be saved! After a world is unloaded it will not be processed in the tick loop anymore. A world can not be unloaded if it still has players on it. For informational use - to give plugins a chance to null their references to that world, if they have any.

``` javascript
this.on('system.UnloadWorldEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __World__ <br> _Get: Returns the world that is about to be unloaded_ | [`World`](io/wolfscript/api/world/World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`system.UnloadWorldEvent`](io/wolfscript/event/system/UnloadWorldEvent.md)

---

## <a id='player-blockleftclickevent'></a>__Event__ player.BlockLeftClickEvent

Left click event. Contains information about a Player left clicking.

``` javascript
this.on('player.BlockLeftClickEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Block__ <br> _Get: Get the [`Block`](io/wolfscript/api/world/blocks/Block.md) the `Player` is left clicking_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __Player__ <br> _Get: Gets the `Player` clicking_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.BlockLeftClickEvent`](io/wolfscript/event/player/BlockLeftClickEvent.md)

---

## <a id='entity-potioneffectfinishevent'></a>__Event__ entity.PotionEffectFinishEvent

PotionEffectFinishEvent<br> Called when a [`potion.PotionEffect`](io/wolfscript/api/potion/PotionEffect.md) finishes it's effect on a [`living.LivingBase`](io/wolfscript/api/entity/living/LivingBase.md)

``` javascript
this.on('entity.PotionEffectFinishEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Entity__ <br> _Get: Gets the [`LivingBase`](io/wolfscript/api/entity/living/LivingBase.md) having a [`PotionEffect`](io/wolfscript/api/potion/PotionEffect.md) finishing it's effect_ | [`LivingBase`](io/wolfscript/api/entity/living/LivingBase.md)
 readonly property __PotionEffect__ <br> _Get: Gets the [`PotionEffect`](io/wolfscript/api/potion/PotionEffect.md) finishing_ | [`PotionEffect`](io/wolfscript/api/potion/PotionEffect.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`entity.PotionEffectFinishEvent`](io/wolfscript/event/entity/PotionEffectFinishEvent.md)

---

## <a id='player-levelupevent'></a>__Event__ player.LevelUpEvent

LevelUp event. Called when a `humanoid.Player` levels up

``` javascript
this.on('player.LevelUpEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Player__ <br> _Get: Get the `Player` instance_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.LevelUpEvent`](io/wolfscript/event/player/LevelUpEvent.md)

---

## <a id='player-signshowevent'></a>__Event__ player.SignShowEvent

Sign Change event. Contains information about a sign shown to a player

``` javascript
this.on('player.SignShowEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Player__ <br> _Get: Gets the `Player` being shown a [`Sign`](io/wolfscript/api/world/blocks/Sign.md)_ | `Player`
 readonly property __Sign__ <br> _Get: Gets the [`Sign`](io/wolfscript/api/world/blocks/Sign.md) being shown_ | [`Sign`](io/wolfscript/api/world/blocks/Sign.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.SignShowEvent`](io/wolfscript/event/player/SignShowEvent.md)

---

## <a id='player-itemuseevent'></a>__Event__ player.ItemUseEvent

Item use event. Called when a `humanoid.Player` uses an [`inventory.Item`](io/wolfscript/api/inventory/Item.md)

``` javascript
this.on('player.ItemUseEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __BlockClicked__ <br> _Get: Gets the [`Block`](io/wolfscript/api/world/blocks/Block.md) being clicked on, or Air if no block is being clicked_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __Item__ <br> _Get: Gets the [`Item`](io/wolfscript/api/inventory/Item.md)_ | [`Item`](io/wolfscript/api/inventory/Item.md)
 readonly property __Player__ <br> _Get: Gets the `Player`_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.ItemUseEvent`](io/wolfscript/event/player/ItemUseEvent.md)

---

## <a id='entity-entitymountevent'></a>__Event__ entity.EntityMountEvent

Called when one entity is trying to mount another

``` javascript
this.on('entity.EntityMountEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Entity__ <br> _Get: Get the entity that is about to mount another one_ | [`LivingBase`](io/wolfscript/api/entity/living/LivingBase.md)
 readonly property __Rider__ <br> _Get: Get the entity that is about to mount the other one_ | [`LivingBase`](io/wolfscript/api/entity/living/LivingBase.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.EntityMountEvent`](io/wolfscript/event/entity/EntityMountEvent.md)

---

## <a id='world-pistonretractevent'></a>__Event__ world.PistonRetractEvent

Piston Retract event<br> Called when a piston retracts

``` javascript
this.on('world.PistonRetractEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Moving__ <br> _Moving property_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __Piston__ <br> _Get: Gets the piston [`Block`](io/wolfscript/api/world/blocks/Block.md)_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.PistonRetractEvent`](io/wolfscript/event/world/PistonRetractEvent.md)

---

## <a id='entity-entitymoveevent'></a>__Event__ entity.EntityMoveEvent

class EntityMoveEvent

``` javascript
this.on('entity.EntityMoveEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Entity__ <br> _Entity property_ | [`Entity`](io/wolfscript/api/entity/Entity.md)
 readonly property __From__ <br> _From property_ | [`Location`](io/wolfscript/api/world/position/Location.md)
 readonly property __To__ <br> _To property_ | [`Location`](io/wolfscript/api/world/position/Location.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.EntityMoveEvent`](io/wolfscript/event/entity/EntityMoveEvent.md)

---

## <a id='player-inventoryevent'></a>__Event__ player.InventoryEvent

Inventory event. Contains information about a player either opening or closing an inventory

``` javascript
this.on('player.InventoryEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Inventory__ <br> _Get: Gets the [`Inventory`](io/wolfscript/api/inventory/Inventory.md)_ | [`Inventory`](io/wolfscript/api/inventory/Inventory.md)
 readonly property __Player__ <br> _Get: Gets the `Player`_ | `Player`
 function __isClosing__() <br> _isClosing method_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.InventoryEvent`](io/wolfscript/event/player/InventoryEvent.md)

---

## <a id='player-preconnectionevent'></a>__Event__ player.PreConnectionEvent

Login checks event. Comes with ip, name and a kickReason that is to be returned, and should be null if a player should not be kicked.

``` javascript
this.on('player.PreConnectionEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Ip__ <br> _Get: Get the IP of the joining `Player`_ | `String`
  property __KickReason__ <br> _Get: Get the currently set kick reason<br>Set: Set the kick reason. Make it null to not kick the `Player`_ | `String`
 readonly property __Name__ <br> _Get: Get the name of the joining `Player`_ | `String`
 readonly property __UUID__ <br> _UUID property_ | `UUID`
  property __World__ <br> _World property_ | `String`
  property __WorldType__ <br> _WorldType property_ | [`DimensionType`](io/wolfscript/api/world/DimensionType.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.PreConnectionEvent`](io/wolfscript/event/player/PreConnectionEvent.md)

---

## <a id='world-blockphysicsevent'></a>__Event__ world.BlockPhysicsEvent

Block physics event. Contains information about a block's physics being updated.

``` javascript
this.on('world.BlockPhysicsEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Block__ <br> _Get: Gets the [`Block`](io/wolfscript/api/world/blocks/Block.md)_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
final function __toString__() <br> _toString method_ | `String`
 function __wasPlaced__() <br> _Gets whether this [`Block`](io/wolfscript/api/world/blocks/Block.md) was just placed_ | `boolean`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.BlockPhysicsEvent`](io/wolfscript/event/world/BlockPhysicsEvent.md)

---

## <a id='world-smeltevent'></a>__Event__ world.SmeltEvent

class SmeltEvent

``` javascript
this.on('world.SmeltEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Furnace__ <br> _Get: Gets the [`Furnace`](io/wolfscript/api/world/blocks/Furnace.md) doing the smelting_ | [`Furnace`](io/wolfscript/api/world/blocks/Furnace.md)
 readonly property __Result__ <br> _Get: Gets the [`Item`](io/wolfscript/api/inventory/Item.md) result_ | [`Item`](io/wolfscript/api/inventory/Item.md)
 readonly property __Smelted__ <br> _Get: Gets the [`Item`](io/wolfscript/api/inventory/Item.md) that was smelted_ | [`Item`](io/wolfscript/api/inventory/Item.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.SmeltEvent`](io/wolfscript/event/world/SmeltEvent.md)

---

## <a id='entity-vehicledestroyevent'></a>__Event__ entity.VehicleDestroyEvent

VehicleDestoryHook<br> Called when a Minecart or Boat is destroyed

``` javascript
this.on('entity.VehicleDestroyEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Vehicle__ <br> _Get: The [`Vehicle`](io/wolfscript/api/entity/vehicle/Vehicle.md) being destoryed_ | [`Vehicle`](io/wolfscript/api/entity/vehicle/Vehicle.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`entity.VehicleDestroyEvent`](io/wolfscript/event/entity/VehicleDestroyEvent.md)

---

## <a id='player-enchantevent'></a>__Event__ player.EnchantEvent

Enchant event. Contains information about a player enchanting an item.

``` javascript
this.on('player.EnchantEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __EnchantmentList__ <br> _Get: Gets the new [`Enchantment`](io/wolfscript/api/inventory/Enchantment.md) as list_ | `List<Enchantment>`
 readonly property __EnchantmentTable__ <br> _Get: Gets the `EnchantmentTable` in use_ | `EnchantmentTable`
 readonly property __Item__ <br> _Get: Gets the [`Item`](io/wolfscript/api/inventory/Item.md)_ | [`Item`](io/wolfscript/api/inventory/Item.md)
 readonly property __Player__ <br> _Get: Gets the `Player` enchanting an [`Item`](io/wolfscript/api/inventory/Item.md)_ | `Player`
 function __addEnchantment__(enchantment) <br> _Add a new enchantment to the list of existing enchantments_ | `void`
 function __isValid__(checkStackable) <br> _Validate the enchantments_ | `boolean`
 function __removeEnchantment__(enchantment) <br> _Remove an enchantment from the list_ | `void`
 function __setEnchantmentList__() <br> _Override the whole list of enchantments_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.EnchantEvent`](io/wolfscript/event/player/EnchantEvent.md)

---

## <a id='entity-vehiclecollisionevent'></a>__Event__ entity.VehicleCollisionEvent

Is called when a vehicle collides with a LivingEntity

``` javascript
this.on('entity.VehicleCollisionEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Entity__ <br> _Get: Get the [`EntityLiving`](io/wolfscript/api/entity/living/EntityLiving.md) that got hit by the vehicle_ | [`Entity`](io/wolfscript/api/entity/Entity.md)
 readonly property __Vehicle__ <br> _Get: Get the [`Vehicle`](io/wolfscript/api/entity/vehicle/Vehicle.md) that caused the collision_ | [`Vehicle`](io/wolfscript/api/entity/vehicle/Vehicle.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.VehicleCollisionEvent`](io/wolfscript/event/entity/VehicleCollisionEvent.md)

---

## <a id='command-consolecommandevent'></a>__Event__ command.ConsoleCommandEvent

Server command event. Contains the command issued by the server

``` javascript
this.on('command.ConsoleCommandEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Caller__ <br> _Caller property_ | [`MessageReceiver`](io/wolfscript/chat/MessageReceiver.md)
 readonly property __Command__ <br> _Get: Get command that was issued by the console_ | `String[]`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`command.ConsoleCommandEvent`](io/wolfscript/event/command/ConsoleCommandEvent.md)

---

## <a id='player-healthchangeevent'></a>__Event__ player.HealthChangeEvent

Health Change event

``` javascript
this.on('player.HealthChangeEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __NewValue__ <br> _Get: Gets the new Health value_ | `float`
 readonly property __OldValue__ <br> _Get: Gets the old Health value_ | `float`
 readonly property __Player__ <br> _Get: Gets the `Player` who's health is changing_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.HealthChangeEvent`](io/wolfscript/event/player/HealthChangeEvent.md)

---

## <a id='world-chunkcreatedevent'></a>__Event__ world.ChunkCreatedEvent

Chunk created event

``` javascript
this.on('world.ChunkCreatedEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Chunk__ <br> _Get: Gets the [`Chunk`](io/wolfscript/api/world/Chunk.md)_ | [`Chunk`](io/wolfscript/api/world/Chunk.md)
 readonly property __World__ <br> _Get: Gets the world that this chunk is a part of._ | [`World`](io/wolfscript/api/world/World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`world.ChunkCreatedEvent`](io/wolfscript/event/world/ChunkCreatedEvent.md)

---

## <a id='player-blockplaceevent'></a>__Event__ player.BlockPlaceEvent

Is called when a player right-clicks a block, eg. uses it.

``` javascript
this.on('player.BlockPlaceEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __BlockClicked__ <br> _Get: Get the [`Block`](io/wolfscript/api/world/blocks/Block.md) that was clicked_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __BlockPlaced__ <br> _Get: Gets the block that will be placed_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __Player__ <br> _Get: Get the player who is placing a [`Block`](io/wolfscript/api/world/blocks/Block.md)_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.BlockPlaceEvent`](io/wolfscript/event/player/BlockPlaceEvent.md)

---

## <a id='system-serverlistpingevent'></a>__Event__ system.ServerListPingEvent

Called when a client ping the server

``` javascript
this.on('system.ServerListPingEvent', function (e) { });
```

Method | Type   
--- | :---: 
 writeonly property __Motd__ <br> _Set: Set the MOTD that will be sent to the client_ | `void`
 readonly property __RequesterAddress__ <br> _Get: Gets the `InetAddress` (IP) of the requesting party_ | `InetAddress`
  property __Favicon__ <br> _Favicon property_ | `String`
 readonly property __HostNamePinged__ <br> _Get: Gets the HostName (or IP) used by the requester to connect to the server_ | `String`
 readonly property __PortPinged__ <br> _Get: Gets the port the Requester has stated it has pinged_ | `int`
  property __Motd__ <br> _Get: Retrieve the MOTD that will be sent to the client<br>Set: Set the MOTD that will be sent to the client_ | [`ChatComponent`](io/wolfscript/api/chat/ChatComponent.md)
  property __MaxPlayers__ <br> _MaxPlayers property_ | `int`
  property __CurrentPlayers__ <br> _Get: Retrieve the current amount of players connected to the server that will be sent to the client.<br>Set: Set the current amount of players connected to the server that will be sent to the client_ | `int`
 readonly property __Profiles__ <br> _Get: Gets the `GameProfile`s to be sent_ | `List<GameProfile>`
 readonly property __RequesterPort__ <br> _Get: Gets the port used by the requesting party_ | `int`
 readonly property __RequesterProtocol__ <br> _Get: Gets the protocol version for the requesting party_ | `int`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`system.ServerListPingEvent`](io/wolfscript/event/system/ServerListPingEvent.md)

---

## <a id='entity-vehicleenterevent'></a>__Event__ entity.VehicleEnterEvent

Is called when a LivingEntity enters a vehicle

``` javascript
this.on('entity.VehicleEnterEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Entity__ <br> _Entity property_ | [`LivingBase`](io/wolfscript/api/entity/living/LivingBase.md)
 readonly property __Vehicle__ <br> _Vehicle property_ | [`Vehicle`](io/wolfscript/api/entity/vehicle/Vehicle.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.VehicleEnterEvent`](io/wolfscript/event/entity/VehicleEnterEvent.md)

---

## <a id='player-foodlevelevent'></a>__Event__ player.FoodLevelEvent

Food level event. Contains information about a player's food level changes

``` javascript
this.on('player.FoodLevelEvent', function (e) { });
```

Method | Type   
--- | :---: 
  property __NewValue__ <br> _Get: Gets the new level<br>Set: Sets the new value to actually be set_ | `int`
 readonly property __OldValue__ <br> _Get: Gets the old (current) level_ | `int`
 readonly property __Player__ <br> _Get: Gets the `Player` who's food level is changing_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.FoodLevelEvent`](io/wolfscript/event/player/FoodLevelEvent.md)

---

## <a id='world-fireworkexplodeevent'></a>__Event__ world.FireworkExplodeEvent

class FireworkExplodeEvent

``` javascript
this.on('world.FireworkExplodeEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __FireworkRocket__ <br> _Get: Gets the [`FireworkRocket`](io/wolfscript/api/entity/FireworkRocket.md) set to explode_ | [`FireworkRocket`](io/wolfscript/api/entity/FireworkRocket.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.FireworkExplodeEvent`](io/wolfscript/event/world/FireworkExplodeEvent.md)

---

## <a id='world-noteblockplayevent'></a>__Event__ world.NoteBlockPlayEvent

Called when a [`blocks.NoteBlock`](io/wolfscript/api/world/blocks/NoteBlock.md) is played

``` javascript
this.on('world.NoteBlockPlayEvent', function (e) { });
```

Method | Type   
--- | :---: 
final readonly property __NoteBlock__ <br> _Get: Gets the [`NoteBlock`](io/wolfscript/api/world/blocks/NoteBlock.md) being played_ | [`NoteBlock`](io/wolfscript/api/world/blocks/NoteBlock.md)
final function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.NoteBlockPlayEvent`](io/wolfscript/event/world/NoteBlockPlayEvent.md)

---

## <a id='entity-entitydeathevent'></a>__Event__ entity.EntityDeathEvent

class EntityDeathEvent

``` javascript
this.on('entity.EntityDeathEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __DamageSource__ <br> _Get: Gets the [`DamageSource`](io/wolfscript/api/DamageSource.md) that killed the [`Entity`](io/wolfscript/api/entity/Entity.md)_ | [`DamageSource`](io/wolfscript/api/DamageSource.md)
 readonly property __Entity__ <br> _Get: Gets the [`Entity`](io/wolfscript/api/entity/Entity.md) that is dying_ | [`Entity`](io/wolfscript/api/entity/Entity.md)
final function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`entity.EntityDeathEvent`](io/wolfscript/event/entity/EntityDeathEvent.md)

---

## <a id='player-toolbrokenevent'></a>__Event__ player.ToolBrokenEvent

class ToolBrokenEvent

``` javascript
this.on('player.ToolBrokenEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Player__ <br> _Get: Gets the `Player` who's tool has broken_ | `Player`
 readonly property __Tool__ <br> _Tool property_ | [`Item`](io/wolfscript/api/inventory/Item.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.ToolBrokenEvent`](io/wolfscript/event/player/ToolBrokenEvent.md)

---

## <a id='entity-potioneffectappliedevent'></a>__Event__ entity.PotionEffectAppliedEvent

PotionEffectAppliedEvent<br> Called when a [`potion.PotionEffect`](io/wolfscript/api/potion/PotionEffect.md) is applied to a [`living.LivingBase`](io/wolfscript/api/entity/living/LivingBase.md)

``` javascript
this.on('entity.PotionEffectAppliedEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Entity__ <br> _Get: Gets the [`LivingBase`](io/wolfscript/api/entity/living/LivingBase.md) having a [`PotionEffect`](io/wolfscript/api/potion/PotionEffect.md) applied to_ | [`LivingBase`](io/wolfscript/api/entity/living/LivingBase.md)
  property __PotionEffect__ <br> _Get: Gets the [`PotionEffect`](io/wolfscript/api/potion/PotionEffect.md) being applied<br>Set: Sets the [`PotionEffect`](io/wolfscript/api/potion/PotionEffect.md) to apply_ | [`PotionEffect`](io/wolfscript/api/potion/PotionEffect.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`entity.PotionEffectAppliedEvent`](io/wolfscript/event/entity/PotionEffectAppliedEvent.md)

---

## <a id='entity-endermanpickupblockevent'></a>__Event__ entity.EndermanPickupBlockEvent

Enderman pick up block event. Contains information about an Enderman picking up a block

``` javascript
this.on('entity.EndermanPickupBlockEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Block__ <br> _Get: Gets the [`Block`](io/wolfscript/api/world/blocks/Block.md)_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __Enderman__ <br> _Get: Gets the [`Enderman`](io/wolfscript/api/entity/living/monster/Enderman.md)_ | [`Enderman`](io/wolfscript/api/entity/living/monster/Enderman.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.EndermanPickupBlockEvent`](io/wolfscript/event/entity/EndermanPickupBlockEvent.md)

---

## <a id='world-blockupdateevent'></a>__Event__ world.BlockUpdateEvent

Block update event. Contains information about a block updating.

``` javascript
this.on('world.BlockUpdateEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Block__ <br> _Get: Gets [`Block`](io/wolfscript/api/world/blocks/Block.md) updating_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __NewBlockId__ <br> _Get: Gets the block id of the new [`Block`](io/wolfscript/api/world/blocks/Block.md)_ | `int`
 readonly property __NewBlockType__ <br> _Get: Gets the block type of the new [`Block`](io/wolfscript/api/world/blocks/Block.md)_ | [`BlockType`](io/wolfscript/api/world/blocks/BlockType.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.BlockUpdateEvent`](io/wolfscript/event/world/BlockUpdateEvent.md)

---

## <a id='player-playerarmswingevent'></a>__Event__ player.PlayerArmSwingEvent

Player Left Click Hook<br> Called when a `humanoid.Player` swings their arm with a Left Click

``` javascript
this.on('player.PlayerArmSwingEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Player__ <br> _Get: Gets the `Player` clicking_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.PlayerArmSwingEvent`](io/wolfscript/event/player/PlayerArmSwingEvent.md)

---

## <a id='system-pluginenableevent'></a>__Event__ system.PluginEnableEvent

Called when a plugin is enabled.

``` javascript
this.on('system.PluginEnableEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Plugin__ <br> _Get: Retrieve the plugin that is enabled_ | `Plugin`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`system.PluginEnableEvent`](io/wolfscript/event/system/PluginEnableEvent.md)

---

## <a id='player-bedexitevent'></a>__Event__ player.BedExitEvent

Bed exit event, called when a player leaves a bed

``` javascript
this.on('player.BedExitEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Bed__ <br> _Get: Get the bed [`Block`](io/wolfscript/api/world/blocks/Block.md) the `Player` is leaving_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __Player__ <br> _Get: Gets the `Player` leaving the bed_ | `Player`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.BedExitEvent`](io/wolfscript/event/player/BedExitEvent.md)

---

## <a id='world-flowevent'></a>__Event__ world.FlowEvent

Flow event. Contains information about a liquid flowing from one block to another

``` javascript
this.on('world.FlowEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __BlockFrom__ <br> _Get: Gets the [`Block`](io/wolfscript/api/world/blocks/Block.md) flowing from_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __BlockTo__ <br> _Get: Gets the [`Block`](io/wolfscript/api/world/blocks/Block.md) flowing to_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.FlowEvent`](io/wolfscript/event/world/FlowEvent.md)

---

## <a id='entity-mobtargetevent'></a>__Event__ entity.MobTargetEvent

class MobTargetEvent

``` javascript
this.on('entity.MobTargetEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Entity__ <br> _Get: Gets the [`EntityLiving`](io/wolfscript/api/entity/living/EntityLiving.md) doing the targeting_ | [`LivingBase`](io/wolfscript/api/entity/living/LivingBase.md)
 readonly property __Target__ <br> _Get: Gets the [`EntityLiving`](io/wolfscript/api/entity/living/EntityLiving.md) being targeted_ | [`LivingBase`](io/wolfscript/api/entity/living/LivingBase.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.MobTargetEvent`](io/wolfscript/event/entity/MobTargetEvent.md)

---

## <a id='player-craftevent'></a>__Event__ player.CraftEvent

class CraftEvent

``` javascript
this.on('player.CraftEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __CraftingMatrix__ <br> _Get: Returns the crafting inventory the player is working on._ | [`CraftingMatrix`](io/wolfscript/api/inventory/CraftingMatrix.md)
 readonly property __MatchingRecipe__ <br> _Get: Gets the recipe that matches the matrix_ | [`Recipe`](io/wolfscript/api/inventory/recipes/Recipe.md)
 readonly property __Player__ <br> _Get: Gets the crafting player._ | `Player`
  property __RecipeResult__ <br> _Get: Returns the recipe's result item.<br>Set: Sets the recipe's result._ | [`Item`](io/wolfscript/api/inventory/Item.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.CraftEvent`](io/wolfscript/event/player/CraftEvent.md)

---

## <a id='system-plugindisableevent'></a>__Event__ system.PluginDisableEvent

Called when a plugin is disabled

``` javascript
this.on('system.PluginDisableEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Plugin__ <br> _Get: Retrieve the plugin that is disabled_ | `Plugin`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`system.PluginDisableEvent`](io/wolfscript/event/system/PluginDisableEvent.md)

---

## <a id='entity-projectilehitevent'></a>__Event__ entity.ProjectileHitEvent

ProjectileHitEvent<br> Called when a Projectile hits something

``` javascript
this.on('entity.ProjectileHitEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __EntityHit__ <br> _Get: Gets the [`Entity`](io/wolfscript/api/entity/Entity.md) hit by the projectile_ | [`Entity`](io/wolfscript/api/entity/Entity.md)
 readonly property __Projectile__ <br> _Get: Gets the [`Entity`](io/wolfscript/api/entity/Entity.md) projectile_ | [`Entity`](io/wolfscript/api/entity/Entity.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.ProjectileHitEvent`](io/wolfscript/event/entity/ProjectileHitEvent.md)

---

## <a id='world-treegrowevent'></a>__Event__ world.TreeGrowEvent

class TreeGrowEvent

``` javascript
this.on('world.TreeGrowEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Sapling__ <br> _Get: Gets the sapling trying to grow_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
final function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.TreeGrowEvent`](io/wolfscript/event/world/TreeGrowEvent.md)

---

## <a id='player-playerrespawnedevent'></a>__Event__ player.PlayerRespawnedEvent

Player respawned event. Contains the reference to the freshly spawned player entity and the location it spawned in. The location can not be overridden at this point. If you need the player to go somewhere else, use `Player#teleportTo(Location)` etc

``` javascript
this.on('player.PlayerRespawnedEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Location__ <br> _Get: Gets the [`Location`](io/wolfscript/api/world/position/Location.md) where this player will finally spawn_ | [`Location`](io/wolfscript/api/world/position/Location.md)
 readonly property __Player__ <br> _Get: Gets the `Player`_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.PlayerRespawnedEvent`](io/wolfscript/event/player/PlayerRespawnedEvent.md)

---

## <a id='entity-itemtouchgroundevent'></a>__Event__ entity.ItemTouchGroundEvent

ItemTouchGroundEvent<br> Called when an [`entity.EntityItem`](io/wolfscript/api/entity/EntityItem.md) hits the ground

``` javascript
this.on('entity.ItemTouchGroundEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __EntityItem__ <br> _Get: Gets the [`EntityItem`](io/wolfscript/api/entity/EntityItem.md) hitting the ground_ | [`EntityItem`](io/wolfscript/api/entity/EntityItem.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.ItemTouchGroundEvent`](io/wolfscript/event/entity/ItemTouchGroundEvent.md)

---

## <a id='world-redstonechangeevent'></a>__Event__ world.RedstoneChangeEvent

RedstoneChange event. Contains information about power flowing from one block to another

``` javascript
this.on('world.RedstoneChangeEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __NewLevel__ <br> _Get: get the powerlevel for redstone that it would be after the change_ | `int`
 readonly property __OldLevel__ <br> _Get: Get the power level for the redstone before the change_ | `int`
 readonly property __SourceBlock__ <br> _Get: Gets the [`Block`](io/wolfscript/api/world/blocks/Block.md) the redstone is on_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.RedstoneChangeEvent`](io/wolfscript/event/world/RedstoneChangeEvent.md)

---

## <a id='player-slotclickevent'></a>__Event__ player.SlotClickEvent

class SlotClickEvent

``` javascript
this.on('player.SlotClickEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __ButtonPress__ <br> _Get: Gets the button pressed_ | [`ButtonPress`](io/wolfscript/api/inventory/slot/ButtonPress.md)
 readonly property __Player__ <br> _Get: Gets the `Player` doing the clicking_ | `Player`
 readonly property __Item__ <br> _Get: Gets the [`Item`](io/wolfscript/api/inventory/Item.md) in the slot clicked_ | [`Item`](io/wolfscript/api/inventory/Item.md)
 readonly property __ItemOnCursor__ <br> _Get: Gets the [`Item`](io/wolfscript/api/inventory/Item.md) on the player's cursor_ | [`Item`](io/wolfscript/api/inventory/Item.md)
 readonly property __GrabMode__ <br> _Get: Gets the [`GrabMode`](io/wolfscript/api/inventory/slot/GrabMode.md) used in the click_ | [`GrabMode`](io/wolfscript/api/inventory/slot/GrabMode.md)
 readonly property __Inventory__ <br> _Get: Gets the [`Inventory`](io/wolfscript/api/inventory/Inventory.md) that is open and being clicked in_ | [`Inventory`](io/wolfscript/api/inventory/Inventory.md)
 readonly property __SecondarySlotType__ <br> _Get: Gets the secondary type of the Slot being clicked_ | [`SecondarySlotType`](io/wolfscript/api/inventory/slot/SecondarySlotType.md)
 readonly property __SlotId__ <br> _Get: Gets the id of the slot clicked_ | `short`
 readonly property __SlotType__ <br> _Get: Gets the type of Slot being clicked_ | [`SlotType`](io/wolfscript/api/inventory/slot/SlotType.md)
 readonly property __TransactionNumber__ <br> _Get: Gets the transaction number (increments up by 1 while the window is open)_ | `short`
 writeonly property __DoUpdate__ <br> _Set: Sets whether to notify the client of an update_ | `void`
 function __doUpdate__() <br> _Gets whether to notify the client of a update if canceled_ | `boolean`
final function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.SlotClickEvent`](io/wolfscript/event/player/SlotClickEvent.md)

---

## <a id='world-portalcreateevent'></a>__Event__ world.PortalCreateEvent

class PortalCreateEvent

``` javascript
this.on('world.PortalCreateEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __BlockSet__ <br> _Get: Get the set of blocks that are used to create this portal_ | `Block[][]`
 readonly property __Position__ <br> _Get: Gets the [`Position`](io/wolfscript/api/world/position/Position.md) where the portal is started_ | [`Position`](io/wolfscript/api/world/position/Position.md)
 readonly property __World__ <br> _Get: Gets the world the portal will be in_ | [`World`](io/wolfscript/api/world/World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.PortalCreateEvent`](io/wolfscript/event/world/PortalCreateEvent.md)

---

## <a id='entity-entityspawnevent'></a>__Event__ entity.EntitySpawnEvent

Entity spawn event. Contains information about an entity spawning.

``` javascript
this.on('entity.EntitySpawnEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Entity__ <br> _Get: Gets the [`Entity`](io/wolfscript/api/entity/Entity.md) spawning_ | [`Entity`](io/wolfscript/api/entity/Entity.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.EntitySpawnEvent`](io/wolfscript/event/entity/EntitySpawnEvent.md)

---

## <a id='world-smeltbeginevent'></a>__Event__ world.SmeltBeginEvent

class SmeltBeginEvent

``` javascript
this.on('world.SmeltBeginEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Furnace__ <br> _Get: Gets the [`Furnace`](io/wolfscript/api/world/blocks/Furnace.md) doing the smelting_ | [`Furnace`](io/wolfscript/api/world/blocks/Furnace.md)
 readonly property __Smelting__ <br> _Get: Gets the [`Item`](io/wolfscript/api/inventory/Item.md) smelting_ | [`Item`](io/wolfscript/api/inventory/Item.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.SmeltBeginEvent`](io/wolfscript/event/world/SmeltBeginEvent.md)

---

## <a id='world-ignitionevent'></a>__Event__ world.IgnitionEvent

Ignition event. Contains information about a [`blocks.Block`](io/wolfscript/api/world/blocks/Block.md) being set on fire.

``` javascript
this.on('world.IgnitionEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Block__ <br> _Block property_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __Cause__ <br> _Get: Gets the `IgnitionCause` causing the ignition_ | `IgnitionCause`
 readonly property __ClickedBlock__ <br> _Get: The [`Block`](io/wolfscript/api/world/blocks/Block.md) that was clicked to cause an ignition if applicable._ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __Player__ <br> _Get: The `Player` starting the fire if present_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.IgnitionEvent`](io/wolfscript/event/world/IgnitionEvent.md)

---

## <a id='entity-entitytameevent'></a>__Event__ entity.EntityTameEvent

Entity tame event

``` javascript
this.on('entity.EntityTameEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Animal__ <br> _Get: Get the animal in question_ | [`EntityAnimal`](io/wolfscript/api/entity/living/animal/EntityAnimal.md)
 readonly property __Player__ <br> _Get: Get the player that is wanting to tame the animal_ | `Player`
 writeonly property __Tamed__ <br> _Set: Override the tame result._ | `void`
 function __isTamed__() <br> _Check the default tame result._ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.EntityTameEvent`](io/wolfscript/event/entity/EntityTameEvent.md)

---

## <a id='player-disconnectionevent'></a>__Event__ player.DisconnectionEvent

Disconnection event. Contains information about a `humanoid.Player` disconnecting.

``` javascript
this.on('player.DisconnectionEvent', function (e) { });
```

Method | Type   
--- | :---: 
  property __LeaveMessage__ <br> _Get: Gets the LeaveMessage<br>Set: Sets the LeaveMessage_ | `String`
 readonly property __Player__ <br> _Get: Gets the `Player` disconnected_ | `Player`
  property __Reason__ <br> _Get: Get the reason for disconnect (if applicable)<br>Set: Set the reason for disconnection that will be displayed_ | `String`
 writeonly property __Hidden__ <br> _Hidden property_ | `void`
 function __isHidden__() <br> _isHidden method_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.DisconnectionEvent`](io/wolfscript/event/player/DisconnectionEvent.md)

---

## <a id='player-itemdropevent'></a>__Event__ player.ItemDropEvent

Item Hook. Contains EntityItem and Player

``` javascript
this.on('player.ItemDropEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Item__ <br> _Get: Gets the [`EntityItem`](io/wolfscript/api/entity/EntityItem.md)_ | [`EntityItem`](io/wolfscript/api/entity/EntityItem.md)
 readonly property __Player__ <br> _Get: Gets the `Player`_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.ItemDropEvent`](io/wolfscript/event/player/ItemDropEvent.md)

---

## <a id='player-connectionevent'></a>__Event__ player.ConnectionEvent

Connection event. Contains information about a player connecting.

``` javascript
this.on('player.ConnectionEvent', function (e) { });
```

Method | Type   
--- | :---: 
  property __Message__ <br> _Get: Gets the message sent to all<br>Set: Sets the message set to all_ | `String`
 readonly property __Player__ <br> _Get: Gets the `Player`_ | `Player`
 writeonly property __Hidden__ <br> _Hidden property_ | `void`
 function __isFirstConnection__() <br> _Returns true if this player has never connected before._ | `boolean`
 function __isHidden__() <br> _isHidden method_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.ConnectionEvent`](io/wolfscript/event/player/ConnectionEvent.md)

---

## <a id='world-lightningstrikeevent'></a>__Event__ world.LightningStrikeEvent

class LightningStrikeEvent

``` javascript
this.on('world.LightningStrikeEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __LightningBolt__ <br> _Get: Gets the [`LightningBolt`](io/wolfscript/api/entity/effect/LightningBolt.md) striking_ | [`LightningBolt`](io/wolfscript/api/entity/effect/LightningBolt.md)
final function __toString__() <br> _{@inheritDoc}_ | `String`
 var __lightbolt__ <br> _lightbolt field_ | [`LightningBolt`](io/wolfscript/api/entity/effect/LightningBolt.md)
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`world.LightningStrikeEvent`](io/wolfscript/event/world/LightningStrikeEvent.md)

---

## <a id='entity-entitylightningstruckevent'></a>__Event__ entity.EntityLightningStruckEvent

class EntityLightningStruckEvent

``` javascript
this.on('entity.EntityLightningStruckEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __LightningBolt__ <br> _Get: Gets the [`LightningBolt`](io/wolfscript/api/entity/effect/LightningBolt.md) striking_ | [`LightningBolt`](io/wolfscript/api/entity/effect/LightningBolt.md)
 readonly property __StruckEntity__ <br> _Get: Gets the [`Entity`](io/wolfscript/api/entity/Entity.md) being struck_ | [`Entity`](io/wolfscript/api/entity/Entity.md)
final function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.EntityLightningStruckEvent`](io/wolfscript/event/entity/EntityLightningStruckEvent.md)

---

## <a id='entity-slimesplitevent'></a>__Event__ entity.SlimeSplitEvent

Slime split event, Contains information about a slime split.

``` javascript
this.on('entity.SlimeSplitEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __ChildSlimes__ <br> _Get: Get the [`Slime`](io/wolfscript/api/entity/living/monster/Slime.md)s that should be spawned_ | `List<Slime>`
 readonly property __OriginalSlime__ <br> _Get: Get the original [`Slime`](io/wolfscript/api/entity/living/monster/Slime.md) that died_ | [`Slime`](io/wolfscript/api/entity/living/monster/Slime.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`entity.SlimeSplitEvent`](io/wolfscript/event/entity/SlimeSplitEvent.md)

---

## <a id='entity-hangingentitydestroyevent'></a>__Event__ entity.HangingEntityDestroyEvent

HangingEntity destroy event. Contains information about a painting or item frame being destroyed. In case the it was destroyed by a player, you will get this player too.

``` javascript
this.on('entity.HangingEntityDestroyEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __DamageSource__ <br> _Get: Gets the DamageSource associated_ | [`DamageSource`](io/wolfscript/api/DamageSource.md)
 readonly property __Painting__ <br> _Get: Gets the [`HangingEntity`](io/wolfscript/api/entity/hanging/HangingEntity.md)_ | [`HangingEntity`](io/wolfscript/api/entity/hanging/HangingEntity.md)
 readonly property __Player__ <br> _Get: Gets the `Player` who destroyed the item frame or painting._ | `Player`
 function __isCausedByPlayer__() <br> _Check if this hook was called because a player destroyed an item frame or painting._ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.HangingEntityDestroyEvent`](io/wolfscript/event/entity/HangingEntityDestroyEvent.md)

---

## <a id='player-helditemchangeevent'></a>__Event__ player.HeldItemChangeEvent

Held item change event. Contains information about a player's held slot changes

``` javascript
this.on('player.HeldItemChangeEvent', function (e) { });
```

Method | Type   
--- | :---: 
  property __NewValue__ <br> _Get: Gets the new held slot<br>Set: Sets the new value to actually be set_ | `int`
 readonly property __OldValue__ <br> _Get: Gets the old (current) held slot_ | `int`
 readonly property __Player__ <br> _Get: Gets the `Player` whose held slot is changing_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.HeldItemChangeEvent`](io/wolfscript/event/player/HeldItemChangeEvent.md)

---

## <a id='player-villagertradeevent'></a>__Event__ player.VillagerTradeEvent

VillagerTrade Hook<br> Called when a `humanoid.Player` trades with a [`api.VillagerTrade`](io/wolfscript/api/VillagerTrade.md) from an `humanoid.Villager`

``` javascript
this.on('player.VillagerTradeEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Player__ <br> _Get: Gets the `Player` who is trading_ | `Player`
 readonly property __Trade__ <br> _Get: Gets the [`VillagerTrade`](io/wolfscript/api/VillagerTrade.md)_ | [`VillagerTrade`](io/wolfscript/api/VillagerTrade.md)
 readonly property __Villager__ <br> _Get: Gets the `Villager` merchant_ | `Villager`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.VillagerTradeEvent`](io/wolfscript/event/player/VillagerTradeEvent.md)

---

## <a id='player-experienceevent'></a>__Event__ player.ExperienceEvent

Experience event. Contains information about player experience changes.

``` javascript
this.on('player.ExperienceEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __NewValue__ <br> _Get: Gets the new experience value_ | `int`
 readonly property __OldValue__ <br> _Get: Gets the old experience value_ | `int`
 readonly property __Player__ <br> _Get: Gets the `Player`_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.ExperienceEvent`](io/wolfscript/event/player/ExperienceEvent.md)

---

## <a id='player-chatevent'></a>__Event__ player.ChatEvent

Chat event. Contains player, prefix, message and receivers information

``` javascript
this.on('player.ChatEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Player__ <br> _Get: Get the `Player` instance_ | `Player`
  property __Message__ <br> _Get: Get the message this player has sent<br>Set: Change the message completely_ | `String`
  property __Format__ <br> _Get: Get the chat format. This is a string like this:<br>Set: Override the default chatting format._ | `String`
 writeonly property __PlayerDisplayName__ <br> _Set: Set the name that is used for this player_ | `void`
 writeonly property __Prefix__ <br> _Set: Override the players chat prefix_ | `void`
 readonly property __Prefix__ <br> _Get: Get the message prefix. The prefix contains the following data:_ | `String`
 readonly property __PlayerDisplayName__ <br> _Get: Get the currently used name for this player_ | `String`
 readonly property __ReceiverList__ <br> _Get: Get a list of all receivers for this message_ | `List<Player>`
 function __setReceiverList__() <br> _Override the list of receivers_ | `void`
 function __buildSendMessage__() <br> _Create the message that will be sent from the placeholder list and the format._ | `String`
 function __addToReceiverList__(player) <br> _Add a `Player` to the receiver list. This better not be null!_ | `void`
 function __appendToMessage__(toAppend) <br> _Append the given String to the existing message_ | `void`
 function __removeFromReceiverList__(player) <br> _Remove a `Player` from the receiver list_ | `void`
 function __setPlaceholder__(placeholder, value) <br> _Set or override a placeholder and a value_ | `void`
 function __removePlaceholder__(placeholder) <br> _Remove a specified placeholder value._ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.ChatEvent`](io/wolfscript/event/player/ChatEvent.md)

---

## <a id='player-portaluseevent'></a>__Event__ player.PortalUseEvent

PortalUse Hook

``` javascript
this.on('player.PortalUseEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Player__ <br> _Get: Gets the `Player` using a portal_ | `Player`
 readonly property __To__ <br> _Get: Gets the [`Location`](io/wolfscript/api/world/position/Location.md) the portal goes to_ | [`Location`](io/wolfscript/api/world/position/Location.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.PortalUseEvent`](io/wolfscript/event/player/PortalUseEvent.md)

---

## <a id='player-kickevent'></a>__Event__ player.KickEvent

Kick event. Contains the player who was kicked and the MessageReceiver who kicked them

``` javascript
this.on('player.KickEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __KickedPlayer__ <br> _Get: Get the `Player` being kicked_ | `Player`
 readonly property __Moderator__ <br> _Get: Get the [`MessageReceiver`](io/wolfscript/chat/MessageReceiver.md) that has issued the kick_ | [`MessageReceiver`](io/wolfscript/chat/MessageReceiver.md)
 readonly property __Reason__ <br> _Get: Gets the reason for the kick_ | `String`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.KickEvent`](io/wolfscript/event/player/KickEvent.md)

---

## <a id='system-servertickevent'></a>__Event__ system.ServerTickEvent

Called in the servers tick loop, before world processing. For informational use

``` javascript
this.on('system.ServerTickEvent', function (e) { });
```

Method | Type   
--- | :---: 
  property __DeltaTime__ <br> _DeltaTime property_ | `long`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`system.ServerTickEvent`](io/wolfscript/event/system/ServerTickEvent.md)

---

## <a id='entity-dimensionswitchevent'></a>__Event__ entity.DimensionSwitchEvent

Dimension switch event. Contains information about an entity changeing dimentions

``` javascript
this.on('entity.DimensionSwitchEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Entity__ <br> _Get: Get the entity involved here._ | [`Entity`](io/wolfscript/api/entity/Entity.md)
 readonly property __LocationFrom__ <br> _Get: Get the location the entity is warping to._ | [`Location`](io/wolfscript/api/world/position/Location.md)
 readonly property __LocationTo__ <br> _Get: Get the entities current location._ | [`Location`](io/wolfscript/api/world/position/Location.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.DimensionSwitchEvent`](io/wolfscript/event/entity/DimensionSwitchEvent.md)

---

## <a id='player-playeridleevent'></a>__Event__ player.PlayerIdleEvent

class PlayerIdleEvent

``` javascript
this.on('player.PlayerIdleEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Player__ <br> _Get: Gets the idle `Player`_ | `Player`
 readonly property __TimeIdle__ <br> _Get: Gets the number of milliseconds the player has been idle_ | `long`
 function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.PlayerIdleEvent`](io/wolfscript/event/player/PlayerIdleEvent.md)

---

## <a id='player-eatevent'></a>__Event__ player.EatEvent

class EatEvent

``` javascript
this.on('player.EatEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Item__ <br> _Get: Gets the [`Item`](io/wolfscript/api/inventory/Item.md) that is being consumed_ | [`Item`](io/wolfscript/api/inventory/Item.md)
  property __LevelGain__ <br> _Get: Gets the amount of Food Level the `Player` will gain from consuming<br>Set: Sets the Food Level the `Player` will gain from consuming_ | `int`
 readonly property __Player__ <br> _Get: Gets the `Player` eating_ | `Player`
 readonly property __PotionEffects__ <br> _Get: Gets the [`PotionEffect`](io/wolfscript/api/potion/PotionEffect.md)s that could be applied on consumption_ | `PotionEffect[]`
  property __SaturationGain__ <br> _Get: Gets the Food Saturation the `Player` will gain from consuming<br>Set: Sets the Food Saturation the `Player` will gain from consuming_ | `float`
 function __setPotionEffects__() <br> _Sets the [`PotionEffect`](io/wolfscript/api/potion/PotionEffect.md)s to applied on consumption._ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.EatEvent`](io/wolfscript/event/player/EatEvent.md)

---

## <a id='world-pistonextendevent'></a>__Event__ world.PistonExtendEvent

Piston Extend Hook<br> Called when a Piston extends

``` javascript
this.on('world.PistonExtendEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Moving__ <br> _Moving property_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __Piston__ <br> _Get: Gets the piston [`Block`](io/wolfscript/api/world/blocks/Block.md)_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.PistonExtendEvent`](io/wolfscript/event/world/PistonExtendEvent.md)

---

## <a id='entity-endermandropblockevent'></a>__Event__ entity.EndermanDropBlockEvent

Enderman drop block event. Contains information about an Enderman dropping a block.

``` javascript
this.on('entity.EndermanDropBlockEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Block__ <br> _Get: Gets the [`Block`](io/wolfscript/api/world/blocks/Block.md)_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __Enderman__ <br> _Get: Gets the [`Enderman`](io/wolfscript/api/entity/living/monster/Enderman.md)_ | [`Enderman`](io/wolfscript/api/entity/living/monster/Enderman.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.EndermanDropBlockEvent`](io/wolfscript/event/entity/EndermanDropBlockEvent.md)

---

## <a id='entity-vehicledamageevent'></a>__Event__ entity.VehicleDamageEvent

Vehicle Damage event. Contains information about a vehicle receiving damage.

``` javascript
this.on('entity.VehicleDamageEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Attacker__ <br> _Get: Get the entity that is inflicting the damage to the vehicle_ | [`Entity`](io/wolfscript/api/entity/Entity.md)
 readonly property __DamageDealt__ <br> _Get: Gets the amount of damage dealt_ | `float`
 readonly property __DamageSource__ <br> _Get: Gets the [`DamageSource`](io/wolfscript/api/DamageSource.md) type_ | [`DamageSource`](io/wolfscript/api/DamageSource.md)
 readonly property __Vehicle__ <br> _Get: Get the vehicle that is about to be damaged_ | [`Vehicle`](io/wolfscript/api/entity/vehicle/Vehicle.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.VehicleDamageEvent`](io/wolfscript/event/entity/VehicleDamageEvent.md)

---

## <a id='world-hoppertransferevent'></a>__Event__ world.HopperTransferEvent

Hook parameter for when Hoppers Transfer Items

``` javascript
this.on('world.HopperTransferEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Hopper__ <br> _Get: Gets the hopper involved with this transfer._ | [`Hopper`](io/wolfscript/api/inventory/Hopper.md)
 readonly property __ItemTransferred__ <br> _Get: Gets the item being transferred in this event._ | [`Item`](io/wolfscript/api/inventory/Item.md)
 function __isInputting__() <br> _Is the transfer inputting into the Hopper?_ | `boolean`
 function __isOutputting__() <br> _Is the transfer outputting into the Hopper?_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.HopperTransferEvent`](io/wolfscript/event/world/HopperTransferEvent.md)

---

## <a id='entity-vehiclemoveevent'></a>__Event__ entity.VehicleMoveEvent

Is called when a LivingEntity moves a vehicle

``` javascript
this.on('entity.VehicleMoveEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __From__ <br> _From property_ | [`Vector3D`](io/wolfscript/api/world/position/Vector3D.md)
  property __To__ <br> _To property<br>Set: Override this vehicles target position_ | [`Vector3D`](io/wolfscript/api/world/position/Vector3D.md)
 readonly property __Vehicle__ <br> _Vehicle property_ | [`Vehicle`](io/wolfscript/api/entity/vehicle/Vehicle.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.VehicleMoveEvent`](io/wolfscript/event/entity/VehicleMoveEvent.md)

---

## <a id='system-serverguistartevent'></a>__Event__ system.ServerGuiStartEvent

Called when a GUI is started

``` javascript
this.on('system.ServerGuiStartEvent', function (e) { });
```

Method | Type   
--- | :---: 
  property __Gui__ <br> _Gui property_ | [`GUIControl`](io/wolfscript/api/gui/GUIControl.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`system.ServerGuiStartEvent`](io/wolfscript/event/system/ServerGuiStartEvent.md)

---

## <a id='player-foodsaturationevent'></a>__Event__ player.FoodSaturationEvent

Food saturation change event. Contains information about a player's food saturation changes

``` javascript
this.on('player.FoodSaturationEvent', function (e) { });
```

Method | Type   
--- | :---: 
  property __NewValue__ <br> _Get: Gets the new level<br>Set: Sets the new value to actually be set_ | `float`
 readonly property __OldValue__ <br> _Get: Gets the old (current) level_ | `float`
 readonly property __Player__ <br> _Get: Gets the `Player` who's food saturation is changing_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.FoodSaturationEvent`](io/wolfscript/event/player/FoodSaturationEvent.md)

---

## <a id='player-itemframesetitemevent'></a>__Event__ player.ItemFrameSetItemEvent

Called when an `humanoid.Player` sets and [`inventory.Item`](io/wolfscript/api/inventory/Item.md) in a [`hanging.ItemFrame`](io/wolfscript/api/entity/hanging/ItemFrame.md)

``` javascript
this.on('player.ItemFrameSetItemEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Item__ <br> _Get: Gets the [`Item`](io/wolfscript/api/inventory/Item.md) being placed into the [`ItemFrame`](io/wolfscript/api/entity/hanging/ItemFrame.md)_ | [`Item`](io/wolfscript/api/inventory/Item.md)
 readonly property __ItemFrame__ <br> _Get: Gets the [`ItemFrame`](io/wolfscript/api/entity/hanging/ItemFrame.md) being interacted with_ | [`ItemFrame`](io/wolfscript/api/entity/hanging/ItemFrame.md)
final readonly property __Player__ <br> _Get: Gets the `Player` interacting with the [`ItemFrame`](io/wolfscript/api/entity/hanging/ItemFrame.md)_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.ItemFrameSetItemEvent`](io/wolfscript/event/player/ItemFrameSetItemEvent.md)

---

## <a id='world-timechangeevent'></a>__Event__ world.TimeChangeEvent

Time Change event

``` javascript
this.on('world.TimeChangeEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Time__ <br> _Get: Gets the time the [`World`](io/wolfscript/api/world/World.md) is being set to_ | `long`
 readonly property __World__ <br> _Get: Gets the [`World`](io/wolfscript/api/world/World.md) the time is changing in_ | [`World`](io/wolfscript/api/world/World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.TimeChangeEvent`](io/wolfscript/event/world/TimeChangeEvent.md)

---

## <a id='world-liquiddestroyevent'></a>__Event__ world.LiquidDestroyEvent

Is called when a liquid is about to destroy something (crops, popping off torches etc)

``` javascript
this.on('world.LiquidDestroyEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Block__ <br> _Get: Get the block that would be destroyed by the liquid flow_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __LiquidType__ <br> _Get: Returns the [`BlockType`](io/wolfscript/api/world/blocks/BlockType.md) of the liquid._ | [`BlockType`](io/wolfscript/api/world/blocks/BlockType.md)
 writeonly property __ForceDestroy__ <br> _Set: Set this to true to force the block to be destroyed._ | `void`
 function __isForceDestroy__() <br> _Check if the block in question will be destroyed regardless of what it is._ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.LiquidDestroyEvent`](io/wolfscript/event/world/LiquidDestroyEvent.md)

---

## <a id='player-bookeditevent'></a>__Event__ player.BookEditEvent

Called when a `humanoid.Player` edits a Book [`inventory.Item`](io/wolfscript/api/inventory/Item.md)

``` javascript
this.on('player.BookEditEvent', function (e) { });
```

Method | Type   
--- | :---: 
final readonly property __Book__ <br> _Get: Gets the Book [`Item`](io/wolfscript/api/inventory/Item.md) being editted_ | [`Item`](io/wolfscript/api/inventory/Item.md)
final readonly property __Player__ <br> _Get: Gets the `Player` editting the Book_ | `Player`
final function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.BookEditEvent`](io/wolfscript/event/player/BookEditEvent.md)

---

## <a id='player-armorstandmodifyevent'></a>__Event__ player.ArmorStandModifyEvent

class ArmorStandModifyEvent

``` javascript
this.on('player.ArmorStandModifyEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __CurrentItem__ <br> _Get: Gets the [`Item`](io/wolfscript/api/inventory/Item.md) currently in the ArmorStand_ | [`Item`](io/wolfscript/api/inventory/Item.md)
 readonly property __Player__ <br> _Get: Gets the `Player` modifying the ArmorStand_ | `Player`
 readonly property __SettingItem__ <br> _SettingItem property_ | [`Item`](io/wolfscript/api/inventory/Item.md)
 readonly property __SlotId__ <br> _SlotId property_ | `int`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.ArmorStandModifyEvent`](io/wolfscript/event/player/ArmorStandModifyEvent.md)

---

## <a id='player-entityrightclickevent'></a>__Event__ player.EntityRightClickEvent

Is called when a player right-clicks an entity, for instance a villager for trading or a vehicle for entering

``` javascript
this.on('player.EntityRightClickEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Entity__ <br> _Get: Returns the entity that was clicked_ | [`Entity`](io/wolfscript/api/entity/Entity.md)
 readonly property __Player__ <br> _Get: Get the player who clicked_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.EntityRightClickEvent`](io/wolfscript/event/player/EntityRightClickEvent.md)

---

## <a id='world-chunkcreationevent'></a>__Event__ world.ChunkCreationEvent

Chunk creation event. Contains information about a new chunk being created.

``` javascript
this.on('world.ChunkCreationEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __BiomeData__ <br> _Get: Gets the biomedata for the chunk_ | `BiomeType[]`
 readonly property __BlockData__ <br> _Get: Gets the block data of the chunk_ | `int[]`
 readonly property __World__ <br> _Get: Gets the dimension the chunk is in_ | [`World`](io/wolfscript/api/world/World.md)
 readonly property __X__ <br> _Get: Gets the x coordinate of the chunk_ | `int`
 readonly property __Z__ <br> _Get: Gets the z coordinate of the chunk_ | `int`
 function __setBiomeData__() <br> _Sets the biome data of each y column in the chunk_ | `void`
 function __setBlockData__() <br> _Sets the blocks data. Tips: Set a int[32768] if you want to generate a new chunk._ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`world.ChunkCreationEvent`](io/wolfscript/event/world/ChunkCreationEvent.md)

---

## <a id='player-playerrespawningevent'></a>__Event__ player.PlayerRespawningEvent

Player pre-respawn event. This hook is called before the new location and repsawn point for a player is determined. Use it to alter those information.

``` javascript
this.on('player.PlayerRespawningEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Player__ <br> _Get: Gets the `Player`_ | `Player`
  property __RespawnLocation__ <br> _Get: Gets the respawn [`Location`](io/wolfscript/api/world/position/Location.md)<br>Set: Sets the respawn [`Location`](io/wolfscript/api/world/position/Location.md)_ | [`Location`](io/wolfscript/api/world/position/Location.md)
 function __isBedSpawn__() <br> _Returns true if the player is supposed to respawn at his bed_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.PlayerRespawningEvent`](io/wolfscript/event/player/PlayerRespawningEvent.md)

---

## <a id='world-portaldestroyevent'></a>__Event__ world.PortalDestroyEvent

class PortalDestroyEvent

``` javascript
this.on('world.PortalDestroyEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __BlockSet__ <br> _Get: Get the set of blocks that make up the Portal_ | `Block[][]`
 readonly property __Position__ <br> _Get: Gets the [`Position`](io/wolfscript/api/world/position/Position.md) where the portal is being destroyed_ | [`Position`](io/wolfscript/api/world/position/Position.md)
 readonly property __World__ <br> _Get: Gets the world the portal was_ | [`World`](io/wolfscript/api/world/World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.PortalDestroyEvent`](io/wolfscript/event/world/PortalDestroyEvent.md)

---

## <a id='player-teleportevent'></a>__Event__ player.TeleportEvent

Teleport event. Contains player who is teleporting and their destination

``` javascript
this.on('player.TeleportEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __CurrentLocation__ <br> _Get: Gets the `Player`'s current location_ | [`Location`](io/wolfscript/api/world/position/Location.md)
 readonly property __Destination__ <br> _Get: Get the destination [`Location`](io/wolfscript/api/world/position/Location.md) for the teleport._ | [`Location`](io/wolfscript/api/world/position/Location.md)
 readonly property __Player__ <br> _Get: Get the `Player` instance._ | `Player`
 readonly property __TeleportReason__ <br> _Get: Gets the `TeleportCause`_ | `TeleportCause`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.TeleportEvent`](io/wolfscript/event/player/TeleportEvent.md)

---

## <a id='system-loadworldevent'></a>__Event__ system.LoadWorldEvent

class LoadWorldEvent

``` javascript
this.on('system.LoadWorldEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __World__ <br> _Get: Gets the [`World`](io/wolfscript/api/world/World.md) that has loaded_ | [`World`](io/wolfscript/api/world/World.md)
 function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`system.LoadWorldEvent`](io/wolfscript/event/system/LoadWorldEvent.md)

---

## <a id='world-chunkunloadevent'></a>__Event__ world.ChunkUnloadEvent

Chunk unload event

``` javascript
this.on('world.ChunkUnloadEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Chunk__ <br> _Get: Gets the [`Chunk`](io/wolfscript/api/world/Chunk.md)_ | [`Chunk`](io/wolfscript/api/world/Chunk.md)
 readonly property __World__ <br> _Get: Gets the world this chunk is a part of._ | [`World`](io/wolfscript/api/world/World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.ChunkUnloadEvent`](io/wolfscript/event/world/ChunkUnloadEvent.md)

---

## <a id='world-chunkloadedevent'></a>__Event__ world.ChunkLoadedEvent

Chunk created event

``` javascript
this.on('world.ChunkLoadedEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Chunk__ <br> _Get: Gets the [`Chunk`](io/wolfscript/api/world/Chunk.md)_ | [`Chunk`](io/wolfscript/api/world/Chunk.md)
 readonly property __World__ <br> _Get: Gets the world this chunk is a part of._ | [`World`](io/wolfscript/api/world/World.md)
 function __isNew__() <br> _Gets whether this chunk was a freshly created chunk_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`world.ChunkLoadedEvent`](io/wolfscript/event/world/ChunkLoadedEvent.md)

---

## <a id='world-blockgrowevent'></a>__Event__ world.BlockGrowEvent

Called when a block "grows"

``` javascript
this.on('world.BlockGrowEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Growth__ <br> _Growth property_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __Original__ <br> _Original property_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.BlockGrowEvent`](io/wolfscript/event/world/BlockGrowEvent.md)

---

## <a id='world-blockdropxpevent'></a>__Event__ world.BlockDropXpEvent

Event thrown when a block that drop experience (spawner, ore, redstone ore) is destroyed

``` javascript
this.on('world.BlockDropXpEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Block__ <br> _Get: Get the block that gives the dropped experience_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
  property __Xp__ <br> _Get: Get the experience amount that will be dropped.<br>Set: Set the experience amount that will be dropped._ | `int`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.BlockDropXpEvent`](io/wolfscript/event/world/BlockDropXpEvent.md)

---

## <a id='entity-entitydespawnevent'></a>__Event__ entity.EntityDespawnEvent

Entity despawn event. Contains information about an entity despawning.

``` javascript
this.on('entity.EntityDespawnEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Entity__ <br> _Get: Gets the [`Entity`](io/wolfscript/api/entity/Entity.md) despawning_ | [`Entity`](io/wolfscript/api/entity/Entity.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.EntityDespawnEvent`](io/wolfscript/event/entity/EntityDespawnEvent.md)

---

## <a id='player-signchangeevent'></a>__Event__ player.SignChangeEvent

Sign Change event. Contains information about a sign either being changed by a player

``` javascript
this.on('player.SignChangeEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Player__ <br> _Get: Gets the `Player`_ | `Player`
 readonly property __Sign__ <br> _Get: Gets the [`Sign`](io/wolfscript/api/world/blocks/Sign.md)_ | [`Sign`](io/wolfscript/api/world/blocks/Sign.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.SignChangeEvent`](io/wolfscript/event/player/SignChangeEvent.md)

---

## <a id='world-decorateevent'></a>__Event__ world.DecorateEvent

Called when decorating terrain with trees, glowstone etc.

``` javascript
this.on('world.DecorateEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __DecoratorType__ <br> _Get: Gets the `DecoratorType`_ | `DecoratorType`
 readonly property __World__ <br> _Get: Return the [`World`](io/wolfscript/api/world/World.md)_ | [`World`](io/wolfscript/api/world/World.md)
 readonly property __X__ <br> _Get: Gets the x coordinate_ | `int`
 readonly property __Z__ <br> _Get: Gets the z coordinate_ | `int`
 function __getFromName__(name) <br> _Return a `DecoratorType` from a string_ | `DecoratorType`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.DecorateEvent`](io/wolfscript/event/world/DecorateEvent.md)

---

## <a id='world-tntactivateevent'></a>__Event__ world.TNTActivateEvent

class TNTActivateEvent

``` javascript
this.on('world.TNTActivateEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Activator__ <br> _Get: Gets the [`LivingBase`](io/wolfscript/api/entity/living/LivingBase.md) that is causing the TNT to activate (if applicable)_ | [`LivingBase`](io/wolfscript/api/entity/living/LivingBase.md)
 readonly property __Cause__ <br> _Get: Gets the `ActivationCause` of the TNT Activation_ | `ActivationCause`
 readonly property __TNT__ <br> _Get: Gets the [`Block`](io/wolfscript/api/world/blocks/Block.md) of TNT being activated if not a TNTMinecart call_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __TNTCart__ <br> _Get: Gets the `TNTMinecart` being activated if not a TNT Block_ | `TNTMinecart`
 function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.TNTActivateEvent`](io/wolfscript/event/world/TNTActivateEvent.md)

---

## <a id='system-servershutdownevent'></a>__Event__ system.ServerShutdownEvent

Server shutdown event. Contains information about the reason the server is shutting down

``` javascript
this.on('system.ServerShutdownEvent', function (e) { });
```

Method | Type   
--- | :---: 
  property __Reason__ <br> _Get: Get the reason for disconnect (if applicable)<br>Set: Set the reason for disconnection that will be displayed_ | `String`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`system.ServerShutdownEvent`](io/wolfscript/event/system/ServerShutdownEvent.md)

---

## <a id='player-banevent'></a>__Event__ player.BanEvent

Ban event. Contains information about an issued Ban

``` javascript
this.on('player.BanEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __BannedPlayer__ <br> _BannedPlayer property_ | [`PlayerReference`](io/wolfscript/api/PlayerReference.md)
 readonly property __Bantime__ <br> _Get: Return the ban time as unix timestamp._ | `long`
 readonly property __Ip__ <br> _Get: Gets the banned IP address_ | `String`
 readonly property __Moderator__ <br> _Get: Get the [`MessageReceiver`](io/wolfscript/chat/MessageReceiver.md) that has issued the ban._ | [`MessageReceiver`](io/wolfscript/chat/MessageReceiver.md)
 readonly property __Reason__ <br> _Get: Gets the reason for the ban_ | `String`
 function __isIpBan__() <br> _Checks if this is an IP ban_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.BanEvent`](io/wolfscript/event/player/BanEvent.md)

---

## <a id='entity-villagertradeunlockevent'></a>__Event__ entity.VillagerTradeUnlockEvent

VillagerTradeUnlock event<br> Called when a Trade is unlocked

``` javascript
this.on('entity.VillagerTradeUnlockEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Trade__ <br> _Get: Gets the [`VillagerTrade`](io/wolfscript/api/VillagerTrade.md) unlocked_ | [`VillagerTrade`](io/wolfscript/api/VillagerTrade.md)
 readonly property __Villager__ <br> _Get: Gets the `Villager` merchant_ | `Villager`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.VillagerTradeUnlockEvent`](io/wolfscript/event/entity/VillagerTradeUnlockEvent.md)

---

## <a id='player-anviluseevent'></a>__Event__ player.AnvilUseEvent

class AnvilUseEvent

``` javascript
this.on('player.AnvilUseEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Anvil__ <br> _Get: Gets the `Anvil` in use_ | `Anvil`
 readonly property __Player__ <br> _Get: Gets the `Player` using the `Anvil`_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.AnvilUseEvent`](io/wolfscript/event/player/AnvilUseEvent.md)

---

## <a id='player-playerlistevent'></a>__Event__ player.PlayerListEvent

class PlayerListEvent

``` javascript
this.on('player.PlayerListEvent', function (e) { });
```

Method | Type   
--- | :---: 
final readonly property __Data__ <br> _Get: Gets the [`PlayerListData`](io/wolfscript/api/PlayerListData.md) being sent_ | [`PlayerListData`](io/wolfscript/api/PlayerListData.md)
final readonly property __Receiver__ <br> _Get: Gets the `Player` to receive the PlayerListEntry_ | `Player`
final function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.PlayerListEvent`](io/wolfscript/event/player/PlayerListEvent.md)

---

## <a id='player-statgainedevent'></a>__Event__ player.StatGainedEvent

StatGainedEvent<br> Called when a `humanoid.Player` gains a Stat

``` javascript
this.on('player.StatGainedEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Gain__ <br> _Get: Gets the amount of the stat gained_ | `int`
 readonly property __Player__ <br> _Get: Gets the `Player` gaining a [`Stat`](io/wolfscript/api/statistics/Stat.md)_ | `Player`
 readonly property __Stat__ <br> _Get: Gets the [`Stat`](io/wolfscript/api/statistics/Stat.md) being gained_ | [`Stat`](io/wolfscript/api/statistics/Stat.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.StatGainedEvent`](io/wolfscript/event/player/StatGainedEvent.md)

---

## <a id='player-bedenterevent'></a>__Event__ player.BedEnterEvent

Bed enter event, called when a player enters a bed

``` javascript
this.on('player.BedEnterEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Bed__ <br> _Get: Get the bed [`Block`](io/wolfscript/api/world/blocks/Block.md) the `Player` is entering_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __Player__ <br> _Get: Gets the `Player` entering the bed_ | `Player`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`player.BedEnterEvent`](io/wolfscript/event/player/BedEnterEvent.md)

---

## <a id='entity-minecartactivateevent'></a>__Event__ entity.MinecartActivateEvent

MinecartActivateEvent<br> Called when a [`vehicle.Minecart`](io/wolfscript/api/entity/vehicle/Minecart.md) passes over an activation rail.

``` javascript
this.on('entity.MinecartActivateEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Minecart__ <br> _Get: Gets the [`Minecart`](io/wolfscript/api/entity/vehicle/Minecart.md)_ | [`Minecart`](io/wolfscript/api/entity/vehicle/Minecart.md)
 function __isPowered__() <br> _Checks if the [`Minecart`](io/wolfscript/api/entity/vehicle/Minecart.md) is receiving power or not_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.MinecartActivateEvent`](io/wolfscript/event/entity/MinecartActivateEvent.md)

---

## <a id='entity-vehicleexitevent'></a>__Event__ entity.VehicleExitEvent

Is called when a LivingEntity exits a vehicle

``` javascript
this.on('entity.VehicleExitEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Entity__ <br> _Entity property_ | [`LivingBase`](io/wolfscript/api/entity/living/LivingBase.md)
 readonly property __Vehicle__ <br> _Vehicle property_ | [`Vehicle`](io/wolfscript/api/entity/vehicle/Vehicle.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`entity.VehicleExitEvent`](io/wolfscript/event/entity/VehicleExitEvent.md)

---

## <a id='player-playerdeathevent'></a>__Event__ player.PlayerDeathEvent

Player Death event

``` javascript
this.on('player.PlayerDeathEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __DamageSource__ <br> _Get: Gets the [`DamageSource`](io/wolfscript/api/DamageSource.md) that killed the `Player`_ | [`DamageSource`](io/wolfscript/api/DamageSource.md)
 readonly property __Player__ <br> _Get: Gets the `Player` who died_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.PlayerDeathEvent`](io/wolfscript/event/player/PlayerDeathEvent.md)

---

## <a id='world-explosionevent'></a>__Event__ world.ExplosionEvent

Explosion event. Contains information about an explosion.

``` javascript
this.on('world.ExplosionEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __AffectedBlocks__ <br> _Get: Gets the list of affected blocks_ | `List<Block>`
 readonly property __Block__ <br> _Get: Gets the base affected [`Block`](io/wolfscript/api/world/blocks/Block.md)_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __Entity__ <br> _Get: Gets the [`Entity`](io/wolfscript/api/entity/Entity.md) causing the explosion_ | [`Entity`](io/wolfscript/api/entity/Entity.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`world.ExplosionEvent`](io/wolfscript/event/world/ExplosionEvent.md)

---

## <a id='command-commandblockcommandevent'></a>__Event__ command.CommandBlockCommandEvent

CommandBlockCommandEvent<br> Called when a CommandBlock executes a command.

``` javascript
this.on('command.CommandBlockCommandEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Arguments__ <br> _Get: Gets the command and arguments_ | `String[]`
 readonly property __CommandBlock__ <br> _Get: Gets the CommandBlock if actually a CommandBlock_ | `CommandBlock`
 readonly property __CommandBlockMinecart__ <br> _Get: Gets the CommandBlockMinecart if actually a CommandBlockMinecart_ | `CommandBlockMinecart`
 readonly property __Reference__ <br> _Reference property_ | [`CommandBlockLogic`](io/wolfscript/api/CommandBlockLogic.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io/wolfscript/hook/CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`







For further details, see API Reference [`command.CommandBlockCommandEvent`](io/wolfscript/event/command/CommandBlockCommandEvent.md)

---




