!function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+G0P":function(t,n,i){"use strict";i.d(n,"a",function(){return s});var r=i("fXoL"),s=function(){var t=function t(){e(this,t)};return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(n){return new(n||t)}}),t}()},"4NX6":function(t,n,i){"use strict";i.d(n,"a",function(){return o});var r=i("ofXK"),s=i("+G0P"),a=i("fXoL"),o=function(){var t=function t(){e(this,t)};return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(n){return new(n||t)},imports:[[r.c,s.a]]}),t}()},Knxr:function(t,i,r){"use strict";r.d(i,"a",function(){return p});var s=r("AytR"),a=r("fXoL"),o=r("ofXK"),c=r("YYwF");function u(t,n){if(1&t&&(a.Lb(0,"source",3),a.bc(1,"safe")),2&t){var e=n.$implicit,i=a.ac().$implicit;a.gc("media","(max-width: "+e.max+"px) and (min-width: "+e.min+"px)")("srcset",a.dc(1,3,"./assets/images/"+i.category+"/"+i.name+(i.suffix||e.suffix)+"."+e.format,"resourceUrl"),a.sc)("type","image/"+e.format)}}function f(t,n){if(1&t&&(a.Pb(0,"picture"),a.wc(1,u,2,6,"source",1),a.Lb(2,"img",2),a.bc(3,"safe"),a.Ob()),2&t){var e=n.$implicit,i=a.ac();a.yb(1),a.gc("ngForOf",i.responsiveImagesConfiguration),a.yb(1),a.hc("alt","",e.name," "),a.gc("src",a.dc(3,3,"./assets/images/"+e.category+"/"+e.name+"_xl.png","resourceUrl"),a.sc)}}var p=function(){var t=function(){function t(){e(this,t),this.responsiveImagesConfiguration=s.a.responsiveImagesConfiguration}return n(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-picture"]],inputs:{imagesData:"imagesData"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"media","srcset","type",4,"ngFor","ngForOf"],["width","auto","height","auto",3,"alt","src"],[3,"media","srcset","type"]],template:function(t,n){1&t&&a.wc(0,f,4,6,"picture",0),2&t&&a.gc("ngForOf",n.imagesData)},directives:[o.j],pipes:[c.a],styles:["[_nghost-%COMP%]{display:inline-block;overflow:hidden;position:absolute;width:100%;height:100%}[_nghost-%COMP%]   picture[_ngcontent-%COMP%]{position:relative;top:50%;left:50%;transform:translate3d(-50%,-50%,0)}[_nghost-%COMP%]   picture[_ngcontent-%COMP%], [_nghost-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:100%;min-width:100%;width:auto;height:auto;max-width:none;max-height:none;display:inline-block}"]}),t}()},YYwF:function(t,i,r){"use strict";r.d(i,"a",function(){return o});var s=r("fXoL"),a=r("jhN1"),o=function(){var t=function(){function t(n){e(this,t),this.sanitizer=n}return n(t,[{key:"transform",value:function(t,n){switch(n){case"html":return this.sanitizer.bypassSecurityTrustHtml(t);case"style":return this.sanitizer.bypassSecurityTrustStyle(t);case"script":return this.sanitizer.bypassSecurityTrustScript(t);case"url":return this.sanitizer.bypassSecurityTrustUrl(t);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(t);default:throw new Error("Invalid safe type specified: "+n)}}}]),t}();return t.\u0275fac=function(n){return new(n||t)(s.Kb(a.b))},t.\u0275pipe=s.Jb({name:"safe",type:t,pure:!0}),t}()}}])}();