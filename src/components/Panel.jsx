import * as React from "react";
import { Component } from "react";
import PanelNav from "./PanelNav";

export default class Panel extends React.Component {

	/*static propTypes = {
		title: React.PropTypes.string.isRequired
	};*/

	constructor(props, context){
		super(props);
	}

	componentDidMount(){

	}

	render() {
		return (
				<div className="panel panel-left panel-reveal">
					<div className="content-block">
						<PanelNav />
					</div>
				</div>
		);
	}
}