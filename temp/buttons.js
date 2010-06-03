// CUSTOM BUTTONS
#ifndef BUTTONS_JS
#define BUTTONS_JS

(function(){

var obj= JSON.parse( GM_getValue('qr_custombuttons', optionen.qr_custombuttons)),
    i=0,
    div=$('<div />'),
clickCustombuttons = function(e){
    window.addText( $(this).attr('code') , window.document.forms['newreply']);
},
clickMinus = function(e){
    $(this).nextUntil('a').andSelf().remove();
    changeCustombuttons.apply( $('#qr_custombuttons').get(0));
},
clickPlus = function(e){
    $('#qr_custombuttons').append('<a href="javascript:void 0;">-</a> <label>URL: <input type="text" name="url" /></label> <label> Code: <input type="text" name="code" /></label><br />\n');
},
changeCustombuttons = function( e){
    var obj = [];
    $(this).find('input').each(function(i,elem){ 
        if( i % 2 === 0){
            obj[i/2] = {"url": escape($(elem).val()) || ""};
        } else {
            obj[(i-1)/2].code = escape($(elem).val()) || "";
        }
    });
    obj = JSON.stringify( obj);
    GM_setValue('qr_custombuttons', obj);
    createCustombuttons();
},
createCustombuttons = function(e){
    var span = $('#qr_insertcustombuttonshere').empty(),
        obj = JSON.parse(GM_getValue('qr_custombuttons', optionen.qr_custombuttons)),
        i = 0;
    for(; i<obj.length; ++i){
        if( /^http|^www/.test( obj[i].url)){
            span.append('<img src="'+unescape(obj[i].url)+'" alt="'+unescape(obj[i].url)+'" code="'+unescape(obj[i].code)+'" />\n');
        } else {
            span.append('<img alt="'+unescape(obj[i].url)+'" code="'+unescape(obj[i].code)+'" />\n');
        }
    }
};

$('#qr_custombuttons_add').click( clickPlus);
$('#qr_custombuttons').delegate('a','click',clickMinus).bind('change', changeCustombuttons).bind('create',createCustombuttons);

$('#qr_insertcustombuttonshere').delegate('img[code]','click',clickCustombuttons);

for(;i< obj.length; ++i){
    div.append('<a href="javascript:void 0;">-</a> <label>URL: <input type="text" name="url" value="'+obj[i].url+'" /></label> <label> Code: <input type="text" name="code" value="'+obj[i].code+'" /></label><br />\n');
}

div.children().appendTo('#qr_custombuttons');


changeCustombuttons.apply( $('#qr_custombuttons').get(0));

});
#endif