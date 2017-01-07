export const QuotesEvent = {
	QUOTES_LOAD_START: "onQuotesState",
	QUOTES_LOAD_COMPLETE: "onQuotesLoadComplete",
	QUOTES_LOAD_ERROR: "onQuotesLoadError"
};

export default function loadQuotesCompleteAction(quotesArray) {
	return {
		type: QuotesEvent.QUOTES_LOADED,
		payload: quotesArray
	}
}