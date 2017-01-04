import * as React from "react";
import { Component } from "react";
import * as ReactDOM from "react-dom";
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Panel from "./Panel";
import HeaderNav from "./HeaderNav";

const framework7 = require("framework7");

export default class BoycottApp extends React.Component {

	constructor(props, context) {
		super(props);
		console.log("BoycottApp", this.props);
		this.state = {};
	}

	componentDidMount() {
		const f7Config = {
			root:".root",
			cache: true,
			fastClicks: true,
			activeState: true,
			router: false,
			swipePanel: "left",
			hideNavbarOnPageScroll: true,
			showBarsOnPageScrollEnd: true,
			showBarsOnPageScrollTop: true
		};
		let myApp = new Framework7();
		let $$ = Dom7;

		let mainView = myApp.addView('.view-main');
	}

	componentWillUnmount() {
		// Lifecycle function that is triggered just before a component unmounts
	}

	render() {

		return (
				<div className="bt-app">
					<div className="statusbar-overlay"></div>
					<div className="panel-overlay"></div>
					<Panel/>
					<div className="views">
						<div className="view view-main">
							<div className="pages navbar-fixed">
								<div className="page">
									<HeaderNav />
									<div className="page-content">
										{this.props.children}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}
