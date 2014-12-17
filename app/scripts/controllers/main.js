'use strict';

/**
 * @ngdoc function
 * @name fotutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fotutorialApp
 */
angular.module('fotutorialApp')
	.controller('MainCtrl', function($rootScope) {
		new ol.Map({
			target: 'map',
			layers: [
				new ol.layer.Tile({
					title: 'Global Imagery',
					source: new ol.source.OSM()
				}),
				new ol.layer.Tile({
					source: new ol.source.TileWMS({
						projection: 'EPSG:3857',
						url: 'http://localhost:8080/geoserver/boundless/wms?service=WMS&version=1.1.0&request=GetMap&layers=boundless:KASE_DOF_WGS84&styles=&width=512&height=377&srs=EPSG:3857&format=image/png'
					}),
					crossOrigin: null
				})
			],
			view: new ol.View({
				center: ol.proj.transform([-98.218378, 40.598217], 'EPSG:4326', 'EPSG:3857'),
				zoom: 5
			})
		});

		$rootScope.signedin = false;
	});
