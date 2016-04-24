'use strict';

(function (win, logger) {
  logger.debug('renderer.js loaded');

  function errorFlashMessage (msg) {
    var template = '<div class="alert alert-danger">';
    // template += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
    template += '<strong>Error!</strong> %s1';
    template += '</div>';

    template = template.replace('%s1', msg);

    return template;
  }

  function buildVenueTile(name, address) {
    var template = '<a href="#" class="list-group-item">';
    template += '<h4 class="list-group-item-heading">%s1</h4>';
    template += '<p class="list-group-item-text">%s2</p>';
    template += '</a>';

    template = template.replace('%s1', name).replace('%s2', address);

    return template;
  }

  win.fqRenderer = {
    errorFlashMessage: errorFlashMessage,
    buildVenueTile: buildVenueTile
  };
}(window, window.fqLogger));
