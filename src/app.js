var AudioManager = require('./audio-manager');

var manager = new AudioManager();

manager.load('/music/music.mp3', function(audio) {
  // audio.start();
});
