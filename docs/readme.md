# Potion Audio API

- [`Manager`](/docs/manager.md)
- [`Audio asset`](/docs/audio-asset.md)
- [`Playing audio`](/docs/playing-audio.md)

### Example

```javascript
var PotionAudio = require('potion-audio');

var manager = new PotionAudio();

manager.setVolume(0.5); // Lowers master volume

master.mute();
master.unmute();
master.toggleMute();

master.unmute();

manager('/music/file.wav', function(audio) {
  // Simple
  audio.play();

  // Looping
  audio.loop();

  // Fading
  audio.fadeIn(1, 2); // sets volume to 1 over 2 seconds

  // Stopping immediately
  var current = audio.play();
  current.stop();

  // Setting volume
  var current = audio.play();
  current.setVolume(0.5); // makes the volume 2x more quiet
});
```
