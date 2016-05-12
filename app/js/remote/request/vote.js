angular.module('request.vote', [])

.factory('vote', ['config', 'http', function (config, http) {
  var self = this;

  self.run = function(voteName, id)  {
    var req = config.vote;
    req.url = config.baseURL + "api/reviews/" + id + "/vote";
    req.data.type = voteName;

    function parserCallBack(result) {
      // Parse here!
      return result;
    }

    return http.run(req).then(parserCallBack);
  };

  return self;
}]);
