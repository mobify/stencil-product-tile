/**
 * Loader for the component’s  Dust templates, found in root
 */
define(function(require) {
    var dust = require('dustjs-component');
    var text = require('text');
    var ratingScale = require('text!./product-tile.dust');

    dust.loadSource(dust.compileComponent(ratingScale, 'product-tile'));
});
