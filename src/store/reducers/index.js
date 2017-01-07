import { combineReducers } from 'redux'

import quotesReducer from "./QuotesReducer";

const rootReducer = combineReducers({
	quotesReducer
});

export default rootReducer;