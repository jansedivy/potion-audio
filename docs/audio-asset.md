# API: `Audio Asset`

Object which represents audio file "template". Could be played multiple times
at once. When its played it returns [Playing audio](/docs/playing-audio.md) object

Methods
-------

### 'play()'

Starts playing the audio file. Returns [Playing audio](/docs/playing-audio.md) object. Which is used for controlling that specific instance of the audio.

### 'fadeIn(value, time)'

Gradually increases volume to `value` over `time`. Starts playing the audio file. Returns [Playing audio](/docs/playing-audio.md) object. Which is used for controlling that specific instance of the audio.

### 'loop()'

Starts playing the audio file in loop. Returns [Playing audio](/docs/playing-audio.md) object. Which is used for controlling that specific instance of the audio.

