!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{bw5h:function(o,n,i){"use strict";i.r(n),i.d(n,"CategoryModule",function(){return R});var r=i("ofXK"),a=i("tyNb"),c=i("4ik+"),s=i("8UQ/"),l=i("fXoL"),d=i("jhN1"),g=i("jSPT"),p=i("Knxr"),u=i("YYwF");function b(e,t){1&e&&(l.Qb(0),l.Sb(1,"p",18),l.Cc(2," Looking for reaching your target audience in such a way your users expect from you? Consider motion graphics and animated promotional videos for business! "),l.Rb(),l.Sb(3,"p",19),l.Cc(4," There are too many pros of animated promotional videos to fit them in just a few words, but in a nutshell, this is the top way to attract attention to your business, easily explain any complex concept, visualize your problem-solving ideas with motion graphics and make your users dwell on your website and social media profiles. Being the top-consumed content type to date, promotion animation is able to power and skyrocket your marketing strategy. "),l.Rb(),l.Sb(5,"p",19),l.Cc(6," Wonder what are the other benefits an animated promo video can bring to your table? Reach us to discover them! "),l.Rb(),l.Pb())}function h(e,t){1&e&&(l.Qb(0),l.Sb(1,"p",18),l.Cc(2," Want to get an all-in-one solution for your marketing strategies, interaction with customers and partners, and attracting investments to your future projects? Creative video production potential goes beyond these tasks! "),l.Rb(),l.Sb(3,"p",19),l.Cc(4," In 2021, an average Internet user is expected to spend 100 minutes per day watching online videos. This is the right time and place to catch their attention with your brand voice, marketing message, and unique value proposition revealed in your engaging video. What is more, the potential of video production for business is so unlimited that it can be easily used for any project, regardless of the specifics. The only thing you need is some technical skills and knowledge, a bit of creativity, and a video production agency you may consult with any time. "),l.Rb(),l.Sb(5,"p",19),l.Cc(6," Ready to sharpen your video marketing strategy for 2020 and beyond? We are here to make your ideas happen! "),l.Rb(),l.Pb())}function m(e,t){1&e&&(l.Qb(0),l.Sb(1,"p",18),l.Cc(2," In a dynamic mobile application market, the winner is the one who can offer the best solution to the user's problem for a reasonable fee, combining simplicity and quality within one application. The simplicity and quality as the parts of the whole may be described with one word - mobile user experience. "),l.Rb(),l.Sb(3,"p",19),l.Cc(4," The experience your mobile app offers to your users may become your competitive edge or the reason to never use your solution again. "),l.Rb(),l.Sb(5,"p",19),l.Cc(6," With the first and the ultimate goal in mind, we are here to offer you the high-end mobile UI/UX design creation to meet the changing expectations of your target users, follow the latest mobile and web design trends, and add value to your offer through the engaging and enjoyable mobile user experience (UX). "),l.Rb(),l.Sb(7,"p",19),l.Cc(8," The top-notch UI and UX design will never be a challenge for your project since our mobile developers are right here to help with your mobile design architecture and prototyping. Feel free to review the successful projects we\u2019ve contributed to and get in touch with us for more details and instant assistance in mobile UI design and development! "),l.Rb(),l.Pb())}var y=function(e,t){return[e,t]},f=function(e,t,o){return{pageTitle:e,metaKeywords:t,metaDescritpion:o}},v=function(e){return{data:e}},w=function(e){return{active:e}};function C(e,t){if(1&e&&(l.Sb(0,"div",20),l.Sb(1,"a",21),l.Zb("touchstart",function(){return t.$implicit.active=1})("touchend",function(){return t.$implicit.active=0})("mouseleave",function(){return t.$implicit.active=0}),l.Ob(2,"app-picture",22),l.Sb(3,"div",23),l.Sb(4,"h3"),l.Cc(5),l.Rb(),l.Sb(6,"p"),l.Cc(7),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&e){var o=t.$implicit;l.Bb(1),l.jc("routerLink",l.oc(6,y,"/"+o.category,o.urlTitle))("state",l.nc(13,v,l.pc(9,f,o.pageTitle,o.metaKeywords,o.metaDescritpion)))("ngClass",l.nc(15,w,o.active)),l.Bb(1),l.jc("imagesData",o.imagePreview),l.Bb(3),l.Dc(o.title),l.Bb(2),l.Dc(o.subtitle)}}var k,P,O=((k=function(){function o(t,n,i,r){var s=this;e(this,o),this.router=t,this.postsService=n,this.titleService=i,this.metaService=r,this.title="",this.videoUrl="",this.reelVideoUrl="",this.pageTitle="",this.metaKeywords=[],this.metaDescritpion="",this.categories=["video","animation","mobile"],this.router.events.pipe(Object(c.filter)(function(e){return e instanceof a.c})).subscribe(function(e){if(s.categories.indexOf(e.url)){var t=e.url.split("/").filter(function(e){return!!e}),o=t[t.length-1];s.categories.includes(o)&&(s.workMode=o,s.setStatic(),s.getDataByCategory()),s.pageTitle&&s.titleService.setTitle(s.pageTitle),Array.isArray(s.metaKeywords)&&s.metaKeywords.length&&s.metaService.updateTag({name:"keywords",content:s.metaKeywords.join(",")}),s.metaDescritpion&&s.metaService.updateTag({name:"description",content:s.metaDescritpion})}})}var n,i,r;return n=o,(i=[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){}},{key:"goToPost",value:function(e){this.postsService.currentPost=e,localStorage.setItem("current_post",JSON.stringify(e)),this.router.navigate(["/post"])}},{key:"setStatic",value:function(){switch(this.workMode){case"video":this.title="Video Production",this.reelVideoUrl="https://player.vimeo.com/video/481588124?title=0&byline=0&portrait=0&autoplay=1&loop=1&autopause=0",this.videoUrl="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=W0LHTWG-UmQ",this.pageTitle="Creative video production | Geek Powr Media",this.metaKeywords=["creative video production","video production","video production agency"],this.metaDescritpion="Want to get an all-in-one solution for your marketing strategies, interaction with customers and partners, and attracting investments to your future projects? Video production agency potential goes beyond these tasks!";break;case"animation":this.title="Promo animation",this.reelVideoUrl="https://player.vimeo.com/video/479983049?title=0&byline=0&portrait=0&autoplay=1&loop=1&autopause=0",this.videoUrl="https://www.youtube.com/embed/f5ClCTAuIZc?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=W2YoihjFTJ0",this.pageTitle="Promo animation - get animated promotional videos`",this.metaKeywords=["promo animation","animated promotional video","promotion animation","animated promo video","animated promotional videos for business"],this.metaDescritpion="Consider motion graphics and animated promotional videos for business!";break;case"mobile":this.title="Mobile & Platforms",this.reelVideoUrl="https://player.vimeo.com/video/479493339?title=0&byline=0&portrait=0&autoplay=1&loop=1&autopause=0",this.videoUrl="https://www.youtube.com/embed/CVsI_okkQEk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=CVsI_okkQEk",this.pageTitle="Mobile web design | Geek Powr Media",this.metaKeywords=["architecture mobile design","mobile web design","mobile ui design","mobile ux","mobile design ui / ux","mobile ux design","ux design for mobile developers"],this.metaDescritpion="Create a unique mobile design ui/ux with us. Our professionals implement only the best ideas."}}},{key:"trackByFn",value:function(e,t){return t.id}},{key:"sortByOrder",value:function(e,t){return e.order<t.order?-1:e.order>t.order?1:0}},{key:"getDataByCategory",value:function(){var e=this,t=this.postsService.getData().filter(function(t){return t.category===e.workMode});this.data=t.sort(this.sortByOrder)}}])&&t(n.prototype,i),r&&t(n,r),o}()).\u0275fac=function(e){return new(e||k)(l.Nb(a.e),l.Nb(s.a),l.Nb(d.d),l.Nb(d.c))},k.\u0275cmp=l.Hb({type:k,selectors:[["app-category"]],decls:31,vars:15,consts:[[1,"category"],[1,"category-header"],[1,"container"],[1,"row"],[1,"col"],[1,"hvr-sweep-to-right",3,"click"],[1,"video-background"],[1,"video-foreground"],["frameBorder","0","allowfullscreen","","loading","lazy",3,"src"],[1,"category-body"],[1,"row","flex-column-reverse"],[1,"col-12"],[1,"row",3,"ngSwitch"],[4,"ngSwitchCase"],[1,"category-body-title","w-100"],["class","col-lg-4 p-0",4,"ngFor","ngForOf","ngForTrackBy"],["videoPopUp",""],["frameBorder","0","allowfullscreen","","allow","autoplay; fullscreen","loading","lazy",1,"frame",3,"src"],[1,"col-12","mt-5","pt-5","category-paragraph"],[1,"col-12","category-paragraph"],[1,"col-lg-4","p-0"],[1,"category-body-item",3,"routerLink","state","ngClass","touchstart","touchend","mouseleave"],[3,"imagesData"],[1,"category-body-item-info"]],template:function(e,t){if(1&e){var o=l.Tb();l.Sb(0,"div",0),l.Sb(1,"div",1),l.Sb(2,"div",2),l.Sb(3,"div",3),l.Sb(4,"div",4),l.Sb(5,"h1"),l.Cc(6),l.Rb(),l.Sb(7,"button",5),l.Zb("click",function(){return l.uc(o),l.sc(28).open()}),l.Cc(8," View Latest Reel "),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(9,"div",6),l.Sb(10,"div",7),l.Ob(11,"iframe",8),l.ec(12,"safe"),l.Rb(),l.Rb(),l.Rb(),l.Sb(13,"div",9),l.Sb(14,"div",2),l.Sb(15,"div",10),l.Sb(16,"div",11),l.Sb(17,"div",12),l.Bc(18,b,7,0,"ng-container",13),l.Bc(19,h,7,0,"ng-container",13),l.Bc(20,m,9,0,"ng-container",13),l.Rb(),l.Rb(),l.Sb(21,"div",11),l.Sb(22,"div",3),l.Sb(23,"div",14),l.Sb(24,"h2"),l.Cc(25,"Latest and Greatest"),l.Rb(),l.Rb(),l.Bc(26,C,8,17,"div",15),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(27,"app-video-popup",null,16),l.Ob(29,"iframe",17),l.ec(30,"safe"),l.Rb()}2&e&&(l.Bb(6),l.Dc(t.title),l.Bb(5),l.jc("src",l.gc(12,9,t.videoUrl,"resourceUrl"),l.wc),l.Bb(6),l.jc("ngSwitch",t.workMode),l.Bb(1),l.jc("ngSwitchCase","animation"),l.Bb(1),l.jc("ngSwitchCase","video"),l.Bb(1),l.jc("ngSwitchCase","mobile"),l.Bb(6),l.jc("ngForOf",t.data)("ngForTrackBy",t.trackByFn),l.Bb(3),l.jc("src",l.gc(30,12,t.reelVideoUrl,"resourceUrl"),l.wc))},directives:[r.m,r.n,r.j,g.a,a.h,r.i,p.a],pipes:[u.a],styles:[".category-header[_ngcontent-%COMP%]{height:420px;outline:1px solid hsla(0,0%,100%,.2);overflow:hidden}.category-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .category-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:gilroy-bold;margin-top:200px;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff}.category-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:48px;margin-bottom:30px;outline:none;width:280px;height:72px;border:1px solid #fff;font-weight:600;font-size:24px;line-height:24px;text-align:center;letter-spacing:1px;text-transform:uppercase;color:#fff;background-color:transparent}.category-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#000}.category-body[_ngcontent-%COMP%]{padding-bottom:50px}.category-body-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .category-body-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:50px;font-family:gilroy-bold;font-style:normal;font-weight:700;font-size:64px;line-height:1;letter-spacing:1px;text-transform:capitalize;color:#fff}.category-body-item[_ngcontent-%COMP%]{cursor:pointer;position:relative;height:406px;outline:1px solid #fff;margin:1px;background-color:#000;background-position:top;background-repeat:no-repeat;background-size:135%;display:block}.category-body-item.active[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover{text-decoration:none;-webkit-animation:shrink 2s infinite alternate;animation:shrink 2s infinite alternate;color:#fff}.category-body-item.active[_ngcontent-%COMP%]   .category-body-item-info[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]{height:150px;background-color:#fff;border-top:1px solid #cdcdcd}.category-body-item.active[_ngcontent-%COMP%]   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item.active[_ngcontent-%COMP%]   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item[_ngcontent-%COMP%]:hover   .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000}.category-body-item-info[_ngcontent-%COMP%]{height:120px;position:absolute;bottom:0;width:100%;border-top:1px solid #fff;transition:all .5s ease;background-color:#1a1a1a}.category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:600;font-size:24px;margin-top:22px}.category-body-item-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-style:normal;line-height:24px;letter-spacing:1px;text-transform:capitalize;color:#fff;margin-left:70px;margin-right:10px}.category-body-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;font-size:14px;margin-top:24px}.category-paragraph[_ngcontent-%COMP%]{font-family:gilroy;font-style:normal;font-weight:400;font-size:18px;color:#fff}.video-background[_ngcontent-%COMP%]{background:#000;position:relative;top:-100%;right:0;bottom:0;left:0;z-index:-99;height:100%}.video-background[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .video-foreground[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}@media (min-aspect-ratio:16/9){.video-foreground[_ngcontent-%COMP%]{height:300%;top:-100%}}@media (max-aspect-ratio:16/9){.video-foreground[_ngcontent-%COMP%]{width:300%;left:-100%}}@-webkit-keyframes shrink{0%{background-size:135%}to{background-size:150%}}@keyframes shrink{0%{background-size:135%}to{background-size:150%}}"]}),k),x=i("+G0P"),M=i("4NX6"),S=i("AKxs"),_=[{path:"",component:O},{path:":id",loadChildren:function(){return i.e(13).then(i.bind(null,"Rx/Z")).then(function(e){return e.PostModule})}}],R=((P=function t(){e(this,t)}).\u0275fac=function(e){return new(e||P)},P.\u0275mod=l.Lb({type:P}),P.\u0275inj=l.Kb({imports:[[r.c,a.i.forChild(_),x.a,S.a,M.a]]}),P)}}])}();