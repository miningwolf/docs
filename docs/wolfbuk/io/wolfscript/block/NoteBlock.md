## NoteBlock __interface__

>io.wolfscript.block.NoteBlock
>Extends [`BlockState`](BlockState.md)

---

### Interface Overview

Represents a note.

Method | Type   
--- | :--- 
 function __play__(instrument, note) <br> _Gets the note._ | `boolean`
 |
__Inherited items from [`BlockState`](BlockState.md)__ |
 |
__Inherited items from [`Metadatable`](..\metadata\Metadatable.md)__ |
 function __removeMetadata__(metadataKey, owningPlugin) <br> _Sets a metadata value in the implementing object's metadata store._ | `void`







---


### Public Methods for [`NoteBlock`](NoteBlock.md)

##### <a id='play'></a>public  function __play__(instrument, note)

_Gets the note._

Argument | Type | Description  
--- | --- | --- 
instrument | [`Instrument`](..\Instrument.md) | Instrument ID
note | `Note` | The note. /
    public void setNote(Note note);

    /** Set the note.

Returns | Description
--- | --- 
`boolean` | The note. /
    public Note getNote();

    /** Gets the note.


---

### Public Methods for [`Metadatable`](..\metadata\Metadatable.md)

##### <a id='removemetadata'></a>public  function __removeMetadata__(metadataKey, owningPlugin)

_Sets a metadata value in the implementing object's metadata store._

Argument | Type | Description  
--- | --- | --- 
metadataKey | `String` | A unique key to identify this metadata.
owningPlugin | [`Plugin`](..\plugin\Plugin.md) | This plugin's metadata value will be removed. All other values will be left untouched.

Returns | Description
--- | --- 
`void` | A list of values, one for each plugin that has set the requested value. /
    public List<MetadataValue> getMetadata(String metadataKey);

    /** Tests to see whether the implementing object contains the given metadata value in its metadata store.


---


---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

