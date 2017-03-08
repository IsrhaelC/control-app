/**
 * Created by isrhael.christian on 08/03/2017.
 */
(function () {

    var myApp = angular.module('controlApp');

    var DenunciaController = function ($scope, $state) {
        var dn = this;

        dn.denuncia = {};

        dn.realizarDenuncia = function () {
            alert(dn.denuncia.cat)
        }

    };

    DenunciaController.$inject = ['$scope', '$state'];

    myApp.controller('DenunciaController', DenunciaController);

}());