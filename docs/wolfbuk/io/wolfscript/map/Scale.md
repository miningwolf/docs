## Scale __enum__

>io.wolfscript.map.Scale

---

### Enum Overview

Represents a map item. /
public interface MapView {

    /** An enum representing all possible scales a map can be set to.

Item | Type   
--- | :--- 
CLOSEST: 0<br> _CLOSEST Scale_ | Scale
CLOSE: 1<br> _CLOSE Scale_ | Scale
NORMAL: 2<br> _NORMAL Scale_ | Scale
FAR: 3<br> _FAR Scale_ | Scale
FARTHEST: 4<br> _FARTHEST Scale_ | Scale



---


### Public Properties for [`Scale`](Scale.md)

##### <a id='value'></a>public  readonly property __Value__
_Deprecated: Magic value /
        @Deprecated
        public static Scale valueOf(byte value) {
            switch (value) {
            case 0: return CLOSEST;
            case 1: return CLOSE;
            case 2: return NORMAL;
            case 3: return FAR;
            case 4: return FARTHEST;
            default: return null;
            }
        }

        /** Get the raw value of this scale level. Magic value_

_Get: Get the scale given the raw value._

Get | Description
--- | --- 
`byte` | The enum scale, or null for an invalid input



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

