## WolfScript __class__

>io.wolfscript.WolfScript

---

### Class Overview

Represents the WolfScript core, for version and Server singleton handling

Method | Type   
--- | :--- 



---


### Public Properties for [`WolfScript`](WolfScript.md)

##### <a id='unsafe'></a>public static readonly property __Unsafe__
_Deprecated: superseded by {@link #getOnlinePlayers()} Use {@link #getPlayer(UUID)} as player names are no longer guaranteed to be unique Use {@link #getPlayer(UUID)} as player names are no longer guaranteed to be unique Use {@link #getPlayer(UUID)} as player names are no longer guaranteed to be unique Magic value /
    @Deprecated
    public static MapView getMap(short id) {
        return server.getMap(id);
    }

    /** Create a new map with an automatically assigned ID. Persistent storage of users should be by UUID as names are no longer unique past a single session._

_Get: Static class cannot be initialized. /
    private WolfScript() {}

    /** Gets the current [`Server`](Server.md) singleton_

Get | Description
--- | --- 
[`UnsafeValues`](UnsafeValues.md) | Server instance being ran /
    public static Server getServer() {
        return server;
    }

    /** Attempts to set the [`Server`](Server.md) singleton. <p> This cannot be done if the Server is already set.



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

