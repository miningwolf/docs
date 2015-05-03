## WarningState __enum__

>io.wolfscript.WarningState

---

### Enum Overview

This designates the warning state for a specific item. <p> When the server settings dictate 'default' warnings, warnings are printed if the `#value()` is true. /
@Target({ElementType.CONSTRUCTOR, ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface Warning {

    /** This represents the states that server verbose for warnings may be.

Item | Type   
--- | :--- 
DEFAULT: <br> _Indicates all warnings should be printed for deprecated items._ | WarningState
static function __value__(String) <br> _Indicates all warnings should be printed for deprecated items._ | [`WarningState`](WarningState.md)



---


### Public Methods for [`WarningState`](WarningState.md)

##### <a id='value'></a>public static function __value__(String)

_Indicates all warnings should be printed for deprecated items. /
        ON,
        /** Indicates no warnings should be printed for deprecated items. /
        OFF,
        /** Indicates each warning would default to the configured `Warning` annotation, or always if annotation not found. /
        DEFAULT;

        private static final Map<String, WarningState> values = ImmutableMap.<String,WarningState>builder()
                .put("off", OFF)
                .put("false", OFF)
                .put("f", OFF)
                .put("no", OFF)
                .put("n", OFF)
                .put("on", ON)
                .put("true", ON)
                .put("t", ON)
                .put("yes", ON)
                .put("y", ON)
                .put("", DEFAULT)
                .put("d", DEFAULT)
                .put("default", DEFAULT)
                .build();

        /** This method checks the provided warning should be printed for this state_

Argument | Type | Description  
--- | --- | --- 
String | `final` | String argument

Returns | Description
--- | --- 
[`WarningState`](WarningState.md) | <ul> <li>ON is always True <li>OFF is always false <li>DEFAULT is false if and only if annotation is not null and specifies false for `Warning#value()`, true otherwise. </ul> /
        public boolean printFor(Warning warning) {
            if (this == DEFAULT) {
                return warning == null || warning.value();
            }
            return this == ON;
        }

        /** This method returns the corresponding warning state for the given string value.


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

