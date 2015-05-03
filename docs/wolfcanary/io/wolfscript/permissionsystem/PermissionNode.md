## PermissionNode __class__

>io.wolfscript.permissionsystem.PermissionNode

---

### Class Overview

A permission node. This represents a permission. Who would have thought

Method | Type   
--- | :--- 
 function __resolvePath__(index) <br> _ID in the database_ | `boolean`



---


### Public Methods for [`PermissionNode`](PermissionNode.md)

##### <a id='resolvepath'></a>public  function __resolvePath__(index)

_ID in the database /
    private int id;

    private Map<String, PermissionNode> childs = new HashMap<String, PermissionNode>();

    private PermissionNode parent = null;

    /** Create a new PermissionNode._

Argument | Type | Description  
--- | --- | --- 
index | `int` | the current index in the string array

Returns | Description
--- | --- 
`boolean` | the id /
    public int getId() {
        return id;
    }

    /** Set the database ID for this Node. <b style="color:red">Do not use this unless you're dead sure what you're doing! it is HIGHLY unlikely that you will need this</b>


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

