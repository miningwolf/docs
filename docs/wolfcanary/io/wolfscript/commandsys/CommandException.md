## CommandException __class__

>io.wolfscript.commandsys.CommandException
>Extends `RuntimeException`

---

### Class Overview

General catch-all class for exceptions that occur in commands.

Method | Type   
--- | :--- 
new __CommandException__(cause) <br> _Constructs a new command exception with the specified cause and a_ | _constructor_
new __CommandException__(msg) <br> _Constructs an instance of <code>CommandException</code> with the specified detail message._ | _constructor_



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


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

