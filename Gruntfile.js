'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        nodemon: {
            development: {
                script: 'index.js',
                ignore: [
                    'test/**',
                    'node_modules/**',
                    'client/**'
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('compile', ['clean:build']);
    grunt.registerTask('server', ['nodemon']);
    grunt.registerTask('default', ['server']);
};

