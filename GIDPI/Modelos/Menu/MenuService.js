//var _0x430d = ['consultarMatriz', 'Menu/consultarMatriz/', 'AbrirProyecto', 'Menu/AbrirProyecto/', 'EliminarProyecto', 'Menu/EliminarProyecto/', 'factory', 'MenuService', '$http', '$rootScope', 'ConsultarProyectos', 'post', 'Menu/ConsultarProyectos/', 'success']; (function (_0x384e3c, _0x235fa0) { var _0x136918 = function (_0x211831) { while (--_0x211831) { _0x384e3c['push'](_0x384e3c['shift']()); } }; _0x136918(++_0x235fa0); }(_0x430d, 0x110)); var _0x42c5 = function (_0x2263dc, _0x5e9d49) { _0x2263dc = _0x2263dc - 0x0; var _0x173582 = _0x430d[_0x2263dc]; return _0x173582; }; ManualApp[_0x42c5('0x0')](_0x42c5('0x1'), [_0x42c5('0x2'), _0x42c5('0x3'), '$routeParams', function (_0x473233, _0x31f7c0, _0x534d28) { var _0x5dd937 = {}; _0x5dd937[_0x42c5('0x4')] = function (_0x4db6a5, _0x19eee0) { item = { 'Parametro1': _0x4db6a5 }; _0x473233[_0x42c5('0x5')](URLServices + _0x42c5('0x6'), item)[_0x42c5('0x7')](function (_0x62c414) { _0x19eee0(_0x62c414); }); }; _0x5dd937[_0x42c5('0x8')] = function (_0x509941, _0x111af0) { item = { 'Parametro1': _0x509941 }; _0x473233[_0x42c5('0x5')](URLServices + _0x42c5('0x9'), item)[_0x42c5('0x7')](function (_0x417ed1) { _0x111af0(_0x417ed1); }); }; _0x5dd937[_0x42c5('0xa')] = function (_0x16b5a4, _0x17dadf) { item = { 'Parametro1': _0x16b5a4 }; _0x473233[_0x42c5('0x5')](URLServices + _0x42c5('0xb'), item)['success'](function (_0x2cc7d4) { _0x17dadf(_0x2cc7d4); }); }; _0x5dd937[_0x42c5('0xc')] = function (_0x1f9d9f, _0x821ae9) { item = { 'Parametro1': _0x1f9d9f }; _0x473233['post'](URLServices + _0x42c5('0xd'), item)[_0x42c5('0x7')](function (_0x507e35) { _0x821ae9(_0x507e35); }); }; return _0x5dd937; }]);
ManualApp.factory('MenuService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};
        
        service.ConsultarProyectos = function (IdUsuario, callback) {
            item = {
                Parametro1:IdUsuario
            }
            $http.post(URLServices + "Menu/ConsultarProyectos/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.consultarMatriz = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "Menu/consultarMatriz/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.AbrirProyecto = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "Menu/AbrirProyecto/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.EliminarProyecto = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "Menu/EliminarProyecto/", item)
            .success(function (response) {
                callback(response);
            });
        };
        return service;

    }]);