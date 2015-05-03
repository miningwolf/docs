## LightningStrike __class__

>io.wolfscript.event.world.LightningStrike
>Extends [`Hook`](..\..\hook\Hook.md)

---

### Class Overview

LightningStrike <p/> Called when a [`LightningBolt`](..\..\api\entity\effect\LightningBolt.md) strikes

Method | Type   
--- | :--- 
final function __toString__() <br> _Creates a new LightningStrike_ | `String`
 var __lightbolt__ <br> _lightbolt field_ | [`LightningBolt`](..\..\api\entity\effect\LightningBolt.md)
 |
__Inherited items from [`Hook`](..\..\hook\Hook.md)__ |
 function __call__() <br> _Get the name of this hook._ | [`Hook`](..\..\hook\Hook.md)





---


### Public Methods for [`LightningStrike`](LightningStrike.md)

##### <a id='tostring'></a>public final function __toString__()

_Creates a new LightningStrike_

Returns | Description
--- | --- 
`String` | the striking [`LightningBolt`](..\..\api\entity\effect\LightningBolt.md) /
    public LightningBolt getLightningBolt() {
        return lightbolt;
    }

    /** {@inheritDoc}


---

### Public Fields for [`LightningStrike`](LightningStrike.md)

##### <a id='lightbolt'></a>public  var __lightbolt__

_lightbolt field_

>Returns
>  [`LightningBolt`](..\..\api\entity\effect\LightningBolt.md)

---

### Public Methods for [`Hook`](..\..\hook\Hook.md)

##### <a id='call'></a>public  function __call__()

_Get the name of this hook._

Returns | Description
--- | --- 
[`Hook`](..\..\hook\Hook.md) | simple class name /
    public final String getHookName() {
        return getClass().getSimpleName();
    }

    @Override
    public int hashCode() {
        int hash = getClass().getSimpleName().length();

        return hash getClass().getSimpleName().hashCode() + 2;
    }

    /** Calls a Hook if not already executed


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

