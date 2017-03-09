(function () {
    var myApp = angular.module('controlApp');

    var HTTPRequestService = function ($http) {

        this.getUsers = function () {
            var url = "http://localhost:3000/contatos";
            return $http.get(url);
        };

        this.postUser = function (user) {
            var url = "http://localhost:3000/contatos";
            return $http.post(url, user);
        };

        this.getDenuncias = function () {
            var url = "http://localhost:3000/denuncia";
            return $http.get(url);
        };

        this.postDenuncia = function (denuncia) {
            var url = "http://localhost:3000/denuncia";
            return $http.post(url, denuncia);
        };
    };

    HTTPRequestService.$inject = ['$http'];
    myApp.service('HTTPRequestService', HTTPRequestService);

}());