import * as React from "react";
import { Component } from "react";

export default class Intro extends React.Component {
	getInitialState() {
		//return StepStore.getState();
		return {
			animationName: 'push',
		}
	}

	constructor(props) {
		super(props);

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
					Intro
				</div>
		);
	}
}
