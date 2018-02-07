//var _0xa234=['img','indirecto','removeChild','parentNode','getAttribute','querySelector'];(function(_0x40cd41,_0x44630b){var _0x1a4374=function(_0xfd6df4){while(--_0xfd6df4){_0x40cd41['push'](_0x40cd41['shift']());}};_0x1a4374(++_0x44630b);}(_0xa234,0x129));var _0x33cd=function(_0x21530c,_0x4cda38){_0x21530c=_0x21530c-0x0;var _0x3dc9c1=_0xa234[_0x21530c];return _0x3dc9c1;};function borrarElemento(_0x12eb0b){elementoBorrar=_0x12eb0b['parentNode'][_0x33cd('0x0')][_0x33cd('0x0')];idElementoBorrar=elementoBorrar[_0x33cd('0x1')]('id');imgBorrar=document[_0x33cd('0x2')]('#'+idElementoBorrar+_0x33cd('0x3'));indirectoBorrar=document[_0x33cd('0x2')]('#'+idElementoBorrar+_0x33cd('0x4'));elementoBorrar[_0x33cd('0x0')][_0x33cd('0x5')](elementoBorrar);imgBorrar[_0x33cd('0x0')][_0x33cd('0x5')](imgBorrar);indirectoBorrar[_0x33cd('0x0')][_0x33cd('0x5')](indirectoBorrar);}function borrarElemento2(_0x2a5cf7){elementoBorrar=_0x2a5cf7[_0x33cd('0x0')][_0x33cd('0x0')];var _0x4ae126=elementoBorrar[_0x33cd('0x0')][_0x33cd('0x1')]('id');document[_0x33cd('0x2')]('#'+_0x4ae126)[_0x33cd('0x5')](elementoBorrar);}

function borrarElemento(e) {
    elementoBorrar = e.parentNode.parentNode.parentNode; //guarda el span del elemento a borrar y selecciona su abuelo (osea el li)
    idElementoBorrar = elementoBorrar.getAttribute("id");
    imgBorrar = document.querySelector("#" + idElementoBorrar + "img");
    indirectoBorrar = document.querySelector("#" + idElementoBorrar + "indirecto");
    elementoBorrar.parentNode.removeChild(elementoBorrar);
    imgBorrar.parentNode.removeChild(imgBorrar);
    indirectoBorrar.parentNode.removeChild(indirectoBorrar);
}

function borrarElemento2(e) {
    elementoBorrar = e.parentNode.parentNode;
    var idElementoPadre = elementoBorrar.parentNode.getAttribute("id");
    document.querySelector("#" + idElementoPadre).removeChild(elementoBorrar);
}