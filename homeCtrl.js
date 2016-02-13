angular.module('devMtn').controller('homeCtrl', function($scope, profileService) {

  $scope.myProfile = profileService.checkForProfile();

  $scope.sortOptions = [{
    display: 'Ascending',
    value:true
  }];

  profileService.serviceTest();


  $scope.saveProfile = function(profile) {
    profileService.saveProfile(profile);
    $scope.editing = false;
  };

  $scope.deleteProfile = function(profile) {
    profileService.deleteProfile();
    $scope.myProfile = profileService.checkForProfile();
  };




});
