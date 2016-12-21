/// <reference path="index.d.ts" />

import 'babel-polyfill';
import * as React from "react";
import { Component } from "react";
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import './css/styles.scss';



import BoycottApp from './components/BoycottApp';
import  AboutPage from './components/AboutPage';
import FactsPage  from './components/FactsPage';

const rootElement = document.getElementById('root');

ReactDOM.render(
		<Router history={browserHistory}>
			<Route path="/" component={BoycottApp} />
			<Route path="/about" component={AboutPage}/>
			<Route path="/facts" component={FactsPage}/>
		</Router>
		, rootElement);
