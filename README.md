# Potion Audio

Abstraction above loading and playing sound, used in [Potion](https://github.com/jansedivy/potion) game engine

## Installation

### Browserify

- `npm install potion-audio`

## Usage

```javascript
var PotionAudio = require('potion-audio');

var potionAudio = new PotionAudio();

potionAudio.load('/music/file.wav', function(audio) {
  audio.play();
});
```

## License

[MIT license](http://opensource.org/licenses/mit-license.php)
