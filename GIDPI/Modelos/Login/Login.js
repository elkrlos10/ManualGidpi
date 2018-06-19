//var _0x304a=['Documento','El\x20campo\x20Documento\x20no\x20puede\x20estar\x20vacio','length','El\x20campo\x20Documento\x20no\x20puede\x20ser\x20menor\x20a\x206\x20caracteres','Contrasena','El\x20campo\x20Contraseña\x20no\x20puede\x20estar\x20vacio','El\x20campo\x20contraseña\x20no\x20puede\x20ser\x20menor\x20a\x206\x20caracteres','Email','Telefono','El\x20campo\x20Telefono\x20no\x20puede\x20estar\x20vacio','El\x20campo\x20Telefono\x20no\x20puede\x20ser\x20menor\x20a\x207\x20caracteres','show','RegistrarPersonaNatural','hide','mensaje','Registro\x20Exitoso.','#238276','El\x20nombre\x20usuario\x20ya\x20existe','RegistroPersonaJuridica','RazonSocial','PersonaJuridica','El\x20campo\x20RazonSocial\x20no\x20puede\x20estar\x20vacio','Nit','Responsable','El\x20campo\x20Responsable\x20no\x20puede\x20estar\x20vacio','El\x20campo\x20Email\x20no\x20puede\x20estar\x20vacio\x20o\x20debe\x20tener\x20una\x20direccion\x20correcta','El\x20campo\x20Usuario\x20no\x20puede\x20estar\x20vacio','El\x20campo\x20contraseña\x20no\x20puede\x20estar\x20vacio','25%','ConsultarUsuario','Usuario1','Necesita\x20ingresar\x20el\x20campo\x20de\x20Usuario','Necesita\x20ingresar\x20el\x20campo\x20de\x20contraseña','Bienvenido\x20a\x20GIDPI','usuario','IdUsuario','putObject','username','globals','url','/Menu','El\x20usuario\x20o\x20la\x20contraseña\x20es\x20incorrecta','ConsultarCorreo','email','ConsutarEmail','Respuesta\x20de\x20solicitud','#ModalOlvideContra','modal','UsuarioRecuperar','#ModalRecuperar','controller','LoginController','$scope','$rootScope','$location','LoginService','$cookies','$cookieStore','$routeParams','$sce','PersonaNatural','Usuario','recuperarContrasena','RegistroPersonaNatural','Nombre','El\x20campo\x20Nombre\x20no\x20puede\x20estar\x20vacio','Apellidos','success','El\x20campo\x20Apellidos\x20no\x20puede\x20estar\x20vacio'];(function(_0x144e35,_0x17d055){var _0x31b946=function(_0x1226a7){while(--_0x1226a7){_0x144e35['push'](_0x144e35['shift']());}};_0x31b946(++_0x17d055);}(_0x304a,0x18b));var _0x2723=function(_0x55e4c1,_0x12d53a){_0x55e4c1=_0x55e4c1-0x0;var _0x116afe=_0x304a[_0x55e4c1];return _0x116afe;};ManualApp[_0x2723('0x0')](_0x2723('0x1'),[_0x2723('0x2'),_0x2723('0x3'),_0x2723('0x4'),_0x2723('0x5'),_0x2723('0x6'),_0x2723('0x7'),_0x2723('0x8'),_0x2723('0x9'),function(_0x19787a,_0xebf99a,_0x5caacc,_0x9fddf8,_0x526153,_0x295a2a,_0x5e3200,_0x458cb6){_0x19787a[_0x2723('0xa')]={'Nombre':'','Apellidos':'','Documento':'','Usuario':'','Contrasena':'','Email':'','Telefono':''};_0x19787a['PersonaJuridica']={'RazonSocial':'','Nit':'','SectorEconomico':'','Responsable':'','Telefono':'','Usuario':'','Contrasena':''};_0x19787a[_0x2723('0xb')]={'Usuario1':'','Contrasena':'','TipoUsuario':''};_0x19787a[_0x2723('0xc')]={'email':''};_0x19787a[_0x2723('0xd')]=function(){if(_0x19787a['PersonaNatural'][_0x2723('0xe')]==null||_0x19787a[_0x2723('0xa')]['Nombre']==''){alertify['success'](_0x2723('0xf'));return![];}else if(_0x19787a[_0x2723('0xa')][_0x2723('0x10')]==null||_0x19787a[_0x2723('0xa')][_0x2723('0x10')]==''){alertify[_0x2723('0x11')](_0x2723('0x12'));return![];}else if(_0x19787a[_0x2723('0xa')][_0x2723('0x13')]==null||_0x19787a[_0x2723('0xa')][_0x2723('0x13')]==''){alertify[_0x2723('0x11')](_0x2723('0x14'));return![];}else if(String(_0x19787a[_0x2723('0xa')]['Documento'])[_0x2723('0x15')]<0x6){alertify[_0x2723('0x11')](_0x2723('0x16'));return![];}else if(_0x19787a[_0x2723('0xa')][_0x2723('0xb')]==null||_0x19787a['PersonaNatural']['Usuario']==''){alertify[_0x2723('0x11')]('El\x20campo\x20Usuario\x20no\x20puede\x20estar\x20vacio');return![];}else if(_0x19787a[_0x2723('0xa')][_0x2723('0x17')]==null||_0x19787a[_0x2723('0xa')][_0x2723('0x17')]==''){alertify[_0x2723('0x11')](_0x2723('0x18'));return![];}else if(String(_0x19787a[_0x2723('0xa')]['Contrasena'])['length']<0x6){alertify[_0x2723('0x11')](_0x2723('0x19'));return![];}else if(_0x19787a['PersonaNatural']['Email']==null||_0x19787a[_0x2723('0xa')][_0x2723('0x1a')]==''){alertify['success']('El\x20campo\x20Email\x20no\x20puede\x20estar\x20vacio\x20o\x20debe\x20tener\x20una\x20direccion\x20correcta');return![];}else if(_0x19787a['PersonaNatural'][_0x2723('0x1b')]==null||_0x19787a['PersonaNatural'][_0x2723('0x1b')]==''){alertify[_0x2723('0x11')](_0x2723('0x1c'));return![];}else if(String(_0x19787a[_0x2723('0xa')]['Telefono'])[_0x2723('0x15')]<0x7){alertify[_0x2723('0x11')](_0x2723('0x1d'));return![];}else{waitingDialog[_0x2723('0x1e')]();_0x9fddf8[_0x2723('0x1f')](_0x19787a[_0x2723('0xa')],function(_0x34511e){waitingDialog[_0x2723('0x20')]();if(_0x34511e[_0x2723('0x11')]){if(_0x34511e[_0x2723('0x21')]==_0x2723('0x22')){swal({'text':_0x2723('0x22'),'confirmButtonColor':_0x2723('0x23'),'width':'25%'});setTimeout(function(){location['reload']();},0x3e8);}else{alertify[_0x2723('0x11')](_0x2723('0x24'));}}});}};_0x19787a[_0x2723('0x25')]=function(){if(_0x19787a['PersonaJuridica'][_0x2723('0x26')]==null||_0x19787a[_0x2723('0x27')][_0x2723('0x26')]==''){alertify[_0x2723('0x11')](_0x2723('0x28'));return![];}else if(_0x19787a[_0x2723('0x27')][_0x2723('0x29')]==null||_0x19787a[_0x2723('0x27')][_0x2723('0x29')]==''){alertify[_0x2723('0x11')]('El\x20campo\x20Nit\x20no\x20puede\x20estar\x20vacio');return![];}else if(String(_0x19787a[_0x2723('0x27')][_0x2723('0x29')])[_0x2723('0x15')]<=0x6){alertify[_0x2723('0x11')]('El\x20campo\x20nit\x20no\x20puede\x20ser\x20menor\x20a\x206\x20caracteres');return![];}else if(_0x19787a['PersonaJuridica']['SectorEconomico']==null||_0x19787a[_0x2723('0x27')]['SectorEconomico']==''){alertify['success']('El\x20campo\x20SectorEconomico\x20no\x20puede\x20estar\x20vacio');return![];}else if(_0x19787a['PersonaJuridica'][_0x2723('0x2a')]==null||_0x19787a[_0x2723('0x27')][_0x2723('0x2a')]==''){alertify['success'](_0x2723('0x2b'));return![];}else if(_0x19787a[_0x2723('0x27')][_0x2723('0x1a')]==null||_0x19787a[_0x2723('0x27')]['Email']==''){alertify[_0x2723('0x11')](_0x2723('0x2c'));return![];}else if(_0x19787a['PersonaJuridica'][_0x2723('0xb')]==null||_0x19787a['PersonaJuridica'][_0x2723('0xb')]==''){alertify[_0x2723('0x11')](_0x2723('0x2d'));return![];}else if(_0x19787a[_0x2723('0x27')][_0x2723('0x17')]==null||_0x19787a[_0x2723('0x27')][_0x2723('0x17')]==''){alertify[_0x2723('0x11')](_0x2723('0x2e'));return![];}else if(String(_0x19787a[_0x2723('0x27')]['Contrasena'])[_0x2723('0x15')]<0x6){alertify['success'](_0x2723('0x19'));return![];}else if(String(_0x19787a[_0x2723('0x27')][_0x2723('0x1b')])[_0x2723('0x15')]<0x6){alertify[_0x2723('0x11')](_0x2723('0x19'));return![];}else if(String(_0x19787a[_0x2723('0x27')][_0x2723('0x1b')])[_0x2723('0x15')]<0x7){alertify[_0x2723('0x11')](_0x2723('0x1d'));return![];}else{waitingDialog[_0x2723('0x1e')]();_0x9fddf8[_0x2723('0x25')](_0x19787a[_0x2723('0x27')],function(_0x271da4){if(_0x271da4[_0x2723('0x11')]){if(_0x271da4[_0x2723('0x21')]==_0x2723('0x22')){swal({'text':_0x2723('0x22'),'confirmButtonColor':_0x2723('0x23'),'width':_0x2723('0x2f')});setTimeout(function(){location['reload']();},0x3e8);}else{alertify[_0x2723('0x11')]('El\x20nombre\x20usuario\x20ya\x20existe');}}});}};_0x19787a[_0x2723('0x30')]=function(){if(_0x19787a['Usuario']['Usuario1']==null||_0x19787a['Usuario'][_0x2723('0x31')]==''){alertify['success'](_0x2723('0x32'));return![];}else if(_0x19787a[_0x2723('0xb')][_0x2723('0x17')]==null||_0x19787a[_0x2723('0xb')]['Contrasena']==''){alertify[_0x2723('0x11')](_0x2723('0x33'));return![];}else{waitingDialog[_0x2723('0x1e')]();_0x9fddf8[_0x2723('0x30')](_0x19787a['Usuario'],function(_0x4c8bd4){if(_0x4c8bd4[_0x2723('0x11')]==!![]){if(_0x4c8bd4['usuario']!=null){alertify[_0x2723('0x11')](_0x2723('0x34'));waitingDialog[_0x2723('0x20')]();_0xebf99a['globals']={'currentUser':{'id':_0x4c8bd4[_0x2723('0x35')][_0x2723('0x36')],'nombre':_0x4c8bd4[_0x2723('0x35')][_0x2723('0x31')],'tipousuario':_0x4c8bd4[_0x2723('0x35')]['TipoUsuario'],'Entrada':0x0}};_0x526153[_0x2723('0x37')](_0x2723('0x38'),_0xebf99a[_0x2723('0x39')]);_0x5caacc[_0x2723('0x3a')](_0x2723('0x3b'));}}else{waitingDialog['hide']();alertify[_0x2723('0x11')](_0x2723('0x3c'));}});}};_0x19787a[_0x2723('0x3d')]=function(){if(_0x19787a[_0x2723('0xc')][_0x2723('0x3e')]==''||_0x19787a[_0x2723('0xc')]['email']==null){alertify['success']('Debe\x20Ingresar\x20el\x20correo!');}else{waitingDialog[_0x2723('0x1e')]();_0x9fddf8[_0x2723('0x3f')](_0x19787a[_0x2723('0xc')][_0x2723('0x3e')],function(_0x2ba16d){waitingDialog[_0x2723('0x20')]();if(_0x2ba16d[_0x2723('0x11')]){swal({'title':_0x2723('0x40'),'text':_0x2ba16d['Mensaje'],'confirmButtonColor':_0x2723('0x23'),'width':'25%'});}});$(_0x2723('0x41'))[_0x2723('0x42')](_0x2723('0x20'));}};_0x19787a['Recuperar']=function(){waitingDialog['show']();_0x9fddf8['RecuperarPassword'](_0x19787a[_0x2723('0x43')],function(_0xbee6ff){waitingDialog[_0x2723('0x20')]();if(_0xbee6ff[_0x2723('0x11')]==!![]){$(_0x2723('0x44'))[_0x2723('0x42')](_0x2723('0x20'));}else{}});};}]);
var _0x1cc4 = ["\x4C\x6F\x67\x69\x6E\x43\x6F\x6E\x74\x72\x6F\x6C\x6C\x65\x72", "\x24\x73\x63\x6F\x70\x65", "\x24\x72\x6F\x6F\x74\x53\x63\x6F\x70\x65", "\x24\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x4C\x6F\x67\x69\x6E\x53\x65\x72\x76\x69\x63\x65", "\x24\x63\x6F\x6F\x6B\x69\x65\x73", "\x24\x63\x6F\x6F\x6B\x69\x65\x53\x74\x6F\x72\x65", "\x24\x72\x6F\x75\x74\x65\x50\x61\x72\x61\x6D\x73", "\x24\x73\x63\x65", "\x50\x65\x72\x73\x6F\x6E\x61\x4E\x61\x74\x75\x72\x61\x6C", "", "\x50\x65\x72\x73\x6F\x6E\x61\x4A\x75\x72\x69\x64\x69\x63\x61", "\x55\x73\x75\x61\x72\x69\x6F", "\x72\x65\x63\x75\x70\x65\x72\x61\x72\x43\x6F\x6E\x74\x72\x61\x73\x65\x6E\x61", "\x52\x65\x67\x69\x73\x74\x72\x6F\x50\x65\x72\x73\x6F\x6E\x61\x4E\x61\x74\x75\x72\x61\x6C", "\x4E\x6F\x6D\x62\x72\x65", "\x45\x6C\x20\x63\x61\x6D\x70\x6F\x20\x4E\x6F\x6D\x62\x72\x65\x20\x6E\x6F\x20\x70\x75\x65\x64\x65\x20\x65\x73\x74\x61\x72\x20\x76\x61\x63\x69\x6F", "\x73\x75\x63\x63\x65\x73\x73", "\x41\x70\x65\x6C\x6C\x69\x64\x6F\x73", "\x45\x6C\x20\x63\x61\x6D\x70\x6F\x20\x41\x70\x65\x6C\x6C\x69\x64\x6F\x73\x20\x6E\x6F\x20\x70\x75\x65\x64\x65\x20\x65\x73\x74\x61\x72\x20\x76\x61\x63\x69\x6F", "\x44\x6F\x63\x75\x6D\x65\x6E\x74\x6F", "\x45\x6C\x20\x63\x61\x6D\x70\x6F\x20\x44\x6F\x63\x75\x6D\x65\x6E\x74\x6F\x20\x6E\x6F\x20\x70\x75\x65\x64\x65\x20\x65\x73\x74\x61\x72\x20\x76\x61\x63\x69\x6F", "\x6C\x65\x6E\x67\x74\x68", "\x45\x6C\x20\x63\x61\x6D\x70\x6F\x20\x44\x6F\x63\x75\x6D\x65\x6E\x74\x6F\x20\x6E\x6F\x20\x70\x75\x65\x64\x65\x20\x73\x65\x72\x20\x6D\x65\x6E\x6F\x72\x20\x61\x20\x36\x20\x63\x61\x72\x61\x63\x74\x65\x72\x65\x73", "\x45\x6C\x20\x63\x61\x6D\x70\x6F\x20\x55\x73\x75\x61\x72\x69\x6F\x20\x6E\x6F\x20\x70\x75\x65\x64\x65\x20\x65\x73\x74\x61\x72\x20\x76\x61\x63\x69\x6F", "\x43\x6F\x6E\x74\x72\x61\x73\x65\x6E\x61", "\x45\x6C\x20\x63\x61\x6D\x70\x6F\x20\x43\x6F\x6E\x74\x72\x61\x73\x65\xF1\x61\x20\x6E\x6F\x20\x70\x75\x65\x64\x65\x20\x65\x73\x74\x61\x72\x20\x76\x61\x63\x69\x6F", "\x45\x6C\x20\x63\x61\x6D\x70\x6F\x20\x63\x6F\x6E\x74\x72\x61\x73\x65\xF1\x61\x20\x6E\x6F\x20\x70\x75\x65\x64\x65\x20\x73\x65\x72\x20\x6D\x65\x6E\x6F\x72\x20\x61\x20\x36\x20\x63\x61\x72\x61\x63\x74\x65\x72\x65\x73", "\x45\x6D\x61\x69\x6C", "\x45\x6C\x20\x63\x61\x6D\x70\x6F\x20\x45\x6D\x61\x69\x6C\x20\x6E\x6F\x20\x70\x75\x65\x64\x65\x20\x65\x73\x74\x61\x72\x20\x76\x61\x63\x69\x6F\x20\x6F\x20\x64\x65\x62\x65\x20\x74\x65\x6E\x65\x72\x20\x75\x6E\x61\x20\x64\x69\x72\x65\x63\x63\x69\x6F\x6E\x20\x63\x6F\x72\x72\x65\x63\x74\x61", "\x54\x65\x6C\x65\x66\x6F\x6E\x6F", "\x45\x6C\x20\x63\x61\x6D\x70\x6F\x20\x54\x65\x6C\x65\x66\x6F\x6E\x6F\x20\x6E\x6F\x20\x70\x75\x65\x64\x65\x20\x65\x73\x74\x61\x72\x20\x76\x61\x63\x69\x6F", "\x45\x6C\x20\x63\x61\x6D\x70\x6F\x20\x54\x65\x6C\x65\x66\x6F\x6E\x6F\x20\x6E\x6F\x20\x70\x75\x65\x64\x65\x20\x73\x65\x72\x20\x6D\x65\x6E\x6F\x72\x20\x61\x20\x37\x20\x63\x61\x72\x61\x63\x74\x65\x72\x65\x73", "\x73\x68\x6F\x77", "\x68\x69\x64\x65", "\x6D\x65\x6E\x73\x61\x6A\x65", "\x52\x65\x67\x69\x73\x74\x72\x6F\x20\x45\x78\x69\x74\x6F\x73\x6F\x2E", "\x23\x32\x33\x38\x32\x37\x36", "\x32\x35\x25", "\x72\x65\x6C\x6F\x61\x64", "\x52\x65\x67\x69\x73\x74\x72\x6F\x50\x65\x72\x73\x6F\x6E\x61\x4A\x75\x72\x69\x64\x69\x63\x61", "\x52\x61\x7A\x6F\x6E\x53\x6F\x63\x69\x61\x6C", "\x45\x6C\x20\x63\x61\x6D\x70\x6F\x20\x52\x61\x7A\x6F\x6E\x53\x6F\x63\x69\x61\x6C\x20\x6E\x6F\x20\x70\x75\x65\x64\x65\x20\x65\x73\x74\x61\x72\x20\x76\x61\x63\x69\x6F", "\x4E\x69\x74", "\x45\x6C\x20\x63\x61\x6D\x70\x6F\x20\x4E\x69\x74\x20\x6E\x6F\x20\x70\x75\x65\x64\x65\x20\x65\x73\x74\x61\x72\x20\x76\x61\x63\x69\x6F", "\x45\x6C\x20\x63\x61\x6D\x70\x6F\x20\x6E\x69\x74\x20\x6E\x6F\x20\x70\x75\x65\x64\x65\x20\x73\x65\x72\x20\x6D\x65\x6E\x6F\x72\x20\x61\x20\x36\x20\x63\x61\x72\x61\x63\x74\x65\x72\x65\x73", "\x53\x65\x63\x74\x6F\x72\x45\x63\x6F\x6E\x6F\x6D\x69\x63\x6F", "\x45\x6C\x20\x63\x61\x6D\x70\x6F\x20\x53\x65\x63\x74\x6F\x72\x45\x63\x6F\x6E\x6F\x6D\x69\x63\x6F\x20\x6E\x6F\x20\x70\x75\x65\x64\x65\x20\x65\x73\x74\x61\x72\x20\x76\x61\x63\x69\x6F", "\x52\x65\x73\x70\x6F\x6E\x73\x61\x62\x6C\x65", "\x45\x6C\x20\x63\x61\x6D\x70\x6F\x20\x52\x65\x73\x70\x6F\x6E\x73\x61\x62\x6C\x65\x20\x6E\x6F\x20\x70\x75\x65\x64\x65\x20\x65\x73\x74\x61\x72\x20\x76\x61\x63\x69\x6F", "\x45\x6C\x20\x63\x61\x6D\x70\x6F\x20\x63\x6F\x6E\x74\x72\x61\x73\x65\xF1\x61\x20\x6E\x6F\x20\x70\x75\x65\x64\x65\x20\x65\x73\x74\x61\x72\x20\x76\x61\x63\x69\x6F", "\x43\x6F\x6E\x73\x75\x6C\x74\x61\x72\x55\x73\x75\x61\x72\x69\x6F", "\x55\x73\x75\x61\x72\x69\x6F\x31", "\x4E\x65\x63\x65\x73\x69\x74\x61\x20\x69\x6E\x67\x72\x65\x73\x61\x72\x20\x65\x6C\x20\x63\x61\x6D\x70\x6F\x20\x64\x65\x20\x55\x73\x75\x61\x72\x69\x6F", "\x4E\x65\x63\x65\x73\x69\x74\x61\x20\x69\x6E\x67\x72\x65\x73\x61\x72\x20\x65\x6C\x20\x63\x61\x6D\x70\x6F\x20\x64\x65\x20\x63\x6F\x6E\x74\x72\x61\x73\x65\xF1\x61", "\x75\x73\x75\x61\x72\x69\x6F", "\x42\x69\x65\x6E\x76\x65\x6E\x69\x64\x6F\x20\x61\x20\x47\x49\x44\x50\x49", "\x67\x6C\x6F\x62\x61\x6C\x73", "\x49\x64\x55\x73\x75\x61\x72\x69\x6F", "\x54\x69\x70\x6F\x55\x73\x75\x61\x72\x69\x6F", "\x75\x73\x65\x72\x6E\x61\x6D\x65", "\x70\x75\x74\x4F\x62\x6A\x65\x63\x74", "\x2F\x4D\x65\x6E\x75", "\x75\x72\x6C", "\x45\x6C\x20\x75\x73\x75\x61\x72\x69\x6F\x20\x6F\x20\x6C\x61\x20\x63\x6F\x6E\x74\x72\x61\x73\x65\xF1\x61\x20\x65\x73\x20\x69\x6E\x63\x6F\x72\x72\x65\x63\x74\x61", "\x43\x6F\x6E\x73\x75\x6C\x74\x61\x72\x43\x6F\x72\x72\x65\x6F", "\x65\x6D\x61\x69\x6C", "\x44\x65\x62\x65\x20\x49\x6E\x67\x72\x65\x73\x61\x72\x20\x65\x6C\x20\x63\x6F\x72\x72\x65\x6F\x21", "\x52\x65\x73\x70\x75\x65\x73\x74\x61\x20\x64\x65\x20\x73\x6F\x6C\x69\x63\x69\x74\x75\x64", "\x4D\x65\x6E\x73\x61\x6A\x65", "\x6D\x6F\x64\x61\x6C", "\x23\x4D\x6F\x64\x61\x6C\x4F\x6C\x76\x69\x64\x65\x43\x6F\x6E\x74\x72\x61", "\x52\x65\x63\x75\x70\x65\x72\x61\x72", "\x23\x4D\x6F\x64\x61\x6C\x52\x65\x63\x75\x70\x65\x72\x61\x72", "\x63\x6F\x6E\x74\x72\x6F\x6C\x6C\x65\x72"]; ManualApp[_0x1cc4[74]](_0x1cc4[0], [_0x1cc4[1], _0x1cc4[2], _0x1cc4[3], _0x1cc4[4], _0x1cc4[5], _0x1cc4[6], _0x1cc4[7], _0x1cc4[8], function (_0xab5fx1, _0xab5fx2, _0xab5fx3, _0xab5fx4, _0xab5fx5, _0xab5fx6, _0xab5fx7, _0xab5fx8) { _0xab5fx1[_0x1cc4[9]] = { Nombre: _0x1cc4[10], Apellidos: _0x1cc4[10], Documento: _0x1cc4[10], Usuario: _0x1cc4[10], Contrasena: _0x1cc4[10], Email: _0x1cc4[10], Telefono: _0x1cc4[10] }; _0xab5fx1[_0x1cc4[11]] = { RazonSocial: _0x1cc4[10], Nit: _0x1cc4[10], SectorEconomico: _0x1cc4[10], Responsable: _0x1cc4[10], Telefono: _0x1cc4[10], Usuario: _0x1cc4[10], Contrasena: _0x1cc4[10] }; _0xab5fx1[_0x1cc4[12]] = { Usuario1: _0x1cc4[10], Contrasena: _0x1cc4[10], TipoUsuario: _0x1cc4[10] }; _0xab5fx1[_0x1cc4[13]] = { email: _0x1cc4[10] }; _0xab5fx1[_0x1cc4[14]] = function () { if (_0xab5fx1[_0x1cc4[9]][_0x1cc4[15]] == null || _0xab5fx1[_0x1cc4[9]][_0x1cc4[15]] == _0x1cc4[10]) { alertify[_0x1cc4[17]](_0x1cc4[16]); return false } else { if (_0xab5fx1[_0x1cc4[9]][_0x1cc4[18]] == null || _0xab5fx1[_0x1cc4[9]][_0x1cc4[18]] == _0x1cc4[10]) { alertify[_0x1cc4[17]](_0x1cc4[19]); return false } else { if (_0xab5fx1[_0x1cc4[9]][_0x1cc4[20]] == null || _0xab5fx1[_0x1cc4[9]][_0x1cc4[20]] == _0x1cc4[10]) { alertify[_0x1cc4[17]](_0x1cc4[21]); return false } else { if (String(_0xab5fx1[_0x1cc4[9]].Documento)[_0x1cc4[22]] < 6) { alertify[_0x1cc4[17]](_0x1cc4[23]); return false } else { if (_0xab5fx1[_0x1cc4[9]][_0x1cc4[12]] == null || _0xab5fx1[_0x1cc4[9]][_0x1cc4[12]] == _0x1cc4[10]) { alertify[_0x1cc4[17]](_0x1cc4[24]); return false } else { if (_0xab5fx1[_0x1cc4[9]][_0x1cc4[25]] == null || _0xab5fx1[_0x1cc4[9]][_0x1cc4[25]] == _0x1cc4[10]) { alertify[_0x1cc4[17]](_0x1cc4[26]); return false } else { if (String(_0xab5fx1[_0x1cc4[9]].Contrasena)[_0x1cc4[22]] < 6) { alertify[_0x1cc4[17]](_0x1cc4[27]); return false } else { if (_0xab5fx1[_0x1cc4[9]][_0x1cc4[28]] == null || _0xab5fx1[_0x1cc4[9]][_0x1cc4[28]] == _0x1cc4[10]) { alertify[_0x1cc4[17]](_0x1cc4[29]); return false } else { if (_0xab5fx1[_0x1cc4[9]][_0x1cc4[30]] == null || _0xab5fx1[_0x1cc4[9]][_0x1cc4[30]] == _0x1cc4[10]) { alertify[_0x1cc4[17]](_0x1cc4[31]); return false } else { if (String(_0xab5fx1[_0x1cc4[9]].Telefono)[_0x1cc4[22]] < 7) { alertify[_0x1cc4[17]](_0x1cc4[32]); return false } else { waitingDialog[_0x1cc4[33]](); _0xab5fx4.RegistrarPersonaNatural(_0xab5fx1.PersonaNatural, function (_0xab5fx9) { waitingDialog[_0x1cc4[34]](); if (_0xab5fx9[_0x1cc4[17]]) { if (_0xab5fx9[_0x1cc4[35]] == _0x1cc4[36]) { swal({ text: _0x1cc4[36], confirmButtonColor: _0x1cc4[37], width: _0x1cc4[38] }); setTimeout(function () { location[_0x1cc4[39]]() }, 1000) } else { alertify[_0x1cc4[17]](_0xab5fx9[_0x1cc4[35]]) } } }) } } } } } } } } } } }; _0xab5fx1[_0x1cc4[40]] = function () { if (_0xab5fx1[_0x1cc4[11]][_0x1cc4[41]] == null || _0xab5fx1[_0x1cc4[11]][_0x1cc4[41]] == _0x1cc4[10]) { alertify[_0x1cc4[17]](_0x1cc4[42]); return false } else { if (_0xab5fx1[_0x1cc4[11]][_0x1cc4[43]] == null || _0xab5fx1[_0x1cc4[11]][_0x1cc4[43]] == _0x1cc4[10]) { alertify[_0x1cc4[17]](_0x1cc4[44]); return false } else { if (String(_0xab5fx1[_0x1cc4[11]].Nit)[_0x1cc4[22]] <= 6) { alertify[_0x1cc4[17]](_0x1cc4[45]); return false } else { if (_0xab5fx1[_0x1cc4[11]][_0x1cc4[46]] == null || _0xab5fx1[_0x1cc4[11]][_0x1cc4[46]] == _0x1cc4[10]) { alertify[_0x1cc4[17]](_0x1cc4[47]); return false } else { if (_0xab5fx1[_0x1cc4[11]][_0x1cc4[48]] == null || _0xab5fx1[_0x1cc4[11]][_0x1cc4[48]] == _0x1cc4[10]) { alertify[_0x1cc4[17]](_0x1cc4[49]); return false } else { if (_0xab5fx1[_0x1cc4[11]][_0x1cc4[28]] == null || _0xab5fx1[_0x1cc4[11]][_0x1cc4[28]] == _0x1cc4[10]) { alertify[_0x1cc4[17]](_0x1cc4[29]); return false } else { if (_0xab5fx1[_0x1cc4[11]][_0x1cc4[12]] == null || _0xab5fx1[_0x1cc4[11]][_0x1cc4[12]] == _0x1cc4[10]) { alertify[_0x1cc4[17]](_0x1cc4[24]); return false } else { if (_0xab5fx1[_0x1cc4[11]][_0x1cc4[25]] == null || _0xab5fx1[_0x1cc4[11]][_0x1cc4[25]] == _0x1cc4[10]) { alertify[_0x1cc4[17]](_0x1cc4[50]); return false } else { if (String(_0xab5fx1[_0x1cc4[11]].Contrasena)[_0x1cc4[22]] < 6) { alertify[_0x1cc4[17]](_0x1cc4[27]); return false } else { if (String(_0xab5fx1[_0x1cc4[11]].Telefono)[_0x1cc4[22]] < 6) { alertify[_0x1cc4[17]](_0x1cc4[27]); return false } else { if (String(_0xab5fx1[_0x1cc4[11]].Telefono)[_0x1cc4[22]] < 7) { alertify[_0x1cc4[17]](_0x1cc4[32]); return false } else { waitingDialog[_0x1cc4[33]](); _0xab5fx4.RegistroPersonaJuridica(_0xab5fx1.PersonaJuridica, function (_0xab5fx9) { waitingDialog[_0x1cc4[34]](); if (_0xab5fx9[_0x1cc4[17]]) { if (_0xab5fx9[_0x1cc4[35]] == _0x1cc4[36]) { swal({ text: _0x1cc4[36], confirmButtonColor: _0x1cc4[37], width: _0x1cc4[38] }); setTimeout(function () { location[_0x1cc4[39]]() }, 1000) } else { alertify[_0x1cc4[17]](_0xab5fx9[_0x1cc4[35]]) } } }) } } } } } } } } } } } }; _0xab5fx1[_0x1cc4[51]] = function () { if (_0xab5fx1[_0x1cc4[12]][_0x1cc4[52]] == null || _0xab5fx1[_0x1cc4[12]][_0x1cc4[52]] == _0x1cc4[10]) { alertify[_0x1cc4[17]](_0x1cc4[53]); return false } else { if (_0xab5fx1[_0x1cc4[12]][_0x1cc4[25]] == null || _0xab5fx1[_0x1cc4[12]][_0x1cc4[25]] == _0x1cc4[10]) { alertify[_0x1cc4[17]](_0x1cc4[54]); return false } else { waitingDialog[_0x1cc4[33]](); _0xab5fx4.ConsultarUsuario(_0xab5fx1.Usuario, function (_0xab5fx9) { if (_0xab5fx9[_0x1cc4[17]] == true) { if (_0xab5fx9[_0x1cc4[55]] != null) { alertify[_0x1cc4[17]](_0x1cc4[56]); waitingDialog[_0x1cc4[34]](); _0xab5fx2[_0x1cc4[57]] = { currentUser: { id: _0xab5fx9[_0x1cc4[55]][_0x1cc4[58]], nombre: _0xab5fx9[_0x1cc4[55]][_0x1cc4[52]], tipousuario: _0xab5fx9[_0x1cc4[55]][_0x1cc4[59]], Entrada: 0 } }; _0xab5fx5[_0x1cc4[61]](_0x1cc4[60], _0xab5fx2[_0x1cc4[57]]); _0xab5fx3[_0x1cc4[63]](_0x1cc4[62]) } } else { waitingDialog[_0x1cc4[34]](); alertify[_0x1cc4[17]](_0x1cc4[64]) } }) } } }; _0xab5fx1[_0x1cc4[65]] = function () { if (_0xab5fx1[_0x1cc4[13]][_0x1cc4[66]] == _0x1cc4[10] || _0xab5fx1[_0x1cc4[13]][_0x1cc4[66]] == null) { alertify[_0x1cc4[17]](_0x1cc4[67]) } else { waitingDialog[_0x1cc4[33]](); _0xab5fx4.ConsutarEmail(_0xab5fx1[_0x1cc4[13]][_0x1cc4[66]], function (_0xab5fx9) { waitingDialog[_0x1cc4[34]](); if (_0xab5fx9[_0x1cc4[17]]) { swal({ title: _0x1cc4[68], text: _0xab5fx9[_0x1cc4[69]], confirmButtonColor: _0x1cc4[37], width: _0x1cc4[38] }) } }); $(_0x1cc4[71])[_0x1cc4[70]](_0x1cc4[34]) } }; _0xab5fx1[_0x1cc4[72]] = function () { waitingDialog[_0x1cc4[33]](); _0xab5fx4.RecuperarPassword(_0xab5fx1.UsuarioRecuperar, function (_0xab5fx9) { waitingDialog[_0x1cc4[34]](); if (_0xab5fx9[_0x1cc4[17]] == true) { $(_0x1cc4[73])[_0x1cc4[70]](_0x1cc4[34]) } else { } }) } }])

//ManualApp.controller('LoginController',
//    ['$scope', '$rootScope', '$location', 'LoginService', '$cookies', '$cookieStore', '$routeParams', '$sce',
//        function ($scope, $rootScope, $location, LoginService,$cookies, $cookieStore, $routeParams, $sce) {



//            $scope.PersonaNatural = {
//                Nombre: "",
//                Apellidos: "",
//                Documento: "",
//                Usuario: "",
//                Contrasena: "",
//                Email: "",
//                Telefono: "",
//            }

//            $scope.PersonaJuridica = {
//                RazonSocial: "",
//                Nit: "",
//                SectorEconomico: "",
//                Responsable: "",
//                Telefono: "",
//                Usuario: "",
//                Contrasena: ""
//            }


//            $scope.Usuario = {
//                Usuario1: "",
//                Contrasena: "",
//                TipoUsuario:"",
//            };

//            $scope.recuperarContrasena = {
//                email:""
//            }
           
        
//            $scope.RegistroPersonaNatural = function () {

//                if ($scope.PersonaNatural.Nombre == null || $scope.PersonaNatural.Nombre == "" ) {
//                    alertify.success("El campo Nombre no puede estar vacio");
//                    return false;
               

//                } else if ($scope.PersonaNatural.Apellidos == null || $scope.PersonaNatural.Apellidos == "") {
//                    alertify.success("El campo Apellidos no puede estar vacio");
//                    return false;
                
                
//                }else  if ($scope.PersonaNatural.Documento == null || $scope.PersonaNatural.Documento == ""  ) {
//                    alertify.success("El campo Documento no puede estar vacio");
//                    return false;

//                } else if (String($scope.PersonaNatural.Documento).length < 6) {
//                    alertify.success("El campo Documento no puede ser menor a 6 caracteres");
//                    return false;
//                }else  if ($scope.PersonaNatural.Usuario == null || $scope.PersonaNatural.Usuario == ""  ) {
//                    alertify.success("El campo Usuario no puede estar vacio");
//                    return false;
                
//                } else if ($scope.PersonaNatural.Contrasena == null || $scope.PersonaNatural.Contrasena == "") {
//                    alertify.success("El campo Contraseña no puede estar vacio");
//                    return false;
//                } else if (String($scope.PersonaNatural.Contrasena).length < 6) {
//                    alertify.success("El campo contraseña no puede ser menor a 6 caracteres");
//                    return false;
//                }else if ($scope.PersonaNatural.Email == null || $scope.PersonaNatural.Email == ""  ) {
//                    alertify.success("El campo Email no puede estar vacio o debe tener una direccion correcta");
//                    return false;

//                } else if ($scope.PersonaNatural.Telefono == null || $scope.PersonaNatural.Telefono == "") {
//                    alertify.success("El campo Telefono no puede estar vacio");
//                    return false;

//                } else if (String($scope.PersonaNatural.Telefono).length < 7) {
//                    alertify.success("El campo Telefono no puede ser menor a 7 caracteres");
//                    return false;
                   
     
//                } else {

//                    waitingDialog.show();
//                    LoginService.RegistrarPersonaNatural($scope.PersonaNatural, function (response) {
//                        waitingDialog.hide();
//                        if (response.success) {

//                            if (response.mensaje == "Registro Exitoso.") {
//                                swal({
//                                    text: "Registro Exitoso.",
//                                    confirmButtonColor: '#238276',
//                                    width: '25%'
//                                })
//                                setTimeout(function () {
//                                    location.reload();
//                                }, 1000);
//                            } else {
//                                alertify.success(response.mensaje);
//                            }
//                        }
//                    });
//                }
//            }

//            $scope.RegistroPersonaJuridica = function () {

//                if ($scope.PersonaJuridica.RazonSocial == null || $scope.PersonaJuridica.RazonSocial == "") {
//                    alertify.success("El campo RazonSocial no puede estar vacio");
//                    return false;
//                } else if ($scope.PersonaJuridica.Nit == null || $scope.PersonaJuridica.Nit == "") {
//                    alertify.success("El campo Nit no puede estar vacio");
//                    return false;

//                } else if (String($scope.PersonaJuridica.Nit).length <= 6) {
//                    alertify.success("El campo nit no puede ser menor a 6 caracteres");
//                    return false;
//                }else  if ($scope.PersonaJuridica.SectorEconomico == null || $scope.PersonaJuridica.SectorEconomico == ""  ) {
//                    alertify.success("El campo SectorEconomico no puede estar vacio");
//                    return false;
//                }else  if ($scope.PersonaJuridica.Responsable == null || $scope.PersonaJuridica.Responsable == ""  ) {
//                    alertify.success("El campo Responsable no puede estar vacio");
//                    return false;
             
//                } else if ($scope.PersonaJuridica.Email == null || $scope.PersonaJuridica.Email == "") {
//                    alertify.success("El campo Email no puede estar vacio o debe tener una direccion correcta");
//                    return false;

//                }else  if ($scope.PersonaJuridica.Usuario == null || $scope.PersonaJuridica.Usuario == ""  ) {
//                    alertify.success("El campo Usuario no puede estar vacio");
//                    return false;
//                }else  if ($scope.PersonaJuridica.Contrasena == null || $scope.PersonaJuridica.Contrasena == ""  ) {
//                    alertify.success("El campo contraseña no puede estar vacio");
//                    return false;
//                } else if (String($scope.PersonaJuridica.Contrasena).length < 6) {
//                    alertify.success("El campo contraseña no puede ser menor a 6 caracteres");
//                    return false;
//                } else if (String($scope.PersonaJuridica.Telefono).length < 6) {
//                    alertify.success("El campo contraseña no puede ser menor a 6 caracteres");
//                    return false;

//                } else if (String($scope.PersonaJuridica.Telefono).length < 7) {
//                    alertify.success("El campo Telefono no puede ser menor a 7 caracteres");
//                    return false;
                
//                } else {
//                    waitingDialog.show();
//                    LoginService.RegistroPersonaJuridica($scope.PersonaJuridica, function (response) {
//                        waitingDialog.hide();
//                        if (response.success) {
//                            if (response.mensaje == "Registro Exitoso.") {
//                                swal({
//                                    text: "Registro Exitoso.",
//                                    confirmButtonColor: '#238276',
//                                    width: '25%'

//                                })
//                                setTimeout(function () {
//                                    location.reload();

//                                }, 1000);
                                

//                            } else {
//                                alertify.success(response.mensaje);
//                            }

//                        }
//                    });
//                }
//            }

//            $scope.ConsultarUsuario = function () {
//                if ($scope.Usuario.Usuario1 == null || $scope.Usuario.Usuario1 == "") {
//                    alertify.success("Necesita ingresar el campo de Usuario");
                  
//                    return false;

//                } else if ($scope.Usuario.Contrasena == null || $scope.Usuario.Contrasena == "") {
//                    alertify.success("Necesita ingresar el campo de contraseña");
                   
//                    return false;
//                } else {
//                    waitingDialog.show();
                               
//                        LoginService.ConsultarUsuario($scope.Usuario, function (response) {

//                            if (response.success == true) {

//                                if (response.usuario != null) {

//                                    alertify.success("Bienvenido a GIDPI");
//                                    waitingDialog.hide();
//                                    $rootScope.globals = {
//                                        currentUser: {
//                                            id: response.usuario.IdUsuario,
//                                            nombre: response.usuario.Usuario1,
//                                            //apellido: response.usuario.Usuario1.Apellido,
//                                            //cedula: response.usuario.Cedula,
//                                            tipousuario: response.usuario.TipoUsuario,
//                                            Entrada:0
//                                        }
//                                    };
//                                    $cookies.putObject("username", $rootScope.globals);
//                                    //waitingDialog.hide();
//                                    $location.url('/Menu');
                                   
//                                }
                    
//                            } else {
//                                waitingDialog.hide();
//                                alertify.success("El usuario o la contraseña es incorrecta");
//                            }

//                        });

             
//                }
//            }
           

//            $scope.ConsultarCorreo = function () {

//                if ($scope.recuperarContrasena.email == "" || $scope.recuperarContrasena.email ==  null) {
//                    alertify.success("Debe Ingresar el correo!");
//                } else {
//                    waitingDialog.show();
//                    LoginService.ConsutarEmail($scope.recuperarContrasena.email, function (response) {
//                        waitingDialog.hide();
//                        if (response.success) {

//                            swal({
//                                title: 'Respuesta de solicitud',
//                                text: response.Mensaje,
//                                confirmButtonColor: '#238276',
//                                width: '25%',
//                            })
                    
//                        }
//                    })

//                    $('#ModalOlvideContra').modal('hide');
//                }

//            }

//            $scope.Recuperar = function () {
//                waitingDialog.show();
//                LoginService.RecuperarPassword($scope.UsuarioRecuperar, function (response) {
//                    waitingDialog.hide();
//                    if (response.success == true) {
//                        $("#ModalRecuperar").modal("hide");
                       
//                    } else {
                       
//                    }
//                });
//            };

//        }]);