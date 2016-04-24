'use strict';

(function (win, $, models, renderer, utils, logger) {

  logger.info('events.js loaded');

  function init() {
    var $location = $('.her-location');
    var $error = $('.her-error');
    var $results = $('.her-results');

    $('.her-search').click(function (e) {
      e.preventDefault();

      $results.html('');
      $error.html('');

      var location = $location.val();

      var foursquare = new models.foursquare();

      var query = {
        near: location,
        oauth_token: 'Y2CRTQ21QSNSV0OK0EYF0I3XE2TNAXLGJA4Z4ASUPEJCX4ZG' // jshint ignore:line
      };

      logger.debug('searhing for: ' + location);
      foursquare.getSearch(query, function (res) {
        if (!res || !res.response) {
          var errDom = renderer.errorFlashMessage('Unable to retrieve venues for: ' + location);
          return $error.append(errDom);
        }

        var venues = res.response.venues;

        venues.forEach(function (venue) {
          var locStr = utils.buildLocationStr(venue.location);
          var tile = renderer.buildVenueTile(venue.name, locStr);
          $results.append(tile);
        });

      });
    });
  }

  win.fqEvents = {
    init: init
  };

}(window, jQuery, window.fqModels, window.fqRenderer, window.fqUtils, window.fqLogger));
