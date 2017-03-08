/**
 * Created by isrhael.christian on 08/03/2017.
 */
(function () {

    var myApp = angular.module('controlApp');

    var RankingController = function ($scope, $state) {
        var rk = this;

        rk.city = "";

        var zoomMap;
        var map;
        function initMap(city) {
            var myLatLng = {};
            if(city === 1) {
                myLatLng = {lat: -3.754358373922854, lng: -38.526137505078154};
                zoomMap = 12;
            }
            if(city === 3) {
                myLatLng = {lat: -23.59601297646384, lng: -46.61589856523437};
                zoomMap = 10;
            }
            if(city === 2) {
                myLatLng = {lat: -4.970646729199938, lng: -39.01524432222902};
                zoomMap = 15;
            }
            if(city === 4) {
                myLatLng = {lat: -22.947696482048823, lng: -43.26053640361328};
                zoomMap = 12;
            }



            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: zoomMap,
                center: myLatLng
            });
            /*
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hello World!'
            });
            */
        }

        rk.loadMap = function (city) {
            initMap(city);
        };

    };

    RankingController.$inject = ['$scope', '$state'];

    myApp.controller('RankingController', RankingController);

}());