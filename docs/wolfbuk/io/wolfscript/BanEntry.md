## BanEntry __interface__

>io.wolfscript.BanEntry

---

### Interface Overview

A single entry from a ban list. This may represent either a player ban or an IP ban. <p> Ban entries include the following properties: <table border=1> <caption>Property information</caption> <tr> <th>Property</th> <th>Description</th> </tr><tr> <td>Target Name / IP Address</td> <td>The target name or IP address</td> </tr><tr> <td>Creation Date</td> <td>The creation date of the ban</td> </tr><tr> <td>Source</td> <td>The source of the ban, such as a player, console, plugin, etc</td> </tr><tr> <td>Expiration Date</td> <td>The expiration date of the ban</td> </tr><tr> <td>Reason</td> <td>The reason for the ban</td> </tr> </table> <p> Unsaved information is not automatically written to the implementation's ban list, instead, the `#save()` method must be called to write the changes to the ban list. If this ban entry has expired (such as from an unban) and is no longer found in the list, the `#save()` call will re-add it to the list, therefore banning the victim specified. <p> Likewise, changes to the associated `BanList` or other entries may or may not be reflected in this entry.

Method | Type   
--- | :--- 
 function __save__() <br> _Gets the target involved. This may be in the form of an IP or a player_ | `void`



---


### Public Methods for [`BanEntry`](BanEntry.md)

##### <a id='save'></a>public  function __save__()

_Gets the target involved. This may be in the form of an IP or a player name._

Returns | Description
--- | --- 
`void` | the target name or IP address /
    public String getTarget();

    /** Gets the date this ban entry was created.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

