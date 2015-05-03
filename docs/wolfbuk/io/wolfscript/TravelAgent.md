## TravelAgent __interface__

>io.wolfscript.TravelAgent

---

### Interface Overview

The Travel Agent handles the creation and the research of Nether and End portals when Entities try to use one. <p> It is used in [`EntityPortalEvent`](event\entity\EntityPortalEvent.md) and in [`PlayerPortalEvent`](event\player\PlayerPortalEvent.md) to help developers reproduce and/or modify Vanilla behaviour.

Method | Type   
--- | :--- 
 function __createPortal__(location) <br> _Set the Block radius to search in for available portals._ | `boolean`



---


### Public Methods for [`TravelAgent`](TravelAgent.md)

##### <a id='createportal'></a>public  function __createPortal__(location)

_Set the Block radius to search in for available portals._

Argument | Type | Description  
--- | --- | --- 
location | `Location` | the location where the search for a portal should begin

Returns | Description
--- | --- 
`boolean` | this travel agent /
    public TravelAgent setSearchRadius(int radius);

    /** Gets the search radius value for finding an available portal.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

