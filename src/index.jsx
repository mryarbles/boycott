import 'babel-polyfill';
import * as React from "react";
import { Component } from "react";
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from "react-tap-event-plugin";


import BoycottApp from './components/BoycottApp';
import HomePage from './components/HomePage';
import  AboutPage from './components/AboutPage';
import FactsPage  from './components/FactsPage';

import './css/styles.scss';



// Initialize app
const frameworkApp = new Framework7();

const rootElement = document.getElementById('root');

console.log("Boycott Trump");

// ignore click events if they are immediately preceeded by a click event.
injectTapEventPlugin({
	shouldRejectClick: function (lastTouchEventTimestamp, clickEventTimestamp) {
		return true;
	}
});

const jsx =
<Router history={browserHistory}>
	<Route path="/" component={BoycottApp}>
		<IndexRoute component={HomePage} />
		<Route path="/about" component={AboutPage}/>
		<Route path="/facts" component={FactsPage}/>
	</Route>
</Router>;

ReactDOM.render(jsx, rootElement);
