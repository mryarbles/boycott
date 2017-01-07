import { connect } from 'react-redux'

const getQuote = (quotes) => {
	let l = quotes.length;
	let i = Math.floor(Math.random() * l);
	return quotes[i];
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAnotherClick: (id) => {
			dispatch(toggleTodo(id))
		}
	}
}


const mapStateToProps = (state) => {
	return {
		quote: getQuote(state.quotes)
	}
};

const QuoteContainer = connect(
		mapStateToProps,
		mapDispatchToProps
)(Quotes);

export default QuoteContainer