import * as React from "react";
import { Component } from "react";
import { Link } from "react-router";

export default class HeaderNav extends React.Component {

	constructor(props, context){
		super(props);
		this.state = {};
	}

	componentDidMount(){

	}

	render() {
		return (
				<div className="navbar">
					<div className="navbar-inner">
						<div className="center sliding">Boycott Trump&lsquo;s States</div>
						<div className="right">
							<a href="#" className="link icon-only open-panel"><i className="icon icon-bars"></i></a>
						</div>
					</div>
				</div>
		);
	}
}