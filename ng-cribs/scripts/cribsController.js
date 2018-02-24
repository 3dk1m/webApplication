angular
    .module('ngCribs')
    .controller('cribsController', function ($scope, cribsFactory) {

        $scope.hello = cribsFactory.getHelloWorld();
        $scope.cribs = cribsFactory.getCribs();

    });