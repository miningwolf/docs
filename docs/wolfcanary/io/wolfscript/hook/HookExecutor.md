## HookExecutor __class__

>io.wolfscript.hook.HookExecutor
>Implements [`HookExecutorInterface`](HookExecutorInterface.md)

---

### Class Overview

Stores registered listeners and performs hook dispatches.

Method | Type   
--- | :--- 
 function __callHook__(hook) <br> _Register a [`PluginListener`](..\plugin\PluginListener.md) for a system hook_ | `void`
 function __compare__(o1, o2) <br> _compare method_ | `int`



---


### Public Methods for [`HookExecutor`](HookExecutor.md)

##### <a id='callhook'></a>public  function __callHook__(hook)

_Register a [`PluginListener`](..\plugin\PluginListener.md) for a system hook /
    @Override
    public void registerListener(PluginListener listener, Plugin plugin) {
        Method[] methods = ToolBox.safeArrayMerge(listener.getClass().getMethods(), listener.getClass().getDeclaredMethods(), new Method[1]);
        for (final Method method : methods) {
            // Check if the method is a hook handling method
            final HookHandler handler = method.getAnnotation(HookHandler.class);

            if (handler == null) {
                continue; // Next, not one of our things
            }
            // Check the parameters for number and type and decide if it's one
            // that is really a handler method
            Class<?>[] parameters = method.getParameterTypes();

            if (parameters.length > 1 || parameters.length == 0) {
                throw new HookConsistencyException("Amount of parameters for " + method.getName() + " is invalid. Expected 1, was " + parameters.length);
            }
            Class<?> hookCls = parameters[0];

            if (!Hook.class.isAssignableFrom(hookCls)) {
                throw new HookConsistencyException("Hook is not assignable from " + hookCls.getName());
            }

            Dispatcher dispatcher = new Dispatcher() {

                @Override
                public void execute(PluginListener listener, Hook hook) {
                    try {
                        method.invoke(listener, hook);
                    }
                    catch (Throwable thrown) {
                        if (thrown.getCause() != null) {
                            // Skip past wrapper exceptions and cut straight to the point
                            throw new HookExecutionException(thrown.getCause().getMessage(), thrown.getCause());
                        }
                        throw new HookExecutionException(thrown.getMessage(), thrown);
                    }
                }
            };
            dispatcher.ignoreCanceled = handler.ignoreCanceled();

            registerHook(listener, plugin, hookCls, dispatcher, handler.priority());
        }
    }

    /** A more flexible hook interface used internally. Adds flexibility required for Scala hook registration. /
    public void registerHook(PluginListener listener, Plugin plugin, Class<?> hookCls, Dispatcher dispatcher, Priority priority) {
        // Caller is assumed to check class (this is an internal API)
        listeners.put((Class<? extends Hook>)hookCls, new RegisteredPluginListener(listener, plugin, dispatcher, priority));
        Collections.sort(listeners.get((Class<? extends Hook>)hookCls), listener_comp);
    }

    /** Unregisters all listeners for specified plugin_

Argument | Type | Description  
--- | --- | --- 
hook | [`Hook`](Hook.md) | hook argument

Returns | 
--- | 
`void` |


##### <a id='compare'></a>public  function __compare__(o1, o2)

_compare method_

Argument | Type | Description  
--- | --- | --- 
o1 | [`RegisteredPluginListener`](..\plugin\RegisteredPluginListener.md) | o1 argument
o2 | [`RegisteredPluginListener`](..\plugin\RegisteredPluginListener.md) | o2 argument

Returns | 
--- | 
`int` |


---


###### This file was system generated using custom scripts copyright (c) 2015 Mining Wolf.
	

