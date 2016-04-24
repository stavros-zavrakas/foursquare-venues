(function (win, $, logger) {

  logger.info('events.js loaded');

  function init() {
    var $location = $('.her-location');
    var $error = $('.her-error');
    var $results = $('.her-results');

    $('.her-search').click(function (e) {
      e.preventDefault();

      logger.debug('searhing for: ' + $location.val());
    });
  }

  window.fqEvents = {
    init: init
  };

}(window, jQuery, window.fqLogger));
