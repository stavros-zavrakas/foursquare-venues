'use strict';

(function (win, $, logger) {
  logger.info('requestor.js loaded');

  // @todo: implement the post, put and delete when needed
  function Rest(opts) {
    this.opts = opts || {};

    this.opts.timeout = this.opts.timeout || 1000;
    this.opts.dataType = this.opts.dataType || 'json';
  }

  Rest.prototype.get = function (endpoint, query, callback) {
    if (!endpoint) {
      throw new TypeError('endpoint is mandatory param', 'requestor.js');
    }

    if (typeof query === 'function') {
      callback = query;
      query = null; 
    }

    var request = $.ajax({
      url: endpoint,
      method: 'GET',
      data: query,
      timeout: this.opts.timeout,
      dataType: this.opts.dataType
    });

    request.done(callback);

    request.fail(function (jqXHR, textStatus) {
      logger.debug('Request failed: ' + textStatus);
      callback({
        jqXHR: jqXHR,
        textStatus: textStatus
      });
    });
  };

  Rest.prototype.post = function () {

  };

  Rest.prototype.put = function () {

  };

  Rest.prototype.delete = function () {

  };

  win.fqRequestor = Rest;
}(window, jQuery, window.fqLogger));
