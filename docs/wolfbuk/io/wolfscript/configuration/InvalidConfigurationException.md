## InvalidConfigurationException __class__

>io.wolfscript.configuration.InvalidConfigurationException
>Extends `Exception`

---

### Class Overview

Exception thrown when attempting to load an invalid [`Configuration`](Configuration.md)

Method | Type   
--- | :--- 
new __InvalidConfigurationException__(msg, cause) <br> _Creates a new instance of InvalidConfigurationException without a_ | _constructor_



---

### Public Constructors for [`InvalidConfigurationException`](InvalidConfigurationException.md)

##### <a id='invalidconfigurationexception'></a>new __InvalidConfigurationException__(msg, cause) 

_Creates a new instance of InvalidConfigurationException without a message or cause. /
    public InvalidConfigurationException() {}

    /** Constructs an instance of InvalidConfigurationException with the specified message._

Argument | Type | Description  
--- | --- | --- 
msg | `String` | The details of the exception. /
    public InvalidConfigurationException(String msg) {
        super(msg);
    }

    /** Constructs an instance of InvalidConfigurationException with the specified cause.
cause | `Throwable` | The cause of the exception. /
    public InvalidConfigurationException(Throwable cause) {
        super(cause);
    }

    /** Constructs an instance of InvalidConfigurationException with the specified message and cause.

---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

