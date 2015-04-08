# API: `Playing audio`

Instance is created every time you play audio. Its used for controlling that specific audio that is played.

Methods
-------

### 'setVolume(volume)'

Sets volume to `volume`.

#### Example

```javascript
var playing = sound.play();
playing.setVolume(0.5);
```

### 'stop()'

Stops currently played audio.

#### Example

```javascript
var playing = sound.play();
playing.stop();
```
