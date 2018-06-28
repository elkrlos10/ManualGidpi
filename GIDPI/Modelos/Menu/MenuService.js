var _0x459a = ["\x4D\x65\x6E\x75\x53\x65\x72\x76\x69\x63\x65", "\x24\x68\x74\x74\x70", "\x24\x72\x6F\x6F\x74\x53\x63\x6F\x70\x65", "\x24\x72\x6F\x75\x74\x65\x50\x61\x72\x61\x6D\x73", "\x43\x6F\x6E\x73\x75\x6C\x74\x61\x72\x50\x72\x6F\x79\x65\x63\x74\x6F\x73", "\x73\x75\x63\x63\x65\x73\x73", "\x4D\x65\x6E\x75\x2F\x43\x6F\x6E\x73\x75\x6C\x74\x61\x72\x50\x72\x6F\x79\x65\x63\x74\x6F\x73\x2F", "\x70\x6F\x73\x74", "\x63\x6F\x6E\x73\x75\x6C\x74\x61\x72\x4D\x61\x74\x72\x69\x7A", "\x4D\x65\x6E\x75\x2F\x63\x6F\x6E\x73\x75\x6C\x74\x61\x72\x4D\x61\x74\x72\x69\x7A\x2F", "\x41\x62\x72\x69\x72\x50\x72\x6F\x79\x65\x63\x74\x6F", "\x4D\x65\x6E\x75\x2F\x41\x62\x72\x69\x72\x50\x72\x6F\x79\x65\x63\x74\x6F\x2F", "\x45\x6C\x69\x6D\x69\x6E\x61\x72\x50\x72\x6F\x79\x65\x63\x74\x6F", "\x4D\x65\x6E\x75\x2F\x45\x6C\x69\x6D\x69\x6E\x61\x72\x50\x72\x6F\x79\x65\x63\x74\x6F\x2F", "\x43\x61\x6D\x62\x69\x61\x72\x50\x61\x73\x73\x77\x6F\x72\x64", "\x70\x61\x73\x73\x31", "\x70\x61\x73\x73\x32", "\x4C\x6F\x67\x69\x6E\x2F\x43\x61\x6D\x62\x69\x61\x72\x50\x61\x73\x73\x77\x6F\x72\x64", "\x66\x61\x63\x74\x6F\x72\x79"]; ManualApp[_0x459a[18]](_0x459a[0], [_0x459a[1], _0x459a[2], _0x459a[3], function (_0x484dx1, _0x484dx2, _0x484dx3) { var _0x484dx4 = {}; _0x484dx4[_0x459a[4]] = function (_0x484dx5, _0x484dx6) { item = { Parametro1: _0x484dx5 }; _0x484dx1[_0x459a[7]](URLServices + _0x459a[6], item)[_0x459a[5]](function (_0x484dx7) { _0x484dx6(_0x484dx7) }) }; _0x484dx4[_0x459a[8]] = function (_0x484dx8, _0x484dx6) { item = { Parametro1: _0x484dx8 }; _0x484dx1[_0x459a[7]](URLServices + _0x459a[9], item)[_0x459a[5]](function (_0x484dx7) { _0x484dx6(_0x484dx7) }) }; _0x484dx4[_0x459a[10]] = function (_0x484dx8, _0x484dx6) { item = { Parametro1: _0x484dx8 }; _0x484dx1[_0x459a[7]](URLServices + _0x459a[11], item)[_0x459a[5]](function (_0x484dx7) { _0x484dx6(_0x484dx7) }) }; _0x484dx4[_0x459a[12]] = function (_0x484dx8, _0x484dx6) { item = { Parametro1: _0x484dx8 }; _0x484dx1[_0x459a[7]](URLServices + _0x459a[13], item)[_0x459a[5]](function (_0x484dx7) { _0x484dx6(_0x484dx7) }) }; _0x484dx4[_0x459a[14]] = function (_0x484dx9, _0x484dxa, _0x484dx6) { Item = { Parametro1: _0x484dx9[_0x459a[15]], Parametro2: _0x484dx9[_0x459a[16]], Parametro3: _0x484dxa }; _0x484dx1[_0x459a[7]](URLServices + _0x459a[17], Item)[_0x459a[5]](function (_0x484dx7) { _0x484dx6(_0x484dx7) }) }; return _0x484dx4 }])

//ManualApp.factory('MenuService',
//    ['$http', '$rootScope', '$routeParams',
//    function ($http, $rootScope, $routeParams) {

//        var service = {};
        
//        service.ConsultarProyectos = function (IdUsuario, callback) {
//            item = {
//                Parametro1:IdUsuario
//            }
//            $http.post(URLServices + "Menu/ConsultarProyectos/", item)
//            .success(function (response) {
//                callback(response);
//            });
//        };

//        service.consultarMatriz = function (IdProyecto, callback) {
//            item = {
//                Parametro1: IdProyecto
//            }
//            $http.post(URLServices + "Menu/consultarMatriz/", item)
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

//        service.EliminarProyecto = function (IdProyecto, callback) {
//            item = {
//                Parametro1: IdProyecto
//            }
//            $http.post(URLServices + "Menu/EliminarProyecto/", item)
//            .success(function (response) {
//                callback(response);
//            });
//        };

//        service.CambiarPassword = function (Usuario, id, callback) {
//            Item = {
//                Parametro1: Usuario.pass1,
//                Parametro2: Usuario.pass2,
//                Parametro3: id
//            };
//            $http.post(URLServices + "Login/CambiarPassword", Item)
//                .success(function (response) {
//                    callback(response);
//                });
//        };

//        return service;

//    }]);