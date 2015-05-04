# WolfScript by Mining Wolf

### Getting started  (Preferred WolfBuk API)

Place `wolfscript.jar` in the `/plugins` directory of the Spigot (or Bukkit or CraftBukkit) server. 

Create a new subdirectory `wolftest` of `/plugins`

In /plugins/wolftest, place two files

#### Package.json

``` js
{
  "name": "wolftest",
  "version": "1.0.0",
  "description": "WolfTest plugin for WolfScript",
  "main": "main.js",
  "language": "wolfscript",
  "author": "YourName"
}
 ```

#### main.js

``` js
exports.enable = function (){ 
    this.getLogger().info("Hello World");
 };
exports.disable = function (){};
 ```
 
 
Run the server from the root of the minecraft (spigot) server directory (contains spigot.jar, the plugins folder)
 
     java -jar spigot.jar

Tip:  use npm to package and distribute your wolf packs.  The wolfscript plugin will look in both the plugins directory as well as the node_modules subdirectory.

Tip:  if this is the first time running spigot.jar you will need to accept the EULA for Minecraft.  Try running once, then edit eula.txt (change "false" to "true") then rerun.


### Getting started (Alternate WolfCanary API)

Place `wolfscript.jar` in the `/pluginlangs` directory of the CanaryMod server. 

Edit `server.cfg` to include `plugin-dev-mode=true` (to allow loading of plugins from directories, unless you want to zip or jar your WolfScript plugins).

Create a new subdirectory `wolftest` of `/plugins`

In /plugins/wolftest, place two files

#### Canary.inf

    main-class = main.js
    isLibrary = false
    name = wolftest
    author = Mining Wolf
    language=wolfscript
    version = 1.0

#### main.js

``` js
exports.enable = function (){ 
    this.getLogger().info("Hello World");
 };
exports.disable = function (){};
 ```
 
 
Run the server from the root of the canarymod server directory (contains canarymod.jar, the plugins, and pluginlangs folders)
 
     java -jar canarymod.jar


Tip:  use npm to package and distribute your wolf packs.  For now, you just need a Canary.inf in the home directory of each wolf pack.

### Building the source code

Build with 

    ant

