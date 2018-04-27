var appTime = {
    name: 'appTime',
    reducer: Date.now,
    selectAppTime: function (state) { return state.appTime; }
}

var changes = {
    STARTED: 1,
    FINISHED: -1,
    FAILED: -1
};
var re = /_(STARTED|FINISHED|FAILED)$/;
var asyncCount = {
    name: 'asyncCount',
    reducer: function (state, ref) {
        if ( state === void 0 ) state = 0;
        var type = ref.type;

        var result = re.exec(type);
        if (!result) 
            { return state; }
        return state + changes[result[1]];
    },
    selectAsyncActive: function (state) { return state.asyncCount > 0; }
}

function namedActionMiddleware (store) { return function (next) { return function (action) {
    var actionCreator = action.actionCreator;
    var args = action.args;
    if (actionCreator) {
        var found = store.meta.unboundActionCreators[actionCreator];
        if (!found) {
            throw Error(("NoSuchActionCreator: " + actionCreator));
        }
        return next(args ? found.apply(void 0, args) : found());
    }
    return next(action);
}; }; }

function thunkMiddleware (extraArgCreators) { return function (store) {
    var extraArgs = extraArgCreators.reduce(function (result, fn) { return Object.assign(result, fn(store)); }, {});
    return function (next) { return function (action) {
        if (typeof action === 'function') {
            var getState = store.getState;
            var dispatch = store.dispatch;
            return action(Object.assign({}, {
                getState: getState,
                dispatch: dispatch,
                store: store
            }, extraArgs));
        }
        return next(action);
    }; };
}; }

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */
var root$2;

if (typeof self !== 'undefined') {
  root$2 = self;
} else if (typeof window !== 'undefined') {
  root$2 = window;
} else if (typeof global !== 'undefined') {
  root$2 = global;
} else if (typeof module !== 'undefined') {
  root$2 = module;
} else {
  root$2 = Function('return this')();
}

var result = symbolObservablePonyfill(root$2);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

function customApplyMiddleware () {
    var middlewares = [], len = arguments.length;
    while ( len-- ) middlewares[ len ] = arguments[ len ];

    return function (createStore$$1) { return function (reducer, preloadedState, enhancer) {
    var store = createStore$$1(reducer, preloadedState, enhancer);
    var chain = middlewares.map(function (middleware) { return middleware(store); });
    store.dispatch = compose.apply(void 0, chain)(store.dispatch);
    return store;
}; };
}

function r(r,n){return r===n}function n(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,t=null,o=null;return function(){return function(r,n,e){if(null===n||null===e||n.length!==e.length)return!1;for(var t=n.length,o=0;o<t;o++)if(!r(n[o],e[o]))return!1;return!0}(e,t,arguments)||(o=n.apply(null,arguments)), t=arguments, o}}var e=function(r){for(var e=arguments.length,t=Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];return function(){for(var e=arguments.length,o=Array(e),u=0;u<e;u++)o[u]=arguments[u];var i=0,l=o.pop(),a=function(r){var n=Array.isArray(r[0])?r[0]:r;if(!n.every(function(r){return"function"==typeof r})){var e=n.map(function(r){return typeof r}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+e+"]")}return n}(o),f=r.apply(void 0,[function(){return i++, l.apply(null,arguments)}].concat(t)),c=n(function(){for(var r=[],n=a.length,e=0;e<n;e++)r.push(a[e].apply(null,arguments));return f.apply(null,r)});return c.resultFunc=l, c.recomputations=function(){return i}, c.resetRecomputations=function(){return i=0}, c}}(n); var t=function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];var t=r.slice(-1)[0],o=function(r,n){var o=n.map(function(n){return function(r,n){if("string"!=typeof n)return n;var e=r[n];if(!e)throw Error("No selector "+n+" found on the obj.");return e}(r,n)});return o.push(t), e.apply(void 0,o)};return o.deps=r.slice(0,-1), o.resultFunc=t, o}; var o=function(r){var n=function(n){return n.call&&!n.deps||!r[n].deps},e=!1,t=function(t){var o=r[t];n(t)?e=!0:o.deps=o.deps.map(function(n,o){if(n.call){for(var u in r)if(r[u]===n)return u;if(!n.deps)return e=!0, n}if(r[n])return n;throw Error("The input selector at index "+o+" for '"+t+"' is missing from the object passed to resolveSelectors()")});};for(var o in r)t(o);if(!e)throw Error("You must pass at least one real selector. If they're all string references there's no");for(var u,i=function(){var e=!1;for(var t in r){var o=r[t];n(t)||(e=!0, o.deps.every(n)&&(r[t]=o(r,o.deps)));}return e};i();){if(u||(u=Date.now()), Date.now()-u>500)throw Error("Could not resolve selector dependencies.")}return r};

var debug = false;
try {
    debug = !(!window.localStorage.debug);
} catch (e) {}
var HAS_DEBUG_FLAG = debug || false;
var HAS_WINDOW = typeof window !== 'undefined';
var IS_BROWSER = HAS_WINDOW || typeof self !== 'undefined';
var IS_PROD = process.env.NODE_ENV === 'production';
var fallback = function (func) {
    setTimeout(func, 0);
};
var raf = IS_BROWSER && self.requestAnimationFrame ? self.requestAnimationFrame : fallback;
var ric = IS_BROWSER && self.requestIdleCallback ? self.requestIdleCallback : fallback;
var isPassiveSupported = function () {
    var passiveSupported = false;
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    } catch (err) {
        passiveSupported = false;
    }
    return passiveSupported;
};
var PASSIVE_EVENTS_SUPPORTED = isPassiveSupported();
var startsWith = function (string, searchString) { return string.substr(0, searchString.length) === searchString; };
var flattenExtractedToObject = function (extracted) {
    var result = {};
    for (var appName in extracted) {
        Object.assign(result, extracted[appName]);
    }
    return result;
};
var flattenExtractedToArray = function (extracted) {
    var accum = [];
    for (var appName in extracted) {
        accum.push.apply(accum, extracted[appName]);
    }
    return accum;
};
var addGlobalListener = function (eventName, handler, opts) {
    if ( opts === void 0 ) opts = {
    passive: false
};

    if (IS_BROWSER) {
        if (opts.passive) {
            if (PASSIVE_EVENTS_SUPPORTED) {
                self.addEventListener(eventName, handler, {
                    passive: true
                });
            } else {
                self.addEventListener(eventName, debounce(handler, 200), false);
            }
        } else {
            self.addEventListener(eventName, handler);
        }
    }
};
var selectorNameToValueName = function (name) {
    var start = name[0] === 's' ? 6 : 5;
    return name[start].toLowerCase() + name.slice(start + 1);
};
var debounce = function (fn, wait) {
    var timeout;
    var debounced = function () {
        var ctx = this;
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            fn.apply(ctx, args);
        }, wait);
    };
    debounced.cancel = (function () {
        clearTimeout(timeout);
    });
    return debounced;
};
var saveScrollPosition = function () {
    history.replaceState({
        height: document.body.offsetHeight,
        width: document.body.offsetWidth,
        y: document.body.scrollTop,
        x: document.body.scrollLeft
    }, '');
};
var restoreScrollPosition = function () {
    var state = history.state;
    if (state) {
        var newStyle = "height: " + (state.height) + "px; width: " + (state.width) + "px;";
        document.body.setAttribute('style', newStyle);
        window.scrollTo(state.x, state.y);
        ric(function () { return document.body.removeAttribute('style'); });
    }
};
var initScrollPosition = function () {
    if (!HAS_WINDOW) {
        return;
    }
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    addGlobalListener('popstate', restoreScrollPosition);
    addGlobalListener('scroll', debounce(saveScrollPosition, 300), {
        passive: true
    });
    restoreScrollPosition();
};

var obj;
var normalizeBundle = function (bundle) {
    var name = bundle.name;
    if (!name) 
        { throw TypeError('bundles must have a "name" property'); }
    var result = {
        name: name,
        reducer: bundle.reducer || bundle.getReducer && bundle.getReducer() || null,
        init: bundle.init || null,
        extraArgCreators: bundle.getExtraArgs || null,
        middlewareCreators: bundle.getMiddleware,
        actionCreators: null,
        selectors: null,
        reactorNames: null,
        rawBundle: bundle
    };
    Object.keys(bundle).forEach(function (key) {
        if (startsWith(key, 'do')) {
            
            (result.actionCreators || (result.actionCreators = {}))[key] = bundle[key];
            return;
        }
        var isSelector = startsWith(key, 'select');
        var isReactor = startsWith(key, 'react');
        if (isSelector || isReactor) {
            
            (result.selectors || (result.selectors = {}))[key] = bundle[key];
            if (isReactor) {
                
                (result.reactorNames || (result.reactorNames = [])).push(key);
            }
        }
    });
    return result;
};
var createChunk = function (rawBundles) {
    var normalizedBundles = rawBundles.map(normalizeBundle);
    var result = {
        bundleNames: [],
        reducers: {},
        selectors: {},
        actionCreators: {},
        rawBundles: [],
        processedBundles: [],
        initMethods: [],
        middlewareCreators: [],
        extraArgCreators: [],
        reactorNames: []
    };
    normalizedBundles.forEach(function (bundle) {
        result.bundleNames.push(bundle.name);
        Object.assign(result.selectors, bundle.selectors);
        Object.assign(result.actionCreators, bundle.actionCreators);
        if (bundle.reducer) {
            Object.assign(result.reducers, ( obj = {}, obj[bundle.name] = bundle.reducer, obj));
        }
        if (bundle.init) 
            { result.initMethods.push(bundle.init); }
        if (bundle.middlewareCreators) {
            result.middlewareCreators.push(bundle.middlewareCreators);
        }
        if (bundle.extraArgCreators) {
            result.extraArgCreators.push(bundle.extraArgCreators);
        }
        if (bundle.reactorNames) 
            { (ref = result.reactorNames).push.apply(ref, bundle.reactorNames); }
        result.processedBundles.push(bundle);
        result.rawBundles.push(bundle.rawBundle);
        var ref;
    });
    return result;
};

function addBindingMethods (store) {
    store.subscriptions = {
        watchedValues: {}
    };
    var subscriptions = store.subscriptions.set = new Set();
    var watchedSelectors = store.subscriptions.watchedSelectors = {};
    var watch = function (selectorName) {
        watchedSelectors[selectorName] = (watchedSelectors[selectorName] || 0) + 1;
    };
    var unwatch = function (selectorName) {
        var count = watchedSelectors[selectorName] - 1;
        if (count === 0) {
            delete watchedSelectors[selectorName];
        } else {
            watchedSelectors[selectorName] = count;
        }
    };
    store.subscribe(function () {
        var newValues = watchedSelectors.all ? store.selectAll() : store.select(Object.keys(watchedSelectors));
        var ref = store.subscriptions;
        var watchedValues = ref.watchedValues;
        var changed = {};
        for (var key in newValues) {
            var val = newValues[key];
            if (val !== watchedValues[key]) {
                changed[key] = val;
            }
        }
        store.subscriptions.watchedValues = newValues;
        subscriptions.forEach(function (subscription) {
            var relevantChanges = {};
            var hasChanged = false;
            if (subscription.names === 'all') {
                Object.assign(relevantChanges, changed);
                hasChanged = !(!Object.keys(relevantChanges).length);
            } else {
                subscription.names.forEach(function (name) {
                    if (changed.hasOwnProperty(name)) {
                        relevantChanges[name] = changed[name];
                        hasChanged = true;
                    }
                });
            }
            if (hasChanged) {
                subscription.fn(relevantChanges);
            }
        });
    });
    store.subscribeToAllChanges = (function (callback) { return store.subscribeToSelectors('all', callback); });
    store.subscribeToSelectors = (function (keys, callback) {
        var isAll = keys === 'all';
        var subscription = {
            fn: callback,
            names: isAll ? 'all' : keys.map(selectorNameToValueName)
        };
        subscriptions.add(subscription);
        isAll ? watch('all') : keys.forEach(watch);
        Object.assign(store.subscriptions.watchedValues, isAll ? store.selectAll() : store.select(keys));
        return function () {
            subscriptions.delete(subscription);
            isAll ? unwatch('all') : keys.forEach(unwatch);
        };
    });
}

var bindSelectorsToStore = function (store, selectors) {
    var loop = function ( key ) {
        var selector = selectors[key];
        if (!store[key]) {
            store[key] = (function () { return selector(store.getState()); });
        }
    };

    for (var key in selectors) loop( key );
};
var decorateStore = function (store, processed) {
    if (!store.meta) {
        store.meta = {
            chunks: [],
            unboundSelectors: {},
            unboundActionCreators: {},
            reactorNames: []
        };
    }
    var meta = store.meta;
    meta.chunks.push(processed);
    var combinedSelectors = Object.assign(meta.unboundSelectors, processed.selectors);
    o(combinedSelectors);
    meta.unboundSelectors = combinedSelectors;
    bindSelectorsToStore(store, combinedSelectors);
    meta.reactorNames = meta.reactorNames.concat(processed.reactorNames);
    Object.assign(meta.unboundActionCreators, processed.actionCreators);
    Object.assign(store, bindActionCreators(processed.actionCreators, store.dispatch));
    processed.initMethods.forEach(function (fn) { return fn(store); });
};
var enableBatchDispatch = function (reducer) { return function (state, action) {
    if (action.type === 'BATCH_ACTIONS') {
        return action.actions.reduce(reducer, state);
    }
    return reducer(state, action);
}; };
var devTools = function () { return HAS_WINDOW && window.__REDUX_DEVTOOLS_EXTENSION__ && (HAS_DEBUG_FLAG || !IS_PROD) ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (a) { return a; }; };
var composeBundles = function () {
    var bundles = [], len = arguments.length;
    while ( len-- ) bundles[ len ] = arguments[ len ];

    var firstChunk = createChunk(bundles);
    return function (data) {
        var store = createStore(enableBatchDispatch(combineReducers(firstChunk.reducers)), data, compose(customApplyMiddleware.apply(void 0, [namedActionMiddleware,
            thunkMiddleware(firstChunk.extraArgCreators) ].concat( firstChunk.middlewareCreators.map(function (fn) { return fn(firstChunk); }))), devTools()));
        store.select = (function (selectorNames) { return selectorNames.reduce(function (obj, name) {
            if (!store[name]) 
                { throw Error(("SelectorNotFound " + name)); }
            obj[selectorNameToValueName(name)] = store[name]();
            return obj;
        }, {}); });
        store.selectAll = (function () { return store.select(Object.keys(store.meta.unboundSelectors)); });
        store.action = (function (name, args) { return store[name].apply(store, args); });
        addBindingMethods(store);
        decorateStore(store, firstChunk);
        store.integrateBundles = (function () {
            var bundlesToIntegrate = [], len = arguments.length;
            while ( len-- ) bundlesToIntegrate[ len ] = arguments[ len ];

            decorateStore(store, createChunk(bundlesToIntegrate));
            var allReducers = store.meta.chunks.reduce(function (accum, chunk) { return Object.assign(accum, chunk.reducers); }, {});
            store.replaceReducer(enableBatchDispatch(combineReducers(allReducers)));
        });
        return store;
    };
};

// regexes borrowed from backbone
var optionalParam = /\((.*?)\)/g;
var namedParam = /(\(\?)?:\w+/g;
var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
var splatParam = /\*/g;

// Parses a URL pattern such as `/users/:id`
// and builds and returns a regex that can be used to
// match said pattern. Credit for these
// regexes belongs to Jeremy Ashkenas and the
// other maintainers of Backbone.js
//
// It has been modified for extraction of
// named paramaters from the URL
var parsePattern = function (pattern) {
  var names = [];
  pattern = pattern
    .replace(escapeRegExp, '\\$&')
    .replace(optionalParam, '(?:$1)?')
    .replace(namedParam, function (match, optional) {
      names.push(match.slice(1));
      return optional ? match : '([^/?]+)'
    })
    .replace(splatParam, function (match, optional) {
      names.push('path');
      return '([^?]*?)'
    });

  return {
    regExp: new RegExp('^' + pattern + '(?:\\?([\\s\\S]*))?$'),
    namedParams: names
  }
};

var featherRouteMatcher = function (routes, fallback) {
  var keys = Object.keys(routes);

  // loop through each route we're
  // and build the shell of our
  // route cache.
  for (var item in routes) {
    routes[item] = {
      value: routes[item]
    };
  }

  // main result is a function that can be called
  // with the url
  return function (url) {
    var params;
    var route;

    // start looking for matches
    var matchFound = keys.some(function (key) {
      var parsed;

      // fetch the route pattern from the cache
      // there will always be one
      route = routes[key];

      // if the route doesn't already have
      // a regex we never generated one
      // so we do that here lazily.
      // Parse the pattern to generate the
      // regex once, and store the result
      // for next time.
      if (!route.regExp) {
        parsed = parsePattern(key);
        route.regExp = parsed.regExp;
        route.namedParams = parsed.namedParams;
        route.pattern = key;
      }

      // run our cached regex
      var result = route.regExp.exec(url);

      // if null there was no match
      // returning falsy here continues
      // the `Array.prototype.some` loop
      if (!result) {
        return
      }

      // remove other cruft from result
      result = result.slice(1, -1);

      // reduce our match to an object of named paramaters
      // we've extracted from the url
      params = result.reduce(function (obj, val, index) {
        if (val) {
          obj[route.namedParams[index]] = val;
        }
        return obj
      }, {});

      // stops the loop
      return true
    });

    // no routes matched
    if (!matchFound) {
      if (fallback) {
        return {
          page: fallback,
          url: url,
          params: null
        }
      }
      return null
    }

    return {
      page: route.value,
      params: params,
      url: url,
      pattern: route.pattern
    }
  }
};

function createRoutingBundle (routes) { return ({
    name: 'routes',
    selectRouteInfo: t('selectPathname', featherRouteMatcher(routes)),
    selectRouteParams: t('selectRouteInfo', function (ref) {
        var params = ref.params;

        return params;
    }),
    selectRoute: t('selectRouteInfo', function (ref) {
        var page = ref.page;

        return page;
    })
}); }

var defaultOpts = {
    actionBaseType: null,
    staleAfter: 900000,
    retryAfter: 60000,
    expireAfter: Infinity,
    checkIfOnline: true,
    persist: true
};
function createAsyncResourceBundle (spec) {
    var opts = Object.assign({}, defaultOpts, spec);
    if (process.env.NODE_ENV !== 'production') {
        var requiredOptions = ['name','getPromise'];
        requiredOptions.forEach(function (requiredOption) {
            if (!opts[requiredOption]) {
                throw Error(("You must supply a " + requiredOption + " option when creating a resource bundle."));
            }
        });
    }
    var name = opts.name;
    var staleAfter = opts.staleAfter;
    var retryAfter = opts.retryAfter;
    var actionBaseType = opts.actionBaseType;
    var checkIfOnline = opts.checkIfOnline;
    var expireAfter = opts.expireAfter;
    var uCaseName = name.charAt(0).toUpperCase() + name.slice(1);
    var baseType = actionBaseType || name.toUpperCase();
    var inputSelector = function (state) { return state[name]; };
    var dataSelector = function (state) { return state[name].data; };
    var lastSuccessSelector = function (state) { return state[name].lastSuccess; };
    var isExpiredSelector = function (state) { return state[name].isExpired; };
    var lastErrorSelector = t(inputSelector, function (resource) { return resource.errorTimes.slice(-1)[0] || null; });
    var isStaleSelector = t(inputSelector, lastSuccessSelector, 'selectAppTime', function (state, time, appTime) {
        if (state.isOutdated) {
            return true;
        }
        if (!time) {
            return false;
        }
        return appTime - time > staleAfter;
    });
    var isWaitingToRetrySelector = t(lastErrorSelector, 'selectAppTime', function (time, appTime) {
        if (!time) {
            return false;
        }
        return appTime - time < retryAfter;
    });
    var isLoadingSelector = t(inputSelector, function (resourceState) { return resourceState.isLoading; });
    var failedPermanentlySelector = t(inputSelector, function (resourceState) { return resourceState.failedPermanently; });
    var shouldUpdateSelector = t(isLoadingSelector, failedPermanentlySelector, isWaitingToRetrySelector, dataSelector, isStaleSelector, 'selectIsOnline', function (isLoading, failedPermanently, isWaitingToRetry, data, isStale, isOnline) {
        if (checkIfOnline && !isOnline || isLoading || failedPermanently || isWaitingToRetry) {
            return false;
        }
        if (!data) {
            return true;
        }
        return isStale;
    });
    var actions = {
        STARTED: (baseType + "_FETCH_STARTED"),
        FINISHED: (baseType + "_FETCH_FINISHED"),
        FAILED: (baseType + "_FETCH_FAILED"),
        CLEARED: (baseType + "_CLEARED"),
        OUTDATED: (baseType + "_OUTDATED"),
        EXPIRED: (baseType + "_EXPIRED")
    };
    var doFetchError = function (error) { return ({
        type: actions.FAILED,
        error: error
    }); };
    var doMarkAsOutdated = function () { return ({
        type: actions.OUTDATED
    }); };
    var doClear = function () { return ({
        type: actions.CLEARED
    }); };
    var doExpire = function () { return ({
        type: actions.EXPIRED
    }); };
    var doFetchSuccess = function (payload) { return ({
        type: actions.FINISHED,
        payload: payload
    }); };
    var doFetchData = function () { return function (args) {
        var dispatch = args.dispatch;
        dispatch({
            type: actions.STARTED
        });
        return opts.getPromise(args).then(function (payload) {
            dispatch(doFetchSuccess(payload));
        }, function (error) {
            dispatch(doFetchError(error));
        });
    }; };
    var initialState = {
        data: null,
        errorTimes: [],
        errorType: null,
        lastSuccess: null,
        isOutdated: false,
        isLoading: false,
        isExpired: false,
        failedPermanently: false
    };
    var result = {
        name: name,
        reducer: function (state, ref) {
            if ( state === void 0 ) state = initialState;
            var type = ref.type;
            var payload = ref.payload;
            var error = ref.error;
            var merge = ref.merge;

            if (type === actions.STARTED) {
                return Object.assign({}, state, {
                    isLoading: true
                });
            }
            if (type === actions.FINISHED) {
                var updatedData;
                if (merge) {
                    updatedData = Object.assign({}, state.data, payload);
                } else {
                    updatedData = payload;
                }
                return Object.assign({}, state, {
                    isLoading: false,
                    data: updatedData,
                    lastSuccess: Date.now(),
                    errorTimes: [],
                    errorType: null,
                    failedPermanently: false,
                    isOutdated: false,
                    isExpired: false
                });
            }
            if (type === actions.FAILED) {
                var errorMessage = error && error.message || error;
                return Object.assign({}, state, {
                    isLoading: false,
                    errorTimes: state.errorTimes.concat([Date.now()]),
                    errorType: errorMessage,
                    failedPermanently: !(!(error && error.permanent))
                });
            }
            if (type === actions.CLEARED) {
                return initialState;
            }
            if (type === actions.EXPIRED) {
                return Object.assign({}, initialState, {
                    isExpired: true,
                    errorTimes: state.errorTimes,
                    errorType: state.errorType
                });
            }
            if (type === actions.OUTDATED) {
                return Object.assign({}, state, {
                    isOutdated: true
                });
            }
            return state;
        }
    };
    result[("select" + uCaseName + "Raw")] = inputSelector;
    result[("select" + uCaseName)] = dataSelector;
    result[("select" + uCaseName + "IsStale")] = isStaleSelector;
    result[("select" + uCaseName + "IsExpired")] = isExpiredSelector;
    result[("select" + uCaseName + "LastError")] = lastErrorSelector;
    result[("select" + uCaseName + "IsWaitingToRetry")] = isWaitingToRetrySelector;
    result[("select" + uCaseName + "IsLoading")] = isLoadingSelector;
    result[("select" + uCaseName + "FailedPermanently")] = failedPermanentlySelector;
    result[("select" + uCaseName + "ShouldUpdate")] = shouldUpdateSelector;
    result[("doFetch" + uCaseName)] = doFetchData;
    result[("doMark" + uCaseName + "AsOutdated")] = doMarkAsOutdated;
    result[("doClear" + uCaseName)] = doClear;
    result[("doExpire" + uCaseName)] = doExpire;
    if (opts.persist) {
        result.persistActions = [actions.FINISHED,actions.EXPIRED,actions.OUTDATED,
            actions.CLEARED];
    }
    if (expireAfter !== Infinity) {
        result[("reactExpire" + uCaseName)] = t(lastSuccessSelector, 'selectAppTime', function (time, appTime) {
            if (!time) {
                return false;
            }
            if (appTime - time > expireAfter) {
                return doExpire();
            }
        });
    }
    return result;
}

var e$1=!("undefined"==typeof window&&"undefined"==typeof self);
var n$1="undefined"==typeof requestIdleCallback?function(e){return setTimeout(e,0)}:requestIdleCallback;function getPersistMiddleware(t){var u=t.cacheFn,r=t.actionMap,o=t.logger;return function(t){var i=t.getState;return function(t){return function(a){var f=r[a.type],c=t(a),d=i();return e$1&&f&&n$1(function(){Promise.all(f.map(function(e){return u(e,d[e])})).then(function(){o&&o("cached "+f.join(", ")+" due to "+a.type);});},{timeout:500}), c}}}}

function caching (cacheFn) { return ({
    name: 'localCache',
    getMiddleware: function (chunk) {
        var actionMap = {};
        chunk.rawBundles.forEach(function (bundle) {
            if (bundle.persistActions) {
                bundle.persistActions.forEach(function (type) {
                    actionMap[type] || (actionMap[type] = []);
                    actionMap[type].push(bundle.name);
                });
            }
        });
        return getPersistMiddleware({
            actionMap: actionMap,
            cacheFn: cacheFn
        });
    }
}); }

var getError = function (message, permanent) {
    if ( permanent === void 0 ) permanent = false;

    var err = new Error(message);
    if (permanent) 
        { err.permanent = true; }
    return err;
};
var geoErrorArray = ['An unknown geolocation error occured','Geolocation permission denied',
    'Geolocation unavailable','Geolocation request timed out'];
var defaultOpts$1 = {
    timeout: 60000,
    enableHighAccuracy: false,
    persist: true,
    staleAge: 900000,
    retryAfter: 60000
};
function geolocation (spec) {
    var opts = Object.assign({}, defaultOpts$1, spec);
    return createAsyncResourceBundle({
        name: 'geolocation',
        actionBaseType: 'GEOLOCATION_REQUEST',
        getPromise: function () { return new Promise(function (resolve, reject) {
            if (!IS_BROWSER || !navigator.geolocation) {
                reject(getError('Geolocation not supported', true));
            }
            var success = function (position) {
                var res = {};
                var coords = position.coords;
                for (var key in coords) {
                    res[key] = coords[key];
                }
                res.timestamp = position.timestamp;
                resolve(res);
            };
            var fail = function (ref) {
                var code = ref.code;

                reject(getError(geoErrorArray[code], code === 1));
            };
            var geoOpts = {
                timeout: opts.timeout,
                enableHighAccuracy: opts.enableHighAccuracy
            };
            navigator.geolocation.getCurrentPosition(success, fail, geoOpts);
        }); },
        persist: opts.persist,
        staleAge: opts.staleAge,
        retryAfter: opts.retryAfter
    });
}

var defaults = {
    idleTimeout: 30000,
    idleAction: 'APP_IDLE',
    doneCallback: null,
    stopWhenTabInactive: true
};
var ricOptions = {
    timeout: 500
};
var getIdleDispatcher = function (stopWhenInactive, timeout, fn) { return debounce(function () {
    stopWhenInactive ? raf(function () { return ric(fn, ricOptions); }) : ric(fn, ricOptions);
}, timeout); };
function reactors (spec) { return ({
    name: 'reactors',
    init: function (store) {
        var opts = Object.assign({}, defaults, spec);
        var idleAction = opts.idleAction;
        var idleTimeout = opts.idleTimeout;
        var idleDispatcher;
        if (idleTimeout) {
            idleDispatcher = getIdleDispatcher(opts.stopWhenTabInactive, idleTimeout, function () { return store.dispatch({
                type: idleAction
            }); });
        }
        if (process.env.NODE_ENV !== 'production') {
            store.meta.reactorNames.forEach(function (name) {
                if (!store[name]) {
                    throw Error(("Reactor '" + name + "' not found on the store. Make sure you're defining as selector by that name."));
                }
            });
        }
        var cancelIfDone = function () {
            if (!IS_BROWSER && !store.nextReaction && (!store.selectAsyncActive || !store.selectAsyncActive())) {
                idleDispatcher && idleDispatcher.cancel();
                opts.doneCallback && opts.doneCallback();
            }
        };
        var dispatchNext = function () {
            if (store.nextReaction) {
                return;
            }
            store.meta.reactorNames.some(function (name) {
                var result = store[name]();
                if (result) {
                    store.activeReactor = name;
                    store.nextReaction = result;
                }
                return result;
            });
            if (store.nextReaction) {
                ric(function () {
                    var nextReaction = store.nextReaction;
                    store.activeReactor = null;
                    store.nextReaction = null;
                    store.dispatch(nextReaction);
                }, ricOptions);
            }
        };
        var callback = function () {
            dispatchNext();
            if (idleDispatcher) {
                idleDispatcher();
                cancelIfDone();
            }
        };
        store.subscribe(callback);
        callback();
    }
}); }

var has = Object.prototype.hasOwnProperty;

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  //
  // Little nifty parsing hack, leverage the fact that RegExp.exec increments
  // the lastIndex property so we can continue executing this loop until we've
  // parsed all results.
  //
  for (;
    part = parser.exec(query);
    result[decodeURIComponent(part[1])] = decodeURIComponent(part[2])
  );

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = [];

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (var key in obj) {
    if (has.call(obj, key)) {
      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
var stringify = querystringify;
var parse = querystring;

var querystringify_1 = {
	stringify: stringify,
	parse: parse
};

var URL = window.URL;
var isString = function (obj) { return Object.prototype.toString.call(obj) === '[object String]'; };
var isDefined = function (thing) { return typeof thing !== 'undefined'; };
var ensureString = function (input) { return isString(input) ? input : querystringify_1.stringify(input); };
var IPRE = /^[0-9.]+$/;
var parseSubdomains = function (hostname, getBareHost) {
    if (IPRE.test(hostname)) 
        { return []; }
    var parts = hostname.split('.');
    if (getBareHost) {
        return parts.slice(-2).join('.');
    }
    return hostname.split('.').slice(0, -2);
};
var removeLeading = function (char, string) { return string.charAt(0) === char ? string.slice(1) : string; };
var ensureLeading = function (char, string) {
    if (string === char || string === '') {
        return '';
    }
    return string.charAt(0) !== char ? char + string : string;
};
var loc = (function () {
    if (!HAS_WINDOW) 
        { return {}; }
    return window.location;
})();
var defaults$1 = {
    name: 'url',
    inert: !HAS_WINDOW,
    actionType: 'URL_UPDATED',
    handleScrollRestoration: true
};
var makeSerializable = function (url) {
    var result = {};
    for (var key in url) {
        var val = url[key];
        if (isString(val)) {
            result[key] = val;
        }
    }
    return result;
};
function url (opts) {
    var config = Object.assign({}, defaults$1, opts);
    var actionType = config.actionType;
    var selectUrlRaw = function (state) { return state[config.name]; };
    var selectUrlObject = t(selectUrlRaw, function (urlState) { return makeSerializable(new URL(urlState.url)); });
    var selectQueryObject = t(selectUrlObject, function (urlObj) { return querystringify_1.parse(urlObj.search); });
    var selectQueryString = t(selectQueryObject, function (queryObj) { return querystringify_1.stringify(queryObj); });
    var selectPathname = t(selectUrlObject, function (urlObj) { return urlObj.pathname; });
    var selectHash = t(selectUrlObject, function (urlObj) { return removeLeading('#', urlObj.hash); });
    var selectHashObject = t(selectHash, function (hash) { return querystringify_1.parse(hash); });
    var selectHostname = t(selectUrlObject, function (urlObj) { return urlObj.hostname; });
    var selectSubdomains = t(selectHostname, function (hostname) { return parseSubdomains(hostname); });
    var doUpdateUrl = function (newState, opts) {
        if ( opts === void 0 ) opts = {
        replace: false
    };

        return function (ref) {
        var dispatch = ref.dispatch;
        var getState = ref.getState;

        var state = newState;
        if (typeof newState === 'string') {
            var parsed = new URL(newState.charAt(0) === '/' ? 'http://example.com' + newState : newState);
            state = {
                pathname: parsed.pathname,
                query: parsed.search || '',
                hash: parsed.hash || ''
            };
        }
        var url = new URL(selectUrlRaw(getState()).url);
        if (isDefined(state.pathname)) 
            { url.pathname = state.pathname; }
        if (isDefined(state.hash)) 
            { url.hash = ensureString(state.hash); }
        if (isDefined(state.query)) 
            { url.search = ensureString(state.query); }
        dispatch({
            type: actionType,
            payload: {
                url: url.href,
                replace: opts.replace
            }
        });
    };
    };
    var doReplaceUrl = function (url) { return doUpdateUrl(url, {
        replace: true
    }); };
    var doUpdateQuery = function (query, opts) {
        if ( opts === void 0 ) opts = {
        replace: true
    };

        return doUpdateUrl({
        query: ensureString(query)
    }, opts);
    };
    var doUpdateHash = function (hash, opts) {
        if ( opts === void 0 ) opts = {
        replace: false
    };

        return doUpdateUrl({
        hash: ensureLeading('#', ensureString(hash))
    }, opts);
    };
    return {
        name: config.name,
        init: function (store) {
            if (config.inert) {
                return;
            }
            if (config.handleScrollRestoration) 
                { initScrollPosition(); }
            window.addEventListener('popstate', function () {
                store.doUpdateUrl({
                    pathname: loc.pathname,
                    hash: loc.hash,
                    query: loc.search
                });
            });
            var lastState = store.selectUrlRaw();
            store.subscribe(function () {
                var newState = store.selectUrlRaw();
                var newUrl = newState.url;
                if (lastState !== newState && newUrl !== loc.href) {
                    try {
                        window.history[newState.replace ? 'replaceState' : 'pushState']({}, null, newState.url);
                        if (config.handleScrollRestoration) 
                            { saveScrollPosition(); }
                        document.body.scrollTop = 0;
                        document.body.scrollLeft = 0;
                    } catch (e) {
                        console.error(e);
                    }
                }
                lastState = newState;
            });
        },
        getReducer: function () {
            var initialState = {
                url: !config.inert && HAS_WINDOW ? loc.href : '/',
                replace: false
            };
            return function (state, ref) {
                if ( state === void 0 ) state = initialState;
                var type = ref.type;
                var payload = ref.payload;

                if (type === '@@redux/INIT' && typeof state === 'string') {
                    return {
                        url: state,
                        replace: false
                    };
                }
                if (type === actionType) {
                    return Object.assign({
                        url: payload.url || payload,
                        replace: !(!payload.replace)
                    });
                }
                return state;
            };
        },
        doUpdateUrl: doUpdateUrl,
        doReplaceUrl: doReplaceUrl,
        doUpdateQuery: doUpdateQuery,
        doUpdateHash: doUpdateHash,
        selectUrlRaw: selectUrlRaw,
        selectUrlObject: selectUrlObject,
        selectQueryObject: selectQueryObject,
        selectQueryString: selectQueryString,
        selectPathname: selectPathname,
        selectHash: selectHash,
        selectHashObject: selectHashObject,
        selectHostname: selectHostname,
        selectSubdomains: selectSubdomains
    };
}

function debugMiddleware (store) { return function (next) { return function (action) {
    var isDebug = store.getState().debug;
    if (isDebug) {
        console.group(action.type);
        console.info('action:', action);
    }
    var result = next(action);
    if (isDebug) {
        console.debug('state:', store.getState());
        self.logSelectors && self.logSelectors();
        self.logNextReaction && self.logNextReaction();
        console.groupEnd(action.type);
    }
    return result;
}; }; }

var ENABLE = 'DEBUG_ENABLED';
var DISABLE = 'DEBUG_DISABLED';
var debug$1 = {
    name: 'debug',
    reducer: function (state, ref) {
        if ( state === void 0 ) state = HAS_DEBUG_FLAG;
        var type = ref.type;

        if (type === ENABLE) {
            return true;
        }
        if (type === DISABLE) {
            return false;
        }
        return state;
    },
    doEnableDebug: function () { return ({
        type: ENABLE
    }); },
    doDisableDebug: function () { return ({
        type: DISABLE
    }); },
    selectIsDebug: function (state) { return state.debug; },
    getMiddleware: function () { return debugMiddleware; },
    init: function (store) {
        if (store.selectIsDebug()) {
            var names = store.meta.chunks[0].bundleNames;
            self.store = store;
            var actionCreators = [];
            for (var key in store) {
                if (key.indexOf('do') === 0) {
                    actionCreators.push(key);
                }
            }
            actionCreators.sort();
            var colorTitle = 'color: #1676D2;';
            var black = 'color: black;';
            var colorGreen = 'color: #4CAF50;';
            var colorOrange = 'color: #F57C00;';
            store.logSelectors = (self.logSelectors = (function () {
                if (!store.selectAll) 
                    { return; }
                console.log('%cselectors:', colorGreen, store.selectAll());
            }));
            store.logBundles = (self.logBundles = (function () {
                console.log('%cinstalled bundles:\n  %c%s', colorTitle, black, names.join('\n  '));
            }));
            store.logActionCreators = (self.logActionCreators = (function () {
                console.groupCollapsed('%caction creators', colorOrange);
                actionCreators.forEach(function (name) { return console.log(name); });
                console.groupEnd();
            }));
            store.logReactors = (self.logReactors = (function () {
                console.groupCollapsed('%creactors', colorOrange);
                var ref = store.meta;
                var reactorNames = ref.reactorNames;
                reactorNames.forEach(function (name) { return console.log(name); });
                console.groupEnd();
            }));
            store.logNextReaction = (self.logNextReaction = (function () {
                var nextReaction = store.nextReaction;
                var activeReactor = store.activeReactor;
                if (nextReaction) {
                    console.log(("%cnext reaction:\n  %c" + activeReactor), colorOrange, black, nextReaction);
                }
            }));
            console.groupCollapsed('%credux bundler', colorTitle);
            store.logBundles();
            store.logSelectors();
            store.logReactors();
            console.groupEnd();
            if (store.isReacting) {
                console.log("%cqueuing reaction:", colorOrange);
            }
        }
    }
}

var OFFLINE = 'OFFLINE';
var ONLINE = 'ONLINE';
var online = {
    name: 'online',
    selectIsOnline: function (state) { return state.online; },
    reducer: function (state, ref) {
        if ( state === void 0 ) state = true;
        var type = ref.type;

        if (type === OFFLINE) 
            { return false; }
        if (type === ONLINE) 
            { return true; }
        return state;
    },
    init: function (store) {
        addGlobalListener('online', function () { return store.dispatch({
            type: ONLINE
        }); });
        addGlobalListener('offline', function () { return store.dispatch({
            type: OFFLINE
        }); });
    }
}

var appTimeBundle = appTime;
var asyncCountBundle = asyncCount;
var createCacheBundle = caching;
var createRouteBundle = createRoutingBundle;
var createAsyncResourceBundle$1 = createAsyncResourceBundle;
var createReactorBundle = reactors;
var getIdleDispatcher$1 = getIdleDispatcher;
var onlineBundle = online;
var createUrlBundle = url;
var debugBundle = debug$1;
var composeBundlesRaw = composeBundles;
var createGeolocationBundle = geolocation;
var composeBundles$1 = function () {
    var userBundles = [], len = arguments.length;
    while ( len-- ) userBundles[ len ] = arguments[ len ];

    userBundles || (userBundles = []);
    var bundles = [appTime,asyncCount,online,url(),reactors(),debug$1 ].concat( userBundles);
    return composeBundles.apply(void 0, bundles);
};

exports.appTimeBundle = appTimeBundle;
exports.asyncCountBundle = asyncCountBundle;
exports.createCacheBundle = createCacheBundle;
exports.createRouteBundle = createRouteBundle;
exports.createAsyncResourceBundle = createAsyncResourceBundle$1;
exports.createReactorBundle = createReactorBundle;
exports.getIdleDispatcher = getIdleDispatcher$1;
exports.onlineBundle = onlineBundle;
exports.createUrlBundle = createUrlBundle;
exports.debugBundle = debugBundle;
exports.composeBundlesRaw = composeBundlesRaw;
exports.createGeolocationBundle = createGeolocationBundle;
exports.composeBundles = composeBundles$1;
exports.createSelector = t;
exports.resolveSelectors = o;
exports.HAS_DEBUG_FLAG = HAS_DEBUG_FLAG;
exports.HAS_WINDOW = HAS_WINDOW;
exports.IS_BROWSER = IS_BROWSER;
exports.IS_PROD = IS_PROD;
exports.raf = raf;
exports.ric = ric;
exports.isPassiveSupported = isPassiveSupported;
exports.PASSIVE_EVENTS_SUPPORTED = PASSIVE_EVENTS_SUPPORTED;
exports.startsWith = startsWith;
exports.flattenExtractedToObject = flattenExtractedToObject;
exports.flattenExtractedToArray = flattenExtractedToArray;
exports.addGlobalListener = addGlobalListener;
exports.selectorNameToValueName = selectorNameToValueName;
exports.debounce = debounce;
exports.saveScrollPosition = saveScrollPosition;
exports.restoreScrollPosition = restoreScrollPosition;
exports.initScrollPosition = initScrollPosition;
exports.createStore = createStore;
exports.combineReducers = combineReducers;
exports.bindActionCreators = bindActionCreators;
exports.applyMiddleware = applyMiddleware;
exports.compose = compose;
