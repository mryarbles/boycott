import * as React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
//import DevTools from './DevToolsContainer';

//let rootClass;

/*class RootDev extends Component {

	constructor(props, context) {
		super(props);
	}

	render() {
		return (
				<Provider store={this.props.store}>
					<div>
						{this.props.children}
						//<DevTools />
					</div>
				</Provider>
		);
	}
}*/

class Root extends Component {

	constructor(props, context) {
		super(props);
	}

	render() {
		//const { store, history } = this.props;
		return (
				<Provider store={this.props.store}>
					{this.props.children}
				</Provider>
		);
	}
}

/*if (process.env.NODE_ENV === 'production') {
	rootClass = Root;
} else {
	// rootClass = RootDev;
	rootClass = RootProd;
}*/

export default Root;