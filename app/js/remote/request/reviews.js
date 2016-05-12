angular.module('request.reviews', [])

.factory('reviews', ['config', 'http', function (config, http) {
  var self = this;

  self.run = function()  {
    var req = config.reviews;

    function parserCallBack(result) {
      // Parse here!
      return result;
    }

    return http.run(req).then(parserCallBack);
  };

  return self;
}]);
