(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.reduxBundler = {})));
}(this, (function (exports) {

var appTime = {
    name: 'appTime',
    reducer: Date.now,
    selectAppTime: function (state) { return state.appTime; }
}


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC10aW1lLmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0lBQ2IsTUFBTSxTQURPLENBQUE7SUFFYixTQUFTLElBQUEsQ0FBSyxHQUZELENBQUE7SUFHYixlQUFlLEtBQUEsSUFBUyxLQUFBLENBQU07O0FBSGhDIiwiZmlsZSI6ImFwcC10aW1lLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2FwcFRpbWUnLFxuICByZWR1Y2VyOiBEYXRlLm5vdyxcbiAgc2VsZWN0QXBwVGltZTogc3RhdGUgPT4gc3RhdGUuYXBwVGltZVxufVxuIl19

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzeW5jLWNvdW50LmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFBLENBQU0sVUFBVTtJQUNkLFNBQVMsQ0FESyxDQUFBO0lBRWQsVUFBVSxDQUFDLENBRkcsQ0FBQTtJQUdkLFFBQVEsQ0FBQzs7QUFHWCxLQUFBLENBQU0sS0FBSztBQUVYLGVBQWU7SUFDYixNQUFNLFlBRE8sQ0FBQTtJQUViLFVBQVUsS0FBQSxHQUFRLENBQUcsRUFBQSxDQUFFLE9BQWQsR0FBeUI7UUFDaEMsS0FBQSxDQUFNLFNBQVMsRUFBQSxDQUFHLElBQUgsQ0FBUTtRQUN2QixJQUFJLENBQUM7WUFBUSxPQUFPO1FBQ3BCLE9BQU8sS0FBQSxDQUFBLENBQUEsQ0FBUSxPQUFBLENBQVEsTUFBQSxDQUFPO0lBQ2xDLENBTmUsQ0FBQTtJQU9iLG1CQUFtQixLQUFBLElBQVMsS0FBQSxDQUFNLFVBQU4sQ0FBQSxDQUFBLENBQW1COztBQWZqRCIsImZpbGUiOiJhc3luYy1jb3VudC5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaGFuZ2VzID0ge1xuICBTVEFSVEVEOiAxLFxuICBGSU5JU0hFRDogLTEsXG4gIEZBSUxFRDogLTFcbn1cblxuY29uc3QgcmUgPSAvXyhTVEFSVEVEfEZJTklTSEVEfEZBSUxFRCkkL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhc3luY0NvdW50JyxcbiAgcmVkdWNlcjogKHN0YXRlID0gMCwgeyB0eXBlIH0pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSByZS5leGVjKHR5cGUpXG4gICAgaWYgKCFyZXN1bHQpIHJldHVybiBzdGF0ZVxuICAgIHJldHVybiBzdGF0ZSArIGNoYW5nZXNbcmVzdWx0WzFdXVxuICB9LFxuICBzZWxlY3RBc3luY0FjdGl2ZTogc3RhdGUgPT4gc3RhdGUuYXN5bmNDb3VudCA+IDBcbn1cbiJdfQ==

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbWVkLWFjdGlvbi5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxLQUFBLElBQVMsSUFBQSxJQUFRLE1BQUEsSUFBVTtJQUN4QyxLQUFBLENBQU0sQ0FBRSxlQUFlLFFBQVM7SUFDaEMsSUFBSSxlQUFlO1FBQ2pCLEtBQUEsQ0FBTSxRQUFRLEtBQUEsQ0FBTSxJQUFOLENBQVcscUJBQVgsQ0FBaUM7UUFDL0MsSUFBSSxDQUFDLE9BQU87WUFDVixNQUFNLEtBQUEsQ0FBTSx3QkFBd0IsY0FBeEI7UUFDbEI7UUFDSSxPQUFPLElBQUEsQ0FBSyxJQUFBLEdBQU8sS0FBQSxDQUFNLEdBQUcsUUFBUSxLQUFBO0lBQ3hDO0lBQ0UsT0FBTyxJQUFBLENBQUs7QUFDZDtBQVZBIiwiZmlsZSI6Im5hbWVkLWFjdGlvbi5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gIGNvbnN0IHsgYWN0aW9uQ3JlYXRvciwgYXJncyB9ID0gYWN0aW9uXG4gIGlmIChhY3Rpb25DcmVhdG9yKSB7XG4gICAgY29uc3QgZm91bmQgPSBzdG9yZS5tZXRhLnVuYm91bmRBY3Rpb25DcmVhdG9yc1thY3Rpb25DcmVhdG9yXVxuICAgIGlmICghZm91bmQpIHtcbiAgICAgIHRocm93IEVycm9yKGBOb1N1Y2hBY3Rpb25DcmVhdG9yOiAke2FjdGlvbkNyZWF0b3J9YClcbiAgICB9XG4gICAgcmV0dXJuIG5leHQoYXJncyA/IGZvdW5kKC4uLmFyZ3MpIDogZm91bmQoKSlcbiAgfVxuICByZXR1cm4gbmV4dChhY3Rpb24pXG59XG4iXX0=

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS10aHVuay5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxnQkFBQSxJQUFvQixLQUFBLElBQVM7SUFDMUMsS0FBQSxDQUFNLFlBQVksZ0JBQUEsQ0FBaUIsTUFBakIsRUFDZixNQUFRLEVBQUEsSUFBVCxHQUFnQixNQUFBLENBQU8sTUFBUCxDQUFjLFFBQVEsRUFBQSxDQUFHLFNBQ3pDO0lBRUYsT0FBTyxJQUFBLElBQVEsTUFBQSxJQUFVO1FBQ3ZCLElBQUksTUFBQSxDQUFPLE1BQVAsQ0FBQSxHQUFBLENBQWtCLFlBQVk7WUFDaEMsS0FBQSxDQUFNLENBQUUsVUFBVSxZQUFhO1lBQy9CLE9BQU8sTUFBQSxDQUFPLE1BQUEsQ0FBTyxNQUFQLENBQWMsSUFBSTtnQkFBRSxRQUFGLENBQUE7Z0JBQVksUUFBWixDQUFBO2dCQUFzQjtlQUFTO1FBQ3JFO1FBQ0ksT0FBTyxJQUFBLENBQUs7SUFDaEI7QUFDQTtBQVpBIiwiZmlsZSI6ImN1c3RvbS10aHVuay5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBleHRyYUFyZ0NyZWF0b3JzID0+IHN0b3JlID0+IHtcbiAgY29uc3QgZXh0cmFBcmdzID0gZXh0cmFBcmdDcmVhdG9ycy5yZWR1Y2UoXG4gICAgKHJlc3VsdCwgZm4pID0+IE9iamVjdC5hc3NpZ24ocmVzdWx0LCBmbihzdG9yZSkpLFxuICAgIHt9XG4gIClcbiAgcmV0dXJuIG5leHQgPT4gYWN0aW9uID0+IHtcbiAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgeyBnZXRTdGF0ZSwgZGlzcGF0Y2ggfSA9IHN0b3JlXG4gICAgICByZXR1cm4gYWN0aW9uKE9iamVjdC5hc3NpZ24oe30sIHsgZ2V0U3RhdGUsIGRpc3BhdGNoLCBzdG9yZSB9LCBleHRyYUFyZ3MpKVxuICAgIH1cbiAgICByZXR1cm4gbmV4dChhY3Rpb24pXG4gIH1cbn1cbiJdfQ==

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

var Symbol = root.Symbol;

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1hcHBseS1taWRkbGV3YXJlLmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxRQUFTLGNBQWU7QUFFeEIsZ0JBQWdCLEdBQUcsYUFBSixHQUFvQixXQUFBLEtBQ2pDLE9BQ0EsRUFBQSxjQUNBLEVBQUEsVUFIZ0QsR0FJN0M7SUFDSCxLQUFBLENBQU0sUUFBUSxXQUFBLENBQVksU0FBUyxnQkFBZ0I7SUFDbkQsS0FBQSxDQUFNLFFBQVEsV0FBQSxDQUFZLEdBQVosQ0FBZ0IsVUFBQSxJQUFjLFVBQUEsQ0FBVztJQUN2RCxLQUFBLENBQU0sUUFBTixDQUFBLENBQUEsQ0FBaUIsT0FBQSxDQUFRLEdBQUcsTUFBWCxDQUFrQixLQUFBLENBQU07SUFDekMsT0FBTztBQUNUO0FBYkEiLCJmaWxlIjoiY3VzdG9tLWFwcGx5LW1pZGRsZXdhcmUuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kaWZpZWQgdG8gZXhwb3NlIGFsbCBvZiBgc3RvcmVgIHRvIG1pZGRsZXdhcmUgaW5zdGVhZCBvZiBqdXN0XG4vLyBgZ2V0U3RhdGVgIGFuZCBgZGlzcGF0Y2hgXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVkdXgnXG5cbmV4cG9ydCBkZWZhdWx0ICguLi5taWRkbGV3YXJlcykgPT4gY3JlYXRlU3RvcmUgPT4gKFxuICByZWR1Y2VyLFxuICBwcmVsb2FkZWRTdGF0ZSxcbiAgZW5oYW5jZXJcbikgPT4ge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcilcbiAgY29uc3QgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAobWlkZGxld2FyZSA9PiBtaWRkbGV3YXJlKHN0b3JlKSlcbiAgc3RvcmUuZGlzcGF0Y2ggPSBjb21wb3NlKC4uLmNoYWluKShzdG9yZS5kaXNwYXRjaClcbiAgcmV0dXJuIHN0b3JlXG59XG4iXX0=

function r(r,n){return r===n}function n(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,t=null,o=null;return function(){return function(r,n,e){if(null===n||null===e||n.length!==e.length)return!1;for(var t=n.length,o=0;o<t;o++)if(!r(n[o],e[o]))return!1;return!0}(e,t,arguments)||(o=n.apply(null,arguments)), t=arguments, o}}var e=function(r){for(var e=arguments.length,t=Array(e>1?e-1:0),o=1;o<e;o++)t[o-1]=arguments[o];return function(){for(var e=arguments.length,o=Array(e),u=0;u<e;u++)o[u]=arguments[u];var i=0,l=o.pop(),a=function(r){var n=Array.isArray(r[0])?r[0]:r;if(!n.every(function(r){return"function"==typeof r})){var e=n.map(function(r){return typeof r}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+e+"]")}return n}(o),f=r.apply(void 0,[function(){return i++, l.apply(null,arguments)}].concat(t)),c=n(function(){for(var r=[],n=a.length,e=0;e<n;e++)r.push(a[e].apply(null,arguments));return f.apply(null,r)});return c.resultFunc=l, c.recomputations=function(){return i}, c.resetRecomputations=function(){return i=0}, c}}(n); var t=function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];var t=r.slice(-1)[0],o=function(r,n){var o=n.map(function(n){return function(r,n){if("string"!=typeof n)return n;var e=r[n];if(!e)throw Error("No selector "+n+" found on the obj.");return e}(r,n)});return o.push(t), e.apply(void 0,o)};return o.deps=r.slice(0,-1), o.resultFunc=t, o}; var o=function(r){var n=function(n){return n.call&&!n.deps||!r[n].deps},e=!1,t=function(t){var o=r[t];n(t)?e=!0:o.deps=o.deps.map(function(n,o){if(n.call){for(var u in r)if(r[u]===n)return u;if(!n.deps)return e=!0, n}if(r[n])return n;throw Error("The input selector at index "+o+" for '"+t+"' is missing from the object passed to resolveSelectors()")});};for(var o in r)t(o);if(!e)throw Error("You must pass at least one real selector. If they're all string references there's no");for(var u,i=function(){var e=!1;for(var t in r){var o=r[t];n(t)||(e=!0, o.deps.every(n)&&(r[t]=o(r,o.deps)));}return e};i();){if(u||(u=Date.now()), Date.now()-u>500)throw Error("Could not resolve selector dependencies.")}return r};
//# sourceMappingURL=index.m.js.map

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sUUFBQSxDQUFTLElBQVQsQ0FBYyxlQUFkLENBQThCO0lBQzVDO0FBQ0E7QUFFQSxPQUFPLEtBQUEsQ0FBTSx3QkFBcUIsR0FBTTtJQUN0QyxJQUFJLENBQUMsWUFBWTtRQUNmO0lBQ0o7SUFFRSxJQUFJLE9BQUEsQ0FBUSxtQkFBbUI7UUFDN0IsT0FBQSxDQUFRLGlCQUFSLENBQUEsQ0FBQSxDQUE0QjtJQUNoQztJQUNFLGlCQUFBLENBQWtCLFlBQVk7SUFDOUIsaUJBQUEsQ0FBa0IsVUFBVSxRQUFBLENBQVMsb0JBQW9CLE1BQU07UUFDN0QsU0FBUzs7SUFFWCxxQkFBQTtBQUNGO0FBcElBIiwiZmlsZSI6InV0aWxzLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImxldCBkZWJ1ZyA9IGZhbHNlXG50cnkge1xuICBkZWJ1ZyA9ICEhd2luZG93LmxvY2FsU3RvcmFnZS5kZWJ1Z1xufSBjYXRjaCAoZSkge31cbmV4cG9ydCBjb25zdCBIQVNfREVCVUdfRkxBRyA9IGRlYnVnIHx8IGZhbHNlXG5leHBvcnQgY29uc3QgSEFTX1dJTkRPVyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgSVNfQlJPV1NFUiA9IEhBU19XSU5ET1cgfHwgdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgSVNfUFJPRCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbmNvbnN0IGZhbGxiYWNrID0gZnVuYyA9PiB7XG4gIHNldFRpbWVvdXQoZnVuYywgMClcbn1cbmV4cG9ydCBjb25zdCByYWYgPVxuICBJU19CUk9XU0VSICYmIHNlbGYucmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgPyBzZWxmLnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIDogZmFsbGJhY2tcbmV4cG9ydCBjb25zdCByaWMgPVxuICBJU19CUk9XU0VSICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayA/IHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayA6IGZhbGxiYWNrXG5cbi8vIGNhbiBkdW1wIHRoaXMgb25jZSBJRSAxMSBzdXBwb3J0IGlzIG5vIGxvbmdlciBuZWNlc3NhcnlcbmV4cG9ydCBjb25zdCBpc1Bhc3NpdmVTdXBwb3J0ZWQgPSAoKSA9PiB7XG4gIGxldCBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcbiAgdHJ5IHtcbiAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGFzc2l2ZVN1cHBvcnRlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucylcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZVxuICB9XG4gIHJldHVybiBwYXNzaXZlU3VwcG9ydGVkXG59XG5cbmV4cG9ydCBjb25zdCBQQVNTSVZFX0VWRU5UU19TVVBQT1JURUQgPSBpc1Bhc3NpdmVTdXBwb3J0ZWQoKVxuXG5leHBvcnQgY29uc3Qgc3RhcnRzV2l0aCA9IChzdHJpbmcsIHNlYXJjaFN0cmluZykgPT5cbiAgc3RyaW5nLnN1YnN0cigwLCBzZWFyY2hTdHJpbmcubGVuZ3RoKSA9PT0gc2VhcmNoU3RyaW5nXG5cbmV4cG9ydCBjb25zdCBmbGF0dGVuRXh0cmFjdGVkVG9PYmplY3QgPSBleHRyYWN0ZWQgPT4ge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICBmb3IgKGNvbnN0IGFwcE5hbWUgaW4gZXh0cmFjdGVkKSB7XG4gICAgT2JqZWN0LmFzc2lnbihyZXN1bHQsIGV4dHJhY3RlZFthcHBOYW1lXSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBjb25zdCBmbGF0dGVuRXh0cmFjdGVkVG9BcnJheSA9IGV4dHJhY3RlZCA9PiB7XG4gIGxldCBhY2N1bSA9IFtdXG4gIGZvciAoY29uc3QgYXBwTmFtZSBpbiBleHRyYWN0ZWQpIHtcbiAgICBhY2N1bS5wdXNoKC4uLmV4dHJhY3RlZFthcHBOYW1lXSlcbiAgfVxuICByZXR1cm4gYWNjdW1cbn1cblxuZXhwb3J0IGNvbnN0IGFkZEdsb2JhbExpc3RlbmVyID0gKFxuICBldmVudE5hbWUsXG4gIGhhbmRsZXIsXG4gIG9wdHMgPSB7IHBhc3NpdmU6IGZhbHNlIH1cbikgPT4ge1xuICBpZiAoSVNfQlJPV1NFUikge1xuICAgIGlmIChvcHRzLnBhc3NpdmUpIHtcbiAgICAgIGlmIChQQVNTSVZFX0VWRU5UU19TVVBQT1JURUQpIHtcbiAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBkZWJvdW5jZShoYW5kbGVyLCAyMDApLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcilcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlbGVjdG9yTmFtZVRvVmFsdWVOYW1lID0gbmFtZSA9PiB7XG4gIGNvbnN0IHN0YXJ0ID0gbmFtZVswXSA9PT0gJ3MnID8gNiA6IDVcbiAgcmV0dXJuIG5hbWVbc3RhcnRdLnRvTG93ZXJDYXNlKCkgKyBuYW1lLnNsaWNlKHN0YXJ0ICsgMSlcbn1cblxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZuLCB3YWl0KSA9PiB7XG4gIGxldCB0aW1lb3V0XG4gIGNvbnN0IGRlYm91bmNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY3R4ID0gdGhpc1xuICAgIGxldCBhcmdzID0gYXJndW1lbnRzXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm4uYXBwbHkoY3R4LCBhcmdzKVxuICAgIH0sIHdhaXQpXG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9ICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgfVxuICByZXR1cm4gZGVib3VuY2VkXG59XG5cbmV4cG9ydCBjb25zdCBzYXZlU2Nyb2xsUG9zaXRpb24gPSAoKSA9PiB7XG4gIGhpc3RvcnkucmVwbGFjZVN0YXRlKFxuICAgIHtcbiAgICAgIGhlaWdodDogZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsXG4gICAgICB3aWR0aDogZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCxcbiAgICAgIHk6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgeDogZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XG4gICAgfSxcbiAgICAnJ1xuICApXG59XG5cbmV4cG9ydCBjb25zdCByZXN0b3JlU2Nyb2xsUG9zaXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUgfSA9IGhpc3RvcnlcbiAgaWYgKHN0YXRlKSB7XG4gICAgLy8gd2UnbGwgZm9yY2UgaXQgdG8gb3VyIGtub3duIGhlaWdodCBzaW5jZSB0aGUgRE9NIHJlbmRlcmluZyBtYXlcbiAgICAvLyBiZSBhc3luYyBhbmQgdGhlIGhlaWdodCBtYXkgbm90IGJlIHJlc3RvcmVkIHlldC5cbiAgICBjb25zdCBuZXdTdHlsZSA9IGBoZWlnaHQ6ICR7c3RhdGUuaGVpZ2h0fXB4OyB3aWR0aDogJHtzdGF0ZS53aWR0aH1weDtgXG4gICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgbmV3U3R5bGUpXG4gICAgd2luZG93LnNjcm9sbFRvKHN0YXRlLngsIHN0YXRlLnkpXG4gICAgcmljKCgpID0+IGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBpbml0U2Nyb2xsUG9zaXRpb24gPSAoKSA9PiB7XG4gIGlmICghSEFTX1dJTkRPVykge1xuICAgIHJldHVyblxuICB9XG4gIC8vIHR1cm4gb2ZmIGJyb3dzZXIgc2Nyb2xsIHJlc3RvcmF0aW9uIGlmIGF2YWlsYWJsZVxuICBpZiAoaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbikge1xuICAgIGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICB9XG4gIGFkZEdsb2JhbExpc3RlbmVyKCdwb3BzdGF0ZScsIHJlc3RvcmVTY3JvbGxQb3NpdGlvbilcbiAgYWRkR2xvYmFsTGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlKHNhdmVTY3JvbGxQb3NpdGlvbiwgMzAwKSwge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSlcbiAgcmVzdG9yZVNjcm9sbFBvc2l0aW9uKClcbn1cbiJdfQ==

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bWUtYnVuZGxlLmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFTLGlCQUFrQjtBQUUzQixPQUFPLEtBQUEsQ0FBTSxrQkFBa0IsTUFBQSxJQUFVO0lBQ3ZDLEtBQUEsQ0FBTSxDQUFFLFFBQVM7SUFDakIsSUFBSSxDQUFDO1FBQU0sTUFBTSxTQUFBLENBQVU7SUFDM0IsS0FBQSxDQUFNLFNBQVM7UUFDYixJQURhLENBQUE7UUFFYixTQUNFLE1BQUEsQ0FBTyxPQUFQLENBQUEsRUFBQSxDQUFtQixNQUFBLENBQU8sVUFBUCxDQUFBLEVBQUEsQ0FBcUIsTUFBQSxDQUFPLFVBQVAsRUFBeEMsQ0FBQSxFQUFBLENBQWdFLElBSHJELENBQUE7UUFJYixNQUFNLE1BQUEsQ0FBTyxJQUFQLENBQUEsRUFBQSxDQUFlLElBSlIsQ0FBQTtRQUtiLGtCQUFrQixNQUFBLENBQU8sWUFBUCxDQUFBLEVBQUEsQ0FBdUIsSUFMNUIsQ0FBQTtRQU1iLG9CQUFvQixNQUFBLENBQU8sYUFOZCxDQUFBO1FBT2IsZ0JBQWdCLElBUEgsQ0FBQTtRQVFiLFdBQVcsSUFSRSxDQUFBO1FBU2IsY0FBYyxJQVRELENBQUE7UUFVYixXQUFXOztJQUViLE1BQUEsQ0FBTyxJQUFQLENBQVksT0FBWixDQUFvQixPQUFwQixDQUE0QixHQUFBLElBQU87UUFDakMsSUFBSSxVQUFBLENBQVcsS0FBSyxPQUFPO1lBQ3pCO2FBQUUsTUFBQSxDQUFPLGNBQVAsQ0FBQSxFQUFBLEVBQTBCLE1BQUEsQ0FBTyxjQUFQLENBQUEsQ0FBQSxDQUF3QixJQUFuRCxDQUF3RCxJQUF4RCxDQUFBLENBQUEsQ0FDQyxNQUFBLENBQU87WUFDVDtRQUNOO1FBQ0ksS0FBQSxDQUFNLGFBQWEsVUFBQSxDQUFXLEtBQUs7UUFDbkMsS0FBQSxDQUFNLFlBQVksVUFBQSxDQUFXLEtBQUs7UUFDbEMsSUFBSSxVQUFBLENBQUEsRUFBQSxDQUFjLFdBQVc7WUFDM0I7YUFBRSxNQUFBLENBQU8sU0FBUCxDQUFBLEVBQUEsRUFBcUIsTUFBQSxDQUFPLFNBQVAsQ0FBQSxDQUFBLENBQW1CLElBQXpDLENBQThDLElBQTlDLENBQUEsQ0FBQSxDQUFxRCxNQUFBLENBQU87WUFDN0QsSUFBSSxXQUFXO2dCQUNiO2lCQUFFLE1BQUEsQ0FBTyxZQUFQLENBQUEsRUFBQSxFQUF3QixNQUFBLENBQU8sWUFBUCxDQUFBLENBQUEsQ0FBc0IsSUFBL0MsQ0FBb0QsSUFBcEQsQ0FBeUQ7WUFDbEU7UUFDQTtJQUNBO0lBQ0UsT0FBTztBQUNUO0FBRUEsT0FBTyxLQUFBLENBQU0sY0FBYyxVQUFBLElBQWM7SUFDdkMsS0FBQSxDQUFNLG9CQUFvQixVQUFBLENBQVcsR0FBWCxDQUFlO0lBQ3pDLEtBQUEsQ0FBTSxTQUFTO1FBQ2IsYUFBYSxFQURBLENBQUE7UUFFYixVQUFVLEVBRkcsQ0FBQTtRQUdiLFdBQVcsRUFIRSxDQUFBO1FBSWIsZ0JBQWdCLEVBSkgsQ0FBQTtRQUtiLFlBQVksRUFMQyxDQUFBO1FBTWIsa0JBQWtCLEVBTkwsQ0FBQTtRQU9iLGFBQWEsRUFQQSxDQUFBO1FBUWIsb0JBQW9CLEVBUlAsQ0FBQTtRQVNiLGtCQUFrQixFQVRMLENBQUE7UUFVYixjQUFjOztJQUVoQixpQkFBQSxDQUFrQixPQUFsQixDQUEwQixNQUFBLElBQVU7UUFDbEMsTUFBQSxDQUFPLFdBQVAsQ0FBbUIsSUFBbkIsQ0FBd0IsTUFBQSxDQUFPO1FBQy9CLE1BQUEsQ0FBTyxNQUFQLENBQWMsTUFBQSxDQUFPLFdBQVcsTUFBQSxDQUFPO1FBQ3ZDLE1BQUEsQ0FBTyxNQUFQLENBQWMsTUFBQSxDQUFPLGdCQUFnQixNQUFBLENBQU87UUFDNUMsSUFBSSxNQUFBLENBQU8sU0FBUztZQUNsQixNQUFBLENBQU8sTUFBUCxDQUFjLE1BQUEsQ0FBTyxVQUFVO2lCQUFHLE1BQUEsQ0FBTyxPQUFPLE1BQUEsQ0FBTzs7UUFDN0Q7UUFDSSxJQUFJLE1BQUEsQ0FBTztZQUFNLE1BQUEsQ0FBTyxXQUFQLENBQW1CLElBQW5CLENBQXdCLE1BQUEsQ0FBTztRQUNoRCxJQUFJLE1BQUEsQ0FBTyxvQkFBb0I7WUFDN0IsTUFBQSxDQUFPLGtCQUFQLENBQTBCLElBQTFCLENBQStCLE1BQUEsQ0FBTztRQUM1QztRQUNJLElBQUksTUFBQSxDQUFPLGtCQUFrQjtZQUMzQixNQUFBLENBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsQ0FBNkIsTUFBQSxDQUFPO1FBQzFDO1FBQ0ksSUFBSSxNQUFBLENBQU87WUFBYyxNQUFBLENBQU8sWUFBUCxDQUFvQixJQUFwQixDQUF5QixHQUFHLE1BQUEsQ0FBTztRQUM1RCxNQUFBLENBQU8sZ0JBQVAsQ0FBd0IsSUFBeEIsQ0FBNkI7UUFDN0IsTUFBQSxDQUFPLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBdUIsTUFBQSxDQUFPO0lBQ2xDO0lBQ0UsT0FBTztBQUNUO0FBcEVBIiwiZmlsZSI6ImNvbnN1bWUtYnVuZGxlLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0YXJ0c1dpdGggfSBmcm9tICcuLi91dGlscydcblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUJ1bmRsZSA9IGJ1bmRsZSA9PiB7XG4gIGNvbnN0IHsgbmFtZSB9ID0gYnVuZGxlXG4gIGlmICghbmFtZSkgdGhyb3cgVHlwZUVycm9yKCdidW5kbGVzIG11c3QgaGF2ZSBhIFwibmFtZVwiIHByb3BlcnR5JylcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIG5hbWUsXG4gICAgcmVkdWNlcjpcbiAgICAgIGJ1bmRsZS5yZWR1Y2VyIHx8IChidW5kbGUuZ2V0UmVkdWNlciAmJiBidW5kbGUuZ2V0UmVkdWNlcigpKSB8fCBudWxsLFxuICAgIGluaXQ6IGJ1bmRsZS5pbml0IHx8IG51bGwsXG4gICAgZXh0cmFBcmdDcmVhdG9yczogYnVuZGxlLmdldEV4dHJhQXJncyB8fCBudWxsLFxuICAgIG1pZGRsZXdhcmVDcmVhdG9yczogYnVuZGxlLmdldE1pZGRsZXdhcmUsXG4gICAgYWN0aW9uQ3JlYXRvcnM6IG51bGwsXG4gICAgc2VsZWN0b3JzOiBudWxsLFxuICAgIHJlYWN0b3JOYW1lczogbnVsbCxcbiAgICByYXdCdW5kbGU6IGJ1bmRsZVxuICB9XG4gIE9iamVjdC5rZXlzKGJ1bmRsZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmIChzdGFydHNXaXRoKGtleSwgJ2RvJykpIHtcbiAgICAgIDsocmVzdWx0LmFjdGlvbkNyZWF0b3JzIHx8IChyZXN1bHQuYWN0aW9uQ3JlYXRvcnMgPSB7fSkpW2tleV0gPVxuICAgICAgICBidW5kbGVba2V5XVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGlzU2VsZWN0b3IgPSBzdGFydHNXaXRoKGtleSwgJ3NlbGVjdCcpXG4gICAgY29uc3QgaXNSZWFjdG9yID0gc3RhcnRzV2l0aChrZXksICdyZWFjdCcpXG4gICAgaWYgKGlzU2VsZWN0b3IgfHwgaXNSZWFjdG9yKSB7XG4gICAgICA7KHJlc3VsdC5zZWxlY3RvcnMgfHwgKHJlc3VsdC5zZWxlY3RvcnMgPSB7fSkpW2tleV0gPSBidW5kbGVba2V5XVxuICAgICAgaWYgKGlzUmVhY3Rvcikge1xuICAgICAgICA7KHJlc3VsdC5yZWFjdG9yTmFtZXMgfHwgKHJlc3VsdC5yZWFjdG9yTmFtZXMgPSBbXSkpLnB1c2goa2V5KVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2h1bmsgPSByYXdCdW5kbGVzID0+IHtcbiAgY29uc3Qgbm9ybWFsaXplZEJ1bmRsZXMgPSByYXdCdW5kbGVzLm1hcChub3JtYWxpemVCdW5kbGUpXG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBidW5kbGVOYW1lczogW10sXG4gICAgcmVkdWNlcnM6IHt9LFxuICAgIHNlbGVjdG9yczoge30sXG4gICAgYWN0aW9uQ3JlYXRvcnM6IHt9LFxuICAgIHJhd0J1bmRsZXM6IFtdLFxuICAgIHByb2Nlc3NlZEJ1bmRsZXM6IFtdLFxuICAgIGluaXRNZXRob2RzOiBbXSxcbiAgICBtaWRkbGV3YXJlQ3JlYXRvcnM6IFtdLFxuICAgIGV4dHJhQXJnQ3JlYXRvcnM6IFtdLFxuICAgIHJlYWN0b3JOYW1lczogW11cbiAgfVxuICBub3JtYWxpemVkQnVuZGxlcy5mb3JFYWNoKGJ1bmRsZSA9PiB7XG4gICAgcmVzdWx0LmJ1bmRsZU5hbWVzLnB1c2goYnVuZGxlLm5hbWUpXG4gICAgT2JqZWN0LmFzc2lnbihyZXN1bHQuc2VsZWN0b3JzLCBidW5kbGUuc2VsZWN0b3JzKVxuICAgIE9iamVjdC5hc3NpZ24ocmVzdWx0LmFjdGlvbkNyZWF0b3JzLCBidW5kbGUuYWN0aW9uQ3JlYXRvcnMpXG4gICAgaWYgKGJ1bmRsZS5yZWR1Y2VyKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHJlc3VsdC5yZWR1Y2VycywgeyBbYnVuZGxlLm5hbWVdOiBidW5kbGUucmVkdWNlciB9KVxuICAgIH1cbiAgICBpZiAoYnVuZGxlLmluaXQpIHJlc3VsdC5pbml0TWV0aG9kcy5wdXNoKGJ1bmRsZS5pbml0KVxuICAgIGlmIChidW5kbGUubWlkZGxld2FyZUNyZWF0b3JzKSB7XG4gICAgICByZXN1bHQubWlkZGxld2FyZUNyZWF0b3JzLnB1c2goYnVuZGxlLm1pZGRsZXdhcmVDcmVhdG9ycylcbiAgICB9XG4gICAgaWYgKGJ1bmRsZS5leHRyYUFyZ0NyZWF0b3JzKSB7XG4gICAgICByZXN1bHQuZXh0cmFBcmdDcmVhdG9ycy5wdXNoKGJ1bmRsZS5leHRyYUFyZ0NyZWF0b3JzKVxuICAgIH1cbiAgICBpZiAoYnVuZGxlLnJlYWN0b3JOYW1lcykgcmVzdWx0LnJlYWN0b3JOYW1lcy5wdXNoKC4uLmJ1bmRsZS5yZWFjdG9yTmFtZXMpXG4gICAgcmVzdWx0LnByb2Nlc3NlZEJ1bmRsZXMucHVzaChidW5kbGUpXG4gICAgcmVzdWx0LnJhd0J1bmRsZXMucHVzaChidW5kbGUucmF3QnVuZGxlKVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG4iXX0=

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1iaW5kaW5nLW1ldGhvZHMuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVMsOEJBQStCO0FBRXhDLGVBQWUsS0FBQSxJQUFTO0lBQ3RCLEtBQUEsQ0FBTSxhQUFOLENBQUEsQ0FBQSxDQUFzQjtRQUNwQixlQUFlOztJQUVqQixLQUFBLENBQU0sZ0JBQWlCLEtBQUEsQ0FBTSxhQUFOLENBQW9CLEdBQXBCLENBQUEsQ0FBQSxDQUEwQixJQUFJLEdBQUo7SUFDakQsS0FBQSxDQUFNLG1CQUFvQixLQUFBLENBQU0sYUFBTixDQUFvQixnQkFBcEIsQ0FBQSxDQUFBLENBQXVDO0lBRWpFLEtBQUEsQ0FBTSxRQUFRLFlBQUEsSUFBZ0I7UUFDNUIsZ0JBQUEsQ0FBaUIsYUFBakIsQ0FBQSxDQUFBLEVBQWtDLGdCQUFBLENBQWlCLGFBQWpCLENBQUEsRUFBQSxDQUFrQyxFQUFuQyxDQUFBLENBQUEsQ0FBd0M7SUFDN0U7SUFDRSxLQUFBLENBQU0sVUFBVSxZQUFBLElBQWdCO1FBQzlCLEdBQUEsQ0FBSSxRQUFRLGdCQUFBLENBQWlCLGFBQWpCLENBQUEsQ0FBQSxDQUFpQztRQUM3QyxJQUFJLEtBQUEsQ0FBQSxHQUFBLENBQVUsR0FBRztZQUNmLE1BQUEsQ0FBTyxnQkFBQSxDQUFpQjtRQUM5QixPQUFXO1lBQ0wsZ0JBQUEsQ0FBaUIsYUFBakIsQ0FBQSxDQUFBLENBQWlDO1FBQ3ZDO0lBQ0E7SUFHRSxLQUFBLENBQU0sU0FBTixJQUFnQixHQUFNO1FBQ3BCLEtBQUEsQ0FBTSxZQUFZLGdCQUFBLENBQWlCLEdBQWpCLEdBQ2QsS0FBQSxDQUFNLFNBQU4sS0FDQSxLQUFBLENBQU0sTUFBTixDQUFhLE1BQUEsQ0FBTyxJQUFQLENBQVk7UUFDN0IsS0FBQSxDQUFNLENBQUUsaUJBQWtCLEtBQUEsQ0FBTTtRQUdoQyxLQUFBLENBQU0sVUFBVTtRQUNoQixLQUFLLEtBQUEsQ0FBTSxPQUFPLFdBQVc7WUFDM0IsS0FBQSxDQUFNLE1BQU0sU0FBQSxDQUFVO1lBQ3RCLElBQUksR0FBQSxDQUFBLEdBQUEsQ0FBUSxhQUFBLENBQWMsTUFBTTtnQkFDOUIsT0FBQSxDQUFRLElBQVIsQ0FBQSxDQUFBLENBQWU7WUFDdkI7UUFDQTtRQUVJLEtBQUEsQ0FBTSxhQUFOLENBQW9CLGFBQXBCLENBQUEsQ0FBQSxDQUFvQztRQUdwQyxhQUFBLENBQWMsT0FBZCxDQUFzQixZQUFBLElBQWdCO1lBQ3BDLEtBQUEsQ0FBTSxrQkFBa0I7WUFDeEIsR0FBQSxDQUFJLGFBQWE7WUFDakIsSUFBSSxZQUFBLENBQWEsS0FBYixDQUFBLEdBQUEsQ0FBdUIsT0FBTztnQkFDaEMsTUFBQSxDQUFPLE1BQVAsQ0FBYyxpQkFBaUI7Z0JBQy9CLFVBQUEsQ0FBQSxDQUFBLENBQWEsRUFBQyxDQUFDLE1BQUEsQ0FBTyxJQUFQLENBQVksZ0JBQVosQ0FBNkI7WUFDcEQsT0FBYTtnQkFDTCxZQUFBLENBQWEsS0FBYixDQUFtQixPQUFuQixDQUEyQixJQUFBLElBQVE7b0JBQ2pDLElBQUksT0FBQSxDQUFRLGNBQVIsQ0FBdUIsT0FBTzt3QkFDaEMsZUFBQSxDQUFnQixLQUFoQixDQUFBLENBQUEsQ0FBd0IsT0FBQSxDQUFRO3dCQUNoQyxVQUFBLENBQUEsQ0FBQSxDQUFhO29CQUN6QjtnQkFDQTtZQUNBO1lBQ00sSUFBSSxZQUFZO2dCQUNkLFlBQUEsQ0FBYSxFQUFiLENBQWdCO1lBQ3hCO1FBQ0E7SUFDQTtJQUtFLEtBQUEsQ0FBTSxxQkFBTixDQUFBLENBQUEsRUFBOEIsUUFBQSxJQUM1QixLQUFBLENBQU0sb0JBQU4sQ0FBMkIsT0FBTztJQUtwQyxLQUFBLENBQU0sb0JBQU4sQ0FBQSxDQUFBLEdBQThCLElBQU0sRUFBQSxVQUFQLEdBQW9CO1FBQy9DLEtBQUEsQ0FBTSxRQUFRLElBQUEsQ0FBQSxHQUFBLENBQVM7UUFJdkIsS0FBQSxDQUFNLGVBQWU7WUFDbkIsSUFBSSxRQURlLENBQUE7WUFFbkIsT0FBTyxLQUFBLEdBQVEsUUFBUSxJQUFBLENBQUssR0FBTCxDQUFTOztRQUVsQyxhQUFBLENBQWMsR0FBZCxDQUFrQjtRQUNsQixLQUFBLEdBQVEsS0FBQSxDQUFNLFNBQVMsSUFBQSxDQUFLLE9BQUwsQ0FBYTtRQUlwQyxNQUFBLENBQU8sTUFBUCxDQUNFLEtBQUEsQ0FBTSxhQUFOLENBQW9CLGVBQ3BCLEtBQUEsR0FBUSxLQUFBLENBQU0sU0FBTixLQUFvQixLQUFBLENBQU0sTUFBTixDQUFhO1FBSTNDLFVBQU8sR0FBTTtZQUNYLGFBQUEsQ0FBYyxNQUFkLENBQXFCO1lBQ3JCLEtBQUEsR0FBUSxPQUFBLENBQVEsU0FBUyxJQUFBLENBQUssT0FBTCxDQUFhO1FBQzVDO0lBQ0E7QUFDQTtBQTlGQSIsImZpbGUiOiJhZGQtYmluZGluZy1tZXRob2RzLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlbGVjdG9yTmFtZVRvVmFsdWVOYW1lIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlID0+IHtcbiAgc3RvcmUuc3Vic2NyaXB0aW9ucyA9IHtcbiAgICB3YXRjaGVkVmFsdWVzOiB7fVxuICB9XG4gIGNvbnN0IHN1YnNjcmlwdGlvbnMgPSAoc3RvcmUuc3Vic2NyaXB0aW9ucy5zZXQgPSBuZXcgU2V0KCkpXG4gIGNvbnN0IHdhdGNoZWRTZWxlY3RvcnMgPSAoc3RvcmUuc3Vic2NyaXB0aW9ucy53YXRjaGVkU2VsZWN0b3JzID0ge30pXG5cbiAgY29uc3Qgd2F0Y2ggPSBzZWxlY3Rvck5hbWUgPT4ge1xuICAgIHdhdGNoZWRTZWxlY3RvcnNbc2VsZWN0b3JOYW1lXSA9ICh3YXRjaGVkU2VsZWN0b3JzW3NlbGVjdG9yTmFtZV0gfHwgMCkgKyAxXG4gIH1cbiAgY29uc3QgdW53YXRjaCA9IHNlbGVjdG9yTmFtZSA9PiB7XG4gICAgbGV0IGNvdW50ID0gd2F0Y2hlZFNlbGVjdG9yc1tzZWxlY3Rvck5hbWVdIC0gMVxuICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgZGVsZXRlIHdhdGNoZWRTZWxlY3RvcnNbc2VsZWN0b3JOYW1lXVxuICAgIH0gZWxzZSB7XG4gICAgICB3YXRjaGVkU2VsZWN0b3JzW3NlbGVjdG9yTmFtZV0gPSBjb3VudFxuICAgIH1cbiAgfVxuXG4gIC8vIGFkZCBzaW5nbGUgc3RvcmUgc3Vic2NyaXB0aW9uIGZvciB0cmFja2luZyB3YXRjaGVkIGNoYW5nZXNcbiAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZXMgPSB3YXRjaGVkU2VsZWN0b3JzLmFsbFxuICAgICAgPyBzdG9yZS5zZWxlY3RBbGwoKVxuICAgICAgOiBzdG9yZS5zZWxlY3QoT2JqZWN0LmtleXMod2F0Y2hlZFNlbGVjdG9ycykpXG4gICAgY29uc3QgeyB3YXRjaGVkVmFsdWVzIH0gPSBzdG9yZS5zdWJzY3JpcHRpb25zXG5cbiAgICAvLyB0aGUgb25seSBkaWZmaW5nIGluIHRoZSBhcHAgaGFwcGVucyBoZXJlXG4gICAgY29uc3QgY2hhbmdlZCA9IHt9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbmV3VmFsdWVzKSB7XG4gICAgICBjb25zdCB2YWwgPSBuZXdWYWx1ZXNba2V5XVxuICAgICAgaWYgKHZhbCAhPT0gd2F0Y2hlZFZhbHVlc1trZXldKSB7XG4gICAgICAgIGNoYW5nZWRba2V5XSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIHN0b3JlLnN1YnNjcmlwdGlvbnMud2F0Y2hlZFZhbHVlcyA9IG5ld1ZhbHVlc1xuXG4gICAgLy8gbG9vayB0aHJvdWdoIHN1YnNjcmlwdGlvbnMgdG8gdHJpZ2dlclxuICAgIHN1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWJzY3JpcHRpb24gPT4ge1xuICAgICAgY29uc3QgcmVsZXZhbnRDaGFuZ2VzID0ge31cbiAgICAgIGxldCBoYXNDaGFuZ2VkID0gZmFsc2VcbiAgICAgIGlmIChzdWJzY3JpcHRpb24ubmFtZXMgPT09ICdhbGwnKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmVsZXZhbnRDaGFuZ2VzLCBjaGFuZ2VkKVxuICAgICAgICBoYXNDaGFuZ2VkID0gISFPYmplY3Qua2V5cyhyZWxldmFudENoYW5nZXMpLmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3Vic2NyaXB0aW9uLm5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgaWYgKGNoYW5nZWQuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIHJlbGV2YW50Q2hhbmdlc1tuYW1lXSA9IGNoYW5nZWRbbmFtZV1cbiAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYgKGhhc0NoYW5nZWQpIHtcbiAgICAgICAgc3Vic2NyaXB0aW9uLmZuKHJlbGV2YW50Q2hhbmdlcylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIC8vIHRoaXMgZXhpc3RzIHNlcGFyYXRlbHkgaW4gb3JkZXIgdG8gc3VwcG9ydFxuICAvLyBzdWJzY3JpYmluZyB0byBhbGwgY2hhbmdlcyBldmVuIGFmdGVyIGxhenktbG9hZGluZ1xuICAvLyBhZGRpdGlvbmFsIGJ1bmRsZXNcbiAgc3RvcmUuc3Vic2NyaWJlVG9BbGxDaGFuZ2VzID0gY2FsbGJhY2sgPT5cbiAgICBzdG9yZS5zdWJzY3JpYmVUb1NlbGVjdG9ycygnYWxsJywgY2FsbGJhY2spXG5cbiAgLy8gZ2l2ZW4gYW4gYXJyYXkgb2Ygc2VsZWN0b3IgbmFtZXMsIGl0IHdpbGwgY2FsbCB0aGVcbiAgLy8gY2FsbGJhY2sgYW55IHRpbWUgdGhvc2UgaGF2ZSBjaGFuZ2VkIHdpdGggYW4gb2JqZWN0XG4gIC8vIGNvbnRhaW5pbmcgb25seSBjaGFuZ2VkIHZhbHVlc1xuICBzdG9yZS5zdWJzY3JpYmVUb1NlbGVjdG9ycyA9IChrZXlzLCBjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IGlzQWxsID0ga2V5cyA9PT0gJ2FsbCdcbiAgICAvLyByZS11c2UgbG9vcCBmb3IgZG91YmxlIGR1dHlcbiAgICAvLyBleHRyYWN0IG5hbWVzLCBidXQgYWxzbyBlbnN1cmVcbiAgICAvLyBzZWxlY3RvciBhY3R1YWxseSBleGlzdHMgb24gc3RvcmVcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB7XG4gICAgICBmbjogY2FsbGJhY2ssXG4gICAgICBuYW1lczogaXNBbGwgPyAnYWxsJyA6IGtleXMubWFwKHNlbGVjdG9yTmFtZVRvVmFsdWVOYW1lKVxuICAgIH1cbiAgICBzdWJzY3JpcHRpb25zLmFkZChzdWJzY3JpcHRpb24pXG4gICAgaXNBbGwgPyB3YXRjaCgnYWxsJykgOiBrZXlzLmZvckVhY2god2F0Y2gpXG5cbiAgICAvLyBtYWtlIHN1cmUgc3RhcnRpbmcgdmFsdWVzIGFyZSBpbiB3YXRjaGVkIHNvIHdlIGNhblxuICAgIC8vIHRyYWNrIGNoYW5nZXNcbiAgICBPYmplY3QuYXNzaWduKFxuICAgICAgc3RvcmUuc3Vic2NyaXB0aW9ucy53YXRjaGVkVmFsdWVzLFxuICAgICAgaXNBbGwgPyBzdG9yZS5zZWxlY3RBbGwoKSA6IHN0b3JlLnNlbGVjdChrZXlzKVxuICAgIClcblxuICAgIC8vIHJldHVybiBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN1YnNjcmlwdGlvbnMuZGVsZXRlKHN1YnNjcmlwdGlvbilcbiAgICAgIGlzQWxsID8gdW53YXRjaCgnYWxsJykgOiBrZXlzLmZvckVhY2godW53YXRjaClcbiAgICB9XG4gIH1cbn1cbiJdfQ==

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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQUEsQ0FBYyxNQUFkLEVBQXNCLEdBQUssRUFBQSxNQUFOLEdBQWU7WUFDbEMsSUFBSSxDQUFDLEtBQUEsQ0FBTTtnQkFBTyxNQUFNLEtBQUEsQ0FBTSxvQkFBb0IsS0FBcEI7WUFDOUIsR0FBQSxDQUFJLHVCQUFBLENBQXdCLE1BQTVCLENBQUEsQ0FBQSxDQUFxQyxLQUFBLENBQU0sS0FBTjtZQUNyQyxPQUFPO1FBQ2YsR0FBUztRQUdMLEtBQUEsQ0FBTSxTQUFOLENBQUEsQ0FBQSxLQUFrQixHQUNoQixLQUFBLENBQU0sTUFBTixDQUFhLE1BQUEsQ0FBTyxJQUFQLENBQVksS0FBQSxDQUFNLElBQU4sQ0FBVztRQUd0QyxLQUFBLENBQU0sTUFBTixDQUFBLENBQUEsR0FBZ0IsSUFBTSxFQUFBLE1BQVAsR0FBZ0IsS0FBQSxDQUFNLEtBQU4sQ0FBWSxHQUFHO1FBRzlDLGlCQUFBLENBQWtCO1FBR2xCLGFBQUEsQ0FBYyxPQUFPO1FBR3JCLEtBQUEsQ0FBTSxnQkFBTixDQUFBLENBQUEsR0FBMEIsR0FBRyxvQkFBSixHQUEyQjtZQUNsRCxhQUFBLENBQWMsT0FBTyxXQUFBLENBQVk7WUFDakMsS0FBQSxDQUFNLGNBQWMsS0FBQSxDQUFNLElBQU4sQ0FBVyxNQUFYLENBQWtCLE1BQWxCLEVBQ2pCLEtBQU8sRUFBQSxPQUFSLEdBQWtCLE1BQUEsQ0FBTyxNQUFQLENBQWMsT0FBTyxLQUFBLENBQU0sV0FDN0M7WUFFRixLQUFBLENBQU0sY0FBTixDQUFxQixtQkFBQSxDQUFvQixlQUFBLENBQWdCO1FBQy9EO1FBRUksT0FBTztJQUNYO0FBQ0E7QUFFQSxlQUFlO0FBaEpmIiwiZmlsZSI6ImluZGV4LmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuYW1lZEFjdGlvbk1pZGRsZXdhcmUgZnJvbSAnLi4vbWlkZGxld2FyZS9uYW1lZC1hY3Rpb24nXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJy4uL21pZGRsZXdhcmUvY3VzdG9tLXRodW5rJ1xuaW1wb3J0IGN1c3RvbUFwcGx5TWlkZGxld2FyZSBmcm9tICcuLi9taWRkbGV3YXJlL2N1c3RvbS1hcHBseS1taWRkbGV3YXJlJ1xuaW1wb3J0IHtcbiAgYmluZEFjdGlvbkNyZWF0b3JzLFxuICBjb21iaW5lUmVkdWNlcnMsXG4gIGNvbXBvc2UsXG4gIGNyZWF0ZVN0b3JlXG59IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgcmVzb2x2ZVNlbGVjdG9ycyB9IGZyb20gJ2NyZWF0ZS1zZWxlY3RvcidcbmltcG9ydCB7IGNyZWF0ZUNodW5rIH0gZnJvbSAnLi9jb25zdW1lLWJ1bmRsZSdcbmltcG9ydCBhZGRCaW5kaW5nTWV0aG9kcyBmcm9tICcuL2FkZC1iaW5kaW5nLW1ldGhvZHMnXG5pbXBvcnQge1xuICBIQVNfV0lORE9XLFxuICBIQVNfREVCVUdfRkxBRyxcbiAgSVNfUFJPRCxcbiAgc2VsZWN0b3JOYW1lVG9WYWx1ZU5hbWVcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IGJpbmRTZWxlY3RvcnNUb1N0b3JlID0gKHN0b3JlLCBzZWxlY3RvcnMpID0+IHtcbiAgZm9yIChjb25zdCBrZXkgaW4gc2VsZWN0b3JzKSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3RvcnNba2V5XVxuICAgIGlmICghc3RvcmVba2V5XSkge1xuICAgICAgc3RvcmVba2V5XSA9ICgpID0+IHNlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCkpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRlY29yYXRlU3RvcmUgPSAoc3RvcmUsIHByb2Nlc3NlZCkgPT4ge1xuICBpZiAoIXN0b3JlLm1ldGEpIHtcbiAgICBzdG9yZS5tZXRhID0ge1xuICAgICAgY2h1bmtzOiBbXSxcbiAgICAgIHVuYm91bmRTZWxlY3RvcnM6IHt9LFxuICAgICAgdW5ib3VuZEFjdGlvbkNyZWF0b3JzOiB7fSxcbiAgICAgIHJlYWN0b3JOYW1lczogW11cbiAgICB9XG4gIH1cblxuICBjb25zdCB7IG1ldGEgfSA9IHN0b3JlXG5cbiAgLy8gYXR0YWNoIGZvciByZWZlcmVuY2VcbiAgbWV0YS5jaHVua3MucHVzaChwcm9jZXNzZWQpXG5cbiAgLy8gZ3JhYiBleGlzdGluZyB1bmJvdW5kIChidXQgcmVzb2x2ZWQpIHNlbGVjdG9ycywgY29tYmluZSB3aXRoIG5ldyBvbmVzXG4gIGNvbnN0IGNvbWJpbmVkU2VsZWN0b3JzID0gT2JqZWN0LmFzc2lnbihcbiAgICBtZXRhLnVuYm91bmRTZWxlY3RvcnMsXG4gICAgcHJvY2Vzc2VkLnNlbGVjdG9yc1xuICApXG5cbiAgLy8gcnVuIHJlc29sdmVyXG4gIHJlc29sdmVTZWxlY3RvcnMoY29tYmluZWRTZWxlY3RvcnMpXG5cbiAgLy8gdXBkYXRlIGNvbGxlY3Rpb24gb2YgcmVzb2x2ZWQgc2VsZWN0b3JzXG4gIG1ldGEudW5ib3VuZFNlbGVjdG9ycyA9IGNvbWJpbmVkU2VsZWN0b3JzXG5cbiAgLy8gbWFrZSBzdXJlIGFsbCBzZWxlY3RvcnMgYXJlIGJvdW5kICh3b24ndCBvdmVyd3JpdGUgaWYgYWxyZWFkeSBib3VuZClcbiAgYmluZFNlbGVjdG9yc1RvU3RvcmUoc3RvcmUsIGNvbWJpbmVkU2VsZWN0b3JzKVxuXG4gIC8vIGJ1aWxkIG91ciBsaXN0IG9mIHJlYWN0b3IgbmFtZXNcbiAgbWV0YS5yZWFjdG9yTmFtZXMgPSBtZXRhLnJlYWN0b3JOYW1lcy5jb25jYXQocHJvY2Vzc2VkLnJlYWN0b3JOYW1lcylcblxuICAvLyBleHRlbmQgZ2xvYmFsIGNvbGxlY3Rpb25zIHdpdGggbmV3IHN0dWZmXG4gIE9iamVjdC5hc3NpZ24obWV0YS51bmJvdW5kQWN0aW9uQ3JlYXRvcnMsIHByb2Nlc3NlZC5hY3Rpb25DcmVhdG9ycylcblxuICAvLyBiaW5kIGFuZCBhdHRhY2ggb25seSB0aGUgbmV4dCBhY3Rpb24gY3JlYXRvcnMgdG8gdGhlIHN0b3JlXG4gIE9iamVjdC5hc3NpZ24oXG4gICAgc3RvcmUsXG4gICAgYmluZEFjdGlvbkNyZWF0b3JzKHByb2Nlc3NlZC5hY3Rpb25DcmVhdG9ycywgc3RvcmUuZGlzcGF0Y2gpXG4gIClcblxuICAvLyBydW4gYW55IG5ldyBpbml0IG1ldGhvZHNcbiAgcHJvY2Vzc2VkLmluaXRNZXRob2RzLmZvckVhY2goZm4gPT4gZm4oc3RvcmUpKVxufVxuXG5jb25zdCBlbmFibGVCYXRjaERpc3BhdGNoID0gcmVkdWNlciA9PiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdCQVRDSF9BQ1RJT05TJykge1xuICAgIHJldHVybiBhY3Rpb24uYWN0aW9ucy5yZWR1Y2UocmVkdWNlciwgc3RhdGUpXG4gIH1cbiAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbilcbn1cblxuY29uc3QgZGV2VG9vbHMgPSAoKSA9PlxuICBIQVNfV0lORE9XICYmXG4gIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmXG4gIChIQVNfREVCVUdfRkxBRyB8fCAhSVNfUFJPRClcbiAgICA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKClcbiAgICA6IGEgPT4gYVxuXG5jb25zdCBjb21wb3NlQnVuZGxlcyA9ICguLi5idW5kbGVzKSA9PiB7XG4gIC8vIGJ1aWxkIG91dCBvYmplY3Qgb2YgZXh0cmFjdGVkIGJ1bmRsZSBpbmZvXG4gIGNvbnN0IGZpcnN0Q2h1bmsgPSBjcmVhdGVDaHVuayhidW5kbGVzKVxuXG4gIHJldHVybiBkYXRhID0+IHtcbiAgICAvLyBhY3R1YWxseSBpbml0IG91ciBzdG9yZVxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgICBlbmFibGVCYXRjaERpc3BhdGNoKGNvbWJpbmVSZWR1Y2VycyhmaXJzdENodW5rLnJlZHVjZXJzKSksXG4gICAgICBkYXRhLFxuICAgICAgY29tcG9zZShcbiAgICAgICAgY3VzdG9tQXBwbHlNaWRkbGV3YXJlKFxuICAgICAgICAgIC4uLltcbiAgICAgICAgICAgIG5hbWVkQWN0aW9uTWlkZGxld2FyZSxcbiAgICAgICAgICAgIHRodW5rTWlkZGxld2FyZShmaXJzdENodW5rLmV4dHJhQXJnQ3JlYXRvcnMpLFxuICAgICAgICAgICAgLi4uZmlyc3RDaHVuay5taWRkbGV3YXJlQ3JlYXRvcnMubWFwKGZuID0+IGZuKGZpcnN0Q2h1bmspKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgZGV2VG9vbHMoKVxuICAgICAgKVxuICAgIClcblxuICAgIC8vIGdldCB2YWx1ZXMgZnJvbSBhbiBhcnJheSBvZiBzZWxlY3RvciBuYW1lc1xuICAgIHN0b3JlLnNlbGVjdCA9IHNlbGVjdG9yTmFtZXMgPT5cbiAgICAgIHNlbGVjdG9yTmFtZXMucmVkdWNlKChvYmosIG5hbWUpID0+IHtcbiAgICAgICAgaWYgKCFzdG9yZVtuYW1lXSkgdGhyb3cgRXJyb3IoYFNlbGVjdG9yTm90Rm91bmQgJHtuYW1lfWApXG4gICAgICAgIG9ialtzZWxlY3Rvck5hbWVUb1ZhbHVlTmFtZShuYW1lKV0gPSBzdG9yZVtuYW1lXSgpXG4gICAgICAgIHJldHVybiBvYmpcbiAgICAgIH0sIHt9KVxuXG4gICAgLy8gZ2V0IGFsbCB2YWx1ZXMgZnJvbSBhbGwgYXZhaWxhYmxlIHNlbGVjdG9ycyAoZXZlbiBpZiBhZGRlZCBsYXRlcilcbiAgICBzdG9yZS5zZWxlY3RBbGwgPSAoKSA9PlxuICAgICAgc3RvcmUuc2VsZWN0KE9iamVjdC5rZXlzKHN0b3JlLm1ldGEudW5ib3VuZFNlbGVjdG9ycykpXG5cbiAgICAvLyBhZGQgc3VwcG9ydCBmb3IgZGlzcGF0Y2hpbmcgYW4gYWN0aW9uIGJ5IG5hbWVcbiAgICBzdG9yZS5hY3Rpb24gPSAobmFtZSwgYXJncykgPT4gc3RvcmVbbmFtZV0oLi4uYXJncylcblxuICAgIC8vIGFkZHMgc3VwcG9ydCBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbmdlcyBmcm9tIGFuIGFycmF5IG9mIHNlbGVjdG9yIHN0cmluZ3NcbiAgICBhZGRCaW5kaW5nTWV0aG9kcyhzdG9yZSlcblxuICAgIC8vIGFkZCBhbGwgdGhlIGdhdGhlcmVkIGJ1bmRsZSBkYXRhIGludG8gdGhlIHN0b3JlXG4gICAgZGVjb3JhdGVTdG9yZShzdG9yZSwgZmlyc3RDaHVuaylcblxuICAgIC8vIGRlZmluZXMgbWV0aG9kIGZvciBpbnRlZ3JhdGluZyBvdGhlciBidW5kbGVzIGxhdGVyXG4gICAgc3RvcmUuaW50ZWdyYXRlQnVuZGxlcyA9ICguLi5idW5kbGVzVG9JbnRlZ3JhdGUpID0+IHtcbiAgICAgIGRlY29yYXRlU3RvcmUoc3RvcmUsIGNyZWF0ZUNodW5rKGJ1bmRsZXNUb0ludGVncmF0ZSkpXG4gICAgICBjb25zdCBhbGxSZWR1Y2VycyA9IHN0b3JlLm1ldGEuY2h1bmtzLnJlZHVjZShcbiAgICAgICAgKGFjY3VtLCBjaHVuaykgPT4gT2JqZWN0LmFzc2lnbihhY2N1bSwgY2h1bmsucmVkdWNlcnMpLFxuICAgICAgICB7fVxuICAgICAgKVxuICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoZW5hYmxlQmF0Y2hEaXNwYXRjaChjb21iaW5lUmVkdWNlcnMoYWxsUmVkdWNlcnMpKSlcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcmVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlQnVuZGxlc1xuIl19

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1yb3V0ZS1idW5kbGUuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVMscUJBQXNCO0FBQy9CLE9BQU8sd0JBQXdCO0FBRS9CLGVBQWUsTUFBQSxLQUFXO0lBQ3hCLE1BQU0sUUFEa0IsQ0FBQTtJQUV4QixpQkFBaUIsY0FBQSxDQUFlLGtCQUFrQixrQkFBQSxDQUFtQixRQUY3QyxDQUFBO0lBR3hCLG1CQUFtQixjQUFBLENBQWUsb0JBQW9CLENBQUUsU0FBSCxHQUFnQixPQUg3QyxDQUFBO0lBSXhCLGFBQWEsY0FBQSxDQUFlLG9CQUFvQixDQUFFLE9BQUgsR0FBYzs7QUFQL0QiLCJmaWxlIjoiY3JlYXRlLXJvdXRlLWJ1bmRsZS5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ2NyZWF0ZS1zZWxlY3RvcidcbmltcG9ydCBjcmVhdGVSb3V0ZU1hdGNoZXIgZnJvbSAnZmVhdGhlci1yb3V0ZS1tYXRjaGVyJ1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXMgPT4gKHtcbiAgbmFtZTogJ3JvdXRlcycsXG4gIHNlbGVjdFJvdXRlSW5mbzogY3JlYXRlU2VsZWN0b3IoJ3NlbGVjdFBhdGhuYW1lJywgY3JlYXRlUm91dGVNYXRjaGVyKHJvdXRlcykpLFxuICBzZWxlY3RSb3V0ZVBhcmFtczogY3JlYXRlU2VsZWN0b3IoJ3NlbGVjdFJvdXRlSW5mbycsICh7IHBhcmFtcyB9KSA9PiBwYXJhbXMpLFxuICBzZWxlY3RSb3V0ZTogY3JlYXRlU2VsZWN0b3IoJ3NlbGVjdFJvdXRlSW5mbycsICh7IHBhZ2UgfSkgPT4gcGFnZSlcbn0pXG4iXX0=

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1hc3luYy1yZXNvdXJjZS1idW5kbGUuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVMscUJBQXNCO0FBRS9CLEtBQUEsQ0FBTSxjQUFjO0lBQ2xCLGdCQUFnQixJQURFLENBQUE7SUFFbEIsWUFBWSxNQUZNLENBQUE7SUFHbEIsWUFBWSxLQUhNLENBQUE7SUFJbEIsYUFBYSxRQUpLLENBQUE7SUFLbEIsZUFBZSxJQUxHLENBQUE7SUFNbEIsU0FBUzs7QUFHWCxlQUFlLElBQUEsSUFBUTtJQUNyQixLQUFBLENBQU0sT0FBTyxNQUFBLENBQU8sTUFBUCxDQUFjLElBQUksYUFBYTtJQUU1QyxJQUFJLE9BQUEsQ0FBUSxHQUFSLENBQVksUUFBWixDQUFBLEdBQUEsQ0FBeUIsY0FBYztRQUN6QyxLQUFBLENBQU0sa0JBQWtCLENBQUMsT0FBUTtRQUNqQyxlQUFBLENBQWdCLE9BQWhCLENBQXdCLGNBQUEsSUFBa0I7WUFDeEMsSUFBSSxDQUFDLElBQUEsQ0FBSyxpQkFBaUI7Z0JBQ3pCLE1BQU0sS0FBQSxDQUNKLHFCQUFxQix1REFBckI7WUFFVjtRQUNBO0lBQ0E7SUFFRSxLQUFBLENBQU0sQ0FDSixNQUNBLFlBQ0EsWUFDQSxnQkFDQSxlQUNBLGVBQ0U7SUFFSixLQUFBLENBQU0sWUFBWSxJQUFBLENBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxXQUFmLEVBQUEsQ0FBQSxDQUFBLENBQStCLElBQUEsQ0FBSyxLQUFMLENBQVc7SUFDNUQsS0FBQSxDQUFNLFdBQVcsY0FBQSxDQUFBLEVBQUEsQ0FBa0IsSUFBQSxDQUFLLFdBQUw7SUFHbkMsS0FBQSxDQUFNLGdCQUFnQixLQUFBLElBQVMsS0FBQSxDQUFNO0lBQ3JDLEtBQUEsQ0FBTSxlQUFlLEtBQUEsSUFBUyxLQUFBLENBQU0sS0FBTixDQUFZO0lBQzFDLEtBQUEsQ0FBTSxzQkFBc0IsS0FBQSxJQUFTLEtBQUEsQ0FBTSxLQUFOLENBQVk7SUFDakQsS0FBQSxDQUFN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VixJQUF3QixPQTNEWixDQUFBO1NBNERaLFdBQVcsVUFBWCxJQUF5Qjs7SUFHNUIsSUFBSSxJQUFBLENBQUssU0FBUztRQUNoQixNQUFBLENBQU8sY0FBUCxDQUFBLENBQUEsQ0FBd0IsQ0FDdEIsT0FBQSxDQUFRLFNBQ1IsT0FBQSxDQUFRLFFBQ1IsT0FBQSxDQUFRO1lBQ1IsT0FBQSxDQUFRO0lBRWQ7SUFFRSxJQUFJLFdBQUEsQ0FBQSxHQUFBLENBQWdCLFVBQVU7UUFDNUIsTUFBQSxDQUFPLGNBQWMsVUFBZCxFQUFQLENBQUEsQ0FBQSxDQUFvQyxjQUFBLENBQ2xDLHFCQUNBLGtCQUNDLElBQU0sRUFBQSxTQUFQLEdBQW1CO1lBQ2pCLElBQUksQ0FBQyxNQUFNO2dCQUNULE9BQU87WUFDakI7WUFDUSxJQUFJLE9BQUEsQ0FBQSxDQUFBLENBQVUsSUFBVixDQUFBLENBQUEsQ0FBaUIsYUFBYTtnQkFDaEMsT0FBTyxRQUFBO1lBQ2pCO1FBQ0E7SUFFQTtJQUVFLE9BQU87QUFDVDtBQTVPQSIsImZpbGUiOiJjcmVhdGUtYXN5bmMtcmVzb3VyY2UtYnVuZGxlLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnY3JlYXRlLXNlbGVjdG9yJ1xuXG5jb25zdCBkZWZhdWx0T3B0cyA9IHtcbiAgYWN0aW9uQmFzZVR5cGU6IG51bGwsXG4gIHN0YWxlQWZ0ZXI6IDkwMDAwMCwgLy8gZmlmdGVlbiBtaW51dGVzXG4gIHJldHJ5QWZ0ZXI6IDYwMDAwLCAvLyBvbmUgbWludXRlLFxuICBleHBpcmVBZnRlcjogSW5maW5pdHksXG4gIGNoZWNrSWZPbmxpbmU6IHRydWUsXG4gIHBlcnNpc3Q6IHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3BlYyA9PiB7XG4gIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0cywgc3BlYylcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IHJlcXVpcmVkT3B0aW9ucyA9IFsnbmFtZScsICdnZXRQcm9taXNlJ11cbiAgICByZXF1aXJlZE9wdGlvbnMuZm9yRWFjaChyZXF1aXJlZE9wdGlvbiA9PiB7XG4gICAgICBpZiAoIW9wdHNbcmVxdWlyZWRPcHRpb25dKSB7XG4gICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgIGBZb3UgbXVzdCBzdXBwbHkgYSAke3JlcXVpcmVkT3B0aW9ufSBvcHRpb24gd2hlbiBjcmVhdGluZyBhIHJlc291cmNlIGJ1bmRsZS5gXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgc3RhbGVBZnRlcixcbiAgICByZXRyeUFmdGVyLFxuICAgIGFjdGlvbkJhc2VUeXBlLFxuICAgIGNoZWNrSWZPbmxpbmUsXG4gICAgZXhwaXJlQWZ0ZXJcbiAgfSA9IG9wdHNcblxuICBjb25zdCB1Q2FzZU5hbWUgPSBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKVxuICBjb25zdCBiYXNlVHlwZSA9IGFjdGlvbkJhc2VUeXBlIHx8IG5hbWUudG9VcHBlckNhc2UoKVxuXG4gIC8vIGJ1aWxkIHNlbGVjdG9yc1xuICBjb25zdCBpbnB1dFNlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGVbbmFtZV1cbiAgY29uc3QgZGF0YVNlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGVbbmFtZV0uZGF0YVxuICBjb25zdCBsYXN0U3VjY2Vzc1NlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGVbbmFtZV0ubGFzdFN1Y2Nlc3NcbiAgY29uc3QgaXNFeHBpcmVkU2VsZWN0b3IgPSBzdGF0ZSA9PiBzdGF0ZVtuYW1lXS5pc0V4cGlyZWRcbiAgY29uc3QgbGFzdEVycm9yU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBpbnB1dFNlbGVjdG9yLFxuICAgIHJlc291cmNlID0+IHJlc291cmNlLmVycm9yVGltZXMuc2xpY2UoLTEpWzBdIHx8IG51bGxcbiAgKVxuICBjb25zdCBpc1N0YWxlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBpbnB1dFNlbGVjdG9yLFxuICAgIGxhc3RTdWNjZXNzU2VsZWN0b3IsXG4gICAgJ3NlbGVjdEFwcFRpbWUnLFxuICAgIChzdGF0ZSwgdGltZSwgYXBwVGltZSkgPT4ge1xuICAgICAgaWYgKHN0YXRlLmlzT3V0ZGF0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGlmICghdGltZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcHBUaW1lIC0gdGltZSA+IHN0YWxlQWZ0ZXJcbiAgICB9XG4gIClcbiAgY29uc3QgaXNXYWl0aW5nVG9SZXRyeVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgbGFzdEVycm9yU2VsZWN0b3IsXG4gICAgJ3NlbGVjdEFwcFRpbWUnLFxuICAgICh0aW1lLCBhcHBUaW1lKSA9PiB7XG4gICAgICBpZiAoIXRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICByZXR1cm4gYXBwVGltZSAtIHRpbWUgPCByZXRyeUFmdGVyXG4gICAgfVxuICApXG4gIGNvbnN0IGlzTG9hZGluZ1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgaW5wdXRTZWxlY3RvcixcbiAgICByZXNvdXJjZVN0YXRlID0+IHJlc291cmNlU3RhdGUuaXNMb2FkaW5nXG4gIClcbiAgY29uc3QgZmFpbGVkUGVybWFuZW50bHlTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIGlucHV0U2VsZWN0b3IsXG4gICAgcmVzb3VyY2VTdGF0ZSA9PiByZXNvdXJjZVN0YXRlLmZhaWxlZFBlcm1hbmVudGx5XG4gIClcbiAgY29uc3Qgc2hvdWxkVXBkYXRlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBpc0xvYWRpbmdTZWxlY3RvcixcbiAgICBmYWlsZWRQZXJtYW5lbnRseVNlbGVjdG9yLFxuICAgIGlzV2FpdGluZ1RvUmV0cnlTZWxlY3RvcixcbiAgICBkYXRhU2VsZWN0b3IsXG4gICAgaXNTdGFsZVNlbGVjdG9yLFxuICAgICdzZWxlY3RJc09ubGluZScsXG4gICAgKFxuICAgICAgaXNMb2FkaW5nLFxuICAgICAgZmFpbGVkUGVybWFuZW50bHksXG4gICAgICBpc1dhaXRpbmdUb1JldHJ5LFxuICAgICAgZGF0YSxcbiAgICAgIGlzU3RhbGUsXG4gICAgICBpc09ubGluZVxuICAgICkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICAoY2hlY2tJZk9ubGluZSAmJiAhaXNPbmxpbmUpIHx8XG4gICAgICAgIGlzTG9hZGluZyB8fFxuICAgICAgICBmYWlsZWRQZXJtYW5lbnRseSB8fFxuICAgICAgICBpc1dhaXRpbmdUb1JldHJ5XG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBpc1N0YWxlXG4gICAgfVxuICApXG5cbiAgLy8gYWN0aW9uIHR5cGVzXG4gIGNvbnN0IGFjdGlvbnMgPSB7XG4gICAgU1RBUlRFRDogYCR7YmFzZVR5cGV9X0ZFVENIX1NUQVJURURgLFxuICAgIEZJTklTSEVEOiBgJHtiYXNlVHlwZX1fRkVUQ0hfRklOSVNIRURgLFxuICAgIEZBSUxFRDogYCR7YmFzZVR5cGV9X0ZFVENIX0ZBSUxFRGAsXG4gICAgQ0xFQVJFRDogYCR7YmFzZVR5cGV9X0NMRUFSRURgLFxuICAgIE9VVERBVEVEOiBgJHtiYXNlVHlwZX1fT1VUREFURURgLFxuICAgIEVYUElSRUQ6IGAke2Jhc2VUeXBlfV9FWFBJUkVEYFxuICB9XG5cbiAgLy8gYWN0aW9uIGNyZWF0b3JzXG4gIGNvbnN0IGRvRmV0Y2hFcnJvciA9IGVycm9yID0+ICh7IHR5cGU6IGFjdGlvbnMuRkFJTEVELCBlcnJvciB9KVxuICBjb25zdCBkb01hcmtBc091dGRhdGVkID0gKCkgPT4gKHsgdHlwZTogYWN0aW9ucy5PVVREQVRFRCB9KVxuICBjb25zdCBkb0NsZWFyID0gKCkgPT4gKHsgdHlwZTogYWN0aW9ucy5DTEVBUkVEIH0pXG4gIGNvbnN0IGRvRXhwaXJlID0gKCkgPT4gKHsgdHlwZTogYWN0aW9ucy5FWFBJUkVEIH0pXG4gIGNvbnN0IGRvRmV0Y2hTdWNjZXNzID0gcGF5bG9hZCA9PiAoeyB0eXBlOiBhY3Rpb25zLkZJTklTSEVELCBwYXlsb2FkIH0pXG4gIGNvbnN0IGRvRmV0Y2hEYXRhID0gKCkgPT4gYXJncyA9PiB7XG4gICAgY29uc3QgeyBkaXNwYXRjaCB9ID0gYXJnc1xuICAgIGRpc3BhdGNoKHsgdHlwZTogYWN0aW9ucy5TVEFSVEVEIH0pXG4gICAgcmV0dXJuIG9wdHMuZ2V0UHJvbWlzZShhcmdzKS50aGVuKFxuICAgICAgcGF5bG9hZCA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGRvRmV0Y2hTdWNjZXNzKHBheWxvYWQpKVxuICAgICAgfSxcbiAgICAgIGVycm9yID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZG9GZXRjaEVycm9yKGVycm9yKSlcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgZGF0YTogbnVsbCxcbiAgICBlcnJvclRpbWVzOiBbXSxcbiAgICBlcnJvclR5cGU6IG51bGwsXG4gICAgbGFzdFN1Y2Nlc3M6IG51bGwsXG4gICAgaXNPdXRkYXRlZDogZmFsc2UsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICBpc0V4cGlyZWQ6IGZhbHNlLFxuICAgIGZhaWxlZFBlcm1hbmVudGx5OiBmYWxzZVxuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIG5hbWUsXG4gICAgcmVkdWNlcjogKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7IHR5cGUsIHBheWxvYWQsIGVycm9yLCBtZXJnZSB9KSA9PiB7XG4gICAgICBpZiAodHlwZSA9PT0gYWN0aW9ucy5TVEFSVEVEKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBpc0xvYWRpbmc6IHRydWUgfSlcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSBhY3Rpb25zLkZJTklTSEVEKSB7XG4gICAgICAgIGxldCB1cGRhdGVkRGF0YVxuICAgICAgICBpZiAobWVyZ2UpIHtcbiAgICAgICAgICB1cGRhdGVkRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmRhdGEsIHBheWxvYWQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXBkYXRlZERhdGEgPSBwYXlsb2FkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiB1cGRhdGVkRGF0YSxcbiAgICAgICAgICBsYXN0U3VjY2VzczogRGF0ZS5ub3coKSxcbiAgICAgICAgICBlcnJvclRpbWVzOiBbXSxcbiAgICAgICAgICBlcnJvclR5cGU6IG51bGwsXG4gICAgICAgICAgZmFpbGVkUGVybWFuZW50bHk6IGZhbHNlLFxuICAgICAgICAgIGlzT3V0ZGF0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGlzRXhwaXJlZDogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSBhY3Rpb25zLkZBSUxFRCkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSkgfHwgZXJyb3JcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvclRpbWVzOiBzdGF0ZS5lcnJvclRpbWVzLmNvbmNhdChbRGF0ZS5ub3coKV0pLFxuICAgICAgICAgIGVycm9yVHlwZTogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIGZhaWxlZFBlcm1hbmVudGx5OiAhIShlcnJvciAmJiBlcnJvci5wZXJtYW5lbnQpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gYWN0aW9ucy5DTEVBUkVEKSB7XG4gICAgICAgIHJldHVybiBpbml0aWFsU3RhdGVcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSBhY3Rpb25zLkVYUElSRUQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZSwge1xuICAgICAgICAgIGlzRXhwaXJlZDogdHJ1ZSxcbiAgICAgICAgICBlcnJvclRpbWVzOiBzdGF0ZS5lcnJvclRpbWVzLFxuICAgICAgICAgIGVycm9yVHlwZTogc3RhdGUuZXJyb3JUeXBlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gYWN0aW9ucy5PVVREQVRFRCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgaXNPdXRkYXRlZDogdHJ1ZSB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfSxcbiAgICBbYHNlbGVjdCR7dUNhc2VOYW1lfVJhd2BdOiBpbnB1dFNlbGVjdG9yLFxuICAgIFtgc2VsZWN0JHt1Q2FzZU5hbWV9YF06IGRhdGFTZWxlY3RvcixcbiAgICBbYHNlbGVjdCR7dUNhc2VOYW1lfUlzU3RhbGVgXTogaXNTdGFsZVNlbGVjdG9yLFxuICAgIFtgc2VsZWN0JHt1Q2FzZU5hbWV9SXNFeHBpcmVkYF06IGlzRXhwaXJlZFNlbGVjdG9yLFxuICAgIFtgc2VsZWN0JHt1Q2FzZU5hbWV9TGFzdEVycm9yYF06IGxhc3RFcnJvclNlbGVjdG9yLFxuICAgIFtgc2VsZWN0JHt1Q2FzZU5hbWV9SXNXYWl0aW5nVG9SZXRyeWBdOiBpc1dhaXRpbmdUb1JldHJ5U2VsZWN0b3IsXG4gICAgW2BzZWxlY3Qke3VDYXNlTmFtZX1Jc0xvYWRpbmdgXTogaXNMb2FkaW5nU2VsZWN0b3IsXG4gICAgW2BzZWxlY3Qke3VDYXNlTmFtZX1GYWlsZWRQZXJtYW5lbnRseWBdOiBmYWlsZWRQZXJtYW5lbnRseVNlbGVjdG9yLFxuICAgIFtgc2VsZWN0JHt1Q2FzZU5hbWV9U2hvdWxkVXBkYXRlYF06IHNob3VsZFVwZGF0ZVNlbGVjdG9yLFxuICAgIFtgZG9GZXRjaCR7dUNhc2VOYW1lfWBdOiBkb0ZldGNoRGF0YSxcbiAgICBbYGRvTWFyayR7dUNhc2VOYW1lfUFzT3V0ZGF0ZWRgXTogZG9NYXJrQXNPdXRkYXRlZCxcbiAgICBbYGRvQ2xlYXIke3VDYXNlTmFtZX1gXTogZG9DbGVhcixcbiAgICBbYGRvRXhwaXJlJHt1Q2FzZU5hbWV9YF06IGRvRXhwaXJlXG4gIH1cblxuICBpZiAob3B0cy5wZXJzaXN0KSB7XG4gICAgcmVzdWx0LnBlcnNpc3RBY3Rpb25zID0gW1xuICAgICAgYWN0aW9ucy5GSU5JU0hFRCxcbiAgICAgIGFjdGlvbnMuRVhQSVJFRCxcbiAgICAgIGFjdGlvbnMuT1VUREFURUQsXG4gICAgICBhY3Rpb25zLkNMRUFSRURcbiAgICBdXG4gIH1cblxuICBpZiAoZXhwaXJlQWZ0ZXIgIT09IEluZmluaXR5KSB7XG4gICAgcmVzdWx0W2ByZWFjdEV4cGlyZSR7dUNhc2VOYW1lfWBdID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICBsYXN0U3VjY2Vzc1NlbGVjdG9yLFxuICAgICAgJ3NlbGVjdEFwcFRpbWUnLFxuICAgICAgKHRpbWUsIGFwcFRpbWUpID0+IHtcbiAgICAgICAgaWYgKCF0aW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFwcFRpbWUgLSB0aW1lID4gZXhwaXJlQWZ0ZXIpIHtcbiAgICAgICAgICByZXR1cm4gZG9FeHBpcmUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIl19

var e$1=!("undefined"==typeof window&&"undefined"==typeof self);
var n$1="undefined"==typeof requestIdleCallback?function(e){return setTimeout(e,0)}:requestIdleCallback;function getPersistMiddleware(t){var u=t.cacheFn,r=t.actionMap,o=t.logger;return function(t){var i=t.getState;return function(t){return function(a){var f=r[a.type],c=t(a),d=i();return e$1&&f&&n$1(function(){Promise.all(f.map(function(e){return u(e,d[e])})).then(function(){o&&o("cached "+f.join(", ")+" due to "+a.type);});},{timeout:500}), c}}}}
//# sourceMappingURL=redux-persist-middleware.m.js.map

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jYWNoZS1idW5kbGUuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sMEJBQTBCO0FBRWpDLGVBQWUsT0FBQSxLQUNOO0lBQ0wsTUFBTSxZQURELENBQUE7SUFFTCxlQUFlLEtBQUEsSUFBUztRQUN0QixLQUFBLENBQU0sWUFBWTtRQUNsQixLQUFBLENBQU0sVUFBTixDQUFpQixPQUFqQixDQUF5QixNQUFBLElBQVU7WUFDakMsSUFBSSxNQUFBLENBQU8sZ0JBQWdCO2dCQUN6QixNQUFBLENBQU8sY0FBUCxDQUFzQixPQUF0QixDQUE4QixJQUFBLElBQVE7b0JBQ3BDLFNBQUEsQ0FBVSxLQUFWLENBQUEsRUFBQSxFQUFvQixTQUFBLENBQVUsS0FBVixDQUFBLENBQUEsQ0FBa0I7b0JBQ3RDLFNBQUEsQ0FBVSxLQUFWLENBQWdCLElBQWhCLENBQXFCLE1BQUEsQ0FBTztnQkFDeEM7WUFDQTtRQUNBO1FBRU0sT0FBTyxvQkFBQSxDQUFxQjtZQUMxQixTQUQwQixDQUFBO1lBRTFCOztJQUVSOztBQXBCQSIsImZpbGUiOiJjcmVhdGUtY2FjaGUtYnVuZGxlLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRQZXJzaXN0TWlkZGxld2FyZSBmcm9tICdyZWR1eC1wZXJzaXN0LW1pZGRsZXdhcmUnXG5cbmV4cG9ydCBkZWZhdWx0IGNhY2hlRm4gPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdsb2NhbENhY2hlJyxcbiAgICBnZXRNaWRkbGV3YXJlOiBjaHVuayA9PiB7XG4gICAgICBjb25zdCBhY3Rpb25NYXAgPSB7fVxuICAgICAgY2h1bmsucmF3QnVuZGxlcy5mb3JFYWNoKGJ1bmRsZSA9PiB7XG4gICAgICAgIGlmIChidW5kbGUucGVyc2lzdEFjdGlvbnMpIHtcbiAgICAgICAgICBidW5kbGUucGVyc2lzdEFjdGlvbnMuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgICAgICAgIGFjdGlvbk1hcFt0eXBlXSB8fCAoYWN0aW9uTWFwW3R5cGVdID0gW10pXG4gICAgICAgICAgICBhY3Rpb25NYXBbdHlwZV0ucHVzaChidW5kbGUubmFtZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gZ2V0UGVyc2lzdE1pZGRsZXdhcmUoe1xuICAgICAgICBhY3Rpb25NYXAsXG4gICAgICAgIGNhY2hlRm5cbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1nZW9sb2NhdGlvbi1idW5kbGUuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sK0JBQStCO0FBQ3RDLFFBQVMsaUJBQWtCO0FBRTNCLEtBQUEsQ0FBTSxZQUFZLE9BQVMsRUFBQSxTQUFBLEdBQVksT0FBdEIsR0FBZ0M7SUFDL0MsS0FBQSxDQUFNLE1BQU0sSUFBSSxLQUFKLENBQVU7SUFDdEIsSUFBSTtRQUFXLEdBQUEsQ0FBSSxTQUFKLENBQUEsQ0FBQSxDQUFnQjtJQUMvQixPQUFPO0FBQ1Q7QUFFQSxLQUFBLENBQU0sZ0JBQWdCLENBQ3BCLHVDQUNBO0lBQ0EsMEJBQ0E7QUFHRixLQUFBLENBQU0sY0FBYztJQUNsQixTQUFTLEtBRFMsQ0FBQTtJQUVsQixvQkFBb0IsS0FGRixDQUFBO0lBR2xCLFNBQVMsSUFIUyxDQUFBO0lBSWxCLFVBQVUsTUFKUSxDQUFBO0lBS2xCLFlBQVk7O0FBR2QsZUFBZSxJQUFBLElBQVE7SUFDckIsS0FBQSxDQUFNLE9BQU8sTUFBQSxDQUFPLE1BQVAsQ0FBYyxJQUFJLGFBQWE7SUFDNUMsT0FBTyx5QkFBQSxDQUEwQjtRQUMvQixNQUFNLGFBRHlCLENBQUE7UUFFL0IsZ0JBQWdCLHFCQUZlLENBQUE7UUFHL0IsZUFBWSxHQUNWLElBQUksT0FBSixFQUFhLE9BQVMsRUFBQSxRQUFWLEdBQXFCO1lBQy9CLElBQUksQ0FBQyxVQUFELENBQUEsRUFBQSxDQUFlLENBQUMsU0FBQSxDQUFVLGFBQWE7Z0JBQ3pDLE1BQUEsQ0FBTyxRQUFBLENBQVMsNkJBQTZCO1lBQ3ZEO1lBQ1EsS0FBQSxDQUFNLFVBQVUsUUFBQSxJQUFZO2dCQUMxQixLQUFBLENBQU0sTUFBTTtnQkFDWixLQUFBLENBQU0sQ0FBRSxVQUFXO2dCQUNuQixLQUFLLEtBQUEsQ0FBTSxPQUFPLFFBQVE7b0JBQ3hCLEdBQUEsQ0FBSSxJQUFKLENBQUEsQ0FBQSxDQUFXLE1BQUEsQ0FBTztnQkFDOUI7Z0JBQ1UsR0FBQSxDQUFJLFNBQUosQ0FBQSxDQUFBLENBQWdCLFFBQUEsQ0FBUztnQkFDekIsT0FBQSxDQUFRO1lBQ2xCO1lBQ1EsS0FBQSxDQUFNLFFBQVEsQ0FBRSxPQUFILEdBQWM7Z0JBQ3pCLE1BQUEsQ0FBTyxRQUFBLENBQVMsYUFBQSxDQUFjLE9BQU8sSUFBQSxDQUFBLEdBQUEsQ0FBUztZQUN4RDtZQUNRLEtBQUEsQ0FBTSxVQUFVO2dCQUNkLFNBQVMsSUFBQSxDQUFLLE9BREEsQ0FBQTtnQkFFZCxvQkFBb0IsSUFBQSxDQUFLOztZQUUzQixTQUFBLENBQVUsV0FBVixDQUFzQixrQkFBdEIsQ0FBeUMsU0FBUyxNQUFNO1FBQ2hFLEVBekJtQyxDQUFBO1FBMEIvQixTQUFTLElBQUEsQ0FBSyxPQTFCaUIsQ0FBQTtRQTJCL0IsVUFBVSxJQUFBLENBQUssUUEzQmdCLENBQUE7UUE0Qi9CLFlBQVksSUFBQSxDQUFLOztBQUVyQjtBQXhEQSIsImZpbGUiOiJjcmVhdGUtZ2VvbG9jYXRpb24tYnVuZGxlLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBc3luY1Jlc291cmNlQnVuZGxlIGZyb20gJy4vY3JlYXRlLWFzeW5jLXJlc291cmNlLWJ1bmRsZSdcbmltcG9ydCB7IElTX0JST1dTRVIgfSBmcm9tICcuLi91dGlscydcblxuY29uc3QgZ2V0RXJyb3IgPSAobWVzc2FnZSwgcGVybWFuZW50ID0gZmFsc2UpID0+IHtcbiAgY29uc3QgZXJyID0gbmV3IEVycm9yKG1lc3NhZ2UpXG4gIGlmIChwZXJtYW5lbnQpIGVyci5wZXJtYW5lbnQgPSB0cnVlXG4gIHJldHVybiBlcnJcbn1cblxuY29uc3QgZ2VvRXJyb3JBcnJheSA9IFtcbiAgJ0FuIHVua25vd24gZ2VvbG9jYXRpb24gZXJyb3Igb2NjdXJlZCcsXG4gICdHZW9sb2NhdGlvbiBwZXJtaXNzaW9uIGRlbmllZCcsXG4gICdHZW9sb2NhdGlvbiB1bmF2YWlsYWJsZScsXG4gICdHZW9sb2NhdGlvbiByZXF1ZXN0IHRpbWVkIG91dCdcbl1cblxuY29uc3QgZGVmYXVsdE9wdHMgPSB7XG4gIHRpbWVvdXQ6IDYwMDAwLFxuICBlbmFibGVIaWdoQWNjdXJhY3k6IGZhbHNlLFxuICBwZXJzaXN0OiB0cnVlLFxuICBzdGFsZUFnZTogOTAwMDAwLCAvLyBmaWZ0ZWVuIG1pbnV0ZXNcbiAgcmV0cnlBZnRlcjogNjAwMDAgLy8gb25lIG1pbnV0ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3BlYyA9PiB7XG4gIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0cywgc3BlYylcbiAgcmV0dXJuIGNyZWF0ZUFzeW5jUmVzb3VyY2VCdW5kbGUoe1xuICAgIG5hbWU6ICdnZW9sb2NhdGlvbicsXG4gICAgYWN0aW9uQmFzZVR5cGU6ICdHRU9MT0NBVElPTl9SRVFVRVNUJyxcbiAgICBnZXRQcm9taXNlOiAoKSA9PlxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAoIUlTX0JST1dTRVIgfHwgIW5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgIHJlamVjdChnZXRFcnJvcignR2VvbG9jYXRpb24gbm90IHN1cHBvcnRlZCcsIHRydWUpKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzID0ge31cbiAgICAgICAgICBjb25zdCB7IGNvb3JkcyB9ID0gcG9zaXRpb25cbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb29yZHMpIHtcbiAgICAgICAgICAgIHJlc1trZXldID0gY29vcmRzW2tleV1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzLnRpbWVzdGFtcCA9IHBvc2l0aW9uLnRpbWVzdGFtcFxuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZhaWwgPSAoeyBjb2RlIH0pID0+IHtcbiAgICAgICAgICByZWplY3QoZ2V0RXJyb3IoZ2VvRXJyb3JBcnJheVtjb2RlXSwgY29kZSA9PT0gMSkpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2VvT3B0cyA9IHtcbiAgICAgICAgICB0aW1lb3V0OiBvcHRzLnRpbWVvdXQsXG4gICAgICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5OiBvcHRzLmVuYWJsZUhpZ2hBY2N1cmFjeVxuICAgICAgICB9XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2VzcywgZmFpbCwgZ2VvT3B0cylcbiAgICAgIH0pLFxuICAgIHBlcnNpc3Q6IG9wdHMucGVyc2lzdCxcbiAgICBzdGFsZUFnZTogb3B0cy5zdGFsZUFnZSxcbiAgICByZXRyeUFmdGVyOiBvcHRzLnJldHJ5QWZ0ZXJcbiAgfSlcbn1cbiJdfQ==

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1yZWFjdG9yLWJ1bmRsZS5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUyxZQUFZLFVBQVUsS0FBSyxVQUFXO0FBRS9DLEtBQUEsQ0FBTSxXQUFXO0lBQ2YsYUFBYSxLQURFLENBQUE7SUFFZixZQUFZLFVBRkcsQ0FBQTtJQUdmLGNBQWMsSUFIQyxDQUFBO0lBSWYscUJBQXFCOztBQUd2QixLQUFBLENBQU0sYUFBYTtJQUFFLFNBQVM7O0FBQzlCLE9BQU8sS0FBQSxDQUFNLHFCQUFxQixnQkFBa0IsRUFBQSxPQUFTLEVBQUEsSUFBNUIsR0FDL0IsUUFBQSxJQUFTLEdBQU07SUFFYixnQkFBQSxHQUFtQixHQUFBLElBQUksR0FBTSxHQUFBLENBQUksSUFBSSxlQUFlLEdBQUEsQ0FBSSxJQUFJO0FBQ2hFLEdBQUs7QUFFTCxlQUFlLElBQUEsS0FBUztJQUN0QixNQUFNLFVBRGdCLENBQUE7SUFFdEIsTUFBTSxLQUFBLElBQVM7UUFDYixLQUFBLENBQU0sT0FBTyxNQUFBLENBQU8sTUFBUCxDQUFjLElBQUksVUFBVTtRQUN6QyxLQUFBLENBQU0sQ0FBRSxZQUFZLGVBQWdCO1FBQ3BDLEdBQUEsQ0FBSTtRQUNKLElBQUksYUFBYTtZQUNmLGNBQUEsQ0FBQSxDQUFBLENBQWlCLGlCQUFBLENBQ2YsSUFBQSxDQUFLLHFCQUNMLGdCQUNBLEdBQU0sS0FBQSxDQUFNLFFBQU4sQ0FBZTtnQkFBRSxNQUFNOztRQUVyQztRQUVJLElBQUksT0FBQSxDQUFRLEdBQVIsQ0FBWSxRQUFaLENBQUEsR0FBQSxDQUF5QixjQUFjO1lBQ3pDLEtBQUEsQ0FBTSxJQUFOLENBQVcsWUFBWCxDQUF3QixPQUF4QixDQUFnQyxJQUFBLElBQVE7Z0JBQ3RDLElBQUksQ0FBQyxLQUFBLENBQU0sT0FBTztvQkFDaEIsTUFBTSxLQUFBLENBQ0osWUFBWSxrRkFBWjtnQkFFWjtZQUNBO1FBQ0E7UUFFSSxLQUFBLENBQU0sa0JBQWUsR0FBTTtZQUN6QixJQUNFLENBQUMsVUFBRCxDQUFBLEVBQUEsQ0FDQSxDQUFDLEtBQUEsQ0FBTSxZQURQLENBQUEsRUFBQSxFQUVDLENBQUMsS0FBQSxDQUFNLGlCQUFQLENBQUEsRUFBQSxDQUE0QixDQUFDLEtBQUEsQ0FBTSxpQkFBTixLQUM5QjtnQkFDQSxjQUFBLENBQUEsRUFBQSxDQUFrQixjQUFBLENBQWUsTUFBZjtnQkFDbEIsSUFBQSxDQUFLLFlBQUwsQ0FBQSxFQUFBLENBQXFCLElBQUEsQ0FBSyxZQUFMO1lBQzdCO1FBQ0E7UUFFSSxLQUFBLENBQU0sa0JBQWUsR0FBTTtZQUV6QixJQUFJLEtBQUEsQ0FBTSxjQUFjO2dCQUN0QjtZQUNSO1lBRU0sS0FBQSxDQUFNLElBQU4sQ0FBVyxZQUFYLENBQXdCLElBQXhCLENBQTZCLElBQUEsSUFBUTtnQkFDbkMsS0FBQSxDQUFNLFNBQVMsS0FBQSxDQUFNLEtBQU47Z0JBQ2YsSUFBSSxRQUFRO29CQUNWLEtBQUEsQ0FBTSxhQUFOLENBQUEsQ0FBQSxDQUFzQjtvQkFDdEIsS0FBQSxDQUFNLFlBQU4sQ0FBQSxDQUFBLENBQXFCO2dCQUMvQjtnQkFDUSxPQUFPO1lBQ2Y7WUFDTSxJQUFJLEtBQUEsQ0FBTSxjQUFjO2dCQUV0QixHQUFBLElBQUksR0FBTTtvQkFDUixLQUFBLENBQU0sQ0FBRSxnQkFBaUI7b0JBQ3pCLEtBQUEsQ0FBTSxhQUFOLENBQUEsQ0FBQSxDQUFzQjtvQkFDdEIsS0FBQSxDQUFNLFlBQU4sQ0FBQSxDQUFBLENBQXFCO29CQUNyQixLQUFBLENBQU0sUUFBTixDQUFlO2dCQUN6QixHQUFXO1lBQ1g7UUFDQTtRQUVJLEtBQUEsQ0FBTSxjQUFXLEdBQU07WUFDckIsWUFBQTtZQUNBLElBQUksZ0JBQWdCO2dCQUNsQixjQUFBO2dCQUNBLFlBQUE7WUFDUjtRQUNBO1FBRUksS0FBQSxDQUFNLFNBQU4sQ0FBZ0I7UUFDaEIsUUFBQTtJQUNKOztBQXRGQSIsImZpbGUiOiJjcmVhdGUtcmVhY3Rvci1idW5kbGUuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNfQlJPV1NFUiwgZGVib3VuY2UsIHJpYywgcmFmIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBpZGxlVGltZW91dDogMzAwMDAsXG4gIGlkbGVBY3Rpb246ICdBUFBfSURMRScsXG4gIGRvbmVDYWxsYmFjazogbnVsbCxcbiAgc3RvcFdoZW5UYWJJbmFjdGl2ZTogdHJ1ZVxufVxuXG5jb25zdCByaWNPcHRpb25zID0geyB0aW1lb3V0OiA1MDAgfVxuZXhwb3J0IGNvbnN0IGdldElkbGVEaXNwYXRjaGVyID0gKHN0b3BXaGVuSW5hY3RpdmUsIHRpbWVvdXQsIGZuKSA9PlxuICBkZWJvdW5jZSgoKSA9PiB7XG4gICAgLy8gdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSBlbnN1cmVzIGl0IGRvZXNuJ3QgcnVuIHdoZW4gdGFiIGlzbid0IGFjdGl2ZVxuICAgIHN0b3BXaGVuSW5hY3RpdmUgPyByYWYoKCkgPT4gcmljKGZuLCByaWNPcHRpb25zKSkgOiByaWMoZm4sIHJpY09wdGlvbnMpXG4gIH0sIHRpbWVvdXQpXG5cbmV4cG9ydCBkZWZhdWx0IHNwZWMgPT4gKHtcbiAgbmFtZTogJ3JlYWN0b3JzJyxcbiAgaW5pdDogc3RvcmUgPT4ge1xuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgc3BlYylcbiAgICBjb25zdCB7IGlkbGVBY3Rpb24sIGlkbGVUaW1lb3V0IH0gPSBvcHRzXG4gICAgbGV0IGlkbGVEaXNwYXRjaGVyXG4gICAgaWYgKGlkbGVUaW1lb3V0KSB7XG4gICAgICBpZGxlRGlzcGF0Y2hlciA9IGdldElkbGVEaXNwYXRjaGVyKFxuICAgICAgICBvcHRzLnN0b3BXaGVuVGFiSW5hY3RpdmUsXG4gICAgICAgIGlkbGVUaW1lb3V0LFxuICAgICAgICAoKSA9PiBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IGlkbGVBY3Rpb24gfSlcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgc3RvcmUubWV0YS5yZWFjdG9yTmFtZXMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKCFzdG9yZVtuYW1lXSkge1xuICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgYFJlYWN0b3IgJyR7bmFtZX0nIG5vdCBmb3VuZCBvbiB0aGUgc3RvcmUuIE1ha2Ugc3VyZSB5b3UncmUgZGVmaW5pbmcgYXMgc2VsZWN0b3IgYnkgdGhhdCBuYW1lLmBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgY2FuY2VsSWZEb25lID0gKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICAhSVNfQlJPV1NFUiAmJlxuICAgICAgICAhc3RvcmUubmV4dFJlYWN0aW9uICYmXG4gICAgICAgICghc3RvcmUuc2VsZWN0QXN5bmNBY3RpdmUgfHwgIXN0b3JlLnNlbGVjdEFzeW5jQWN0aXZlKCkpXG4gICAgICApIHtcbiAgICAgICAgaWRsZURpc3BhdGNoZXIgJiYgaWRsZURpc3BhdGNoZXIuY2FuY2VsKClcbiAgICAgICAgb3B0cy5kb25lQ2FsbGJhY2sgJiYgb3B0cy5kb25lQ2FsbGJhY2soKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BhdGNoTmV4dCA9ICgpID0+IHtcbiAgICAgIC8vIG9uZSBhdCBhIHRpbWVcbiAgICAgIGlmIChzdG9yZS5uZXh0UmVhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvLyBsb29rIGZvciB0aGUgbmV4dCBvbmVcbiAgICAgIHN0b3JlLm1ldGEucmVhY3Rvck5hbWVzLnNvbWUobmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN0b3JlW25hbWVdKClcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHN0b3JlLmFjdGl2ZVJlYWN0b3IgPSBuYW1lXG4gICAgICAgICAgc3RvcmUubmV4dFJlYWN0aW9uID0gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfSlcbiAgICAgIGlmIChzdG9yZS5uZXh0UmVhY3Rpb24pIHtcbiAgICAgICAgLy8gbGV0IGJyb3dzZXIgY2hpbGxcbiAgICAgICAgcmljKCgpID0+IHtcbiAgICAgICAgICBjb25zdCB7IG5leHRSZWFjdGlvbiB9ID0gc3RvcmVcbiAgICAgICAgICBzdG9yZS5hY3RpdmVSZWFjdG9yID0gbnVsbFxuICAgICAgICAgIHN0b3JlLm5leHRSZWFjdGlvbiA9IG51bGxcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaChuZXh0UmVhY3Rpb24pXG4gICAgICAgIH0sIHJpY09wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBkaXNwYXRjaE5leHQoKVxuICAgICAgaWYgKGlkbGVEaXNwYXRjaGVyKSB7XG4gICAgICAgIGlkbGVEaXNwYXRjaGVyKClcbiAgICAgICAgY2FuY2VsSWZEb25lKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9yZS5zdWJzY3JpYmUoY2FsbGJhY2spXG4gICAgY2FsbGJhY2soKVxuICB9XG59KVxuIl19

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS11cmwtYnVuZGxlLmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFFBQVE7QUFDZixRQUFTLHFCQUFzQjtBQUMvQixRQUFTLFlBQVksb0JBQW9CLHlCQUEwQjtBQUVuRSxLQUFBLENBQU0sTUFBTSxNQUFBLENBQU87QUFFbkIsT0FBTyxLQUFBLENBQU0sV0FBVyxHQUFBLElBQ3RCLE1BQUEsQ0FBTyxTQUFQLENBQWlCLFFBQWpCLENBQTBCLElBQTFCLENBQStCLElBQS9CLENBQUEsR0FBQSxDQUF3QztBQUMxQyxPQUFPLEtBQUEsQ0FBTSxZQUFZLEtBQUEsSUFBUyxNQUFBLENBQU8sS0FBUCxDQUFBLEdBQUEsQ0FBaUI7QUFDbkQsT0FBTyxLQUFBLENBQU0sZUFBZSxLQUFBLElBQzFCLFFBQUEsQ0FBUyxNQUFULEdBQWtCLFFBQVEsRUFBQSxDQUFHLFNBQUgsQ0FBYTtBQUN6QyxLQUFBLENBQU0sT0FBTztBQUNiLE9BQU8sS0FBQSxDQUFNLG1CQUFtQixRQUFVLEVBQUEsYUFBWCxHQUEyQjtJQUN4RCxJQUFJLElBQUEsQ0FBSyxJQUFMLENBQVU7UUFBVyxPQUFPO0lBQ2hDLEtBQUEsQ0FBTSxRQUFRLFFBQUEsQ0FBUyxLQUFULENBQWU7SUFDN0IsSUFBSSxhQUFhO1FBQ2YsT0FBTyxLQUFBLENBQU0sS0FBTixDQUFZLENBQUMsRUFBYixDQUFnQixJQUFoQixDQUFxQjtJQUNoQztJQUNFLE9BQU8sUUFBQSxDQUFTLEtBQVQsQ0FBZSxJQUFmLENBQW9CLEtBQXBCLENBQTBCLEdBQUcsQ0FBQztBQUN2QztBQUNBLE9BQU8sS0FBQSxDQUFNLGlCQUFpQixJQUFNLEVBQUEsUUFBUCxHQUMzQixNQUFBLENBQU8sTUFBUCxDQUFjLEVBQWQsQ0FBQSxHQUFBLENBQXFCLElBQXJCLEdBQTRCLE1BQUEsQ0FBTyxLQUFQLENBQWEsS0FBSztBQUNoRCxPQUFPLEtBQUEsQ0FBTSxpQkFBaUIsSUFBTSxFQUFBLFFBQVAsR0FB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QUEsR0FBQSxDQUFTLFlBQVk7b0JBQ3ZCLE9BQU8sTUFBQSxDQUFPLE1BQVAsQ0FBYzt3QkFDbkIsS0FBSyxPQUFBLENBQVEsR0FBUixDQUFBLEVBQUEsQ0FBZSxPQURELENBQUE7d0JBRW5CLFNBQVMsRUFBQyxDQUFDLE9BQUEsQ0FBUTs7Z0JBRS9CO2dCQUNRLE9BQU87WUFDZjtRQUNBLENBNURTLENBQUE7UUE2REwsV0E3REssQ0FBQTtRQThETCxZQTlESyxDQUFBO1FBK0RMLGFBL0RLLENBQUE7UUFnRUwsWUFoRUssQ0FBQTtRQWlFTCxZQWpFSyxDQUFBO1FBa0VMLGVBbEVLLENBQUE7UUFtRUwsaUJBbkVLLENBQUE7UUFvRUwsaUJBcEVLLENBQUE7UUFxRUwsY0FyRUssQ0FBQTtRQXNFTCxVQXRFSyxDQUFBO1FBdUVMLGdCQXZFSyxDQUFBO1FBd0VMLGNBeEVLLENBQUE7UUF5RUw7O0FBRUo7QUF6TEEiLCJmaWxlIjoiY3JlYXRlLXVybC1idW5kbGUuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHFzIGZyb20gJ3F1ZXJ5c3RyaW5naWZ5J1xuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdjcmVhdGUtc2VsZWN0b3InXG5pbXBvcnQgeyBIQVNfV0lORE9XLCBpbml0U2Nyb2xsUG9zaXRpb24sIHNhdmVTY3JvbGxQb3NpdGlvbiB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCBVUkwgPSB3aW5kb3cuVVJMXG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IG9iaiA9PlxuICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSdcbmV4cG9ydCBjb25zdCBpc0RlZmluZWQgPSB0aGluZyA9PiB0eXBlb2YgdGhpbmcgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgZW5zdXJlU3RyaW5nID0gaW5wdXQgPT5cbiAgaXNTdHJpbmcoaW5wdXQpID8gaW5wdXQgOiBxcy5zdHJpbmdpZnkoaW5wdXQpXG5jb25zdCBJUFJFID0gL15bMC05Ll0rJC9cbmV4cG9ydCBjb25zdCBwYXJzZVN1YmRvbWFpbnMgPSAoaG9zdG5hbWUsIGdldEJhcmVIb3N0KSA9PiB7XG4gIGlmIChJUFJFLnRlc3QoaG9zdG5hbWUpKSByZXR1cm4gW11cbiAgY29uc3QgcGFydHMgPSBob3N0bmFtZS5zcGxpdCgnLicpXG4gIGlmIChnZXRCYXJlSG9zdCkge1xuICAgIHJldHVybiBwYXJ0cy5zbGljZSgtMikuam9pbignLicpXG4gIH1cbiAgcmV0dXJuIGhvc3RuYW1lLnNwbGl0KCcuJykuc2xpY2UoMCwgLTIpXG59XG5leHBvcnQgY29uc3QgcmVtb3ZlTGVhZGluZyA9IChjaGFyLCBzdHJpbmcpID0+XG4gIHN0cmluZy5jaGFyQXQoMCkgPT09IGNoYXIgPyBzdHJpbmcuc2xpY2UoMSkgOiBzdHJpbmdcbmV4cG9ydCBjb25zdCBlbnN1cmVMZWFkaW5nID0gKGNoYXIsIHN0cmluZykgPT4ge1xuICBpZiAoc3RyaW5nID09PSBjaGFyIHx8IHN0cmluZyA9PT0gJycpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKSAhPT0gY2hhciA/IGNoYXIgKyBzdHJpbmcgOiBzdHJpbmdcbn1cbmNvbnN0IGxvYyA9ICgoKSA9PiB7XG4gIGlmICghSEFTX1dJTkRPVykgcmV0dXJuIHt9XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb25cbn0pKClcbmNvbnN0IGRlZmF1bHRzID0ge1xuICBuYW1lOiAndXJsJyxcbiAgaW5lcnQ6ICFIQVNfV0lORE9XLFxuICBhY3Rpb25UeXBlOiAnVVJMX1VQREFURUQnLFxuICBoYW5kbGVTY3JvbGxSZXN0b3JhdGlvbjogdHJ1ZVxufVxuXG5jb25zdCBtYWtlU2VyaWFsaXphYmxlID0gdXJsID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgZm9yIChjb25zdCBrZXkgaW4gdXJsKSB7XG4gICAgY29uc3QgdmFsID0gdXJsW2tleV1cbiAgICBpZiAoaXNTdHJpbmcodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZGVmYXVsdCBvcHRzID0+IHtcbiAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMsIG9wdHMpXG4gIGNvbnN0IGFjdGlvblR5cGUgPSBjb25maWcuYWN0aW9uVHlwZVxuXG4gIGNvbnN0IHNlbGVjdFVybFJhdyA9IHN0YXRlID0+IHN0YXRlW2NvbmZpZy5uYW1lXVxuICBjb25zdCBzZWxlY3RVcmxPYmplY3QgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RVcmxSYXcsIHVybFN0YXRlID0+XG4gICAgbWFrZVNlcmlhbGl6YWJsZShuZXcgVVJMKHVybFN0YXRlLnVybCkpXG4gIClcbiAgY29uc3Qgc2VsZWN0UXVlcnlPYmplY3QgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RVcmxPYmplY3QsIHVybE9iaiA9PlxuICAgIHFzLnBhcnNlKHVybE9iai5zZWFyY2gpXG4gIClcbiAgY29uc3Qgc2VsZWN0UXVlcnlTdHJpbmcgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RRdWVyeU9iamVjdCwgcXVlcnlPYmogPT5cbiAgICBxcy5zdHJpbmdpZnkocXVlcnlPYmopXG4gIClcbiAgY29uc3Qgc2VsZWN0UGF0aG5hbWUgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RVcmxPYmplY3QsXG4gICAgdXJsT2JqID0+IHVybE9iai5wYXRobmFtZVxuICApXG4gIGNvbnN0IHNlbGVjdEhhc2ggPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RVcmxPYmplY3QsIHVybE9iaiA9PlxuICAgIHJlbW92ZUxlYWRpbmcoJyMnLCB1cmxPYmouaGFzaClcbiAgKVxuICBjb25zdCBzZWxlY3RIYXNoT2JqZWN0ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0SGFzaCwgaGFzaCA9PiBxcy5wYXJzZShoYXNoKSlcbiAgY29uc3Qgc2VsZWN0SG9zdG5hbWUgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RVcmxPYmplY3QsXG4gICAgdXJsT2JqID0+IHVybE9iai5ob3N0bmFtZVxuICApXG4gIGNvbnN0IHNlbGVjdFN1YmRvbWFpbnMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RIb3N0bmFtZSwgaG9zdG5hbWUgPT5cbiAgICBwYXJzZVN1YmRvbWFpbnMoaG9zdG5hbWUpXG4gIClcblxuICBjb25zdCBkb1VwZGF0ZVVybCA9IChuZXdTdGF0ZSwgb3B0cyA9IHsgcmVwbGFjZTogZmFsc2UgfSkgPT4gKHtcbiAgICBkaXNwYXRjaCxcbiAgICBnZXRTdGF0ZVxuICB9KSA9PiB7XG4gICAgbGV0IHN0YXRlID0gbmV3U3RhdGVcbiAgICBpZiAodHlwZW9mIG5ld1N0YXRlID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgcGFyc2VkID0gbmV3IFVSTChcbiAgICAgICAgbmV3U3RhdGUuY2hhckF0KDApID09PSAnLycgPyAnaHR0cDovL2V4YW1wbGUuY29tJyArIG5ld1N0YXRlIDogbmV3U3RhdGVcbiAgICAgIClcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBwYXRobmFtZTogcGFyc2VkLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeTogcGFyc2VkLnNlYXJjaCB8fCAnJyxcbiAgICAgICAgaGFzaDogcGFyc2VkLmhhc2ggfHwgJydcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChzZWxlY3RVcmxSYXcoZ2V0U3RhdGUoKSkudXJsKVxuICAgIGlmIChpc0RlZmluZWQoc3RhdGUucGF0aG5hbWUpKSB1cmwucGF0aG5hbWUgPSBzdGF0ZS5wYXRobmFtZVxuICAgIGlmIChpc0RlZmluZWQoc3RhdGUuaGFzaCkpIHVybC5oYXNoID0gZW5zdXJlU3RyaW5nKHN0YXRlLmhhc2gpXG4gICAgaWYgKGlzRGVmaW5lZChzdGF0ZS5xdWVyeSkpIHVybC5zZWFyY2ggPSBlbnN1cmVTdHJpbmcoc3RhdGUucXVlcnkpXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogYWN0aW9uVHlwZSxcbiAgICAgIHBheWxvYWQ6IHsgdXJsOiB1cmwuaHJlZiwgcmVwbGFjZTogb3B0cy5yZXBsYWNlIH1cbiAgICB9KVxuICB9XG4gIGNvbnN0IGRvUmVwbGFjZVVybCA9IHVybCA9PiBkb1VwZGF0ZVVybCh1cmwsIHsgcmVwbGFjZTogdHJ1ZSB9KVxuICBjb25zdCBkb1VwZGF0ZVF1ZXJ5ID0gKHF1ZXJ5LCBvcHRzID0geyByZXBsYWNlOiB0cnVlIH0pID0+XG4gICAgZG9VcGRhdGVVcmwoeyBxdWVyeTogZW5zdXJlU3RyaW5nKHF1ZXJ5KSB9LCBvcHRzKVxuICBjb25zdCBkb1VwZGF0ZUhhc2ggPSAoaGFzaCwgb3B0cyA9IHsgcmVwbGFjZTogZmFsc2UgfSkgPT5cbiAgICBkb1VwZGF0ZVVybCh7IGhhc2g6IGVuc3VyZUxlYWRpbmcoJyMnLCBlbnN1cmVTdHJpbmcoaGFzaCkpIH0sIG9wdHMpXG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjb25maWcubmFtZSxcbiAgICBpbml0OiBzdG9yZSA9PiB7XG4gICAgICBpZiAoY29uZmlnLmluZXJ0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoY29uZmlnLmhhbmRsZVNjcm9sbFJlc3RvcmF0aW9uKSBpbml0U2Nyb2xsUG9zaXRpb24oKVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICAgIHN0b3JlLmRvVXBkYXRlVXJsKHtcbiAgICAgICAgICBwYXRobmFtZTogbG9jLnBhdGhuYW1lLFxuICAgICAgICAgIGhhc2g6IGxvYy5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBsb2Muc2VhcmNoXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBsZXQgbGFzdFN0YXRlID0gc3RvcmUuc2VsZWN0VXJsUmF3KClcblxuICAgICAgc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBzdG9yZS5zZWxlY3RVcmxSYXcoKVxuICAgICAgICBjb25zdCBuZXdVcmwgPSBuZXdTdGF0ZS51cmxcbiAgICAgICAgaWYgKGxhc3RTdGF0ZSAhPT0gbmV3U3RhdGUgJiYgbmV3VXJsICE9PSBsb2MuaHJlZikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVtuZXdTdGF0ZS5yZXBsYWNlID8gJ3JlcGxhY2VTdGF0ZScgOiAncHVzaFN0YXRlJ10oXG4gICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICBuZXdTdGF0ZS51cmxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChjb25maWcuaGFuZGxlU2Nyb2xsUmVzdG9yYXRpb24pIHNhdmVTY3JvbGxQb3NpdGlvbigpXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDBcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCA9IDBcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxhc3RTdGF0ZSA9IG5ld1N0YXRlXG4gICAgICB9KVxuICAgIH0sXG4gICAgZ2V0UmVkdWNlcjogKCkgPT4ge1xuICAgICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgICB1cmw6ICFjb25maWcuaW5lcnQgJiYgSEFTX1dJTkRPVyA/IGxvYy5ocmVmIDogJy8nLFxuICAgICAgICByZXBsYWNlOiBmYWxzZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ0BAcmVkdXgvSU5JVCcgJiYgdHlwZW9mIHN0YXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cmw6IHN0YXRlLFxuICAgICAgICAgICAgcmVwbGFjZTogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09IGFjdGlvblR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB1cmw6IHBheWxvYWQudXJsIHx8IHBheWxvYWQsXG4gICAgICAgICAgICByZXBsYWNlOiAhIXBheWxvYWQucmVwbGFjZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgfSxcbiAgICBkb1VwZGF0ZVVybCxcbiAgICBkb1JlcGxhY2VVcmwsXG4gICAgZG9VcGRhdGVRdWVyeSxcbiAgICBkb1VwZGF0ZUhhc2gsXG4gICAgc2VsZWN0VXJsUmF3LFxuICAgIHNlbGVjdFVybE9iamVjdCxcbiAgICBzZWxlY3RRdWVyeU9iamVjdCxcbiAgICBzZWxlY3RRdWVyeVN0cmluZyxcbiAgICBzZWxlY3RQYXRobmFtZSxcbiAgICBzZWxlY3RIYXNoLFxuICAgIHNlbGVjdEhhc2hPYmplY3QsXG4gICAgc2VsZWN0SG9zdG5hbWUsXG4gICAgc2VsZWN0U3ViZG9tYWluc1xuICB9XG59XG4iXX0=

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYnVnLmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLEtBQUEsSUFBUyxJQUFBLElBQVEsTUFBQSxJQUFVO0lBQ3hDLEtBQUEsQ0FBTSxVQUFVLEtBQUEsQ0FBTSxRQUFOLEVBQUEsQ0FBaUI7SUFFakMsSUFBSSxTQUFTO1FBQ1gsT0FBQSxDQUFRLEtBQVIsQ0FBYyxNQUFBLENBQU87UUFDckIsT0FBQSxDQUFRLElBQVIsQ0FBYSxXQUFXO0lBQzVCO0lBRUUsS0FBQSxDQUFNLFNBQVMsSUFBQSxDQUFLO0lBRXBCLElBQUksU0FBUztRQUNYLE9BQUEsQ0FBUSxLQUFSLENBQWMsVUFBVSxLQUFBLENBQU0sUUFBTjtRQUN4QixJQUFBLENBQUssWUFBTCxDQUFBLEVBQUEsQ0FBcUIsSUFBQSxDQUFLLFlBQUw7UUFDckIsSUFBQSxDQUFLLGVBQUwsQ0FBQSxFQUFBLENBQXdCLElBQUEsQ0FBSyxlQUFMO1FBQ3hCLE9BQUEsQ0FBUSxRQUFSLENBQWlCLE1BQUEsQ0FBTztJQUM1QjtJQUVFLE9BQU87QUFDVDtBQWxCQSIsImZpbGUiOiJkZWJ1Zy5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBzdG9yZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gIGNvbnN0IGlzRGVidWcgPSBzdG9yZS5nZXRTdGF0ZSgpLmRlYnVnXG5cbiAgaWYgKGlzRGVidWcpIHtcbiAgICBjb25zb2xlLmdyb3VwKGFjdGlvbi50eXBlKVxuICAgIGNvbnNvbGUuaW5mbygnYWN0aW9uOicsIGFjdGlvbilcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IG5leHQoYWN0aW9uKVxuXG4gIGlmIChpc0RlYnVnKSB7XG4gICAgY29uc29sZS5kZWJ1Zygnc3RhdGU6Jywgc3RvcmUuZ2V0U3RhdGUoKSlcbiAgICBzZWxmLmxvZ1NlbGVjdG9ycyAmJiBzZWxmLmxvZ1NlbGVjdG9ycygpXG4gICAgc2VsZi5sb2dOZXh0UmVhY3Rpb24gJiYgc2VsZi5sb2dOZXh0UmVhY3Rpb24oKVxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoYWN0aW9uLnR5cGUpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iXX0=

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQ0E7Z0JBRVo7WUFDQTtZQUVNLE9BQUEsQ0FBUSxjQUFSLENBQXVCLG1CQUFtQjtZQUMxQyxLQUFBLENBQU0sVUFBTjtZQUNBLEtBQUEsQ0FBTSxZQUFOO1lBQ0EsS0FBQSxDQUFNLFdBQU47WUFDQSxPQUFBLENBQVEsUUFBUjtZQUNBLElBQUksS0FBQSxDQUFNLFlBQVk7Z0JBQ3BCLE9BQUEsQ0FBUSxHQUFSLENBQVksb0JBQUEsR0FBdUI7WUFDM0M7UUFDQTtJQUNBOztBQXRGQSIsImZpbGUiOiJkZWJ1Zy5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJ1xuaW1wb3J0IHsgSEFTX0RFQlVHX0ZMQUcgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCBkZWJ1Z01pZGRsZXdhcmUgZnJvbSAnLi4vbWlkZGxld2FyZS9kZWJ1ZydcblxuY29uc3QgRU5BQkxFID0gJ0RFQlVHX0VOQUJMRUQnXG5jb25zdCBESVNBQkxFID0gJ0RFQlVHX0RJU0FCTEVEJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdkZWJ1ZycsXG4gIHJlZHVjZXI6IChzdGF0ZSA9IEhBU19ERUJVR19GTEFHLCB7IHR5cGUgfSkgPT4ge1xuICAgIGlmICh0eXBlID09PSBFTkFCTEUpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGlmICh0eXBlID09PSBESVNBQkxFKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlXG4gIH0sXG4gIGRvRW5hYmxlRGVidWc6ICgpID0+ICh7IHR5cGU6IEVOQUJMRSB9KSxcbiAgZG9EaXNhYmxlRGVidWc6ICgpID0+ICh7IHR5cGU6IERJU0FCTEUgfSksXG4gIHNlbGVjdElzRGVidWc6IHN0YXRlID0+IHN0YXRlLmRlYnVnLFxuICBnZXRNaWRkbGV3YXJlOiAoKSA9PiBkZWJ1Z01pZGRsZXdhcmUsXG4gIGluaXQ6IHN0b3JlID0+IHtcbiAgICBpZiAoc3RvcmUuc2VsZWN0SXNEZWJ1ZygpKSB7XG4gICAgICBjb25zdCBuYW1lcyA9IHN0b3JlLm1ldGEuY2h1bmtzWzBdLmJ1bmRsZU5hbWVzXG4gICAgICBzZWxmLnN0b3JlID0gc3RvcmVcbiAgICAgIGNvbnN0IGFjdGlvbkNyZWF0b3JzID0gW11cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHN0b3JlKSB7XG4gICAgICAgIGlmIChrZXkuaW5kZXhPZignZG8nKSA9PT0gMCkge1xuICAgICAgICAgIGFjdGlvbkNyZWF0b3JzLnB1c2goa2V5KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhY3Rpb25DcmVhdG9ycy5zb3J0KClcbiAgICAgIGNvbnN0IGNvbG9yVGl0bGUgPSAnY29sb3I6ICMxNjc2RDI7J1xuICAgICAgY29uc3QgYmxhY2sgPSAnY29sb3I6IGJsYWNrOydcbiAgICAgIGNvbnN0IGNvbG9yR3JlZW4gPSAnY29sb3I6ICM0Q0FGNTA7J1xuICAgICAgY29uc3QgY29sb3JPcmFuZ2UgPSAnY29sb3I6ICNGNTdDMDA7J1xuXG4gICAgICBzdG9yZS5sb2dTZWxlY3RvcnMgPSBzZWxmLmxvZ1NlbGVjdG9ycyA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzdG9yZS5zZWxlY3RBbGwpIHJldHVyblxuICAgICAgICBjb25zb2xlLmxvZygnJWNzZWxlY3RvcnM6JywgY29sb3JHcmVlbiwgc3RvcmUuc2VsZWN0QWxsKCkpXG4gICAgICB9XG5cbiAgICAgIHN0b3JlLmxvZ0J1bmRsZXMgPSBzZWxmLmxvZ0J1bmRsZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICclY2luc3RhbGxlZCBidW5kbGVzOlxcbiAgJWMlcycsXG4gICAgICAgICAgY29sb3JUaXRsZSxcbiAgICAgICAgICBibGFjayxcbiAgICAgICAgICBuYW1lcy5qb2luKCdcXG4gICcpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgc3RvcmUubG9nQWN0aW9uQ3JlYXRvcnMgPSBzZWxmLmxvZ0FjdGlvbkNyZWF0b3JzID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCclY2FjdGlvbiBjcmVhdG9ycycsIGNvbG9yT3JhbmdlKVxuICAgICAgICBhY3Rpb25DcmVhdG9ycy5mb3JFYWNoKG5hbWUgPT4gY29uc29sZS5sb2cobmFtZSkpXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxuICAgICAgfVxuXG4gICAgICBzdG9yZS5sb2dSZWFjdG9ycyA9IHNlbGYubG9nUmVhY3RvcnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJyVjcmVhY3RvcnMnLCBjb2xvck9yYW5nZSlcbiAgICAgICAgY29uc3QgeyByZWFjdG9yTmFtZXMgfSA9IHN0b3JlLm1ldGFcbiAgICAgICAgcmVhY3Rvck5hbWVzLmZvckVhY2gobmFtZSA9PiBjb25zb2xlLmxvZyhuYW1lKSlcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpXG4gICAgICB9XG5cbiAgICAgIHN0b3JlLmxvZ05leHRSZWFjdGlvbiA9IHNlbGYubG9nTmV4dFJlYWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IG5leHRSZWFjdGlvbiwgYWN0aXZlUmVhY3RvciB9ID0gc3RvcmVcbiAgICAgICAgaWYgKG5leHRSZWFjdGlvbikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgYCVjbmV4dCByZWFjdGlvbjpcXG4gICVjJHthY3RpdmVSZWFjdG9yfWAsXG4gICAgICAgICAgICBjb2xvck9yYW5nZSxcbiAgICAgICAgICAgIGJsYWNrLFxuICAgICAgICAgICAgbmV4dFJlYWN0aW9uXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJyVjcmVkdXggYnVuZGxlcicsIGNvbG9yVGl0bGUpXG4gICAgICBzdG9yZS5sb2dCdW5kbGVzKClcbiAgICAgIHN0b3JlLmxvZ1NlbGVjdG9ycygpXG4gICAgICBzdG9yZS5sb2dSZWFjdG9ycygpXG4gICAgICBjb25zb2xlLmdyb3VwRW5kKClcbiAgICAgIGlmIChzdG9yZS5pc1JlYWN0aW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAlY3F1ZXVpbmcgcmVhY3Rpb246YCwgY29sb3JPcmFuZ2UpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ubGluZS5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUyx3QkFBeUI7QUFFbEMsS0FBQSxDQUFNLFVBQVU7QUFDaEIsS0FBQSxDQUFNLFNBQVM7QUFFZixlQUFlO0lBQ2IsTUFBTSxRQURPLENBQUE7SUFFYixnQkFBZ0IsS0FBQSxJQUFTLEtBQUEsQ0FBTSxNQUZsQixDQUFBO0lBR2IsVUFBVSxLQUFBLEdBQVEsSUFBTSxFQUFBLENBQUUsT0FBakIsR0FBNEI7UUFDbkMsSUFBSSxJQUFBLENBQUEsR0FBQSxDQUFTO1lBQVMsT0FBTztRQUM3QixJQUFJLElBQUEsQ0FBQSxHQUFBLENBQVM7WUFBUSxPQUFPO1FBQzVCLE9BQU87SUFDWCxDQVBlLENBQUE7SUFRYixNQUFNLEtBQUEsSUFBUztRQUNiLGlCQUFBLENBQWtCLGFBQVUsR0FBTSxLQUFBLENBQU0sUUFBTixDQUFlO1lBQUUsTUFBTTs7UUFDekQsaUJBQUEsQ0FBa0IsY0FBVyxHQUFNLEtBQUEsQ0FBTSxRQUFOLENBQWU7WUFBRSxNQUFNOztJQUM5RDs7QUFoQkEiLCJmaWxlIjoib25saW5lLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZEdsb2JhbExpc3RlbmVyIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IE9GRkxJTkUgPSAnT0ZGTElORSdcbmNvbnN0IE9OTElORSA9ICdPTkxJTkUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ29ubGluZScsXG4gIHNlbGVjdElzT25saW5lOiBzdGF0ZSA9PiBzdGF0ZS5vbmxpbmUsXG4gIHJlZHVjZXI6IChzdGF0ZSA9IHRydWUsIHsgdHlwZSB9KSA9PiB7XG4gICAgaWYgKHR5cGUgPT09IE9GRkxJTkUpIHJldHVybiBmYWxzZVxuICAgIGlmICh0eXBlID09PSBPTkxJTkUpIHJldHVybiB0cnVlXG4gICAgcmV0dXJuIHN0YXRlXG4gIH0sXG4gIGluaXQ6IHN0b3JlID0+IHtcbiAgICBhZGRHbG9iYWxMaXN0ZW5lcignb25saW5lJywgKCkgPT4gc3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBPTkxJTkUgfSkpXG4gICAgYWRkR2xvYmFsTGlzdGVuZXIoJ29mZmxpbmUnLCAoKSA9PiBzdG9yZS5kaXNwYXRjaCh7IHR5cGU6IE9GRkxJTkUgfSkpXG4gIH1cbn1cbiJdfQ==

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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGFBQWE7QUFDcEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8seUJBQXlCO0FBQ2hDLE9BQU8seUJBQXlCO0FBQ2hDLE9BQU8sYUFBYTtBQUNwQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFdBQ0wscUJBQXFCLFdBQ2hCO0FBQ1AsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sV0FBVztBQUNsQixPQUFPLFlBQVk7QUFDbkIsT0FBQSxDQUFTLGdCQUFnQixpQkFBd0IsTUFBQTtBQUNqRCxjQUFjLFNBQUE7QUFDZCxjQUFjLE9BQUE7QUFFZCxPQUFPLEtBQUEsQ0FBTSxnQkFBZ0I7QUFDN0IsT0FBTyxLQUFBLENBQU0sbUJBQW1CO0FBQ2hDLE9BQU8sS0FBQSxDQUFNLG9CQUFvQjtBQUNqQyxPQUFPLEtBQUEsQ0FBTSxvQkFBb0I7QUFDakMsT0FBTyxLQUFBLENBQU0sNEJBQTRCO0FBQ3pDLE9BQU8sS0FBQSxDQUFNLHNCQUFzQjtBQUNuQyxPQUFPLEtBQUEsQ0FBTSxvQkFBb0I7QUFDakMsT0FBTyxLQUFBLENBQU0sZUFBZTtBQUM1QixPQUFPLEtBQUEsQ0FBTSxrQkFBa0I7QUFDL0IsT0FBTyxLQUFBLENBQU0sY0FBYztBQUMzQixPQUFPLEtBQUEsQ0FBTSxvQkFBb0I7QUFDakMsT0FBTyxLQUFBLENBQU0sMEJBQTBCO0FBQ3ZDLE9BQU8sS0FBQSxDQUFNLGtCQUFrQixHQUFHLGFBQUosR0FBb0I7SUFDaEQsV0FBQSxDQUFBLEVBQUEsRUFBZ0IsV0FBQSxDQUFBLENBQUEsQ0FBYztJQUM5QixLQUFBLENBQU0sVUFBVSxDQUNkLFFBQ0EsV0FDQSxPQUNBLEdBQUEsR0FDQSxRQUFBLEdBQ0EsTUFDQSxHQUFHO0lBRUwsT0FBTyxPQUFBLENBQVEsR0FBRztBQUNwQjtBQXpDQSIsImZpbGUiOiJpbmRleC5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwVGltZSBmcm9tICcuL2J1bmRsZXMvYXBwLXRpbWUnXG5pbXBvcnQgYXN5bmNDb3VudCBmcm9tICcuL2J1bmRsZXMvYXN5bmMtY291bnQnXG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UvaW5kZXgnXG5pbXBvcnQgY3JlYXRlUm91dGluZ0J1bmRsZSBmcm9tICcuL2J1bmRsZXMvY3JlYXRlLXJvdXRlLWJ1bmRsZSdcbmltcG9ydCBjcmVhdGVBc3luY1Jlc291cmNlIGZyb20gJy4vYnVuZGxlcy9jcmVhdGUtYXN5bmMtcmVzb3VyY2UtYnVuZGxlJ1xuaW1wb3J0IGNhY2hpbmcgZnJvbSAnLi9idW5kbGVzL2NyZWF0ZS1jYWNoZS1idW5kbGUnXG5pbXBvcnQgZ2VvbG9jYXRpb24gZnJvbSAnLi9idW5kbGVzL2NyZWF0ZS1nZW9sb2NhdGlvbi1idW5kbGUnXG5pbXBvcnQgcmVhY3RvcnMsIHtcbiAgZ2V0SWRsZURpc3BhdGNoZXIgYXMgaWRsZVxufSBmcm9tICcuL2J1bmRsZXMvY3JlYXRlLXJlYWN0b3ItYnVuZGxlJ1xuaW1wb3J0IHVybCBmcm9tICcuL2J1bmRsZXMvY3JlYXRlLXVybC1idW5kbGUnXG5pbXBvcnQgZGVidWcgZnJvbSAnLi9idW5kbGVzL2RlYnVnJ1xuaW1wb3J0IG9ubGluZSBmcm9tICcuL2J1bmRsZXMvb25saW5lJ1xuZXhwb3J0IHsgY3JlYXRlU2VsZWN0b3IsIHJlc29sdmVTZWxlY3RvcnMgfSBmcm9tICdjcmVhdGUtc2VsZWN0b3InXG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJ1xuZXhwb3J0ICogZnJvbSAncmVkdXgnXG5cbmV4cG9ydCBjb25zdCBhcHBUaW1lQnVuZGxlID0gYXBwVGltZVxuZXhwb3J0IGNvbnN0IGFzeW5jQ291bnRCdW5kbGUgPSBhc3luY0NvdW50XG5leHBvcnQgY29uc3QgY3JlYXRlQ2FjaGVCdW5kbGUgPSBjYWNoaW5nXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVCdW5kbGUgPSBjcmVhdGVSb3V0aW5nQnVuZGxlXG5leHBvcnQgY29uc3QgY3JlYXRlQXN5bmNSZXNvdXJjZUJ1bmRsZSA9IGNyZWF0ZUFzeW5jUmVzb3VyY2VcbmV4cG9ydCBjb25zdCBjcmVhdGVSZWFjdG9yQnVuZGxlID0gcmVhY3RvcnNcbmV4cG9ydCBjb25zdCBnZXRJZGxlRGlzcGF0Y2hlciA9IGlkbGVcbmV4cG9ydCBjb25zdCBvbmxpbmVCdW5kbGUgPSBvbmxpbmVcbmV4cG9ydCBjb25zdCBjcmVhdGVVcmxCdW5kbGUgPSB1cmxcbmV4cG9ydCBjb25zdCBkZWJ1Z0J1bmRsZSA9IGRlYnVnXG5leHBvcnQgY29uc3QgY29tcG9zZUJ1bmRsZXNSYXcgPSBjb21wb3NlXG5leHBvcnQgY29uc3QgY3JlYXRlR2VvbG9jYXRpb25CdW5kbGUgPSBnZW9sb2NhdGlvblxuZXhwb3J0IGNvbnN0IGNvbXBvc2VCdW5kbGVzID0gKC4uLnVzZXJCdW5kbGVzKSA9PiB7XG4gIHVzZXJCdW5kbGVzIHx8ICh1c2VyQnVuZGxlcyA9IFtdKVxuICBjb25zdCBidW5kbGVzID0gW1xuICAgIGFwcFRpbWUsXG4gICAgYXN5bmNDb3VudCxcbiAgICBvbmxpbmUsXG4gICAgdXJsKCksXG4gICAgcmVhY3RvcnMoKSxcbiAgICBkZWJ1ZyxcbiAgICAuLi51c2VyQnVuZGxlc1xuICBdXG4gIHJldHVybiBjb21wb3NlKC4uLmJ1bmRsZXMpXG59XG4iXX0=

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

})));
