function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{bw5h:function(t,e,o){"use strict";o.r(e),o.d(e,"CategoryModule",(function(){return h}));var n=o("ofXK"),i=o("fXoL"),r=o("tyNb"),a=o("jwUf"),c=o("YYwF"),s=function(t){return{"background-image":t}},g=function(t){return["/post",t]};function l(t,e){if(1&t&&(i.Rb(0,"div",13),i.Rb(1,"div",14),i.Rb(2,"div",15),i.Rb(3,"h3"),i.uc(4),i.Qb(),i.Rb(5,"p"),i.uc(6),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&t){var o=e.$implicit;i.Bb(1),i.ic("ngStyle",i.kc(4,s,"url("+o.imageUrl+")"))("routerLink",i.kc(6,g,o.id)),i.Bb(3),i.vc(o.title),i.Bb(2),i.vc(o.subtitle)}}var b,d,f=((b=function(){function t(e,o,n){var i=this;_classCallCheck(this,t),this.route=e,this.router=o,this.postsService=n,this.title="",this.videoUrl="",this.sub=this.route.queryParams.subscribe((function(t){i.workMode=t.name,i.setStatic(),i.getDataByCategory()}))}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.sub.unsubscribe()}},{key:"goToPost",value:function(t){this.postsService.currentPost=t,localStorage.setItem("current_post",JSON.stringify(t)),this.router.navigate(["/post"])}},{key:"setStatic",value:function(){switch(this.workMode){case"video":this.title="Video Production",this.videoUrl="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=W0LHTWG-UmQ";break;case"animation":this.title="Animation",this.videoUrl="https://www.youtube.com/embed/QyQ_6qbsvnY?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=QyQ_6qbsvnY";break;case"mobile":this.title="Mobile & Platforms",this.videoUrl="https://www.youtube.com/embed/eHX86nhM4Eg?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=eHX86nhM4Eg"}}},{key:"trackByFn",value:function(t,e){return e.id}},{key:"sortByOrder",value:function(t,e){return t.order<e.order?-1:t.order>e.order?1:0}},{key:"getDataByCategory",value:function(){var t=this,e=this.postsService.getData().filter((function(e){return e.category===t.workMode}));this.data=e.sort(this.sortByOrder)}}]),t}()).\u0275fac=function(t){return new(t||b)(i.Mb(r.a),i.Mb(r.c),i.Mb(a.a))},b.\u0275cmp=i.Gb({type:b,selectors:[["app-category"]],decls:20,vars:7,consts:[[1,"category"],[1,"category-header"],[1,"container"],[1,"row"],[1,"col"],[1,"hvr-sweep-to-right"],[1,"video-background"],[1,"video-foreground"],["frameBorder","0","allowfullscreen","",3,"src"],[1,"category-body"],[1,"container-fluid"],[1,"category-body-title"],["class","col-lg-4 p-0",4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-lg-4","p-0"],[1,"category-body-item",3,"ngStyle","routerLink"],[1,"category-body-item-info"]],template:function(t,e){1&t&&(i.Rb(0,"div",0),i.Rb(1,"div",1),i.Rb(2,"div",2),i.Rb(3,"div",3),i.Rb(4,"div",4),i.Rb(5,"h3"),i.uc(6),i.Qb(),i.Rb(7,"button",5),i.uc(8,"View Latest Reel"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(9,"div",6),i.Rb(10,"div",7),i.Nb(11,"iframe",8),i.ec(12,"safe"),i.Qb(),i.Qb(),i.Qb(),i.Rb(13,"div",9),i.Rb(14,"div",10),i.Rb(15,"div",11),i.Rb(16,"h2"),i.uc(17,"Latest and Greatest"),i.Qb(),i.Qb(),i.Rb(18,"div",3),i.tc(19,l,7,8,"div",12),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&t&&(i.Bb(6),i.vc(e.title),i.Bb(5),i.ic("src",i.fc(12,4,e.videoUrl,"resourceUrl"),i.pc),i.Bb(8),i.ic("ngForOf",e.data)("ngForTrackBy",e.trackByFn))},directives:[n.i,n.k,r.d],pipes:[c.a],styles:[".category-header[_ngcontent-%COMP%]{height:420px;outline:1px solid hsla(0,0%,100%,.2);overflow:hidden}.category-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:gilroy-bold;margin-top:200px;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff}.category-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:48px;margin-bottom:30px;outline:none;width:280px;height:72px;border:1px solid #fff;font-weight:600;font-size:24px;line-height:24px;text-align:center;letter-spacing:1px;text-transform:uppercase;color:#fff;background-color:transparent}.category-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#000}.category-body[_ngcontent-%COMP%]{padding-bottom:50px}.category-body-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:gilroy-bold;font-style:normal;font-weight:700;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff;margin-top:107px;margin-bottom:49px}.category-body-item[_ngcontent-%COMP%]{cursor:pointer;position:relative;height:406px;outline:1px solid #fff;margin:1px;background-color:#000;background-position:50%;background-repeat:no-repeat;background-size:100% 100%}.category-body-item[_ngcontent-%COMP%]:hover{-webkit-animation:shrink 2s infinite alternate;animation:shrink 2s infinite alternate;color:#fff}.category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]{height:150px;background-color:#fff;border-top:1px solid #cdcdcd}.category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.category-body-item-info[_ngcontent-%COMP%]{height:120px;position:absolute;bottom:0;width:100%;border-top:1px solid #fff;transition:all .5s ease;background-color:#1a1a1a}.category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:600;font-size:24px;margin-top:22px}.category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-style:normal;line-height:24px;letter-spacing:1px;text-transform:capitalize;color:#fff;margin-left:70px;margin-right:10px}.category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;font-size:14px;margin-top:24px}.video-background[_ngcontent-%COMP%]{background:#000;position:relative;top:-100%;right:0;bottom:0;left:0;z-index:-99;height:100%}.video-background[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .video-foreground[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}@media (min-aspect-ratio:16/9){.video-foreground[_ngcontent-%COMP%]{height:300%;top:-100%}}@media (max-aspect-ratio:16/9){.video-foreground[_ngcontent-%COMP%]{width:300%;left:-100%}}@-webkit-keyframes shrink{0%{background-size:100% 100%}to{background-size:110% 110%}}@keyframes shrink{0%{background-size:100% 100%}to{background-size:110% 110%}}"]}),b),p=o("+G0P"),u=[{path:"",component:f}],h=((d=function t(){_classCallCheck(this,t)}).\u0275mod=i.Kb({type:d}),d.\u0275inj=i.Jb({factory:function(t){return new(t||d)},imports:[[n.b,r.g.forChild(u),p.a]]}),d)}}]);