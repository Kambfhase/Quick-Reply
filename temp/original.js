// ==UserScript==
// @name        Quick-Reply by Kambfhase
// @version     2.5.2
// @author      Kambfhase
// @description ein Quickreply Script für mods.de
// @include     http://forum.mods.de/bb/thread.php?*
// @include     http://forum.mods.de/bb//thread.php?*
// @require     http://kampfhase2005.ka.funpic.de/uploads/GM_jquery.js
// ==/UserScript==

// DEFAULT EINSTELLUNGEN

var optionen = {
    qr_offen : true, // QR gleich offen
    qr_zitate_fett : true, // Zitate fett machen dh. [b]
    qr_smileys : true, // Smileys anzeigen
    qr_clickable_posticons : false, // Die Posticons wie die Smileys clickbar machen.
    qr_zitieren : true,
    qr_editieren: true,
    qr_savepost: false,
    qr_nourl: false,
    qr_customsmileys : "http://81.89.102.87/balla.gif\nhttp://81.89.102.87/hallocain.gif\nhttp://www.abload.de/img/naughty_nc5p1.gif\nhttp://img9.abload.de/img/tusch44jskqlaowq.gif",
    qr_custombuttons : '[{"url":"http://abload.de/img/uberkano.png","code":"[url=steam://connect/93.190.68.179:27015][img]http://www.abload.de/img/uber2fv6e.png[/img][/url]"}]'
},
cl  = unsafeWindow.console ? unsafeWindow.console.log : GM_log,
$   = unsafeWindow.jQuery,
tid = /TID=(\d+)/i.exec( window.location.search)[1],
jqTBody = (document.evaluate("//tbody[ ./tr[ @username] ]", document, null, 8, null).singleNodeValue),
qr_row0, qr_row1, qr_row2, qrrxp,
token_newreply = window.token_newreply || /token_newreply\s+=\s+'(\w+)'/i.exec(document.documentElement.innerHTML)[1];
//GM_getValue = GM_getValue || function(a,b){ return b || null;};
//GM_setValue = GM_setValue || function(){};

var storage = (function(window){
    var ret = {};
    if( GM_getValue && GM_setValue){
        ret = { get: GM_getValue, set: GM_setValue };
    } else {
        ret = { set: window.localStorage.setItem,
            get: function( a, b){
                a = window.localStorage.getItem( a);
                return a === null ? a : b;
                }
           }
    }
    return ret;
})(window);


// CSS

GM_addStyle((<><![CDATA[
#qr_row1, #qr_row2 {
        font-size: 10px;
        font-weight: bold;
        background-color: #394E63; 
        text-align: center;
        display:none;
}
#qr_row1 > td, #qr_row2 > td {
        vertical-align: top; 
        padding-top: 5px; 
}
#qr_row1 > td + td, #qr_row2 > td + td {
        padding-left: 5px;
        padding-right: 5px;
        font-size: 10px;
        text-align: left;
}
#qr_row0 > td { 
        height: 16px;
        text-align: center;
        font-weight: bold;
        background-color: #091827;
        font-size: 10px;
        color: #ddd; 
} 
#qr_row1 img {
        cursor: pointer;
}
#qr_custombuttons input{
    width: 300px;
}
#smileys > img {
    max-height: 30px;
    max-width: 30px;
}
]]></>).toString() + 
( storage.get('qr_offen', optionen.qr_offen) ? "#qr_row0 { display: none} #qr_row1 { display: table-row }" : "")+
( storage.get('qr_smileys',optionen.qr_smileys) ? "" : "#smileys{ display:none}") );

if( !document.evaluate("//a[contains(@href, './quickmod')]", document, null,8,null).singleNodeValue)
        GM_addStyle( ".iAmMod { display:none;}" );

// HTML

qr_row0 = (<tr id="qr_row0" class="color1">
			<td>
				<a href="JavaScript:void(0);" class="nu wht postlink">Quick-Reply</a><br />
			</td>
			<td> 
				<a class="nu wht postlink" href="http://userscripts.org/scripts/show/42789">v2.5</a> by <a  class="nu wht postlink" href="javascript:void(0);" onclick="openProfile2(1209559)">Kambfhase</a>
			</td>
		</tr>).toXMLString();

qr_row1 = (<tr id="qr_row1">
			<td>
				<a class="nu wht postlink" href="javascript:void(0);">Optionen</a>
				<br />
				<span id="smileys">
                    <img src="./img/smilies/freaked.gif" alt=":huch:" /> 
                    <img src="./img/smilies/icon12.gif" onclick="Javascript:addText(':(',document.forms['newreply']);"/> 
                    <img src="./img/smilies/icon7.gif" onclick="Javascript:addText(':)',document.forms['newreply']);"/> 
                    <img src="./img/smilies/banghead.gif" onclick="Javascript:addText(':bang:',document.forms['newreply']);"/> 
                    <img src="./img/smilies/confused.gif" onclick="Javascript:addText(':confused:',document.forms['newreply']);"/> 
                    <img src="./img/smilies/biggrin.gif" onclick="Javascript:addText(':D',document.forms['newreply']);"/> 
                    <img src="./img/smilies/icon15.gif" onclick="Javascript:addText(':eek:',document.forms['newreply']);"/> 
                    <img src="./img/smilies/icon13.gif" onclick="Javascript:addText(':mad:',document.forms['newreply']);"/> 
                    <img src="./img/smilies/mata.gif" onclick="Javascript:addText(':mata:',document.forms['newreply']);"/> 
                    <img src="./img/smilies/smiley-pillepalle.gif" onclick="Javascript:addText(':moo:',document.forms['newreply']);"/> 
                    <img src="./img/smilies/icon16.gif" onclick="Javascript:addText(':o',document.forms['newreply']);"/> 
                    <img src="./img/smilies/icon2.gif" onclick="Javascript:addText(':P',document.forms['newreply']);"/> 
                    <img src="./img/smilies/icon18.gif" onclick="Javascript:addText(':roll:',document.forms['newreply']);"/> 
                    <img src="./img/smilies/sceptic.gif" onclick="Javascript:addText(':what:',document.forms['newreply']);"/> 
                    <img src="./img/smilies/urgs.gif" onclick="Javascript:addText(':wurgs:',document.forms['newreply']);"/> 
                    <img src="./img/smilies/icon1.gif" onclick="Javascript:addText(':zyklop:',document.forms['newreply']);"/> 
                    <img src="./img/smilies/icon8.gif" onclick="Javascript:addText(':|',document.forms['newreply']);"/> 
                    <img src="./img/smilies/wink.gif" onclick="Javascript:addText(';)',document.forms['newreply']);"/> 
                    <img src="./img/smilies/icon5.gif" onclick="Javascript:addText('^^',document.forms['newreply']);"/> 
                    <img src="./img/icons/thumbsup.gif" onclick="Javascript:addText('[img]./img/icons/thumbsup.gif[/img]',document.forms['newreply']);"/> 
                    <img src="./img/icons/thumbsdown.gif" onclick="Javascript:addText('[img]./img/icons/thumbsdown.gif[/img]',document.forms['newreply']);"/> 
                    <img src="./img/icons/pfeil.gif" onclick="Javascript:addText('[img]./img/icons/pfeil.gif[/img]',document.forms['newreply']);"/> 
                    <img src="./img/icons/icon9.gif" onclick="Javascript:addText('[img]./img/icons/icon9.gif[/img]',document.forms['newreply']);"/> 
                    <img src="./img/icons/icon10.gif" onclick="Javascript:addText('[img]./img/icons/icon10.gif[/img]',document.forms['newreply']);"/> 
                    <img src="./img/icons/icon6.gif" onclick="Javascript:addText('[img]./img/icons/icon6.gif[/img]',document.forms['newreply']);"/>
                    <img src="./img/icons/icon11.gif" onclick="Javascript:addText('[img]./img/icons/icon11.gif[/img]',document.forms['newreply']);"/>
                    <img src="./img/icons/icon4.gif" onclick="Javascript:addText('[img]./img/icons/icon4.gif[/img]',document.forms['newreply']);"/>
                    <img src="./img/icons/icon3.gif"  onclick="Javascript:addText('[img]./img/icons/icon3.gif[/img]',document.forms['newreply']);"/>
                    <br /><br />
                </span>
			</td>
			<td>
				<form name="newreply" action="newreply.php" method="post">
					<input type="hidden" name="TID" value="" />
					<input type="hidden" name="token" value="" />
					<input type="text" name="post_title" id="gmqrtitle" style="width: 250px;" /> 
					<br />
					<fieldset style="border-style: none; display: inline; padding-left:0px; margin-left: 0px;">
						<input type="radio" name="post_icon" id="gmqr0" value="0" style="margin-right: 21px;" checked="checked"/> 
						<input type="radio" name="post_icon" id="gmqr32" value="32" /><img alt=":P" src="./img/icons/icon2.gif" tg="32" />
						<input type="radio" name="post_icon" id="gmqr40" value="40" /><img alt="[img]./img/icons/icon11.gif[/img]" tg="40" src="./img/icons/icon11.gif" />
						<input type="radio" name="post_icon" id="gmqr34" value="34" /><img alt="[img]./img/icons/icon4.gif[/img]" tg="34" src="./img/icons/icon4.gif" />
						<input type="radio" name="post_icon" id="gmqr33" value="33" /><img alt="[img]./img/icons/icon3.gif[/img]" tg="33" src="./img/icons/icon3.gif" />
						<input type="radio" name="post_icon" id="gmqr41" value="41" /><img alt=":(" tg="41" src="./img/icons/icon12.gif" />
						<input type="radio" name="post_icon" id="gmqr2"  value="2"  /><img alt="[img]./img/icons/thumbsup.gif[/img]" tg="2" src="./img/icons/thumbsup.gif" />
						<input type="radio" name="post_icon" id="gmqr1"  value="1"  /><img alt="[img]./img/icons/thumbsdown.gif[/img]" tg="1" src="./img/icons/thumbsdown.gif" /><br />
						<input type="radio" name="post_icon" id="gmqr54" value="54" /><img alt="[img]./img/icons/pfeil.gif[/img]" tg="54" src="./img/icons/pfeil.gif" />
						<input type="radio" name="post_icon" id="gmqr38" value="38" /><img alt=":|" tg="38" src="./img/icons/icon8.gif" />
						<input type="radio" name="post_icon" id="gmqr35" value="35" /><img alt="^^" tg="35" src="./img/icons/icon5.gif" />
						<input type="radio" name="post_icon" id="gmqr28" value="28" /><img alt="[img]./img/icons/icon9.gif[/img]" tg="28" src="./img/icons/icon9.gif" />
						<input type="radio" name="post_icon" id="gmqr42" value="42" /><img alt=":mad:" tg="42" src="./img/icons/icon13.gif" />
						<input type="radio" name="post_icon" id="gmqr36" value="36" /><img alt="[img]./img/icons/icon6.gif[/img]" tg="36" src="./img/icons/icon6.gif" />
						<input type="radio" name="post_icon" id="gmqr39" value="39" /><img alt="[img]./img/icons/icon10.gif[/img]" tg="39" src="./img/icons/icon10.gif" />
						<input type="radio" name="post_icon" id="gmqr37" value="37" /><img alt=":)" tg="37" src="./img/icons/icon7.gif" /><br />
					</fieldset>
					<br />
					<img src="./img/buttons/fett.gif" alt="Fett" onclick="addCode('[b]', '[/b]', document.forms['newreply'])" />
					<img src="./img/buttons/u.gif" alt="Unterstreichen" onclick="addCode('[u]', '[/u]', document.forms['newreply'])" />
					<img src="./img/buttons/code.gif" alt="Code einf&#x00fc;gen" onclick="addCode('[code]', '[/code]', document.forms['newreply'])" />
					<img src="./img/buttons/kursiv.gif" alt="Kursiv" onclick="addCode('[i]', '[/i]', document.forms['newreply'])" />
					<img src="./img/buttons/s.gif" alt="Durchstreichen" onclick="addCode('[s]', '[/s]', document.forms['newreply'])" />
					<img src="http://abload.de/img/mono4qf9.png" alt="Monospace" onclick="addCode('[m]', '[/m]', document.forms['newreply'])" />
					<img src="./img/buttons/img.gif" alt="Bild einf&#x00fc;gen" onclick="makeImage(document.forms['newreply'])" />
					<img src="./img/buttons/url.gif" alt="Link mit Text" onclick="makeNamedLink(document.forms['newreply'])" />
					<img src="./img/buttons/url2.gif" alt="Link einf&#x00fc;gen" onclick="makeLink(document.forms['newreply'])" />
					<img src="./img/buttons/list.gif" alt="Liste einf&#x00fc;gen" onclick="addToList(document.forms['newreply'])" />
					<img src="./img/buttons/quote.gif" alt="Quote" onclick="addCode('[quote]', '[/quote]', document.forms['newreply'])" />
					<img src="./img/buttons/spoiler.gif" alt="Spoiler-Warnung für diesen Text einf&#x00fc;gen" onclick="addCode('[spoiler]', '[/spoiler]', document.forms['newreply'])" />
					<img src="http://abload.de/img/adminxtmh.png" class="iAmMod" onclick="addCode('[mod]','[/mod]',document.forms['newreply'])" />
					<span id="qr_insertcustombuttonshere" />
					<br />
					<textarea name="message" id="message" style=" width: 100%; height: 300px;">
					</textarea>
					<br />
					<input type="checkbox" name="post_converturls" checked="checked" />URLs automatisch erkennen<br />
					<input type="checkbox" name="post_disablebbcode" value="1" />BB-Code deaktivieren<br />
					<input type="checkbox" name="post_disablesmilies" value="1" />Smilies deaktivieren<br />
					<span class="iAmMod"><input type="checkbox" name="reply_close" value="1" /> Thread nach dem Posten schlie&#x00df;en<br />
					<input type="checkbox" name="post_mark" value="1" /> Text farbig hervorheben?<br /></span>
					<input type="submit" name="submit" value="Absenden" style="width: 150px; display: inline; margin-top: 10px;" accesskey="S" />
					<input type="submit" name="preview" value="Vorschau" style="width: 150px; display: inline; margin-top: 10px;" />
				</form>
			</td>			
		</tr>).toXMLString();
		
qr_row2 = (<tr id="qr_row2">
			<td>
				<a href="JavaScript:$('#qr_row1').show(); $('#qr_row0,#qr_row2').hide();document.getElementById('message').focus();void(0);" class="nu wht postlink">Quick-Reply</a><br />
			</td>
			<td>
				<form name="qr_optionen">
					<input type="checkbox" id="qr_offen" />Quick-Reply Fenster gleich &#x00f6;ffnen<br />
					<input type="checkbox" id="qr_zitate_fett" />Zitate fett machen<br />
					<input type="checkbox" id="qr_smileys" />Smileys anzeigen<br />
					<input type="checkbox" id="qr_clickable_posticons" />Die Posticons als Smileys missbrauchen<br />
					<input type="checkbox" id="qr_zitieren" />die Zitieren-Links ab&#x00e4;ndern.<br />
					<input type="checkbox" id="qr_editieren" />die Editieren-Links ab&#x00e4;ndern.<br />
					<input type="checkbox" id="qr_savepost" />Nicht abgeschickte Posts automatisch speichern<br />
					<input type="checkbox" id="qr_nourl" />Bei einfügen von Code die URLs nicht parsen lassen.<br />
					<br />
					Customsmileys hier eintragen. Eine URL pro Zeile!<br />
					<textarea id="qr_customsmileys" style=" width: 100%; height: 100px;">
                    </textarea>
                    <br /><br />Custom BB Buttons hier definieren. <a href="Javascript: void 0;" id="qr_custombuttons_add">+</a><br /> 
                    <div id="qr_custombuttons" style="width:100%">
                    </div>
                    <br />
                    <br />
                    Alle Einstellungen werden automatisch gespeichert.
				</form>
			</td>
		</tr>).toXMLString();

qrrxp={
        "profil:$1" : /<a href="javascript:void\(0\)" onclick="openProfile2?\((\d*)\)"><span>profil:<\/span>.*?<\/a>/gi,
        "thread:$1" : /<a href="\.\/thread\.php\?TID=(\d*)"><span>thread:<\/span>.*?<\/a>/gi,
        "board:$1" : /<a href="\.\/board\.php\?BID=(\d*)"><span>board:<\/span>.*?<\/a>/gi,
        "[code]$1[/code]": /<pre class="code">(.*?)<\/pre>/gi,
        //"[code]" : /<table(?: width="100%")? border="0" cellpadding="0" cellspacing="0"(?: width="100%")?>\n<tbody><tr><td width="10%">&nbsp;<\/td><td bgcolor="#000000">\n<table(?: width="100%")? border="0" cellpadding="1" cellspacing="1"(?: width="100%")?>\n  <tbody><tr bgcolor="#008fe1">\n<td>Code: <\/td><\/tr>\n  <tr bgcolor="#9a9a9a">\n<td><pre class="code">/gi,
        //"[/code]" : /<\/pre><\/td><\/tr>\n?\r?<\/tbody><\/table><\/td><\/tr><\/tbody><\/table>/gi,
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
        "[m]$1[/m]": /<pre class="inline m">(.*?)<\/pre>/gi,
        //"[m]" : /<pre class="inline m">/gi,
        //"[/m]" : /<\/pre>/gi,
        "[b]" : /\[b](?:<br>\n)*\s+/gi,
        //"[/table]" : /<\/tbody><\/table>/gi,
        //"[--]\n" : /<\/tr><tr>/gi,
        //"[||]" : /<\/td><td>/gi,
        //"[table]" : /<table class="" border="\d+" cellpadding="2" cellspacing="0"><tbody>/gim,
        "": /DELETEDUMMY/gi,
        "\n": /\n\s*/gim,
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
    return $('<div />').html(text).text().trim();
},
clickPosticon = function clickPosticon( e){
    if( GM_getValue('qr_clickable_posticons',optionen.qr_clickable_posticons)){
        unsafeWindow.addText( this.getAttribute("alt"), unsafeWindow.document.forms["newreply"]);
    } else {
        $('#qr_row1').find('#gmqr'+$(this).attr('tg')).click();
        //$(this).prev().click();
    }
},
clickEinstellung = function(e){
    var setting = this.id;
    if( GM_getValue( setting, optionen[setting])){
        $(this).removeAttr('checked');
        GM_setValue( setting, false);
    } else {
        $(this).attr('checked','checked');
        GM_setValue( setting, true);
    }
},
clickZitieren = function(e){
    if( e.which !== 1 || !GM_getValue('qr_zitieren', optionen.qr_zitieren)){
        return true;
    }
    e.preventDefault();
    var fett = GM_getValue("qr_zitate_fett", optionen.qr_zitate_fett),
        ptr = $(this).closest('tr.color1').prev(),
        text = (fett?"[b]\n":"\n")+parse(ptr.find('span.posttext').html())+(fett?"\n[/b]":"\n");
    text = '[quote='+tid+','+
        /(\d+)$/.exec($(this).attr('href'))[1]+ // PostID
        ',"'+
        unescape(ptr.attr('username'))+ // Username
        '"]'+$('<div />').html(text).text().trim()+'[/quote]';
    
        $('#qr_row1').show();
        $('#qr_row2,#qr_row0').hide();
    
        document.getElementById('message').focus();
       // try{
        unsafeWindow.addText( text, unsafeWindow.document.forms['newreply']);
       // }catch(e){
       //     $('#message').val(text);
       // };
    
    return false;
},
clickEditieren = function(e){
    if( e.which !== 1 || !GM_getValue('qr_editieren',optionen.qr_editieren)){
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
        pid   = $data.find('input[name="PID"]').val(),
        code  = $data.find('textarea[name="message"]').text(),
        link  = $('a[href="./editreply.php?PID='+pid+'"]',jqTBody),
        post  = link.closest('tr.color1').prev().find('span.posttext'),
        icon  = post.closest('tr').prev().find('img');
    
    $('#qr_row0').hide();
    var qr_edit = $('#qr_row1,qr_row2').detach().insertAfter( link.closest('tr.color1')).hide().filter('#qr_row1').show();
    qr_edit.find('input[name="token"]').val(token);
    code= parse(post.html(), true);
    qr_edit.find('textarea[name="message"]').val(code);
    qr_edit.find('form').attr('action', "editreply.php").append($('<input type="hidden" name="PID"/>').val(pid));
    qr_edit.find('input[name="post_icon"]').attr('name','edit_icon'); //.next('img').filter('[src*="'+ (icon.attr('src') || '') +'"]');
    
},
clickSmiley = function(e){
    var $this = $(this);
    unsafeWindow.addText( $this.attr('alt') == "src" ? ('[img]'+$this.attr('src')+'[/img]') : $this.attr('alt'), unsafeWindow.document.forms['newreply']);
},
changeCustomsmiley = function(e){
    var urls = $(this).val().split('\n'),
        i=0, $smileys = $('#smileys').children('img[alt="src"]').remove().end();
    for(; i< urls.length; ++i){
        if( urls[i] && /\S/.test(urls[i])){
            $smileys.append('<img src="'+urls[i]+'" alt="src" />\n');
        }
    }
    GM_setValue( 'qr_customsmileys', escape(urls.join('\n')));
},
changeSmileys = function(e){
    $('#smileys')[GM_getValue('qr_smileys',optionen.qr_smileys)?'show':'hide']();
};

// HTML EINFÜGEN & HANDLER REGISTRIEREN & MISC

$('<div/>').append( unescape(qr_row0))
    .append( unescape(qr_row1))
    .append( unescape(qr_row2))
    .children().insertAfter($("tr.color1:last",jqTBody));

$(jqTBody).delegate('a[href^="newreply.php?PID="]','click', clickZitieren).delegate('a[href^="./editreply.php?PID="]','click', clickEditieren);

$('#qr_row0').find('a:first').click(function(e){
    $('#qr_row1').show(); 
    $('#qr_row0,#qr_row2').hide();
    document.getElementById('message').focus();
});

$('#qr_row1').delegate("input:radio + img","click", clickPosticon).find('a:first').click(function(e){
    $('#qr_row2').show();
    $('#qr_row1,#qr_row0').hide();
});
$('#qr_row1').find('input[name="TID"]').val(tid);
$('#qr_row1').find('input[name*=token]').val(token_newreply); 

$('#smileys').delegate("img[alt]","click",clickSmiley);

$('#qr_row2').delegate('input:checkbox','click', clickEinstellung).find('input').attr("checked",function(){
    return GM_getValue( this.id, optionen[ this.id]) ? "checked" : "" ;
}).filter('#qr_smileys').change(changeSmileys);

// CUSTOM SMILEYS

$('#qr_customsmileys').change(changeCustomsmiley).val( unescape(GM_getValue('qr_customsmileys',optionen.qr_customsmileys))).change();

// CUSTOM BUTTONS
(function(){

    var obj= JSON.parse( GM_getValue('qr_custombuttons', optionen.qr_custombuttons)),
        i=0,
        div=$('<div />'),
    clickCustombuttons = function(e){
        unsafeWindow.addText( $(this).attr('code') , unsafeWindow.document.forms['newreply']);
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
        div.append('<a href="javascript:void 0;">-</a> <label>URL: <input type="text" name="url" value="'+unescape(obj[i].url)+'" /></label> <label> Code: <input type="text" name="code" value="'+unescape(obj[i].code)+'" /></label><br />\n');
    }

    div.children().appendTo('#qr_custombuttons');


    changeCustombuttons.apply( $('#qr_custombuttons').get(0));

})();



// Slice-o-mat

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


// SAVE AND LOAD
(function(){
    var flag = false;

    $(unsafeWindow).unload(function(e){
        if(! GM_getValue('qr_savepost', optionen.qr_savepost))
            return;
        var text = JSON.parse(GM_getValue('qr_save','{}'));
        text[tid] = !flag ? escape($('#message').val()) : '';
        GM_setValue('qr_save',JSON.stringify(text));
    });

    $('#qr_row1').find('form[name="newreply"]').submit(function(e){
         flag = true && GM_getValue('qr_savepost', optionen.qr_savepost);
    });

    if( GM_getValue('qr_savepost', optionen.qr_savepost)){
        $('#message').val( unescape(JSON.parse(GM_getValue('qr_save','{}')))[tid]|| '' );
    }
})();

(function(){
    var fn = function(){
         cl( GM_getValue('qr_nourl', optionen.qr_nourl));
        if( GM_getValue('qr_nourl', optionen.qr_nourl)){
            $('#qr_row1').find('input[name=post_converturls]').removeAttr('checked');
        }
    }
    
    $('#qr_row1').find('img[src$="code.gif"]').click(fn);
    
})();