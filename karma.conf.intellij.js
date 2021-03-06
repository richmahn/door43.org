'use strict';

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine-jquery', 'jasmine'],

        files: [
            './js/jquery.min.js',
            './js/jquery-ui.min.js',
            './js/bootstrap/bootstrap.min.js',
            './js/underscore.min.js',
            './js/moment.min.js',
            './js/general-tools.js',
            './js/project-page-functions.js',
            './js/i18n.js',

            // served fixtures
            { pattern: 'test/fixtures/**/*.html', included: false, served: true },

            './test/spec/*.js'
        ],

        // coverage reporter generates the coverage
        reporters: ['coverage'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            './js/general-tools.js': 'coverage',
            './js/project-page-functions.js': 'coverage',
            './js/application.js': 'coverage',
            './js/i18n.js': 'coverage'
        },

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    })
};
