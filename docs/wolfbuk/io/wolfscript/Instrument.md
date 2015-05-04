## Instrument __enum__

>io.wolfscript.Instrument

---

### Enum Overview

enum Instrument

Item | Type   
--- | :--- 
PIANO: 0x0<br> _Piano is the standard instrument for a note block._ | Instrument
BASS_DRUM: 0x1<br> _Bass drum is normally played when a note block is on top of a_ | Instrument
SNARE_DRUM: 0x2<br> _Snare drum is normally played when a note block is on top of a sandy_ | Instrument
STICKS: 0x3<br> _Sticks are normally played when a note block is on top of a glass_ | Instrument
BASS_GUITAR: 0x4<br> _Bass guitar is normally played when a note block is on top of a wooden_ | Instrument



---


### Public Properties for [`Instrument`](Instrument.md)

##### <a id='type'></a>public  readonly property __Type__
_Deprecated: Magic value_

_Type property_

Get | Description
--- | --- 
`byte` | The type ID of this instrument.



---

### Public Methods for [`Instrument`](Instrument.md)

##### <a id='getbytype'></a>public static function __getByType__(byte)
_Deprecated: Magic value_

_Get an instrument by its type ID._

Argument | Type | Description  
--- | --- | --- 
byte | `final` | byte argument

Returns | Description
--- | --- 
[`Instrument`](Instrument.md) | The instrument


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

