## BlockIterator __class__

>io.wolfscript.BlockIterator
>Implements `Iterator<Block`

---

### Class Overview

Iterator wrapper for a LineTracer

Method | Type   
--- | :--- 
 function __replace__(type, data) <br> _Constructor requiring player, uses default values_ | `void`



---


### Public Methods for [`BlockIterator`](BlockIterator.md)

##### <a id='replace'></a>public  function __replace__(type, data)

_Constructor requiring player, uses default values_

Argument | Type | Description  
--- | --- | --- 
type | `int` | the block type used to replace the current block /
    public void replace(BlockType type) {
        tracer.getCurBlock().setType(type);
        tracer.getCurBlock().update();
    }

    /** Replaces the current block type to the given BlockType Id
data | `int` | the new block data

Returns | Description
--- | --- 
`void` | `true` if the is a next block /
    @Override
    public boolean hasNext() {
        if (alreadyAdvanced) { 
            /* we've already done this check, so check the curent LineTracer block /
            return tracer.getCurBlock() != null;
        }
        alreadyAdvanced = true; // Need to track if we have advanced or not
        return tracer.getNextBlock(doAir) != null;
    }

    /** Gets the next [`Block`](api\world\blocks\Block.md) in line


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

