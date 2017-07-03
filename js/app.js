var myApp = angular.module('myApp', ['angularSoundManager']);

myApp.controller('mainController', ['$scope', '$filter', '$http', '$sce', function ($scope, $filter, $http, $sce) {
    $scope.basefatrat_url =  'fat-rat-sound/'
    $scope.songs = initSong($scope.basefatrat_url);
    $scope.plusplus = function() {
         console.log(volume);
    }
}]);