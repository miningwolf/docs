## DuplicateCommandException __class__

>io.wolfscript.commandsys.DuplicateCommandException
>Extends [`CommandException`](CommandException.md)

---

### Class Overview

Used to yell at a plugin developer for not checking their commands.

Method | Type   
--- | :--- 
new __DuplicateCommandException__(command) <br> _Creates a new <tt>DuplicateCommandException</tt>._ | _constructor_
 |
__Inherited items from [`CommandException`](CommandException.md)__ |
new __CommandException__(cause) <br> _Constructs a new command exception with the specified cause and a_ | _constructor_
new __CommandException__(msg) <br> _Constructs an instance of <code>CommandException</code> with the specified detail message._ | _constructor_





---

### Public Constructors for [`DuplicateCommandException`](DuplicateCommandException.md)

##### <a id='duplicatecommandexception'></a>new __DuplicateCommandException__(command) 

_Creates a new <tt>DuplicateCommandException</tt>._

Argument | Type | Description  
--- | --- | --- 
command | `String` | The offending command

---
### Public Constructors for [`CommandException`](CommandException.md)

##### <a id='commandexception'></a>new __CommandException__(cause) 

_Constructs a new command exception with the specified cause and a detail message of <tt>(cause==null ? null : cause.toString())</tt> (which typically contains the class and detail message of <tt>cause</tt>). Used to wrap exceptions that commands throw._

Argument | Type | Description  
--- | --- | --- 
cause | `Throwable` | the cause (which is saved for later retrieval by the `#getCause()` method). (A <tt>null</tt> value is permitted, and indicates that the cause is nonexistent or unknown.)

##### <a id='commandexception'></a>new __CommandException__(msg) 

_Constructs an instance of <code>CommandException</code> with the specified detail message._

Argument | Type | Description  
--- | --- | --- 
msg | `String` | the detail message.

---
---


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

