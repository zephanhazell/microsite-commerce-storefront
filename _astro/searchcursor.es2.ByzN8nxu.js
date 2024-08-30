import{c as B}from"./codemirror.es2.D1PI0zxW.js";var z,A=Object.defineProperty,u=(e,t)=>A(e,"name",{value:t,configurable:!0}),W={exports:{}};function q(){return z||(z=1,function(e){var t,n,r=e.Pos;function i(e){return e.flags??(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}function o(e,t){for(var n=i(e),r=n,o=0;o<t.length;o++)-1==r.indexOf(t.charAt(o))&&(r+=t.charAt(o));return n==r?e:new RegExp(e.source,r)}function h(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}function l(e,t,n){t=o(t,"g");for(var i=n.line,h=n.ch,l=e.lastLine();i<=l;i++,h=0){t.lastIndex=h;var c=e.getLine(i),s=t.exec(c);if(s)return{from:r(i,s.index),to:r(i,s.index+s[0].length),match:s}}}function c(e,t,n){if(!h(t))return l(e,t,n);t=o(t,"gm");for(var i,c=1,s=n.line,a=e.lastLine();s<=a;){for(var u=0;u<c&&!(s>a);u++){var f=e.getLine(s++);i=null==i?f:i+"\n"+f}c*=2,t.lastIndex=n.ch;var g=t.exec(i);if(g){var d=i.slice(0,g.index).split("\n"),m=g[0].split("\n"),p=n.line+d.length-1,v=d[d.length-1].length;return{from:r(p,v),to:r(p+m.length-1,1==m.length?v+m[0].length:m[m.length-1].length),match:g}}}}function s(e,t,n){for(var r,i=0;i<=e.length;){t.lastIndex=i;var o=t.exec(e);if(!o)break;var h=o.index+o[0].length;if(h>e.length-n)break;(!r||h>r.index+r[0].length)&&(r=o),i=o.index+1}return r}function a(e,t,n){t=o(t,"g");for(var i=n.line,h=n.ch,l=e.firstLine();i>=l;i--,h=-1){var c=e.getLine(i),a=s(c,t,h<0?0:c.length-h);if(a)return{from:r(i,a.index),to:r(i,a.index+a[0].length),match:a}}}function f(e,t,n){if(!h(t))return a(e,t,n);t=o(t,"gm");for(var i,l=1,c=e.getLine(n.line).length-n.ch,u=n.line,f=e.firstLine();u>=f;){for(var g=0;g<l&&u>=f;g++){var d=e.getLine(u--);i=null==i?d:d+"\n"+i}l*=2;var m=s(i,t,c);if(m){var p=i.slice(0,m.index).split("\n"),v=m[0].split("\n"),x=u+p.length,L=p[p.length-1].length;return{from:r(x,L),to:r(x+v.length-1,1==v.length?L+v[0].length:v[v.length-1].length),match:m}}}}function g(e,t,n,r){if(e.length==t.length)return n;for(var i=0,o=n+Math.max(0,e.length-t.length);;){if(i==o)return i;var h=i+o>>1,l=r(e.slice(0,h)).length;if(l==n)return h;l>n?o=h:i=h+1}}function d(e,i,o,h){if(!i.length)return null;var l=h?t:n,c=l(i).split(/\r|\n\r?/);e:for(var s=o.line,a=o.ch,u=e.lastLine()+1-c.length;s<=u;s++,a=0){var f=e.getLine(s).slice(a),d=l(f);if(1==c.length){var m=d.indexOf(c[0]);if(-1==m)continue e;return o=g(f,d,m,l)+a,{from:r(s,g(f,d,m,l)+a),to:r(s,g(f,d,m+c[0].length,l)+a)}}var p=d.length-c[0].length;if(d.slice(p)==c[0]){for(var v=1;v<c.length-1;v++)if(l(e.getLine(s+v))!=c[v])continue e;var x=e.getLine(s+c.length-1),L=l(x),F=c[c.length-1];if(L.slice(0,F.length)==F)return{from:r(s,g(f,d,p,l)+a),to:r(s+c.length-1,g(x,L,F.length,l))}}}}function m(e,i,o,h){if(!i.length)return null;var l=h?t:n,c=l(i).split(/\r|\n\r?/);e:for(var s=o.line,a=o.ch,u=e.firstLine()-1+c.length;s>=u;s--,a=-1){var f=e.getLine(s);a>-1&&(f=f.slice(0,a));var d=l(f);if(1==c.length){var m=d.lastIndexOf(c[0]);if(-1==m)continue e;return{from:r(s,g(f,d,m,l)),to:r(s,g(f,d,m+c[0].length,l))}}var p=c[c.length-1];if(d.slice(0,p.length)==p){var v=1;for(o=s-c.length+1;v<c.length-1;v++)if(l(e.getLine(o+v))!=c[v])continue e;var x=e.getLine(s+1-c.length),L=l(x);if(L.slice(L.length-c[0].length)==c[0])return{from:r(s+1-c.length,g(x,L,x.length-c[0].length,l)),to:r(s,g(f,d,p.length,l))}}}}function p(e,t,n,i){var h;this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=e,n=n?e.clipPos(n):r(0,0),this.pos={from:n,to:n},"object"==typeof i?h=i.caseFold:(h=i,i=null),"string"==typeof t?(null==h&&(h=!1),this.matches=function(n,r){return(n?m:d)(e,t,r,h)}):(t=o(t,"gm"),i&&!1===i.multiline?this.matches=function(n,r){return(n?a:l)(e,t,r)}:this.matches=function(n,r){return(n?f:c)(e,t,r)})}u(i,"regexpFlags"),u(o,"ensureFlags"),u(h,"maybeMultiline"),u(l,"searchRegexpForward"),u(c,"searchRegexpForwardMultiline"),u(s,"lastMatchIn"),u(a,"searchRegexpBackward"),u(f,"searchRegexpBackwardMultiline"),String.prototype.normalize?(t=u((function(e){return e.normalize("NFD").toLowerCase()}),"doFold"),n=u((function(e){return e.normalize("NFD")}),"noFold")):(t=u((function(e){return e.toLowerCase()}),"doFold"),n=u((function(e){return e}),"noFold")),u(g,"adjustPos"),u(d,"searchStringForward"),u(m,"searchStringBackward"),u(p,"SearchCursor"),p.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){var n=this.doc.clipPos(t?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(n=r(n.line,n.ch),t?(n.ch--,n.ch<0&&(n.line--,n.ch=(this.doc.getLine(n.line)||"").length)):(n.ch++,n.ch>(this.doc.getLine(n.line)||"").length&&(n.ch=0,n.line++)),0!=e.cmpPos(n,this.doc.clipPos(n))))return this.atOccurrence=!1;var i=this.matches(t,n);if(this.afterEmptyMatch=i&&0==e.cmpPos(i.from,i.to),i)return this.pos=i,this.atOccurrence=!0,this.pos.match||!0;var o=r(t?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:o,to:o},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,n){if(this.atOccurrence){var i=e.splitLines(t);this.doc.replaceRange(i,this.pos.from,this.pos.to,n),this.pos.to=r(this.pos.from.line+i.length-1,i[i.length-1].length+(1==i.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",(function(e,t,n){return new p(this.doc,e,t,n)})),e.defineDocExtension("getSearchCursor",(function(e,t,n){return new p(this,e,t,n)})),e.defineExtension("selectMatches",(function(t,n){for(var r=[],i=this.getSearchCursor(t,this.getCursor("from"),n);i.findNext()&&!(e.cmpPos(i.to(),this.getCursor("to"))>0);)r.push({anchor:i.from(),head:i.to()});r.length&&this.setSelections(r,0)}))}(B())),W.exports}u(q,"requireSearchcursor");export{q as K};