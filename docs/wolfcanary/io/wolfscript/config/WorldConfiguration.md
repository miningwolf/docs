## WorldConfiguration __class__

>io.wolfscript.config.WorldConfiguration
>Implements [`ConfigurationContainer`](ConfigurationContainer.md)

---

### Class Overview

class WorldConfiguration

Method | Type   
--- | :--- 
new __WorldConfiguration__(path, worldname) <br> _WorldConfiguration constructor_ | _constructor_
static function __create__(name, dimensionType) <br> _Reloads the configuration file_ | [`WorldConfiguration`](WorldConfiguration.md)



---

### Public Constructors for [`WorldConfiguration`](WorldConfiguration.md)

##### <a id='worldconfiguration'></a>new __WorldConfiguration__(path, worldname) 

_WorldConfiguration constructor_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument
worldname | `String` | worldname argument

---

### Public Methods for [`WorldConfiguration`](WorldConfiguration.md)

##### <a id='create'></a>public static function __create__(name, dimensionType)

_Reloads the configuration file /
    @Override
    public void reload() {
        cfg.reload();
        verifyConfig();
    }

    /** Get the configuration file /
    @Override
    public PropertiesFile getFile() {
        return cfg;
    }

    /** Verifies the world configuration file /
    private void verifyConfig() {
        cfg.getString("world-name", worldname);
        cfg.getString("world-type", "DEFAULT");
        cfg.getInt("spawn-protection", 16);
        cfg.getInt("max-build-height", 256);
        cfg.getBoolean("generate-structures", true);
        cfg.getString("generator-settings", "");
        cfg.getString("world-seed", "");

        cfg.getBoolean("startup-autoload", false);
        cfg.getBoolean("warp-autoload", false);

        cfg.getBoolean("allow-nether", true);
        cfg.getBoolean("allow-end", true);
        cfg.getBoolean("allow-flight", true);

        cfg.getBoolean("pvp", true);
        cfg.getInt("difficulty", 1);
        cfg.getInt("gamemode", 0);
        cfg.getBoolean("forceDefaultGameMode", true);
        cfg.getBoolean("forceDefaultGameModeDimensional", false);
        cfg.getString("auto-heal", "default");
        cfg.getBoolean("enable-experience", true);
        cfg.getBoolean("enable-health", true);

        cfg.getBoolean("spawn-villagers", true);
        cfg.getBoolean("spawn-golems", true);
        cfg.getBoolean("spawn-animals", true);
        cfg.getBoolean("spawn-monsters", true);
        spawnableAnimals = new HashSet<String>(Arrays.asList(cfg.getStringArray("natural-animals", animals)));
        spawnableMobs = new HashSet<String>(Arrays.asList(cfg.getStringArray("natural-monsters", monsters)));
        spawnableGolems = new HashSet<String>(Arrays.asList(cfg.getStringArray("natural-golems", golems)));
        spawnableWaterAnimals = new HashSet<String>(Arrays.asList(cfg.getStringArray("natural-wateranimals", wateranimals)));
        cfg.getInt("natural-spawn-rate", 100);

        cfg.getIntArray("ender-blocks", enderblocks);
        cfg.getIntArray("disallowed-blocks", disallowedblocks);

        cfg.save();
    }

    private boolean getBoolean(String key, boolean def) {
        Boolean r = boolCache.get(key);
        if (r != null) {
            return r;
        }
        r = cfg.getBoolean(key, def);
        boolCache.put(key, r);
        return r;
    }

    /** Get the spawn protection size_

Argument | Type | Description  
--- | --- | --- 
name | `String` | the name of the Animal
dimensionType | [`DimensionType`](..\api\world\DimensionType.md) | [`DimensionType`](..\api\world\DimensionType.md) of the world

Returns | Description
--- | --- 
[`WorldConfiguration`](WorldConfiguration.md) | an integer between 0 and INTMAX, 16 on failure. /
    public int getSpawnProtectionSize() {
        return cfg.getInt("spawn-protection", 16);
    }

    /** Get whether auto heal is enabled.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

