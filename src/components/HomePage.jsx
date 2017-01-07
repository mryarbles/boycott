import * as React from "react";
import { withRouter } from 'react-router';
import { connect } from 'react-redux'



export default class HomePage extends React.Component {

	static INTRO_VIEWED = false;

	constructor(props, context) {
		super(props);
	}

	componentDidMount() {

	}

	onEnter() {
		console.log("HomePage.onEnter");
		if(!HomePage.INTRO_VIEWED) {
			HomePage.INTRO_VIEWED = true;
			this.runIntro();
		} else {
			this.displayHome();
		}
	}

	/**
	 * Play the intro animation
	 */
	runIntro() {
		console.log("HomePage.runIntro");
	}

	/**
	 * Display the home page after animation if it plays
	 */
	displayHome() {

	}

	componentWillUnmount() {
		// Lifecycle function that is triggered just before a component unmounts
	}

	render() {
		return (
				<div>
					Home Page
				</div>
		);
	}
}
