// Slice-o-mat
#ifndef SLICE_JS
#define SLICE_JS

(function(){
var r = /^.*(?:\[quote=(\d*),(\d*),"([^"]+)"\])(?:.*?\[quote.*?\[\/quote\])*?(?!.*?\[\/quote\].*?$).*?$/;

$("<img />",{
    alt:"Slice-o-mat",
    id:"sliceomat",
    click: function(e){
        var $area   = $('#message'),
            text    = $area.val(),
            domarea = $area[0],
            pre     = text.slice(0,domarea.selectionStart),
            post    = text.slice(domarea.selectionStart),
            mid     = r.exec(pre);
        if(mid){
            text=pre+"[/quote]\n\n[quote="+mid[1]+","+mid[2]+",\""+mid[3]+"\"]"+post;
            $area.val(text);
        }
        return false;
    }
}).insertAfter('#qr_row1 img[alt="Quote"]');

});
#endif