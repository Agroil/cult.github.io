!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{mkNY:function(e,i,a){"use strict";a.r(i),a.d(i,"ArticleModule",function(){return S});var c=a("ofXK"),r=a("Z48m"),o=a("fXoL"),l=a("tyNb"),b=a("jhN1"),s=a("Knxr"),d=a("orHV"),g=a("YYwF");function f(t,n){if(1&t&&(o.Qb(0,"p",10),o.zc(1),o.Pb()),2&t){var e=o.bc(2);o.zb(1),o.Bc(" ",e.data.article.category," ")}}function p(t,n){if(1&t&&(o.Qb(0,"h2",10),o.zc(1),o.Pb()),2&t){var e=o.bc(2);o.zb(1),o.Bc(" ",e.data.article.title," ")}}function h(t,n){if(1&t&&(o.Qb(0,"h3",11),o.zc(1),o.Pb()),2&t){var e=o.bc(2);o.zb(1),o.Bc(" ",e.data.article.subtitle," ")}}function m(t,n){if(1&t&&(o.Qb(0,"section",7),o.Qb(1,"div",3),o.Qb(2,"div",4),o.yc(3,f,2,1,"p",8),o.yc(4,p,2,1,"h2",8),o.yc(5,h,2,1,"h3",9),o.Pb(),o.Pb(),o.Pb()),2&t){var e=o.bc();o.zb(3),o.hc("ngIf",e.data.article.category),o.zb(1),o.hc("ngIf",e.data.article.title),o.zb(1),o.hc("ngIf",e.data.article.subtitle)}}function u(t,n){if(1&t&&(o.Qb(0,"section",7),o.Qb(1,"div",3),o.Qb(2,"div",4),o.Qb(3,"p"),o.Mb(4,"ngx-dynamic-hooks",16),o.Pb(),o.Pb(),o.Pb(),o.Pb()),2&t){var e=o.bc().$implicit;o.zb(4),o.hc("content",e.data)}}function P(t,n){if(1&t&&(o.Qb(0,"section",17),o.Mb(1,"app-picture",1),o.Pb()),2&t){var e=o.bc().$implicit;o.zb(1),o.hc("imagesData",e.data)}}function v(t,n){if(1&t&&o.Mb(0,"input",25),2&t){var e=n.index;o.jc("id","s-",e+1,""),o.hc("checked",0===e)}}var y=function(t){return[t]};function O(t,n){if(1&t&&o.Mb(0,"app-picture",1),2&t){var e=o.bc().$implicit;o.hc("imagesData",o.lc(1,y,e))}}function M(t,n){if(1&t&&(o.Mb(0,"iframe",29),o.cc(1,"safe")),2&t){var e=o.bc().$implicit;o.hc("src",o.ec(1,1,e.url,"resourceUrl"),o.tc)}}function C(t,n){if(1&t&&(o.Ob(0),o.Qb(1,"li",26),o.yc(2,O,1,3,"app-picture",27),o.yc(3,M,2,4,"iframe",28),o.Pb(),o.Nb()),2&t){var e=n.$implicit;o.zb(2),o.hc("ngIf",!e.tag),o.zb(1),o.hc("ngIf","video"===e.tag)}}function z(t,n){if(1&t&&(o.Ob(0),o.Qb(1,"span"),o.Mb(2,"label",31),o.Pb(),o.Qb(3,"span"),o.Mb(4,"label",31),o.Pb(),o.Nb()),2&t){var e=o.bc().index;o.zb(1),o.Cb("s-nav-",e+1," right"),o.zb(1),o.Cb("s-nav-",e+1," right"),o.jc("for","s-",e+2,""),o.zb(1),o.Cb("s-nav-",e+2," left"),o.zb(1),o.Cb("s-nav-",e+2," left"),o.jc("for","s-",e+1,"")}}function _(t,n){if(1&t&&(o.Ob(0),o.yc(1,z,5,14,"ng-container",30),o.Nb()),2&t){var e=n.index,i=o.bc(2).$implicit;o.zb(1),o.hc("ngIf",e<(null==i.slides?null:i.slides.length)-1)}}function w(t,n){if(1&t&&(o.Qb(0,"section",18),o.Qb(1,"div",19),o.Qb(2,"div",20),o.yc(3,v,1,2,"input",21),o.Qb(4,"ul",22),o.yc(5,C,4,2,"ng-container",23),o.Pb(),o.Qb(6,"div",24),o.yc(7,_,2,1,"ng-container",23),o.Pb(),o.Pb(),o.Pb(),o.Pb()),2&t){var e=o.bc().$implicit;o.zb(3),o.hc("ngForOf",e.slides),o.zb(2),o.hc("ngForOf",e.slides),o.zb(2),o.hc("ngForOf",e.slides)}}function x(t,n){if(1&t&&(o.Qb(0,"section",32),o.Qb(1,"div",3),o.Qb(2,"div",4),o.Mb(3,"iframe",33),o.cc(4,"safe"),o.Pb(),o.Pb(),o.Pb()),2&t){var e=o.bc().$implicit;o.zb(3),o.hc("src",o.ec(4,1,e.url,"resourceUrl"),o.tc)}}function Q(t,n){if(1&t&&(o.Qb(0,"section",12),o.yc(1,u,5,1,"section",5),o.yc(2,P,2,1,"section",13),o.yc(3,w,8,3,"section",14),o.yc(4,x,5,4,"section",15),o.Pb()),2&t){var e=n.$implicit;o.zb(1),o.hc("ngIf","p"===e.tag),o.zb(1),o.hc("ngIf","img"===e.tag),o.zb(1),o.hc("ngIf","slider"===e.tag),o.zb(1),o.hc("ngIf","video"===e.tag)}}var I,k,F=((I=function(){function e(n,i,a,c){t(this,e),this.route=n,this.articlesService=i,this.titleService=a,this.metaService=c}var i,a,c;return i=e,(a=[{key:"ngOnInit",value:function(){if(this.data=this.articlesService.getArticle(this.route.snapshot.paramMap.get("id"),this.articlesService.currentPage),this.data){var t=this.data,n=t.pageTitle,e=t.metaKeywords,i=t.metaDescritpion;n&&this.titleService.setTitle(n),Array.isArray(e)&&e.length&&this.metaService.addTag({name:"keywords",content:e.join(",")}),i&&this.metaService.addTag({name:"description",content:i})}}}])&&n(i.prototype,a),c&&n(i,c),e}()).\u0275fac=function(t){return new(t||I)(o.Lb(l.a),o.Lb(r.a),o.Lb(b.d),o.Lb(b.c))},I.\u0275cmp=o.Fb({type:I,selectors:[["app-article"]],decls:10,vars:4,consts:[[1,"article-header-bg","mb-5"],[3,"imagesData"],[1,"container"],[1,"row"],[1,"col-12"],["class","article-content container",4,"ngIf"],["class","py-5",4,"ngFor","ngForOf"],[1,"article-content","container"],["class","my-5",4,"ngIf"],["class","my-4",4,"ngIf"],[1,"my-5"],[1,"my-4"],[1,"py-5"],["class","article-image",4,"ngIf"],["class","article-slider",4,"ngIf"],["class","article-video container",4,"ngIf"],[3,"content"],[1,"article-image"],[1,"article-slider"],[1,"outer-wrapper","mt-0"],["role","slider",1,"s-wrap","s-type-1","mb-0"],["type","radio","name","slider-control",3,"id","checked",4,"ngFor","ngForOf"],[1,"s-content"],[4,"ngFor","ngForOf"],[1,"s-nav"],["type","radio","name","slider-control",3,"id","checked"],[1,"s-item"],[3,"imagesData",4,"ngIf"],["class","frame","frameBorder","0","loading","lazy",3,"src",4,"ngIf"],["frameBorder","0","loading","lazy",1,"frame",3,"src"],[4,"ngIf"],[3,"for"],[1,"article-video","container"],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen","loading","lazy",3,"src"]],template:function(t,n){1&t&&(o.Qb(0,"article"),o.Qb(1,"section",0),o.Mb(2,"app-picture",1),o.Qb(3,"div",2),o.Qb(4,"div",3),o.Qb(5,"div",4),o.Qb(6,"h1"),o.zc(7),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.yc(8,m,6,3,"section",5),o.yc(9,Q,5,4,"section",6),o.Pb()),2&t&&(o.zb(2),o.hc("imagesData",n.data.article.headerBg),o.zb(5),o.Bc(" ",null==n.data||null==n.data.article?null:n.data.article.header," "),o.zb(1),o.hc("ngIf",(null==n.data?null:n.data.article)&&(n.data.article.title||n.data.article.subtitle||n.data.article.category)),o.zb(1),o.hc("ngForOf",null==n.data||null==n.data.article?null:n.data.article.content))},directives:[s.a,c.k,c.j,d.b],pipes:[g.a],styles:["article[_ngcontent-%COMP%]{background-color:#fff;font-size:14px;color:#212121}.article-header-bg[_ngcontent-%COMP%]{background-position:center 25%;background-repeat:no-repeat;background-size:cover;background-color:#1a1a1a;color:#fff;width:100%;padding-top:12%;padding-bottom:9%;position:relative}.article-header-bg[_ngcontent-%COMP%]   app-picture[_ngcontent-%COMP%]{top:0}.article-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:4rem;font-weight:700}.article-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;line-height:1.5}.article-slider[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:gilroy-bold}.s-wrap[_ngcontent-%COMP%]   .s-item-4[_ngcontent-%COMP%]{background-position:center 20%}.s-wrap[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]{height:100%}.article-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .article-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .article-slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .article-video[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:17px}.article-image[_ngcontent-%COMP%]{position:relative;width:100%;padding-bottom:38%}@media (max-width:767.98px){.article-image[_ngcontent-%COMP%]{padding-bottom:67%}}@media (min-width:576px) and (max-width:991.98px){.article-image[_ngcontent-%COMP%]{padding-bottom:57%}}.article-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:653px;display:inline-block}@media (max-width:1200px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:540px}}@media (max-width:990px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:388px}}@media (max-width:768px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:296px}}@media (max-width:500px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:250px}}@media (max-width:360px){.article-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:185px}}  .bold{font-family:gilroy-bold}  .square{padding-bottom:60%;position:relative}  .square picture{min-height:auto!important}  .square img{width:100%!important;height:100%!important}"]}),I),j=a("+G0P"),$=a("4NX6"),B=[{path:"",component:F}],S=((k=function n(){t(this,n)}).\u0275mod=o.Jb({type:k}),k.\u0275inj=o.Ib({factory:function(t){return new(t||k)},imports:[[c.c,l.j.forChild(B),j.a,$.a,d.a]]}),k)}}])}();