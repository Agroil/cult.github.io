(this["webpackJsonpbicovery-deploy"]=this["webpackJsonpbicovery-deploy"]||[]).push([[14],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var a=n(5),o=n.n(a),r=n(196),s=function(e){return o.a.createElement(r.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},i=function(e){return o.a.createElement("div",{className:"separator ".concat(e.className)})}},155:function(e,t,n){"use strict";var a=n(12),o=n(16),r=n(114),s=n(108),i=n(5),c=n.n(i),l=n(18),u=n.n(l),p=n(95),d=n.n(p),m=n(97),h={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:m.e,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(r.a)(n)),n}Object(s.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],r=e.block,s=e.className,i=e.close,l=e.cssModule,u=e.color,p=e.outline,h=e.size,b=e.tag,f=e.innerRef,g=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&"undefined"===typeof g.children&&(g.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(p?"-outline":"")+"-"+u,O=Object(m.c)(d()(s,{close:i},i||"btn",i||v,!!h&&"btn-"+h,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),l);g.href&&"button"===b&&(b="a");var E=i?"Close":null;return c.a.createElement(b,Object(a.a)({type:"button"===b&&g.onClick?"button":void 0},g,{className:O,ref:f,onClick:this.onClick,"aria-label":n||E}))},t}(c.a.Component);b.propTypes=h,b.defaultProps={color:"secondary",tag:"button"},t.a=b},196:function(e,t,n){"use strict";var a=n(12),o=n(16),r=n(5),s=n.n(r),i=n(18),c=n.n(i),l=n(95),u=n.n(l),p=n(97),d=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:d,offset:d})]),h={tag:p.e,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,r=e.widths,i=e.tag,c=Object(o.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(t,a){var o=e[t];if(delete c[t],o||""===o){var r=!a;if(Object(p.a)(o)){var s,i=r?"-":"-"+t+"-",d=f(r,t,o.size);l.push(Object(p.c)(u()(((s={})[d]=o.size||""===o.size,s["order"+i+o.order]=o.order||0===o.order,s["offset"+i+o.offset]=o.offset||0===o.offset,s)),n))}else{var m=f(r,t,o);l.push(m)}}})),l.length||l.push("col");var d=Object(p.c)(u()(t,l),n);return s.a.createElement(i,Object(a.a)({},c,{className:d}))};g.propTypes=h,g.defaultProps=b,t.a=g},197:function(e,t,n){"use strict";var a=n(12),o=n(16),r=n(5),s=n.n(r),i=n(18),c=n.n(i),l=n(95),u=n.n(l),p=n(97),d=c.a.oneOfType([c.a.number,c.a.string]),m={tag:p.e,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},h={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,n=e.cssModule,r=e.noGutters,i=e.tag,c=e.form,l=e.widths,d=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];l.forEach((function(t,n){var a=e[t];if(delete d[t],a){var o=!n;m.push(o?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var h=Object(p.c)(u()(t,r?"no-gutters":null,c?"form-row":"row",m),n);return s.a.createElement(i,Object(a.a)({},d,{className:h}))};b.propTypes=m,b.defaultProps=h,t.a=b},529:function(e,t,n){"use strict";n.r(t);var a=n(101),o=n(102),r=n(105),s=n(103),i=n(104),c=n(5),l=n.n(c),u=n(179),p=n(30),d=n(113),m=n(135);function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(Object(n));"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){Object(m.a)(e,t,n[t])}))}return e}var b=n(12),f=n(114),g=n(108),v=n(18),O=n.n(v),E=n(16),y=n(136),C=n(95),w=n.n(C),j=l.a.createContext({}),k=n(97),x={a11y:O.a.bool,disabled:O.a.bool,direction:O.a.oneOf(["up","down","left","right"]),group:O.a.bool,isOpen:O.a.bool,nav:O.a.bool,active:O.a.bool,addonType:O.a.oneOfType([O.a.bool,O.a.oneOf(["prepend","append"])]),size:O.a.string,tag:k.e,toggle:O.a.func,children:O.a.node,className:O.a.string,cssModule:O.a.object,inNavbar:O.a.bool,setActiveFromChild:O.a.bool},N=function(e){function t(t){var n;return(n=e.call(this,t)||this).addEvents=n.addEvents.bind(Object(f.a)(n)),n.handleDocumentClick=n.handleDocumentClick.bind(Object(f.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(f.a)(n)),n.removeEvents=n.removeEvents.bind(Object(f.a)(n)),n.toggle=n.toggle.bind(Object(f.a)(n)),n.containerRef=l.a.createRef(),n}Object(g.a)(t,e);var n=t.prototype;return n.getContextValue=function(){return{toggle:this.toggle,isOpen:this.props.isOpen,direction:"down"===this.props.direction&&this.props.dropup?"up":this.props.direction,inNavbar:this.props.inNavbar,disabled:this.props.disabled}},n.componentDidMount=function(){this.handleProps()},n.componentDidUpdate=function(e){this.props.isOpen!==e.isOpen&&this.handleProps()},n.componentWillUnmount=function(){this.removeEvents()},n.getContainer=function(){return this.containerRef.current},n.getMenuCtrl=function(){return this._$menuCtrl?this._$menuCtrl:(this._$menuCtrl=this.getContainer().querySelector("[aria-expanded]"),this._$menuCtrl)},n.getMenuItems=function(){return[].slice.call(this.getContainer().querySelectorAll('[role="menuitem"]'))},n.addEvents=function(){var e=this;["click","touchstart","keyup"].forEach((function(t){return document.addEventListener(t,e.handleDocumentClick,!0)}))},n.removeEvents=function(){var e=this;["click","touchstart","keyup"].forEach((function(t){return document.removeEventListener(t,e.handleDocumentClick,!0)}))},n.handleDocumentClick=function(e){if(!e||3!==e.which&&("keyup"!==e.type||e.which===k.b.tab)){var t=this.getContainer();(!t.contains(e.target)||t===e.target||"keyup"===e.type&&e.which!==k.b.tab)&&this.toggle(e)}},n.handleKeyDown=function(e){var t=this;if(!/input|textarea/i.test(e.target.tagName)&&(k.b.tab!==e.which||"menuitem"===e.target.getAttribute("role")&&this.props.a11y)&&(e.preventDefault(),!this.props.disabled&&(this.getMenuCtrl()===e.target&&(!this.props.isOpen&&[k.b.space,k.b.enter,k.b.up,k.b.down].indexOf(e.which)>-1?(this.toggle(e),setTimeout((function(){return t.getMenuItems()[0].focus()}))):this.props.isOpen&&e.which===k.b.esc&&this.toggle(e)),this.props.isOpen&&"menuitem"===e.target.getAttribute("role"))))if([k.b.tab,k.b.esc].indexOf(e.which)>-1)this.toggle(e),this.getMenuCtrl().focus();else if([k.b.space,k.b.enter].indexOf(e.which)>-1)e.target.click(),this.getMenuCtrl().focus();else if([k.b.down,k.b.up].indexOf(e.which)>-1||[k.b.n,k.b.p].indexOf(e.which)>-1&&e.ctrlKey){var n=this.getMenuItems(),a=n.indexOf(e.target);k.b.up===e.which||k.b.p===e.which&&e.ctrlKey?a=0!==a?a-1:n.length-1:(k.b.down===e.which||k.b.n===e.which&&e.ctrlKey)&&(a=a===n.length-1?0:a+1),n[a].focus()}else if(k.b.end===e.which){var o=this.getMenuItems();o[o.length-1].focus()}else if(k.b.home===e.which){this.getMenuItems()[0].focus()}else if(e.which>=48&&e.which<=90)for(var r=this.getMenuItems(),s=String.fromCharCode(e.which).toLowerCase(),i=0;i<r.length;i+=1){if((r[i].textContent&&r[i].textContent[0].toLowerCase())===s){r[i].focus();break}}},n.handleProps=function(){this.props.isOpen?this.addEvents():this.removeEvents()},n.toggle=function(e){return this.props.disabled?e&&e.preventDefault():this.props.toggle(e)},n.render=function(){var e,t,n=Object(k.d)(this.props,["toggle","disabled","inNavbar","a11y"]),a=n.className,o=n.cssModule,r=n.direction,s=n.isOpen,i=n.group,c=n.size,u=n.nav,p=n.setActiveFromChild,d=n.active,m=n.addonType,h=n.tag,f=Object(E.a)(n,["className","cssModule","direction","isOpen","group","size","nav","setActiveFromChild","active","addonType","tag"]),g=h||(u?"li":"div"),v=!1;p&&l.a.Children.map(this.props.children[1].props.children,(function(e){e&&e.props.active&&(v=!0)}));var O=Object(k.c)(w()(a,"down"!==r&&"drop"+r,!(!u||!d)&&"active",!(!p||!v)&&"active",((e={})["input-group-"+m]=m,e["btn-group"]=i,e["btn-group-"+c]=!!c,e.dropdown=!i&&!m,e.show=s,e["nav-item"]=u,e)),o);return l.a.createElement(j.Provider,{value:this.getContextValue()},l.a.createElement(y.c,null,l.a.createElement(g,Object(b.a)({},f,((t={})["string"===typeof g?"ref":"innerRef"]=this.containerRef,t),{onKeyDown:this.handleKeyDown,className:O}))))},t}(l.a.Component);N.propTypes=x,N.defaultProps={a11y:!0,isOpen:!1,direction:"down",nav:!1,active:!1,addonType:!1,inNavbar:!1,setActiveFromChild:!1};var M=N,S=["defaultOpen"],F=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},n.toggle=n.toggle.bind(Object(f.a)(n)),n}Object(g.a)(t,e);var n=t.prototype;return n.toggle=function(e){this.setState({isOpen:!this.state.isOpen}),this.props.onToggle&&this.props.onToggle(e,!this.state.isOpen)},n.render=function(){return l.a.createElement(M,Object(b.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(k.d)(this.props,S)))},t}(c.Component);F.propTypes=h({defaultOpen:O.a.bool,onToggle:O.a.func},M.propTypes);var T=n(189),L=n(155),D={caret:O.a.bool,color:O.a.string,children:O.a.node,className:O.a.string,cssModule:O.a.object,disabled:O.a.bool,onClick:O.a.func,"aria-haspopup":O.a.bool,split:O.a.bool,tag:k.e,nav:O.a.bool},I=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(f.a)(n)),n}Object(g.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled||this.context.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},n.render=function(){var e,t=this,n=this.props,a=n.className,o=n.color,r=n.cssModule,s=n.caret,i=n.split,c=n.nav,u=n.tag,p=Object(E.a)(n,["className","color","cssModule","caret","split","nav","tag"]),d=p["aria-label"]||"Toggle Dropdown",m=Object(k.c)(w()(a,{"dropdown-toggle":s||i,"dropdown-toggle-split":i,"nav-link":c}),r),h=p.children||l.a.createElement("span",{className:"sr-only"},d);return c&&!u?(e="a",p.href="#"):u?e=u:(e=L.a,p.color=o,p.cssModule=r),this.context.inNavbar?l.a.createElement(e,Object(b.a)({},p,{className:m,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:h})):l.a.createElement(T.a,null,(function(n){var a,o=n.ref;return l.a.createElement(e,Object(b.a)({},p,((a={})["string"===typeof e?"ref":"innerRef"]=o,a),{className:m,onClick:t.onClick,"aria-expanded":t.context.isOpen,children:h}))}))},t}(l.a.Component);I.propTypes=D,I.defaultProps={"aria-haspopup":!0,color:"secondary"},I.contextType=j;var z=I,P=n(157),R={tag:k.e,children:O.a.node.isRequired,right:O.a.bool,flip:O.a.bool,modifiers:O.a.object,className:O.a.string,cssModule:O.a.object,persist:O.a.bool,positionFixed:O.a.bool},K={flip:{enabled:!1}},q={up:"top",left:"left",right:"right",down:"bottom"},A=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.className,a=t.cssModule,o=t.right,r=t.tag,s=t.flip,i=t.modifiers,c=t.persist,u=t.positionFixed,p=Object(E.a)(t,["className","cssModule","right","tag","flip","modifiers","persist","positionFixed"]),d=Object(k.c)(w()(n,"dropdown-menu",{"dropdown-menu-right":o,show:this.context.isOpen}),a),m=r;if(c||this.context.isOpen&&!this.context.inNavbar){var f=(q[this.context.direction]||"bottom")+"-"+(o?"end":"start"),g=s?i:h({},i,{},K),v=!!u;return l.a.createElement(P.a,{placement:f,modifiers:g,positionFixed:v},(function(t){var n=t.ref,a=t.style,o=t.placement;return l.a.createElement(m,Object(b.a)({tabIndex:"-1",role:"menu",ref:n,style:a},p,{"aria-hidden":!e.context.isOpen,className:d,"x-placement":o}))}))}return l.a.createElement(m,Object(b.a)({tabIndex:"-1",role:"menu"},p,{"aria-hidden":!this.context.isOpen,className:d,"x-placement":p.placement}))},t}(l.a.Component);A.propTypes=R,A.defaultProps={tag:"div",flip:!0},A.contextType=j;var _=A,U={children:O.a.node,active:O.a.bool,disabled:O.a.bool,divider:O.a.bool,tag:k.e,header:O.a.bool,onClick:O.a.func,className:O.a.string,cssModule:O.a.object,toggle:O.a.bool},B=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(f.a)(n)),n.getTabIndex=n.getTabIndex.bind(Object(f.a)(n)),n}Object(g.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},n.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},n.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,n=Object(k.d)(this.props,["toggle"]),a=n.className,o=n.cssModule,r=n.divider,s=n.tag,i=n.header,c=n.active,u=Object(E.a)(n,["className","cssModule","divider","tag","header","active"]),p=Object(k.c)(w()(a,{disabled:u.disabled,"dropdown-item":!r&&!i,active:c,"dropdown-header":i,"dropdown-divider":r}),o);return"button"===s&&(i?s="h6":r?s="div":u.href&&(s="a")),l.a.createElement(s,Object(b.a)({type:"button"===s&&(u.onClick||this.props.toggle)?"button":void 0},u,{tabIndex:e,role:t,className:p,onClick:this.onClick}))},t}(l.a.Component);B.propTypes=U,B.defaultProps={tag:"button",toggle:!0},B.contextType=j;var H=B,$=n(1),G=n(10),V=n(187),J=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(s.a)(t).call(this,e))).handleChangeLocale=function(e,t){n.props.changeLocale(e),t!==Object(V.a)().direction&&(Object(V.b)(t),setTimeout((function(){window.location.reload()}),500))},n.isInFullScreen=function(){return document.fullscreenElement&&null!==document.fullscreenElement||document.webkitFullscreenElement&&null!==document.webkitFullscreenElement||document.mozFullScreenElement&&null!==document.mozFullScreenElement||document.msFullscreenElement&&null!==document.msFullscreenElement},n.handleSearchIconClick=function(e){if(window.innerWidth<G.j){var t=e.target;e.target.classList.contains("search")||(e.target.parentElement.classList.contains("search")?t=e.target.parentElement:e.target.parentElement.parentElement.classList.contains("search")&&(t=e.target.parentElement.parentElement)),t.classList.contains("mobile-view")?(n.search(),t.classList.remove("mobile-view"),n.removeEventsSearch()):(t.classList.add("mobile-view"),n.addEventsSearch())}else n.search()},n.addEventsSearch=function(){document.addEventListener("click",n.handleDocumentClickSearch,!0)},n.removeEventsSearch=function(){document.removeEventListener("click",n.handleDocumentClickSearch,!0)},n.handleDocumentClickSearch=function(e){var t=!1;if(e.target&&e.target.classList&&(e.target.classList.contains("navbar")||e.target.classList.contains("simple-icon-magnifier"))?(t=!0,e.target.classList.contains("simple-icon-magnifier")&&n.search()):e.target.parentElement&&e.target.parentElement.classList&&e.target.parentElement.classList.contains("search")&&(t=!0),!t){var a=document.querySelector(".mobile-view");a&&a.classList&&a.classList.remove("mobile-view"),n.removeEventsSearch(),n.setState({searchKeyword:""})}},n.handleSearchInputChange=function(e){n.setState({searchKeyword:e.target.value})},n.handleSearchInputKeyPress=function(e){"Enter"===e.key&&n.search()},n.search=function(){n.props.history.push(G.k+"/"+n.state.searchKeyword),n.setState({searchKeyword:""})},n.toggleFullScreen=function(){var e=n.isInFullScreen(),t=document.documentElement;e?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),n.setState({isInFullScreen:!e})},n.handleLogout=function(){n.props.logoutUser(n.props.history)},n.menuButtonClick=function(e,t,a){e.preventDefault(),setTimeout((function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!1,!1),window.dispatchEvent(e)}),350),n.props.setContainerClassnames(++t,a,n.props.selectedMenuHasSubItems)},n.mobileMenuButtonClick=function(e,t){e.preventDefault(),n.props.clickOnMobileMenu(t)},n.state={isInFullScreen:!1,searchKeyword:""},n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getProfile()}},{key:"render",value:function(){var e=this;return l.a.createElement("nav",{className:"navbar fixed-top"},l.a.createElement("div",{className:"d-flex align-items-center navbar-left pl-3"}),l.a.createElement("a",{className:"navbar-logo",href:"/"},l.a.createElement("span",{className:"logo d-none d-xs-block"}),l.a.createElement("span",{className:"logo-mobile d-block d-xs-none"})),l.a.createElement("div",{className:"navbar-right"},l.a.createElement("div",{className:"user d-inline-block"},l.a.createElement(F,{className:"dropdown-menu-right"},l.a.createElement(z,{className:"p-0",color:"empty"},l.a.createElement("span",{className:"name mr-1",style:{float:"left",marginTop:"13px"}},"".concat(this.props.profile.first_name," ").concat(this.props.profile.last_name)),l.a.createElement("span",{style:{display:"inline-block",overflow:"hidden",borderRadius:"50%",width:"40px",height:"0",paddingBottom:"40px",position:"relative"}},l.a.createElement("img",{alt:"Profile",src:this.props.profile.avatar,style:{width:"40px",position:"absolute",left:"0",top:"50%",marginTop:"-30px",marginLeft:"0"}}))),l.a.createElement(_,{className:"mt-3",right:!0},l.a.createElement(H,{onClick:function(){return e.handleLogout()}},"Sign out"))))))}}]),t}(c.Component),W=Object(d.d)(Object(p.b)((function(e){var t=e.menu,n=e.settings,a=e.authUser.profile;return{containerClassnames:t.containerClassnames,menuClickCount:t.menuClickCount,selectedMenuHasSubItems:t.selectedMenuHasSubItems,locale:n.locale,profile:a}}),{setContainerClassnames:$.V,clickOnMobileMenu:$.M,logoutUser:$.S,changeLocale:$.L,getProfile:$.Q})(J)),Q=n(197),Y=n(107),X=function(){return l.a.createElement("footer",{className:"page-footer"},l.a.createElement("div",{className:"footer-content"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(Q.a,null,l.a.createElement(Y.a,{xxs:"12",sm:"6"},l.a.createElement("p",{className:"mb-0 text-muted"},"Bicovery ",(new Date).getFullYear()))))))},Z=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.containerClassnames;return l.a.createElement("div",{id:"app-container",className:e},l.a.createElement(W,{history:this.props.history}),l.a.createElement("main",{className:"ml-0 mr-3 mb-0"},l.a.createElement("div",{className:"container-fluid"},this.props.children)),l.a.createElement(X,null))}}]),t}(c.Component),ee=Object(u.g)(Object(p.b)((function(e){return{containerClassnames:e.menu.containerClassnames}}),{})(Z)),te=l.a.lazy((function(){return n.e(18).then(n.bind(null,513))})),ne=l.a.lazy((function(){return n.e(19).then(n.bind(null,514))})),ae=l.a.lazy((function(){return Promise.all([n.e(2),n.e(20),n.e(17)]).then(n.bind(null,530))})),oe=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.match;return l.a.createElement(ee,null,l.a.createElement("div",{className:"dashboard-wrapper"},l.a.createElement(c.Suspense,{fallback:l.a.createElement("div",{className:"loading"})},l.a.createElement(u.d,null,l.a.createElement(u.a,{exact:!0,from:"".concat(e.url,"/"),to:"".concat(e.url,"/patients-list")}),l.a.createElement(u.b,{path:"".concat(e.url,"/gogo"),render:function(e){return l.a.createElement(te,e)}}),l.a.createElement(u.b,{path:"".concat(e.url,"/second-menu"),render:function(e){return l.a.createElement(ne,e)}}),l.a.createElement(u.b,{path:"".concat(e.url,"/patients-list"),render:function(e){return l.a.createElement(ae,e)}}),l.a.createElement(u.a,{to:"/error"})))))}}]),t}(c.Component);t.default=Object(u.g)(Object(p.b)((function(e){return{containerClassnames:e.menu.containerClassnames}}),{})(oe))}}]);
//# sourceMappingURL=views-app.329a5ba5.chunk.js.map