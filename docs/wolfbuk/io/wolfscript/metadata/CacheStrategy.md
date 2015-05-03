## CacheStrategy __enum__

>io.wolfscript.metadata.CacheStrategy

---

### Enum Overview

The LazyMetadataValue class implements a type of metadata that is not computed until another plugin asks for it. <p> By making metadata values lazy, no computation is done by the providing plugin until absolutely necessary (if ever). Additionally, LazyMetadataValue objects cache their values internally unless overridden by a [`CacheStrategy`](CacheStrategy.md) or invalidated at the individual or plugin level. Once invalidated, the LazyMetadataValue will recompute its value when asked. /
public class LazyMetadataValue extends MetadataValueAdapter implements MetadataValue {
    private Callable<Object> lazyValue;
    private CacheStrategy cacheStrategy;
    private SoftReference<Object> internalValue;
    private static final Object ACTUALLY_NULL = new Object();

    /** Initialized a LazyMetadataValue object with the default CACHE_AFTER_FIRST_EVAL cache strategy.

Item | Type   
--- | :--- 
NEVER_CACHE: <br> _Once the metadata value has been evaluated, do not re-evaluate the_ | CacheStrategy
evaluated: <br> _evaluated CacheStrategy_ | CacheStrategy



---



###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

