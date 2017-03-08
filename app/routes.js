(function () {

    var myApp = angular.module('controlApp');
    myApp.config(function ($stateProvider) {

        var home = {
            name: 'home',
            url: '/home',
            templateUrl: 'templates/home.html'
        };

        var denuncia = {
            name: 'denuncia',
            url: '/denuncia',
            templateUrl: 'templates/denuncia.html',
            controller: 'DenunciaController as dn'
        };

        var login = {
            name: 'login',
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController as lg'
        };

        var ranking = {
            name: 'ranking',
            url: '/ranking',
            templateUrl: 'templates/ranking.html',
            controller: 'RankingController as rk'
        };

        var registro = {
            name: 'registro',
            url: '/registro',
            templateUrl: 'templates/registro.html',
            controller: 'RegistroController as rg'
        };

        $stateProvider.state(home);
        $stateProvider.state(denuncia);
        $stateProvider.state(login);
        $stateProvider.state(ranking);
        $stateProvider.state(registro);

    });

}());