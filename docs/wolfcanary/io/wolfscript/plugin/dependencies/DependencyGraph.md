## DependencyGraph __class__

>io.wolfscript.plugin.dependencies.DependencyGraph

---

### Class Overview

Basic plugin dependency graph. Can look up forward and reverse dependencies.

Method | Type   
--- | :--- 
new __DependencyGraph__() <br> _DependencyGraph constructor_ | _constructor_
 function __addDependencies__(from) <br> _addDependencies method_ | `void`
 function __addEdge__(from, to) <br> _addEdge method_ | `void`
 function __getDependants__(node) <br> _getDependants method_ | `Set<String>`
 function __getDependencies__(node) <br> _getDependencies method_ | `Set<String>`
 function __removeNode__(node) <br> _removeNode method_ | `void`



---

### Public Constructors for [`DependencyGraph`](DependencyGraph.md)

##### <a id='dependencygraph'></a>new __DependencyGraph__() 

_DependencyGraph constructor_


---

### Public Methods for [`DependencyGraph`](DependencyGraph.md)

##### <a id='adddependencies'></a>public  function __addDependencies__(from)

_addDependencies method_

Argument | Type | Description  
--- | --- | --- 
from | `String` | from argument

Returns | 
--- | 
`void` |


##### <a id='addedge'></a>public  function __addEdge__(from, to)

_addEdge method_

Argument | Type | Description  
--- | --- | --- 
from | `String` | from argument
to | `String` | to argument

Returns | 
--- | 
`void` |


##### <a id='getdependants'></a>public  function __getDependants__(node)

_getDependants method_

Argument | Type | Description  
--- | --- | --- 
node | `String` | node argument

Returns | 
--- | 
`Set<String>` |


##### <a id='getdependencies'></a>public  function __getDependencies__(node)

_getDependencies method_

Argument | Type | Description  
--- | --- | --- 
node | `String` | node argument

Returns | 
--- | 
`Set<String>` |


##### <a id='removenode'></a>public  function __removeNode__(node)

_removeNode method_

Argument | Type | Description  
--- | --- | --- 
node | `String` | node argument

Returns | 
--- | 
`void` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

