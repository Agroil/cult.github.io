exports.ids=[4],exports.modules={"+G0P":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return PipeModule});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("fXoL");class PipeModule{}PipeModule.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Gc({type:PipeModule}),PipeModule.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Fc({factory:function PipeModule_Factory(t){return new(t||PipeModule)}})},QLEG:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"BlogModule",function(){return BlogModule});var common=__webpack_require__("ofXK"),articles_service=__webpack_require__("Z48m"),animations=__webpack_require__("Od8d"),core=__webpack_require__("fXoL"),router=__webpack_require__("tyNb"),safe_pipe=__webpack_require__("YYwF");const _c0=function(a1){return["/article",a1]},_c1=function(a0){return{pageTitle:a0}};function BlogComponent_ng_container_10_div_1_div_1_a_1_Template(rf,ctx){if(1&rf&&(core.Nc(0,"a",15),core.Jc(1,"div",16),core.Nc(2,"div",17),core.Nc(3,"h2"),core.ud(4),core.Mc(),core.Nc(5,"p"),core.ud(6),core.Mc(),core.Nc(7,"p"),core.Nc(8,"span",18),core.ud(9),core.Mc(),core.Nc(10,"span",19),core.ud(11),core.Mc(),core.Mc(),core.Mc(),core.Mc()),2&rf){const item_r7=core.Yc().$implicit;core.ed("routerLink",core.hd(8,_c0,item_r7.urlTitle))("state",core.hd(10,_c1,item_r7.pageTitle)),core.wc(1),core.rd("background-image","url("+item_r7.imageUrl+")"),core.wc(3),core.vd(item_r7.title),core.wc(2),core.vd(item_r7.description),core.wc(3),core.vd(item_r7.date),core.wc(2),core.vd(item_r7.category)}}function BlogComponent_ng_container_10_div_1_div_1_iframe_2_Template(rf,ctx){if(1&rf&&(core.Jc(0,"iframe",20),core.Zc(1,"safe")),2&rf){const item_r7=core.Yc().$implicit;core.ed("src",core.bd(1,1,item_r7.videoUrl,"resourceUrl"),core.od)}}const _c2=function(){return[3,4]},_c3=function(a0,a1,a2){return{"col-lg-4 col-xl-4":a0,"col-lg-6 col-xl-6":a1,"col-12":a2}};function BlogComponent_ng_container_10_div_1_div_1_Template(rf,ctx){if(1&rf&&(core.Nc(0,"div",12),core.td(1,BlogComponent_ng_container_10_div_1_div_1_a_1_Template,12,12,"a",13),core.td(2,BlogComponent_ng_container_10_div_1_div_1_iframe_2_Template,2,4,"iframe",14),core.Mc()),2&rf){const item_r7=ctx.$implicit,position_r8=ctx.index;core.ed("ngClass",core.id(4,_c3,!item_r7.videoUrl&&(position_r8<3||4<position_r8),!item_r7.videoUrl&&core.gd(3,_c2).includes(position_r8),item_r7.videoUrl)),core.wc(1),core.ed("ngIf",!item_r7.videoUrl),core.wc(1),core.ed("ngIf",item_r7.videoUrl)}}function BlogComponent_ng_container_10_div_1_a_3_Template(rf,ctx){if(1&rf){const _r14=core.Oc();core.Nc(0,"a",21),core.Uc("click",function BlogComponent_ng_container_10_div_1_a_3_Template_a_click_0_listener($event){core.md(_r14);const ctx_r13=core.Yc(3);return ctx_r13.setPageArticles($event,ctx_r13.currentPage-1)}),core.Nc(1,"span",22),core.Jc(2,"span",23),core.Mc(),core.Nc(3,"span",24),core.Nc(4,"span",25),core.ud(5," Previous "),core.Mc(),core.Nc(6,"span",26),core.Jc(7,"span",23),core.Mc(),core.Mc(),core.Mc()}}function BlogComponent_ng_container_10_div_1_a_5_Template(rf,ctx){if(1&rf){const _r16=core.Oc();core.Nc(0,"a",21),core.Uc("click",function BlogComponent_ng_container_10_div_1_a_5_Template_a_click_0_listener($event){core.md(_r16);const ctx_r15=core.Yc(3);return ctx_r15.setPageArticles($event,ctx_r15.currentPage+1)}),core.Nc(1,"span",27),core.Jc(2,"span",23),core.Mc(),core.Nc(3,"span",24),core.Nc(4,"span",25),core.ud(5," Next "),core.Mc(),core.Nc(6,"span",28),core.Jc(7,"span",23),core.Mc(),core.Mc(),core.Mc()}}function BlogComponent_ng_container_10_div_1_Template(rf,ctx){if(1&rf&&(core.Nc(0,"div",7),core.td(1,BlogComponent_ng_container_10_div_1_div_1_Template,3,8,"div",8),core.Nc(2,"div",9),core.td(3,BlogComponent_ng_container_10_div_1_a_3_Template,8,0,"a",10),core.Mc(),core.Nc(4,"div",11),core.td(5,BlogComponent_ng_container_10_div_1_a_5_Template,8,0,"a",10),core.Mc(),core.Mc()),2&rf){const ctx_r17=core.Yc(),page_r1=ctx_r17.$implicit,articlesPage_r2=ctx_r17.index,ctx_r3=core.Yc();core.ed("@fadeAnimation",void 0),core.wc(1),core.ed("ngForOf",page_r1),core.wc(2),core.ed("ngIf",articlesPage_r2>0),core.wc(2),core.ed("ngIf",articlesPage_r2<ctx_r3.articles.length-1)}}function BlogComponent_ng_container_10_Template(rf,ctx){if(1&rf&&(core.Lc(0),core.td(1,BlogComponent_ng_container_10_div_1_Template,6,4,"div",6),core.Kc()),2&rf){const articlesPage_r2=ctx.index,ctx_r0=core.Yc();core.wc(1),core.ed("ngIf",ctx_r0.currentPage===articlesPage_r2)}}class BlogComponent{constructor(articlesService){this.articlesService=articlesService,this.currentPage=0}ngOnInit(){this.articles=this.articlesService.getData()}setPageArticles($event,page){$event.preventDefault(),this.currentPage=page,this.articlesService.currentPage=page,window.scrollTo({top:200,behavior:"smooth"})}}BlogComponent.\u0275fac=function BlogComponent_Factory(t){return new(t||BlogComponent)(core.Ic(articles_service.a))},BlogComponent.\u0275cmp=core.Cc({type:BlogComponent,selectors:[["app-blog"]],decls:11,vars:1,consts:[[1,"blog-header-bg"],[1,"container","ml-4"],[1,"title"],[1,"blog-content","container"],[1,"title","my-5"],[4,"ngFor","ngForOf"],["class","row my-5",4,"ngIf"],[1,"row","my-5"],["class","my-4 col-xs-12 col-sm-12 col-md-12",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-6","text-left"],["class","animated-arrow",3,"click",4,"ngIf"],[1,"col-6","text-right"],[1,"my-4","col-xs-12","col-sm-12","col-md-12",3,"ngClass"],["class","article-body-item",3,"routerLink","state",4,"ngIf"],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen",3,"src",4,"ngIf"],[1,"article-body-item",3,"routerLink","state"],[1,"article-body-item-preview"],[1,"article-body-item-info","p-5"],[1,"pull-left"],[1,"pull-right"],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen",3,"src"],[1,"animated-arrow",3,"click"],[1,"the-arrow","left","rotate-180"],[1,"shaft"],[1,"main"],[1,"text"],[1,"the-arrow","right","rotate-180"],[1,"the-arrow","left"],[1,"the-arrow","right"]],template:function BlogComponent_Template(rf,ctx){1&rf&&(core.Nc(0,"article"),core.Nc(1,"section",0),core.Nc(2,"ul",1),core.Nc(3,"li",2),core.ud(4,"Place, where the"),core.Mc(),core.Nc(5,"li",2),core.ud(6,"stories live"),core.Mc(),core.Mc(),core.Mc(),core.Nc(7,"section",3),core.Nc(8,"h1",4),core.ud(9,"Articles"),core.Mc(),core.td(10,BlogComponent_ng_container_10_Template,2,1,"ng-container",5),core.Mc(),core.Mc()),2&rf&&(core.wc(10),core.ed("ngForOf",ctx.articles))},directives:[common.j,common.k,common.i,router.h],pipes:[safe_pipe.a],styles:['.blog-header-bg[_ngcontent-%COMP%]{background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#1a1a1a),url(posts-bg.7342d71f720d1ccc984b.jpeg);background-position:center 50%;background-repeat:no-repeat;background-size:cover;width:100%;padding-top:12%;padding-bottom:9%;position:relative}.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0;list-style:none;color:#fff}.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:72px;font-weight:bolder;line-height:1}.blog-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:64px;font-weight:bolder;color:#666}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]{height:400px;width:100%;display:block}.blog-content[_ngcontent-%COMP%]   .article-body-item-preview[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:cover;height:48%;transition:height .5s ease;margin-bottom:-15px;transform:translateZ(0);position:relative;z-index:1}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]{position:relative;margin-top:15px;padding:12px;height:52%;transition:height .5s ease;background-color:#fff}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:10px;font-weight:bolder;color:#1a1a1a}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#1a1a1a;line-height:1.2}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{position:absolute;bottom:1.7rem;right:3rem;left:3rem}.blog-content[_ngcontent-%COMP%]   .article-body-item-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:#919191}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:active, .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:focus, .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover{text-decoration:none;cursor:pointer}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:active   .article-body-item-preview[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:focus   .article-body-item-preview[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover   .article-body-item-preview[_ngcontent-%COMP%]{height:43%;-webkit-animation:cover 2s infinite alternate;animation:cover 2s infinite alternate}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:active   .article-body-item-info[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:focus   .article-body-item-info[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover   .article-body-item-info[_ngcontent-%COMP%]{height:57%;transition:height .5s ease}@media (hover),(min--moz-device-pixel-ratio:0),(min-width:0\\0){.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:active, .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:focus, .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:none}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:active   .article-body-item-preview[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:focus   .article-body-item-preview[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover   .article-body-item-preview[_ngcontent-%COMP%]{height:43%;-webkit-animation:cover 2s infinite alternate;animation:cover 2s infinite alternate}.blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:active   .article-body-item-info[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:focus   .article-body-item-info[_ngcontent-%COMP%], .blog-content[_ngcontent-%COMP%]   .article-body-item[_ngcontent-%COMP%]:hover   .article-body-item-info[_ngcontent-%COMP%]{height:57%;transition:height .5s ease}}.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:620px}.pull-left[_ngcontent-%COMP%]{float:left}.pull-right[_ngcontent-%COMP%]{float:right}.the-arrow[_ngcontent-%COMP%]{width:64px;transition:all .2s}.the-arrow.left[_ngcontent-%COMP%]{position:absolute;top:60%;left:0}.the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%], .the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{width:0;background-color:#999}.the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow.left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{transform:rotate(0)}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]{width:64px;transition-delay:.2s}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{width:8px;transition-delay:.3s;transition:all .5s}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{transform:rotate(40deg)}.the-arrow.right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after{transform:rotate(-40deg)}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]{background-color:#999;display:block;height:1px;position:relative;transition:all .2s;transition-delay:0;will-change:transform}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{background-color:#999;content:"";display:block;height:1px;position:absolute;top:0;right:0}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{transform-origin:top right}.the-arrow[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after{transform-origin:bottom right}.animated-arrow[_ngcontent-%COMP%]{display:inline-block;color:#999;font-size:1.25em;text-decoration:none;position:relative;cursor:pointer}.animated-arrow[_ngcontent-%COMP%]:hover{color:#eaeaea}.animated-arrow[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%], .animated-arrow[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .animated-arrow[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before, .animated-arrow[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%], .animated-arrow[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:after, .animated-arrow[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] > .shaft[_ngcontent-%COMP%]:before{background-color:#eaeaea}.animated-arrow[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%]{display:flex;align-items:center}.animated-arrow[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%] > .text[_ngcontent-%COMP%]{margin:0 16px 0 0;line-height:1}.animated-arrow[_ngcontent-%COMP%] > .main[_ngcontent-%COMP%] > .the-arrow[_ngcontent-%COMP%]{position:relative}.rotate-180[_ngcontent-%COMP%]{transform:rotate(180deg)}.rotate-180[_ngcontent-%COMP%] + .main[_ngcontent-%COMP%]{flex-direction:row-reverse}.rotate-180[_ngcontent-%COMP%] + .main[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin:0 0 0 16px}@media (max-width:760px){.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:64px}}@media (max-width:590px){.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:50px}}@media (max-width:460px){.blog-header-bg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:34px}}@media (max-width:1200px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:540px}}@media (max-width:990px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:388px}}@media (max-width:768px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:296px}}@media (max-width:500px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:250px}}@media (max-width:360px){.blog-content[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:185px}}'],data:{animation:animations.a}});var pipe_module=__webpack_require__("+G0P");const routes=[{path:"",component:BlogComponent}];class BlogModule{}BlogModule.\u0275mod=core.Gc({type:BlogModule}),BlogModule.\u0275inj=core.Fc({factory:function BlogModule_Factory(t){return new(t||BlogModule)},imports:[[common.b,router.i.forChild(routes),pipe_module.a]]})},YYwF:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return SafePipe});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("fXoL"),_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("jhN1");class SafePipe{constructor(sanitizer){this.sanitizer=sanitizer}transform(value,type){switch(type){case"html":return this.sanitizer.bypassSecurityTrustHtml(value);case"style":return this.sanitizer.bypassSecurityTrustStyle(value);case"script":return this.sanitizer.bypassSecurityTrustScript(value);case"url":return this.sanitizer.bypassSecurityTrustUrl(value);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(value);default:throw new Error("Invalid safe type specified: "+type)}}}SafePipe.\u0275fac=function SafePipe_Factory(t){return new(t||SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Ic(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.b))},SafePipe.\u0275pipe=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hc({name:"safe",type:SafePipe,pure:!0})}};