angular.module('module.app', ['remote.config', 'remote.http', 'request.register', 'request.reviews', 'request.vote'])

.controller('AppCtrl', ['$scope', 'register', 'reviews', 'vote', function ($scope, register, reviews, vote) {
  $scope.rateValue = 4;
  $scope.reviewsFrom = {
    everyone: '',
    readers: 'reader',
    critics: 'critic',
    editors: 'editor',
    librarians: 'librarian',
    bloggers: 'blogger'
  };

  $scope.selectedReviews = $scope.reviewsFrom.everyone;
  $scope.data = [];
  $scope.sortBy = '-helpful_count';

  $scope.changeReviews = function(id) {
    $scope.selectedReviews = id;
  }

  $scope.sendVote = function(id, isHelpful) {
    console.log(id);
    console.log(isHelpful);

    // VOTE
    vote.run(isHelpful ? 'helpful' : 'not_helpful', id).then(function(result) {
      console.log('OK');
      $scope.data.forEach(function(item) {
        if (item.id === id) {
          isHelpful ? ++item.helpful_count : ++item.not_helpful_count;
        }
      });
    }, function(err) {
      console.log(err);
    });
  }

  // REGISTER
  register.run("emai312312311l@email.com").then(function(result) {
    console.log(result);
  }, function(err) {
    console.log(err.data.errors[0]);
  }).finally(function() {

    // REVIEWS
    reviews.run().then(function(result) {
      console.log(result.data);
      $scope.data = result.data;
    }, function(err) {
      console.log(err);
    });

  });

}])
