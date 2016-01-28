'use strict';

var helper = require('gulp-ccr-stream-helper')('pipe');

var schema = {
	title: 'pipe',
	description: 'Pipe stream generated from first child task to others.',
	properties: {
	}
};

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

module.exports = pipe;
module.exports.schema = schema;
module.exports.type = 'stream';
