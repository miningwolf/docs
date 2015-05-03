## OperatorsProvider __class__

>io.wolfscript.user.OperatorsProvider

---

### Class Overview

Access to the backbone for operators

Method | Type   
--- | :--- 
new __OperatorsProvider__() <br> _OperatorsProvider constructor_ | _constructor_
 readonly property __Ops__ <br> _Get: Reload the ops from database_ | `String[]`



---

### Public Constructors for [`OperatorsProvider`](OperatorsProvider.md)

##### <a id='operatorsprovider'></a>new __OperatorsProvider__() 

_OperatorsProvider constructor_


---

### Public Properties for [`OperatorsProvider`](OperatorsProvider.md)

##### <a id='ops'></a>public  readonly property __Ops__

_Get: Reload the ops from database /
    public void reload() {
        ops = backboneOps.loadOps();
        readOpsCfg();
    }

    /** Reads the config/ops.cfg file if it exists and updates the database with the names found in it. /
    private void readOpsCfg() {
        try {
            BufferedReader reader = new BufferedReader(new FileReader(new File("config/ops.cfg")));
            String line;
            while ((line = reader.readLine()) != null) {
                if (line.startsWith("#")) {
                    continue;
                }
                if (!isOpped(line)) {
                    addPlayer(line);
                }
            }
        }
        catch (FileNotFoundException e) {
            log.info("Could not find config/ops.cfg. Creating one for you...");
            File f = new File("config/ops.cfg");
            try {
                if (f.createNewFile()) {
                    PrintWriter pwriter = new PrintWriter(new FileWriter(f));
                    pwriter.println("# Note: This file is not guaranteed to be synchronous with the actual ops list in database.");
                    pwriter.println("# However, you may use it to quickly add new operators as you please.");
                    pwriter.println("# Any duplicate entries will be taken care of so don't worry.");
                    pwriter.println("# Lines starting with # are comments ;)");
                    pwriter.println("# Add one name to each line.");
                    pwriter.close();
                    log.info("You can now add ops to config/ops.cfg (one per line!). We left you a note.");
                }
            }
            catch (IOException e1) {
                log.error("Failed to write config/ops.cfg! (Probably no write-access!)", e);
            }
        }
        catch (IOException e) {
            log.error("Failed to read from config/ops.cfg!", e);
        }
    }

    /** Check if a given Player name or UUID is opped._

Get | Description
--- | --- 
`String[]` | true if player is opped, false otherwise /
    public boolean isOpped(String nameOrUUID) {
        // Did UUID get passed?
        if (ToolBox.isUUID(nameOrUUID)) {
            return ops.contains(nameOrUUID);
        }
        else {
            return ops.contains(ToolBox.usernameToUUID(nameOrUUID));
        }
    }

    public boolean isOpped(PlayerReference playerReference) {
        if (playerReference != null) {
            // Lets update to UUID if we can get a UUID
            if (ops.contains(playerReference.getName())) {
                if (playerReference.getUUIDString() != null) {
                    removePlayer(playerReference.getName());
                    addPlayer(playerReference.getUUIDString());
                }
                return true;
            }
            // UUID test it is
            return ops.contains(playerReference.getUUIDString());
        }
        return false;
    }

    /** Adds a new operators entry



---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

