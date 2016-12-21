import 'babel-polyfill';
import * as React from "react";
import { Component } from "react";
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import './css/styles.scss';

const framework7 = require("framework7");



import BoycottApp from './components/BoycottApp';
import HomePage from './components/HomePage';
import  AboutPage from './components/AboutPage';
import FactsPage  from './components/FactsPage';

const rootElement = document.getElementById('root');

const jsx =
<Router history={browserHistory}>
	<Route path="/" component={BoycottApp}>
		<IndexRoute component={HomePage} />
		<Route path="/about" component={AboutPage}/>
		<Route path="/facts" component={FactsPage}/>
	</Route>
</Router>;

ReactDOM.render(jsx, rootElement);
