angular
    .module('ngCribs')
    .factory('cribsFactory', function () {

        var helloWorld = 'Hello World!';
        var cribsData = [
            {
                "type": "Condo",
                "price": 220000,
                "address": "213 Ceder Lane",
                "description": "Excellent place, really nice view"
            },
            {
                "type": "House",
                "price": 410500,
                "address": "783 Winding Way",
                "description": "Excellent place, very large home"
            },
            {
                "type": "Duplex",
                "price": 395000,
                "address": "834 Ceder Lane",
                "description": "Excellent place, house is great for large family"
            }
        ];

        function _getCribs() {
            return cribsData;
        }

        function _getHelloWorld() {
            return helloWorld;
        }

        return {
            getCribs: _getCribs,
            getHelloWorld: _getHelloWorld
        }

    });