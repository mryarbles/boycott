import { createStore } from 'redux'
import app from './reducers/AppReducer';
let store = createStore(app);

export default store;