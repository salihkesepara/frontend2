angular.module('remote.config', [])

.factory('config', [function () {
  var self = this;
  self.baseURL = 'http://vngrs-challenge.herokuapp.com/';

  self.register = {
    method: 'POST',
    url:  self.baseURL + "api/applications",
    data: {
      client: ''
    }
  };

  self.reviews = {
    method: 'GET',
    url:  self.baseURL + "api/reviews",
    headers: {
      'X-client_id': localStorage.getItem("client_id")
    }
  };

  self.vote = {
    method: 'POST',
    url:  self.baseURL + "api/reviews/:id/vote",
    headers: {
      'X-client_id': localStorage.getItem("client_id")
    },
    data: {
      type: ''
    }
  };

  return self;
}]);
