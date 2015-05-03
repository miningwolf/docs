## ConfigurationSerializable __interface__

>io.wolfscript.configuration.serialization.ConfigurationSerializable

---

### Interface Overview

Represents an object that may be serialized. <p> These objects MUST implement one of the following, in addition to the methods as defined by this interface: <ul> <li>A static method "deserialize" that accepts a single `Map`&lt; `String`, `Object`&gt; and returns the class.</li> <li>A static method "valueOf" that accepts a single `Map`&lt;`String`, `Object`&gt; and returns the class.</li> <li>A constructor that accepts a single `Map`&lt;`String`, `Object`&gt;.</li> </ul> In addition to implementing this interface, you must register the class with `ConfigurationSerialization#registerClass(Class)`.

Method | Type   
--- | :--- 



---



###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

