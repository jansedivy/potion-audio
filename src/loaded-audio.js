var PlayingAudio = require('./playing-audio');

var LoadedAudio = function(ctx, buffer, masterGain) {
  this._ctx = ctx;
  this._masterGain = masterGain;
  this._buffer = buffer;
  this._buffer.loop = false;
};

LoadedAudio.prototype.play = function() {
  var source = this._ctx.createBufferSource();
  source.buffer = this._buffer;

  var gain = this._ctx.createGain();
  source.connect(this._masterGain);
  this._masterGain.connect(gain);
  gain.connect(this._ctx.destination);

  source.start(0);

  return new PlayingAudio(source, gain);
};

LoadedAudio.prototype.loop = function() {
  var source = this._ctx.createBufferSource();
  source.buffer = this._buffer;

  var gain = this._ctx.createGain();
  source.connect(gain);
  gain.connect(this._ctx.destination);

  source.loop = true;
  source.start(0);

  return new PlayingAudio(source, gain);
};

module.exports = LoadedAudio;
