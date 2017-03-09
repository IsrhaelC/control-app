/**
 * Created by isrhael.christian on 08/03/2017.
 */
(function () {

    var myApp = angular.module('controlApp');

    var RankingController = function ($scope, $state) {
        var rk = this;

        var denuncias = [{_id: 1, }];

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


            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: zoomMap,
                center: myLatLng
            });

            var icone = 'assets/images/marcadores/hospital.png';
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hello World!',
                icon: icone
            });
        }
        
        function converteEndereco(endereco, categoria) {
            geocoder.geocode({'address': endereco}, function (resultado, status) {
                if(status == google.maps.GeocoderStatus.OK){
                    var marcador = {
                        latitude: resultado[0].geometry.location.k,
                        longitude: resultado[0].geometry.location.D,
                        titulo: 'Novo Marcador',
                        imagem: avaliacao
                    }
                    
                }
            })
        };

        var marcadores = [];

        var criaMarcador = function (marcador, mapa) {
            var posicao = new google.maps.LatLng(marcador.latitude, marcador.longitude);
            var opcoes = {
                position: posicao,
                title: marcador.titulo,
                animation: google.maps.Animation.DROP,
                icon: 'assets/images/marcadores/' + marcador.imagem,
                map: mapa
            }
            var novoMarcador = new google.maps.Marker(opcoes);
            marcadores.push(novoMarcador);
            map.setCenter(novoMarcador.position);
        };

        function adiciona() {
            var marcador = {
                latidute: '',
                longitude: '',
                titulo: 'Novo MArcador',
                imagem: ''
            }
            criaMarcador(marcador, map);
        }

        rk.loadMap = function (city) {
            initMap(city);
        };


    };

    RankingController.$inject = ['$scope', '$state'];

    myApp.controller('RankingController', RankingController);

}());