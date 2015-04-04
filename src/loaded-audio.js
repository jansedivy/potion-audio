var PlayingAudio = require('./playing-audio');

var LoadedAudio = function(ctx, buffer, masterGain) {
  this._ctx = ctx;
  this._masterGain = masterGain;
  this._buffer = buffer;
  this._buffer.loop = false;
};

LoadedAudio.prototype._createSound = function(gain) {
  var source = this._ctx.createBufferSource();
  source.buffer = this._buffer;

  this._masterGain.connect(this._ctx.destination);

  gain.connect(this._masterGain);

  source.connect(gain);

  return source;
};

LoadedAudio.prototype.play = function() {
  var gain = this._ctx.createGain();

  var sound = this._createSound(gain);

  sound.start(0);

  return new PlayingAudio(sound, gain);
};

LoadedAudio.prototype.fadeIn = function(value, time) {
  var gain = this._ctx.createGain();

  var sound = this._createSound(gain);

  gain.gain.setValueAtTime(0, 0);
  gain.gain.linearRampToValueAtTime(0.01, 0);
  gain.gain.linearRampToValueAtTime(value, time);

  sound.start(0);

  return new PlayingAudio(sound, gain);
};

LoadedAudio.prototype.loop = function() {
  var gain = this._ctx.createGain();

  var sound = this._createSound(gain);

  sound.loop = true;
  sound.start(0);

  return new PlayingAudio(sound, gain);
};

module.exports = LoadedAudio;
