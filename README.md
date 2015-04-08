# Potion Audio

Abstraction above loading and playing sound, used in [Potion](https://github.com/jansedivy/potion) game engine

## Documentation

- [API](/docs)

## Installation

- `npm install potion-audio`

## Usage

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

### API

#### Manager

Main object for loading sound files

#### Methods

##### .load(url, callback)

Loads audio file

**url** - which file to load

**callback** - function which is called when the file is loaded, function is called with **Audio object** as the first argument

##### .setVolume(volume)

Sets master volume

**volume** - positive number which sets the volume

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

##### .fadeIn(volume, time)

Starts playing audio from the start, but slowly fades in volume

**volume** - target volume
**time** - total time in which the volume is slowly changed

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
