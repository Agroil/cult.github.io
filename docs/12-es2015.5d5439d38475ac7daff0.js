(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{bw5h:function(t,o,e){"use strict";e.r(o),e.d(o,"CategoryModule",(function(){return h}));var n=e("ofXK"),i=e("fXoL"),r=e("tyNb"),a=e("8UQ/"),c=e("YYwF");const s=function(t){return{"background-image":t}},g=function(t){return["/post",t]};function b(t,o){if(1&t&&(i.Qb(0,"div",12),i.Qb(1,"div",13),i.Qb(2,"div",14),i.Qb(3,"h3"),i.xc(4),i.Pb(),i.Qb(5,"p"),i.xc(6),i.Pb(),i.Pb(),i.Pb(),i.Pb()),2&t){const t=o.$implicit;i.zb(1),i.hc("ngStyle",i.kc(4,s,"url("+t.imageUrl+")"))("routerLink",i.kc(6,g,t.id)),i.zb(3),i.yc(t.title),i.zb(2),i.yc(t.subtitle)}}let d=(()=>{class t{constructor(t,o,e){this.route=t,this.router=o,this.postsService=e,this.title="",this.videoUrl="",this.sub=this.route.queryParams.subscribe(t=>{this.workMode=t.name,this.setStatic(),this.getDataByCategory()})}ngOnInit(){}ngOnDestroy(){this.sub.unsubscribe()}goToPost(t){this.postsService.currentPost=t,localStorage.setItem("current_post",JSON.stringify(t)),this.router.navigate(["/post"])}setStatic(){switch(this.workMode){case"video":this.title="Video Production",this.videoUrl="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=W0LHTWG-UmQ";break;case"animation":this.title="Animation",this.videoUrl="https://www.youtube.com/embed/QyQ_6qbsvnY?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=QyQ_6qbsvnY";break;case"mobile":this.title="Mobile & Platforms",this.videoUrl="https://www.youtube.com/embed/eHX86nhM4Eg?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=eHX86nhM4Eg"}}trackByFn(t,o){return o.id}sortByOrder(t,o){return t.order<o.order?-1:t.order>o.order?1:0}getDataByCategory(){const t=this.postsService.getData().filter(t=>t.category===this.workMode);this.data=t.sort(this.sortByOrder)}}return t.\u0275fac=function(o){return new(o||t)(i.Lb(r.a),i.Lb(r.d),i.Lb(a.a))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-category"]],decls:20,vars:7,consts:[[1,"category"],[1,"category-header"],[1,"container"],[1,"row"],[1,"col"],[1,"hvr-sweep-to-right"],[1,"video-background"],[1,"video-foreground"],["frameBorder","0","allowfullscreen","",3,"src"],[1,"category-body"],[1,"category-body-title"],["class","col-lg-4 p-0",4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-lg-4","p-0"],[1,"category-body-item",3,"ngStyle","routerLink"],[1,"category-body-item-info"]],template:function(t,o){1&t&&(i.Qb(0,"div",0),i.Qb(1,"div",1),i.Qb(2,"div",2),i.Qb(3,"div",3),i.Qb(4,"div",4),i.Qb(5,"h3"),i.xc(6),i.Pb(),i.Qb(7,"button",5),i.xc(8,"View Latest Reel"),i.Pb(),i.Pb(),i.Pb(),i.Pb(),i.Qb(9,"div",6),i.Qb(10,"div",7),i.Mb(11,"iframe",8),i.cc(12,"safe"),i.Pb(),i.Pb(),i.Pb(),i.Qb(13,"div",9),i.Qb(14,"div",2),i.Qb(15,"div",10),i.Qb(16,"h2"),i.xc(17,"Latest and Greatest"),i.Pb(),i.Pb(),i.Qb(18,"div",3),i.wc(19,b,7,8,"div",11),i.Pb(),i.Pb(),i.Pb(),i.Pb()),2&t&&(i.zb(6),i.yc(o.title),i.zb(5),i.hc("src",i.ec(12,4,o.videoUrl,"resourceUrl"),i.rc),i.zb(8),i.hc("ngForOf",o.data)("ngForTrackBy",o.trackByFn))},directives:[n.j,n.l,r.e],pipes:[c.a],styles:[".category-header[_ngcontent-%COMP%]{height:420px;outline:1px solid hsla(0,0%,100%,.2);overflow:hidden}.category-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:gilroy-bold;margin-top:200px;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff}.category-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:48px;margin-bottom:30px;outline:none;width:280px;height:72px;border:1px solid #fff;font-weight:600;font-size:24px;line-height:24px;text-align:center;letter-spacing:1px;text-transform:uppercase;color:#fff;background-color:transparent}.category-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#000}.category-body[_ngcontent-%COMP%]{padding-bottom:50px}.category-body-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:gilroy-bold;font-style:normal;font-weight:700;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff;margin-top:107px;margin-bottom:49px}.category-body-item[_ngcontent-%COMP%]{cursor:pointer;position:relative;height:406px;outline:1px solid #fff;margin:1px;background-color:#000;background-position:top;background-repeat:no-repeat;background-size:135%}.category-body-item[_ngcontent-%COMP%]:hover{-webkit-animation:shrink 2s infinite alternate;animation:shrink 2s infinite alternate;color:#fff}.category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]{height:150px;background-color:#fff;border-top:1px solid #cdcdcd}.category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.category-body-item-info[_ngcontent-%COMP%]{height:120px;position:absolute;bottom:0;width:100%;border-top:1px solid #fff;transition:all .5s ease;background-color:#1a1a1a}.category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:600;font-size:24px;margin-top:22px}.category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-style:normal;line-height:24px;letter-spacing:1px;text-transform:capitalize;color:#fff;margin-left:70px;margin-right:10px}.category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;font-size:14px;margin-top:24px}.video-background[_ngcontent-%COMP%]{background:#000;position:relative;top:-100%;right:0;bottom:0;left:0;z-index:-99;height:100%}.video-background[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .video-foreground[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}@media (min-aspect-ratio:16/9){.video-foreground[_ngcontent-%COMP%]{height:300%;top:-100%}}@media (max-aspect-ratio:16/9){.video-foreground[_ngcontent-%COMP%]{width:300%;left:-100%}}@-webkit-keyframes shrink{0%{background-size:135%}to{background-size:150%}}@keyframes shrink{0%{background-size:135%}to{background-size:150%}}"]}),t})();var l=e("+G0P");const p=[{path:"",component:d}];let h=(()=>{class t{}return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(o){return new(o||t)},imports:[[n.b,r.h.forChild(p),l.a]]}),t})()}}]);