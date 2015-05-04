## Note __class__

>io.wolfscript.Note

---

### Class Overview

A note class to store a specific note.

Method | Type   
--- | :--- 
new __Note__(note) <br> _Creates a new note._ | _constructor_
new __Note__(octave, tone, sharped) <br> _Creates a new note._ | _constructor_
 readonly property __Octave__ <br> _Get: Returns the octave of this note._ | `int`
 readonly property __Tone__ <br> _Get: Returns the tone of this note._ | `Tone`
 function __sharped__() <br> _sharped method_ | [`Note`](Note.md)
 function __equals__(obj) <br> _equals method_ | `boolean`
static function __flat__(octave, tone) <br> _Creates a new note for a flat tone, such as A-flat._ | [`Note`](Note.md)
 function __flattened__() <br> _flattened method_ | [`Note`](Note.md)
 function __hashCode__() <br> _hashCode method_ | `int`
 function __isSharpable__() <br> _Returns if this tone could be sharped._ | `boolean`
 function __isSharped__() <br> _Returns if this note is sharped._ | `boolean`
static function __natural__(octave, tone) <br> _Creates a new note for a natural tone, such as A-natural._ | [`Note`](Note.md)
static function __sharp__(octave, tone) <br> _Creates a new note for a sharp tone, such as A-sharp._ | [`Note`](Note.md)
 function __toString__() <br> _toString method_ | `String`
static final var __TONES__ <br> _The number of tones including sharped tones._ | `byte`



---

### Public Constructors for [`Note`](Note.md)

##### <a id='note'></a>new __Note__(note) 

_Creates a new note._

Argument | Type | Description  
--- | --- | --- 
note | `int` | Internal note id. `#getId()` always return this value. The value has to be in the interval [0;&nbsp;24].

##### <a id='note'></a>new __Note__(octave, tone, sharped) 

_Creates a new note._

Argument | Type | Description  
--- | --- | --- 
octave | `int` | The octave where the note is in. Has to be 0 - 2.
tone | `Tone` | The tone within the octave. If the octave is 2 the note has to be F#.
sharped | `boolean` | Set if the tone is sharped (e.g. for F#).

---

### Public Properties for [`Note`](Note.md)

##### <a id='id'></a>public  readonly property __Id__
_Deprecated: Magic value_

_Get: Returns the not sharped id of this tone._

Get | Description
--- | --- 
`byte` | the not sharped id of this tone.



##### <a id='id'></a>public  readonly property __Id__
_Deprecated: Magic value_

_Get: Returns the internal id of this note._

Get | Description
--- | --- 
`byte` | the internal id of this note.



##### <a id='octave'></a>public  readonly property __Octave__

_Get: Returns the octave of this note._

Get | Description
--- | --- 
`int` | the octave of this note.



##### <a id='tone'></a>public  readonly property __Tone__

_Get: Returns the tone of this note._

Get | Description
--- | --- 
`Tone` | the tone of this note.



---

### Public Methods for [`Note`](Note.md)

##### <a id='sharped'></a>public  function __sharped__()

_sharped method_

Returns | Description
--- | --- 
[`Note`](Note.md) | The note a semitone above this one.


##### <a id='equals'></a>public  function __equals__(obj)

_equals method_

Argument | Type | Description  
--- | --- | --- 
obj | `Object` | obj argument

Returns | 
--- | 
`boolean` |


##### <a id='getbyid'></a>public static function __getById__(id)
_Deprecated: Magic value_

_Returns the tone to id. Also returning the semitones._

Argument | Type | Description  
--- | --- | --- 
id | `byte` | the id of the tone.

Returns | Description
--- | --- 
`Tone` | the tone to id.


##### <a id='flat'></a>public static function __flat__(octave, tone)

_Creates a new note for a flat tone, such as A-flat._

Argument | Type | Description  
--- | --- | --- 
octave | `int` | The octave where the note is in. Has to be 0 - 1.
tone | `Tone` | The tone within the octave.

Returns | Description
--- | --- 
[`Note`](Note.md) | The new note.


##### <a id='flattened'></a>public  function __flattened__()

_flattened method_

Returns | Description
--- | --- 
[`Note`](Note.md) | The note a semitone below this one.


##### <a id='getid'></a>public  function __getId__(sharped)
_Deprecated: Magic value_

_Returns the id of this tone. These method allows to return the sharped id of the tone. If the tone couldn't be sharped it always return the not sharped id of this tone._

Argument | Type | Description  
--- | --- | --- 
sharped | `boolean` | Set to true to return the sharped id.

Returns | Description
--- | --- 
`byte` | the id of this tone.


##### <a id='hashcode'></a>public  function __hashCode__()

_hashCode method_

Returns | 
--- | 
`int` |


##### <a id='issharpable'></a>public  function __isSharpable__()

_Returns if this tone could be sharped._

Returns | Description
--- | --- 
`boolean` | if this tone could be sharped.


##### <a id='issharped'></a>public  function __isSharped__(id)
_Deprecated: Magic value_

_Returns if this tone id is the sharped id of the tone._

Argument | Type | Description  
--- | --- | --- 
id | `byte` | the id of the tone.

Returns | Description
--- | --- 
`boolean` | if the tone id is the sharped id of the tone.


##### <a id='issharped'></a>public  function __isSharped__()

_Returns if this note is sharped._

Returns | Description
--- | --- 
`boolean` | if this note is sharped.


##### <a id='natural'></a>public static function __natural__(octave, tone)

_Creates a new note for a natural tone, such as A-natural._

Argument | Type | Description  
--- | --- | --- 
octave | `int` | The octave where the note is in. Has to be 0 - 1.
tone | `Tone` | The tone within the octave.

Returns | Description
--- | --- 
[`Note`](Note.md) | The new note.


##### <a id='sharp'></a>public static function __sharp__(octave, tone)

_Creates a new note for a sharp tone, such as A-sharp._

Argument | Type | Description  
--- | --- | --- 
octave | `int` | The octave where the note is in. Has to be 0 - 2.
tone | `Tone` | The tone within the octave. If the octave is 2 the note has to be F#.

Returns | Description
--- | --- 
[`Note`](Note.md) | The new note.


##### <a id='tostring'></a>public  function __toString__()

_toString method_

Returns | 
--- | 
`String` |


---

### Public Fields for [`Note`](Note.md)

##### <a id='tones'></a>public static final var __TONES__

_The number of tones including sharped tones._

>Returns
>  `byte`

---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

