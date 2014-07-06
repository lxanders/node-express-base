'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        clean: {
            dependencies: ['node_modules']
        },

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

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('compile', ['clean:build']);
    grunt.registerTask('server', ['nodemon']);
    grunt.registerTask('default', ['server']);
};

