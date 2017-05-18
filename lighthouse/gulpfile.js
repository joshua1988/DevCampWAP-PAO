var gulp = require('gulp');
var lighthouse = require('lighthouse');
var ChromeLauncher = require('lighthouse/lighthouse-cli/chrome-launcher').ChromeLauncher;
var perfConfig = require('lighthouse/lighthouse-core/config/perf.json');
var PORT = 8080;

gulp.task('lighthouse', function() {
  chromeLauncher = new ChromeLauncher();

  return chromeLauncher.run().then(function() {
    startServer();
    return runLighthouse()
      .then(handleOk)
      .catch(handleError);
  });
});

var startServer = function() {
  return connect.server({
    root: '/',
    livereload: true,
    port: PORT
  });
};

var stopServer = function() {
  connect.serverClose();
  chromeLauncher.kill();
  chromeLauncher = null;
};

var runLighthouse = function() {
  var url = `http://localhost:${PORT}/index.html`;
  var lighthouseOptions = {}; // available options - https://github.com/GoogleChrome/lighthouse/#cli-options
  return lighthouse(url, lighthouseOptions, perfConfig);
};

var handleOk = function(results) {
  stopServer();
  console.log(results); // eslint-disable-line no-console
  // TODO: use lighthouse results for checking your performance expectations.
  // e.g. process.exit(1) or throw Error if score falls below a certain threshold.
  return results;
};

var handleError = function(e) {
  stopServer();
  console.error(e); // eslint-disable-line no-console
  throw e; // Throw to exit process with status 1.
};
