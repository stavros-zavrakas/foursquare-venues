'use strict';

(function ($, logger) {

  logger.info('app.js loaded');

  // @todo: implement models, utils, renderer, logger
  $(document).ready(function () {
    var $location = $('.her-location');
    var $error = $('.her-error');
    var $results = $('.her-results');

    $('.her-search').click(function (e) {
      e.preventDefault();

      logger.debug('searhing for: ' + $location.val());
    });
  });

}(jQuery, window.logger));
