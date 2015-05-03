## BannerPattern __class__

>io.wolfscript.api.inventory.helper.BannerPattern

---

### Class Overview

Container helper for Banner pattern shape and colors

Method | Type   
--- | :--- 
new __BannerPattern__(color, pattern) <br> _BannerPattern constructor_ | _constructor_
 readonly property __Color__ <br> _Color property_ | [`DyeColor`](..\..\DyeColor.md)
 readonly property __Pattern__ <br> _Pattern property_ | [`BannerPatterns`](BannerPatterns.md)
 function __asCompoundTag__() <br> _asCompoundTag method_ | [`CompoundTag`](..\..\nbt\CompoundTag.md)
final function __equals__(obj) <br> _equals method_ | `boolean`
static function __fromCompoundTag__(tag) <br> _Creates a BannerPattern from a [`CompoundTag`](..\..\nbt\CompoundTag.md)_ | [`BannerPattern`](BannerPattern.md)



---

### Public Constructors for [`BannerPattern`](BannerPattern.md)

##### <a id='bannerpattern'></a>new __BannerPattern__(color, pattern) 

_BannerPattern constructor_

Argument | Type | Description  
--- | --- | --- 
color | [`DyeColor`](..\..\DyeColor.md) | color argument
pattern | [`BannerPatterns`](BannerPatterns.md) | pattern argument

---

### Public Properties for [`BannerPattern`](BannerPattern.md)

##### <a id='color'></a>public  readonly property __Color__

_Color property_

Get | 
--- | 
[`DyeColor`](..\..\DyeColor.md) |



##### <a id='pattern'></a>public  readonly property __Pattern__

_Pattern property_

Get | 
--- | 
[`BannerPatterns`](BannerPatterns.md) |



---

### Public Methods for [`BannerPattern`](BannerPattern.md)

##### <a id='ascompoundtag'></a>public  function __asCompoundTag__()

_asCompoundTag method_

Returns | 
--- | 
[`CompoundTag`](..\..\nbt\CompoundTag.md) |


##### <a id='equals'></a>public final function __equals__(obj)

_equals method_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | 
--- | 
`boolean` |


##### <a id='fromcompoundtag'></a>public static function __fromCompoundTag__(tag)

_Creates a BannerPattern from a [`CompoundTag`](..\..\nbt\CompoundTag.md)_

Argument | Type | Description  
--- | --- | --- 
tag | [`CompoundTag`](..\..\nbt\CompoundTag.md) | the tag to grab data from, the tag should be the one from within the Patterns list tag

Returns | Description
--- | --- 
[`BannerPattern`](BannerPattern.md) | a new BannerPattern


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

