## RailPoweredProperties __class__

>io.wolfscript.api.world.blocks.properties.helpers.RailPoweredProperties
>Extends `RailProperties`

---

### Class Overview

Rail powered properties helper<br/> Applies to:<br/> <ul>Activator Rail</ul> <ul>Detector Rail</ul> <ul>Powered Rail</ul>

Method | Type   
--- | :--- 
static function __applyPowered__(block, value) <br> _Powered and Activator Rail powered property, Values: true, false_ | [`Block`](..\..\Block.md)
static final var __poweredDectectorRail__ <br> _Powered and Activator Rail powered property, Values: true, false_ | [`BlockBooleanProperty`](..\BlockBooleanProperty.md)



---


### Public Methods for [`RailPoweredProperties`](RailPoweredProperties.md)

##### <a id='applypowered'></a>public static function __applyPowered__(block, value)

_Powered and Activator Rail powered property, Values: true, false /
    public static final BlockBooleanProperty poweredPoweredRail = getInstanceFor(PoweredRail, "powered");

    /** Detector Rail powered property, Values: true, false /
    public static final BlockBooleanProperty poweredDectectorRail = getInstanceFor(DetectorRail, "powered");

    /** Applies whether the `Rail` is powered or not_

Argument | Type | Description  
--- | --- | --- 
block | [`Block`](..\..\Block.md) | the [`Block`](..\..\Block.md) to be modified
value | `boolean` | the `boolean` value to apply

Returns | Description
--- | --- 
[`Block`](..\..\Block.md) | the Block with adjusted state (NOTE: Original Block object is also modified, using the return is unnecessary)


---

### Public Fields for [`RailPoweredProperties`](RailPoweredProperties.md)

##### <a id='powereddectectorrail'></a>public static final var __poweredDectectorRail__

_Powered and Activator Rail powered property, Values: true, false /
    public static final BlockBooleanProperty poweredPoweredRail = getInstanceFor(PoweredRail, "powered");

    /** Detector Rail powered property, Values: true, false_

>Returns
>  [`BlockBooleanProperty`](..\BlockBooleanProperty.md)

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

