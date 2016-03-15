# gulp-ccr-pipe

Pipe stream generated from first child task to others. A cascading configurable gulp recipe for [gulp-chef](https://github.com/gulp-cookery/gulp-chef).

## Install

``` bash
$ npm install --save-dev gulp-chef gulp-ccr-pipe
```

## Recipe

Pipe Streams

## Ingredients

* [stream.Readable.pipe()](https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options)

## Type

[Stream Processor](https://github.com/gulp-cookery/gulp-chef#writing-stream-processor)

## Usage

``` javascript
var gulp = require('gulp');
var chef = require('gulp-chef');

var meals = chef({
    'incremental-rebuilding': {
        src: 'js/',
        dest: 'js/',
        pipe: {
            '.cached': {
                plugin: 'gulp-cached',
                src: '*.js'
            },
            '.uglify': {
                plugin: 'gulp-uglify'
            },
            '.remember': {
                plugin: 'gulp-remember'
            },
            '.concat': {
                plugin: 'gulp-concat',
                options: 'app.js',
                spit: true
            }
        }
    }
});

gulp.registry(meals);
```

## License
[MIT](https://opensource.org/licenses/MIT)

## Author
[Amobiz](https://github.com/amobiz)
