/**
 * Created by isrhael.christian on 08/03/2017.
 */
(function () {

    var myApp = angular.module('controlApp');

    var DenunciaController = function ($scope, $state, HTTPRequestService) {
        var dn = this;

        dn.denuncia = {};

        dn.isLog = function () {
            if(sessionStorage.length == 0){
                return false;
            }else {
                return true;
            }
        };

        dn.realizarDenuncia = function () {
            HTTPRequestService.postDenuncia(dn.denuncia).then(function (result) {
                $state.go('ranking');
            }).catch(function (result) {
               var msg = result.message || 'Erro';
               alert(msg);
            });
        };

        var input = document.getElementById('endereco');
        var options = {
            componentRestrictions: {country: 'br'},
            types: ['address']
        };

        autocomplete = new google.maps.places.Autocomplete(input, options);

    };

    DenunciaController.$inject = ['$scope', '$state', 'HTTPRequestService'];

    myApp.controller('DenunciaController', DenunciaController);

}());