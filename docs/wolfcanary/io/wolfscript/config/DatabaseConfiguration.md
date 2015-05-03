## DatabaseConfiguration __class__

>io.wolfscript.config.DatabaseConfiguration
>Implements [`ConfigurationContainer`](ConfigurationContainer.md)

---

### Class Overview

Database Configuration settings

Method | Type   
--- | :--- 
new __DatabaseConfiguration__(path) <br> _DatabaseConfiguration constructor_ | _constructor_
 readonly property __BansTableName__ <br> _BansTableName property_ | `String`
 readonly property __GroupsTableName__ <br> _GroupsTableName property_ | `String`
 readonly property __KitsTableName__ <br> _KitsTableName property_ | `String`
 readonly property __MaxConnectionIdleTime__ <br> _Get: Reloads the configuration file_ | `int`
 readonly property __OpertatorsTableName__ <br> _OpertatorsTableName property_ | `String`
 readonly property __PermissionsTableName__ <br> _PermissionsTableName property_ | `String`
 readonly property __PlayersTableName__ <br> _PlayersTableName property_ | `String`
 readonly property __ReservelistTableName__ <br> _ReservelistTableName property_ | `String`
 readonly property __WarpsTableName__ <br> _WarpsTableName property_ | `String`
 readonly property __WhitelistTableName__ <br> _WhitelistTableName property_ | `String`



---

### Public Constructors for [`DatabaseConfiguration`](DatabaseConfiguration.md)

##### <a id='databaseconfiguration'></a>new __DatabaseConfiguration__(path) 

_DatabaseConfiguration constructor_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

---

### Public Properties for [`DatabaseConfiguration`](DatabaseConfiguration.md)

##### <a id='banstablename'></a>public  readonly property __BansTableName__

_BansTableName property_

Get | 
--- | 
`String` |



##### <a id='groupstablename'></a>public  readonly property __GroupsTableName__

_GroupsTableName property_

Get | 
--- | 
`String` |



##### <a id='kitstablename'></a>public  readonly property __KitsTableName__

_KitsTableName property_

Get | 
--- | 
`String` |



##### <a id='maxconnectionidletime'></a>public  readonly property __MaxConnectionIdleTime__

_Get: Reloads the configuration file /
    @Override
    public void reload() {
        cfg.reload();
        verifyConfig();
    }

    /** Get the configuration file /
    @Override
    public PropertiesFile getFile() {
        return cfg;
    }

    /** Creates the default configuration /
    private void verifyConfig() {
        cfg.clearHeader();
        cfg.addHeaderLines(
                "For more settings explanations see following websites ...",
                "http://javatech.org/2007/11/c3p0-connectionpool-configuration-rules-of-thumb/",
                "https://community.jboss.org/wiki/HowToConfigureTheC3P0ConnectionPool?_sscc=t"
                          );

        cfg.getString("name", "wolfscript");
        cfg.getString("host", "localhost");
        cfg.getString("username", "admin");
        cfg.getString("password", "admin");
        cfg.getInt("port", 3306);
        cfg.getInt("maxConnections", 5);

        // c3p0 settings

        cfg.getInt("acquire-increment", 5);
        cfg.setComments("acquire-increment", "Determines how many connections at a time c3p0 will try to acquire when the pool is exhausted.");

        cfg.getInt("max-connection-idle-time", 900); //15 minutes
        cfg.setComments("max-connection-idle-time", "Determines how long idle connections can stay in the connection pool before they are removed.");

        cfg.getInt("max-excess-connections-idle-time", 1800); // 30 minutes
        cfg.setComments("max-excess-connections-idle-time", "Time until the connection pool will be culled down to min-connection-pool-size. Set 0 to not enforce pool shrinking.");

        cfg.getInt("max-connection-pool-size", 10);
        cfg.setComments("max-connection-pool-size", "The maximum allowed number of pooled connections. More for larger servers");

        cfg.getInt("min-connection-pool-size", 3);
        cfg.setComments("min-connection-pool-size", "The minimum amount of connections allowed. More means more memory usage but takes away some impact from creating new connections.");

        cfg.getInt("num-helper-threads", 4);
        cfg.setComments("num-helper-threads", "Amount of threads that will perform slow JDBC operations (closing idle connections, returning connections to pool etc)");

        cfg.getInt("return-connection-timeout", 900); //15 minutes
        cfg.setComments("return-connection-timeout", "Defines a time a connection can remain checked out. After that it will be forced back into the connection pool.");

        cfg.getInt("connection-test-frequency", 0); // 60 minutes
        cfg.setComments("idle-connection-test-frequency", "Every this amount of seconds idle connections will be checked for validity. Set 0 to turn off");

        cfg.getInt("max-cached-statements", 50);
        cfg.setComments("max-cached-statements", "Number of max cached statements on all connections. (Roughly 5 expected pooled connections)");

        cfg.getInt("max-statements-per-connection", 5);
        cfg.setComments("max-statements-per-connection", "Number of max cached statements on a single connection.");

        cfg.getInt("statement-cache-close-threads", 1);
        cfg.setComments("statement-cache-close-threads", "Number of threads to use when closing statements is deferred (happens when parent connection is still in use)");

        // Table Naming Schemes...
        cfg.getString("bans-table-name", "ban");
        cfg.setComments("bans-table-name", "The name to use for the Bans table. NOTE: Changing this here will require you to manually change the name of the table in the database (if present)");

        cfg.getString("groups-table-name", "group");
        cfg.setComments("groups-table-name", "The name to use for the Groups table. NOTE: Changing this here will require you to manually change the name of the table in the database (if present)");

        cfg.getString("kits-table-name", "kit");
        cfg.setComments("kits-table-name", "The name to use for the Kits table. NOTE: Changing this here will require you to manually change the name of the table in the database (if present)");

        cfg.getString("operators-table-name", "operators");
        cfg.setComments("operators-table-name", "The name to use for the Operators table. NOTE: Changing this here will require you to manually change the name of the table in the database (if present)");

        cfg.getString("permissions-table-name", "permission");
        cfg.setComments("permissions-table-name", "The name to use for the Permissions table. NOTE: Changing this here will require you to manually change the name of the table in the database (if present)");

        cfg.getString("players-table-name", "player");
        cfg.setComments("players-table-name", "The name to use for the Permissions table. NOTE: Changing this here will require you to manually change the name of the table in the database (if present)");

        cfg.getString("reservelist-table-name", "reservelist");
        cfg.setComments("reservelist-table-name", "The name to use for the ReserveList table. NOTE: Changing this here will require you to manually change the name of the table in the database (if present)");

        cfg.getString("warps-table-name", "warp");
        cfg.setComments("warps-table-name", "The name to use for the Warps table. NOTE: Changing this here will require you to manually change the name of the table in the database (if present)");

        cfg.getString("whitelist-table-name", "whitelist");
        cfg.setComments("whitelist-table-name", "The name to use for the WhiteList table. NOTE: Changing this here will require you to manually change the name of the table in the database (if present)");
        //

        cfg.save();
    }

    /** Get the URL to the database. This is a combination of host, port and database_

Get | Description
--- | --- 
`int` | database url /
    public String getDatabaseUrl(String driver) {
        int port = getDatabasePort();
        return "jdbc:" + driver + "://" + getDatabaseHost() + ((port == 0) ? "" : (":" + port)) + "/" + getDatabaseName();
    }

    /** Get the database host, defaulting to localhost



##### <a id='opertatorstablename'></a>public  readonly property __OpertatorsTableName__

_OpertatorsTableName property_

Get | 
--- | 
`String` |



##### <a id='permissionstablename'></a>public  readonly property __PermissionsTableName__

_PermissionsTableName property_

Get | 
--- | 
`String` |



##### <a id='playerstablename'></a>public  readonly property __PlayersTableName__

_PlayersTableName property_

Get | 
--- | 
`String` |



##### <a id='reservelisttablename'></a>public  readonly property __ReservelistTableName__

_ReservelistTableName property_

Get | 
--- | 
`String` |



##### <a id='warpstablename'></a>public  readonly property __WarpsTableName__

_WarpsTableName property_

Get | 
--- | 
`String` |



##### <a id='whitelisttablename'></a>public  readonly property __WhitelistTableName__

_WhitelistTableName property_

Get | 
--- | 
`String` |



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

