var PlayingAudio = function(source, gain) {
  this._gain = gain;
  this._source = source;
};

PlayingAudio.prototype.setVolume = function(volume) {
  this._gain.gain.value = volume;
};

PlayingAudio.prototype.stop = function() {
  this._source.stop(0);
};

PlayingAudio.prototype.loop = function() {
  this._source.loop = true;
};

module.exports = PlayingAudio;
