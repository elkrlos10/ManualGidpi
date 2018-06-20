/// <reference path="Login/Login.js" />
/// <reference path="Login/LoginService.js" />
// script.js


// create the module and name it scotchApp
var ManualApp = angular.module('ManualApp', ['ngRoute', 'ngCookies', 'ejangular']);

// configure our routes
ManualApp.config(function ($routeProvider) {
    $routeProvider
    //$locationProvider

    // route for the home page

          .when('/InfoBasica', {
              templateUrl: 'Views/DatosProyecto.html',
              controller: 'DatosProyectoController'
          })

            .when('/Matriz', {
                templateUrl: 'Views/MatrizView.html',
                controller: 'MatrizController'
            })

            .when('/Menu', {
                templateUrl: 'Views/menuPricinpal.html',
                controller: 'MenuController'
            })


             .when('/ArbolProblema', {
                 templateUrl: 'Views/ArbolView.html',
                 controller: 'ArbolProblemaController'
             })

             .when('/Login', {
                 templateUrl: 'Views/login.html',
                 controller: 'LoginController'
             })


             .when('/Objetivos', {
                 templateUrl: 'Views/ObjetivosView.html',
                 controller: 'ArbolObjetivosController'
             })

            .when('/Involucrados', {
                templateUrl: 'Views/involucrados.html',
                controller: 'InvolucradosController'
            })

            .when('/PerfilProyecto', {
                templateUrl: 'Views/PerfilProyecto.html',
                controller: 'PerfilProyectoController'
            })

            .when('/Cronograma', {
                templateUrl: 'Views/cronogramaPresupuesto.html',
                controller: 'CronogramaPresupuestoController'
            })

            .when('/MarcoL', {
                templateUrl: 'Views/MarcoLogico.html',
                controller: 'MarcoLogicoController'
            })

              .when('/Reporte', {
                  templateUrl: 'Views/Reporte.html',
                  controller: 'ReporteController'
              })
            .when('/Admin', {
                templateUrl: 'Views/AdminView.html',
                controller: 'AdminController'
            })


      .when('/Colaboradores', {
          templateUrl: 'Views/Colaboradores.html',
          controller: 'ColabodoresController'
      })
    //$locationProvider.html5Mode(true);

})
.run(['$rootScope', '$location', '$cookies', '$cookieStore', '$http', '$templateCache',
    function ($rootScope, $location, $cookies, $cookieStore, $http, $templateCache) {
        //$rootScope.$on('$locationChangeStart', function (event, next, current) {

        //    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        //        if (typeof (current) !== 'undefined') {
        //            $templateCache.remove(current.templateUrl);
        //        }
        //    });

        //    $rootScope.globals = $cookieStore.get('username');

        //    $rootScope.proyecto = {
        //        datos: {
        //            id: "",
        //            Tema: "",
        //            IdUsuario: "",
        //            Etapa: ""
        //        }
        //    };

        //    $rootScope.proyecto = $cookieStore.get('datosProyecto');

        //    //Posición para las alertas
        //    alertify.set('notifier', 'position', 'top-right');

        //    if ($rootScope.globals != undefined) {
        //        if ($rootScope.globals.currentUser.tipousuario == 3) {
        //            $location.url("/Admin");
        //            return false;
        //        }

        //        if (!$rootScope.proyecto && $rootScope.InicioProyecto == 0 && $location.path() != '/Colaboradores') {
        //            $location.url("/Menu");

        //        } else {

        //            //Para redireccionar de acuerdo al tipo de usuario

        //            if ($rootScope.proyecto == undefined) {
        //                return;
        //            }

        //            if ($rootScope.proyecto.datos.Etapa == 1 && ($location.path() == '/Reporte' || $location.path() == '/Objetivos' || $location.path() == '/Involucrados'
        //                || $location.path() == '/PerfilProyecto' || $location.path() == '/Cronograma' || $location.path() == '/MarcoL')) {

        //                $location.url("/Menu");
        //                return;
        //            }
        //            if ($rootScope.proyecto.datos.Etapa == 2 && ($location.path() == '/Reporte' || $location.path() == '/Objetivos' || $location.path() == '/Involucrados'
        //                || $location.path() == '/PerfilProyecto' || $location.path() == '/Cronograma' || $location.path() == '/MarcoL')) {

        //                $location.url("/Menu");
        //                return;
        //            }
        //            if ($rootScope.proyecto.datos.Etapa == 3 && ($location.path() == '/Reporte' || $location.path() == '/Involucrados'
        //               || $location.path() == '/PerfilProyecto' || $location.path() == '/Cronograma' || $location.path() == '/MarcoL')) {

        //                $location.url("/Menu");
        //                return;
        //            }
        //            if ($rootScope.proyecto.datos.Etapa == 5 && ($location.path() == '/Reporte' || $location.path() == '/PerfilProyecto'
        //                || $location.path() == '/Cronograma' || $location.path() == '/MarcoL')) {
        //                $location.url("/Menu");
        //                return;
        //            }
        //            if ($rootScope.proyecto.datos.Etapa == 6 && ($location.path() == '/Reporte' || $location.path() == '/Cronograma' || $location.path() == '/MarcoL')) {
        //                $location.url("/Menu");
        //                return;
        //            }
        //            if ($rootScope.proyecto.datos.Etapa == 8 && ($location.path() == '/Reporte' || $location.path() == '/MarcoL')) {
        //                $location.url("/Menu");
        //                return;
        //            }
        //            if ($rootScope.proyecto.datos.etapa == 10 && ($location.path() == '/Reporte')) {
        //                $location.url("/Menu");
        //                return;
        //            }


        //            //if ($rootScope.proyecto.datos.Etapa < 11 && $location.path() == '/Reporte') {
        //            //    $location.url("/Menu");

        //            //}
        //        }

        //    } else {
        //        $location.url("/Login");
        //    }


        //});
        var _0x5d97 = ["\x24\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x43\x68\x61\x6E\x67\x65\x53\x74\x61\x72\x74", "\x24\x72\x6F\x75\x74\x65\x43\x68\x61\x6E\x67\x65\x53\x74\x61\x72\x74", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x74\x65\x6D\x70\x6C\x61\x74\x65\x55\x72\x6C", "\x72\x65\x6D\x6F\x76\x65", "\x67\x6C\x6F\x62\x61\x6C\x73", "\x75\x73\x65\x72\x6E\x61\x6D\x65", "\x67\x65\x74", "\x70\x72\x6F\x79\x65\x63\x74\x6F", "", "\x64\x61\x74\x6F\x73\x50\x72\x6F\x79\x65\x63\x74\x6F", "\x6E\x6F\x74\x69\x66\x69\x65\x72", "\x70\x6F\x73\x69\x74\x69\x6F\x6E", "\x74\x6F\x70\x2D\x72\x69\x67\x68\x74", "\x73\x65\x74", "\x74\x69\x70\x6F\x75\x73\x75\x61\x72\x69\x6F", "\x63\x75\x72\x72\x65\x6E\x74\x55\x73\x65\x72", "\x2F\x41\x64\x6D\x69\x6E", "\x75\x72\x6C", "\x49\x6E\x69\x63\x69\x6F\x50\x72\x6F\x79\x65\x63\x74\x6F", "\x70\x61\x74\x68", "\x2F\x43\x6F\x6C\x61\x62\x6F\x72\x61\x64\x6F\x72\x65\x73", "\x2F\x4D\x65\x6E\x75", "\x45\x74\x61\x70\x61", "\x64\x61\x74\x6F\x73", "\x2F\x52\x65\x70\x6F\x72\x74\x65", "\x2F\x4F\x62\x6A\x65\x74\x69\x76\x6F\x73", "\x2F\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x73", "\x2F\x50\x65\x72\x66\x69\x6C\x50\x72\x6F\x79\x65\x63\x74\x6F", "\x2F\x43\x72\x6F\x6E\x6F\x67\x72\x61\x6D\x61", "\x2F\x4D\x61\x72\x63\x6F\x4C", "\x65\x74\x61\x70\x61", "\x2F\x4C\x6F\x67\x69\x6E"]; $rootScope.$on(_0x5d97[0], function (_0x67c9x1, _0x67c9x2, _0x67c9x3) { $rootScope.$on(_0x5d97[1], function (_0x67c9x1, _0x67c9x2, _0x67c9x3) { if (typeof (_0x67c9x3) !== _0x5d97[2]) { $templateCache[_0x5d97[4]](_0x67c9x3[_0x5d97[3]]) } }); $rootScope[_0x5d97[5]] = $cookieStore[_0x5d97[7]](_0x5d97[6]); $rootScope[_0x5d97[8]] = { datos: { id: _0x5d97[9], Tema: _0x5d97[9], IdUsuario: _0x5d97[9], Etapa: _0x5d97[9] } }; $rootScope[_0x5d97[8]] = $cookieStore[_0x5d97[7]](_0x5d97[10]); alertify[_0x5d97[14]](_0x5d97[11], _0x5d97[12], _0x5d97[13]); if ($rootScope[_0x5d97[5]] != undefined) { if ($rootScope[_0x5d97[5]][_0x5d97[16]][_0x5d97[15]] == 3) { $location[_0x5d97[18]](_0x5d97[17]); return false }; if (!$rootScope[_0x5d97[8]] && $rootScope[_0x5d97[19]] == 0 && $location[_0x5d97[20]]() != _0x5d97[21]) { $location[_0x5d97[18]](_0x5d97[22]) } else { if ($rootScope[_0x5d97[8]] == undefined) { return }; if ($rootScope[_0x5d97[8]][_0x5d97[24]][_0x5d97[23]] == 1 && ($location[_0x5d97[20]]() == _0x5d97[25] || $location[_0x5d97[20]]() == _0x5d97[26] || $location[_0x5d97[20]]() == _0x5d97[27] || $location[_0x5d97[20]]() == _0x5d97[28] || $location[_0x5d97[20]]() == _0x5d97[29] || $location[_0x5d97[20]]() == _0x5d97[30])) { $location[_0x5d97[18]](_0x5d97[22]); return }; if ($rootScope[_0x5d97[8]][_0x5d97[24]][_0x5d97[23]] == 2 && ($location[_0x5d97[20]]() == _0x5d97[25] || $location[_0x5d97[20]]() == _0x5d97[26] || $location[_0x5d97[20]]() == _0x5d97[27] || $location[_0x5d97[20]]() == _0x5d97[28] || $location[_0x5d97[20]]() == _0x5d97[29] || $location[_0x5d97[20]]() == _0x5d97[30])) { $location[_0x5d97[18]](_0x5d97[22]); return }; if ($rootScope[_0x5d97[8]][_0x5d97[24]][_0x5d97[23]] == 3 && ($location[_0x5d97[20]]() == _0x5d97[25] || $location[_0x5d97[20]]() == _0x5d97[27] || $location[_0x5d97[20]]() == _0x5d97[28] || $location[_0x5d97[20]]() == _0x5d97[29] || $location[_0x5d97[20]]() == _0x5d97[30])) { $location[_0x5d97[18]](_0x5d97[22]); return }; if ($rootScope[_0x5d97[8]][_0x5d97[24]][_0x5d97[23]] == 5 && ($location[_0x5d97[20]]() == _0x5d97[25] || $location[_0x5d97[20]]() == _0x5d97[28] || $location[_0x5d97[20]]() == _0x5d97[29] || $location[_0x5d97[20]]() == _0x5d97[30])) { $location[_0x5d97[18]](_0x5d97[22]); return }; if ($rootScope[_0x5d97[8]][_0x5d97[24]][_0x5d97[23]] == 6 && ($location[_0x5d97[20]]() == _0x5d97[25] || $location[_0x5d97[20]]() == _0x5d97[29] || $location[_0x5d97[20]]() == _0x5d97[30])) { $location[_0x5d97[18]](_0x5d97[22]); return }; if ($rootScope[_0x5d97[8]][_0x5d97[24]][_0x5d97[23]] == 8 && ($location[_0x5d97[20]]() == _0x5d97[25] || $location[_0x5d97[20]]() == _0x5d97[30])) { $location[_0x5d97[18]](_0x5d97[22]); return }; if ($rootScope[_0x5d97[8]][_0x5d97[24]][_0x5d97[31]] == 10 && ($location[_0x5d97[20]]() == _0x5d97[25])) { $location[_0x5d97[18]](_0x5d97[22]); return } } } else { $location[_0x5d97[18]](_0x5d97[32]) } })
    }]);


// crear la directiva "format" para Formatear con punto de miles los inputs.

ManualApp.$inject = ['$scope'];

ManualApp.directive('format', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;


            ctrl.$formatters.unshift(function (a) {
                return $filter(attrs.format)(ctrl.$modelValue)
            });


            ctrl.$parsers.unshift(function (viewValue) {
                var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
                elem.val($filter(attrs.format)(plainNumber));
                return plainNumber;
            });
        }
    };
}]);

//---------------------------------------------------------------------------

// create the controller and inject Angular's $scope
var _0xa097 = ["\x50\x72\x69\x6E\x63\x69\x70\x61\x6C\x43\x6F\x6E\x74\x72\x6F\x6C\x6C\x65\x72", "\x24\x73\x63\x6F\x70\x65", "\x24\x72\x6F\x6F\x74\x53\x63\x6F\x70\x65", "\x24\x68\x74\x74\x70", "\x24\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x24\x63\x6F\x6F\x6B\x69\x65\x73", "\x24\x63\x6F\x6F\x6B\x69\x65\x53\x74\x6F\x72\x65", "\x63\x65\x72\x72\x61\x72\x53\x65\x73\x69\x6F\x6E", "\x64\x61\x74\x6F\x73\x50\x72\x6F\x79\x65\x63\x74\x6F", "\x72\x65\x6D\x6F\x76\x65", "\x75\x73\x65\x72\x6E\x61\x6D\x65", "\x6E\x6F\x6D\x62\x72\x65\x50\x72\x6F\x79\x65\x63\x74\x6F", "", "\x2F\x4C\x6F\x67\x69\x6E", "\x75\x72\x6C", "\x52\x65\x67\x72\x65\x73\x61\x72", "\x2F\x4D\x65\x6E\x75", "\x43\x6F\x6C\x61\x62\x6F\x72\x61\x64\x6F\x72\x65\x73", "\x2F\x43\x6F\x6C\x61\x62\x6F\x72\x61\x64\x6F\x72\x65\x73", "\x63\x6F\x6E\x74\x72\x6F\x6C\x6C\x65\x72"]; ManualApp[_0xa097[19]](_0xa097[0], [_0xa097[1], _0xa097[2], _0xa097[3], _0xa097[4], _0xa097[5], _0xa097[6], function (_0x8b70x1, _0x8b70x2, _0x8b70x3, _0x8b70x4, _0x8b70x5, _0x8b70x6) { _0x8b70x2[_0xa097[7]] = function () { _0x8b70x5[_0xa097[9]](_0xa097[8]); _0x8b70x5[_0xa097[9]](_0xa097[10]); _0x8b70x2[_0xa097[11]] = _0xa097[12]; _0x8b70x4[_0xa097[14]](_0xa097[13]); VideoDemo = 0 }; _0x8b70x2[_0xa097[15]] = function () { _0x8b70x4[_0xa097[14]](_0xa097[16]) }; _0x8b70x2[_0xa097[17]] = function () { _0x8b70x4[_0xa097[14]](_0xa097[18]) } }])
//ManualApp.controller('PrincipalController',
//    ['$scope', '$rootScope', '$http', '$location', '$cookies', '$cookieStore',
//    function ($scope, $rootScope, $http, $location, $cookies, $cookieStore) {

//        $rootScope.cerrarSesion = function () {
//            $cookies.remove("datosProyecto");
//            $cookies.remove("username");
//            $rootScope.nombreProyecto = "";
//            $location.url("/Login");
//            VideoDemo = 0;
//        }

//        $rootScope.Regresar = function () {
//            $location.url("/Menu");
//        }

//        $rootScope.Colaboradores = function () {
//            $location.url("/Colaboradores")
//        }

//        //$scope.UsuarioCambiarPass = {
//        //    Password: "",
//        //    newPass: ""
//        //};

//        //$scope.AbrirModalCambiarPass = function () {
//        //    $("#ModalCambiarPass").modal("show");
//        //};

//        //$scope.CambiarPass = function () {
//        //    LoginService.CambiarPassword($scope.UsuarioCambiarPass, $rootScope.globals.currentUser.id, function (response) {
//        //        if (response.success = true) {

//        //            bootbox.dialog({
//        //                title: "Información",
//        //                message: "El cambio de contraseña se realizó con éxito",
//        //                buttons: {
//        //                    success: {
//        //                        label: "Cerrar",
//        //                        className: "btn-primary",
//        //                    }
//        //                }
//        //            });
//        //        }
//        //    })
//        //};
//    }]);


