var React = require('react');
var transparentBG = require('../styles').transparentBG;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
	render: function () {
		return (
			<div className="jumbotron col-sm-12 text-center" style={transparentBG}>
				<h1>Github Battle</h1>
				<p className="lead">Some Fancy Moto</p>
				<Link to="/playerOne">
					<button type="button" className="btn btn-large btn-success">
						Get Started
					</button>
				</Link>
			</div>
		)
	}
});

module.exports = Home;