(function () {

    var myApp = angular.module('controlApp');
    myApp.config(function ($stateProvider, $urlRouterProvider) {

        var home = {
            name: 'home',
            url: '/home',
            templateUrl: 'templates/home.html'
        };

        var denuncia = {
            name: 'denuncia',
            url: '/denuncia',
            templateUrl: 'templates/denuncia.html'
        };

        var login = {
            name: 'login',
            url: '/login',
            templateUrl: 'templates/login.html'
        };

        var ranking = {
            name: 'ranking',
            url: '/ranking',
            templateUrl: 'templates/ranking.html'
        };

        var registro = {
            name: 'registro',
            url: '/registro',
            templateUrl: 'templates/registro.html'
        };

        $stateProvider.state(home);
        $stateProvider.state(denuncia);
        $stateProvider.state(login);
        $stateProvider.state(ranking);
        $stateProvider.state(registro);

    });

}());