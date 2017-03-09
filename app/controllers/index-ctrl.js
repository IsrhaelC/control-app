(function () {

    var myApp = angular.module('controlApp');

    var IndexController = function ($state) {
        var ic = this;

        ic.isLog = function () {
            if(sessionStorage.length == 0){
                return false;
            }else {
                return true;
            }
        };

        ic.logout = function () {
            sessionStorage.clear();
        };
    };

    IndexController.$inject = ['$state'];

    myApp.controller('IndexController', IndexController);

}());