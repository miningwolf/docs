# WolfScript by Mining Wolf Reference Documentations

##### A Node.js javascript language Plugin for Spigot/Bukkit/CraftBukkit and CanaryMod Minecraft Servers

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/miningwolf/wolfscript?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

### About

This repository contains the reference documentation for writing Minecraft plugins.  
It allows you to write server plugins/mods in JavasScript and makes available the full Node.js API 
and a game API that is equivalent to the full Minecraft Server API (two flavors of this API are provided:
WolfBuk and WolfCanary for Bukkit/Spigot and CanaryMod servers respectively).

* Anything you can do in Java you can do in WolfScript, with few exceptions.

* Anything you can do in Node.js (or io.js) you can do in WolfScript, with few exceptions.

# WolfScript Reference

Topic | Description
--- | ---
[WolfScript Events](./docs/wolfbuk/Events.md) | Events raised by Minecraft Server
[WolfNode](./docs/wolfnode/documentation.md) | WolfNode (Node.js) API Reference
[WolfBuk](./docs/wolfbuk/io/wolfscript/0.md) | WolfServer (WolfBuk API) Reference
[WolfCanary](./docs/wolfbuk/io/wolfscript/0.md) | WolfServer (WolfCanary API) Reference

# Build / regenerate documentation

1. Install npm dependencies (gulp, lime-razor, etc.)

``` bash
npm install
gulp clean
gulp checkout
```

2. Create json, markdown and html documentation

``` bash
gulp 
```


### License

Documentation Open-sourced under GPLv3 license.
WolfScript Open-Sourced under Apache V2 license.

### Disclaimers and Relationship to Other Work

Any source code from the Minecraft Server, the CanaryMod Server, the Spigot API, or Node.js is not owned by Mining Wolf or its contributors and is not covered by above license.

Usage of source code from the Minecraft Server is subject to the Minecraft End User License Agreement as set forth by Mojang AB.

Usage of source code and documentation from Node.js is subject to the Node.js End User License Agreement as set forth by Joyent.

"Minecraft" is a trademark of Notch Development AB
"CanaryMod" name is used under license from FallenMoonNetwork.
""

This site is largely system generated using custom open source scripts developed by MiningWolf. 

