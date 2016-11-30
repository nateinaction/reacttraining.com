var axios = require('axios');

var id = "YOUR_CLIENT_ID",
		sec = "YOUR_SECRET_ID",
		param = "?client_id=" + id + "&client_secret=" + sec;


function getUserInfo(username) {
	return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
	getPlayerInfo: function(players) {
		return axios.all(players.map(username => {
			return getUserInfo(username)
		})).then(info => {
			return info.map(user => {
				return user.data;
			})
		}).catch(err => {
			console.warn('Error in getPlayersInfo', err)
		})
	}
};

module.exports = helpers;