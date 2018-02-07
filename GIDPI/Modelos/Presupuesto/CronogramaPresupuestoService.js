//var _0x1fb3=['$http','$rootScope','$routeParams','GuardarCronograma','post','CronogramaPresupuesto/GuardarCronograma/','success','ConsultarCronograma','CronogramaPresupuesto/ConsultarCronograma/','eliminarItemCronograma','AbrirProyecto','GuardarPresupuesto','CronogramaPresupuesto/GuardarPresupuesto/','GuardarAIU','CronogramaPresupuesto/ConsultarAIU/','ConsultarPresupuesto','CronogramaPresupuesto/ConsultarPresupuesto/','factory'];(function(_0x2165ca,_0x369168){var _0x4e0752=function(_0x3274f3){while(--_0x3274f3){_0x2165ca['push'](_0x2165ca['shift']());}};_0x4e0752(++_0x369168);}(_0x1fb3,0x7d));var _0x51d1=function(_0x51177b,_0x52cc12){_0x51177b=_0x51177b-0x0;var _0x267abb=_0x1fb3[_0x51177b];return _0x267abb;};ManualApp[_0x51d1('0x0')]('CronogramaPresupuestoService',[_0x51d1('0x1'),_0x51d1('0x2'),_0x51d1('0x3'),function(_0x4b4ec9,_0x558060,_0x1eeb5a){var _0x415817={};_0x415817[_0x51d1('0x4')]=function(_0x8638a2,_0x2cacbb){_0x4b4ec9[_0x51d1('0x5')](URLServices+_0x51d1('0x6'),_0x8638a2)[_0x51d1('0x7')](function(_0x750836){_0x2cacbb(_0x750836);});};_0x415817[_0x51d1('0x8')]=function(_0x41fdf7,_0x5bdc64){item={'Parametro1':_0x41fdf7};_0x4b4ec9[_0x51d1('0x5')](URLServices+_0x51d1('0x9'),item)[_0x51d1('0x7')](function(_0x52d517){_0x5bdc64(_0x52d517);});};_0x415817[_0x51d1('0xa')]=function(_0x4d5976,_0x2eea26){item={'Parametro1':_0x4d5976};_0x4b4ec9[_0x51d1('0x5')](URLServices+'CronogramaPresupuesto/eliminarItemCronograma/',item)['success'](function(_0xc950d4){_0x2eea26(_0xc950d4);});};_0x415817[_0x51d1('0xb')]=function(_0x4c0995,_0x34ebf3){item={'Parametro1':_0x4c0995};_0x4b4ec9[_0x51d1('0x5')](URLServices+'Menu/AbrirProyecto/',item)[_0x51d1('0x7')](function(_0x17c504){_0x34ebf3(_0x17c504);});};_0x415817[_0x51d1('0xc')]=function(_0x39aa13,_0x56dc61){_0x4b4ec9[_0x51d1('0x5')](URLServices+_0x51d1('0xd'),_0x39aa13)[_0x51d1('0x7')](function(_0x471023){_0x56dc61(_0x471023);});};_0x415817[_0x51d1('0xe')]=function(_0x32d5d4,_0x50b405){_0x4b4ec9['post'](URLServices+'CronogramaPresupuesto/GuardarAIU/',_0x32d5d4)[_0x51d1('0x7')](function(_0x5a608a){_0x50b405(_0x5a608a);});};_0x415817['ConsultarAIU']=function(_0x5e1380,_0x35f0f6){item={'Parametro1':_0x5e1380};_0x4b4ec9['post'](URLServices+_0x51d1('0xf'),item)[_0x51d1('0x7')](function(_0x1b76ce){_0x35f0f6(_0x1b76ce);});};_0x415817[_0x51d1('0x10')]=function(_0xb9d402,_0x5f4094){item={'Parametro1':_0xb9d402};_0x4b4ec9[_0x51d1('0x5')](URLServices+_0x51d1('0x11'),item)[_0x51d1('0x7')](function(_0x176f18){_0x5f4094(_0x176f18);});};return _0x415817;}]);
ManualApp.factory('CronogramaPresupuestoService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};

        service.GuardarCronograma = function (Cronograma, callback) {
            $http.post(URLServices + "CronogramaPresupuesto/GuardarCronograma/", Cronograma)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarCronograma = function (IdProyecto, callback) {

            item =
            {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "CronogramaPresupuesto/ConsultarCronograma/", item)
            .success(function (response) {
                callback(response);
            });
        };


        service.eliminarItemCronograma = function (idCronograma, callback) {

            item =
            {
                Parametro1: idCronograma
            }
            $http.post(URLServices + "CronogramaPresupuesto/eliminarItemCronograma/", item)
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



        service.GuardarPresupuesto = function (Presupuesto, callback) {
            $http.post(URLServices + "CronogramaPresupuesto/GuardarPresupuesto/", Presupuesto)
            .success(function (response) {
                callback(response);
            });
        };

        service.GuardarAIU = function (AIU, callback) {
            $http.post(URLServices + "CronogramaPresupuesto/GuardarAIU/", AIU)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarAIU = function (IdProyecto, callback) {
            item =
          {
              Parametro1: IdProyecto
          }
            $http.post(URLServices + "CronogramaPresupuesto/ConsultarAIU/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarPresupuesto = function (IdProyecto, callback) {

            item =
            {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "CronogramaPresupuesto/ConsultarPresupuesto/", item)
            .success(function (response) {
                callback(response);
            });
        };

        return service;

    }])