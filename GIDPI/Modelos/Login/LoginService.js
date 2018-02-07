//var _0x246c=['LoginService','$http','$rootScope','$routeParams','RegistrarPersonaNatural','post','Login/RegistrarPersonaNatural/','RegistroPersonaJuridica','Login/RegistroPersonaJuridica/','success','ConsultarUsuario','Login/ConsultarUsuario/','ConsutarEmail','Login/ConsutarEmail/','factory'];(function(_0x48ad1c,_0xe59db4){var _0x69f293=function(_0x5d5900){while(--_0x5d5900){_0x48ad1c['push'](_0x48ad1c['shift']());}};_0x69f293(++_0xe59db4);}(_0x246c,0xb3));var _0x942c=function(_0x4ff80a,_0x46133e){_0x4ff80a=_0x4ff80a-0x0;var _0x560e98=_0x246c[_0x4ff80a];return _0x560e98;};ManualApp[_0x942c('0x0')](_0x942c('0x1'),[_0x942c('0x2'),_0x942c('0x3'),_0x942c('0x4'),function(_0x3e712c,_0x25c96f,_0x2f0f15){var _0x3d312c={};_0x3d312c[_0x942c('0x5')]=function(_0x5d7b6d,_0x28d4f6){_0x3e712c[_0x942c('0x6')](URLServices+_0x942c('0x7'),_0x5d7b6d)['success'](function(_0x178dce){_0x28d4f6(_0x178dce);});};_0x3d312c[_0x942c('0x8')]=function(_0x93f0bc,_0x1257ef){_0x3e712c['post'](URLServices+_0x942c('0x9'),_0x93f0bc)[_0x942c('0xa')](function(_0x5e1eb8){_0x1257ef(_0x5e1eb8);});};_0x3d312c[_0x942c('0xb')]=function(_0xbf008e,_0x4571eb){_0x3e712c[_0x942c('0x6')](URLServices+_0x942c('0xc'),_0xbf008e)[_0x942c('0xa')](function(_0x23c0b1){_0x4571eb(_0x23c0b1);});};_0x3d312c[_0x942c('0xd')]=function(_0x420172,_0x293db4){item={'Parametro1':_0x420172};_0x3e712c[_0x942c('0x6')](URLServices+_0x942c('0xe'),item)[_0x942c('0xa')](function(_0x378347){_0x293db4(_0x378347);});};return _0x3d312c;}]);
ManualApp.factory('LoginService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};


        service.RegistrarPersonaNatural = function (usuario, callback) {
            $http.post(URLServices + "Login/RegistrarPersonaNatural/", usuario)
            .success(function (response) {
                callback(response);
            });
        };

        service.RegistroPersonaJuridica = function (usuario, callback) {
            $http.post(URLServices + "Login/RegistroPersonaJuridica/", usuario)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarUsuario = function (usuario, callback) {
            $http.post(URLServices + "Login/ConsultarUsuario/", usuario)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsutarEmail = function (correo, callback) {
            item={
                Parametro1:correo
            }
            $http.post(URLServices + "Login/ConsutarEmail/", item)
            .success(function (response) {
                callback(response);
            });
        };

        return service;

    }]);