import * as React from "react";

export class Panel extends React.Component {

	/*static propTypes = {
		title: React.PropTypes.string.isRequired
	};*/

	constructor(props){
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