import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui inverted segment">
				<form onSubmit={this.onFormSubmit} className="ui inverted form">
					<div className="field">
						<label>Image Search</label>
						<div class="ui inverted divider"></div>
						<div class="ui inverted left icon input">
							<input type="text" placeholder="Search..." />
							<i class="search icon"></i>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
export default SearchBar;
