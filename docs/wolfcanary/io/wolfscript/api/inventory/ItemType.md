## ItemType __class__

>io.wolfscript.api.inventory.ItemType

---

### Class Overview

Item Types

Method | Type   
--- | :--- 
new __ItemType__(id) <br> _ItemType constructor_ | _constructor_
new __ItemType__(id, data) <br> _ItemType constructor_ | _constructor_
new __ItemType__(id, name) <br> _ItemType constructor_ | _constructor_
new __ItemType__(id, isBlockCreating) <br> _ItemType constructor_ | _constructor_
new __ItemType__(id, data, name) <br> _ItemType constructor_ | _constructor_
new __ItemType__(id, isBlockCreating, machineName) <br> _ItemType constructor_ | _constructor_
new __ItemType__(id, data, isBlockCreating, machineName) <br> _ItemType constructor_ | _constructor_
 readonly property __Id__ <br> _Get: Get the ID of this ItemType_ | `int`
 readonly property __Data__ <br> _Get: Get the data of the ItemType_ | `int`
 readonly property __MachineName__ <br> _Get: Returns a "machine readable" name._ | `String`
static function __fromIdAndData__(id, data) <br> _Gets an ItemType according to the given ID and Data values._ | [`ItemType`](ItemType.md)
static function __getCustomItemType__(name) <br> _Get a custom ItemType._ | [`ItemType`](ItemType.md)
static function __getCustomItemType__(name, data) <br> _Get a custom ItemType._ | [`ItemType`](ItemType.md)
static function __fromString__(name) <br> _Returns an ItemType according to its name._ | [`ItemType`](ItemType.md)
static function __fromId__(id) <br> _Get the ItemType according to the given ID._ | [`ItemType`](ItemType.md)
static function __fromStringAndData__(machineName, data) <br> _Gets an ItemType according to the given machine name and data value._ | [`ItemType`](ItemType.md)
static function __isBlockCreating__(itemId) <br> _Checks the Item ID if it is an Item that creates a Block_ | `boolean`
 function __isBlockCreating__() <br> _isBlockCreating method_ | `boolean`
static function __values__() <br> _Gets an array of all ItemTypes_ | `ItemType[]`
static final var __Stone__ <br> _Stone field_ | [`ItemType`](ItemType.md)
static final var __Granite__ <br> _Granite field_ | [`ItemType`](ItemType.md)
static final var __PolishedGranite__ <br> _PolishedGranite field_ | [`ItemType`](ItemType.md)
static final var __Diorite__ <br> _Diorite field_ | [`ItemType`](ItemType.md)
static final var __PolishedDiorite__ <br> _PolishedDiorite field_ | [`ItemType`](ItemType.md)
static final var __Andesite__ <br> _Andesite field_ | [`ItemType`](ItemType.md)
static final var __PolishedAndesite__ <br> _PolishedAndesite field_ | [`ItemType`](ItemType.md)
static final var __Grass__ <br> _Grass field_ | [`ItemType`](ItemType.md)
static final var __Dirt__ <br> _Dirt field_ | [`ItemType`](ItemType.md)
static final var __CoarseDirt__ <br> _CoarseDirt field_ | [`ItemType`](ItemType.md)
static final var __Podzol__ <br> _Podzol field_ | [`ItemType`](ItemType.md)
static final var __Cobble__ <br> _Cobble field_ | [`ItemType`](ItemType.md)
static final var __OakWood__ <br> _OakWood field_ | [`ItemType`](ItemType.md)
static final var __SpruceWood__ <br> _SpruceWood field_ | [`ItemType`](ItemType.md)
static final var __BirchWood__ <br> _BirchWood field_ | [`ItemType`](ItemType.md)
static final var __JungleWood__ <br> _JungleWood field_ | [`ItemType`](ItemType.md)
static final var __AcaciaWood__ <br> _AcaciaWood field_ | [`ItemType`](ItemType.md)
static final var __DarkOakWood__ <br> _DarkOakWood field_ | [`ItemType`](ItemType.md)
static final var __OakSapling__ <br> _OakSapling field_ | [`ItemType`](ItemType.md)
static final var __SpruceSapling__ <br> _SpruceSapling field_ | [`ItemType`](ItemType.md)
static final var __BirchSapling__ <br> _BirchSapling field_ | [`ItemType`](ItemType.md)
static final var __JungleSapling__ <br> _JungleSapling field_ | [`ItemType`](ItemType.md)
static final var __AcaciaSapling__ <br> _AcaciaSapling field_ | [`ItemType`](ItemType.md)
static final var __DarkOakSapling__ <br> _DarkOakSapling field_ | [`ItemType`](ItemType.md)
static final var __Bedrock__ <br> _Bedrock field_ | [`ItemType`](ItemType.md)
static final var __WaterFlowing__ <br> _WaterFlowing field_ | [`ItemType`](ItemType.md)
static final var __Water__ <br> _Water field_ | [`ItemType`](ItemType.md)
static final var __LavaFlowing__ <br> _LavaFlowing field_ | [`ItemType`](ItemType.md)
static final var __Lava__ <br> _Lava field_ | [`ItemType`](ItemType.md)
static final var __Sand__ <br> _Sand field_ | [`ItemType`](ItemType.md)
static final var __Gravel__ <br> _Gravel field_ | [`ItemType`](ItemType.md)
static final var __GoldOre__ <br> _GoldOre field_ | [`ItemType`](ItemType.md)
static final var __IronOre__ <br> _IronOre field_ | [`ItemType`](ItemType.md)
static final var __CoalOre__ <br> _CoalOre field_ | [`ItemType`](ItemType.md)
static final var __OakLog__ <br> _OakLog field_ | [`ItemType`](ItemType.md)
static final var __PineLog__ <br> _PineLog field_ | [`ItemType`](ItemType.md)
static final var __BirchLog__ <br> _BirchLog field_ | [`ItemType`](ItemType.md)
static final var __JungleLog__ <br> _JungleLog field_ | [`ItemType`](ItemType.md)
static final var __OakLeaves__ <br> _OakLeaves field_ | [`ItemType`](ItemType.md)
static final var __PineLeaves__ <br> _PineLeaves field_ | [`ItemType`](ItemType.md)
static final var __BirchLeaves__ <br> _BirchLeaves field_ | [`ItemType`](ItemType.md)
static final var __JungleLeaves__ <br> _JungleLeaves field_ | [`ItemType`](ItemType.md)
static final var __Sponge__ <br> _Sponge field_ | [`ItemType`](ItemType.md)
static final var __Glass__ <br> _Glass field_ | [`ItemType`](ItemType.md)
static final var __LapislazuliOre__ <br> _LapislazuliOre field_ | [`ItemType`](ItemType.md)
static final var __LapisBlock__ <br> _LapisBlock field_ | [`ItemType`](ItemType.md)
static final var __Dispenser__ <br> _Dispenser field_ | [`ItemType`](ItemType.md)
static final var __Sandstone__ <br> _Sandstone field_ | [`ItemType`](ItemType.md)
static final var __SandstoneOrnate__ <br> _SandstoneOrnate field_ | [`ItemType`](ItemType.md)
static final var __SandstoneBlank__ <br> _SandstoneBlank field_ | [`ItemType`](ItemType.md)
static final var __NoteBlock__ <br> _NoteBlock field_ | [`ItemType`](ItemType.md)
static final var __PoweredRail__ <br> _PoweredRail field_ | [`ItemType`](ItemType.md)
static final var __DetectorRail__ <br> _DetectorRail field_ | [`ItemType`](ItemType.md)
static final var __StickyPiston__ <br> _StickyPiston field_ | [`ItemType`](ItemType.md)
static final var __SpiderWeb__ <br> _SpiderWeb field_ | [`ItemType`](ItemType.md)
static final var __Shrub__ <br> _Shrub field_ | [`ItemType`](ItemType.md)
static final var __TallGrass__ <br> _TallGrass field_ | [`ItemType`](ItemType.md)
static final var __TallFern__ <br> _TallFern field_ | [`ItemType`](ItemType.md)
static final var __DeadBush__ <br> _DeadBush field_ | [`ItemType`](ItemType.md)
static final var __Piston__ <br> _Piston field_ | [`ItemType`](ItemType.md)
static final var __WoolWhite__ <br> _WoolWhite field_ | [`ItemType`](ItemType.md)
static final var __WoolOrange__ <br> _WoolOrange field_ | [`ItemType`](ItemType.md)
static final var __WoolMagenta__ <br> _WoolMagenta field_ | [`ItemType`](ItemType.md)
static final var __WoolLightBlue__ <br> _WoolLightBlue field_ | [`ItemType`](ItemType.md)
static final var __WoolYellow__ <br> _WoolYellow field_ | [`ItemType`](ItemType.md)
static final var __WoolLightGreen__ <br> _WoolLightGreen field_ | [`ItemType`](ItemType.md)
static final var __WoolPink__ <br> _WoolPink field_ | [`ItemType`](ItemType.md)
static final var __WoolGray__ <br> _WoolGray field_ | [`ItemType`](ItemType.md)
static final var __WoolLightGray__ <br> _WoolLightGray field_ | [`ItemType`](ItemType.md)
static final var __WoolCyan__ <br> _WoolCyan field_ | [`ItemType`](ItemType.md)
static final var __WoolPurple__ <br> _WoolPurple field_ | [`ItemType`](ItemType.md)
static final var __WoolBlue__ <br> _WoolBlue field_ | [`ItemType`](ItemType.md)
static final var __WoolBrown__ <br> _WoolBrown field_ | [`ItemType`](ItemType.md)
static final var __WoolDarkGreen__ <br> _WoolDarkGreen field_ | [`ItemType`](ItemType.md)
static final var __WoolRed__ <br> _WoolRed field_ | [`ItemType`](ItemType.md)
static final var __WoolBlack__ <br> _WoolBlack field_ | [`ItemType`](ItemType.md)
static final var __YellowFlower__ <br> _YellowFlower field_ | [`ItemType`](ItemType.md)
static final var __Poppy__ <br> _Poppy field_ | [`ItemType`](ItemType.md)
static final var __BlueOrchid__ <br> _BlueOrchid field_ | [`ItemType`](ItemType.md)
static final var __Allium__ <br> _Allium field_ | [`ItemType`](ItemType.md)
static final var __AzureBluet__ <br> _AzureBluet field_ | [`ItemType`](ItemType.md)
static final var __RedTulip__ <br> _RedTulip field_ | [`ItemType`](ItemType.md)
static final var __OrangeTulip__ <br> _OrangeTulip field_ | [`ItemType`](ItemType.md)
static final var __WhiteTulip__ <br> _WhiteTulip field_ | [`ItemType`](ItemType.md)
static final var __PinkTulip__ <br> _PinkTulip field_ | [`ItemType`](ItemType.md)
static final var __OxeyeDaisy__ <br> _OxeyeDaisy field_ | [`ItemType`](ItemType.md)
static final var __BrownMushroom__ <br> _BrownMushroom field_ | [`ItemType`](ItemType.md)
static final var __RedMushroom__ <br> _RedMushroom field_ | [`ItemType`](ItemType.md)
static final var __GoldBlock__ <br> _GoldBlock field_ | [`ItemType`](ItemType.md)
static final var __IronBlock__ <br> _IronBlock field_ | [`ItemType`](ItemType.md)
static final var __DoubleOrnateStoneSlab__ <br> _DoubleOrnateStoneSlab field_ | [`ItemType`](ItemType.md)
static final var __DoubleSandStoneTrimSlab__ <br> _DoubleSandStoneTrimSlab field_ | [`ItemType`](ItemType.md)
static final var __DoubleWoodSlab__ <br> _DoubleWoodSlab field_ | [`ItemType`](ItemType.md)
static final var __DoubleCobbleSlab__ <br> _DoubleCobbleSlab field_ | [`ItemType`](ItemType.md)
static final var __DoubleBrickBlockSlab__ <br> _DoubleBrickBlockSlab field_ | [`ItemType`](ItemType.md)
static final var __DoubleStoneBricksSlab__ <br> _DoubleStoneBricksSlab field_ | [`ItemType`](ItemType.md)
static final var __DoubleNetherBrickSlab__ <br> _DoubleNetherBrickSlab field_ | [`ItemType`](ItemType.md)
static final var __DoubleQuartzSlab__ <br> _DoubleQuartzSlab field_ | [`ItemType`](ItemType.md)
static final var __DoubleStoneSlab__ <br> _DoubleStoneSlab field_ | [`ItemType`](ItemType.md)
static final var __DoubleSandstoneSlab__ <br> _DoubleSandstoneSlab field_ | [`ItemType`](ItemType.md)
static final var __OrnateStoneSlab__ <br> _OrnateStoneSlab field_ | [`ItemType`](ItemType.md)
static final var __SandStoneTrimSlab__ <br> _SandStoneTrimSlab field_ | [`ItemType`](ItemType.md)
static final var __WoodSlab__ <br> _WoodSlab field_ | [`ItemType`](ItemType.md)
static final var __CobbleSlab__ <br> _CobbleSlab field_ | [`ItemType`](ItemType.md)
static final var __BrickSlab__ <br> _BrickSlab field_ | [`ItemType`](ItemType.md)
static final var __StoneBricksSlab__ <br> _StoneBricksSlab field_ | [`ItemType`](ItemType.md)
static final var __NetherBricksSlab__ <br> _NetherBricksSlab field_ | [`ItemType`](ItemType.md)
static final var __QuartzSlab__ <br> _QuartzSlab field_ | [`ItemType`](ItemType.md)
static final var __StoneSlab__ <br> _StoneSlab field_ | [`ItemType`](ItemType.md)
static final var __SandstoneSlab__ <br> _SandstoneSlab field_ | [`ItemType`](ItemType.md)
static final var __BrickBlock__ <br> _BrickBlock field_ | [`ItemType`](ItemType.md)
static final var __Tnt__ <br> _Tnt field_ | [`ItemType`](ItemType.md)
static final var __Bookshelf__ <br> _Bookshelf field_ | [`ItemType`](ItemType.md)
static final var __MossyCobble__ <br> _MossyCobble field_ | [`ItemType`](ItemType.md)
static final var __Obsidian__ <br> _Obsidian field_ | [`ItemType`](ItemType.md)
static final var __Torch__ <br> _Torch field_ | [`ItemType`](ItemType.md)
static final var __FireBlock__ <br> _FireBlock field_ | [`ItemType`](ItemType.md)
static final var __MobSpawner__ <br> _MobSpawner field_ | [`ItemType`](ItemType.md)
static final var __WoodenStairs__ <br> _WoodenStairs field_ | [`ItemType`](ItemType.md)
static final var __Chest__ <br> _Chest field_ | [`ItemType`](ItemType.md)
static final var __DiamondOre__ <br> _DiamondOre field_ | [`ItemType`](ItemType.md)
static final var __DiamondBlock__ <br> _DiamondBlock field_ | [`ItemType`](ItemType.md)
static final var __Workbench__ <br> _Workbench field_ | [`ItemType`](ItemType.md)
static final var __Soil__ <br> _Soil field_ | [`ItemType`](ItemType.md)
static final var __Furnace__ <br> _Furnace field_ | [`ItemType`](ItemType.md)
static final var __BurningFurnace__ <br> _BurningFurnace field_ | [`ItemType`](ItemType.md)
static final var __Ladder__ <br> _Ladder field_ | [`ItemType`](ItemType.md)
static final var __Rail__ <br> _Rail field_ | [`ItemType`](ItemType.md)
static final var __CobbleStairs__ <br> _CobbleStairs field_ | [`ItemType`](ItemType.md)
static final var __Lever__ <br> _Lever field_ | [`ItemType`](ItemType.md)
static final var __StonePlate__ <br> _StonePlate field_ | [`ItemType`](ItemType.md)
static final var __WoodPlate__ <br> _WoodPlate field_ | [`ItemType`](ItemType.md)
static final var __RedstoneOre__ <br> _RedstoneOre field_ | [`ItemType`](ItemType.md)
static final var __RedstoneTorchOn__ <br> _RedstoneTorchOn field_ | [`ItemType`](ItemType.md)
static final var __StoneButton__ <br> _StoneButton field_ | [`ItemType`](ItemType.md)
static final var __Snow__ <br> _Snow field_ | [`ItemType`](ItemType.md)
static final var __Ice__ <br> _Ice field_ | [`ItemType`](ItemType.md)
static final var __SnowBlock__ <br> _SnowBlock field_ | [`ItemType`](ItemType.md)
static final var __Cactus__ <br> _Cactus field_ | [`ItemType`](ItemType.md)
static final var __Clay__ <br> _Clay field_ | [`ItemType`](ItemType.md)
static final var __Jukebox__ <br> _Jukebox field_ | [`ItemType`](ItemType.md)
static final var __Fence__ <br> _Fence field_ | [`ItemType`](ItemType.md)
static final var __Pumpkin__ <br> _Pumpkin field_ | [`ItemType`](ItemType.md)
static final var __Netherrack__ <br> _Netherrack field_ | [`ItemType`](ItemType.md)
static final var __SoulSand__ <br> _SoulSand field_ | [`ItemType`](ItemType.md)
static final var __GlowStone__ <br> _GlowStone field_ | [`ItemType`](ItemType.md)
static final var __Portal__ <br> _Portal field_ | [`ItemType`](ItemType.md)
static final var __JackOLantern__ <br> _JackOLantern field_ | [`ItemType`](ItemType.md)
static final var __WhiteGlass__ <br> _WhiteGlass field_ | [`ItemType`](ItemType.md)
static final var __OrangeGlass__ <br> _OrangeGlass field_ | [`ItemType`](ItemType.md)
static final var __MagentaGlass__ <br> _MagentaGlass field_ | [`ItemType`](ItemType.md)
static final var __LightBlueGlass__ <br> _LightBlueGlass field_ | [`ItemType`](ItemType.md)
static final var __YellowGlass__ <br> _YellowGlass field_ | [`ItemType`](ItemType.md)
static final var __LimeGlass__ <br> _LimeGlass field_ | [`ItemType`](ItemType.md)
static final var __PinkGlass__ <br> _PinkGlass field_ | [`ItemType`](ItemType.md)
static final var __GrayGlass__ <br> _GrayGlass field_ | [`ItemType`](ItemType.md)
static final var __LightGrayGlass__ <br> _LightGrayGlass field_ | [`ItemType`](ItemType.md)
static final var __CyanGlass__ <br> _CyanGlass field_ | [`ItemType`](ItemType.md)
static final var __PurpleGlass__ <br> _PurpleGlass field_ | [`ItemType`](ItemType.md)
static final var __BlueGlass__ <br> _BlueGlass field_ | [`ItemType`](ItemType.md)
static final var __BrownGlass__ <br> _BrownGlass field_ | [`ItemType`](ItemType.md)
static final var __GreenGlass__ <br> _GreenGlass field_ | [`ItemType`](ItemType.md)
static final var __RedGlass__ <br> _RedGlass field_ | [`ItemType`](ItemType.md)
static final var __BlackGlass__ <br> _BlackGlass field_ | [`ItemType`](ItemType.md)
static final var __Trapdoor__ <br> _Trapdoor field_ | [`ItemType`](ItemType.md)
static final var __StoneSilverFishBlock__ <br> _StoneSilverFishBlock field_ | [`ItemType`](ItemType.md)
static final var __CobbleSilverFishBlock__ <br> _CobbleSilverFishBlock field_ | [`ItemType`](ItemType.md)
static final var __StoneBrickSilverFishBlock__ <br> _StoneBrickSilverFishBlock field_ | [`ItemType`](ItemType.md)
static final var __MossyBrickSilverFishBlock__ <br> _MossyBrickSilverFishBlock field_ | [`ItemType`](ItemType.md)
static final var __CrackedSilverFishBlock__ <br> _CrackedSilverFishBlock field_ | [`ItemType`](ItemType.md)
static final var __OrnateSilverFishBlock__ <br> _OrnateSilverFishBlock field_ | [`ItemType`](ItemType.md)
static final var __StoneBrick__ <br> _StoneBrick field_ | [`ItemType`](ItemType.md)
static final var __MossyStoneBrick__ <br> _MossyStoneBrick field_ | [`ItemType`](ItemType.md)
static final var __CrackedStoneBrick__ <br> _CrackedStoneBrick field_ | [`ItemType`](ItemType.md)
static final var __OrnateStoneBrick__ <br> _OrnateStoneBrick field_ | [`ItemType`](ItemType.md)
static final var __HugeBrownMushroom__ <br> _HugeBrownMushroom field_ | [`ItemType`](ItemType.md)
static final var __HugeRedMushroom__ <br> _HugeRedMushroom field_ | [`ItemType`](ItemType.md)
static final var __IronBars__ <br> _IronBars field_ | [`ItemType`](ItemType.md)
static final var __GlassPane__ <br> _GlassPane field_ | [`ItemType`](ItemType.md)
static final var __Melon__ <br> _Melon field_ | [`ItemType`](ItemType.md)
static final var __Vines__ <br> _Vines field_ | [`ItemType`](ItemType.md)
static final var __FenceGate__ <br> _FenceGate field_ | [`ItemType`](ItemType.md)
static final var __BrickStairs__ <br> _BrickStairs field_ | [`ItemType`](ItemType.md)
static final var __StoneBrickStairs__ <br> _StoneBrickStairs field_ | [`ItemType`](ItemType.md)
static final var __Mycelium__ <br> _Mycelium field_ | [`ItemType`](ItemType.md)
static final var __Lilypad__ <br> _Lilypad field_ | [`ItemType`](ItemType.md)
static final var __NetherBrick__ <br> _NetherBrick field_ | [`ItemType`](ItemType.md)
static final var __NetherBrickFence__ <br> _NetherBrickFence field_ | [`ItemType`](ItemType.md)
static final var __NetherBrickStairs__ <br> _NetherBrickStairs field_ | [`ItemType`](ItemType.md)
static final var __EnchantmentTable__ <br> _EnchantmentTable field_ | [`ItemType`](ItemType.md)
static final var __EndPortal__ <br> _EndPortal field_ | [`ItemType`](ItemType.md)
static final var __EndPortalFrame__ <br> _EndPortalFrame field_ | [`ItemType`](ItemType.md)
static final var __EndStone__ <br> _EndStone field_ | [`ItemType`](ItemType.md)
static final var __EnderDragonEgg__ <br> _EnderDragonEgg field_ | [`ItemType`](ItemType.md)
static final var __RedstoneLampOff__ <br> _RedstoneLampOff field_ | [`ItemType`](ItemType.md)
static final var __DoubleOakWoodSlab__ <br> _DoubleOakWoodSlab field_ | [`ItemType`](ItemType.md)
static final var __DoubleSpruceWoodSlab__ <br> _DoubleSpruceWoodSlab field_ | [`ItemType`](ItemType.md)
static final var __DoubleBirchWoodSlab__ <br> _DoubleBirchWoodSlab field_ | [`ItemType`](ItemType.md)
static final var __DoubleJungleWoodSlab__ <br> _DoubleJungleWoodSlab field_ | [`ItemType`](ItemType.md)
static final var __DoubleAcaciaWoodSlab__ <br> _DoubleAcaciaWoodSlab field_ | [`ItemType`](ItemType.md)
static final var __DoubleDarkOakWoodSlab__ <br> _DoubleDarkOakWoodSlab field_ | [`ItemType`](ItemType.md)
static final var __OakWoodSlab__ <br> _OakWoodSlab field_ | [`ItemType`](ItemType.md)
static final var __SpruceWoodSlab__ <br> _SpruceWoodSlab field_ | [`ItemType`](ItemType.md)
static final var __BirchWoodSlab__ <br> _BirchWoodSlab field_ | [`ItemType`](ItemType.md)
static final var __JungleWoodSlab__ <br> _JungleWoodSlab field_ | [`ItemType`](ItemType.md)
static final var __AcaciaWoodSlab__ <br> _AcaciaWoodSlab field_ | [`ItemType`](ItemType.md)
static final var __DarkOakWoodSlab__ <br> _DarkOakWoodSlab field_ | [`ItemType`](ItemType.md)
static final var __CocoaPlant__ <br> _CocoaPlant field_ | [`ItemType`](ItemType.md)
static final var __SandstoneStairs__ <br> _SandstoneStairs field_ | [`ItemType`](ItemType.md)
static final var __EmeraldOre__ <br> _EmeraldOre field_ | [`ItemType`](ItemType.md)
static final var __EnderChest__ <br> _EnderChest field_ | [`ItemType`](ItemType.md)
static final var __TripwireHook__ <br> _TripwireHook field_ | [`ItemType`](ItemType.md)
static final var __EmeraldBlock__ <br> _EmeraldBlock field_ | [`ItemType`](ItemType.md)
static final var __PineWoodStairs__ <br> _PineWoodStairs field_ | [`ItemType`](ItemType.md)
static final var __BirchWoodStairs__ <br> _BirchWoodStairs field_ | [`ItemType`](ItemType.md)
static final var __JungleWoodStairs__ <br> _JungleWoodStairs field_ | [`ItemType`](ItemType.md)
static final var __CommandBlock__ <br> _CommandBlock field_ | [`ItemType`](ItemType.md)
static final var __Beacon__ <br> _Beacon field_ | [`ItemType`](ItemType.md)
static final var __CobblestoneWall__ <br> _CobblestoneWall field_ | [`ItemType`](ItemType.md)
static final var __MossyCobbleWall__ <br> _MossyCobbleWall field_ | [`ItemType`](ItemType.md)
static final var __Carrots__ <br> _Carrots field_ | [`ItemType`](ItemType.md)
static final var __Potatoes__ <br> _Potatoes field_ | [`ItemType`](ItemType.md)
static final var __WoodenButton__ <br> _WoodenButton field_ | [`ItemType`](ItemType.md)
static final var __Anvil__ <br> _Anvil field_ | [`ItemType`](ItemType.md)
static final var __TrappedChest__ <br> _TrappedChest field_ | [`ItemType`](ItemType.md)
static final var __LightWeightedPressurePlate__ <br> _LightWeightedPressurePlate field_ | [`ItemType`](ItemType.md)
static final var __HeavyWeightedPressurePlate__ <br> _HeavyWeightedPressurePlate field_ | [`ItemType`](ItemType.md)
static final var __DaylightSensor__ <br> _DaylightSensor field_ | [`ItemType`](ItemType.md)
static final var __RedstoneBlock__ <br> _RedstoneBlock field_ | [`ItemType`](ItemType.md)
static final var __NetherQuartzOre__ <br> _NetherQuartzOre field_ | [`ItemType`](ItemType.md)
static final var __Hopper__ <br> _Hopper field_ | [`ItemType`](ItemType.md)
static final var __QuartzBlock__ <br> _QuartzBlock field_ | [`ItemType`](ItemType.md)
static final var __OrnateQuartzBlock__ <br> _OrnateQuartzBlock field_ | [`ItemType`](ItemType.md)
static final var __QuartzPillarVertical__ <br> _QuartzPillarVertical field_ | [`ItemType`](ItemType.md)
static final var __QuartzPillarHorizontal__ <br> _QuartzPillarHorizontal field_ | [`ItemType`](ItemType.md)
static final var __QuartzPillarCap__ <br> _QuartzPillarCap field_ | [`ItemType`](ItemType.md)
static final var __QuartzStairs__ <br> _QuartzStairs field_ | [`ItemType`](ItemType.md)
static final var __ActivatorRail__ <br> _ActivatorRail field_ | [`ItemType`](ItemType.md)
static final var __Dropper__ <br> _Dropper field_ | [`ItemType`](ItemType.md)
static final var __WhiteStainedClay__ <br> _WhiteStainedClay field_ | [`ItemType`](ItemType.md)
static final var __OrangeStainedClay__ <br> _OrangeStainedClay field_ | [`ItemType`](ItemType.md)
static final var __MagentaStainedClay__ <br> _MagentaStainedClay field_ | [`ItemType`](ItemType.md)
static final var __LightBlueStainedClay__ <br> _LightBlueStainedClay field_ | [`ItemType`](ItemType.md)
static final var __YellowStainedClay__ <br> _YellowStainedClay field_ | [`ItemType`](ItemType.md)
static final var __LimeStainedClay__ <br> _LimeStainedClay field_ | [`ItemType`](ItemType.md)
static final var __PinkStainedClay__ <br> _PinkStainedClay field_ | [`ItemType`](ItemType.md)
static final var __GrayStainedClay__ <br> _GrayStainedClay field_ | [`ItemType`](ItemType.md)
static final var __LightGrayStainedClay__ <br> _LightGrayStainedClay field_ | [`ItemType`](ItemType.md)
static final var __CyanStainedClay__ <br> _CyanStainedClay field_ | [`ItemType`](ItemType.md)
static final var __PurpleStainedClay__ <br> _PurpleStainedClay field_ | [`ItemType`](ItemType.md)
static final var __BlueStainedClay__ <br> _BlueStainedClay field_ | [`ItemType`](ItemType.md)
static final var __BrownStainedClay__ <br> _BrownStainedClay field_ | [`ItemType`](ItemType.md)
static final var __GreenStainedClay__ <br> _GreenStainedClay field_ | [`ItemType`](ItemType.md)
static final var __RedStainedClay__ <br> _RedStainedClay field_ | [`ItemType`](ItemType.md)
static final var __BlackStainedClay__ <br> _BlackStainedClay field_ | [`ItemType`](ItemType.md)
static final var __WhiteGlassPane__ <br> _WhiteGlassPane field_ | [`ItemType`](ItemType.md)
static final var __OrangeGlassPane__ <br> _OrangeGlassPane field_ | [`ItemType`](ItemType.md)
static final var __MagentaGlassPane__ <br> _MagentaGlassPane field_ | [`ItemType`](ItemType.md)
static final var __LightBlueGlassPane__ <br> _LightBlueGlassPane field_ | [`ItemType`](ItemType.md)
static final var __YellowGlassPane__ <br> _YellowGlassPane field_ | [`ItemType`](ItemType.md)
static final var __LimeGlassPane__ <br> _LimeGlassPane field_ | [`ItemType`](ItemType.md)
static final var __PinkGlassPane__ <br> _PinkGlassPane field_ | [`ItemType`](ItemType.md)
static final var __GrayGlassPane__ <br> _GrayGlassPane field_ | [`ItemType`](ItemType.md)
static final var __LightGrayGlassPane__ <br> _LightGrayGlassPane field_ | [`ItemType`](ItemType.md)
static final var __CyanGlassPane__ <br> _CyanGlassPane field_ | [`ItemType`](ItemType.md)
static final var __PurpleGlassPane__ <br> _PurpleGlassPane field_ | [`ItemType`](ItemType.md)
static final var __BlueGlassPane__ <br> _BlueGlassPane field_ | [`ItemType`](ItemType.md)
static final var __BrownGlassPane__ <br> _BrownGlassPane field_ | [`ItemType`](ItemType.md)
static final var __GreenGlassPane__ <br> _GreenGlassPane field_ | [`ItemType`](ItemType.md)
static final var __RedGlassPane__ <br> _RedGlassPane field_ | [`ItemType`](ItemType.md)
static final var __BlackGlassPane__ <br> _BlackGlassPane field_ | [`ItemType`](ItemType.md)
static final var __AcaciaLeaves__ <br> _AcaciaLeaves field_ | [`ItemType`](ItemType.md)
static final var __DarkOakLeaves__ <br> _DarkOakLeaves field_ | [`ItemType`](ItemType.md)
static final var __AcaciaLog__ <br> _AcaciaLog field_ | [`ItemType`](ItemType.md)
static final var __DarkOakLog__ <br> _DarkOakLog field_ | [`ItemType`](ItemType.md)
static final var __AcaciaStairs__ <br> _AcaciaStairs field_ | [`ItemType`](ItemType.md)
static final var __DarkOakStairs__ <br> _DarkOakStairs field_ | [`ItemType`](ItemType.md)
static final var __HayBale__ <br> _HayBale field_ | [`ItemType`](ItemType.md)
static final var __WhiteCarpet__ <br> _WhiteCarpet field_ | [`ItemType`](ItemType.md)
static final var __OrangeCarpet__ <br> _OrangeCarpet field_ | [`ItemType`](ItemType.md)
static final var __MagentaCarpet__ <br> _MagentaCarpet field_ | [`ItemType`](ItemType.md)
static final var __LightBlueCarpet__ <br> _LightBlueCarpet field_ | [`ItemType`](ItemType.md)
static final var __YellowCarpet__ <br> _YellowCarpet field_ | [`ItemType`](ItemType.md)
static final var __LimeCarpet__ <br> _LimeCarpet field_ | [`ItemType`](ItemType.md)
static final var __PinkCarpet__ <br> _PinkCarpet field_ | [`ItemType`](ItemType.md)
static final var __GrayCarpet__ <br> _GrayCarpet field_ | [`ItemType`](ItemType.md)
static final var __LightGrayCarpet__ <br> _LightGrayCarpet field_ | [`ItemType`](ItemType.md)
static final var __CyanCarpet__ <br> _CyanCarpet field_ | [`ItemType`](ItemType.md)
static final var __PurpleCarpet__ <br> _PurpleCarpet field_ | [`ItemType`](ItemType.md)
static final var __BlueCarpet__ <br> _BlueCarpet field_ | [`ItemType`](ItemType.md)
static final var __BrownCarpet__ <br> _BrownCarpet field_ | [`ItemType`](ItemType.md)
static final var __GreenCarpet__ <br> _GreenCarpet field_ | [`ItemType`](ItemType.md)
static final var __RedCarpet__ <br> _RedCarpet field_ | [`ItemType`](ItemType.md)
static final var __BlackCarpet__ <br> _BlackCarpet field_ | [`ItemType`](ItemType.md)
static final var __HardenedClay__ <br> _HardenedClay field_ | [`ItemType`](ItemType.md)
static final var __CoalBlock__ <br> _CoalBlock field_ | [`ItemType`](ItemType.md)
static final var __PackedIce__ <br> _PackedIce field_ | [`ItemType`](ItemType.md)
static final var __Sunflower__ <br> _Sunflower field_ | [`ItemType`](ItemType.md)
static final var __Lilac__ <br> _Lilac field_ | [`ItemType`](ItemType.md)
static final var __DoubleGrass__ <br> _DoubleGrass field_ | [`ItemType`](ItemType.md)
static final var __LargeFern__ <br> _LargeFern field_ | [`ItemType`](ItemType.md)
static final var __RoseBush__ <br> _RoseBush field_ | [`ItemType`](ItemType.md)
static final var __Peony__ <br> _Peony field_ | [`ItemType`](ItemType.md)
static final var __RedSandstone__ <br> _RedSandstone field_ | [`ItemType`](ItemType.md)
static final var __RedSandstoneOrnate__ <br> _RedSandstoneOrnate field_ | [`ItemType`](ItemType.md)
static final var __RedSandstoneBlank__ <br> _RedSandstoneBlank field_ | [`ItemType`](ItemType.md)
static final var __RedSandstoneStairs__ <br> _RedSandstoneStairs field_ | [`ItemType`](ItemType.md)
static final var __RedSandstoneSlab__ <br> _RedSandstoneSlab field_ | [`ItemType`](ItemType.md)
static final var __DoubleRedSandstoneSlab__ <br> _DoubleRedSandstoneSlab field_ | [`ItemType`](ItemType.md)
static final var __SpruceFenceGate__ <br> _SpruceFenceGate field_ | [`ItemType`](ItemType.md)
static final var __BirchFenceGate__ <br> _BirchFenceGate field_ | [`ItemType`](ItemType.md)
static final var __JungleFenceGate__ <br> _JungleFenceGate field_ | [`ItemType`](ItemType.md)
static final var __DarkOakFenceGate__ <br> _DarkOakFenceGate field_ | [`ItemType`](ItemType.md)
static final var __AcaciaFenceGate__ <br> _AcaciaFenceGate field_ | [`ItemType`](ItemType.md)
static final var __SpruceFence__ <br> _SpruceFence field_ | [`ItemType`](ItemType.md)
static final var __BirchFence__ <br> _BirchFence field_ | [`ItemType`](ItemType.md)
static final var __JungleFence__ <br> _JungleFence field_ | [`ItemType`](ItemType.md)
static final var __DarkOakFence__ <br> _DarkOakFence field_ | [`ItemType`](ItemType.md)
static final var __AcaciaFence__ <br> _AcaciaFence field_ | [`ItemType`](ItemType.md)
static final var __IronSpade__ <br> _IronSpade field_ | [`ItemType`](ItemType.md)
static final var __IronPickaxe__ <br> _IronPickaxe field_ | [`ItemType`](ItemType.md)
static final var __IronAxe__ <br> _IronAxe field_ | [`ItemType`](ItemType.md)
static final var __FlintAndSteel__ <br> _FlintAndSteel field_ | [`ItemType`](ItemType.md)
static final var __Apple__ <br> _Apple field_ | [`ItemType`](ItemType.md)
static final var __Bow__ <br> _Bow field_ | [`ItemType`](ItemType.md)
static final var __Arrow__ <br> _Arrow field_ | [`ItemType`](ItemType.md)
static final var __Coal__ <br> _Coal field_ | [`ItemType`](ItemType.md)
static final var __Charcoal__ <br> _Charcoal field_ | [`ItemType`](ItemType.md)
static final var __Diamond__ <br> _Diamond field_ | [`ItemType`](ItemType.md)
static final var __IronIngot__ <br> _IronIngot field_ | [`ItemType`](ItemType.md)
static final var __GoldIngot__ <br> _GoldIngot field_ | [`ItemType`](ItemType.md)
static final var __IronSword__ <br> _IronSword field_ | [`ItemType`](ItemType.md)
static final var __WoodSword__ <br> _WoodSword field_ | [`ItemType`](ItemType.md)
static final var __WoodSpade__ <br> _WoodSpade field_ | [`ItemType`](ItemType.md)
static final var __WoodPickaxe__ <br> _WoodPickaxe field_ | [`ItemType`](ItemType.md)
static final var __WoodAxe__ <br> _WoodAxe field_ | [`ItemType`](ItemType.md)
static final var __StoneSword__ <br> _StoneSword field_ | [`ItemType`](ItemType.md)
static final var __StoneSpade__ <br> _StoneSpade field_ | [`ItemType`](ItemType.md)
static final var __StonePickaxe__ <br> _StonePickaxe field_ | [`ItemType`](ItemType.md)
static final var __StoneAxe__ <br> _StoneAxe field_ | [`ItemType`](ItemType.md)
static final var __DiamondSword__ <br> _DiamondSword field_ | [`ItemType`](ItemType.md)
static final var __DiamondSpade__ <br> _DiamondSpade field_ | [`ItemType`](ItemType.md)
static final var __DiamondPickaxe__ <br> _DiamondPickaxe field_ | [`ItemType`](ItemType.md)
static final var __DiamondAxe__ <br> _DiamondAxe field_ | [`ItemType`](ItemType.md)
static final var __Stick__ <br> _Stick field_ | [`ItemType`](ItemType.md)
static final var __Bowl__ <br> _Bowl field_ | [`ItemType`](ItemType.md)
static final var __MushroomSoup__ <br> _MushroomSoup field_ | [`ItemType`](ItemType.md)
static final var __GoldSword__ <br> _GoldSword field_ | [`ItemType`](ItemType.md)
static final var __GoldSpade__ <br> _GoldSpade field_ | [`ItemType`](ItemType.md)
static final var __GoldPickaxe__ <br> _GoldPickaxe field_ | [`ItemType`](ItemType.md)
static final var __GoldAxe__ <br> _GoldAxe field_ | [`ItemType`](ItemType.md)
static final var __String__ <br> _String field_ | [`ItemType`](ItemType.md)
static final var __Feather__ <br> _Feather field_ | [`ItemType`](ItemType.md)
static final var __Gunpowder__ <br> _Gunpowder field_ | [`ItemType`](ItemType.md)
static final var __WoodHoe__ <br> _WoodHoe field_ | [`ItemType`](ItemType.md)
static final var __StoneHoe__ <br> _StoneHoe field_ | [`ItemType`](ItemType.md)
static final var __IronHoe__ <br> _IronHoe field_ | [`ItemType`](ItemType.md)
static final var __DiamondHoe__ <br> _DiamondHoe field_ | [`ItemType`](ItemType.md)
static final var __GoldHoe__ <br> _GoldHoe field_ | [`ItemType`](ItemType.md)
static final var __Seeds__ <br> _Seeds field_ | [`ItemType`](ItemType.md)
static final var __Wheat__ <br> _Wheat field_ | [`ItemType`](ItemType.md)
static final var __Bread__ <br> _Bread field_ | [`ItemType`](ItemType.md)
static final var __LeatherHelmet__ <br> _LeatherHelmet field_ | [`ItemType`](ItemType.md)
static final var __LeatherChestplate__ <br> _LeatherChestplate field_ | [`ItemType`](ItemType.md)
static final var __LeatherLeggings__ <br> _LeatherLeggings field_ | [`ItemType`](ItemType.md)
static final var __LeatherBoots__ <br> _LeatherBoots field_ | [`ItemType`](ItemType.md)
static final var __ChainmailHelmet__ <br> _ChainmailHelmet field_ | [`ItemType`](ItemType.md)
static final var __ChainmailChestplate__ <br> _ChainmailChestplate field_ | [`ItemType`](ItemType.md)
static final var __ChainmailLeggings__ <br> _ChainmailLeggings field_ | [`ItemType`](ItemType.md)
static final var __ChainmailBoots__ <br> _ChainmailBoots field_ | [`ItemType`](ItemType.md)
static final var __IronHelmet__ <br> _IronHelmet field_ | [`ItemType`](ItemType.md)
static final var __IronChestplate__ <br> _IronChestplate field_ | [`ItemType`](ItemType.md)
static final var __IronLeggings__ <br> _IronLeggings field_ | [`ItemType`](ItemType.md)
static final var __IronBoots__ <br> _IronBoots field_ | [`ItemType`](ItemType.md)
static final var __DiamondHelmet__ <br> _DiamondHelmet field_ | [`ItemType`](ItemType.md)
static final var __DiamondChestplate__ <br> _DiamondChestplate field_ | [`ItemType`](ItemType.md)
static final var __DiamondLeggings__ <br> _DiamondLeggings field_ | [`ItemType`](ItemType.md)
static final var __DiamondBoots__ <br> _DiamondBoots field_ | [`ItemType`](ItemType.md)
static final var __GoldHelmet__ <br> _GoldHelmet field_ | [`ItemType`](ItemType.md)
static final var __GoldChestplate__ <br> _GoldChestplate field_ | [`ItemType`](ItemType.md)
static final var __GoldLeggings__ <br> _GoldLeggings field_ | [`ItemType`](ItemType.md)
static final var __GoldBoots__ <br> _GoldBoots field_ | [`ItemType`](ItemType.md)
static final var __Flint__ <br> _Flint field_ | [`ItemType`](ItemType.md)
static final var __Pork__ <br> _Pork field_ | [`ItemType`](ItemType.md)
static final var __GrilledPork__ <br> _GrilledPork field_ | [`ItemType`](ItemType.md)
static final var __Painting__ <br> _Painting field_ | [`ItemType`](ItemType.md)
static final var __GoldenApple__ <br> _GoldenApple field_ | [`ItemType`](ItemType.md)
static final var __Sign__ <br> _Sign field_ | [`ItemType`](ItemType.md)
static final var __WoodDoor__ <br> _WoodDoor field_ | [`ItemType`](ItemType.md)
static final var __Bucket__ <br> _Bucket field_ | [`ItemType`](ItemType.md)
static final var __WaterBucket__ <br> _WaterBucket field_ | [`ItemType`](ItemType.md)
static final var __LavaBucket__ <br> _LavaBucket field_ | [`ItemType`](ItemType.md)
static final var __Minecart__ <br> _Minecart field_ | [`ItemType`](ItemType.md)
static final var __Saddle__ <br> _Saddle field_ | [`ItemType`](ItemType.md)
static final var __IronDoor__ <br> _IronDoor field_ | [`ItemType`](ItemType.md)
static final var __RedStone__ <br> _RedStone field_ | [`ItemType`](ItemType.md)
static final var __SnowBall__ <br> _SnowBall field_ | [`ItemType`](ItemType.md)
static final var __Boat__ <br> _Boat field_ | [`ItemType`](ItemType.md)
static final var __Leather__ <br> _Leather field_ | [`ItemType`](ItemType.md)
static final var __MilkBucket__ <br> _MilkBucket field_ | [`ItemType`](ItemType.md)
static final var __ClayBrick__ <br> _ClayBrick field_ | [`ItemType`](ItemType.md)
static final var __ClayBall__ <br> _ClayBall field_ | [`ItemType`](ItemType.md)
static final var __Reed__ <br> _Reed field_ | [`ItemType`](ItemType.md)
static final var __Paper__ <br> _Paper field_ | [`ItemType`](ItemType.md)
static final var __Book__ <br> _Book field_ | [`ItemType`](ItemType.md)
static final var __SlimeBall__ <br> _SlimeBall field_ | [`ItemType`](ItemType.md)
static final var __StorageMinecart__ <br> _StorageMinecart field_ | [`ItemType`](ItemType.md)
static final var __PoweredMinecart__ <br> _PoweredMinecart field_ | [`ItemType`](ItemType.md)
static final var __Egg__ <br> _Egg field_ | [`ItemType`](ItemType.md)
static final var __Compass__ <br> _Compass field_ | [`ItemType`](ItemType.md)
static final var __FishingRod__ <br> _FishingRod field_ | [`ItemType`](ItemType.md)
static final var __Watch__ <br> _Watch field_ | [`ItemType`](ItemType.md)
static final var __GlowstoneDust__ <br> _GlowstoneDust field_ | [`ItemType`](ItemType.md)
static final var __RawFish__ <br> _RawFish field_ | [`ItemType`](ItemType.md)
static final var __RawSalmon__ <br> _RawSalmon field_ | [`ItemType`](ItemType.md)
static final var __ClownFish__ <br> _ClownFish field_ | [`ItemType`](ItemType.md)
static final var __PufferFish__ <br> _PufferFish field_ | [`ItemType`](ItemType.md)
static final var __CookedFish__ <br> _CookedFish field_ | [`ItemType`](ItemType.md)
static final var __CookedSalmon__ <br> _CookedSalmon field_ | [`ItemType`](ItemType.md)
static final var __CookedClownFish__ <br> _CookedClownFish field_ | [`ItemType`](ItemType.md)
static final var __CookedPufferFish__ <br> _CookedPufferFish field_ | [`ItemType`](ItemType.md)
static final var __InkSack__ <br> _InkSack field_ | [`ItemType`](ItemType.md)
static final var __RoseRed__ <br> _RoseRed field_ | [`ItemType`](ItemType.md)
static final var __CactusGreen__ <br> _CactusGreen field_ | [`ItemType`](ItemType.md)
static final var __CocoaBeans__ <br> _CocoaBeans field_ | [`ItemType`](ItemType.md)
static final var __LapisLazuli__ <br> _LapisLazuli field_ | [`ItemType`](ItemType.md)
static final var __PurpleDye__ <br> _PurpleDye field_ | [`ItemType`](ItemType.md)
static final var __CyanDye__ <br> _CyanDye field_ | [`ItemType`](ItemType.md)
static final var __LightGrayDye__ <br> _LightGrayDye field_ | [`ItemType`](ItemType.md)
static final var __GrayDye__ <br> _GrayDye field_ | [`ItemType`](ItemType.md)
static final var __PinkDye__ <br> _PinkDye field_ | [`ItemType`](ItemType.md)
static final var __LimeDye__ <br> _LimeDye field_ | [`ItemType`](ItemType.md)
static final var __DandelionYellow__ <br> _DandelionYellow field_ | [`ItemType`](ItemType.md)
static final var __LightBlueDye__ <br> _LightBlueDye field_ | [`ItemType`](ItemType.md)
static final var __MagentaDye__ <br> _MagentaDye field_ | [`ItemType`](ItemType.md)
static final var __OrangeDye__ <br> _OrangeDye field_ | [`ItemType`](ItemType.md)
static final var __Bonemeal__ <br> _Bonemeal field_ | [`ItemType`](ItemType.md)
static final var __Bone__ <br> _Bone field_ | [`ItemType`](ItemType.md)
static final var __Sugar__ <br> _Sugar field_ | [`ItemType`](ItemType.md)
static final var __Cake__ <br> _Cake field_ | [`ItemType`](ItemType.md)
static final var __Bed__ <br> _Bed field_ | [`ItemType`](ItemType.md)
static final var __RedstoneRepeater__ <br> _RedstoneRepeater field_ | [`ItemType`](ItemType.md)
static final var __Cookie__ <br> _Cookie field_ | [`ItemType`](ItemType.md)
static final var __Map__ <br> _Map field_ | [`ItemType`](ItemType.md)
static final var __Shears__ <br> _Shears field_ | [`ItemType`](ItemType.md)
static final var __MelonSlice__ <br> _MelonSlice field_ | [`ItemType`](ItemType.md)
static final var __PumpkinSeeds__ <br> _PumpkinSeeds field_ | [`ItemType`](ItemType.md)
static final var __MelonSeeds__ <br> _MelonSeeds field_ | [`ItemType`](ItemType.md)
static final var __RawBeef__ <br> _RawBeef field_ | [`ItemType`](ItemType.md)
static final var __Steak__ <br> _Steak field_ | [`ItemType`](ItemType.md)
static final var __RawChicken__ <br> _RawChicken field_ | [`ItemType`](ItemType.md)
static final var __CookedChicken__ <br> _CookedChicken field_ | [`ItemType`](ItemType.md)
static final var __RottenFlesh__ <br> _RottenFlesh field_ | [`ItemType`](ItemType.md)
static final var __EnderPearl__ <br> _EnderPearl field_ | [`ItemType`](ItemType.md)
static final var __BlazeRod__ <br> _BlazeRod field_ | [`ItemType`](ItemType.md)
static final var __GhastTear__ <br> _GhastTear field_ | [`ItemType`](ItemType.md)
static final var __GoldNugget__ <br> _GoldNugget field_ | [`ItemType`](ItemType.md)
static final var __NetherWart__ <br> _NetherWart field_ | [`ItemType`](ItemType.md)
static final var __Potion__ <br> _Potion field_ | [`ItemType`](ItemType.md)
static final var __GlassBottle__ <br> _GlassBottle field_ | [`ItemType`](ItemType.md)
static final var __SpiderEye__ <br> _SpiderEye field_ | [`ItemType`](ItemType.md)
static final var __FermentedSpiderEye__ <br> _FermentedSpiderEye field_ | [`ItemType`](ItemType.md)
static final var __BlazePowder__ <br> _BlazePowder field_ | [`ItemType`](ItemType.md)
static final var __MagmaCream__ <br> _MagmaCream field_ | [`ItemType`](ItemType.md)
static final var __BrewingStand__ <br> _BrewingStand field_ | [`ItemType`](ItemType.md)
static final var __Cauldron__ <br> _Cauldron field_ | [`ItemType`](ItemType.md)
static final var __EyeofEnder__ <br> _EyeofEnder field_ | [`ItemType`](ItemType.md)
static final var __GlisteringMelon__ <br> _GlisteringMelon field_ | [`ItemType`](ItemType.md)
static final var __SpawnEgg__ <br> _SpawnEgg field_ | [`ItemType`](ItemType.md)
static final var __BottleOEnchanting__ <br> _BottleOEnchanting field_ | [`ItemType`](ItemType.md)
static final var __FireCharge__ <br> _FireCharge field_ | [`ItemType`](ItemType.md)
static final var __BookAndQuill__ <br> _BookAndQuill field_ | [`ItemType`](ItemType.md)
static final var __WrittenBook__ <br> _WrittenBook field_ | [`ItemType`](ItemType.md)
static final var __Emerald__ <br> _Emerald field_ | [`ItemType`](ItemType.md)
static final var __ItemFrame__ <br> _ItemFrame field_ | [`ItemType`](ItemType.md)
static final var __FlowerPot__ <br> _FlowerPot field_ | [`ItemType`](ItemType.md)
static final var __Carrot__ <br> _Carrot field_ | [`ItemType`](ItemType.md)
static final var __Potato__ <br> _Potato field_ | [`ItemType`](ItemType.md)
static final var __BakedPotato__ <br> _BakedPotato field_ | [`ItemType`](ItemType.md)
static final var __PoisonousPotato__ <br> _PoisonousPotato field_ | [`ItemType`](ItemType.md)
static final var __EmptyMap__ <br> _EmptyMap field_ | [`ItemType`](ItemType.md)
static final var __GoldenCarrot__ <br> _GoldenCarrot field_ | [`ItemType`](ItemType.md)
static final var __SkeletonHead__ <br> _SkeletonHead field_ | [`ItemType`](ItemType.md)
static final var __WitherSkeletonHead__ <br> _WitherSkeletonHead field_ | [`ItemType`](ItemType.md)
static final var __ZombieHead__ <br> _ZombieHead field_ | [`ItemType`](ItemType.md)
static final var __HumanHead__ <br> _HumanHead field_ | [`ItemType`](ItemType.md)
static final var __CreeperHead__ <br> _CreeperHead field_ | [`ItemType`](ItemType.md)
static final var __CarrotOnAStick__ <br> _CarrotOnAStick field_ | [`ItemType`](ItemType.md)
static final var __NetherStar__ <br> _NetherStar field_ | [`ItemType`](ItemType.md)
static final var __PumpkinPie__ <br> _PumpkinPie field_ | [`ItemType`](ItemType.md)
static final var __FireworkRocket__ <br> _FireworkRocket field_ | [`ItemType`](ItemType.md)
static final var __FireworkStar__ <br> _FireworkStar field_ | [`ItemType`](ItemType.md)
static final var __EnchantedBook__ <br> _EnchantedBook field_ | [`ItemType`](ItemType.md)
static final var __RedstoneComparator__ <br> _RedstoneComparator field_ | [`ItemType`](ItemType.md)
static final var __NetherBricks__ <br> _NetherBricks field_ | [`ItemType`](ItemType.md)
static final var __NetherQuartz__ <br> _NetherQuartz field_ | [`ItemType`](ItemType.md)
static final var __MinecartTNT__ <br> _MinecartTNT field_ | [`ItemType`](ItemType.md)
static final var __MinecartHopper__ <br> _MinecartHopper field_ | [`ItemType`](ItemType.md)
static final var __PrismarineShard__ <br> _PrismarineShard field_ | [`ItemType`](ItemType.md)
static final var __PrismarineCrystals__ <br> _PrismarineCrystals field_ | [`ItemType`](ItemType.md)
static final var __RawRabbit__ <br> _RawRabbit field_ | [`ItemType`](ItemType.md)
static final var __CookedRabbit__ <br> _CookedRabbit field_ | [`ItemType`](ItemType.md)
static final var __RabbitStew__ <br> _RabbitStew field_ | [`ItemType`](ItemType.md)
static final var __RabbitFoot__ <br> _RabbitFoot field_ | [`ItemType`](ItemType.md)
static final var __RabbitHide__ <br> _RabbitHide field_ | [`ItemType`](ItemType.md)
static final var __ArmorStand__ <br> _ArmorStand field_ | [`ItemType`](ItemType.md)
static final var __IronHorseArmor__ <br> _IronHorseArmor field_ | [`ItemType`](ItemType.md)
static final var __GoldHorseArmor__ <br> _GoldHorseArmor field_ | [`ItemType`](ItemType.md)
static final var __DiamondHorseArmor__ <br> _DiamondHorseArmor field_ | [`ItemType`](ItemType.md)
static final var __Lead__ <br> _Lead field_ | [`ItemType`](ItemType.md)
static final var __NameTag__ <br> _NameTag field_ | [`ItemType`](ItemType.md)
static final var __MinecartCommandBlock__ <br> _MinecartCommandBlock field_ | [`ItemType`](ItemType.md)
static final var __RawMutton__ <br> _RawMutton field_ | [`ItemType`](ItemType.md)
static final var __CookedMutton__ <br> _CookedMutton field_ | [`ItemType`](ItemType.md)
static final var __Banner__ <br> _Banner field_ | [`ItemType`](ItemType.md)
static final var __SpruceDoor__ <br> _SpruceDoor field_ | [`ItemType`](ItemType.md)
static final var __BirchDoor__ <br> _BirchDoor field_ | [`ItemType`](ItemType.md)
static final var __JungleDoor__ <br> _JungleDoor field_ | [`ItemType`](ItemType.md)
static final var __AcaciaDoor__ <br> _AcaciaDoor field_ | [`ItemType`](ItemType.md)
static final var __DarkOakDoor__ <br> _DarkOakDoor field_ | [`ItemType`](ItemType.md)
static final var __GoldRecord__ <br> _GoldRecord field_ | [`ItemType`](ItemType.md)
static final var __GreenRecord__ <br> _GreenRecord field_ | [`ItemType`](ItemType.md)
static final var __BlocksRecord__ <br> _BlocksRecord field_ | [`ItemType`](ItemType.md)
static final var __ChirpRecord__ <br> _ChirpRecord field_ | [`ItemType`](ItemType.md)
static final var __FarRecord__ <br> _FarRecord field_ | [`ItemType`](ItemType.md)
static final var __MallRecord__ <br> _MallRecord field_ | [`ItemType`](ItemType.md)
static final var __MellohiRecord__ <br> _MellohiRecord field_ | [`ItemType`](ItemType.md)
static final var __StalRecord__ <br> _StalRecord field_ | [`ItemType`](ItemType.md)
static final var __StradRecord__ <br> _StradRecord field_ | [`ItemType`](ItemType.md)
static final var __WardRecord__ <br> _WardRecord field_ | [`ItemType`](ItemType.md)
static final var __ElevenRecord__ <br> _ElevenRecord field_ | [`ItemType`](ItemType.md)
static final var __WaitRecord__ <br> _WaitRecord field_ | [`ItemType`](ItemType.md)



---

### Public Constructors for [`ItemType`](ItemType.md)

##### <a id='itemtype'></a>new __ItemType__(id) 

_ItemType constructor_

Argument | Type | Description  
--- | --- | --- 
id | `int` | id argument

##### <a id='itemtype'></a>new __ItemType__(id, data) 

_ItemType constructor_

Argument | Type | Description  
--- | --- | --- 
id | `int` | id argument
data | `int` | data argument

##### <a id='itemtype'></a>new __ItemType__(id, name) 

_ItemType constructor_

Argument | Type | Description  
--- | --- | --- 
id | `int` | id argument
name | `String` | name argument

##### <a id='itemtype'></a>new __ItemType__(id, isBlockCreating) 

_ItemType constructor_

Argument | Type | Description  
--- | --- | --- 
id | `int` | id argument
isBlockCreating | `boolean` | isBlockCreating argument

##### <a id='itemtype'></a>new __ItemType__(id, data, name) 

_ItemType constructor_

Argument | Type | Description  
--- | --- | --- 
id | `int` | id argument
data | `int` | data argument
name | `String` | name argument

##### <a id='itemtype'></a>new __ItemType__(id, isBlockCreating, machineName) 

_ItemType constructor_

Argument | Type | Description  
--- | --- | --- 
id | `int` | id argument
isBlockCreating | `boolean` | isBlockCreating argument
machineName | `String` | machineName argument

##### <a id='itemtype'></a>new __ItemType__(id, data, isBlockCreating, machineName) 

_ItemType constructor_

Argument | Type | Description  
--- | --- | --- 
id | `int` | id argument
data | `int` | data argument
isBlockCreating | `boolean` | isBlockCreating argument
machineName | `String` | machineName argument

---

### Public Properties for [`ItemType`](ItemType.md)

##### <a id='id'></a>public  readonly property __Id__

_Get: Get the ID of this ItemType_

Get | Description
--- | --- 
`int` | the id



##### <a id='data'></a>public  readonly property __Data__

_Get: Get the data of the ItemType_

Get | Description
--- | --- 
`int` | the data



##### <a id='machinename'></a>public  readonly property __MachineName__

_Get: Returns a "machine readable" name. That is: a representation of the Item Type name in lowercase letters without whitespaces._

Get | Description
--- | --- 
`String` | the machine name



---

### Public Methods for [`ItemType`](ItemType.md)

##### <a id='fromidanddata'></a>public static function __fromIdAndData__(id, data)

_Gets an ItemType according to the given ID and Data values. This will return null if there is no ItemType with this id._

Argument | Type | Description  
--- | --- | --- 
id | `int` | the id to get type from
data | `int` | the data (damage) to get type from

Returns | Description
--- | --- 
[`ItemType`](ItemType.md) | the ItemType if found; `null` if not


##### <a id='getcustomitemtype'></a>public static function __getCustomItemType__(name)

_Get a custom ItemType._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the machine name or the display name of the block type in question

Returns | Description
--- | --- 
[`ItemType`](ItemType.md) | the ItemType if found; `null` if the requested ItemType does not exist.


##### <a id='getcustomitemtype'></a>public static function __getCustomItemType__(name, data)

_Get a custom ItemType._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the machine name of the block type in question
data | `int` | the data of the block type in question

Returns | Description
--- | --- 
[`ItemType`](ItemType.md) | the ItemType if found; `null` if the requested ItemType does not exist.


##### <a id='fromstring'></a>public static function __fromString__(name)

_Returns an ItemType according to its name. This returns null if there is no ItemType with this name._

Argument | Type | Description  
--- | --- | --- 
name | `String` | The machine name or the display name

Returns | Description
--- | --- 
[`ItemType`](ItemType.md) | the ItemType if found; `null` if not


##### <a id='fromid'></a>public static function __fromId__(id)

_Get the ItemType according to the given ID. This will return null if there is no ItemType with this id._

Argument | Type | Description  
--- | --- | --- 
id | `int` | the id to get type from

Returns | Description
--- | --- 
[`ItemType`](ItemType.md) | the ItemType if found; `null` if not


##### <a id='fromstringanddata'></a>public static function __fromStringAndData__(machineName, data)

_Gets an ItemType according to the given machine name and data value. This will return null if there is no ItemType with this id._

Argument | Type | Description  
--- | --- | --- 
machineName | `String` | the machine name to get type from
data | `int` | the data (damage) to get type from

Returns | Description
--- | --- 
[`ItemType`](ItemType.md) | the ItemType if found; `null` if not


##### <a id='isblockcreating'></a>public static function __isBlockCreating__(itemId)

_Checks the Item ID if it is an Item that creates a Block_

Argument | Type | Description  
--- | --- | --- 
itemId | `int` | the Item ID to check

Returns | Description
--- | --- 
`boolean` | `true` if creates blocks; `false` if not


##### <a id='isblockcreating'></a>public  function __isBlockCreating__()

_isBlockCreating method_

Returns | 
--- | 
`boolean` |


##### <a id='values'></a>public static function __values__()

_Gets an array of all ItemTypes_

Returns | Description
--- | --- 
`ItemType[]` | all ItemTypes


---

### Public Fields for [`ItemType`](ItemType.md)

##### <a id='stone'></a>public static final var __Stone__

_Stone field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='granite'></a>public static final var __Granite__

_Granite field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='polishedgranite'></a>public static final var __PolishedGranite__

_PolishedGranite field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='diorite'></a>public static final var __Diorite__

_Diorite field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='polisheddiorite'></a>public static final var __PolishedDiorite__

_PolishedDiorite field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='andesite'></a>public static final var __Andesite__

_Andesite field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='polishedandesite'></a>public static final var __PolishedAndesite__

_PolishedAndesite field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='grass'></a>public static final var __Grass__

_Grass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='dirt'></a>public static final var __Dirt__

_Dirt field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='coarsedirt'></a>public static final var __CoarseDirt__

_CoarseDirt field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='podzol'></a>public static final var __Podzol__

_Podzol field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cobble'></a>public static final var __Cobble__

_Cobble field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='oakwood'></a>public static final var __OakWood__

_OakWood field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sprucewood'></a>public static final var __SpruceWood__

_SpruceWood field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='birchwood'></a>public static final var __BirchWood__

_BirchWood field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='junglewood'></a>public static final var __JungleWood__

_JungleWood field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='acaciawood'></a>public static final var __AcaciaWood__

_AcaciaWood field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='darkoakwood'></a>public static final var __DarkOakWood__

_DarkOakWood field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='oaksapling'></a>public static final var __OakSapling__

_OakSapling field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sprucesapling'></a>public static final var __SpruceSapling__

_SpruceSapling field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='birchsapling'></a>public static final var __BirchSapling__

_BirchSapling field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='junglesapling'></a>public static final var __JungleSapling__

_JungleSapling field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='acaciasapling'></a>public static final var __AcaciaSapling__

_AcaciaSapling field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='darkoaksapling'></a>public static final var __DarkOakSapling__

_DarkOakSapling field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='bedrock'></a>public static final var __Bedrock__

_Bedrock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='waterflowing'></a>public static final var __WaterFlowing__

_WaterFlowing field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='water'></a>public static final var __Water__

_Water field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lavaflowing'></a>public static final var __LavaFlowing__

_LavaFlowing field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lava'></a>public static final var __Lava__

_Lava field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sand'></a>public static final var __Sand__

_Sand field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='gravel'></a>public static final var __Gravel__

_Gravel field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldore'></a>public static final var __GoldOre__

_GoldOre field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ironore'></a>public static final var __IronOre__

_IronOre field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='coalore'></a>public static final var __CoalOre__

_CoalOre field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='oaklog'></a>public static final var __OakLog__

_OakLog field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='pinelog'></a>public static final var __PineLog__

_PineLog field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='birchlog'></a>public static final var __BirchLog__

_BirchLog field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='junglelog'></a>public static final var __JungleLog__

_JungleLog field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='oakleaves'></a>public static final var __OakLeaves__

_OakLeaves field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='pineleaves'></a>public static final var __PineLeaves__

_PineLeaves field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='birchleaves'></a>public static final var __BirchLeaves__

_BirchLeaves field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='jungleleaves'></a>public static final var __JungleLeaves__

_JungleLeaves field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sponge'></a>public static final var __Sponge__

_Sponge field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='glass'></a>public static final var __Glass__

_Glass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lapislazuliore'></a>public static final var __LapislazuliOre__

_LapislazuliOre field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lapisblock'></a>public static final var __LapisBlock__

_LapisBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='dispenser'></a>public static final var __Dispenser__

_Dispenser field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sandstone'></a>public static final var __Sandstone__

_Sandstone field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sandstoneornate'></a>public static final var __SandstoneOrnate__

_SandstoneOrnate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sandstoneblank'></a>public static final var __SandstoneBlank__

_SandstoneBlank field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='noteblock'></a>public static final var __NoteBlock__

_NoteBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='poweredrail'></a>public static final var __PoweredRail__

_PoweredRail field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='detectorrail'></a>public static final var __DetectorRail__

_DetectorRail field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stickypiston'></a>public static final var __StickyPiston__

_StickyPiston field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='spiderweb'></a>public static final var __SpiderWeb__

_SpiderWeb field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='shrub'></a>public static final var __Shrub__

_Shrub field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='tallgrass'></a>public static final var __TallGrass__

_TallGrass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='tallfern'></a>public static final var __TallFern__

_TallFern field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='deadbush'></a>public static final var __DeadBush__

_DeadBush field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='piston'></a>public static final var __Piston__

_Piston field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woolwhite'></a>public static final var __WoolWhite__

_WoolWhite field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woolorange'></a>public static final var __WoolOrange__

_WoolOrange field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woolmagenta'></a>public static final var __WoolMagenta__

_WoolMagenta field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woollightblue'></a>public static final var __WoolLightBlue__

_WoolLightBlue field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woolyellow'></a>public static final var __WoolYellow__

_WoolYellow field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woollightgreen'></a>public static final var __WoolLightGreen__

_WoolLightGreen field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woolpink'></a>public static final var __WoolPink__

_WoolPink field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woolgray'></a>public static final var __WoolGray__

_WoolGray field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woollightgray'></a>public static final var __WoolLightGray__

_WoolLightGray field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woolcyan'></a>public static final var __WoolCyan__

_WoolCyan field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woolpurple'></a>public static final var __WoolPurple__

_WoolPurple field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woolblue'></a>public static final var __WoolBlue__

_WoolBlue field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woolbrown'></a>public static final var __WoolBrown__

_WoolBrown field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='wooldarkgreen'></a>public static final var __WoolDarkGreen__

_WoolDarkGreen field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woolred'></a>public static final var __WoolRed__

_WoolRed field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woolblack'></a>public static final var __WoolBlack__

_WoolBlack field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='yellowflower'></a>public static final var __YellowFlower__

_YellowFlower field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='poppy'></a>public static final var __Poppy__

_Poppy field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='blueorchid'></a>public static final var __BlueOrchid__

_BlueOrchid field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='allium'></a>public static final var __Allium__

_Allium field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='azurebluet'></a>public static final var __AzureBluet__

_AzureBluet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redtulip'></a>public static final var __RedTulip__

_RedTulip field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='orangetulip'></a>public static final var __OrangeTulip__

_OrangeTulip field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='whitetulip'></a>public static final var __WhiteTulip__

_WhiteTulip field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='pinktulip'></a>public static final var __PinkTulip__

_PinkTulip field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='oxeyedaisy'></a>public static final var __OxeyeDaisy__

_OxeyeDaisy field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='brownmushroom'></a>public static final var __BrownMushroom__

_BrownMushroom field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redmushroom'></a>public static final var __RedMushroom__

_RedMushroom field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldblock'></a>public static final var __GoldBlock__

_GoldBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ironblock'></a>public static final var __IronBlock__

_IronBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doubleornatestoneslab'></a>public static final var __DoubleOrnateStoneSlab__

_DoubleOrnateStoneSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doublesandstonetrimslab'></a>public static final var __DoubleSandStoneTrimSlab__

_DoubleSandStoneTrimSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doublewoodslab'></a>public static final var __DoubleWoodSlab__

_DoubleWoodSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doublecobbleslab'></a>public static final var __DoubleCobbleSlab__

_DoubleCobbleSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doublebrickblockslab'></a>public static final var __DoubleBrickBlockSlab__

_DoubleBrickBlockSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doublestonebricksslab'></a>public static final var __DoubleStoneBricksSlab__

_DoubleStoneBricksSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doublenetherbrickslab'></a>public static final var __DoubleNetherBrickSlab__

_DoubleNetherBrickSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doublequartzslab'></a>public static final var __DoubleQuartzSlab__

_DoubleQuartzSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doublestoneslab'></a>public static final var __DoubleStoneSlab__

_DoubleStoneSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doublesandstoneslab'></a>public static final var __DoubleSandstoneSlab__

_DoubleSandstoneSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ornatestoneslab'></a>public static final var __OrnateStoneSlab__

_OrnateStoneSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sandstonetrimslab'></a>public static final var __SandStoneTrimSlab__

_SandStoneTrimSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woodslab'></a>public static final var __WoodSlab__

_WoodSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cobbleslab'></a>public static final var __CobbleSlab__

_CobbleSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='brickslab'></a>public static final var __BrickSlab__

_BrickSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stonebricksslab'></a>public static final var __StoneBricksSlab__

_StoneBricksSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='netherbricksslab'></a>public static final var __NetherBricksSlab__

_NetherBricksSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='quartzslab'></a>public static final var __QuartzSlab__

_QuartzSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stoneslab'></a>public static final var __StoneSlab__

_StoneSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sandstoneslab'></a>public static final var __SandstoneSlab__

_SandstoneSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='brickblock'></a>public static final var __BrickBlock__

_BrickBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='tnt'></a>public static final var __Tnt__

_Tnt field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='bookshelf'></a>public static final var __Bookshelf__

_Bookshelf field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='mossycobble'></a>public static final var __MossyCobble__

_MossyCobble field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='obsidian'></a>public static final var __Obsidian__

_Obsidian field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='torch'></a>public static final var __Torch__

_Torch field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='fireblock'></a>public static final var __FireBlock__

_FireBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='mobspawner'></a>public static final var __MobSpawner__

_MobSpawner field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woodenstairs'></a>public static final var __WoodenStairs__

_WoodenStairs field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='chest'></a>public static final var __Chest__

_Chest field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='diamondore'></a>public static final var __DiamondOre__

_DiamondOre field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='diamondblock'></a>public static final var __DiamondBlock__

_DiamondBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='workbench'></a>public static final var __Workbench__

_Workbench field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='soil'></a>public static final var __Soil__

_Soil field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='furnace'></a>public static final var __Furnace__

_Furnace field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='burningfurnace'></a>public static final var __BurningFurnace__

_BurningFurnace field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ladder'></a>public static final var __Ladder__

_Ladder field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='rail'></a>public static final var __Rail__

_Rail field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cobblestairs'></a>public static final var __CobbleStairs__

_CobbleStairs field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lever'></a>public static final var __Lever__

_Lever field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stoneplate'></a>public static final var __StonePlate__

_StonePlate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woodplate'></a>public static final var __WoodPlate__

_WoodPlate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redstoneore'></a>public static final var __RedstoneOre__

_RedstoneOre field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redstonetorchon'></a>public static final var __RedstoneTorchOn__

_RedstoneTorchOn field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stonebutton'></a>public static final var __StoneButton__

_StoneButton field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='snow'></a>public static final var __Snow__

_Snow field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ice'></a>public static final var __Ice__

_Ice field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='snowblock'></a>public static final var __SnowBlock__

_SnowBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cactus'></a>public static final var __Cactus__

_Cactus field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='clay'></a>public static final var __Clay__

_Clay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='jukebox'></a>public static final var __Jukebox__

_Jukebox field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='fence'></a>public static final var __Fence__

_Fence field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='pumpkin'></a>public static final var __Pumpkin__

_Pumpkin field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='netherrack'></a>public static final var __Netherrack__

_Netherrack field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='soulsand'></a>public static final var __SoulSand__

_SoulSand field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='glowstone'></a>public static final var __GlowStone__

_GlowStone field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='portal'></a>public static final var __Portal__

_Portal field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='jackolantern'></a>public static final var __JackOLantern__

_JackOLantern field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='whiteglass'></a>public static final var __WhiteGlass__

_WhiteGlass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='orangeglass'></a>public static final var __OrangeGlass__

_OrangeGlass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='magentaglass'></a>public static final var __MagentaGlass__

_MagentaGlass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lightblueglass'></a>public static final var __LightBlueGlass__

_LightBlueGlass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='yellowglass'></a>public static final var __YellowGlass__

_YellowGlass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='limeglass'></a>public static final var __LimeGlass__

_LimeGlass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='pinkglass'></a>public static final var __PinkGlass__

_PinkGlass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='grayglass'></a>public static final var __GrayGlass__

_GrayGlass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lightgrayglass'></a>public static final var __LightGrayGlass__

_LightGrayGlass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cyanglass'></a>public static final var __CyanGlass__

_CyanGlass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='purpleglass'></a>public static final var __PurpleGlass__

_PurpleGlass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='blueglass'></a>public static final var __BlueGlass__

_BlueGlass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='brownglass'></a>public static final var __BrownGlass__

_BrownGlass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='greenglass'></a>public static final var __GreenGlass__

_GreenGlass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redglass'></a>public static final var __RedGlass__

_RedGlass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='blackglass'></a>public static final var __BlackGlass__

_BlackGlass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='trapdoor'></a>public static final var __Trapdoor__

_Trapdoor field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stonesilverfishblock'></a>public static final var __StoneSilverFishBlock__

_StoneSilverFishBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cobblesilverfishblock'></a>public static final var __CobbleSilverFishBlock__

_CobbleSilverFishBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stonebricksilverfishblock'></a>public static final var __StoneBrickSilverFishBlock__

_StoneBrickSilverFishBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='mossybricksilverfishblock'></a>public static final var __MossyBrickSilverFishBlock__

_MossyBrickSilverFishBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='crackedsilverfishblock'></a>public static final var __CrackedSilverFishBlock__

_CrackedSilverFishBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ornatesilverfishblock'></a>public static final var __OrnateSilverFishBlock__

_OrnateSilverFishBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stonebrick'></a>public static final var __StoneBrick__

_StoneBrick field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='mossystonebrick'></a>public static final var __MossyStoneBrick__

_MossyStoneBrick field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='crackedstonebrick'></a>public static final var __CrackedStoneBrick__

_CrackedStoneBrick field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ornatestonebrick'></a>public static final var __OrnateStoneBrick__

_OrnateStoneBrick field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='hugebrownmushroom'></a>public static final var __HugeBrownMushroom__

_HugeBrownMushroom field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='hugeredmushroom'></a>public static final var __HugeRedMushroom__

_HugeRedMushroom field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ironbars'></a>public static final var __IronBars__

_IronBars field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='glasspane'></a>public static final var __GlassPane__

_GlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='melon'></a>public static final var __Melon__

_Melon field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='vines'></a>public static final var __Vines__

_Vines field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='fencegate'></a>public static final var __FenceGate__

_FenceGate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='brickstairs'></a>public static final var __BrickStairs__

_BrickStairs field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stonebrickstairs'></a>public static final var __StoneBrickStairs__

_StoneBrickStairs field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='mycelium'></a>public static final var __Mycelium__

_Mycelium field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lilypad'></a>public static final var __Lilypad__

_Lilypad field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='netherbrick'></a>public static final var __NetherBrick__

_NetherBrick field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='netherbrickfence'></a>public static final var __NetherBrickFence__

_NetherBrickFence field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='netherbrickstairs'></a>public static final var __NetherBrickStairs__

_NetherBrickStairs field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='enchantmenttable'></a>public static final var __EnchantmentTable__

_EnchantmentTable field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='endportal'></a>public static final var __EndPortal__

_EndPortal field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='endportalframe'></a>public static final var __EndPortalFrame__

_EndPortalFrame field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='endstone'></a>public static final var __EndStone__

_EndStone field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='enderdragonegg'></a>public static final var __EnderDragonEgg__

_EnderDragonEgg field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redstonelampoff'></a>public static final var __RedstoneLampOff__

_RedstoneLampOff field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doubleoakwoodslab'></a>public static final var __DoubleOakWoodSlab__

_DoubleOakWoodSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doublesprucewoodslab'></a>public static final var __DoubleSpruceWoodSlab__

_DoubleSpruceWoodSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doublebirchwoodslab'></a>public static final var __DoubleBirchWoodSlab__

_DoubleBirchWoodSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doublejunglewoodslab'></a>public static final var __DoubleJungleWoodSlab__

_DoubleJungleWoodSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doubleacaciawoodslab'></a>public static final var __DoubleAcaciaWoodSlab__

_DoubleAcaciaWoodSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doubledarkoakwoodslab'></a>public static final var __DoubleDarkOakWoodSlab__

_DoubleDarkOakWoodSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='oakwoodslab'></a>public static final var __OakWoodSlab__

_OakWoodSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sprucewoodslab'></a>public static final var __SpruceWoodSlab__

_SpruceWoodSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='birchwoodslab'></a>public static final var __BirchWoodSlab__

_BirchWoodSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='junglewoodslab'></a>public static final var __JungleWoodSlab__

_JungleWoodSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='acaciawoodslab'></a>public static final var __AcaciaWoodSlab__

_AcaciaWoodSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='darkoakwoodslab'></a>public static final var __DarkOakWoodSlab__

_DarkOakWoodSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cocoaplant'></a>public static final var __CocoaPlant__

_CocoaPlant field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sandstonestairs'></a>public static final var __SandstoneStairs__

_SandstoneStairs field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='emeraldore'></a>public static final var __EmeraldOre__

_EmeraldOre field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='enderchest'></a>public static final var __EnderChest__

_EnderChest field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='tripwirehook'></a>public static final var __TripwireHook__

_TripwireHook field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='emeraldblock'></a>public static final var __EmeraldBlock__

_EmeraldBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='pinewoodstairs'></a>public static final var __PineWoodStairs__

_PineWoodStairs field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='birchwoodstairs'></a>public static final var __BirchWoodStairs__

_BirchWoodStairs field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='junglewoodstairs'></a>public static final var __JungleWoodStairs__

_JungleWoodStairs field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='commandblock'></a>public static final var __CommandBlock__

_CommandBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='beacon'></a>public static final var __Beacon__

_Beacon field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cobblestonewall'></a>public static final var __CobblestoneWall__

_CobblestoneWall field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='mossycobblewall'></a>public static final var __MossyCobbleWall__

_MossyCobbleWall field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='carrots'></a>public static final var __Carrots__

_Carrots field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='potatoes'></a>public static final var __Potatoes__

_Potatoes field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woodenbutton'></a>public static final var __WoodenButton__

_WoodenButton field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='anvil'></a>public static final var __Anvil__

_Anvil field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='trappedchest'></a>public static final var __TrappedChest__

_TrappedChest field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lightweightedpressureplate'></a>public static final var __LightWeightedPressurePlate__

_LightWeightedPressurePlate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='heavyweightedpressureplate'></a>public static final var __HeavyWeightedPressurePlate__

_HeavyWeightedPressurePlate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='daylightsensor'></a>public static final var __DaylightSensor__

_DaylightSensor field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redstoneblock'></a>public static final var __RedstoneBlock__

_RedstoneBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='netherquartzore'></a>public static final var __NetherQuartzOre__

_NetherQuartzOre field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='hopper'></a>public static final var __Hopper__

_Hopper field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='quartzblock'></a>public static final var __QuartzBlock__

_QuartzBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ornatequartzblock'></a>public static final var __OrnateQuartzBlock__

_OrnateQuartzBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='quartzpillarvertical'></a>public static final var __QuartzPillarVertical__

_QuartzPillarVertical field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='quartzpillarhorizontal'></a>public static final var __QuartzPillarHorizontal__

_QuartzPillarHorizontal field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='quartzpillarcap'></a>public static final var __QuartzPillarCap__

_QuartzPillarCap field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='quartzstairs'></a>public static final var __QuartzStairs__

_QuartzStairs field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='activatorrail'></a>public static final var __ActivatorRail__

_ActivatorRail field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='dropper'></a>public static final var __Dropper__

_Dropper field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='whitestainedclay'></a>public static final var __WhiteStainedClay__

_WhiteStainedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='orangestainedclay'></a>public static final var __OrangeStainedClay__

_OrangeStainedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='magentastainedclay'></a>public static final var __MagentaStainedClay__

_MagentaStainedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lightbluestainedclay'></a>public static final var __LightBlueStainedClay__

_LightBlueStainedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='yellowstainedclay'></a>public static final var __YellowStainedClay__

_YellowStainedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='limestainedclay'></a>public static final var __LimeStainedClay__

_LimeStainedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='pinkstainedclay'></a>public static final var __PinkStainedClay__

_PinkStainedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='graystainedclay'></a>public static final var __GrayStainedClay__

_GrayStainedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lightgraystainedclay'></a>public static final var __LightGrayStainedClay__

_LightGrayStainedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cyanstainedclay'></a>public static final var __CyanStainedClay__

_CyanStainedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='purplestainedclay'></a>public static final var __PurpleStainedClay__

_PurpleStainedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='bluestainedclay'></a>public static final var __BlueStainedClay__

_BlueStainedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='brownstainedclay'></a>public static final var __BrownStainedClay__

_BrownStainedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='greenstainedclay'></a>public static final var __GreenStainedClay__

_GreenStainedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redstainedclay'></a>public static final var __RedStainedClay__

_RedStainedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='blackstainedclay'></a>public static final var __BlackStainedClay__

_BlackStainedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='whiteglasspane'></a>public static final var __WhiteGlassPane__

_WhiteGlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='orangeglasspane'></a>public static final var __OrangeGlassPane__

_OrangeGlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='magentaglasspane'></a>public static final var __MagentaGlassPane__

_MagentaGlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lightblueglasspane'></a>public static final var __LightBlueGlassPane__

_LightBlueGlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='yellowglasspane'></a>public static final var __YellowGlassPane__

_YellowGlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='limeglasspane'></a>public static final var __LimeGlassPane__

_LimeGlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='pinkglasspane'></a>public static final var __PinkGlassPane__

_PinkGlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='grayglasspane'></a>public static final var __GrayGlassPane__

_GrayGlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lightgrayglasspane'></a>public static final var __LightGrayGlassPane__

_LightGrayGlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cyanglasspane'></a>public static final var __CyanGlassPane__

_CyanGlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='purpleglasspane'></a>public static final var __PurpleGlassPane__

_PurpleGlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='blueglasspane'></a>public static final var __BlueGlassPane__

_BlueGlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='brownglasspane'></a>public static final var __BrownGlassPane__

_BrownGlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='greenglasspane'></a>public static final var __GreenGlassPane__

_GreenGlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redglasspane'></a>public static final var __RedGlassPane__

_RedGlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='blackglasspane'></a>public static final var __BlackGlassPane__

_BlackGlassPane field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='acacialeaves'></a>public static final var __AcaciaLeaves__

_AcaciaLeaves field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='darkoakleaves'></a>public static final var __DarkOakLeaves__

_DarkOakLeaves field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='acacialog'></a>public static final var __AcaciaLog__

_AcaciaLog field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='darkoaklog'></a>public static final var __DarkOakLog__

_DarkOakLog field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='acaciastairs'></a>public static final var __AcaciaStairs__

_AcaciaStairs field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='darkoakstairs'></a>public static final var __DarkOakStairs__

_DarkOakStairs field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='haybale'></a>public static final var __HayBale__

_HayBale field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='whitecarpet'></a>public static final var __WhiteCarpet__

_WhiteCarpet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='orangecarpet'></a>public static final var __OrangeCarpet__

_OrangeCarpet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='magentacarpet'></a>public static final var __MagentaCarpet__

_MagentaCarpet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lightbluecarpet'></a>public static final var __LightBlueCarpet__

_LightBlueCarpet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='yellowcarpet'></a>public static final var __YellowCarpet__

_YellowCarpet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='limecarpet'></a>public static final var __LimeCarpet__

_LimeCarpet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='pinkcarpet'></a>public static final var __PinkCarpet__

_PinkCarpet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='graycarpet'></a>public static final var __GrayCarpet__

_GrayCarpet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lightgraycarpet'></a>public static final var __LightGrayCarpet__

_LightGrayCarpet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cyancarpet'></a>public static final var __CyanCarpet__

_CyanCarpet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='purplecarpet'></a>public static final var __PurpleCarpet__

_PurpleCarpet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='bluecarpet'></a>public static final var __BlueCarpet__

_BlueCarpet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='browncarpet'></a>public static final var __BrownCarpet__

_BrownCarpet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='greencarpet'></a>public static final var __GreenCarpet__

_GreenCarpet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redcarpet'></a>public static final var __RedCarpet__

_RedCarpet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='blackcarpet'></a>public static final var __BlackCarpet__

_BlackCarpet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='hardenedclay'></a>public static final var __HardenedClay__

_HardenedClay field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='coalblock'></a>public static final var __CoalBlock__

_CoalBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='packedice'></a>public static final var __PackedIce__

_PackedIce field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sunflower'></a>public static final var __Sunflower__

_Sunflower field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lilac'></a>public static final var __Lilac__

_Lilac field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doublegrass'></a>public static final var __DoubleGrass__

_DoubleGrass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='largefern'></a>public static final var __LargeFern__

_LargeFern field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='rosebush'></a>public static final var __RoseBush__

_RoseBush field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='peony'></a>public static final var __Peony__

_Peony field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redsandstone'></a>public static final var __RedSandstone__

_RedSandstone field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redsandstoneornate'></a>public static final var __RedSandstoneOrnate__

_RedSandstoneOrnate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redsandstoneblank'></a>public static final var __RedSandstoneBlank__

_RedSandstoneBlank field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redsandstonestairs'></a>public static final var __RedSandstoneStairs__

_RedSandstoneStairs field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redsandstoneslab'></a>public static final var __RedSandstoneSlab__

_RedSandstoneSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='doubleredsandstoneslab'></a>public static final var __DoubleRedSandstoneSlab__

_DoubleRedSandstoneSlab field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sprucefencegate'></a>public static final var __SpruceFenceGate__

_SpruceFenceGate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='birchfencegate'></a>public static final var __BirchFenceGate__

_BirchFenceGate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='junglefencegate'></a>public static final var __JungleFenceGate__

_JungleFenceGate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='darkoakfencegate'></a>public static final var __DarkOakFenceGate__

_DarkOakFenceGate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='acaciafencegate'></a>public static final var __AcaciaFenceGate__

_AcaciaFenceGate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sprucefence'></a>public static final var __SpruceFence__

_SpruceFence field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='birchfence'></a>public static final var __BirchFence__

_BirchFence field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='junglefence'></a>public static final var __JungleFence__

_JungleFence field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='darkoakfence'></a>public static final var __DarkOakFence__

_DarkOakFence field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='acaciafence'></a>public static final var __AcaciaFence__

_AcaciaFence field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ironspade'></a>public static final var __IronSpade__

_IronSpade field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ironpickaxe'></a>public static final var __IronPickaxe__

_IronPickaxe field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ironaxe'></a>public static final var __IronAxe__

_IronAxe field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='flintandsteel'></a>public static final var __FlintAndSteel__

_FlintAndSteel field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='apple'></a>public static final var __Apple__

_Apple field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='bow'></a>public static final var __Bow__

_Bow field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='arrow'></a>public static final var __Arrow__

_Arrow field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='coal'></a>public static final var __Coal__

_Coal field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='charcoal'></a>public static final var __Charcoal__

_Charcoal field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='diamond'></a>public static final var __Diamond__

_Diamond field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ironingot'></a>public static final var __IronIngot__

_IronIngot field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldingot'></a>public static final var __GoldIngot__

_GoldIngot field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ironsword'></a>public static final var __IronSword__

_IronSword field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woodsword'></a>public static final var __WoodSword__

_WoodSword field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woodspade'></a>public static final var __WoodSpade__

_WoodSpade field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woodpickaxe'></a>public static final var __WoodPickaxe__

_WoodPickaxe field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woodaxe'></a>public static final var __WoodAxe__

_WoodAxe field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stonesword'></a>public static final var __StoneSword__

_StoneSword field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stonespade'></a>public static final var __StoneSpade__

_StoneSpade field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stonepickaxe'></a>public static final var __StonePickaxe__

_StonePickaxe field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stoneaxe'></a>public static final var __StoneAxe__

_StoneAxe field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='diamondsword'></a>public static final var __DiamondSword__

_DiamondSword field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='diamondspade'></a>public static final var __DiamondSpade__

_DiamondSpade field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='diamondpickaxe'></a>public static final var __DiamondPickaxe__

_DiamondPickaxe field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='diamondaxe'></a>public static final var __DiamondAxe__

_DiamondAxe field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stick'></a>public static final var __Stick__

_Stick field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='bowl'></a>public static final var __Bowl__

_Bowl field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='mushroomsoup'></a>public static final var __MushroomSoup__

_MushroomSoup field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldsword'></a>public static final var __GoldSword__

_GoldSword field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldspade'></a>public static final var __GoldSpade__

_GoldSpade field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldpickaxe'></a>public static final var __GoldPickaxe__

_GoldPickaxe field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldaxe'></a>public static final var __GoldAxe__

_GoldAxe field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='string'></a>public static final var __String__

_String field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='feather'></a>public static final var __Feather__

_Feather field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='gunpowder'></a>public static final var __Gunpowder__

_Gunpowder field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='woodhoe'></a>public static final var __WoodHoe__

_WoodHoe field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stonehoe'></a>public static final var __StoneHoe__

_StoneHoe field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ironhoe'></a>public static final var __IronHoe__

_IronHoe field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='diamondhoe'></a>public static final var __DiamondHoe__

_DiamondHoe field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldhoe'></a>public static final var __GoldHoe__

_GoldHoe field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='seeds'></a>public static final var __Seeds__

_Seeds field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='wheat'></a>public static final var __Wheat__

_Wheat field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='bread'></a>public static final var __Bread__

_Bread field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='leatherhelmet'></a>public static final var __LeatherHelmet__

_LeatherHelmet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='leatherchestplate'></a>public static final var __LeatherChestplate__

_LeatherChestplate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='leatherleggings'></a>public static final var __LeatherLeggings__

_LeatherLeggings field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='leatherboots'></a>public static final var __LeatherBoots__

_LeatherBoots field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='chainmailhelmet'></a>public static final var __ChainmailHelmet__

_ChainmailHelmet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='chainmailchestplate'></a>public static final var __ChainmailChestplate__

_ChainmailChestplate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='chainmailleggings'></a>public static final var __ChainmailLeggings__

_ChainmailLeggings field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='chainmailboots'></a>public static final var __ChainmailBoots__

_ChainmailBoots field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ironhelmet'></a>public static final var __IronHelmet__

_IronHelmet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ironchestplate'></a>public static final var __IronChestplate__

_IronChestplate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ironleggings'></a>public static final var __IronLeggings__

_IronLeggings field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ironboots'></a>public static final var __IronBoots__

_IronBoots field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='diamondhelmet'></a>public static final var __DiamondHelmet__

_DiamondHelmet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='diamondchestplate'></a>public static final var __DiamondChestplate__

_DiamondChestplate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='diamondleggings'></a>public static final var __DiamondLeggings__

_DiamondLeggings field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='diamondboots'></a>public static final var __DiamondBoots__

_DiamondBoots field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldhelmet'></a>public static final var __GoldHelmet__

_GoldHelmet field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldchestplate'></a>public static final var __GoldChestplate__

_GoldChestplate field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldleggings'></a>public static final var __GoldLeggings__

_GoldLeggings field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldboots'></a>public static final var __GoldBoots__

_GoldBoots field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='flint'></a>public static final var __Flint__

_Flint field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='pork'></a>public static final var __Pork__

_Pork field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='grilledpork'></a>public static final var __GrilledPork__

_GrilledPork field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='painting'></a>public static final var __Painting__

_Painting field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldenapple'></a>public static final var __GoldenApple__

_GoldenApple field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sign'></a>public static final var __Sign__

_Sign field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='wooddoor'></a>public static final var __WoodDoor__

_WoodDoor field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='bucket'></a>public static final var __Bucket__

_Bucket field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='waterbucket'></a>public static final var __WaterBucket__

_WaterBucket field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lavabucket'></a>public static final var __LavaBucket__

_LavaBucket field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='minecart'></a>public static final var __Minecart__

_Minecart field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='saddle'></a>public static final var __Saddle__

_Saddle field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='irondoor'></a>public static final var __IronDoor__

_IronDoor field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redstone'></a>public static final var __RedStone__

_RedStone field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='snowball'></a>public static final var __SnowBall__

_SnowBall field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='boat'></a>public static final var __Boat__

_Boat field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='leather'></a>public static final var __Leather__

_Leather field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='milkbucket'></a>public static final var __MilkBucket__

_MilkBucket field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='claybrick'></a>public static final var __ClayBrick__

_ClayBrick field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='clayball'></a>public static final var __ClayBall__

_ClayBall field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='reed'></a>public static final var __Reed__

_Reed field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='paper'></a>public static final var __Paper__

_Paper field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='book'></a>public static final var __Book__

_Book field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='slimeball'></a>public static final var __SlimeBall__

_SlimeBall field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='storageminecart'></a>public static final var __StorageMinecart__

_StorageMinecart field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='poweredminecart'></a>public static final var __PoweredMinecart__

_PoweredMinecart field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='egg'></a>public static final var __Egg__

_Egg field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='compass'></a>public static final var __Compass__

_Compass field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='fishingrod'></a>public static final var __FishingRod__

_FishingRod field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='watch'></a>public static final var __Watch__

_Watch field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='glowstonedust'></a>public static final var __GlowstoneDust__

_GlowstoneDust field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='rawfish'></a>public static final var __RawFish__

_RawFish field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='rawsalmon'></a>public static final var __RawSalmon__

_RawSalmon field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='clownfish'></a>public static final var __ClownFish__

_ClownFish field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='pufferfish'></a>public static final var __PufferFish__

_PufferFish field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cookedfish'></a>public static final var __CookedFish__

_CookedFish field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cookedsalmon'></a>public static final var __CookedSalmon__

_CookedSalmon field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cookedclownfish'></a>public static final var __CookedClownFish__

_CookedClownFish field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cookedpufferfish'></a>public static final var __CookedPufferFish__

_CookedPufferFish field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='inksack'></a>public static final var __InkSack__

_InkSack field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='rosered'></a>public static final var __RoseRed__

_RoseRed field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cactusgreen'></a>public static final var __CactusGreen__

_CactusGreen field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cocoabeans'></a>public static final var __CocoaBeans__

_CocoaBeans field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lapislazuli'></a>public static final var __LapisLazuli__

_LapisLazuli field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='purpledye'></a>public static final var __PurpleDye__

_PurpleDye field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cyandye'></a>public static final var __CyanDye__

_CyanDye field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lightgraydye'></a>public static final var __LightGrayDye__

_LightGrayDye field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='graydye'></a>public static final var __GrayDye__

_GrayDye field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='pinkdye'></a>public static final var __PinkDye__

_PinkDye field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='limedye'></a>public static final var __LimeDye__

_LimeDye field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='dandelionyellow'></a>public static final var __DandelionYellow__

_DandelionYellow field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lightbluedye'></a>public static final var __LightBlueDye__

_LightBlueDye field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='magentadye'></a>public static final var __MagentaDye__

_MagentaDye field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='orangedye'></a>public static final var __OrangeDye__

_OrangeDye field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='bonemeal'></a>public static final var __Bonemeal__

_Bonemeal field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='bone'></a>public static final var __Bone__

_Bone field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sugar'></a>public static final var __Sugar__

_Sugar field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cake'></a>public static final var __Cake__

_Cake field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='bed'></a>public static final var __Bed__

_Bed field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redstonerepeater'></a>public static final var __RedstoneRepeater__

_RedstoneRepeater field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cookie'></a>public static final var __Cookie__

_Cookie field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='map'></a>public static final var __Map__

_Map field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='shears'></a>public static final var __Shears__

_Shears field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='melonslice'></a>public static final var __MelonSlice__

_MelonSlice field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='pumpkinseeds'></a>public static final var __PumpkinSeeds__

_PumpkinSeeds field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='melonseeds'></a>public static final var __MelonSeeds__

_MelonSeeds field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='rawbeef'></a>public static final var __RawBeef__

_RawBeef field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='steak'></a>public static final var __Steak__

_Steak field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='rawchicken'></a>public static final var __RawChicken__

_RawChicken field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cookedchicken'></a>public static final var __CookedChicken__

_CookedChicken field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='rottenflesh'></a>public static final var __RottenFlesh__

_RottenFlesh field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='enderpearl'></a>public static final var __EnderPearl__

_EnderPearl field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='blazerod'></a>public static final var __BlazeRod__

_BlazeRod field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ghasttear'></a>public static final var __GhastTear__

_GhastTear field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldnugget'></a>public static final var __GoldNugget__

_GoldNugget field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='netherwart'></a>public static final var __NetherWart__

_NetherWart field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='potion'></a>public static final var __Potion__

_Potion field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='glassbottle'></a>public static final var __GlassBottle__

_GlassBottle field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='spidereye'></a>public static final var __SpiderEye__

_SpiderEye field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='fermentedspidereye'></a>public static final var __FermentedSpiderEye__

_FermentedSpiderEye field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='blazepowder'></a>public static final var __BlazePowder__

_BlazePowder field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='magmacream'></a>public static final var __MagmaCream__

_MagmaCream field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='brewingstand'></a>public static final var __BrewingStand__

_BrewingStand field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cauldron'></a>public static final var __Cauldron__

_Cauldron field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='eyeofender'></a>public static final var __EyeofEnder__

_EyeofEnder field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='glisteringmelon'></a>public static final var __GlisteringMelon__

_GlisteringMelon field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='spawnegg'></a>public static final var __SpawnEgg__

_SpawnEgg field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='bottleoenchanting'></a>public static final var __BottleOEnchanting__

_BottleOEnchanting field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='firecharge'></a>public static final var __FireCharge__

_FireCharge field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='bookandquill'></a>public static final var __BookAndQuill__

_BookAndQuill field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='writtenbook'></a>public static final var __WrittenBook__

_WrittenBook field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='emerald'></a>public static final var __Emerald__

_Emerald field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='itemframe'></a>public static final var __ItemFrame__

_ItemFrame field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='flowerpot'></a>public static final var __FlowerPot__

_FlowerPot field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='carrot'></a>public static final var __Carrot__

_Carrot field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='potato'></a>public static final var __Potato__

_Potato field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='bakedpotato'></a>public static final var __BakedPotato__

_BakedPotato field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='poisonouspotato'></a>public static final var __PoisonousPotato__

_PoisonousPotato field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='emptymap'></a>public static final var __EmptyMap__

_EmptyMap field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldencarrot'></a>public static final var __GoldenCarrot__

_GoldenCarrot field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='skeletonhead'></a>public static final var __SkeletonHead__

_SkeletonHead field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='witherskeletonhead'></a>public static final var __WitherSkeletonHead__

_WitherSkeletonHead field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='zombiehead'></a>public static final var __ZombieHead__

_ZombieHead field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='humanhead'></a>public static final var __HumanHead__

_HumanHead field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='creeperhead'></a>public static final var __CreeperHead__

_CreeperHead field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='carrotonastick'></a>public static final var __CarrotOnAStick__

_CarrotOnAStick field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='netherstar'></a>public static final var __NetherStar__

_NetherStar field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='pumpkinpie'></a>public static final var __PumpkinPie__

_PumpkinPie field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='fireworkrocket'></a>public static final var __FireworkRocket__

_FireworkRocket field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='fireworkstar'></a>public static final var __FireworkStar__

_FireworkStar field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='enchantedbook'></a>public static final var __EnchantedBook__

_EnchantedBook field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='redstonecomparator'></a>public static final var __RedstoneComparator__

_RedstoneComparator field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='netherbricks'></a>public static final var __NetherBricks__

_NetherBricks field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='netherquartz'></a>public static final var __NetherQuartz__

_NetherQuartz field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='minecarttnt'></a>public static final var __MinecartTNT__

_MinecartTNT field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='minecarthopper'></a>public static final var __MinecartHopper__

_MinecartHopper field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='prismarineshard'></a>public static final var __PrismarineShard__

_PrismarineShard field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='prismarinecrystals'></a>public static final var __PrismarineCrystals__

_PrismarineCrystals field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='rawrabbit'></a>public static final var __RawRabbit__

_RawRabbit field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cookedrabbit'></a>public static final var __CookedRabbit__

_CookedRabbit field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='rabbitstew'></a>public static final var __RabbitStew__

_RabbitStew field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='rabbitfoot'></a>public static final var __RabbitFoot__

_RabbitFoot field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='rabbithide'></a>public static final var __RabbitHide__

_RabbitHide field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='armorstand'></a>public static final var __ArmorStand__

_ArmorStand field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='ironhorsearmor'></a>public static final var __IronHorseArmor__

_IronHorseArmor field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldhorsearmor'></a>public static final var __GoldHorseArmor__

_GoldHorseArmor field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='diamondhorsearmor'></a>public static final var __DiamondHorseArmor__

_DiamondHorseArmor field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='lead'></a>public static final var __Lead__

_Lead field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='nametag'></a>public static final var __NameTag__

_NameTag field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='minecartcommandblock'></a>public static final var __MinecartCommandBlock__

_MinecartCommandBlock field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='rawmutton'></a>public static final var __RawMutton__

_RawMutton field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='cookedmutton'></a>public static final var __CookedMutton__

_CookedMutton field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='banner'></a>public static final var __Banner__

_Banner field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='sprucedoor'></a>public static final var __SpruceDoor__

_SpruceDoor field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='birchdoor'></a>public static final var __BirchDoor__

_BirchDoor field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='jungledoor'></a>public static final var __JungleDoor__

_JungleDoor field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='acaciadoor'></a>public static final var __AcaciaDoor__

_AcaciaDoor field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='darkoakdoor'></a>public static final var __DarkOakDoor__

_DarkOakDoor field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='goldrecord'></a>public static final var __GoldRecord__

_GoldRecord field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='greenrecord'></a>public static final var __GreenRecord__

_GreenRecord field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='blocksrecord'></a>public static final var __BlocksRecord__

_BlocksRecord field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='chirprecord'></a>public static final var __ChirpRecord__

_ChirpRecord field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='farrecord'></a>public static final var __FarRecord__

_FarRecord field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='mallrecord'></a>public static final var __MallRecord__

_MallRecord field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='mellohirecord'></a>public static final var __MellohiRecord__

_MellohiRecord field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stalrecord'></a>public static final var __StalRecord__

_StalRecord field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='stradrecord'></a>public static final var __StradRecord__

_StradRecord field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='wardrecord'></a>public static final var __WardRecord__

_WardRecord field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='elevenrecord'></a>public static final var __ElevenRecord__

_ElevenRecord field_

>Returns
>  [`ItemType`](ItemType.md)

##### <a id='waitrecord'></a>public static final var __WaitRecord__

_WaitRecord field_

>Returns
>  [`ItemType`](ItemType.md)

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

