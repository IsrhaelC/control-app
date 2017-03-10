/**
 * Created by isrhael.christian on 08/03/2017.
 */
(function () {

    var myApp = angular.module('controlApp');

    var RankingController = function ($scope, $state, HTTPRequestService) {
        var rk = this;

        rk.contSeg = 0;
        rk.contSau = 0;
        rk.contAce = 0;
        rk.contEdu = 0;
        rk.contEne = 0;
        rk.contWat = 0;

        rk.denuncias = [];

        rk.icones = {
            seg: 'assets/images/marcadores/siren.png',
            sau: 'assets/images/marcadores/hospital.png',
            edu: 'assets/images/marcadores/mortarboard.png',
            ace: 'assets/images/marcadores/access.png',
            wat: 'assets/images/marcadores/wate.png',
            ene: 'assets/images/marcadores/energy.png'
        };

        rk.descCat = {
            seg: 'Segurança',
            sau: 'Saúde',
            edu: 'Educação',
            ace: 'Acessibilidade',
            wat: 'Desperdício de Água',
            ene: 'Desperdício de Energia'
        };

        rk.titleCat = [rk.descCat.seg, rk.descCat.sau, rk.descCat.edu, rk.descCat.ace, rk.descCat.wat, rk.descCat.ene];

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

        rk.contDen = function () {
            for (var i = 0; i < rk.denuncias.length; i++){
                if (rk.denuncias[i].cat == 0){
                    rk.contSeg = rk.contSeg + 1;
                }
                if (rk.denuncias[i].cat == 1){
                    rk.contSau++;
                }
                if (rk.denuncias[i].cat == 2){
                    rk.contEdu++;
                }
                if (rk.denuncias[i].cat == 3){
                    rk.contAce++;
                }
                if (rk.denuncias[i].cat == 4){
                    rk.contWat++;
                }
                if (rk.denuncias[i].cat == 5){
                    rk.contEne++;
                }
            }
        };

        rk.contDen();

        rk.city = "";

        var zoomMap;
        var map;
        var geocoder = new google.maps.Geocoder();
        function initMap(city) {
            var myLatLng = {lat: -3.754358373922854, lng: -38.526137505078154};
            zoomMap = 12;

            map = new google.maps.Map(document.getElementById('map'), {
                zoom: zoomMap,
                center: myLatLng
            });

            for (var i = 0; i < rk.denuncias.length; i++){
                codeAddress(rk.denuncias[i], map, myLatLng);
            }
        }

        function codeAddress(denuncia, map, center) {
            var address = denuncia.end;
            geocoder.geocode( { 'address': address}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(center);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location,
                        title: rk.titleCat[denuncia.cat],
                        icon: rk.categorias[denuncia.cat]
                    });

                    var content = '<div class="card">' +
                        '<div class="card-block">' +
                        '<h4 class="card-title">' + rk.titleCat[denuncia.cat] + '</h4>' +
                        '<h6 class="card-subtitle mb-2 text-muted">' + address + '</h6>' +
                        '<p class="card-text">' + denuncia.desc + '</p>' +
                        '</div></div>';
                    var infowindow = new google.maps.InfoWindow({
                        content: content
                    });
                    marker.addListener('click', function() {
                        infowindow.open(map, marker);
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