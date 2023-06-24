import { productReducer } from './product.reducer.js'
class Store {
	state = {}
	subscribes = []

	constructor(reducer) {
		this.reducer = reducer
	}

	// Define a function named 'getState' that belongs to the prototype of an object.
	// This function returns the current state of the object.
	getState() {
		return this.state
	}

	/**
	 * This function is responsible for dispatching actions to all the reducers.
	 * It loops through all the reducer functions, passing the current state and action to each one,
	 * and then updates the state with the new state returned by each reducer.
	 * Finally, it calls all the subscribed callback functions.
	 * @param {Object} action - The action to be dispatched to the reducers.
	 */
	dispatch(action) {
		// Loop through all the reducers
		for (const reducerName in this.reducer) {
			// Get the reducer function
			const reducer = this.reducer[reducerName]
			// Call the reducer function with the current state and action to get the new state
			const newState = reducer(this.state[reducerName], action)
			// Update the state with the new state returned by the reducer
			this.state[reducerName] = newState
		}
		// Call all the subscribed callback functions
		this.subscribes.forEach((cb) => cb())
	}

	/**
	 * This method adds a new function to a list of subscribers that will be triggered
	 * every time this event is emitted.
	 *
	 * @param {function} callBack - The function to be added as a subscriber.
	 */
	subscribe(callBack) {
		// Add the new subscriber function to the list of subscribers.
		this.subscribes.push(callBack)
	}
}

export const store = new Store({ products: productReducer })
