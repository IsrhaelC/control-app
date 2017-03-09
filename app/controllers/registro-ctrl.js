(function () {

    var myApp = angular.module('controlApp');

    var RegistroController = function ($scope, $state, HTTPRequestService) {
        var rg = this;

        rg.user = {};

        var input = document.getElementById('cid-user');
        var options = {
            types: ['(cities)'],
            componentRestrictions: {country: 'br'}
        };

        autocomplete = new google.maps.places.Autocomplete(input, options);

        //Método que cadastra um usuário
        rg.registerUser = function () {

            HTTPRequestService.postUser(rg.user).then(function(result) {
                $state.go('login');
            }).catch(function(result) {
                var msg = result.message || 'Erro';
                alert(msg);
            });
        };

    };

    RegistroController.$inject = ['$scope', '$state', 'HTTPRequestService'];

    myApp.controller('RegistroController', RegistroController);

}());