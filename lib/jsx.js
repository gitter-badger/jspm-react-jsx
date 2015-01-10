var react = require('react/JSXTransformer');

exports.translate = function(load) {
  var output = react.transform(load.source);
  load.source = output.code;
  load.metadata.sourceMap = output.sourceMap;
};