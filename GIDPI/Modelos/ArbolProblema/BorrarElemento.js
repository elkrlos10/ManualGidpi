//var _0x4a5f=['querySelector','img','indirecto','removeChild','log','parentNode','getAttribute'];(function(_0x49079e,_0x2ebd6f){var _0x7499bc=function(_0x2a62d9){while(--_0x2a62d9){_0x49079e['push'](_0x49079e['shift']());}};_0x7499bc(++_0x2ebd6f);}(_0x4a5f,0x16a));var _0x4bbf=function(_0x5ad0a,_0x1bfd7b){_0x5ad0a=_0x5ad0a-0x0;var _0x4af0dd=_0x4a5f[_0x5ad0a];return _0x4af0dd;};function borrarElemento(_0x553eec){elementoBorrar=_0x553eec[_0x4bbf('0x0')][_0x4bbf('0x0')][_0x4bbf('0x0')];idElementoBorrar=elementoBorrar[_0x4bbf('0x1')]('id');imgBorrar=document[_0x4bbf('0x2')]('#'+idElementoBorrar+_0x4bbf('0x3'));indirectoBorrar=document[_0x4bbf('0x2')]('#'+idElementoBorrar+_0x4bbf('0x4'));elementoBorrar['parentNode'][_0x4bbf('0x5')](elementoBorrar);imgBorrar[_0x4bbf('0x0')][_0x4bbf('0x5')](imgBorrar);indirectoBorrar[_0x4bbf('0x0')]['removeChild'](indirectoBorrar);console[_0x4bbf('0x6')](idElementoBorrar);}function borrarElemento2(_0x3d30ac){elementoBorrar=_0x3d30ac['parentNode']['parentNode'];var _0x1d044f=elementoBorrar[_0x4bbf('0x0')][_0x4bbf('0x1')]('id');document[_0x4bbf('0x2')]('#'+_0x1d044f)[_0x4bbf('0x5')](elementoBorrar);console[_0x4bbf('0x6')](_0x1d044f);}

//FUNCION DE BORRAR

function borrarElemento(e) {
    elementoBorrar = e.parentNode.parentNode.parentNode; //guarda el span del elemento a borrar y selecciona su abuelo (osea el li)
    idElementoBorrar = elementoBorrar.getAttribute("id");
    imgBorrar = document.querySelector("#" + idElementoBorrar + "img");
    indirectoBorrar = document.querySelector("#" + idElementoBorrar + "indirecto");
    elementoBorrar.parentNode.removeChild(elementoBorrar);
    imgBorrar.parentNode.removeChild(imgBorrar);
    indirectoBorrar.parentNode.removeChild(indirectoBorrar);
    console.log(idElementoBorrar);
}

function borrarElemento2(e) {
    elementoBorrar = e.parentNode.parentNode;
    var idElementoPadre = elementoBorrar.parentNode.getAttribute("id");
    document.querySelector("#" + idElementoPadre).removeChild(elementoBorrar);
    console.log(idElementoPadre);
}


