## WolfScript Events Summary

### Event.block Events
Event | Title 
--- | --- 
[`block.BlockBreakEvent`](#block-blockbreakevent) | class BlockBreakEvent
[`block.BlockBurnEvent`](#block-blockburnevent) | Called when a block is destroyed as a result of being burnt by fire.
[`block.BlockCanBuildEvent`](#block-blockcanbuildevent) | class BlockCanBuildEvent
[`block.BlockDamageEvent`](#block-blockdamageevent) | Called when a block is damaged by a player.
[`block.BlockDispenseEvent`](#block-blockdispenseevent) | Called when an item is dispensed from a block.
[`block.BlockEvent`](#block-blockevent) | Represents a block related event.
[`block.BlockExpEvent`](#block-blockexpevent) | An event that's called when a block yields experience.
[`block.BlockExplodeEvent`](#block-blockexplodeevent) | Called when a block explodes
[`block.BlockFadeEvent`](#block-blockfadeevent) | class BlockFadeEvent
[`block.BlockFormEvent`](#block-blockformevent) | class BlockFormEvent
[`block.BlockFromToEvent`](#block-blockfromtoevent) | Represents events with a source block and a destination block, currently
[`block.BlockGrowEvent`](#block-blockgrowevent) | class BlockGrowEvent
[`block.BlockIgniteEvent`](#block-blockigniteevent) | Called when a block is ignited. If you want to catch when a Player places
[`block.BlockMultiPlaceEvent`](#block-blockmultiplaceevent) | Fired when a single block placement action of a player triggers the
[`block.BlockPhysicsEvent`](#block-blockphysicsevent) | Thrown when a block physics check is called
[`block.BlockPistonEvent`](#block-blockpistonevent) | Called when a piston block is triggered
[`block.BlockPistonExtendEvent`](#block-blockpistonextendevent) | Called when a piston extends
[`block.BlockPistonRetractEvent`](#block-blockpistonretractevent) | Called when a piston retracts
[`block.BlockPlaceEvent`](#block-blockplaceevent) | Called when a block is placed by a player.
[`block.BlockRedstoneEvent`](#block-blockredstoneevent) | Called when a redstone current changes
[`block.BlockSpreadEvent`](#block-blockspreadevent) | class BlockSpreadEvent
[`block.EntityBlockFormEvent`](#block-entityblockformevent) | class EntityBlockFormEvent
[`block.LeavesDecayEvent`](#block-leavesdecayevent) | Called when leaves are decaying naturally.
[`block.NotePlayEvent`](#block-noteplayevent) | Called when a note block is being played through player interaction or a
[`block.SignChangeEvent`](#block-signchangeevent) | Called when a sign is changed by a player.

### Event.enchantment Events
Event | Title 
--- | --- 
[`enchantment.EnchantItemEvent`](#enchantment-enchantitemevent) | Called when an ItemStack is successfully enchanted (currently at
[`enchantment.PrepareItemEnchantEvent`](#enchantment-prepareitemenchantevent) | Called when an ItemStack is inserted in an enchantment table - can be

### Event.entity Events
Event | Title 
--- | --- 
[`entity.CreatureSpawnEvent`](#entity-creaturespawnevent) | Called when a creature is spawned into a world.
[`entity.CreeperPowerEvent`](#entity-creeperpowerevent) | Called when a Creeper is struck by lightning.
[`entity.EntityBreakDoorEvent`](#entity-entitybreakdoorevent) | Called when an `entity.Entity` breaks a door
[`entity.EntityChangeBlockEvent`](#entity-entitychangeblockevent) | Called when any Entity, excluding players, changes a block.
[`entity.EntityCombustByBlockEvent`](#entity-entitycombustbyblockevent) | Called when a block causes an entity to combust.
[`entity.EntityCombustByEntityEvent`](#entity-entitycombustbyentityevent) | Called when an entity causes another entity to combust.
[`entity.EntityCombustEvent`](#entity-entitycombustevent) | Called when an entity combusts.
[`entity.EntityCreatePortalEvent`](#entity-entitycreateportalevent) | Thrown when a Living Entity creates a portal in a world.
[`entity.EntityDamageByBlockEvent`](#entity-entitydamagebyblockevent) | Called when an entity is damaged by a block
[`entity.EntityDamageByEntityEvent`](#entity-entitydamagebyentityevent) | Called when an entity is damaged by an entity
[`entity.EntityDamageEvent`](#entity-entitydamageevent) | Stores data for damage events
[`entity.EntityDeathEvent`](#entity-entitydeathevent) | Thrown whenever a LivingEntity dies
[`entity.EntityEvent`](#entity-entityevent) | Represents an Entity-related event
[`entity.EntityExplodeEvent`](#entity-entityexplodeevent) | Called when an entity explodes
[`entity.EntityInteractEvent`](#entity-entityinteractevent) | Called when an entity interacts with an object
[`entity.EntityPortalEnterEvent`](#entity-entityportalenterevent) | Called when an entity comes into contact with a portal
[`entity.EntityPortalEvent`](#entity-entityportalevent) | Called when a non-player entity is about to teleport because it is in
[`entity.EntityPortalExitEvent`](#entity-entityportalexitevent) | Called before an entity exits a portal.
[`entity.EntityRegainHealthEvent`](#entity-entityregainhealthevent) | Stores data for health-regain events
[`entity.EntityShootBowEvent`](#entity-entityshootbowevent) | Called when a LivingEntity shoots a bow firing an arrow
[`entity.EntityTameEvent`](#entity-entitytameevent) | Thrown when a LivingEntity is tamed
[`entity.EntityTargetEvent`](#entity-entitytargetevent) | Called when a creature targets or untargets another entity
[`entity.EntityTeleportEvent`](#entity-entityteleportevent) | Thrown when a non-player entity (such as an Enderman) tries to teleport
[`entity.EntityUnleashEvent`](#entity-entityunleashevent) | Called immediately prior to an entity being unleashed.
[`entity.ExpBottleEvent`](#entity-expbottleevent) | Called when a ThrownExpBottle hits and releases experience.
[`entity.ExplosionPrimeEvent`](#entity-explosionprimeevent) | Called when an entity has made a decision to explode.
[`entity.FoodLevelChangeEvent`](#entity-foodlevelchangeevent) | Called when a human entity's food level changes
[`entity.HorseJumpEvent`](#entity-horsejumpevent) | Called when a horse jumps.
[`entity.ItemDespawnEvent`](#entity-itemdespawnevent) | This event is called when a [`entity.Item`](#entity-item) is removed from
[`entity.ItemSpawnEvent`](#entity-itemspawnevent) | Called when an item is spawned into a world
[`entity.PigZapEvent`](#entity-pigzapevent) | Stores data for pigs being zapped
[`entity.PlayerDeathEvent`](#entity-playerdeathevent) | Thrown whenever a `entity.Player` dies
[`entity.PlayerLeashEntityEvent`](#entity-playerleashentityevent) | Called immediately prior to a creature being leashed by a player.
[`entity.PotionSplashEvent`](#entity-potionsplashevent) | Called when a splash potion hits an area
[`entity.ProjectileHitEvent`](#entity-projectilehitevent) | Called when a projectile hits an object
[`entity.ProjectileLaunchEvent`](#entity-projectilelaunchevent) | Called when a projectile is launched.
[`entity.SheepDyeWoolEvent`](#entity-sheepdyewoolevent) | Called when a sheep's wool is dyed
[`entity.SheepRegrowWoolEvent`](#entity-sheepregrowwoolevent) | Called when a sheep regrows its wool
[`entity.SlimeSplitEvent`](#entity-slimesplitevent) | Called when a Slime splits into smaller Slimes upon death

### Event.hanging Events
Event | Title 
--- | --- 
[`hanging.HangingBreakByEntityEvent`](#hanging-hangingbreakbyentityevent) | Triggered when a hanging entity is removed by an entity
[`hanging.HangingBreakEvent`](#hanging-hangingbreakevent) | Triggered when a hanging entity is removed
[`hanging.HangingEvent`](#hanging-hangingevent) | Represents a hanging entity-related event.
[`hanging.HangingPlaceEvent`](#hanging-hangingplaceevent) | Triggered when a hanging entity is created in the world

### Event.inventory Events
Event | Title 
--- | --- 
[`inventory.BrewEvent`](#inventory-brewevent) | Called when the brewing of the contents inside the Brewing Stand is
[`inventory.CraftItemEvent`](#inventory-craftitemevent) | Called when the recipe of an Item is completed inside a crafting matrix.
[`inventory.FurnaceBurnEvent`](#inventory-furnaceburnevent) | Called when an ItemStack is successfully burned as fuel in a furnace.
[`inventory.FurnaceExtractEvent`](#inventory-furnaceextractevent) | This event is called when a player takes items out of the furnace
[`inventory.FurnaceSmeltEvent`](#inventory-furnacesmeltevent) | Called when an ItemStack is successfully smelted in a furnace.
[`inventory.InventoryClickEvent`](#inventory-inventoryclickevent) | class InventoryClickEvent
[`inventory.InventoryCloseEvent`](#inventory-inventorycloseevent) | Represents a player related inventory event
[`inventory.InventoryCreativeEvent`](#inventory-inventorycreativeevent) | class InventoryCreativeEvent
[`inventory.InventoryDragEvent`](#inventory-inventorydragevent) | class InventoryDragEvent
[`inventory.InventoryEvent`](#inventory-inventoryevent) | Represents a player related inventory event
[`inventory.InventoryInteractEvent`](#inventory-inventoryinteractevent) | An abstract base class for events that describe an interaction between a
[`inventory.InventoryMoveItemEvent`](#inventory-inventorymoveitemevent) | Called when some entity or block (e.g. hopper) tries to move items directly
[`inventory.InventoryOpenEvent`](#inventory-inventoryopenevent) | Represents a player related inventory event
[`inventory.InventoryPickupItemEvent`](#inventory-inventorypickupitemevent) | Called when a hopper or hopper minecart picks up a dropped item.
[`inventory.PrepareItemCraftEvent`](#inventory-prepareitemcraftevent) | class PrepareItemCraftEvent

### Event.painting Events
Event | Title 
--- | --- 
[`painting.PaintingBreakByEntityEvent`](#painting-paintingbreakbyentityevent) | Triggered when a painting is removed by an entity
[`painting.PaintingBreakEvent`](#painting-paintingbreakevent) | Triggered when a painting is removed
[`painting.PaintingEvent`](#painting-paintingevent) | Represents a painting-related event.
[`painting.PaintingPlaceEvent`](#painting-paintingplaceevent) | Triggered when a painting is created in the world

### Event.player Events
Event | Title 
--- | --- 
[`player.AsyncPlayerChatEvent`](#player-asyncplayerchatevent) | This event will sometimes fire synchronously, depending on how it was
[`player.AsyncPlayerPreLoginEvent`](#player-asyncplayerpreloginevent) | Stores details for players attempting to log in.
[`player.PlayerAchievementAwardedEvent`](#player-playerachievementawardedevent) | Called when a player earns an achievement.
[`player.PlayerAnimationEvent`](#player-playeranimationevent) | Represents a player animation event
[`player.PlayerArmorStandManipulateEvent`](#player-playerarmorstandmanipulateevent) | Called when a player interacts with an armor stand and will either swap, retrieve or place an item.
[`player.PlayerBedEnterEvent`](#player-playerbedenterevent) | This event is fired when the player is almost about to enter the bed.
[`player.PlayerBedLeaveEvent`](#player-playerbedleaveevent) | This event is fired when the player is leaving a bed.
[`player.PlayerBucketEmptyEvent`](#player-playerbucketemptyevent) | Called when a player empties a bucket
[`player.PlayerBucketEvent`](#player-playerbucketevent) | Called when a player interacts with a Bucket
[`player.PlayerBucketFillEvent`](#player-playerbucketfillevent) | Called when a player fills a bucket
[`player.PlayerChangedWorldEvent`](#player-playerchangedworldevent) | Called when a player switches to another world.
[`player.PlayerChannelEvent`](#player-playerchannelevent) | This event is called after a player registers or unregisters a new plugin
[`player.PlayerChatEvent`](#player-playerchatevent) | Holds information for player chat and commands
[`player.PlayerChatTabCompleteEvent`](#player-playerchattabcompleteevent) | Called when a player attempts to tab-complete a chat message.
[`player.PlayerCommandPreprocessEvent`](#player-playercommandpreprocessevent) | class PlayerCommandPreprocessEvent
[`player.PlayerDropItemEvent`](#player-playerdropitemevent) | Thrown when a player drops an item from their inventory
[`player.PlayerEditBookEvent`](#player-playereditbookevent) | Called when a player edits or signs a book and quill item. If the event is
[`player.PlayerEggThrowEvent`](#player-playereggthrowevent) | Called when a player throws an egg and it might hatch
[`player.PlayerEvent`](#player-playerevent) | Represents a player related event
[`player.PlayerExpChangeEvent`](#player-playerexpchangeevent) | Called when a players experience changes naturally
[`player.PlayerFishEvent`](#player-playerfishevent) | Thrown when a player is fishing
[`player.PlayerGameModeChangeEvent`](#player-playergamemodechangeevent) | Called when the GameMode of the player is changed.
[`player.PlayerInteractAtEntityEvent`](#player-playerinteractatentityevent) | Represents an event that is called when a player right clicks an entity
[`player.PlayerInteractEntityEvent`](#player-playerinteractentityevent) | Represents an event that is called when a player right clicks an entity.
[`player.PlayerInteractEvent`](#player-playerinteractevent) | Called when a player interacts with an object or air.
[`player.PlayerItemBreakEvent`](#player-playeritembreakevent) | Fired when a player's item breaks (such as a shovel or flint and steel).
[`player.PlayerItemConsumeEvent`](#player-playeritemconsumeevent) | This event will fire when a player is finishing consuming an item (food,
[`player.PlayerItemHeldEvent`](#player-playeritemheldevent) | Fired when a player changes their currently held item
[`player.PlayerJoinEvent`](#player-playerjoinevent) | Called when a player joins a server
[`player.PlayerKickEvent`](#player-playerkickevent) | Called when a player gets kicked from the server
[`player.PlayerLevelChangeEvent`](#player-playerlevelchangeevent) | Called when a players level changes
[`player.PlayerLoginEvent`](#player-playerloginevent) | Stores details for players attempting to log in
[`player.PlayerMoveEvent`](#player-playermoveevent) | Holds information for player movement events
[`player.PlayerPickupItemEvent`](#player-playerpickupitemevent) | Thrown when a player picks an item up from the ground
[`player.PlayerPortalEvent`](#player-playerportalevent) | Called when a player is about to teleport because it is in contact with a
[`player.PlayerPreLoginEvent`](#player-playerpreloginevent) | Stores details for players attempting to log in
[`player.PlayerQuitEvent`](#player-playerquitevent) | Called when a player leaves a server
[`player.PlayerRegisterChannelEvent`](#player-playerregisterchannelevent) | This is called immediately after a player registers for a plugin channel.
[`player.PlayerRespawnEvent`](#player-playerrespawnevent) | Called when a player respawns.
[`player.PlayerShearEntityEvent`](#player-playershearentityevent) | Called when a player shears an entity
[`player.PlayerStatisticIncrementEvent`](#player-playerstatisticincrementevent) | Called when a player statistic is incremented.
[`player.PlayerTeleportEvent`](#player-playerteleportevent) | Holds information for player teleport events
[`player.PlayerToggleFlightEvent`](#player-playertoggleflightevent) | Called when a player toggles their flying state
[`player.PlayerToggleSneakEvent`](#player-playertogglesneakevent) | Called when a player toggles their sneaking state
[`player.PlayerToggleSprintEvent`](#player-playertogglesprintevent) | Called when a player toggles their sprinting state
[`player.PlayerUnleashEntityEvent`](#player-playerunleashentityevent) | Called prior to an entity being unleashed due to a player's action.
[`player.PlayerUnregisterChannelEvent`](#player-playerunregisterchannelevent) | This is called immediately after a player unregisters for a plugin channel.
[`player.PlayerVelocityEvent`](#player-playervelocityevent) | Called when the velocity of a player changes.

### Event.server Events
Event | Title 
--- | --- 
[`server.MapInitializeEvent`](#server-mapinitializeevent) | Called when a map is initialized.
[`server.PluginDisableEvent`](#server-plugindisableevent) | Called when a plugin is disabled.
[`server.PluginEnableEvent`](#server-pluginenableevent) | Called when a plugin is enabled.
[`server.PluginEvent`](#server-pluginevent) | Used for plugin enable and disable events
[`server.RemoteServerCommandEvent`](#server-remoteservercommandevent) | This event is called when a command is recieved over RCON. See the javadocs
[`server.ServerCommandEvent`](#server-servercommandevent) | class ServerCommandEvent
[`server.ServerEvent`](#server-serverevent) | Miscellaneous server events
[`server.ServerListPingEvent`](#server-serverlistpingevent) | Called when a server list ping is coming in. Displayed players can be
[`server.ServiceEvent`](#server-serviceevent) | An event relating to a registered service. This is called in a {@link
[`server.ServiceRegisterEvent`](#server-serviceregisterevent) | This event is called when a service is registered.
[`server.ServiceUnregisterEvent`](#server-serviceunregisterevent) | This event is called when a service is unregistered.

### Event.vehicle Events
Event | Title 
--- | --- 
[`vehicle.VehicleBlockCollisionEvent`](#vehicle-vehicleblockcollisionevent) | Raised when a vehicle collides with a block.
[`vehicle.VehicleCollisionEvent`](#vehicle-vehiclecollisionevent) | Raised when a vehicle collides.
[`vehicle.VehicleCreateEvent`](#vehicle-vehiclecreateevent) | Raised when a vehicle is created.
[`vehicle.VehicleDamageEvent`](#vehicle-vehicledamageevent) | Raised when a vehicle receives damage.
[`vehicle.VehicleDestroyEvent`](#vehicle-vehicledestroyevent) | Raised when a vehicle is destroyed, which could be caused by either a
[`vehicle.VehicleEnterEvent`](#vehicle-vehicleenterevent) | Raised when an entity enters a vehicle.
[`vehicle.VehicleEntityCollisionEvent`](#vehicle-vehicleentitycollisionevent) | Raised when a vehicle collides with an entity.
[`vehicle.VehicleEvent`](#vehicle-vehicleevent) | Represents a vehicle-related event.
[`vehicle.VehicleExitEvent`](#vehicle-vehicleexitevent) | Raised when a living entity exits a vehicle.
[`vehicle.VehicleMoveEvent`](#vehicle-vehiclemoveevent) | Raised when a vehicle moves.
[`vehicle.VehicleUpdateEvent`](#vehicle-vehicleupdateevent) | Called when a vehicle updates

### Event.weather Events
Event | Title 
--- | --- 
[`weather.LightningStrikeEvent`](#weather-lightningstrikeevent) | Stores data for lightning striking
[`weather.ThunderChangeEvent`](#weather-thunderchangeevent) | Stores data for thunder state changing in a world
[`weather.WeatherChangeEvent`](#weather-weatherchangeevent) | Stores data for weather changing in a world
[`weather.WeatherEvent`](#weather-weatherevent) | Represents a Weather-related event

### Event.world Events
Event | Title 
--- | --- 
[`world.ChunkEvent`](#world-chunkevent) | Represents a Chunk related event
[`world.ChunkLoadEvent`](#world-chunkloadevent) | Called when a chunk is loaded
[`world.ChunkPopulateEvent`](#world-chunkpopulateevent) | Thrown when a new chunk has finished being populated.
[`world.ChunkUnloadEvent`](#world-chunkunloadevent) | Called when a chunk is unloaded
[`world.PortalCreateEvent`](#world-portalcreateevent) | Called when a portal is created
[`world.SpawnChangeEvent`](#world-spawnchangeevent) | An event that is called when a world's spawn changes. The world's previous
[`world.StructureGrowEvent`](#world-structuregrowevent) | Event that is called when an organic structure attempts to grow (Sapling {@literal ->}
[`world.WorldEvent`](#world-worldevent) | Represents events within a world
[`world.WorldInitEvent`](#world-worldinitevent) | Called when a World is initializing
[`world.WorldLoadEvent`](#world-worldloadevent) | Called when a World is loaded
[`world.WorldSaveEvent`](#world-worldsaveevent) | Called when a World is saved.
[`world.WorldUnloadEvent`](#world-worldunloadevent) | Called when a World is unloaded
 
## Wolfscript.event. Events

## <a id='block-noteplayevent'></a>__Event__ block.NotePlayEvent

Called when a note block is being played through player interaction or a redstone current.

``` javascript
this.on('block.NotePlayEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __NotePlayEvent__(block, instrument, note) <br> _NotePlayEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __Instrument__ <br> _Get: Gets the [`Instrument`](io/wolfscript/Instrument.md) to be used.<br>Set: Overrides the [`Instrument`](io/wolfscript/Instrument.md) to be used._ | [`Instrument`](io/wolfscript/Instrument.md)
  property __Note__ <br> _Get: Gets the [`Note`](io/wolfscript/Note.md) to be played.<br>Set: Overrides the [`Note`](io/wolfscript/Note.md) to be played._ | [`Note`](io/wolfscript/Note.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.NotePlayEvent`](io/wolfscript/event/block/NotePlayEvent.md)

---

## <a id='entity-projectilehitevent'></a>__Event__ entity.ProjectileHitEvent

Called when a projectile hits an object

``` javascript
this.on('entity.ProjectileHitEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __ProjectileHitEvent__(Projectile) <br> _ProjectileHitEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | [`Projectile`](io/wolfscript/entity/Projectile.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.ProjectileHitEvent`](io/wolfscript/event/entity/ProjectileHitEvent.md)

---

## <a id='block-signchangeevent'></a>__Event__ block.SignChangeEvent

Called when a sign is changed by a player. <p> If a Sign Change event is cancelled, the sign will not be changed.

``` javascript
this.on('block.SignChangeEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __SignChangeEvent__(Block, Player, String) <br> _SignChangeEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Lines__ <br> _Get: Gets all of the lines of text from the sign involved in this event._ | `String[]`
 readonly property __Player__ <br> _Get: Gets the player changing the sign involved in this event._ | `Player`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.SignChangeEvent`](io/wolfscript/event/block/SignChangeEvent.md)

---

## <a id='entity-explosionprimeevent'></a>__Event__ entity.ExplosionPrimeEvent

Called when an entity has made a decision to explode.

``` javascript
this.on('entity.ExplosionPrimeEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __ExplosionPrimeEvent__(Entity, float, boolean) <br> _ExplosionPrimeEvent constructor_ | _constructor_
new __ExplosionPrimeEvent__(Explosive) <br> _ExplosionPrimeEvent constructor_ | _constructor_
  property __Fire__ <br> _Get: Gets whether this explosion will create fire or not<br>Set: Sets whether this explosion will create fire or not_ | `boolean`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __Radius__ <br> _Get: Gets the radius of the explosion<br>Set: Sets the radius of the explosion_ | `float`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.ExplosionPrimeEvent`](io/wolfscript/event/entity/ExplosionPrimeEvent.md)

---

## <a id='server-serverlistpingevent'></a>__Event__ server.ServerListPingEvent

Called when a server list ping is coming in. Displayed players can be checked and removed by {@link #iterator() iterating} over this event.

``` javascript
this.on('server.ServerListPingEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __ServerListPingEvent__(InetAddress, String, int, int) <br> _ServerListPingEvent constructor_ | _constructor_
 readonly property __Address__ <br> _Get: Get the address the ping is coming from._ | `InetAddress`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __MaxPlayers__ <br> _Get: Get the maximum number of players sent.<br>Set: Set the maximum number of players sent._ | `int`
  property __Motd__ <br> _Get: Get the message of the day message.<br>Set: Change the message of the day message._ | `String`
 readonly property __NumPlayers__ <br> _Get: Get the number of players sent._ | `int`
 |
__Inherited items from [`ServerEvent`](io/wolfscript/event/server/ServerEvent.md)__ |
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`server.ServerListPingEvent`](io/wolfscript/event/server/ServerListPingEvent.md)

---

## <a id='server-serviceevent'></a>__Event__ server.ServiceEvent

An event relating to a registered service. This is called in a [`plugin.ServicesManager`](io/wolfscript/plugin/ServicesManager.md)

``` javascript
this.on('server.ServiceEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __ServiceEvent__(RegisteredServiceProvider) <br> _ServiceEvent constructor_ | _constructor_
 readonly property __Provider__ <br> _Provider property_ | `RegisteredServiceProvider<?>`
 |
__Inherited items from [`ServerEvent`](io/wolfscript/event/server/ServerEvent.md)__ |
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`server.ServiceEvent`](io/wolfscript/event/server/ServiceEvent.md)

---

## <a id='entity-entityportalevent'></a>__Event__ entity.EntityPortalEvent

Called when a non-player entity is about to teleport because it is in contact with a portal. <p> For players see [`player.PlayerPortalEvent`](io/wolfscript/event/player/PlayerPortalEvent.md)

``` javascript
this.on('entity.EntityPortalEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityPortalEvent__(Entity, Location, Location, TravelAgent) <br> _EntityPortalEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __PortalTravelAgent__ <br> _Get: Gets the Travel Agent used (or not) in this event.<br>Set: Sets the Travel Agent used (or not) in this event._ | [`TravelAgent`](io/wolfscript/TravelAgent.md)
 function __useTravelAgent__(useTravelAgent) <br> _Sets whether or not the Travel Agent will be used._ | `void`
 function __useTravelAgent__() <br> _Gets whether or not the Travel Agent will be used._ | `boolean`
 |
__Inherited items from [`EntityTeleportEvent`](io/wolfscript/event/entity/EntityTeleportEvent.md)__ |
new __EntityTeleportEvent__(what, from, to) <br> _EntityTeleportEvent constructor_ | _constructor_
  property __From__ <br> _Get: Gets the location that this entity moved from<br>Set: Sets the location that this entity moved from_ | `Location`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __To__ <br> _Get: Gets the location that this entity moved to<br>Set: Sets the location that this entity moved to_ | `Location`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`entity.EntityPortalEvent`](io/wolfscript/event/entity/EntityPortalEvent.md)

---

## <a id='block-blockigniteevent'></a>__Event__ block.BlockIgniteEvent

Called when a block is ignited. If you want to catch when a Player places fire, you need to use [`block.BlockPlaceEvent`](io/wolfscript/event/block/BlockPlaceEvent.md). <p> If a Block Ignite event is cancelled, the block will not be ignited.

``` javascript
this.on('block.BlockIgniteEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockIgniteEvent__(Block, IgniteCause, Entity) <br> _BlockIgniteEvent constructor_ | _constructor_
new __BlockIgniteEvent__(Block, IgniteCause, Block) <br> _BlockIgniteEvent constructor_ | _constructor_
new __BlockIgniteEvent__(Block, IgniteCause, Entity, Block) <br> _BlockIgniteEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: Gets the cause of block ignite._ | `IgniteCause`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __IgnitingBlock__ <br> _IgnitingBlock property_ | [`Block`](io/wolfscript/block/Block.md)
 readonly property __IgnitingEntity__ <br> _IgnitingEntity property_ | `Entity`
 readonly property __Player__ <br> _Player property_ | `Player`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.BlockIgniteEvent`](io/wolfscript/event/block/BlockIgniteEvent.md)

---

## <a id='inventory-furnacesmeltevent'></a>__Event__ inventory.FurnaceSmeltEvent

Called when an ItemStack is successfully smelted in a furnace.

``` javascript
this.on('inventory.FurnaceSmeltEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __FurnaceSmeltEvent__(Block, ItemStack, ItemStack) <br> _FurnaceSmeltEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __Result__ <br> _Get: Gets the resultant ItemStack for this event<br>Set: Sets the resultant ItemStack for this event_ | `ItemStack`
 readonly property __Source__ <br> _Get: Gets the smelted ItemStack for this event_ | `ItemStack`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`inventory.FurnaceSmeltEvent`](io/wolfscript/event/inventory/FurnaceSmeltEvent.md)

---

## <a id='inventory-inventorycreativeevent'></a>__Event__ inventory.InventoryCreativeEvent

class InventoryCreativeEvent

``` javascript
this.on('inventory.InventoryCreativeEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __InventoryCreativeEvent__(what, type, slot, newItem) <br> _InventoryCreativeEvent constructor_ | _constructor_
  property __Cursor__ <br> _Cursor property_ | `ItemStack`
 |
__Inherited items from [`InventoryClickEvent`](io/wolfscript/event/inventory/InventoryClickEvent.md)__ |
new __InventoryClickEvent__(view, type, slot, click, action) <br> _InventoryClickEvent constructor_ | _constructor_
new __InventoryClickEvent__(view, type, slot, click, action, key) <br> _InventoryClickEvent constructor_ | _constructor_
 writeonly property __CurrentItem__ <br> _Set: Sets the ItemStack currently in the clicked slot._ | `void`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __CurrentItem__ <br> _Get: Gets the ItemStack currently in the clicked slot._ | `ItemStack`
 readonly property __Click__ <br> _Get: Gets the ClickType for this event._ | [`ClickType`](io/wolfscript/event/inventory/ClickType.md)
 readonly property __Action__ <br> _Get: Gets the InventoryAction that triggered this event._ | [`InventoryAction`](io/wolfscript/event/inventory/InventoryAction.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __HotbarButton__ <br> _Get: If the ClickType is NUMBER_KEY, this method will return the index of_ | `int`
 readonly property __RawSlot__ <br> _Get: The raw slot number clicked, ready for passing to {@link InventoryView_ | `int`
 readonly property __Slot__ <br> _Get: The slot number that was clicked, ready for passing to_ | `int`
 readonly property __SlotType__ <br> _Get: Gets the type of slot that was clicked._ | `SlotType`
 function __isLeftClick__() <br> _Gets whether or not the ClickType for this event represents a left_ | `boolean`
 function __isRightClick__() <br> _Gets whether or not the ClickType for this event represents a right_ | `boolean`
 function __isShiftClick__() <br> _Gets whether the ClickType for this event indicates that the key was_ | `boolean`
 |
__Inherited items from [`InventoryInteractEvent`](io/wolfscript/event/inventory/InventoryInteractEvent.md)__ |
new __InventoryInteractEvent__(transaction) <br> _InventoryInteractEvent constructor_ | _constructor_
  property __Result__ <br> _Get: Gets the `Result` of this event. The Result describes the<br>Set: Sets the result of this event. This will change whether or not this_ | `Result`
 readonly property __WhoClicked__ <br> _Get: Gets the player who performed the click._ | `HumanEntity`
 writeonly property __Cancelled__ <br> _Set: Proxy method to `#setResult(Result)` for the Cancellable_ | `void`
 function __isCancelled__() <br> _Gets whether or not this event is cancelled. This is based off of the_ | `boolean`
 |
__Inherited items from [`InventoryEvent`](io/wolfscript/event/inventory/InventoryEvent.md)__ |
new __InventoryEvent__(transaction) <br> _InventoryEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Inventory__ <br> _Get: Gets the primary Inventory involved in this transaction_ | [`Inventory`](io/wolfscript/inventory/Inventory.md)
 readonly property __View__ <br> _Get: Gets the view object itself_ | [`InventoryView`](io/wolfscript/inventory/InventoryView.md)
 readonly property __Viewers__ <br> _Get: Gets the list of players viewing the primary (upper) inventory involved_ | `List<HumanEntity>`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`











For further details, see API Reference [`inventory.InventoryCreativeEvent`](io/wolfscript/event/inventory/InventoryCreativeEvent.md)

---

## <a id='block-blockredstoneevent'></a>__Event__ block.BlockRedstoneEvent

Called when a redstone current changes

``` javascript
this.on('block.BlockRedstoneEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockRedstoneEvent__(Block, int, int) <br> _BlockRedstoneEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __NewCurrent__ <br> _Get: Gets the new current of this block<br>Set: Sets the new current of this block_ | `int`
 readonly property __OldCurrent__ <br> _Get: Gets the old current of this block_ | `int`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.BlockRedstoneEvent`](io/wolfscript/event/block/BlockRedstoneEvent.md)

---

## <a id='player-playerjoinevent'></a>__Event__ player.PlayerJoinEvent

Called when a player joins a server

``` javascript
this.on('player.PlayerJoinEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerJoinEvent__(Player, String) <br> _PlayerJoinEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __JoinMessage__ <br> _Get: Gets the join message to send to all online players<br>Set: Sets the join message to send to all online players_ | `String`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerJoinEvent`](io/wolfscript/event/player/PlayerJoinEvent.md)

---

## <a id='entity-slimesplitevent'></a>__Event__ entity.SlimeSplitEvent

Called when a Slime splits into smaller Slimes upon death

``` javascript
this.on('entity.SlimeSplitEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __SlimeSplitEvent__(Slime, int) <br> _SlimeSplitEvent constructor_ | _constructor_
  property __Count__ <br> _Get: Gets the amount of smaller slimes to spawn<br>Set: Sets how many smaller slimes will spawn on the split_ | `int`
 readonly property __Entity__ <br> _Entity property_ | [`Slime`](io/wolfscript/entity/Slime.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.SlimeSplitEvent`](io/wolfscript/event/entity/SlimeSplitEvent.md)

---

## <a id='block-blockcanbuildevent'></a>__Event__ block.BlockCanBuildEvent

class BlockCanBuildEvent

``` javascript
this.on('block.BlockCanBuildEvent', function (e) { });
```

Method | Type   
--- | :---: 
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Material__ <br> _Get: Gets the Material that we are trying to place._ | [`Material`](io/wolfscript/Material.md)
 writeonly property __Buildable__ <br> _Set: Sets whether the block can be built here or not._ | `void`
 function __isBuildable__() <br> _Gets whether or not the block can be built here._ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.BlockCanBuildEvent`](io/wolfscript/event/block/BlockCanBuildEvent.md)

---

## <a id='player-playercommandpreprocessevent'></a>__Event__ player.PlayerCommandPreprocessEvent

class PlayerCommandPreprocessEvent

``` javascript
this.on('player.PlayerCommandPreprocessEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerCommandPreprocessEvent__(Player, String) <br> _PlayerCommandPreprocessEvent constructor_ | _constructor_
new __PlayerCommandPreprocessEvent__(Player, String, Set) <br> _PlayerCommandPreprocessEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Message__ <br> _Get: Gets the command that the player is attempting to send._ | `String`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerCommandPreprocessEvent`](io/wolfscript/event/player/PlayerCommandPreprocessEvent.md)

---

## <a id='block-entityblockformevent'></a>__Event__ block.EntityBlockFormEvent

class EntityBlockFormEvent

``` javascript
this.on('block.EntityBlockFormEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityBlockFormEvent__(Entity, Block, BlockState) <br> _EntityBlockFormEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Get the entity that formed the block._ | `Entity`
 |
__Inherited items from [`BlockFormEvent`](io/wolfscript/event/block/BlockFormEvent.md)__ |
new __BlockFormEvent__(Block, BlockState) <br> _BlockFormEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`BlockGrowEvent`](io/wolfscript/event/block/BlockGrowEvent.md)__ |
new __BlockGrowEvent__(Block, BlockState) <br> _BlockGrowEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __NewState__ <br> _Get: Gets the state of the block where it will form or spread to._ | [`BlockState`](io/wolfscript/block/BlockState.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`











For further details, see API Reference [`block.EntityBlockFormEvent`](io/wolfscript/event/block/EntityBlockFormEvent.md)

---

## <a id='entity-entityevent'></a>__Event__ entity.EntityEvent

Represents an Entity-related event

``` javascript
this.on('entity.EntityEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





For further details, see API Reference [`entity.EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)

---

## <a id='entity-entityinteractevent'></a>__Event__ entity.EntityInteractEvent

Called when an entity interacts with an object

``` javascript
this.on('entity.EntityInteractEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityInteractEvent__(Entity, Block) <br> _EntityInteractEvent constructor_ | _constructor_
 readonly property __Block__ <br> _Get: Returns the involved block_ | [`Block`](io/wolfscript/block/Block.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.EntityInteractEvent`](io/wolfscript/event/entity/EntityInteractEvent.md)

---

## <a id='entity-entityportalenterevent'></a>__Event__ entity.EntityPortalEnterEvent

Called when an entity comes into contact with a portal

``` javascript
this.on('entity.EntityPortalEnterEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityPortalEnterEvent__(Entity, Location) <br> _EntityPortalEnterEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Location__ <br> _Get: Gets the portal block the entity is touching_ | `Location`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.EntityPortalEnterEvent`](io/wolfscript/event/entity/EntityPortalEnterEvent.md)

---

## <a id='painting-paintingbreakbyentityevent'></a>__Event__ painting.PaintingBreakByEntityEvent

Triggered when a painting is removed by an entity

``` javascript
this.on('painting.PaintingBreakByEntityEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PaintingBreakByEntityEvent__(Painting, Entity) <br> _PaintingBreakByEntityEvent constructor_ | _constructor_
 readonly property __Remover__ <br> _Get: Gets the entity that removed the painting_ | `Entity`
 |
__Inherited items from [`PaintingBreakEvent`](io/wolfscript/event/painting/PaintingBreakEvent.md)__ |
new __PaintingBreakEvent__(Painting, RemoveCause) <br> _PaintingBreakEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: Gets the cause for the painting's removal_ | `RemoveCause`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PaintingEvent`](io/wolfscript/event/painting/PaintingEvent.md)__ |
 readonly property __Painting__ <br> _Get: Gets the painting involved in this event._ | [`Painting`](io/wolfscript/entity/Painting.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`painting.PaintingBreakByEntityEvent`](io/wolfscript/event/painting/PaintingBreakByEntityEvent.md)

---

## <a id='block-blockphysicsevent'></a>__Event__ block.BlockPhysicsEvent

Thrown when a block physics check is called

``` javascript
this.on('block.BlockPhysicsEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __ChangedType__ <br> _Get: Gets the type of block that changed, causing this event_ | [`Material`](io/wolfscript/Material.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.BlockPhysicsEvent`](io/wolfscript/event/block/BlockPhysicsEvent.md)

---

## <a id='block-blockexpevent'></a>__Event__ block.BlockExpEvent

An event that's called when a block yields experience.

``` javascript
this.on('block.BlockExpEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockExpEvent__(block, exp) <br> _BlockExpEvent constructor_ | _constructor_
  property __ExpToDrop__ <br> _Get: Get the experience dropped by the block after the event has processed<br>Set: Set the amount of experience dropped by the block after the event has_ | `int`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.BlockExpEvent`](io/wolfscript/event/block/BlockExpEvent.md)

---

## <a id='player-playerstatisticincrementevent'></a>__Event__ player.PlayerStatisticIncrementEvent

Called when a player statistic is incremented. <p> This event is not called for `wolfscript.Statistic#PLAY_ONE_TICK` or movement based statistics.

``` javascript
this.on('player.PlayerStatisticIncrementEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerStatisticIncrementEvent__(player, statistic, initialValue, newValue) <br> _PlayerStatisticIncrementEvent constructor_ | _constructor_
new __PlayerStatisticIncrementEvent__(player, statistic, initialValue, newValue, entityType) <br> _PlayerStatisticIncrementEvent constructor_ | _constructor_
new __PlayerStatisticIncrementEvent__(player, statistic, initialValue, newValue, material) <br> _PlayerStatisticIncrementEvent constructor_ | _constructor_
 readonly property __EntityType__ <br> _Get: Gets the EntityType if {@link #getStatistic() getStatistic()} is an_ | [`EntityType`](io/wolfscript/entity/EntityType.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Material__ <br> _Get: Gets the Material if {@link #getStatistic() getStatistic()} is a block_ | [`Material`](io/wolfscript/Material.md)
 readonly property __NewValue__ <br> _Get: Gets the new value of the statistic._ | `int`
 readonly property __PreviousValue__ <br> _Get: Gets the previous value of the statistic._ | `int`
 readonly property __Statistic__ <br> _Get: Gets the statistic that is being incremented._ | [`Statistic`](io/wolfscript/Statistic.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerStatisticIncrementEvent`](io/wolfscript/event/player/PlayerStatisticIncrementEvent.md)

---

## <a id='block-blockevent'></a>__Event__ block.BlockEvent

Represents a block related event.

``` javascript
this.on('block.BlockEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





For further details, see API Reference [`block.BlockEvent`](io/wolfscript/event/block/BlockEvent.md)

---

## <a id='entity-sheepregrowwoolevent'></a>__Event__ entity.SheepRegrowWoolEvent

Called when a sheep regrows its wool

``` javascript
this.on('entity.SheepRegrowWoolEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __SheepRegrowWoolEvent__(Sheep) <br> _SheepRegrowWoolEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | `Sheep`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.SheepRegrowWoolEvent`](io/wolfscript/event/entity/SheepRegrowWoolEvent.md)

---

## <a id='player-playerpreloginevent'></a>__Event__ player.PlayerPreLoginEvent

Stores details for players attempting to log in

``` javascript
this.on('player.PlayerPreLoginEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerPreLoginEvent__(String, InetAddress, UUID) <br> _PlayerPreLoginEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Address__ <br> _Get: Gets the player IP address._ | `InetAddress`
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __KickMessage__ <br> _Get: Gets the current kick message that will be used if getResult() !=<br>Set: Sets the kick message to display if getResult() != Result.ALLOWED_ | `String`
 readonly property __Name__ <br> _Get: Gets the player's name._ | `String`
  property __Result__ <br> _Get: Gets the current result of the login, as an enum<br>Set: Sets the new result of the login, as an enum_ | `Result`
 readonly property __UniqueId__ <br> _Get: Gets the player's unique ID._ | `UUID`
 function __disallow__(Result, String) <br> _Disallows the player from logging in, with the given reason_ | `void`
 function __allow__() <br> _Allows the player to log in_ | `void`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





For further details, see API Reference [`player.PlayerPreLoginEvent`](io/wolfscript/event/player/PlayerPreLoginEvent.md)

---

## <a id='block-blockburnevent'></a>__Event__ block.BlockBurnEvent

Called when a block is destroyed as a result of being burnt by fire. <p> If a Block Burn event is cancelled, the block will not be destroyed as a result of being burnt by fire.

``` javascript
this.on('block.BlockBurnEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockBurnEvent__(Block) <br> _BlockBurnEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.BlockBurnEvent`](io/wolfscript/event/block/BlockBurnEvent.md)

---

## <a id='entity-entityteleportevent'></a>__Event__ entity.EntityTeleportEvent

Thrown when a non-player entity (such as an Enderman) tries to teleport from one location to another.

``` javascript
this.on('entity.EntityTeleportEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityTeleportEvent__(what, from, to) <br> _EntityTeleportEvent constructor_ | _constructor_
  property __From__ <br> _Get: Gets the location that this entity moved from<br>Set: Sets the location that this entity moved from_ | `Location`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __To__ <br> _Get: Gets the location that this entity moved to<br>Set: Sets the location that this entity moved to_ | `Location`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.EntityTeleportEvent`](io/wolfscript/event/entity/EntityTeleportEvent.md)

---

## <a id='enchantment-enchantitemevent'></a>__Event__ enchantment.EnchantItemEvent

Called when an ItemStack is successfully enchanted (currently at enchantment table)

``` javascript
this.on('enchantment.EnchantItemEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EnchantItemEvent__(Player, InventoryView, Block, ItemStack, int, Map, int) <br> _EnchantItemEvent constructor_ | _constructor_
 readonly property __EnchantBlock__ <br> _Get: Gets the block being used to enchant the item_ | [`Block`](io/wolfscript/block/Block.md)
 readonly property __Enchanter__ <br> _Get: Gets the player enchanting the item_ | `Player`
  property __ExpLevelCost__ <br> _Get: Get cost in exp levels of the enchantment<br>Set: Set cost in exp levels of the enchantment_ | `int`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Item__ <br> _Get: Gets the item to be enchanted (can be modified)_ | `ItemStack`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __whichButton__() <br> _Which button was pressed to initiate the enchanting._ | `int`
 |
__Inherited items from [`InventoryEvent`](io/wolfscript/event/inventory/InventoryEvent.md)__ |
new __InventoryEvent__(transaction) <br> _InventoryEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Inventory__ <br> _Get: Gets the primary Inventory involved in this transaction_ | [`Inventory`](io/wolfscript/inventory/Inventory.md)
 readonly property __View__ <br> _Get: Gets the view object itself_ | [`InventoryView`](io/wolfscript/inventory/InventoryView.md)
 readonly property __Viewers__ <br> _Get: Gets the list of players viewing the primary (upper) inventory involved_ | `List<HumanEntity>`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`enchantment.EnchantItemEvent`](io/wolfscript/event/enchantment/EnchantItemEvent.md)

---

## <a id='player-playerkickevent'></a>__Event__ player.PlayerKickEvent

Called when a player gets kicked from the server

``` javascript
this.on('player.PlayerKickEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerKickEvent__(Player, String, String) <br> _PlayerKickEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __LeaveMessage__ <br> _Get: Gets the leave message send to all online players<br>Set: Sets the leave message send to all online players_ | `String`
  property __Reason__ <br> _Get: Gets the reason why the player is getting kicked<br>Set: Sets the reason why the player is getting kicked_ | `String`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerKickEvent`](io/wolfscript/event/player/PlayerKickEvent.md)

---

## <a id='inventory-inventoryevent'></a>__Event__ inventory.InventoryEvent

Represents a player related inventory event

``` javascript
this.on('inventory.InventoryEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __InventoryEvent__(transaction) <br> _InventoryEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Inventory__ <br> _Get: Gets the primary Inventory involved in this transaction_ | [`Inventory`](io/wolfscript/inventory/Inventory.md)
 readonly property __View__ <br> _Get: Gets the view object itself_ | [`InventoryView`](io/wolfscript/inventory/InventoryView.md)
 readonly property __Viewers__ <br> _Get: Gets the list of players viewing the primary (upper) inventory involved_ | `List<HumanEntity>`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





For further details, see API Reference [`inventory.InventoryEvent`](io/wolfscript/event/inventory/InventoryEvent.md)

---

## <a id='player-playerchattabcompleteevent'></a>__Event__ player.PlayerChatTabCompleteEvent

Called when a player attempts to tab-complete a chat message.

``` javascript
this.on('player.PlayerChatTabCompleteEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerChatTabCompleteEvent__(Player, String, Collection) <br> _PlayerChatTabCompleteEvent constructor_ | _constructor_
 readonly property __ChatMessage__ <br> _Get: Gets the chat message being tab-completed._ | `String`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __LastToken__ <br> _Get: Gets the last 'token' of the message being tab-completed._ | `String`
 readonly property __TabCompletions__ <br> _Get: This is the collection of completions for this event._ | `Collection<String>`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerChatTabCompleteEvent`](io/wolfscript/event/player/PlayerChatTabCompleteEvent.md)

---

## <a id='player-playerchangedworldevent'></a>__Event__ player.PlayerChangedWorldEvent

Called when a player switches to another world.

``` javascript
this.on('player.PlayerChangedWorldEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerChangedWorldEvent__(Player, World) <br> _PlayerChangedWorldEvent constructor_ | _constructor_
 readonly property __From__ <br> _Get: Gets the world the player is switching from._ | `World`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerChangedWorldEvent`](io/wolfscript/event/player/PlayerChangedWorldEvent.md)

---

## <a id='vehicle-vehicleenterevent'></a>__Event__ vehicle.VehicleEnterEvent

Raised when an entity enters a vehicle.

``` javascript
this.on('vehicle.VehicleEnterEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleEnterEvent__(Vehicle, Entity) <br> _VehicleEnterEvent constructor_ | _constructor_
 readonly property __Entered__ <br> _Get: Gets the Entity that entered the vehicle._ | `Entity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`VehicleEvent`](io/wolfscript/event/vehicle/VehicleEvent.md)__ |
new __VehicleEvent__(Vehicle) <br> _VehicleEvent constructor_ | _constructor_
final readonly property __Vehicle__ <br> _Get: Get the vehicle._ | [`Vehicle`](io/wolfscript/entity/Vehicle.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`vehicle.VehicleEnterEvent`](io/wolfscript/event/vehicle/VehicleEnterEvent.md)

---

## <a id='entity-entitytargetevent'></a>__Event__ entity.EntityTargetEvent

Called when a creature targets or untargets another entity

``` javascript
this.on('entity.EntityTargetEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityTargetEvent__(Entity, Entity, TargetReason) <br> _EntityTargetEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Reason__ <br> _Get: Returns the reason for the targeting_ | `TargetReason`
  property __Target__ <br> _Get: Get the entity that this is targeting.<br>Set: Set the entity that you want the mob to target instead._ | `Entity`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.EntityTargetEvent`](io/wolfscript/event/entity/EntityTargetEvent.md)

---

## <a id='entity-creeperpowerevent'></a>__Event__ entity.CreeperPowerEvent

Called when a Creeper is struck by lightning. <p> If a Creeper Power event is cancelled, the Creeper will not be powered.

``` javascript
this.on('entity.CreeperPowerEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __CreeperPowerEvent__(Creeper, LightningStrike, PowerCause) <br> _CreeperPowerEvent constructor_ | _constructor_
new __CreeperPowerEvent__(Creeper, PowerCause) <br> _CreeperPowerEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: Gets the cause of the creeper being (un)powered._ | `PowerCause`
 readonly property __Entity__ <br> _Entity property_ | [`Creeper`](io/wolfscript/entity/Creeper.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Lightning__ <br> _Get: Gets the lightning bolt which is striking the Creeper._ | [`LightningStrike`](io/wolfscript/entity/LightningStrike.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.CreeperPowerEvent`](io/wolfscript/event/entity/CreeperPowerEvent.md)

---

## <a id='entity-entityunleashevent'></a>__Event__ entity.EntityUnleashEvent

Called immediately prior to an entity being unleashed.

``` javascript
this.on('entity.EntityUnleashEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityUnleashEvent__(entity, reason) <br> _EntityUnleashEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Reason__ <br> _Get: Returns the reason for the unleashing._ | `UnleashReason`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.EntityUnleashEvent`](io/wolfscript/event/entity/EntityUnleashEvent.md)

---

## <a id='server-remoteservercommandevent'></a>__Event__ server.RemoteServerCommandEvent

This event is called when a command is recieved over RCON. See the javadocs of [`server.ServerCommandEvent`](io/wolfscript/event/server/ServerCommandEvent.md) for more information.

``` javascript
this.on('server.RemoteServerCommandEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __RemoteServerCommandEvent__(CommandSender, String) <br> _RemoteServerCommandEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`ServerCommandEvent`](io/wolfscript/event/server/ServerCommandEvent.md)__ |
new __ServerCommandEvent__(CommandSender, String) <br> _ServerCommandEvent constructor_ | _constructor_
  property __Command__ <br> _Get: Gets the command that the user is attempting to execute from the<br>Set: Sets the command that the server will execute_ | `String`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Sender__ <br> _Get: Get the command sender._ | [`CommandSender`](io/wolfscript/command/CommandSender.md)
 |
__Inherited items from [`ServerEvent`](io/wolfscript/event/server/ServerEvent.md)__ |
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`server.RemoteServerCommandEvent`](io/wolfscript/event/server/RemoteServerCommandEvent.md)

---

## <a id='block-blockmultiplaceevent'></a>__Event__ block.BlockMultiPlaceEvent

Fired when a single block placement action of a player triggers the creation of multiple blocks(e.g. placing a bed block). The block returned by `#getBlockPlaced()` and its related methods is the block where the placed block would exist if the placement only affected a single block.

``` javascript
this.on('block.BlockMultiPlaceEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockMultiPlaceEvent__(clicked, itemInHand, thePlayer, canBuild) <br> _BlockMultiPlaceEvent constructor_ | _constructor_
 readonly property __ReplacedBlockStates__ <br> _Get: Gets a list of blockstates for all blocks which were replaced by the_ | `List<BlockState>`
 |
__Inherited items from [`BlockPlaceEvent`](io/wolfscript/event/block/BlockPlaceEvent.md)__ |
new __BlockPlaceEvent__(Block, BlockState, Block, ItemStack, Player, boolean) <br> _BlockPlaceEvent constructor_ | _constructor_
 readonly property __BlockAgainst__ <br> _Get: Gets the block that this block was placed against_ | [`Block`](io/wolfscript/block/Block.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __BlockPlaced__ <br> _Get: Clarity method for getting the placed block. Not really needed except_ | [`Block`](io/wolfscript/block/Block.md)
 readonly property __BlockReplacedState__ <br> _Get: Gets the BlockState for the block which was replaced. Material type air_ | [`BlockState`](io/wolfscript/block/BlockState.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __ItemInHand__ <br> _Get: Gets the item in the player's hand when they placed the block._ | `ItemStack`
 readonly property __Player__ <br> _Get: Gets the player who placed the block involved in this event._ | `Player`
 writeonly property __Build__ <br> _Set: Sets the canBuild state of this event. Set to true if you want the_ | `void`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __canBuild__() <br> _Gets the value whether the player would be allowed to build here._ | `boolean`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`block.BlockMultiPlaceEvent`](io/wolfscript/event/block/BlockMultiPlaceEvent.md)

---

## <a id='player-playershearentityevent'></a>__Event__ player.PlayerShearEntityEvent

Called when a player shears an entity

``` javascript
this.on('player.PlayerShearEntityEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerShearEntityEvent__(Player, Entity) <br> _PlayerShearEntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Gets the entity the player is shearing_ | `Entity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerShearEntityEvent`](io/wolfscript/event/player/PlayerShearEntityEvent.md)

---

## <a id='player-asyncplayerchatevent'></a>__Event__ player.AsyncPlayerChatEvent

This event will sometimes fire synchronously, depending on how it was triggered. <p> The constructor provides a boolean to indicate if the event was fired synchronously or asynchronously. When asynchronous, this event can be called from any thread, sans the main thread, and has limited access to the API. <p> If a player is the direct cause of this event by an incoming packet, this event will be asynchronous. If a plugin triggers this event by compelling a player to chat, this event will be synchronous. <p> Care should be taken to check `#isAsynchronous()` and treat the event appropriately.

``` javascript
this.on('player.AsyncPlayerChatEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __AsyncPlayerChatEvent__(boolean, Player, String, Set) <br> _AsyncPlayerChatEvent constructor_ | _constructor_
 readonly property __Format__ <br> _Get: Gets the format to use to display this chat message._ | `String`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __Message__ <br> _Get: Gets the message that the player is attempting to send. This message<br>Set: Sets the message that the player will send. This message will be used_ | `String`
 readonly property __Recipients__ <br> _Get: Gets a set of recipients that this chat message will be displayed to._ | `Set<Player>`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.AsyncPlayerChatEvent`](io/wolfscript/event/player/AsyncPlayerChatEvent.md)

---

## <a id='server-serverevent'></a>__Event__ server.ServerEvent

Miscellaneous server events

``` javascript
this.on('server.ServerEvent', function (e) { });
```

Method | Type   
--- | :---: 
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





For further details, see API Reference [`server.ServerEvent`](io/wolfscript/event/server/ServerEvent.md)

---

## <a id='inventory-furnaceburnevent'></a>__Event__ inventory.FurnaceBurnEvent

Called when an ItemStack is successfully burned as fuel in a furnace.

``` javascript
this.on('inventory.FurnaceBurnEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __FurnaceBurnEvent__(Block, ItemStack, int) <br> _FurnaceBurnEvent constructor_ | _constructor_
  property __BurnTime__ <br> _Get: Gets the burn time for this fuel<br>Set: Sets the burn time for this fuel_ | `int`
 readonly property __Fuel__ <br> _Get: Gets the fuel ItemStack for this event_ | `ItemStack`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Burning__ <br> _Set: Sets whether the furnace's fuel is burning or not._ | `void`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isBurning__() <br> _Gets whether the furnace's fuel is burning or not._ | `boolean`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`inventory.FurnaceBurnEvent`](io/wolfscript/event/inventory/FurnaceBurnEvent.md)

---

## <a id='entity-itemspawnevent'></a>__Event__ entity.ItemSpawnEvent

Called when an item is spawned into a world

``` javascript
this.on('entity.ItemSpawnEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __ItemSpawnEvent__(Item, Location) <br> _ItemSpawnEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | [`Item`](io/wolfscript/entity/Item.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Location__ <br> _Get: Gets the location at which the item is spawning._ | `Location`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.ItemSpawnEvent`](io/wolfscript/event/entity/ItemSpawnEvent.md)

---

## <a id='player-playerportalevent'></a>__Event__ player.PlayerPortalEvent

Called when a player is about to teleport because it is in contact with a portal. <p> For other entities see [`entity.EntityPortalEvent`](io/wolfscript/event/entity/EntityPortalEvent.md)

``` javascript
this.on('player.PlayerPortalEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerPortalEvent__(Player, Location, Location, TravelAgent) <br> _PlayerPortalEvent constructor_ | _constructor_
new __PlayerPortalEvent__(player, from, to, pta, cause) <br> _PlayerPortalEvent constructor_ | _constructor_
 function __useTravelAgent__(useTravelAgent) <br> _Sets whether or not the Travel Agent will be used._ | `void`
 |
__Inherited items from [`PlayerTeleportEvent`](io/wolfscript/event/player/PlayerTeleportEvent.md)__ |
new __PlayerTeleportEvent__(Player, Location, Location) <br> _PlayerTeleportEvent constructor_ | _constructor_
new __PlayerTeleportEvent__(Player, Location, Location, TeleportCause) <br> _PlayerTeleportEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: Gets the cause of this teleportation event_ | `TeleportCause`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`PlayerMoveEvent`](io/wolfscript/event/player/PlayerMoveEvent.md)__ |
new __PlayerMoveEvent__(Player, Location, Location) <br> _PlayerMoveEvent constructor_ | _constructor_
  property __From__ <br> _Get: Gets the location this player moved from<br>Set: Sets the location to mark as where the player moved from_ | `Location`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __To__ <br> _Get: Gets the location this player moved to<br>Set: Sets the location that this player will move to_ | `Location`
 writeonly property __Cancelled__ <br> _Set: Sets the cancellation state of this event. A cancelled event will not_ | `void`
 function __isCancelled__() <br> _Gets the cancellation state of this event. A cancelled event will not_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`











For further details, see API Reference [`player.PlayerPortalEvent`](io/wolfscript/event/player/PlayerPortalEvent.md)

---

## <a id='vehicle-vehiclecreateevent'></a>__Event__ vehicle.VehicleCreateEvent

Raised when a vehicle is created.

``` javascript
this.on('vehicle.VehicleCreateEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleCreateEvent__(Vehicle) <br> _VehicleCreateEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`VehicleEvent`](io/wolfscript/event/vehicle/VehicleEvent.md)__ |
new __VehicleEvent__(Vehicle) <br> _VehicleEvent constructor_ | _constructor_
final readonly property __Vehicle__ <br> _Get: Get the vehicle._ | [`Vehicle`](io/wolfscript/entity/Vehicle.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`vehicle.VehicleCreateEvent`](io/wolfscript/event/vehicle/VehicleCreateEvent.md)

---

## <a id='entity-entitycombustbyentityevent'></a>__Event__ entity.EntityCombustByEntityEvent

Called when an entity causes another entity to combust.

``` javascript
this.on('entity.EntityCombustByEntityEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityCombustByEntityEvent__(Entity, Entity, int) <br> _EntityCombustByEntityEvent constructor_ | _constructor_
 readonly property __Combuster__ <br> _Get: Get the entity that caused the combustion event._ | `Entity`
 |
__Inherited items from [`EntityCombustEvent`](io/wolfscript/event/entity/EntityCombustEvent.md)__ |
new __EntityCombustEvent__(Entity, int) <br> _EntityCombustEvent constructor_ | _constructor_
  property __Duration__ <br> _Duration property<br>Set: The number of seconds the combustee should be alight for._ | `int`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`entity.EntityCombustByEntityEvent`](io/wolfscript/event/entity/EntityCombustByEntityEvent.md)

---

## <a id='vehicle-vehicleupdateevent'></a>__Event__ vehicle.VehicleUpdateEvent

Called when a vehicle updates

``` javascript
this.on('vehicle.VehicleUpdateEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleUpdateEvent__(Vehicle) <br> _VehicleUpdateEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`VehicleEvent`](io/wolfscript/event/vehicle/VehicleEvent.md)__ |
new __VehicleEvent__(Vehicle) <br> _VehicleEvent constructor_ | _constructor_
final readonly property __Vehicle__ <br> _Get: Get the vehicle._ | [`Vehicle`](io/wolfscript/entity/Vehicle.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`vehicle.VehicleUpdateEvent`](io/wolfscript/event/vehicle/VehicleUpdateEvent.md)

---

## <a id='world-portalcreateevent'></a>__Event__ world.PortalCreateEvent

Called when a portal is created

``` javascript
this.on('world.PortalCreateEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PortalCreateEvent__(Collection, World, reason) <br> _PortalCreateEvent constructor_ | _constructor_
 readonly property __Blocks__ <br> _Get: Gets an array list of all the blocks associated with the created portal_ | `ArrayList<Block>`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Reason__ <br> _Get: Gets the reason for the portal's creation_ | `CreateReason`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`WorldEvent`](io/wolfscript/event/world/WorldEvent.md)__ |
new __WorldEvent__(World) <br> _WorldEvent constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the world primarily involved with this event_ | `World`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`world.PortalCreateEvent`](io/wolfscript/event/world/PortalCreateEvent.md)

---

## <a id='player-playerchannelevent'></a>__Event__ player.PlayerChannelEvent

This event is called after a player registers or unregisters a new plugin channel.

``` javascript
this.on('player.PlayerChannelEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerChannelEvent__(Player, String) <br> _PlayerChannelEvent constructor_ | _constructor_
final readonly property __Channel__ <br> _Channel property_ | `String`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerChannelEvent`](io/wolfscript/event/player/PlayerChannelEvent.md)

---

## <a id='vehicle-vehicledamageevent'></a>__Event__ vehicle.VehicleDamageEvent

Raised when a vehicle receives damage.

``` javascript
this.on('vehicle.VehicleDamageEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleDamageEvent__(Vehicle, Entity, double) <br> _VehicleDamageEvent constructor_ | _constructor_
 readonly property __Attacker__ <br> _Get: Gets the Entity that is attacking the vehicle_ | `Entity`
  property __Damage__ <br> _Get: Gets the damage done to the vehicle<br>Set: Sets the damage done to the vehicle_ | `double`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`VehicleEvent`](io/wolfscript/event/vehicle/VehicleEvent.md)__ |
new __VehicleEvent__(Vehicle) <br> _VehicleEvent constructor_ | _constructor_
final readonly property __Vehicle__ <br> _Get: Get the vehicle._ | [`Vehicle`](io/wolfscript/entity/Vehicle.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`vehicle.VehicleDamageEvent`](io/wolfscript/event/vehicle/VehicleDamageEvent.md)

---

## <a id='entity-entitydamageevent'></a>__Event__ entity.EntityDamageEvent

Stores data for damage events

``` javascript
this.on('entity.EntityDamageEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityDamageEvent__(Entity, DamageCause, Map, Map, Function) <br> _EntityDamageEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: Gets the cause of the damage._ | `DamageCause`
  property __Damage__ <br> _Get: Gets the raw amount of damage caused by the event<br>Set: Sets the raw amount of damage caused by the event._ | `double`
final readonly property __FinalDamage__ <br> _Get: Gets the amount of damage caused by the event after all damage_ | `double`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.EntityDamageEvent`](io/wolfscript/event/entity/EntityDamageEvent.md)

---

## <a id='player-playerinteractevent'></a>__Event__ player.PlayerInteractEvent

Called when a player interacts with an object or air. <p> This event will fire as cancelled if the vanilla behavior is to do nothing (e.g interacting with air)

``` javascript
this.on('player.PlayerInteractEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerInteractEvent__(Player, Action, ItemStack, Block, BlockFace) <br> _PlayerInteractEvent constructor_ | _constructor_
 readonly property __ClickedBlock__ <br> _Get: Returns the clicked block_ | [`Block`](io/wolfscript/block/Block.md)
 readonly property __Action__ <br> _Get: Returns the action type_ | [`Action`](io/wolfscript/event/block/Action.md)
 readonly property __BlockFace__ <br> _Get: Returns the face of the block that was clicked_ | [`BlockFace`](io/wolfscript/block/BlockFace.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Material__ <br> _Get: Convenience method. Returns the material of the item represented by_ | [`Material`](io/wolfscript/Material.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Item__ <br> _Get: Returns the item in hand represented by this event_ | `ItemStack`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 writeonly property __UseInteractedBlock__ <br> _UseInteractedBlock property_ | `void`
 writeonly property __UseItemInHand__ <br> _UseItemInHand property_ | `void`
 function __useInteractedBlock__() <br> _This controls the action to take with the block (if any) that was_ | `Result`
 function __hasBlock__() <br> _Check if this event involved a block_ | `boolean`
 function __hasItem__() <br> _Check if this event involved an item_ | `boolean`
 function __isBlockInHand__() <br> _Convenience method to inform the user whether this was a block_ | `boolean`
 function __isCancelled__() <br> _Gets the cancellation state of this event. Set to true if you want to_ | `boolean`
 function __useItemInHand__() <br> _This controls the action to take with the item the player is holding._ | `Result`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerInteractEvent`](io/wolfscript/event/player/PlayerInteractEvent.md)

---

## <a id='entity-projectilelaunchevent'></a>__Event__ entity.ProjectileLaunchEvent

Called when a projectile is launched.

``` javascript
this.on('entity.ProjectileLaunchEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __ProjectileLaunchEvent__(what) <br> _ProjectileLaunchEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | [`Projectile`](io/wolfscript/entity/Projectile.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.ProjectileLaunchEvent`](io/wolfscript/event/entity/ProjectileLaunchEvent.md)

---

## <a id='player-playerinteractentityevent'></a>__Event__ player.PlayerInteractEntityEvent

Represents an event that is called when a player right clicks an entity.

``` javascript
this.on('player.PlayerInteractEntityEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerInteractEntityEvent__(Player, Entity) <br> _PlayerInteractEntityEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __RightClicked__ <br> _Get: Gets the entity that was rightclicked by the player._ | `Entity`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerInteractEntityEvent`](io/wolfscript/event/player/PlayerInteractEntityEvent.md)

---

## <a id='player-playereggthrowevent'></a>__Event__ player.PlayerEggThrowEvent

Called when a player throws an egg and it might hatch

``` javascript
this.on('player.PlayerEggThrowEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerEggThrowEvent__(Player, Egg, boolean, byte, EntityType) <br> _PlayerEggThrowEvent constructor_ | _constructor_
 readonly property __Egg__ <br> _Get: Gets the egg involved in this event._ | [`Egg`](io/wolfscript/entity/Egg.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __HatchingType__ <br> _Get: Get the type of the mob being hatched (EntityType.CHICKEN by default)<br>Set: Change the type of mob being hatched by the egg_ | [`EntityType`](io/wolfscript/entity/EntityType.md)
  property __NumHatches__ <br> _NumHatches property<br>Set: Change the number of mobs coming out of the hatched egg_ | `byte`
 writeonly property __Hatching__ <br> _Set: Sets whether the egg will hatch or not._ | `void`
 function __isHatching__() <br> _Gets whether the egg is hatching or not. Will be what the server_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerEggThrowEvent`](io/wolfscript/event/player/PlayerEggThrowEvent.md)

---

## <a id='entity-sheepdyewoolevent'></a>__Event__ entity.SheepDyeWoolEvent

Called when a sheep's wool is dyed

``` javascript
this.on('entity.SheepDyeWoolEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __SheepDyeWoolEvent__(Sheep, DyeColor) <br> _SheepDyeWoolEvent constructor_ | _constructor_
  property __Color__ <br> _Get: Gets the DyeColor the sheep is being dyed<br>Set: Sets the DyeColor the sheep is being dyed_ | [`DyeColor`](io/wolfscript/DyeColor.md)
 readonly property __Entity__ <br> _Entity property_ | `Sheep`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.SheepDyeWoolEvent`](io/wolfscript/event/entity/SheepDyeWoolEvent.md)

---

## <a id='entity-entityshootbowevent'></a>__Event__ entity.EntityShootBowEvent

Called when a LivingEntity shoots a bow firing an arrow

``` javascript
this.on('entity.EntityShootBowEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityShootBowEvent__(LivingEntity, ItemStack, Projectile, float) <br> _EntityShootBowEvent constructor_ | _constructor_
 readonly property __Bow__ <br> _Get: Gets the bow ItemStack used to fire the arrow._ | `ItemStack`
 readonly property __Entity__ <br> _Entity property_ | `LivingEntity`
 readonly property __Force__ <br> _Get: Gets the force the arrow was launched with_ | `float`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __Projectile__ <br> _Get: Gets the projectile which will be launched by this event<br>Set: Replaces the projectile which will be launched_ | `Entity`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.EntityShootBowEvent`](io/wolfscript/event/entity/EntityShootBowEvent.md)

---

## <a id='entity-entitycombustbyblockevent'></a>__Event__ entity.EntityCombustByBlockEvent

Called when a block causes an entity to combust.

``` javascript
this.on('entity.EntityCombustByBlockEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityCombustByBlockEvent__(Block, Entity, int) <br> _EntityCombustByBlockEvent constructor_ | _constructor_
 readonly property __Combuster__ <br> _Get: The combuster can be lava or a block that is on fire._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`EntityCombustEvent`](io/wolfscript/event/entity/EntityCombustEvent.md)__ |
new __EntityCombustEvent__(Entity, int) <br> _EntityCombustEvent constructor_ | _constructor_
  property __Duration__ <br> _Duration property<br>Set: The number of seconds the combustee should be alight for._ | `int`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`entity.EntityCombustByBlockEvent`](io/wolfscript/event/entity/EntityCombustByBlockEvent.md)

---

## <a id='player-playertogglesprintevent'></a>__Event__ player.PlayerToggleSprintEvent

Called when a player toggles their sprinting state

``` javascript
this.on('player.PlayerToggleSprintEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerToggleSprintEvent__(Player, boolean) <br> _PlayerToggleSprintEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __isSprinting__() <br> _Gets whether the player is now sprinting or not._ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerToggleSprintEvent`](io/wolfscript/event/player/PlayerToggleSprintEvent.md)

---

## <a id='player-playerbucketfillevent'></a>__Event__ player.PlayerBucketFillEvent

Called when a player fills a bucket

``` javascript
this.on('player.PlayerBucketFillEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerBucketFillEvent__(Player, Block, BlockFace, Material, ItemStack) <br> _PlayerBucketFillEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`PlayerBucketEvent`](io/wolfscript/event/player/PlayerBucketEvent.md)__ |
new __PlayerBucketEvent__(Player, Block, BlockFace, Material, ItemStack) <br> _PlayerBucketEvent constructor_ | _constructor_
 readonly property __BlockClicked__ <br> _Get: Return the block clicked_ | [`Block`](io/wolfscript/block/Block.md)
 readonly property __BlockFace__ <br> _Get: Get the face on the clicked block_ | [`BlockFace`](io/wolfscript/block/BlockFace.md)
 readonly property __Bucket__ <br> _Get: Returns the bucket used in this event_ | [`Material`](io/wolfscript/Material.md)
  property __ItemStack__ <br> _Get: Get the resulting item in hand after the bucket event<br>Set: Set the item in hand after the event_ | `ItemStack`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`player.PlayerBucketFillEvent`](io/wolfscript/event/player/PlayerBucketFillEvent.md)

---

## <a id='player-playereditbookevent'></a>__Event__ player.PlayerEditBookEvent

Called when a player edits or signs a book and quill item. If the event is cancelled, no changes are made to the BookMeta

``` javascript
this.on('player.PlayerEditBookEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerEditBookEvent__(who, slot, previousBookMeta, newBookMeta, isSigning) <br> _PlayerEditBookEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __NewBookMeta__ <br> _Get: Gets the book meta that the player is attempting to add to the book._ | [`BookMeta`](io/wolfscript/inventory/meta/BookMeta.md)
 readonly property __PreviousBookMeta__ <br> _Get: Gets the book meta currently on the book._ | [`BookMeta`](io/wolfscript/inventory/meta/BookMeta.md)
 readonly property __Slot__ <br> _Get: Gets the inventory slot number for the book item that triggered this_ | `int`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 writeonly property __Signing__ <br> _Set: Sets whether or not the book is being signed. If a book is signed the_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __isSigning__() <br> _Gets whether or not the book is being signed. If a book is signed the_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerEditBookEvent`](io/wolfscript/event/player/PlayerEditBookEvent.md)

---

## <a id='block-blockpistonevent'></a>__Event__ block.BlockPistonEvent

Called when a piston block is triggered

``` javascript
this.on('block.BlockPistonEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockPistonEvent__(Block, BlockFace) <br> _BlockPistonEvent constructor_ | _constructor_
 readonly property __Direction__ <br> _Get: Return the direction in which the piston will operate._ | [`BlockFace`](io/wolfscript/block/BlockFace.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __isSticky__() <br> _Returns true if the Piston in the event is sticky._ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.BlockPistonEvent`](io/wolfscript/event/block/BlockPistonEvent.md)

---

## <a id='inventory-inventoryclickevent'></a>__Event__ inventory.InventoryClickEvent

class InventoryClickEvent

``` javascript
this.on('inventory.InventoryClickEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __InventoryClickEvent__(view, type, slot, click, action) <br> _InventoryClickEvent constructor_ | _constructor_
new __InventoryClickEvent__(view, type, slot, click, action, key) <br> _InventoryClickEvent constructor_ | _constructor_
 writeonly property __CurrentItem__ <br> _Set: Sets the ItemStack currently in the clicked slot._ | `void`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __CurrentItem__ <br> _Get: Gets the ItemStack currently in the clicked slot._ | `ItemStack`
 readonly property __Click__ <br> _Get: Gets the ClickType for this event._ | [`ClickType`](io/wolfscript/event/inventory/ClickType.md)
 readonly property __Action__ <br> _Get: Gets the InventoryAction that triggered this event._ | [`InventoryAction`](io/wolfscript/event/inventory/InventoryAction.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __HotbarButton__ <br> _Get: If the ClickType is NUMBER_KEY, this method will return the index of_ | `int`
 readonly property __RawSlot__ <br> _Get: The raw slot number clicked, ready for passing to {@link InventoryView_ | `int`
 readonly property __Slot__ <br> _Get: The slot number that was clicked, ready for passing to_ | `int`
 readonly property __SlotType__ <br> _Get: Gets the type of slot that was clicked._ | `SlotType`
 function __isLeftClick__() <br> _Gets whether or not the ClickType for this event represents a left_ | `boolean`
 function __isRightClick__() <br> _Gets whether or not the ClickType for this event represents a right_ | `boolean`
 function __isShiftClick__() <br> _Gets whether the ClickType for this event indicates that the key was_ | `boolean`
 |
__Inherited items from [`InventoryInteractEvent`](io/wolfscript/event/inventory/InventoryInteractEvent.md)__ |
new __InventoryInteractEvent__(transaction) <br> _InventoryInteractEvent constructor_ | _constructor_
  property __Result__ <br> _Get: Gets the `Result` of this event. The Result describes the<br>Set: Sets the result of this event. This will change whether or not this_ | `Result`
 readonly property __WhoClicked__ <br> _Get: Gets the player who performed the click._ | `HumanEntity`
 writeonly property __Cancelled__ <br> _Set: Proxy method to `#setResult(Result)` for the Cancellable_ | `void`
 function __isCancelled__() <br> _Gets whether or not this event is cancelled. This is based off of the_ | `boolean`
 |
__Inherited items from [`InventoryEvent`](io/wolfscript/event/inventory/InventoryEvent.md)__ |
new __InventoryEvent__(transaction) <br> _InventoryEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Inventory__ <br> _Get: Gets the primary Inventory involved in this transaction_ | [`Inventory`](io/wolfscript/inventory/Inventory.md)
 readonly property __View__ <br> _Get: Gets the view object itself_ | [`InventoryView`](io/wolfscript/inventory/InventoryView.md)
 readonly property __Viewers__ <br> _Get: Gets the list of players viewing the primary (upper) inventory involved_ | `List<HumanEntity>`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`inventory.InventoryClickEvent`](io/wolfscript/event/inventory/InventoryClickEvent.md)

---

## <a id='block-blockformevent'></a>__Event__ block.BlockFormEvent

class BlockFormEvent

``` javascript
this.on('block.BlockFormEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockFormEvent__(Block, BlockState) <br> _BlockFormEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`BlockGrowEvent`](io/wolfscript/event/block/BlockGrowEvent.md)__ |
new __BlockGrowEvent__(Block, BlockState) <br> _BlockGrowEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __NewState__ <br> _Get: Gets the state of the block where it will form or spread to._ | [`BlockState`](io/wolfscript/block/BlockState.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`block.BlockFormEvent`](io/wolfscript/event/block/BlockFormEvent.md)

---

## <a id='player-playeranimationevent'></a>__Event__ player.PlayerAnimationEvent

Represents a player animation event

``` javascript
this.on('player.PlayerAnimationEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerAnimationEvent__(Player) <br> _Construct a new PlayerAnimation event_ | _constructor_
 readonly property __AnimationType__ <br> _Get: Get the type of this animation event_ | [`PlayerAnimationType`](io/wolfscript/event/player/PlayerAnimationType.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerAnimationEvent`](io/wolfscript/event/player/PlayerAnimationEvent.md)

---

## <a id='player-playervelocityevent'></a>__Event__ player.PlayerVelocityEvent

Called when the velocity of a player changes.

``` javascript
this.on('player.PlayerVelocityEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerVelocityEvent__(Player, Vector) <br> _PlayerVelocityEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __Velocity__ <br> _Get: Gets the velocity vector that will be sent to the player<br>Set: Sets the velocity vector that will be sent to the player_ | `Vector`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerVelocityEvent`](io/wolfscript/event/player/PlayerVelocityEvent.md)

---

## <a id='vehicle-vehicleexitevent'></a>__Event__ vehicle.VehicleExitEvent

Raised when a living entity exits a vehicle.

``` javascript
this.on('vehicle.VehicleExitEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleExitEvent__(Vehicle, LivingEntity) <br> _VehicleExitEvent constructor_ | _constructor_
 readonly property __Exited__ <br> _Get: Get the living entity that exited the vehicle._ | `LivingEntity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`VehicleEvent`](io/wolfscript/event/vehicle/VehicleEvent.md)__ |
new __VehicleEvent__(Vehicle) <br> _VehicleEvent constructor_ | _constructor_
final readonly property __Vehicle__ <br> _Get: Get the vehicle._ | [`Vehicle`](io/wolfscript/entity/Vehicle.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`vehicle.VehicleExitEvent`](io/wolfscript/event/vehicle/VehicleExitEvent.md)

---

## <a id='player-playerachievementawardedevent'></a>__Event__ player.PlayerAchievementAwardedEvent

Called when a player earns an achievement.

``` javascript
this.on('player.PlayerAchievementAwardedEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerAchievementAwardedEvent__(player, achievement) <br> _PlayerAchievementAwardedEvent constructor_ | _constructor_
 readonly property __Achievement__ <br> _Get: Gets the Achievement being awarded._ | [`Achievement`](io/wolfscript/Achievement.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerAchievementAwardedEvent`](io/wolfscript/event/player/PlayerAchievementAwardedEvent.md)

---

## <a id='world-chunkunloadevent'></a>__Event__ world.ChunkUnloadEvent

Called when a chunk is unloaded

``` javascript
this.on('world.ChunkUnloadEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __ChunkUnloadEvent__(Chunk) <br> _ChunkUnloadEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`ChunkEvent`](io/wolfscript/event/world/ChunkEvent.md)__ |
 readonly property __Chunk__ <br> _Chunk property_ | [`Chunk`](io/wolfscript/Chunk.md)
 |
__Inherited items from [`WorldEvent`](io/wolfscript/event/world/WorldEvent.md)__ |
new __WorldEvent__(World) <br> _WorldEvent constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the world primarily involved with this event_ | `World`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`world.ChunkUnloadEvent`](io/wolfscript/event/world/ChunkUnloadEvent.md)

---

## <a id='player-playerbucketevent'></a>__Event__ player.PlayerBucketEvent

Called when a player interacts with a Bucket

``` javascript
this.on('player.PlayerBucketEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerBucketEvent__(Player, Block, BlockFace, Material, ItemStack) <br> _PlayerBucketEvent constructor_ | _constructor_
 readonly property __BlockClicked__ <br> _Get: Return the block clicked_ | [`Block`](io/wolfscript/block/Block.md)
 readonly property __BlockFace__ <br> _Get: Get the face on the clicked block_ | [`BlockFace`](io/wolfscript/block/BlockFace.md)
 readonly property __Bucket__ <br> _Get: Returns the bucket used in this event_ | [`Material`](io/wolfscript/Material.md)
  property __ItemStack__ <br> _Get: Get the resulting item in hand after the bucket event<br>Set: Set the item in hand after the event_ | `ItemStack`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerBucketEvent`](io/wolfscript/event/player/PlayerBucketEvent.md)

---

## <a id='player-playeritembreakevent'></a>__Event__ player.PlayerItemBreakEvent

Fired when a player's item breaks (such as a shovel or flint and steel). <p> The item that's breaking will exist in the inventory with a stack size of 0. After the event, the item's durability will be reset to 0.

``` javascript
this.on('player.PlayerItemBreakEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerItemBreakEvent__(Player, ItemStack) <br> _PlayerItemBreakEvent constructor_ | _constructor_
 readonly property __BrokenItem__ <br> _Get: Gets the item that broke_ | `ItemStack`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerItemBreakEvent`](io/wolfscript/event/player/PlayerItemBreakEvent.md)

---

## <a id='world-structuregrowevent'></a>__Event__ world.StructureGrowEvent

Event that is called when an organic structure attempts to grow (Sapling {@literal ->} Tree), (Mushroom {@literal ->} Huge Mushroom), naturally or using bonemeal.

``` javascript
this.on('world.StructureGrowEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __StructureGrowEvent__(Location, TreeType, boolean, Player, List) <br> _StructureGrowEvent constructor_ | _constructor_
 readonly property __Blocks__ <br> _Get: Gets an ArrayList of all blocks associated with the structure._ | `List<BlockState>`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Location__ <br> _Get: Gets the location of the structure._ | `Location`
 readonly property __Player__ <br> _Get: Gets the player that created the structure._ | `Player`
 readonly property __Species__ <br> _Get: Gets the species type (birch, normal, pine, red mushroom, brown_ | [`TreeType`](io/wolfscript/TreeType.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __isFromBonemeal__() <br> _Checks if structure was grown using bonemeal._ | `boolean`
 |
__Inherited items from [`WorldEvent`](io/wolfscript/event/world/WorldEvent.md)__ |
new __WorldEvent__(World) <br> _WorldEvent constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the world primarily involved with this event_ | `World`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`world.StructureGrowEvent`](io/wolfscript/event/world/StructureGrowEvent.md)

---

## <a id='vehicle-vehiclemoveevent'></a>__Event__ vehicle.VehicleMoveEvent

Raised when a vehicle moves.

``` javascript
this.on('vehicle.VehicleMoveEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleMoveEvent__(Vehicle, Location, Location) <br> _VehicleMoveEvent constructor_ | _constructor_
 readonly property __From__ <br> _Get: Get the previous position._ | `Location`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __To__ <br> _Get: Get the next position._ | `Location`
 |
__Inherited items from [`VehicleEvent`](io/wolfscript/event/vehicle/VehicleEvent.md)__ |
new __VehicleEvent__(Vehicle) <br> _VehicleEvent constructor_ | _constructor_
final readonly property __Vehicle__ <br> _Get: Get the vehicle._ | [`Vehicle`](io/wolfscript/entity/Vehicle.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`vehicle.VehicleMoveEvent`](io/wolfscript/event/vehicle/VehicleMoveEvent.md)

---

## <a id='entity-entitychangeblockevent'></a>__Event__ entity.EntityChangeBlockEvent

Called when any Entity, excluding players, changes a block.

``` javascript
this.on('entity.EntityChangeBlockEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Block__ <br> _Get: Gets the block the entity is changing_ | [`Block`](io/wolfscript/block/Block.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __To__ <br> _Get: Gets the Material that the block is changing into_ | [`Material`](io/wolfscript/Material.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.EntityChangeBlockEvent`](io/wolfscript/event/entity/EntityChangeBlockEvent.md)

---

## <a id='world-spawnchangeevent'></a>__Event__ world.SpawnChangeEvent

An event that is called when a world's spawn changes. The world's previous spawn location is included.

``` javascript
this.on('world.SpawnChangeEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __SpawnChangeEvent__(World, Location) <br> _SpawnChangeEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __PreviousLocation__ <br> _Get: Gets the previous spawn location_ | `Location`
 |
__Inherited items from [`WorldEvent`](io/wolfscript/event/world/WorldEvent.md)__ |
new __WorldEvent__(World) <br> _WorldEvent constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the world primarily involved with this event_ | `World`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`world.SpawnChangeEvent`](io/wolfscript/event/world/SpawnChangeEvent.md)

---

## <a id='world-worldevent'></a>__Event__ world.WorldEvent

Represents events within a world

``` javascript
this.on('world.WorldEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __WorldEvent__(World) <br> _WorldEvent constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the world primarily involved with this event_ | `World`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





For further details, see API Reference [`world.WorldEvent`](io/wolfscript/event/world/WorldEvent.md)

---

## <a id='vehicle-vehicleblockcollisionevent'></a>__Event__ vehicle.VehicleBlockCollisionEvent

Raised when a vehicle collides with a block.

``` javascript
this.on('vehicle.VehicleBlockCollisionEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleBlockCollisionEvent__(Vehicle, Block) <br> _VehicleBlockCollisionEvent constructor_ | _constructor_
 readonly property __Block__ <br> _Get: Gets the block the vehicle collided with_ | [`Block`](io/wolfscript/block/Block.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`VehicleCollisionEvent`](io/wolfscript/event/vehicle/VehicleCollisionEvent.md)__ |
new __VehicleCollisionEvent__(Vehicle) <br> _VehicleCollisionEvent constructor_ | _constructor_
 |
__Inherited items from [`VehicleEvent`](io/wolfscript/event/vehicle/VehicleEvent.md)__ |
new __VehicleEvent__(Vehicle) <br> _VehicleEvent constructor_ | _constructor_
final readonly property __Vehicle__ <br> _Get: Get the vehicle._ | [`Vehicle`](io/wolfscript/entity/Vehicle.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`vehicle.VehicleBlockCollisionEvent`](io/wolfscript/event/vehicle/VehicleBlockCollisionEvent.md)

---

## <a id='inventory-inventorypickupitemevent'></a>__Event__ inventory.InventoryPickupItemEvent

Called when a hopper or hopper minecart picks up a dropped item.

``` javascript
this.on('inventory.InventoryPickupItemEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __InventoryPickupItemEvent__(Inventory, Item) <br> _InventoryPickupItemEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Inventory__ <br> _Get: Gets the Inventory that picked up the item_ | [`Inventory`](io/wolfscript/inventory/Inventory.md)
 readonly property __Item__ <br> _Get: Gets the Item entity that was picked up_ | [`Item`](io/wolfscript/entity/Item.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





For further details, see API Reference [`inventory.InventoryPickupItemEvent`](io/wolfscript/event/inventory/InventoryPickupItemEvent.md)

---

## <a id='world-worldsaveevent'></a>__Event__ world.WorldSaveEvent

Called when a World is saved.

``` javascript
this.on('world.WorldSaveEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __WorldSaveEvent__(World) <br> _WorldSaveEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`WorldEvent`](io/wolfscript/event/world/WorldEvent.md)__ |
new __WorldEvent__(World) <br> _WorldEvent constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the world primarily involved with this event_ | `World`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`world.WorldSaveEvent`](io/wolfscript/event/world/WorldSaveEvent.md)

---

## <a id='player-asyncplayerpreloginevent'></a>__Event__ player.AsyncPlayerPreLoginEvent

Stores details for players attempting to log in. <p> This event is asynchronous, and not run using main thread.

``` javascript
this.on('player.AsyncPlayerPreLoginEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __AsyncPlayerPreLoginEvent__(String, InetAddress, UUID) <br> _AsyncPlayerPreLoginEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Address__ <br> _Get: Gets the player IP address._ | `InetAddress`
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __KickMessage__ <br> _Get: Gets the current kick message that will be used if getResult() !=<br>Set: Sets the kick message to display if getResult() != Result.ALLOWED_ | `String`
  property __LoginResult__ <br> _Get: Gets the current result of the login, as an enum<br>Set: Sets the new result of the login, as an enum_ | `Result`
 readonly property __Name__ <br> _Get: Gets the player's name._ | `String`
 readonly property __UniqueId__ <br> _Get: Gets the player's unique ID._ | `UUID`
 function __disallow__(Result, String) <br> _Disallows the player from logging in, with the given reason_ | `void`
 function __allow__() <br> _Allows the player to log in_ | `void`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





For further details, see API Reference [`player.AsyncPlayerPreLoginEvent`](io/wolfscript/event/player/AsyncPlayerPreLoginEvent.md)

---

## <a id='entity-creaturespawnevent'></a>__Event__ entity.CreatureSpawnEvent

Called when a creature is spawned into a world. <p> If a Creature Spawn event is cancelled, the creature will not spawn.

``` javascript
this.on('entity.CreatureSpawnEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __CreatureSpawnEvent__(LivingEntity, SpawnReason) <br> _CreatureSpawnEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | `LivingEntity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Location__ <br> _Get: Gets the location at which the creature is spawning._ | `Location`
 readonly property __SpawnReason__ <br> _Get: Gets the reason for why the creature is being spawned._ | `SpawnReason`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.CreatureSpawnEvent`](io/wolfscript/event/entity/CreatureSpawnEvent.md)

---

## <a id='server-pluginevent'></a>__Event__ server.PluginEvent

Used for plugin enable and disable events

``` javascript
this.on('server.PluginEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PluginEvent__(Plugin) <br> _PluginEvent constructor_ | _constructor_
 readonly property __Plugin__ <br> _Get: Gets the plugin involved in this event_ | [`Plugin`](io/wolfscript/plugin/Plugin.md)
 |
__Inherited items from [`ServerEvent`](io/wolfscript/event/server/ServerEvent.md)__ |
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`server.PluginEvent`](io/wolfscript/event/server/PluginEvent.md)

---

## <a id='block-blockpistonretractevent'></a>__Event__ block.BlockPistonRetractEvent

Called when a piston retracts

``` javascript
this.on('block.BlockPistonRetractEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockPistonRetractEvent__(Block, List, BlockFace) <br> _BlockPistonRetractEvent constructor_ | _constructor_
 readonly property __Blocks__ <br> _Get: Get an immutable list of the blocks which will be moved by the_ | `List<Block>`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`BlockPistonEvent`](io/wolfscript/event/block/BlockPistonEvent.md)__ |
new __BlockPistonEvent__(Block, BlockFace) <br> _BlockPistonEvent constructor_ | _constructor_
 readonly property __Direction__ <br> _Get: Return the direction in which the piston will operate._ | [`BlockFace`](io/wolfscript/block/BlockFace.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __isSticky__() <br> _Returns true if the Piston in the event is sticky._ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`block.BlockPistonRetractEvent`](io/wolfscript/event/block/BlockPistonRetractEvent.md)

---

## <a id='player-playertogglesneakevent'></a>__Event__ player.PlayerToggleSneakEvent

Called when a player toggles their sneaking state

``` javascript
this.on('player.PlayerToggleSneakEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerToggleSneakEvent__(Player, boolean) <br> _PlayerToggleSneakEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __isSneaking__() <br> _Returns whether the player is now sneaking or not._ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerToggleSneakEvent`](io/wolfscript/event/player/PlayerToggleSneakEvent.md)

---

## <a id='player-playerrespawnevent'></a>__Event__ player.PlayerRespawnEvent

Called when a player respawns.

``` javascript
this.on('player.PlayerRespawnEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerRespawnEvent__(Player, Location, boolean) <br> _PlayerRespawnEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __RespawnLocation__ <br> _Get: Gets the current respawn location<br>Set: Sets the new respawn location_ | `Location`
 function __isBedSpawn__() <br> _Gets whether the respawn location is the player's bed._ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerRespawnEvent`](io/wolfscript/event/player/PlayerRespawnEvent.md)

---

## <a id='player-playeritemheldevent'></a>__Event__ player.PlayerItemHeldEvent

Fired when a player changes their currently held item

``` javascript
this.on('player.PlayerItemHeldEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerItemHeldEvent__(Player, int, int) <br> _PlayerItemHeldEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __NewSlot__ <br> _Get: Gets the new held slot index_ | `int`
 readonly property __PreviousSlot__ <br> _Get: Gets the previous held slot index_ | `int`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerItemHeldEvent`](io/wolfscript/event/player/PlayerItemHeldEvent.md)

---

## <a id='block-blockexplodeevent'></a>__Event__ block.BlockExplodeEvent

Called when a block explodes

``` javascript
this.on('block.BlockExplodeEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockExplodeEvent__(Block, List, float) <br> _BlockExplodeEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __Yield__ <br> _Get: Returns the percentage of blocks to drop from this explosion<br>Set: Sets the percentage of blocks to drop from this explosion_ | `float`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __blockList__() <br> _Returns the list of blocks that would have been removed or were removed_ | `List<Block>`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.BlockExplodeEvent`](io/wolfscript/event/block/BlockExplodeEvent.md)

---

## <a id='entity-pigzapevent'></a>__Event__ entity.PigZapEvent

Stores data for pigs being zapped

``` javascript
this.on('entity.PigZapEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PigZapEvent__(Pig, LightningStrike, PigZombie) <br> _PigZapEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | `Pig`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Lightning__ <br> _Get: Gets the bolt which is striking the pig._ | [`LightningStrike`](io/wolfscript/entity/LightningStrike.md)
 readonly property __PigZombie__ <br> _Get: Gets the zombie pig that will replace the pig, provided the event is_ | [`PigZombie`](io/wolfscript/entity/PigZombie.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.PigZapEvent`](io/wolfscript/event/entity/PigZapEvent.md)

---

## <a id='server-servercommandevent'></a>__Event__ server.ServerCommandEvent

class ServerCommandEvent

``` javascript
this.on('server.ServerCommandEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __ServerCommandEvent__(CommandSender, String) <br> _ServerCommandEvent constructor_ | _constructor_
  property __Command__ <br> _Get: Gets the command that the user is attempting to execute from the<br>Set: Sets the command that the server will execute_ | `String`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Sender__ <br> _Get: Get the command sender._ | [`CommandSender`](io/wolfscript/command/CommandSender.md)
 |
__Inherited items from [`ServerEvent`](io/wolfscript/event/server/ServerEvent.md)__ |
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`server.ServerCommandEvent`](io/wolfscript/event/server/ServerCommandEvent.md)

---

## <a id='vehicle-vehicledestroyevent'></a>__Event__ vehicle.VehicleDestroyEvent

Raised when a vehicle is destroyed, which could be caused by either a player or the environment. This is not raised if the boat is simply 'removed' due to other means.

``` javascript
this.on('vehicle.VehicleDestroyEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleDestroyEvent__(Vehicle, Entity) <br> _VehicleDestroyEvent constructor_ | _constructor_
 readonly property __Attacker__ <br> _Get: Gets the Entity that has destroyed the vehicle, potentially null_ | `Entity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`VehicleEvent`](io/wolfscript/event/vehicle/VehicleEvent.md)__ |
new __VehicleEvent__(Vehicle) <br> _VehicleEvent constructor_ | _constructor_
final readonly property __Vehicle__ <br> _Get: Get the vehicle._ | [`Vehicle`](io/wolfscript/entity/Vehicle.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`vehicle.VehicleDestroyEvent`](io/wolfscript/event/vehicle/VehicleDestroyEvent.md)

---

## <a id='inventory-craftitemevent'></a>__Event__ inventory.CraftItemEvent

Called when the recipe of an Item is completed inside a crafting matrix.

``` javascript
this.on('inventory.CraftItemEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __CraftItemEvent__(recipe, what, type, slot, click, action) <br> _CraftItemEvent constructor_ | _constructor_
new __CraftItemEvent__(recipe, what, type, slot, click, action, key) <br> _CraftItemEvent constructor_ | _constructor_
 readonly property __Inventory__ <br> _Inventory property_ | [`CraftingInventory`](io/wolfscript/inventory/CraftingInventory.md)
 readonly property __Recipe__ <br> _Recipe property_ | [`Recipe`](io/wolfscript/inventory/Recipe.md)
 |
__Inherited items from [`InventoryClickEvent`](io/wolfscript/event/inventory/InventoryClickEvent.md)__ |
new __InventoryClickEvent__(view, type, slot, click, action) <br> _InventoryClickEvent constructor_ | _constructor_
new __InventoryClickEvent__(view, type, slot, click, action, key) <br> _InventoryClickEvent constructor_ | _constructor_
 writeonly property __CurrentItem__ <br> _Set: Sets the ItemStack currently in the clicked slot._ | `void`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __CurrentItem__ <br> _Get: Gets the ItemStack currently in the clicked slot._ | `ItemStack`
 readonly property __Click__ <br> _Get: Gets the ClickType for this event._ | [`ClickType`](io/wolfscript/event/inventory/ClickType.md)
 readonly property __Action__ <br> _Get: Gets the InventoryAction that triggered this event._ | [`InventoryAction`](io/wolfscript/event/inventory/InventoryAction.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __HotbarButton__ <br> _Get: If the ClickType is NUMBER_KEY, this method will return the index of_ | `int`
 readonly property __RawSlot__ <br> _Get: The raw slot number clicked, ready for passing to {@link InventoryView_ | `int`
 readonly property __Slot__ <br> _Get: The slot number that was clicked, ready for passing to_ | `int`
 readonly property __SlotType__ <br> _Get: Gets the type of slot that was clicked._ | `SlotType`
 function __isLeftClick__() <br> _Gets whether or not the ClickType for this event represents a left_ | `boolean`
 function __isRightClick__() <br> _Gets whether or not the ClickType for this event represents a right_ | `boolean`
 function __isShiftClick__() <br> _Gets whether the ClickType for this event indicates that the key was_ | `boolean`
 |
__Inherited items from [`InventoryInteractEvent`](io/wolfscript/event/inventory/InventoryInteractEvent.md)__ |
new __InventoryInteractEvent__(transaction) <br> _InventoryInteractEvent constructor_ | _constructor_
  property __Result__ <br> _Get: Gets the `Result` of this event. The Result describes the<br>Set: Sets the result of this event. This will change whether or not this_ | `Result`
 readonly property __WhoClicked__ <br> _Get: Gets the player who performed the click._ | `HumanEntity`
 writeonly property __Cancelled__ <br> _Set: Proxy method to `#setResult(Result)` for the Cancellable_ | `void`
 function __isCancelled__() <br> _Gets whether or not this event is cancelled. This is based off of the_ | `boolean`
 |
__Inherited items from [`InventoryEvent`](io/wolfscript/event/inventory/InventoryEvent.md)__ |
new __InventoryEvent__(transaction) <br> _InventoryEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Inventory__ <br> _Get: Gets the primary Inventory involved in this transaction_ | [`Inventory`](io/wolfscript/inventory/Inventory.md)
 readonly property __View__ <br> _Get: Gets the view object itself_ | [`InventoryView`](io/wolfscript/inventory/InventoryView.md)
 readonly property __Viewers__ <br> _Get: Gets the list of players viewing the primary (upper) inventory involved_ | `List<HumanEntity>`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`











For further details, see API Reference [`inventory.CraftItemEvent`](io/wolfscript/event/inventory/CraftItemEvent.md)

---

## <a id='player-playergamemodechangeevent'></a>__Event__ player.PlayerGameModeChangeEvent

Called when the GameMode of the player is changed.

``` javascript
this.on('player.PlayerGameModeChangeEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerGameModeChangeEvent__(Player, GameMode) <br> _PlayerGameModeChangeEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __NewGameMode__ <br> _Get: Gets the GameMode the player is switched to._ | [`GameMode`](io/wolfscript/GameMode.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerGameModeChangeEvent`](io/wolfscript/event/player/PlayerGameModeChangeEvent.md)

---

## <a id='weather-thunderchangeevent'></a>__Event__ weather.ThunderChangeEvent

Stores data for thunder state changing in a world

``` javascript
this.on('weather.ThunderChangeEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __ThunderChangeEvent__(World, boolean) <br> _ThunderChangeEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __toThunderState__() <br> _Gets the state of thunder that the world is being set to_ | `boolean`
 |
__Inherited items from [`WeatherEvent`](io/wolfscript/event/weather/WeatherEvent.md)__ |
new __WeatherEvent__(World) <br> _WeatherEvent constructor_ | _constructor_
final readonly property __World__ <br> _Get: Returns the World where this event is occurring_ | `World`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`weather.ThunderChangeEvent`](io/wolfscript/event/weather/ThunderChangeEvent.md)

---

## <a id='block-blockdispenseevent'></a>__Event__ block.BlockDispenseEvent

Called when an item is dispensed from a block. <p> If a Block Dispense event is cancelled, the block will not dispense the item.

``` javascript
this.on('block.BlockDispenseEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockDispenseEvent__(Block, ItemStack, Vector) <br> _BlockDispenseEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __Item__ <br> _Get: Gets the item that is being dispensed. Modifying the returned item will<br>Set: Sets the item being dispensed._ | `ItemStack`
  property __Velocity__ <br> _Get: Gets the velocity.<br>Set: Sets the velocity of the item being dispensed._ | `Vector`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.BlockDispenseEvent`](io/wolfscript/event/block/BlockDispenseEvent.md)

---

## <a id='hanging-hangingbreakbyentityevent'></a>__Event__ hanging.HangingBreakByEntityEvent

Triggered when a hanging entity is removed by an entity

``` javascript
this.on('hanging.HangingBreakByEntityEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __HangingBreakByEntityEvent__(Hanging, Entity) <br> _HangingBreakByEntityEvent constructor_ | _constructor_
 readonly property __Remover__ <br> _Get: Gets the entity that removed the hanging entity_ | `Entity`
 |
__Inherited items from [`HangingBreakEvent`](io/wolfscript/event/hanging/HangingBreakEvent.md)__ |
new __HangingBreakEvent__(Hanging, HangingBreakEvent) <br> _HangingBreakEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: Gets the cause for the hanging entity's removal_ | `RemoveCause`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`HangingEvent`](io/wolfscript/event/hanging/HangingEvent.md)__ |
 readonly property __Entity__ <br> _Get: Gets the hanging entity involved in this event._ | `Hanging`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`hanging.HangingBreakByEntityEvent`](io/wolfscript/event/hanging/HangingBreakByEntityEvent.md)

---

## <a id='world-worldunloadevent'></a>__Event__ world.WorldUnloadEvent

Called when a World is unloaded

``` javascript
this.on('world.WorldUnloadEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __WorldUnloadEvent__(World) <br> _WorldUnloadEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`WorldEvent`](io/wolfscript/event/world/WorldEvent.md)__ |
new __WorldEvent__(World) <br> _WorldEvent constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the world primarily involved with this event_ | `World`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`world.WorldUnloadEvent`](io/wolfscript/event/world/WorldUnloadEvent.md)

---

## <a id='player-playerloginevent'></a>__Event__ player.PlayerLoginEvent

Stores details for players attempting to log in

``` javascript
this.on('player.PlayerLoginEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerLoginEvent__(Player, String, InetAddress) <br> _This constructor defaults message to an empty string, and result to_ | _constructor_
new __PlayerLoginEvent__(Player, hostname, InetAddress, Result, String) <br> _This constructor pre-configures the event with a result and message_ | _constructor_
 readonly property __Address__ <br> _Get: Gets the `InetAddress` for the Player associated with this event._ | `InetAddress`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Hostname__ <br> _Get: Gets the hostname that the player used to connect to the server, or_ | `String`
  property __KickMessage__ <br> _Get: Gets the current kick message that will be used if getResult() !=<br>Set: Sets the kick message to display if getResult() != Result.ALLOWED_ | `String`
  property __Result__ <br> _Get: Gets the current result of the login, as an enum<br>Set: Sets the new result of the login, as an enum_ | `Result`
 function __allow__() <br> _Allows the player to log in_ | `void`
 function __disallow__(Result, String) <br> _Disallows the player from logging in, with the given reason_ | `void`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerLoginEvent`](io/wolfscript/event/player/PlayerLoginEvent.md)

---

## <a id='entity-entityregainhealthevent'></a>__Event__ entity.EntityRegainHealthEvent

Stores data for health-regain events

``` javascript
this.on('entity.EntityRegainHealthEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityRegainHealthEvent__(Entity, double, RegainReason) <br> _EntityRegainHealthEvent constructor_ | _constructor_
  property __Amount__ <br> _Get: Gets the amount of regained health<br>Set: Sets the amount of regained health_ | `double`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __RegainReason__ <br> _Get: Gets the reason for why the entity is regaining health_ | `RegainReason`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.EntityRegainHealthEvent`](io/wolfscript/event/entity/EntityRegainHealthEvent.md)

---

## <a id='player-playerevent'></a>__Event__ player.PlayerEvent

Represents a player related event

``` javascript
this.on('player.PlayerEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





For further details, see API Reference [`player.PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)

---

## <a id='entity-foodlevelchangeevent'></a>__Event__ entity.FoodLevelChangeEvent

Called when a human entity's food level changes

``` javascript
this.on('entity.FoodLevelChangeEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __FoodLevelChangeEvent__(HumanEntity, int) <br> _FoodLevelChangeEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | `HumanEntity`
  property __FoodLevel__ <br> _Get: Gets the resultant food level that the entity involved in this event<br>Set: Sets the resultant food level that the entity involved in this event_ | `int`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.FoodLevelChangeEvent`](io/wolfscript/event/entity/FoodLevelChangeEvent.md)

---

## <a id='inventory-brewevent'></a>__Event__ inventory.BrewEvent

Called when the brewing of the contents inside the Brewing Stand is complete.

``` javascript
this.on('inventory.BrewEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BrewEvent__(brewer, contents) <br> _BrewEvent constructor_ | _constructor_
 readonly property __Contents__ <br> _Get: Gets the contents of the Brewing Stand._ | [`BrewerInventory`](io/wolfscript/inventory/BrewerInventory.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`inventory.BrewEvent`](io/wolfscript/event/inventory/BrewEvent.md)

---

## <a id='entity-playerdeathevent'></a>__Event__ entity.PlayerDeathEvent

Thrown whenever a `entity.Player` dies

``` javascript
this.on('entity.PlayerDeathEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerDeathEvent__(Player, List, int, String) <br> _PlayerDeathEvent constructor_ | _constructor_
new __PlayerDeathEvent__(Player, List, int, int, String) <br> _PlayerDeathEvent constructor_ | _constructor_
new __PlayerDeathEvent__(Player, List, int, int, int, int, String) <br> _PlayerDeathEvent constructor_ | _constructor_
 writeonly property __NewLevel__ <br> _Set: Sets the Level the Player should have at respawn._ | `void`
 readonly property __Entity__ <br> _Entity property_ | `Player`
  property __DeathMessage__ <br> _Get: Get the death message that will appear to everyone on the server.<br>Set: Set the death message that will appear to everyone on the server._ | `String`
  property __KeepInventory__ <br> _Get: Gets if the Player keeps inventory on death.<br>Set: Sets if the Player keeps inventory on death._ | `boolean`
  property __KeepLevel__ <br> _Get: Gets if the Player should keep all EXP at respawn.<br>Set: Sets if the Player should keep all EXP at respawn._ | `boolean`
  property __NewExp__ <br> _Get: Gets how much EXP the Player should have at respawn.<br>Set: Sets how much EXP the Player should have at respawn._ | `int`
 readonly property __NewLevel__ <br> _Get: Gets the Level the Player should have at respawn._ | `int`
  property __NewTotalExp__ <br> _Get: Gets the Total EXP the Player should have at respawn.<br>Set: Sets the Total EXP the Player should have at respawn._ | `int`
 |
__Inherited items from [`EntityDeathEvent`](io/wolfscript/event/entity/EntityDeathEvent.md)__ |
new __EntityDeathEvent__(LivingEntity, List) <br> _EntityDeathEvent constructor_ | _constructor_
new __EntityDeathEvent__(LivingEntity, List, int) <br> _EntityDeathEvent constructor_ | _constructor_
  property __DroppedExp__ <br> _Get: Gets how much EXP should be dropped from this death.<br>Set: Sets how much EXP should be dropped from this death._ | `int`
 readonly property __Drops__ <br> _Get: Gets all the items which will drop when the entity dies_ | `List<ItemStack>`
 readonly property __Entity__ <br> _Entity property_ | `LivingEntity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`entity.PlayerDeathEvent`](io/wolfscript/event/entity/PlayerDeathEvent.md)

---

## <a id='world-chunkpopulateevent'></a>__Event__ world.ChunkPopulateEvent

Thrown when a new chunk has finished being populated. <p> If your intent is to populate the chunk using this event, please see [`generator.BlockPopulator`](io/wolfscript/generator/BlockPopulator.md)

``` javascript
this.on('world.ChunkPopulateEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __ChunkPopulateEvent__(Chunk) <br> _ChunkPopulateEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`ChunkEvent`](io/wolfscript/event/world/ChunkEvent.md)__ |
 readonly property __Chunk__ <br> _Chunk property_ | [`Chunk`](io/wolfscript/Chunk.md)
 |
__Inherited items from [`WorldEvent`](io/wolfscript/event/world/WorldEvent.md)__ |
new __WorldEvent__(World) <br> _WorldEvent constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the world primarily involved with this event_ | `World`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`world.ChunkPopulateEvent`](io/wolfscript/event/world/ChunkPopulateEvent.md)

---

## <a id='hanging-hangingplaceevent'></a>__Event__ hanging.HangingPlaceEvent

Triggered when a hanging entity is created in the world

``` javascript
this.on('hanging.HangingPlaceEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __HangingPlaceEvent__(Hanging, Player, Block, BlockFace) <br> _HangingPlaceEvent constructor_ | _constructor_
 readonly property __Block__ <br> _Get: Returns the block that the hanging entity was placed on_ | [`Block`](io/wolfscript/block/Block.md)
 readonly property __BlockFace__ <br> _Get: Returns the face of the block that the hanging entity was placed on_ | [`BlockFace`](io/wolfscript/block/BlockFace.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Player__ <br> _Get: Returns the player placing the hanging entity_ | `Player`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`HangingEvent`](io/wolfscript/event/hanging/HangingEvent.md)__ |
 readonly property __Entity__ <br> _Get: Gets the hanging entity involved in this event._ | `Hanging`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`hanging.HangingPlaceEvent`](io/wolfscript/event/hanging/HangingPlaceEvent.md)

---

## <a id='entity-expbottleevent'></a>__Event__ entity.ExpBottleEvent

Called when a ThrownExpBottle hits and releases experience.

``` javascript
this.on('entity.ExpBottleEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __ExpBottleEvent__(ThrownExpBottle, int) <br> _ExpBottleEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | [`ThrownExpBottle`](io/wolfscript/entity/ThrownExpBottle.md)
  property __Experience__ <br> _Get: This method retrieves the amount of experience to be created.<br>Set: This method sets the amount of experience to be created._ | `int`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __ShowEffect__ <br> _Get: This method indicates if the particle effect should be shown.<br>Set: This method sets if the particle effect will be shown._ | `boolean`
 |
__Inherited items from [`ProjectileHitEvent`](io/wolfscript/event/entity/ProjectileHitEvent.md)__ |
new __ProjectileHitEvent__(Projectile) <br> _ProjectileHitEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | [`Projectile`](io/wolfscript/entity/Projectile.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`entity.ExpBottleEvent`](io/wolfscript/event/entity/ExpBottleEvent.md)

---

## <a id='block-blockfromtoevent'></a>__Event__ block.BlockFromToEvent

Represents events with a source block and a destination block, currently only applies to liquid (lava and water) and teleporting dragon eggs. <p> If a Block From To event is cancelled, the block will not move (the liquid will not flow).

``` javascript
this.on('block.BlockFromToEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockFromToEvent__(Block, BlockFace) <br> _BlockFromToEvent constructor_ | _constructor_
new __BlockFromToEvent__(Block, Block) <br> _BlockFromToEvent constructor_ | _constructor_
 readonly property __Face__ <br> _Get: Gets the BlockFace that the block is moving to._ | [`BlockFace`](io/wolfscript/block/BlockFace.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __ToBlock__ <br> _Get: Convenience method for getting the faced Block._ | [`Block`](io/wolfscript/block/Block.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.BlockFromToEvent`](io/wolfscript/event/block/BlockFromToEvent.md)

---

## <a id='inventory-inventorydragevent'></a>__Event__ inventory.InventoryDragEvent

class InventoryDragEvent

``` javascript
this.on('inventory.InventoryDragEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __InventoryDragEvent__(what, newCursor, oldCursor, right) <br> _InventoryDragEvent constructor_ | _constructor_
  property __Cursor__ <br> _Get: Gets the result cursor after the drag is done. The returned value is<br>Set: Sets the result cursor after the drag is done._ | `ItemStack`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __InventorySlots__ <br> _Get: Gets the slots to be changed in this drag._ | `Set<Integer>`
 readonly property __OldCursor__ <br> _Get: Gets an ItemStack representing the cursor prior to any modifications_ | `ItemStack`
 readonly property __RawSlots__ <br> _Get: Gets the raw slot ids to be changed in this drag._ | `Set<Integer>`
 readonly property __Type__ <br> _Get: Gets the DragType that describes the behavior of ItemStacks placed_ | [`DragType`](io/wolfscript/event/inventory/DragType.md)
 |
__Inherited items from [`InventoryInteractEvent`](io/wolfscript/event/inventory/InventoryInteractEvent.md)__ |
new __InventoryInteractEvent__(transaction) <br> _InventoryInteractEvent constructor_ | _constructor_
  property __Result__ <br> _Get: Gets the `Result` of this event. The Result describes the<br>Set: Sets the result of this event. This will change whether or not this_ | `Result`
 readonly property __WhoClicked__ <br> _Get: Gets the player who performed the click._ | `HumanEntity`
 writeonly property __Cancelled__ <br> _Set: Proxy method to `#setResult(Result)` for the Cancellable_ | `void`
 function __isCancelled__() <br> _Gets whether or not this event is cancelled. This is based off of the_ | `boolean`
 |
__Inherited items from [`InventoryEvent`](io/wolfscript/event/inventory/InventoryEvent.md)__ |
new __InventoryEvent__(transaction) <br> _InventoryEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Inventory__ <br> _Get: Gets the primary Inventory involved in this transaction_ | [`Inventory`](io/wolfscript/inventory/Inventory.md)
 readonly property __View__ <br> _Get: Gets the view object itself_ | [`InventoryView`](io/wolfscript/inventory/InventoryView.md)
 readonly property __Viewers__ <br> _Get: Gets the list of players viewing the primary (upper) inventory involved_ | `List<HumanEntity>`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`inventory.InventoryDragEvent`](io/wolfscript/event/inventory/InventoryDragEvent.md)

---

## <a id='inventory-inventoryinteractevent'></a>__Event__ inventory.InventoryInteractEvent

An abstract base class for events that describe an interaction between a HumanEntity and the contents of an Inventory.

``` javascript
this.on('inventory.InventoryInteractEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __InventoryInteractEvent__(transaction) <br> _InventoryInteractEvent constructor_ | _constructor_
  property __Result__ <br> _Get: Gets the `Result` of this event. The Result describes the<br>Set: Sets the result of this event. This will change whether or not this_ | `Result`
 readonly property __WhoClicked__ <br> _Get: Gets the player who performed the click._ | `HumanEntity`
 writeonly property __Cancelled__ <br> _Set: Proxy method to `#setResult(Result)` for the Cancellable_ | `void`
 function __isCancelled__() <br> _Gets whether or not this event is cancelled. This is based off of the_ | `boolean`
 |
__Inherited items from [`InventoryEvent`](io/wolfscript/event/inventory/InventoryEvent.md)__ |
new __InventoryEvent__(transaction) <br> _InventoryEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Inventory__ <br> _Get: Gets the primary Inventory involved in this transaction_ | [`Inventory`](io/wolfscript/inventory/Inventory.md)
 readonly property __View__ <br> _Get: Gets the view object itself_ | [`InventoryView`](io/wolfscript/inventory/InventoryView.md)
 readonly property __Viewers__ <br> _Get: Gets the list of players viewing the primary (upper) inventory involved_ | `List<HumanEntity>`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`inventory.InventoryInteractEvent`](io/wolfscript/event/inventory/InventoryInteractEvent.md)

---

## <a id='player-playerfishevent'></a>__Event__ player.PlayerFishEvent

Thrown when a player is fishing

``` javascript
this.on('player.PlayerFishEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerFishEvent__(Player, Entity, Fish, State) <br> _PlayerFishEvent constructor_ | _constructor_
 readonly property __Caught__ <br> _Get: Gets the entity caught by the player._ | `Entity`
  property __ExpToDrop__ <br> _Get: Gets the amount of experience received when fishing.<br>Set: Sets the amount of experience received when fishing._ | `int`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Hook__ <br> _Hook property_ | [`Fish`](io/wolfscript/entity/Fish.md)
 readonly property __State__ <br> _Get: Gets the state of the fishing_ | `State`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerFishEvent`](io/wolfscript/event/player/PlayerFishEvent.md)

---

## <a id='entity-potionsplashevent'></a>__Event__ entity.PotionSplashEvent

Called when a splash potion hits an area

``` javascript
this.on('entity.PotionSplashEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PotionSplashEvent__(ThrownPotion, Map) <br> _PotionSplashEvent constructor_ | _constructor_
 readonly property __AffectedEntities__ <br> _Get: Retrieves a list of all effected entities_ | `Collection<LivingEntity>`
 readonly property __Entity__ <br> _Entity property_ | [`ThrownPotion`](io/wolfscript/entity/ThrownPotion.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Potion__ <br> _Get: Gets the potion which caused this event_ | [`ThrownPotion`](io/wolfscript/entity/ThrownPotion.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __getIntensity__(entity) <br> _Gets the intensity of the potion's effects for given entity; This_ | `double`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __setIntensity__(entity, intensity) <br> _Overwrites the intensity for a given entity_ | `void`
 |
__Inherited items from [`ProjectileHitEvent`](io/wolfscript/event/entity/ProjectileHitEvent.md)__ |
new __ProjectileHitEvent__(Projectile) <br> _ProjectileHitEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | [`Projectile`](io/wolfscript/entity/Projectile.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`entity.PotionSplashEvent`](io/wolfscript/event/entity/PotionSplashEvent.md)

---

## <a id='entity-entitydeathevent'></a>__Event__ entity.EntityDeathEvent

Thrown whenever a LivingEntity dies

``` javascript
this.on('entity.EntityDeathEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityDeathEvent__(LivingEntity, List) <br> _EntityDeathEvent constructor_ | _constructor_
new __EntityDeathEvent__(LivingEntity, List, int) <br> _EntityDeathEvent constructor_ | _constructor_
  property __DroppedExp__ <br> _Get: Gets how much EXP should be dropped from this death.<br>Set: Sets how much EXP should be dropped from this death._ | `int`
 readonly property __Drops__ <br> _Get: Gets all the items which will drop when the entity dies_ | `List<ItemStack>`
 readonly property __Entity__ <br> _Entity property_ | `LivingEntity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.EntityDeathEvent`](io/wolfscript/event/entity/EntityDeathEvent.md)

---

## <a id='entity-entitycreateportalevent'></a>__Event__ entity.EntityCreatePortalEvent

Thrown when a Living Entity creates a portal in a world.

``` javascript
this.on('entity.EntityCreatePortalEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityCreatePortalEvent__(LivingEntity, List, PortalType) <br> _EntityCreatePortalEvent constructor_ | _constructor_
 readonly property __Blocks__ <br> _Get: Gets a list of all blocks associated with the portal._ | `List<BlockState>`
 readonly property __Entity__ <br> _Entity property_ | `LivingEntity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __PortalType__ <br> _Get: Gets the type of portal that is trying to be created._ | [`PortalType`](io/wolfscript/PortalType.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.EntityCreatePortalEvent`](io/wolfscript/event/entity/EntityCreatePortalEvent.md)

---

## <a id='vehicle-vehicleentitycollisionevent'></a>__Event__ vehicle.VehicleEntityCollisionEvent

Raised when a vehicle collides with an entity.

``` javascript
this.on('vehicle.VehicleEntityCollisionEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleEntityCollisionEvent__(Vehicle, Entity) <br> _VehicleEntityCollisionEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | `Entity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 writeonly property __CollisionCancelled__ <br> _CollisionCancelled property_ | `void`
 writeonly property __PickupCancelled__ <br> _PickupCancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __isCollisionCancelled__() <br> _isCollisionCancelled method_ | `boolean`
 function __isPickupCancelled__() <br> _isPickupCancelled method_ | `boolean`
 |
__Inherited items from [`VehicleCollisionEvent`](io/wolfscript/event/vehicle/VehicleCollisionEvent.md)__ |
new __VehicleCollisionEvent__(Vehicle) <br> _VehicleCollisionEvent constructor_ | _constructor_
 |
__Inherited items from [`VehicleEvent`](io/wolfscript/event/vehicle/VehicleEvent.md)__ |
new __VehicleEvent__(Vehicle) <br> _VehicleEvent constructor_ | _constructor_
final readonly property __Vehicle__ <br> _Get: Get the vehicle._ | [`Vehicle`](io/wolfscript/entity/Vehicle.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`vehicle.VehicleEntityCollisionEvent`](io/wolfscript/event/vehicle/VehicleEntityCollisionEvent.md)

---

## <a id='player-playerpickupitemevent'></a>__Event__ player.PlayerPickupItemEvent

Thrown when a player picks an item up from the ground

``` javascript
this.on('player.PlayerPickupItemEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerPickupItemEvent__(Player, Item, int) <br> _PlayerPickupItemEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Item__ <br> _Get: Gets the Item picked up by the player._ | [`Item`](io/wolfscript/entity/Item.md)
 readonly property __Remaining__ <br> _Get: Gets the amount remaining on the ground, if any_ | `int`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerPickupItemEvent`](io/wolfscript/event/player/PlayerPickupItemEvent.md)

---

## <a id='entity-itemdespawnevent'></a>__Event__ entity.ItemDespawnEvent

This event is called when a [`entity.Item`](io/wolfscript/entity/Item.md) is removed from the world because it has existed for 5 minutes. <p> Cancelling the event results in the item being allowed to exist for 5 more minutes. This behavior is not guaranteed and may change in future versions.

``` javascript
this.on('entity.ItemDespawnEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __ItemDespawnEvent__(Item, Location) <br> _ItemDespawnEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | [`Item`](io/wolfscript/entity/Item.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Location__ <br> _Get: Gets the location at which the item is despawning._ | `Location`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.ItemDespawnEvent`](io/wolfscript/event/entity/ItemDespawnEvent.md)

---

## <a id='server-plugindisableevent'></a>__Event__ server.PluginDisableEvent

Called when a plugin is disabled.

``` javascript
this.on('server.PluginDisableEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PluginDisableEvent__(Plugin) <br> _PluginDisableEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`PluginEvent`](io/wolfscript/event/server/PluginEvent.md)__ |
new __PluginEvent__(Plugin) <br> _PluginEvent constructor_ | _constructor_
 readonly property __Plugin__ <br> _Get: Gets the plugin involved in this event_ | [`Plugin`](io/wolfscript/plugin/Plugin.md)
 |
__Inherited items from [`ServerEvent`](io/wolfscript/event/server/ServerEvent.md)__ |
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`server.PluginDisableEvent`](io/wolfscript/event/server/PluginDisableEvent.md)

---

## <a id='player-playerbedleaveevent'></a>__Event__ player.PlayerBedLeaveEvent

This event is fired when the player is leaving a bed.

``` javascript
this.on('player.PlayerBedLeaveEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerBedLeaveEvent__(Player, Block) <br> _PlayerBedLeaveEvent constructor_ | _constructor_
 readonly property __Bed__ <br> _Get: Returns the bed block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerBedLeaveEvent`](io/wolfscript/event/player/PlayerBedLeaveEvent.md)

---

## <a id='vehicle-vehicleevent'></a>__Event__ vehicle.VehicleEvent

Represents a vehicle-related event.

``` javascript
this.on('vehicle.VehicleEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleEvent__(Vehicle) <br> _VehicleEvent constructor_ | _constructor_
final readonly property __Vehicle__ <br> _Get: Get the vehicle._ | [`Vehicle`](io/wolfscript/entity/Vehicle.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





For further details, see API Reference [`vehicle.VehicleEvent`](io/wolfscript/event/vehicle/VehicleEvent.md)

---

## <a id='server-mapinitializeevent'></a>__Event__ server.MapInitializeEvent

Called when a map is initialized.

``` javascript
this.on('server.MapInitializeEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __MapInitializeEvent__(MapView) <br> _MapInitializeEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Map__ <br> _Get: Gets the map initialized in this event._ | [`MapView`](io/wolfscript/map/MapView.md)
 |
__Inherited items from [`ServerEvent`](io/wolfscript/event/server/ServerEvent.md)__ |
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`server.MapInitializeEvent`](io/wolfscript/event/server/MapInitializeEvent.md)

---

## <a id='player-playertoggleflightevent'></a>__Event__ player.PlayerToggleFlightEvent

Called when a player toggles their flying state

``` javascript
this.on('player.PlayerToggleFlightEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerToggleFlightEvent__(Player, boolean) <br> _PlayerToggleFlightEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __isFlying__() <br> _Returns whether the player is trying to start or stop flying._ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerToggleFlightEvent`](io/wolfscript/event/player/PlayerToggleFlightEvent.md)

---

## <a id='server-serviceregisterevent'></a>__Event__ server.ServiceRegisterEvent

This event is called when a service is registered. <p> Warning: The order in which register and unregister events are called should not be relied upon.

``` javascript
this.on('server.ServiceRegisterEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __ServiceRegisterEvent__() <br> _ServiceRegisterEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`ServiceEvent`](io/wolfscript/event/server/ServiceEvent.md)__ |
new __ServiceEvent__(RegisteredServiceProvider) <br> _ServiceEvent constructor_ | _constructor_
 readonly property __Provider__ <br> _Provider property_ | `RegisteredServiceProvider<?>`
 |
__Inherited items from [`ServerEvent`](io/wolfscript/event/server/ServerEvent.md)__ |
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`server.ServiceRegisterEvent`](io/wolfscript/event/server/ServiceRegisterEvent.md)

---

## <a id='player-playerinteractatentityevent'></a>__Event__ player.PlayerInteractAtEntityEvent

Represents an event that is called when a player right clicks an entity with a location on the entity the was clicked.

``` javascript
this.on('player.PlayerInteractAtEntityEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerInteractAtEntityEvent__(who, clickedEntity, position) <br> _PlayerInteractAtEntityEvent constructor_ | _constructor_
 readonly property __ClickedPosition__ <br> _ClickedPosition property_ | `Vector`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`PlayerInteractEntityEvent`](io/wolfscript/event/player/PlayerInteractEntityEvent.md)__ |
new __PlayerInteractEntityEvent__(Player, Entity) <br> _PlayerInteractEntityEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __RightClicked__ <br> _Get: Gets the entity that was rightclicked by the player._ | `Entity`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`player.PlayerInteractAtEntityEvent`](io/wolfscript/event/player/PlayerInteractAtEntityEvent.md)

---

## <a id='block-blockpistonextendevent'></a>__Event__ block.BlockPistonExtendEvent

Called when a piston extends

``` javascript
this.on('block.BlockPistonExtendEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockPistonExtendEvent__(Block, List, BlockFace) <br> _BlockPistonExtendEvent constructor_ | _constructor_
 readonly property __Blocks__ <br> _Get: Get an immutable list of the blocks which will be moved by the_ | `List<Block>`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`BlockPistonEvent`](io/wolfscript/event/block/BlockPistonEvent.md)__ |
new __BlockPistonEvent__(Block, BlockFace) <br> _BlockPistonEvent constructor_ | _constructor_
 readonly property __Direction__ <br> _Get: Return the direction in which the piston will operate._ | [`BlockFace`](io/wolfscript/block/BlockFace.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __isSticky__() <br> _Returns true if the Piston in the event is sticky._ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`block.BlockPistonExtendEvent`](io/wolfscript/event/block/BlockPistonExtendEvent.md)

---

## <a id='player-playeritemconsumeevent'></a>__Event__ player.PlayerItemConsumeEvent

This event will fire when a player is finishing consuming an item (food, potion, milk bucket). <br> If the ItemStack is modified the server will use the effects of the new item and not remove the original one from the player's inventory. <br> If the event is cancelled the effect will not be applied and the item will not be removed from the player's inventory.

``` javascript
this.on('player.PlayerItemConsumeEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerItemConsumeEvent__(Player, ItemStack) <br> _PlayerItemConsumeEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __Item__ <br> _Get: Gets the item that is being consumed. Modifying the returned item will<br>Set: Set the item being consumed_ | `ItemStack`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerItemConsumeEvent`](io/wolfscript/event/player/PlayerItemConsumeEvent.md)

---

## <a id='block-leavesdecayevent'></a>__Event__ block.LeavesDecayEvent

Called when leaves are decaying naturally. <p> If a Leaves Decay event is cancelled, the leaves will not decay.

``` javascript
this.on('block.LeavesDecayEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __LeavesDecayEvent__(Block) <br> _LeavesDecayEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.LeavesDecayEvent`](io/wolfscript/event/block/LeavesDecayEvent.md)

---

## <a id='enchantment-prepareitemenchantevent'></a>__Event__ enchantment.PrepareItemEnchantEvent

Called when an ItemStack is inserted in an enchantment table - can be called multiple times

``` javascript
this.on('enchantment.PrepareItemEnchantEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PrepareItemEnchantEvent__(Player, view, Block, ItemStack, int, int) <br> _PrepareItemEnchantEvent constructor_ | _constructor_
 readonly property __EnchantBlock__ <br> _Get: Gets the block being used to enchant the item_ | [`Block`](io/wolfscript/block/Block.md)
 readonly property __Enchanter__ <br> _Get: Gets the player enchanting the item_ | `Player`
 readonly property __EnchantmentBonus__ <br> _Get: Get enchantment bonus in effect - corresponds to number of bookshelves_ | `int`
 readonly property __ExpLevelCostsOffered__ <br> _Get: Get list of offered exp level costs of the enchantment (modify values_ | `int[]`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Item__ <br> _Get: Gets the item to be enchanted (can be modified)_ | `ItemStack`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`InventoryEvent`](io/wolfscript/event/inventory/InventoryEvent.md)__ |
new __InventoryEvent__(transaction) <br> _InventoryEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Inventory__ <br> _Get: Gets the primary Inventory involved in this transaction_ | [`Inventory`](io/wolfscript/inventory/Inventory.md)
 readonly property __View__ <br> _Get: Gets the view object itself_ | [`InventoryView`](io/wolfscript/inventory/InventoryView.md)
 readonly property __Viewers__ <br> _Get: Gets the list of players viewing the primary (upper) inventory involved_ | `List<HumanEntity>`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`enchantment.PrepareItemEnchantEvent`](io/wolfscript/event/enchantment/PrepareItemEnchantEvent.md)

---

## <a id='entity-entityportalexitevent'></a>__Event__ entity.EntityPortalExitEvent

Called before an entity exits a portal. <p> This event allows you to modify the velocity of the entity after they have successfully exited the portal.

``` javascript
this.on('entity.EntityPortalExitEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityPortalExitEvent__(Entity, Location, Location, Vector, Vector) <br> _EntityPortalExitEvent constructor_ | _constructor_
  property __After__ <br> _Get: Gets a copy of the velocity that the entity will have after exiting the<br>Set: Sets the velocity that the entity will have after exiting the portal._ | `Vector`
 readonly property __Before__ <br> _Get: Gets a copy of the velocity that the entity has before entering the_ | `Vector`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`EntityTeleportEvent`](io/wolfscript/event/entity/EntityTeleportEvent.md)__ |
new __EntityTeleportEvent__(what, from, to) <br> _EntityTeleportEvent constructor_ | _constructor_
  property __From__ <br> _Get: Gets the location that this entity moved from<br>Set: Sets the location that this entity moved from_ | `Location`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __To__ <br> _Get: Gets the location that this entity moved to<br>Set: Sets the location that this entity moved to_ | `Location`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`entity.EntityPortalExitEvent`](io/wolfscript/event/entity/EntityPortalExitEvent.md)

---

## <a id='painting-paintingbreakevent'></a>__Event__ painting.PaintingBreakEvent

Triggered when a painting is removed

``` javascript
this.on('painting.PaintingBreakEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PaintingBreakEvent__(Painting, RemoveCause) <br> _PaintingBreakEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: Gets the cause for the painting's removal_ | `RemoveCause`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PaintingEvent`](io/wolfscript/event/painting/PaintingEvent.md)__ |
 readonly property __Painting__ <br> _Get: Gets the painting involved in this event._ | [`Painting`](io/wolfscript/entity/Painting.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`painting.PaintingBreakEvent`](io/wolfscript/event/painting/PaintingBreakEvent.md)

---

## <a id='weather-weatherchangeevent'></a>__Event__ weather.WeatherChangeEvent

Stores data for weather changing in a world

``` javascript
this.on('weather.WeatherChangeEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __WeatherChangeEvent__(World, boolean) <br> _WeatherChangeEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 function __toWeatherState__() <br> _Gets the state of weather that the world is being set to_ | `boolean`
 |
__Inherited items from [`WeatherEvent`](io/wolfscript/event/weather/WeatherEvent.md)__ |
new __WeatherEvent__(World) <br> _WeatherEvent constructor_ | _constructor_
final readonly property __World__ <br> _Get: Returns the World where this event is occurring_ | `World`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`weather.WeatherChangeEvent`](io/wolfscript/event/weather/WeatherChangeEvent.md)

---

## <a id='block-blockdamageevent'></a>__Event__ block.BlockDamageEvent

Called when a block is damaged by a player. <p> If a Block Damage event is cancelled, the block will not be damaged.

``` javascript
this.on('block.BlockDamageEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockDamageEvent__(Player, Block, ItemStack, boolean) <br> _BlockDamageEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __InstaBreak__ <br> _Get: Gets if the block is set to instantly break when damaged by the player.<br>Set: Sets if the block should instantly break when damaged by the player._ | `boolean`
 readonly property __ItemInHand__ <br> _Get: Gets the ItemStack for the item currently in the player's hand._ | `ItemStack`
 readonly property __Player__ <br> _Get: Gets the player damaging the block involved in this event._ | `Player`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.BlockDamageEvent`](io/wolfscript/event/block/BlockDamageEvent.md)

---

## <a id='inventory-inventorycloseevent'></a>__Event__ inventory.InventoryCloseEvent

Represents a player related inventory event

``` javascript
this.on('inventory.InventoryCloseEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __InventoryCloseEvent__(transaction) <br> _InventoryCloseEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `HumanEntity`
 |
__Inherited items from [`InventoryEvent`](io/wolfscript/event/inventory/InventoryEvent.md)__ |
new __InventoryEvent__(transaction) <br> _InventoryEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Inventory__ <br> _Get: Gets the primary Inventory involved in this transaction_ | [`Inventory`](io/wolfscript/inventory/Inventory.md)
 readonly property __View__ <br> _Get: Gets the view object itself_ | [`InventoryView`](io/wolfscript/inventory/InventoryView.md)
 readonly property __Viewers__ <br> _Get: Gets the list of players viewing the primary (upper) inventory involved_ | `List<HumanEntity>`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`inventory.InventoryCloseEvent`](io/wolfscript/event/inventory/InventoryCloseEvent.md)

---

## <a id='player-playerdropitemevent'></a>__Event__ player.PlayerDropItemEvent

Thrown when a player drops an item from their inventory

``` javascript
this.on('player.PlayerDropItemEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerDropItemEvent__(Player, Item) <br> _PlayerDropItemEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __ItemDrop__ <br> _Get: Gets the ItemDrop created by the player_ | [`Item`](io/wolfscript/entity/Item.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerDropItemEvent`](io/wolfscript/event/player/PlayerDropItemEvent.md)

---

## <a id='server-pluginenableevent'></a>__Event__ server.PluginEnableEvent

Called when a plugin is enabled.

``` javascript
this.on('server.PluginEnableEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PluginEnableEvent__(Plugin) <br> _PluginEnableEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`PluginEvent`](io/wolfscript/event/server/PluginEvent.md)__ |
new __PluginEvent__(Plugin) <br> _PluginEvent constructor_ | _constructor_
 readonly property __Plugin__ <br> _Get: Gets the plugin involved in this event_ | [`Plugin`](io/wolfscript/plugin/Plugin.md)
 |
__Inherited items from [`ServerEvent`](io/wolfscript/event/server/ServerEvent.md)__ |
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`server.PluginEnableEvent`](io/wolfscript/event/server/PluginEnableEvent.md)

---

## <a id='inventory-prepareitemcraftevent'></a>__Event__ inventory.PrepareItemCraftEvent

class PrepareItemCraftEvent

``` javascript
this.on('inventory.PrepareItemCraftEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PrepareItemCraftEvent__(what, view, isRepair) <br> _PrepareItemCraftEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Inventory__ <br> _Inventory property_ | [`CraftingInventory`](io/wolfscript/inventory/CraftingInventory.md)
 readonly property __Recipe__ <br> _Get: Get the recipe that has been formed. If this event was triggered by a_ | [`Recipe`](io/wolfscript/inventory/Recipe.md)
 function __isRepair__() <br> _Check if this event was triggered by a tool repair operation rather_ | `boolean`
 |
__Inherited items from [`InventoryEvent`](io/wolfscript/event/inventory/InventoryEvent.md)__ |
new __InventoryEvent__(transaction) <br> _InventoryEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Inventory__ <br> _Get: Gets the primary Inventory involved in this transaction_ | [`Inventory`](io/wolfscript/inventory/Inventory.md)
 readonly property __View__ <br> _Get: Gets the view object itself_ | [`InventoryView`](io/wolfscript/inventory/InventoryView.md)
 readonly property __Viewers__ <br> _Get: Gets the list of players viewing the primary (upper) inventory involved_ | `List<HumanEntity>`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`inventory.PrepareItemCraftEvent`](io/wolfscript/event/inventory/PrepareItemCraftEvent.md)

---

## <a id='block-blockfadeevent'></a>__Event__ block.BlockFadeEvent

class BlockFadeEvent

``` javascript
this.on('block.BlockFadeEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockFadeEvent__(Block, BlockState) <br> _BlockFadeEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __NewState__ <br> _Get: Gets the state of the block that will be fading, melting or_ | [`BlockState`](io/wolfscript/block/BlockState.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.BlockFadeEvent`](io/wolfscript/event/block/BlockFadeEvent.md)

---

## <a id='weather-weatherevent'></a>__Event__ weather.WeatherEvent

Represents a Weather-related event

``` javascript
this.on('weather.WeatherEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __WeatherEvent__(World) <br> _WeatherEvent constructor_ | _constructor_
final readonly property __World__ <br> _Get: Returns the World where this event is occurring_ | `World`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





For further details, see API Reference [`weather.WeatherEvent`](io/wolfscript/event/weather/WeatherEvent.md)

---

## <a id='player-playerchatevent'></a>__Event__ player.PlayerChatEvent

Holds information for player chat and commands

``` javascript
this.on('player.PlayerChatEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerChatEvent__(Player, String) <br> _PlayerChatEvent constructor_ | _constructor_
new __PlayerChatEvent__(Player, String, String, Set) <br> _PlayerChatEvent constructor_ | _constructor_
  property __Format__ <br> _Get: Gets the format to use to display this chat message<br>Set: Sets the format to use to display this chat message_ | `String`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __Message__ <br> _Get: Gets the message that the player is attempting to send<br>Set: Sets the message that the player will send_ | `String`
 readonly property __Recipients__ <br> _Get: Gets a set of recipients that this chat message will be displayed to_ | `Set<Player>`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 writeonly property __Player__ <br> _Set: Sets the player that this message will display as, or command will be_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerChatEvent`](io/wolfscript/event/player/PlayerChatEvent.md)

---

## <a id='block-blockbreakevent'></a>__Event__ block.BlockBreakEvent

class BlockBreakEvent

``` javascript
this.on('block.BlockBreakEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockBreakEvent__(Block, Player) <br> _BlockBreakEvent constructor_ | _constructor_
 readonly property __Player__ <br> _Get: Gets the Player that is breaking the block involved in this event._ | `Player`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockExpEvent`](io/wolfscript/event/block/BlockExpEvent.md)__ |
new __BlockExpEvent__(block, exp) <br> _BlockExpEvent constructor_ | _constructor_
  property __ExpToDrop__ <br> _Get: Get the experience dropped by the block after the event has processed<br>Set: Set the amount of experience dropped by the block after the event has_ | `int`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`block.BlockBreakEvent`](io/wolfscript/event/block/BlockBreakEvent.md)

---

## <a id='painting-paintingplaceevent'></a>__Event__ painting.PaintingPlaceEvent

Triggered when a painting is created in the world

``` javascript
this.on('painting.PaintingPlaceEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PaintingPlaceEvent__(Painting, Player, Block, BlockFace) <br> _PaintingPlaceEvent constructor_ | _constructor_
 readonly property __Block__ <br> _Get: Returns the block that the painting was placed on_ | [`Block`](io/wolfscript/block/Block.md)
 readonly property __BlockFace__ <br> _Get: Returns the face of the block that the painting was placed on_ | [`BlockFace`](io/wolfscript/block/BlockFace.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Player__ <br> _Get: Returns the player placing the painting_ | `Player`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PaintingEvent`](io/wolfscript/event/painting/PaintingEvent.md)__ |
 readonly property __Painting__ <br> _Get: Gets the painting involved in this event._ | [`Painting`](io/wolfscript/entity/Painting.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`painting.PaintingPlaceEvent`](io/wolfscript/event/painting/PaintingPlaceEvent.md)

---

## <a id='world-chunkevent'></a>__Event__ world.ChunkEvent

Represents a Chunk related event

``` javascript
this.on('world.ChunkEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Chunk__ <br> _Chunk property_ | [`Chunk`](io/wolfscript/Chunk.md)
 |
__Inherited items from [`WorldEvent`](io/wolfscript/event/world/WorldEvent.md)__ |
new __WorldEvent__(World) <br> _WorldEvent constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the world primarily involved with this event_ | `World`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`world.ChunkEvent`](io/wolfscript/event/world/ChunkEvent.md)

---

## <a id='hanging-hangingbreakevent'></a>__Event__ hanging.HangingBreakEvent

Triggered when a hanging entity is removed

``` javascript
this.on('hanging.HangingBreakEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __HangingBreakEvent__(Hanging, HangingBreakEvent) <br> _HangingBreakEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: Gets the cause for the hanging entity's removal_ | `RemoveCause`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`HangingEvent`](io/wolfscript/event/hanging/HangingEvent.md)__ |
 readonly property __Entity__ <br> _Get: Gets the hanging entity involved in this event._ | `Hanging`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`hanging.HangingBreakEvent`](io/wolfscript/event/hanging/HangingBreakEvent.md)

---

## <a id='inventory-inventoryopenevent'></a>__Event__ inventory.InventoryOpenEvent

Represents a player related inventory event

``` javascript
this.on('inventory.InventoryOpenEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __InventoryOpenEvent__(transaction) <br> _InventoryOpenEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `HumanEntity`
 writeonly property __Cancelled__ <br> _Set: Sets the cancellation state of this event. A cancelled event will not_ | `void`
 function __isCancelled__() <br> _Gets the cancellation state of this event. A cancelled event will not_ | `boolean`
 |
__Inherited items from [`InventoryEvent`](io/wolfscript/event/inventory/InventoryEvent.md)__ |
new __InventoryEvent__(transaction) <br> _InventoryEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Inventory__ <br> _Get: Gets the primary Inventory involved in this transaction_ | [`Inventory`](io/wolfscript/inventory/Inventory.md)
 readonly property __View__ <br> _Get: Gets the view object itself_ | [`InventoryView`](io/wolfscript/inventory/InventoryView.md)
 readonly property __Viewers__ <br> _Get: Gets the list of players viewing the primary (upper) inventory involved_ | `List<HumanEntity>`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`inventory.InventoryOpenEvent`](io/wolfscript/event/inventory/InventoryOpenEvent.md)

---

## <a id='player-playermoveevent'></a>__Event__ player.PlayerMoveEvent

Holds information for player movement events

``` javascript
this.on('player.PlayerMoveEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerMoveEvent__(Player, Location, Location) <br> _PlayerMoveEvent constructor_ | _constructor_
  property __From__ <br> _Get: Gets the location this player moved from<br>Set: Sets the location to mark as where the player moved from_ | `Location`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __To__ <br> _Get: Gets the location this player moved to<br>Set: Sets the location that this player will move to_ | `Location`
 writeonly property __Cancelled__ <br> _Set: Sets the cancellation state of this event. A cancelled event will not_ | `void`
 function __isCancelled__() <br> _Gets the cancellation state of this event. A cancelled event will not_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerMoveEvent`](io/wolfscript/event/player/PlayerMoveEvent.md)

---

## <a id='server-serviceunregisterevent'></a>__Event__ server.ServiceUnregisterEvent

This event is called when a service is unregistered. <p> Warning: The order in which register and unregister events are called should not be relied upon.

``` javascript
this.on('server.ServiceUnregisterEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __ServiceUnregisterEvent__() <br> _ServiceUnregisterEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`ServiceEvent`](io/wolfscript/event/server/ServiceEvent.md)__ |
new __ServiceEvent__(RegisteredServiceProvider) <br> _ServiceEvent constructor_ | _constructor_
 readonly property __Provider__ <br> _Provider property_ | `RegisteredServiceProvider<?>`
 |
__Inherited items from [`ServerEvent`](io/wolfscript/event/server/ServerEvent.md)__ |
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`server.ServiceUnregisterEvent`](io/wolfscript/event/server/ServiceUnregisterEvent.md)

---

## <a id='world-chunkloadevent'></a>__Event__ world.ChunkLoadEvent

Called when a chunk is loaded

``` javascript
this.on('world.ChunkLoadEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __ChunkLoadEvent__(Chunk, boolean) <br> _ChunkLoadEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 function __isNewChunk__() <br> _Gets if this chunk was newly created or not._ | `boolean`
 |
__Inherited items from [`ChunkEvent`](io/wolfscript/event/world/ChunkEvent.md)__ |
 readonly property __Chunk__ <br> _Chunk property_ | [`Chunk`](io/wolfscript/Chunk.md)
 |
__Inherited items from [`WorldEvent`](io/wolfscript/event/world/WorldEvent.md)__ |
new __WorldEvent__(World) <br> _WorldEvent constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the world primarily involved with this event_ | `World`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`world.ChunkLoadEvent`](io/wolfscript/event/world/ChunkLoadEvent.md)

---

## <a id='entity-entitycombustevent'></a>__Event__ entity.EntityCombustEvent

Called when an entity combusts. <p> If an Entity Combust event is cancelled, the entity will not combust.

``` javascript
this.on('entity.EntityCombustEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityCombustEvent__(Entity, int) <br> _EntityCombustEvent constructor_ | _constructor_
  property __Duration__ <br> _Duration property<br>Set: The number of seconds the combustee should be alight for._ | `int`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.EntityCombustEvent`](io/wolfscript/event/entity/EntityCombustEvent.md)

---

## <a id='player-playerarmorstandmanipulateevent'></a>__Event__ player.PlayerArmorStandManipulateEvent

Called when a player interacts with an armor stand and will either swap, retrieve or place an item.

``` javascript
this.on('player.PlayerArmorStandManipulateEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerArmorStandManipulateEvent__(Player, ArmorStand, ItemStack, ItemStack, EquipmentSlot) <br> _PlayerArmorStandManipulateEvent constructor_ | _constructor_
 readonly property __ArmorStandItem__ <br> _Get: Returns the item held by the armor stand._ | `ItemStack`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __PlayerItem__ <br> _Get: Returns the item held by the player. If this Item is null and the armor stand Item is also null,_ | `ItemStack`
 readonly property __RightClicked__ <br> _RightClicked property_ | [`ArmorStand`](io/wolfscript/entity/ArmorStand.md)
 readonly property __Slot__ <br> _Get: Returns the raw item slot of the armor stand in this event._ | [`EquipmentSlot`](io/wolfscript/inventory/EquipmentSlot.md)
 |
__Inherited items from [`PlayerInteractEntityEvent`](io/wolfscript/event/player/PlayerInteractEntityEvent.md)__ |
new __PlayerInteractEntityEvent__(Player, Entity) <br> _PlayerInteractEntityEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __RightClicked__ <br> _Get: Gets the entity that was rightclicked by the player._ | `Entity`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`player.PlayerArmorStandManipulateEvent`](io/wolfscript/event/player/PlayerArmorStandManipulateEvent.md)

---

## <a id='player-playerlevelchangeevent'></a>__Event__ player.PlayerLevelChangeEvent

Called when a players level changes

``` javascript
this.on('player.PlayerLevelChangeEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerLevelChangeEvent__(Player, int, int) <br> _PlayerLevelChangeEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __NewLevel__ <br> _Get: Gets the new level of the player_ | `int`
 readonly property __OldLevel__ <br> _Get: Gets the old level of the player_ | `int`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerLevelChangeEvent`](io/wolfscript/event/player/PlayerLevelChangeEvent.md)

---

## <a id='player-playerunregisterchannelevent'></a>__Event__ player.PlayerUnregisterChannelEvent

This is called immediately after a player unregisters for a plugin channel.

``` javascript
this.on('player.PlayerUnregisterChannelEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerUnregisterChannelEvent__(Player, String) <br> _PlayerUnregisterChannelEvent constructor_ | _constructor_
 |
__Inherited items from [`PlayerChannelEvent`](io/wolfscript/event/player/PlayerChannelEvent.md)__ |
new __PlayerChannelEvent__(Player, String) <br> _PlayerChannelEvent constructor_ | _constructor_
final readonly property __Channel__ <br> _Channel property_ | `String`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`player.PlayerUnregisterChannelEvent`](io/wolfscript/event/player/PlayerUnregisterChannelEvent.md)

---

## <a id='world-worldinitevent'></a>__Event__ world.WorldInitEvent

Called when a World is initializing

``` javascript
this.on('world.WorldInitEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __WorldInitEvent__(World) <br> _WorldInitEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`WorldEvent`](io/wolfscript/event/world/WorldEvent.md)__ |
new __WorldEvent__(World) <br> _WorldEvent constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the world primarily involved with this event_ | `World`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`world.WorldInitEvent`](io/wolfscript/event/world/WorldInitEvent.md)

---

## <a id='hanging-hangingevent'></a>__Event__ hanging.HangingEvent

Represents a hanging entity-related event.

``` javascript
this.on('hanging.HangingEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Entity__ <br> _Get: Gets the hanging entity involved in this event._ | `Hanging`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





For further details, see API Reference [`hanging.HangingEvent`](io/wolfscript/event/hanging/HangingEvent.md)

---

## <a id='entity-entitydamagebyblockevent'></a>__Event__ entity.EntityDamageByBlockEvent

Called when an entity is damaged by a block

``` javascript
this.on('entity.EntityDamageByBlockEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityDamageByBlockEvent__(Block, Entity, DamageCause, Map, Map, Function) <br> _EntityDamageByBlockEvent constructor_ | _constructor_
 readonly property __Damager__ <br> _Get: Returns the block that damaged the player._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`EntityDamageEvent`](io/wolfscript/event/entity/EntityDamageEvent.md)__ |
new __EntityDamageEvent__(Entity, DamageCause, Map, Map, Function) <br> _EntityDamageEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: Gets the cause of the damage._ | `DamageCause`
  property __Damage__ <br> _Get: Gets the raw amount of damage caused by the event<br>Set: Sets the raw amount of damage caused by the event._ | `double`
final readonly property __FinalDamage__ <br> _Get: Gets the amount of damage caused by the event after all damage_ | `double`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`entity.EntityDamageByBlockEvent`](io/wolfscript/event/entity/EntityDamageByBlockEvent.md)

---

## <a id='player-playerteleportevent'></a>__Event__ player.PlayerTeleportEvent

Holds information for player teleport events

``` javascript
this.on('player.PlayerTeleportEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerTeleportEvent__(Player, Location, Location) <br> _PlayerTeleportEvent constructor_ | _constructor_
new __PlayerTeleportEvent__(Player, Location, Location, TeleportCause) <br> _PlayerTeleportEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: Gets the cause of this teleportation event_ | `TeleportCause`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`PlayerMoveEvent`](io/wolfscript/event/player/PlayerMoveEvent.md)__ |
new __PlayerMoveEvent__(Player, Location, Location) <br> _PlayerMoveEvent constructor_ | _constructor_
  property __From__ <br> _Get: Gets the location this player moved from<br>Set: Sets the location to mark as where the player moved from_ | `Location`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __To__ <br> _Get: Gets the location this player moved to<br>Set: Sets the location that this player will move to_ | `Location`
 writeonly property __Cancelled__ <br> _Set: Sets the cancellation state of this event. A cancelled event will not_ | `void`
 function __isCancelled__() <br> _Gets the cancellation state of this event. A cancelled event will not_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`player.PlayerTeleportEvent`](io/wolfscript/event/player/PlayerTeleportEvent.md)

---

## <a id='entity-entitydamagebyentityevent'></a>__Event__ entity.EntityDamageByEntityEvent

Called when an entity is damaged by an entity

``` javascript
this.on('entity.EntityDamageByEntityEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityDamageByEntityEvent__(Entity, Entity, DamageCause, Map, Map, Function) <br> _EntityDamageByEntityEvent constructor_ | _constructor_
 readonly property __Damager__ <br> _Get: Returns the entity that damaged the defender._ | `Entity`
 |
__Inherited items from [`EntityDamageEvent`](io/wolfscript/event/entity/EntityDamageEvent.md)__ |
new __EntityDamageEvent__(Entity, DamageCause, Map, Map, Function) <br> _EntityDamageEvent constructor_ | _constructor_
 readonly property __Cause__ <br> _Get: Gets the cause of the damage._ | `DamageCause`
  property __Damage__ <br> _Get: Gets the raw amount of damage caused by the event<br>Set: Sets the raw amount of damage caused by the event._ | `double`
final readonly property __FinalDamage__ <br> _Get: Gets the amount of damage caused by the event after all damage_ | `double`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`entity.EntityDamageByEntityEvent`](io/wolfscript/event/entity/EntityDamageByEntityEvent.md)

---

## <a id='painting-paintingevent'></a>__Event__ painting.PaintingEvent

Represents a painting-related event.

``` javascript
this.on('painting.PaintingEvent', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Painting__ <br> _Get: Gets the painting involved in this event._ | [`Painting`](io/wolfscript/entity/Painting.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





For further details, see API Reference [`painting.PaintingEvent`](io/wolfscript/event/painting/PaintingEvent.md)

---

## <a id='inventory-furnaceextractevent'></a>__Event__ inventory.FurnaceExtractEvent

This event is called when a player takes items out of the furnace

``` javascript
this.on('inventory.FurnaceExtractEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __FurnaceExtractEvent__(player, block, itemType, itemAmount, exp) <br> _FurnaceExtractEvent constructor_ | _constructor_
 readonly property __ItemAmount__ <br> _Get: Get the item count being retrieved_ | `int`
 readonly property __ItemType__ <br> _Get: Get the Material of the item being retrieved_ | [`Material`](io/wolfscript/Material.md)
 readonly property __Player__ <br> _Get: Get the player that triggered the event_ | `Player`
 |
__Inherited items from [`BlockExpEvent`](io/wolfscript/event/block/BlockExpEvent.md)__ |
new __BlockExpEvent__(block, exp) <br> _BlockExpEvent constructor_ | _constructor_
  property __ExpToDrop__ <br> _Get: Get the experience dropped by the block after the event has processed<br>Set: Set the amount of experience dropped by the block after the event has_ | `int`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`inventory.FurnaceExtractEvent`](io/wolfscript/event/inventory/FurnaceExtractEvent.md)

---

## <a id='weather-lightningstrikeevent'></a>__Event__ weather.LightningStrikeEvent

Stores data for lightning striking

``` javascript
this.on('weather.LightningStrikeEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __LightningStrikeEvent__(World, LightningStrike) <br> _LightningStrikeEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Lightning__ <br> _Get: Gets the bolt which is striking the earth._ | [`LightningStrike`](io/wolfscript/entity/LightningStrike.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`WeatherEvent`](io/wolfscript/event/weather/WeatherEvent.md)__ |
new __WeatherEvent__(World) <br> _WeatherEvent constructor_ | _constructor_
final readonly property __World__ <br> _Get: Returns the World where this event is occurring_ | `World`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`weather.LightningStrikeEvent`](io/wolfscript/event/weather/LightningStrikeEvent.md)

---

## <a id='entity-entitytameevent'></a>__Event__ entity.EntityTameEvent

Thrown when a LivingEntity is tamed

``` javascript
this.on('entity.EntityTameEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityTameEvent__(LivingEntity, AnimalTamer) <br> _EntityTameEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | `LivingEntity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Owner__ <br> _Get: Gets the owning AnimalTamer_ | [`AnimalTamer`](io/wolfscript/entity/AnimalTamer.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.EntityTameEvent`](io/wolfscript/event/entity/EntityTameEvent.md)

---

## <a id='player-playerexpchangeevent'></a>__Event__ player.PlayerExpChangeEvent

Called when a players experience changes naturally

``` javascript
this.on('player.PlayerExpChangeEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerExpChangeEvent__(Player, int) <br> _PlayerExpChangeEvent constructor_ | _constructor_
  property __Amount__ <br> _Get: Get the amount of experience the player will receive<br>Set: Set the amount of experience the player will receive_ | `int`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerExpChangeEvent`](io/wolfscript/event/player/PlayerExpChangeEvent.md)

---

## <a id='block-blockspreadevent'></a>__Event__ block.BlockSpreadEvent

class BlockSpreadEvent

``` javascript
this.on('block.BlockSpreadEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockSpreadEvent__(Block, Block, BlockState) <br> _BlockSpreadEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Source__ <br> _Get: Gets the source block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`BlockFormEvent`](io/wolfscript/event/block/BlockFormEvent.md)__ |
new __BlockFormEvent__(Block, BlockState) <br> _BlockFormEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`BlockGrowEvent`](io/wolfscript/event/block/BlockGrowEvent.md)__ |
new __BlockGrowEvent__(Block, BlockState) <br> _BlockGrowEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __NewState__ <br> _Get: Gets the state of the block where it will form or spread to._ | [`BlockState`](io/wolfscript/block/BlockState.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`











For further details, see API Reference [`block.BlockSpreadEvent`](io/wolfscript/event/block/BlockSpreadEvent.md)

---

## <a id='entity-entityexplodeevent'></a>__Event__ entity.EntityExplodeEvent

Called when an entity explodes

``` javascript
this.on('entity.EntityExplodeEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityExplodeEvent__(Entity, Location, List, float) <br> _EntityExplodeEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Location__ <br> _Get: Returns the location where the explosion happened._ | `Location`
  property __Yield__ <br> _Get: Returns the percentage of blocks to drop from this explosion<br>Set: Sets the percentage of blocks to drop from this explosion_ | `float`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __blockList__() <br> _Returns the list of blocks that would have been removed or were removed_ | `List<Block>`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.EntityExplodeEvent`](io/wolfscript/event/entity/EntityExplodeEvent.md)

---

## <a id='entity-playerleashentityevent'></a>__Event__ entity.PlayerLeashEntityEvent

Called immediately prior to a creature being leashed by a player.

``` javascript
this.on('entity.PlayerLeashEntityEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerLeashEntityEvent__(what, leashHolder, leasher) <br> _PlayerLeashEntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the entity being leashed._ | `Entity`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __LeashHolder__ <br> _Get: Returns the entity that is holding the leash._ | `Entity`
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





For further details, see API Reference [`entity.PlayerLeashEntityEvent`](io/wolfscript/event/entity/PlayerLeashEntityEvent.md)

---

## <a id='inventory-inventorymoveitemevent'></a>__Event__ inventory.InventoryMoveItemEvent

Called when some entity or block (e.g. hopper) tries to move items directly from one inventory to another. <p> When this event is called, the initiator may already have removed the item from the source inventory and is ready to move it into the destination inventory. <p> If this event is cancelled, the items will be returned to the source inventory, if needed. <p> If this event is not cancelled, the initiator will try to put the ItemStack into the destination inventory. If this is not possible and the ItemStack has not been modified, the source inventory slot will be restored to its former state. Otherwise any additional items will be discarded.

``` javascript
this.on('inventory.InventoryMoveItemEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __InventoryMoveItemEvent__(Inventory, ItemStack, Inventory, boolean) <br> _InventoryMoveItemEvent constructor_ | _constructor_
 readonly property __Destination__ <br> _Get: Gets the Inventory that the ItemStack is being put into_ | [`Inventory`](io/wolfscript/inventory/Inventory.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Initiator__ <br> _Get: Gets the Inventory that initiated the transfer. This will always be_ | [`Inventory`](io/wolfscript/inventory/Inventory.md)
  property __Item__ <br> _Get: Gets the ItemStack being moved; if modified, the original item will not<br>Set: Sets the ItemStack being moved; if this is different from the original_ | `ItemStack`
 readonly property __Source__ <br> _Get: Gets the Inventory that the ItemStack is being taken from_ | [`Inventory`](io/wolfscript/inventory/Inventory.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`





For further details, see API Reference [`inventory.InventoryMoveItemEvent`](io/wolfscript/event/inventory/InventoryMoveItemEvent.md)

---

## <a id='world-worldloadevent'></a>__Event__ world.WorldLoadEvent

Called when a World is loaded

``` javascript
this.on('world.WorldLoadEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __WorldLoadEvent__(World) <br> _WorldLoadEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`WorldEvent`](io/wolfscript/event/world/WorldEvent.md)__ |
new __WorldEvent__(World) <br> _WorldEvent constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the world primarily involved with this event_ | `World`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`world.WorldLoadEvent`](io/wolfscript/event/world/WorldLoadEvent.md)

---

## <a id='player-playerbedenterevent'></a>__Event__ player.PlayerBedEnterEvent

This event is fired when the player is almost about to enter the bed.

``` javascript
this.on('player.PlayerBedEnterEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerBedEnterEvent__(Player, Block) <br> _PlayerBedEnterEvent constructor_ | _constructor_
 readonly property __Bed__ <br> _Get: Returns the bed block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerBedEnterEvent`](io/wolfscript/event/player/PlayerBedEnterEvent.md)

---

## <a id='block-blockplaceevent'></a>__Event__ block.BlockPlaceEvent

Called when a block is placed by a player. <p> If a Block Place event is cancelled, the block will not be placed.

``` javascript
this.on('block.BlockPlaceEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockPlaceEvent__(Block, BlockState, Block, ItemStack, Player, boolean) <br> _BlockPlaceEvent constructor_ | _constructor_
 readonly property __BlockAgainst__ <br> _Get: Gets the block that this block was placed against_ | [`Block`](io/wolfscript/block/Block.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __BlockPlaced__ <br> _Get: Clarity method for getting the placed block. Not really needed except_ | [`Block`](io/wolfscript/block/Block.md)
 readonly property __BlockReplacedState__ <br> _Get: Gets the BlockState for the block which was replaced. Material type air_ | [`BlockState`](io/wolfscript/block/BlockState.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __ItemInHand__ <br> _Get: Gets the item in the player's hand when they placed the block._ | `ItemStack`
 readonly property __Player__ <br> _Get: Gets the player who placed the block involved in this event._ | `Player`
 writeonly property __Build__ <br> _Set: Sets the canBuild state of this event. Set to true if you want the_ | `void`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __canBuild__() <br> _Gets the value whether the player would be allowed to build here._ | `boolean`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.BlockPlaceEvent`](io/wolfscript/event/block/BlockPlaceEvent.md)

---

## <a id='vehicle-vehiclecollisionevent'></a>__Event__ vehicle.VehicleCollisionEvent

Raised when a vehicle collides.

``` javascript
this.on('vehicle.VehicleCollisionEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleCollisionEvent__(Vehicle) <br> _VehicleCollisionEvent constructor_ | _constructor_
 |
__Inherited items from [`VehicleEvent`](io/wolfscript/event/vehicle/VehicleEvent.md)__ |
new __VehicleEvent__(Vehicle) <br> _VehicleEvent constructor_ | _constructor_
final readonly property __Vehicle__ <br> _Get: Get the vehicle._ | [`Vehicle`](io/wolfscript/entity/Vehicle.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`vehicle.VehicleCollisionEvent`](io/wolfscript/event/vehicle/VehicleCollisionEvent.md)

---

## <a id='player-playerquitevent'></a>__Event__ player.PlayerQuitEvent

Called when a player leaves a server

``` javascript
this.on('player.PlayerQuitEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerQuitEvent__(Player, String) <br> _PlayerQuitEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __QuitMessage__ <br> _Get: Gets the quit message to send to all online players<br>Set: Sets the quit message to send to all online players_ | `String`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`player.PlayerQuitEvent`](io/wolfscript/event/player/PlayerQuitEvent.md)

---

## <a id='entity-horsejumpevent'></a>__Event__ entity.HorseJumpEvent

Called when a horse jumps.

``` javascript
this.on('entity.HorseJumpEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __HorseJumpEvent__(Horse, float) <br> _HorseJumpEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | `Horse`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
  property __Power__ <br> _Get: Gets the power of the jump.<br>Set: Sets the power of the jump._ | `float`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`entity.HorseJumpEvent`](io/wolfscript/event/entity/HorseJumpEvent.md)

---

## <a id='entity-entitybreakdoorevent'></a>__Event__ entity.EntityBreakDoorEvent

Called when an `entity.Entity` breaks a door <p> Cancelling the event will cause the event to be delayed

``` javascript
this.on('entity.EntityBreakDoorEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityBreakDoorEvent__(LivingEntity, Block) <br> _EntityBreakDoorEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | `LivingEntity`
 |
__Inherited items from [`EntityChangeBlockEvent`](io/wolfscript/event/entity/EntityChangeBlockEvent.md)__ |
 readonly property __Block__ <br> _Get: Gets the block the entity is changing_ | [`Block`](io/wolfscript/block/Block.md)
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __To__ <br> _Get: Gets the Material that the block is changing into_ | [`Material`](io/wolfscript/Material.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`entity.EntityBreakDoorEvent`](io/wolfscript/event/entity/EntityBreakDoorEvent.md)

---

## <a id='player-playerunleashentityevent'></a>__Event__ player.PlayerUnleashEntityEvent

Called prior to an entity being unleashed due to a player's action.

``` javascript
this.on('player.PlayerUnleashEntityEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerUnleashEntityEvent__(entity, player) <br> _PlayerUnleashEntityEvent constructor_ | _constructor_
 readonly property __Player__ <br> _Get: Returns the player who is unleashing the entity._ | `Player`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`EntityUnleashEvent`](io/wolfscript/event/entity/EntityUnleashEvent.md)__ |
new __EntityUnleashEvent__(entity, reason) <br> _EntityUnleashEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Reason__ <br> _Get: Returns the reason for the unleashing._ | `UnleashReason`
 |
__Inherited items from [`EntityEvent`](io/wolfscript/event/entity/EntityEvent.md)__ |
new __EntityEvent__(Entity) <br> _EntityEvent constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Returns the Entity involved in this event_ | `Entity`
 readonly property __EntityType__ <br> _Get: Gets the EntityType of the Entity involved in this event._ | [`EntityType`](io/wolfscript/entity/EntityType.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`player.PlayerUnleashEntityEvent`](io/wolfscript/event/player/PlayerUnleashEntityEvent.md)

---

## <a id='player-playerbucketemptyevent'></a>__Event__ player.PlayerBucketEmptyEvent

Called when a player empties a bucket

``` javascript
this.on('player.PlayerBucketEmptyEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerBucketEmptyEvent__(Player, Block, BlockFace, Material, ItemStack) <br> _PlayerBucketEmptyEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`PlayerBucketEvent`](io/wolfscript/event/player/PlayerBucketEvent.md)__ |
new __PlayerBucketEvent__(Player, Block, BlockFace, Material, ItemStack) <br> _PlayerBucketEvent constructor_ | _constructor_
 readonly property __BlockClicked__ <br> _Get: Return the block clicked_ | [`Block`](io/wolfscript/block/Block.md)
 readonly property __BlockFace__ <br> _Get: Get the face on the clicked block_ | [`BlockFace`](io/wolfscript/block/BlockFace.md)
 readonly property __Bucket__ <br> _Get: Returns the bucket used in this event_ | [`Material`](io/wolfscript/Material.md)
  property __ItemStack__ <br> _Get: Get the resulting item in hand after the bucket event<br>Set: Set the item in hand after the event_ | `ItemStack`
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`player.PlayerBucketEmptyEvent`](io/wolfscript/event/player/PlayerBucketEmptyEvent.md)

---

## <a id='block-blockgrowevent'></a>__Event__ block.BlockGrowEvent

class BlockGrowEvent

``` javascript
this.on('block.BlockGrowEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockGrowEvent__(Block, BlockState) <br> _BlockGrowEvent constructor_ | _constructor_
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __NewState__ <br> _Get: Gets the state of the block where it will form or spread to._ | [`BlockState`](io/wolfscript/block/BlockState.md)
 writeonly property __Cancelled__ <br> _Cancelled property_ | `void`
 function __isCancelled__() <br> _isCancelled method_ | `boolean`
 |
__Inherited items from [`BlockEvent`](io/wolfscript/event/block/BlockEvent.md)__ |
new __BlockEvent__(Block) <br> _BlockEvent constructor_ | _constructor_
final readonly property __Block__ <br> _Get: Gets the block involved in this event._ | [`Block`](io/wolfscript/block/Block.md)
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`







For further details, see API Reference [`block.BlockGrowEvent`](io/wolfscript/event/block/BlockGrowEvent.md)

---

## <a id='player-playerregisterchannelevent'></a>__Event__ player.PlayerRegisterChannelEvent

This is called immediately after a player registers for a plugin channel.

``` javascript
this.on('player.PlayerRegisterChannelEvent', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerRegisterChannelEvent__(Player, String) <br> _PlayerRegisterChannelEvent constructor_ | _constructor_
 |
__Inherited items from [`PlayerChannelEvent`](io/wolfscript/event/player/PlayerChannelEvent.md)__ |
new __PlayerChannelEvent__(Player, String) <br> _PlayerChannelEvent constructor_ | _constructor_
final readonly property __Channel__ <br> _Channel property_ | `String`
static readonly property __HandlerList__ <br> _HandlerList property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
 |
__Inherited items from [`PlayerEvent`](io/wolfscript/event/player/PlayerEvent.md)__ |
new __PlayerEvent__(Player) <br> _PlayerEvent constructor_ | _constructor_
final readonly property __Player__ <br> _Get: Returns the player involved in this event_ | `Player`
 |
__Inherited items from [`Event`](io/wolfscript/event/Event.md)__ |
new __Event__() <br> _The default constructor is defined for cleaner code. This constructor_ | _constructor_
new __Event__(isAsync) <br> _This constructor is used to explicitly declare an event as synchronous_ | _constructor_
 readonly property __EventName__ <br> _Get: Convenience method for providing a user-friendly identifier. By_ | `String`
abstract readonly property __Handlers__ <br> _Handlers property_ | [`HandlerList`](io/wolfscript/event/HandlerList.md)
final function __isAsynchronous__() <br> _isAsynchronous method_ | `boolean`









For further details, see API Reference [`player.PlayerRegisterChannelEvent`](io/wolfscript/event/player/PlayerRegisterChannelEvent.md)

---




