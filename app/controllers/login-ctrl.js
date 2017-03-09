(function () {

    var myApp = angular.module('controlApp');

    var LoginController = function ($scope, $state, HTTPRequestService) {
        var lg = this;

        lg.users = [];

        lg.user = {};

        lg.loadUsers = function () {
            HTTPRequestService.getUsers().then(function (result) {
                lg.users = result.data;
            }).catch(function (result) {
                var msg = result.message || 'Erro';
                alert(msg);
            });
        };

        lg.loadUsers();

        var indexArray = -1;

        lg.loginUser = function () {
            for(var i = 0; i < lg.users.length; i++){
                if (lg.user.email == lg.users[i].email && lg.users[i].senha == lg.user.senha){
                    indexArray = i;
                }
            }
            if(indexArray != -1){
                lg.user = lg.users[indexArray];
                sessionStorage.user = JSON.stringify(lg.user);
                $state.go('home');
            }else {
                alert("Email e/ou Senha incorretas!");
            }
        };

    };

    LoginController.$inject = ['$scope', '$state', 'HTTPRequestService'];

    myApp.controller('LoginController', LoginController);

}());