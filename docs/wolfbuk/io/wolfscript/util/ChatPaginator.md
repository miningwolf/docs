## ChatPaginator __class__

>io.wolfscript.util.ChatPaginator

---

### Class Overview

The ChatPaginator takes a raw string of arbitrary length and breaks it down into an array of strings appropriate for displaying on the Minecraft player console.

Method | Type   
--- | :--- 
new __ChatPage__(pageNumber, totalPages) <br> _ChatPage constructor_ | _constructor_
 readonly property __Lines__ <br> _Lines property_ | `String[]`
 readonly property __PageNumber__ <br> _PageNumber property_ | `int`
 readonly property __TotalPages__ <br> _TotalPages property_ | `int`
static function __paginate__(unpaginatedString, pageNumber) <br> _Breaks a raw string up into pages using the default width and height._ | `ChatPage`
static function __paginate__(unpaginatedString, pageNumber, lineLength, pageHeight) <br> _Breaks a raw string up into pages using a provided width and height._ | `ChatPage`
static function __wordWrap__(rawString, lineLength) <br> _Breaks a raw string up into a series of lines. Words are wrapped using_ | `String[]`
static final var __GUARANTEED__ <br> _GUARANTEED field_ | `int`
static final var __AVERAGE__ <br> _AVERAGE field_ | `int`
static final var __UNBOUNDED__ <br> _UNBOUNDED field_ | `int`
static final var __OPEN__ <br> _OPEN field_ | `int`
static final var __CLOSED__ <br> _CLOSED field_ | `int`
static final var __UNBOUNDED__ <br> _UNBOUNDED field_ | `int`



---

### Public Constructors for [`ChatPaginator`](ChatPaginator.md)

##### <a id='chatpage'></a>new __ChatPage__(pageNumber, totalPages) 

_ChatPage constructor_

Argument | Type | Description  
--- | --- | --- 
pageNumber | `int` | pageNumber argument
totalPages | `int` | totalPages argument

---

### Public Properties for [`ChatPaginator`](ChatPaginator.md)

##### <a id='lines'></a>public  readonly property __Lines__

_Lines property_

Get | 
--- | 
`String[]` |



##### <a id='pagenumber'></a>public  readonly property __PageNumber__

_PageNumber property_

Get | 
--- | 
`int` |



##### <a id='totalpages'></a>public  readonly property __TotalPages__

_TotalPages property_

Get | 
--- | 
`int` |



---

### Public Methods for [`ChatPaginator`](ChatPaginator.md)

##### <a id='paginate'></a>public static function __paginate__(unpaginatedString, pageNumber)

_Breaks a raw string up into pages using the default width and height._

Argument | Type | Description  
--- | --- | --- 
unpaginatedString | `String` | The raw string to break.
pageNumber | `int` | The page number to fetch.

Returns | Description
--- | --- 
`ChatPage` | A single chat page.


##### <a id='paginate'></a>public static function __paginate__(unpaginatedString, pageNumber, lineLength, pageHeight)

_Breaks a raw string up into pages using a provided width and height._

Argument | Type | Description  
--- | --- | --- 
unpaginatedString | `String` | The raw string to break.
pageNumber | `int` | The page number to fetch.
lineLength | `int` | The desired width of a chat line.
pageHeight | `int` | The desired number of lines in a page.

Returns | Description
--- | --- 
`ChatPage` | A single chat page.


##### <a id='wordwrap'></a>public static function __wordWrap__(rawString, lineLength)

_Breaks a raw string up into a series of lines. Words are wrapped using spaces as decimeters and the newline character is respected._

Argument | Type | Description  
--- | --- | --- 
rawString | `String` | The raw string to break.
lineLength | `int` | The length of a line of text.

Returns | Description
--- | --- 
`String[]` | An array of word-wrapped lines.


---

### Public Fields for [`ChatPaginator`](ChatPaginator.md)

##### <a id='guaranteed'></a>public static final var __GUARANTEED__

_GUARANTEED field_

>Returns
>  `int`

##### <a id='average'></a>public static final var __AVERAGE__

_AVERAGE field_

>Returns
>  `int`

##### <a id='unbounded'></a>public static final var __UNBOUNDED__

_UNBOUNDED field_

>Returns
>  `int`

##### <a id='open'></a>public static final var __OPEN__

_OPEN field_

>Returns
>  `int`

##### <a id='closed'></a>public static final var __CLOSED__

_CLOSED field_

>Returns
>  `int`

##### <a id='unbounded'></a>public static final var __UNBOUNDED__

_UNBOUNDED field_

>Returns
>  `int`

---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

