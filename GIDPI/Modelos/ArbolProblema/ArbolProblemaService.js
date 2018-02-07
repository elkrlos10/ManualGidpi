//var _0x550c = ['ArbolProblema/GuardarDatosArbol/', 'success', 'ConsultarArbolFinal', 'factory', '$rootScope', 'ArbolProblemaProyecto', 'post', 'ArbolProblema/ArbolProblemaProyecto/', 'GuardarDatosArbol']; (function (_0x231fd0, _0x4f680a) { var _0x5b4826 = function (_0x4a3682) { while (--_0x4a3682) { _0x231fd0['push'](_0x231fd0['shift']()); } }; _0x5b4826(++_0x4f680a); }(_0x550c, 0x123)); var _0x56ae = function (_0xe4c13b, _0x476cb0) { _0xe4c13b = _0xe4c13b - 0x0; var _0x26b39d = _0x550c[_0xe4c13b]; return _0x26b39d; }; ManualApp[_0x56ae('0x0')]('ArbolProblemaService', ['$http', _0x56ae('0x1'), '$routeParams', function (_0x333808, _0x432180, _0x2ab90b) { var _0x991246 = {}; _0x991246[_0x56ae('0x2')] = function (_0x57b080, _0x219af0) { item = { 'Parametro1': _0x57b080 }; _0x333808[_0x56ae('0x3')](URLServices + _0x56ae('0x4'), item)['success'](function (_0x503809) { _0x219af0(_0x503809); }); }; _0x991246[_0x56ae('0x5')] = function (_0x56465b, _0x52cace) { _0x333808[_0x56ae('0x3')](URLServices + _0x56ae('0x6'), _0x56465b)[_0x56ae('0x7')](function (_0x3ab53f) { _0x52cace(_0x3ab53f); }); }; _0x991246[_0x56ae('0x8')] = function (_0xbd1168, _0x4a4c56) { item = { 'Parametro1': _0xbd1168 }; _0x333808['post'](URLServices + 'ArbolProblema/ConsultarArbolFinal/', item)['success'](function (_0x273d4d) { _0x4a4c56(_0x273d4d); }); }; return _0x991246; }]);
ManualApp.factory('ArbolProblemaService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};

        //service.SubirArchivo = function (data, callback) {
        //    //waitingDialog.show();
        //    var ajaxRequest = $.ajax({
        //        type: "POST",
        //        url: URLServices + "ArbolProblema/UploadFileArea",
        //        contentType: false,
        //        processData: false,
        //        data: data
        //    }).done(function (responseData, textStatus) {
        //        callback(responseData);
        //        waitingDialog.hide();
        //    }).fail(function () {
        //        waitingDialog.hide();
        //    });
        //};
        //service.SubirArchivo = function (img, callback) {

        //    item = {
        //        Parametro1: img
        //    }
        //    $http.post(URLServices + "ArbolProblema/UploadFileArea/", item)
        //    .success(function (response) {
        //        callback(response);
        //    });
        //};


        service.ArbolProblemaProyecto = function (IdProyecto, callback) {

            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "ArbolProblema/ArbolProblemaProyecto/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.GuardarDatosArbol = function (DatosArbol, callback) {

            $http.post(URLServices + "ArbolProblema/GuardarDatosArbol/", DatosArbol)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarArbolFinal = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "ArbolProblema/ConsultarArbolFinal/", item)
            .success(function (response) {
                callback(response);
            });
        };


        return service;

    }]);