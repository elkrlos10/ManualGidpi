//var _0x5c4a=['post','GuardarPerfilProyecto','PerfilProyecto/GuardarPerfilProyecto/','success','PerfilProyecto/ConsultarPerfilTerminado/','EditarPerfilProyecto','PerfilProyecto/EditarPerfilProyecto/','GuardarPerfilProyecto2','ConsultarPerfil2','PerfilProyecto/ConsultarPerfil2/','EditarPerfilProyecto2','PerfilProyecto/EditarPerfilProyecto2/','factory','$http','$rootScope','$routeParams','ConsultarProyecto'];(function(_0x5b517b,_0x30e4e1){var _0x5655b6=function(_0x185fd1){while(--_0x185fd1){_0x5b517b['push'](_0x5b517b['shift']());}};_0x5655b6(++_0x30e4e1);}(_0x5c4a,0xc7));var _0x6227=function(_0x14748c,_0x406414){_0x14748c=_0x14748c-0x0;var _0x1e5f67=_0x5c4a[_0x14748c];return _0x1e5f67;};ManualApp[_0x6227('0x0')]('PerfilProyectoService',[_0x6227('0x1'),_0x6227('0x2'),_0x6227('0x3'),function(_0x219063,_0x6b96c8,_0x57a908){var _0x16d106={};_0x16d106[_0x6227('0x4')]=function(_0xadf4,_0x433c32){item={'Parametro1':_0xadf4};_0x219063[_0x6227('0x5')](URLServices+'PerfilProyecto/ConsultarProyecto/',item)['success'](function(_0xb802e1){_0x433c32(_0xb802e1);});};_0x16d106[_0x6227('0x6')]=function(_0x1298d1,_0x3d6f63){_0x219063[_0x6227('0x5')](URLServices+_0x6227('0x7'),_0x1298d1)[_0x6227('0x8')](function(_0x65e85a){_0x3d6f63(_0x65e85a);});};_0x16d106['ConsultarPerfilTerminado']=function(_0x492804,_0x2f3991){item={'Parametro1':_0x492804};_0x219063[_0x6227('0x5')](URLServices+_0x6227('0x9'),item)[_0x6227('0x8')](function(_0x446280){_0x2f3991(_0x446280);});};_0x16d106[_0x6227('0xa')]=function(_0x4583fa,_0x57eb05){_0x219063['post'](URLServices+_0x6227('0xb'),_0x4583fa)[_0x6227('0x8')](function(_0x296355){_0x57eb05(_0x296355);});};_0x16d106[_0x6227('0xc')]=function(_0xb418,_0x5f29b0){_0x219063[_0x6227('0x5')](URLServices+'PerfilProyecto/GuardarPerfilProyecto2/',_0xb418)[_0x6227('0x8')](function(_0x45131f){_0x5f29b0(_0x45131f);});};_0x16d106[_0x6227('0xd')]=function(_0x56dce2,_0x59d9fc){item={'Parametro1':_0x56dce2};_0x219063[_0x6227('0x5')](URLServices+_0x6227('0xe'),item)['success'](function(_0x501111){_0x59d9fc(_0x501111);});};_0x16d106[_0x6227('0xf')]=function(_0x298c8d,_0x598025){_0x219063[_0x6227('0x5')](URLServices+_0x6227('0x10'),_0x298c8d)[_0x6227('0x8')](function(_0x1d6514){_0x598025(_0x1d6514);});};return _0x16d106;}]);

ManualApp.factory('PerfilProyectoService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};

        service.ConsultarProyecto = function (IdProyecto, callback) {

            item = {
                Parametro1: IdProyecto
            };

            $http.post(URLServices + "PerfilProyecto/ConsultarProyecto/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.GuardarPerfilProyecto = function (PerfilProyecto, callback) {


            $http.post(URLServices + "PerfilProyecto/GuardarPerfilProyecto/", PerfilProyecto)
            .success(function (response) {
                callback(response);
            });
        };
        service.ConsultarPerfilTerminado = function (IdProyecto, callback) {

            item = {
                Parametro1 :IdProyecto
            }
            $http.post(URLServices + "PerfilProyecto/ConsultarPerfilTerminado/", item)
            .success(function (response) {
                callback(response);
            });
        };
        service.EditarPerfilProyecto = function (PerfilProyecto, callback) {


            $http.post(URLServices + "PerfilProyecto/EditarPerfilProyecto/", PerfilProyecto)
            .success(function (response) {
                callback(response);
            });
        };

        service.GuardarPerfilProyecto2 = function (PerfilProyecto2, callback) {


            $http.post(URLServices + "PerfilProyecto/GuardarPerfilProyecto2/", PerfilProyecto2)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarPerfil2 = function (IdProyecto, callback) {

            item = {
                Parametro1: IdProyecto
            }

            $http.post(URLServices + "PerfilProyecto/ConsultarPerfil2/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.EditarPerfilProyecto2 = function (PerfilProyecto2, callback) {


            $http.post(URLServices + "PerfilProyecto/EditarPerfilProyecto2/", PerfilProyecto2)
            .success(function (response) {
                callback(response);
            });
        };


        return service;
    }])