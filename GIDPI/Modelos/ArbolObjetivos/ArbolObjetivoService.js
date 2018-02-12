//var _0x4ecb=['$rootScope','$routeParams','post','ArbolProblema/ConsultarArbolFinal/','success','GuardarDatosArbol','ArbolObjetivo/GuardarDatosArbol/','ArbolObjetivo/ConsultarArbolObjetivosFinal/','GuardarObjetivos','ArbolObjetivo/GuardarObjetivos/','ConsultarDatosObjetivos','ArbolObjetivo/ConsultarDatosObjetivos/','ArbolObjetivoService'];(function(_0x22bc13,_0x1d91c7){var _0x23b2e5=function(_0x3fc6fc){while(--_0x3fc6fc){_0x22bc13['push'](_0x22bc13['shift']());}};_0x23b2e5(++_0x1d91c7);}(_0x4ecb,0x19f));var _0x3ea4=function(_0x5a03a3,_0x296b2d){_0x5a03a3=_0x5a03a3-0x0;var _0xc2761d=_0x4ecb[_0x5a03a3];return _0xc2761d;};ManualApp['factory'](_0x3ea4('0x0'),['$http',_0x3ea4('0x1'),_0x3ea4('0x2'),function(_0x299bd8,_0xfdbe78,_0xfb9ca7){var _0x2d3aaf={};_0x2d3aaf['ConsultarArbolFinal']=function(_0x7d4f99,_0x2690ec){item={'Parametro1':_0x7d4f99};_0x299bd8[_0x3ea4('0x3')](URLServices+_0x3ea4('0x4'),item)[_0x3ea4('0x5')](function(_0x132abb){_0x2690ec(_0x132abb);});};_0x2d3aaf[_0x3ea4('0x6')]=function(_0x1c02dd,_0x585ee8){_0x299bd8[_0x3ea4('0x3')](URLServices+_0x3ea4('0x7'),_0x1c02dd)[_0x3ea4('0x5')](function(_0x19bc1a){_0x585ee8(_0x19bc1a);});};_0x2d3aaf['ConsultarArbolObjetivosFinal']=function(_0x1b13ee,_0x526242){item={'Parametro1':_0x1b13ee};_0x299bd8[_0x3ea4('0x3')](URLServices+_0x3ea4('0x8'),item)['success'](function(_0x27ec35){_0x526242(_0x27ec35);});};_0x2d3aaf[_0x3ea4('0x9')]=function(_0x153e7a,_0x1caf48){_0x299bd8[_0x3ea4('0x3')](URLServices+_0x3ea4('0xa'),_0x153e7a)[_0x3ea4('0x5')](function(_0x52286d){_0x1caf48(_0x52286d);});};_0x2d3aaf[_0x3ea4('0xb')]=function(_0x1bfff7,_0x180c02){item={'Parametro1':_0x1bfff7};_0x299bd8[_0x3ea4('0x3')](URLServices+_0x3ea4('0xc'),item)['success'](function(_0x3ba9f9){_0x180c02(_0x3ba9f9);});};return _0x2d3aaf;}]);



ManualApp.factory('ArbolObjetivoService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};

        service.ConsultarArbolFinal = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "ArbolProblema/ConsultarArbolFinal/", item)
            .success(function (response) {
                callback(response);
            });
        };



        service.GuardarDatosArbol = function (DatosArbol, callback) {

            $http.post(URLServices + "ArbolObjetivo/GuardarDatosArbol/", DatosArbol)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarArbolObjetivosFinal = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "ArbolObjetivo/ConsultarArbolObjetivosFinal/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.GuardarObjetivos = function (objetivos, callback) {

            $http.post(URLServices + "ArbolObjetivo/GuardarObjetivos/", objetivos)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarDatosObjetivos = function (IdProyecto,callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "ArbolObjetivo/ConsultarDatosObjetivos/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarResultadosObj = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "ArbolObjetivo/ConsultarResultadosObj/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.GuardarObjetivosEspecificos = function (ObjetivosEspecificos, callback) {
        
            $http.post(URLServices + "ArbolObjetivo/GuardarObjetivosEspecificos/", ObjetivosEspecificos)
            .success(function (response) {
                callback(response);
            });
        };
        //service.SubirArchivo = function (img, callback) {

        //    item = {
        //        Parametro1: img
        //    }
        //    $http.post(URLServices + "ArbolObjetivo/UploadFileArea/", item)
        //    .success(function (response) {
        //        callback(response);
        //    });
        //};
        return service;

    }]);