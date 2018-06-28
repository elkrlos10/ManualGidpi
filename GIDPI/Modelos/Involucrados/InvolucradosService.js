var _0x19f1 = ["\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x73\x53\x65\x72\x76\x69\x63\x65", "\x24\x68\x74\x74\x70", "\x24\x72\x6F\x6F\x74\x53\x63\x6F\x70\x65", "\x24\x72\x6F\x75\x74\x65\x50\x61\x72\x61\x6D\x73", "\x47\x75\x61\x72\x64\x61\x72\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x73", "\x73\x75\x63\x63\x65\x73\x73", "\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x73\x2F\x47\x75\x61\x72\x64\x61\x72\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x73\x2F", "\x70\x6F\x73\x74", "\x43\x6F\x6E\x73\x75\x6C\x74\x61\x72\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x73", "\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x73\x2F\x43\x6F\x6E\x73\x75\x6C\x74\x61\x72\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x73\x2F", "\x41\x62\x72\x69\x72\x50\x72\x6F\x79\x65\x63\x74\x6F", "\x4D\x65\x6E\x75\x2F\x41\x62\x72\x69\x72\x50\x72\x6F\x79\x65\x63\x74\x6F\x2F", "\x45\x6C\x69\x6D\x69\x6E\x61\x72\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F", "\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x73\x2F\x45\x6C\x69\x6D\x69\x6E\x61\x72\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x2F", "\x66\x61\x63\x74\x6F\x72\x79"]; ManualApp[_0x19f1[14]](_0x19f1[0], [_0x19f1[1], _0x19f1[2], _0x19f1[3], function (_0x1d8ex1, _0x1d8ex2, _0x1d8ex3) { var _0x1d8ex4 = {}; _0x1d8ex4[_0x19f1[4]] = function (_0x1d8ex5, _0x1d8ex6) { _0x1d8ex1[_0x19f1[7]](URLServices + _0x19f1[6], _0x1d8ex5)[_0x19f1[5]](function (_0x1d8ex7) { _0x1d8ex6(_0x1d8ex7) }) }; _0x1d8ex4[_0x19f1[8]] = function (_0x1d8ex8, _0x1d8ex6) { item = { Parametro1: _0x1d8ex8 }; _0x1d8ex1[_0x19f1[7]](URLServices + _0x19f1[9], item)[_0x19f1[5]](function (_0x1d8ex7) { _0x1d8ex6(_0x1d8ex7) }) }; _0x1d8ex4[_0x19f1[10]] = function (_0x1d8ex8, _0x1d8ex6) { item = { Parametro1: _0x1d8ex8 }; _0x1d8ex1[_0x19f1[7]](URLServices + _0x19f1[11], item)[_0x19f1[5]](function (_0x1d8ex7) { _0x1d8ex6(_0x1d8ex7) }) }; _0x1d8ex4[_0x19f1[12]] = function (_0x1d8ex8, _0x1d8ex6) { item = { Parametro1: _0x1d8ex8 }; _0x1d8ex1[_0x19f1[7]](URLServices + _0x19f1[13], item)[_0x19f1[5]](function (_0x1d8ex7) { _0x1d8ex6(_0x1d8ex7) }) }; return _0x1d8ex4 }])

//ManualApp.factory('InvolucradosService',
//    ['$http', '$rootScope', '$routeParams',
//    function ($http, $rootScope, $routeParams) {

//        var service = {};

//        service.GuardarInvolucrados = function (Involucrados,callback) {
//            $http.post(URLServices + "Involucrados/GuardarInvolucrados/", Involucrados)
//            .success(function (response) {
//                callback(response);
//            });
//        };

//        service.ConsultarInvolucrados = function (IdProyecto, callback) {
//            item = {
//                Parametro1:IdProyecto
//            }
//            $http.post(URLServices + "Involucrados/ConsultarInvolucrados/", item)
//            .success(function (response) {
//                callback(response);
//            });
//        };

//        service.AbrirProyecto = function (IdProyecto, callback) {
//            item = {
//                Parametro1: IdProyecto
//            }
//            $http.post(URLServices + "Menu/AbrirProyecto/", item)
//            .success(function (response) {
//                callback(response);
//            });
//        };


//        service.EliminarInvolucrado = function (IdProyecto, callback) {
//            item = {
//                Parametro1: IdProyecto
//            }
//            $http.post(URLServices + "Involucrados/EliminarInvolucrado/", item)
//            .success(function (response) {
//                callback(response);
//            });
//        };

//        return service;

//    }]);