'use strict';

var helper = require('gulp-ccr-stream-helper')('pipe');

/**
 * Recipe:
 * 	Stream Pipe
 *
 * Ingredients:
 * 	stream.pipe()
 *
 * @config 針對本 task 的 configuration。
 * @tasks 傳入的子 tasks 為 configurableTask，是尚未綁定 config 的 task 形式。
 *
 */
function pipe() {
	var gulp = this.gulp;
	var config = this.config;
	var tasks = this.tasks;

	var i, n, stream, context;

	helper.prerequisite(this, true, 1);

	stream = this.upstream;
	for (i = 0, n = tasks.length; i < n; ++i) {
		context = {
			gulp: gulp,
			config: config,
			upstream: stream
		};
		stream = helper.runTask(context, tasks[i]);
	}
	return stream;
}

pipe.expose = [];

pipe.schema = {
	title: 'pipe',
	description: 'Pipe stream generated from first child task to others.',
	properties: {
	}
};

pipe.type = 'stream';

module.exports = pipe;
