## Kit __class__

>io.wolfscript.kit.Kit

---

### Class Overview

Contains information about a kit

Method | Type   
--- | :--- 
  property __Id__ <br> _Get: get the ID of this kit<br>Set: Only set this if you're 110% sure what you're doing._ | `int`
 readonly property __ItemsAsStringList__ <br> _Get: Mostly used for adding the items into the database_ | `List<String>`
  property __Name__ <br> _Name property_ | `String`
 function __canBeGiven__(player) <br> _Time between uses as unix timestamp applicable number_ | `boolean`
 function __giveKit__(player, override) <br> _Give this kit to player, if possible_ | `boolean`
 function __setContentFromStrings__() <br> _Used to create a new item list from data coming from the database_ | `void`



---


### Public Properties for [`Kit`](Kit.md)

##### <a id='id'></a>public   property __Id__

_Get: get the ID of this kit<br>Set: Only set this if you're 110% sure what you're doing. Changing the ID will not always have an effect. If you want to copy a kit and create a new one, change this kit to your likings, then add it as new to the BackboneKits. A new ID will be auto-assigned then._

Get | 
--- | 
`int` |

Set | Type | Description  
--- | --- | --- 
id | `int` | id argument


##### <a id='itemsasstringlist'></a>public  readonly property __ItemsAsStringList__

_Get: Mostly used for adding the items into the database_

Get | 
--- | 
`List<String>` |



##### <a id='name'></a>public   property __Name__

_Name property_

Get | 
--- | 
`String` |

Set | Type | Description  
--- | --- | --- 
name | `String` | name argument


---

### Public Methods for [`Kit`](Kit.md)

##### <a id='canbegiven'></a>public  function __canBeGiven__(player)

_Time between uses as unix timestamp applicable number /
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

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the `Player` to check

Returns | Description
--- | --- 
`boolean` | `true` if can be given; `false` if not


##### <a id='givekit'></a>public  function __giveKit__(player, override)

_Give this kit to player, if possible_

Argument | Type | Description  
--- | --- | --- 
player | `Player` | the `Player` to give a kit too
override | `boolean` | set to true to override delay, group, and owner checks

Returns | Description
--- | --- 
`boolean` | `true` if successful; `false` if not


##### <a id='setcontentfromstrings'></a>public  function __setContentFromStrings__()

_Used to create a new item list from data coming from the database_

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

