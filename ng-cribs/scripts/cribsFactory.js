angular
    .module('ngCribs')
    .factory('cribsFactory', function ($http) {

        var helloWorld = 'Hello World!';


        function _getCribs() {
            //mocking data with a json file under data folder.  usually this will have an endpoint where the data would come from
            return $http.get('data/data.json');
        }

        function _getHelloWorld() {
            return helloWorld;
        }

        return {
            getCribs: _getCribs,
            getHelloWorld: _getHelloWorld
        }

    });