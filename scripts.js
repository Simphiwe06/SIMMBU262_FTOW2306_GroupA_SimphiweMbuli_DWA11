/**
 * Represents different action types for the counter.
 * @readonly
 * @enum {string}
 */
const ActionTypes = {
    ADD: "ADD", // Represents the action type for incrementing the counter.
    SUBTRACT: "SUBTRACT", // Represents the action type for decrementing the counter.
    RESET: "RESET", // Represents the action type for resetting the counter.
  };
  
  /**
   * Action creator function for incrementing the counter.
   * @returns {Object} An action object with the type set to ActionTypes.ADD.
   */
  const add = () => ({ type: ActionTypes.ADD });
  
  /**
   * Action creator function for decrementing the counter.
   * @returns {Object} An action object with the type set to ActionTypes.SUBTRACT.
   */
  const subtract = () => ({ type: ActionTypes.SUBTRACT });
  
  /**
   * Action creator function for resetting the counter.
   * @returns {Object} An action object with the type set to ActionTypes.RESET.
   */
  const reset = () => ({ type: ActionTypes.RESET });
  
  /**
   * Reducer function to handle state changes based on dispatched actions.
   * @param {number} state - The current state of the counter.
   * @param {Object} action - The action object containing the type property.
   * @returns {number} The updated state based on the action type.
   */
  const reducer = (state = 0, action) => {
    switch (action.type) {
      case ActionTypes.ADD:
        return state + 1;
      case ActionTypes.SUBTRACT:
        return state - 1;
      case ActionTypes.RESET:
        return 0;
      default:
        return state;
    }
  };
  
  /**
   * Custom Redux store implementation.
   * @param {Function} reducer - The reducer function that handles state changes.
   * @returns {Object} An object containing the getState, dispatch, and subscribe methods.
   */
  const createStore = (reducer) => {
    let state = 0;
    const listeners = [];
  
    /**
     * Retrieves the current state of the counter.
     * @returns {number} The current state of the counter.
     */
    const getState = () => state;
  
    /**
     * Dispatches an action to the store, updating the state accordingly.
     * @param {Object} action - The action object to be dispatched.
     */
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    };
  
    /**
     * Subscribes to the changes in the store.
     * @param {Function} listener - The function to be executed when the state changes.
     */
    const subscribe = (listener) => {
      listeners.push(listener);
    };
  
    return { getState, dispatch, subscribe };
  };
  
  // Create the store using the custom createStore function and the reducer.
  const store = createStore(reducer);
  
  // Dispatch actions and log the state changes to the console.
  store.subscribe(() => console.log(store.getState()));
  
  store.dispatch(add()); // Increment the counter by one
  store.dispatch(add()); // Increment the counter by one
  store.dispatch(subtract()); // Decrement the counter by one
  store.dispatch(reset()); // Resetting the Tally Counter
  