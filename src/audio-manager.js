var util = require('util');
var LoadedAudio = require('./loaded-audio');

var AudioManager = function() {
  var AudioContext = window.AudioContext || window.webkitAudioContext;

  this._ctx = new AudioContext();
  this._masterGain = this._ctx.createGain();
  this._volume = 1;
  this.isMuted = false;

  var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
  if (iOS) {
    this._enableiOS();
  }
};

AudioManager.prototype._enableiOS = function() {
  var self = this;

  var touch = function() {
    var buffer = self._ctx.createBuffer(1, 1, 22050);
    var source = self._ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(self._ctx.destination);
    source.start(0);

    window.removeEventListener('touchstart', touch, false);
  };

  window.addEventListener('touchstart', touch, false);
};

AudioManager.prototype.mute = function() {
  this.isMuted = true;
  this._updateMute();
};

AudioManager.prototype.unmute = function() {
  this.isMuted = false;
  this._updateMute();
};

AudioManager.prototype.toggleMute = function() {
  this.isMuted = !this.isMuted;
  this._updateMute();
};

AudioManager.prototype._updateMute = function() {
  this._masterGain.gain.value = this.isMuted ? 0 : this._volume;
};

AudioManager.prototype.setVolume = function(volume) {
  this._volume = volume;
  this._masterGain.gain.value = volume;
};

AudioManager.prototype.load = function(url, callback) {
  var loader = {
    done: function() {},
    error: function() {},
    progress: function() {}
  };

  if (callback && util.isFunction(callback)) {
    loader.done = callback;
  } else {
    if (callback.done) {
      loader.done = callback.done;
    }

    if (callback.error) {
      loader.error = callback.error;
    }

    if (callback.progress) {
      loader.progress = callback.progress;
    }
  }

  var self = this;

  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  request.addEventListener('progress', function(e) {
    loader.progress(e);
  });

  request.onload = function() {
    self.decodeAudioData(request.response, function(source) {
      loader.done(source);
    });
  };
  request.send();
};

AudioManager.prototype.decodeAudioData = function(data, callback) {
  var self = this;

  this._ctx.decodeAudioData(data, function(result) {
    var audio = new LoadedAudio(self._ctx, result, self._masterGain);

    callback(audio);
  });
};

module.exports = AudioManager;
