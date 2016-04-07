function respawnedplayer( event ){
  var playerwhorespawned = event.player;
var utils = require('utils');
var players = utils.players();
for (var i = 0;i < players.length; i++) { 
  echo(players[i], playerwhorespawned + 'is ready for action again, and revenge!'); 
}
}
events.PlayerRespawnedHook( respawnedplayer );