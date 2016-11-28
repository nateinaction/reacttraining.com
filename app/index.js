/*
	React components should be: 
	[F]ocused
	[I]ndependent
	[R]eusable
	[S]mall
	[T]estable
*/

var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes')

ReactDom.render(
	routes,
	document.getElementById('app')
);

