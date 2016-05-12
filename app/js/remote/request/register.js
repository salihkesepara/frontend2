angular.module('request.register', [])

.factory('register', ['config', 'http', function (config, http) {
  var self = this;

  self.run = function(email)  {
    var req = config.register;
    req.data.client = {
      "email": email
    };

    function parserCallBack(result) {
      // Parse here!
      localStorage.setItem("client_id", result.data.client_id);
      return result;
    }

    return http.run(req).then(parserCallBack);
  };

  return self;
}]);
