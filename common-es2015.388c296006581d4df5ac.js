(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+G0P":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("fXoL");let s=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(e){return new(e||t)}}),t})()},"4NX6":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("ofXK"),s=n("+G0P"),r=n("fXoL");let a=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},imports:[[i.c,s.a]]}),t})()},Knxr:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var i=n("AytR"),s=n("fXoL"),r=n("ofXK"),a=n("YYwF");function c(t,e){if(1&t&&(s.Lb(0,"source",3),s.bc(1,"safe")),2&t){const t=e.$implicit,n=s.ac().$implicit;s.gc("media","(max-width: "+t.max+"px) and (min-width: "+t.min+"px)")("srcset",s.dc(1,3,"./assets/images/"+n.category+"/"+n.name+(n.suffix||t.suffix)+"."+t.format,"resourceUrl"),s.sc)("type","image/"+t.format)}}function o(t,e){if(1&t&&(s.Pb(0,"picture"),s.wc(1,c,2,6,"source",1),s.Lb(2,"img",2),s.bc(3,"safe"),s.Ob()),2&t){const t=e.$implicit,n=s.ac();s.yb(1),s.gc("ngForOf",n.responsiveImagesConfiguration),s.yb(1),s.hc("alt","",t.name," "),s.gc("src",s.dc(3,3,"./assets/images/"+t.category+"/"+t.name+"_xl.png","resourceUrl"),s.sc)}}let u=(()=>{class t{constructor(){this.responsiveImagesConfiguration=i.a.responsiveImagesConfiguration}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Eb({type:t,selectors:[["app-picture"]],inputs:{imagesData:"imagesData"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"media","srcset","type",4,"ngFor","ngForOf"],["width","auto","height","auto",3,"alt","src"],[3,"media","srcset","type"]],template:function(t,e){1&t&&s.wc(0,o,4,6,"picture",0),2&t&&s.gc("ngForOf",e.imagesData)},directives:[r.j],pipes:[a.a],styles:["[_nghost-%COMP%]{display:inline-block;overflow:hidden;position:absolute;width:100%;height:100%}[_nghost-%COMP%]   picture[_ngcontent-%COMP%]{position:relative;top:50%;left:50%;transform:translate3d(-50%,-50%,0)}[_nghost-%COMP%]   picture[_ngcontent-%COMP%], [_nghost-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:100%;min-width:100%;width:auto;height:auto;max-width:none;max-height:none;display:inline-block}"]}),t})()},YYwF:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("fXoL"),s=n("jhN1");let r=(()=>{class t{constructor(t){this.sanitizer=t}transform(t,e){switch(e){case"html":return this.sanitizer.bypassSecurityTrustHtml(t);case"style":return this.sanitizer.bypassSecurityTrustStyle(t);case"script":return this.sanitizer.bypassSecurityTrustScript(t);case"url":return this.sanitizer.bypassSecurityTrustUrl(t);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(t);default:throw new Error("Invalid safe type specified: "+e)}}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(s.b))},t.\u0275pipe=i.Jb({name:"safe",type:t,pure:!0}),t})()}}]);