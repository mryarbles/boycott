import ActionTypes from "./ActionTypes";

export default function quotesLoadedAction(quotesArray) {
	return {
		type: ActionTypes.QUOTES_LOADED,
		payload: quotesArray
	}
}