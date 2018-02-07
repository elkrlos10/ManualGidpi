//var _0x304a=['Documento','El\x20campo\x20Documento\x20no\x20puede\x20estar\x20vacio','length','El\x20campo\x20Documento\x20no\x20puede\x20ser\x20menor\x20a\x206\x20caracteres','Contrasena','El\x20campo\x20Contraseña\x20no\x20puede\x20estar\x20vacio','El\x20campo\x20contraseña\x20no\x20puede\x20ser\x20menor\x20a\x206\x20caracteres','Email','Telefono','El\x20campo\x20Telefono\x20no\x20puede\x20estar\x20vacio','El\x20campo\x20Telefono\x20no\x20puede\x20ser\x20menor\x20a\x207\x20caracteres','show','RegistrarPersonaNatural','hide','mensaje','Registro\x20Exitoso.','#238276','El\x20nombre\x20usuario\x20ya\x20existe','RegistroPersonaJuridica','RazonSocial','PersonaJuridica','El\x20campo\x20RazonSocial\x20no\x20puede\x20estar\x20vacio','Nit','Responsable','El\x20campo\x20Responsable\x20no\x20puede\x20estar\x20vacio','El\x20campo\x20Email\x20no\x20puede\x20estar\x20vacio\x20o\x20debe\x20tener\x20una\x20direccion\x20correcta','El\x20campo\x20Usuario\x20no\x20puede\x20estar\x20vacio','El\x20campo\x20contraseña\x20no\x20puede\x20estar\x20vacio','25%','ConsultarUsuario','Usuario1','Necesita\x20ingresar\x20el\x20campo\x20de\x20Usuario','Necesita\x20ingresar\x20el\x20campo\x20de\x20contraseña','Bienvenido\x20a\x20GIDPI','usuario','IdUsuario','putObject','username','globals','url','/Menu','El\x20usuario\x20o\x20la\x20contraseña\x20es\x20incorrecta','ConsultarCorreo','email','ConsutarEmail','Respuesta\x20de\x20solicitud','#ModalOlvideContra','modal','UsuarioRecuperar','#ModalRecuperar','controller','LoginController','$scope','$rootScope','$location','LoginService','$cookies','$cookieStore','$routeParams','$sce','PersonaNatural','Usuario','recuperarContrasena','RegistroPersonaNatural','Nombre','El\x20campo\x20Nombre\x20no\x20puede\x20estar\x20vacio','Apellidos','success','El\x20campo\x20Apellidos\x20no\x20puede\x20estar\x20vacio'];(function(_0x144e35,_0x17d055){var _0x31b946=function(_0x1226a7){while(--_0x1226a7){_0x144e35['push'](_0x144e35['shift']());}};_0x31b946(++_0x17d055);}(_0x304a,0x18b));var _0x2723=function(_0x55e4c1,_0x12d53a){_0x55e4c1=_0x55e4c1-0x0;var _0x116afe=_0x304a[_0x55e4c1];return _0x116afe;};ManualApp[_0x2723('0x0')](_0x2723('0x1'),[_0x2723('0x2'),_0x2723('0x3'),_0x2723('0x4'),_0x2723('0x5'),_0x2723('0x6'),_0x2723('0x7'),_0x2723('0x8'),_0x2723('0x9'),function(_0x19787a,_0xebf99a,_0x5caacc,_0x9fddf8,_0x526153,_0x295a2a,_0x5e3200,_0x458cb6){_0x19787a[_0x2723('0xa')]={'Nombre':'','Apellidos':'','Documento':'','Usuario':'','Contrasena':'','Email':'','Telefono':''};_0x19787a['PersonaJuridica']={'RazonSocial':'','Nit':'','SectorEconomico':'','Responsable':'','Telefono':'','Usuario':'','Contrasena':''};_0x19787a[_0x2723('0xb')]={'Usuario1':'','Contrasena':'','TipoUsuario':''};_0x19787a[_0x2723('0xc')]={'email':''};_0x19787a[_0x2723('0xd')]=function(){if(_0x19787a['PersonaNatural'][_0x2723('0xe')]==null||_0x19787a[_0x2723('0xa')]['Nombre']==''){alertify['success'](_0x2723('0xf'));return![];}else if(_0x19787a[_0x2723('0xa')][_0x2723('0x10')]==null||_0x19787a[_0x2723('0xa')][_0x2723('0x10')]==''){alertify[_0x2723('0x11')](_0x2723('0x12'));return![];}else if(_0x19787a[_0x2723('0xa')][_0x2723('0x13')]==null||_0x19787a[_0x2723('0xa')][_0x2723('0x13')]==''){alertify[_0x2723('0x11')](_0x2723('0x14'));return![];}else if(String(_0x19787a[_0x2723('0xa')]['Documento'])[_0x2723('0x15')]<0x6){alertify[_0x2723('0x11')](_0x2723('0x16'));return![];}else if(_0x19787a[_0x2723('0xa')][_0x2723('0xb')]==null||_0x19787a['PersonaNatural']['Usuario']==''){alertify[_0x2723('0x11')]('El\x20campo\x20Usuario\x20no\x20puede\x20estar\x20vacio');return![];}else if(_0x19787a[_0x2723('0xa')][_0x2723('0x17')]==null||_0x19787a[_0x2723('0xa')][_0x2723('0x17')]==''){alertify[_0x2723('0x11')](_0x2723('0x18'));return![];}else if(String(_0x19787a[_0x2723('0xa')]['Contrasena'])['length']<0x6){alertify[_0x2723('0x11')](_0x2723('0x19'));return![];}else if(_0x19787a['PersonaNatural']['Email']==null||_0x19787a[_0x2723('0xa')][_0x2723('0x1a')]==''){alertify['success']('El\x20campo\x20Email\x20no\x20puede\x20estar\x20vacio\x20o\x20debe\x20tener\x20una\x20direccion\x20correcta');return![];}else if(_0x19787a['PersonaNatural'][_0x2723('0x1b')]==null||_0x19787a['PersonaNatural'][_0x2723('0x1b')]==''){alertify[_0x2723('0x11')](_0x2723('0x1c'));return![];}else if(String(_0x19787a[_0x2723('0xa')]['Telefono'])[_0x2723('0x15')]<0x7){alertify[_0x2723('0x11')](_0x2723('0x1d'));return![];}else{waitingDialog[_0x2723('0x1e')]();_0x9fddf8[_0x2723('0x1f')](_0x19787a[_0x2723('0xa')],function(_0x34511e){waitingDialog[_0x2723('0x20')]();if(_0x34511e[_0x2723('0x11')]){if(_0x34511e[_0x2723('0x21')]==_0x2723('0x22')){swal({'text':_0x2723('0x22'),'confirmButtonColor':_0x2723('0x23'),'width':'25%'});setTimeout(function(){location['reload']();},0x3e8);}else{alertify[_0x2723('0x11')](_0x2723('0x24'));}}});}};_0x19787a[_0x2723('0x25')]=function(){if(_0x19787a['PersonaJuridica'][_0x2723('0x26')]==null||_0x19787a[_0x2723('0x27')][_0x2723('0x26')]==''){alertify[_0x2723('0x11')](_0x2723('0x28'));return![];}else if(_0x19787a[_0x2723('0x27')][_0x2723('0x29')]==null||_0x19787a[_0x2723('0x27')][_0x2723('0x29')]==''){alertify[_0x2723('0x11')]('El\x20campo\x20Nit\x20no\x20puede\x20estar\x20vacio');return![];}else if(String(_0x19787a[_0x2723('0x27')][_0x2723('0x29')])[_0x2723('0x15')]<=0x6){alertify[_0x2723('0x11')]('El\x20campo\x20nit\x20no\x20puede\x20ser\x20menor\x20a\x206\x20caracteres');return![];}else if(_0x19787a['PersonaJuridica']['SectorEconomico']==null||_0x19787a[_0x2723('0x27')]['SectorEconomico']==''){alertify['success']('El\x20campo\x20SectorEconomico\x20no\x20puede\x20estar\x20vacio');return![];}else if(_0x19787a['PersonaJuridica'][_0x2723('0x2a')]==null||_0x19787a[_0x2723('0x27')][_0x2723('0x2a')]==''){alertify['success'](_0x2723('0x2b'));return![];}else if(_0x19787a[_0x2723('0x27')][_0x2723('0x1a')]==null||_0x19787a[_0x2723('0x27')]['Email']==''){alertify[_0x2723('0x11')](_0x2723('0x2c'));return![];}else if(_0x19787a['PersonaJuridica'][_0x2723('0xb')]==null||_0x19787a['PersonaJuridica'][_0x2723('0xb')]==''){alertify[_0x2723('0x11')](_0x2723('0x2d'));return![];}else if(_0x19787a[_0x2723('0x27')][_0x2723('0x17')]==null||_0x19787a[_0x2723('0x27')][_0x2723('0x17')]==''){alertify[_0x2723('0x11')](_0x2723('0x2e'));return![];}else if(String(_0x19787a[_0x2723('0x27')]['Contrasena'])[_0x2723('0x15')]<0x6){alertify['success'](_0x2723('0x19'));return![];}else if(String(_0x19787a[_0x2723('0x27')][_0x2723('0x1b')])[_0x2723('0x15')]<0x6){alertify[_0x2723('0x11')](_0x2723('0x19'));return![];}else if(String(_0x19787a[_0x2723('0x27')][_0x2723('0x1b')])[_0x2723('0x15')]<0x7){alertify[_0x2723('0x11')](_0x2723('0x1d'));return![];}else{waitingDialog[_0x2723('0x1e')]();_0x9fddf8[_0x2723('0x25')](_0x19787a[_0x2723('0x27')],function(_0x271da4){if(_0x271da4[_0x2723('0x11')]){if(_0x271da4[_0x2723('0x21')]==_0x2723('0x22')){swal({'text':_0x2723('0x22'),'confirmButtonColor':_0x2723('0x23'),'width':_0x2723('0x2f')});setTimeout(function(){location['reload']();},0x3e8);}else{alertify[_0x2723('0x11')]('El\x20nombre\x20usuario\x20ya\x20existe');}}});}};_0x19787a[_0x2723('0x30')]=function(){if(_0x19787a['Usuario']['Usuario1']==null||_0x19787a['Usuario'][_0x2723('0x31')]==''){alertify['success'](_0x2723('0x32'));return![];}else if(_0x19787a[_0x2723('0xb')][_0x2723('0x17')]==null||_0x19787a[_0x2723('0xb')]['Contrasena']==''){alertify[_0x2723('0x11')](_0x2723('0x33'));return![];}else{waitingDialog[_0x2723('0x1e')]();_0x9fddf8[_0x2723('0x30')](_0x19787a['Usuario'],function(_0x4c8bd4){if(_0x4c8bd4[_0x2723('0x11')]==!![]){if(_0x4c8bd4['usuario']!=null){alertify[_0x2723('0x11')](_0x2723('0x34'));waitingDialog[_0x2723('0x20')]();_0xebf99a['globals']={'currentUser':{'id':_0x4c8bd4[_0x2723('0x35')][_0x2723('0x36')],'nombre':_0x4c8bd4[_0x2723('0x35')][_0x2723('0x31')],'tipousuario':_0x4c8bd4[_0x2723('0x35')]['TipoUsuario'],'Entrada':0x0}};_0x526153[_0x2723('0x37')](_0x2723('0x38'),_0xebf99a[_0x2723('0x39')]);_0x5caacc[_0x2723('0x3a')](_0x2723('0x3b'));}}else{waitingDialog['hide']();alertify[_0x2723('0x11')](_0x2723('0x3c'));}});}};_0x19787a[_0x2723('0x3d')]=function(){if(_0x19787a[_0x2723('0xc')][_0x2723('0x3e')]==''||_0x19787a[_0x2723('0xc')]['email']==null){alertify['success']('Debe\x20Ingresar\x20el\x20correo!');}else{waitingDialog[_0x2723('0x1e')]();_0x9fddf8[_0x2723('0x3f')](_0x19787a[_0x2723('0xc')][_0x2723('0x3e')],function(_0x2ba16d){waitingDialog[_0x2723('0x20')]();if(_0x2ba16d[_0x2723('0x11')]){swal({'title':_0x2723('0x40'),'text':_0x2ba16d['Mensaje'],'confirmButtonColor':_0x2723('0x23'),'width':'25%'});}});$(_0x2723('0x41'))[_0x2723('0x42')](_0x2723('0x20'));}};_0x19787a['Recuperar']=function(){waitingDialog['show']();_0x9fddf8['RecuperarPassword'](_0x19787a[_0x2723('0x43')],function(_0xbee6ff){waitingDialog[_0x2723('0x20')]();if(_0xbee6ff[_0x2723('0x11')]==!![]){$(_0x2723('0x44'))[_0x2723('0x42')](_0x2723('0x20'));}else{}});};}]);

ManualApp.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'LoginService', '$cookies', '$cookieStore', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, LoginService,$cookies, $cookieStore, $routeParams, $sce) {



            $scope.PersonaNatural = {
                Nombre: "",
                Apellidos: "",
                Documento: "",
                Usuario: "",
                Contrasena: "",
                Email: "",
                Telefono: "",
            }

            $scope.PersonaJuridica = {
                RazonSocial: "",
                Nit: "",
                SectorEconomico: "",
                Responsable: "",
                Telefono: "",
                Usuario: "",
                Contrasena: ""
            }


            $scope.Usuario = {
                Usuario1: "",
                Contrasena: "",
                TipoUsuario:"",
            };

            $scope.recuperarContrasena = {
                email:""
            }
           
        
            $scope.RegistroPersonaNatural = function () {

                if ($scope.PersonaNatural.Nombre == null || $scope.PersonaNatural.Nombre == "" ) {
                    alertify.success("El campo Nombre no puede estar vacio");
                    return false;
               

                } else if ($scope.PersonaNatural.Apellidos == null || $scope.PersonaNatural.Apellidos == "") {
                    alertify.success("El campo Apellidos no puede estar vacio");
                    return false;
                
                
                }else  if ($scope.PersonaNatural.Documento == null || $scope.PersonaNatural.Documento == ""  ) {
                    alertify.success("El campo Documento no puede estar vacio");
                    return false;

                } else if (String($scope.PersonaNatural.Documento).length < 6) {
                    alertify.success("El campo Documento no puede ser menor a 6 caracteres");
                    return false;
                }else  if ($scope.PersonaNatural.Usuario == null || $scope.PersonaNatural.Usuario == ""  ) {
                    alertify.success("El campo Usuario no puede estar vacio");
                    return false;
                
                } else if ($scope.PersonaNatural.Contrasena == null || $scope.PersonaNatural.Contrasena == "") {
                    alertify.success("El campo Contraseña no puede estar vacio");
                    return false;
                } else if (String($scope.PersonaNatural.Contrasena).length < 6) {
                    alertify.success("El campo contraseña no puede ser menor a 6 caracteres");
                    return false;
                }else if ($scope.PersonaNatural.Email == null || $scope.PersonaNatural.Email == ""  ) {
                    alertify.success("El campo Email no puede estar vacio o debe tener una direccion correcta");
                    return false;

                } else if ($scope.PersonaNatural.Telefono == null || $scope.PersonaNatural.Telefono == "") {
                    alertify.success("El campo Telefono no puede estar vacio");
                    return false;

                } else if (String($scope.PersonaNatural.Telefono).length < 7) {
                    alertify.success("El campo Telefono no puede ser menor a 7 caracteres");
                    return false;
                   
     
                } else {

                    waitingDialog.show();
                    LoginService.RegistrarPersonaNatural($scope.PersonaNatural, function (response) {
                        waitingDialog.hide();
                        if (response.success) {

                            if (response.mensaje == "Registro Exitoso.") {
                                swal({
                                    text: "Registro Exitoso.",
                                    confirmButtonColor: '#238276',
                                    width: '25%'
                                })
                                setTimeout(function () {
                                    location.reload();
                                }, 1000);
                            } else {
                                alertify.success(response.mensaje);
                            }
                        }
                    });
                }
            }

            $scope.RegistroPersonaJuridica = function () {

                if ($scope.PersonaJuridica.RazonSocial == null || $scope.PersonaJuridica.RazonSocial == "") {
                    alertify.success("El campo RazonSocial no puede estar vacio");
                    return false;
                } else if ($scope.PersonaJuridica.Nit == null || $scope.PersonaJuridica.Nit == "") {
                    alertify.success("El campo Nit no puede estar vacio");
                    return false;

                } else if (String($scope.PersonaJuridica.Nit).length <= 6) {
                    alertify.success("El campo nit no puede ser menor a 6 caracteres");
                    return false;
                }else  if ($scope.PersonaJuridica.SectorEconomico == null || $scope.PersonaJuridica.SectorEconomico == ""  ) {
                    alertify.success("El campo SectorEconomico no puede estar vacio");
                    return false;
                }else  if ($scope.PersonaJuridica.Responsable == null || $scope.PersonaJuridica.Responsable == ""  ) {
                    alertify.success("El campo Responsable no puede estar vacio");
                    return false;
             
                } else if ($scope.PersonaJuridica.Email == null || $scope.PersonaJuridica.Email == "") {
                    alertify.success("El campo Email no puede estar vacio o debe tener una direccion correcta");
                    return false;

                }else  if ($scope.PersonaJuridica.Usuario == null || $scope.PersonaJuridica.Usuario == ""  ) {
                    alertify.success("El campo Usuario no puede estar vacio");
                    return false;
                }else  if ($scope.PersonaJuridica.Contrasena == null || $scope.PersonaJuridica.Contrasena == ""  ) {
                    alertify.success("El campo contraseña no puede estar vacio");
                    return false;
                } else if (String($scope.PersonaJuridica.Contrasena).length < 6) {
                    alertify.success("El campo contraseña no puede ser menor a 6 caracteres");
                    return false;
                } else if (String($scope.PersonaJuridica.Telefono).length < 6) {
                    alertify.success("El campo contraseña no puede ser menor a 6 caracteres");
                    return false;

                } else if (String($scope.PersonaJuridica.Telefono).length < 7) {
                    alertify.success("El campo Telefono no puede ser menor a 7 caracteres");
                    return false;
                
                } else {
                    waitingDialog.show();
                    LoginService.RegistroPersonaJuridica($scope.PersonaJuridica, function (response) {
                        waitingDialog.hide();
                        if (response.success) {
                            if (response.mensaje == "Registro Exitoso.") {
                                swal({
                                    text: "Registro Exitoso.",
                                    confirmButtonColor: '#238276',
                                    width: '25%'

                                })
                                setTimeout(function () {
                                    location.reload();

                                }, 1000);
                                

                            } else {
                                alertify.success(response.mensaje);
                            }

                        }
                    });
                }
            }

            $scope.ConsultarUsuario = function () {
                if ($scope.Usuario.Usuario1 == null || $scope.Usuario.Usuario1 == "") {
                    alertify.success("Necesita ingresar el campo de Usuario");
                  
                    return false;

                } else if ($scope.Usuario.Contrasena == null || $scope.Usuario.Contrasena == "") {
                    alertify.success("Necesita ingresar el campo de contraseña");
                   
                    return false;
                } else {
                    waitingDialog.show();
                               
                        LoginService.ConsultarUsuario($scope.Usuario, function (response) {

                            if (response.success == true) {

                                if (response.usuario != null) {

                                    alertify.success("Bienvenido a GIDPI");
                                    waitingDialog.hide();
                                    $rootScope.globals = {
                                        currentUser: {
                                            id: response.usuario.IdUsuario,
                                            nombre: response.usuario.Usuario1,
                                            //apellido: response.usuario.Usuario1.Apellido,
                                            //cedula: response.usuario.Cedula,
                                            tipousuario: response.usuario.TipoUsuario,
                                            Entrada:0
                                        }
                                    };
                                    $cookies.putObject("username", $rootScope.globals);
                                    //waitingDialog.hide();
                                    $location.url('/Menu');
                                   
                                }
                    
                            } else {
                                waitingDialog.hide();
                                alertify.success("El usuario o la contraseña es incorrecta");
                            }

                        });

             
                }
            }
           

            $scope.ConsultarCorreo = function () {

                if ($scope.recuperarContrasena.email == "" || $scope.recuperarContrasena.email ==  null) {
                    alertify.success("Debe Ingresar el correo!");
                } else {
                    waitingDialog.show();
                    LoginService.ConsutarEmail($scope.recuperarContrasena.email, function (response) {
                        waitingDialog.hide();
                        if (response.success) {

                            swal({
                                title: 'Respuesta de solicitud',
                                text: response.Mensaje,
                                confirmButtonColor: '#238276',
                                width: '25%',
                            })
                    
                        }
                    })

                    $('#ModalOlvideContra').modal('hide');
                }

            }

            $scope.Recuperar = function () {
                waitingDialog.show();
                LoginService.RecuperarPassword($scope.UsuarioRecuperar, function (response) {
                    waitingDialog.hide();
                    if (response.success == true) {
                        $("#ModalRecuperar").modal("hide");
                       
                    } else {
                       
                    }
                });
            };

        }]);