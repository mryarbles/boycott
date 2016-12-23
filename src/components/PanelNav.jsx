import * as React from "react";
import { Component } from "react";
import { Link } from "react-router";

export default class PanelNav extends React.Component {

	constructor(props, context){
		super(props);
		this.state = {};
	}

	componentDidMount(){

	}

	handleClick(e) {
		console.log("PanelNav.handleClick");
	}

	handleTouchTap(e){
		console.log("PanelNav.handleTouchTap");
	}

	render() {
		return (
				<div className="panel panel-left panel-reveal">
					<div className="content-block">
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/facts">Facts</Link></li>
						</ul>
					</div>
				</div>
		);
	}
}