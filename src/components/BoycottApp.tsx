import * as React from "react";
import { Component } from "react";
import * as ReactDOM from "react-dom";
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Panel from "./Panel";

export default class BoycottApp extends React.Component<any> {

	constructor(props: any, context?: any ) {
		super(props);
		console.log("BoycottApp", this.props);
	}

	getInitialState() {
		//return StepStore.getState();
		return {
			animationName: 'push',
		};
	}

	componentDidMount() {

	}

	componentWillUnmount() {
		// Lifecycle function that is triggered just before a component unmounts
	}

	render() {
		const { animationName } = this.state;
		return (
				<div>
					<CSSTransitionGroup transitionName={animationName}
					                    transitionEnterTimeout={300} transitionLeaveTimeout={300}>
						{/* Remove the below component and its children */}
						{/* and replace with your own */}

					</CSSTransitionGroup>
				</div>
		);
	}
}
