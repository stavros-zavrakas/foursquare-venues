(function (win, $, requestor, logger) {

  logger.info('events.js loaded');

  function init() {
    var $location = $('.her-location');
    var $error = $('.her-error');
    var $results = $('.her-results');

    $('.her-search').click(function (e) {
      e.preventDefault();

      var endpoint = 'https://api.foursquare.com/v2/venues/search';
      var query = {
        near: $location.val(),
        oauth_token: 'Y2CRTQ21QSNSV0OK0EYF0I3XE2TNAXLGJA4Z4ASUPEJCX4ZG',
        v: 20160424
      };

      var req = new requestor();

      logger.debug('searhing for: ' + $location.val());
      req.get(endpoint, query, function (res) {
        logger.info(res);
      });
    });
  }

  window.fqEvents = {
    init: init
  };

}(window, jQuery, window.fqRequestor, window.fqLogger));
