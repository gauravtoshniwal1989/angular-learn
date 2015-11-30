// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    basePath : "../../",

    // logLevel : config.LOG_DEBUG,

    files: [
        'bower_components/underscore/underscore.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'app/app.js',
        'app/services/*.js',
        'app/controllers/*.js',
        'app/tests/unit/*.js'
    ]
  });
};