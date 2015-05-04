## HelpTopicComparator __class__

>io.wolfscript.help.HelpTopicComparator
>Implements `Comparator<HelpTopic`

---

### Class Overview

Used to impose a custom total ordering on help topics. <p> All topics are listed in alphabetic order, but topics that start with a slash come after topics that don't.

Method | Type   
--- | :--- 
 function __compare__(lhs, rhs) <br> _compare method_ | `int`
 function __compare__(lhs, rhs) <br> _compare method_ | `int`
static function __helpTopicComparatorInstance__() <br> _helpTopicComparatorInstance method_ | [`HelpTopicComparator`](HelpTopicComparator.md)
static function __topicNameComparatorInstance__() <br> _topicNameComparatorInstance method_ | `TopicNameComparator`



---


### Public Methods for [`HelpTopicComparator`](HelpTopicComparator.md)

##### <a id='compare'></a>public  function __compare__(lhs, rhs)

_compare method_

Argument | Type | Description  
--- | --- | --- 
lhs | [`HelpTopic`](HelpTopic.md) | lhs argument
rhs | [`HelpTopic`](HelpTopic.md) | rhs argument

Returns | 
--- | 
`int` |


##### <a id='compare'></a>public  function __compare__(lhs, rhs)

_compare method_

Argument | Type | Description  
--- | --- | --- 
lhs | `String` | lhs argument
rhs | `String` | rhs argument

Returns | 
--- | 
`int` |


##### <a id='helptopiccomparatorinstance'></a>public static function __helpTopicComparatorInstance__()

_helpTopicComparatorInstance method_

Returns | 
--- | 
[`HelpTopicComparator`](HelpTopicComparator.md) |


##### <a id='topicnamecomparatorinstance'></a>public static function __topicNameComparatorInstance__()

_topicNameComparatorInstance method_

Returns | 
--- | 
`TopicNameComparator` |


---


##### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

