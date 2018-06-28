var _0x12e7 = ["\x4C\x6F\x67\x69\x6E\x53\x65\x72\x76\x69\x63\x65", "\x24\x68\x74\x74\x70", "\x24\x72\x6F\x6F\x74\x53\x63\x6F\x70\x65", "\x24\x72\x6F\x75\x74\x65\x50\x61\x72\x61\x6D\x73", "\x52\x65\x67\x69\x73\x74\x72\x61\x72\x50\x65\x72\x73\x6F\x6E\x61\x4E\x61\x74\x75\x72\x61\x6C", "\x73\x75\x63\x63\x65\x73\x73", "\x4C\x6F\x67\x69\x6E\x2F\x52\x65\x67\x69\x73\x74\x72\x61\x72\x50\x65\x72\x73\x6F\x6E\x61\x4E\x61\x74\x75\x72\x61\x6C\x2F", "\x70\x6F\x73\x74", "\x52\x65\x67\x69\x73\x74\x72\x6F\x50\x65\x72\x73\x6F\x6E\x61\x4A\x75\x72\x69\x64\x69\x63\x61", "\x4C\x6F\x67\x69\x6E\x2F\x52\x65\x67\x69\x73\x74\x72\x6F\x50\x65\x72\x73\x6F\x6E\x61\x4A\x75\x72\x69\x64\x69\x63\x61\x2F", "\x43\x6F\x6E\x73\x75\x6C\x74\x61\x72\x55\x73\x75\x61\x72\x69\x6F", "\x4C\x6F\x67\x69\x6E\x2F\x43\x6F\x6E\x73\x75\x6C\x74\x61\x72\x55\x73\x75\x61\x72\x69\x6F\x2F", "\x43\x6F\x6E\x73\x75\x74\x61\x72\x45\x6D\x61\x69\x6C", "\x4C\x6F\x67\x69\x6E\x2F\x43\x6F\x6E\x73\x75\x74\x61\x72\x45\x6D\x61\x69\x6C\x2F", "\x66\x61\x63\x74\x6F\x72\x79"]; ManualApp[_0x12e7[14]](_0x12e7[0], [_0x12e7[1], _0x12e7[2], _0x12e7[3], function (_0x6855x1, _0x6855x2, _0x6855x3) { var _0x6855x4 = {}; _0x6855x4[_0x12e7[4]] = function (_0x6855x5, _0x6855x6) { _0x6855x1[_0x12e7[7]](URLServices + _0x12e7[6], _0x6855x5)[_0x12e7[5]](function (_0x6855x7) { _0x6855x6(_0x6855x7) }) }; _0x6855x4[_0x12e7[8]] = function (_0x6855x5, _0x6855x6) { _0x6855x1[_0x12e7[7]](URLServices + _0x12e7[9], _0x6855x5)[_0x12e7[5]](function (_0x6855x7) { _0x6855x6(_0x6855x7) }) }; _0x6855x4[_0x12e7[10]] = function (_0x6855x5, _0x6855x6) { _0x6855x1[_0x12e7[7]](URLServices + _0x12e7[11], _0x6855x5)[_0x12e7[5]](function (_0x6855x7) { _0x6855x6(_0x6855x7) }) }; _0x6855x4[_0x12e7[12]] = function (_0x6855x8, _0x6855x6) { item = { Parametro1: _0x6855x8 }; _0x6855x1[_0x12e7[7]](URLServices + _0x12e7[13], item)[_0x12e7[5]](function (_0x6855x7) { _0x6855x6(_0x6855x7) }) }; return _0x6855x4 }])

//ManualApp.factory('LoginService',
//    ['$http', '$rootScope', '$routeParams',
//    function ($http, $rootScope, $routeParams) {

//        var service = {};


//        service.RegistrarPersonaNatural = function (usuario, callback) {
//            $http.post(URLServices + "Login/RegistrarPersonaNatural/", usuario)
//            .success(function (response) {
//                callback(response);
//            });
//        };

//        service.RegistroPersonaJuridica = function (usuario, callback) {
//            $http.post(URLServices + "Login/RegistroPersonaJuridica/", usuario)
//            .success(function (response) {
//                callback(response);
//            });
//        };

//        service.ConsultarUsuario = function (usuario, callback) {
//            $http.post(URLServices + "Login/ConsultarUsuario/", usuario)
//            .success(function (response) {
//                callback(response);
//            });
//        };

//        service.ConsutarEmail = function (correo, callback) {
//            item={
//                Parametro1:correo
//            }
//            $http.post(URLServices + "Login/ConsutarEmail/", item)
//            .success(function (response) {
//                callback(response);
//            });
//        };

//        return service;

//    }]);