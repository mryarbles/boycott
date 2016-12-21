import * as React from "react";
import { Component } from "react";

export default class Panel extends React.Component {

	/*static propTypes = {
		title: React.PropTypes.string.isRequired
	};*/

	constructor(props:any, context?:any){
		super(props);
	}

	componentDidMount(){

	}

	render() {
		return (
				<div className="panel panel-left panel-reveal">
					<div className="content-block">
						<p>Left panel content goes here</p>
					</div>
				</div>
		);
	}
}