## Group __class__

>io.wolfscript.user.Group

---

### Class Overview

Represents a player group

Method | Type   
--- | :--- 
 function __toDataAccess__() <br> _ID for retrieving permissions from the database_ | [`GroupDataAccess`](..\backbone\GroupDataAccess.md)



---


### Public Methods for [`Group`](Group.md)

##### <a id='todataaccess'></a>public  function __toDataAccess__()

_ID for retrieving permissions from the database /
    private int id;

    /** Group Name /
    private String name;

    /** Group Prefix/Color /
    private String prefix = null;

    /** The fully qualified world name valid for this group. If this group is valid for all worlds, this may be null /
    private String worldName = null;

    /** The permission provider for querying permissions etc. /
    private PermissionProvider permissions;

    /** List of groups this group inherits/has control over /
    private List<Group> childGroups = new ArrayList<Group>();

    /** The parent group (the group this group is a child of). Parents have control over their childs /
    private Group parent = null;

    /** Is true if it's the default group /
    private boolean defaultGroup = false;

    /** Check if this group can ignore restrictions_

Returns | Description
--- | --- 
[`GroupDataAccess`](..\backbone\GroupDataAccess.md) | `true` if can Ignore Restrictions /
    public boolean canIgnorerestrictions() {
        return hasPermission("wolf.super.ignoreRestrictions");
    }

    /** Check if this group is an administrative groups


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

