## ArmorStand __interface__

>io.wolfscript.api.entity.ArmorStand
>Extends [`LivingBase`](living/LivingBase.md)

---

### Interface Overview

ArmorStand wrapper

Method | Type   
--- | :--- 
final var __bitOffset__ <br> _The Equipment slots_ | `int`
final var __slotOffsets__ <br> _Slot offsets are ordered by slot id_ | `int[]`
 |
__Inherited items from [`LivingBase`](living/LivingBase.md)__ |
 |
__Inherited items from [`Entity`](Entity.md)__ |







---


### Public Fields for [`ArmorStand`](ArmorStand.md)

##### <a id='bitoffset'></a>public final var __bitOffset__

_The Equipment slots /
    enum Slot {
        /** Held Item slot /
        HOLDING,
        /** Feet (Boots) slot /
        FEET,
        /** Legs (Leggings) slot /
        LEGS,
        /** Body (Chestplate) slot /
        BODY,
        /** Head (Helmet/Skull) slot /
        HEAD
    }

    /** Disablitity flags for the Slots /
    enum Disability {
        /** Flags for removing equipment /
        REMOVE(new int[]{ 1, 2, 4, 8, 16 }),
        /** Flags for replacing equipment /
        REPLACE(new int[]{ 256, 512, 1024, 2048, 4096 }),
        /** Flags for placing equipment /
        PLACE(new int[]{ 65536, 131072, 262144, 524288, 1048576 });

        /** Overall bitwise offsets_

>Returns
>  `int`

##### <a id='slotoffsets'></a>public final var __slotOffsets__

_Slot offsets are ordered by slot id_

>Returns
>  `int[]`

---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

