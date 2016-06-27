'use strict';

angular.module('upliftApp')
  .controller('OrganizationsCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: 'https://blooming-cove-33951.herokuapp.com/organizations'
    })
    .then(function successCallback(response) {
      console.log(response);
      $scope.organization = response.data[0];
      // $scope.orgs_arr = response.organizations;
      // $scope.first_org = $scope.orgs_arr[0];
      // $scope.events = response.events;
      // $scope.eventsForOrg = $scope.getEventsByOrg($scope.events, 1);
    }, function errorCallback(response) {

    });
});