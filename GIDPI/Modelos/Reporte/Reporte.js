﻿//var _0x4c0e = ['trustAsResourceUrl', 'http://localhost:61609/ReporteRcdl/VistaInforme.aspx?IdProyecto=', 'Regresar', '/Menu', '$scope', '$rootScope', '$location', 'CronogramaPresupuestoService', '$cookieStore', '$routeParams', 'proyecto', 'datos', 'log', 'url']; (function (_0x2463f5, _0x234440) { var _0x170c9e = function (_0x4b302e) { while (--_0x4b302e) { _0x2463f5['push'](_0x2463f5['shift']()); } }; _0x170c9e(++_0x234440); }(_0x4c0e, 0x162)); var _0xe4c0 = function (_0x1f5a4c, _0x58d114) { _0x1f5a4c = _0x1f5a4c - 0x0; var _0x2a668e = _0x4c0e[_0x1f5a4c]; return _0x2a668e; }; ManualApp['controller']('ReporteController', [_0xe4c0('0x0'), _0xe4c0('0x1'), _0xe4c0('0x2'), _0xe4c0('0x3'), '$cookies', _0xe4c0('0x4'), 'MenuService', _0xe4c0('0x5'), '$sce', function (_0x36f5d6, _0x2b1ba1, _0xc26ad6, _0x38dae4, _0x1f7b18, _0x2a3dd9, _0x15872a, _0x53c8c5, _0x4ef54c, _0xa29b0f) { var _0xd4c633 = _0x2b1ba1[_0xe4c0('0x6')][_0xe4c0('0x7')]['id']; console[_0xe4c0('0x8')](_0xd4c633); _0x36f5d6[_0xe4c0('0x9')] = _0x4ef54c[_0xe4c0('0xa')](_0xe4c0('0xb') + _0xd4c633); _0x36f5d6[_0xe4c0('0xc')] = function () { _0xc26ad6[_0xe4c0('0x9')](_0xe4c0('0xd')); }; }]);

ManualApp.controller('ReporteController',
    ['$scope', '$rootScope', '$location', 'CronogramaPresupuestoService', '$cookies', '$cookieStore', 'MenuService', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, CronogramaPresupuestoService, $cookies, $cookieStore, MenuService, $routeParams, $sce, $interval) {

            //$scope.reportServiceUrl = 'http://js.syncfusion.com/ejservices/api/ReportViewer';
            //$scope.remoteMode = ej.ReportViewer.ProcessingMode.Remote;
            //$scope.rdlReportPath = 'GroupingAgg.rdl';

            var IdProyecto = $rootScope.proyecto.datos.id;
            console.log(IdProyecto);
            $scope.url = $sce.trustAsResourceUrl('http://localhost:61609/ReporteRcdl/VistaInforme.aspx?IdProyecto=' + IdProyecto);

            //var IdProyecto = $rootScope.proyecto.datos.id;
            //console.log(IdProyecto);
            //$scope.url = $sce.trustAsResourceUrl('https://www.gidpi.com/ReporteRcdl/VistaInforme.aspx?IdProyecto=' + IdProyecto);

            $scope.Regresar = function () {
                $location.url("/Menu");
            }

     
        }]);