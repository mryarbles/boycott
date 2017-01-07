import 'babel-polyfill';
import * as React from "react";
import {Component} from "react";
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {AppContainer} from 'react-hot-loader';
import injectTapEventPlugin from "react-tap-event-plugin";

import Root from './containers/Root';
import store from "./store/store";
import BoycottApp from './components/BoycottApp';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import FactsPage  from './components/FactsPage';
import WhoSaidItPage  from './components/WhoSaidItPage';



import './css/styles.scss';

// Initialize app
const frameworkApp = new Framework7();

const rootElement = document.getElementById('root');

// ignore click events if they are immediately preceeded by a click event.
injectTapEventPlugin({
	shouldRejectClick: function (lastTouchEventTimestamp, clickEventTimestamp) {
		return true;
	}
});

const jsx =
		<Root store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={BoycottApp}>
					<IndexRoute component={HomePage}/>
					<Route path="about" component={AboutPage}/>
					<Route path="facts" component={FactsPage}/>
					<Route path="who-said-it" component={WhoSaidItPage}/>
				</Route>
			</Router>
		</Root>;

ReactDOM.render(jsx, rootElement);
