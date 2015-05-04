## TravelAgent __interface__

>io.wolfscript.TravelAgent

---

### Interface Overview

The Travel Agent handles the creation and the research of Nether and End portals when Entities try to use one. <p> It is used in [`EntityPortalEvent`](event/entity/EntityPortalEvent.md) and in [`PlayerPortalEvent`](event/player/PlayerPortalEvent.md) to help developers reproduce and/or modify Vanilla behaviour.

Method | Type   
--- | :--- 
  property __CanCreatePortal__ <br> _Get: Returns whether the TravelAgent will attempt to create a destination<br>Set: Sets whether the TravelAgent should attempt to create a destination_ | `boolean`
  property __CreationRadius__ <br> _Get: Gets the maximum radius from the given location to create a portal.<br>Set: Sets the maximum radius from the given location to create a portal._ | `int`
  property __SearchRadius__ <br> _Get: Gets the search radius value for finding an available portal.<br>Set: Set the Block radius to search in for available portals._ | `int`
 function __createPortal__(location) <br> _Attempt to create a portal near the given location._ | `boolean`
 function __findOrCreate__(location) <br> _Attempt to find a portal near the given location, if a portal is not_ | `Location`
 function __findPortal__(location) <br> _Attempt to find a portal near the given location._ | `Location`



---


### Public Properties for [`TravelAgent`](TravelAgent.md)

##### <a id='cancreateportal'></a>public   property __CanCreatePortal__

_Get: Returns whether the TravelAgent will attempt to create a destination portal or not.<br>Set: Sets whether the TravelAgent should attempt to create a destination portal or not._

Get | Description
--- | --- 
`boolean` | whether the TravelAgent should create a destination portal or not

Set | Type | Description  
--- | --- | --- 
create | `boolean` | Sets whether the TravelAgent should create a destination portal or not


##### <a id='creationradius'></a>public   property __CreationRadius__

_Get: Gets the maximum radius from the given location to create a portal.<br>Set: Sets the maximum radius from the given location to create a portal._

Get | Description
--- | --- 
`int` | this travel agent

Set | Type | Description  
--- | --- | --- 
radius | `int` | the radius in which to create a portal from the location


##### <a id='searchradius'></a>public   property __SearchRadius__

_Get: Gets the search radius value for finding an available portal.<br>Set: Set the Block radius to search in for available portals._

Get | Description
--- | --- 
`int` | this travel agent

Set | Type | Description  
--- | --- | --- 
radius | `int` | the radius in which to search for a portal from the location


---

### Public Methods for [`TravelAgent`](TravelAgent.md)

##### <a id='createportal'></a>public  function __createPortal__(location)

_Attempt to create a portal near the given location. <p> In the case of a Nether portal teleportation, this will attempt to create a Nether portal. <p> In the case of an Ender portal teleportation, this will (re-)create the obsidian platform and clean blocks above it._

Argument | Type | Description  
--- | --- | --- 
location | `Location` | the desired location of the portal

Returns | Description
--- | --- 
`boolean` | true if a portal was successfully created


##### <a id='findorcreate'></a>public  function __findOrCreate__(location)

_Attempt to find a portal near the given location, if a portal is not found it will attempt to create one._

Argument | Type | Description  
--- | --- | --- 
location | `Location` | the location where the search for a portal should begin

Returns | Description
--- | --- 
`Location` | the location of a portal which has been found or returns the location passed to the method if unsuccessful


##### <a id='findportal'></a>public  function __findPortal__(location)

_Attempt to find a portal near the given location._

Argument | Type | Description  
--- | --- | --- 
location | `Location` | the desired location of the portal

Returns | Description
--- | --- 
`Location` | the location of the nearest portal to the location


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

