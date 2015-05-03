## ReservelistProvider __class__

>io.wolfscript.user.ReservelistProvider

---

### Class Overview

Reserve List Provider

Method | Type   
--- | :--- 
new __ReservelistProvider__() <br> _ReservelistProvider constructor_ | _constructor_
 readonly property __Reservations__ <br> _Get: Reload the reservelist from database_ | `String[]`



---

### Public Constructors for [`ReservelistProvider`](ReservelistProvider.md)

##### <a id='reservelistprovider'></a>new __ReservelistProvider__() 

_ReservelistProvider constructor_


---

### Public Properties for [`ReservelistProvider`](ReservelistProvider.md)

##### <a id='reservations'></a>public  readonly property __Reservations__

_Get: Reload the reservelist from database /
    public void reload() {
        reservelist = backbonereservelist.loadReservelist();
    }

    /** Check if a given player is reservelist._

Get | Description
--- | --- 
`String[]` | `true` /
    public boolean isSlotReserved(String nameOrUUID) {
        // Did UUID get passed?
        if (ToolBox.isUUID(nameOrUUID)) {
            return reservelist.contains(nameOrUUID);
        }
        else if (Wolf.getServer() != null) { // Like at start up...
            // Try to get a UUID reference from a known player
            return isSlotReserved(Wolf.getServer().matchKnownPlayer(nameOrUUID));
        }
        else {
            return false;
        }
    }

    public boolean isSlotReserved(PlayerReference playerReference) {
        if (playerReference != null) {
            // Lets update to UUID if we can get a UUID
            if (reservelist.contains(playerReference.getName())) {
                if (playerReference.getUUIDString() != null) {
                    removePlayer(playerReference.getName());
                    addPlayer(playerReference.getUUIDString());
                }
                return true;
            }
            // UUID test it is
            return reservelist.contains(playerReference.getUUIDString());
        }
        return false;
    }

    /** Adds a new whitelist entry



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

