(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{QLEG:function(t,n,e){"use strict";e.r(n),e.d(n,"BlogModule",function(){return k});var o=e("ofXK"),a=e("Z48m"),i=e("Od8d"),c=e("fXoL"),r=e("tyNb"),g=e("Knxr"),l=e("YYwF");const s=function(t){return["/article",t]},b=function(t){return{pageTitle:t}},d=function(t){return{active:t}};function h(t,n){if(1&t){const t=c.Qb();c.Pb(0,"a",13),c.Wb("touchstart",function(){return c.pc(t),c.ac().$implicit.active=1})("touchend",function(){return c.pc(t),c.ac().$implicit.active=0})("mouseleave",function(){return c.pc(t),c.ac().$implicit.active=0}),c.Pb(1,"div",14),c.Lb(2,"app-picture",15),c.Ob(),c.Pb(3,"div",16),c.Pb(4,"h2"),c.xc(5),c.Ob(),c.Pb(6,"p"),c.xc(7),c.Ob(),c.Pb(8,"p"),c.Pb(9,"span",17),c.xc(10),c.Ob(),c.Pb(11,"span",18),c.xc(12),c.Ob(),c.Ob(),c.Ob(),c.Ob()}if(2&t){const t=c.ac().$implicit;c.gc("routerLink",c.jc(8,s,t.urlTitle))("state",c.jc(10,b,t.pageTitle))("ngClass",c.jc(12,d,t.active)),c.yb(2),c.gc("imagesData",t.imagePreview),c.yb(3),c.yc(t.title),c.yb(2),c.yc(t.description),c.yb(3),c.yc(t.date),c.yb(2),c.yc(t.category)}}function f(t,n){if(1&t&&(c.Lb(0,"iframe",19),c.bc(1,"safe")),2&t){const t=c.ac().$implicit;c.gc("src",c.dc(1,1,t.videoUrl,"resourceUrl"),c.rc)}}const P=function(){return[3,4]},O=function(t,n,e,o,a){return{"col-lg-4 col-xl-4":t,"col-lg-6 col-xl-6":n,"col-12":e,"my-4":o,"mt-4":a}};function p(t,n){if(1&t&&(c.Pb(0,"div",10),c.wc(1,h,13,14,"a",11),c.wc(2,f,2,4,"iframe",12),c.Ob()),2&t){const t=n.$implicit,e=n.index;c.gc("ngClass",c.lc(4,O,!t.videoUrl&&(e<3||4<e),!t.videoUrl&&c.ic(3,P).includes(e),t.videoUrl,!t.videoUrl,t.videoUrl)),c.yb(1),c.gc("ngIf",!t.videoUrl),c.yb(1),c.gc("ngIf",t.videoUrl)}}function m(t,n){if(1&t&&(c.Pb(0,"div",8),c.wc(1,p,3,10,"div",9),c.Ob()),2&t){const t=c.ac().$implicit;c.gc("@fadeAnimation",void 0),c.yb(1),c.gc("ngForOf",t)}}function C(t,n){if(1&t){const t=c.Qb();c.Pb(0,"a",24),c.Wb("click",function(n){c.pc(t);const e=c.ac(3);return e.setPageArticles(n,e.currentPage-1)}),c.Pb(1,"span",25),c.Lb(2,"span",26),c.Ob(),c.Pb(3,"span",27),c.Pb(4,"span",28),c.xc(5," Previous "),c.Ob(),c.Pb(6,"span",29),c.Lb(7,"span",26),c.Ob(),c.Ob(),c.Ob()}}function _(t,n){if(1&t){const t=c.Qb();c.Pb(0,"a",24),c.Wb("click",function(n){c.pc(t);const e=c.ac(3);return e.setPageArticles(n,e.currentPage+1)}),c.Pb(1,"span",30),c.Lb(2,"span",26),c.Ob(),c.Pb(3,"span",27),c.Pb(4,"span",28),c.xc(5," Next "),c.Ob(),c.Pb(6,"span",31),c.Lb(7,"span",26),c.Ob(),c.Ob(),c.Ob()}}function M(t,n){if(1&t&&(c.Pb(0,"div",20),c.Pb(1,"div",21),c.wc(2,C,8,0,"a",22),c.Ob(),c.Pb(3,"div",23),c.wc(4,_,8,0,"a",22),c.Ob(),c.Ob()),2&t){const t=c.ac().index,n=c.ac();c.gc("@fadeAnimation",void 0),c.yb(2),c.gc("ngIf",t>0),c.yb(2),c.gc("ngIf",t<n.articles.length-1)}}function u(t,n){if(1&t&&(c.Nb(0),c.wc(1,m,2,2,"div",6),c.wc(2,M,5,3,"div",7),c.Mb()),2&t){const t=n.index,e=c.ac();c.yb(1),c.gc("ngIf",e.currentPage===t),c.yb(1),c.gc("ngIf",e.currentPage===t)}}let w=(()=>{class t{constructor(t){this.articlesService=t}ngOnInit(){this.currentPage=this.articlesService.currentPage,this.articles=this.articlesService.getData()}setPageArticles(t,n){t.preventDefault(),this.currentPage=n,this.articlesService.currentPage=n,window.scrollTo({top:200,behavior:"smooth"})}}return t.\u0275fac=function(n){return new(n||t)(c.Kb(a.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-blog"]],decls:11,vars:1,consts:[[1,"blog-header-bg"],[1,"container"],[1,"title"],[1,"blog-content","container"],[1,"title","my-5"],[4,"ngFor","ngForOf"],["class","row mt-5",4,"ngIf"],["class","row mt-4 mb-5 py-5",4,"ngIf"],[1,"row","mt-5"],["class","col-xs-12 col-sm-12 col-md-12",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-xs-12","col-sm-12","col-md-12",3,"ngClass"],["class","article-body-item",3,"routerLink","state","ngClass","touchstart","touchend","mouseleave",4,"ngIf"],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen","loading","lazy",3,"src",4,"ngIf"],[1,"article-body-item",3,"routerLink","state","ngClass","touchstart","touchend","mouseleave"],[1,"article-body-item-preview"],[3,"imagesData"],[1,"article-body-item-info","p-5"],[1,"pull-left"],[1,"pull-right"],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen","loading","lazy",3,"src"],[1,"row","mt-4","mb-5","py-5"],[1,"col-6","text-left"],["class","animated-arrow",3,"click",4,"ngIf"],[1,"col-6","text-right"],[1,"animated-arrow",3,"click"],[1,"the-arrow","left","rotate-180"],[1,"shaft"],[1,"main"],[1,"text"],[1,"the-arrow","right","rotate-180"],[1,"the-arrow","left"],[1,"the-arrow","right"]],template:function(t,n){1&t&&(c.Pb(0,"article"),c.Pb(1,"section",0),c.Pb(2,"ul",1),c.Pb(3,"li",2),c.xc(4,"Place, where the"),c.Ob(),c.Pb(5,"li",2),c.xc(6,"stories live"),c.Ob(),c.Ob(),c.Ob(),c.Pb(7,"section",3),c.Pb(8,"h1",4),c.xc(9,"Articles"),c.Ob(),c.wc(10,u,3,2,"ng-container",5),c.Ob(),c.Ob()),2&t&&(c.yb(10),c.gc("ngForOf",n.articles))},directives:[o.j,o.k,o.i,r.i,g.a],pipes:[l.a],styles:['.blog-header-bg[_ngcontent-%COMP%]{background-position:center 50%;background-repeat:no-repeat;background-size:cover;width:100%;padding-top:12%;padding-bottom:9%;position:relative}.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style:none;color:#fff}.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:72px;font-weight:bolder;line-height:1}  .webp-no .blog-header-bg{background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#1a1a1a),url(posts-bg_xl.e776e284aa7d9ac5503f.png)}@media (max-width:767.98px){  .webp-no .blog-header-bg{background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#1a1a1a),url(posts-bg_sm.3e4a418666ad1e33fefb.png)}}@media (min-width:576px) and (max-width:991.98px){  .webp-no .blog-header-bg{background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#1a1a1a),url(posts-bg_md.1228f293f08b6ca1156a.png)}}  .webp .blog-header-bg{background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#1a1a1a),url(posts-bg_xl.a4b81b2b6fe323dcd25c.webp)}@media (max-width:767.98px){  .webp .blog-header-bg{background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#1a1a1a),url(posts-bg_sm.214f791b9ccd59b3c716.webp)}}@media (min-width:576px) and (max-width:991.98px){  .webp .blog-header-bg{background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#1a1a1a),url(posts-bg_md.76cc3fc73362d417af60.webp)}}.blog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:64px;font-weight:bolder;color:#666}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]{height:400px;width:100%;display:block;background-color:#fff}.blog-content[_ngcontent-%COMP%]   .article-body-item-preview[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;height:48%;transition:height .5s ease;margin-bottom:-15px;transform:translateZ(0);position:relative;z-index:1}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]{position:relative;margin-top:15px;padding:12px;height:52%;transition:height .5s ease;background-color:#fff}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:10px;font-weight:bolder;color:#1a1a1a}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#1a1a1a;line-height:1.2}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{position:absolute;bottom:.6rem;right:3rem;left:3rem}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:#919191}.blog-content[_ngcontent-%COMP%]   .article-body-item.active[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover{text-decoration:none;cursor:pointer}.blog-content[_ngcontent-%COMP%]   .article-body-item.active[_ngcontent-%COMP%]   .article-body-item-preview[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover   .article-body-item-preview[_ngcontent-%COMP%]{height:43%;-webkit-animation:cover 2s infinite alternate;animation:cover 2s infinite alternate}.blog-content[_ngcontent-%COMP%]   .article-body-item.active[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover   .article-body-item-info[_ngcontent-%COMP%]{height:57%;transition:height .5s ease}.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:620px}.pull-left[_ngcontent-%COMP%]{float:left}.pull-right[_ngcontent-%COMP%]{float:right}.the-arrow[_ngcontent-%COMP%]{width:64px;transition:all .2s}.the-arrow.left[_ngcontent-%COMP%]{position:absolute;top:60%;left:0}.the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%], .the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{width:0;background-color:#999}.the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{transform:rotate(0)}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]{width:64px;transition-delay:.2s}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{width:8px;transition-delay:.3s;transition:all .5s}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{transform:rotate(40deg)}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after{transform:rotate(-40deg)}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]{background-color:#999;display:block;height:1px;position:relative;transition:all .2s;transition-delay:0;will-change:transform}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{background-color:#999;content:"";display:block;height:1px;position:absolute;top:0;right:0}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{transform-origin:top right}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after{transform-origin:bottom right}.animated-arrow[_ngcontent-%COMP%]{display:inline-block;color:#999;font-size:1.25em;text-decoration:none;position:relative;cursor:pointer}.animated-arrow[_ngcontent-%COMP%]:hover{color:#eaeaea}.animated-arrow[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%], .animated-arrow[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .animated-arrow[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before, .animated-arrow[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%], .animated-arrow[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .animated-arrow[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{background-color:#eaeaea}.animated-arrow[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%]{display:flex;align-items:center}.animated-arrow[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%] > .text[_ngcontent-%COMP%]{margin:0 16px 0 0;line-height:1}.animated-arrow[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%] > .the-arrow[_ngcontent-%COMP%]{position:relative}.rotate-180[_ngcontent-%COMP%]{transform:rotate(180deg)}.rotate-180[_ngcontent-%COMP%] + .main[_ngcontent-%COMP%]{flex-direction:row-reverse}.rotate-180[_ngcontent-%COMP%] + .main[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:0 0 0 16px}@media (max-width:760px){.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:64px}}@media (max-width:590px){.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:50px}}@media (max-width:460px){.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:34px}}@media (max-width:1200px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:540px}}@media (max-width:990px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:388px}}@media (max-width:768px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:296px}}@media (max-width:500px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:250px}}@media (max-width:360px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:185px}}'],data:{animation:i.a}}),t})();var x=e("+G0P"),v=e("4NX6");const y=[{path:"",component:w}];let k=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(n){return new(n||t)},imports:[[o.c,r.j.forChild(y),x.a,v.a]]}),t})()}}]);