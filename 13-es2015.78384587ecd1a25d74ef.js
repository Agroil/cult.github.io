(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"Rx/Z":function(t,n,o){"use strict";o.r(n),o.d(n,"PostModule",function(){return C});var e=o("ofXK"),i=o("8UQ/"),c=o("fXoL"),r=o("tyNb"),s=o("jhN1"),a=o("jSPT"),b=o("YYwF");function p(t,n){if(1&t&&(c.Pb(0,"div"),c.Pb(1,"p"),c.xc(2),c.Ob(),c.Ob()),2&t){const t=c.ac().$implicit;c.yb(2),c.yc(t.data)}}function l(t,n){if(1&t&&(c.Pb(0,"div"),c.Lb(1,"img",15),c.Ob()),2&t){const t=c.ac().$implicit;c.yb(1),c.gc("src",t.data,c.sc)}}function g(t,n){if(1&t&&(c.Pb(0,"div",12),c.Pb(1,"div",13),c.wc(2,p,3,1,"div",14),c.wc(3,l,2,1,"div",14),c.Ob(),c.Ob()),2&t){const t=n.$implicit;c.yb(1),c.gc("ngSwitch",t.tag),c.yb(1),c.gc("ngSwitchCase","p"),c.yb(1),c.gc("ngSwitchCase","img")}}function d(t,n){if(1&t&&c.Lb(0,"input",22),2&t){const t=n.index;c.hc("id","s-",t+1,""),c.gc("checked",0===t)}}function f(t,n){if(1&t&&(c.Lb(0,"iframe",25),c.bc(1,"safe")),2&t){const t=c.ac().$implicit;c.gc("src",c.dc(1,1,t.url,"resourceUrl"),c.rc)}}const h=function(t){return{"background-image":t}};function y(t,n){if(1&t&&(c.Nb(0),c.Pb(1,"li",23),c.wc(2,f,2,4,"iframe",24),c.Ob(),c.Mb()),2&t){const t=n.$implicit;c.yb(1),c.gc("ngStyle",c.jc(2,h,"url("+t.url+")")),c.yb(1),c.gc("ngIf","video"===t.tag)}}function u(t,n){if(1&t&&(c.Nb(0),c.Pb(1,"span"),c.Lb(2,"label",26),c.Ob(),c.Pb(3,"span"),c.Lb(4,"label",26),c.Ob(),c.Mb()),2&t){const t=c.ac().index;c.yb(1),c.Bb("s-nav-",t+1," right"),c.yb(1),c.Bb("s-nav-",t+1," right"),c.hc("for","s-",t+2,""),c.yb(1),c.Bb("s-nav-",t+2," left"),c.yb(1),c.Bb("s-nav-",t+2," left"),c.hc("for","s-",t+1,"")}}function m(t,n){if(1&t&&(c.Nb(0),c.wc(1,u,5,14,"ng-container",16),c.Mb()),2&t){const t=n.index,o=c.ac(2).$implicit;c.yb(1),c.gc("ngIf",t<(null==o.slides?null:o.slides.length)-1)}}function O(t,n){if(1&t&&(c.Pb(0,"section"),c.Pb(1,"div"),c.Pb(2,"div",17),c.Pb(3,"div",18),c.wc(4,d,1,2,"input",19),c.Pb(5,"ul",20),c.wc(6,y,3,4,"ng-container",9),c.Ob(),c.Pb(7,"div",21),c.wc(8,m,2,1,"ng-container",9),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t){const t=c.ac().$implicit;c.yb(4),c.gc("ngForOf",t.slides),c.yb(2),c.gc("ngForOf",t.slides),c.yb(2),c.gc("ngForOf",t.slides)}}function P(t,n){if(1&t&&(c.Nb(0),c.wc(1,O,9,3,"section",16),c.Mb()),2&t){const t=n.$implicit;c.yb(1),c.gc("ngIf","slider"===t.tag)}}let v=(()=>{class t{constructor(t,n,o,e,i){this.route=t,this.router=n,this.postsService=o,this.titleService=e,this.metaService=i}ngOnInit(){const t=this.route.snapshot.paramMap.get("id");if(this.postData=this.postsService.getPost(t),this.postData){const{pageTitle:t,metaKeywords:n,metaDescritpion:o}=this.postData;t&&this.titleService.setTitle(t),Array.isArray(n)&&n.length&&this.metaService.addTag({name:"keywords",content:n.join(",")}),o&&this.metaService.addTag({name:"description",content:o})}}}return t.\u0275fac=function(n){return new(n||t)(c.Kb(r.a),c.Kb(r.f),c.Kb(i.a),c.Kb(s.d),c.Kb(s.c))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-post"]],decls:21,vars:11,consts:[[1,"post"],[1,"post-header",3,"ngStyle"],[1,"container"],[1,"row"],[1,"col"],[1,"hvr-sweep-to-right",3,"click"],[1,"post-body"],[1,"col-12"],["class","post-body-content",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["videoPopUp",""],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen","loading","lazy",1,"frame",3,"src"],[1,"post-body-content"],[3,"ngSwitch"],[4,"ngSwitchCase"],["loading","lazy","alt","post image",3,"src"],[4,"ngIf"],[1,"outer-wrapper","mt-0"],["role","slider",1,"s-wrap","s-type-1","mb-0"],["type","radio","name","slider-control",3,"id","checked",4,"ngFor","ngForOf"],[1,"s-content"],[1,"s-nav"],["type","radio","name","slider-control",3,"id","checked"],[1,"s-item",3,"ngStyle"],["class","frame","frameBorder","0","loading","lazy",3,"src",4,"ngIf"],["frameBorder","0","loading","lazy",1,"frame",3,"src"],[3,"for"]],template:function(t,n){if(1&t){const t=c.Qb();c.Pb(0,"div",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"div",3),c.Pb(4,"div",4),c.Pb(5,"button",5),c.Wb("click",function(){return c.pc(t),c.nc(18).open()}),c.xc(6," PLAY VIDEO "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(7,"div",6),c.Pb(8,"div",2),c.Pb(9,"div",3),c.Pb(10,"div",7),c.Pb(11,"h4"),c.xc(12),c.Ob(),c.Pb(13,"h1"),c.xc(14),c.Ob(),c.wc(15,g,4,3,"div",8),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.wc(16,P,2,1,"ng-container",9),c.Ob(),c.Pb(17,"app-video-popup",null,10),c.Lb(19,"iframe",11),c.bc(20,"safe"),c.Ob()}2&t&&(c.yb(1),c.gc("ngStyle",c.jc(9,h,"url("+n.postData.imageUrl+")")),c.yb(11),c.yc(n.postData.subtitle),c.yb(2),c.yc(n.postData.title),c.yb(1),c.gc("ngForOf",n.postData.content),c.yb(1),c.gc("ngForOf",n.postData.content),c.yb(3),c.gc("src",c.dc(20,6,n.postData.videoUrl,"resourceUrl"),c.rc))},directives:[e.l,e.j,a.a,e.m,e.n,e.k],pipes:[b.a],styles:[".post-header[_ngcontent-%COMP%]{position:relative;height:420px;outline:1px solid hsla(0,0%,100%,.2);overflow:hidden;background-size:cover;background-repeat:no-repeat;background-position:50%}.post-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:gilroy-bold;margin-top:230px;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff}.post-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;top:240px;outline:none;width:280px;height:72px;border:1px solid #fff;font-weight:600;font-size:24px;line-height:24px;text-align:center;letter-spacing:1px;text-transform:uppercase;color:#fff;background-color:transparent;margin-top:48px;background-color:hsla(0,0%,58.8%,.6)}.post-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#000}.post-body[_ngcontent-%COMP%]{padding-top:60px;background-color:#fff;position:relative}.post-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:15px;font-weight:bolder}.post-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-weight:300;font-size:14px}.post-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .post-body[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-family:gilroy;font-style:normal;letter-spacing:1px;text-transform:capitalize}.post-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:15px;margin-bottom:15px;font-weight:700;font-size:64px;display:flex;align-items:center}.post-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:40px;font-family:gilroy;font-style:normal;font-weight:400;font-size:17px;letter-spacing:1px}.s-wrap[_ngcontent-%COMP%]{margin-bottom:0}"]}),t})();var w=o("AKxs"),x=o("+G0P");const M=[{path:"",component:v}];let C=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(n){return new(n||t)},imports:[[e.c,r.j.forChild(M),w.a,x.a]]}),t})()}}]);