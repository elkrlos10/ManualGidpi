//var _0x5c0e = ['InvolucradosService', '$http', '$routeParams', 'GuardarInvolucrados', 'post', 'Involucrados/GuardarInvolucrados/', 'success', 'Involucrados/ConsultarInvolucrados/', 'AbrirProyecto', 'EliminarInvolucrado', 'Involucrados/EliminarInvolucrado/', 'factory']; (function (_0x2a8cb8, _0xac1c5d) { var _0x4f624a = function (_0x613387) { while (--_0x613387) { _0x2a8cb8['push'](_0x2a8cb8['shift']()); } }; _0x4f624a(++_0xac1c5d); }(_0x5c0e, 0x83)); var _0x3a4b = function (_0x21c19a, _0x507b17) { _0x21c19a = _0x21c19a - 0x0; var _0x3ef05f = _0x5c0e[_0x21c19a]; return _0x3ef05f; }; ManualApp[_0x3a4b('0x0')](_0x3a4b('0x1'), [_0x3a4b('0x2'), '$rootScope', _0x3a4b('0x3'), function (_0x14dcd8, _0x415769, _0x35d20e) { var _0x3e88ae = {}; _0x3e88ae[_0x3a4b('0x4')] = function (_0x21b326, _0x4404de) { _0x14dcd8[_0x3a4b('0x5')](URLServices + _0x3a4b('0x6'), _0x21b326)[_0x3a4b('0x7')](function (_0x47f583) { _0x4404de(_0x47f583); }); }; _0x3e88ae['ConsultarInvolucrados'] = function (_0x5e4a03, _0x5c0182) { item = { 'Parametro1': _0x5e4a03 }; _0x14dcd8[_0x3a4b('0x5')](URLServices + _0x3a4b('0x8'), item)[_0x3a4b('0x7')](function (_0x295576) { _0x5c0182(_0x295576); }); }; _0x3e88ae[_0x3a4b('0x9')] = function (_0x1d8c8d, _0x43f6e8) { item = { 'Parametro1': _0x1d8c8d }; _0x14dcd8[_0x3a4b('0x5')](URLServices + 'Menu/AbrirProyecto/', item)[_0x3a4b('0x7')](function (_0x42de8c) { _0x43f6e8(_0x42de8c); }); }; _0x3e88ae[_0x3a4b('0xa')] = function (_0x21d215, _0xc3d379) { item = { 'Parametro1': _0x21d215 }; _0x14dcd8[_0x3a4b('0x5')](URLServices + _0x3a4b('0xb'), item)[_0x3a4b('0x7')](function (_0x567bed) { _0xc3d379(_0x567bed); }); }; return _0x3e88ae; }]);


ManualApp.factory('InvolucradosService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};

        service.GuardarInvolucrados = function (Involucrados,callback) {
            $http.post(URLServices + "Involucrados/GuardarInvolucrados/", Involucrados)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarInvolucrados = function (IdProyecto, callback) {
            item = {
                Parametro1:IdProyecto
            }
            $http.post(URLServices + "Involucrados/ConsultarInvolucrados/", item)
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


        service.EliminarInvolucrado = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "Involucrados/EliminarInvolucrado/", item)
            .success(function (response) {
                callback(response);
            });
        };

        return service;

    }]);