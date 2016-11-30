var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
	getInitialState: function() {
		return {
			isLoading: true,
			scores: []
		}
	},
	componentDidMount: function() {
		githubHelpers.battle(this.props.location.state.playersInfo)
			.then(scores => {
				this.setState({
					isLoading: false,
					scores: scores
				})
			});
	},
	render: function () {
		return (
      <Results
      	isLoading={this.state.isLoading}
      	playersInfo={this.props.location.state.playersInfo}
      	scores={this.state.scores} />
    )
	}
});

module.exports = ResultsContainer;