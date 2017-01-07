import { QuotesEvent } from "../actions/quotesActions";
const _ = require("lodash");

const quotesInitialState = {
	isFetching: false,
	didInvalidate: false,
	items: []
};

let quotesReducer = function(state = quotesInitialState, action) {
	switch(action.type) {
		case QuotesEvent.QUOTES_LOAD_START:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: true
			});
		case QuotesEvent.QUOTES_LOAD_ERROR:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false
			});
		case QuotesEvent.QUOTES_LOAD_COMPLETE:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.quotes,
				lastUpdated: action.receivedAt
			});
		default:
			return state
	}
};

export default quotesReducer;