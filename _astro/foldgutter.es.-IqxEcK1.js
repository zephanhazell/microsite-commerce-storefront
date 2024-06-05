import{c as P,h as A}from"./codemirror.es2.D1PI0zxW.js";var j=Object.defineProperty,d=(o,e)=>j(o,"name",{value:e,configurable:!0});function U(o,e){for(var t=0;t<e.length;t++){const n=e[t];if("string"!=typeof n&&!Array.isArray(n))for(const e in n)if("default"!==e&&!(e in o)){const t=Object.getOwnPropertyDescriptor(n,e);t&&Object.defineProperty(o,e,t.get?t:{enumerable:!0,get:()=>n[e]})}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}d(U,"_mergeNamespaces");var E,L={exports:{}},V={exports:{}};function S(){return E||(E=1,function(o){function e(e,n,i,f){if(i&&i.call){var a=i;i=null}else a=r(e,i,"rangeFinder");"number"==typeof n&&(n=o.Pos(n,0));var l=r(e,i,"minFoldSize");function u(o){var t=a(e,n);if(!t||t.to.line-t.from.line<l)return null;if("fold"===f)return t;for(var r=e.findMarksAt(t.from),i=0;i<r.length;++i)if(r[i].__isFold){if(!o)return null;t.cleared=!0,r[i].clear()}return t}d(u,"getRange");var c=u(!0);if(r(e,i,"scanUp"))for(;!c&&n.line>e.firstLine();)n=o.Pos(n.line-1,0),c=u(!1);if(c&&!c.cleared&&"unfold"!==f){var s=t(e,i,c);o.on(s,"mousedown",(function(e){p.clear(),o.e_preventDefault(e)}));var p=e.markText(c.from,c.to,{replacedWith:s,clearOnEnter:r(e,i,"clearOnEnter"),__isFold:!0});p.on("clear",(function(t,n){o.signal(e,"unfold",e,t,n)})),o.signal(e,"fold",e,c.from,c.to)}}function t(o,e,t){var n=r(o,e,"widget");if("function"==typeof n&&(n=n(t.from,t.to)),"string"==typeof n){var i=document.createTextNode(n);(n=document.createElement("span")).appendChild(i),n.className="CodeMirror-foldmarker"}else n&&(n=n.cloneNode(!0));return n}d(e,"doFold"),d(t,"makeWidget"),o.newFoldFunction=function(o,t){return function(n,r){e(n,r,{rangeFinder:o,widget:t})}},o.defineExtension("foldCode",(function(o,t,n){e(this,o,t,n)})),o.defineExtension("isFolded",(function(o){for(var e=this.findMarksAt(o),t=0;t<e.length;++t)if(e[t].__isFold)return!0})),o.commands.toggleFold=function(o){o.foldCode(o.getCursor())},o.commands.fold=function(o){o.foldCode(o.getCursor(),null,"fold")},o.commands.unfold=function(o){o.foldCode(o.getCursor(),{scanUp:!1},"unfold")},o.commands.foldAll=function(e){e.operation((function(){for(var t=e.firstLine(),n=e.lastLine();t<=n;t++)e.foldCode(o.Pos(t,0),{scanUp:!1},"fold")}))},o.commands.unfoldAll=function(e){e.operation((function(){for(var t=e.firstLine(),n=e.lastLine();t<=n;t++)e.foldCode(o.Pos(t,0),{scanUp:!1},"unfold")}))},o.registerHelper("fold","combine",(function(){var o=Array.prototype.slice.call(arguments,0);return function(e,t){for(var n=0;n<o.length;++n){var r=o[n](e,t);if(r)return r}}})),o.registerHelper("fold","auto",(function(o,e){for(var t=o.getHelpers(e,"fold"),n=0;n<t.length;n++){var r=t[n](o,e);if(r)return r}}));var n={rangeFinder:o.fold.auto,widget:"↔",minFoldSize:0,scanUp:!1,clearOnEnter:!0};function r(o,e,t){if(e&&void 0!==e[t])return e[t];var r=o.options.foldOptions;return r&&void 0!==r[t]?r[t]:n[t]}o.defineOption("foldOptions",null),d(r,"getOption"),o.defineExtension("foldOption",(function(o,e){return r(this,o,e)}))}(P())),V.exports}d(S,"requireFoldcode"),function(o){o.defineOption("foldGutter",!1,(function(e,r,i){i&&i!=o.Init&&(e.clearGutter(e.state.foldGutter.options.gutter),e.state.foldGutter=null,e.off("gutterClick",u),e.off("changes",c),e.off("viewportChange",s),e.off("fold",p),e.off("unfold",p),e.off("swapDoc",c)),r&&(e.state.foldGutter=new t(n(r)),l(e),e.on("gutterClick",u),e.on("changes",c),e.on("viewportChange",s),e.on("fold",p),e.on("unfold",p),e.on("swapDoc",c))}));var e=o.Pos;function t(o){this.options=o,this.from=this.to=0}function n(o){return!0===o&&(o={}),null==o.gutter&&(o.gutter="CodeMirror-foldgutter"),null==o.indicatorOpen&&(o.indicatorOpen="CodeMirror-foldgutter-open"),null==o.indicatorFolded&&(o.indicatorFolded="CodeMirror-foldgutter-folded"),o}function r(o,t){for(var n=o.findMarks(e(t,0),e(t+1,0)),r=0;r<n.length;++r)if(n[r].__isFold){var i=n[r].find(-1);if(i&&i.line===t)return n[r]}}function i(o){if("string"==typeof o){var e=document.createElement("div");return e.className=o+" CodeMirror-guttermarker-subtle",e}return o.cloneNode(!0)}function f(o,t,n){var f=o.state.foldGutter.options,d=t-1,l=o.foldOption(f,"minFoldSize"),u=o.foldOption(f,"rangeFinder"),c="string"==typeof f.indicatorFolded&&a(f.indicatorFolded),s="string"==typeof f.indicatorOpen&&a(f.indicatorOpen);o.eachLine(t,n,(function(t){++d;var n=null,a=t.gutterMarkers;if(a&&(a=a[f.gutter]),r(o,d)){if(c&&a&&c.test(a.className))return;n=i(f.indicatorFolded)}else{var p=e(d,0),g=u&&u(o,p);if(g&&g.to.line-g.from.line>=l){if(s&&a&&s.test(a.className))return;n=i(f.indicatorOpen)}}!n&&!a||o.setGutterMarker(t,f.gutter,n)}))}function a(o){return new RegExp("(^|\\s)"+o+"(?:$|\\s)\\s*")}function l(o){var e=o.getViewport(),t=o.state.foldGutter;t&&(o.operation((function(){f(o,e.from,e.to)})),t.from=e.from,t.to=e.to)}function u(o,t,n){var i=o.state.foldGutter;if(i){var f=i.options;if(n==f.gutter){var d=r(o,t);d?d.clear():o.foldCode(e(t,0),f)}}}function c(o){var e=o.state.foldGutter;if(e){var t=e.options;e.from=e.to=0,clearTimeout(e.changeUpdate),e.changeUpdate=setTimeout((function(){l(o)}),t.foldOnChangeTimeSpan||600)}}function s(o){var e=o.state.foldGutter;if(e){var t=e.options;clearTimeout(e.changeUpdate),e.changeUpdate=setTimeout((function(){var t=o.getViewport();e.from==e.to||t.from-e.to>20||e.from-t.to>20?l(o):o.operation((function(){t.from<e.from&&(f(o,t.from,e.from),e.from=t.from),t.to>e.to&&(f(o,e.to,t.to),e.to=t.to)}))}),t.updateViewportTimeSpan||400)}}function p(o,e){var t=o.state.foldGutter;if(t){var n=e.line;n>=t.from&&n<t.to&&f(o,n,n+1)}}d(t,"State"),d(n,"parseOptions"),d(r,"isFolded"),d(i,"marker"),d(f,"updateFoldInfo"),d(a,"classTest"),d(l,"updateInViewport"),d(u,"onGutterClick"),d(c,"onChange"),d(s,"onViewportChange"),d(p,"onFold")}(P(),S());var T=L.exports;const z=A(T),H=U({__proto__:null,default:z},[T]);export{H as f};