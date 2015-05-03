## Ban __class__

>io.wolfscript.bansystem.Ban

---

### Class Overview

Contains information regarding a ban

Method | Type   
--- | :--- 
 writeonly property __IssuedDate__ <br> _Set: Create a default ban object._ | `void`



---


### Public Properties for [`Ban`](Ban.md)

##### <a id='issueddate'></a>public  writeonly property __IssuedDate__

_Set: Create a default ban object. It's highly recommended to override the values before saving to db /
    public Ban() {
        this.uuid = "f84c6a790a4e45e0879bcd49ebd4c4e2";
        this.subject = "John Doe";
        this.reason = "Impersonating fictive characters";
    }

    public Ban(PlayerReference player, String reason, boolean ipBan) {
        this(player, reason, -1, ipBan);
    }

    public Ban(PlayerReference player, String reason, long expiration, boolean ipBan) {
        this(player, reason, expiration, ipBan ? BanType.IP : BanType.UUID);
    }

    public Ban(PlayerReference player, String reason, BanType banType) {
        this(player, reason, -1, banType);
    }

    public Ban(PlayerReference player, String reason, long expiration, BanType banType) {
        this.uuid = player.getUUIDString();
        this.subject = player.getName();
        this.reason = reason;
        this.expiration = expiration;

        if(banType == BanType.IP) {
            this.ip = player.getIP();
            this.banType = BanType.IP;
        }
    }

    /** Get the banned subject (usually a player name)_

Get | Description
--- | --- 
`void` | subject name /
    public String getSubject() {
        return subject;
    }

    /** Set the banned Subject (usually a player name)

Set | Type | Description  
--- | --- | --- 
issued | `long` | UNIX timestamp


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

