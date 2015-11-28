# angular-learn

## Testing

### Unit Tests
To run the unit tests, first [install karma](http://karma-runner.github.io/0.8/intro/installation.html) and all bower components execute ```karma start app/tests/karma.conf.js --single-run```. That will log a URL in the CLI, which when opened will run the tests.

### E2E Tests
To run the E2E tests using protractor, [install protractor](https://angular.github.io/protractor/#/tutorial). Protractor config file is included in the project. Execute the tests via ```protractor app/tests/e2e/conf.js```