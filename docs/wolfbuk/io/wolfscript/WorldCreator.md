## WorldCreator __class__

>io.wolfscript.WorldCreator

---

### Class Overview

Represents various types of options that may be used to create a world.

Method | Type   
--- | :--- 
static function __getGeneratorForName__(world, name, output) <br> _Creates an empty WorldCreationOptions for the given world name_ | `ChunkGenerator`



---


### Public Methods for [`WorldCreator`](WorldCreator.md)

##### <a id='getgeneratorforname'></a>public static function __getGeneratorForName__(world, name, output)

_Creates an empty WorldCreationOptions for the given world name_

Argument | Type | Description  
--- | --- | --- 
world | `String` | World to copy options from
name | `String` | Name of the world that will be created /
    public WorldCreator(String name) {
        if (name == null) {
            throw new IllegalArgumentException("World name cannot be null");
        }

        this.name = name;
        this.seed = (new Random()).nextLong();
    }

    /** Copies the options from the specified world
output | [`CommandSender`](command\CommandSender.md) | [`CommandSender`](command\CommandSender.md) that will receive any error messages

Returns | Description
--- | --- 
`ChunkGenerator` | This object, for chaining /
    public WorldCreator copy(World world) {
        if (world == null) {
            throw new IllegalArgumentException("World cannot be null");
        }

        seed = world.getSeed();
        environment = world.getEnvironment();
        generator = world.getGenerator();

        return this;
    }

    /** Copies the options from the specified [`WorldCreator`](WorldCreator.md)


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

