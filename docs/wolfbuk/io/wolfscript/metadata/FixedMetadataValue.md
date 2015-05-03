## FixedMetadataValue __class__

>io.wolfscript.metadata.FixedMetadataValue
>Extends `LazyMetadataValue`

---

### Class Overview

A FixedMetadataValue is a special case metadata item that contains the same value forever after initialization. Invalidating a FixedMetadataValue has no effect. <p> This class extends LazyMetadataValue for historical reasons, even though it overrides all the implementation methods. it is possible that in the future that the inheritance hierarchy may change.

Method | Type   
--- | :--- 
new __FixedMetadataValue__(owningPlugin, Object) <br> _Store the internal value that is represented by this fixed value._ | _constructor_
 function __invalidate__() <br> _invalidate method_ | `void`
 function __value__() <br> _value method_ | `Object`



---

### Public Constructors for [`FixedMetadataValue`](FixedMetadataValue.md)

##### <a id='fixedmetadatavalue'></a>new __FixedMetadataValue__(owningPlugin, Object) 

_Store the internal value that is represented by this fixed value. /
    private final Object internalValue;

    /** Initializes a FixedMetadataValue with an Object_

Argument | Type | Description  
--- | --- | --- 
owningPlugin | [`Plugin`](..\plugin\Plugin.md) | the [`Plugin`](..\plugin\Plugin.md) that created this metadata value
Object | `final` | Object argument

---

### Public Methods for [`FixedMetadataValue`](FixedMetadataValue.md)

##### <a id='invalidate'></a>public  function __invalidate__()

_invalidate method_

Returns | 
--- | 
`void` |


##### <a id='value'></a>public  function __value__()

_value method_

Returns | 
--- | 
`Object` |


---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

