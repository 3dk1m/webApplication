angular
    .module('ngCribs')
    .controller('cribsController', function ($scope, cribsFactory) {

        $scope.hello = cribsFactory.getHelloWorld();
        $scope.cribs;

        $scope.priceInfo = {
            min: 0,
            max: 1000000
        }

        cribsFactory.getCribs()
            .then(function (data) {
                $scope.cribs = data.data;
                console.log($scope.cribs);
            }, function (error) {
                console.log(error)
            });

        $scope.sayHello = function () {
            console.log("Hello");
        }

        /*         cribsFactory.getCribs()
                    .then(function (data) {
                        $scope.cribs = data;
                        console.log($scope.cribs);
                        if (!data) 
                        console.log('error');
                    }); */

    });