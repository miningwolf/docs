## Translator __class__

>io.wolfscript.Translator
>Extends `LocaleHelper`

---

### Class Overview

This class handles internationalization (aka i18n). It will look up translations from a given key to the language that is currently active.

Method | Type   
--- | :--- 
static readonly property __Instance__ <br> _Get: Translates a message into the current system language if that mapping exists_ | [`Translator`](Translator.md)



---


### Public Properties for [`Translator`](Translator.md)

##### <a id='instance'></a>public static readonly property __Instance__

_Get: Translates a message into the current system language if that mapping exists_

Get | Description
--- | --- 
[`Translator`](Translator.md) | the translated message /
    public static String localTranslate(String key, String locale) {
        return instance.localeTranslate(key, locale);
    }

    /** Translates the given message key and applies formatting according to standard Java formatting rules



---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

