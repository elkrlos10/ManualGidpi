//var _0x19a0 = ['ConsultarMatriz', 'DetalleMatriz/ConsultarMatriz/', 'OmitirMatriz', 'factory', '$http', '$routeParams', 'Guardar', 'post', 'success']; (function (_0x18f929, _0x358d09) { var _0x493c6c = function (_0x3fce6a) { while (--_0x3fce6a) { _0x18f929['push'](_0x18f929['shift']()); } }; _0x493c6c(++_0x358d09); }(_0x19a0, 0x13e)); var _0x4ef5 = function (_0x3a4838, _0x296ff6) { _0x3a4838 = _0x3a4838 - 0x0; var _0x4c3c49 = _0x19a0[_0x3a4838]; return _0x4c3c49; }; ManualApp[_0x4ef5('0x0')]('MatrizService', [_0x4ef5('0x1'), '$rootScope', _0x4ef5('0x2'), function (_0x4a25d6, _0x29efa4, _0xa3f8ee) { var _0x20c15a = {}; _0x20c15a[_0x4ef5('0x3')] = function (_0x5ddf09, _0x4d2af3) { _0x4a25d6[_0x4ef5('0x4')](URLServices + 'DetalleMatriz/Guardar/', _0x5ddf09)[_0x4ef5('0x5')](function (_0x1582a0) { _0x4d2af3(_0x1582a0); }); }; _0x20c15a[_0x4ef5('0x6')] = function (_0x556558, _0x22d063) { item = { 'Parametro1': _0x556558 }; _0x4a25d6[_0x4ef5('0x4')](URLServices + _0x4ef5('0x7'), item)[_0x4ef5('0x5')](function (_0x181adb) { _0x22d063(_0x181adb); }); }; _0x20c15a[_0x4ef5('0x8')] = function (_0x4300a1, _0x3e1910) { item = { 'Parametro1': _0x4300a1 }; _0x4a25d6[_0x4ef5('0x4')](URLServices + 'DetalleMatriz/OmitirMatriz/', item)[_0x4ef5('0x5')](function (_0x378193) { _0x3e1910(_0x378193); }); }; return _0x20c15a; }]);


ManualApp.factory('MatrizService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};

        service.Guardar = function (Matriz, callback) {

            $http.post(URLServices + "DetalleMatriz/Guardar/", Matriz)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarMatriz = function (IdProyecto, callback) {
            item = {
                Parametro1:IdProyecto
            }

            $http.post(URLServices + "DetalleMatriz/ConsultarMatriz/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.OmitirMatriz = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }

            $http.post(URLServices + "DetalleMatriz/OmitirMatriz/", item)
            .success(function (response) {
                callback(response);
            });
        };

        return service;

    }]);