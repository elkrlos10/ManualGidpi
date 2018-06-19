//var _0x2f00=['IdInvolucrado','¿Esta\x20seguro?','¿Esta\x20seguro\x20que\x20desea\x20eleminar\x20el\x20\x20ultimo\x20Involucrado?','warning','#238276','#d33','Si,\x20Eliminar','No,\x20Cancelar!','then','EliminarInvolucrado','success','hide','se\x20Elimino\x20el\x20ultimo\x20involucrado','splice','salio\x20mal','cancel','Cancelado','Debe\x20haber\x20por\x20lo\x20menos\x20un\x20involucrado.','25%','each','Involucrado','Interes','Problema','Recursos','Estrategia','show','GuardarInvolucrados','Registro\x20Exitoso','/Menu','Ups!\x20Faltan\x20campos\x20por\x20completar','Etapa','ConsultarInvolucrados','involucrados','atras','url','.notify','$scope','$rootScope','$location','InvolucradosService','$sce','Involucrados','proyecto','datos','PauseAudio','getElementById','audio-player','AgregarCampos1','push','EliminarCampos','length'];(function(_0x51efd3,_0x34bcec){var _0xd0f959=function(_0x8b82dd){while(--_0x8b82dd){_0x51efd3['push'](_0x51efd3['shift']());}};_0xd0f959(++_0x34bcec);}(_0x2f00,0x1ef));var _0x5eee=function(_0x27f547,_0x22df20){_0x27f547=_0x27f547-0x0;var _0x3b20b4=_0x2f00[_0x27f547];return _0x3b20b4;};ManualApp['controller']('InvolucradosController',[_0x5eee('0x0'),_0x5eee('0x1'),_0x5eee('0x2'),_0x5eee('0x3'),'$routeParams',_0x5eee('0x4'),function(_0xfefbc9,_0x11c13b,_0x47ec00,_0x45dc00,_0x29ec7b,_0x4dd112){_0xfefbc9[_0x5eee('0x5')]=[{'IdProyecto':_0x11c13b[_0x5eee('0x6')][_0x5eee('0x7')]['id'],'Involucrado':'','Interes':'','Problema':'','Recursos':'','Estrategia':''}];_0xfefbc9[_0x5eee('0x8')]=function(){setTimeout(function(){var _0x35b82b=document[_0x5eee('0x9')](_0x5eee('0xa'));_0x35b82b['pause']();},0x3e8);};_0xfefbc9[_0x5eee('0xb')]=function(){_0xfefbc9[_0x5eee('0x5')][_0x5eee('0xc')]({'IdProyecto':_0x11c13b[_0x5eee('0x6')][_0x5eee('0x7')]['id'],'Involucrado':'','Interes':'','Problema':'','Recursos':'','Estrategia':''});};_0xfefbc9[_0x5eee('0xd')]=function(){if(_0xfefbc9[_0x5eee('0x5')][_0x5eee('0xe')]>=0x2){if(_0xfefbc9[_0x5eee('0x5')][_0xfefbc9[_0x5eee('0x5')][_0x5eee('0xe')]-0x1][_0x5eee('0xf')]==undefined){_0xfefbc9[_0x5eee('0x5')]['splice'](_0xfefbc9[_0x5eee('0x5')]['length']-0x1,0x1);}else{swal({'title':_0x5eee('0x10'),'text':_0x5eee('0x11'),'type':_0x5eee('0x12'),'showCancelButton':!![],'confirmButtonColor':_0x5eee('0x13'),'cancelButtonColor':_0x5eee('0x14'),'confirmButtonText':_0x5eee('0x15'),'cancelButtonText':_0x5eee('0x16'),'confirmButtonClass':'btn\x20btn-success','cancelButtonClass':'btn\x20btn-danger'})[_0x5eee('0x17')](function(){waitingDialog['show']();_0x45dc00[_0x5eee('0x18')](_0xfefbc9[_0x5eee('0x5')][_0xfefbc9['Involucrados']['length']-0x1][_0x5eee('0xf')],function(_0xa33dd4){if(_0xa33dd4[_0x5eee('0x19')]){waitingDialog[_0x5eee('0x1a')]();swal({'confirmButtonColor':_0x5eee('0x13'),'title':'Borrado!','text':_0x5eee('0x1b'),'type':_0x5eee('0x19')})[_0x5eee('0x17')](function(){});_0xfefbc9[_0x5eee('0x5')][_0x5eee('0x1c')](_0xfefbc9[_0x5eee('0x5')][_0x5eee('0xe')]-0x1,0x1);}else{alert(_0x5eee('0x1d'));}});}),function(_0x5ab649){if(_0x5ab649===_0x5eee('0x1e')){swal({'confirmButtonColor':_0x5eee('0x13'),'title':_0x5eee('0x1f'),'type':'error'});}};}}else{swal({'text':_0x5eee('0x20'),'confirmButtonColor':_0x5eee('0x13'),'type':_0x5eee('0x12'),'width':_0x5eee('0x21')});}};_0xfefbc9['GuardarInvolucrados']=function(){var _0x23a6c1=0x0;$[_0x5eee('0x22')](_0xfefbc9[_0x5eee('0x5')],function(_0x2d8135,_0x4651e1){if(_0x4651e1[_0x5eee('0x23')]==''||_0x4651e1[_0x5eee('0x24')]==''||_0x4651e1[_0x5eee('0x25')]==''||_0x4651e1[_0x5eee('0x26')]==''||_0x4651e1[_0x5eee('0x27')]==''){_0x23a6c1++;}});if(_0x23a6c1==0x0){waitingDialog[_0x5eee('0x28')]();_0x45dc00[_0x5eee('0x29')](_0xfefbc9[_0x5eee('0x5')],function(_0x492b0d){if(_0x492b0d['success']){waitingDialog[_0x5eee('0x1a')]();swal({'text':_0x5eee('0x2a'),'confirmButtonColor':_0x5eee('0x13'),'width':_0x5eee('0x21')});_0x47ec00['url'](_0x5eee('0x2b'));}});}else{alertify[_0x5eee('0x19')](_0x5eee('0x2c'));return;}};_0x45dc00['AbrirProyecto'](_0x11c13b[_0x5eee('0x6')][_0x5eee('0x7')]['id'],function(_0x4ccc3f){waitingDialog['show']();if(_0x4ccc3f[_0x5eee('0x19')]){_0x11c13b[_0x5eee('0x6')][_0x5eee('0x7')][_0x5eee('0x2d')]=_0x4ccc3f[_0x5eee('0x6')]['Etapa'];if(_0x11c13b[_0x5eee('0x6')][_0x5eee('0x7')][_0x5eee('0x2d')]>=0x6){_0x45dc00[_0x5eee('0x2e')](_0x11c13b['proyecto'][_0x5eee('0x7')]['id'],function(_0x39581a){if(_0x39581a[_0x5eee('0x19')]){_0xfefbc9[_0x5eee('0x5')]=_0x39581a[_0x5eee('0x2f')];}});}}waitingDialog[_0x5eee('0x1a')]();});_0xfefbc9[_0x5eee('0x30')]=function(){_0x47ec00[_0x5eee('0x31')](_0x5eee('0x2b'));$(_0x5eee('0x32'))[_0x5eee('0x1a')]();};}]);
var _0x34e7 = ["\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x73\x43\x6F\x6E\x74\x72\x6F\x6C\x6C\x65\x72", "\x24\x73\x63\x6F\x70\x65", "\x24\x72\x6F\x6F\x74\x53\x63\x6F\x70\x65", "\x24\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x73\x53\x65\x72\x76\x69\x63\x65", "\x24\x72\x6F\x75\x74\x65\x50\x61\x72\x61\x6D\x73", "\x24\x73\x63\x65", "\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x73", "\x69\x64", "\x64\x61\x74\x6F\x73", "\x70\x72\x6F\x79\x65\x63\x74\x6F", "", "\x50\x61\x75\x73\x65\x41\x75\x64\x69\x6F", "\x61\x75\x64\x69\x6F\x2D\x70\x6C\x61\x79\x65\x72", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x70\x61\x75\x73\x65", "\x41\x67\x72\x65\x67\x61\x72\x43\x61\x6D\x70\x6F\x73\x31", "\x70\x75\x73\x68", "\x45\x6C\x69\x6D\x69\x6E\x61\x72\x43\x61\x6D\x70\x6F\x73", "\x6C\x65\x6E\x67\x74\x68", "\x49\x64\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F", "\x73\x70\x6C\x69\x63\x65", "\x73\x68\x6F\x77", "\x73\x75\x63\x63\x65\x73\x73", "\x68\x69\x64\x65", "\x74\x68\x65\x6E", "\x23\x32\x33\x38\x32\x37\x36", "\x42\x6F\x72\x72\x61\x64\x6F\x21", "\x73\x65\x20\x45\x6C\x69\x6D\x69\x6E\x6F\x20\x65\x6C\x20\x75\x6C\x74\x69\x6D\x6F\x20\x69\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F", "\x73\x61\x6C\x69\x6F\x20\x6D\x61\x6C", "\xBF\x45\x73\x74\x61\x20\x73\x65\x67\x75\x72\x6F\x3F", "\xBF\x45\x73\x74\x61\x20\x73\x65\x67\x75\x72\x6F\x20\x71\x75\x65\x20\x64\x65\x73\x65\x61\x20\x65\x6C\x65\x6D\x69\x6E\x61\x72\x20\x65\x6C\x20\x20\x75\x6C\x74\x69\x6D\x6F\x20\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x3F", "\x77\x61\x72\x6E\x69\x6E\x67", "\x23\x64\x33\x33", "\x53\x69\x2C\x20\x45\x6C\x69\x6D\x69\x6E\x61\x72", "\x4E\x6F\x2C\x20\x43\x61\x6E\x63\x65\x6C\x61\x72\x21", "\x62\x74\x6E\x20\x62\x74\x6E\x2D\x73\x75\x63\x63\x65\x73\x73", "\x62\x74\x6E\x20\x62\x74\x6E\x2D\x64\x61\x6E\x67\x65\x72", "\x63\x61\x6E\x63\x65\x6C", "\x43\x61\x6E\x63\x65\x6C\x61\x64\x6F", "\x65\x72\x72\x6F\x72", "\x44\x65\x62\x65\x20\x68\x61\x62\x65\x72\x20\x70\x6F\x72\x20\x6C\x6F\x20\x6D\x65\x6E\x6F\x73\x20\x75\x6E\x20\x69\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x2E", "\x32\x35\x25", "\x47\x75\x61\x72\x64\x61\x72\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x73", "\x49\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F", "\x49\x6E\x74\x65\x72\x65\x73", "\x50\x72\x6F\x62\x6C\x65\x6D\x61", "\x52\x65\x63\x75\x72\x73\x6F\x73", "\x45\x73\x74\x72\x61\x74\x65\x67\x69\x61", "\x65\x61\x63\x68", "\x52\x65\x67\x69\x73\x74\x72\x6F\x20\x45\x78\x69\x74\x6F\x73\x6F", "\x2F\x4D\x65\x6E\x75", "\x75\x72\x6C", "\x55\x70\x73\x21\x20\x46\x61\x6C\x74\x61\x6E\x20\x63\x61\x6D\x70\x6F\x73\x20\x70\x6F\x72\x20\x63\x6F\x6D\x70\x6C\x65\x74\x61\x72", "\x45\x74\x61\x70\x61", "\x69\x6E\x76\x6F\x6C\x75\x63\x72\x61\x64\x6F\x73", "\x61\x74\x72\x61\x73", "\x2E\x6E\x6F\x74\x69\x66\x79", "\x63\x6F\x6E\x74\x72\x6F\x6C\x6C\x65\x72"]; ManualApp[_0x34e7[58]](_0x34e7[0], [_0x34e7[1], _0x34e7[2], _0x34e7[3], _0x34e7[4], _0x34e7[5], _0x34e7[6], function (_0xbbbex1, _0xbbbex2, _0xbbbex3, _0xbbbex4, _0xbbbex5, _0xbbbex6) { _0xbbbex1[_0x34e7[7]] = [{ IdProyecto: _0xbbbex2[_0x34e7[10]][_0x34e7[9]][_0x34e7[8]], Involucrado: _0x34e7[11], Interes: _0x34e7[11], Problema: _0x34e7[11], Recursos: _0x34e7[11], Estrategia: _0x34e7[11] }]; _0xbbbex1[_0x34e7[12]] = function () { setTimeout(function () { var _0xbbbex7 = document[_0x34e7[14]](_0x34e7[13]); _0xbbbex7[_0x34e7[15]]() }, 1000) }; _0xbbbex1[_0x34e7[16]] = function () { _0xbbbex1[_0x34e7[7]][_0x34e7[17]]({ IdProyecto: _0xbbbex2[_0x34e7[10]][_0x34e7[9]][_0x34e7[8]], Involucrado: _0x34e7[11], Interes: _0x34e7[11], Problema: _0x34e7[11], Recursos: _0x34e7[11], Estrategia: _0x34e7[11] }) }; _0xbbbex1[_0x34e7[18]] = function () { if (_0xbbbex1[_0x34e7[7]][_0x34e7[19]] >= 2) { if (_0xbbbex1[_0x34e7[7]][_0xbbbex1[_0x34e7[7]][_0x34e7[19]] - 1][_0x34e7[20]] == undefined) { _0xbbbex1[_0x34e7[7]][_0x34e7[21]]((_0xbbbex1[_0x34e7[7]][_0x34e7[19]] - 1), 1) } else { swal({ title: _0x34e7[30], text: _0x34e7[31], type: _0x34e7[32], showCancelButton: true, confirmButtonColor: _0x34e7[26], cancelButtonColor: _0x34e7[33], confirmButtonText: _0x34e7[34], cancelButtonText: _0x34e7[35], confirmButtonClass: _0x34e7[36], cancelButtonClass: _0x34e7[37] })[_0x34e7[25]](function () { waitingDialog[_0x34e7[22]](); _0xbbbex4.EliminarInvolucrado(_0xbbbex1[_0x34e7[7]][_0xbbbex1[_0x34e7[7]][_0x34e7[19]] - 1].IdInvolucrado, function (_0xbbbex8) { if (_0xbbbex8[_0x34e7[23]]) { waitingDialog[_0x34e7[24]](); swal({ confirmButtonColor: _0x34e7[26], title: _0x34e7[27], text: _0x34e7[28], type: _0x34e7[23] })[_0x34e7[25]](function () { }); _0xbbbex1[_0x34e7[7]][_0x34e7[21]]((_0xbbbex1[_0x34e7[7]][_0x34e7[19]] - 1), 1) } else { alert(_0x34e7[29]) } }) }), function (_0xbbbex9) { if (_0xbbbex9 === _0x34e7[38]) { swal({ confirmButtonColor: _0x34e7[26], title: _0x34e7[39], type: _0x34e7[40] }) } } } } else { swal({ text: _0x34e7[41], confirmButtonColor: _0x34e7[26], type: _0x34e7[32], width: _0x34e7[42] }) } }; _0xbbbex1[_0x34e7[43]] = function () { var _0xbbbexa = 0; $[_0x34e7[49]](_0xbbbex1.Involucrados, function (_0xbbbexb, _0xbbbexc) { if (_0xbbbexc[_0x34e7[44]] == _0x34e7[11] || _0xbbbexc[_0x34e7[45]] == _0x34e7[11] || _0xbbbexc[_0x34e7[46]] == _0x34e7[11] || _0xbbbexc[_0x34e7[47]] == _0x34e7[11] || _0xbbbexc[_0x34e7[48]] == _0x34e7[11]) { _0xbbbexa++ } }); if (_0xbbbexa == 0) { waitingDialog[_0x34e7[22]](); _0xbbbex4.GuardarInvolucrados(_0xbbbex1.Involucrados, function (_0xbbbex8) { if (_0xbbbex8[_0x34e7[23]]) { waitingDialog[_0x34e7[24]](); swal({ text: _0x34e7[50], confirmButtonColor: _0x34e7[26], width: _0x34e7[42] }); _0xbbbex3[_0x34e7[52]](_0x34e7[51]) } }) } else { alertify[_0x34e7[23]](_0x34e7[53]); return } }; _0xbbbex4.AbrirProyecto(_0xbbbex2[_0x34e7[10]][_0x34e7[9]][_0x34e7[8]], function (_0xbbbex8) { waitingDialog[_0x34e7[22]](); if (_0xbbbex8[_0x34e7[23]]) { _0xbbbex2[_0x34e7[10]][_0x34e7[9]][_0x34e7[54]] = _0xbbbex8[_0x34e7[10]][_0x34e7[54]]; if (_0xbbbex2[_0x34e7[10]][_0x34e7[9]][_0x34e7[54]] >= 6) { _0xbbbex4.ConsultarInvolucrados(_0xbbbex2[_0x34e7[10]][_0x34e7[9]][_0x34e7[8]], function (_0xbbbex8) { if (_0xbbbex8[_0x34e7[23]]) { _0xbbbex1[_0x34e7[7]] = _0xbbbex8[_0x34e7[55]] } }) } }; waitingDialog[_0x34e7[24]]() }); _0xbbbex1[_0x34e7[56]] = function () { _0xbbbex3[_0x34e7[52]](_0x34e7[51]); $(_0x34e7[57])[_0x34e7[24]]() } }])

//ManualApp.controller('InvolucradosController',
//    ['$scope', '$rootScope', '$location', 'InvolucradosService', '$routeParams', '$sce',
//        function ($scope, $rootScope, $location, InvolucradosService, $routeParams, $sce) {

//            $scope.Involucrados = [{
//                IdProyecto:$rootScope.proyecto.datos.id,
//                Involucrado: "",
//                Interes: "",
//                Problema: "",
//                Recursos: "",
//                Estrategia: ""
              
//            }]

//            //Funciòn para pausar el audio cuando se abra el video
//            $scope.PauseAudio = function () {
//                setTimeout(function () {
//                    var audio = document.getElementById("audio-player");
//                    audio.pause();
//                }, 1000);
//            }

//            //FUNCIÓN PARA AGREGAR MAS FILAS DE INVOLUCRADOS
//            $scope.AgregarCampos1 = function () {

//                    $scope.Involucrados.push({
//                        IdProyecto: $rootScope.proyecto.datos.id,
//                        Involucrado: "",
//                        Interes: "",
//                        Problema: "",
//                        Recursos: "",
//                        Estrategia: ""
//                    });
//            };

//            //FUNCIÓN PARA ELIMINAR FILAS DE INVOLUCRADOS
//            $scope.EliminarCampos = function () {
//                if ($scope.Involucrados.length >=2) {
                    


//                    if ($scope.Involucrados[$scope.Involucrados.length - 1].IdInvolucrado == undefined) {
//                        $scope.Involucrados.splice(($scope.Involucrados.length - 1), 1);
//                    } else {
//                        swal({
//                            title: '¿Esta seguro?',
//                            text: "¿Esta seguro que desea eleminar el  ultimo Involucrado?",
//                            type: 'warning',
//                            showCancelButton: true,
//                            confirmButtonColor: '#238276',
//                            cancelButtonColor: '#d33',
//                            confirmButtonText: 'Si, Eliminar',
//                            cancelButtonText: 'No, Cancelar!',
//                            confirmButtonClass: 'btn btn-success',
//                            cancelButtonClass: 'btn btn-danger',
//                            //preConfirm: function () {
//                            //}
//                        }).then(function () {
//                            waitingDialog.show();
//                            InvolucradosService.EliminarInvolucrado($scope.Involucrados[$scope.Involucrados.length - 1].IdInvolucrado, function (response) {
//                                if (response.success) {
//                                    waitingDialog.hide();
//                                    swal({
//                                        confirmButtonColor: '#238276',
//                                        title: 'Borrado!',
//                                        text: 'se Elimino el ultimo involucrado',
//                                        type: 'success'
//                                    }).then(function () {
//                                    })
//                                    $scope.Involucrados.splice(($scope.Involucrados.length - 1), 1);

//                                } else {
//                                    alert("salio mal");
//                                }
//                            })
//                        }), function (dismiss) {
//                            // dismiss can be 'cancel', 'overlay',
//                            // 'close', and 'timer'
//                            if (dismiss === 'cancel') {
//                                swal({
//                                    confirmButtonColor: '#238276',
//                                    title: 'Cancelado',
//                                    type: 'error',
//                                })
//                            }
//                        }
//                    }
//                } else {
//                    swal({
//                        text: 'Debe haber por lo menos un involucrado.',
//                        confirmButtonColor: '#238276',
//                        type: 'warning',
//                        width: '25%'

//                    })
//                }

//                //if ($scope.Involucrados[($scope.Involucrados.length - 1)].Involucrado == "" && $scope.Involucrados[($scope.Involucrados.length - 1)].Interes == ""
//                //    && $scope.Involucrados[($scope.Involucrados.length - 1)].Problema == "" && $scope.Involucrados[($scope.Involucrados.length - 1)].Recursos == ""
//                //    && $scope.Involucrados[($scope.Involucrados.length - 1)].Estrategia == "") {

                  
//                //}

//            };

         
//            //FUNCIÓN PARA GUARDAR INVOLUCRADOS
//            $scope.GuardarInvolucrados = function () {
//                var contadotr = 0;
//                $.each($scope.Involucrados, function (index,value) {
//                    if (value.Involucrado == "" || value.Interes == "" || value.Problema == "" || value.Recursos == "" || value.Estrategia == "") {
                    
//                        contadotr++;
//                    }
//                })

//                if (contadotr == 0) {
//                    waitingDialog.show();
//                    InvolucradosService.GuardarInvolucrados($scope.Involucrados, function (response) {
//                        if (response.success) {
//                            waitingDialog.hide();
//                            swal({
//                                text: 'Registro Exitoso',
//                                confirmButtonColor: '#238276',
//                                width: '25%'

//                            })
                       
//                            $location.url("/Menu");
//                        }
//                    })
//                } else {
//                    alertify.success("Ups! Faltan campos por completar");
//                    return;
//                }
         

                
//            }

//            //FUNCIÓN PARA CONSULTAR INVOLUCRADOS
//            InvolucradosService.AbrirProyecto($rootScope.proyecto.datos.id, function (response) {
//                waitingDialog.show();
//                if (response.success) {
//                    $rootScope.proyecto.datos.Etapa = response.proyecto.Etapa;

//                    if ($rootScope.proyecto.datos.Etapa >= 6) {
//                        InvolucradosService.ConsultarInvolucrados($rootScope.proyecto.datos.id, function (response) {
//                            if (response.success) {
//                                $scope.Involucrados = response.involucrados;
                               

//                            }

//                        })
//                    }
//                }
//                waitingDialog.hide();
//            })

//            $scope.atras = function () {

//                $location.url("/Menu");
//                $(".notify").hide();
//            }

//        }]);