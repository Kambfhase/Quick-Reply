#if GREASEMONKEY
#define WINDOW unsafeWindow
#else
#define WINDOW window
#endif 


#include "header.js"
#include "jquery.js"


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
        }]
},
cl  = WINDOW.console ? function(){ WINDOW.console.log.apply( WINDOW.console, arguments); } : GM_log,
tid = /TID=(\d+)/i.exec( window.location.search)[1],
jqTBody = (document.evaluate("//tbody[ ./tr[ @username] ]", document, null, 8, null).singleNodeValue),
qr_row0, qr_row1, qr_row2, qrrxp,
storage, $, token_newreply, addTextWeiche;

#if GREASEMONKEY

storage = { get: function( a,b){
    var val = GM_getValue( a, b);
    return typeof val !== typeof b ? JSON.parse( val) : val;
}, set: GM_setValue };
$= unsafeWindow.jQuery;
token_newreply = unsafeWindow.token_newreply;

addTextWeiche = function( text){
    unsafeWindow.addText( text, unsafeWindow.document.forms['newreply']);
}

#endif
#ifdef CHROME

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

addTextWeiche = function( text){
    $('#message').text(function(i, old){
        return old + text;
    });
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

qrrxp={    
        "profil:$1" : /<a href="javascript:void\(0\)" onclick="openProfile2?\((\d*)\)"><span>profil:<\/span>.*?<\/a>/gi,
        "thread:$1" : /<a href="\.\/thread\.php\?TID=(\d*)"><span>thread:<\/span>.*?<\/a>/gi,
        "board:$1" : /<a href="\.\/board\.php\?BID=(\d*)"><span>board:<\/span>.*?<\/a>/gi,
        "[code]$2[/code]": /Code:(?=([\s\S]+?<pre))\1 class="code">([\s\S]*?)<\/pre>/gi,
        "[php]$4[/php]": /PHP:(?=([\s\S]+<div))\1 class=(['"])phpcode\2><code><span (?=([^>]*>))\3\n([\s\S]*?)<\/span>\s*<\/code><\/div>/gi,
        "[spoiler]" : /<i>Spoiler<\/i> - markieren, um zu lesen:<br>\n(?:<\/b>)*<div class="spoiler">/gi,
        "[/spoiler]" : /<\/div>/gim,
        "[/quote]\n" : /<\/td><\/tr><\/tbody><\/table><\/td><\/tr><\/tbody><\/table>/gi,
        "[/b]<br>" : /(?:<br>)*\n*<\/b>/gim,
        "[$1$2]" : /<(\/)?(b|i|s|u)>/gi,
        "[mod]$1[/mod]" : /<span class="marked">(.*?)<\/span>/gi,
        "\n\t[*]" : /<li>/gim,
        "DELETEDUMMYDELETEDUMMY" : /<\/li>/gim,
        "[list]$1[/list]" : /<ul>(.*)<\/ul>/gim,
        "[list=$1]" : /<ol type="(a|1)">/gim,
        "[list]" : /<ul>/gim,
        "[/list]" : /<\/(?:ol|ul)>/gim,
        "DELETEDUMMY" : /\[b\]\s*\[\/b\]/gim,
        ";)" : /<img src="img\/smilies\/wink\.gif" alt="Augenzwinkern" align="abscenter">/gi,
        ":(" : /<img src="\.\/img\/smilies\/icon12\.gif" alt="traurig" align="abscenter">/gi,
        ":)" : /<img src="\.\/img\/smilies\/icon7\.gif" alt="" align="abscenter">/gi,
        ":bang:" : /<img src="\.\/img\/smilies\/banghead\.gif" alt="Kopf gegen die Wand schlagen" align="abscenter">/gi,
        ":confused:" : /<img src="\.\/img\/smilies\/confused\.gif" alt="verwirrt" align="abscenter">/gi,
        ":D" : /<img src="img\/smilies\/biggrin\.gif" alt="Breites Grinsen" align="abscenter">/gi,
        ":eek:" : /<img src="img\/smilies\/icon15\.gif" alt="Erschrocken" align="abscenter">/gi,
        ":hm:" : /<img src="img\/smilies\/hm\.gif" alt="Hmmm" align="abscenter">/gi,
        ":huch:" : /<img src="\.\/img\/smilies\/freaked\.gif" alt="Haare zu Berge stehen" align="abscenter">/gi,
        ":mad:" : /<img src="img\/smilies\/icon13\.gif" alt="Wütend" align="abscenter">/gi,
        ":mata:" : /<img src="img\/smilies\/mata\.gif" alt="Mata halt\.\.\." align="abscenter">/gi,
        ":moo:" : /<img src="img\/smilies\/smiley-pillepalle\.gif" alt="Pillepalle" align="abscenter">/gi,
        ":o" : /<img src="img\/smilies\/icon16\.gif" alt="peinlich\/erstaunt" align="abscenter">/gi,
        ":P" : /<img src="img\/smilies\/icon2\.gif" alt="" align="abscenter">/gi,
        ":roll:" : /<img src="\.\/img\/smilies\/icon18\.gif" alt="mit den Augen rollend" align="abscenter">/gi,
        ":what:" : /<img src="\.\/img\/smilies\/sceptic\.gif" alt="skeptisch" align="abscenter">/gi,
        ":wurgs:" : /<img src="\.\/img\/smilies\/urgs\.gif" alt="" align="abscenter">/gi,
        ":zyklop:" : /<img src="\.\/img\/smilies\/icon1\.gif" alt="" align="abscenter">/gi,
        ":|" : /<img src="img\/smilies\/icon8\.gif" alt="" align="abscenter">/gi,
        "^^" : /<img src="\.\/img\/smilies\/icon5\.gif" alt="fröhlich" align="abscenter">/gi,
        "[url]$1[/url]" : /<a href="([^"]*)" target="_blank">\1<\/a>/gi,
        "[url=$1]$2[/url]" : /<a href="([^"]*)" target="_blank">(.*?)<\/a>/gi,
        '[quote=$1,$2,"$3"]' :   /<td class="quote"><a href="thread\.php\?TID=(\d*)&amp;PID=(\d*)#reply_\d*">Zitat<\/a> von ([^<]*)<br>/gi,
        "[quote]" :              /<td class="quote">/gi,
        "[m]$2[/m]": /<pre class=(['"])inline m\1>([\s\S]*?)<\/pre>/gi,
        "[b]" : /\[b](?:<br>\n)*\s+/gi,
        //"[/table]" : /<\/tbody><\/table>/gi,
        //"[--]\n" : /<\/tr><tr>/gi,
        //"[||]" : /<\/td><td>/gi,
        //"[table]" : /<table class="" border="\d+" cellpadding="2" cellspacing="0"><tbody>/gim,
        "": /DELETEDUMMY/gi,
        "\n": /\n\s*/gi,
};


// EVENT HANDLER
var parse = function( text, boolEdit ){
    var str;
    if( !boolEdit){
        text = text.replace(/<a href="([^"]*)" target="_blank"><img src="[^"]*" class="p" border="0"><\/a>/gi, "[url]$1[/url]");
        text = text.replace(/<img src="([^"]*)" class="p" border="0">/gi, "[url]$1[/url]");
    } else {
        text = text.replace(/<img src="([^"]*)" class="p" border="0">/gi, "[img]$1[/img]");
    }
    for( str in qrrxp){
        text = text.replace( qrrxp[str], str);
    }
    return $('<div />').html(text).text().trim().replace(/\n *\n\s*/gi,"\n\n");
},
clickPosticon = function clickPosticon( e){
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
    // sync
    
    /*

    var text = parse(ptr.find('span.posttext').html());

    */
    
    // async
    $.ajax({
        url: "xml/thread.php?onlyPID="+ pid/*1241825996*/+"&TID="+tid,//190550
        success: function( data){
            var text = data.querySelector("content").textContent,
                img2url = /\[url=([^\]])+\]\[img\][^]]*\[/img\]\[/url\]/gi;
            
            text = '[quote='+tid+','+
                pid+ // PostID
                ',"'+
                unescape(ptr.attr('username'))+ // Username
                '"]'+(fett?"[b]\n":"\n")+text.replace(img2url,"[url]$1[/url]")+(fett?"\n[/b]":"\n")+'[/quote]';
                
                
            
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
    
    $.get(
        $(this).attr('href'),
        ajaxEditpage
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

    #if GREASEMONKEY
    $('#smileys')[storage.get('qr_smileys',optionen.qr_smileys)?'show':'hide']();
    #endif
    #if CHROME
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