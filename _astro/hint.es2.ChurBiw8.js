import{C as f}from"./codemirror.es.B24Fd7BT.js";import{s as L}from"./forEachState.es.CB2-vmvs.js";import"./codemirror.es2.D1PI0zxW.js";import{e as h,f as b,i as T,m,h as j,d as D}from"./GraphiQLEditor.BSiTHEQ9.js";import"./index.yJI251sl.js";import"./preload-helper.BiBI96sQ.js";var N=Object.defineProperty,c=(e,t)=>N(e,"name",{value:t,configurable:!0});function u(e,t,n){const i=x(n,d(t.string));if(!i)return;const r=null!==t.type&&/"|\w/.test(t.string[0])?t.start:t.end;return{list:i,from:{line:e.line,ch:r},to:{line:e.line,ch:t.end}}}function x(e,t){if(!t)return y(e,(e=>!e.isDeprecated));return y(y(e.map((e=>({proximity:V(d(e.text),t),entry:e}))),(e=>e.proximity<=2)),(e=>!e.entry.isDeprecated)).sort(((e,t)=>(e.entry.isDeprecated?1:0)-(t.entry.isDeprecated?1:0)||e.proximity-t.proximity||e.entry.text.length-t.entry.text.length)).map((e=>e.entry))}function y(e,t){const n=e.filter(t);return 0===n.length?e:n}function d(e){return e.toLowerCase().replaceAll(/\W/g,"")}function V(e,t){let n=v(t,e);return e.length>t.length&&(n-=e.length-t.length-1,n+=0===e.indexOf(t)?0:.5),n}function v(e,t){let n,i;const r=[],s=e.length,o=t.length;for(n=0;n<=s;n++)r[n]=[n];for(i=1;i<=o;i++)r[0][i]=i;for(n=1;n<=s;n++)for(i=1;i<=o;i++){const s=e[n-1]===t[i-1]?0:1;r[n][i]=Math.min(r[n-1][i]+1,r[n][i-1]+1,r[n-1][i-1]+s),n>1&&i>1&&e[n-1]===t[i-2]&&e[n-2]===t[i-1]&&(r[n][i]=Math.min(r[n][i],r[n-2][i-2]+s))}return r[s][o]}function O(e,t,n){const i="Invalid"===t.state.kind?t.state.prevState:t.state,{kind:r,step:s}=i;if("Document"===r&&0===s)return u(e,t,[{text:"{"}]);const{variableToType:o}=n;if(!o)return;const l=k(o,t.state);if("Document"===r||"Variable"===r&&0===s){return u(e,t,Object.keys(o).map((e=>({text:`"${e}": `,type:o[e]}))))}if(("ObjectValue"===r||"ObjectField"===r&&0===s)&&l.fields){return u(e,t,Object.keys(l.fields).map((e=>l.fields[e])).map((e=>({text:`"${e.name}": `,type:e.type,description:e.description}))))}if("StringValue"===r||"NumberValue"===r||"BooleanValue"===r||"NullValue"===r||"ListValue"===r&&1===s||"ObjectField"===r&&2===s||"Variable"===r&&2===s){const n=l.type?h(l.type):void 0;if(n instanceof b)return u(e,t,[{text:"{"}]);if(n instanceof T){return u(e,t,n.getValues().map((e=>({text:`"${e.name}"`,type:n,description:e.description}))))}if(n===m)return u(e,t,[{text:"true",type:m,description:"Not false."},{text:"false",type:m,description:"Not true."}])}}function k(e,t){const n={type:null,fields:null};return L(t,(t=>{switch(t.kind){case"Variable":n.type=e[t.name];break;case"ListValue":{const e=n.type?j(n.type):void 0;n.type=e instanceof D?e.ofType:null;break}case"ObjectValue":{const e=n.type?h(n.type):void 0;n.fields=e instanceof b?e.getFields():null;break}case"ObjectField":{const e=t.name&&n.fields?n.fields[t.name]:null;n.type=e?.type;break}}})),n}c(u,"hintList"),c(x,"filterAndSortList"),c(y,"filterNonEmpty"),c(d,"normalizeText"),c(V,"getProximity"),c(v,"lexicalDistance"),f.registerHelper("hint","graphql-variables",((e,t)=>{const n=e.getCursor(),i=e.getTokenAt(n),r=O(n,i,t);return null!=r&&r.list&&r.list.length>0&&(r.from=f.Pos(r.from.line,r.from.ch),r.to=f.Pos(r.to.line,r.to.ch),f.signal(e,"hasCompletion",e,r,i)),r})),c(O,"getVariablesHint"),c(k,"getTypeInfo");