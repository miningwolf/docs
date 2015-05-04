## ToolBox __class__

>io.wolfscript.ToolBox

---

### Class Overview

Set of miscellaneous tools

Method | Type   
--- | :--- 
static readonly property __UnixTimestamp__ <br> _Get: Get the Unix timestamp for the current time_ | `long`
static function __formatTimestamp__(timestamp) <br> _Formats a Unix timestamp into the date format defined in server.cfg_ | `String`
static function __arrayMerge__() <br> _Merge 2 integer arrays. This will just merge two arrays._ | `int[]`
static function __formatTimestamp__(timestamp, format) <br> _Form ats a Unix timestamp into the date format specified by `format`_ | `String`
static function __floorToBlock__(num) <br> _floorToBlock method_ | `int`
static function __getTimeUntil__(time, delay) <br> _getTimeUntil method_ | `String`
static function __parseWorld__(world, autoLoad) <br> _parseWorld method_ | [`World`](api/world/World.md)
static function __getOfflineUUID__(username) <br> _getOfflineUUID method_ | `UUID`
static function __parseTime__(time, timeUnit) <br> _Parse number of seconds for the given time and TimeUnit String_ | `long`
static function __parseTimeInMillis__(time, timeUnit) <br> _Parse number of milliseconds for the given time and TimeUnit String_ | `long`
static function __parseTime__(time, unit) <br> _Parse number of seconds for the given time and TimeUnit_ | `long`
static function __isValidUsername__(username) <br> _Checks if a given user name is a valid Minecraft Username_ | `boolean`
static function __parseWorld__(world) <br> _parseWorld method_ | [`World`](api/world/World.md)
static function __isUUID__(uuid) <br> _Checks if a string is a UUID_ | `boolean`
static function __getTimeUntil__(time) <br> _getTimeUntil method_ | `String`
static function __levelToExperience__(level) <br> _levelToExperience method_ | `int`
static function __parseWorldName__(world) <br> _parseWorldName method_ | `String`
static function __parseWorldName__(world, dimension) <br> _parseWorldName method_ | `String`
static function __stringToNull__(str) <br> _If the given string is "null" or null, this method returns null,_ | `String`
static function __usernameToUUID__(username) <br> _usernameToUUID method_ | `String`
static function __uuidFromUsername__(username) <br> _uuidFromUsername method_ | `UUID`
static function __worldTicksToCalendar__(ticks) <br> _Generates a Calendar(GMT, English) object representing the current time of day from the time of a world._ | `Calendar`



---


### Public Properties for [`ToolBox`](ToolBox.md)

##### <a id='unixtimestamp'></a>public static readonly property __UnixTimestamp__

_Get: Get the Unix timestamp for the current time_

Get | Description
--- | --- 
`long` | `long` timestamp



---

### Public Methods for [`ToolBox`](ToolBox.md)

##### <a id='formattimestamp'></a>public static function __formatTimestamp__(timestamp)

_Formats a Unix timestamp into the date format defined in server.cfg_

Argument | Type | Description  
--- | --- | --- 
timestamp | `long` | the `long` time

Returns | Description
--- | --- 
`String` | `String` formatted TimeStamp


##### <a id='arraymerge'></a>public static function __arrayMerge__()

_Merge 2 integer arrays. This will just merge two arrays._

Returns | Description
--- | --- 
`int[]` | array containing all elements of the 2 given ones


##### <a id='formattimestamp'></a>public static function __formatTimestamp__(timestamp, format)

_Form ats a Unix timestamp into the date format specified by `format`_

Argument | Type | Description  
--- | --- | --- 
timestamp | `long` | The time to get formatted
format | `String` | The pattern describing the date and time format

Returns | Description
--- | --- 
`String` | `String` formatted TimeStamp


##### <a id='floortoblock'></a>public static function __floorToBlock__(num)

_floorToBlock method_

Argument | Type | Description  
--- | --- | --- 
num | `double` | num argument

Returns | 
--- | 
`int` |


##### <a id='gettimeuntil'></a>public static function __getTimeUntil__(time, delay)

_getTimeUntil method_

Argument | Type | Description  
--- | --- | --- 
time | `long` | time argument
delay | `long` | delay argument

Returns | 
--- | 
`String` |


##### <a id='parseworld'></a>public static function __parseWorld__(world, autoLoad)

_parseWorld method_

Argument | Type | Description  
--- | --- | --- 
world | `String` | world argument
autoLoad | `boolean` | autoLoad argument

Returns | 
--- | 
[`World`](api/world/World.md) |


##### <a id='getofflineuuid'></a>public static function __getOfflineUUID__(username)

_getOfflineUUID method_

Argument | Type | Description  
--- | --- | --- 
username | `String` | username argument

Returns | 
--- | 
`UUID` |


##### <a id='parsetime'></a>public static function __parseTime__(time, timeUnit)

_Parse number of seconds for the given time and TimeUnit String<br> Example: long 1 String HOUR will give you number of seconds in 1 hour.<br> This is used to work with Unix timestamps._

Argument | Type | Description  
--- | --- | --- 
time | `long` | the `long` time
timeUnit | `String` | MINUTES, HOURS, DAYS, WEEKS, MONTHS

Returns | Description
--- | --- 
`long` | `long` parsed time


##### <a id='parsetimeinmillis'></a>public static function __parseTimeInMillis__(time, timeUnit)

_Parse number of milliseconds for the given time and TimeUnit String<br> Example: long 1 String HOUR will give you number of seconds in 1 hour.<br> This is used to work with Unix timestamps._

Argument | Type | Description  
--- | --- | --- 
time | `long` | the `long` time
timeUnit | `String` | MINUTES, HOURS, DAYS, WEEKS, MONTHS

Returns | Description
--- | --- 
`long` | `long` parsed time


##### <a id='parsetime'></a>public static function __parseTime__(time, unit)

_Parse number of seconds for the given time and TimeUnit<br> Example: long 1 String `TimeUnit#HOURS` will give you number of seconds in 1 hour.<br> This is used to work with unix timestamps._

Argument | Type | Description  
--- | --- | --- 
time | `long` | the `long` time
unit | `TimeUnit` | the `TimeUnit` to use for conversion

Returns | Description
--- | --- 
`long` | `long` parsed time


##### <a id='isvalidusername'></a>public static function __isValidUsername__(username)

_Checks if a given user name is a valid Minecraft Username_

Argument | Type | Description  
--- | --- | --- 
username | `String` | the username to check

Returns | Description
--- | --- 
`boolean` | `true` of valid; `false` if not


##### <a id='parseworld'></a>public static function __parseWorld__(world)

_parseWorld method_

Argument | Type | Description  
--- | --- | --- 
world | `String` | world argument

Returns | 
--- | 
[`World`](api/world/World.md) |


##### <a id='isuuid'></a>public static function __isUUID__(uuid)

_Checks if a string is a UUID_

Argument | Type | Description  
--- | --- | --- 
uuid | `String` | the string uuid

Returns | Description
--- | --- 
`boolean` | `true` if UUID; `false` if not


##### <a id='gettimeuntil'></a>public static function __getTimeUntil__(time)

_getTimeUntil method_

Argument | Type | Description  
--- | --- | --- 
time | `long` | time argument

Returns | 
--- | 
`String` |


##### <a id='leveltoexperience'></a>public static function __levelToExperience__(level)

_levelToExperience method_

Argument | Type | Description  
--- | --- | --- 
level | `int` | level argument

Returns | 
--- | 
`int` |


##### <a id='parseworldname'></a>public static function __parseWorldName__(world)

_parseWorldName method_

Argument | Type | Description  
--- | --- | --- 
world | `String` | world argument

Returns | 
--- | 
`String` |


##### <a id='parseworldname'></a>public static function __parseWorldName__(world, dimension)

_parseWorldName method_

Argument | Type | Description  
--- | --- | --- 
world | `String` | world argument
dimension | [`DimensionType`](api/world/DimensionType.md) | dimension argument

Returns | 
--- | 
`String` |


##### <a id='stringtonull'></a>public static function __stringToNull__(str)

_If the given string is "null" or null, this method returns null, otherwise it will return the string as it was passed_

Argument | Type | Description  
--- | --- | --- 
str | `String` | the `String` to parse

Returns | Description
--- | --- 
`String` | `null` if the `String` is `null` or is equal to `"null"`; the `String` value otherwise


##### <a id='usernametouuid'></a>public static function __usernameToUUID__(username)

_usernameToUUID method_

Argument | Type | Description  
--- | --- | --- 
username | `String` | username argument

Returns | 
--- | 
`String` |


##### <a id='uuidfromusername'></a>public static function __uuidFromUsername__(username)

_uuidFromUsername method_

Argument | Type | Description  
--- | --- | --- 
username | `String` | username argument

Returns | 
--- | 
`UUID` |


##### <a id='worldtickstocalendar'></a>public static function __worldTicksToCalendar__(ticks)

_Generates a Calendar(GMT, English) object representing the current time of day from the time of a world. This time can be retrieved from World.getRelativeTime(). Year, month and day values may be odd as those are not contained within the range of the world tick times in Minecraft._

Argument | Type | Description  
--- | --- | --- 
ticks | `long` | the relative time of a world

Returns | Description
--- | --- 
`Calendar` | Calendar object representing the world time as real date


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

