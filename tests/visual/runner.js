define(function(require) {
    var dust = require('dustjs-component');
    var text = require('text');
    var tests = require('text!tests.dust');
    require('stencil-spec/spec.template');
    require('stencil-rating-scale/rating-scale.template');

    // Load and compile this component’s dust templates:
    require('../../product-tile.template');

    // Define any context required for the tests:
    var context = {
        repo: 'https://github.com/mobify/stencil-product-tile',
        product: {
            title: 'Product Name',
            photo: {
                src: 'http://placehold.it/400x520',
                alt: 'Product Name'
            },
            regularPrice: '$18.99'
        }
    };

    // Render
    dust.renderSource(tests, context, function(err, out) {
        if (!err) {
            document.querySelector('body').innerHTML = out;
        } else {
            console.log(err);
        }
    });
});
