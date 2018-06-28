var _0xd500 = ["\x4D\x61\x72\x63\x6F\x4C\x6F\x67\x69\x63\x6F\x53\x65\x72\x76\x69\x63\x65", "\x24\x68\x74\x74\x70", "\x24\x72\x6F\x6F\x74\x53\x63\x6F\x70\x65", "\x24\x72\x6F\x75\x74\x65\x50\x61\x72\x61\x6D\x73", "\x4C\x4C\x65\x6E\x61\x72\x4D\x61\x72\x63\x6F", "\x73\x75\x63\x63\x65\x73\x73", "\x4D\x61\x72\x63\x6F\x4C\x6F\x67\x69\x63\x6F\x2F\x4C\x4C\x65\x6E\x61\x72\x4D\x61\x72\x63\x6F\x2F", "\x70\x6F\x73\x74", "\x47\x75\x61\x72\x64\x61\x72\x4D\x61\x72\x63\x6F", "\x4D\x61\x72\x63\x6F\x4C\x6F\x67\x69\x63\x6F\x2F\x47\x75\x61\x72\x64\x61\x72\x4D\x61\x72\x63\x6F\x2F", "\x43\x6F\x6E\x73\x75\x6C\x74\x61\x72\x4D\x61\x72\x63\x6F", "\x4D\x61\x72\x63\x6F\x4C\x6F\x67\x69\x63\x6F\x2F\x43\x6F\x6E\x73\x75\x6C\x74\x61\x72\x4D\x61\x72\x63\x6F\x2F", "\x41\x62\x72\x69\x72\x50\x72\x6F\x79\x65\x63\x74\x6F", "\x4D\x65\x6E\x75\x2F\x41\x62\x72\x69\x72\x50\x72\x6F\x79\x65\x63\x74\x6F\x2F", "\x66\x61\x63\x74\x6F\x72\x79"]; ManualApp[_0xd500[14]](_0xd500[0], [_0xd500[1], _0xd500[2], _0xd500[3], function (_0xbd6ax1, _0xbd6ax2, _0xbd6ax3) { var _0xbd6ax4 = {}; _0xbd6ax4[_0xd500[4]] = function (_0xbd6ax5, _0xbd6ax6) { item = { Parametro1: _0xbd6ax5 }; _0xbd6ax1[_0xd500[7]](URLServices + _0xd500[6], item)[_0xd500[5]](function (_0xbd6ax7) { _0xbd6ax6(_0xbd6ax7) }) }; _0xbd6ax4[_0xd500[8]] = function (_0xbd6ax8, _0xbd6ax6) { _0xbd6ax1[_0xd500[7]](URLServices + _0xd500[9], _0xbd6ax8)[_0xd500[5]](function (_0xbd6ax7) { _0xbd6ax6(_0xbd6ax7) }) }; _0xbd6ax4[_0xd500[10]] = function (_0xbd6ax5, _0xbd6ax6) { item = { Parametro1: _0xbd6ax5 }; _0xbd6ax1[_0xd500[7]](URLServices + _0xd500[11], item)[_0xd500[5]](function (_0xbd6ax7) { _0xbd6ax6(_0xbd6ax7) }) }; _0xbd6ax4[_0xd500[12]] = function (_0xbd6ax5, _0xbd6ax6) { item = { Parametro1: _0xbd6ax5 }; _0xbd6ax1[_0xd500[7]](URLServices + _0xd500[13], item)[_0xd500[5]](function (_0xbd6ax7) { _0xbd6ax6(_0xbd6ax7) }) }; return _0xbd6ax4 }])

//ManualApp.factory('MarcoLogicoService',
//    ['$http', '$rootScope', '$routeParams',
//    function ($http, $rootScope, $routeParams) {

//        var service = {};


//        service.LLenarMarco = function (IdProyecto, callback) {
//            item = {
//                Parametro1: IdProyecto
//            }
//            $http.post(URLServices + "MarcoLogico/LLenarMarco/", item)
//            .success(function (response) {
//                callback(response);
//            });
//        };

//        service.GuardarMarco = function (Marco, callback) {
          
//            $http.post(URLServices + "MarcoLogico/GuardarMarco/", Marco)
//            .success(function (response) {
//                callback(response);
//            });
//        };



//        service.ConsultarMarco = function (IdProyecto, callback) {
//            item = {
//                Parametro1: IdProyecto
//            }
//            $http.post(URLServices + "MarcoLogico/ConsultarMarco/", item)
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


//        return service;

//    }]);