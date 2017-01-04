import { combineReducers } from 'redux'

import quotesReducer from "./QuotesReducer";

const app = combineReducers({
	quotesReducer
});

export default app;