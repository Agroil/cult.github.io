!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{wSJq:function(o,n,i){"use strict";i.r(n),i.d(n,"QuotesModule",function(){return k});var c=i("ofXK"),r=i("3Pt+"),a=i("jSPT"),s=i("cfV7"),l=i("fXoL"),b=i("5eHb"),d=i("tyNb"),u=["modal"],p=function(e){return{active:e}};function f(e,t){if(1&e){var o=l.Tb();l.Sb(0,"fieldset"),l.Sb(1,"input",16),l.Zb("change",function(){l.uc(o);var e=t.$implicit;return l.dc(2).onStyleSelect(e)}),l.Rb(),l.Sb(2,"label",17),l.Cc(3),l.Rb(),l.Rb()}if(2&e){var n=t.$implicit,i=l.dc(2);l.Bb(1),l.Cb("id",n.value),l.Bb(1),l.jc("ngClass",l.nc(4,p,n.value===i.selectedStyle)),l.Cb("for",n.value),l.Bb(1),l.Dc(n.viewValue)}}function m(e,t){if(1&e){var o=l.Tb();l.Sb(0,"div",4),l.Sb(1,"div",5),l.Sb(2,"div",6),l.Sb(3,"div",7),l.Sb(4,"h3"),l.Cc(5,"Quotes"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(6,"div",8),l.Sb(7,"div",6),l.Sb(8,"div",9),l.Sb(9,"div",10),l.Sb(10,"h2"),l.Cc(11,"Which style of product would you like ?"),l.Rb(),l.Sb(12,"p"),l.Cc(13," Our clients get the best results when they have our team dedicated to their business for extended periods of time. Ready to move forward? "),l.Rb(),l.Rb(),l.Rb(),l.Sb(14,"div",11),l.Bc(15,f,4,6,"fieldset",12),l.Rb(),l.Rb(),l.Rb(),l.Sb(16,"div",13),l.Sb(17,"div",6),l.Sb(18,"div",14),l.Sb(19,"button",15),l.Zb("click",function(){return l.uc(o),l.dc().setStep("budget")}),l.Cc(20," Next "),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb()}if(2&e){var n=l.dc();l.Bb(15),l.jc("ngForOf",n.productStyles)}}function g(e,t){if(1&e){var o=l.Tb();l.Sb(0,"fieldset"),l.Sb(1,"input",16),l.Zb("change",function(){l.uc(o);var e=t.$implicit;return l.dc(2).onCostSelect(e)}),l.Rb(),l.Sb(2,"label",17),l.Cc(3),l.Rb(),l.Rb()}if(2&e){var n=t.$implicit,i=l.dc(2);l.Bb(1),l.Cb("id",n.value),l.Bb(1),l.jc("ngClass",l.nc(4,p,n.value===i.selectedCost)),l.Cb("for",n.value),l.Bb(1),l.Dc(n.viewValue)}}function v(e,t){if(1&e){var o=l.Tb();l.Sb(0,"div",4),l.Sb(1,"div",5),l.Sb(2,"div",6),l.Sb(3,"div",7),l.Sb(4,"h3"),l.Cc(5,"Quotes"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(6,"div",8),l.Sb(7,"div",6),l.Sb(8,"div",9),l.Sb(9,"div",10),l.Sb(10,"h2"),l.Cc(11,"What is your budget?"),l.Rb(),l.Sb(12,"p"),l.Cc(13," We are looking forward to provide you best looking product that meets your budget and deadline. "),l.Rb(),l.Rb(),l.Rb(),l.Sb(14,"div",11),l.Bc(15,g,4,6,"fieldset",12),l.Rb(),l.Rb(),l.Rb(),l.Sb(16,"div",13),l.Sb(17,"div",6),l.Sb(18,"div",18),l.Sb(19,"button",15),l.Zb("click",function(){return l.uc(o),l.dc().setStep("style")}),l.Cc(20," Prev "),l.Rb(),l.Rb(),l.Sb(21,"div",19),l.Sb(22,"button",15),l.Zb("click",function(){return l.uc(o),l.dc().setStep("contact")}),l.Cc(23," Next "),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb()}if(2&e){var n=l.dc();l.Bb(15),l.jc("ngForOf",n.productCosts)}}function h(e,t){1&e&&(l.Sb(0,"span",31),l.Cc(1," Please enter email. "),l.Rb())}function S(e,t){if(1&e){var o=l.Tb();l.Sb(0,"div",4),l.Sb(1,"div",5),l.Sb(2,"div",6),l.Sb(3,"div",7),l.Sb(4,"h3"),l.Cc(5,"Quotes"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(6,"div",8),l.Sb(7,"div",6),l.Sb(8,"div",20),l.Sb(9,"div",10),l.Sb(10,"h2"),l.Cc(11,"Leave us your contacts"),l.Rb(),l.Sb(12,"p"),l.Cc(13,"We will come shortly with possible solutions"),l.Rb(),l.Rb(),l.Rb(),l.Sb(14,"div",21),l.Sb(15,"form",22),l.Zb("ngSubmit",function(){return l.uc(o),l.dc().sendContactForm()}),l.Sb(16,"div",23),l.Sb(17,"label",24),l.Cc(18,"Email *"),l.Rb(),l.Sb(19,"div",7),l.Ob(20,"input",25),l.Bc(21,h,2,0,"span",26),l.Rb(),l.Rb(),l.Sb(22,"div",23),l.Sb(23,"label",27),l.Cc(24," Message "),l.Rb(),l.Sb(25,"div",7),l.Ob(26,"textarea",28),l.Rb(),l.Rb(),l.Sb(27,"div",29),l.Sb(28,"button",30),l.Cc(29," Send "),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(30,"div",13),l.Sb(31,"div",6),l.Sb(32,"div",18),l.Sb(33,"button",15),l.Zb("click",function(){return l.uc(o),l.dc().setStep("budget")}),l.Cc(34," Prev "),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb()}if(2&e){var n=l.dc();l.Bb(15),l.jc("formGroup",n.contactForm),l.Bb(6),l.jc("ngIf",(n.contactForm.get("email").hasError("required")||n.contactForm.get("email").hasError("whitespace"))&&(n.contactForm.get("email").dirty||n.contactForm.get("email").touched))}}var w,y,C=((w=function(){function o(t,n,i,c){e(this,o),this.emailService=t,this.formBuilder=n,this.toastrService=i,this.router=c,this.currentStep="style",this.isDisabled=this.mobileCheck(),this.productStyles=[{value:"video_production",viewValue:"Video production"},{value:"motion_graphics",viewValue:"Motion graphics"},{value:"2d_animation",viewValue:"2d animation"},{value:"3d_animation",viewValue:"3d animation"},{value:"ui_ux",viewValue:"Ui/Ux"}],this.productCosts=[{value:"5000",viewValue:"$5,000"},{value:"10000",viewValue:"$10,000"},{value:"20000",viewValue:"$20,000"},{value:"50000",viewValue:"$50,000"}]}var n,i,c;return n=o,(i=[{key:"ngOnInit",value:function(){this.modal.open(),this.contactForm=this.formBuilder.group({email:["",[r.j.required,this.noWhitespaceValidator,r.j.email]],message:["",r.j.maxLength(500)]})}},{key:"onStyleSelect",value:function(e){this.selectedStyle=e.value}},{key:"onCostSelect",value:function(e){this.selectedCost=e.value}},{key:"setStep",value:function(e){this.currentStep=e}},{key:"sendContactForm",value:function(){var e=this;this.contactForm.valid?this.emailService.sendFromQuotes(this.contactForm.value,this.selectedStyle,this.selectedCost).then(function(t){e.toastrService.success("Your request was sent to Geek Power.")}).catch(function(t){e.toastrService.error("Can't send your request to Geek Power, please use phone or email to contact with us.")}):this.contactForm.markAllAsTouched()}},{key:"backToWorksPage",value:function(){this.router.navigate(["/works"])}},{key:"noWhitespaceValidator",value:function(e){return 0!==(e.value||"").trim().length?null:{whitespace:!0}}},{key:"mobileCheck",value:function(){var e,t=!1;return(e=navigator.userAgent||navigator.vendor||window.opera)&&(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t}}])&&t(n.prototype,i),c&&t(n,c),o}()).\u0275fac=function(e){return new(e||w)(l.Nb(s.a),l.Nb(r.b),l.Nb(b.b),l.Nb(d.f))},w.\u0275cmp=l.Hb({type:w,selectors:[["app-quotes"]],viewQuery:function(e,t){var o;1&e&&l.Fc(u,3),2&e&&l.rc(o=l.ac())&&(t.modal=o.first)},decls:6,vars:4,consts:[[3,"closeModal"],["modal",""],[1,"quotes-wrapper"],["class","quotes-step",4,"ngIf"],[1,"quotes-step"],[1,"quotes-header"],[1,"row"],[1,"col"],[1,"quotes-body"],[1,"col-12","col-sm-8","quotes-body-text-wrapper"],[1,"quotes-body-text"],[1,"col-12","col-sm-4","quotes-body-select"],[4,"ngFor","ngForOf"],[1,"quotes-footer"],[1,"col-md-2","offset-md-10","text-center"],[1,"quotes-button","hvr-underline-from-left",3,"click"],["type","radio","name","select_style",3,"change"],[3,"ngClass"],[1,"col-md-2","text-center"],[1,"col-md-2","offset-md-8","text-center"],[1,"col-12","col-sm-6","quotes-body-text-wrapper"],[1,"col-12","col-sm-6","quotes-body-select"],["name","contactForm","novalidate","","autocomplete","off",3,"formGroup","ngSubmit"],[1,"form-group","py-4","row"],["for","emailField",1,"col-3","col-form-label"],["type","text","id","emailField","formControlName","email","required","",1,"form-control"],["class","error",4,"ngIf"],["for","messageField",1,"col-3","col-form-label"],["id","messageField","rows","1","formControlName","message",1,"form-control"],[1,"text-right"],["type","submit",1,"btn","btn-primary","mb-2","hvr-sweep-to-right"],[1,"error"]],template:function(e,t){1&e&&(l.Sb(0,"app-video-popup",0,1),l.Zb("closeModal",function(){return t.backToWorksPage()}),l.Sb(2,"div",2),l.Bc(3,m,21,1,"div",3),l.Bc(4,v,24,1,"div",3),l.Bc(5,S,35,2,"div",3),l.Rb(),l.Rb()),2&e&&(l.Bb(2),l.jc("@.disabled",t.isDisabled),l.Bb(1),l.jc("ngIf","style"===t.currentStep),l.Bb(1),l.jc("ngIf","budget"===t.currentStep),l.Bb(1),l.jc("ngIf","contact"===t.currentStep))},directives:[a.a,c.k,c.j,c.i,r.k,r.g,r.d,r.a,r.f,r.c,r.i],styles:[".quotes-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:center;align-content:center;height:100%}.quotes-header[_ngcontent-%COMP%]{position:fixed;top:40px}.quotes-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-style:normal;font-weight:600;font-size:24px;line-height:24px;letter-spacing:1px;color:#fff;opacity:.5}.quotes-body-text-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;align-items:center;align-content:center}.quotes-body-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-style:normal;font-weight:600;font-size:48px;line-height:48px;letter-spacing:1px;color:#fff;opacity:.5}.quotes-body-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;font-size:16px;line-height:24px;letter-spacing:1px;color:#fff;opacity:.5}.quotes-body-select[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{display:none}.quotes-body-select[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{text-align:center;padding:6px}.quotes-body-select[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{cursor:pointer;font-style:normal;font-weight:300;font-size:24px;line-height:24px;letter-spacing:1px;color:#fff;opacity:.5;transition:all .5s ease}.quotes-body-select[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover{transform:scale(1.2);text-decoration:underline}.quotes-body-select[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + label.active[_ngcontent-%COMP%]{font-style:normal;font-weight:300;font-size:24px;line-height:24px;letter-spacing:1px;color:#fff;transform:scale(1.2);text-decoration:underline;opacity:1}.quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:600px}.quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:none;border-bottom:2px solid #ccc;background:transparent;outline:none;box-shadow:none;font-size:14px}.quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{color:#666;background:transparent;border-color:#6b6b6b;outline:none;box-shadow:none}.quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{position:absolute}.quotes-body-select[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:24px;text-transform:uppercase;font-weight:bolder;background-color:transparent;border-color:#fff;border-radius:0;line-height:2;padding-left:40px;padding-right:40px}.quotes-footer[_ngcontent-%COMP%]{position:fixed;bottom:40px;left:0;width:100%}.quotes-step[_ngcontent-%COMP%]{position:relative;margin:0 auto;width:95%}"]}),w),x=i("AKxs"),R=[{path:"",component:C}],k=((y=function t(){e(this,t)}).\u0275fac=function(e){return new(e||y)},y.\u0275mod=l.Lb({type:y}),y.\u0275inj=l.Kb({imports:[[c.c,d.j.forChild(R),r.e,r.h,x.a]]}),y)}}])}();