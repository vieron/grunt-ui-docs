/*
 * grunt-ui-docs
 * https://github.com/vieron/grunt-ui-docs
 *
 * Copyright (c) 2014 vieron
 * Licensed under the MIT license.
 */

'use strict';

var UIDocs = require('ui-docs');
var _ = require('underscore');

module.exports = function(grunt) {

    var defaults = {
        devServerPort: 3000,
        devServer: false,
        assetsPathMap: false,
        // assetsPathMap: ['/static', 'assets/']
    };


    grunt.registerMultiTask('ui_docs', 'Generate CSS Documentation', function() {
        var uidocs = new UIDocs(this.data);
        uidocs.run();
        grunt.log.writeln('\UI Docs generated!');

        var data = _.extend({}, defaults, this.data);
        if (data.devServer) {
            var done = this.async();
            var path = require('path');
            var connect = require('connect');
            var serveStatic = require('serve-static');
            var directory = path.join(data.docsPath);
            var port = data.devServerPort || 3000;

            grunt.log.writeln('\nRunning dev server...');

            // Create server
            var server = connect();
            server.use('/', serveStatic(directory, {'index': ['index.html']}));

            if (data.assetsPathMap) {
                var assetsPath = path.join(directory, data.assetsPathMap[1]);
                server.use(data.assetsPathMap[0], serveStatic(assetsPath));
            }

            server.listen(port);

            grunt.log.writeln('\nDev server listening on: http://localhost:' + port);
            grunt.log.writeln('Press `Ctr + C` to kill process');
        }

    });
};