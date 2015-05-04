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
[`entity.EntityDeath`](#entity-entitydeath) | class EntityDeath
[`entity.EntityDespawn`](#entity-entitydespawn) | Entity despawn hook. Contains information about an entity despawning.
[`entity.EntityLightningStruck`](#entity-entitylightningstruck) | class EntityLightningStruck
[`entity.EntityMount`](#entity-entitymount) | Called when one entity is trying to mount another
[`entity.EntityMove`](#entity-entitymove) | class EntityMove
[`entity.EntitySpawn`](#entity-entityspawn) | Entity spawn hook. Contains information about an entity spawning.
[`entity.EntityTame`](#entity-entitytame) | Entity tame hook
[`entity.HangingEntityDestroy`](#entity-hangingentitydestroy) | HangingEntity destroy hook. Contains information about a painting or item frame being destroyed.
[`entity.ItemTouchGround`](#entity-itemtouchground) | ItemTouchGround
[`entity.MinecartActivate`](#entity-minecartactivate) | MinecartActivate
[`entity.MobTarget`](#entity-mobtarget) | class MobTarget
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
[`player.AnvilUse`](#player-anviluse) | class AnvilUse
[`player.ArmorBroken`](#player-armorbroken) | Called when a piece of Armor has been destroyed
[`player.ArmorStandModify`](#player-armorstandmodify) | class ArmorStandModify
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
[`player.Craft`](#player-craft) | class Craft
[`player.Disconnection`](#player-disconnection) | Disconnection hook. Contains information about a `humanoid.Player` disconnecting.
[`player.Eat`](#player-eat) | class Eat
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
[`player.PlayerIdle`](#player-playeridle) | class PlayerIdle
[`player.PlayerList`](#player-playerlist) | class PlayerList
[`player.PlayerMove`](#player-playermove) | Player move hook. Contains information about a player's movement
[`player.PlayerRespawned`](#player-playerrespawned) | Player respawned hook. Contains the reference to the freshly spawned player entity
[`player.PlayerRespawning`](#player-playerrespawning) | Player pre-respawn hook.
[`player.PortalUse`](#player-portaluse) | PortalUse Hook
[`player.PreConnection`](#player-preconnection) | Login checks hook. Comes with ip, name and a kickReason that is to be returned,
[`player.ReturnFromIdle`](#player-returnfromidle) | Called when the Player is no longer idle
[`player.SignChange`](#player-signchange) | Sign Change hook. Contains information about a sign either being changed by a player
[`player.SignShow`](#player-signshow) | Sign Change hook. Contains information about a sign shown to a player
[`player.SlotClick`](#player-slotclick) | class SlotClick
[`player.StatGained`](#player-statgained) | StatGained
[`player.Teleport`](#player-teleport) | Teleport hook. Contains player who is teleporting and their destination
[`player.ToolBroken`](#player-toolbroken) | class ToolBroken
[`player.VillagerTrade`](#player-villagertrade) | VillagerTrade Hook

### Event.system Events
Event | Title 
--- | --- 
[`system.LoadWorld`](#system-loadworld) | class LoadWorld
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
[`world.FireworkExplode`](#world-fireworkexplode) | class FireworkExplode
[`world.Flow`](#world-flow) | Flow hook. Contains information about a liquid flowing from one block to another
[`world.HopperTransfer`](#world-hoppertransfer) | Hook parameter for when Hoppers Transfer Items
[`world.Ignition`](#world-ignition) | Ignition hook. Contains information about a [`blocks.Block`](#blocks-block) being set on fire.
[`world.LeafDecay`](#world-leafdecay) | Block update hook. Contains information about a block updating.
[`world.LightningStrike`](#world-lightningstrike) | class LightningStrike
[`world.LiquidDestroy`](#world-liquiddestroy) | Is called when a liquid is about to destroy something (crops, popping off torches etc)
[`world.NoteBlockPlay`](#world-noteblockplay) | Called when a [`blocks.NoteBlock`](#blocks-noteblock) is played
[`world.PistonExtend`](#world-pistonextend) | Piston Extend Hook
[`world.PistonRetract`](#world-pistonretract) | Piston Retract hook
[`world.PortalCreate`](#world-portalcreate) | class PortalCreate
[`world.PortalDestroy`](#world-portaldestroy) | class PortalDestroy
[`world.RedstoneChange`](#world-redstonechange) | RedstoneChange hook. Contains information about power flowing from one block to another
[`world.Smelt`](#world-smelt) | class Smelt
[`world.SmeltBegin`](#world-smeltbegin) | class SmeltBegin
[`world.TNTActivate`](#world-tntactivate) | class TNTActivate
[`world.TimeChange`](#world-timechange) | Time Change hook
[`world.TreeGrow`](#world-treegrow) | class TreeGrow
[`world.WeatherChange`](#world-weatherchange) | WeatherChange Hook
 
## Wolfscript.event. Events

## <a id='player-kick'></a>__Event__ player.Kick

Kick hook. Contains the player who was kicked and the MessageReceiver who kicked them

``` javascript
this.on('player.Kick', function (e) { });
```

Method | Type   
--- | :---: 
new __Kick__(kickedPlayer, moderator, reason) <br> _Kick constructor_ | _constructor_
 readonly property __KickedPlayer__ <br> _Get: Get the `Player` being kicked_ | `Player`
 readonly property __Moderator__ <br> _Get: Get the [`MessageReceiver`](io/wolfscript/chat/MessageReceiver.md) that has issued the kick_ | [`MessageReceiver`](io/wolfscript/chat/MessageReceiver.md)
 readonly property __Reason__ <br> _Get: Gets the reason for the kick_ | `String`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.Kick`](io/wolfscript/event/player/Kick.md)

---

## <a id='entity-projectilehit'></a>__Event__ entity.ProjectileHit

ProjectileHit<br> Called when a Projectile hits something

``` javascript
this.on('entity.ProjectileHit', function (e) { });
```

Method | Type   
--- | :---: 
new __ProjectileHit__(projectile, hit) <br> _Constructs a new ProjectileHit_ | _constructor_
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







For further details, see API Reference [`entity.ProjectileHit`](io/wolfscript/event/entity/ProjectileHit.md)

---

## <a id='world-dispense'></a>__Event__ world.Dispense

Dispense hook. Contains information about a Dispenser dispensing an entity.

``` javascript
this.on('world.Dispense', function (e) { });
```

Method | Type   
--- | :---: 
new __Dispense__(dispenser, entity) <br> _Dispense constructor_ | _constructor_
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







For further details, see API Reference [`world.Dispense`](io/wolfscript/event/world/Dispense.md)

---

## <a id='world-blockgrow'></a>__Event__ world.BlockGrow

Called when a block "grows"

``` javascript
this.on('world.BlockGrow', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockGrow__(original, growth) <br> _BlockGrow constructor_ | _constructor_
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







For further details, see API Reference [`world.BlockGrow`](io/wolfscript/event/world/BlockGrow.md)

---

## <a id='entity-chickenlayegg'></a>__Event__ entity.ChickenLayEgg

Chicken lay egg hook, called when a chicken lay an egg.

``` javascript
this.on('entity.ChickenLayEgg', function (e) { });
```

Method | Type   
--- | :---: 
new __ChickenLayEgg__(chicken, egg, nextEggIn) <br> _Creates a new ChickenLayEgg_ | _constructor_
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







For further details, see API Reference [`entity.ChickenLayEgg`](io/wolfscript/event/entity/ChickenLayEgg.md)

---

## <a id='entity-potioneffectfinish'></a>__Event__ entity.PotionEffectFinish

PotionEffectFinish<br> Called when a [`potion.PotionEffect`](io/wolfscript/api/potion/PotionEffect.md) finishes it's effect on a [`living.LivingBase`](io/wolfscript/api/entity/living/LivingBase.md)

``` javascript
this.on('entity.PotionEffectFinish', function (e) { });
```

Method | Type   
--- | :---: 
new __PotionEffectFinish__(entity, effect) <br> _Constructs a new PotionEffectFinshHook_ | _constructor_
 readonly property __Entity__ <br> _Get: Gets the [`LivingBase`](io/wolfscript/api/entity/living/LivingBase.md) having a [`PotionEffect`](io/wolfscript/api/potion/PotionEffect.md) finishing it's effect_ | [`LivingBase`](io/wolfscript/api/entity/living/LivingBase.md)
 readonly property __PotionEffect__ <br> _Get: Gets the [`PotionEffect`](io/wolfscript/api/potion/PotionEffect.md) finishing_ | [`PotionEffect`](io/wolfscript/api/potion/PotionEffect.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`entity.PotionEffectFinish`](io/wolfscript/event/entity/PotionEffectFinish.md)

---

## <a id='system-permissioncheck'></a>__Event__ system.PermissionCheck

This hook is called after the PermissionProvider has resolved the permission, to alter the final outcome and eventually temporary allow a permission to a player

``` javascript
this.on('system.PermissionCheck', function (e) { });
```

Method | Type   
--- | :---: 
new __PermissionCheck__(permission, player, result) <br> _PermissionCheck constructor_ | _constructor_
 readonly property __Permission__ <br> _Get: Gets the permission that was checked_ | `String`
  property __Result__ <br> _Get: Get the result of the check.<br>Set: Override the final result for the permission check_ | `boolean`
 readonly property __Subject__ <br> _Get: Get the MessageReceiver for whom the permission check was issued_ | [`MessageReceiver`](io/wolfscript/chat/MessageReceiver.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`system.PermissionCheck`](io/wolfscript/event/system/PermissionCheck.md)

---

## <a id='world-leafdecay'></a>__Event__ world.LeafDecay

Block update hook. Contains information about a block updating.

``` javascript
this.on('world.LeafDecay', function (e) { });
```

Method | Type   
--- | :---: 
new __LeafDecay__(block) <br> _LeafDecay constructor_ | _constructor_
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







For further details, see API Reference [`world.LeafDecay`](io/wolfscript/event/world/LeafDecay.md)

---

## <a id='player-armorbroken'></a>__Event__ player.ArmorBroken

Called when a piece of Armor has been destroyed

``` javascript
this.on('player.ArmorBroken', function (e) { });
```

Method | Type   
--- | :---: 
new __ArmorBroken__(player, armor) <br> _ArmorBroken constructor_ | _constructor_
 readonly property __Armor__ <br> _Armor property_ | [`Item`](io/wolfscript/api/inventory/Item.md)
 readonly property __Player__ <br> _Get: Gets the `Player` who's armor has broken_ | `Player`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.ArmorBroken`](io/wolfscript/event/player/ArmorBroken.md)

---

## <a id='player-gamemodechange'></a>__Event__ player.GameModeChange

Called when a `humanoid.Player` changes GameModes

``` javascript
this.on('player.GameModeChange', function (e) { });
```

Method | Type   
--- | :---: 
new __GameModeChange__(player, newMode) <br> _GameModeChange constructor_ | _constructor_
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







For further details, see API Reference [`player.GameModeChange`](io/wolfscript/event/player/GameModeChange.md)

---

## <a id='command-consolecommand'></a>__Event__ command.ConsoleCommand

Server command hook. Contains the command issued by the server

``` javascript
this.on('command.ConsoleCommand', function (e) { });
```

Method | Type   
--- | :---: 
new __ConsoleCommand__(receiver, textInput) <br> _Constructs a new ConsoleCommand_ | _constructor_
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







For further details, see API Reference [`command.ConsoleCommand`](io/wolfscript/event/command/ConsoleCommand.md)

---

## <a id='command-commandblockcommand'></a>__Event__ command.CommandBlockCommand

CommandBlockCommand<br> Called when a CommandBlock executes a command.

``` javascript
this.on('command.CommandBlockCommand', function (e) { });
```

Method | Type   
--- | :---: 
new __CommandBlockCommand__(reference) <br> _Constructs a new CommandBlockCommand_ | _constructor_
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







For further details, see API Reference [`command.CommandBlockCommand`](io/wolfscript/event/command/CommandBlockCommand.md)

---

## <a id='world-blockupdate'></a>__Event__ world.BlockUpdate

Block update hook. Contains information about a block updating.

``` javascript
this.on('world.BlockUpdate', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockUpdate__(block, newBlockType) <br> _BlockUpdate constructor_ | _constructor_
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







For further details, see API Reference [`world.BlockUpdate`](io/wolfscript/event/world/BlockUpdate.md)

---

## <a id='player-playeridle'></a>__Event__ player.PlayerIdle

class PlayerIdle

``` javascript
this.on('player.PlayerIdle', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerIdle__(player, millisIdle) <br> _Constructs a new PlayerIdle_ | _constructor_
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







For further details, see API Reference [`player.PlayerIdle`](io/wolfscript/event/player/PlayerIdle.md)

---

## <a id='entity-entitymove'></a>__Event__ entity.EntityMove

class EntityMove

``` javascript
this.on('entity.EntityMove', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityMove__(entity, from) <br> _EntityMove constructor_ | _constructor_
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







For further details, see API Reference [`entity.EntityMove`](io/wolfscript/event/entity/EntityMove.md)

---

## <a id='player-blockleftclick'></a>__Event__ player.BlockLeftClick

Left click hook. Contains information about a Player left clicking.

``` javascript
this.on('player.BlockLeftClick', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockLeftClick__(player, block) <br> _BlockLeftClick constructor_ | _constructor_
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







For further details, see API Reference [`player.BlockLeftClick`](io/wolfscript/event/player/BlockLeftClick.md)

---

## <a id='player-entityrightclick'></a>__Event__ player.EntityRightClick

Is called when a player right-clicks an entity, for instance a villager for trading or a vehicle for entering

``` javascript
this.on('player.EntityRightClick', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityRightClick__(clicked, player) <br> _Construct a new EntityRightClick_ | _constructor_
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







For further details, see API Reference [`player.EntityRightClick`](io/wolfscript/event/player/EntityRightClick.md)

---

## <a id='player-slotclick'></a>__Event__ player.SlotClick

class SlotClick

``` javascript
this.on('player.SlotClick', function (e) { });
```

Method | Type   
--- | :---: 
new __SlotClick__(player, inventory, item, slotType, secondarySlotType, grabMode, button, slotId, transNum) <br> _Constructs a new SlotClick_ | _constructor_
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







For further details, see API Reference [`player.SlotClick`](io/wolfscript/event/player/SlotClick.md)

---

## <a id='player-signchange'></a>__Event__ player.SignChange

Sign Change hook. Contains information about a sign either being changed by a player

``` javascript
this.on('player.SignChange', function (e) { });
```

Method | Type   
--- | :---: 
new __SignChange__(player, sign) <br> _SignChange constructor_ | _constructor_
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







For further details, see API Reference [`player.SignChange`](io/wolfscript/event/player/SignChange.md)

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
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`system.PluginEnable`](io/wolfscript/event/system/PluginEnable.md)

---

## <a id='entity-endermandropblock'></a>__Event__ entity.EndermanDropBlock

Enderman drop block hook. Contains information about an Enderman dropping a block.

``` javascript
this.on('entity.EndermanDropBlock', function (e) { });
```

Method | Type   
--- | :---: 
new __EndermanDropBlock__(enderman, block) <br> _Constructs a new EndermanDropBlock_ | _constructor_
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







For further details, see API Reference [`entity.EndermanDropBlock`](io/wolfscript/event/entity/EndermanDropBlock.md)

---

## <a id='entity-damage'></a>__Event__ entity.Damage

Damage hook. Contains information about an entity taking damage.

``` javascript
this.on('entity.Damage', function (e) { });
```

Method | Type   
--- | :---: 
new __Damage__(attacker, defender, source, dealt) <br> _Constructs a new Damage_ | _constructor_
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







For further details, see API Reference [`entity.Damage`](io/wolfscript/event/entity/Damage.md)

---

## <a id='system-serverlistping'></a>__Event__ system.ServerListPing

Called when a client ping the server

``` javascript
this.on('system.ServerListPing', function (e) { });
```

Method | Type   
--- | :---: 
new __ServerListPing__(remoteSocket, requesterProtocol, hostNamePinged, portPinged, motd, currentPlayers, maxPlayers, favicon) <br> _ServerListPing constructor_ | _constructor_
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







For further details, see API Reference [`system.ServerListPing`](io/wolfscript/event/system/ServerListPing.md)

---

## <a id='system-loadworld'></a>__Event__ system.LoadWorld

class LoadWorld

``` javascript
this.on('system.LoadWorld', function (e) { });
```

Method | Type   
--- | :---: 
new __LoadWorld__(world) <br> _LoadWorld constructor_ | _constructor_
 readonly property __World__ <br> _Get: Gets the [`World`](io/wolfscript/api/world/World.md) that has loaded_ | [`World`](io/wolfscript/api/world/World.md)
 function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`system.LoadWorld`](io/wolfscript/event/system/LoadWorld.md)

---

## <a id='entity-vehiclemove'></a>__Event__ entity.VehicleMove

Is called when a LivingEntity moves a vehicle

``` javascript
this.on('entity.VehicleMove', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleMove__(vehicle, from, to) <br> _VehicleMove constructor_ | _constructor_
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







For further details, see API Reference [`entity.VehicleMove`](io/wolfscript/event/entity/VehicleMove.md)

---

## <a id='world-weatherchange'></a>__Event__ world.WeatherChange

WeatherChange Hook

``` javascript
this.on('world.WeatherChange', function (e) { });
```

Method | Type   
--- | :---: 
new __WeatherChange__(world, on, thunder) <br> _Constructs a new WeatherChange_ | _constructor_
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







For further details, see API Reference [`world.WeatherChange`](io/wolfscript/event/world/WeatherChange.md)

---

## <a id='world-fireworkexplode'></a>__Event__ world.FireworkExplode

class FireworkExplode

``` javascript
this.on('world.FireworkExplode', function (e) { });
```

Method | Type   
--- | :---: 
new __FireworkExplode__(rocket) <br> _Constructs a new FireworkExplode_ | _constructor_
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







For further details, see API Reference [`world.FireworkExplode`](io/wolfscript/event/world/FireworkExplode.md)

---

## <a id='world-chunkunload'></a>__Event__ world.ChunkUnload

Chunk unload hook

``` javascript
this.on('world.ChunkUnload', function (e) { });
```

Method | Type   
--- | :---: 
new __ChunkUnload__(chunk, world) <br> _ChunkUnload constructor_ | _constructor_
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







For further details, see API Reference [`world.ChunkUnload`](io/wolfscript/event/world/ChunkUnload.md)

---

## <a id='entity-vehiclecollision'></a>__Event__ entity.VehicleCollision

Is called when a vehicle collides with a LivingEntity

``` javascript
this.on('entity.VehicleCollision', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleCollision__(vehicle, entity) <br> _Constructs a Collision hook._ | _constructor_
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







For further details, see API Reference [`entity.VehicleCollision`](io/wolfscript/event/entity/VehicleCollision.md)

---

## <a id='player-ban'></a>__Event__ player.Ban

Ban hook. Contains information about an issued Ban

``` javascript
this.on('player.Ban', function (e) { });
```

Method | Type   
--- | :---: 
new __Ban__(banned, ip, moderator, reason, bantime) <br> _Ban constructor_ | _constructor_
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





For further details, see API Reference [`player.Ban`](io/wolfscript/event/player/Ban.md)

---

## <a id='player-bedenter'></a>__Event__ player.BedEnter

Bed enter hook, called when a player enters a bed

``` javascript
this.on('player.BedEnter', function (e) { });
```

Method | Type   
--- | :---: 
new __BedEnter__(player, bed) <br> _Create a new BedEnter_ | _constructor_
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







For further details, see API Reference [`player.BedEnter`](io/wolfscript/event/player/BedEnter.md)

---

## <a id='player-playerlist'></a>__Event__ player.PlayerList

class PlayerList

``` javascript
this.on('player.PlayerList', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerList__(data, receiver) <br> _Constructs a new PlayerListEntryHook_ | _constructor_
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







For further details, see API Reference [`player.PlayerList`](io/wolfscript/event/player/PlayerList.md)

---

## <a id='world-smeltbegin'></a>__Event__ world.SmeltBegin

class SmeltBegin

``` javascript
this.on('world.SmeltBegin', function (e) { });
```

Method | Type   
--- | :---: 
new __SmeltBegin__(furnace, smelting) <br> _Constructs a new Smelt_ | _constructor_
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







For further details, see API Reference [`world.SmeltBegin`](io/wolfscript/event/world/SmeltBegin.md)

---

## <a id='system-serverguistart'></a>__Event__ system.ServerGuiStart

Called when a GUI is started

``` javascript
this.on('system.ServerGuiStart', function (e) { });
```

Method | Type   
--- | :---: 
new __ServerGuiStart__(gui) <br> _ServerGuiStart constructor_ | _constructor_
  property __Gui__ <br> _Gui property_ | [`GUIControl`](io/wolfscript/api/gui/GUIControl.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`system.ServerGuiStart`](io/wolfscript/event/system/ServerGuiStart.md)

---

## <a id='player-playermove'></a>__Event__ player.PlayerMove

Player move hook. Contains information about a player's movement

``` javascript
this.on('player.PlayerMove', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerMove__(player, from, to) <br> _PlayerMove constructor_ | _constructor_
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







For further details, see API Reference [`player.PlayerMove`](io/wolfscript/event/player/PlayerMove.md)

---

## <a id='world-blockphysics'></a>__Event__ world.BlockPhysics

Block physics hook. Contains information about a block's physics being updated.

``` javascript
this.on('world.BlockPhysics', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockPhysics__(block, placed) <br> _BlockPhysics constructor_ | _constructor_
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







For further details, see API Reference [`world.BlockPhysics`](io/wolfscript/event/world/BlockPhysics.md)

---

## <a id='world-noteblockplay'></a>__Event__ world.NoteBlockPlay

Called when a [`blocks.NoteBlock`](io/wolfscript/api/world/blocks/NoteBlock.md) is played

``` javascript
this.on('world.NoteBlockPlay', function (e) { });
```

Method | Type   
--- | :---: 
new __NoteBlockPlay__(noteBlock) <br> _Constructs a new NoteBlockPlay_ | _constructor_
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







For further details, see API Reference [`world.NoteBlockPlay`](io/wolfscript/event/world/NoteBlockPlay.md)

---

## <a id='player-connection'></a>__Event__ player.Connection

Connection hook. Contains information about a player connecting.

``` javascript
this.on('player.Connection', function (e) { });
```

Method | Type   
--- | :---: 
new __Connection__(player, message, firstTime) <br> _Connection constructor_ | _constructor_
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





For further details, see API Reference [`player.Connection`](io/wolfscript/event/player/Connection.md)

---

## <a id='player-playerrespawned'></a>__Event__ player.PlayerRespawned

Player respawned hook. Contains the reference to the freshly spawned player entity and the location it spawned in. The location can not be overridden at this point. If you need the player to go somewhere else, use `Player#teleportTo(Location)` etc

``` javascript
this.on('player.PlayerRespawned', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerRespawned__(player, location) <br> _PlayerRespawned constructor_ | _constructor_
 readonly property __Location__ <br> _Get: Gets the [`Location`](io/wolfscript/api/world/position/Location.md) where this player will finally spawn_ | [`Location`](io/wolfscript/api/world/position/Location.md)
 readonly property __Player__ <br> _Get: Gets the `Player`_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.PlayerRespawned`](io/wolfscript/event/player/PlayerRespawned.md)

---

## <a id='entity-itemtouchground'></a>__Event__ entity.ItemTouchGround

ItemTouchGround<br> Called when an [`entity.EntityItem`](io/wolfscript/api/entity/EntityItem.md) hits the ground

``` javascript
this.on('entity.ItemTouchGround', function (e) { });
```

Method | Type   
--- | :---: 
new __ItemTouchGround__(item) <br> _Constructs a new ItemTouchGround_ | _constructor_
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







For further details, see API Reference [`entity.ItemTouchGround`](io/wolfscript/event/entity/ItemTouchGround.md)

---

## <a id='player-blockplace'></a>__Event__ player.BlockPlace

Is called when a player right-clicks a block, eg. uses it.

``` javascript
this.on('player.BlockPlace', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockPlace__(player, clicked, placed) <br> _Constructs a new BlockPlace_ | _constructor_
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







For further details, see API Reference [`player.BlockPlace`](io/wolfscript/event/player/BlockPlace.md)

---

## <a id='world-chunkcreation'></a>__Event__ world.ChunkCreation

Chunk creation hook. Contains information about a new chunk being created.

``` javascript
this.on('world.ChunkCreation', function (e) { });
```

Method | Type   
--- | :---: 
new __ChunkCreation__(x, z, dimension) <br> _ChunkCreation constructor_ | _constructor_
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





For further details, see API Reference [`world.ChunkCreation`](io/wolfscript/event/world/ChunkCreation.md)

---

## <a id='player-helditemchange'></a>__Event__ player.HeldItemChange

Held item change hook. Contains information about a player's held slot changes

``` javascript
this.on('player.HeldItemChange', function (e) { });
```

Method | Type   
--- | :---: 
new __HeldItemChange__(player, oldval, newval) <br> _Constructs a new HeldItemChange_ | _constructor_
  property __NewValue__ <br> _Get: Gets the new held slot<br>Set: Sets the new value to actually be set_ | `int`
 readonly property __OldValue__ <br> _Get: Gets the old (current) held slot_ | `int`
 readonly property __Player__ <br> _Get: Gets the `Player` whose held slot is changing_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.HeldItemChange`](io/wolfscript/event/player/HeldItemChange.md)

---

## <a id='player-experience'></a>__Event__ player.Experience

Experience hook. Contains information about player experience changes.

``` javascript
this.on('player.Experience', function (e) { });
```

Method | Type   
--- | :---: 
new __Experience__(player, oldval, newval) <br> _Experience constructor_ | _constructor_
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







For further details, see API Reference [`player.Experience`](io/wolfscript/event/player/Experience.md)

---

## <a id='world-smelt'></a>__Event__ world.Smelt

class Smelt

``` javascript
this.on('world.Smelt', function (e) { });
```

Method | Type   
--- | :---: 
new __Smelt__(furnace, smelted, result) <br> _Constructs a new Smelt_ | _constructor_
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







For further details, see API Reference [`world.Smelt`](io/wolfscript/event/world/Smelt.md)

---

## <a id='entity-vehicleexit'></a>__Event__ entity.VehicleExit

Is called when a LivingEntity exits a vehicle

``` javascript
this.on('entity.VehicleExit', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleExit__(vehicle, entity) <br> _VehicleExit constructor_ | _constructor_
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







For further details, see API Reference [`entity.VehicleExit`](io/wolfscript/event/entity/VehicleExit.md)

---

## <a id='entity-entitydespawn'></a>__Event__ entity.EntityDespawn

Entity despawn hook. Contains information about an entity despawning.

``` javascript
this.on('entity.EntityDespawn', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityDespawn__(entity) <br> _EntityDespawn constructor_ | _constructor_
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







For further details, see API Reference [`entity.EntityDespawn`](io/wolfscript/event/entity/EntityDespawn.md)

---

## <a id='entity-villagertradeunlock'></a>__Event__ entity.VillagerTradeUnlock

VillagerTradeUnlock hook<br> Called when a Trade is unlocked

``` javascript
this.on('entity.VillagerTradeUnlock', function (e) { });
```

Method | Type   
--- | :---: 
new __VillagerTradeUnlock__(villager, trade) <br> _Constructs a new VillagerTradeUnlock_ | _constructor_
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







For further details, see API Reference [`entity.VillagerTradeUnlock`](io/wolfscript/event/entity/VillagerTradeUnlock.md)

---

## <a id='player-craft'></a>__Event__ player.Craft

class Craft

``` javascript
this.on('player.Craft', function (e) { });
```

Method | Type   
--- | :---: 
new __Craft__(player, craftingMatrix, recipeResult) <br> _Creates a new Craft._ | _constructor_
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







For further details, see API Reference [`player.Craft`](io/wolfscript/event/player/Craft.md)

---

## <a id='player-foodlevel'></a>__Event__ player.FoodLevel

Food level hook. Contains information about a player's food level changes

``` javascript
this.on('player.FoodLevel', function (e) { });
```

Method | Type   
--- | :---: 
new __FoodLevel__(player, oldval, newval) <br> _Constructs a new FoodLevel_ | _constructor_
  property __NewValue__ <br> _Get: Gets the new level<br>Set: Sets the new value to actually be set_ | `int`
 readonly property __OldValue__ <br> _Get: Gets the old (current) level_ | `int`
 readonly property __Player__ <br> _Get: Gets the `Player` who's food level is changing_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.FoodLevel`](io/wolfscript/event/player/FoodLevel.md)

---

## <a id='player-itemframesetitem'></a>__Event__ player.ItemFrameSetItem

Called when an `humanoid.Player` sets and [`inventory.Item`](io/wolfscript/api/inventory/Item.md) in a [`hanging.ItemFrame`](io/wolfscript/api/entity/hanging/ItemFrame.md)

``` javascript
this.on('player.ItemFrameSetItem', function (e) { });
```

Method | Type   
--- | :---: 
new __ItemFrameSetItem__(player, itemFrame, item) <br> _ItemFrameSetItem constructor_ | _constructor_
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







For further details, see API Reference [`player.ItemFrameSetItem`](io/wolfscript/event/player/ItemFrameSetItem.md)

---

## <a id='entity-entitytame'></a>__Event__ entity.EntityTame

Entity tame hook

``` javascript
this.on('entity.EntityTame', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityTame__(animal, player, isTamed) <br> _EntityTame constructor_ | _constructor_
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







For further details, see API Reference [`entity.EntityTame`](io/wolfscript/event/entity/EntityTame.md)

---

## <a id='system-servertick'></a>__Event__ system.ServerTick

Called in the servers tick loop, before world processing. For informational use

``` javascript
this.on('system.ServerTick', function (e) { });
```

Method | Type   
--- | :---: 
new __ServerTick__(deltaTime) <br> _ServerTick constructor_ | _constructor_
  property __DeltaTime__ <br> _DeltaTime property_ | `long`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`system.ServerTick`](io/wolfscript/event/system/ServerTick.md)

---

## <a id='player-signshow'></a>__Event__ player.SignShow

Sign Change hook. Contains information about a sign shown to a player

``` javascript
this.on('player.SignShow', function (e) { });
```

Method | Type   
--- | :---: 
new __SignShow__(player, sign) <br> _Constructs a new SignShow_ | _constructor_
 readonly property __Player__ <br> _Get: Gets the `Player` being shown a [`Sign`](io/wolfscript/api/world/blocks/Sign.md)_ | `Player`
 readonly property __Sign__ <br> _Get: Gets the [`Sign`](io/wolfscript/api/world/blocks/Sign.md) being shown_ | [`Sign`](io/wolfscript/api/world/blocks/Sign.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.SignShow`](io/wolfscript/event/player/SignShow.md)

---

## <a id='player-playerdeath'></a>__Event__ player.PlayerDeath

Player Death hook

``` javascript
this.on('player.PlayerDeath', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerDeath__(player, source, msg) <br> _Constructs a new PlayerDeath_ | _constructor_
 readonly property __DamageSource__ <br> _Get: Gets the [`DamageSource`](io/wolfscript/api/DamageSource.md) that killed the `Player`_ | [`DamageSource`](io/wolfscript/api/DamageSource.md)
 readonly property __Player__ <br> _Get: Gets the `Player` who died_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.PlayerDeath`](io/wolfscript/event/player/PlayerDeath.md)

---

## <a id='player-villagertrade'></a>__Event__ player.VillagerTrade

VillagerTrade Hook<br> Called when a `humanoid.Player` trades with a [`api.VillagerTrade`](io/wolfscript/api/VillagerTrade.md) from an `humanoid.Villager`

``` javascript
this.on('player.VillagerTrade', function (e) { });
```

Method | Type   
--- | :---: 
new __VillagerTrade__(player, villager, trade) <br> _Constructs a new VillagerTrade_ | _constructor_
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







For further details, see API Reference [`player.VillagerTrade`](io/wolfscript/event/player/VillagerTrade.md)

---

## <a id='entity-mobtarget'></a>__Event__ entity.MobTarget

class MobTarget

``` javascript
this.on('entity.MobTarget', function (e) { });
```

Method | Type   
--- | :---: 
new __MobTarget__(entity, target) <br> _Constructs a new MobTarget_ | _constructor_
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







For further details, see API Reference [`entity.MobTarget`](io/wolfscript/event/entity/MobTarget.md)

---

## <a id='world-decorate'></a>__Event__ world.Decorate

Called when decorating terrain with trees, glowstone etc.

``` javascript
this.on('world.Decorate', function (e) { });
```

Method | Type   
--- | :---: 
new __Decorate__(x, z, world, name) <br> _Decorate constructor_ | _constructor_
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







For further details, see API Reference [`world.Decorate`](io/wolfscript/event/world/Decorate.md)

---

## <a id='entity-entitymount'></a>__Event__ entity.EntityMount

Called when one entity is trying to mount another

``` javascript
this.on('entity.EntityMount', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityMount__(entity, rider) <br> _EntityMount constructor_ | _constructor_
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







For further details, see API Reference [`entity.EntityMount`](io/wolfscript/event/entity/EntityMount.md)

---

## <a id='player-disconnection'></a>__Event__ player.Disconnection

Disconnection hook. Contains information about a `humanoid.Player` disconnecting.

``` javascript
this.on('player.Disconnection', function (e) { });
```

Method | Type   
--- | :---: 
new __Disconnection__(player, reason, leave) <br> _Disconnection constructor_ | _constructor_
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





For further details, see API Reference [`player.Disconnection`](io/wolfscript/event/player/Disconnection.md)

---

## <a id='world-tntactivate'></a>__Event__ world.TNTActivate

class TNTActivate

``` javascript
this.on('world.TNTActivate', function (e) { });
```

Method | Type   
--- | :---: 
new __TNTActivate__(tnt, activator, cause) <br> _Constructs a new TNTActivate for a TNT Block_ | _constructor_
new __TNTActivate__(tntMinecart) <br> _Constucts a new TNTActivate for a `TNTMinecart`_ | _constructor_
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







For further details, see API Reference [`world.TNTActivate`](io/wolfscript/event/world/TNTActivate.md)

---

## <a id='world-pistonextend'></a>__Event__ world.PistonExtend

Piston Extend Hook<br> Called when a Piston extends

``` javascript
this.on('world.PistonExtend', function (e) { });
```

Method | Type   
--- | :---: 
new __PistonExtend__(piston, moving) <br> _PistonExtend constructor_ | _constructor_
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







For further details, see API Reference [`world.PistonExtend`](io/wolfscript/event/world/PistonExtend.md)

---

## <a id='player-bedexit'></a>__Event__ player.BedExit

Bed exit hook, called when a player leaves a bed

``` javascript
this.on('player.BedExit', function (e) { });
```

Method | Type   
--- | :---: 
new __BedExit__(player, bed) <br> _Create a new BedExit_ | _constructor_
 readonly property __Bed__ <br> _Get: Get the bed [`Block`](io/wolfscript/api/world/blocks/Block.md) the `Player` is leaving_ | [`Block`](io/wolfscript/api/world/blocks/Block.md)
 readonly property __Player__ <br> _Get: Gets the `Player` leaving the bed_ | `Player`
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.BedExit`](io/wolfscript/event/player/BedExit.md)

---

## <a id='player-itemframerotate'></a>__Event__ player.ItemFrameRotate

Called when a `humanoid.Player` rotates an [`inventory.Item`](io/wolfscript/api/inventory/Item.md) in an [`hanging.ItemFrame`](io/wolfscript/api/entity/hanging/ItemFrame.md)

``` javascript
this.on('player.ItemFrameRotate', function (e) { });
```

Method | Type   
--- | :---: 
new __ItemFrameRotate__(player, itemFrame) <br> _ItemFrameRotate constructor_ | _constructor_
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







For further details, see API Reference [`player.ItemFrameRotate`](io/wolfscript/event/player/ItemFrameRotate.md)

---

## <a id='player-anviluse'></a>__Event__ player.AnvilUse

class AnvilUse

``` javascript
this.on('player.AnvilUse', function (e) { });
```

Method | Type   
--- | :---: 
new __AnvilUse__(player, anvil) <br> _Constructs a new AnvilUse_ | _constructor_
 readonly property __Anvil__ <br> _Get: Gets the `Anvil` in use_ | `Anvil`
 readonly property __Player__ <br> _Get: Gets the `Player` using the `Anvil`_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.AnvilUse`](io/wolfscript/event/player/AnvilUse.md)

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
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.LevelUp`](io/wolfscript/event/player/LevelUp.md)

---

## <a id='entity-potioneffectapplied'></a>__Event__ entity.PotionEffectApplied

PotionEffectApplied<br> Called when a [`potion.PotionEffect`](io/wolfscript/api/potion/PotionEffect.md) is applied to a [`living.LivingBase`](io/wolfscript/api/entity/living/LivingBase.md)

``` javascript
this.on('entity.PotionEffectApplied', function (e) { });
```

Method | Type   
--- | :---: 
new __PotionEffectApplied__(entity, effect) <br> _Constructs a new PotionEffectApplied_ | _constructor_
 readonly property __Entity__ <br> _Get: Gets the [`LivingBase`](io/wolfscript/api/entity/living/LivingBase.md) having a [`PotionEffect`](io/wolfscript/api/potion/PotionEffect.md) applied to_ | [`LivingBase`](io/wolfscript/api/entity/living/LivingBase.md)
  property __PotionEffect__ <br> _Get: Gets the [`PotionEffect`](io/wolfscript/api/potion/PotionEffect.md) being applied<br>Set: Sets the [`PotionEffect`](io/wolfscript/api/potion/PotionEffect.md) to apply_ | [`PotionEffect`](io/wolfscript/api/potion/PotionEffect.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`entity.PotionEffectApplied`](io/wolfscript/event/entity/PotionEffectApplied.md)

---

## <a id='entity-entitydeath'></a>__Event__ entity.EntityDeath

class EntityDeath

``` javascript
this.on('entity.EntityDeath', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityDeath__(entity, cause) <br> _Constructs a new EntityDeath_ | _constructor_
 readonly property __DamageSource__ <br> _Get: Gets the [`DamageSource`](io/wolfscript/api/DamageSource.md) that killed the [`Entity`](io/wolfscript/api/entity/Entity.md)_ | [`DamageSource`](io/wolfscript/api/DamageSource.md)
 readonly property __Entity__ <br> _Get: Gets the [`Entity`](io/wolfscript/api/entity/Entity.md) that is dying_ | [`Entity`](io/wolfscript/api/entity/Entity.md)
final function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`entity.EntityDeath`](io/wolfscript/event/entity/EntityDeath.md)

---

## <a id='system-unloadworld'></a>__Event__ system.UnloadWorld

Called before a world is unloaded.<br> Before a world is unloaded, it will be saved! After a world is unloaded it will not be processed in the tick loop anymore. A world can not be unloaded if it still has players on it. For informational use - to give plugins a chance to null their references to that world, if they have any.

``` javascript
this.on('system.UnloadWorld', function (e) { });
```

Method | Type   
--- | :---: 
new __UnloadWorld__(world) <br> _UnloadWorld constructor_ | _constructor_
 readonly property __World__ <br> _Get: Returns the world that is about to be unloaded_ | [`World`](io/wolfscript/api/world/World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`system.UnloadWorld`](io/wolfscript/event/system/UnloadWorld.md)

---

## <a id='player-eat'></a>__Event__ player.Eat

class Eat

``` javascript
this.on('player.Eat', function (e) { });
```

Method | Type   
--- | :---: 
new __Eat__(player, item, levelGain, saturationGain) <br> _Constructs a new Eat_ | _constructor_
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







For further details, see API Reference [`player.Eat`](io/wolfscript/event/player/Eat.md)

---

## <a id='world-timechange'></a>__Event__ world.TimeChange

Time Change hook

``` javascript
this.on('world.TimeChange', function (e) { });
```

Method | Type   
--- | :---: 
new __TimeChange__(world, time) <br> _Constructs a new TimeChange_ | _constructor_
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







For further details, see API Reference [`world.TimeChange`](io/wolfscript/event/world/TimeChange.md)

---

## <a id='player-armorstandmodify'></a>__Event__ player.ArmorStandModify

class ArmorStandModify

``` javascript
this.on('player.ArmorStandModify', function (e) { });
```

Method | Type   
--- | :---: 
new __ArmorStandModify__(armorStand, player, slotId, current, setting) <br> _ArmorStandModify constructor_ | _constructor_
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







For further details, see API Reference [`player.ArmorStandModify`](io/wolfscript/event/player/ArmorStandModify.md)

---

## <a id='entity-hangingentitydestroy'></a>__Event__ entity.HangingEntityDestroy

HangingEntity destroy hook. Contains information about a painting or item frame being destroyed. In case the it was destroyed by a player, you will get this player too.

``` javascript
this.on('entity.HangingEntityDestroy', function (e) { });
```

Method | Type   
--- | :---: 
new __HangingEntityDestroy__(hanging, player, source) <br> _HangingEntityDestroy constructor_ | _constructor_
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







For further details, see API Reference [`entity.HangingEntityDestroy`](io/wolfscript/event/entity/HangingEntityDestroy.md)

---

## <a id='entity-minecartactivate'></a>__Event__ entity.MinecartActivate

MinecartActivate<br> Called when a [`vehicle.Minecart`](io/wolfscript/api/entity/vehicle/Minecart.md) passes over an activation rail.

``` javascript
this.on('entity.MinecartActivate', function (e) { });
```

Method | Type   
--- | :---: 
new __MinecartActivate__(minecart, power) <br> _Constructs a new MinecartActivate_ | _constructor_
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







For further details, see API Reference [`entity.MinecartActivate`](io/wolfscript/event/entity/MinecartActivate.md)

---

## <a id='entity-vehicledamage'></a>__Event__ entity.VehicleDamage

Vehicle Damage hook. Contains information about a vehicle receiving damage.

``` javascript
this.on('entity.VehicleDamage', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleDamage__(vehicle, attacker, source, dealt) <br> _VehicleDamage constructor_ | _constructor_
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







For further details, see API Reference [`entity.VehicleDamage`](io/wolfscript/event/entity/VehicleDamage.md)

---

## <a id='world-chunkloaded'></a>__Event__ world.ChunkLoaded

Chunk created hook

``` javascript
this.on('world.ChunkLoaded', function (e) { });
```

Method | Type   
--- | :---: 
new __ChunkLoaded__(chunk, world, newchunk) <br> _ChunkLoaded constructor_ | _constructor_
 readonly property __Chunk__ <br> _Get: Gets the [`Chunk`](io/wolfscript/api/world/Chunk.md)_ | [`Chunk`](io/wolfscript/api/world/Chunk.md)
 readonly property __World__ <br> _Get: Gets the world this chunk is a part of._ | [`World`](io/wolfscript/api/world/World.md)
 function __isNew__() <br> _Gets whether this chunk was a freshly created chunk_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`world.ChunkLoaded`](io/wolfscript/event/world/ChunkLoaded.md)

---

## <a id='player-enchant'></a>__Event__ player.Enchant

Enchant hook. Contains information about a player enchanting an item.

``` javascript
this.on('player.Enchant', function (e) { });
```

Method | Type   
--- | :---: 
new __Enchant__(player, item, enchtab) <br> _Enchant constructor_ | _constructor_
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







For further details, see API Reference [`player.Enchant`](io/wolfscript/event/player/Enchant.md)

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
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`system.PluginDisable`](io/wolfscript/event/system/PluginDisable.md)

---

## <a id='player-preconnection'></a>__Event__ player.PreConnection

Login checks hook. Comes with ip, name and a kickReason that is to be returned, and should be null if a player should not be kicked.

``` javascript
this.on('player.PreConnection', function (e) { });
```

Method | Type   
--- | :---: 
new __PreConnection__(ip, name, id, dimType, world) <br> _PreConnection constructor_ | _constructor_
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





For further details, see API Reference [`player.PreConnection`](io/wolfscript/event/player/PreConnection.md)

---

## <a id='command-playercommand'></a>__Event__ command.PlayerCommand

Player command hook. Contains a player and a command String Array

``` javascript
this.on('command.PlayerCommand', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerCommand__(player) <br> _Constructs a new PlayerCommand_ | _constructor_
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







For further details, see API Reference [`command.PlayerCommand`](io/wolfscript/event/command/PlayerCommand.md)

---

## <a id='world-explosion'></a>__Event__ world.Explosion

Explosion hook. Contains information about an explosion.

``` javascript
this.on('world.Explosion', function (e) { });
```

Method | Type   
--- | :---: 
new __Explosion__(block, entity) <br> _Explosion constructor_ | _constructor_
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







For further details, see API Reference [`world.Explosion`](io/wolfscript/event/world/Explosion.md)

---

## <a id='world-ignition'></a>__Event__ world.Ignition

Ignition hook. Contains information about a [`blocks.Block`](io/wolfscript/api/world/blocks/Block.md) being set on fire.

``` javascript
this.on('world.Ignition', function (e) { });
```

Method | Type   
--- | :---: 
new __Ignition__(ignited, player, clicked, cause) <br> _Ignition constructor_ | _constructor_
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







For further details, see API Reference [`world.Ignition`](io/wolfscript/event/world/Ignition.md)

---

## <a id='player-teleport'></a>__Event__ player.Teleport

Teleport hook. Contains player who is teleporting and their destination

``` javascript
this.on('player.Teleport', function (e) { });
```

Method | Type   
--- | :---: 
new __Teleport__(player, destination, cause) <br> _Teleport constructor_ | _constructor_
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







For further details, see API Reference [`player.Teleport`](io/wolfscript/event/player/Teleport.md)

---

## <a id='player-toolbroken'></a>__Event__ player.ToolBroken

class ToolBroken

``` javascript
this.on('player.ToolBroken', function (e) { });
```

Method | Type   
--- | :---: 
new __ToolBroken__(player, tool) <br> _ToolBroken constructor_ | _constructor_
 readonly property __Player__ <br> _Get: Gets the `Player` who's tool has broken_ | `Player`
 readonly property __Tool__ <br> _Tool property_ | [`Item`](io/wolfscript/api/inventory/Item.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.ToolBroken`](io/wolfscript/event/player/ToolBroken.md)

---

## <a id='player-itemdrop'></a>__Event__ player.ItemDrop

Item Hook. Contains EntityItem and Player

``` javascript
this.on('player.ItemDrop', function (e) { });
```

Method | Type   
--- | :---: 
new __ItemDrop__(player, item) <br> _ItemDrop constructor_ | _constructor_
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







For further details, see API Reference [`player.ItemDrop`](io/wolfscript/event/player/ItemDrop.md)

---

## <a id='player-returnfromidle'></a>__Event__ player.ReturnFromIdle

Called when the Player is no longer idle

``` javascript
this.on('player.ReturnFromIdle', function (e) { });
```

Method | Type   
--- | :---: 
new __ReturnFromIdle__(player, idle) <br> _ReturnFromIdle constructor_ | _constructor_
 readonly property __Player__ <br> _Get: Get the `Player` that was Idle_ | `Player`
 readonly property __TimeIdle__ <br> _Get: Gets the amount of time the `Player` was idle_ | `long`
 function __toString__() <br> _{@inheritDoc}_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.ReturnFromIdle`](io/wolfscript/event/player/ReturnFromIdle.md)

---

## <a id='entity-entitylightningstruck'></a>__Event__ entity.EntityLightningStruck

class EntityLightningStruck

``` javascript
this.on('entity.EntityLightningStruck', function (e) { });
```

Method | Type   
--- | :---: 
new __EntityLightningStruck__(bolt, entity) <br> _Constructs a new EntityLightningStruck_ | _constructor_
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







For further details, see API Reference [`entity.EntityLightningStruck`](io/wolfscript/event/entity/EntityLightningStruck.md)

---

## <a id='player-itemuse'></a>__Event__ player.ItemUse

Item use hook. Called when a `humanoid.Player` uses an [`inventory.Item`](io/wolfscript/api/inventory/Item.md)

``` javascript
this.on('player.ItemUse', function (e) { });
```

Method | Type   
--- | :---: 
new __ItemUse__(player, item, clicked) <br> _ItemUse constructor_ | _constructor_
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







For further details, see API Reference [`player.ItemUse`](io/wolfscript/event/player/ItemUse.md)

---

## <a id='player-inventory'></a>__Event__ player.Inventory

Inventory hook. Contains information about a player either opening or closing an inventory

``` javascript
this.on('player.Inventory', function (e) { });
```

Method | Type   
--- | :---: 
new __Inventory__(player, inventory, closing) <br> _Inventory constructor_ | _constructor_
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







For further details, see API Reference [`player.Inventory`](io/wolfscript/event/player/Inventory.md)

---

## <a id='player-foodexhaustion'></a>__Event__ player.FoodExhaustion

Food exhaustion change hook. Contains information about a player's food exhaustion changes

``` javascript
this.on('player.FoodExhaustion', function (e) { });
```

Method | Type   
--- | :---: 
new __FoodExhaustion__(player, oldval, newval) <br> _Constructs a new FoodExhaustion_ | _constructor_
  property __NewValue__ <br> _Get: Gets the new exhaustion level<br>Set: Sets the new value to actually be set_ | `float`
 readonly property __OldValue__ <br> _Get: Gets the old (current) exhaustion level_ | `float`
 readonly property __Player__ <br> _Get: Gets the `Player` who's food exhaustion is changing_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.FoodExhaustion`](io/wolfscript/event/player/FoodExhaustion.md)

---

## <a id='world-pistonretract'></a>__Event__ world.PistonRetract

Piston Retract hook<br> Called when a piston retracts

``` javascript
this.on('world.PistonRetract', function (e) { });
```

Method | Type   
--- | :---: 
new __PistonRetract__(piston, moving) <br> _PistonRetract constructor_ | _constructor_
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







For further details, see API Reference [`world.PistonRetract`](io/wolfscript/event/world/PistonRetract.md)

---

## <a id='entity-vehicleenter'></a>__Event__ entity.VehicleEnter

Is called when a LivingEntity enters a vehicle

``` javascript
this.on('entity.VehicleEnter', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleEnter__(vehicle, entity) <br> _VehicleEnter constructor_ | _constructor_
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







For further details, see API Reference [`entity.VehicleEnter`](io/wolfscript/event/entity/VehicleEnter.md)

---

## <a id='entity-endermanpickupblock'></a>__Event__ entity.EndermanPickupBlock

Enderman pick up block hook. Contains information about an Enderman picking up a block

``` javascript
this.on('entity.EndermanPickupBlock', function (e) { });
```

Method | Type   
--- | :---: 
new __EndermanPickupBlock__(enderman, block) <br> _Constructs a new EndermanPickUpBlockHook_ | _constructor_
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







For further details, see API Reference [`entity.EndermanPickupBlock`](io/wolfscript/event/entity/EndermanPickupBlock.md)

---

## <a id='world-redstonechange'></a>__Event__ world.RedstoneChange

RedstoneChange hook. Contains information about power flowing from one block to another

``` javascript
this.on('world.RedstoneChange', function (e) { });
```

Method | Type   
--- | :---: 
new __RedstoneChange__(source, oldLevel, newLevel) <br> _RedstoneChange constructor_ | _constructor_
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







For further details, see API Reference [`world.RedstoneChange`](io/wolfscript/event/world/RedstoneChange.md)

---

## <a id='world-portalcreate'></a>__Event__ world.PortalCreate

class PortalCreate

``` javascript
this.on('world.PortalCreate', function (e) { });
```

Method | Type   
--- | :---: 
new __PortalCreate__(pos, world) <br> _Constructs a new PortalCreate_ | _constructor_
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







For further details, see API Reference [`world.PortalCreate`](io/wolfscript/event/world/PortalCreate.md)

---

## <a id='world-blockdropxp'></a>__Event__ world.BlockDropXp

Event thrown when a block that drop experience (spawner, ore, redstone ore) is destroyed

``` javascript
this.on('world.BlockDropXp', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockDropXp__(block, xp) <br> _BlockDropXp constructor_ | _constructor_
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







For further details, see API Reference [`world.BlockDropXp`](io/wolfscript/event/world/BlockDropXp.md)

---

## <a id='world-flow'></a>__Event__ world.Flow

Flow hook. Contains information about a liquid flowing from one block to another

``` javascript
this.on('world.Flow', function (e) { });
```

Method | Type   
--- | :---: 
new __Flow__(from, to) <br> _Flow constructor_ | _constructor_
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







For further details, see API Reference [`world.Flow`](io/wolfscript/event/world/Flow.md)

---

## <a id='entity-entityspawn'></a>__Event__ entity.EntitySpawn

Entity spawn hook. Contains information about an entity spawning.

``` javascript
this.on('entity.EntitySpawn', function (e) { });
```

Method | Type   
--- | :---: 
new __EntitySpawn__(entity) <br> _EntitySpawn constructor_ | _constructor_
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







For further details, see API Reference [`entity.EntitySpawn`](io/wolfscript/event/entity/EntitySpawn.md)

---

## <a id='player-statgained'></a>__Event__ player.StatGained

StatGained<br> Called when a `humanoid.Player` gains a Stat

``` javascript
this.on('player.StatGained', function (e) { });
```

Method | Type   
--- | :---: 
new __StatGained__(player, stat, gain) <br> _Constructs a new StatGained_ | _constructor_
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







For further details, see API Reference [`player.StatGained`](io/wolfscript/event/player/StatGained.md)

---

## <a id='player-portaluse'></a>__Event__ player.PortalUse

PortalUse Hook

``` javascript
this.on('player.PortalUse', function (e) { });
```

Method | Type   
--- | :---: 
new __PortalUse__(player, to) <br> _Constructs a new PortalUse_ | _constructor_
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







For further details, see API Reference [`player.PortalUse`](io/wolfscript/event/player/PortalUse.md)

---

## <a id='system-servershutdown'></a>__Event__ system.ServerShutdown

Server shutdown hook. Contains information about the reason the server is shutting down

``` javascript
this.on('system.ServerShutdown', function (e) { });
```

Method | Type   
--- | :---: 
new __ServerShutdown__(reason) <br> _ServerShutdown constructor_ | _constructor_
  property __Reason__ <br> _Get: Get the reason for disconnect (if applicable)<br>Set: Set the reason for disconnection that will be displayed_ | `String`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`system.ServerShutdown`](io/wolfscript/event/system/ServerShutdown.md)

---

## <a id='entity-dimensionswitch'></a>__Event__ entity.DimensionSwitch

Dimension switch hook. Contains information about an entity changeing dimentions

``` javascript
this.on('entity.DimensionSwitch', function (e) { });
```

Method | Type   
--- | :---: 
new __DimensionSwitch__(entity, to, from) <br> _DimensionSwitch constructor_ | _constructor_
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







For further details, see API Reference [`entity.DimensionSwitch`](io/wolfscript/event/entity/DimensionSwitch.md)

---

## <a id='entity-slimesplit'></a>__Event__ entity.SlimeSplit

Slime split hook, Contains information about a slime split.

``` javascript
this.on('entity.SlimeSplit', function (e) { });
```

Method | Type   
--- | :---: 
new __SlimeSplit__(originalSlime) <br> _Constructs a new SlimeSplit_ | _constructor_
 readonly property __ChildSlimes__ <br> _Get: Get the [`Slime`](io/wolfscript/api/entity/living/monster/Slime.md)s that should be spawned_ | `List<Slime>`
 readonly property __OriginalSlime__ <br> _Get: Get the original [`Slime`](io/wolfscript/api/entity/living/monster/Slime.md) that died_ | [`Slime`](io/wolfscript/api/entity/living/monster/Slime.md)
 function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`entity.SlimeSplit`](io/wolfscript/event/entity/SlimeSplit.md)

---

## <a id='player-itempickup'></a>__Event__ player.ItemPickup

Item Hook. Contains EntityItem and Player

``` javascript
this.on('player.ItemPickup', function (e) { });
```

Method | Type   
--- | :---: 
new __ItemPickup__(player, item) <br> _ItemPickup constructor_ | _constructor_
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







For further details, see API Reference [`player.ItemPickup`](io/wolfscript/event/player/ItemPickup.md)

---

## <a id='world-chunkcreated'></a>__Event__ world.ChunkCreated

Chunk created hook

``` javascript
this.on('world.ChunkCreated', function (e) { });
```

Method | Type   
--- | :---: 
new __ChunkCreated__(chunk, world) <br> _ChunkCreated constructor_ | _constructor_
 readonly property __Chunk__ <br> _Get: Gets the [`Chunk`](io/wolfscript/api/world/Chunk.md)_ | [`Chunk`](io/wolfscript/api/world/Chunk.md)
 readonly property __World__ <br> _Get: Gets the world that this chunk is a part of._ | [`World`](io/wolfscript/api/world/World.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`world.ChunkCreated`](io/wolfscript/event/world/ChunkCreated.md)

---

## <a id='world-portaldestroy'></a>__Event__ world.PortalDestroy

class PortalDestroy

``` javascript
this.on('world.PortalDestroy', function (e) { });
```

Method | Type   
--- | :---: 
new __PortalDestroy__(pos, world) <br> _Constructs a new PortalDestroy_ | _constructor_
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







For further details, see API Reference [`world.PortalDestroy`](io/wolfscript/event/world/PortalDestroy.md)

---

## <a id='world-hoppertransfer'></a>__Event__ world.HopperTransfer

Hook parameter for when Hoppers Transfer Items

``` javascript
this.on('world.HopperTransfer', function (e) { });
```

Method | Type   
--- | :---: 
new __HopperTransfer__(hopper, itemTransferred, inputting) <br> _HopperTransfer constructor_ | _constructor_
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







For further details, see API Reference [`world.HopperTransfer`](io/wolfscript/event/world/HopperTransfer.md)

---

## <a id='player-foodsaturation'></a>__Event__ player.FoodSaturation

Food saturation change hook. Contains information about a player's food saturation changes

``` javascript
this.on('player.FoodSaturation', function (e) { });
```

Method | Type   
--- | :---: 
new __FoodSaturation__(player, oldval, newval) <br> _Constructs a new FoodSaturation_ | _constructor_
  property __NewValue__ <br> _Get: Gets the new level<br>Set: Sets the new value to actually be set_ | `float`
 readonly property __OldValue__ <br> _Get: Gets the old (current) level_ | `float`
 readonly property __Player__ <br> _Get: Gets the `Player` who's food saturation is changing_ | `Player`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.FoodSaturation`](io/wolfscript/event/player/FoodSaturation.md)

---

## <a id='player-healthchange'></a>__Event__ player.HealthChange

Health Change hook

``` javascript
this.on('player.HealthChange', function (e) { });
```

Method | Type   
--- | :---: 
new __HealthChange__(player, oldVal, newVal) <br> _Constructs a new HealthChange hook_ | _constructor_
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







For further details, see API Reference [`player.HealthChange`](io/wolfscript/event/player/HealthChange.md)

---

## <a id='world-liquiddestroy'></a>__Event__ world.LiquidDestroy

Is called when a liquid is about to destroy something (crops, popping off torches etc)

``` javascript
this.on('world.LiquidDestroy', function (e) { });
```

Method | Type   
--- | :---: 
new __LiquidDestroy__(liquidType, toDestroy) <br> _LiquidDestroy constructor_ | _constructor_
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







For further details, see API Reference [`world.LiquidDestroy`](io/wolfscript/event/world/LiquidDestroy.md)

---

## <a id='world-lightningstrike'></a>__Event__ world.LightningStrike

class LightningStrike

``` javascript
this.on('world.LightningStrike', function (e) { });
```

Method | Type   
--- | :---: 
new __LightningStrike__(lightbolt) <br> _Creates a new LightningStrike_ | _constructor_
 readonly property __LightningBolt__ <br> _Get: Gets the [`LightningBolt`](io/wolfscript/api/entity/effect/LightningBolt.md) striking_ | [`LightningBolt`](io/wolfscript/api/entity/effect/LightningBolt.md)
final function __toString__() <br> _{@inheritDoc}_ | `String`
 var __lightbolt__ <br> _lightbolt field_ | [`LightningBolt`](io/wolfscript/api/entity/effect/LightningBolt.md)
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`world.LightningStrike`](io/wolfscript/event/world/LightningStrike.md)

---

## <a id='world-treegrow'></a>__Event__ world.TreeGrow

class TreeGrow

``` javascript
this.on('world.TreeGrow', function (e) { });
```

Method | Type   
--- | :---: 
new __TreeGrow__(sapling) <br> _Constructs a new TreeGrow_ | _constructor_
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







For further details, see API Reference [`world.TreeGrow`](io/wolfscript/event/world/TreeGrow.md)

---

## <a id='player-blockdestroy'></a>__Event__ player.BlockDestroy

Called when a player destroy a block

``` javascript
this.on('player.BlockDestroy', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockDestroy__(player, block) <br> _BlockDestroy constructor_ | _constructor_
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







For further details, see API Reference [`player.BlockDestroy`](io/wolfscript/event/player/BlockDestroy.md)

---

## <a id='player-bookedit'></a>__Event__ player.BookEdit

Called when a `humanoid.Player` edits a Book [`inventory.Item`](io/wolfscript/api/inventory/Item.md)

``` javascript
this.on('player.BookEdit', function (e) { });
```

Method | Type   
--- | :---: 
new __BookEdit__(book, player) <br> _BookEdit constructor_ | _constructor_
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







For further details, see API Reference [`player.BookEdit`](io/wolfscript/event/player/BookEdit.md)

---

## <a id='player-playerrespawning'></a>__Event__ player.PlayerRespawning

Player pre-respawn hook. This hook is called before the new location and repsawn point for a player is determined. Use it to alter those information.

``` javascript
this.on('player.PlayerRespawning', function (e) { });
```

Method | Type   
--- | :---: 
new __PlayerRespawning__(player, respawn, bedSpawn) <br> _PlayerRespawning constructor_ | _constructor_
 readonly property __Player__ <br> _Get: Gets the `Player`_ | `Player`
  property __RespawnLocation__ <br> _Get: Gets the respawn [`Location`](io/wolfscript/api/world/position/Location.md)<br>Set: Sets the respawn [`Location`](io/wolfscript/api/world/position/Location.md)_ | [`Location`](io/wolfscript/api/world/position/Location.md)
 function __isBedSpawn__() <br> _Returns true if the player is supposed to respawn at his bed_ | `boolean`
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.PlayerRespawning`](io/wolfscript/event/player/PlayerRespawning.md)

---

## <a id='player-chat'></a>__Event__ player.Chat

Chat hook. Contains player, prefix, message and receivers information

``` javascript
this.on('player.Chat', function (e) { });
```

Method | Type   
--- | :---: 
new __Chat__(player, format) <br> _Chat constructor_ | _constructor_
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







For further details, see API Reference [`player.Chat`](io/wolfscript/event/player/Chat.md)

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
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`player.PlayerArmSwing`](io/wolfscript/event/player/PlayerArmSwing.md)

---

## <a id='player-blockrightclick'></a>__Event__ player.BlockRightClick

Is called when a player right-clicks a block, eg. uses it.

``` javascript
this.on('player.BlockRightClick', function (e) { });
```

Method | Type   
--- | :---: 
new __BlockRightClick__(player, clicked) <br> _Construct a new BlockRightClick_ | _constructor_
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







For further details, see API Reference [`player.BlockRightClick`](io/wolfscript/event/player/BlockRightClick.md)

---

## <a id='entity-vehicledestroy'></a>__Event__ entity.VehicleDestroy

VehicleDestoryHook<br> Called when a Minecart or Boat is destroyed

``` javascript
this.on('entity.VehicleDestroy', function (e) { });
```

Method | Type   
--- | :---: 
new __VehicleDestroy__(vehicle) <br> _VehicleDestroy constructor_ | _constructor_
 readonly property __Vehicle__ <br> _Get: The [`Vehicle`](io/wolfscript/api/entity/vehicle/Vehicle.md) being destoryed_ | [`Vehicle`](io/wolfscript/api/entity/vehicle/Vehicle.md)
final function __toString__() <br> _toString method_ | `String`
 |
__Inherited items from [`Hook`](io/wolfscript/hook/Hook.md)__ |
final readonly property __HookName__ <br> _Get: Get the name of this hook._ | `String`
 function __call__() <br> _Calls a Hook if not already executed_ | [`Hook`](io/wolfscript/hook/Hook.md)
 function __hashCode__() <br> _hashCode method_ | `int`





For further details, see API Reference [`entity.VehicleDestroy`](io/wolfscript/event/entity/VehicleDestroy.md)

---




