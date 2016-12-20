import React from "react";
import ReactDOM from "react-dom";
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Panel from "./Panel";

export class BoycottApp extends React.Component {
	getInitialState() {
		//return StepStore.getState();
		return {
			animationName: 'push',
		}
	}

	constructor(props) {
		super(props);
		console.log("BoycottApp", this.props);
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
						<Hello />
					</CSSTransitionGroup>
				</div>
		);
	}
}
