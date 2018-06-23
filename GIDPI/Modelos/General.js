//Para el host
//var URLServices = "https://www.gidpi.com//api/";
//Para local
var URLServices = "http://localhost:61609//api/";

//var URLServices = "http://10.3.240.88:8085//api/";
 var VideoDemo = 0;


var waitingDialog = waitingDialog || (function ($) {
    'use strict';

    // Creating modal dialog's DOM
    var $dialog = $(
		'<div class="loader">Loading...</div>');

    return {
        /**
		 * Opens our dialog
		 * @param message Custom message
		 * @param options Custom options:
		 * 				  options.dialogSize - bootstrap postfix for dialog size, e.g. "sm", "m";
		 * 				  options.progressType - bootstrap postfix for progress bar type, e.g. "success", "warning".
		 */
        show: function (message, options) {
            // Assigning defaults
            if (typeof options === 'undefined') {
                options = {};
            }
            if (typeof message === 'undefined') {
                message = '';
            }
            var settings = $.extend({
                dialogSize: 'm',
                progressType: '',
                onHide: null // This callback runs after the dialog was hidden
            }, options);

            // Configuring dialog
            $dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
            $dialog.find('.progress-bar').attr('class', 'progress-bar');
            if (settings.progressType) {
                $dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
            }
            $dialog.find('h3').text(message);
            // Adding callbacks
            if (typeof settings.onHide === 'function') {
                $dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
                    settings.onHide.call($dialog);
                });
            }
            // Opening dialog
            $dialog.modal();
        },
        /**
		 * Closes dialog
		 */
        hide: function () {
            $dialog.modal('hide');
        }
    };

})(jQuery);

//Local
//var _0x4bc4=["\x68\x74\x74\x70\x3A\x2F\x2F\x6C\x6F\x63\x61\x6C\x68\x6F\x73\x74\x3A\x36\x31\x36\x30\x39\x2F\x2F\x61\x70\x69\x2F","\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6C\x6F\x61\x64\x65\x72\x22\x3E\x4C\x6F\x61\x64\x69\x6E\x67\x2E\x2E\x2E\x3C\x2F\x64\x69\x76\x3E","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","","\x6D","\x65\x78\x74\x65\x6E\x64","\x6D\x6F\x64\x61\x6C\x2D","\x64\x69\x61\x6C\x6F\x67\x53\x69\x7A\x65","\x61\x64\x64\x43\x6C\x61\x73\x73","\x63\x6C\x61\x73\x73","\x6D\x6F\x64\x61\x6C\x2D\x64\x69\x61\x6C\x6F\x67","\x61\x74\x74\x72","\x2E\x6D\x6F\x64\x61\x6C\x2D\x64\x69\x61\x6C\x6F\x67","\x66\x69\x6E\x64","\x70\x72\x6F\x67\x72\x65\x73\x73\x2D\x62\x61\x72","\x2E\x70\x72\x6F\x67\x72\x65\x73\x73\x2D\x62\x61\x72","\x70\x72\x6F\x67\x72\x65\x73\x73\x54\x79\x70\x65","\x70\x72\x6F\x67\x72\x65\x73\x73\x2D\x62\x61\x72\x2D","\x74\x65\x78\x74","\x68\x33","\x6F\x6E\x48\x69\x64\x65","\x66\x75\x6E\x63\x74\x69\x6F\x6E","\x68\x69\x64\x64\x65\x6E\x2E\x62\x73\x2E\x6D\x6F\x64\x61\x6C","\x63\x61\x6C\x6C","\x6F\x6E","\x6F\x66\x66","\x6D\x6F\x64\x61\x6C","\x68\x69\x64\x65"];var URLServices=_0x4bc4[0];var VideoDemo=0;var waitingDialog=waitingDialog|| (function(_0x3392x4){_0x4bc4[1];var _0x3392x5=_0x3392x4(_0x4bc4[2]);return {show:function(_0x3392x6,_0x3392x7){if( typeof _0x3392x7=== _0x4bc4[3]){_0x3392x7= {}};if( typeof _0x3392x6=== _0x4bc4[3]){_0x3392x6= _0x4bc4[4]};var _0x3392x8=_0x3392x4[_0x4bc4[6]]({dialogSize:_0x4bc4[5],progressType:_0x4bc4[4],onHide:null},_0x3392x7);_0x3392x5[_0x4bc4[14]](_0x4bc4[13])[_0x4bc4[12]](_0x4bc4[10],_0x4bc4[11])[_0x4bc4[9]](_0x4bc4[7]+ _0x3392x8[_0x4bc4[8]]);_0x3392x5[_0x4bc4[14]](_0x4bc4[16])[_0x4bc4[12]](_0x4bc4[10],_0x4bc4[15]);if(_0x3392x8[_0x4bc4[17]]){_0x3392x5[_0x4bc4[14]](_0x4bc4[16])[_0x4bc4[9]](_0x4bc4[18]+ _0x3392x8[_0x4bc4[17]])};_0x3392x5[_0x4bc4[14]](_0x4bc4[20])[_0x4bc4[19]](_0x3392x6);if( typeof _0x3392x8[_0x4bc4[21]]=== _0x4bc4[22]){_0x3392x5[_0x4bc4[26]](_0x4bc4[23])[_0x4bc4[25]](_0x4bc4[23],function(_0x3392x9){_0x3392x8[_0x4bc4[21]][_0x4bc4[24]](_0x3392x5)})};_0x3392x5[_0x4bc4[27]]()},hide:function(){_0x3392x5[_0x4bc4[27]](_0x4bc4[28])}}})(jQuery)

//host
//var _0x3eb2 = ["\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x67\x69\x64\x70\x69\x2E\x63\x6F\x6D\x2F\x2F\x61\x70\x69\x2F", "\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74", "\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x6C\x6F\x61\x64\x65\x72\x22\x3E\x4C\x6F\x61\x64\x69\x6E\x67\x2E\x2E\x2E\x3C\x2F\x64\x69\x76\x3E", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "", "\x6D", "\x65\x78\x74\x65\x6E\x64", "\x6D\x6F\x64\x61\x6C\x2D", "\x64\x69\x61\x6C\x6F\x67\x53\x69\x7A\x65", "\x61\x64\x64\x43\x6C\x61\x73\x73", "\x63\x6C\x61\x73\x73", "\x6D\x6F\x64\x61\x6C\x2D\x64\x69\x61\x6C\x6F\x67", "\x61\x74\x74\x72", "\x2E\x6D\x6F\x64\x61\x6C\x2D\x64\x69\x61\x6C\x6F\x67", "\x66\x69\x6E\x64", "\x70\x72\x6F\x67\x72\x65\x73\x73\x2D\x62\x61\x72", "\x2E\x70\x72\x6F\x67\x72\x65\x73\x73\x2D\x62\x61\x72", "\x70\x72\x6F\x67\x72\x65\x73\x73\x54\x79\x70\x65", "\x70\x72\x6F\x67\x72\x65\x73\x73\x2D\x62\x61\x72\x2D", "\x74\x65\x78\x74", "\x68\x33", "\x6F\x6E\x48\x69\x64\x65", "\x66\x75\x6E\x63\x74\x69\x6F\x6E", "\x68\x69\x64\x64\x65\x6E\x2E\x62\x73\x2E\x6D\x6F\x64\x61\x6C", "\x63\x61\x6C\x6C", "\x6F\x6E", "\x6F\x66\x66", "\x6D\x6F\x64\x61\x6C", "\x68\x69\x64\x65"]; var URLServices = _0x3eb2[0]; var VideoDemo = 0; var waitingDialog = waitingDialog || (function (_0x35dfx4) { _0x3eb2[1]; var _0x35dfx5 = _0x35dfx4(_0x3eb2[2]); return { show: function (_0x35dfx6, _0x35dfx7) { if (typeof _0x35dfx7 === _0x3eb2[3]) { _0x35dfx7 = {} }; if (typeof _0x35dfx6 === _0x3eb2[3]) { _0x35dfx6 = _0x3eb2[4] }; var _0x35dfx8 = _0x35dfx4[_0x3eb2[6]]({ dialogSize: _0x3eb2[5], progressType: _0x3eb2[4], onHide: null }, _0x35dfx7); _0x35dfx5[_0x3eb2[14]](_0x3eb2[13])[_0x3eb2[12]](_0x3eb2[10], _0x3eb2[11])[_0x3eb2[9]](_0x3eb2[7] + _0x35dfx8[_0x3eb2[8]]); _0x35dfx5[_0x3eb2[14]](_0x3eb2[16])[_0x3eb2[12]](_0x3eb2[10], _0x3eb2[15]); if (_0x35dfx8[_0x3eb2[17]]) { _0x35dfx5[_0x3eb2[14]](_0x3eb2[16])[_0x3eb2[9]](_0x3eb2[18] + _0x35dfx8[_0x3eb2[17]]) }; _0x35dfx5[_0x3eb2[14]](_0x3eb2[20])[_0x3eb2[19]](_0x35dfx6); if (typeof _0x35dfx8[_0x3eb2[21]] === _0x3eb2[22]) { _0x35dfx5[_0x3eb2[26]](_0x3eb2[23])[_0x3eb2[25]](_0x3eb2[23], function (_0x35dfx9) { _0x35dfx8[_0x3eb2[21]][_0x3eb2[24]](_0x35dfx5) }) }; _0x35dfx5[_0x3eb2[27]]() }, hide: function () { _0x35dfx5[_0x3eb2[27]](_0x3eb2[28]) } } })(jQuery)