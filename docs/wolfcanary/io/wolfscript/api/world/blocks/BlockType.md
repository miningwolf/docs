## BlockType __class__

>io.wolfscript.api.world.blocks.BlockType

---

### Class Overview

Static class of BlockTypes

Method | Type   
--- | :--- 
new __BlockType__(id, machineName) <br> _BlockType constructor_ | _constructor_
new __BlockType__(id, machineName, mod) <br> _BlockType constructor_ | _constructor_
new __BlockType__(id, data, machineName) <br> _This will create this blockType and also add it to the BlockTypes cache,_ | _constructor_
 readonly property __Data__ <br> _Get: Get the ID of this BlockType_ | `short`
 readonly property __Id__ <br> _Get: Get the ID of this BlockType_ | `short`
 readonly property __MachineName__ <br> _Get: Returns a "machine readable" name._ | `String`
static function __fromIdAndData__(id, data) <br> _Get the BlockType according to the given ID and Data._ | [`BlockType`](BlockType.md)
 function __equals__(o) <br> _equals method_ | `boolean`
static function __fromStringAndData__(machineName, data) <br> _Returns a BlockType according to its name and data._ | [`BlockType`](BlockType.md)
static function __getCustomBlockType__(name) <br> _Get a custom block type._ | [`BlockType`](BlockType.md)
static function __getCustomBlockType__(name, data) <br> _Get a custom block type._ | [`BlockType`](BlockType.md)
static function __fromId__(id) <br> _Get the BlockType according to the given ID._ | [`BlockType`](BlockType.md)
static function __fromString__(name) <br> _Returns a BlockType according to its name._ | [`BlockType`](BlockType.md)
 function __hashCode__() <br> _hashCode method_ | `int`
 function __matches__() <br> _Checks BlockType for a given set of possible matches_ | `boolean`
 function __toString__() <br> _Returns a String formatted as "ID:DATA[MACHINENAME]"_ | `String`
static function __values__() <br> _Gets an array of all BlockTypes._ | `BlockType[]`
static final var __Air__ <br> _Air field_ | [`BlockType`](BlockType.md)
static final var __Stone__ <br> _Stone field_ | [`BlockType`](BlockType.md)
static final var __Granite__ <br> _Granite field_ | [`BlockType`](BlockType.md)
static final var __PolishedGranite__ <br> _PolishedGranite field_ | [`BlockType`](BlockType.md)
static final var __Diorite__ <br> _Diorite field_ | [`BlockType`](BlockType.md)
static final var __PolishedDiorite__ <br> _PolishedDiorite field_ | [`BlockType`](BlockType.md)
static final var __Andesite__ <br> _Andesite field_ | [`BlockType`](BlockType.md)
static final var __PolishedAndesite__ <br> _PolishedAndesite field_ | [`BlockType`](BlockType.md)
static final var __Grass__ <br> _Grass field_ | [`BlockType`](BlockType.md)
static final var __Dirt__ <br> _Dirt field_ | [`BlockType`](BlockType.md)
static final var __CoarseDirt__ <br> _CoarseDirt field_ | [`BlockType`](BlockType.md)
static final var __Podzol__ <br> _Podzol field_ | [`BlockType`](BlockType.md)
static final var __Cobble__ <br> _Cobble field_ | [`BlockType`](BlockType.md)
static final var __OakPlanks__ <br> _OakPlanks field_ | [`BlockType`](BlockType.md)
static final var __SprucePlanks__ <br> _SprucePlanks field_ | [`BlockType`](BlockType.md)
static final var __BirchPlanks__ <br> _BirchPlanks field_ | [`BlockType`](BlockType.md)
static final var __JunglePlanks__ <br> _JunglePlanks field_ | [`BlockType`](BlockType.md)
static final var __AcaciaPlanks__ <br> _AcaciaPlanks field_ | [`BlockType`](BlockType.md)
static final var __DarkOakPlanks__ <br> _DarkOakPlanks field_ | [`BlockType`](BlockType.md)
static final var __OakSapling__ <br> _OakSapling field_ | [`BlockType`](BlockType.md)
static final var __SpruceSapling__ <br> _SpruceSapling field_ | [`BlockType`](BlockType.md)
static final var __BirchSapling__ <br> _BirchSapling field_ | [`BlockType`](BlockType.md)
static final var __JungleSapling__ <br> _JungleSapling field_ | [`BlockType`](BlockType.md)
static final var __AcaciaSapling__ <br> _AcaciaSapling field_ | [`BlockType`](BlockType.md)
static final var __DarkOakSapling__ <br> _DarkOakSapling field_ | [`BlockType`](BlockType.md)
static final var __Bedrock__ <br> _Bedrock field_ | [`BlockType`](BlockType.md)
static final var __WaterFlowing__ <br> _WaterFlowing field_ | [`BlockType`](BlockType.md)
static final var __Water__ <br> _Water field_ | [`BlockType`](BlockType.md)
static final var __LavaFlowing__ <br> _LavaFlowing field_ | [`BlockType`](BlockType.md)
static final var __Lava__ <br> _Lava field_ | [`BlockType`](BlockType.md)
static final var __Sand__ <br> _Sand field_ | [`BlockType`](BlockType.md)
static final var __RedSand__ <br> _RedSand field_ | [`BlockType`](BlockType.md)
static final var __Gravel__ <br> _Gravel field_ | [`BlockType`](BlockType.md)
static final var __GoldOre__ <br> _GoldOre field_ | [`BlockType`](BlockType.md)
static final var __IronOre__ <br> _IronOre field_ | [`BlockType`](BlockType.md)
static final var __CoalOre__ <br> _CoalOre field_ | [`BlockType`](BlockType.md)
static final var __OakLog__ <br> _OakLog field_ | [`BlockType`](BlockType.md)
static final var __SpruceLog__ <br> _SpruceLog field_ | [`BlockType`](BlockType.md)
static final var __PineLog__ <br> _PineLog field_ | [`BlockType`](BlockType.md)
static final var __BirchLog__ <br> _BirchLog field_ | [`BlockType`](BlockType.md)
static final var __JungleLog__ <br> _JungleLog field_ | [`BlockType`](BlockType.md)
static final var __OakLeaves__ <br> _OakLeaves field_ | [`BlockType`](BlockType.md)
static final var __SpruceLeaves__ <br> _SpruceLeaves field_ | [`BlockType`](BlockType.md)
static final var __BirchLeaves__ <br> _BirchLeaves field_ | [`BlockType`](BlockType.md)
static final var __JungleLeaves__ <br> _JungleLeaves field_ | [`BlockType`](BlockType.md)
static final var __Sponge__ <br> _Sponge field_ | [`BlockType`](BlockType.md)
static final var __Glass__ <br> _Glass field_ | [`BlockType`](BlockType.md)
static final var __LapisOre__ <br> _LapisOre field_ | [`BlockType`](BlockType.md)
static final var __LapisBlock__ <br> _LapisBlock field_ | [`BlockType`](BlockType.md)
static final var __Dispenser__ <br> _Dispenser field_ | [`BlockType`](BlockType.md)
static final var __Sandstone__ <br> _Sandstone field_ | [`BlockType`](BlockType.md)
static final var __SandstoneChiseled__ <br> _SandstoneChiseled field_ | [`BlockType`](BlockType.md)
static final var __SandstoneSmooth__ <br> _SandstoneSmooth field_ | [`BlockType`](BlockType.md)
static final var __NoteBlock__ <br> _NoteBlock field_ | [`BlockType`](BlockType.md)
static final var __Bed__ <br> _Bed field_ | [`BlockType`](BlockType.md)
static final var __BedBlock__ <br> _BedBlock field_ | [`BlockType`](BlockType.md)
static final var __PoweredRail__ <br> _PoweredRail field_ | [`BlockType`](BlockType.md)
static final var __DetectorRail__ <br> _DetectorRail field_ | [`BlockType`](BlockType.md)
static final var __StickyPiston__ <br> _StickyPiston field_ | [`BlockType`](BlockType.md)
static final var __Web__ <br> _Web field_ | [`BlockType`](BlockType.md)
static final var __SpiderWeb__ <br> _SpiderWeb field_ | [`BlockType`](BlockType.md)
static final var __Shrub__ <br> _Shrub field_ | [`BlockType`](BlockType.md)
static final var __TallGrass__ <br> _TallGrass field_ | [`BlockType`](BlockType.md)
static final var __Fern__ <br> _Fern field_ | [`BlockType`](BlockType.md)
static final var __DeadBush__ <br> _DeadBush field_ | [`BlockType`](BlockType.md)
static final var __Piston__ <br> _Piston field_ | [`BlockType`](BlockType.md)
static final var __PistonHead__ <br> _PistonHead field_ | [`BlockType`](BlockType.md)
static final var __WhiteWool__ <br> _WhiteWool field_ | [`BlockType`](BlockType.md)
static final var __OrangeWool__ <br> _OrangeWool field_ | [`BlockType`](BlockType.md)
static final var __MagentaWool__ <br> _MagentaWool field_ | [`BlockType`](BlockType.md)
static final var __LightBlueWool__ <br> _LightBlueWool field_ | [`BlockType`](BlockType.md)
static final var __YellowWool__ <br> _YellowWool field_ | [`BlockType`](BlockType.md)
static final var __LimeWool__ <br> _LimeWool field_ | [`BlockType`](BlockType.md)
static final var __PinkWool__ <br> _PinkWool field_ | [`BlockType`](BlockType.md)
static final var __GrayWool__ <br> _GrayWool field_ | [`BlockType`](BlockType.md)
static final var __LightGrayWool__ <br> _LightGrayWool field_ | [`BlockType`](BlockType.md)
static final var __CyanWool__ <br> _CyanWool field_ | [`BlockType`](BlockType.md)
static final var __PurpleWool__ <br> _PurpleWool field_ | [`BlockType`](BlockType.md)
static final var __BlueWool__ <br> _BlueWool field_ | [`BlockType`](BlockType.md)
static final var __BrownWool__ <br> _BrownWool field_ | [`BlockType`](BlockType.md)
static final var __GreenWool__ <br> _GreenWool field_ | [`BlockType`](BlockType.md)
static final var __RedWool__ <br> _RedWool field_ | [`BlockType`](BlockType.md)
static final var __BlackWool__ <br> _BlackWool field_ | [`BlockType`](BlockType.md)
static final var __WoolWhite__ <br> _WoolWhite field_ | [`BlockType`](BlockType.md)
static final var __WoolOrange__ <br> _WoolOrange field_ | [`BlockType`](BlockType.md)
static final var __WoolMagenta__ <br> _WoolMagenta field_ | [`BlockType`](BlockType.md)
static final var __WoolLightBlue__ <br> _WoolLightBlue field_ | [`BlockType`](BlockType.md)
static final var __WoolYellow__ <br> _WoolYellow field_ | [`BlockType`](BlockType.md)
static final var __WoolLightGreen__ <br> _WoolLightGreen field_ | [`BlockType`](BlockType.md)
static final var __WoolPink__ <br> _WoolPink field_ | [`BlockType`](BlockType.md)
static final var __WoolGray__ <br> _WoolGray field_ | [`BlockType`](BlockType.md)
static final var __WoolLightGray__ <br> _WoolLightGray field_ | [`BlockType`](BlockType.md)
static final var __WoolCyan__ <br> _WoolCyan field_ | [`BlockType`](BlockType.md)
static final var __WoolPurple__ <br> _WoolPurple field_ | [`BlockType`](BlockType.md)
static final var __WoolBlue__ <br> _WoolBlue field_ | [`BlockType`](BlockType.md)
static final var __WoolBrown__ <br> _WoolBrown field_ | [`BlockType`](BlockType.md)
static final var __WoolDarkGreen__ <br> _WoolDarkGreen field_ | [`BlockType`](BlockType.md)
static final var __WoolRed__ <br> _WoolRed field_ | [`BlockType`](BlockType.md)
static final var __WoolBlack__ <br> _WoolBlack field_ | [`BlockType`](BlockType.md)
static final var __PistonExtended__ <br> _PistonExtended field_ | [`BlockType`](BlockType.md)
static final var __Dandelion__ <br> _Dandelion field_ | [`BlockType`](BlockType.md)
static final var __Poppy__ <br> _Poppy field_ | [`BlockType`](BlockType.md)
static final var __BlueOrchid__ <br> _BlueOrchid field_ | [`BlockType`](BlockType.md)
static final var __Allium__ <br> _Allium field_ | [`BlockType`](BlockType.md)
static final var __AzureBluet__ <br> _AzureBluet field_ | [`BlockType`](BlockType.md)
static final var __RedTulip__ <br> _RedTulip field_ | [`BlockType`](BlockType.md)
static final var __OrangeTulip__ <br> _OrangeTulip field_ | [`BlockType`](BlockType.md)
static final var __WhiteTulip__ <br> _WhiteTulip field_ | [`BlockType`](BlockType.md)
static final var __PinkTulip__ <br> _PinkTulip field_ | [`BlockType`](BlockType.md)
static final var __OxeyeDaisy__ <br> _OxeyeDaisy field_ | [`BlockType`](BlockType.md)
static final var __BrownMushroom__ <br> _BrownMushroom field_ | [`BlockType`](BlockType.md)
static final var __RedMushroom__ <br> _RedMushroom field_ | [`BlockType`](BlockType.md)
static final var __GoldBlock__ <br> _GoldBlock field_ | [`BlockType`](BlockType.md)
static final var __IronBlock__ <br> _IronBlock field_ | [`BlockType`](BlockType.md)
static final var __DoubleStoneSlab__ <br> _No longer seamless, see [`DoubleStoneSlabProperties`](properties/helpers/DoubleStoneSlabProperties.md)_ | [`BlockType`](BlockType.md)
static final var __DoubleSandStoneSlab__ <br> _No longer seamless, see [`DoubleStoneSlabProperties`](properties/helpers/DoubleStoneSlabProperties.md)_ | [`BlockType`](BlockType.md)
static final var __DoubleWoodSlab__ <br> _DoubleWoodSlab field_ | [`BlockType`](BlockType.md)
static final var __DoubleCobbleSlab__ <br> _DoubleCobbleSlab field_ | [`BlockType`](BlockType.md)
static final var __DoubleBrickSlab__ <br> _DoubleBrickSlab field_ | [`BlockType`](BlockType.md)
static final var __DoubleStoneBricksSlab__ <br> _DoubleStoneBricksSlab field_ | [`BlockType`](BlockType.md)
static final var __DoubleNetherBrickSlab__ <br> _DoubleNetherBrickSlab field_ | [`BlockType`](BlockType.md)
static final var __DoubleQuartzSlab__ <br> _DoubleQuartzSlab field_ | [`BlockType`](BlockType.md)
static final var __DoubleOrnateStoneSlab__ <br> _DoubleOrnateStoneSlab field_ | [`BlockType`](BlockType.md)
static final var __DoubleSandStoneTrimSlab__ <br> _DoubleSandStoneTrimSlab field_ | [`BlockType`](BlockType.md)
static final var __StoneSlab__ <br> _StoneSlab field_ | [`BlockType`](BlockType.md)
static final var __SandStoneSlab__ <br> _SandStoneSlab field_ | [`BlockType`](BlockType.md)
static final var __WoodSlab__ <br> _WoodSlab field_ | [`BlockType`](BlockType.md)
static final var __CobbleSlab__ <br> _CobbleSlab field_ | [`BlockType`](BlockType.md)
static final var __BrickSlab__ <br> _BrickSlab field_ | [`BlockType`](BlockType.md)
static final var __StoneBricksSlab__ <br> _StoneBricksSlab field_ | [`BlockType`](BlockType.md)
static final var __NetherBricksSlab__ <br> _NetherBricksSlab field_ | [`BlockType`](BlockType.md)
static final var __QuartzSlab__ <br> _QuartzSlab field_ | [`BlockType`](BlockType.md)
static final var __OrnateStoneSlab__ <br> _OrnateStoneSlab field_ | [`BlockType`](BlockType.md)
static final var __SandStoneTrimSlab__ <br> _SandStoneTrimSlab field_ | [`BlockType`](BlockType.md)
static final var __BrickBlockSlab__ <br> _BrickBlockSlab field_ | [`BlockType`](BlockType.md)
static final var __Bricks__ <br> _Bricks field_ | [`BlockType`](BlockType.md)
static final var __BrickBlock__ <br> _BrickBlock field_ | [`BlockType`](BlockType.md)
static final var __TNT__ <br> _TNT field_ | [`BlockType`](BlockType.md)
static final var __Tnt__ <br> _Tnt field_ | [`BlockType`](BlockType.md)
static final var __Bookshelf__ <br> _Bookshelf field_ | [`BlockType`](BlockType.md)
static final var __MossyCobble__ <br> _MossyCobble field_ | [`BlockType`](BlockType.md)
static final var __Obsidian__ <br> _Obsidian field_ | [`BlockType`](BlockType.md)
static final var __Torch__ <br> _Torch field_ | [`BlockType`](BlockType.md)
static final var __FireBlock__ <br> _FireBlock field_ | [`BlockType`](BlockType.md)
static final var __MobSpawner__ <br> _MobSpawner field_ | [`BlockType`](BlockType.md)
static final var __OakStairs__ <br> _OakStairs field_ | [`BlockType`](BlockType.md)
static final var __Chest__ <br> _Chest field_ | [`BlockType`](BlockType.md)
static final var __RedstoneWire__ <br> _RedstoneWire field_ | [`BlockType`](BlockType.md)
static final var __DiamondOre__ <br> _DiamondOre field_ | [`BlockType`](BlockType.md)
static final var __DiamondBlock__ <br> _DiamondBlock field_ | [`BlockType`](BlockType.md)
static final var __Workbench__ <br> _Workbench field_ | [`BlockType`](BlockType.md)
static final var __Wheat__ <br> _Wheat field_ | [`BlockType`](BlockType.md)
static final var __Crops__ <br> _Crops field_ | [`BlockType`](BlockType.md)
static final var __Farmland__ <br> _Farmland field_ | [`BlockType`](BlockType.md)
static final var __Soil__ <br> _Soil field_ | [`BlockType`](BlockType.md)
static final var __Furnace__ <br> _Furnace field_ | [`BlockType`](BlockType.md)
static final var __BurningFurnace__ <br> _BurningFurnace field_ | [`BlockType`](BlockType.md)
static final var __StandingSign__ <br> _StandingSign field_ | [`BlockType`](BlockType.md)
static final var __SignPost__ <br> _SignPost field_ | [`BlockType`](BlockType.md)
static final var __WoodenDoor__ <br> _WoodenDoor field_ | [`BlockType`](BlockType.md)
static final var __OakDoor__ <br> _OakDoor field_ | [`BlockType`](BlockType.md)
static final var __Ladder__ <br> _Ladder field_ | [`BlockType`](BlockType.md)
static final var __Rail__ <br> _Rail field_ | [`BlockType`](BlockType.md)
static final var __StoneStairs__ <br> _StoneStairs field_ | [`BlockType`](BlockType.md)
static final var __WallSign__ <br> _WallSign field_ | [`BlockType`](BlockType.md)
static final var __Lever__ <br> _Lever field_ | [`BlockType`](BlockType.md)
static final var __StonePressurePlate__ <br> _StonePressurePlate field_ | [`BlockType`](BlockType.md)
static final var __IronDoor__ <br> _IronDoor field_ | [`BlockType`](BlockType.md)
static final var __WoodenPressurePlate__ <br> _WoodenPressurePlate field_ | [`BlockType`](BlockType.md)
static final var __RedstoneOre__ <br> _RedstoneOre field_ | [`BlockType`](BlockType.md)
static final var __GlowingRedstoneOre__ <br> _GlowingRedstoneOre field_ | [`BlockType`](BlockType.md)
static final var __RedstoneTorchOff__ <br> _RedstoneTorchOff field_ | [`BlockType`](BlockType.md)
static final var __RedstoneTorchOn__ <br> _RedstoneTorchOn field_ | [`BlockType`](BlockType.md)
static final var __StoneButton__ <br> _StoneButton field_ | [`BlockType`](BlockType.md)
static final var __Snow__ <br> _Snow field_ | [`BlockType`](BlockType.md)
static final var __Ice__ <br> _Ice field_ | [`BlockType`](BlockType.md)
static final var __SnowBlock__ <br> _SnowBlock field_ | [`BlockType`](BlockType.md)
static final var __Cactus__ <br> _Cactus field_ | [`BlockType`](BlockType.md)
static final var __Clay__ <br> _Clay field_ | [`BlockType`](BlockType.md)
static final var __Reed__ <br> _Reed field_ | [`BlockType`](BlockType.md)
static final var __Jukebox__ <br> _Jukebox field_ | [`BlockType`](BlockType.md)
static final var __Fence__ <br> _Fence field_ | [`BlockType`](BlockType.md)
static final var __Pumpkin__ <br> _Pumpkin field_ | [`BlockType`](BlockType.md)
static final var __Netherrack__ <br> _Netherrack field_ | [`BlockType`](BlockType.md)
static final var __SoulSand__ <br> _SoulSand field_ | [`BlockType`](BlockType.md)
static final var __GlowStone__ <br> _GlowStone field_ | [`BlockType`](BlockType.md)
static final var __Portal__ <br> _Portal field_ | [`BlockType`](BlockType.md)
static final var __JackOLantern__ <br> _JackOLantern field_ | [`BlockType`](BlockType.md)
static final var __Cake__ <br> _Cake field_ | [`BlockType`](BlockType.md)
static final var __RedstoneRepeaterOff__ <br> _RedstoneRepeaterOff field_ | [`BlockType`](BlockType.md)
static final var __RedstoneRepeaterOn__ <br> _RedstoneRepeaterOn field_ | [`BlockType`](BlockType.md)
static final var __WhiteGlass__ <br> _WhiteGlass field_ | [`BlockType`](BlockType.md)
static final var __OrangeGlass__ <br> _OrangeGlass field_ | [`BlockType`](BlockType.md)
static final var __MagentaGlass__ <br> _MagentaGlass field_ | [`BlockType`](BlockType.md)
static final var __LightBlueGlass__ <br> _LightBlueGlass field_ | [`BlockType`](BlockType.md)
static final var __YellowGlass__ <br> _YellowGlass field_ | [`BlockType`](BlockType.md)
static final var __LimeGlass__ <br> _LimeGlass field_ | [`BlockType`](BlockType.md)
static final var __PinkGlass__ <br> _PinkGlass field_ | [`BlockType`](BlockType.md)
static final var __GrayGlass__ <br> _GrayGlass field_ | [`BlockType`](BlockType.md)
static final var __LightGrayGlass__ <br> _LightGrayGlass field_ | [`BlockType`](BlockType.md)
static final var __CyanGlass__ <br> _CyanGlass field_ | [`BlockType`](BlockType.md)
static final var __PurpleGlass__ <br> _PurpleGlass field_ | [`BlockType`](BlockType.md)
static final var __BlueGlass__ <br> _BlueGlass field_ | [`BlockType`](BlockType.md)
static final var __BrownGlass__ <br> _BrownGlass field_ | [`BlockType`](BlockType.md)
static final var __GreenGlass__ <br> _GreenGlass field_ | [`BlockType`](BlockType.md)
static final var __RedGlass__ <br> _RedGlass field_ | [`BlockType`](BlockType.md)
static final var __BlackGlass__ <br> _BlackGlass field_ | [`BlockType`](BlockType.md)
static final var __Trapdoor__ <br> _Trapdoor field_ | [`BlockType`](BlockType.md)
static final var __StoneSilverFishBlock__ <br> _StoneSilverFishBlock field_ | [`BlockType`](BlockType.md)
static final var __CobbleSilverFishBlock__ <br> _CobbleSilverFishBlock field_ | [`BlockType`](BlockType.md)
static final var __StoneBrickSilverFishBlock__ <br> _StoneBrickSilverFishBlock field_ | [`BlockType`](BlockType.md)
static final var __MossyBrickSilverFishBlock__ <br> _MossyBrickSilverFishBlock field_ | [`BlockType`](BlockType.md)
static final var __CrackedSilverFishBlock__ <br> _CrackedSilverFishBlock field_ | [`BlockType`](BlockType.md)
static final var __ChiseledSilverFishBlock__ <br> _ChiseledSilverFishBlock field_ | [`BlockType`](BlockType.md)
static final var __StoneBrick__ <br> _StoneBrick field_ | [`BlockType`](BlockType.md)
static final var __MossyStoneBrick__ <br> _MossyStoneBrick field_ | [`BlockType`](BlockType.md)
static final var __CrackedStoneBrick__ <br> _CrackedStoneBrick field_ | [`BlockType`](BlockType.md)
static final var __ChiseledStoneBrick__ <br> _ChiseledStoneBrick field_ | [`BlockType`](BlockType.md)
static final var __HugeBrownMushroom__ <br> _HugeBrownMushroom field_ | [`BlockType`](BlockType.md)
static final var __HugeRedMushroom__ <br> _HugeRedMushroom field_ | [`BlockType`](BlockType.md)
static final var __IronBars__ <br> _IronBars field_ | [`BlockType`](BlockType.md)
static final var __GlassPane__ <br> _GlassPane field_ | [`BlockType`](BlockType.md)
static final var __Melon__ <br> _Melon field_ | [`BlockType`](BlockType.md)
static final var __PumpkinStem__ <br> _PumpkinStem field_ | [`BlockType`](BlockType.md)
static final var __MelonStem__ <br> _MelonStem field_ | [`BlockType`](BlockType.md)
static final var __Vines__ <br> _Vines field_ | [`BlockType`](BlockType.md)
static final var __FenceGate__ <br> _FenceGate field_ | [`BlockType`](BlockType.md)
static final var __BrickStairs__ <br> _BrickStairs field_ | [`BlockType`](BlockType.md)
static final var __StoneBrickStairs__ <br> _StoneBrickStairs field_ | [`BlockType`](BlockType.md)
static final var __Mycelium__ <br> _Mycelium field_ | [`BlockType`](BlockType.md)
static final var __Lilypad__ <br> _Lilypad field_ | [`BlockType`](BlockType.md)
static final var __NetherBrick__ <br> _NetherBrick field_ | [`BlockType`](BlockType.md)
static final var __NetherBrickFence__ <br> _NetherBrickFence field_ | [`BlockType`](BlockType.md)
static final var __NetherBrickStairs__ <br> _NetherBrickStairs field_ | [`BlockType`](BlockType.md)
static final var __NetherWart__ <br> _NetherWart field_ | [`BlockType`](BlockType.md)
static final var __EnchantmentTable__ <br> _EnchantmentTable field_ | [`BlockType`](BlockType.md)
static final var __BrewingStand__ <br> _BrewingStand field_ | [`BlockType`](BlockType.md)
static final var __Cauldron__ <br> _Cauldron field_ | [`BlockType`](BlockType.md)
static final var __EndPortal__ <br> _EndPortal field_ | [`BlockType`](BlockType.md)
static final var __EndPortalFrame__ <br> _EndPortalFrame field_ | [`BlockType`](BlockType.md)
static final var __EndStone__ <br> _EndStone field_ | [`BlockType`](BlockType.md)
static final var __EnderDragonEgg__ <br> _EnderDragonEgg field_ | [`BlockType`](BlockType.md)
static final var __RedstoneLampOff__ <br> _RedstoneLampOff field_ | [`BlockType`](BlockType.md)
static final var __RedstoneLampOn__ <br> _RedstoneLampOn field_ | [`BlockType`](BlockType.md)
static final var __DoubleOakWoodSlab__ <br> _DoubleOakWoodSlab field_ | [`BlockType`](BlockType.md)
static final var __DoubleSpruceWoodSlab__ <br> _DoubleSpruceWoodSlab field_ | [`BlockType`](BlockType.md)
static final var __DoubleBirchWoodSlab__ <br> _DoubleBirchWoodSlab field_ | [`BlockType`](BlockType.md)
static final var __DoubleJungleWoodSlab__ <br> _DoubleJungleWoodSlab field_ | [`BlockType`](BlockType.md)
static final var __DoubleAcaciaWoodSlab__ <br> _DoubleAcaciaWoodSlab field_ | [`BlockType`](BlockType.md)
static final var __DoubleDarkOakWoodSlab__ <br> _DoubleDarkOakWoodSlab field_ | [`BlockType`](BlockType.md)
static final var __OakWoodSlab__ <br> _OakWoodSlab field_ | [`BlockType`](BlockType.md)
static final var __SpruceWoodSlab__ <br> _SpruceWoodSlab field_ | [`BlockType`](BlockType.md)
static final var __BirchWoodSlab__ <br> _BirchWoodSlab field_ | [`BlockType`](BlockType.md)
static final var __JungleWoodSlab__ <br> _JungleWoodSlab field_ | [`BlockType`](BlockType.md)
static final var __AcaciaWoodSlab__ <br> _AcaciaWoodSlab field_ | [`BlockType`](BlockType.md)
static final var __DarkOakWoodSlab__ <br> _DarkOakWoodSlab field_ | [`BlockType`](BlockType.md)
static final var __CocoaPlant__ <br> _CocoaPlant field_ | [`BlockType`](BlockType.md)
static final var __SandstoneStairs__ <br> _SandstoneStairs field_ | [`BlockType`](BlockType.md)
static final var __EmeraldOre__ <br> _EmeraldOre field_ | [`BlockType`](BlockType.md)
static final var __EnderChest__ <br> _EnderChest field_ | [`BlockType`](BlockType.md)
static final var __TripwireHook__ <br> _TripwireHook field_ | [`BlockType`](BlockType.md)
static final var __Tripwire__ <br> _Tripwire field_ | [`BlockType`](BlockType.md)
static final var __EmeraldBlock__ <br> _EmeraldBlock field_ | [`BlockType`](BlockType.md)
static final var __SpruceStairs__ <br> _SpruceStairs field_ | [`BlockType`](BlockType.md)
static final var __BirchStairs__ <br> _BirchStairs field_ | [`BlockType`](BlockType.md)
static final var __JungleStairs__ <br> _JungleStairs field_ | [`BlockType`](BlockType.md)
static final var __CommandBlock__ <br> _CommandBlock field_ | [`BlockType`](BlockType.md)
static final var __Beacon__ <br> _Beacon field_ | [`BlockType`](BlockType.md)
static final var __CobblestoneWall__ <br> _CobblestoneWall field_ | [`BlockType`](BlockType.md)
static final var __MossyCobbleWall__ <br> _MossyCobbleWall field_ | [`BlockType`](BlockType.md)
static final var __Flowerpot__ <br> _Flowerpot field_ | [`BlockType`](BlockType.md)
static final var __Carrots__ <br> _Carrots field_ | [`BlockType`](BlockType.md)
static final var __Potatoes__ <br> _Potatoes field_ | [`BlockType`](BlockType.md)
static final var __WoodenButton__ <br> _WoodenButton field_ | [`BlockType`](BlockType.md)
static final var __Skull__ <br> _Skull field_ | [`BlockType`](BlockType.md)
static final var __Anvil__ <br> _Anvil field_ | [`BlockType`](BlockType.md)
static final var __TrappedChest__ <br> _TrappedChest field_ | [`BlockType`](BlockType.md)
static final var __LightWeightedPressurePlate__ <br> _LightWeightedPressurePlate field_ | [`BlockType`](BlockType.md)
static final var __HeavyWeightedPressurePlate__ <br> _HeavyWeightedPressurePlate field_ | [`BlockType`](BlockType.md)
static final var __RedstoneComparator__ <br> _RedstoneComparator field_ | [`BlockType`](BlockType.md)
static final var __RedstoneComparatorPowered__ <br> _RedstoneComparatorPowered field_ | [`BlockType`](BlockType.md)
static final var __DaylightSensor__ <br> _DaylightSensor field_ | [`BlockType`](BlockType.md)
static final var __RedstoneBlock__ <br> _RedstoneBlock field_ | [`BlockType`](BlockType.md)
static final var __QuartzOre__ <br> _QuartzOre field_ | [`BlockType`](BlockType.md)
static final var __NetherQuartzOre__ <br> _NetherQuartzOre field_ | [`BlockType`](BlockType.md)
static final var __Hopper__ <br> _Hopper field_ | [`BlockType`](BlockType.md)
static final var __QuartzBlock__ <br> _QuartzBlock field_ | [`BlockType`](BlockType.md)
static final var __ChiseledQuartzBlock__ <br> _ChiseledQuartzBlock field_ | [`BlockType`](BlockType.md)
static final var __QuartzPillarVertical__ <br> _QuartzPillarVertical field_ | [`BlockType`](BlockType.md)
static final var __QuartzPillarHorizontal__ <br> _QuartzPillarHorizontal field_ | [`BlockType`](BlockType.md)
static final var __QuartzPillarCap__ <br> _QuartzPillarCap field_ | [`BlockType`](BlockType.md)
static final var __QuartzStairs__ <br> _QuartzStairs field_ | [`BlockType`](BlockType.md)
static final var __ActivatorRail__ <br> _ActivatorRail field_ | [`BlockType`](BlockType.md)
static final var __Dropper__ <br> _Dropper field_ | [`BlockType`](BlockType.md)
static final var __WhiteStainedClay__ <br> _WhiteStainedClay field_ | [`BlockType`](BlockType.md)
static final var __OrangeStainedClay__ <br> _OrangeStainedClay field_ | [`BlockType`](BlockType.md)
static final var __MagentaStainedClay__ <br> _MagentaStainedClay field_ | [`BlockType`](BlockType.md)
static final var __LightBlueStainedClay__ <br> _LightBlueStainedClay field_ | [`BlockType`](BlockType.md)
static final var __YellowStainedClay__ <br> _YellowStainedClay field_ | [`BlockType`](BlockType.md)
static final var __LimeStainedClay__ <br> _LimeStainedClay field_ | [`BlockType`](BlockType.md)
static final var __PinkStainedClay__ <br> _PinkStainedClay field_ | [`BlockType`](BlockType.md)
static final var __GrayStainedClay__ <br> _GrayStainedClay field_ | [`BlockType`](BlockType.md)
static final var __LightGrayStainedClay__ <br> _LightGrayStainedClay field_ | [`BlockType`](BlockType.md)
static final var __CyanStainedClay__ <br> _CyanStainedClay field_ | [`BlockType`](BlockType.md)
static final var __PurpleStainedClay__ <br> _PurpleStainedClay field_ | [`BlockType`](BlockType.md)
static final var __BlueStainedClay__ <br> _BlueStainedClay field_ | [`BlockType`](BlockType.md)
static final var __BrownStainedClay__ <br> _BrownStainedClay field_ | [`BlockType`](BlockType.md)
static final var __GreenStainedClay__ <br> _GreenStainedClay field_ | [`BlockType`](BlockType.md)
static final var __RedStainedClay__ <br> _RedStainedClay field_ | [`BlockType`](BlockType.md)
static final var __BlackStainedClay__ <br> _BlackStainedClay field_ | [`BlockType`](BlockType.md)
static final var __WhiteGlassPane__ <br> _WhiteGlassPane field_ | [`BlockType`](BlockType.md)
static final var __OrangeGlassPane__ <br> _OrangeGlassPane field_ | [`BlockType`](BlockType.md)
static final var __MagentaGlassPane__ <br> _MagentaGlassPane field_ | [`BlockType`](BlockType.md)
static final var __LightBlueGlassPane__ <br> _LightBlueGlassPane field_ | [`BlockType`](BlockType.md)
static final var __YellowGlassPane__ <br> _YellowGlassPane field_ | [`BlockType`](BlockType.md)
static final var __LimeGlassPane__ <br> _LimeGlassPane field_ | [`BlockType`](BlockType.md)
static final var __PinkGlassPane__ <br> _PinkGlassPane field_ | [`BlockType`](BlockType.md)
static final var __GrayGlassPane__ <br> _GrayGlassPane field_ | [`BlockType`](BlockType.md)
static final var __LightGrayGlassPane__ <br> _LightGrayGlassPane field_ | [`BlockType`](BlockType.md)
static final var __CyanGlassPane__ <br> _CyanGlassPane field_ | [`BlockType`](BlockType.md)
static final var __PurpleGlassPane__ <br> _PurpleGlassPane field_ | [`BlockType`](BlockType.md)
static final var __BlueGlassPane__ <br> _BlueGlassPane field_ | [`BlockType`](BlockType.md)
static final var __BrownGlassPane__ <br> _BrownGlassPane field_ | [`BlockType`](BlockType.md)
static final var __GreenGlassPane__ <br> _GreenGlassPane field_ | [`BlockType`](BlockType.md)
static final var __RedGlassPane__ <br> _RedGlassPane field_ | [`BlockType`](BlockType.md)
static final var __BlackGlassPane__ <br> _BlackGlassPane field_ | [`BlockType`](BlockType.md)
static final var __AcaciaLeaves__ <br> _AcaciaLeaves field_ | [`BlockType`](BlockType.md)
static final var __DarkOakLeaves__ <br> _DarkOakLeaves field_ | [`BlockType`](BlockType.md)
static final var __AcaciaLog__ <br> _AcaciaLog field_ | [`BlockType`](BlockType.md)
static final var __DarkOakLog__ <br> _DarkOakLog field_ | [`BlockType`](BlockType.md)
static final var __AcaciaStairs__ <br> _AcaciaStairs field_ | [`BlockType`](BlockType.md)
static final var __DarkOakStairs__ <br> _DarkOakStairs field_ | [`BlockType`](BlockType.md)
static final var __SlimeBlock__ <br> _SlimeBlock field_ | [`BlockType`](BlockType.md)
static final var __Barrier__ <br> _Barrier field_ | [`BlockType`](BlockType.md)
static final var __IronTrapDoor__ <br> _IronTrapDoor field_ | [`BlockType`](BlockType.md)
static final var __Prismarine__ <br> _Prismarine field_ | [`BlockType`](BlockType.md)
static final var __PrismarineBricks__ <br> _PrismarineBricks field_ | [`BlockType`](BlockType.md)
static final var __DarkPrismarine__ <br> _DarkPrismarine field_ | [`BlockType`](BlockType.md)
static final var __SeaLantern__ <br> _SeaLantern field_ | [`BlockType`](BlockType.md)
static final var __HayBale__ <br> _HayBale field_ | [`BlockType`](BlockType.md)
static final var __WhiteCarpet__ <br> _WhiteCarpet field_ | [`BlockType`](BlockType.md)
static final var __OrangeCarpet__ <br> _OrangeCarpet field_ | [`BlockType`](BlockType.md)
static final var __MagentaCarpet__ <br> _MagentaCarpet field_ | [`BlockType`](BlockType.md)
static final var __LightBlueCarpet__ <br> _LightBlueCarpet field_ | [`BlockType`](BlockType.md)
static final var __YellowCarpet__ <br> _YellowCarpet field_ | [`BlockType`](BlockType.md)
static final var __LimeCarpet__ <br> _LimeCarpet field_ | [`BlockType`](BlockType.md)
static final var __PinkCarpet__ <br> _PinkCarpet field_ | [`BlockType`](BlockType.md)
static final var __GrayCarpet__ <br> _GrayCarpet field_ | [`BlockType`](BlockType.md)
static final var __LightGrayCarpet__ <br> _LightGrayCarpet field_ | [`BlockType`](BlockType.md)
static final var __CyanCarpet__ <br> _CyanCarpet field_ | [`BlockType`](BlockType.md)
static final var __PurpleCarpet__ <br> _PurpleCarpet field_ | [`BlockType`](BlockType.md)
static final var __BlueCarpet__ <br> _BlueCarpet field_ | [`BlockType`](BlockType.md)
static final var __BrownCarpet__ <br> _BrownCarpet field_ | [`BlockType`](BlockType.md)
static final var __GreenCarpet__ <br> _GreenCarpet field_ | [`BlockType`](BlockType.md)
static final var __RedCarpet__ <br> _RedCarpet field_ | [`BlockType`](BlockType.md)
static final var __BlackCarpet__ <br> _BlackCarpet field_ | [`BlockType`](BlockType.md)
static final var __HardenedClay__ <br> _HardenedClay field_ | [`BlockType`](BlockType.md)
static final var __CoalBlock__ <br> _CoalBlock field_ | [`BlockType`](BlockType.md)
static final var __PackedIce__ <br> _PackedIce field_ | [`BlockType`](BlockType.md)
static final var __Sunflower__ <br> _Sunflower field_ | [`BlockType`](BlockType.md)
static final var __Lilac__ <br> _Lilac field_ | [`BlockType`](BlockType.md)
static final var __DoubleGrass__ <br> _DoubleGrass field_ | [`BlockType`](BlockType.md)
static final var __LargeFern__ <br> _LargeFern field_ | [`BlockType`](BlockType.md)
static final var __RoseBush__ <br> _RoseBush field_ | [`BlockType`](BlockType.md)
static final var __Peony__ <br> _Peony field_ | [`BlockType`](BlockType.md)
static final var __StandingBanner__ <br> _StandingBanner field_ | [`BlockType`](BlockType.md)
static final var __WallBanner__ <br> _WallBanner field_ | [`BlockType`](BlockType.md)
static final var __DaylightSensorInverted__ <br> _DaylightSensorInverted field_ | [`BlockType`](BlockType.md)
static final var __RedSandstone__ <br> _RedSandstone field_ | [`BlockType`](BlockType.md)
static final var __RedSandstoneChiseled__ <br> _RedSandstoneChiseled field_ | [`BlockType`](BlockType.md)
static final var __RedSandstoneSmooth__ <br> _RedSandstoneSmooth field_ | [`BlockType`](BlockType.md)
static final var __RedSandstoneStairs__ <br> _RedSandstoneStairs field_ | [`BlockType`](BlockType.md)
static final var __DoubleRedSandstoneSlab__ <br> _DoubleRedSandstoneSlab field_ | [`BlockType`](BlockType.md)
static final var __RedSandstoneSlab__ <br> _RedSandstoneSlab field_ | [`BlockType`](BlockType.md)
static final var __SpruceFenceGate__ <br> _SpruceFenceGate field_ | [`BlockType`](BlockType.md)
static final var __BirchFenceGate__ <br> _BirchFenceGate field_ | [`BlockType`](BlockType.md)
static final var __JungleFenceGate__ <br> _JungleFenceGate field_ | [`BlockType`](BlockType.md)
static final var __DarkOakFenceGate__ <br> _DarkOakFenceGate field_ | [`BlockType`](BlockType.md)
static final var __AcaciaFenceGate__ <br> _AcaciaFenceGate field_ | [`BlockType`](BlockType.md)
static final var __SpruceFence__ <br> _SpruceFence field_ | [`BlockType`](BlockType.md)
static final var __BirchFence__ <br> _BirchFence field_ | [`BlockType`](BlockType.md)
static final var __JungleFence__ <br> _JungleFence field_ | [`BlockType`](BlockType.md)
static final var __DarkOakFence__ <br> _DarkOakFence field_ | [`BlockType`](BlockType.md)
static final var __AcaciaFence__ <br> _AcaciaFence field_ | [`BlockType`](BlockType.md)
static final var __SpruceDoor__ <br> _SpruceDoor field_ | [`BlockType`](BlockType.md)
static final var __BirchDoor__ <br> _BirchDoor field_ | [`BlockType`](BlockType.md)
static final var __JungleDoor__ <br> _JungleDoor field_ | [`BlockType`](BlockType.md)
static final var __AcaciaDoor__ <br> _AcaciaDoor field_ | [`BlockType`](BlockType.md)
static final var __DarkOakDoor__ <br> _DarkOakDoor field_ | [`BlockType`](BlockType.md)



---

### Public Constructors for [`BlockType`](BlockType.md)

##### <a id='blocktype'></a>new __BlockType__(id, machineName) 

_BlockType constructor_

Argument | Type | Description  
--- | --- | --- 
id | `int` | id argument
machineName | `String` | machineName argument

##### <a id='blocktype'></a>new __BlockType__(id, machineName, mod) 

_BlockType constructor_

Argument | Type | Description  
--- | --- | --- 
id | `int` | id argument
machineName | `String` | machineName argument
mod | `String` | mod argument

##### <a id='blocktype'></a>new __BlockType__(id, data, machineName) 

_This will create this blockType and also add it to the BlockTypes cache, if a BlockType with the same name doesn't already exist. IF a BlockType with the given name already exists, nothing will happen to the BlockType list, you can still use this BlockType if you need to_

Argument | Type | Description  
--- | --- | --- 
id | `int` | the block id
data | `int` | the block data
machineName | `String` | the block's machine name (new-style ID)

---

### Public Properties for [`BlockType`](BlockType.md)

##### <a id='data'></a>public  readonly property __Data__

_Get: Get the ID of this BlockType_

Get | Description
--- | --- 
`short` | data



##### <a id='id'></a>public  readonly property __Id__

_Get: Get the ID of this BlockType_

Get | Description
--- | --- 
`short` | id



##### <a id='machinename'></a>public  readonly property __MachineName__

_Get: Returns a "machine readable" name. That is: a representation of the Block Type name in lowercase letters without whitespace._

Get | Description
--- | --- 
`String` | machine name



---

### Public Methods for [`BlockType`](BlockType.md)

##### <a id='fromidanddata'></a>public static function __fromIdAndData__(id, data)

_Get the BlockType according to the given ID and Data. This will return null if there is no BlockType with this id and data._

Argument | Type | Description  
--- | --- | --- 
id | `int` | the id
data | `int` | the data value

Returns | Description
--- | --- 
[`BlockType`](BlockType.md) | the associated [`BlockType`](BlockType.md) or `null`


##### <a id='equals'></a>public  function __equals__(o)

_equals method_

Argument | Type | Description  
--- | --- | --- 
o | `Object` | o argument

Returns | 
--- | 
`boolean` |


##### <a id='fromstringanddata'></a>public static function __fromStringAndData__(machineName, data)

_Returns a BlockType according to its name and data. This returns null if there is no BlockType with this name and data._

Argument | Type | Description  
--- | --- | --- 
machineName | `String` | The machine name
data | `int` | The metadata

Returns | Description
--- | --- 
[`BlockType`](BlockType.md) | the associated [`BlockType`](BlockType.md) or `null`


##### <a id='getcustomblocktype'></a>public static function __getCustomBlockType__(name)

_Get a custom block type. Returns null if the requested BlockType does not exist._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the machine name of the block type in question

Returns | Description
--- | --- 
[`BlockType`](BlockType.md) | the custom [`BlockType`](BlockType.md)


##### <a id='getcustomblocktype'></a>public static function __getCustomBlockType__(name, data)

_Get a custom block type. Returns null if the requested BlockType does not exist._

Argument | Type | Description  
--- | --- | --- 
name | `String` | the machine name of the block type in question
data | `int` | the data of the block type in question

Returns | Description
--- | --- 
[`BlockType`](BlockType.md) | the custom [`BlockType`](BlockType.md)


##### <a id='fromid'></a>public static function __fromId__(id)

_Get the BlockType according to the given ID. This will return null if there is no BlockType with this id._

Argument | Type | Description  
--- | --- | --- 
id | `int` | the id

Returns | Description
--- | --- 
[`BlockType`](BlockType.md) | the associated [`BlockType`](BlockType.md) or `null`


##### <a id='fromstring'></a>public static function __fromString__(name)

_Returns a BlockType according to its name. This returns null if there is no BlockType with this name._

Argument | Type | Description  
--- | --- | --- 
name | `String` | The machine name

Returns | Description
--- | --- 
[`BlockType`](BlockType.md) | the associated [`BlockType`](BlockType.md) or `null`


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


##### <a id='matches'></a>public  function __matches__()

_Checks BlockType for a given set of possible matches_

Returns | Description
--- | --- 
`boolean` | `true` if matches on of the give types; `false` if no match at all


##### <a id='tostring'></a>public  function __toString__()

_Returns a String formatted as "ID:DATA[MACHINENAME]"_

Returns | 
--- | 
`String` |


##### <a id='values'></a>public static function __values__()

_Gets an array of all BlockTypes._

Returns | Description
--- | --- 
`BlockType[]` | all BlockTypes


---

### Public Fields for [`BlockType`](BlockType.md)

##### <a id='air'></a>public static final var __Air__

_Air field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='stone'></a>public static final var __Stone__

_Stone field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='granite'></a>public static final var __Granite__

_Granite field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='polishedgranite'></a>public static final var __PolishedGranite__

_PolishedGranite field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='diorite'></a>public static final var __Diorite__

_Diorite field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='polisheddiorite'></a>public static final var __PolishedDiorite__

_PolishedDiorite field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='andesite'></a>public static final var __Andesite__

_Andesite field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='polishedandesite'></a>public static final var __PolishedAndesite__

_PolishedAndesite field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='grass'></a>public static final var __Grass__

_Grass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='dirt'></a>public static final var __Dirt__

_Dirt field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='coarsedirt'></a>public static final var __CoarseDirt__

_CoarseDirt field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='podzol'></a>public static final var __Podzol__

_Podzol field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='cobble'></a>public static final var __Cobble__

_Cobble field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='oakplanks'></a>public static final var __OakPlanks__

_OakPlanks field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='spruceplanks'></a>public static final var __SprucePlanks__

_SprucePlanks field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='birchplanks'></a>public static final var __BirchPlanks__

_BirchPlanks field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='jungleplanks'></a>public static final var __JunglePlanks__

_JunglePlanks field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='acaciaplanks'></a>public static final var __AcaciaPlanks__

_AcaciaPlanks field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='darkoakplanks'></a>public static final var __DarkOakPlanks__

_DarkOakPlanks field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='oakwood'></a>public static final var __OakWood__
_Deprecated: Being replaced by {@link OakPlanks}_

_OakWood field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sprucewood'></a>public static final var __SpruceWood__
_Deprecated: Being replaced by {@link SprucePlanks}_

_SpruceWood field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='birchwood'></a>public static final var __BirchWood__
_Deprecated: Being replaced by {@link BirchPlanks}_

_BirchWood field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='junglewood'></a>public static final var __JungleWood__
_Deprecated: Being replaced by {@link JunglePlanks}_

_JungleWood field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='acaciawood'></a>public static final var __AcaciaWood__
_Deprecated: Being replaced by {@link AcaciaPlanks}_

_AcaciaWood field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='darkoakwood'></a>public static final var __DarkOakWood__
_Deprecated: Being replaced by {@link DarkOakPlanks}_

_DarkOakWood field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='oaksapling'></a>public static final var __OakSapling__

_OakSapling field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sprucesapling'></a>public static final var __SpruceSapling__

_SpruceSapling field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='birchsapling'></a>public static final var __BirchSapling__

_BirchSapling field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='junglesapling'></a>public static final var __JungleSapling__

_JungleSapling field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='acaciasapling'></a>public static final var __AcaciaSapling__

_AcaciaSapling field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='darkoaksapling'></a>public static final var __DarkOakSapling__

_DarkOakSapling field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='bedrock'></a>public static final var __Bedrock__

_Bedrock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='waterflowing'></a>public static final var __WaterFlowing__

_WaterFlowing field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='water'></a>public static final var __Water__

_Water field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lavaflowing'></a>public static final var __LavaFlowing__

_LavaFlowing field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lava'></a>public static final var __Lava__

_Lava field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sand'></a>public static final var __Sand__

_Sand field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redsand'></a>public static final var __RedSand__

_RedSand field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='gravel'></a>public static final var __Gravel__

_Gravel field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='goldore'></a>public static final var __GoldOre__

_GoldOre field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='ironore'></a>public static final var __IronOre__

_IronOre field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='coalore'></a>public static final var __CoalOre__

_CoalOre field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='oaklog'></a>public static final var __OakLog__

_OakLog field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sprucelog'></a>public static final var __SpruceLog__

_SpruceLog field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='pinelog'></a>public static final var __PineLog__

_PineLog field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='birchlog'></a>public static final var __BirchLog__

_BirchLog field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='junglelog'></a>public static final var __JungleLog__

_JungleLog field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='oakleaves'></a>public static final var __OakLeaves__

_OakLeaves field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='spruceleaves'></a>public static final var __SpruceLeaves__

_SpruceLeaves field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='pineleaves'></a>public static final var __PineLeaves__
_Deprecated: Being replaced by {@link SpruceLeaves}_

_PineLeaves field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='birchleaves'></a>public static final var __BirchLeaves__

_BirchLeaves field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='jungleleaves'></a>public static final var __JungleLeaves__

_JungleLeaves field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sponge'></a>public static final var __Sponge__

_Sponge field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='glass'></a>public static final var __Glass__

_Glass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lapisore'></a>public static final var __LapisOre__

_LapisOre field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lapislazuliore'></a>public static final var __LapislazuliOre__
_Deprecated: Being replaced by {@link LapisOre}_

_LapislazuliOre field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lapisblock'></a>public static final var __LapisBlock__

_LapisBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='dispenser'></a>public static final var __Dispenser__

_Dispenser field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sandstone'></a>public static final var __Sandstone__

_Sandstone field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sandstonechiseled'></a>public static final var __SandstoneChiseled__

_SandstoneChiseled field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sandstoneornate'></a>public static final var __SandstoneOrnate__
_Deprecated: Being replaced by {@link SandstoneChiseled}_

_SandstoneOrnate field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sandstonesmooth'></a>public static final var __SandstoneSmooth__

_SandstoneSmooth field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sandstoneblank'></a>public static final var __SandstoneBlank__
_Deprecated: Being replaced by {@link SandstoneSmooth}_

_SandstoneBlank field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='noteblock'></a>public static final var __NoteBlock__

_NoteBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='bed'></a>public static final var __Bed__

_Bed field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='bedblock'></a>public static final var __BedBlock__

_BedBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='poweredrail'></a>public static final var __PoweredRail__

_PoweredRail field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='detectorrail'></a>public static final var __DetectorRail__

_DetectorRail field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='stickypiston'></a>public static final var __StickyPiston__

_StickyPiston field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='web'></a>public static final var __Web__

_Web field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='spiderweb'></a>public static final var __SpiderWeb__

_SpiderWeb field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='shrub'></a>public static final var __Shrub__

_Shrub field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='tallgrass'></a>public static final var __TallGrass__

_TallGrass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='fern'></a>public static final var __Fern__

_Fern field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='deadbush'></a>public static final var __DeadBush__

_DeadBush field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='piston'></a>public static final var __Piston__

_Piston field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='pistonhead'></a>public static final var __PistonHead__

_PistonHead field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='whitewool'></a>public static final var __WhiteWool__

_WhiteWool field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='orangewool'></a>public static final var __OrangeWool__

_OrangeWool field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='magentawool'></a>public static final var __MagentaWool__

_MagentaWool field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lightbluewool'></a>public static final var __LightBlueWool__

_LightBlueWool field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='yellowwool'></a>public static final var __YellowWool__

_YellowWool field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='limewool'></a>public static final var __LimeWool__

_LimeWool field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='pinkwool'></a>public static final var __PinkWool__

_PinkWool field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='graywool'></a>public static final var __GrayWool__

_GrayWool field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lightgraywool'></a>public static final var __LightGrayWool__

_LightGrayWool field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='cyanwool'></a>public static final var __CyanWool__

_CyanWool field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='purplewool'></a>public static final var __PurpleWool__

_PurpleWool field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='bluewool'></a>public static final var __BlueWool__

_BlueWool field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='brownwool'></a>public static final var __BrownWool__

_BrownWool field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='greenwool'></a>public static final var __GreenWool__

_GreenWool field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redwool'></a>public static final var __RedWool__

_RedWool field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='blackwool'></a>public static final var __BlackWool__

_BlackWool field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woolwhite'></a>public static final var __WoolWhite__

_WoolWhite field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woolorange'></a>public static final var __WoolOrange__

_WoolOrange field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woolmagenta'></a>public static final var __WoolMagenta__

_WoolMagenta field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woollightblue'></a>public static final var __WoolLightBlue__

_WoolLightBlue field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woolyellow'></a>public static final var __WoolYellow__

_WoolYellow field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woollightgreen'></a>public static final var __WoolLightGreen__

_WoolLightGreen field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woolpink'></a>public static final var __WoolPink__

_WoolPink field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woolgray'></a>public static final var __WoolGray__

_WoolGray field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woollightgray'></a>public static final var __WoolLightGray__

_WoolLightGray field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woolcyan'></a>public static final var __WoolCyan__

_WoolCyan field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woolpurple'></a>public static final var __WoolPurple__

_WoolPurple field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woolblue'></a>public static final var __WoolBlue__

_WoolBlue field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woolbrown'></a>public static final var __WoolBrown__

_WoolBrown field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='wooldarkgreen'></a>public static final var __WoolDarkGreen__

_WoolDarkGreen field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woolred'></a>public static final var __WoolRed__

_WoolRed field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woolblack'></a>public static final var __WoolBlack__

_WoolBlack field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='pistonextended'></a>public static final var __PistonExtended__

_PistonExtended field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='dandelion'></a>public static final var __Dandelion__

_Dandelion field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='poppy'></a>public static final var __Poppy__

_Poppy field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='blueorchid'></a>public static final var __BlueOrchid__

_BlueOrchid field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='allium'></a>public static final var __Allium__

_Allium field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='azurebluet'></a>public static final var __AzureBluet__

_AzureBluet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redtulip'></a>public static final var __RedTulip__

_RedTulip field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='orangetulip'></a>public static final var __OrangeTulip__

_OrangeTulip field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='whitetulip'></a>public static final var __WhiteTulip__

_WhiteTulip field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='pinktulip'></a>public static final var __PinkTulip__

_PinkTulip field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='oxeyedaisy'></a>public static final var __OxeyeDaisy__

_OxeyeDaisy field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='brownmushroom'></a>public static final var __BrownMushroom__

_BrownMushroom field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redmushroom'></a>public static final var __RedMushroom__

_RedMushroom field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='goldblock'></a>public static final var __GoldBlock__

_GoldBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='ironblock'></a>public static final var __IronBlock__

_IronBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doublestoneslab'></a>public static final var __DoubleStoneSlab__

_No longer seamless, see [`DoubleStoneSlabProperties`](properties/helpers/DoubleStoneSlabProperties.md)_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doublesandstoneslab'></a>public static final var __DoubleSandStoneSlab__

_No longer seamless, see [`DoubleStoneSlabProperties`](properties/helpers/DoubleStoneSlabProperties.md)_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doublewoodslab'></a>public static final var __DoubleWoodSlab__

_DoubleWoodSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doublecobbleslab'></a>public static final var __DoubleCobbleSlab__

_DoubleCobbleSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doublebrickslab'></a>public static final var __DoubleBrickSlab__

_DoubleBrickSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doublestonebricksslab'></a>public static final var __DoubleStoneBricksSlab__

_DoubleStoneBricksSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doublenetherbrickslab'></a>public static final var __DoubleNetherBrickSlab__

_DoubleNetherBrickSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doublequartzslab'></a>public static final var __DoubleQuartzSlab__

_DoubleQuartzSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doubleornatestoneslab'></a>public static final var __DoubleOrnateStoneSlab__

_DoubleOrnateStoneSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doublesandstonetrimslab'></a>public static final var __DoubleSandStoneTrimSlab__

_DoubleSandStoneTrimSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doublebrickblockslab'></a>public static final var __DoubleBrickBlockSlab__
_Deprecated: Being replaced by {@link DoubleBricksSlab}_

_DoubleBrickBlockSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='stoneslab'></a>public static final var __StoneSlab__

_StoneSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sandstoneslab'></a>public static final var __SandStoneSlab__

_SandStoneSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woodslab'></a>public static final var __WoodSlab__

_WoodSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='cobbleslab'></a>public static final var __CobbleSlab__

_CobbleSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='brickslab'></a>public static final var __BrickSlab__

_BrickSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='stonebricksslab'></a>public static final var __StoneBricksSlab__

_StoneBricksSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='netherbricksslab'></a>public static final var __NetherBricksSlab__

_NetherBricksSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='quartzslab'></a>public static final var __QuartzSlab__

_QuartzSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='ornatestoneslab'></a>public static final var __OrnateStoneSlab__

_OrnateStoneSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sandstonetrimslab'></a>public static final var __SandStoneTrimSlab__

_SandStoneTrimSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='brickblockslab'></a>public static final var __BrickBlockSlab__

_BrickBlockSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='bricks'></a>public static final var __Bricks__

_Bricks field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='brickblock'></a>public static final var __BrickBlock__

_BrickBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='tnt'></a>public static final var __TNT__

_TNT field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='tnt'></a>public static final var __Tnt__

_Tnt field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='bookshelf'></a>public static final var __Bookshelf__

_Bookshelf field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='mossycobble'></a>public static final var __MossyCobble__

_MossyCobble field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='obsidian'></a>public static final var __Obsidian__

_Obsidian field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='torch'></a>public static final var __Torch__

_Torch field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='fireblock'></a>public static final var __FireBlock__

_FireBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='mobspawner'></a>public static final var __MobSpawner__

_MobSpawner field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='oakstairs'></a>public static final var __OakStairs__

_OakStairs field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woodenstair'></a>public static final var __WoodenStair__
_Deprecated: Being replaced by {@link OakStairs}_

_WoodenStair field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='chest'></a>public static final var __Chest__

_Chest field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redstonewire'></a>public static final var __RedstoneWire__

_RedstoneWire field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='diamondore'></a>public static final var __DiamondOre__

_DiamondOre field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='diamondblock'></a>public static final var __DiamondBlock__

_DiamondBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='workbench'></a>public static final var __Workbench__

_Workbench field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='wheat'></a>public static final var __Wheat__

_Wheat field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='crops'></a>public static final var __Crops__

_Crops field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='farmland'></a>public static final var __Farmland__

_Farmland field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='soil'></a>public static final var __Soil__

_Soil field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='furnace'></a>public static final var __Furnace__

_Furnace field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='burningfurnace'></a>public static final var __BurningFurnace__

_BurningFurnace field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='standingsign'></a>public static final var __StandingSign__

_StandingSign field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='signpost'></a>public static final var __SignPost__

_SignPost field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woodendoor'></a>public static final var __WoodenDoor__

_WoodenDoor field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='oakdoor'></a>public static final var __OakDoor__

_OakDoor field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='ladder'></a>public static final var __Ladder__

_Ladder field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='rail'></a>public static final var __Rail__

_Rail field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='stonestairs'></a>public static final var __StoneStairs__

_StoneStairs field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='cobblestair'></a>public static final var __CobbleStair__
_Deprecated: Being replaced by {@link StoneStairs}_

_CobbleStair field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='wallsign'></a>public static final var __WallSign__

_WallSign field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lever'></a>public static final var __Lever__

_Lever field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='stonepressureplate'></a>public static final var __StonePressurePlate__

_StonePressurePlate field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='stoneplate'></a>public static final var __StonePlate__
_Deprecated: Being replaced by {@link StonePressurePlate}_

_StonePlate field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='irondoor'></a>public static final var __IronDoor__

_IronDoor field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woodenpressureplate'></a>public static final var __WoodenPressurePlate__

_WoodenPressurePlate field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woodplate'></a>public static final var __WoodPlate__
_Deprecated: Being replaced by {@link WoodenPressurePlate}_

_WoodPlate field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redstoneore'></a>public static final var __RedstoneOre__

_RedstoneOre field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='glowingredstoneore'></a>public static final var __GlowingRedstoneOre__

_GlowingRedstoneOre field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redstonetorchoff'></a>public static final var __RedstoneTorchOff__

_RedstoneTorchOff field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redstonetorchon'></a>public static final var __RedstoneTorchOn__

_RedstoneTorchOn field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='stonebutton'></a>public static final var __StoneButton__

_StoneButton field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='snow'></a>public static final var __Snow__

_Snow field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='ice'></a>public static final var __Ice__

_Ice field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='snowblock'></a>public static final var __SnowBlock__

_SnowBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='cactus'></a>public static final var __Cactus__

_Cactus field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='clay'></a>public static final var __Clay__

_Clay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='reed'></a>public static final var __Reed__

_Reed field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='jukebox'></a>public static final var __Jukebox__

_Jukebox field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='fence'></a>public static final var __Fence__

_Fence field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='pumpkin'></a>public static final var __Pumpkin__

_Pumpkin field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='netherrack'></a>public static final var __Netherrack__

_Netherrack field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='soulsand'></a>public static final var __SoulSand__

_SoulSand field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='glowstone'></a>public static final var __GlowStone__

_GlowStone field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='portal'></a>public static final var __Portal__

_Portal field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='jackolantern'></a>public static final var __JackOLantern__

_JackOLantern field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='cake'></a>public static final var __Cake__

_Cake field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redstonerepeateroff'></a>public static final var __RedstoneRepeaterOff__

_RedstoneRepeaterOff field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redstonerepeateron'></a>public static final var __RedstoneRepeaterOn__

_RedstoneRepeaterOn field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='whiteglass'></a>public static final var __WhiteGlass__

_WhiteGlass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='orangeglass'></a>public static final var __OrangeGlass__

_OrangeGlass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='magentaglass'></a>public static final var __MagentaGlass__

_MagentaGlass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lightblueglass'></a>public static final var __LightBlueGlass__

_LightBlueGlass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='yellowglass'></a>public static final var __YellowGlass__

_YellowGlass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='limeglass'></a>public static final var __LimeGlass__

_LimeGlass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='pinkglass'></a>public static final var __PinkGlass__

_PinkGlass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='grayglass'></a>public static final var __GrayGlass__

_GrayGlass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lightgrayglass'></a>public static final var __LightGrayGlass__

_LightGrayGlass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='cyanglass'></a>public static final var __CyanGlass__

_CyanGlass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='purpleglass'></a>public static final var __PurpleGlass__

_PurpleGlass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='blueglass'></a>public static final var __BlueGlass__

_BlueGlass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='brownglass'></a>public static final var __BrownGlass__

_BrownGlass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='greenglass'></a>public static final var __GreenGlass__

_GreenGlass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redglass'></a>public static final var __RedGlass__

_RedGlass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='blackglass'></a>public static final var __BlackGlass__

_BlackGlass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='trapdoor'></a>public static final var __Trapdoor__

_Trapdoor field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='stonesilverfishblock'></a>public static final var __StoneSilverFishBlock__

_StoneSilverFishBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='cobblesilverfishblock'></a>public static final var __CobbleSilverFishBlock__

_CobbleSilverFishBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='stonebricksilverfishblock'></a>public static final var __StoneBrickSilverFishBlock__

_StoneBrickSilverFishBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='mossybricksilverfishblock'></a>public static final var __MossyBrickSilverFishBlock__

_MossyBrickSilverFishBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='crackedsilverfishblock'></a>public static final var __CrackedSilverFishBlock__

_CrackedSilverFishBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='chiseledsilverfishblock'></a>public static final var __ChiseledSilverFishBlock__

_ChiseledSilverFishBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='ornatesilverfishblock'></a>public static final var __OrnateSilverFishBlock__
_Deprecated: Being replaced by {@link ChiseledSilverFishBlock}_

_OrnateSilverFishBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='stonebrick'></a>public static final var __StoneBrick__

_StoneBrick field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='mossystonebrick'></a>public static final var __MossyStoneBrick__

_MossyStoneBrick field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='crackedstonebrick'></a>public static final var __CrackedStoneBrick__

_CrackedStoneBrick field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='chiseledstonebrick'></a>public static final var __ChiseledStoneBrick__

_ChiseledStoneBrick field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='ornatestonebrick'></a>public static final var __OrnateStoneBrick__
_Deprecated: Being replaced by {@link ChiseledStoneBrick}_

_OrnateStoneBrick field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='hugebrownmushroom'></a>public static final var __HugeBrownMushroom__

_HugeBrownMushroom field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='hugeredmushroom'></a>public static final var __HugeRedMushroom__

_HugeRedMushroom field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='ironbars'></a>public static final var __IronBars__

_IronBars field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='glasspane'></a>public static final var __GlassPane__

_GlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='melon'></a>public static final var __Melon__

_Melon field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='pumpkinstem'></a>public static final var __PumpkinStem__

_PumpkinStem field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='melonstem'></a>public static final var __MelonStem__

_MelonStem field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='vines'></a>public static final var __Vines__

_Vines field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='fencegate'></a>public static final var __FenceGate__

_FenceGate field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='brickstairs'></a>public static final var __BrickStairs__

_BrickStairs field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='brickstair'></a>public static final var __BrickStair__
_Deprecated: Being replaced by {@link BrickStairs}_

_BrickStair field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='stonebrickstairs'></a>public static final var __StoneBrickStairs__

_StoneBrickStairs field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='stonebrickstair'></a>public static final var __StoneBrickStair__
_Deprecated: Being replaced by {@link StoneBrickStairs}_

_StoneBrickStair field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='mycelium'></a>public static final var __Mycelium__

_Mycelium field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lilypad'></a>public static final var __Lilypad__

_Lilypad field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='netherbrick'></a>public static final var __NetherBrick__

_NetherBrick field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='netherbrickfence'></a>public static final var __NetherBrickFence__

_NetherBrickFence field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='netherbrickstairs'></a>public static final var __NetherBrickStairs__

_NetherBrickStairs field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='netherbrickstair'></a>public static final var __NetherBrickStair__
_Deprecated: Being replaced by {@link NetherBrickStairs}_

_NetherBrickStair field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='netherwart'></a>public static final var __NetherWart__

_NetherWart field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='enchantmenttable'></a>public static final var __EnchantmentTable__

_EnchantmentTable field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='brewingstand'></a>public static final var __BrewingStand__

_BrewingStand field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='cauldron'></a>public static final var __Cauldron__

_Cauldron field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='endportal'></a>public static final var __EndPortal__

_EndPortal field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='endportalframe'></a>public static final var __EndPortalFrame__

_EndPortalFrame field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='endstone'></a>public static final var __EndStone__

_EndStone field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='enderdragonegg'></a>public static final var __EnderDragonEgg__

_EnderDragonEgg field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redstonelampoff'></a>public static final var __RedstoneLampOff__

_RedstoneLampOff field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redstonelampon'></a>public static final var __RedstoneLampOn__

_RedstoneLampOn field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doubleoakwoodslab'></a>public static final var __DoubleOakWoodSlab__

_DoubleOakWoodSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doublesprucewoodslab'></a>public static final var __DoubleSpruceWoodSlab__

_DoubleSpruceWoodSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doublebirchwoodslab'></a>public static final var __DoubleBirchWoodSlab__

_DoubleBirchWoodSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doublejunglewoodslab'></a>public static final var __DoubleJungleWoodSlab__

_DoubleJungleWoodSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doubleacaciawoodslab'></a>public static final var __DoubleAcaciaWoodSlab__

_DoubleAcaciaWoodSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doubledarkoakwoodslab'></a>public static final var __DoubleDarkOakWoodSlab__

_DoubleDarkOakWoodSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='oakwoodslab'></a>public static final var __OakWoodSlab__

_OakWoodSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sprucewoodslab'></a>public static final var __SpruceWoodSlab__

_SpruceWoodSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='birchwoodslab'></a>public static final var __BirchWoodSlab__

_BirchWoodSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='junglewoodslab'></a>public static final var __JungleWoodSlab__

_JungleWoodSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='acaciawoodslab'></a>public static final var __AcaciaWoodSlab__

_AcaciaWoodSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='darkoakwoodslab'></a>public static final var __DarkOakWoodSlab__

_DarkOakWoodSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='cocoaplant'></a>public static final var __CocoaPlant__

_CocoaPlant field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sandstonestairs'></a>public static final var __SandstoneStairs__

_SandstoneStairs field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sandstonestair'></a>public static final var __SandstoneStair__
_Deprecated: Being replaced by {@link SandstoneStairs}_

_SandstoneStair field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='emeraldore'></a>public static final var __EmeraldOre__

_EmeraldOre field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='enderchest'></a>public static final var __EnderChest__

_EnderChest field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='tripwirehook'></a>public static final var __TripwireHook__

_TripwireHook field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='tripwire'></a>public static final var __Tripwire__

_Tripwire field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='emeraldblock'></a>public static final var __EmeraldBlock__

_EmeraldBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sprucestairs'></a>public static final var __SpruceStairs__

_SpruceStairs field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='birchstairs'></a>public static final var __BirchStairs__

_BirchStairs field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='junglestairs'></a>public static final var __JungleStairs__

_JungleStairs field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='pinewoodstair'></a>public static final var __PineWoodStair__
_Deprecated: Being replaced by {@link SpruceStairs}_

_PineWoodStair field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='birchwoodstair'></a>public static final var __BirchWoodStair__
_Deprecated: Being replaced by {@link BirchStairs}_

_BirchWoodStair field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='junglewoodstair'></a>public static final var __JungleWoodStair__
_Deprecated: Being replaced by {@link JungleStairs}_

_JungleWoodStair field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='commandblock'></a>public static final var __CommandBlock__

_CommandBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='beacon'></a>public static final var __Beacon__

_Beacon field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='cobblestonewall'></a>public static final var __CobblestoneWall__

_CobblestoneWall field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='mossycobblewall'></a>public static final var __MossyCobbleWall__

_MossyCobbleWall field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='flowerpot'></a>public static final var __Flowerpot__

_Flowerpot field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='carrots'></a>public static final var __Carrots__

_Carrots field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='potatoes'></a>public static final var __Potatoes__

_Potatoes field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='woodenbutton'></a>public static final var __WoodenButton__

_WoodenButton field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='skull'></a>public static final var __Skull__

_Skull field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='skeletonhead'></a>public static final var __SkeletonHead__
_Deprecated: Variation are stored with the TileEntity, use {@link io.wolfscript.api.world.blocks.Skull} instead_

_SkeletonHead field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='witherskeletonhead'></a>public static final var __WitherSkeletonHead__
_Deprecated: Variation are stored with the TileEntity, use {@link io.wolfscript.api.world.blocks.Skull} instead_

_WitherSkeletonHead field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='zombiehead'></a>public static final var __ZombieHead__
_Deprecated: Variation are stored with the TileEntity, use {@link io.wolfscript.api.world.blocks.Skull} instead_

_ZombieHead field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='humanhead'></a>public static final var __HumanHead__
_Deprecated: Variation are stored with the TileEntity, use {@link io.wolfscript.api.world.blocks.Skull} instead_

_HumanHead field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='creeperhead'></a>public static final var __CreeperHead__
_Deprecated: Variation are stored with the TileEntity, use {@link io.wolfscript.api.world.blocks.Skull} instead_

_CreeperHead field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='anvil'></a>public static final var __Anvil__

_Anvil field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='trappedchest'></a>public static final var __TrappedChest__

_TrappedChest field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lightweightedpressureplate'></a>public static final var __LightWeightedPressurePlate__

_LightWeightedPressurePlate field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='heavyweightedpressureplate'></a>public static final var __HeavyWeightedPressurePlate__

_HeavyWeightedPressurePlate field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redstonecomparator'></a>public static final var __RedstoneComparator__

_RedstoneComparator field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redstonecomparatorpowered'></a>public static final var __RedstoneComparatorPowered__

_RedstoneComparatorPowered field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='daylightsensor'></a>public static final var __DaylightSensor__

_DaylightSensor field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redstoneblock'></a>public static final var __RedstoneBlock__

_RedstoneBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='quartzore'></a>public static final var __QuartzOre__

_QuartzOre field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='netherquartzore'></a>public static final var __NetherQuartzOre__

_NetherQuartzOre field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='hopper'></a>public static final var __Hopper__

_Hopper field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='quartzblock'></a>public static final var __QuartzBlock__

_QuartzBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='chiseledquartzblock'></a>public static final var __ChiseledQuartzBlock__

_ChiseledQuartzBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='ornatequartzblock'></a>public static final var __OrnateQuartzBlock__
_Deprecated: Being replaced by {@link ChiseledQuartzBlock}_

_OrnateQuartzBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='quartzpillarvertical'></a>public static final var __QuartzPillarVertical__

_QuartzPillarVertical field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='quartzpillarhorizontal'></a>public static final var __QuartzPillarHorizontal__

_QuartzPillarHorizontal field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='quartzpillarcap'></a>public static final var __QuartzPillarCap__

_QuartzPillarCap field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='quartzstairs'></a>public static final var __QuartzStairs__

_QuartzStairs field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='activatorrail'></a>public static final var __ActivatorRail__

_ActivatorRail field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='dropper'></a>public static final var __Dropper__

_Dropper field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='whitestainedclay'></a>public static final var __WhiteStainedClay__

_WhiteStainedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='orangestainedclay'></a>public static final var __OrangeStainedClay__

_OrangeStainedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='magentastainedclay'></a>public static final var __MagentaStainedClay__

_MagentaStainedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lightbluestainedclay'></a>public static final var __LightBlueStainedClay__

_LightBlueStainedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='yellowstainedclay'></a>public static final var __YellowStainedClay__

_YellowStainedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='limestainedclay'></a>public static final var __LimeStainedClay__

_LimeStainedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='pinkstainedclay'></a>public static final var __PinkStainedClay__

_PinkStainedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='graystainedclay'></a>public static final var __GrayStainedClay__

_GrayStainedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lightgraystainedclay'></a>public static final var __LightGrayStainedClay__

_LightGrayStainedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='cyanstainedclay'></a>public static final var __CyanStainedClay__

_CyanStainedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='purplestainedclay'></a>public static final var __PurpleStainedClay__

_PurpleStainedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='bluestainedclay'></a>public static final var __BlueStainedClay__

_BlueStainedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='brownstainedclay'></a>public static final var __BrownStainedClay__

_BrownStainedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='greenstainedclay'></a>public static final var __GreenStainedClay__

_GreenStainedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redstainedclay'></a>public static final var __RedStainedClay__

_RedStainedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='blackstainedclay'></a>public static final var __BlackStainedClay__

_BlackStainedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='whiteglasspane'></a>public static final var __WhiteGlassPane__

_WhiteGlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='orangeglasspane'></a>public static final var __OrangeGlassPane__

_OrangeGlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='magentaglasspane'></a>public static final var __MagentaGlassPane__

_MagentaGlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lightblueglasspane'></a>public static final var __LightBlueGlassPane__

_LightBlueGlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='yellowglasspane'></a>public static final var __YellowGlassPane__

_YellowGlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='limeglasspane'></a>public static final var __LimeGlassPane__

_LimeGlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='pinkglasspane'></a>public static final var __PinkGlassPane__

_PinkGlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='grayglasspane'></a>public static final var __GrayGlassPane__

_GrayGlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lightgrayglasspane'></a>public static final var __LightGrayGlassPane__

_LightGrayGlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='cyanglasspane'></a>public static final var __CyanGlassPane__

_CyanGlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='purpleglasspane'></a>public static final var __PurpleGlassPane__

_PurpleGlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='blueglasspane'></a>public static final var __BlueGlassPane__

_BlueGlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='brownglasspane'></a>public static final var __BrownGlassPane__

_BrownGlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='greenglasspane'></a>public static final var __GreenGlassPane__

_GreenGlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redglasspane'></a>public static final var __RedGlassPane__

_RedGlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='blackglasspane'></a>public static final var __BlackGlassPane__

_BlackGlassPane field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='acacialeaves'></a>public static final var __AcaciaLeaves__

_AcaciaLeaves field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='darkoakleaves'></a>public static final var __DarkOakLeaves__

_DarkOakLeaves field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='acacialog'></a>public static final var __AcaciaLog__

_AcaciaLog field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='darkoaklog'></a>public static final var __DarkOakLog__

_DarkOakLog field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='acaciastairs'></a>public static final var __AcaciaStairs__

_AcaciaStairs field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='darkoakstairs'></a>public static final var __DarkOakStairs__

_DarkOakStairs field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='slimeblock'></a>public static final var __SlimeBlock__

_SlimeBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='barrier'></a>public static final var __Barrier__

_Barrier field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='irontrapdoor'></a>public static final var __IronTrapDoor__

_IronTrapDoor field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='prismarine'></a>public static final var __Prismarine__

_Prismarine field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='prismarinebricks'></a>public static final var __PrismarineBricks__

_PrismarineBricks field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='darkprismarine'></a>public static final var __DarkPrismarine__

_DarkPrismarine field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sealantern'></a>public static final var __SeaLantern__

_SeaLantern field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='haybale'></a>public static final var __HayBale__

_HayBale field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='whitecarpet'></a>public static final var __WhiteCarpet__

_WhiteCarpet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='orangecarpet'></a>public static final var __OrangeCarpet__

_OrangeCarpet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='magentacarpet'></a>public static final var __MagentaCarpet__

_MagentaCarpet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lightbluecarpet'></a>public static final var __LightBlueCarpet__

_LightBlueCarpet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='yellowcarpet'></a>public static final var __YellowCarpet__

_YellowCarpet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='limecarpet'></a>public static final var __LimeCarpet__

_LimeCarpet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='pinkcarpet'></a>public static final var __PinkCarpet__

_PinkCarpet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='graycarpet'></a>public static final var __GrayCarpet__

_GrayCarpet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lightgraycarpet'></a>public static final var __LightGrayCarpet__

_LightGrayCarpet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='cyancarpet'></a>public static final var __CyanCarpet__

_CyanCarpet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='purplecarpet'></a>public static final var __PurpleCarpet__

_PurpleCarpet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='bluecarpet'></a>public static final var __BlueCarpet__

_BlueCarpet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='browncarpet'></a>public static final var __BrownCarpet__

_BrownCarpet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='greencarpet'></a>public static final var __GreenCarpet__

_GreenCarpet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redcarpet'></a>public static final var __RedCarpet__

_RedCarpet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='blackcarpet'></a>public static final var __BlackCarpet__

_BlackCarpet field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='hardenedclay'></a>public static final var __HardenedClay__

_HardenedClay field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='coalblock'></a>public static final var __CoalBlock__

_CoalBlock field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='packedice'></a>public static final var __PackedIce__

_PackedIce field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sunflower'></a>public static final var __Sunflower__

_Sunflower field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='lilac'></a>public static final var __Lilac__

_Lilac field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doublegrass'></a>public static final var __DoubleGrass__

_DoubleGrass field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='largefern'></a>public static final var __LargeFern__

_LargeFern field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='rosebush'></a>public static final var __RoseBush__

_RoseBush field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='peony'></a>public static final var __Peony__

_Peony field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='standingbanner'></a>public static final var __StandingBanner__

_StandingBanner field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='wallbanner'></a>public static final var __WallBanner__

_WallBanner field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='daylightsensorinverted'></a>public static final var __DaylightSensorInverted__

_DaylightSensorInverted field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redsandstone'></a>public static final var __RedSandstone__

_RedSandstone field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redsandstonechiseled'></a>public static final var __RedSandstoneChiseled__

_RedSandstoneChiseled field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redsandstonesmooth'></a>public static final var __RedSandstoneSmooth__

_RedSandstoneSmooth field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redsandstoneornate'></a>public static final var __RedSandstoneOrnate__
_Deprecated: Being replaced by {@link RedSandstoneChiseled}_

_RedSandstoneOrnate field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redsandstoneblank'></a>public static final var __RedSandstoneBlank__
_Deprecated: Being replaced by {@link RedSandstoneChiseled}_

_RedSandstoneBlank field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redsandstonestairs'></a>public static final var __RedSandstoneStairs__

_RedSandstoneStairs field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='doubleredsandstoneslab'></a>public static final var __DoubleRedSandstoneSlab__

_DoubleRedSandstoneSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='redsandstoneslab'></a>public static final var __RedSandstoneSlab__

_RedSandstoneSlab field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sprucefencegate'></a>public static final var __SpruceFenceGate__

_SpruceFenceGate field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='birchfencegate'></a>public static final var __BirchFenceGate__

_BirchFenceGate field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='junglefencegate'></a>public static final var __JungleFenceGate__

_JungleFenceGate field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='darkoakfencegate'></a>public static final var __DarkOakFenceGate__

_DarkOakFenceGate field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='acaciafencegate'></a>public static final var __AcaciaFenceGate__

_AcaciaFenceGate field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sprucefence'></a>public static final var __SpruceFence__

_SpruceFence field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='birchfence'></a>public static final var __BirchFence__

_BirchFence field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='junglefence'></a>public static final var __JungleFence__

_JungleFence field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='darkoakfence'></a>public static final var __DarkOakFence__

_DarkOakFence field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='acaciafence'></a>public static final var __AcaciaFence__

_AcaciaFence field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='sprucedoor'></a>public static final var __SpruceDoor__

_SpruceDoor field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='birchdoor'></a>public static final var __BirchDoor__

_BirchDoor field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='jungledoor'></a>public static final var __JungleDoor__

_JungleDoor field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='acaciadoor'></a>public static final var __AcaciaDoor__

_AcaciaDoor field_

>Returns
>  [`BlockType`](BlockType.md)

##### <a id='darkoakdoor'></a>public static final var __DarkOakDoor__

_DarkOakDoor field_

>Returns
>  [`BlockType`](BlockType.md)

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

