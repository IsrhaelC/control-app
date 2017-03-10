/**
 * Created by isrhael.christian on 08/03/2017.
 */
(function () {

    var myApp = angular.module('controlApp');

    var RankingController = function ($scope, $state, HTTPRequestService) {
        var rk = this;

        rk.denuncias = [];

        rk.icones = {
            seg: 'assets/images/marcadores/siren.png',
            sau: 'assets/images/marcadores/hospital.png',
            edu: 'assets/images/marcadores/mortarboard.png',
            ace: 'assets/images/marcadores/access.png',
            wat: 'assets/images/marcadores/wate.png',
            ene: 'assets/images/marcadores/energy.png'
        };

        rk.categorias = [rk.icones.seg, rk.icones.sau, rk.icones.edu, rk.icones.ace, rk.icones.wat, rk.icones.ene];

        rk.loadDenuncias = function () {
            HTTPRequestService.getDenuncias().then(function (result) {
                rk.denuncias = result.data;
            }).catch(function (result) {
                var msg = result.message || 'Erro';
                alert(msg);
            });
        };

        rk.loadDenuncias();

        rk.city = "";

        var zoomMap;
        var map;
        var geocoder = new google.maps.Geocoder();
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


            map = new google.maps.Map(document.getElementById('map'), {
                zoom: zoomMap,
                center: myLatLng
            });

            for (var i = 0; i < rk.denuncias.length; i++){
                codeAddress(rk.denuncias[i], map);
            }

            /*
            var icone = 'assets/images/marcadores/hospital.png';
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hello World!',
                icon: icone
            });
            */
        }

        function codeAddress(denuncia, map) {
            var address = denuncia.end;
            geocoder.geocode( { 'address': address}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location,
                        title: denuncia.cat,
                        icon: rk.categorias[denuncia.cat]
                    });
                } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
        }

        rk.loadMap = function (city) {
            initMap(city);
        };


    };

    RankingController.$inject = ['$scope', '$state', 'HTTPRequestService'];

    myApp.controller('RankingController', RankingController);

}());