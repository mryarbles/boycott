import * as React from "react";
import { Component } from "react";
import * as ReactDOM from "react-dom";
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Panel from "./Panel";
import HeaderNav from "./HeaderNav";

export default class BoycottApp extends React.Component {

	constructor(props, context) {
		super(props);
		console.log("BoycottApp", this.props);
		this.state = {};
	}

	componentDidMount() {

	}

	componentWillUnmount() {
		// Lifecycle function that is triggered just before a component unmounts
	}

	render() {

		return (
				<div>
					<Panel/>
					<div class="view view-main">
						<HeaderNav />
						<div class="pages navbar-through toolbar-through">
							<div class="page">
								<div class="page-content">
									{this.props.children}
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}
