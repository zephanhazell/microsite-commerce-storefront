import{c as N,h as q}from"./codemirror.es2.D1PI0zxW.js";var F=Object.defineProperty,f=(e,t)=>F(e,"name",{value:t,configurable:!0});function z(e,t){for(var r=0;r<t.length;r++){const n=t[r];if("string"!=typeof n&&!Array.isArray(n))for(const t in n)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(n,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>n[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}f(z,"_mergeNamespaces");var J={exports:{}};!function(e){var t={pairs:"()[]{}''\"\"",closeBefore:")]}'\":;>",triples:"",explode:"[]{}"},r=e.Pos;function n(e,r){return"pairs"==r&&"string"==typeof e?e:"object"==typeof e&&null!=e[r]?e[r]:t[r]}e.defineOption("autoCloseBrackets",!1,(function(t,r,o){o&&o!=e.Init&&(t.removeKeyMap(a),t.state.closeBrackets=null),r&&(i(n(r,"pairs")),t.state.closeBrackets=r,t.addKeyMap(a))})),f(n,"getOption");var a={Backspace:l,Enter:c};function i(e){for(var t=0;t<e.length;t++){var r=e.charAt(t),n="'"+r+"'";a[n]||(a[n]=o(r))}}function o(e){return function(t){return d(t,e)}}function s(e){var t=e.state.closeBrackets;return!t||t.override?t:e.getModeAt(e.getCursor()).closeBrackets||t}function l(t){var a=s(t);if(!a||t.getOption("disableInput"))return e.Pass;for(var i=n(a,"pairs"),o=t.listSelections(),l=0;l<o.length;l++){if(!o[l].empty())return e.Pass;var c=p(t,o[l].head);if(!c||i.indexOf(c)%2!=0)return e.Pass}for(l=o.length-1;l>=0;l--){var f=o[l].head;t.replaceRange("",r(f.line,f.ch-1),r(f.line,f.ch+1),"+delete")}}function c(t){var r=s(t),a=r&&n(r,"explode");if(!a||t.getOption("disableInput"))return e.Pass;for(var i=t.listSelections(),o=0;o<i.length;o++){if(!i[o].empty())return e.Pass;var l=p(t,i[o].head);if(!l||a.indexOf(l)%2!=0)return e.Pass}t.operation((function(){var e=t.lineSeparator()||"\n";t.replaceSelection(e+e,null),h(t,-1),i=t.listSelections();for(var r=0;r<i.length;r++){var n=i[r].head.line;t.indentLine(n,null,!0),t.indentLine(n+1,null,!0)}}))}function h(e,t){for(var r=[],n=e.listSelections(),a=0,i=0;i<n.length;i++){var o=n[i];o.head==e.getCursor()&&(a=i);var s=o.head.ch||t>0?{line:o.head.line,ch:o.head.ch+t}:{line:o.head.line-1};r.push({anchor:s,head:s})}e.setSelections(r,a)}function u(t){var n=e.cmpPos(t.anchor,t.head)>0;return{anchor:new r(t.anchor.line,t.anchor.ch+(n?-1:1)),head:new r(t.head.line,t.head.ch+(n?1:-1))}}function d(t,a){var i=s(t);if(!i||t.getOption("disableInput"))return e.Pass;var o=n(i,"pairs"),l=o.indexOf(a);if(-1==l)return e.Pass;for(var c,f=n(i,"closeBefore"),d=n(i,"triples"),p=o.charAt(l+1)==a,v=t.listSelections(),b=l%2==0,P=0;P<v.length;P++){var S,y=v[P],O=y.head,k=t.getRange(O,r(O.line,O.ch+1));if(b&&!y.empty())S="surround";else if(!p&&b||k!=a)if(p&&O.ch>1&&d.indexOf(a)>=0&&t.getRange(r(O.line,O.ch-2),O)==a+a){if(O.ch>2&&/\bstring/.test(t.getTokenTypeAt(r(O.line,O.ch-2))))return e.Pass;S="addFour"}else if(p){var m=0==O.ch?" ":t.getRange(r(O.line,O.ch-1),O);if(e.isWordChar(k)||m==a||e.isWordChar(m))return e.Pass;S="both"}else{if(!b||!(0===k.length||/\s/.test(k)||f.indexOf(k)>-1))return e.Pass;S="both"}else S=p&&g(t,O)?"both":d.indexOf(a)>=0&&t.getRange(O,r(O.line,O.ch+3))==a+a+a?"skipThree":"skip";if(c){if(c!=S)return e.Pass}else c=S}var x=l%2?o.charAt(l-1):a,A=l%2?a:o.charAt(l+1);t.operation((function(){if("skip"==c)h(t,1);else if("skipThree"==c)h(t,3);else if("surround"==c){for(var e=t.getSelections(),r=0;r<e.length;r++)e[r]=x+e[r]+A;for(t.replaceSelections(e,"around"),e=t.listSelections().slice(),r=0;r<e.length;r++)e[r]=u(e[r]);t.setSelections(e)}else"both"==c?(t.replaceSelection(x+A,null),t.triggerElectric(x+A),h(t,-1)):"addFour"==c&&(t.replaceSelection(x+x+x+x,"before"),h(t,1))}))}function p(e,t){var n=e.getRange(r(t.line,t.ch-1),r(t.line,t.ch+1));return 2==n.length?n:null}function g(e,t){var n=e.getTokenAt(r(t.line,t.ch+1));return/\bstring/.test(n.type)&&n.start==t.ch&&(0==t.ch||!/\bstring/.test(e.getTokenTypeAt(t)))}f(i,"ensureBound"),i(t.pairs+"`"),f(o,"handler"),f(s,"getConfig"),f(l,"handleBackspace"),f(c,"handleEnter"),f(h,"moveSel"),f(u,"contractSelection"),f(d,"handleChar"),f(p,"charsAround"),f(g,"stringStartsAfter")}(N());var D=J.exports;const Q=q(D),$=z({__proto__:null,default:Q},[D]);export{$ as c};