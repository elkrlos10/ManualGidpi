//var _0x42e8 = ['success', 'ArbolObjetivo/GuardarDatosArbol/', 'ConsultarArbolObjetivosFinal', 'ArbolObjetivo/ConsultarArbolObjetivosFinal/', 'GuardarObjetivos', 'ArbolObjetivo/GuardarObjetivos/', 'ConsultarDatosObjetivos', 'ConsultarResultadosObj', 'ArbolObjetivo/ConsultarResultadosObj/', 'GuardarObjetivosEspecificos', 'ArbolObjetivo/GuardarObjetivosEspecificos/', 'ArbolObjetivoService', '$rootScope', '$routeParams', 'post', 'ArbolProblema/ConsultarArbolFinal/']; (function (_0x2c178a, _0x59ead9) { var _0xcbddac = function (_0x4a16cc) { while (--_0x4a16cc) { _0x2c178a['push'](_0x2c178a['shift']()); } }; _0xcbddac(++_0x59ead9); }(_0x42e8, 0x8b)); var _0x32b2 = function (_0x3f2ca1, _0x21563e) { _0x3f2ca1 = _0x3f2ca1 - 0x0; var _0x594fd9 = _0x42e8[_0x3f2ca1]; return _0x594fd9; }; ManualApp['factory'](_0x32b2('0x0'), ['$http', _0x32b2('0x1'), _0x32b2('0x2'), function (_0x4d6f7d, _0x473dc6, _0x5e451e) { var _0x384fee = {}; _0x384fee['ConsultarArbolFinal'] = function (_0x29619a, _0x203a99) { item = { 'Parametro1': _0x29619a }; _0x4d6f7d[_0x32b2('0x3')](URLServices + _0x32b2('0x4'), item)[_0x32b2('0x5')](function (_0x79451e) { _0x203a99(_0x79451e); }); }; _0x384fee['GuardarDatosArbol'] = function (_0x29ba0a, _0x37c8d1) { _0x4d6f7d[_0x32b2('0x3')](URLServices + _0x32b2('0x6'), _0x29ba0a)[_0x32b2('0x5')](function (_0x2989d2) { _0x37c8d1(_0x2989d2); }); }; _0x384fee[_0x32b2('0x7')] = function (_0x1c8d63, _0x341418) { item = { 'Parametro1': _0x1c8d63 }; _0x4d6f7d[_0x32b2('0x3')](URLServices + _0x32b2('0x8'), item)[_0x32b2('0x5')](function (_0x5ce674) { _0x341418(_0x5ce674); }); }; _0x384fee[_0x32b2('0x9')] = function (_0x35d185, _0x575114) { _0x4d6f7d['post'](URLServices + _0x32b2('0xa'), _0x35d185)[_0x32b2('0x5')](function (_0x179756) { _0x575114(_0x179756); }); }; _0x384fee[_0x32b2('0xb')] = function (_0x23ab86, _0x3faf1c) { item = { 'Parametro1': _0x23ab86 }; _0x4d6f7d[_0x32b2('0x3')](URLServices + 'ArbolObjetivo/ConsultarDatosObjetivos/', item)[_0x32b2('0x5')](function (_0x3b053c) { _0x3faf1c(_0x3b053c); }); }; _0x384fee[_0x32b2('0xc')] = function (_0xe5d43, _0x518a1f) { item = { 'Parametro1': _0xe5d43 }; _0x4d6f7d[_0x32b2('0x3')](URLServices + _0x32b2('0xd'), item)[_0x32b2('0x5')](function (_0x2a1b58) { _0x518a1f(_0x2a1b58); }); }; _0x384fee[_0x32b2('0xe')] = function (_0x3a7499, _0x3c0d75) { _0x4d6f7d[_0x32b2('0x3')](URLServices + _0x32b2('0xf'), _0x3a7499)['success'](function (_0x5c2ebd) { _0x3c0d75(_0x5c2ebd); }); }; return _0x384fee; }]);

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