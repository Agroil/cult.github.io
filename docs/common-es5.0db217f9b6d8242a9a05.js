function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+G0P":function(e,r,t){"use strict";t.d(r,"a",(function(){return s}));var n=t("fXoL"),s=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(r){return new(r||e)}}),e}()},YYwF:function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var n=t("fXoL"),s=t("jhN1"),i=function(){var e=function(){function e(r){_classCallCheck(this,e),this.sanitizer=r}return _createClass(e,[{key:"transform",value:function(e,r){switch(r){case"html":return this.sanitizer.bypassSecurityTrustHtml(e);case"style":return this.sanitizer.bypassSecurityTrustStyle(e);case"script":return this.sanitizer.bypassSecurityTrustScript(e);case"url":return this.sanitizer.bypassSecurityTrustUrl(e);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(e);default:throw new Error("Invalid safe type specified: "+r)}}}]),e}();return e.\u0275fac=function(r){return new(r||e)(n.Mb(s.b))},e.\u0275pipe=n.Lb({name:"safe",type:e,pure:!0}),e}()}}]);