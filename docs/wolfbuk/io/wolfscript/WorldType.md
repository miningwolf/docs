## WorldType __enum__

>io.wolfscript.WorldType

---

### Enum Overview

Represents various types of worlds that may exist

Item | Type   
--- | :--- 
NORMAL: "DEFAULT"<br> _NORMAL WorldType_ | WorldType
FLAT: "FLAT"<br> _FLAT WorldType_ | WorldType
VERSION_1_1: "DEFAULT_1_1"<br> _VERSION_1_1 WorldType_ | WorldType
LARGE_BIOMES: "LARGEBIOMES"<br> _LARGE_BIOMES WorldType_ | WorldType
AMPLIFIED: "AMPLIFIED"<br> _AMPLIFIED WorldType_ | WorldType
CUSTOMIZED: "CUSTOMIZED"<br> _CUSTOMIZED WorldType_ | WorldType
static function __getByName__(name) <br> _Gets the name of this WorldType_ | [`WorldType`](WorldType.md)



---


### Public Methods for [`WorldType`](WorldType.md)

##### <a id='getbyname'></a>public static function __getByName__(name)

_Gets the name of this WorldType_

Argument | Type | Description  
--- | --- | --- 
name | `String` | Name of the WorldType to get

Returns | Description
--- | --- 
[`WorldType`](WorldType.md) | Name of this type /
    public String getName() {
        return name;
    }

    /** Gets a Worldtype by its name


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

