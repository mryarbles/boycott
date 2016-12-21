import * as React from "react";
import { Component } from "react";

export default class AboutPage extends React.Component {

	constructor(props: any, context?: any ) {
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
					About
				</div>
		);
	}
}
