## BookHelper __class__

>io.wolfscript.api.inventory.helper.BookHelper
>Extends `ItemHelper`

---

### Class Overview

BOOK! HELPER!

Method | Type   
--- | :--- 
static function __removeAllEnchantments__(book) <br> _Checks if the give book can take Meta data_ | `boolean`



---


### Public Methods for [`BookHelper`](BookHelper.md)

##### <a id='removeallenchantments'></a>public static function __removeAllEnchantments__(book)

_Checks if the give book can take Meta data_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](..\Item.md) | the book to check

Returns | Description
--- | --- 
`boolean` | `true` if Book; `false` if not /
    public static boolean isBook(Item book) {
        if (book == null) {
            return false;
        }
        switch (book.getId()) {
            case 340:
            case 386:
            case 387:
            case 403:
                return true;
            default:
                return false;
        }
    }

    /** Checks if the given Book can still be written in by a player


---
---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

