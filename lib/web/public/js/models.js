'use strict';

(function (win, requestor, logger) {
  logger.info('models.js loaded');

  var req = new requestor();
    
  function Foursquare(opts) {
    opts = opts || {};

    this.endpoint = opts.endpoint || 'https://api.foursquare.com/v2';
    this.version = opts.version || 20160424;
  }

  Foursquare.prototype.getSearch = function (query, callback) {
    query = query || {};

    var params = {
      near: query.near,
      oauth_token: query.oauth_token, // jshint ignore:line
      v: this.version
    };

    var endpoint = this.endpoint + '/venues/search';

    req.get(endpoint, params, callback);
  };

  win.fqModels = {
    foursquare: Foursquare
  };
}(window, window.fqRequestor, window.fqLogger));
