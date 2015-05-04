## FireworkHelper __class__

>io.wolfscript.api.inventory.helper.FireworkHelper
>Extends `ItemHelper`

---

### Class Overview

class FireworkHelper

Method | Type   
--- | :--- 
static writeonly property __StarColors__ <br> _Set: Sets the colors of the FireworkStar based on the given [`DyeColor`](../../DyeColor.md)s_ | `void`
static writeonly property __StarColorsRaw__ <br> _StarColorsRaw property_ | `void`
static writeonly property __StarFadeColors__ <br> _Set: Sets the fade color(s) of the FireworkStar based on the given [`DyeColor`](../../DyeColor.md)s_ | `void`
static writeonly property __StarFadeColorsRaw__ <br> _StarFadeColorsRaw property_ | `void`
static function __removeAllColors__(fireworkStar) <br> _Removes all the colors from the FireworkStar_ | `void`
 function __explosionId__() <br> _Gets the Explosion ID_ | `byte`
static function __attachFireworkStars__(fireworkRocket) <br> _Attaches the Explosion tag from the FireworkStar [`Item`](../Item.md)(s)_ | `void`
static function __addStarFadeColorsRaw__(fireworkStar) <br> _addStarFadeColorsRaw method_ | `void`
static function __doesTrail__(fireworkStar) <br> _Gets whether the FireworkStar leaves a trail_ | `boolean`
static function __addStarFadeColors__(fireworkStar) <br> _Adds a color to the FireworkStar based on [`DyeColor`](../../DyeColor.md)_ | `void`
static function __doesFlicker__(fireworkStar) <br> _Gets whether the FireworkStar does flicker_ | `boolean`
static function __addStarColorsRaw__(fireworkStar) <br> _addStarColorsRaw method_ | `void`
static function __addStarColors__(fireworkStar) <br> _Adds a color to the FireworkStar based on [`DyeColor`](../../DyeColor.md)_ | `void`
static function __setDoesTrail__(fireworkStar, trail) <br> _Sets whether the FireworkStar leaves a trail_ | `void`
static function __getExplosionTag__(fireworkStar) <br> _Gets the Explosion tag of a Firework Star_ | [`CompoundTag`](../../nbt/CompoundTag.md)
static function __getAttachedFireworkStars__(fireworkRocket) <br> _Gets all the FireworkStar [`Item`](../Item.md)(s) attached to the FireworkRocket._ | `Item[]`
static function __fromId__(id) <br> _Gets an ExplosionType from the Type ID_ | `ExplosionType`
static function __removeStarFadeColors__(fireworkStar) <br> _Removes fade color(s) from the FireworkStar_ | `void`
static function __getStarColorsRaw__(fireworkStar) <br> _Gets the raw decimal colors of the FireworkStar_ | `int[]`
static function __getFlightDuration__(fireworkRocket) <br> _Gets the Flight Duration of the FireworkRocket_ | `byte`
static function __getStarColors__(fireworkStar) <br> _Gets the colors of the FireworkStar as a [`DyeColor`](../../DyeColor.md) array_ | `DyeColor[]`
static function __removeAllFadeColors__(fireworkStar) <br> _Removes all the fade colors from the FireworkStar_ | `void`
static function __getStarFadeColors__(fireworkStar) <br> _Gets the colors of the FireworkStar as a [`DyeColor`](../../DyeColor.md) array_ | `DyeColor[]`
static function __getStarExplosionType__(fireworkStar) <br> _Gets the `ExplosionType` of the FireworkStar_ | `ExplosionType`
static function __hasFlightData__(fireworkRocket) <br> _Checks if the FireworkRocket has flight data_ | `boolean`
static function __setDoesFlicker__(fireworkStar, flicker) <br> _Sets whether the FireworkStar does flicker_ | `void`
static function __removeFireworkStars__(fireworkRocket) <br> _Attempts to remove FireworkStar [`Item`](../Item.md)(s) information from the FireworkRocket_ | `boolean`
static function __removeStarColors__(fireworkStar) <br> _Removes a color from the FireworkStar_ | `void`
static function __removeStarFadeColorsRaw__(fireworkStar) <br> _Removes fase color(s) from the FireworkStar_ | `void`
static function __getStarFadeColorsRaw__(fireworkStar) <br> _Gets the raw decimal fade colors of the FireworkStar_ | `int[]`
static function __removeStarColorsRaw__(fireworkStar) <br> _Removes a color from the FireworkStar_ | `void`
static function __setFlightDuration__(fireworkRocket, duration) <br> _Gets the Flight Duration of the FireworkRocket_ | `void`
static function __setStarExplosionType__(fireworkStar, explosion_type) <br> _Sets the `ExplosionType` type of the FireworkStar_ | `void`



---


### Public Properties for [`FireworkHelper`](FireworkHelper.md)

##### <a id='starcolors'></a>public static writeonly property __StarColors__

_Set: Sets the colors of the FireworkStar based on the given [`DyeColor`](../../DyeColor.md)s<br> Giving `DyeColor#CUSTOM` will result it the color being ignored.<br> For custom colors use `#setStarColorsRaw`_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)


##### <a id='starcolorsraw'></a>public static writeonly property __StarColorsRaw__

_StarColorsRaw property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | fireworkStar argument


##### <a id='starfadecolors'></a>public static writeonly property __StarFadeColors__

_Set: Sets the fade color(s) of the FireworkStar based on the given [`DyeColor`](../../DyeColor.md)s<br> Giving `DyeColor#CUSTOM` will result it the color being ignored.<br> For custom colors use `#setStarFadeColorsRaw`_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)


##### <a id='starfadecolorsraw'></a>public static writeonly property __StarFadeColorsRaw__

_StarFadeColorsRaw property_

Get | 
--- | 
`void` |

Set | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | fireworkStar argument


---

### Public Methods for [`FireworkHelper`](FireworkHelper.md)

##### <a id='removeallcolors'></a>public static function __removeAllColors__(fireworkStar)

_Removes all the colors from the FireworkStar_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)

Returns | 
--- | 
`void` |


##### <a id='explosionid'></a>public  function __explosionId__()

_Gets the Explosion ID_

Returns | Description
--- | --- 
`byte` | the Explosion ID


##### <a id='attachfireworkstars'></a>public static function __attachFireworkStars__(fireworkRocket)

_Attaches the Explosion tag from the FireworkStar [`Item`](../Item.md)(s)<br> The Explosion Tag is copied from the FireworkStar.<br> Further manipulation on the explosion tag in the FireworkStar will have no effect on the rocket._

Argument | Type | Description  
--- | --- | --- 
fireworkRocket | [`Item`](../Item.md) | the FireworkRocket [`Item`](../Item.md)

Returns | 
--- | 
`void` |


##### <a id='addstarfadecolorsraw'></a>public static function __addStarFadeColorsRaw__(fireworkStar)

_addStarFadeColorsRaw method_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | fireworkStar argument

Returns | 
--- | 
`void` |


##### <a id='doestrail'></a>public static function __doesTrail__(fireworkStar)

_Gets whether the FireworkStar leaves a trail_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)

Returns | Description
--- | --- 
`boolean` | `true` if trails; `false` if not


##### <a id='addstarfadecolors'></a>public static function __addStarFadeColors__(fireworkStar)

_Adds a color to the FireworkStar based on [`DyeColor`](../../DyeColor.md)<br> NOTE: If the [`DyeColor`](../../DyeColor.md) is `DyeColor#CUSTOM`, no action will be taken_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)

Returns | 
--- | 
`void` |


##### <a id='doesflicker'></a>public static function __doesFlicker__(fireworkStar)

_Gets whether the FireworkStar does flicker_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)

Returns | Description
--- | --- 
`boolean` | `true` if does flicker; `false` if not


##### <a id='addstarcolorsraw'></a>public static function __addStarColorsRaw__(fireworkStar)

_addStarColorsRaw method_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | fireworkStar argument

Returns | 
--- | 
`void` |


##### <a id='addstarcolors'></a>public static function __addStarColors__(fireworkStar)

_Adds a color to the FireworkStar based on [`DyeColor`](../../DyeColor.md)<br> NOTE: If the [`DyeColor`](../../DyeColor.md) is `DyeColor#CUSTOM`, no action will be taken_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)

Returns | 
--- | 
`void` |


##### <a id='setdoestrail'></a>public static function __setDoesTrail__(fireworkStar, trail)

_Sets whether the FireworkStar leaves a trail_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)
trail | `boolean` | `true` for trails; `false` for not

Returns | 
--- | 
`void` |


##### <a id='getexplosiontag'></a>public static function __getExplosionTag__(fireworkStar)

_Gets the Explosion tag of a Firework Star_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)

Returns | Description
--- | --- 
[`CompoundTag`](../../nbt/CompoundTag.md) | the [`CompoundTag`](../../nbt/CompoundTag.md) named Explosion


##### <a id='getattachedfireworkstars'></a>public static function __getAttachedFireworkStars__(fireworkRocket)

_Gets all the FireworkStar [`Item`](../Item.md)(s) attached to the FireworkRocket.<br> Manipulation of the stars should work without the need to re-attach.<br> Further use of the FireworkStar(s) will affect the FireworkRock._

Argument | Type | Description  
--- | --- | --- 
fireworkRocket | [`Item`](../Item.md) | the FireworkRocket [`Item`](../Item.md)

Returns | Description
--- | --- 
`Item[]` | the FireworkStar [`Item`](../Item.md) array


##### <a id='fromid'></a>public static function __fromId__(id)

_Gets an ExplosionType from the Type ID_

Argument | Type | Description  
--- | --- | --- 
id | `byte` | the ExplosionType ID

Returns | Description
--- | --- 
`ExplosionType` | the ExplosionType


##### <a id='removestarfadecolors'></a>public static function __removeStarFadeColors__(fireworkStar)

_Removes fade color(s) from the FireworkStar<br> NOTE: if the [`DyeColor`](../../DyeColor.md) is `DyeColor#CUSTOM` no actions will be performed_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)

Returns | 
--- | 
`void` |


##### <a id='getstarcolorsraw'></a>public static function __getStarColorsRaw__(fireworkStar)

_Gets the raw decimal colors of the FireworkStar_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)

Returns | Description
--- | --- 
`int[]` | a `int[]` of colors or empty


##### <a id='getflightduration'></a>public static function __getFlightDuration__(fireworkRocket)

_Gets the Flight Duration of the FireworkRocket<br> Flight Duration is normally a byte between 1 and 3_

Argument | Type | Description  
--- | --- | --- 
fireworkRocket | [`Item`](../Item.md) | the FireworkRocket [`Item`](../Item.md)

Returns | Description
--- | --- 
`byte` | flight duration byte or `0` if flight duration was not initialized


##### <a id='getstarcolors'></a>public static function __getStarColors__(fireworkStar)

_Gets the colors of the FireworkStar as a [`DyeColor`](../../DyeColor.md) array_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)

Returns | Description
--- | --- 
`DyeColor[]` | a [`DyeColor`](../../DyeColor.md) array if there are colors; `null` if no colors


##### <a id='removeallfadecolors'></a>public static function __removeAllFadeColors__(fireworkStar)

_Removes all the fade colors from the FireworkStar_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)

Returns | 
--- | 
`void` |


##### <a id='getstarfadecolors'></a>public static function __getStarFadeColors__(fireworkStar)

_Gets the colors of the FireworkStar as a [`DyeColor`](../../DyeColor.md) array_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)

Returns | Description
--- | --- 
`DyeColor[]` | a [`DyeColor`](../../DyeColor.md) array if there are colors; `null` if no colors


##### <a id='getstarexplosiontype'></a>public static function __getStarExplosionType__(fireworkStar)

_Gets the `ExplosionType` of the FireworkStar_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)

Returns | Description
--- | --- 
`ExplosionType` | the `ExplosionType` of the FireworkStar


##### <a id='hasflightdata'></a>public static function __hasFlightData__(fireworkRocket)

_Checks if the FireworkRocket has flight data_

Argument | Type | Description  
--- | --- | --- 
fireworkRocket | [`Item`](../Item.md) | the FireworkRocket [`Item`](../Item.md)

Returns | Description
--- | --- 
`boolean` | `true` if has data; `false` if not


##### <a id='setdoesflicker'></a>public static function __setDoesFlicker__(fireworkStar, flicker)

_Sets whether the FireworkStar does flicker_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)
flicker | `boolean` | `true` for flickering; `false` for not

Returns | 
--- | 
`void` |


##### <a id='removefireworkstars'></a>public static function __removeFireworkStars__(fireworkRocket)

_Attempts to remove FireworkStar [`Item`](../Item.md)(s) information from the FireworkRocket<br> Some Tags may be removed even if there is a failure to remove a tag.<br> For best results, use the FireworkStar object retrieved from the `#getAttachedFireworkStars` method._

Argument | Type | Description  
--- | --- | --- 
fireworkRocket | [`Item`](../Item.md) | the FireworkRocket [`Item`](../Item.md)

Returns | Description
--- | --- 
`boolean` | `true` if successfully removed all FireworkStars; `false` if one or more FireworkStars weren't removed


##### <a id='removestarcolors'></a>public static function __removeStarColors__(fireworkStar)

_Removes a color from the FireworkStar<br> NOTE: if the [`DyeColor`](../../DyeColor.md) is `DyeColor#CUSTOM` no actions will be performed_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)

Returns | 
--- | 
`void` |


##### <a id='removestarfadecolorsraw'></a>public static function __removeStarFadeColorsRaw__(fireworkStar)

_Removes fase color(s) from the FireworkStar_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)

Returns | 
--- | 
`void` |


##### <a id='getstarfadecolorsraw'></a>public static function __getStarFadeColorsRaw__(fireworkStar)

_Gets the raw decimal fade colors of the FireworkStar_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)

Returns | Description
--- | --- 
`int[]` | a `int[]` if there are colors; `null` if no colors


##### <a id='removestarcolorsraw'></a>public static function __removeStarColorsRaw__(fireworkStar)

_Removes a color from the FireworkStar_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)

Returns | 
--- | 
`void` |


##### <a id='setflightduration'></a>public static function __setFlightDuration__(fireworkRocket, duration)

_Gets the Flight Duration of the FireworkRocket<br> Flight Duration is normally a byte between 1 and 3<br>_

Argument | Type | Description  
--- | --- | --- 
fireworkRocket | [`Item`](../Item.md) | the FireworkRocket [`Item`](../Item.md)
duration | `byte` | the flight duration byte; if duration is less than 1 it is set to 1 or if duration is greater than 3 it is set to 3

Returns | 
--- | 
`void` |


##### <a id='setstarexplosiontype'></a>public static function __setStarExplosionType__(fireworkStar, explosion_type)

_Sets the `ExplosionType` type of the FireworkStar_

Argument | Type | Description  
--- | --- | --- 
fireworkStar | [`Item`](../Item.md) | the FireworkStar [`Item`](../Item.md)
explosion_type | `ExplosionType` | the `ExplosionType` type

Returns | 
--- | 
`void` |


---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

