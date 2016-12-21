import * as React from "react";
import { Component } from "react";
import * as ReactDOM from "react-dom";
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Panel from "./Panel";

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
					{this.props.children}
						{/* Remove the below component and its children */}
						{/* and replace with your own */}
				</div>
		);
	}
}
