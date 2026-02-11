module.exports = {
  default: {
    require: [
      'step-definitions/**/*.js',
      'support/**/*.js'
    ],
    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ],
    parallel: 4,
    publishQuiet: true
  }
};