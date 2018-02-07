//var _0x5553=['$rootScope','$routeParams','GuardarDatosProyecto','post','DatosProyecto/GuardarDatosProyecto/','success','get','DatosProyecto/ConsultarDepartamentos/','ConsultarMunicipiosDepartamento','DatosProyecto/ConsultarMunicipiosDepartamento/','DatosProyecto/ConsultarDepartamentoxMunicipio/','ModificarProyecto','DatosProyecto/ModificarProyecto/','ConsultarProyecto','DatosProyecto/ConsultarProyecto/','factory','$http'];(function(_0x1ab2a0,_0x39e5bc){var _0x4f83a2=function(_0x410575){while(--_0x410575){_0x1ab2a0['push'](_0x1ab2a0['shift']());}};_0x4f83a2(++_0x39e5bc);}(_0x5553,0x185));var _0x3891=function(_0x27f339,_0x27eb65){_0x27f339=_0x27f339-0x0;var _0x34bf70=_0x5553[_0x27f339];return _0x34bf70;};ManualApp[_0x3891('0x0')]('DatosProyectoService',[_0x3891('0x1'),_0x3891('0x2'),_0x3891('0x3'),function(_0x2e9916,_0x3e76c3,_0x43aa79){var _0x422b87={};_0x422b87[_0x3891('0x4')]=function(_0x37861b,_0x502057){_0x2e9916[_0x3891('0x5')](URLServices+_0x3891('0x6'),_0x37861b)[_0x3891('0x7')](function(_0x1cfec3){_0x502057(_0x1cfec3);});};_0x422b87['ConsultarDepartamentos']=function(_0x5e9126){_0x2e9916[_0x3891('0x8')](URLServices+_0x3891('0x9'))[_0x3891('0x7')](function(_0x3669f7){_0x5e9126(_0x3669f7);});};_0x422b87[_0x3891('0xa')]=function(_0x45568f,_0x36dd05){item={'Parametro1':_0x45568f};_0x2e9916['post'](URLServices+_0x3891('0xb'),item)[_0x3891('0x7')](function(_0x3adae2){_0x36dd05(_0x3adae2);});};_0x422b87['ConsultarDepartamentoxMunicipio']=function(_0x234a80,_0x370909){item={'Parametro1':_0x234a80};_0x2e9916[_0x3891('0x5')](URLServices+_0x3891('0xc'),item)[_0x3891('0x7')](function(_0xb9d69e){_0x370909(_0xb9d69e);});};_0x422b87[_0x3891('0xd')]=function(_0x5121be,_0x10ce0a){_0x2e9916[_0x3891('0x5')](URLServices+_0x3891('0xe'),_0x5121be)[_0x3891('0x7')](function(_0x4fd255){_0x10ce0a(_0x4fd255);});};_0x422b87[_0x3891('0xf')]=function(_0x22f763,_0x19cc7b){item={'Parametro1':_0x22f763};_0x2e9916[_0x3891('0x5')](URLServices+_0x3891('0x10'),item)[_0x3891('0x7')](function(_0x42347e){_0x19cc7b(_0x42347e);});};return _0x422b87;}]);
ManualApp.factory('DatosProyectoService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};

        service.GuardarDatosProyecto = function (Proyecto, callback) {

            $http.post(URLServices + "DatosProyecto/GuardarDatosProyecto/", Proyecto)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarDepartamentos = function (callback) {
            $http.get(URLServices + "DatosProyecto/ConsultarDepartamentos/")
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarMunicipiosDepartamento = function (IdDepartamento, callback) {

            item = {
                Parametro1: IdDepartamento,
            };

            $http.post(URLServices + "DatosProyecto/ConsultarMunicipiosDepartamento/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarDepartamentoxMunicipio = function (IdMunicipio, callback) {

            item = {
                Parametro1: IdMunicipio,
            };

            $http.post(URLServices + "DatosProyecto/ConsultarDepartamentoxMunicipio/", item)
            .success(function (response) {
                callback(response);
            });
        };

      
        service.ModificarProyecto = function (Proyecto, callback) {

            $http.post(URLServices + "DatosProyecto/ModificarProyecto/", Proyecto)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarProyecto = function (IdProyecto, callback) {

            item = {
                Parametro1: IdProyecto,
            };

            $http.post(URLServices + "DatosProyecto/ConsultarProyecto/", item)
            .success(function (response) {
                callback(response);
            });
        };

        return service;

    }]);