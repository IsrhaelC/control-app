(function () {

    var myApp = angular.module('controlApp');
    myApp.config(function ($stateProvider, $urlRouterProvider) {

        var home = {
            name: 'home',
            url: '/home',
            templateUrl: 'templates/home.html',
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

        $urlRouterProvider.otherwise(function($injector) {
            var $state = $injector.get('$state');
            $state.go('home');
        });

        $stateProvider.state(home);
        $stateProvider.state(denuncia);
        $stateProvider.state(login);
        $stateProvider.state(ranking);
        $stateProvider.state(registro);

    });

}());