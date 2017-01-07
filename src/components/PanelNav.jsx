import * as React from "react";
import { Component } from "react";
import  NavLink  from "./NavLink";

export default class PanelNav extends React.Component {

	constructor(props, context){
		super(props);
		this.state = {};
	}

	componentDidMount(){

	}

	handleClick(e) {
		console.log("PanelNav.handleClick", e);
	}

	handleTouchTap(e){
		console.log("PanelNav.handleTouchTap");
	}

	render() {
		return (
				<div className="panel panel-left panel-reveal panel-nav">
					<div className="content-block">
						<ul className="no-bullets">
							<li><NavLink to="/" >Home</NavLink></li>
							<li><NavLink to="about" >About</NavLink></li>
							<li><NavLink to="facts" >Facts</NavLink></li>
							<li><NavLink to="who-said-it" >Who Said It?</NavLink></li>
						</ul>
					</div>
				</div>
		);
	}
}