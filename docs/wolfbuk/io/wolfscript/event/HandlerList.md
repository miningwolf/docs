## HandlerList __class__

>io.wolfscript.event.HandlerList

---

### Class Overview

A list of event handlers, stored per-event. Based on lahwran's fevents.

Method | Type   
--- | :--- 
static readonly property __HandlerLists__ <br> _Get: Handler array. This field being an array is the key to this system's_ | `ArrayList<HandlerList>`



---


### Public Properties for [`HandlerList`](HandlerList.md)

##### <a id='handlerlists'></a>public static readonly property __HandlerLists__

_Get: Handler array. This field being an array is the key to this system's speed. /
    private volatile RegisteredListener[] handlers = null;

    /** Dynamic handler lists. These are changed using register() and unregister() and are automatically baked to the handlers array any time they have changed. /
    private final EnumMap<EventPriority, ArrayList<RegisteredListener>> handlerslots;

    /** List of all HandlerLists which have been created, for use in bakeAll() /
    private static ArrayList<HandlerList> allLists = new ArrayList<HandlerList>();

    /** Bake all handler lists. Best used just after all normal event registration is complete, ie just after all plugins are loaded if you're using fevents in a plugin system. /
    public static void bakeAll() {
        synchronized (allLists) {
            for (HandlerList h : allLists) {
                h.bake();
            }
        }
    }

    /** Unregister all listeners from all handler lists. /
    public static void unregisterAll() {
        synchronized (allLists) {
            for (HandlerList h : allLists) {
                synchronized (h) {
                    for (List<RegisteredListener> list : h.handlerslots.values()) {
                        list.clear();
                    }
                    h.handlers = null;
                }
            }
        }
    }

    /** Unregister a specific plugin's listeners from all handler lists._

Get | Description
--- | --- 
`ArrayList<HandlerList>` | the array of registered listeners /
    public RegisteredListener[] getRegisteredListeners() {
        RegisteredListener[] handlers;
        while ((handlers = this.handlers) == null) bake(); // This prevents fringe cases of returning null
        return handlers;
    }

    /** Get a specific plugin's registered listeners associated with this handler list



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

