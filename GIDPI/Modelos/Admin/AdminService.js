﻿//OFUSCADO
//var _0xeff8 = ['factory', 'AdminService', '$rootScope', '$routeParams', 'cosultarGrafica', 'post', 'Admin/cosultarGrafica/', 'success']; (function (_0x5b4826, _0x4a3682) { var _0xd64a1a = function (_0x52f8d9) { while (--_0x52f8d9) { _0x5b4826['push'](_0x5b4826['shift']()); } }; _0xd64a1a(++_0x4a3682); }(_0xeff8, 0x70)); var _0x8eff = function (_0xfe41ab, _0x3e1348) { _0xfe41ab = _0xfe41ab - 0x0; var _0x4e9dd4 = _0xeff8[_0xfe41ab]; return _0x4e9dd4; }; ManualApp[_0x8eff('0x0')](_0x8eff('0x1'), ['$http', _0x8eff('0x2'), _0x8eff('0x3'), function (_0x4ba2bf, _0x2911b1, _0x4ac51c) { var _0x469641 = {}; _0x469641[_0x8eff('0x4')] = function (_0x3409bc) { _0x4ba2bf[_0x8eff('0x5')](URLServices + _0x8eff('0x6'))[_0x8eff('0x7')](function (_0x19557f) { _0x3409bc(_0x19557f); }); }; return _0x469641; }]);

ManualApp.factory('AdminService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};



        service.cosultarGrafica = function (callback) {
            $http.post(URLServices + "Admin/cosultarGrafica/")
            .success(function (response) {
                callback(response);
            });
        };


        return service;

    }]);