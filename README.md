# Potion Audio

Abstraction above loading and playing sound, used in [Potion](https://github.com/jansedivy/potion) game engine

## Installation

- `npm install potion-audio`

## Usage

```javascript
var PotionAudio = require('potion-audio');

var potionAudio = new PotionAudio();

potionAudio.load('/music/file.wav', function(audio) {
  // Simple
  audio.play();

  // Looping
  audio.loop();

  // stopping immediately
  var current = audio.play();
  current.stop();

  // setting volume
  var current = audio.play();
  current.setVolume(0.5); // makes the volume 2x more quiet
});
```

### API

---

#### Audio object

this is returned when audio file is loaded

#### Methods

##### .play()

Starts playing the audio file from the start

**returns** PlayingAudio object

##### .loop()

Starts looping the audio file from the start

**returns** PlayingAudio object

---

#### PlayingAudio object

This object is created when you start playing audio file

#### Methods

##### .stop()

Stops the audio

##### .setVolume(volume)

**volume** - positive number which sets the volume

Sets volume of the currently played audio

---

## License

[MIT license](http://opensource.org/licenses/mit-license.php)
