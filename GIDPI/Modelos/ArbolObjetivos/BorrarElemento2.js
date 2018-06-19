//var _0xa234=['img','indirecto','removeChild','parentNode','getAttribute','querySelector'];(function(_0x40cd41,_0x44630b){var _0x1a4374=function(_0xfd6df4){while(--_0xfd6df4){_0x40cd41['push'](_0x40cd41['shift']());}};_0x1a4374(++_0x44630b);}(_0xa234,0x129));var _0x33cd=function(_0x21530c,_0x4cda38){_0x21530c=_0x21530c-0x0;var _0x3dc9c1=_0xa234[_0x21530c];return _0x3dc9c1;};function borrarElemento(_0x12eb0b){elementoBorrar=_0x12eb0b['parentNode'][_0x33cd('0x0')][_0x33cd('0x0')];idElementoBorrar=elementoBorrar[_0x33cd('0x1')]('id');imgBorrar=document[_0x33cd('0x2')]('#'+idElementoBorrar+_0x33cd('0x3'));indirectoBorrar=document[_0x33cd('0x2')]('#'+idElementoBorrar+_0x33cd('0x4'));elementoBorrar[_0x33cd('0x0')][_0x33cd('0x5')](elementoBorrar);imgBorrar[_0x33cd('0x0')][_0x33cd('0x5')](imgBorrar);indirectoBorrar[_0x33cd('0x0')][_0x33cd('0x5')](indirectoBorrar);}function borrarElemento2(_0x2a5cf7){elementoBorrar=_0x2a5cf7[_0x33cd('0x0')][_0x33cd('0x0')];var _0x4ae126=elementoBorrar[_0x33cd('0x0')][_0x33cd('0x1')]('id');document[_0x33cd('0x2')]('#'+_0x4ae126)[_0x33cd('0x5')](elementoBorrar);}
var _0xe88a = ["\x70\x61\x72\x65\x6E\x74\x4E\x6F\x64\x65", "\x69\x64", "\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65", "\x23", "\x69\x6D\x67", "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72", "\x69\x6E\x64\x69\x72\x65\x63\x74\x6F", "\x72\x65\x6D\x6F\x76\x65\x43\x68\x69\x6C\x64"]; function borrarElemento(_0x503fx2) { elementoBorrar = _0x503fx2[_0xe88a[0]][_0xe88a[0]][_0xe88a[0]]; idElementoBorrar = elementoBorrar[_0xe88a[2]](_0xe88a[1]); imgBorrar = document[_0xe88a[5]](_0xe88a[3] + idElementoBorrar + _0xe88a[4]); indirectoBorrar = document[_0xe88a[5]](_0xe88a[3] + idElementoBorrar + _0xe88a[6]); elementoBorrar[_0xe88a[0]][_0xe88a[7]](elementoBorrar); imgBorrar[_0xe88a[0]][_0xe88a[7]](imgBorrar); indirectoBorrar[_0xe88a[0]][_0xe88a[7]](indirectoBorrar) } function borrarElemento2(_0x503fx2) { elementoBorrar = _0x503fx2[_0xe88a[0]][_0xe88a[0]]; var _0x503fx4 = elementoBorrar[_0xe88a[0]][_0xe88a[2]](_0xe88a[1]); document[_0xe88a[5]](_0xe88a[3] + _0x503fx4)[_0xe88a[7]](elementoBorrar) }

//function borrarElemento(e) {
//    elementoBorrar = e.parentNode.parentNode.parentNode; //guarda el span del elemento a borrar y selecciona su abuelo (osea el li)
//    idElementoBorrar = elementoBorrar.getAttribute("id");
//    imgBorrar = document.querySelector("#" + idElementoBorrar + "img");
//    indirectoBorrar = document.querySelector("#" + idElementoBorrar + "indirecto");
//    elementoBorrar.parentNode.removeChild(elementoBorrar);
//    imgBorrar.parentNode.removeChild(imgBorrar);
//    indirectoBorrar.parentNode.removeChild(indirectoBorrar);
//}

//function borrarElemento2(e) {
//    elementoBorrar = e.parentNode.parentNode;
//    var idElementoPadre = elementoBorrar.parentNode.getAttribute("id");
//    document.querySelector("#" + idElementoPadre).removeChild(elementoBorrar);
//}