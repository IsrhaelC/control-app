/**
 * Created by isrhael.christian on 08/03/2017.
 */
(function () {

    var myApp = angular.module('controlApp');

    var DenunciaController = function ($scope, $state) {
        var dn = this;

        dn.denuncia = {};

        dn.realizarDenuncia = function () {
            alert(dn.denuncia.end)
        };

        var input = document.getElementById('endereco');
        var options = {
            componentRestrictions: {country: 'br'},
            types: ['address']
        };

        autocomplete = new google.maps.places.Autocomplete(input, options);

    };

    DenunciaController.$inject = ['$scope', '$state'];

    myApp.controller('DenunciaController', DenunciaController);

}());