// SAVE AND LOAD
#ifndef SAVE_JS
#define SAVE_JS

(function(){
    var flag = false;

    $(window).unload(function(e){
        if( !storage.get('qr_savepost',false)){
            return;
        }
        var obj = storage.get('qr_save',{}),
            neu = $('#message').val() || '';
            
        if( flag){
            // submit, dh. Speicher leeren.
            if( tid in obj){
                delete obj[ tid];
                storage.set('qr_save',JSON.stringify( obj));
            }
        
        } else {
            // nicht abgeschickt
            if( neu && /\S/.test(neu)){
                obj[tid]=neu;
                storage.set('qr_save', JSON.stringify( obj));
            } else {
                delete obj[ tid];
                storage.set('qr_save',JSON.stringify( obj));
            }
        }
    });

    $('#qr_row1').submit(function(e){
         flag = true;
    });

    if( storage.get('qr_savepost',false)){
        $('#message').val( storage.get('qr_save',{})[tid] || '' );
    }

})();

#endif