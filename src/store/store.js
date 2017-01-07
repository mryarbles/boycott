import { createStore } from 'redux'
import rootReducer from './reducers';
//import DevTools from '../containers/DevToolsContainer';

let store;
let initialState = {};

if (process.env.NODE_ENV === 'production') {
	store = createStore(
			rootReducer,
			initialState
	);
} else {
	store = createStore(
			rootReducer,
			initialState,
			//DevTools.instrument()
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
}

export default store;
