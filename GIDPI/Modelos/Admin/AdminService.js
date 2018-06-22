//OFUSCADO
//var _0xeff8 = ['factory', 'AdminService', '$rootScope', '$routeParams', 'cosultarGrafica', 'post', 'Admin/cosultarGrafica/', 'success']; (function (_0x5b4826, _0x4a3682) { var _0xd64a1a = function (_0x52f8d9) { while (--_0x52f8d9) { _0x5b4826['push'](_0x5b4826['shift']()); } }; _0xd64a1a(++_0x4a3682); }(_0xeff8, 0x70)); var _0x8eff = function (_0xfe41ab, _0x3e1348) { _0xfe41ab = _0xfe41ab - 0x0; var _0x4e9dd4 = _0xeff8[_0xfe41ab]; return _0x4e9dd4; }; ManualApp[_0x8eff('0x0')](_0x8eff('0x1'), ['$http', _0x8eff('0x2'), _0x8eff('0x3'), function (_0x4ba2bf, _0x2911b1, _0x4ac51c) { var _0x469641 = {}; _0x469641[_0x8eff('0x4')] = function (_0x3409bc) { _0x4ba2bf[_0x8eff('0x5')](URLServices + _0x8eff('0x6'))[_0x8eff('0x7')](function (_0x19557f) { _0x3409bc(_0x19557f); }); }; return _0x469641; }]);
//

//var _0xadd7 = ["\x41\x64\x6D\x69\x6E\x53\x65\x72\x76\x69\x63\x65", "\x24\x68\x74\x74\x70", "\x24\x72\x6F\x6F\x74\x53\x63\x6F\x70\x65", "\x24\x72\x6F\x75\x74\x65\x50\x61\x72\x61\x6D\x73", "\x63\x6F\x73\x75\x6C\x74\x61\x72\x47\x72\x61\x66\x69\x63\x61", "\x73\x75\x63\x63\x65\x73\x73", "\x41\x64\x6D\x69\x6E\x2F\x63\x6F\x73\x75\x6C\x74\x61\x72\x47\x72\x61\x66\x69\x63\x61\x2F", "\x70\x6F\x73\x74", "\x43\x6F\x6E\x73\x75\x6C\x74\x61\x72\x45\x6D\x70\x72\x65\x73\x61\x73", "\x41\x64\x6D\x69\x6E\x2F\x43\x6F\x6E\x73\x75\x6C\x74\x61\x72\x45\x6D\x70\x72\x65\x73\x61\x73\x2F", "\x66\x61\x63\x74\x6F\x72\x79"]; ManualApp[_0xadd7[10]](_0xadd7[0], [_0xadd7[1], _0xadd7[2], _0xadd7[3], function (_0x168bx1, _0x168bx2, _0x168bx3) { var _0x168bx4 = {}; _0x168bx4[_0xadd7[4]] = function (_0x168bx5) { _0x168bx1[_0xadd7[7]](URLServices + _0xadd7[6])[_0xadd7[5]](function (_0x168bx6) { _0x168bx5(_0x168bx6) }) }; _0x168bx4[_0xadd7[8]] = function (_0x168bx5) { _0x168bx1[_0xadd7[7]](URLServices + _0xadd7[9])[_0xadd7[5]](function (_0x168bx6) { _0x168bx5(_0x168bx6) }) }; return _0x168bx4 }])

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

        service.ConsultarEmpresas = function (callback) {
            $http.post(URLServices + "Admin/ConsultarEmpresas/")
            .success(function (response) {
                callback(response);
            });
        };


        return service;

    }]);