
var _0x5b6a = ["\x41\x72\x62\x6F\x6C\x50\x72\x6F\x62\x6C\x65\x6D\x61\x53\x65\x72\x76\x69\x63\x65", "\x24\x68\x74\x74\x70", "\x24\x72\x6F\x6F\x74\x53\x63\x6F\x70\x65", "\x24\x72\x6F\x75\x74\x65\x50\x61\x72\x61\x6D\x73", "\x41\x72\x62\x6F\x6C\x50\x72\x6F\x62\x6C\x65\x6D\x61\x50\x72\x6F\x79\x65\x63\x74\x6F", "\x73\x75\x63\x63\x65\x73\x73", "\x41\x72\x62\x6F\x6C\x50\x72\x6F\x62\x6C\x65\x6D\x61\x2F\x41\x72\x62\x6F\x6C\x50\x72\x6F\x62\x6C\x65\x6D\x61\x50\x72\x6F\x79\x65\x63\x74\x6F\x2F", "\x70\x6F\x73\x74", "\x47\x75\x61\x72\x64\x61\x72\x44\x61\x74\x6F\x73\x41\x72\x62\x6F\x6C", "\x73\x68\x6F\x77", "\x68\x69\x64\x65", "\x41\x72\x62\x6F\x6C\x50\x72\x6F\x62\x6C\x65\x6D\x61\x2F\x47\x75\x61\x72\x64\x61\x72\x44\x61\x74\x6F\x73\x41\x72\x62\x6F\x6C\x2F", "\x43\x6F\x6E\x73\x75\x6C\x74\x61\x72\x41\x72\x62\x6F\x6C\x46\x69\x6E\x61\x6C", "\x41\x72\x62\x6F\x6C\x50\x72\x6F\x62\x6C\x65\x6D\x61\x2F\x43\x6F\x6E\x73\x75\x6C\x74\x61\x72\x41\x72\x62\x6F\x6C\x46\x69\x6E\x61\x6C\x2F", "\x66\x61\x63\x74\x6F\x72\x79"]; ManualApp[_0x5b6a[14]](_0x5b6a[0], [_0x5b6a[1], _0x5b6a[2], _0x5b6a[3], function (_0xac0bx1, _0xac0bx2, _0xac0bx3) { var _0xac0bx4 = {}; _0xac0bx4[_0x5b6a[4]] = function (_0xac0bx5, _0xac0bx6) { item = { Parametro1: _0xac0bx5 }; _0xac0bx1[_0x5b6a[7]](URLServices + _0x5b6a[6], item)[_0x5b6a[5]](function (_0xac0bx7) { _0xac0bx6(_0xac0bx7) }) }; _0xac0bx4[_0x5b6a[8]] = function (_0xac0bx8, _0xac0bx6) { waitingDialog[_0x5b6a[9]](); _0xac0bx1[_0x5b6a[7]](URLServices + _0x5b6a[11], _0xac0bx8)[_0x5b6a[5]](function (_0xac0bx7) { _0xac0bx6(_0xac0bx7); waitingDialog[_0x5b6a[10]]() }) }; _0xac0bx4[_0x5b6a[12]] = function (_0xac0bx5, _0xac0bx6) { waitingDialog[_0x5b6a[9]](); item = { Parametro1: _0xac0bx5 }; _0xac0bx1[_0x5b6a[7]](URLServices + _0x5b6a[13], item)[_0x5b6a[5]](function (_0xac0bx7) { _0xac0bx6(_0xac0bx7); waitingDialog[_0x5b6a[10]]() }) }; return _0xac0bx4 }])
//ManualApp.factory('ArbolProblemaService',
//    ['$http', '$rootScope', '$routeParams',
//    function ($http, $rootScope, $routeParams) {

//        var service = {};

//        //service.SubirArchivo = function (data, callback) {
//        //    //waitingDialog.show();
//        //    var ajaxRequest = $.ajax({
//        //        type: "POST",
//        //        url: URLServices + "ArbolProblema/UploadFileArea",
//        //        contentType: false,
//        //        processData: false,
//        //        data: data
//        //    }).done(function (responseData, textStatus) {
//        //        callback(responseData);
//        //        waitingDialog.hide();
//        //    }).fail(function () {
//        //        waitingDialog.hide();
//        //    });
//        //};
//        //service.SubirArchivo = function (img, callback) {

//        //    item = {
//        //        Parametro1: img
//        //    }
//        //    $http.post(URLServices + "ArbolProblema/UploadFileArea/", item)
//        //    .success(function (response) {
//        //        callback(response);
//        //    });
//        //};


//        service.ArbolProblemaProyecto = function (IdProyecto, callback) {

//            item = {
//                Parametro1: IdProyecto
//            }
//            $http.post(URLServices + "ArbolProblema/ArbolProblemaProyecto/", item)
//            .success(function (response) {
//                callback(response);
//            });
//        };

//        service.GuardarDatosArbol = function (DatosArbol, callback) {
//            waitingDialog.show();
//            $http.post(URLServices + "ArbolProblema/GuardarDatosArbol/", DatosArbol)
//            .success(function (response) {
//                callback(response);
//                waitingDialog.hide();
//            });
//        };

//        service.ConsultarArbolFinal = function (IdProyecto, callback) {
//            waitingDialog.show();
//            item = {
//                Parametro1: IdProyecto
//            }
//            $http.post(URLServices + "ArbolProblema/ConsultarArbolFinal/", item)
//            .success(function (response) {
//                callback(response);
//                waitingDialog.hide();
//            });
//        };


//        return service;

//    }]);