(function () {

    var myApp = angular.module('controlApp');

    var LoginController = function ($scope, $state) {
        var lg = this;

        lg.user = {
            name: "",
            email:"",
            senha:"",
            nasc:""
        };

        lg.users = [];

        lg.loginUser = function () {
            if(lg.user.email == 'isrhael@g.com' && lg.user.senha == '1234'){
                alert("Usuario Logado");
            }
        };

    };

    LoginController.$inject = ['$scope', '$state'];

    myApp.controller('LoginController', LoginController);

}());