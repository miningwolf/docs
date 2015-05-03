## ServerConfiguration __class__

>io.wolfscript.config.ServerConfiguration
>Implements [`ConfigurationContainer`](ConfigurationContainer.md)

---

### Class Overview

Server Configuration Container

Method | Type   
--- | :--- 
new __ServerConfiguration__(path) <br> _ServerConfiguration constructor_ | _constructor_
 readonly property __PluginDevModeEnabled__ <br> _Get: Reloads the configuration file_ | `boolean`



---

### Public Constructors for [`ServerConfiguration`](ServerConfiguration.md)

##### <a id='serverconfiguration'></a>new __ServerConfiguration__(path) 

_ServerConfiguration constructor_

Argument | Type | Description  
--- | --- | --- 
path | `String` | path argument

---

### Public Properties for [`ServerConfiguration`](ServerConfiguration.md)

##### <a id='plugindevmodeenabled'></a>public  readonly property __PluginDevModeEnabled__

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
        cfg.getBoolean("announce-player-achievements", true);
        cfg.setComments("announce-player-achievements", "Sets whether to inform all of a Player's Achievement");
        cfg.getBoolean("allow-enchantment-stacking", false);
        cfg.setComments("allow-enchantment-stacking", "Sets whether to allow items with enchantments to stack with non-enchanted items");
        cfg.getString("ban-default-message", "You are banned from this server.");
        cfg.setComments("ban-default-message", "The default message to use for user bans");
        cfg.getString("ban-expiration-date-message", "Your Ban will be lifted at ");
        cfg.setComments("ban-expiration-date-message", "The message to prefix to the timestamp of a tempban expiration");
        cfg.getString("chat-format", "<%prefix%name&f> %message");
        cfg.setComments("chat-format", "Valid default placeholders are:",
                        "%prefix (player prefix), %name (player name), %group (main group)",
                        "You can use standard color codes at all times. Use & as identifier if you miss a § key",
                        "Plugins may extend the list of available placeholders"
                       );
        cfg.getBoolean("command-block-enabled", false);
        cfg.setComments("command-block-enabled", "Sets whether the Command Block is allowed or not");
        cfg.getString("command-block-group", "admins");
        cfg.setComments("command-block-group", "This groups permissions will determine what Command Block can and can not do!");
        cfg.getBoolean("command-block-op", false);
        cfg.setComments("command-block-op", "Sets whether the Command Block is considered Operator or not (Vanilla command use)");
        cfg.getBoolean("command-block-silent", false);
        cfg.setComments("command-block-silent", "Sets whether the Command Block logs command output (set to true to 'silence' CommandBlocks)");
        cfg.getString("data-source", "xml");
        cfg.setComments("data-source", "The Datasource type to use (Default available: xml, mysql, sqlite");
        cfg.getString("date-format", "yyyy.MM.dd, hh:mm:ss");
        cfg.setComments("date-format", "A formatting to display timestamps");
        cfg.getBoolean("death-messages", true);
        cfg.setComments("death-messages", "Sets whether to send player death message or not");
        //cfg.getBoolean("debug-enabled", false); //REMOVED
        //cfg.setComments("debug-enabled", "Sets whether to enable debug logging or not"); // REMOVED
        if (cfg.containsKey("debug-enabled")) { // Remove old key
            cfg.removeKey("debug-enabled");
        }
        cfg.getString("default-world-name", "default");
        cfg.setComments("default-world-name", "Name of the default loaded world");
        cfg.getInt("default-world-size", 29999984);
        cfg.setComments("default-world-size", "This sets the maximum possible size in blocks, expressed as a radius, that the world border can obtain.");
        cfg.getBoolean("flight-kick", true);
        cfg.setComments("flight-kick", "Enables kicking players who are floating too long.");
        cfg.getInt("flight-detect-ticks", 80);
        cfg.setComments("flight-detect-ticks", "The number of ticks a player may float before triggering flight-kick or flight-alert.");
        //cfg.getBoolean("logging", false); //REMOVED
        if (cfg.containsKey("logging")) { // Remove old key
            cfg.removeKey("logging");
        }
        cfg.getString("logger-level", "INFO");
        cfg.setComments("logger-level", "Sets the level of logging.", "Acceptable Values: OFF FATAL ERROR WARN INFO DEBUG TRACE ALL");

        // RESERVED SPACE
        cfg.getInt("max-players", 20);
        cfg.setComments("max-players", "The maximum allowed players online (Does not count ReserveList users connecting after server is full)");
        cfg.getInt("max-tick-time", 60000);
        cfg.setComments("max-tick-time", "The maximum number of milliseconds a single tick may take before the server watchdog stops the server. Setting to -1 disables WatchDog.");
        cfg.getString("motd", "WolfScript Minecraft Server");
        cfg.setComments("motd", "The Server list Message of the Day");
        cfg.getInt("network-compression-threshold", 256);
        cfg.setComments("network-compression-threshold", "By default it allows packets that are n-1 bytes big to go normally, but a packet that n bytes or more will be compressed down.");
        cfg.getBoolean("online-mode", true);
        cfg.setComments("online-mode", "Sets whether to authenticate connecting users.",
                        "WARNING: Setting to false is INSECURE and should not be done in a production environment."
                       );
        cfg.getInt("player-idle-timeout", 1);
        cfg.setComments("player-idle-timeout", "Timeout in minutes before kicking an idle player");
        cfg.getBoolean("playerlist-enabled", true);
        cfg.setComments("playerlist-enabled", "Sets whether to send data to clients for the Player List");
        cfg.getBoolean("playerlist-autoupdate", true);
        cfg.setComments("playerlist-autoupdate", "Sets whether the Player List should automatically be refreshed for every player or not");
        cfg.getBoolean("playerlist-usecolors", false);
        cfg.setComments("playerlist-usecolors", "Sets whether the Player List should include colors and player prefixes");
        cfg.getInt("playerlist-ticks", 500);
        cfg.getBoolean("plugin-dev-mode", false);
        cfg.setComments("plugin-dev-mode", "Setting this to true will enable loading plugins from folders; intended for Lua plugin developers");
        // RESERVED SPACE
        cfg.getBoolean("query-enabled", false);
        cfg.setComments("query-enabled", "Enables GameSpy4 protocol server listener. Used to get information about server.");
        cfg.getInt("query-port", 25565);
        cfg.setComments("query-port", "Set the port for the query server");
        cfg.getBoolean("rcon-enabled", false);
        cfg.setComments("rcon-enabled", "Whether to allow remote access or not");
        cfg.getInt("rcon-port", 25575);
        cfg.setComments("rcon-port", "The port you want remote access to listen on (1-65534), DEFAULT: 25575");
        cfg.getString("rcon-password", "");
        cfg.setComments("rcon-password", "Password for remote access");
        cfg.getBoolean("reservelist-enabled", false);
        cfg.setComments("reservelist-enabled", "Sets whether the ReserveList (join after full) is enabled or not");
        cfg.getString("reservelist-message", "Not on reserve list."); //This seems redundant
        cfg.getBoolean("save-homes", true);
        cfg.setComments("save-homes", "Sets whether to save homes or not");
        cfg.getString("server-full-message", "The server is full.");
        cfg.setComments("server-full-message", "Message to send if the server is full");
        cfg.getString("server-ip", "");
        cfg.setComments("server-ip", "Set to the IP address that you want your server to listen on, or leave blank for automatic detection.");
        cfg.getInt("server-port", 25565);
        cfg.setComments("server-port", "The Port you want your server to listen on (1-65534), DEFAULT: 25565");
        cfg.getString("server-locale", "en_US");
        cfg.setComments("server-locale", "Sets the default server language to use for messages. Default supported Languages can be found in the lang/languages.txt");
        cfg.getBoolean("show-unknown-command", true);
        cfg.setComments("show-unknown-command", "Sets whether to inform players of unknown commands");
        cfg.getBoolean("snooper-enabled", true);
        cfg.setComments("snooper-enabled", "Sets whether Mojang may snoop or not");
        cfg.getString("spam-protection", "default");
        cfg.setComments("spam-protection", "Level of protection against Spam. Options: default - on for all but ignorerestiction users; off - no protections; all - on for all");
        cfg.getBoolean("strict-sign-characters", true);
        cfg.setComments("strict-sign-characters", "Sets whether to strictly check characters on signs for invalid chat characters. Set to false to disable (and allow more characters)");
        cfg.getString("texture-pack", "");
        cfg.setComments("texture-pack", "The name of the Server's texture/resource pack");
        cfg.getBoolean("update-lang-files", true);
        cfg.setComments("Whether to verify and update lang files or not, disable if you intend to make changes to those files");
        cfg.getInt("view-distance", 10);
        cfg.setComments("view-distance", "Sets the maximum radius of loaded chunks around a player (3-15)");
        cfg.getBoolean("whitelist-enabled", false);
        cfg.setComments("whitelist-enabled", "Whether the whitelist is enabled or not");
        cfg.getString("whitelist-message", "Not on whitelist.");
        cfg.setComments("whitelist-message", "The message to send to non-whitelisted players");
        cfg.getBoolean("world-cache-timer-enabled", true);
        cfg.setComments("world-cache-timer-enabled", "Enable automatic unloading of unused worlds.");
        cfg.getLong("world-cache-timeout", 60);
        cfg.setComments("world-cache-timeout", "The number of minutes a world should be empty before it will be unloaded (if use-world-cache is enabled)");
        cfg.getBoolean("bungeecord", false);
        cfg.setComments("bungeecord", "If you want to enable Bungeecord support. REQUIRES THAT ONLINE MODE IS DISABLED (false)");

        cfg.save();
    }

    public boolean getAnnounceAchievements() {
        return cfg.getBoolean("announce-player-achievements", true);
    }

    /** Checks if items are allowed to be stack with enchantments applied_

Get | Description
--- | --- 
`boolean` | `true` if allowed; `false` if not /
    public boolean allowEnchantmentStacking() {
        return cfg.getBoolean("alllow-enchantment-stacking", false);
    }

    /** Gets the ban default message



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

