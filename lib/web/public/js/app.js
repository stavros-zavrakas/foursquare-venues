'use strict';

(function ($, events, logger) {

  logger.info('app.js loaded');

  // @todo: implement models, utils, renderer, logger
  $(document).ready(function () {
    events.init();
  });

}(jQuery, window.fqEvents, window.fqLogger));
