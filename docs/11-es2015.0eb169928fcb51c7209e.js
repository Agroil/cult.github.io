(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{QLEG:function(t,n,e){"use strict";e.r(n),e.d(n,"BlogModule",(function(){return u}));var o=e("ofXK"),r=e("Od8d"),i=e("fXoL"),c=e("Z48m"),a=e("tyNb"),g=e("YYwF");const l=function(t){return["/article",t]};function s(t,n){if(1&t&&(i.Sb(0,"div",15),i.Ob(1,"div",16),i.Sb(2,"div",17),i.Sb(3,"h2"),i.xc(4),i.Rb(),i.Sb(5,"p"),i.xc(6),i.Rb(),i.Sb(7,"p"),i.Sb(8,"span",18),i.xc(9),i.Rb(),i.Sb(10,"span",19),i.xc(11),i.Rb(),i.Rb(),i.Rb(),i.Rb()),2&t){const t=i.ec().$implicit;i.jc("routerLink",i.lc(7,l,t.id)),i.Bb(1),i.vc("background-image","url("+t.imageUrl+")",i.Gb),i.Bb(3),i.yc(t.title),i.Bb(2),i.yc(t.description),i.Bb(3),i.yc(t.date),i.Bb(2),i.yc(t.category)}}function b(t,n){if(1&t&&(i.Ob(0,"iframe",20),i.fc(1,"safe")),2&t){const t=i.ec().$implicit;i.jc("src",i.gc(1,1,t.videoUrl,"resourceUrl"),i.sc)}}const f=function(){return[3,4]},h=function(t,n,e){return{"col-4":t,"col-6":n,"col-12":e}};function d(t,n){if(1&t&&(i.Sb(0,"div",12),i.wc(1,s,12,9,"div",13),i.wc(2,b,2,4,"iframe",14),i.Rb()),2&t){const t=n.$implicit,e=n.index;i.jc("ngClass",i.mc(4,h,!t.videoUrl&&(e<3||4<e),!t.videoUrl&&i.kc(3,f).includes(e),t.videoUrl)),i.Bb(1),i.jc("ngIf",!t.videoUrl),i.Bb(1),i.jc("ngIf",t.videoUrl)}}function P(t,n){if(1&t){const t=i.Tb();i.Sb(0,"a",21),i.ac("click",(function(n){i.qc(t);const e=i.ec(3);return e.setPageArticles(n,e.currentPage-1)})),i.Sb(1,"span",22),i.Ob(2,"span",23),i.Rb(),i.Sb(3,"span",24),i.Sb(4,"span",25),i.xc(5," Previous "),i.Rb(),i.Sb(6,"span",26),i.Ob(7,"span",23),i.Rb(),i.Rb(),i.Rb()}}function O(t,n){if(1&t){const t=i.Tb();i.Sb(0,"a",21),i.ac("click",(function(n){i.qc(t);const e=i.ec(3);return e.setPageArticles(n,e.currentPage+1)})),i.Sb(1,"span",27),i.Ob(2,"span",23),i.Rb(),i.Sb(3,"span",24),i.Sb(4,"span",25),i.xc(5," Next "),i.Rb(),i.Sb(6,"span",28),i.Ob(7,"span",23),i.Rb(),i.Rb(),i.Rb()}}function C(t,n){if(1&t&&(i.Sb(0,"div",7),i.wc(1,d,3,8,"div",8),i.Sb(2,"div",9),i.wc(3,P,8,0,"a",10),i.Rb(),i.Sb(4,"div",11),i.wc(5,O,8,0,"a",10),i.Rb(),i.Rb()),2&t){const t=i.ec(),n=t.$implicit,e=t.index,o=i.ec();i.jc("@fadeAnimation",void 0),i.Bb(1),i.jc("ngForOf",n),i.Bb(2),i.jc("ngIf",e>0),i.Bb(2),i.jc("ngIf",e<o.articles.length-1)}}function M(t,n){if(1&t&&(i.Qb(0),i.wc(1,C,6,4,"div",6),i.Pb()),2&t){const t=n.index,e=i.ec();i.Bb(1),i.jc("ngIf",e.currentPage===t)}}let _=(()=>{class t{constructor(t){this.articlesService=t,this.currentPage=0}ngOnInit(){this.articles=this.articlesService.getData()}setPageArticles(t,n){t.preventDefault(),this.currentPage=n,this.articlesService.currentPage=n,window.scrollTo({top:200,behavior:"smooth"})}}return t.\u0275fac=function(n){return new(n||t)(i.Nb(c.a))},t.\u0275cmp=i.Hb({type:t,selectors:[["app-blog"]],decls:11,vars:1,consts:[[1,"blog-header-bg"],[1,"container"],[1,"title"],[1,"blog-content","container"],[1,"title","my-5"],[4,"ngFor","ngForOf"],["class","row my-5",4,"ngIf"],[1,"row","my-5"],["class","my-4",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-6","text-left"],["class","animated-arrow",3,"click",4,"ngIf"],[1,"col-6","text-right"],[1,"my-4",3,"ngClass"],["class","article-body-item",3,"routerLink",4,"ngIf"],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen",3,"src",4,"ngIf"],[1,"article-body-item",3,"routerLink"],[1,"article-body-item-preview"],[1,"article-body-item-info"],[1,"pull-left"],[1,"pull-right"],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen",3,"src"],[1,"animated-arrow",3,"click"],[1,"the-arrow","left","rotate-180"],[1,"shaft"],[1,"main"],[1,"text"],[1,"the-arrow","right","rotate-180"],[1,"the-arrow","left"],[1,"the-arrow","right"]],template:function(t,n){1&t&&(i.Sb(0,"article"),i.Sb(1,"section",0),i.Sb(2,"ul",1),i.Sb(3,"li",2),i.xc(4,"Place, where the"),i.Rb(),i.Sb(5,"li",2),i.xc(6,"stories live"),i.Rb(),i.Rb(),i.Rb(),i.Sb(7,"section",3),i.Sb(8,"h1",4),i.xc(9,"Articles"),i.Rb(),i.wc(10,M,2,1,"ng-container",5),i.Rb(),i.Rb()),2&t&&(i.Bb(10),i.jc("ngForOf",n.articles))},directives:[o.i,o.j,o.h,a.e],pipes:[g.a],styles:['.blog-header-bg[_ngcontent-%COMP%]{background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#1a1a1a),url(header-bg.png);background-position:center 25%;background-repeat:no-repeat;background-size:cover;width:100%;padding-top:12%;padding-bottom:9%;position:relative}.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style:none;color:#fff}.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:72px;font-weight:bolder;line-height:1}.blog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:64px;font-weight:bolder;color:#666}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]{height:400px;width:100%}.blog-content[_ngcontent-%COMP%]   .article-body-item-preview[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;height:48%;transition:height .5s ease;margin-bottom:-15px;transform:translateZ(0);position:relative;z-index:1}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]{position:relative;margin-top:15px;padding:12px;height:52%;transition:height .5s ease;background-color:#fff}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:10px;font-weight:bolder;color:#1a1a1a}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#1a1a1a;line-height:1.2}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{position:absolute;bottom:0;width:calc(100% - 24px)}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:#919191}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover{cursor:pointer}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover   .article-body-item-preview[_ngcontent-%COMP%]{height:43%;-webkit-animation:cover 2s infinite alternate;animation:cover 2s infinite alternate}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover   .article-body-item-info[_ngcontent-%COMP%]{height:57%;transition:height .5s ease}.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:620px}.pull-left[_ngcontent-%COMP%]{float:left}.pull-right[_ngcontent-%COMP%]{float:right}.the-arrow[_ngcontent-%COMP%]{width:64px;transition:all .2s}.the-arrow.left[_ngcontent-%COMP%]{position:absolute;top:60%;left:0}.the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%], .the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{width:0;background-color:#999}.the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{transform:rotate(0)}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]{width:64px;transition-delay:.2s}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{width:8px;transition-delay:.3s;transition:all .5s}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{transform:rotate(40deg)}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after{transform:rotate(-40deg)}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]{background-color:#999;display:block;height:1px;position:relative;transition:all .2s;transition-delay:0;will-change:transform}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{background-color:#999;content:"";display:block;height:1px;position:absolute;top:0;right:0}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{transform-origin:top right}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after{transform-origin:bottom right}.animated-arrow[_ngcontent-%COMP%]{display:inline-block;color:#999;font-size:1.25em;text-decoration:none;position:relative;cursor:pointer}.animated-arrow[_ngcontent-%COMP%]:hover{color:#eaeaea}.animated-arrow[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%], .animated-arrow[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .animated-arrow[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before, .animated-arrow[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%], .animated-arrow[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .animated-arrow[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{background-color:#eaeaea}.animated-arrow[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%]{display:flex;align-items:center}.animated-arrow[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%] > .text[_ngcontent-%COMP%]{margin:0 16px 0 0;line-height:1}.animated-arrow[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%] > .the-arrow[_ngcontent-%COMP%]{position:relative}.rotate-180[_ngcontent-%COMP%]{transform:rotate(180deg)}.rotate-180[_ngcontent-%COMP%] + .main[_ngcontent-%COMP%]{flex-direction:row-reverse}.rotate-180[_ngcontent-%COMP%] + .main[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:0 0 0 16px}@media (max-width:760px){.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:64px}}@media (max-width:590px){.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:50px}}@media (max-width:460px){.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:34px}}'],data:{animation:r.a}}),t})();var p=e("+G0P");const m=[{path:"",component:_}];let u=(()=>{class t{}return t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({factory:function(n){return new(n||t)},imports:[[o.b,a.h.forChild(m),p.a]]}),t})()}}]);