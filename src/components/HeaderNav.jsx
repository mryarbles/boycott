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
				<div class="navbar">
					<div class="navbar-inner">
						<div class="center sliding">Boycott Trump&lsquo;s States</div>
						<div class="right">
							<a href="#" class="link icon-only open-panel"><i class="icon icon-bars"></i></a>
						</div>
					</div>
				</div>
		);
	}
}