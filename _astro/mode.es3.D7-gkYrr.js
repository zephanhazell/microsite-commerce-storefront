import{C as n}from"./codemirror.es.B24Fd7BT.js";import{o as i,q as e,r as a,u as r}from"./GraphiQLEditor.B0Etn40v.js";import{r as s}from"./mode-indent.es.DRhmi37H.js";import"./codemirror.es2.D1PI0zxW.js";import"./index.yJI251sl.js";import"./preload-helper.BiBI96sQ.js";n.defineMode("graphql-results",t=>{const u=i({eatWhitespace:l=>l.eatSpace(),lexRules:o,parseRules:c,editorConfig:{tabSize:t.tabSize}});return{config:t,startState:u.startState,token:u.token,indent:s,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}});const o={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},c={Document:[e("{"),a("Entry",e(",")),e("}")],Entry:[r("String","def"),e(":"),"Value"],Value(t){switch(t.kind){case"Number":return"NumberValue";case"String":return"StringValue";case"Punctuation":switch(t.value){case"[":return"ListValue";case"{":return"ObjectValue"}return null;case"Keyword":switch(t.value){case"true":case"false":return"BooleanValue";case"null":return"NullValue"}return null}},NumberValue:[r("Number","number")],StringValue:[r("String","string")],BooleanValue:[r("Keyword","builtin")],NullValue:[r("Keyword","keyword")],ListValue:[e("["),a("Value",e(",")),e("]")],ObjectValue:[e("{"),a("ObjectField",e(",")),e("}")],ObjectField:[r("String","property"),e(":"),"Value"]};
