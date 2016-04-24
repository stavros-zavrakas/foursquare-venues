'use strict';

(function (win) {
  var levels = Object.freeze({
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3
  });

  var debugMode = true;
  var currentLevel = 0;

  function log(level, msg) {
    if (console && debugMode && level >= currentLevel) {
      console.log(msg);
    }
  }

  var logger = {
    debug: log.bind(this, levels.DEBUG),
    info: log.bind(this, levels.INFO),
    warn: log.bind(this, levels.WARN),
    error: log.bind(this, levels.ERROR)
  };

  logger.info('logger.js loaded');

  window.logger = logger;
}(window));
