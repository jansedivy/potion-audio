var LoadedAudio = require('./loaded-audio');

var AudioManager = function() {
  var AudioContext = window.AudioContext || window.webkitAudioContext;

  this.ctx = new AudioContext();
};

AudioManager.prototype.load = function(url, callback) {
  var self = this;

  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
  request.onload = function() {
    self.decodeAudioData(request.response, function(source) {
      callback(source);
    });
  };
  request.send();
};

AudioManager.prototype.decodeAudioData = function(data, callback) {
  var self = this;

  this.ctx.decodeAudioData(data, function(result) {
    var audio = new LoadedAudio(self.ctx, result);

    callback(audio);
  });
};

module.exports = AudioManager;
