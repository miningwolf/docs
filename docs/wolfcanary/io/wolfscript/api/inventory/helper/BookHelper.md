## BookHelper __class__

>io.wolfscript.api.inventory.helper.BookHelper
>Extends `ItemHelper`

---

### Class Overview

BOOK! HELPER!

Method | Type   
--- | :--- 
static writeonly property __Enchantments__ <br> _Set: Sets the enchantments of the book_ | `boolean`
static writeonly property __Pages__ <br> _Set: Sets the pages of the book<br>Set: Sets the pages of the book_ | `boolean`
static writeonly property __Pages__ <br> _Set: Sets the pages of the book<br>Set: Sets the pages of the book_ | `boolean`
static function __hasAuthor__(book) <br> _Checks the book for an author_ | `boolean`
static function __isBook__(book) <br> _Checks if the give book can take Meta data_ | `boolean`
static function __addEnchantments__(book) <br> _Adds enchantments to the book_ | `boolean`
static function __hasPages__(book) <br> _Checks if the given Book has pages_ | `boolean`
static function __getPage__(book, page) <br> _Gets the specified page number of the Book_ | `String`
static function __getPages__(book) <br> _getPages method_ | `String[]`
static function __addPages__(book) <br> _addPages method_ | `boolean`
static function __addPages__(book) <br> _addPages method_ | `boolean`
static function __getEnchantments__(book) <br> _Gets the enchantments of the Book_ | `Enchantment[]`
static function __containsEnchantments__(book) <br> _Checks the book for stored enchantments_ | `boolean`
static function __getTitle__(book) <br> _Gets the title of a book_ | `String`
static function __hasTitle__(book) <br> _Checks if the book has a title_ | `boolean`
static function __getPageCount__(book) <br> _Gets the page count of the book_ | `int`
static function __getAuthor__(book) <br> _Gets the Author of the book_ | `String`
static function __setPage__(book, page_index, page) <br> _Sets a page at the specified index_ | `boolean`
static function __isWritable__(book) <br> _Checks if the given Book can still be written in by a player_ | `boolean`
static function __isSigned__(book) <br> _Checks if the given Book has been signed_ | `boolean`
static function __isEnchanted__(book) <br> _|_ | `boolean`
static function __lockBook__(book) <br> _Converts a Book&Quill into a Written Book_ | [`Item`](../Item.md)
static function __removeAllEnchantments__(book) <br> _Removes all enchantments from the book_ | `boolean`
static function __removeEnchantments__(book) <br> _Removes the give enchantments from the book_ | `boolean`
static function __setAuthor__(book, author) <br> _Sets the author of the book_ | `boolean`
static function __setPage__(book, page_index, page) <br> _Sets a page at the specified index_ | `boolean`
static function __setTitle__(book, title) <br> _Sets the title of a book_ | `boolean`
static function __unlockBook__(book) <br> _Converts a WrittenBook back into a Book&Quill_ | [`Item`](../Item.md)



---


### Public Properties for [`BookHelper`](BookHelper.md)

##### <a id='enchantments'></a>public static writeonly property __Enchantments__

_Set: Sets the enchantments of the book_

Get | Description
--- | --- 
`boolean` | true if successful; false if not

Set | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to set enchantments of


##### <a id='pages'></a>public static writeonly property __Pages__

_Set: Sets the pages of the book<br>Set: Sets the pages of the book_

Get | Description
--- | --- 
`boolean` | `true` if successful; `false` if all or some of the pages couldn't be added

Set | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to set pages for


##### <a id='pages'></a>public static writeonly property __Pages__

_Set: Sets the pages of the book<br>Set: Sets the pages of the book_

Get | Description
--- | --- 
`boolean` | `true` if successful; `false` if all or some of the pages couldn't be added

Set | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to set pages for


---

### Public Methods for [`BookHelper`](BookHelper.md)

##### <a id='hasauthor'></a>public static function __hasAuthor__(book)

_Checks the book for an author_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to check

Returns | Description
--- | --- 
`boolean` | `true` if has author; `false` if not


##### <a id='isbook'></a>public static function __isBook__(book)

_Checks if the give book can take Meta data_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to check

Returns | Description
--- | --- 
`boolean` | `true` if Book; `false` if not


##### <a id='addenchantments'></a>public static function __addEnchantments__(book)

_Adds enchantments to the book_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to add enchantments to

Returns | Description
--- | --- 
`boolean` | true if successful; false if not


##### <a id='addencahntments'></a>public static function __addEncahntments__(book)
_Deprecated: As of release WolfLib 1.2.0, replaced by {@link #addEnchantments(Item, Enchantment...)}_

_addEncahntments method_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | book argument

Returns | 
--- | 
`boolean` |


##### <a id='haspages'></a>public static function __hasPages__(book)

_Checks if the given Book has pages_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to check

Returns | Description
--- | --- 
`boolean` | `true` if has pages; `false` if not


##### <a id='getpage'></a>public static function __getPage__(book, page)

_Gets the specified page number of the Book_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to get a page of
page | `int` | the page number to get

Returns | Description
--- | --- 
`String` | the text of the page or `null` if invalid


##### <a id='getpages'></a>public static function __getPages__(book)

_getPages method_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | book argument

Returns | 
--- | 
`String[]` |


##### <a id='addpages'></a>public static function __addPages__(book)

_addPages method_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | book argument

Returns | 
--- | 
`boolean` |


##### <a id='addpages'></a>public static function __addPages__(book)

_addPages method_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | book argument

Returns | 
--- | 
`boolean` |


##### <a id='getenchantments'></a>public static function __getEnchantments__(book)

_Gets the enchantments of the Book_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to get enchantments of

Returns | Description
--- | --- 
`Enchantment[]` | array of Enchantments or null if the Book has none


##### <a id='containsenchantments'></a>public static function __containsEnchantments__(book)

_Checks the book for stored enchantments_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to check

Returns | Description
--- | --- 
`boolean` | true if contains enchantments; false if not


##### <a id='gettitle'></a>public static function __getTitle__(book)

_Gets the title of a book_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to get title of

Returns | Description
--- | --- 
`String` | the title or null


##### <a id='hastitle'></a>public static function __hasTitle__(book)

_Checks if the book has a title_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to check

Returns | Description
--- | --- 
`boolean` | true if has title; false if not


##### <a id='getpagecount'></a>public static function __getPageCount__(book)

_Gets the page count of the book_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to get page count of

Returns | Description
--- | --- 
`int` | the number of pages or -1 if not a book or no proper tags found


##### <a id='getauthor'></a>public static function __getAuthor__(book)

_Gets the Author of the book_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to get Author of

Returns | Description
--- | --- 
`String` | the author or null


##### <a id='setpage'></a>public static function __setPage__(book, page_index, page)

_Sets a page at the specified index_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to set a page for
page_index | `int` | the index to add the page at
page | [`ChatComponent`](../../chat/ChatComponent.md) | the page to be added

Returns | Description
--- | --- 
`boolean` | `true` if success; `false` if not


##### <a id='iswritable'></a>public static function __isWritable__(book)

_Checks if the given Book can still be written in by a player_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to check

Returns | Description
--- | --- 
`boolean` | `true` if can be written in; `false` if not


##### <a id='issigned'></a>public static function __isSigned__(book)

_Checks if the given Book has been signed_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to check

Returns | Description
--- | --- 
`boolean` | `true` if signed; `false` if not


##### <a id='isenchanted'></a>public static function __isEnchanted__(book)

_| Checks if the given Book is enchanted_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to check

Returns | Description
--- | --- 
`boolean` | `true` if enchanted; `false` if not


##### <a id='lockbook'></a>public static function __lockBook__(book)

_Converts a Book&Quill into a Written Book_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to close

Returns | Description
--- | --- 
[`Item`](../Item.md) | the new book or original item if it wasn't a book


##### <a id='removeallenchantments'></a>public static function __removeAllEnchantments__(book)

_Removes all enchantments from the book_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to remove enchantments from

Returns | Description
--- | --- 
`boolean` | true if successful; false if not


##### <a id='removeenchantments'></a>public static function __removeEnchantments__(book)

_Removes the give enchantments from the book_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to remove enchantments from

Returns | Description
--- | --- 
`boolean` | true if successful; false if not


##### <a id='setauthor'></a>public static function __setAuthor__(book, author)

_Sets the author of the book_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to set author of
author | `String` | the name of the author to set

Returns | Description
--- | --- 
`boolean` | true if successful


##### <a id='setpage'></a>public static function __setPage__(book, page_index, page)

_Sets a page at the specified index_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to set a page for
page_index | `int` | the index to add the page at
page | `String` | the page to be added

Returns | Description
--- | --- 
`boolean` | `true` if success; `false` if not


##### <a id='settitle'></a>public static function __setTitle__(book, title)

_Sets the title of a book_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to set title for
title | `String` | the title to be set

Returns | Description
--- | --- 
`boolean` | true if successful or false if not


##### <a id='unlockbook'></a>public static function __unlockBook__(book)

_Converts a WrittenBook back into a Book&Quill_

Argument | Type | Description  
--- | --- | --- 
book | [`Item`](../Item.md) | the book to convert

Returns | Description
--- | --- 
[`Item`](../Item.md) | the new Book or original item if it wasn't a book


---
---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

