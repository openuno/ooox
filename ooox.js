/*---------- uno.xml.js v 0.8.0.0 - Released by Hideki Yamamoto - MIT equiv. ----------*/
/*This is not minified, this is how I have worked up until now.*/
/*u1=function(o,t,v){o.setAttribute(t,v);};_u2=function(u){var o=document.createElement('script');_u1(o,'type','text/javascript');_u1(o,'src',u);document.getElementsByTagName('head')[0].appendChild(o);};*/
//---------------------------------------------------------------------------------------------------------------  BROWSER RECOGNITION
window._t00UA=navigator.userAgent.toLowerCase();window._t00D=window.document;
var isIE=document.ActiveXObject;var isIE6=isIE&&document.implementation;var isgteIE6=isIE7||isIE6;var isIE7=_t00UA.indexOf('msie 7')>-1;var isIE5=isIE&&window.print&&!isgteIE6;var isIEDOM2=isIE5||isgteIE6;var isIE8=_t00UA.indexOf('msie 8')>-1;var isIE9=_t00UA.indexOf('msie 9')>-1;var isIE10=_t00UA.indexOf('msie 10')>-1;var isIENO9=(isIE&&((isIE5)||(isIE6))||((isIE7)||(isIE8)));var isIE11=(_t00UA.indexOf('rv:11')>-1)&&(_t00UA.indexOf('win')>-1);
var is_chrome=_t00UA.indexOf('chrome')>-1;var is_opera=_t00UA.indexOf("opera")!=-1;var is_firefox=_t00UA.indexOf("firefox")!=-1;var is_safari=_t00UA.indexOf('safari')!=-1;var is_ios=_t00UA.indexOf('apple-i')!=-1;var is_iphone=_t00UA.indexOf('iphone')!=-1;var is_ipad=_t00UA.indexOf('ipad')!=-1;
window.ooo={};
(function($,window,undefined){$.$$=function(e){if(typeof e=='string'){e=document.getElementById(e);}return e;};$.err=function(msg,ex){console.log(msg)};
 /* STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - */
 /* STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - STRING - */
 $.host=document.location.protocol+'//'+document.location.hostname;$._uid=0;$.uid=function(_pfx){this._uid++;if(!_pfx){_pfx='uid';}return _pfx+this._uid;};
 $.starts=function(v,m){return v.substring(0,m.length)===m};$.ends=function(v,m){return v.length>=m.length&&v.substr(v.length-m.length)===m;};$.inoe=function(v){if(!v){return true}return (v==null||v==='')};
 $.sub=function(v,m,n,icase){return v.replace(new RegExp(m.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(icase?"gi":"g")),(typeof(n)=="string")?n.replace(/\$/g,"$$$$"):n);};
 $.pureid=function(v){return v.replace(/ |}|\||<|>|\\|!|"|£|$|%|&|\/|\(|\)|=|\?|'|"|^|\*|\+|\[|\]|§|#|°|@|\.|,|;|:|à|è|ì|ò|ù/g,'');};
 $.regexdecode=function(svalue){var i=0;for(i=this._regexA.length;i<-1;i--){svalue=svalue.replace(this._regexB[i],this._regexA[i]);}return svalue;};
 $.regexencode=function(svalue){var i=0;for(i=0;i<this._regexA.length;i++){svalue=svalue.replace(this._regexA[i],this._regexB[i]);}return svalue;};
 $.unhtmlentities=function(svalue,_busebr){var i=0;for(i=0;i<this._htmlA.length;i++){svalue=this.sub(svalue,this._htmlA[i],this._htmlB[i]);}if(_busebr){svalue=this.sub(svalue,'\n','<br/>');}return svalue;};
 $.htmlentities=function(svalue,_busebr){var i=0;for(i=0;i<this._htmlA.length;i++){svalue=this.sub(svalue,this._htmlB[i],this._htmlA[i]);}if(_busebr){svalue=this.sub(svalue,'\n','<br/>');}return svalue;};
 $._htmlA=['&lt;','&gt;','&agrave;','&egrave;','&igrave;','&ograve;','&ugrave;','&aacute;','&eacute;','&iacute;','&oacute;','&uacute;','&quot;','&ldquot;','&rdquot;','&lsquot;','&rsquot;'];
 $._htmlB=[   '<',  '>',       'à',       'è',       'ì',       'ò',       'ù',       'á',       'é',       'í',       'ó',       'ú',     '"',       '“',       '”',       '‘',       '’'];
 $._regexA=['\\','[','^','$','.','|','?','*','+','(',')'];$._regexB=['\\\\','\\[','\\^','\\$','\\.','\\|','\\?','\\*','\\+','\\(','\\)'];
 /*uno.escapejs=function(svalue){return svalue.replace(/(["'\\\.\|\[\]\^\*\+\?\$\(\)])/g, '\\$1');};*/
 $.escape=function(v,mode){if(v&&mode){if(mode=='num'){v=v.replace(/\./g, '')}else if(mode=='text'){v=v.replace(/<(.|\n)*?>/g,'');}else if(mode=='js'){v=v.replace(/'/g,'\\\'');}else if(mode=='xml'){v=v.replace(/"/g,'&quot;');}else if(mode=='url'){v=encodeURIComponent(v);}else if(mode=='lru'){v=decodeURIComponent(v);}else if(mode=='id'){v=this.pureid(v);}else if(mode=='html'){v=this.htmlentities(v);}}return v;};
 /* HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - */
 /* HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - HTML DOM - */
 $.att=function(e,a,v){if(e){if(v){e.setAttribute(a,v);}else{return e.getAttribute(a)}}return false};
 $.ins=function(p,tag,aa,_html,b){var i;var elm=document.createElement(tag);if(_html){elm.innerHTML=_html;}p=this.$$(p);if(aa){for(i=0;i<aa.length;i+=2){this.att(elm,aa[i],aa[i+1]);}}if(p){if(b==true){return p.insertBefore(elm,p.firstChild);}else if(b){return p.insertBefore(elm,b);}else{return p.appendChild(elm);}}else{return elm}},
 $.move=function(elm,p,atbegin){p=this.$$(p);elm=this.$$(elm);if(atbegin){p.insertBefore(elm,p.firstChild)}else{p.appendChild(elm.parentNode.removeChild(elm));}};
 $.clearchilds=function(elm){elm=this.$$(elm);if(elm&&elm.hasChildNodes&&elm.removeChild){while(elm.hasChildNodes()){elm.removeChild(elm.firstChild);}}};
 $.importscript=function(url,always){if(always){this._iscr(url);}else{for(var i=0;i<this._loadedscripts.length;i++){if(this._loadedscripts[i]==url){return;}}this._loadedscripts[this._loadedscripts.length]=url;this._iscr(url);}};$._loadedscripts=new Array();$_iscr=function(u){this.ins(document.getElementsByTagName('head')[0],'script',['type','text/javascript','src',u]);};
 $.importcss=function(url){this.ins(document.getElementsByTagName('head')[0],'link',['type','text/css','href',url,'rel','stylesheet']);};
 $.importwebicon=function(url){var olink=document.createElement('link');olink.href=url;olink.rel='icon';if(isIE){olink.rel='shortcut icon';}document.getElementsByTagName('head')[0].appendChild(olink)};
 $.openbrowser=function(url){var thewindow=window.open(url,"save_listing","width=800,height=600,resizable=no,scrollbars=no,menubar=no,status=no,toolbar=no");};
 $.getscripturl=function(scriptname){var s='';var x=0;var scrs=document.getElementsByTagName('head')[0].getElementsByTagName('script');for(var i=0;i<scrs.length;i++){s=scrs[i].getAttributeNode("src").value;x=s.indexOf(scriptname);if(x>-1){return s.substring(0,x);}}this.err('Could not find the script name in the url of any of the loaded scripts.');return '';}
 $.querystring=function(key,qs){if(this.inoe(qs)){if(History){if(History.getState){qs=History.getState().url;}}if(!qs){qs=location.href}}qs=qs.slice(qs.indexOf('?'));if(!key){return qs;}if(key==''){return '';}var deft_="";key=key.replace(/[\[]/,'\\\[').replace(/[\]]/,'\\\]');var regex=new RegExp('[\\?&]'+key+'=([^&#]*)');qs=regex.exec(qs);if(qs==null){return deft_;}else{return decodeURIComponent(qs[1]);}};
 $.cookie={write:function(name,value,days){var expires='';if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires='; expires='+date.toGMTString();}document.cookie=name+"="+encodeURIComponent(value)+expires+"; path=/";},
			read:function(name){var c;var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0){return decodeURIComponent(c.substring(nameEQ.length,c.length));}}return null;},
			erase:function(name){this.write(name,"",-1);}};
 $.showhide=function(ee,v){if(ee.style){ee=[ee];}var s='none';if(v){s='';}for(var e=0;e<ee.length;e++){ee[e].style.display=s}};
 $.toggleclass=function(ee,v){if(ee.style){ee=[ee];}var c;for(var e=0;e<ee.length;e++){c=ee[e].className;if(c.indexOf(v)>-1){c=c.replace(v,'');}else{c=c+' '+v;}ee[e].className=c;}};
 //uno.fixrelativeurls=function(){var aa=document.getElementsByTagName('a');var h='//'+location.hostname;var a=null;for(var x=0;x<aa.length;x++){a=aa[x].href;aa[x].setAttribute('href',a);}};
 /* EVENTS - EVENTS - EVENTS - EVENTS - EVENTS - EVENTS - EVENTS - EVENTS - EVENTS - EVENTS - EVENTS - EVENTS - EVENTS - EVENTS - EVENTS - EVENTS - EVENTS - EVENTS - */
 /*$.on=function(elm,event,handler){if(elm.addEventListener){elm.addEventListener(event,handler,false);}else{if(!handler.$$guid)handler.$$guid=this._uid++;if(!elm.events)elm.events={};var hh=elm.events[event];if(!hh){hh=elm.events[event]={};if(elm['on'+event])hh[0]=elm['on'+event];elm['on'+event]=this._hev;}hh[handler.$$guid]=handler;}};
 $.off=function(elm,event,handler){if(elm.removeEventListener){elm.removeEventListener(event,handler,false);}else if(elm.events && elm.events[event] && handler.$$guid)delete element.events[event][handler.$$guid];};
 $._hev:function(e){e=e||this._fixev(window.event);var x=true;var hh=this.events[e.type];for(var i in hh){if(!Object.prototype[i]){this.$$hh=hh[i];if(this.$$hh(e)===false)x=false;}}if(this.$$hh)this.$$hh=null;return x;};
 $._fixev:function(event){event.preventDefault=this._fixev1;event.stopPropagation=this._fixev2;return event;},_fixev1:function(){this.returnValue=false;},_fixev2:function(){this.cancelBubble=true;};
 */
 $.isEventSupported=(function(){/*Perfection Kills by kangax*/var TAGNAMES={'select':'input','change':'input','submit':'form','reset':'form','error':'img','load':'img','abort':'img'};function isEventSupported(eventName){var el=document.createElement(TAGNAMES[eventName]||'div');eventName='on'+eventName;var isSupported=(eventName in el);if(!isSupported){el.setAttribute(eventName,'return;');isSupported=typeof el[eventName]=='function';}el=null;return isSupported;}return isEventSupported;})();
 /* XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM */
 /* XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM - XML DOM */
 $.xatt=function(n,aname){if(n){return n.getAttribute(aname)}return false};$._xnatt=function(a){if(a){if(a.value){return a.value;}if(a.nodeValue){return a.nodeValue;}}return '';};
 $.xtext=function(n,removecdata){if(!n){return null;}var s=this._xntext(n);if(removecdata){if(s){s=s.replace(/<(.|\n)*?>/g,'');}}return s;};
 $._xntext=function(n){if(n.text){return n.text;}if(n.textContent){return n.textContent;}if(n.innerText){return n.innerText;}if(n.value){return n.value;}};
 $.xml=function(n,removecdata){if(removecdata){return this.tostringformat(n,'','<','>','','',true,false);}if(n.xml){return n.xml;}try{if(XMLSerializer){var test=(new XMLSerializer()).serializeToString(n);return test;}}catch(ex){i=0;}return this.tostringformat(n,'','<','>','','',removecdata,false);};
 $.ixml=function(n,removecdata){if(!n){return null;}var test='';for(var i=0;i<n.childNodes.length;i++){test+=this.xml(n.childNodes[i],removecdata);}return test;};
 $.cixml=function(n,tag,removecdata){return this.ixml(n.getElementsByTagName(tag)[0],removecdata);};
 $.tostringformat=function(n,tab,opent,closet,nl,incr,rcd,killempty){var test='';if(!nl){nl='';}if(!tab){tab='';}if(!incr){incr=tab;}var bcdata='<![CDATA[';var acdata=']]>';if(rcd){bcdata='';acdata='';}
 if(n.nodeName=='#cdata-section'){return bcdata+this._xntext(n)+acdata+nl;}if(n.nodeName=='#comment'){return '<!--'+this._xntext(n)+'-->'+nl;}if(n.nodeName=='#text'){return this._xntext(n)+nl;}
 else{if(n.nodeName!='#document'){test=tab+opent+n.nodeName;if(n.attributes){for(var ai=0;ai<n.attributes.length;ai++){test+=' '+n.attributes[ai].name+'="'+this._xnatt(n.attributes[ai])+'"';}}}
  if(n.childNodes.length>0){if(n.nodeName!='#document'){test+=closet+nl;}for(var i=0;i<n.childNodes.length;i++){if(n.childNodes[i].nodeName=='#text'){var data=this._xntext(n.childNodes[i]);if(killempty){for(var axe=0;axe<1000;axe++){if(data.indexOf(' ')==0){data=data.replace(' ', '');}else if(data.indexOf('\n')==0){data=data.replace('\n', '');}else{axe=2000;}}}if(data!=''){test+=tab+incr+this._xntext(n.childNodes[i])+nl;}}else if(n.childNodes[i].nodeName=='#cdata-section'){test+=tab+incr+bcdata+this._xntext(n.childNodes[i])+acdata+nl;}else if(n.childNodes[i].nodeType==1){test+=this.tostringformat(n.childNodes[i],tab+incr,opent,closet,nl,incr,rcd,killempty);}}}
	else{if(n.nodeName!='#document'){return test+='/'+closet+nl;}}if(n.nodeName!='#document'){return test+tab+opent+'/'+n.nodeName+closet+nl;}else{return test;}}};
 $.listonode=function(nl){var xml='<?xml version="1.0" encoding="utf-8" ?><document>\n<!--copyright openuno.org 2015-->';for(var n=0;n<nl.length;n++){xml+=this.xml(nl[n]);}return this.parsexml(xml+'</document>').documentElement;};
 /* XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - */
 /* XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - XPATH - */
 $.getdoc=function(n){while(n.nodeType!=9){n=n.parentNode;}return n;};
 $.selone=function(xpath,n,_doc){if(!n){return [];};if(isIE){return n.selectSingleNode(xpath);}else{if(!_doc){_doc=this.getdoc(n);}var xx=_doc.evaluate(xpath,n,null,XPathResult.ANY_TYPE,null);if(x.resultType==1){return xx.numberValue}else{xx.iterateNext();}}};
 $.sel=function(xpath,n,_doc){if(!n){return [];};var x=null;var xx=new Array();var xxx=null;if(isIE){if(isIE9||isIE10){x=this._IE9sel(xpath,n);}else{x=n.selectNodes(xpath);}xxx=x.nextNode();while(xxx){xx[xx.length]=xxx;xxx=x.nextNode();}return xx;}
  else{if(!_doc){_doc=this.getdoc(n);}x=_doc.evaluate(xpath,n,null,XPathResult.ANY_TYPE,null);if(x.resultType!=4){xx=[x.numberValue]}else{xxx=x.iterateNext();while(xxx){xx[xx.length]=xxx;xxx=x.iterateNext();}}return xx;}};
 $._IE9sel=function(xpath,n){var xml='<?xml version="1.0" encoding="utf-8" ?>\n'+this.xml(n,false);var xmlDoc=new ActiveXObject("Microsoft.XMLDOM");var objNodeList;xmlDoc.loadXML(xml);if(xmlDoc.parseError.errorCode!=0){var myErr=xmlDoc.parseError;throw new Error(myErr.reason+'\n Parsing :\n'+xml);}else{xmlDoc.setProperty("SelectionLanguage", "XPath");try{return xmlDoc.documentElement.selectNodes(xpath);}catch(tex){var i=0;}}};
 /* XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - */
 /* XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - XML LOAD - */
 $.parsexml=function(xml){var xmlDoc=false;try{var xmlParser=new DOMParser();xmlDoc=xmlParser.parseFromString(xml,"text/xml");}catch(errr){try{xmlDoc=new ActiveXObject("Microsoft.XMLDOM");xmlDoc.async=false;xmlDoc.loadXML(xml);}catch(err){this.err('There was an error parsing the xml string or the browser do not support xml parsing.\n'+errr.message);}}return xmlDoc;};
 $.loadxmlsync=function(url){var xd=false;/*Chrome, Safari*/if(is_chrome||is_safari){var pr=new XMLHttpRequest();pr.open('GET',url,false);pr.send(null);return pr.responseXML;}else{/*Internet Explorer*/try{xd=new ActiveXObject("Microsoft.XMLDOM");}catch(exxx){/*firefox,mozilla,opera,etc.*/try{xd=document.implementation.createDocument("","",null);}catch(exx){this.err('This browser have a problem creating a new xml document using the w3c way[document.implementation.createDocument("", "", null)]\n'+exx.message);}}try{xd.async=false;xd.load(url);}catch(ex){ooo.err('There was an error invoking a [xmlDoc.async = false;xmlDoc.load(url)] : \n'+ex.message);}return xd;}};
 $.load=function(url,_elm,_onfinish,_onstep,_onerror,_mem){var req=this._req();
 	req.onreadystatechange=function(ev){$._doload(ev,_elm,_onfinish,_onstep,_onerror,_mem);};if(!_elm){req.open("GET",url,true);req.send('');}
 	else{var hasfile=false;
 	 	if(!hasfile){req.open("POST",url,true);req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    		console.log('todo:ooo serialize');req.send(ooo.serialize(_elm))}
    	else{console.log('todo:file upload');}}return false;};
 $.preload=function(url,_onfinish,_mem){if(!_mem){_mem={}}_mem.pre_url=url;_mem.pre_onfinish=_onfinish;return $.load(url,false,$._dopreload,false,false,_mem)};
 $.preloaded=function(name){name=ooo.sub(name,'#HOST#',ooo.host);for(var i=0;i<ooo._preloaded.length;i++){if(ooo._preloaded[i].url==name){return ooo._preloaded[i].xml;}}return false;};
 $.syncrender=function(target,template,data,_mode){$._syncrender(target,template,data,_mode||'normal');}
 $.render=function(target,template,data,_elm,_mode,_onfinish,_onstep,_onerror){return $.load(template,_elm,$._dorendercontrol1,false,false,{"target":target,"template":template,"data":data,"elm":_elm,"onfinish":_onfinish,"onstep":_onstep,"onerror":_onerror,"mode":_mode||'normal'});};
 $._req=function(){var rq=false;if(window.XMLHttpRequest&&!(window.ActiveXObject)){try{rq=new XMLHttpRequest();}catch(exk){rq=false;}}else if(window.ActiveXObject){try{rq=new ActiveXObject("Msxml2.XMLHTTP");}catch(ex){try{rq=new ActiveXObject("Microsoft.XMLHTTP");}catch(exx){rq=false;}}}if(!rq){ooo.err('This browser is neither w3c or mozilla compatible*[2008], uno.xml javascript framework will not work.');}return rq;};
 $._doload=function(ev,_elm,_onfinish,_onstep,_onerror,_mem){
 	var req=(ev.currentTarget||ev.target||ev.srcElement);if(req.readyState>1&&req.readyState<4){if(req.status==200){if(_onstep)_onstep(req);}
 	}else if(req.readyState==4){if(req.status==200){_onfinish(req,_mem);}else{console.log('Request failed');console.log(req);if(_onerror){_onerror(req)}}}};
 $._preloaded=[];$._dopreload=function(req,oo){$._preloaded[$._preloaded.length]={url:oo.pre_url,xml:ooo.parsexml(req.responseText)};if(oo.pre_onfinish){oo.pre_onfinish(req,oo);}};
 $._dorendercontrol1=function(req,oo){oo.templateXML=ooo.parsexml(req.responseText);console.log(oo);$._dorendercontrol2(false,oo);};
 $._dorendercontrol2=function(nouse,oo){/*AUTOMAGIC PRELOAD RETRIVAL*/
    var ins=ooo.sel('//inline',oo.templateXML);var flag=false;if(ins){if(ins.length>0){
    var prel;for(var xi=0;xi<ins.length;xi++){prel=ooo.xatt(ins[xi],'preload');if(!$.preloaded(prel)){flag=true;break;}}}}
    //TODO:Check inline's inlines
    if(flag){$.preload(prel,$._dorendercontrol2,oo);}else{$.load(oo.data,oo.elm,$._dorendercontrol3,false,false,oo);}
 };
 $._dorendercontrol3=function(req,oo){oo.dataXML=ooo.parsexml(req.responseText);var s=$._syncrender(oo.target,oo.templateXML.documentElement,oo.dataXML.documentElement,oo.mode||'normal');if(oo.onfinish){oo.onfinish(s,oo)}};
 $._syncrender=function(target,template,data,_mode,_outcodes){if(!data){if(target){return null;}else{return '';}}template=uno.xml._preloadntt(template,false);
 var rt=0;var x=0;var v=0;var i=0;var s='';var vins;var prel;var js='';var nn=new Array();var tn='';var tn1=null;var tn2=null;
 var consts=new Array();var consts_name=new Array();
 //Prepare constants
 var nn=ooo.sel('//constant',template);
 for(v=0;v<nn.length;v++){consts[v]=ooo._varpickup(nn[v],data);consts_name[v]=ooo.xatt(nn[v],'substitution');}
 //v+=1;consts_name[v]='#DATE.NOW#';consts[v]=(new Date().toLocaleString()); 
 //Prepare and plot constant javascripts;
 nn=$.sel('//constantjavascript',template);
 for(v=0;v<nn.length;v++){tn=ooo.xatt(nn[v],'substitution');
  js=ooo.ixml(nn[v],true);js=ooo._XTRsubs(js,consts,consts_name);
  consts[consts.length]=eval(js);consts[consts.length-1]=ooo.escape(consts[consts.length-1],ooo.xatt(nn[v],'escape'));consts_name[consts_name.length]=tn;}
 //Prepare and plot constant conditions;
 var const_xconds=null;var const_conds=new Array();var const_conds_name=new Array();
 const_xconds=template.getElementsByTagName('constantcondition');
 for(v=0;v<const_xconds.length;v++){
  const_conds_name[v]=ooo.xatt(const_xconds[v],'substitution');
  js=ooo.cixml(const_xconds[v],'js',true);js=ooo._XTRsubs(js,consts,consts_name);
  try{if(eval(js)){const_conds[v]=ooo.cixml(const_xconds[v],'true',true);}
  else{const_conds[v]=ooo.cixml(const_xconds[v],'false',true);const_conds[v]=ooo.escape(const_conds[v],ooo.xatt(const_xconds[v],'escape'));}}catch(jsex){
	  const_conds[v]=ooo.cixml(const_xconds[v],'error',true);const_conds[v]=ooo.escape(const_conds[v],ooo.xatt(const_xconds[v],'escape'));}}
 //Start Writing
 var html=ooo.sel('//title',template);for(e=0;e<html.length;e++){var v=ooo._XTRsubs(ooo._XTRsubs(ooo.ixml(html[0],true),const_conds,const_conds_name),consts,consts_name);document.title=v;}
 s=ooo.cixml(template,'beforeall',true);s=ooo._XTRsubs(s,const_conds,const_conds_name);
 html=ooo._XTRsubs(s,consts,consts_name);
 //Fetch row types
 var rowtypes=ooo.sel('//rowtype',template);
 var xvars=null;var xins=null;var vars=new Array();var vars_name=new Array();
 var rows=null;var rbefore='';var rafter='';var between='';var hasbetween=true;var betweenstep;var pagecount;
 var xconds=null;var conds=new Array();var condsE=new Array();var condsT=new Array();var condsF=new Array();var conds_name=new Array();var conds_js=new Array();
 var xswitches=null;var xswitchesv=new Array();
 //Write row types 
 var ddoc=ooo.getdoc(data);
 var htm2='';var outcodes=null;if(_outcodes){outcodes=_outcodes;}else{outcodes=new Array();}var maxrows=-1;var minrows=0;
 for(rt=0;rt<rowtypes.length;rt++){
  //Fetch ROWS
  s=ooo.xatt(rowtypes[rt],'tagname');
  if(s=="#DOCUMENT#"){rows=new Array();rows[0]=data;}else{s=ooo._XTRsubs(s,const_conds,const_conds_name);s=ooo._XTRsubs(s,consts,consts_name);rows=ooo.sel(s,data,ddoc);}
  maxrows=ooo.xatt(rowtypes[rt],'max');if(ooo.inoe(maxrows)){maxrows=rows.length;}else{maxrows=parseInt(maxrows);}  
  minrows=ooo.xatt(rowtypes[rt],'min');if(ooo.inoe(minrows)){minrows=0;}else{minrows=parseInt(minrows);}
  //If rowtype applies
  if(rows.length>=minrows){
  /*CASE ZERO*/if(rows.length==0){htm2+=ooo._MXTRsubs(ooo.cixml(rowtypes[rt],'casezero',true),[const_conds,const_conds_name,consts,consts_name]);}
  else{if(rows.length<maxrows){maxrows=rows.length;}pagecount=2;/*START ROW FETCHES*/
   /*RESET*/vars=null;vars=new Array();vars_name=null;vars_name=new Array();
   /*VARS*/xvars=rowtypes[rt].getElementsByTagName('variable');for(v=0;v<xvars.length;v++){vars_name[v]=ooo.xatt(xvars[v],'substitution');vars[v]='';}
   /*STATICS*/v=vars_name.length;vars_name[v]='#TEXT#';vars[v]='';v=vars_name.length;vars_name[v]='#XML#';vars[v]='';
   			  v=vars_name.length;vars_name[v]='#ROWIDX#';vars[v]='';v=vars_name.length;vars_name[v]='#ROWCOUNT#';vars[v]='';
   			  v=vars_name.length;vars_name[v]='#PAGECOUNT#';vars[v]='';v=vars_name.length;vars_name[v]='#INNERXML#';vars[v]='';
   //SWITCHES, INLINE, CONDITIONS*/
   xswitches=rowtypes[rt].getElementsByTagName('switch');for(v=0;v<xswitches.length;v++){vins=vars_name.length;vars_name[vins]=ooo.xatt(xswitches[v],'substitution');xswitchesv[v]=ooo.xatt(xswitches[v],'value');}
   xins=rowtypes[rt].getElementsByTagName('inline');for(v=0;v<xins.length;v++){vins=vars_name.length;vars_name[vins]=ooo.xatt(xins[v],'substitution');}
   xconds=rowtypes[rt].getElementsByTagName('condition');for(v=0;v<xconds.length;v++){
    conds_name[v]=ooo.xatt(xconds[v],'substitution');conds_js[v]=ooo._MXTRsubs(ooo.cixml(xconds[v],'js',true),[const_conds,const_conds_name,consts,consts_name]);
    condsT[v]=ooo.cixml(xconds[v],'true',true);if(condsT[v]==null)condsT[v]='';
    condsF[v]=ooo.cixml(xconds[v],'false',true);if(condsF[v]==null)condsF[v]='';
    condsE[v]=ooo.cixml(xconds[v],'error',true);if(condsE[v]==null)condsE[v]='';}
   /*BEFORE,AFTER,BETWEEN*/
   rbefore=ooo._XTRsubs(ooo.cixml(rowtypes[rt],'before',true),const_conds,const_conds_name);
   rafter=ooo._XTRsubs(ooo.cixml(rowtypes[rt],'after',true),const_conds,const_conds_name);        
   between=ooo._XTRsubs(ooo.cixml(rowtypes[rt],'between',true),const_conds,const_conds_name);
   hasbetween=!ooo.inoe(between);
   if(hasbetween){betweenstep=ooo.xatt(rowtypes[rt].getElementsByTagName('between')[0],'step');if(ooo.inoe(betweenstep)){betweenstep=0;}else{betweenstep=parseInt(betweenstep);}if(betweenstep<1){betweenstep=1;}}
   rbefore=ooo.sub(rbefore,'#ROWCOUNT#',rows.length.toLocaleString());
   rafter=ooo.sub(rafter,'#ROWCOUNT#',rows.length.toLocaleString());
   /*WRITE BEFORE*/htm2+=ooo._XTRsubs(rbefore,consts,consts_name);
   //SINGLE ROW PLOT START ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   for(x=0;x<maxrows;x++){v=0;
    /*vars*/for(v=0;v<xvars.length;v++){vars[v]=ooo._varpickup(xvars[v],rows[x],[const_conds,const_conds_name,consts,consts_name]);}
    /*fixed vars(text, xml, innerxml, rowcount and  betweenrowcount)*/
    vars[v]=ooo.xtext(rows[x],true);vars[v+1]=ooo.xml(rows[x],true);vars[v+2]=x;vars[v+3]=rows.length.toLocaleString();vars[v+4]=pagecount.toLocaleString();vars[v+5]=ooo.ixml(rows[x],true);
    /*switches*/vins=v+6;var swflag=false;var matched=-1;
    for(v=0;v<xswitches.length;v++){matched=-1;swflag=false;nn=xswitches[v].getElementsByTagName('match');s=ooo._XTRsubs(xswitchesv[v],vars,vars_name);vars[vins+v]='';
	 if(ooo.xatt(xswitches[v],'compare')=='contains'){for(i=0;i<nn.length;i++){if(s.indexOf(ooo.xatt(nn[i],'value'))>-1){matched=i;i=1000;swflag=true;}}}
	 else{for(i=0;i<nn.length;i++){if(s==ooo.xatt(nn[i],'value')){matched=i;i=1000;swflag=true;}}}
	 if(!swflag){for(i=0;i<nn.length;i++){if(!ooo.inoe(ooo.xatt(nn[i],'default'))){matched=i;i=1000;}}}
	 if(matched>-1){vars[vins+v]=ooo._MXTRsubs(ooo.ixml(nn[matched],true),[conds,conds_name,vars,vars_name,const_conds,const_conds_name],ooo.xatt(xswitches[v],'escape'));}}
    /*inlines*/for(v=0;v<xins.length;v++){
     s=ooo.xatt(xins[v],'tagname');prel=ooo.xatt(xins[v],'preload');vins=xvars.length+6+xswitches.length+v;
     if(s=='#ELEMENT#'){tn=rows[x];}else if(s=='#DOCUMENT#'){tn=data;}else{tn=ooo.listonode(ooo.sel(s,rows[x]))}
     tn1=$._syncrender(false,ooo.preloaded(prel),tn,'inline',outcodes);vars[vins]=tn1.html;outcodes=tn1.outcodes;}
    /*FINALIZE VARS*/for(v=0;v<vars.length;v++){if(vars[v]==null){vars[v]='';}if(vars[v]=='undefined'){vars[v]='';}}
    //Prepare conditions
    for(v=0;v<xconds.length;v++){js=ooo._XTRsubs(conds_js[v],vars,vars_name);try{if(eval(js)){conds[v]=condsT[v];}else{conds[v]=condsF[v];}}catch(ex){conds[v]=condsE[v];}}
    //Write start
    htm2+=ooo._MXTRsubs(ooo.ixml(rowtypes[rt].getElementsByTagName('html')[0],true),[conds,conds_name,vars,vars_name,const_conds,const_conds_name,consts,consts_name])
    if((x<maxrows-1)&&(hasbetween)&&(x==(betweenstep*(pagecount-2)))){s=ooo._XTRsubs(between,conds,conds_name);htm2+=ooo._XTRsubs(s,vars,vars_name);pagecount=pagecount+1;}
     outcodes=uno.xml._chainload(rowtypes[rt],2,consts,consts_name,const_conds,const_conds_name,vars,vars_name,conds,conds_name,outcodes);
   }htm2+=ooo._XTRsubs(rafter,consts,consts_name);}}}
 /*CASEALLZERO*/if(ooo.inoe(htm2)){htm2=ooo._XTRsubs(ooo.ixml(template.getElementsByTagName('caseallzero')[0],true),const_conds,const_conds_name);}
 /*MAINCONTENT*/html+=htm2;
 /*AFTERALL*/html+=ooo._MXTRsubs(ooo.ixml(template.getElementsByTagName('afterall')[0],true),[const_conds,const_conds_name,consts,consts_name]);
 //if(html.indexOf('#RESPONSEXML#')){html=ooo.sub(html,'#RESPONSEXML#',ooo.xml(data,false));}
 /*RENDER-FILL*/if(!_mode){_mode='normal';}if(_mode!='inline'){if(target){ooo._rdrctrfill(target,html,_mode);}
 /*RUN-OUTPUT-JS*/for(v=0;v<outcodes.length;v++){try{eval(outcodes[v]);}catch(ocex){ooo.err(ocex);}}outcodes=null;outcodes=new Array();}
 /*CHAINLOAD*/try{uno.xml._chainload(template,1,consts,consts_name,const_conds,const_conds_name,false,false,false,false);}
 /*RETURNS*/catch(fex){fex=null;}if(_mode=='inline'){return {html:html,outcodes:outcodes};}else{return html;}};
 /* - ---------------------------------------------------------------------------------------- XTR ENGINE UTILS - */	
 ooo._varpickup=function(tnode,node,subs){var v='';var exp=ooo.xatt(tnode,'tagname');
if(ooo.inoe(exp)){v=''}else{exp=$._MXTRsubs(exp,subs);var mode=ooo.xatt(tnode,'pickup');if(ooo.inoe(mode)){mode='normal';}
if(ooo.starts(exp,'#ELEMENT#')){v=ooo.ixml(node,true);}else if(ooo.starts(exp,'@')){v=ooo.xatt(node,exp.slice(1));}
else{var xx=ooo.sel(exp,node);if(mode=='normal'){v=ooo.ixml(xx[0],true);}
 else if(mode=='cdata'){v=ooo.ixml(xx[0],false);}else if(mode=='xpathresult'){v=xx}
 else if(ooo.starts(mode,'csv')){var sep='!';if(mode.indexOf(':')>-1){sep=mode.split(':')[1]};var out='';var x;var o='';for(x=0;x<xx.length-1;x++){o=ooo.ixml(xx[x],true);if(o){out+=o+sep;}}o=ooo.ixml(xx[xx.length-1],true);if(o){out+=o;}v=out;}
 else if(mode=='date'){var out=ooo.ixml(xx[0],true);var y=parseInt(out.substr(0,4));var m=parseInt(out.substr(4,2));var d=parseInt(out.substr(6,2));var h=parseInt(out.substr(8,2));var mm=parseInt(out.substr(12,2));var s=parseInt(out.substr(15,2));return new Date(y,m-1,d,h,mm,s);}
 else{v=ooo.ixml(xx[0],true);}}}if(ooo.inoe(v)){v=ooo.xatt(tnode,'default');if(ooo.inoe(v)){return '';}}
v=ooo._converts(v,ooo.xatt(tnode,'convert'));v=ooo.escape(v,ooo.xatt(tnode,'escape'));return v;};
 ooo._converts=function(value,mode){try{if(value&&mode){if(mode=='host'){return ooo.sub(value,'#HOST#',ooo.host);}
else if(mode=='friendlydate'){return uno.friendlydate(value);}
else if(mode=='lower'){return value.toLowerCase();}else if(mode=='upper'){return value.toUpperCase();}
else if(ooo.starts(mode,'globalize:')){var ss=mode.split(':');return Globalize.format(value,ss[1]);}
else{var cd=mode+"(\'"+value.replace(/'/g,'\\\'')+'\');';return eval(cd);}}else{return value;}}catch(ex){return value;}};
 ooo._rdrctrfill=function(target,htmltext,mode){
if(target=='#NEW#'){uno.insert('supercontainer','div',['style','display:none'],false,htmltext);}
 else{target=ooo.$$(target);
  if(target.nodeName.toLowerCase()!='table'){
   if(mode=='normal'){ooo.clearchilds(target);target.innerHTML=htmltext;}else{
   var newelm=document.createElement('div');newelm.innerHTML=htmltext;
   if(mode=='append'){newelm=target.appendChild(newelm);}
   else if(mode=='insert'){newelm=target.insertBefore(newelm,target.firstChild);}
 }}else{htmltext=ooo.sub(htmltext,'&amp;','&');htmltext=htmltext.replace(/&/g, '&amp;');
   var newrows=ooo.parsexml('<?xml version="1.0" encoding="utf-8" ?><unontt>'+htmltext+'</unontt>');
   var r=0;var rr=ooo.sel('//tr',newrows.documentElement);var rrr=[];var c;var cc;var ccc;
   if(mode=='normal'){ooo.clearchilds(target.tBodies[0]);mode='append';}
   if(mode=='appendatable'){for(r=1;r<rr.length;r++){cc=ooo.sel('td',rr[r]);rrr[r-1]=[];for(c=0;c<cc.length;c++){rrr[r-1][c]=ooo.ixml(cc[c]).replace(/&amp;/g,'&');}}jQuery(target).dataTable().fnAddData(rrr)}
   if(mode=='append'){var pl=target.rows.length;for(r=0;r<rr.length;r++){cc=ooo.sel('td',rr[r]);rrr=target.insertRow(r+pl);for(c=0;c<cc.length;c++){ccc=rrr.insertCell(c);ccc.innerHTML=ooo.ixml(cc[c]).replace(/&amp;/g,'&');}}}
   if(mode=='insert'){for(r=0;r<rr.length;r++){cc=ooo.sel('td',rr[r]);rrr=target.insertRow(r);for(c=0;c<cc.length;c++){ccc=rrr.insertCell(c);ccc.innerHTML=ooo.ixml(cc[c]).replace(/&amp;/g,'&');}}}
}}};
 $._XTRsubs=function(v,vv,nn){if(this.inoe(v)){return '';}if(vv){for(var i=0;i<vv.length;i++){v=this.sub(v,nn[i],vv[i]);}}return v;};
 $._MXTRsubs=function(v,subs,escape){if(this.inoe(v)){return '';}if(subs){var s;for(s=0;s<subs.length;s+=2){v=ooo._XTRsubs(v,subs[s],subs[s+1]);}}if(escape){v=ooo.escape(v,escape);}return v;};
 /* DEFAULTS - DEFAULTS - DEFAULTS - DEFAULTS - DEFAULTS - DEFAULTS - DEFAULTS - DEFAULTS - DEFAULTS - DEFAULTS - DEFAULTS - DEFAULTS - DEFAULTS - DEFAULTS - DEFAULTS - DEFAULTS - */
 $.pagetarget='supercontainer';$.rendertimestep=100;

})(ooo,window);


uno={};uno.xml={};
//RENDER COMPONENT
uno.xml.tempsayok=false;
uno.xml.sayok=function(url,_form,onfinish){uno.xml.tempsayok=onfinish;uno.xml.asyncload(url,false,uno.xml._sayokafter,uno.xml._sayokafter,_form);};
uno.xml._sayokafter=function(req){uno.xml._okprocess(req);if(uno.xml.tempsayok){uno.xml.tempsayok();uno.xml.tempsayok=false;}};
uno.xml.renderpage=function(dataurl,_form,_onfinish){uno.xml.asyncload(dataurl,false,uno.xml._renderpage,false,_form,_onfinish);};
uno.xml.rendercontent=function(target,dataurl,_form,_onfinish,mode){var pmode='content';if(mode){pmode='control'+mode;}var pidx=uno.xml._fastinstance();uno.xml.processes[pidx]=new uno.xml.process(pmode,target,false,dataurl,_form,_onfinish);uno.xml.startprocess(pidx);};
uno.xml._collect=function(a,f){var n=[];for(var i=0;i<a.length;i++){var v=f(a[i]);if(v!=null){n.push(v);}}return n;};
uno.xml._serialize=function(f){var g=function(n){return f.getElementsByTagName(n)};var nv=function(e){if(e.name)return encodeURIComponent(e.name)+'='+encodeURIComponent(e.value);else return ''};var c1=function(i){if((i.type!='radio'&&i.type!='checkbox')||i.checked)return nv(i)};var i=uno.xml._collect(g('input'),c1);var s=uno.xml._collect(g('select'),nv);var t=uno.xml._collect(g('textarea'),nv);return i.concat(s).concat(t).join('&');};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//----------------------------------------   XX MM LL - RR EE NN DD EE RR   ---------------------------------------//
/////////////////////////////////////////////////////////////////////////////////////////////private implementation//
//----------------------------------------------- OK PROCESS ROUTINE ----------------------------------------------//
uno.xml._okprocess=function(req){var e;var ok='ok';var msg='';var oo=null;var ts='';var ts2='';
 try{ok=req.responseXML.documentElement.getElementsByTagName('ok')[0].childNodes[0].nodeValue;}catch(exxx){ok='ok';}
 if(ok!='ok'){oo=req.responseXML.documentElement.getElementsByTagName('servererror');
  try{for(e=0;e<oo.length;e++){msg=msg+ooo.ixml(oo[e],true)+'\n';}}catch(ex){msg=req.responseText;e=100;}
  try{for(e=0;e<100;e++){ts2='servererror'+e.toString();ts=ooo.cookie.read(ts2);if(ts){msg+='\n'+ts;}else{ooo.cookie.erase(ts2);e=100;}}}catch(exx){msg=req.responseText;e=100;}
  ooo.err(msg);
 }else{oo=req.responseXML.documentElement.getElementsByTagName('servermessage');
  try{for(e=0;e<oo.length;e++){msg=msg+ooo.ixml(oo[e],true)+'\n';}}catch(ex){msg=responseText;e=100;}
  try{for(e=0;e<100;e++){ts2='servermessage'+e.toString();ts=ooo.cookie.read(ts2);if(ts){msg+='\n'+ts;}else{ooo.cookie.erase(ts2);e=100;}}}catch(ex){msg=req.responseText;e=100;}
  if(!ooo.inoe(msg)){ooo.err(msg);}
  msg='';oo=req.responseXML.documentElement.getElementsByTagName('serverwarning');
  try{for(e=0;e<oo.length;e++){msg=msg+ooo.ixml(oo[e],true)+'\n';}}catch(ex){msg=responseText;e=100;}
  try{for(e=0;e<100;e++){ts2='servermessage'+e.toString();ts=ooo.cookie.read(ts2);if(ts){msg+='\n'+ts;}else{ooo.cookie.erase(ts2);e=100;}}}catch(ex){msg=req.responseText;e=100;}
  if(!ooo.inoe(msg)){ooo.err(msg);}
 }return (ok=='ok');};
 //---------------------------------------------- NTT PRELOAD ROUTINE ----------------------------------------------//
uno.xml._preloadntt=function(ntt,_uniqueid,pidx){var e;var xx;var nn=new Array();var ss=new Array();if(!_uniqueid){_uniqueid=ooo.uid();}
 if(ntt.getElementsByTagName){xx=ntt.getElementsByTagName('querystring');
 for(e=0;e<xx.length;e++){nn[e]=ooo.xatt(xx[e],'varname');ss[e]=ooo.xatt(xx[e],'substitution');xx[e].parentNode.removeChild(xx[e]);xx[e]=null;}
 var ts=ooo.ixml(ntt);var qs='';for(e=0;e<nn.length;e++){qs=ooo.querystring(nn[e],location.href);if(!qs){qs='';}ts=ooo.sub(ts,ss[e],qs);}
 if(nn.length>0){ntt=ooo.parsexml('<?xml version="1.0" encoding="utf-8" ?><unontt>'+ts+'</unontt>');ts=ooo.ixml(ntt);}
 xx=ntt.getElementsByTagName('cookie');nn=[];
 for(e=0;e<xx.length;e++){nn[e]=ooo.xatt(xx[e],'varname');ss[e]=ooo.xatt(xx[e],'substitution');xx[e].parentNode.removeChild(xx[e]);}
 for(e=0;e<nn.length;e++){ts=ooo.sub(ts,ss[e],ooo.cookie.read(nn[e]));} 
 ts=ooo.sub(ts,'#UNIQUEID#',_uniqueid);
 if(pidx){ts=ooo.sub(ts,'#PIDX#',pidx);}ts=ts.replace(/#HOST#/g,ooo.host);return ooo.parsexml('<?xml version="1.0" encoding="utf-8" ?><unontt>'+ts+'</unontt>');}
 else{var ts='';ts=ntt.outerHTML;if(ts){ts=ooo.sub(ts,'#UNIQUEID#',_uniqueid);ts=ts.replace(/#HOST#/g,ooo.host);}return ooo.parsexml('<?xml version="1.0" encoding="utf-8" ?><unontt>'+ts+'</unontt>');}};
//------------------------------------------------------------------- PAGE RENDER ROUTINE -------------------------------------------------------(simple handler)-//
uno.xml._renderpage=function(req){var data=uno.xml._preloadntt(req.responseXML.documentElement);
try{var e;var nn=null;
 nn=data.getElementsByTagName('script');for(e=0;e<nn.length;e++){ooo.importscript(ooo.ixml(nodes[e],true));}
 nn=data.getElementsByTagName('icon');for(e=0;e<nn.length;e++){ooo.importwebicon(ooo.xtext(nn[e]));}
 nn=data.getElementsByTagName('title');for(e=0;e<nn.length;e++){uno.setitle(ooo.ixml(nn[e],true));}
 nn=data.getElementsByTagName('style');for(e=0;e<nn.length;e++){ooo.importcss(ooo.ixml(nn[e],true));}
 nn=data.getElementsByTagName('html');
 var elm=ooo.$$(ooo.pagetarget);elm.innerHTML=ooo.ixml(nn[0],true); 
 uno.xml._chainload(data,0,false,false,false,false,false,false,false,false);
}catch(ex){alert(ex.message);}};
//------------------------------------------------------------------- CONTENT RENDER ROUTINE ----------------------------------------------------------------------//
uno.xml._rendercontent=function(pidx,req){var data=uno.xml._preloadntt(req.responseXML.documentElement);
 var p=uno.xml.processes[pidx];p.elm=ooo.$$(p.elm);ooo.clearchilds(p.elm);var written=false;
 var mode='normal';if(ooo.ends(p.ptype,'append')){mode='append';}if(ooo.ends(p.ptype,'insert')){mode='insert';}if(ooo.ends(p.ptype,'datable')){mode='appendatable';}
 try{var ctc=data.getElementsByTagName('html')[0];
  uno.xml._rdrctrfill(p.elm,ooo.ixml(ctc,true),mode);written=true;
  uno.xml._chainload(data,0,false,false,false,false,false,false,false,false);
 }catch(exxz){throw exxz;}
if(written==false){p.elm.innerHTML=req.responseText;}};
// ------------------------------------------------- CHAINLOAD -----------------------------------------------------------------------------
uno.xml._chainload=function(node,sublev,consts,consts_name,const_conds,const_conds_name,vars,vars_name,conds,conds_name,outcodes){
 var e=0;var tgt='';var curl='';var durl='';var timeout=350;var nodes;var ctcname='content';var ctrname='control';var appnd='normal';
 if(sublev==1){ctcname='constant'+ctcname; ctrname='constant'+ctrname;nodes=node.getElementsByTagName('onloadall');}    
 else{nodes=node.getElementsByTagName('onload');}
 for(e=0;e<nodes.length;e++){try{tgt=ooo.ixml(nodes[e],true);
    if(sublev>0){if(sublev>1){tgt=ooo._XTRsubs(tgt,conds,conds_name);tgt=ooo._XTRsubs(tgt,vars,vars_name);}tgt=ooo._XTRsubs(tgt,const_conds,const_conds_name);tgt=ooo._XTRsubs(tgt,consts,consts_name);}
    if(sublev>1){outcodes[outcodes.length]=tgt;}else{eval(tgt);tgt='';}
  }catch(exxx){ooo.err('Error evaluating javascript '+tgt+'.'+exxx.message);}}
 nodes=node.getElementsByTagName(ctcname);
 for(e=0;e<nodes.length;e++){
  tgt=ooo.xatt(nodes[e],'target');curl=ooo.xatt(nodes[e],'ntturl');appnd=ooo.xatt(nodes[e],'mode');if(ooo.inoe(appnd)){appnd='normal';}
  try{if(sublev>0){
      if(sublev>1){tgt=ooo._XTRsubs(tgt,conds,conds_name);tgt=ooo._XTRsubs(tgt,vars,vars_name);curl=ooo._XTRsubs(curl,conds,conds_name);curl=ooo._XTRsubs(curl,vars,vars_name);}
      tgt=ooo._XTRsubs(tgt,const_conds,const_conds_name);tgt=ooo._XTRsubs(tgt,consts,consts_name);curl=ooo._XTRsubs(curl,const_conds,const_conds_name);curl=ooo._XTRsubs(curl,consts,consts_name);}
    if(sublev>1){outcodes[outcodes.length]='uno.xml.rendercontent(\''+tgt+'\',\''+curl+'\',false,false,\''+appnd+'\');\n';}
    else{setTimeout('uno.xml.rendercontent(\''+tgt+'\',\''+curl+'\',false,false,\''+appnd+'\');',timeout);timeout+=ooo.rendertimestep;}}
  catch(exxxx){ooo.err('Error chainloading content '+e+'.');}}
 nodes=node.getElementsByTagName(ctrname);
 for(e=0;e<nodes.length;e++){
  tgt=ooo.xatt(nodes[e],'target');curl=ooo.xatt(nodes[e],'ntturl');durl=ooo.xatt(nodes[e],'dataurl');appnd=ooo.xatt(nodes[e],'mode');if(ooo.inoe(appnd)){appnd='normal';}
  try{if(sublev>0){
    if(sublev>1){tgt=ooo._XTRsubs(tgt,conds,conds_name);tgt=ooo._XTRsubs(tgt,vars,vars_name);curl=ooo._XTRsubs(curl,conds,conds_name);curl=ooo._XTRsubs(curl,vars,vars_name);durl=ooo._XTRsubs(durl,conds,conds_name);durl=ooo._XTRsubs(durl,vars,vars_name);}
    tgt=ooo._XTRsubs(tgt,const_conds,const_conds_name);tgt=ooo._XTRsubs(tgt,consts,consts_name);curl=ooo._XTRsubs(curl,const_conds,const_conds_name);curl=ooo._XTRsubs(curl,consts,consts_name);durl=ooo._XTRsubs(durl,const_conds,const_conds_name);durl=ooo._XTRsubs(durl,consts,consts_name);}
    if(sublev>1){outcodes[outcodes.length]='uno.xml.rendercontrol(\''+tgt+'\',\''+curl+'\',\''+durl+'\',false,false,\''+appnd+'\');\n';}
    else{setTimeout('uno.xml.rendercontrol(\''+tgt+'\',\''+curl+'\',\''+durl+'\',false,false,\''+appnd+'\');',timeout);timeout+=ooo.rendertimestep;}}    
  catch(exxxx){ooo.err('Error chainloading control '+e+'.');}}
  if(sublev>1){return outcodes;}};
