import{C as H}from"./codemirror.es.B24Fd7BT.js";import"./codemirror.es2.D1PI0zxW.js";import{c as B,d as J,f as P,i as U,n as D}from"./GraphiQLEditor.B0Etn40v.js";import"./index.yJI251sl.js";import"./preload-helper.BiBI96sQ.js";var M=Object.defineProperty,n=(e,n)=>M(e,"name",{value:n,configurable:!0});function L(e){d=e,x=e.length,s=u=g=-1,a(),N();const n=S();return p("EOF"),n}let d,x,s,u,g,t,l;function S(){const e=s,n=[];if(p("{"),!v("}")){do{n.push(V())}while(v(","));p("}")}return{kind:"Object",start:e,end:g,members:n}}function V(){const e=s,n="String"===l?j():null;p("String"),p(":");const t=T();return{kind:"Member",start:e,end:g,key:n,value:t}}function G(){const e=s,n=[];if(p("["),!v("]")){do{n.push(T())}while(v(","));p("]")}return{kind:"Array",start:e,end:g,values:n}}function T(){switch(l){case"[":return G();case"{":return S();case"String":case"Number":case"Boolean":case"Null":const e=j();return N(),e}p("Value")}function j(){return{kind:l,start:s,end:u,value:JSON.parse(d.slice(s,u))}}function p(e){if(l===e)return void N();let n;if("EOF"===l)n="[end of file]";else if(u-s>1)n="`"+d.slice(s,u)+"`";else{const e=d.slice(s).match(/^.+?\b/);n="`"+(e?e[0]:d[s])+"`"}throw m(`Expected ${e} but found ${n}.`)}n(L,"jsonParse"),n(S,"parseObj"),n(V,"parseMember"),n(G,"parseArr"),n(T,"parseVal"),n(j,"curToken"),n(p,"expect");class F extends Error{constructor(e,n){super(e),this.position=n}}function m(e){return new F(e,{start:s,end:u})}function v(e){if(l===e)return N(),!0}function a(){return u<x&&(u++,t=u===x?0:d.charCodeAt(u)),t}function N(){for(g=u;9===t||10===t||13===t||32===t;)a();if(0!==t){switch(s=u,t){case 34:return l="String",Q();case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return l="Number",I();case 102:if("false"!==d.slice(s,s+5))break;return u+=4,a(),void(l="Boolean");case 110:if("null"!==d.slice(s,s+4))break;return u+=3,a(),void(l="Null");case 116:if("true"!==d.slice(s,s+4))break;return u+=3,a(),void(l="Boolean")}l=d[s],a()}else l="EOF"}function Q(){for(a();34!==t&&t>31;)if(92===t)switch(t=a(),t){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:a();break;case 117:a(),k(),k(),k(),k();break;default:throw m("Bad character escape sequence.")}else{if(u===x)throw m("Unterminated string.");a()}if(34!==t)throw m("Unterminated string.");a()}function k(){if(t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102)return a();throw m("Expected hexadecimal digit.")}function I(){45===t&&a(),48===t?a():w(),46===t&&(a(),w()),(69===t||101===t)&&(t=a(),(43===t||45===t)&&a(),w())}function w(){if(t<48||t>57)throw m("Expected decimal digit.");do{a()}while(t>=48&&t<=57)}function A(e,n,t){var r;const a=[];for(const s of t.members)if(s){const t=null===(r=s.key)||void 0===r?void 0:r.value,i=n[t];if(i)for(const[n,t]of y(i,s.value))a.push(O(e,n,t));else a.push(O(e,s.key,`Variable "$${t}" does not appear in any GraphQL query.`))}return a}function y(e,n){if(!e||!n)return[];if(e instanceof B)return"Null"===n.kind?[[n,`Type "${e}" is non-nullable and cannot be null.`]]:y(e.ofType,n);if("Null"===n.kind)return[];if(e instanceof J){const t=e.ofType;if("Array"===n.kind){return $(n.values||[],(e=>y(t,e)))}return y(t,n)}if(e instanceof P){if("Object"!==n.kind)return[[n,`Type "${e}" must be an Object.`]];const t=Object.create(null),r=$(n.members,(n=>{var r;const a=null===(r=n?.key)||void 0===r?void 0:r.value;t[a]=!0;const s=e.getFields()[a];if(!s)return[[n.key,`Type "${e}" does not have a field "${a}".`]];return y(s?s.type:void 0,n.value)}));for(const a of Object.keys(e.getFields())){const s=e.getFields()[a];!t[a]&&s.type instanceof B&&!s.defaultValue&&r.push([n,`Object of type "${e}" is missing required field "${a}".`])}return r}return"Boolean"===e.name&&"Boolean"!==n.kind||"String"===e.name&&"String"!==n.kind||"ID"===e.name&&"Number"!==n.kind&&"String"!==n.kind||"Float"===e.name&&"Number"!==n.kind||"Int"===e.name&&("Number"!==n.kind||(0|n.value)!==n.value)||(e instanceof U||e instanceof D)&&("String"!==n.kind&&"Number"!==n.kind&&"Boolean"!==n.kind&&"Null"!==n.kind||q(e.parseValue(n.value)))?[[n,`Expected value of type "${e}".`]]:[]}function O(e,n,t){return{message:t,severity:"error",type:"validation",from:e.posFromIndex(n.start),to:e.posFromIndex(n.end)}}function q(e){return null==e||e!=e}function $(e,n){return Array.prototype.concat.apply([],e.map(n))}n(F,"JSONSyntaxError"),n(m,"syntaxError"),n(v,"skip"),n(a,"ch"),n(N,"lex"),n(Q,"readString"),n(k,"readHex"),n(I,"readNumber"),n(w,"readDigits"),H.registerHelper("lint","graphql-variables",((e,n,t)=>{if(!e)return[];let r;try{r=L(e)}catch(e){if(e instanceof F)return[O(t,e.position,e.message)];throw e}const{variableToType:a}=n;return a?A(t,a,r):[]})),n(A,"validateVariables"),n(y,"validateValue"),n(O,"lintError"),n(q,"isNullish"),n($,"mapCat");