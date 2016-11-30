var React = require('react');

function ConfirmBattle(props) {
	if (props.isLoading) {
		return <p>Loading...</p>
	} else {
		return <p>Confirm Battle!</p>
	}
}

module.exports = ConfirmBattle;