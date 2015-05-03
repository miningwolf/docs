## WolfScript Events Summary

### Event.command Events
Event | Title 
--- | --- 
[`command.CommandBlockCommand`](#command-commandblockcommand) | CommandBlockCommand
[`command.ConsoleCommand`](#command-consolecommand) | Server command hook. Contains the command issued by the server
[`command.PlayerCommand`](#command-playercommand) | Player command hook. Contains a player and a command String Array

### Event.entity Events
Event | Title 
--- | --- 
[`entity.ChickenLayEgg`](#entity-chickenlayegg) | Chicken lay egg hook, called when a chicken lay an egg.
[`entity.Damage`](#entity-damage) | Damage hook. Contains information about an entity taking damage.
[`entity.DimensionSwitch`](#entity-dimensionswitch) | Dimension switch hook. Contains information about an entity changeing
[`entity.EndermanDropBlock`](#entity-endermandropblock) | Enderman drop block hook. Contains information about an Enderman dropping a block.
[`entity.EndermanPickupBlock`](#entity-endermanpickupblock) | Enderman pick up block hook. Contains information about an Enderman picking up a block
[`entity.EntityDeath`](#entity-entitydeath) | EntityDeath
[`entity.EntityDespawn`](#entity-entitydespawn) | Entity despawn hook. Contains information about an entity despawning.
[`entity.EntityLightningStruck`](#entity-entitylightningstruck) | EntityLightningStruck
[`entity.EntityMount`](#entity-entitymount) | Called when one entity is trying to mount another
[`entity.EntityMove`](#entity-entitymove) | Entity Move Hook
[`entity.EntitySpawn`](#entity-entityspawn) | Entity spawn hook. Contains information about an entity spawning.
[`entity.EntityTame`](#entity-entitytame) | Entity tame hook
[`entity.HangingEntityDestroy`](#entity-hangingentitydestroy) | HangingEntity destroy hook. Contains information about a painting or item frame being destroyed.
[`entity.ItemTouchGround`](#entity-itemtouchground) | ItemTouchGround
[`entity.MinecartActivate`](#entity-minecartactivate) | MinecartActivate
[`entity.MobTarget`](#entity-mobtarget) | Mob target hook
[`entity.PotionEffectApplied`](#entity-potioneffectapplied) | PotionEffectApplied
[`entity.PotionEffectFinish`](#entity-potioneffectfinish) | PotionEffectFinish
[`entity.ProjectileHit`](#entity-projectilehit) | ProjectileHit
[`entity.SlimeSplit`](#entity-slimesplit) | Slime split hook, Contains information about a slime split.
[`entity.VehicleCollision`](#entity-vehiclecollision) | Is called when a vehicle collides with a LivingEntity
[`entity.VehicleDamage`](#entity-vehicledamage) | Vehicle Damage hook. Contains information about a vehicle receiving damage.
[`entity.VehicleDestroy`](#entity-vehicledestroy) | VehicleDestoryHook
[`entity.VehicleEnter`](#entity-vehicleenter) | Is called when a LivingEntity enters a vehicle
[`entity.VehicleExit`](#entity-vehicleexit) | Is called when a LivingEntity exits a vehicle
[`entity.VehicleMove`](#entity-vehiclemove) | Is called when a LivingEntity moves a vehicle
[`entity.VillagerTradeUnlock`](#entity-villagertradeunlock) | VillagerTradeUnlock hook

### Event.player Events
Event | Title 
--- | --- 
[`player.AnvilUse`](#player-anviluse) | AnvilUse Hook
[`player.ArmorBroken`](#player-armorbroken) | Called when a piece of Armor has been destroyed
[`player.ArmorStandModify`](#player-armorstandmodify) | Called when a @{link Player} places/replaces armor in an `entity.ArmorStand`
[`player.Ban`](#player-ban) | Ban hook. Contains information about an issued Ban
[`player.BedEnter`](#player-bedenter) | Bed enter hook, called when a player enters a bed
[`player.BedExit`](#player-bedexit) | Bed exit hook, called when a player leaves a bed
[`player.BlockDestroy`](#player-blockdestroy) | Called when a player destroy a block
[`player.BlockLeftClick`](#player-blockleftclick) | Left click hook. Contains information about a Player left clicking.
[`player.BlockPlace`](#player-blockplace) | Is called when a player right-clicks a block, eg. uses it.
[`player.BlockRightClick`](#player-blockrightclick) | Is called when a player right-clicks a block, eg. uses it.
[`player.BookEdit`](#player-bookedit) | Called when a `humanoid.Player` edits a Book [`inventory.Item`](#inventory-item)
[`player.Chat`](#player-chat) | Chat hook. Contains player, prefix, message and receivers information
[`player.Connection`](#player-connection) | Connection hook. Contains information about a player connecting.
[`player.Craft`](#player-craft) | Craft Hook
[`player.Disconnection`](#player-disconnection) | Disconnection hook. Contains information about a `humanoid.Player` disconnecting.
[`player.Eat`](#player-eat) | Eat
[`player.Enchant`](#player-enchant) | Enchant hook. Contains information about a player enchanting an item.
[`player.EntityRightClick`](#player-entityrightclick) | Is called when a player right-clicks an entity, for instance a villager for trading or a vehicle for entering
[`player.Experience`](#player-experience) | Experience hook. Contains information about player experience changes.
[`player.FoodExhaustion`](#player-foodexhaustion) | Food exhaustion change hook. Contains information about a player's food exhaustion changes
[`player.FoodLevel`](#player-foodlevel) | Food level hook. Contains information about a player's food level changes
[`player.FoodSaturation`](#player-foodsaturation) | Food saturation change hook. Contains information about a player's food saturation changes
[`player.GameModeChange`](#player-gamemodechange) | Called when a `humanoid.Player` changes GameModes
[`player.HealthChange`](#player-healthchange) | Health Change hook
[`player.HeldItemChange`](#player-helditemchange) | Held item change hook. Contains information about a player's held slot changes
[`player.Inventory`](#player-inventory) | Inventory hook. Contains information about a player either opening or closing an inventory
[`player.ItemDrop`](#player-itemdrop) | Item Hook. Contains EntityItem and Player
[`player.ItemFrameRotate`](#player-itemframerotate) | Called when a `humanoid.Player` rotates an [`inventory.Item`](#inventory-item) in an [`hanging.ItemFrame`](#hanging-itemframe)
[`player.ItemFrameSetItem`](#player-itemframesetitem) | Called when an `humanoid.Player` sets and [`inventory.Item`](#inventory-item) in a [`hanging.ItemFrame`](#hanging-itemframe)
[`player.ItemPickup`](#player-itempickup) | Item Hook. Contains EntityItem and Player
[`player.ItemUse`](#player-itemuse) | Item use hook. Called when a `humanoid.Player` uses an [`inventory.Item`](#inventory-item)
[`player.Kick`](#player-kick) | Kick hook. Contains the player who was kicked and the MessageReceiver who kicked them
[`player.LevelUp`](#player-levelup) | LevelUp hook. Called when a `humanoid.Player` levels up
[`player.PlayerArmSwing`](#player-playerarmswing) | Player Left Click Hook
[`player.PlayerDeath`](#player-playerdeath) | Player Death hook
[`player.PlayerIdle`](#player-playeridle) | Player Idle Hook<p/>
[`player.PlayerList`](#player-playerlist) | PlayerList
[`player.PlayerMove`](#player-playermove) | Player move hook. Contains information about a player's movement
[`player.PlayerRespawned`](#player-playerrespawned) | Player respawned hook. Contains the reference to the freshly spawned player entity
[`player.PlayerRespawning`](#player-playerrespawning) | Player pre-respawn hook.
[`player.PortalUse`](#player-portaluse) | PortalUse Hook
[`player.PreConnection`](#player-preconnection) | Login checks hook. Comes with ip, name and a kickReason that is to be returned,
[`player.ReturnFromIdle`](#player-returnfromidle) | Called when the Player is no longer idle
[`player.SignChange`](#player-signchange) | Sign Change hook. Contains information about a sign either being changed by a player
[`player.SignShow`](#player-signshow) | Sign Change hook. Contains information about a sign shown to a player
[`player.SlotClick`](#player-slotclick) | Slot click hook
[`player.StatGained`](#player-statgained) | StatGained
[`player.ToolBroken`](#player-toolbroken) | Called when a tool/sword runs out of uses and is destroyed
[`player.VillagerTrade`](#player-villagertrade) | VillagerTrade Hook

### Event.system Events
Event | Title 
--- | --- 
[`system.LoadWorld`](#system-loadworld) | Load World Hook
[`system.PermissionCheck`](#system-permissioncheck) | This hook is called after the PermissionProvider has resolved the permission,
[`system.PluginDisable`](#system-plugindisable) | Called when a plugin is disabled
[`system.PluginEnable`](#system-pluginenable) | Called when a plugin is enabled.
[`system.ServerGuiStart`](#system-serverguistart) | Called when a GUI is started
[`system.ServerListPing`](#system-serverlistping) | Called when a client ping the server
[`system.ServerShutdown`](#system-servershutdown) | Server shutdown hook. Contains information about the reason the server is
[`system.ServerTick`](#system-servertick) | Called in the servers tick loop, before world processing.
[`system.UnloadWorld`](#system-unloadworld) | Called before a world is unloaded.

### Event.world Events
Event | Title 
--- | --- 
[`world.BlockDropXp`](#world-blockdropxp) | Event thrown when a block that drop experience (spawner, ore, redstone ore) is destroyed
[`world.BlockGrow`](#world-blockgrow) | Called when a block "grows"
[`world.BlockPhysics`](#world-blockphysics) | Block physics hook. Contains information about a block's physics being updated.
[`world.BlockUpdate`](#world-blockupdate) | Block update hook. Contains information about a block updating.
[`world.ChunkCreated`](#world-chunkcreated) | Chunk created hook
[`world.ChunkCreation`](#world-chunkcreation) | Chunk creation hook. Contains information about a new chunk being created.
[`world.ChunkLoaded`](#world-chunkloaded) | Chunk created hook
[`world.ChunkUnload`](#world-chunkunload) | Chunk unload hook
[`world.Decorate`](#world-decorate) | Called when decorating terrain with trees, glowstone etc.
[`world.Dispense`](#world-dispense) | Dispense hook. Contains information about a Dispenser dispensing an entity.
[`world.Explosion`](#world-explosion) | Explosion hook. Contains information about an explosion.
[`world.FireworkExplode`](#world-fireworkexplode) | FireworkExplode
[`world.Flow`](#world-flow) | Flow hook. Contains information about a liquid flowing from one block to another
[`world.HopperTransfer`](#world-hoppertransfer) | Hook parameter for when Hoppers Transfer Items
[`world.LeafDecay`](#world-leafdecay) | Block update hook. Contains information about a block updating.
[`world.LightningStrike`](#world-lightningstrike) | LightningStrike
[`world.LiquidDestroy`](#world-liquiddestroy) | Is called when a liquid is about to destroy something (crops, popping off torches etc)
[`world.NoteBlockPlay`](#world-noteblockplay) | Called when a [`blocks.NoteBlock`](#blocks-noteblock) is played
[`world.PistonExtend`](#world-pistonextend) | Piston Extend Hook
[`world.PistonRetract`](#world-pistonretract) | Piston Retract hook
[`world.PortalCreate`](#world-portalcreate) | PortalCreate
[`world.PortalDestroy`](#world-portaldestroy) | PortalDestroy
[`world.RedstoneChange`](#world-redstonechange) | RedstoneChange hook. Contains information about power flowing from one block to another
[`world.Smelt`](#world-smelt) | Smelt
[`world.SmeltBegin`](#world-smeltbegin) | SmeltBegin
[`world.TimeChange`](#world-timechange) | Time Change hook
[`world.TreeGrow`](#world-treegrow) | Tree Grow Hook
[`world.WeatherChange`](#world-weatherchange) | WeatherChange Hook
 
## Wolfscript.event. Events

## <a id='entity-entitytame'></a>__Event__ entity.EntityTame

Entity tame hook

``` javascript
this.on('entity.EntityTame', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityTame__(animal, player, isTamed) <br> _EntityTame constructor_ | _constructor_
 readonly property __Animal__ <br> _Get: Check the default tame result._ | [`EntityAnimal`](io\wolfscript\api\entity\living\animal\EntityAnimal.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.EntityTame`](io\wolfscript\event\entity\EntityTame.md)

---

## <a id='system-pluginenable'></a>__Event__ system.PluginEnable

Called when a plugin is enabled.

``` javascript
this.on('system.PluginEnable', function (e) { });
```

Method | Type   
--- | :---: 
new __PluginEnable__(plugin) <br> _PluginEnable constructor_ | _constructor_
 readonly property __Plugin__ <br> _Get: Retrieve the plugin that is enabled_ | `Plugin`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`system.PluginEnable`](io\wolfscript\event\system\PluginEnable.md)

---

## <a id='player-playerrespawning'></a>__Event__ player.PlayerRespawning

Player pre-respawn hook. This hook is called before the new location and repsawn point for a player is determined. Use it to alter those information.

``` javascript
this.on('player.PlayerRespawning', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerRespawning__(player, respawn, bedSpawn) <br> _PlayerRespawning constructor_ | _constructor_
 function __isBedSpawn__() <br> _Gets the `Player`_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.PlayerRespawning`](io\wolfscript\event\player\PlayerRespawning.md)

---

## <a id='system-serverlistping'></a>__Event__ system.ServerListPing

Called when a client ping the server

``` javascript
this.on('system.ServerListPing', function (e) { });
```

Method | Type   
--- | :---: 
new __ServerListPing__(remoteSocket, requesterProtocol, hostNamePinged, portPinged, motd, currentPlayers, maxPlayers, favicon) <br> _ServerListPing constructor_ | _constructor_
 writeonly property __Favicon__ <br> _Set: Gets the `InetAddress` (IP) of the requesting party_ | `void`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`system.ServerListPing`](io\wolfscript\event\system\ServerListPing.md)

---

## <a id='system-servershutdown'></a>__Event__ system.ServerShutdown

Server shutdown hook. Contains information about the reason the server is shutting down

``` javascript
this.on('system.ServerShutdown', function (e) { });
```

Method | Type   
--- | :---: 
new __ServerShutdown__(reason) <br> _ServerShutdown constructor_ | _constructor_
 writeonly property __Reason__ <br> _Set: Get the reason for disconnect (if applicable)_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`system.ServerShutdown`](io\wolfscript\event\system\ServerShutdown.md)

---

## <a id='player-slotclick'></a>__Event__ player.SlotClick

Slot click hook <p/> Called when a `humanoid.Player` clicks a slot or outside a inventory window

``` javascript
this.on('player.SlotClick', function (e) { });
```

Method | Type   
--- | :---: 
final function __toString__() <br> _Constructs a new SlotClick_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.SlotClick`](io\wolfscript\event\player\SlotClick.md)

---

## <a id='entity-slimesplit'></a>__Event__ entity.SlimeSplit

Slime split hook, Contains information about a slime split.

``` javascript
this.on('entity.SlimeSplit', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __ChildSlimes__ <br> _Get: Constructs a new SlimeSplit_ | `List<Slime>`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`entity.SlimeSplit`](io\wolfscript\event\entity\SlimeSplit.md)

---

## <a id='player-armorbroken'></a>__Event__ player.ArmorBroken

Called when a piece of Armor has been destroyed

``` javascript
this.on('player.ArmorBroken', function (e) { });
```

Method | Type   
--- | :---: 
new __ArmorBroken__(player, armor) <br> _ArmorBroken constructor_ | _constructor_
 readonly property __Armor__ <br> _Get: Gets the `Player` who's armor has broken_ | [`Item`](io\wolfscript\api\inventory\Item.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.ArmorBroken`](io\wolfscript\event\player\ArmorBroken.md)

---

## <a id='player-signchange'></a>__Event__ player.SignChange

Sign Change hook. Contains information about a sign either being changed by a player

``` javascript
this.on('player.SignChange', function (e) { });
```

Method | Type   
--- | :---: 
new __SignChange__(player, sign) <br> _SignChange constructor_ | _constructor_
 readonly property __Sign__ <br> _Get: Gets the `Player`_ | [`Sign`](io\wolfscript\api\world\blocks\Sign.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.SignChange`](io\wolfscript\event\player\SignChange.md)

---

## <a id='player-foodlevel'></a>__Event__ player.FoodLevel

Food level hook. Contains information about a player's food level changes

``` javascript
this.on('player.FoodLevel', function (e) { });
```

Method | Type   
--- | :---: 
 writeonly property __NewValue__ <br> _Set: Constructs a new FoodLevel_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.FoodLevel`](io\wolfscript\event\player\FoodLevel.md)

---

## <a id='entity-vehicledamage'></a>__Event__ entity.VehicleDamage

Vehicle Damage hook. Contains information about a vehicle receiving damage.

``` javascript
this.on('entity.VehicleDamage', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleDamage__(vehicle, attacker, source, dealt) <br> _VehicleDamage constructor_ | _constructor_
 readonly property __DamageDealt__ <br> _Get: Get the vehicle that is about to be damaged_ | `float`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.VehicleDamage`](io\wolfscript\event\entity\VehicleDamage.md)

---

## <a id='world-decorate'></a>__Event__ world.Decorate

Called when decorating terrain with trees, glowstone etc.

``` javascript
this.on('world.Decorate', function (e) { });
```

Method | Type   
--- | :---: 
new __Decorate__(x, z, world, name) <br> _Decorate constructor_ | _constructor_
 function __getFromName__(name) <br> _Gets the x coordinate_ | `DecoratorType`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.Decorate`](io\wolfscript\event\world\Decorate.md)

---

## <a id='world-smeltbegin'></a>__Event__ world.SmeltBegin

SmeltBegin <p/> Called when a [`blocks.Furnace`](io\wolfscript\api\world\blocks\Furnace.md) begins to smelts an Item

``` javascript
this.on('world.SmeltBegin', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Smelting__ <br> _Get: Constructs a new Smelt_ | [`Item`](io\wolfscript\api\inventory\Item.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.SmeltBegin`](io\wolfscript\event\world\SmeltBegin.md)

---

## <a id='world-liquiddestroy'></a>__Event__ world.LiquidDestroy

Is called when a liquid is about to destroy something (crops, popping off torches etc)

``` javascript
this.on('world.LiquidDestroy', function (e) { });
```

Method | Type   
--- | :---: 
new __LiquidDestroy__(block) <br> _LiquidDestroy constructor_ | _constructor_
new __LiquidDestroy__(liquidType, toDestroy) <br> _LiquidDestroy constructor_ | _constructor_
 writeonly property __ForceDestroy__ <br> _Set: Get the block that would be destroyed by the liquid flow_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.LiquidDestroy`](io\wolfscript\event\world\LiquidDestroy.md)

---

## <a id='world-chunkcreated'></a>__Event__ world.ChunkCreated

Chunk created hook

``` javascript
this.on('world.ChunkCreated', function (e) { });
```

Method | Type   
--- | :---: 
new __ChunkCreated__(chunk, world) <br> _ChunkCreated constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the [`Chunk`](io\wolfscript\api\world\Chunk.md)_ | [`World`](io\wolfscript\api\world\World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`world.ChunkCreated`](io\wolfscript\event\world\ChunkCreated.md)

---

## <a id='world-leafdecay'></a>__Event__ world.LeafDecay

Block update hook. Contains information about a block updating.

``` javascript
this.on('world.LeafDecay', function (e) { });
```

Method | Type   
--- | :---: 
new __LeafDecay__(block) <br> _LeafDecay constructor_ | _constructor_
 readonly property __Block__ <br> _Get: Get the leaf block that is about to decay_ | [`Block`](io\wolfscript\api\world\blocks\Block.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.LeafDecay`](io\wolfscript\event\world\LeafDecay.md)

---

## <a id='entity-endermandropblock'></a>__Event__ entity.EndermanDropBlock

Enderman drop block hook. Contains information about an Enderman dropping a block.

``` javascript
this.on('entity.EndermanDropBlock', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Block__ <br> _Get: Constructs a new EndermanDropBlock_ | [`Block`](io\wolfscript\api\world\blocks\Block.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.EndermanDropBlock`](io\wolfscript\event\entity\EndermanDropBlock.md)

---

## <a id='world-blockphysics'></a>__Event__ world.BlockPhysics

Block physics hook. Contains information about a block's physics being updated.

``` javascript
this.on('world.BlockPhysics', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockPhysics__(block, placed) <br> _BlockPhysics constructor_ | _constructor_
final function __toString__() <br> _toString method_ | `String`
 function __wasPlaced__() <br> _Gets the [`Block`](io\wolfscript\api\world\blocks\Block.md)_ | `boolean`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.BlockPhysics`](io\wolfscript\event\world\BlockPhysics.md)

---

## <a id='player-foodsaturation'></a>__Event__ player.FoodSaturation

Food saturation change hook. Contains information about a player's food saturation changes

``` javascript
this.on('player.FoodSaturation', function (e) { });
```

Method | Type   
--- | :---: 
 writeonly property __NewValue__ <br> _Set: Constructs a new FoodSaturation_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.FoodSaturation`](io\wolfscript\event\player\FoodSaturation.md)

---

## <a id='player-playermove'></a>__Event__ player.PlayerMove

Player move hook. Contains information about a player's movement

``` javascript
this.on('player.PlayerMove', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerMove__(player, from, to) <br> _PlayerMove constructor_ | _constructor_
 readonly property __To__ <br> _Get: Gets the `Player`_ | `Location`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.PlayerMove`](io\wolfscript\event\player\PlayerMove.md)

---

## <a id='player-itemframerotate'></a>__Event__ player.ItemFrameRotate

Called when a `humanoid.Player` rotates an [`inventory.Item`](io\wolfscript\api\inventory\Item.md) in an [`hanging.ItemFrame`](io\wolfscript\api\entity\hanging\ItemFrame.md)

``` javascript
this.on('player.ItemFrameRotate', function (e) { });
```

Method | Type   
--- | :---: 
new __ItemFrameRotate__(player, itemFrame) <br> _ItemFrameRotate constructor_ | _constructor_
 writeonly property __NewRotation__ <br> _Set: Gets the `Player` interacting with the [`ItemFrame`](io\wolfscript\api\entity\hanging\ItemFrame.md)_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.ItemFrameRotate`](io\wolfscript\event\player\ItemFrameRotate.md)

---

## <a id='player-chat'></a>__Event__ player.Chat

Chat hook. Contains player, prefix, message and receivers information

``` javascript
this.on('player.Chat', function (e) { });
```

Method | Type   
--- | :---: 
new __Chat__(player, format) <br> _Chat constructor_ | _constructor_
 function __buildSendMessage__() <br> _Get the `Player` instance_ | `String`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.Chat`](io\wolfscript\event\player\Chat.md)

---

## <a id='player-playerrespawned'></a>__Event__ player.PlayerRespawned

Player respawned hook. Contains the reference to the freshly spawned player entity and the location it spawned in. The location can not be overridden at this point. If you need the player to go somewhere else, use `Player#teleportTo(Location)` etc

``` javascript
this.on('player.PlayerRespawned', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerRespawned__(player, location) <br> _PlayerRespawned constructor_ | _constructor_
 readonly property __Location__ <br> _Get: Gets the `Player`_ | `Location`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.PlayerRespawned`](io\wolfscript\event\player\PlayerRespawned.md)

---

## <a id='world-portalcreate'></a>__Event__ world.PortalCreate

PortalCreate<br/> Contains information about a portal being created

``` javascript
this.on('world.PortalCreate', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __World__ <br> _Get: Constructs a new PortalCreate_ | [`World`](io\wolfscript\api\world\World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.PortalCreate`](io\wolfscript\event\world\PortalCreate.md)

---

## <a id='entity-damage'></a>__Event__ entity.Damage

Damage hook. Contains information about an entity taking damage.

``` javascript
this.on('entity.Damage', function (e) { });
```

Method | Type   
--- | :---: 
 writeonly property __DamageDealt__ <br> _Set: Constructs a new Damage_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.Damage`](io\wolfscript\event\entity\Damage.md)

---

## <a id='player-portaluse'></a>__Event__ player.PortalUse

PortalUse Hook

``` javascript
this.on('player.PortalUse', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __To__ <br> _Get: Constructs a new PortalUse_ | `Location`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.PortalUse`](io\wolfscript\event\player\PortalUse.md)

---

## <a id='entity-vehicleexit'></a>__Event__ entity.VehicleExit

Is called when a LivingEntity exits a vehicle

``` javascript
this.on('entity.VehicleExit', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleExit__(vehicle, entity) <br> _VehicleExit constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | [`LivingBase`](io\wolfscript\api\entity\living\LivingBase.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.VehicleExit`](io\wolfscript\event\entity\VehicleExit.md)

---

## <a id='system-plugindisable'></a>__Event__ system.PluginDisable

Called when a plugin is disabled

``` javascript
this.on('system.PluginDisable', function (e) { });
```

Method | Type   
--- | :---: 
new __PluginDisable__(plugin) <br> _PluginDisable constructor_ | _constructor_
 readonly property __Plugin__ <br> _Get: Retrieve the plugin that is disabled_ | `Plugin`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`system.PluginDisable`](io\wolfscript\event\system\PluginDisable.md)

---

## <a id='world-blockdropxp'></a>__Event__ world.BlockDropXp

Event thrown when a block that drop experience (spawner, ore, redstone ore) is destroyed

``` javascript
this.on('world.BlockDropXp', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockDropXp__(block, xp) <br> _BlockDropXp constructor_ | _constructor_
 writeonly property __Xp__ <br> _Set: Get the block that gives the dropped experience_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.BlockDropXp`](io\wolfscript\event\world\BlockDropXp.md)

---

## <a id='world-fireworkexplode'></a>__Event__ world.FireworkExplode

FireworkExplode <p/> Called when a Firework Rocket is to explode

``` javascript
this.on('world.FireworkExplode', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __FireworkRocket__ <br> _Get: Constructs a new FireworkExplode_ | [`FireworkRocket`](io\wolfscript\api\entity\FireworkRocket.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.FireworkExplode`](io\wolfscript\event\world\FireworkExplode.md)

---

## <a id='entity-dimensionswitch'></a>__Event__ entity.DimensionSwitch

Dimension switch hook. Contains information about an entity changeing dimentions

``` javascript
this.on('entity.DimensionSwitch', function (e) { });
```

Method | Type   
--- | :---: 
new __DimensionSwitch__(entity, to, from) <br> _DimensionSwitch constructor_ | _constructor_
 readonly property __LocationFrom__ <br> _Get: Get the entity involved here._ | `Location`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.DimensionSwitch`](io\wolfscript\event\entity\DimensionSwitch.md)

---

## <a id='player-bedenter'></a>__Event__ player.BedEnter

Bed enter hook, called when a player enters a bed

``` javascript
this.on('player.BedEnter', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Bed__ <br> _Get: Create a new BedEnter_ | [`Block`](io\wolfscript\api\world\blocks\Block.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.BedEnter`](io\wolfscript\event\player\BedEnter.md)

---

## <a id='player-villagertrade'></a>__Event__ player.VillagerTrade

VillagerTrade Hook<br> Called when a `humanoid.Player` trades with a [`api.VillagerTrade`](io\wolfscript\api\VillagerTrade.md) from an `humanoid.Villager`

``` javascript
this.on('player.VillagerTrade', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Trade__ <br> _Get: Constructs a new VillagerTrade_ | [`VillagerTrade`](io\wolfscript\api\VillagerTrade.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.VillagerTrade`](io\wolfscript\event\player\VillagerTrade.md)

---

## <a id='player-foodexhaustion'></a>__Event__ player.FoodExhaustion

Food exhaustion change hook. Contains information about a player's food exhaustion changes

``` javascript
this.on('player.FoodExhaustion', function (e) { });
```

Method | Type   
--- | :---: 
 writeonly property __NewValue__ <br> _Set: Constructs a new FoodExhaustion_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.FoodExhaustion`](io\wolfscript\event\player\FoodExhaustion.md)

---

## <a id='entity-potioneffectfinish'></a>__Event__ entity.PotionEffectFinish

PotionEffectFinish<br> Called when a [`potion.PotionEffect`](io\wolfscript\api\potion\PotionEffect.md) finishes it's effect on a [`living.LivingBase`](io\wolfscript\api\entity\living\LivingBase.md)

``` javascript
this.on('entity.PotionEffectFinish', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __PotionEffect__ <br> _Get: Constructs a new PotionEffectFinshHook_ | [`PotionEffect`](io\wolfscript\api\potion\PotionEffect.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`entity.PotionEffectFinish`](io\wolfscript\event\entity\PotionEffectFinish.md)

---

## <a id='entity-villagertradeunlock'></a>__Event__ entity.VillagerTradeUnlock

VillagerTradeUnlock hook<br> Called when a Trade is unlocked

``` javascript
this.on('entity.VillagerTradeUnlock', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Trade__ <br> _Get: Constructs a new VillagerTradeUnlock_ | [`VillagerTrade`](io\wolfscript\api\VillagerTrade.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.VillagerTradeUnlock`](io\wolfscript\event\entity\VillagerTradeUnlock.md)

---

## <a id='entity-endermanpickupblock'></a>__Event__ entity.EndermanPickupBlock

Enderman pick up block hook. Contains information about an Enderman picking up a block

``` javascript
this.on('entity.EndermanPickupBlock', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Block__ <br> _Get: Constructs a new EndermanPickUpBlockHook_ | [`Block`](io\wolfscript\api\world\blocks\Block.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.EndermanPickupBlock`](io\wolfscript\event\entity\EndermanPickupBlock.md)

---

## <a id='world-pistonretract'></a>__Event__ world.PistonRetract

Piston Retract hook<br> Called when a piston retracts

``` javascript
this.on('world.PistonRetract', function (e) { });
```

Method | Type   
--- | :---: 
new __PistonRetract__(piston, moving) <br> _PistonRetract constructor_ | _constructor_
 readonly property __Moving__ <br> _Get: Gets the piston [`Block`](io\wolfscript\api\world\blocks\Block.md)_ | [`Block`](io\wolfscript\api\world\blocks\Block.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.PistonRetract`](io\wolfscript\event\world\PistonRetract.md)

---

## <a id='player-connection'></a>__Event__ player.Connection

Connection hook. Contains information about a player connecting.

``` javascript
this.on('player.Connection', function (e) { });
```

Method | Type   
--- | :---: 
new __Connection__(player, message, firstTime) <br> _Connection constructor_ | _constructor_
 writeonly property __Hidden__ <br> _Set: Gets the `Player`_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.Connection`](io\wolfscript\event\player\Connection.md)

---

## <a id='system-serverguistart'></a>__Event__ system.ServerGuiStart

Called when a GUI is started

``` javascript
this.on('system.ServerGuiStart', function (e) { });
```

Method | Type   
--- | :---: 
new __ServerGuiStart__(gui) <br> _ServerGuiStart constructor_ | _constructor_
  property __Gui__ <br> _Gui property_ | [`GUIControl`](io\wolfscript\api\gui\GUIControl.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`system.ServerGuiStart`](io\wolfscript\event\system\ServerGuiStart.md)

---

## <a id='player-eat'></a>__Event__ player.Eat

Eat <p/> Contains information about a `humanoid.Player` having finished eating Food

``` javascript
this.on('player.Eat', function (e) { });
```

Method | Type   
--- | :---: 
 function __setPotionEffects__() <br> _Constructs a new Eat_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.Eat`](io\wolfscript\event\player\Eat.md)

---

## <a id='world-treegrow'></a>__Event__ world.TreeGrow

Tree Grow Hook <p/> Called with a sapling attempts to become a Tree<br> This does not signal that a tree can grow or how it would grow.

``` javascript
this.on('world.TreeGrow', function (e) { });
```

Method | Type   
--- | :---: 
final function __toString__() <br> _Constructs a new TreeGrow_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.TreeGrow`](io\wolfscript\event\world\TreeGrow.md)

---

## <a id='player-healthchange'></a>__Event__ player.HealthChange

Health Change hook

``` javascript
this.on('player.HealthChange', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __NewValue__ <br> _Get: Constructs a new HealthChange hook_ | `float`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.HealthChange`](io\wolfscript\event\player\HealthChange.md)

---

## <a id='player-playerarmswing'></a>__Event__ player.PlayerArmSwing

Player Left Click Hook<br> Called when a `humanoid.Player` swings their arm with a Left Click

``` javascript
this.on('player.PlayerArmSwing', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerArmSwing__(player) <br> _PlayerArmSwing constructor_ | _constructor_
 readonly property __Player__ <br> _Get: Gets the `Player` clicking_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.PlayerArmSwing`](io\wolfscript\event\player\PlayerArmSwing.md)

---

## <a id='player-signshow'></a>__Event__ player.SignShow

Sign Change hook. Contains information about a sign shown to a player

``` javascript
this.on('player.SignShow', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Sign__ <br> _Get: Constructs a new SignShow_ | [`Sign`](io\wolfscript\api\world\blocks\Sign.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.SignShow`](io\wolfscript\event\player\SignShow.md)

---

## <a id='player-entityrightclick'></a>__Event__ player.EntityRightClick

Is called when a player right-clicks an entity, for instance a villager for trading or a vehicle for entering

``` javascript
this.on('player.EntityRightClick', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Entity__ <br> _Get: Construct a new EntityRightClick_ | [`Entity`](io\wolfscript\api\entity\Entity.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.EntityRightClick`](io\wolfscript\event\player\EntityRightClick.md)

---

## <a id='player-disconnection'></a>__Event__ player.Disconnection

Disconnection hook. Contains information about a `humanoid.Player` disconnecting.

``` javascript
this.on('player.Disconnection', function (e) { });
```

Method | Type   
--- | :---: 
new __Disconnection__(player, reason, leave) <br> _Disconnection constructor_ | _constructor_
 writeonly property __Hidden__ <br> _Set: Gets the `Player` disconnected_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.Disconnection`](io\wolfscript\event\player\Disconnection.md)

---

## <a id='world-chunkloaded'></a>__Event__ world.ChunkLoaded

Chunk created hook

``` javascript
this.on('world.ChunkLoaded', function (e) { });
```

Method | Type   
--- | :---: 
new __ChunkLoaded__(chunk, world, newchunk) <br> _ChunkLoaded constructor_ | _constructor_
 function __isNew__() <br> _Gets the [`Chunk`](io\wolfscript\api\world\Chunk.md)_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`world.ChunkLoaded`](io\wolfscript\event\world\ChunkLoaded.md)

---

## <a id='player-bookedit'></a>__Event__ player.BookEdit

Called when a `humanoid.Player` edits a Book [`inventory.Item`](io\wolfscript\api\inventory\Item.md)

``` javascript
this.on('player.BookEdit', function (e) { });
```

Method | Type   
--- | :---: 
new __BookEdit__(book, player) <br> _BookEdit constructor_ | _constructor_
final function __toString__() <br> _Gets the `Player` editting the Book_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.BookEdit`](io\wolfscript\event\player\BookEdit.md)

---

## <a id='world-portaldestroy'></a>__Event__ world.PortalDestroy

PortalDestroy<br/> Contains information about a portal being destroyed

``` javascript
this.on('world.PortalDestroy', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __World__ <br> _Get: Constructs a new PortalDestroy_ | [`World`](io\wolfscript\api\world\World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.PortalDestroy`](io\wolfscript\event\world\PortalDestroy.md)

---

## <a id='entity-entitydeath'></a>__Event__ entity.EntityDeath

EntityDeath <p/> Called when a Entity (other than a `humanoid.Player`) dies.<br> For `humanoid.Player` death, use [`player.PlayerDeath`](io\wolfscript\event\player\PlayerDeath.md)

``` javascript
this.on('entity.EntityDeath', function (e) { });
```

Method | Type   
--- | :---: 
final function __toString__() <br> _Constructs a new EntityDeath_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`entity.EntityDeath`](io\wolfscript\event\entity\EntityDeath.md)

---

## <a id='system-loadworld'></a>__Event__ system.LoadWorld

Load World Hook <p/> Called when a [`world.World`](io\wolfscript\api\world\World.md) is loaded and initialized

``` javascript
this.on('system.LoadWorld', function (e) { });
```

Method | Type   
--- | :---: 
new __LoadWorld__(world) <br> _LoadWorld constructor_ | _constructor_
 function __toString__() <br> _Gets the [`World`](io\wolfscript\api\world\World.md) that has loaded_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`system.LoadWorld`](io\wolfscript\event\system\LoadWorld.md)

---

## <a id='entity-projectilehit'></a>__Event__ entity.ProjectileHit

ProjectileHit<br> Called when a Projectile hits something

``` javascript
this.on('entity.ProjectileHit', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __EntityHit__ <br> _Get: Constructs a new ProjectileHit_ | [`Entity`](io\wolfscript\api\entity\Entity.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.ProjectileHit`](io\wolfscript\event\entity\ProjectileHit.md)

---

## <a id='world-dispense'></a>__Event__ world.Dispense

Dispense hook. Contains information about a Dispenser dispensing an entity.

``` javascript
this.on('world.Dispense', function (e) { });
```

Method | Type   
--- | :---: 
new __Dispense__(dispenser, entity) <br> _Dispense constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Gets the [`Dispenser`](io\wolfscript\api\world\blocks\Dispenser.md)_ | [`Entity`](io\wolfscript\api\entity\Entity.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.Dispense`](io\wolfscript\event\world\Dispense.md)

---

## <a id='entity-mobtarget'></a>__Event__ entity.MobTarget

Mob target hook <p/> Contains information about a [`living.LivingBase`](io\wolfscript\api\entity\living\LivingBase.md) targeting another [`living.LivingBase`](io\wolfscript\api\entity\living\LivingBase.md) either for attack or following

``` javascript
this.on('entity.MobTarget', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Target__ <br> _Get: Constructs a new MobTarget_ | [`LivingBase`](io\wolfscript\api\entity\living\LivingBase.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.MobTarget`](io\wolfscript\event\entity\MobTarget.md)

---

## <a id='entity-entityspawn'></a>__Event__ entity.EntitySpawn

Entity spawn hook. Contains information about an entity spawning.

``` javascript
this.on('entity.EntitySpawn', function (e) { });
```

Method | Type   
--- | :---: 
new __EntitySpawn__(entity) <br> _EntitySpawn constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Gets the [`Entity`](io\wolfscript\api\entity\Entity.md) spawning_ | [`Entity`](io\wolfscript\api\entity\Entity.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.EntitySpawn`](io\wolfscript\event\entity\EntitySpawn.md)

---

## <a id='entity-vehiclemove'></a>__Event__ entity.VehicleMove

Is called when a LivingEntity moves a vehicle

``` javascript
this.on('entity.VehicleMove', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleMove__(vehicle, from, to) <br> _VehicleMove constructor_ | _constructor_
 writeonly property __To__ <br> _To property_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.VehicleMove`](io\wolfscript\event\entity\VehicleMove.md)

---

## <a id='player-statgained'></a>__Event__ player.StatGained

StatGained<br> Called when a `humanoid.Player` gains a Stat

``` javascript
this.on('player.StatGained', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Gain__ <br> _Get: Constructs a new StatGained_ | `int`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.StatGained`](io\wolfscript\event\player\StatGained.md)

---

## <a id='world-timechange'></a>__Event__ world.TimeChange

Time Change hook

``` javascript
this.on('world.TimeChange', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Time__ <br> _Get: Constructs a new TimeChange_ | `long`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.TimeChange`](io\wolfscript\event\world\TimeChange.md)

---

## <a id='command-consolecommand'></a>__Event__ command.ConsoleCommand

Server command hook. Contains the command issued by the server

``` javascript
this.on('command.ConsoleCommand', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Caller__ <br> _Get: Constructs a new ConsoleCommand_ | [`MessageReceiver`](io\wolfscript\chat\MessageReceiver.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`command.ConsoleCommand`](io\wolfscript\event\command\ConsoleCommand.md)

---

## <a id='player-armorstandmodify'></a>__Event__ player.ArmorStandModify

Called when a @{link Player} places/replaces armor in an `entity.ArmorStand`

``` javascript
this.on('player.ArmorStandModify', function (e) { });
```

Method | Type   
--- | :---: 
new __ArmorStandModify__(armorStand, player, slotId, current, setting) <br> _ArmorStandModify constructor_ | _constructor_
 readonly property __SettingItem__ <br> _Get: Gets the `Player` modifying the ArmorStand_ | [`Item`](io\wolfscript\api\inventory\Item.md)
 readonly property __SlotId__ <br> _SlotId property_ | `int`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.ArmorStandModify`](io\wolfscript\event\player\ArmorStandModify.md)

---

## <a id='player-ban'></a>__Event__ player.Ban

Ban hook. Contains information about an issued Ban

``` javascript
this.on('player.Ban', function (e) { });
```

Method | Type   
--- | :---: 
new __Ban__(banned, ip, moderator, reason, bantime) <br> _Ban constructor_ | _constructor_
 readonly property __Bantime__ <br> _Get: Get the [`PlayerReference`](io\wolfscript\api\PlayerReference.md) that has been banned._ | `long`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.Ban`](io\wolfscript\event\player\Ban.md)

---

## <a id='player-bedexit'></a>__Event__ player.BedExit

Bed exit hook, called when a player leaves a bed

``` javascript
this.on('player.BedExit', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Bed__ <br> _Get: Create a new BedExit_ | [`Block`](io\wolfscript\api\world\blocks\Block.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.BedExit`](io\wolfscript\event\player\BedExit.md)

---

## <a id='command-commandblockcommand'></a>__Event__ command.CommandBlockCommand

CommandBlockCommand<br> Called when a CommandBlock executes a command.

``` javascript
this.on('command.CommandBlockCommand', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Arguments__ <br> _Get: Constructs a new CommandBlockCommand_ | `String[]`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`command.CommandBlockCommand`](io\wolfscript\event\command\CommandBlockCommand.md)

---

## <a id='entity-itemtouchground'></a>__Event__ entity.ItemTouchGround

ItemTouchGround<br> Called when an [`entity.EntityItem`](io\wolfscript\api\entity\EntityItem.md) hits the ground

``` javascript
this.on('entity.ItemTouchGround', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __EntityItem__ <br> _Get: Constructs a new ItemTouchGround_ | [`EntityItem`](io\wolfscript\api\entity\EntityItem.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.ItemTouchGround`](io\wolfscript\event\entity\ItemTouchGround.md)

---

## <a id='entity-entitydespawn'></a>__Event__ entity.EntityDespawn

Entity despawn hook. Contains information about an entity despawning.

``` javascript
this.on('entity.EntityDespawn', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityDespawn__(entity) <br> _EntityDespawn constructor_ | _constructor_
 readonly property __Entity__ <br> _Get: Gets the [`Entity`](io\wolfscript\api\entity\Entity.md) despawning_ | [`Entity`](io\wolfscript\api\entity\Entity.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.EntityDespawn`](io\wolfscript\event\entity\EntityDespawn.md)

---

## <a id='world-chunkcreation'></a>__Event__ world.ChunkCreation

Chunk creation hook. Contains information about a new chunk being created.

``` javascript
this.on('world.ChunkCreation', function (e) { });
```

Method | Type   
--- | :---: 
new __ChunkCreation__(x, z, dimension) <br> _ChunkCreation constructor_ | _constructor_
 readonly property __BiomeData__ <br> _Get: Gets the x coordinate of the chunk_ | `BiomeType[]`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`world.ChunkCreation`](io\wolfscript\event\world\ChunkCreation.md)

---

## <a id='entity-chickenlayegg'></a>__Event__ entity.ChickenLayEgg

Chicken lay egg hook, called when a chicken lay an egg.

``` javascript
this.on('entity.ChickenLayEgg', function (e) { });
```

Method | Type   
--- | :---: 
 writeonly property __NextEggIn__ <br> _Set: Creates a new ChickenLayEgg_ | `void`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.ChickenLayEgg`](io\wolfscript\event\entity\ChickenLayEgg.md)

---

## <a id='command-playercommand'></a>__Event__ command.PlayerCommand

Player command hook. Contains a player and a command String Array

``` javascript
this.on('command.PlayerCommand', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Player__ <br> _Get: Constructs a new PlayerCommand_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`command.PlayerCommand`](io\wolfscript\event\command\PlayerCommand.md)

---

## <a id='player-gamemodechange'></a>__Event__ player.GameModeChange

Called when a `humanoid.Player` changes GameModes

``` javascript
this.on('player.GameModeChange', function (e) { });
```

Method | Type   
--- | :---: 
new __GameModeChange__(player, newMode) <br> _GameModeChange constructor_ | _constructor_
 readonly property __NewMode__ <br> _Get: Gets the `Player` changing modes_ | [`GameMode`](io\wolfscript\api\GameMode.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.GameModeChange`](io\wolfscript\event\player\GameModeChange.md)

---

## <a id='system-unloadworld'></a>__Event__ system.UnloadWorld

Called before a world is unloaded.<br> Before a world is unloaded, it will be saved! After a world is unloaded it will not be processed in the tick loop anymore. A world can not be unloaded if it still has players on it. For informational use - to give plugins a chance to null their references to that world, if they have any.

``` javascript
this.on('system.UnloadWorld', function (e) { });
```

Method | Type   
--- | :---: 
new __UnloadWorld__(world) <br> _UnloadWorld constructor_ | _constructor_
 readonly property __World__ <br> _Get: Returns the world that is about to be unloaded_ | [`World`](io\wolfscript\api\world\World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`system.UnloadWorld`](io\wolfscript\event\system\UnloadWorld.md)

---

## <a id='world-flow'></a>__Event__ world.Flow

Flow hook. Contains information about a liquid flowing from one block to another

``` javascript
this.on('world.Flow', function (e) { });
```

Method | Type   
--- | :---: 
new __Flow__(from, to) <br> _Flow constructor_ | _constructor_
 readonly property __BlockTo__ <br> _Get: Gets the [`Block`](io\wolfscript\api\world\blocks\Block.md) flowing from_ | [`Block`](io\wolfscript\api\world\blocks\Block.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.Flow`](io\wolfscript\event\world\Flow.md)

---

## <a id='world-blockupdate'></a>__Event__ world.BlockUpdate

Block update hook. Contains information about a block updating.

``` javascript
this.on('world.BlockUpdate', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __NewBlockType__ <br> _NewBlockType property_ | [`BlockType`](io\wolfscript\api\world\blocks\BlockType.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.BlockUpdate`](io\wolfscript\event\world\BlockUpdate.md)

---

## <a id='player-blockplace'></a>__Event__ player.BlockPlace

Is called when a player right-clicks a block, eg. uses it.

``` javascript
this.on('player.BlockPlace', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __BlockPlaced__ <br> _Get: Constructs a new BlockPlace_ | [`Block`](io\wolfscript\api\world\blocks\Block.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.BlockPlace`](io\wolfscript\event\player\BlockPlace.md)

---

## <a id='player-craft'></a>__Event__ player.Craft

Craft Hook <p/> Called when a matching crafting recipe if found for a `humanoid.Player` crafting

``` javascript
this.on('player.Craft', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __MatchingRecipe__ <br> _Get: Creates a new Craft._ | [`Recipe`](io\wolfscript\api\inventory\recipes\Recipe.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.Craft`](io\wolfscript\event\player\Craft.md)

---

## <a id='player-anviluse'></a>__Event__ player.AnvilUse

AnvilUse Hook <p/> Called when a `humanoid.Player` uses an Anvil<br> Get the `blocks.Anvil` and modify it's values directly

``` javascript
this.on('player.AnvilUse', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Anvil__ <br> _Get: Constructs a new AnvilUse_ | `Anvil`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.AnvilUse`](io\wolfscript\event\player\AnvilUse.md)

---

## <a id='system-servertick'></a>__Event__ system.ServerTick

Called in the servers tick loop, before world processing. For informational use

``` javascript
this.on('system.ServerTick', function (e) { });
```

Method | Type   
--- | :---: 
new __ServerTick__(deltaTime) <br> _ServerTick constructor_ | _constructor_
 writeonly property __DeltaTime__ <br> _DeltaTime property_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`system.ServerTick`](io\wolfscript\event\system\ServerTick.md)

---

## <a id='player-itemuse'></a>__Event__ player.ItemUse

Item use hook. Called when a `humanoid.Player` uses an [`inventory.Item`](io\wolfscript\api\inventory\Item.md)

``` javascript
this.on('player.ItemUse', function (e) { });
```

Method | Type   
--- | :---: 
new __ItemUse__(player, item, clicked) <br> _ItemUse constructor_ | _constructor_
 readonly property __BlockClicked__ <br> _Get: Gets the `Player`_ | [`Block`](io\wolfscript\api\world\blocks\Block.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.ItemUse`](io\wolfscript\event\player\ItemUse.md)

---

## <a id='world-weatherchange'></a>__Event__ world.WeatherChange

WeatherChange Hook

``` javascript
this.on('world.WeatherChange', function (e) { });
```

Method | Type   
--- | :---: 
final function __toString__() <br> _toString method_ | `String`
 function __turningOn__() <br> _Constructs a new WeatherChange_ | `boolean`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.WeatherChange`](io\wolfscript\event\world\WeatherChange.md)

---

## <a id='player-enchant'></a>__Event__ player.Enchant

Enchant hook. Contains information about a player enchanting an item.

``` javascript
this.on('player.Enchant', function (e) { });
```

Method | Type   
--- | :---: 
new __Enchant__(player, item, enchtab) <br> _Enchant constructor_ | _constructor_
 function __isValid__(checkStackable) <br> _Gets the `Player` enchanting an [`Item`](io\wolfscript\api\inventory\Item.md)_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.Enchant`](io\wolfscript\event\player\Enchant.md)

---

## <a id='player-experience'></a>__Event__ player.Experience

Experience hook. Contains information about player experience changes.

``` javascript
this.on('player.Experience', function (e) { });
```

Method | Type   
--- | :---: 
new __Experience__(player, oldval, newval) <br> _Experience constructor_ | _constructor_
 readonly property __NewValue__ <br> _Get: Gets the `Player`_ | `int`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.Experience`](io\wolfscript\event\player\Experience.md)

---

## <a id='world-chunkunload'></a>__Event__ world.ChunkUnload

Chunk unload hook

``` javascript
this.on('world.ChunkUnload', function (e) { });
```

Method | Type   
--- | :---: 
new __ChunkUnload__(chunk, world) <br> _ChunkUnload constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the [`Chunk`](io\wolfscript\api\world\Chunk.md)_ | [`World`](io\wolfscript\api\world\World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.ChunkUnload`](io\wolfscript\event\world\ChunkUnload.md)

---

## <a id='entity-hangingentitydestroy'></a>__Event__ entity.HangingEntityDestroy

HangingEntity destroy hook. Contains information about a painting or item frame being destroyed. In case the it was destroyed by a player, you will get this player too.

``` javascript
this.on('entity.HangingEntityDestroy', function (e) { });
```

Method | Type   
--- | :---: 
new __HangingEntityDestroy__(hanging, player, source) <br> _HangingEntityDestroy constructor_ | _constructor_
 readonly property __DamageSource__ <br> _Get: Gets the [`HangingEntity`](io\wolfscript\api\entity\hanging\HangingEntity.md)_ | [`DamageSource`](io\wolfscript\api\DamageSource.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.HangingEntityDestroy`](io\wolfscript\event\entity\HangingEntityDestroy.md)

---

## <a id='entity-potioneffectapplied'></a>__Event__ entity.PotionEffectApplied

PotionEffectApplied<br> Called when a [`potion.PotionEffect`](io\wolfscript\api\potion\PotionEffect.md) is applied to a [`living.LivingBase`](io\wolfscript\api\entity\living\LivingBase.md)

``` javascript
this.on('entity.PotionEffectApplied', function (e) { });
```

Method | Type   
--- | :---: 
 writeonly property __PotionEffect__ <br> _Set: Constructs a new PotionEffectApplied_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`entity.PotionEffectApplied`](io\wolfscript\event\entity\PotionEffectApplied.md)

---

## <a id='player-playeridle'></a>__Event__ player.PlayerIdle

Player Idle Hook<p/> Called when a Player is idle for too long and just before them being kicked for idling.<br/> Canceling this hook will stop the kicking process.<br/> NOTE: This hook only fires if PlayerIdle time is set above 0 in the sever.cfg and for `humanoid.Player`(s) who aren't set to ignoresRestrictions

``` javascript
this.on('player.PlayerIdle', function (e) { });
```

Method | Type   
--- | :---: 
 function __toString__() <br> _Constructs a new PlayerIdle_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.PlayerIdle`](io\wolfscript\event\player\PlayerIdle.md)

---

## <a id='player-itemdrop'></a>__Event__ player.ItemDrop

Item Hook. Contains EntityItem and Player

``` javascript
this.on('player.ItemDrop', function (e) { });
```

Method | Type   
--- | :---: 
new __ItemDrop__(player, item) <br> _ItemDrop constructor_ | _constructor_
 readonly property __Item__ <br> _Get: Gets the `Player`_ | [`EntityItem`](io\wolfscript\api\entity\EntityItem.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.ItemDrop`](io\wolfscript\event\player\ItemDrop.md)

---

## <a id='player-itempickup'></a>__Event__ player.ItemPickup

Item Hook. Contains EntityItem and Player

``` javascript
this.on('player.ItemPickup', function (e) { });
```

Method | Type   
--- | :---: 
new __ItemPickup__(player, item) <br> _ItemPickup constructor_ | _constructor_
 readonly property __Item__ <br> _Get: Gets the `Player`_ | [`EntityItem`](io\wolfscript\api\entity\EntityItem.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.ItemPickup`](io\wolfscript\event\player\ItemPickup.md)

---

## <a id='world-blockgrow'></a>__Event__ world.BlockGrow

Called when a block "grows"

``` javascript
this.on('world.BlockGrow', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockGrow__(original, growth) <br> _BlockGrow constructor_ | _constructor_
 readonly property __Growth__ <br> _Growth property_ | [`Block`](io\wolfscript\api\world\blocks\Block.md)
 readonly property __Original__ <br> _Original property_ | [`Block`](io\wolfscript\api\world\blocks\Block.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.BlockGrow`](io\wolfscript\event\world\BlockGrow.md)

---

## <a id='world-hoppertransfer'></a>__Event__ world.HopperTransfer

Hook parameter for when Hoppers Transfer Items

``` javascript
this.on('world.HopperTransfer', function (e) { });
```

Method | Type   
--- | :---: 
new __HopperTransfer__(hopper, itemTransferred, inputting) <br> _HopperTransfer constructor_ | _constructor_
 readonly property __ItemTransferred__ <br> _Get: Gets the hopper involved with this transfer._ | [`Item`](io\wolfscript\api\inventory\Item.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.HopperTransfer`](io\wolfscript\event\world\HopperTransfer.md)

---

## <a id='system-permissioncheck'></a>__Event__ system.PermissionCheck

This hook is called after the PermissionProvider has resolved the permission, to alter the final outcome and eventually temporary allow a permission to a player

``` javascript
this.on('system.PermissionCheck', function (e) { });
```

Method | Type   
--- | :---: 
new __PermissionCheck__(permission, player, result) <br> _PermissionCheck constructor_ | _constructor_
 writeonly property __Result__ <br> _Set: Gets the permission that was checked_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`system.PermissionCheck`](io\wolfscript\event\system\PermissionCheck.md)

---

## <a id='player-blockrightclick'></a>__Event__ player.BlockRightClick

Is called when a player right-clicks a block, eg. uses it.

``` javascript
this.on('player.BlockRightClick', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __BlockClicked__ <br> _Get: Construct a new BlockRightClick_ | [`Block`](io\wolfscript\api\world\blocks\Block.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.BlockRightClick`](io\wolfscript\event\player\BlockRightClick.md)

---

## <a id='world-redstonechange'></a>__Event__ world.RedstoneChange

RedstoneChange hook. Contains information about power flowing from one block to another

``` javascript
this.on('world.RedstoneChange', function (e) { });
```

Method | Type   
--- | :---: 
new __RedstoneChange__(source, oldLevel, newLevel) <br> _RedstoneChange constructor_ | _constructor_
 readonly property __NewLevel__ <br> _Get: Gets the [`Block`](io\wolfscript\api\world\blocks\Block.md) the redstone is on_ | `int`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.RedstoneChange`](io\wolfscript\event\world\RedstoneChange.md)

---

## <a id='world-smelt'></a>__Event__ world.Smelt

Smelt <p/> Called when a [`blocks.Furnace`](io\wolfscript\api\world\blocks\Furnace.md) smelts an Item

``` javascript
this.on('world.Smelt', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Result__ <br> _Get: Constructs a new Smelt_ | [`Item`](io\wolfscript\api\inventory\Item.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.Smelt`](io\wolfscript\event\world\Smelt.md)

---

## <a id='player-blockleftclick'></a>__Event__ player.BlockLeftClick

Left click hook. Contains information about a Player left clicking.

``` javascript
this.on('player.BlockLeftClick', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockLeftClick__(player, block) <br> _BlockLeftClick constructor_ | _constructor_
 readonly property __Block__ <br> _Get: Gets the `Player` clicking_ | [`Block`](io\wolfscript\api\world\blocks\Block.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.BlockLeftClick`](io\wolfscript\event\player\BlockLeftClick.md)

---

## <a id='entity-minecartactivate'></a>__Event__ entity.MinecartActivate

MinecartActivate<br> Called when a [`vehicle.Minecart`](io\wolfscript\api\entity\vehicle\Minecart.md) passes over an activation rail.

``` javascript
this.on('entity.MinecartActivate', function (e) { });
```

Method | Type   
--- | :---: 
 function __isPowered__() <br> _Constructs a new MinecartActivate_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.MinecartActivate`](io\wolfscript\event\entity\MinecartActivate.md)

---

## <a id='player-helditemchange'></a>__Event__ player.HeldItemChange

Held item change hook. Contains information about a player's held slot changes

``` javascript
this.on('player.HeldItemChange', function (e) { });
```

Method | Type   
--- | :---: 
 writeonly property __NewValue__ <br> _Set: Constructs a new HeldItemChange_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.HeldItemChange`](io\wolfscript\event\player\HeldItemChange.md)

---

## <a id='player-playerdeath'></a>__Event__ player.PlayerDeath

Player Death hook

``` javascript
this.on('player.PlayerDeath', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __DamageSource__ <br> _Get: Constructs a new PlayerDeath_ | [`DamageSource`](io\wolfscript\api\DamageSource.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.PlayerDeath`](io\wolfscript\event\player\PlayerDeath.md)

---

## <a id='entity-entitylightningstruck'></a>__Event__ entity.EntityLightningStruck

EntityLightningStruck <p/> Called when an [`entity.Entity`](io\wolfscript\api\entity\Entity.md) should be struck by a [`effect.LightningBolt`](io\wolfscript\api\entity\effect\LightningBolt.md)

``` javascript
this.on('entity.EntityLightningStruck', function (e) { });
```

Method | Type   
--- | :---: 
final function __toString__() <br> _Constructs a new EntityLightningStruck_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.EntityLightningStruck`](io\wolfscript\event\entity\EntityLightningStruck.md)

---

## <a id='entity-entitymove'></a>__Event__ entity.EntityMove

Entity Move Hook <p/> Called when an [`entity.Entity`](io\wolfscript\api\entity\Entity.md) (other than a `humanoid.Player`) moves.<br> Use [`player.PlayerMove`](io\wolfscript\event\player\PlayerMove.md) for Player movements.

``` javascript
this.on('entity.EntityMove', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityMove__(entity, from) <br> _EntityMove constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | [`Entity`](io\wolfscript\api\entity\Entity.md)
 readonly property __From__ <br> _From property_ | `Location`
 readonly property __To__ <br> _To property_ | `Location`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.EntityMove`](io\wolfscript\event\entity\EntityMove.md)

---

## <a id='player-kick'></a>__Event__ player.Kick

Kick hook. Contains the player who was kicked and the MessageReceiver who kicked them

``` javascript
this.on('player.Kick', function (e) { });
```

Method | Type   
--- | :---: 
new __Kick__(kickedPlayer, moderator, reason) <br> _Kick constructor_ | _constructor_
 readonly property __Reason__ <br> _Get: Get the `Player` being kicked_ | `String`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.Kick`](io\wolfscript\event\player\Kick.md)

---

## <a id='entity-vehiclecollision'></a>__Event__ entity.VehicleCollision

Is called when a vehicle collides with a LivingEntity

``` javascript
this.on('entity.VehicleCollision', function (e) { });
```

Method | Type   
--- | :---: 
 readonly property __Entity__ <br> _Get: Constructs a Collision hook._ | [`Entity`](io\wolfscript\api\entity\Entity.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.VehicleCollision`](io\wolfscript\event\entity\VehicleCollision.md)

---

## <a id='player-toolbroken'></a>__Event__ player.ToolBroken

Called when a tool/sword runs out of uses and is destroyed

``` javascript
this.on('player.ToolBroken', function (e) { });
```

Method | Type   
--- | :---: 
new __ToolBroken__(player, tool) <br> _ToolBroken constructor_ | _constructor_
 readonly property __Tool__ <br> _Get: Gets the `Player` who's tool has broken_ | [`Item`](io\wolfscript\api\inventory\Item.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.ToolBroken`](io\wolfscript\event\player\ToolBroken.md)

---

## <a id='world-lightningstrike'></a>__Event__ world.LightningStrike

LightningStrike <p/> Called when a [`effect.LightningBolt`](io\wolfscript\api\entity\effect\LightningBolt.md) strikes

``` javascript
this.on('world.LightningStrike', function (e) { });
```

Method | Type   
--- | :---: 
final function __toString__() <br> _Creates a new LightningStrike_ | `String`
 var __lightbolt__ <br> _lightbolt field_ | [`LightningBolt`](io\wolfscript\api\entity\effect\LightningBolt.md)
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`world.LightningStrike`](io\wolfscript\event\world\LightningStrike.md)

---

## <a id='world-pistonextend'></a>__Event__ world.PistonExtend

Piston Extend Hook<br> Called when a Piston extends

``` javascript
this.on('world.PistonExtend', function (e) { });
```

Method | Type   
--- | :---: 
new __PistonExtend__(piston, moving) <br> _PistonExtend constructor_ | _constructor_
 readonly property __Moving__ <br> _Get: Gets the piston [`Block`](io\wolfscript\api\world\blocks\Block.md)_ | [`Block`](io\wolfscript\api\world\blocks\Block.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.PistonExtend`](io\wolfscript\event\world\PistonExtend.md)

---

## <a id='player-inventory'></a>__Event__ player.Inventory

Inventory hook. Contains information about a player either opening or closing an inventory

``` javascript
this.on('player.Inventory', function (e) { });
```

Method | Type   
--- | :---: 
new __Inventory__(player, inventory, closing) <br> _Inventory constructor_ | _constructor_
 readonly property __Inventory__ <br> _Get: Gets the `Player`_ | [`Inventory`](io\wolfscript\api\inventory\Inventory.md)
 function __isClosing__() <br> _isClosing method_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.Inventory`](io\wolfscript\event\player\Inventory.md)

---

## <a id='player-returnfromidle'></a>__Event__ player.ReturnFromIdle

Called when the Player is no longer idle

``` javascript
this.on('player.ReturnFromIdle', function (e) { });
```

Method | Type   
--- | :---: 
new __ReturnFromIdle__(player, idle) <br> _ReturnFromIdle constructor_ | _constructor_
 function __toString__() <br> _Get the `Player` that was Idle_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.ReturnFromIdle`](io\wolfscript\event\player\ReturnFromIdle.md)

---

## <a id='player-preconnection'></a>__Event__ player.PreConnection

Login checks hook. Comes with ip, name and a kickReason that is to be returned, and should be null if a player should not be kicked.

``` javascript
this.on('player.PreConnection', function (e) { });
```

Method | Type   
--- | :---: 
new __PreConnection__(ip, name, id, dimType, world) <br> _PreConnection constructor_ | _constructor_
  property __World__ <br> _World property_ | `String`
  property __WorldType__ <br> _WorldType property_ | [`DimensionType`](io\wolfscript\api\world\DimensionType.md)
 writeonly property __KickReason__ <br> _Set: Get the IP of the joining `Player`_ | `void`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.PreConnection`](io\wolfscript\event\player\PreConnection.md)

---

## <a id='entity-entitymount'></a>__Event__ entity.EntityMount

Called when one entity is trying to mount another

``` javascript
this.on('entity.EntityMount', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityMount__(entity, rider) <br> _EntityMount constructor_ | _constructor_
 readonly property __Rider__ <br> _Get: Get the entity that is about to mount another one_ | [`LivingBase`](io\wolfscript\api\entity\living\LivingBase.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.EntityMount`](io\wolfscript\event\entity\EntityMount.md)

---

## <a id='player-blockdestroy'></a>__Event__ player.BlockDestroy

Called when a player destroy a block

``` javascript
this.on('player.BlockDestroy', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockDestroy__(player, block) <br> _BlockDestroy constructor_ | _constructor_
 readonly property __Block__ <br> _Get: Gets the `Player` clicking_ | [`Block`](io\wolfscript\api\world\blocks\Block.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.BlockDestroy`](io\wolfscript\event\player\BlockDestroy.md)

---

## <a id='entity-vehicledestroy'></a>__Event__ entity.VehicleDestroy

VehicleDestoryHook<br> Called when a Minecart or Boat is destroyed

``` javascript
this.on('entity.VehicleDestroy', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleDestroy__(vehicle) <br> _VehicleDestroy constructor_ | _constructor_
 readonly property __Vehicle__ <br> _Get: The [`Vehicle`](io\wolfscript\api\entity\vehicle\Vehicle.md) being destoryed_ | [`Vehicle`](io\wolfscript\api\entity\vehicle\Vehicle.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`entity.VehicleDestroy`](io\wolfscript\event\entity\VehicleDestroy.md)

---

## <a id='world-noteblockplay'></a>__Event__ world.NoteBlockPlay

Called when a [`blocks.NoteBlock`](io\wolfscript\api\world\blocks\NoteBlock.md) is played

``` javascript
this.on('world.NoteBlockPlay', function (e) { });
```

Method | Type   
--- | :---: 
final function __toString__() <br> _Constructs a new NoteBlockPlay_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.NoteBlockPlay`](io\wolfscript\event\world\NoteBlockPlay.md)

---

## <a id='entity-vehicleenter'></a>__Event__ entity.VehicleEnter

Is called when a LivingEntity enters a vehicle

``` javascript
this.on('entity.VehicleEnter', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleEnter__(vehicle, entity) <br> _VehicleEnter constructor_ | _constructor_
 readonly property __Entity__ <br> _Entity property_ | [`LivingBase`](io\wolfscript\api\entity\living\LivingBase.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`entity.VehicleEnter`](io\wolfscript\event\entity\VehicleEnter.md)

---

## <a id='player-playerlist'></a>__Event__ player.PlayerList

PlayerList <p/> Called when a `humanoid.Player` information is sent to another `humanoid.Player`

``` javascript
this.on('player.PlayerList', function (e) { });
```

Method | Type   
--- | :---: 
final function __toString__() <br> _Constructs a new PlayerListEntryHook_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.PlayerList`](io\wolfscript\event\player\PlayerList.md)

---

## <a id='player-itemframesetitem'></a>__Event__ player.ItemFrameSetItem

Called when an `humanoid.Player` sets and [`inventory.Item`](io\wolfscript\api\inventory\Item.md) in a [`hanging.ItemFrame`](io\wolfscript\api\entity\hanging\ItemFrame.md)

``` javascript
this.on('player.ItemFrameSetItem', function (e) { });
```

Method | Type   
--- | :---: 
new __ItemFrameSetItem__(player, itemFrame, item) <br> _ItemFrameSetItem constructor_ | _constructor_
 readonly property __Item__ <br> _Get: Gets the `Player` interacting with the [`ItemFrame`](io\wolfscript\api\entity\hanging\ItemFrame.md)_ | [`Item`](io\wolfscript\api\inventory\Item.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`player.ItemFrameSetItem`](io\wolfscript\event\player\ItemFrameSetItem.md)

---

## <a id='world-explosion'></a>__Event__ world.Explosion

Explosion hook. Contains information about an explosion.

``` javascript
this.on('world.Explosion', function (e) { });
```

Method | Type   
--- | :---: 
new __Explosion__(block, entity) <br> _Explosion constructor_ | _constructor_
 readonly property __AffectedBlocks__ <br> _Get: Gets the base affected [`Block`](io\wolfscript\api\world\blocks\Block.md)_ | `List<Block>`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)__ |
 function __call__() <br> _Calls a Hook if not already executed_ | [`CancelableHook`](io\wolfscript\hook\CancelableHook.md)
 function __isCanceled__() <br> _isCanceled method_ | `boolean`
 function __setCanceled__() <br> _setCanceled method_ | `void`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)







For further details, see API Reference [`world.Explosion`](io\wolfscript\event\world\Explosion.md)

---

## <a id='player-levelup'></a>__Event__ player.LevelUp

LevelUp hook. Called when a `humanoid.Player` levels up

``` javascript
this.on('player.LevelUp', function (e) { });
```

Method | Type   
--- | :---: 
new __LevelUp__(player) <br> _LevelUp constructor_ | _constructor_
 readonly property __Player__ <br> _Get: Get the `Player` instance_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io\wolfscript\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](io\wolfscript\hook\Hook.md)





For further details, see API Reference [`player.LevelUp`](io\wolfscript\event\player\LevelUp.md)

---




