// SAVE AND LOAD
#ifndef SAVE_JS
#define SAVE_JS

(function(){
var flag = false;

$(window).unload(function(e){
    var text = JSON.parse(GM_getValue('qr_save','{}'));
    text[tid] = flag ? $('#message').val() : '';
    GM_setValue('qr_save',JSON.stringify(text));
});

$('#qr_row1').find('input:submit').submit(function(e){
     flag = true;
});

$('#message').val( JSON.parse(GM_getValue('qr_save','{}'))[tid] || '' );

});

#endif