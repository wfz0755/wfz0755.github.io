var _statcounter=function(_1){var _2=parseInt(sc_project,10);var _3=_2==9560334||_2==6709687||_2==9879613||_2==4124138||_2==204609||_2==10776808;try{var _4;if(typeof _1==="undefined"){_4={}}else{if(_1.record_pageview){_4=_1.get_pending_tags()}else{_4=_1}}var _5=true;var _6=false;if(typeof performance!=="undefined"){try{_6=Math.round(performance.now())}catch(ex){_6=false}}var _7=0;var _8=0;var _9=-1;var _a=0;var _b="";var _c="";var _d="";var _e="";var _f="";var _10="https";var _11="statcounter.com";var _12="c";var _13="StatCounter - Free Web Tracker and Counter";var _14="";var _15=0;var _16="";var _17="&u1=za";var _18="cookie";if(window.sc_client_storage){_18=window.sc_client_storage}if(typeof window.sc_first_party_cookie!="undefined"&&sc_first_party_cookie=="0"){_18="disabled"}if(window.sc_invisible){if(window.sc_invisible==1){_a=1}}if(window.sc_click_stat){_9=window.sc_click_stat}var _19=""+document.location;var _1a=new RegExp("^https","i");if(_19.match(_1a)){_10="https"}if(window.sc_local){_b=sc_local}else{if(_9==-1){_9=1}_b=_10+"://"+_12+"."+_11+"/"}_c=_b;if(window.sc_text){_b+="text.php?"}else{_b+="t.php?"}if(window.sc_project){if(sc_project=="4135125"||sc_project=="6169619"||sc_project=="6222332"||sc_project=="5106510"||sc_project=="6311399"||sc_project=="6320092"||sc_project=="5291656"||sc_project=="7324465"||sc_project=="6640020"||sc_project=="4629288"||sc_project=="1480088"||sc_project=="2447031"){if(Math.floor(Math.random()*6)!=1){_8=1}}_b+="sc_project="+sc_project}else{if(window.usr){_b+="usr="+usr}else{_7=1}}if(window.sc_remove_link){_d="";_e=""}else{_d="<a class="\"statcounter\"" href="\"http://www."+_11+"\"" target="\"_blank\"">";_e="</a>"}if(window.sc_security){_f=sc_security}if(_1b){_1b++}else{var _1b=1}var _2=parseInt(sc_project,10);var _1c=new Date();var _1d=Math.floor(_1c/86400000);var _1e=_1d-17869;var _1f=11200000-(_1e*12223);var _20=9000000;if(_1f<_20){_1f=_20}var _21="_2==4344864||_2==4124138||_2==204609||_2">_1f;var _22=_2==204609;function get_referer(){var _23=""+document.referrer;try{_23=""+parent.document.referrer}catch(ex){_23=""+document.referrer}if(typeof sc_referer_scr08!=="undefined"){_23=sc_referer_scr08}return _23}var api=function(){};api.push=function(_25){_4=[_25]};var _26=get_referer();var _27=0;var _28="";api.inject_script=function(url,_2a){if(url===undefined||!url.match(/^https?:\/\/(?:[^\/]+\.)?statcounter\.com/)){return}var scr=document.createElement("script");scr.type="text/javascript";scr.async=true;if(_2a){scr.onload=_2a}scr.src=url;var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(scr,s)};function get_jg_rr_url_params(){if(_28==""){return "&jg=&rr="}return _28}function get_page_title(){var _2d=""+document.title;_2d=_2d.substring(0,300);if(encodeURIComponent){_2d=encodeURIComponent(_2d)}else{_2d=escape(_2d)}return _2d}function get_page_url(){var _2e=""+document.location;_2e=_2e.substring(0,300);_2e=escape(_2e);return _2e}function get_screen_width(){return screen.width}function get_screen_height(){return screen.height}function get_performance_url_params(){if(_27==0){var _2f="";var _30="";try{if(typeof performance!=="undefined"){var _31=Math.round(performance.now());_2f="&sc_rum_e_s="+_6+"&sc_rum_e_e="+_31;var _32=_31-_6;_30=get_performance_tags(_32)}}catch(ex){_2f="";_30=""}return _2f+_30}return ""}function get_performance_tags(_33){var _34="";if(_22&&typeof performance!=="undefined"){var _35=document.getElementById("sc-ttfb-bd");var _36="-1";if(_35){_36=_35.textContent}var _37=performance.timing.responseStart-performance.timing.connectStart;var _38=document.getElementById("sc-perf-wh");var _39=0;if(_38){_39=_38.textContent}var _3a=document.getElementById("sc-perf-pn");var _3b=0;if(_3a){_3b=_3a.textContent}var _3c=document.getElementById("sc-perf-db");var _3d=0;if(_3c){_3d=_3c.textContent}_34="&sc_ev_scperf_js_exec="+_33+"&sc_ev_scperf_ttfb_frontend="+_37+"&sc_ev_scperf_ttfb_backend="+_36+"&sc_ev_scperf_ws="+_39+"&sc_ev_scperf_pn="+_3b+"&sc_ev_scperf_db="+_3d}return _34}function strip_tags(_3e,_3f){_3f=(((_3f||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var _40=/<\ ?([a-z][a-z0-9]*)\b[^="">]*>/gi,_41=/<!--[\s\S]*?-->|<\?(?:php)?[\s\s]*?\?>/gi;return _3e.replace(_41,"").replace(_40,function($0,$1){return _3f.indexOf("<"+$1.tolowercase()+">")>-1?$0:""})}function sanitise_tags(_44){for(i=0;i<_44.length;i++){_44[i]=(""+_44[i]).trim()}return 2="" _44}function="" validate_tags(_45){var="" _46="10;var" _47="1;var" _48="300;var" _49="[];if(!(_45.length%2==0)){_49.push("Every" tag="" must="" have="" a="" name="" and="" value.")}else{if(_45.length="">_46){_49.push("No more than "+_46+" tags can be passed - "+_45.length/2+" passed.")}for(i=0;i<_45.length;i++){var _4a="(""+_45[i]).length;if(_4a<_47||_4a">_48){_49.push("Tag names and values must be between "+_47+" and "+_48+" characters in length ('"+_45[i]+"' is "+_45[i].length+" characters long).")}}for(i=0;i<_45.length;i++){if(strip_tags(""+_45[i])!=""+_45[i]){_49.push("tag names="" and="" values="" may="" not="" contain="" html="" tags.")}}}if(_49.length!="0){for(i=0;i<_49.length;i++){}return" false}return="" true}function="" get_tag_string(_4b){function="" _4c(obj,_4e){var="" _4f="obj.__proto__||obj.constructor.prototype;return" (_4e="" in="" obj)&&(!(_4e="" _4f)||_4f[_4e]!="=obj[_4e])}if(Object.prototype.hasOwnProperty){var" _4c="function(obj,_51){return" obj.hasownproperty(_51)}}var="" _52="" ;if(_4c(_4b,"tags")&&typeof="" _4b.tags="=="object"){var" _53="[];for(var" tag="" _4b.tags){_53[_53.length]="tag;_53[_53.length]=_4b.tags[tag]}if(validate_tags(_53)){_53=sanitise_tags(_53);for(i=0;i<_53.length;i=i+2){_52+="&sc_ev_"+encodeURIComponent(_53[i])+"="+encodeURIComponent(_53[i+1])}}}return" _52}var="" _55="[];var" _56="256;var" _57="6;var" _58="52;var" _59="Math.pow(_56,_57),_5a=Math.pow(2,_58),_5b=_5a*2,_5c=_56-1;var" _5d;var="" _5e="function(_5f,_60){var" key="[];var" _62="mixkey(flatten(_60?[_5f,tostring(_55)]:0" arguments?_5f:autoseed(),3),key);var="" _63="new" arc4(key);mixkey(tostring(_63.s),_55);_5d="function(){var" n="_63.g(_57),d=_59,x=0;while(n<_5a){n=(n+x)*_56;d*=_56;x=_63.g(1)}while(n">=_5b){n/=2;d/=2;x>>>=1}return (n+x)/d};return _62};function ARC4(key){var t,_69=key.length,me=this,i=0,j=me.i=me.j=0,s=me.S=[];if(!_69){key=[_69++]}while(i<_56){s[i]=i++}for(i=0;i<_56;i++){s[i]=s[j=_5c&(j+key[i%_69]+(t=s[i]))];s[j]=t}(me.g=function(_6e){var t,r="0,i=me.i,j=me.j,s=me.S;while(_6e--){t=s[i=_5c&(i+1)];r=r*_56+s[_5c&((s[i]=s[j=_5c&(j+t)])+(s[j]=t))]}me.i=i;me.j=j;return" r})(_56)}function="" flatten(obj,_72){var="" _73="[],typ=(typeof" obj)[0],_75;if(_72&&typ="="o"){for(_75" in="" obj){try{_73.push(flatten(obj[_75],_72-1))}catch(e){}}}return="" (_73.length?_73:typ="="s"?obj:obj+"\x00")}function" mixkey(_76,key){var="" _78="_76+"",_79,j=0;while(j<_78.length){key[_5c&j]=_5c&((_79^=key[_5c&j]*19)+_78.charCodeAt(j++))}return" tostring(key)}function="" autoseed(_7b){try{window.crypto.getrandomvalues(_7b="new" uint8array(_56));return="" tostring(_7b)}catch(e){return="" [+new="" date,window,window.navigator.plugins,window.screen,tostring(_55)]}}function="" tostring(a){return="" string.fromcharcode.apply(0,a)}mixkey(math.random(),_55);function="" detectbrowserfeatures(){var="" _7d="[];var" i;var="" _7f;var="" _80="{pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"};var" _81="(new" regexp("mac="" os="" x.*safari="" ")).test(navigator.useragent)?window.devicepixelratio||1:1;if(!((new="" regexp("msie")).test(navigator.useragent))){if(navigator.mimetypes&&navigator.mimetypes.length){for(i="" _80){if(object.prototype.hasownproperty.call(_80,i)){_7f="navigator.mimeTypes[_80[i]];_7d.push((_7f&&_7f.enabledPlugin)?"1":"0")}}}if(typeof" navigator.javaenabled!="="unknown"&&typeof" window.gearsfactory="=="function"){_7d.push("gears")}}_7d.push(screen.width*_81+"x"+screen.height*_81);return" _7d.join("")}function="" generate_uuid(_82){var="" now="new" date();var="" _84="false;if(_82===undefined){_82=32;if(_84){_82=36}}var" _85="Math.round(now.getTime()/1000)+now.getMilliseconds();var" _86="(navigator.userAgent||"")+(navigator.platform||"")+detectBrowserFeatures()+now.getTimezoneOffset()+window.innerWidth+window.innerHeight+window.screen.colorDepth+document.URL+_85;_5e(_86);var" _87="0123456789ABCDEF" .split(""),_88="new" array(_82),rnd="0,r;for(var" i="0;i<_82;i++){if(_84&&(i==8||i==13||i==18||i==23)){_88[i]="-"}else{if((i==12&&!_84)||(i==14&&_84)){_88[i]="4"}else{if((i==13&&!_84)||(i==15&&_84)){_88[i]="F"}else{if(rnd<=2){rnd=33554432+(_5d()*16777216)|0}r=rnd&15;rnd=rnd">>4;_88[i]=_87[(i==19)?(r&3)|8:r]}}}}return _88.join("")}var _8c;if(typeof window.sc_cookie_domain=="undefined"){_8c=window.location.host}else{_8c=window.sc_cookie_domain}if(_8c.substring(0,1)!="."){_8c="."+_8c}function _localStorageAvailable(){var _8d=false;if("localStorage" in window){try{_8d=window["localStorage"]!==null}catch(e){if(!e.name||e.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr"){if(!e.number||parseInt(e.number,10)!==-2147024891){throw e}}}}return _8d}function _setLocalStorage(_8e,_8f,_90){if(_localStorageAvailable()){try{if(_8e==="is_visitor_unique"){localStorage.setItem("statcounter.com/localstorage/",_8f)}else{localStorage.setItem("statcounter_"+_8e,_8f)}}catch(e){if(!e.name||e.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr"){if(!e.number||parseInt(e.number,10)!==-2147024891){throw e}}return false}return true}return false}function setLocal(_91,_92,_93,_94,_95){if(typeof _92==="string"){_92=[_92]}if(_94===undefined){_94=""}if(_95===undefined){_95=30}var _96=false;if(_18=="localStorage"){_96=_setLocalStorage(_91,_94+_92.join("-"),_93);if(!_96){_96=_writeCookie(_91,_94+_92.join("-"),_93)}else{if(_readCookie(_91)!==null){_removeCookie(_91,_93)}}}else{var _97=_92.slice(0,_95).join("-");_96=_writeCookie(_91,_94+_97,_93);if(!_96){_96=_setLocalStorage(_91,_94+_92.join("-"),_93)}else{if(_92.length>_95){_setLocalStorage(_91,"mx"+_92.slice(_95).join("-"),_93)}else{_removeLocalStorage(_91)}}}return _96}function getLocal(_98){var val=null;if(_localStorageAvailable()){if(_98==="is_visitor_unique"){val=localStorage.getItem("statcounter.com/localstorage/")}else{val=localStorage.getItem("statcounter_"+_98)}}if(_18=="localStorage"&&val!==null&&val.substring(0,2)=="rx"){return val}var _9a=_readCookie(_98);if(val!==null){if(_9a===null&&val.substring(0,2)=="rx"){return val}else{if(_9a!==null&&val.substring(0,2)=="mx"){_9a+="-"+val.substring(2)}}}return _9a}function _removeLocalStorage(_9b){if(_localStorageAvailable()){if(_9b==="is_visitor_unique"){localStorage.removeItem("statcounter.com/localstorage/")}localStorage.removeItem("statcounter_"+_9b)}}function removeLocal(_9c,_9d){_removeLocalStorage(_9c);if(_readCookie(_9c)){_removeCookie(_9c,_9d)}}function _readCookie(_9e){var _9f="sc_"+_9e+"=";if(document.cookie){var ca=document.cookie.split(";");for(var i=0;i<ca.length;i++){var c="ca[i];while(c.charAt(0)=="" "){c="c.substring(1,c.length)}if(c.indexOf(_9f)==0){return" c.substring(_9f.length,c.length)}}}return="" null}function="" _writecookie(_a3,_a4,_a5,_a6){var="" _a7="false;if(_a6===undefined){_a7=1000*60*60*24*365*2}else{if(_a6!=="session"){_a7=1000*_a6}}var" _a8="" ;if(_a7!="=false){var" _a9="new" date();_a9.settime(_a9.gettime()+_a7);_a8="; expires=" +_a9.togmtstring()}var="" _aa="3050;if(_a4.length">_aa-50&&_a4.substring(0,_aa).indexOf("-")!==-1){_a4=_a4.substring(0,_a4.substring(0,_aa).lastIndexOf("-"))}document.cookie="sc_"+_a3+"="+_a4+_a8+"; domain="+_a5+"; path=/";if(_readCookie(_a3)!==null){return true}else{return false}}function _removeCookie(_ab,_ac){document.cookie="sc_"+_ab+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+_ac+"; path=/"}var _ad=(function(){var _ae=false;return function(){var _af=api.is_recording();if(_ae||_af===false){return}var _b0="statcounter.com";var _b1="/counter/recorder.js";for(var i=0;i!=_af.length;i++){if(_af[i].length==5&&_af[i].substring(0,3)=="dev"){_b1="/counter/recorder_uncompressed.js";_b0=_af[i]+"."+_b0;break}else{if(_af[i]=="statreplay"){_b0=_af[i]+".com"}}}_b0+=_b1;_b0=("https:"==document.location.protocol?"https://":"http://")+_b0;api.inject_script(_b0);_ae=true}}());api.record_pageview=function(_b3){if(typeof _b3==="undefined"){_b3=_4}_4={};_28="";var _b4="";var _b5={"google":null,"bing":["q"],"search.yahoo":null,"m.yahoo":null,"m2.yahoo":null,"baidu":["wd","word"],"yandex":["text"],"ya.ru":["text"],"haosou":["q"],"so.com":["q"],"360.cn":["q"],"360sou":["q"],"aol":["query","q"],"duckduckgo":null,"ask.com":["q","QUERYT"],"mail.ru":["words"],"sogou":["q","query"]};var _b6={"fb":["facebook.com","fb.me"],"pi":["pinterest.com"],"tw":["twitter.com","t.co"],"ln":["linkedin.com"],"in":["instagram.com"],"rd":["reddit.com"],"tb":["tumblr.com"],"st":["stumbleupon.com"],"yt":["youtube.com"],"gp":["plus.google.com","plus.url.google.com"]};function check_root_domains_match(a,b){var _b9=a.split(".");var _ba=b.split(".");var _bb=Math.min(_b9.length,_ba.length);var _bc=2;if(_b9.length>1&&((_b9[_b9.length-2].length<=3&&_b9[_b9.length-1] in="" {"at":1,"au":1,"br":1,"es":1,"hu":1,"il":1,"nz":1,"tr":1,"uk":1,"us":1,"za":1})||_b9[_b9.length-1]="="kr"||_b9[_b9.length-1]=="ru"||(_b9[_b9.length-1]=="au"&&_b9[_b9.length-2]" {"csiro":1})||(_b9[_b9.length-1]="="at"&&_b9[_b9.length-2]" {"priv":1})||(_b9[_b9.length-1]="="fr"&&_b9[_b9.length-2]" {"avocat":1,"aeroport":1,"veterinaire":1})||(_b9[_b9.length-1]="="hu"&&_b9[_b9.length-2]" {"film":1,"lakas":1,"ingatlan":1,"sport":1,"hotel":1})||(_b9[_b9.length-1]="="nz"&&_b9[_b9.length-2]" {"geek":1,"kiwi":1,"maori":1,"school":1,"govt":1,"health":1,"parliament":1})||(_b9[_b9.length-1]="="il"&&_b9[_b9.length-2]" {"muni":1})||(_b9[_b9.length-1]="="za"&&_b9[_b9.length-2]" {"school":1})||(_b9[_b9.length-1]="="tr"&&_b9[_b9.length-2]" {"name":1})||(_b9[_b9.length-1]="="uk"&&_b9[_b9.length-2]" {"police":1}))){_bc="3}for(var" i="1;i<=_bb;i++){if(_b9[_b9.length-i]!=_ba[_ba.length-i]){return" false}if(i="">=_bc){return true}}return _b9.length==_ba.length}function classify_referrer(r){if(r==""){return "d"}var _bf=r.split("/")[2].replace(/^www\./,"");var _c0=document.location.host.replace(/^www\./,"");if(_21){if(_c0==_bf){return "internal"}if(check_root_domains_match(_bf,_c0)){return "internal"}}if(r.search(/\bgoogle\..*\?.*adurl=http/)!==-1){return "p"}var _c1=["utm_source=bing","?gclid=","&gclid=","utm_medium=cpc","utm_medium=paid-media","utm_medium=ppc"];for(var i=0;i<_c1.length;i++){if(document.location.search.indexof(_c1[i])!==-1){return "p"}}var="" _c3="["utm_medium=email"];for(var" i="0;i<_c3.length;i++){if(document.location.search.indexOf(_c3[i])!==-1){return" "e"}}if(!_21){if(_c0="=_bf){return" "internal"}}for(var="" _c4="" in="" _b5){if(_bf.replace(_c4,"#").split(".").indexof("#")!="=-1){if(_b5[_c4]===null){return" _c4}for(var="" _c5="_b5[_c4][i];if(r.indexOf("?"+_c5+"=")!==-1||r.indexOf("&"+_c5+"=")!==-1){return" _c4}}}}for(var="" _c6="" _b6){for(var="" _c6}}}return="" _bf}function="" categorize_class(cls){if(cls="="d"||cls=="p"||cls=="e"||cls=="internal"){return" cls}if(cls="" _b5){return="" "o"}if(cls="" _b6){return="" "s"}return="" "r"}if(_8!="1){if(document.webkitVisibilityState!="prerender"){_15=0}else{_15=1;document.addEventListener("webkitvisibilitychange",function(evt){if(_15==1){_15=2;sc_send_data()}else{return}},false)}}if(!_21){var" _c9="classify_referrer(_26);var" _ca="categorize_class(_c9);if(_c9!="internal"){_b4="&rcat="+_ca+"&rdom="+_c9}}var" _cb="Math.round((new" date()).gettime()="" 1000);if(_18!="disabled" ){if(_21){var="" _cc="JSON.parse(localStorage.getItem("sc_medium_source"));if(_cc==null){_cc={}}var" _cd="null;var" _ce="null;var" _cf="null;var" msl="0;for(var" k="" _cc){if(_cd="==null||_cc[k]">_cc[_cd]){_cd=k}var _d2=categorize_class(k);if(_ca==_d2&&(_ce===null||_cc[k]>_cc[_ce])){_ce=k}if(_d2=="r"&&(_cf===null||_cc[k]<_cc[_cf])){_cf=k}msl+=1}if(msl>30&&_cf!==null){delete _cc[_cf]}var _d3="";if(sessionStorage.getItem("statcounter_bounce")){sessionStorage.removeItem("statcounter_bounce");_d3="&bb=0"}var _d4=30;if(!_21){_d4=15}if(_c9=="d"&&_cd!==null&&_cd!="d"&&(_cb-_cc[_cd])<60*_d4){_c9="internal"}if(_21){if(sessionstorage.getitem("statcounter_session")&&(_cb-parseint(sessionstorage.getitem("statcounter_session"),10))<60*30){_c9="internal"}sessionstorage.setitem("statcounter_session",_cb)}if(!_21){if(_ca=="r"&&sessionstorage.getitem("statcounter_exit_domain")==_c9){_c9="internal"}}if(_c9=="internal"){if(_cd!==null){_b4="&rcat="+categorize_class(_cd)+"&rdomo="+_cd;_b4+="&rdomg="+(_cb-_cc[_cd]);_cc[_cd]=_cb}}else{var _d5="false;if(_c9" in="" _cc){if(_c9="=_cd){_b4=_b4.replace("rdom=","rdomo=")}_b4+="&rdomg="+(_cb-_cc[_c9]);if(_cb-_cc[_c9]<60*30){_d5=true}}else{_b4+="&rdomg=new"}if(_d3==""&&!_d5){sessionStorage.setItem("statcounter_bounce","1");_d3="&bb=1"}if(_ce!==null&&(!(_c9" _cc)||_c9!="_ce)){_b4+="&rcatg="+(_cb-_cc[_ce])}_cc[_c9]=_cb}_b4+=_d3;try{localStorage.setItem("sc_medium_source",JSON.stringify(_cc))}catch(maybe_not_enough_space){if(_21){_b4=""}}}catch(e){if(_21){_b4=""}}if(_2==10227105){try{var" _d6="new" image();_d6.src="https://statcounter.com/feedback/?email=javascript@statcounter.com&page_url=" +encodeuricomponent(document.location.protocol+"="" "+document.location.host+document.location.pathname+document.location.search+document.location.hash)+"&name="Auto%20JS&feedback_username=statcounter&pid="+sc_project+"&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20"+encodeURIComponent(localStorage.getItem("statcounter.com/localstorage/")+":::"+_readCookie("is_visitor_unique"))}catch(ignore){}}var" _d7="1.1.1.1.1.1.1.1.1" ;var="" _d8="is_visitor_unique" ;try{var="" _d9="getLocal(_d8)}catch(e){var" _da="[];var" _db="[];if(_d9&&_d9.substring(0,2)=="rx"){removeLocal(_d8,_8c);var" _dc="_d9.substring(2);_da=_dc.split("-");var" _dd="false;var" _de="false;for(var" i="0;i<_da.length;i++){var" _e0="_da[i].split(".");if(_e0[0]==sc_project){_dd=true;var" _e1="parseInt(_e0[1],10);var" _e2="[30,60,120,180,360,720,1440,2880,10080];var" _e3="[];var" _e4="2;if(_e0[2].length==32){_16="."+_e0[2];_e4=3}else{_16=_de}for(var" ir="0;ir<_e2.length;ir++){var" _e6="parseInt(_e0[ir+_e4],10);if(isNaN(_e6)){_e6=1}_e3.push(_e6)}_28+="&jg="+(_cb-_e1);for(var">(_e1+60*_e2[ir])){_e3[ir]++}}}_28+="&rr="+_e3.join(".");_db.push(sc_project+"."+_cb+_16+"."+_e3.join("."))}else{_db.push(_da[i]);if(i==0&&_e0[2].length==32&&_16==""){_16="."+_e0[2]}}if(i==0){_de=_16}}if(!_dd){if(_db.length==0&&_16==""){_16="."+generate_uuid()}_db.push(sc_project+"."+_cb+_16+"."+_d7);_28+="&jg=new&rr="+_d7}_db.sort(function(a,b){return parseInt(b.split(".")[1],10)-parseInt(a.split(".")[1],10)});for(var iv=1;iv<_db.length;iv++){_db[iv]=_db[iv].replace("."+_db[0].split(".")[2]+".",".")}setlocal(_d8,_db,_8c,"rx",3)}else{if(_16!=".ex"){_16="."+generate_uuid();_db=[sc_project+"."+_cb+_16+"."+_d7];var _ea="setLocal(_d8,_db,_8c,"rx",3);if(_ea){_28+="&jg=new&rr="+_d7}else{_16=".na"}}}if(_16!=""){_17="&u1="+_16.substring(1)}}else{}var" _eb="" ;if(object.prototype.tostring.call(_b3)="=="[object" array]"){var="" _ec="_b3.length;if(_ec">=1){_eb=get_tag_string(_b3[0])}}var _ed=_b;_ed+="&java=1&security="+_f+_17;if(typeof performance!=="undefined"){try{var _ee=performance.getEntriesByType("resource");for(var i=0;i<_ee.length;i++){var _ef="_ee[i];if(_ef.name.includes("statcounter.com/counter/counter.js")||_ef.name.includes("statcounter.com/counter/counter_test.js")){var" _f0="_ef.responseEnd-_ef.fetchStart;_ed+="&sc_rum_f_s="+Math.round(_ef.requestStart)+"&sc_rum_f_e="+Math.round(_ef.responseEnd);break}}}catch(e){}}var" _f1="_28+"&resolution="+get_screen_width()+"&h="+get_screen_height()+"&camefrom="+escape(_26.substring(0,600))+"&u="+get_page_url()+"&t="+get_page_title()+_b4+"&sc_snum="+_1b+_eb+"&sess=983245";if(window.sc_counter_width&&window.sc_counter_height){_14="" width="\""+sc_counter_width+"\"" height="\""+sc_counter_height+"\""}if(window.sc_remove_alt){_13=""}if(_7==1){document.writeln("Code" corrupted.="" insert="" fresh="" copy.")}else{if(_8="=1){}else{sc_send_data()}}function" sc_send_data(){if(_a="=1||_15==2){_f1+="&p="+_15+"&invisible=1";var" _f2="false;if(_16!=""&&typeof" json="="object"&&JSON&&typeof" json.stringify="="function"&&"sessionStorage"" in="" window){_f2="true}var" _f3="false;if(_f2){try{var" _f4="sessionStorage.getItem("statcounter_pending");if(!_f4){var" _f5="{}}else{try{var" now="new" date().gettime();_f5[sc_project][now]="_f1;while(true){_f4=JSON.stringify(_f5);if(_f4=="{}"){sessionStorage.removeItem("statcounter_pending");break}var" _f7="_f4.split(/:.{20}/).length-1;if(_f7<20){var" _f8="true;try{sessionStorage.setItem("statcounter_pending",_f4)}catch(e){if(!e.name||e.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr"){throw" e}_f8="false}if(_f8){break}}var" _f9="false;var" _fa="false;var" _fb="false;for(var" _fc="" _f5){for(var="" _fd="" _f5[_fc]){var="" _fe="/jg=(\d+)/.exec(_f5[_fc][_fd]);if(_fe!==null){var" _ff="parseInt(_fe[1])}else{var" _f5[_fa][_fb];if(json.stringify(_f5[_fa])="="{}"){delete" _f5[_fa]}}for(var="" ts="" _f5[sc_project]){(function(_101,_102){var="" _103="_f5[_102][_101];if(!navigator.sendBeacon){var" _104="new" image();_104.onload="function(){var" _105="JSON.parse(sessionStorage.getItem("statcounter_pending"));if(_105[_102]!==undefined){delete" _105[_102][_101];if(json.stringify(_105[_102])="="{}"){delete" _105[_102]}}var="" _106="JSON.stringify(_105);if(_106=="{}"){sessionStorage.removeItem("statcounter_pending")}else{sessionStorage.setItem("statcounter_pending",_106)}};if(_101!=now){_103+="&pg="+Math.round((now-_101)/1000)}else{_f3=true}_104.src=_ed+get_performance_url_params()+"&sc_random="+Math.random()+_103}else{if(_101!=now){_103+="&pg="+Math.round((now-_101)/1000)}else{_f3=true}var" _107="_ed+get_performance_url_params()+"&sc_random="+Math.random()+_103;navigator.sendBeacon(_107,"");if(_f5[_102]!==undefined){delete" _f5[_102][_101];if(json.stringify(_f5[_102])="="{}"){delete" _f5[_102]}}var="" _108="JSON.stringify(_f5);if(_108=="{}"){sessionStorage.removeItem("statcounter_pending")}else{sessionStorage.setItem("statcounter_pending",_108)}}})(parseInt(ts,10),sc_project)}}catch(e){if(_3){if(typeof" encodeuricomponent!="function" ){encodeuricomponent="function(s){return" escape(s)}}var="" _10a="" ;for(var="" prop="" e){_10a+="e[" +prop+"]:="" "+e[prop]+"\n"}_10a+="unique_returning: " +_28+"\n";_10a+="uuid: " +_16+"\n";_10a+="toString(): " +"="" value:="" ["+e.tostring()+"]\n";var="" _10c="new" image();_10c.src="https://statcounter.com/feedback/?email=javascript@statcounter.com&page_url=" +encodeuricomponent(document.location.protocol+"="" "+document.location.host+document.location.pathname+document.location.search+document.location.hash)+"&name="Auto%20JS&feedback_username=statcounter&pid="+sc_project+"&fake_post&user_company&feedback=pending%20exception:%20"+encodeURIComponent(_10a)}}}if(!_f2||!_f3){if(!navigator.sendBeacon){var" _10d="new" image();_10d.src="_ed+get_performance_url_params()+"&sc_random="+Math.random()+_f1}else{var" _10e="_ed+get_performance_url_params()+"&sc_random="+Math.random()+_f1;navigator.sendBeacon(_10e,"")}}}else{var" _10f="_ed+get_performance_url_params()+"&sc_random="+Math.random()+_f1+"&p="+_15;_10f=_10f.replace(/&/g,"&amp;");if(window.sc_text){document.writeln("<scr"+"ipt"+"" src="+_10f+" &amp;text="+sc_text+">")}else{document.writeln("<span class="\"statcounter\"">"+_d+"<img src="\""+_10f+"\"" alt="\""+_13+"\"" border="\"0\""+_14+"">"+_e+"</span>")}}}_26=get_page_url();_ad();_27++};function sc_process_anchor(_110){if(_110.onmousedown){var _111=_110.onmousedown;var s=_111.toString().split("\n").join(" ");var bs=s.indexOf("{");var head=s.substr(0,bs);var ps=head.indexOf("(");var pe=head.indexOf(")");var _117=head.substring(ps+1,pe);var _118=_117.split(",");var body=s.substr(bs+1,s.length-bs-2);var _11a="_statcounter.clickstat_call(this,'"+_c+"');";var _11b=_11a+body;var _11c="new Function(";var _11d="";var _11e="";for(var sc_i=0;sc_i<_118.length;sc_i++){_11d=_11e+"'"+_118[sc_i]+"'";_11e=","}if(_11e==","){_11d+=","}_11b=_11b.replace( '="" g,"\\'");var="" _120="'" +_11b+"');";var="" _121="_11c+_11d+_120;_110.onmousedown=eval(_121)}else{_110.onmousedown=new" function("event","_statcounter.clickstat_call(this,'"+_c+"');return="" true;")}}function="" sc_none(){return}function="" sc_delay(){if(window.sc_click_stat){var="" d="window.sc_click_stat}else{var" n="new" date();var="" t="n.getTime()+d;while(n.getTime()<t){var" date()}}function="" sc_clickstat_call(_125,_126){var="" _127="window.sc_project;var" _128="_f;var" _129="7z|aac|avi|csv|doc|docx|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xlsx|xml|zip" ;if(typeof="" (window.sc_download_type)="="string"){_129=window.sc_download_type}var" _12a="https?|ftp|telnet|ssh|ssl|mailto|spotify|tel" ;var="" _12b="ac|co|gov|ltd|me|mod|net|nic|nhs|org|plc|police|sch|com" dl="new" regexp("\\.("+_129+")$","i");var="" lnk="new" regexp("^("+_12a+"):","i");var="" _12e="new" regexp("^("+_12b+")$","i");var="" _12f="location.host.replace(/^www\./i,"");var" _130="_12f.split(".");var" _131="_130.pop();var" _132="_130.pop();if(_12e.test(_132)){_131=_132+"."+_131;_132=_130.pop()}_131=_132+"."+_131;var" _133="^https?://(.*)(" +_131+"|webcache.googleusercontent.com)";var="" _134="new" regexp(_133,"i");if(_125){var="" _135="0;if(lnk.test(_125)){if((_134.test(_125))){if(dl.test(_125)){_135=1}else{if(window.sc_exit_link_detect&&new" regexp(sc_exit_link_detect,"i").test(_125)){_135="2}else{if(_9==2){_135=2}}}}else{_135=2}}if(_135!=0){var" _136="escape(_125);if(_136.length">0){if(!_21){if(_135==2&&_18!="disabled"){try{sessionStorage.setItem("statcounter_exit_domain",_136.split("/")[2].replace(/^www\./,""))}catch(ignore){}}}var _137=_126+"click.gif?sc_project="+_127+"&security="+_128+"&c="+_136+"&m="+_135+"&u="+get_page_url()+"&t="+get_page_title()+"&sess=983245&rand="+Math.random()+_17+get_jg_rr_url_params();var _138=new Image();_138.onload=sc_none;_138.src=_137;sc_delay()}}}}var _139="googlesyndication.com|ypn-js.overture.com|ypn-js.ysm.yahoo.com|googleads.g.doubleclick.net";var _13a="^aswift_[0-9]+$";var _13b;var _13c;var _13d;var _13e;function sc_adsense_click(_13f){var _140=window.sc_project;var _141=_f;if(_13f.src.match(_139)){var _142=escape(_13f.src)}else{var _142=escape("Google Adsense "+_13f.width+"x"+_13f.height)}var _143=_c+"click.gif?sc_project="+_140+"&security="+_141+"&c="+_142+"&m=2&u="+get_page_url()+"&t="+get_page_title()+"&sess=983245&rand="+Math.random()+_17+get_jg_rr_url_params();if(!navigator.sendBeacon){var i=new Image();i.src=_143;sc_delay()}else{navigator.sendBeacon(_143,"")}}function sc_adsense_init(){var _145=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;var _146=/Firefox/.test(navigator.userAgent)&&/Android/.test(navigator.userAgent);if(_5&&(_145||_146)){var el=document.getElementsByTagName("iframe");for(var i=0;i<el.length;i++){if(el[i].id.substring(0,6)=="aswift"){el[i].addeventlistener("mouseenter",function(e){sc_adsense_click(this)})}}}else{if(document.all&&typeof window.opera="="undefined"){var" el="document.getElementsByTagName("iframe");for(var" i="0;i<el.length;i++){if(el[i].src.match(_139)||el[i].id.match(_13a)){el[i].onfocus=function(){sc_adsense_click(this)}}}}else{if(typeof" window.addeventlistener!="undefined" ){var="" _14a="unload" ;if(_5){_14a="beforeunload" ;focus();window.addeventlistener("blur",function(){var="" _14b="document.activeElement;_13d=_14b;_13e=new" date().gettime()})}window.addeventlistener(_14a,sc_exitpage,false);window.addeventlistener("mousemove",sc_getmouse,true)}}}}function="" sc_getmouse(e){if(typeof="" e.pagex="="number"){_13b=e.pageX;_13c=e.pageY}else{if(typeof" e.clientx="="number"){_13b=e.clientX;_13c=e.clientY;if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){_13b+=document.body.scrollLeft;_13c+=document.body.scrollTop}else{if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){_13b+=document.documentElement.scrollLeft;_13c+=document.documentElement.scrollTop}}}}}function" sc_findy(obj){var="" y="0;while(obj){y+=obj.offsetTop;obj=obj.offsetParent}return" (y)}function="" sc_findx(obj){var="" x="0;while(obj){x+=obj.offsetLeft;obj=obj.offsetParent}return" (x)}function="" sc_exitpage(e){var="" ad="document.getElementsByTagName("iframe");if(typeof" _13b!="undefined" ){for(var="" _154="sc_findx(ad[i]);var" _155="sc_findy(ad[i]);var" adw="parseInt(_154,10)+parseInt(ad[i].width,10)+15;var" adh="parseInt(_155,10)+parseInt(ad[i].height,10)+10;var" _158="(_13b">(_154-10)&&_13b<adw);var _159="(_13c">(_155-10)&&_13c<adh);if(_159&&_158){if(ad[i].src.match(_139)||ad[i].id.match(_13a)){sc_adsense_click(ad[i])}}}}if(_5){if(typeof _13d!="undefined" &&_13d.id.substring(0,6)="="aswift"){var" _15a="new" date().gettime()-_13e;if(_15a<300){sc_adsense_click(_13d)}}}}var="" _15b="0;function" initiate_click_detection(){if(_9="">0){if(_15b!=1){_15b=1;if(document.getElementsByTagName){var _15c=document.getElementsByTagName("a");var _15d=document.getElementsByTagName("area");for(var i=0;i</adh);if(_159&&_158){if(ad[i].src.match(_139)||ad[i].id.match(_13a)){sc_adsense_click(ad[i])}}}}if(_5){if(typeof></adw);var></el.length;i++){if(el[i].id.substring(0,6)=="aswift"){el[i].addeventlistener("mouseenter",function(e){sc_adsense_click(this)})}}}else{if(document.all&&typeof></_118.length;sc_i++){_11d=_11e+"'"+_118[sc_i]+"'";_11e=","}if(_11e==","){_11d+=","}_11b=_11b.replace(></_ee.length;i++){var></_db.length;iv++){_db[iv]=_db[iv].replace("."+_db[0].split(".")[2]+".",".")}setlocal(_d8,_db,_8c,"rx",3)}else{if(_16!=".ex"){_16="."+generate_uuid();_db=[sc_project+"."+_cb+_16+"."+_d7];var></60*_d4){_c9="internal"}if(_21){if(sessionstorage.getitem("statcounter_session")&&(_cb-parseint(sessionstorage.getitem("statcounter_session"),10))<60*30){_c9="internal"}sessionstorage.setitem("statcounter_session",_cb)}if(!_21){if(_ca=="r"&&sessionstorage.getitem("statcounter_exit_domain")==_c9){_c9="internal"}}if(_c9=="internal"){if(_cd!==null){_b4="&rcat="+categorize_class(_cd)+"&rdomo="+_cd;_b4+="&rdomg="+(_cb-_cc[_cd]);_cc[_cd]=_cb}}else{var></_cc[_cf])){_cf=k}msl+=1}if(msl></_c1.length;i++){if(document.location.search.indexof(_c1[i])!==-1){return></=3&&_b9[_b9.length-1]></ca.length;i++){var></_56){s[i]=i++}for(i=0;i<_56;i++){s[i]=s[j=_5c&(j+key[i%_69]+(t=s[i]))];s[j]=t}(me.g=function(_6e){var></_45.length;i++){if(strip_tags(""+_45[i])!=""+_45[i]){_49.push("tag></_45.length;i++){var></_44.length;i++){_44[i]=(""+_44[i]).trim()}return></"+$1.tolowercase()+"></\?(?:php)?[\s\s]*?\?></\></[a-z][a-z0-9]*></_20){_1f=_20}var>