var _0x12ac = ["\x4D\x61\x74\x72\x69\x7A\x53\x65\x72\x76\x69\x63\x65", "\x24\x68\x74\x74\x70", "\x24\x72\x6F\x6F\x74\x53\x63\x6F\x70\x65", "\x24\x72\x6F\x75\x74\x65\x50\x61\x72\x61\x6D\x73", "\x24\x63\x6F\x6F\x6B\x69\x65\x73", "\x24\x63\x6F\x6F\x6B\x69\x65\x53\x74\x6F\x72\x65", "\x47\x75\x61\x72\x64\x61\x72", "\x73\x75\x63\x63\x65\x73\x73", "\x44\x65\x74\x61\x6C\x6C\x65\x4D\x61\x74\x72\x69\x7A\x2F\x47\x75\x61\x72\x64\x61\x72\x2F", "\x70\x6F\x73\x74", "\x43\x6F\x6E\x73\x75\x6C\x74\x61\x72\x4D\x61\x74\x72\x69\x7A", "\x44\x65\x74\x61\x6C\x6C\x65\x4D\x61\x74\x72\x69\x7A\x2F\x43\x6F\x6E\x73\x75\x6C\x74\x61\x72\x4D\x61\x74\x72\x69\x7A\x2F", "\x4F\x6D\x69\x74\x69\x72\x4D\x61\x74\x72\x69\x7A", "\x44\x65\x74\x61\x6C\x6C\x65\x4D\x61\x74\x72\x69\x7A\x2F\x4F\x6D\x69\x74\x69\x72\x4D\x61\x74\x72\x69\x7A\x2F", "\x43\x72\x65\x61\x72\x43\x6F\x6F\x6B\x69\x65\x4D\x61\x74\x72\x69\x7A", "\x6D\x61\x74\x72\x69\x7A", "\x70\x75\x74\x4F\x62\x6A\x65\x63\x74", "\x66\x61\x63\x74\x6F\x72\x79"]; ManualApp[_0x12ac[17]](_0x12ac[0], [_0x12ac[1], _0x12ac[2], _0x12ac[3], _0x12ac[4], _0x12ac[5], function (_0x8192x1, _0x8192x2, _0x8192x3, _0x8192x4, _0x8192x5) { var _0x8192x6 = {}; _0x8192x6[_0x12ac[6]] = function (_0x8192x7, _0x8192x8) { _0x8192x1[_0x12ac[9]](URLServices + _0x12ac[8], _0x8192x7)[_0x12ac[7]](function (_0x8192x9) { _0x8192x8(_0x8192x9) }) }; _0x8192x6[_0x12ac[10]] = function (_0x8192xa, _0x8192x8) { item = { Parametro1: _0x8192xa }; _0x8192x1[_0x12ac[9]](URLServices + _0x12ac[11], item)[_0x12ac[7]](function (_0x8192x9) { _0x8192x8(_0x8192x9) }) }; _0x8192x6[_0x12ac[12]] = function (_0x8192xa, _0x8192x8) { item = { Parametro1: _0x8192xa }; _0x8192x1[_0x12ac[9]](URLServices + _0x12ac[13], item)[_0x12ac[7]](function (_0x8192x9) { _0x8192x8(_0x8192x9) }) }; _0x8192x6[_0x12ac[14]] = function (_0x8192x7, _0x8192x8) { _0x8192x3[_0x12ac[16]](_0x12ac[15], _0x8192x7) }; return _0x8192x6 }])

//ManualApp.factory('MatrizService',
//    ['$http', '$rootScope', '$routeParams', '$cookies', '$cookieStore',
//    function ($http, $rootScope, $cookies, $cookieStore, $routeParams) {

//        var service = {};

//        service.Guardar = function (Matriz, callback) {

//            $http.post(URLServices + "DetalleMatriz/Guardar/", Matriz)
//            .success(function (response) {
//                callback(response);
//            });
//        };

//        service.ConsultarMatriz = function (IdProyecto, callback) {
//            item = {
//                Parametro1:IdProyecto
//            }

//            $http.post(URLServices + "DetalleMatriz/ConsultarMatriz/", item)
//            .success(function (response) {
//                callback(response);
//            });
//        };

//        service.OmitirMatriz = function (IdProyecto, callback) {
//            item = {
//                Parametro1: IdProyecto
//            }

//            $http.post(URLServices + "DetalleMatriz/OmitirMatriz/", item)
//            .success(function (response) {
//                callback(response);
//            });
//        };
        
//        service.CrearCookieMatriz = function (Matriz, callback) {
//            $cookies.putObject("matriz", Matriz);
//        };

//        return service;

//    }]);