//var _0x6255=['MarcoLogico/LLenarMarco/','success','MarcoLogico/GuardarMarco/','ConsultarMarco','MarcoLogico/ConsultarMarco/','AbrirProyecto','Menu/AbrirProyecto/','factory','MarcoLogicoService','$http','$rootScope','$routeParams','post'];(function(_0x441570,_0xf7577){var _0x3ba6fc=function(_0x5987af){while(--_0x5987af){_0x441570['push'](_0x441570['shift']());}};_0x3ba6fc(++_0xf7577);}(_0x6255,0x173));var _0x2dd8=function(_0x556b03,_0x38bb8c){_0x556b03=_0x556b03-0x0;var _0x5c7410=_0x6255[_0x556b03];return _0x5c7410;};ManualApp[_0x2dd8('0x0')](_0x2dd8('0x1'),[_0x2dd8('0x2'),_0x2dd8('0x3'),_0x2dd8('0x4'),function(_0x302f34,_0x1aaddd,_0x458ae8){var _0x3ae43f={};_0x3ae43f['LLenarMarco']=function(_0x36b01e,_0x186175){item={'Parametro1':_0x36b01e};_0x302f34[_0x2dd8('0x5')](URLServices+_0x2dd8('0x6'),item)[_0x2dd8('0x7')](function(_0xad78a){_0x186175(_0xad78a);});};_0x3ae43f['GuardarMarco']=function(_0x218520,_0xc6366f){_0x302f34[_0x2dd8('0x5')](URLServices+_0x2dd8('0x8'),_0x218520)[_0x2dd8('0x7')](function(_0x503070){_0xc6366f(_0x503070);});};_0x3ae43f[_0x2dd8('0x9')]=function(_0x2028dd,_0x10459b){item={'Parametro1':_0x2028dd};_0x302f34[_0x2dd8('0x5')](URLServices+_0x2dd8('0xa'),item)[_0x2dd8('0x7')](function(_0x46f26c){_0x10459b(_0x46f26c);});};_0x3ae43f[_0x2dd8('0xb')]=function(_0x325641,_0x24f1c3){item={'Parametro1':_0x325641};_0x302f34[_0x2dd8('0x5')](URLServices+_0x2dd8('0xc'),item)['success'](function(_0x26a1ef){_0x24f1c3(_0x26a1ef);});};return _0x3ae43f;}]);
ManualApp.factory('MarcoLogicoService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};


        service.LLenarMarco = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "MarcoLogico/LLenarMarco/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.GuardarMarco = function (Marco, callback) {
          
            $http.post(URLServices + "MarcoLogico/GuardarMarco/", Marco)
            .success(function (response) {
                callback(response);
            });
        };



        service.ConsultarMarco = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "MarcoLogico/ConsultarMarco/", item)
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


        return service;

    }]);