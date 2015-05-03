## Kit __class__

>io.wolfscript.kit.Kit

---

### Class Overview

Contains information about a kit

Method | Type   
--- | :--- 
 writeonly property __Id__ <br> _Set: Time between uses as unix timestamp applicable number_ | `void`



---


### Public Properties for [`Kit`](Kit.md)

##### <a id='id'></a>public  writeonly property __Id__

_Set: Time between uses as unix timestamp applicable number /
    private int delay;

    /** Owner if applicable /
    private String[] owners = null;

    /** Groups if applicable /
    private String[] groups = null;

    /** List of last usages per player /
    private Map<String, Long> lastUsages = new HashMap<String, Long>();

    private String name;

    /** The content of this kit as IItems Each list entry shall be a different Item /
    private List<Item> content = new ArrayList<Item>();

    public int getDelay() {
        return delay;
    }

    public void setDelay(int delay) {
        this.delay = delay;
    }

    public String[] getOwner() {
        return owners;
    }

    public void setOwner(String[] owner) {
        this.owners = owner;
    }

    public String[] getGroups() {
        return groups;
    }

    public void setGroups(String[] groups) {
        this.groups = groups;
    }

    public List<Item> getContent() {
        return content;
    }

    public void setContent(ArrayList<Item> content) {
        this.content = content;
    }

    /** Tests if a given `Player` can receive this kit_

Get | Description
--- | --- 
`void` | `true` if can be given; `false` if not /
    public boolean canBeGiven(Player player) {
        if (owners != null && owners.length > 0) {
            for (String owner : owners) {
                if (owner.equals(player.getName())) {
                    return true;
                }
            }
            return false;
        }
        if (groups != null && groups.length > 0) {
            for (String g : groups) {
                if (player.getGroup().hasControlOver(Wolf.usersAndGroups().getGroup(g))) {
                    return true;
                }
                else if (player.isInGroup(g, false)) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }

    /** Give this kit to player, if possible

Set | Type | Description  
--- | --- | --- 
id | `int` | id argument


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

