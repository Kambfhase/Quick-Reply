#if GREASEMONKEY
#define WINDOW unsafeWindow
#else
#define WINDOW window
#endif 


#include "header.js"
#include "jquery-1.5.js"


// DEFAULT EINSTELLUNGEN
var optionen = {
        qr_offen : true, // QR gleich offen
        qr_zitate_fett : true, // Zitate fett machen dh. [b]
        qr_smileys : true, // Smileys anzeigen
        qr_clickable_posticons : false, // Die Posticons wie die Smileys clickbar machen.
        qr_zitieren : true,
        qr_editieren: true,
        qr_customsmileys : ["http://p0t.kicks-ass.net/balla.gif",
            "http://p0t.kicks-ass.net/hallocain.gif",
            "http://p0t.kicks-ass.net/trommel.gif",
            "http://p0t.kicks-ass.net/naughty.gif"],
        qr_custombuttons : [{
            "url":"http://abload.de/img/uberkano.png",
            "code":"[url=steam://connect/93.190.68.179:27015][img]http://www.abload.de/img/uber2fv6e.png[/img][/url]"
        }],
        qr_savepost: false
},
cl  = WINDOW.console ? function(){ WINDOW.console.log.apply( WINDOW.console, arguments); } : GM_log,
tid = /TID=(\d+)/i.exec( window.location.search)[1],
jqTBody = (document.evaluate("//tbody[ ./tr[ @username] ]", document, null, 8, null).singleNodeValue),
qr_row0, qr_row1, qr_row2,
storage, $, token_newreply, addTextWeiche = function( text){
    $('#message').val(function(i, old){
        return old + text;
    });
};

#if GREASEMONKEY

storage = { get: function( a,b){
    var val = GM_getValue( a, b);
    return typeof val !== typeof b ? JSON.parse( val) : val;
}, set: GM_setValue };
$= unsafeWindow.jQuery;
token_newreply = unsafeWindow.token_newreply;

if( !$('<div>').is('div') ){
    // matches selector
    $.find.matchesSelector = function( node, expr ) {
        try {
            return node.mozMatchesSelector( expr);
        } catch(e){}
        return $.find(expr, null, null, [node]).length > 0;
    };
}

#else

storage = { 
    set: function( a, b){
        return window.localStorage.setItem( a, JSON.stringify(b));
    },
    get: function( a, b){
        a = window.localStorage.getItem( a);
        if( a === null){
            return b;
        } else {
            while( typeof a !== typeof b){
                a= JSON.parse(a);
            }
            return a;
        }
    }
};
$= window.jQuery;
token_newreply = /token_newreply\s+=\s+'(\w+)'/i.exec(document.documentElement.innerHTML)[1],

#endif
#ifdef OPERA

function GM_addStyle( txt){
    $("<style>").text( txt).appendTo("head");
}

#endif

// CSS
GM_addStyle( unescape(
#include "style.css"
) + 
( storage.get('qr_offen', optionen.qr_offen) ? "#qr_row0 { display: none} #qr_row1 { display: table-row }" : "")+
( storage.get('qr_smileys', optionen.qr_smileys) ? "" : "#smileys{ display:none}") );

if( !document.evaluate("//a[contains(@href, './quickmod')]", document, null,8,null).singleNodeValue)
        GM_addStyle( ".iAmMod { display:none;}" );



// HTML

qr_row0 = (
#include "qr_row0.htm"
);

qr_row1 = (
#include "qr_row1.htm"
);
		
qr_row2 = (
#include "qr_row2.htm"
);


// EVENT HANDLER
var clickPosticon = function clickPosticon( e){
    if( storage.get('qr_clickable_posticons',optionen.qr_clickable_posticons)){
        addTextWeiche( this.getAttribute("alt"));
    } else {
        $('#qr_row1').find('#gmqr'+$(this).attr('tg')).click();
        //$(this).prev().click();
    }
},
clickEinstellung = function(e){
    var setting = this.id;
    if( storage.get( setting, optionen[setting])){
        $(this).removeAttr('checked');
        storage.set( setting, false);
    } else {
        $(this).attr('checked','checked');
        storage.set( setting, true);
    }
},
clickZitieren = function(e){
    if( e.which !== 1 || !storage.get('qr_zitieren',optionen.qr_zitieren)){
        return true;
    }
    var pid = /(\d+)$/.exec($(this).attr('href'))[1],
        ptr = $(this).closest('tr.color1').prev(),
        fett = storage.get("qr_zitate_fett", optionen.qr_zitate_fett);
    
    // async
    $.ajax({
        url: "xml/thread.php?onlyPID="+ pid/*1241825996*/+"&TID="+tid,//190550
        success: function( data){
            var text = data.querySelector("content").textContent,
                img2url = /\[url=([^\]]+)\]\[img\][^\]]*\[\/img\]\[\/url\]/gi;
            
            text = text.replace(img2url,"[url]$1[/url]");
            text = '[quote='+tid+','+
                pid+ // PostID
                ',"'+
                unescape(ptr.attr('username'))+ // Username
                '"]'+(fett?"[b]\n":"\n")+text+(fett?"\n[/b]":"\n")+'[/quote]';
                
                
            
            $('#qr_row1').show();
            $('#qr_row2,#qr_row0').hide();

            document.getElementById('message').focus();

            addTextWeiche( text);
        }
    });
    
    
    return false;
},
clickEditieren = function(e){
    if( e.which !== 1 || !storage.get('qr_editieren',optionen.qr_editieren)){
        return true;
    }
    e.preventDefault();
    
    var counter = 2,
        $data, code, pid = /(\d+)$/.exec($(this).attr('href'))[1];
    
    function weiter(){
        // wird aufgerufen, wenn beide XHRs angekommen sind.
        if( counter = --counter){
            return;
        }
        var token = $data.find('input[name="token"]').val(),
            link = $('a[href="./editreply.php?PID='+pid+'"]',jqTBody),
            post = link.closest('tr.color1').prev().find('span.posttext'),
            icon = post.closest('tr').prev().find('img'),
            title = $data.find('input[name="edit_title"]').val();

        $('#qr_row0').hide();
        var qr_edit = $('#qr_row1,#qr_row2').detach().insertAfter( link.closest('tr.color1')).hide().filter('#qr_row1').show();
        qr_edit.find('input[name="token"]').val(token);
        qr_edit.find('textarea[name="message"]').val(code);
        qr_edit.find('form').attr('action', "editreply.php").append($('<input type="hidden" name="PID"/>').val(pid));
        qr_edit.find('input[name="post_icon"]').attr('name','edit_icon');
        qr_edit.find('input[name="post_title"]').attr('name','edit_title').val(title);
        if( icon.length){
            $(document.querySelectorAll('#qr_row1 > td:last-child img[src*="'+ icon.attr('src').replace(/(\/|\.)/g,"\\$1") +'"]')).prev().attr('checked','checked');
            $('#gmqr0').removeAttr('checked');
        }
    }
    
    $.ajax({
        url: "xml/thread.php?onlyPID="+ pid +"&TID="+tid,
        success: function( data){
            code = data.querySelector("content").textContent;
            weiter();
        }
    });
    
    $.get(
        $(this).attr('href'),
        //ajaxEditpage
        function( data){
            $data = $(data);
            weiter();
        }
    );
    return false;
},
ajaxEditpage = function( data){
    
    var $data = $(data),
        token = $data.find('input[name="token"]').val(),
        pid = $data.find('input[name="PID"]').val(),
        code = $data.find('textarea[name="message"]').text(),
        link = $('a[href="./editreply.php?PID='+pid+'"]',jqTBody),
        post = link.closest('tr.color1').prev().find('span.posttext'),
        icon = post.closest('tr').prev().find('img'),
        title = $data.find('input[name="edit_title"]').val();

    $('#qr_row0').hide();
    var qr_edit = $('#qr_row1,qr_row2').detach().insertAfter( link.closest('tr.color1')).hide().filter('#qr_row1').show();
    qr_edit.find('input[name="token"]').val(token);
    code= parse(post.html(), true);
    qr_edit.find('textarea[name="message"]').val(code);
    qr_edit.find('form').attr('action', "editreply.php").append($('<input type="hidden" name="PID"/>').val(pid));
    qr_edit.find('input[name="post_icon"]').attr('name','edit_icon');
    qr_edit.find('input[name="post_title"]').attr('name','edit_title').val(title);
    if( icon.length){
        $(document.querySelectorAll('#qr_row1 > td:last-child img[src*="'+ icon.attr('src').replace(/(\/|\.)/g,"\\$1") +'"]')).prev().attr('checked','checked');
        $('#gmqr0').removeAttr('checked');
    }
},
clickSmiley = function(e){
    var $this = $(this);
    
    addTextWeiche( $this.attr('alt') == "src" ? ('[img]'+$this.attr('src')+'[/img]') : $this.attr('alt'));
},
changeCustomsmiley = function(e){
    var urls = $(this).val().split('\n'),
        i=0, $smileys = $('#smileys').children('img[alt="src"]').remove().end();
    for(; i< urls.length; ++i){
        if( urls[i] && /\S/.test(urls[i])){
            $smileys.append('<img src="'+urls[i]+'" alt="src" />\n');
        }
    }
    storage.set( 'qr_customsmileys', JSON.stringify(urls.map(encodeURI)));
},
changeSmileys = function(e){

    #if GREASEMONKEY || OPERA
    $('#smileys')[storage.get('qr_smileys',optionen.qr_smileys)?'show':'hide']();
    #else
    // in Chrome kommt change vor click, deswegen muss der Anzeigestand selber umgedreht werden.
    $('#smileys')[storage.get('qr_smileys',optionen.qr_smileys)?'hide':'show']();
    #endif
};

// HTML EINFÜGEN & HANDLER REGISTRIEREN & MISC

$('<div/>').append( unescape(qr_row0))
    .append( unescape(qr_row1))
    .append( unescape(qr_row2))
    .children().insertAfter($("tr.color1:last",jqTBody));

$(jqTBody).delegate('a[href^="newreply.php?PID="]','click', clickZitieren).delegate('a[href^="./editreply.php?PID="]','click', clickEditieren);

$('#qr_row0, #qr_row2').find('a:first').click(function(e){
    $('#qr_row1').show(); 
    $('#qr_row0,#qr_row2').hide();
    document.getElementById('message').focus();
});

$(document).keypress(function( e){
    if( e.which === 113 && e.altKey){
        $('#qr_row1').show(); 
        $('#qr_row0, #qr_row2').hide();
        document.getElementById('message').focus();
    }
});


$('#qr_row1').delegate("input:radio + img","click", clickPosticon).find('a:first').click(function(e){
    $('#qr_row2').show();
    $('#qr_row1,#qr_row0').hide();
});
$('#qr_row1').find('input[name="TID"]').val(tid);
$('#qr_row1').find('input[name*=token]').val(token_newreply); 

$('#smileys').delegate("img[alt]","click",clickSmiley);

$('#qr_row2').delegate('input:checkbox','click', clickEinstellung).find('input').attr("checked",function(){
    return storage.get( this.id, optionen[ this.id]) ? "checked" : "" ;
}).filter('#qr_smileys').change(changeSmileys);

// CUSTOM SMILEYS
$('#qr_customsmileys').change(changeCustomsmiley).val(
    storage.get('qr_customsmileys',optionen.qr_customsmileys).map(unescape).join('\n')
).change();

#include "buttons.js"


#include "save.js"
#ifdef NEVER
#include "slice.js"

#endif