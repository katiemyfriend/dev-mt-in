angular.module('devMtn').service('profileService', function($http) {

  var baseUrel = 'http://connections.devmounta.in/';

  this.serviceTest = function() {
    console.log('profileService is connected');
  }

  this.saveProfile = function(profile) {
    return $http({
      method: 'POST',
      url: baseUrl + 'api/profiles',
      data: profile
    }).then(function(profileResponse) {
      localStorage.setItem('profileId', JSON.stringify( {
        profileId: profileResponse.data._id
      }))
    })
    .catch(function(err) {
      console.error(err);
    });
  }

  this.checkForProfile = function(profileId) {
    return $http({
      method: 'GET',
      url: baseUrl + 'api/profiles/' + profileId
    });
  }

  this.deleteProfile = function() {
    var profileId = JSON.parse(localStorage.getItem('profileId')).profileId;

    return $http({
      method: 'DELETE',
      url: baseUrl + 'api/profiles/' + profileId
    });
  }

});
