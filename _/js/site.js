!function(){"use strict";!function e(t){var r=t.parentNode;if(!r.matches(".nav-children-panel"))return;var n=r.previousElementSibling;r.classList.remove("hide");n.querySelector(".material-icons").classList.add("expanded");e(n)}(document.querySelector(".is-current-page").parentNode),mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector(".mdc-top-app-bar"));for(var e=document.querySelectorAll(".select-version"),t=0;t<e.length;t++){var r=e[t];r.addEventListener("change",function(e){var t=this.getAttribute("data-component"),r='.nav-container div[data-component="'+t+'"][data-version="'+this.options[this.selectedIndex].value+'"]',n='.nav-container div[data-component="'+t+'"]:not(.hide)',i=document.querySelector(r),s=document.querySelector(n);i.classList.remove("hide"),s.classList.add("hide")}),1===r.options.length&&(r.classList.add("single-version"),r.disabled=!0)}var n=document.querySelectorAll(".nav-item .material-icons");for(t=0;t<n.length;t++)mdc.ripple.MDCRipple.attachTo(n[t]),n[t].addEventListener("click",function(e){var t=e.target,r=t.parentElement.nextElementSibling;t.classList.contains("expanded")?(t.classList.remove("expanded"),r.classList.add("hide")):(t.classList.add("expanded"),r.classList.remove("hide"))});var i=document.getElementById("toolbar-nav-toggle");mdc.iconButton.MDCIconButtonToggle.attachTo(i),i.addEventListener("click",function(){var e=document.querySelector("main"),t=document.querySelector("div.nav-container");t.classList.contains("hide")?(e.classList.add("hide"),t.classList.remove("hide")):(e.classList.remove("hide"),t.classList.add("hide"))})}(),function(){"use strict";var e=document.querySelector(".page-versions .version-menu-toggle");if(e){var t=document.querySelector(".page-versions");e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),document.documentElement.addEventListener("click",function(){t.classList.remove("is-active")})}}(),document.addEventListener("DOMContentLoaded",function(){window.innerWidth<=1024&&document.querySelector("div.nav-container").classList.add("hide");var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);0!==e.length&&e.forEach(function(t){t.addEventListener("click",function(e){e.stopPropagation(),t.classList.toggle("is-active"),document.getElementById(t.dataset.target).classList.toggle("is-active"),document.documentElement.classList.toggle("is-clipped--navbar")})})}),window.addEventListener("resize",function(){if(document.querySelector(".mdc-top-app-bar__row.sdp-top-app-bar__search").classList.contains("hide")){var e=document.querySelector("main");e.classList.contains("hide")&&e.classList.remove("hide");var t=document.querySelector("div.nav-container");1024<window.innerWidth&&t.classList.contains("hide")&&t.classList.remove("hide")}window.innerWidth<1025&&(t.classList.contains("hide")||t.classList.add("hide"))}),hljs.initHighlighting(),function(){"use strict";var e=document.querySelectorAll(".doc .listingblock code"),t=document.createElement("i");t.classList="material-icons codeCopyButton",t.innerText="file_copy";for(var r=0;r<e.length;r++){var n=t.cloneNode(!0);e[r].insertBefore(n,e[r].childNodes[0])}new ClipboardJS(".material-icons.codeCopyButton",{text:function(e){var t=e.parentNode.innerText.split("\n");return t.splice(0,1),t.join("\n")}}).on("success",function(e){e.trigger._tippy.setContent("copied!")}),tippy.delegate(".doc .listingblock code",{target:".material-icons.codeCopyButton",content:"copy to clipboard",animation:"shift-away",theme:"clipboard",delay:[500,0],placement:"bottom",hideOnClick:!1,onHidden:function(e){e.setContent("copy to clipboard")}})}(),function(){"use strict";for(var s=document.querySelector(".doc .contents").querySelectorAll("h1, h2, h3, h4, h5, h6"),e=document.getElementById("toc"),t=0;t<s.length;t++){var r=s[t],n=document.createElement("li");n.classList.add("toc-item"),n.classList.add(r.tagName),n.innerText=r.innerText,n.setAttribute("headerId",r.getAttribute("id")),n.addEventListener("click",function(){var e,t=this.getAttribute("headerId");e="null"!=t?document.getElementById(t):document.querySelector("h1"),window.scroll({top:e.offsetTop+30,left:0,behavior:"smooth"}),e.classList.add("toc-highlight"),setTimeout(function(){e.classList.remove("toc-highlight")},2e3)}),e.appendChild(n)}var o=document.querySelector("article").parentNode;window.addEventListener("scroll",function(){for(var e,t=document.querySelector(".toc-item.active"),r=o.offsetTop+108.1,n=s.length-1;0<=n;n--){if(s[n].getBoundingClientRect().top<r){var i=s[n].getAttribute("id");e=document.querySelector('.toc-item[headerId="'+i+'"]');break}}e&&e!==t&&(e.classList.add("active"),t&&t.classList.remove("active"))})}(),function(){var t,c,l,e,r,d,h,p,f,m,y,v,g,x,L,w,E,S,b,Q,k,T,P,I,O,n,i,z=function(e){var t=new z.Builder;return t.pipeline.add(z.trimmer,z.stopWordFilter,z.stemmer),t.searchPipeline.add(z.stemmer),e.call(t,t),t.build()};function s(e){var t,r,n,i,s,o,a;if(e.length<3)return e;if("y"==(n=e.substr(0,1))&&(e=n.toUpperCase()+e.substr(1)),s=y,(i=m).test(e)?e=e.replace(i,"$1$2"):s.test(e)&&(e=e.replace(s,"$1$2")),s=g,(i=v).test(e)){var u=i.exec(e);(i=d).test(u[1])&&(i=x,e=e.replace(i,""))}else if(s.test(e)){t=(u=s.exec(e))[1],(s=f).test(t)&&(o=w,a=E,(s=L).test(e=t)?e+="e":o.test(e)?(i=x,e=e.replace(i,"")):a.test(e)&&(e+="e"))}if((i=S).test(e)&&(e=(t=(u=i.exec(e))[1])+"i"),(i=b).test(e)&&(t=(u=i.exec(e))[1],r=u[2],(i=d).test(t)&&(e=t+c[r])),(i=Q).test(e)&&(t=(u=i.exec(e))[1],r=u[2],(i=d).test(t)&&(e=t+l[r])),s=T,(i=k).test(e))t=(u=i.exec(e))[1],(i=h).test(t)&&(e=t);else if(s.test(e)){t=(u=s.exec(e))[1]+u[2],(s=h).test(t)&&(e=t)}return(i=P).test(e)&&(t=(u=i.exec(e))[1],s=p,o=O,((i=h).test(t)||s.test(t)&&!o.test(t))&&(e=t)),s=h,(i=I).test(e)&&s.test(e)&&(i=x,e=e.replace(i,"")),"y"==n&&(e=n.toLowerCase()+e.substr(1)),e}z.version="2.3.3",z.utils={},z.utils.warn=(t=this,function(e){t.console&&console.warn&&console.warn(e)}),z.utils.asString=function(e){return null==e?"":e.toString()},z.utils.clone=function(e){if(null==e)return e;for(var t=Object.create(null),r=Object.keys(e),n=0;n<r.length;n++){var i=r[n],s=e[i];if(Array.isArray(s))t[i]=s.slice();else{if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s)throw new TypeError("clone is not deep and does not support nested objects");t[i]=s}}return t},z.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r},z.FieldRef.joiner="/",z.FieldRef.fromString=function(e){var t=e.indexOf(z.FieldRef.joiner);if(-1===t)throw"malformed field ref string";var r=e.slice(0,t),n=e.slice(t+1);return new z.FieldRef(n,r,e)},z.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+z.FieldRef.joiner+this.docRef),this._stringValue},z.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0},z.Set.complete={intersect:function(e){return e},union:function(e){return e},contains:function(){return!0}},z.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},z.Set.prototype.contains=function(e){return!!this.elements[e]},z.Set.prototype.intersect=function(e){var t,r,n,i=[];if(e===z.Set.complete)return this;if(e===z.Set.empty)return e;r=this.length<e.length?(t=this,e):(t=e,this),n=Object.keys(t.elements);for(var s=0;s<n.length;s++){var o=n[s];o in r.elements&&i.push(o)}return new z.Set(i)},z.Set.prototype.union=function(e){return e===z.Set.complete?z.Set.complete:e===z.Set.empty?this:new z.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},z.idf=function(e,t){var r=0;for(var n in e)"_index"!=n&&(r+=Object.keys(e[n]).length);var i=(t-r+.5)/(r+.5);return Math.log(1+Math.abs(i))},z.Token=function(e,t){this.str=e||"",this.metadata=t||{}},z.Token.prototype.toString=function(){return this.str},z.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},z.Token.prototype.clone=function(e){return e=e||function(e){return e},new z.Token(e(this.str,this.metadata),this.metadata)},z.tokenizer=function(e,t){if(null==e||null==e)return[];if(Array.isArray(e))return e.map(function(e){return new z.Token(z.utils.asString(e).toLowerCase(),z.utils.clone(t))});for(var r=e.toString().trim().toLowerCase(),n=r.length,i=[],s=0,o=0;s<=n;s++){var a=s-o;if(r.charAt(s).match(z.tokenizer.separator)||s==n){if(0<a){var u=z.utils.clone(t)||{};u.position=[o,a],u.index=i.length,i.push(new z.Token(r.slice(o,s),u))}o=s+1}}return i},z.tokenizer.separator=/[\s\-]+/,z.Pipeline=function(){this._stack=[]},z.Pipeline.registeredFunctions=Object.create(null),z.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&z.utils.warn("Overwriting existing registered function: "+t),e.label=t,z.Pipeline.registeredFunctions[e.label]=e},z.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||z.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},z.Pipeline.load=function(e){var r=new z.Pipeline;return e.forEach(function(e){var t=z.Pipeline.registeredFunctions[e];if(!t)throw new Error("Cannot load unregistered function: "+e);r.add(t)}),r},z.Pipeline.prototype.add=function(){Array.prototype.slice.call(arguments).forEach(function(e){z.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)},this)},z.Pipeline.prototype.after=function(e,t){z.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");r+=1,this._stack.splice(r,0,t)},z.Pipeline.prototype.before=function(e,t){z.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");this._stack.splice(r,0,t)},z.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},z.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){for(var n=this._stack[r],i=[],s=0;s<e.length;s++){var o=n(e[s],s,e);if(void 0!==o&&""!==o)if(o instanceof Array)for(var a=0;a<o.length;a++)i.push(o[a]);else i.push(o)}e=i}return e},z.Pipeline.prototype.runString=function(e,t){var r=new z.Token(e,t);return this.run([r]).map(function(e){return e.toString()})},z.Pipeline.prototype.reset=function(){this._stack=[]},z.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return z.Pipeline.warnIfFunctionNotRegistered(e),e.label})},z.Vector=function(e){this._magnitude=0,this.elements=e||[]},z.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var t=0,r=this.elements.length/2,n=r-t,i=Math.floor(n/2),s=this.elements[2*i];1<n&&(s<e&&(t=i),e<s&&(r=i),s!=e);)n=r-t,i=t+Math.floor(n/2),s=this.elements[2*i];return s==e||e<s?2*i:s<e?2*(i+1):void 0},z.Vector.prototype.insert=function(e,t){this.upsert(e,t,function(){throw"duplicate index"})},z.Vector.prototype.upsert=function(e,t,r){this._magnitude=0;var n=this.positionForIndex(e);this.elements[n]==e?this.elements[n+1]=r(this.elements[n+1],t):this.elements.splice(n,0,e,t)},z.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var n=this.elements[r];e+=n*n}return this._magnitude=Math.sqrt(e)},z.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,n=e.elements,i=r.length,s=n.length,o=0,a=0,u=0,c=0;u<i&&c<s;)(o=r[u])<(a=n[c])?u+=2:a<o?c+=2:o==a&&(t+=r[u+1]*n[c+1],u+=2,c+=2);return t},z.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},z.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t];return e},z.Vector.prototype.toJSON=function(){return this.elements},z.stemmer=(c={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},l={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},e="[aeiouy]",r="[^aeiou][^aeiouy]*",d=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),h=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),p=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),f=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),m=/^(.+?)(ss|i)es$/,y=/^(.+?)([^s])s$/,v=/^(.+?)eed$/,g=/^(.+?)(ed|ing)$/,x=/.$/,L=/(at|bl|iz)$/,w=new RegExp("([^aeiouylsz])\\1$"),E=new RegExp("^"+r+e+"[^aeiouwxy]$"),S=/^(.+?[^aeiou])y$/,b=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,Q=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,k=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,T=/^(.+?)(s|t)(ion)$/,P=/^(.+?)e$/,I=/ll$/,O=new RegExp("^"+r+e+"[^aeiouwxy]$"),function(e){return e.update(s)}),z.Pipeline.registerFunction(z.stemmer,"stemmer"),z.generateStopWordFilter=function(e){var t=e.reduce(function(e,t){return e[t]=t,e},{});return function(e){if(e&&t[e.toString()]!==e.toString())return e}},z.stopWordFilter=z.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),z.Pipeline.registerFunction(z.stopWordFilter,"stopWordFilter"),z.trimmer=function(e){return e.update(function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")})},z.Pipeline.registerFunction(z.trimmer,"trimmer"),z.TokenSet=function(){this.final=!1,this.edges={},this.id=z.TokenSet._nextId,z.TokenSet._nextId+=1},z.TokenSet._nextId=1,z.TokenSet.fromArray=function(e){for(var t=new z.TokenSet.Builder,r=0,n=e.length;r<n;r++)t.insert(e[r]);return t.finish(),t.root},z.TokenSet.fromClause=function(e){return"editDistance"in e?z.TokenSet.fromFuzzyString(e.term,e.editDistance):z.TokenSet.fromString(e.term)},z.TokenSet.fromFuzzyString=function(e,t){for(var r=new z.TokenSet,n=[{node:r,editsRemaining:t,str:e}];n.length;){var i,s,o,a=n.pop();if(0<a.str.length)(s=a.str.charAt(0))in a.node.edges?i=a.node.edges[s]:(i=new z.TokenSet,a.node.edges[s]=i),1==a.str.length?i.final=!0:n.push({node:i,editsRemaining:a.editsRemaining,str:a.str.slice(1)});if(0<a.editsRemaining&&1<a.str.length)(s=a.str.charAt(1))in a.node.edges?o=a.node.edges[s]:(o=new z.TokenSet,a.node.edges[s]=o),a.str.length<=2?o.final=!0:n.push({node:o,editsRemaining:a.editsRemaining-1,str:a.str.slice(2)});if(0<a.editsRemaining&&1==a.str.length&&(a.node.final=!0),0<a.editsRemaining&&1<=a.str.length){if("*"in a.node.edges)var u=a.node.edges["*"];else{u=new z.TokenSet;a.node.edges["*"]=u}1==a.str.length?u.final=!0:n.push({node:u,editsRemaining:a.editsRemaining-1,str:a.str.slice(1)})}if(0<a.editsRemaining){if("*"in a.node.edges)var c=a.node.edges["*"];else{c=new z.TokenSet;a.node.edges["*"]=c}0==a.str.length?c.final=!0:n.push({node:c,editsRemaining:a.editsRemaining-1,str:a.str})}if(0<a.editsRemaining&&1<a.str.length){var l,d=a.str.charAt(0),h=a.str.charAt(1);h in a.node.edges?l=a.node.edges[h]:(l=new z.TokenSet,a.node.edges[h]=l),1==a.str.length?l.final=!0:n.push({node:l,editsRemaining:a.editsRemaining-1,str:d+a.str.slice(2)})}}return r},z.TokenSet.fromString=function(e){for(var t=new z.TokenSet,r=t,n=0,i=e.length;n<i;n++){var s=e[n],o=n==i-1;if("*"==s)(t.edges[s]=t).final=o;else{var a=new z.TokenSet;a.final=o,t.edges[s]=a,t=a}}return r},z.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),n=Object.keys(r.node.edges),i=n.length;r.node.final&&(r.prefix.charAt(0),e.push(r.prefix));for(var s=0;s<i;s++){var o=n[s];t.push({prefix:r.prefix.concat(o),node:r.node.edges[o]})}}return e},z.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,n=0;n<r;n++){var i=t[n];e=e+i+this.edges[i].id}return e},z.TokenSet.prototype.intersect=function(e){for(var t=new z.TokenSet,r=void 0,n=[{qNode:e,output:t,node:this}];n.length;){r=n.pop();for(var i=Object.keys(r.qNode.edges),s=i.length,o=Object.keys(r.node.edges),a=o.length,u=0;u<s;u++)for(var c=i[u],l=0;l<a;l++){var d=o[l];if(d==c||"*"==c){var h=r.node.edges[d],p=r.qNode.edges[c],f=h.final&&p.final,m=void 0;d in r.output.edges?(m=r.output.edges[d]).final=m.final||f:((m=new z.TokenSet).final=f,r.output.edges[d]=m),n.push({qNode:p,output:m,node:h})}}}return t},z.TokenSet.Builder=function(){this.previousWord="",this.root=new z.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},z.TokenSet.Builder.prototype.insert=function(e){var t,r=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var n=0;n<e.length&&n<this.previousWord.length&&e[n]==this.previousWord[n];n++)r++;this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child;for(n=r;n<e.length;n++){var i=new z.TokenSet,s=e[n];t.edges[s]=i,this.uncheckedNodes.push({parent:t,char:s,child:i}),t=i}t.final=!0,this.previousWord=e},z.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},z.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;e<=t;t--){var r=this.uncheckedNodes[t],n=r.child.toString();n in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[n]:(r.child._str=n,this.minimizedNodes[n]=r.child),this.uncheckedNodes.pop()}},z.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},z.Index.prototype.search=function(t){return this.query(function(e){new z.QueryParser(t,e).parse()})},z.Index.prototype.query=function(e){for(var t=new z.Query(this.fields),r=Object.create(null),n=Object.create(null),i=Object.create(null),s=Object.create(null),o=Object.create(null),a=0;a<this.fields.length;a++)n[this.fields[a]]=new z.Vector;e.call(t,t);for(a=0;a<t.clauses.length;a++){var u=t.clauses[a],c=null,l=z.Set.complete;c=u.usePipeline?this.pipeline.runString(u.term,{fields:u.fields}):[u.term];for(var d=0;d<c.length;d++){var h=c[d];u.term=h;var p=z.TokenSet.fromClause(u),f=this.tokenSet.intersect(p).toArray();if(0===f.length&&u.presence===z.Query.presence.REQUIRED){for(var m=0;m<u.fields.length;m++){s[C=u.fields[m]]=z.Set.empty}break}for(var y=0;y<f.length;y++){var v=f[y],g=this.invertedIndex[v],x=g._index;for(m=0;m<u.fields.length;m++){var L=g[C=u.fields[m]],w=Object.keys(L),E=v+"/"+C,S=new z.Set(w);if(u.presence==z.Query.presence.REQUIRED&&(l=l.union(S),void 0===s[C]&&(s[C]=z.Set.complete)),u.presence!=z.Query.presence.PROHIBITED){if(n[C].upsert(x,u.boost,function(e,t){return e+t}),!i[E]){for(var b=0;b<w.length;b++){var Q,k=w[b],T=new z.FieldRef(k,C),P=L[k];void 0===(Q=r[T])?r[T]=new z.MatchData(v,C,P):Q.add(v,C,P)}i[E]=!0}}else void 0===o[C]&&(o[C]=z.Set.empty),o[C]=o[C].union(S)}}}if(u.presence===z.Query.presence.REQUIRED)for(m=0;m<u.fields.length;m++){s[C=u.fields[m]]=s[C].intersect(l)}}var I=z.Set.complete,O=z.Set.empty;for(a=0;a<this.fields.length;a++){var C;s[C=this.fields[a]]&&(I=I.intersect(s[C])),o[C]&&(O=O.union(o[C]))}var R=Object.keys(r),N=[],F=Object.create(null);if(t.isNegated()){R=Object.keys(this.fieldVectors);for(a=0;a<R.length;a++){T=R[a];var _=z.FieldRef.fromString(T);r[T]=new z.MatchData}}for(a=0;a<R.length;a++){var j=(_=z.FieldRef.fromString(R[a])).docRef;if(I.contains(j)&&!O.contains(j)){var D,A=this.fieldVectors[_],q=n[_.fieldName].similarity(A);if(void 0!==(D=F[j]))D.score+=q,D.matchData.combine(r[_]);else{var B={ref:j,score:q,matchData:r[_]};F[j]=B,N.push(B)}}}return N.sort(function(e,t){return t.score-e.score})},z.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map(function(e){return[e,this.invertedIndex[e]]},this),t=Object.keys(this.fieldVectors).map(function(e){return[e,this.fieldVectors[e].toJSON()]},this);return{version:z.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},z.Index.load=function(e){var t={},r={},n=e.fieldVectors,i={},s=e.invertedIndex,o=new z.TokenSet.Builder,a=z.Pipeline.load(e.pipeline);e.version!=z.version&&z.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+z.version+"' does not match serialized index '"+e.version+"'");for(var u=0;u<n.length;u++){var c=(d=n[u])[0],l=d[1];r[c]=new z.Vector(l)}for(u=0;u<s.length;u++){var d,h=(d=s[u])[0],p=d[1];o.insert(h),i[h]=p}return o.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=i,t.tokenSet=o.root,t.pipeline=a,new z.Index(t)},z.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=z.tokenizer,this.pipeline=new z.Pipeline,this.searchPipeline=new z.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},z.Builder.prototype.ref=function(e){this._ref=e},z.Builder.prototype.field=function(e,t){if(/\//.test(e))throw new RangeError("Field '"+e+"' contains illegal character '/'");this._fields[e]=t||{}},z.Builder.prototype.b=function(e){this._b=e<0?0:1<e?1:e},z.Builder.prototype.k1=function(e){this._k1=e},z.Builder.prototype.add=function(e,t){var r=e[this._ref],n=Object.keys(this._fields);this._documents[r]=t||{},this.documentCount+=1;for(var i=0;i<n.length;i++){var s=n[i],o=this._fields[s].extractor,a=o?o(e):e[s],u=this.tokenizer(a,{fields:[s]}),c=this.pipeline.run(u),l=new z.FieldRef(r,s),d=Object.create(null);this.fieldTermFrequencies[l]=d,this.fieldLengths[l]=0,this.fieldLengths[l]+=c.length;for(var h=0;h<c.length;h++){var p=c[h];if(null==d[p]&&(d[p]=0),d[p]+=1,null==this.invertedIndex[p]){var f=Object.create(null);f._index=this.termIndex,this.termIndex+=1;for(var m=0;m<n.length;m++)f[n[m]]=Object.create(null);this.invertedIndex[p]=f}null==this.invertedIndex[p][s][r]&&(this.invertedIndex[p][s][r]=Object.create(null));for(var y=0;y<this.metadataWhitelist.length;y++){var v=this.metadataWhitelist[y],g=p.metadata[v];null==this.invertedIndex[p][s][r][v]&&(this.invertedIndex[p][s][r][v]=[]),this.invertedIndex[p][s][r][v].push(g)}}}},z.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},n={},i=0;i<t;i++){var s=z.FieldRef.fromString(e[i]),o=s.fieldName;n[o]||(n[o]=0),n[o]+=1,r[o]||(r[o]=0),r[o]+=this.fieldLengths[s]}var a=Object.keys(this._fields);for(i=0;i<a.length;i++){var u=a[i];r[u]=r[u]/n[u]}this.averageFieldLength=r},z.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,n=Object.create(null),i=0;i<r;i++){for(var s=z.FieldRef.fromString(t[i]),o=s.fieldName,a=this.fieldLengths[s],u=new z.Vector,c=this.fieldTermFrequencies[s],l=Object.keys(c),d=l.length,h=this._fields[o].boost||1,p=this._documents[s.docRef].boost||1,f=0;f<d;f++){var m,y,v,g=l[f],x=c[g],L=this.invertedIndex[g]._index;void 0===n[g]?(m=z.idf(this.invertedIndex[g],this.documentCount),n[g]=m):m=n[g],y=m*((this._k1+1)*x)/(this._k1*(1-this._b+this._b*(a/this.averageFieldLength[o]))+x),y*=h,y*=p,v=Math.round(1e3*y)/1e3,u.insert(L,v)}e[s]=u}this.fieldVectors=e},z.Builder.prototype.createTokenSet=function(){this.tokenSet=z.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},z.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new z.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},z.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},z.MatchData=function(e,t,r){for(var n=Object.create(null),i=Object.keys(r||{}),s=0;s<i.length;s++){var o=i[s];n[o]=r[o].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=n)},z.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var n=t[r],i=Object.keys(e.metadata[n]);null==this.metadata[n]&&(this.metadata[n]=Object.create(null));for(var s=0;s<i.length;s++){var o=i[s],a=Object.keys(e.metadata[n][o]);null==this.metadata[n][o]&&(this.metadata[n][o]=Object.create(null));for(var u=0;u<a.length;u++){var c=a[u];null==this.metadata[n][o][c]?this.metadata[n][o][c]=e.metadata[n][o][c]:this.metadata[n][o][c]=this.metadata[n][o][c].concat(e.metadata[n][o][c])}}}},z.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][t]=r);if(t in this.metadata[e])for(var n=Object.keys(r),i=0;i<n.length;i++){var s=n[i];s in this.metadata[e][t]?this.metadata[e][t][s]=this.metadata[e][t][s].concat(r[s]):this.metadata[e][t][s]=r[s]}else this.metadata[e][t]=r},z.Query=function(e){this.clauses=[],this.allFields=e},z.Query.wildcard=new String("*"),z.Query.wildcard.NONE=0,z.Query.wildcard.LEADING=1,z.Query.wildcard.TRAILING=2,z.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},z.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=z.Query.wildcard.NONE),e.wildcard&z.Query.wildcard.LEADING&&e.term.charAt(0)!=z.Query.wildcard&&(e.term="*"+e.term),e.wildcard&z.Query.wildcard.TRAILING&&e.term.slice(-1)!=z.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=z.Query.presence.OPTIONAL),this.clauses.push(e),this},z.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=z.Query.presence.PROHIBITED)return!1;return!0},z.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach(function(e){this.term(e,z.utils.clone(t))},this),this;var r=t||{};return r.term=e.toString(),this.clause(r),this},z.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},z.QueryParseError.prototype=new Error,z.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},z.QueryLexer.prototype.run=function(){for(var e=z.QueryLexer.lexText;e;)e=e(this)},z.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,n=0;n<this.escapeCharPositions.length;n++)r=this.escapeCharPositions[n],e.push(this.str.slice(t,r)),t=r+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},z.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},z.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},z.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return z.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},z.QueryLexer.prototype.width=function(){return this.pos-this.start},z.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},z.QueryLexer.prototype.backup=function(){--this.pos},z.QueryLexer.prototype.acceptDigitRun=function(){for(var e,t;47<(t=(e=this.next()).charCodeAt(0))&&t<58;);e!=z.QueryLexer.EOS&&this.backup()},z.QueryLexer.prototype.more=function(){return this.pos<this.length},z.QueryLexer.EOS="EOS",z.QueryLexer.FIELD="FIELD",z.QueryLexer.TERM="TERM",z.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",z.QueryLexer.BOOST="BOOST",z.QueryLexer.PRESENCE="PRESENCE",z.QueryLexer.lexField=function(e){return e.backup(),e.emit(z.QueryLexer.FIELD),e.ignore(),z.QueryLexer.lexText},z.QueryLexer.lexTerm=function(e){if(1<e.width()&&(e.backup(),e.emit(z.QueryLexer.TERM)),e.ignore(),e.more())return z.QueryLexer.lexText},z.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(z.QueryLexer.EDIT_DISTANCE),z.QueryLexer.lexText},z.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(z.QueryLexer.BOOST),z.QueryLexer.lexText},z.QueryLexer.lexEOS=function(e){0<e.width()&&e.emit(z.QueryLexer.TERM)},z.QueryLexer.termSeparator=z.tokenizer.separator,z.QueryLexer.lexText=function(e){for(;;){var t=e.next();if(t==z.QueryLexer.EOS)return z.QueryLexer.lexEOS;if(92!=t.charCodeAt(0)){if(":"==t)return z.QueryLexer.lexField;if("~"==t)return e.backup(),0<e.width()&&e.emit(z.QueryLexer.TERM),z.QueryLexer.lexEditDistance;if("^"==t)return e.backup(),0<e.width()&&e.emit(z.QueryLexer.TERM),z.QueryLexer.lexBoost;if("+"==t&&1===e.width())return e.emit(z.QueryLexer.PRESENCE),z.QueryLexer.lexText;if("-"==t&&1===e.width())return e.emit(z.QueryLexer.PRESENCE),z.QueryLexer.lexText;if(t.match(z.QueryLexer.termSeparator))return z.QueryLexer.lexTerm}else e.escapeCharacter()}},z.QueryParser=function(e,t){this.lexer=new z.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},z.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=z.QueryParser.parseClause;e;)e=e(this);return this.query},z.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},z.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},z.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},z.QueryParser.parseClause=function(e){var t=e.peekLexeme();if(null!=t)switch(t.type){case z.QueryLexer.PRESENCE:return z.QueryParser.parsePresence;case z.QueryLexer.FIELD:return z.QueryParser.parseField;case z.QueryLexer.TERM:return z.QueryParser.parseTerm;default:var r="expected either a field or a term, found "+t.type;throw 1<=t.str.length&&(r+=" with value '"+t.str+"'"),new z.QueryParseError(r,t.start,t.end)}},z.QueryParser.parsePresence=function(e){var t=e.consumeLexeme();if(null!=t){switch(t.str){case"-":e.currentClause.presence=z.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=z.Query.presence.REQUIRED;break;default:var r="unrecognised presence operator'"+t.str+"'";throw new z.QueryParseError(r,t.start,t.end)}var n=e.peekLexeme();if(null==n){r="expecting term or field, found nothing";throw new z.QueryParseError(r,t.start,t.end)}switch(n.type){case z.QueryLexer.FIELD:return z.QueryParser.parseField;case z.QueryLexer.TERM:return z.QueryParser.parseTerm;default:r="expecting term or field, found '"+n.type+"'";throw new z.QueryParseError(r,n.start,n.end)}}},z.QueryParser.parseField=function(e){var t=e.consumeLexeme();if(null!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map(function(e){return"'"+e+"'"}).join(", "),n="unrecognised field '"+t.str+"', possible fields: "+r;throw new z.QueryParseError(n,t.start,t.end)}e.currentClause.fields=[t.str];var i=e.peekLexeme();if(null==i){n="expecting term, found nothing";throw new z.QueryParseError(n,t.start,t.end)}switch(i.type){case z.QueryLexer.TERM:return z.QueryParser.parseTerm;default:n="expecting term, found '"+i.type+"'";throw new z.QueryParseError(n,i.start,i.end)}}},z.QueryParser.parseTerm=function(e){var t=e.consumeLexeme();if(null!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1);var r=e.peekLexeme();if(null!=r)switch(r.type){case z.QueryLexer.TERM:return e.nextClause(),z.QueryParser.parseTerm;case z.QueryLexer.FIELD:return e.nextClause(),z.QueryParser.parseField;case z.QueryLexer.EDIT_DISTANCE:return z.QueryParser.parseEditDistance;case z.QueryLexer.BOOST:return z.QueryParser.parseBoost;case z.QueryLexer.PRESENCE:return e.nextClause(),z.QueryParser.parsePresence;default:var n="Unexpected lexeme type '"+r.type+"'";throw new z.QueryParseError(n,r.start,r.end)}else e.nextClause()}},z.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="edit distance must be numeric";throw new z.QueryParseError(n,t.start,t.end)}e.currentClause.editDistance=r;var i=e.peekLexeme();if(null!=i)switch(i.type){case z.QueryLexer.TERM:return e.nextClause(),z.QueryParser.parseTerm;case z.QueryLexer.FIELD:return e.nextClause(),z.QueryParser.parseField;case z.QueryLexer.EDIT_DISTANCE:return z.QueryParser.parseEditDistance;case z.QueryLexer.BOOST:return z.QueryParser.parseBoost;case z.QueryLexer.PRESENCE:return e.nextClause(),z.QueryParser.parsePresence;default:n="Unexpected lexeme type '"+i.type+"'";throw new z.QueryParseError(n,i.start,i.end)}else e.nextClause()}},z.QueryParser.parseBoost=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="boost must be numeric";throw new z.QueryParseError(n,t.start,t.end)}e.currentClause.boost=r;var i=e.peekLexeme();if(null!=i)switch(i.type){case z.QueryLexer.TERM:return e.nextClause(),z.QueryParser.parseTerm;case z.QueryLexer.FIELD:return e.nextClause(),z.QueryParser.parseField;case z.QueryLexer.EDIT_DISTANCE:return z.QueryParser.parseEditDistance;case z.QueryLexer.BOOST:return z.QueryParser.parseBoost;case z.QueryLexer.PRESENCE:return e.nextClause(),z.QueryParser.parsePresence;default:n="Unexpected lexeme type '"+i.type+"'";throw new z.QueryParseError(n,i.start,i.end)}else e.nextClause()}},n=this,i=function(){return z},"function"==typeof define&&define.amd?define(i):"object"==typeof exports?module.exports=i():n.lunr=i()}(),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".mdc-icon-button.search"),t=document.querySelector(".mdc-icon-button.search-arrow-back"),r=document.querySelector(".mdc-icon-button.search-clear-query");function n(){var e=document.getElementById("search-input");e.value="",e.dispatchEvent(new KeyboardEvent("keydown"))}function i(e){var t=e.keyCode||e.which;return 13===t||32===t}function s(){var e=document.querySelector("main"),t=document.querySelector("div.nav-container"),r=document.querySelector(".search-result-dropdown-menu"),n=document.querySelector(".toolbar");r.classList.contains("hide")?(r.classList.remove("hide"),e.classList.add("hide"),t.classList.add("hide"),n.classList.add("hide")):(r.classList.add("hide"),e.classList.remove("hide"),1024<window.innerWidth?t.classList.remove("hide"):n.classList.remove("hide"));var i=document.querySelector(".mdc-top-app-bar__row"),s=document.querySelector(".mdc-top-app-bar__row.sdp-top-app-bar__search");i.classList.contains("hide")?(i.classList.remove("hide"),s.classList.add("hide")):(i.classList.add("hide"),s.classList.remove("hide"))}e.addEventListener("click",s),e.addEventListener("keypress",function(e){i(e)&&s()}),"ontouchstart"in window&&e.addEventListener("ontouchstart",s),t.addEventListener("click",s),t.addEventListener("keypress",function(e){i(e)&&s()}),"ontouchstart"in window&&t.addEventListener("ontouchstart",s),r.addEventListener("click",n),r.addEventListener("keypress",function(e){i(e)&&n()}),"ontouchstart"in window&&r.addEventListener("ontouchstart",n)}),window.antoraLunr=function(a){var u=document.getElementById("search-input"),c=document.createElement("div"),e=document.querySelector(".body");function l(e,t){var r=[],n=t[0],i=t[1],s=e.text,o=document.createElement("span");o.classList.add("search-result-highlight"),o.innerText=s.substr(n,i);var a=n+i,u=s.length-1,c=u<a+15?u:a+15,l=n-15<0?0:n-15;return 0===n&&a===u?r.push(o):0===n?(r.push(o),r.push(document.createTextNode(s.substr(a,c)))):a===u?(r.push(document.createTextNode(s.substr(0,n))),r.push(o)):(r.push(document.createTextNode("..."+s.substr(l,n-l))),r.push(o),r.push(document.createTextNode(s.substr(a,c-a)+"..."))),r}function d(t,e,r){var n,i=[],s=r[0],o=r[1],a=document.createElement("span");a.classList.add("search-result-highlight"),n=t?e.titles.filter(function(e){return e.id===t})[0].text:e.title,a.innerText=n.substr(s,o);var u=s+o,c=n.length-1;return 0===s&&u===c?i.push(a):0===s?(i.push(a),i.push(document.createTextNode(n.substr(o,c)))):u===c?(i.push(document.createTextNode(n.substr(0,s))),i.push(a)):(i.push(document.createTextNode(n.substr(0,s))),i.push(a),i.push(document.createTextNode(n.substr(u,c)))),i}function h(e,s,o){e.forEach(function(e){var t,r=e.ref;r.includes("#")&&(t=r.substring(r.indexOf("#")+1),r=r.replace("#"+t,""));var n=s[r],i=function(e,t,r){var n=[];for(var i in e){var s=e[i];for(var o in s){var a=s[o];if(a.position){var u=a.position[0];"title"===o?n=d(t,r,u):"text"===o&&(n=l(r,u))}}}return n}(e.matchData.metadata,t,n);o.appendChild(function(e,t,r){var n=document.createElement("div");n.classList.add("search-result-document-title"),n.innerText=e.title;var i=document.createElement("div");i.classList.add("search-result-document-hit");var s=document.createElement("a");s.href=t.ref,i.appendChild(s),r.forEach(function(e){s.appendChild(e)});var o=document.createElement("div");return o.classList.add("search-result-item"),o.appendChild(n),o.appendChild(i),o}(n,e,i))})}function p(e,t,r){for(;c.firstChild;)c.removeChild(c.firstChild);if(""!==r.trim()){var n,i,s,o=(i=r,0<(s=(n=e).search(i)).length||0<(s=n.search(i+"*")).length?s:s=n.search("*"+i+"*")),a=document.createElement("div");a.classList.add("search-result-dataset"),c.appendChild(a),0<o.length?h(o,t,a):a.appendChild(function(e){var t=document.createElement("div");t.classList.add("search-result-item");var r=document.createElement("div");r.classList.add("search-result-document-hit");var n=document.createElement("strong");return n.innerText='No results found for query "'+e+'"',r.appendChild(n),t.appendChild(r),t}(r))}}return c.classList.add("search-result-dropdown-menu"),c.classList.add("hide"),e.insertBefore(c,e.firstChild),{init:function(e){var n,i,s,o,t=Object.assign({index:a.Index.load(e.index),store:e.store}),r=(n=function(){p(t.index,t.store,u.value)},i=100,function(){var e=this,t=arguments,r=s&&!o;clearTimeout(o),o=setTimeout(function(){o=null,s||n.apply(e,t)},i),r&&n.apply(e,t)});u.addEventListener("keydown",r)}}}(window.lunr);
//# sourceMappingURL=site.js.map
