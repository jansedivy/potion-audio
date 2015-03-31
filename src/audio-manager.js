var LoadedAudio = require('./loaded-audio');

var AudioManager = function() {
  var AudioContext = window.AudioContext || window.webkitAudioContext;

  this.ctx = new AudioContext();
  this.masterGain = this.ctx.createGain();
  this._volume = 1;

  var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
  if (iOS) {
    this._enableiOS();
  }
};

AudioManager.prototype._enableiOS = function() {
  var self = this;

  var touch = function() {
    var buffer = self.ctx.createBuffer(1, 1, 22050);
    var source = self.ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(self.ctx.destination);
    source.start(0);

    window.removeEventListener('touchstart', touch, false);
  };

  window.addEventListener('touchstart', touch, false);
};

AudioManager.prototype.setVolume = function(volume) {
  this._volume = volume;
  this.masterGain.gain.value = volume;
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
    var audio = new LoadedAudio(self.ctx, result, self.masterGain);

    callback(audio);
  });
};

module.exports = AudioManager;
