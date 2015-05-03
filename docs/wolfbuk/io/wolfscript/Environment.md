## Environment __enum__

>io.wolfscript.Environment

---

### Enum Overview

Represents a world, which may contain entities, chunks and blocks /
public interface World extends PluginMessageRecipient, Metadatable {

    /** Gets the [`Block`](block\Block.md) at the given coordinates

Item | Type   
--- | :--- 
THE_END: 1<br> _Represents the "normal"/"surface world" map_ | Environment



---


### Public Methods for [`Environment`](Environment.md)

##### <a id='getenvironment'></a>public static function __getEnvironment__(id)
_Deprecated: Magic value /
        @Deprecated
        public int getId() {
            return id;
        }

        /** Get an environment by ID Magic value_

_Represents the "normal"/"surface world" map /
        NORMAL(0),
        /** Represents a nether based map ("hell") /
        NETHER(-1),
        /** Represents the "end" map /
        THE_END(1);

        private final int id;
        private static final Map<Integer, Environment> lookup = new HashMap<Integer, Environment>();

        private Environment(int id) {
            this.id = id;
        }

        /** Gets the dimension ID of this environment_

Argument | Type | Description  
--- | --- | --- 
id | `int` | The ID of the environment

Returns | Description
--- | --- 
[`Environment`](Environment.md) | dimension ID


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	
