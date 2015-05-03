## PistonMoveReaction __enum__

>io.wolfscript.block.PistonMoveReaction

---

### Enum Overview

enum PistonMoveReaction

Item | Type   
--- | :--- 
BLOCK: 2<br> _Indicates that the block can be pushed or pulled._ | PistonMoveReaction



---


### Public Methods for [`PistonMoveReaction`](PistonMoveReaction.md)

##### <a id='getbyid'></a>public static function __getById__(id)
_Deprecated: Magic value /
    @Deprecated
    public int getId() {
        return this.id;
    }

    /** Magic value_

_Indicates that the block can be pushed or pulled. /
    MOVE(0),
    /** Indicates the block is fragile and will break if pushed on. /
    BREAK(1),
    /** Indicates that the block will resist being pushed or pulled. /
    BLOCK(2);

    private int id;
    private static Map<Integer, PistonMoveReaction> byId = new HashMap<Integer, PistonMoveReaction>();
    static {
        for (PistonMoveReaction reaction : PistonMoveReaction.values()) {
            byId.put(reaction.id, reaction);
        }
    }

    private PistonMoveReaction(int id) {
        this.id = id;
    }

    /**_

Argument | Type | Description  
--- | --- | --- 
id | `int` | An ID

Returns | Description
--- | --- 
[`PistonMoveReaction`](PistonMoveReaction.md) | The ID of the move reaction


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

