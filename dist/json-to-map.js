// Generated by CoffeeScript 1.10.0
(function() {
  var Map;

  Map = require('./map');

  module.exports = function(json) {
    var handler, map, name;
    map = Map();
    for (name in json) {
      handler = json[name];
      map.addHandler(name, handler);
    }
    return map;
  };

}).call(this);
