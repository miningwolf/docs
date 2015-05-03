## LineTracer __class__

>io.wolfscript.LineTracer

---

### Class Overview

Traces the line of sight of an entity. You can retrieve any blocks along the Line of Sight or simply the last block there is within a specified range. Range defaults to 200 blocks

Method | Type   
--- | :--- 
 writeonly property __LastBlock__ <br> _Set: Constructor requiring player, uses default values_ | `void`



---


### Public Properties for [`LineTracer`](LineTracer.md)

##### <a id='lastblock'></a>public  writeonly property __LastBlock__

_Set: Constructor requiring player, uses default values_

Get | Description
--- | --- 
`void` | the Target [`Block`](api\world\blocks\Block.md) /
    public Block getTargetBlock() {
        while ((length <= range) && targetBlock == null) {
            /* do nothing, just keep looping til we get out of range of have a block /
            getNextBlock();
        }
        return targetBlock;
    }

    /** Sets the type of the block at the cursor

Set | Type | Description  
--- | --- | --- 
type | `int` | the [`Block`](api\world\blocks\Block.md) type id /
    public void setTargetBlock(int type) {
        if (targetBlock != null) {
            targetBlock.setTypeId((short)type);
            targetBlock.update();
        }
    }

    /** Returns STEPS forward along line of vision and returns block. This method skips all Air Blocks.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

