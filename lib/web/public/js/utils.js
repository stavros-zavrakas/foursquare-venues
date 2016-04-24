'use strict';

(function (win, logger) {
  logger.debug('utils.js loaded');

  function buildLocationStr(location) {
    var arr = [];

    if (location.address) {
      arr.push(location.address);
    }

    if (location.city) {
      arr.push(location.city);
    }

    if (location.postalCode) {
      arr.push(location.postalCode);
    }

    if (location.country) {
      arr.push(location.country);
    }

    return arr.join(', ');
  }

  win.fqUtils = {
    buildLocationStr: buildLocationStr
  };
}(window, window.fqLogger));
