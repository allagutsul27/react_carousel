(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var i=n(6),a=n.n(i),c=n(2),s=n(5),m=n(3),r=n(1),l=(n(11),n(12),n(0)),o=function(e){var t=e.images,n=e.step,i=e.itemWidth,a=e.frameSize,c=e.animationDuration,s=e.infinite,o=Object(r.useState)(0),u=Object(m.a)(o,2),b=u[0],j=u[1],p=t.length-a;Object(r.useEffect)((function(){j(0)}),[a]);return Object(l.jsxs)("div",{style:{width:"".concat(a*i,"px")},className:"Carousel",children:[Object(l.jsx)("ul",{className:"Carousel__list",children:t.map((function(e){return Object(l.jsx)("li",{className:"Carousel__item",style:{transform:"translateX(".concat(-b*i,"px)"),transition:"transform ease ".concat(c/1e3,"s")},children:Object(l.jsx)("img",{style:{width:"".concat(i,"px")},src:e,alt:"1"})},e)}))}),Object(l.jsxs)("div",{className:"Carousel__buttons",children:[Object(l.jsx)("button",{type:"button",className:"button__prev",onClick:function(){j(b-n<0?0:b-n),s&&0===b&&j(p)},disabled:0===b&&!s,children:"Prev"}),Object(l.jsx)("button",{type:"button","data-cy":"next",className:"button__next",onClick:function(){j(b+n<p?b+n:p),s&&b===p&&j(0)},disabled:b===p&&!s,children:"Next"})]})]})},u=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],b={step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},j=function(){var e=Object(r.useState)(b),t=Object(m.a)(e,2),n=t[0],i=t[1],a=function(e){var t=e.target,n=t.name,a=t.value,m=t.type,r=t.checked;i((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(c.a)({},n,"checkbox"===m?r:a))}))},j=n.step,p=n.frameSize,d=n.itemWidth,h=n.animationDuration,x=n.infinite;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"App__title","data-cy":"title",children:"Carousel with ".concat(u.length," images")}),Object(l.jsxs)("div",{className:"App__labels",children:[Object(l.jsxs)("label",{children:["Step:",Object(l.jsx)("input",{name:"step",type:"number",min:3,max:10,value:j,onChange:a})]}),Object(l.jsxs)("label",{children:["Frame size:",Object(l.jsx)("input",{name:"frameSize",type:"number",min:3,max:10,value:p,onChange:a})]}),Object(l.jsxs)("label",{children:["Item width:",Object(l.jsx)("input",{name:"itemWidth",type:"number",min:130,step:10,max:200,value:d,onChange:a})]}),Object(l.jsxs)("label",{children:["Animation duration:",Object(l.jsx)("input",{name:"animationDuration",type:"number",min:1e3,max:5e3,step:1e3,value:h,onChange:a})]}),Object(l.jsxs)("label",{className:"infinite",children:["Infinite:",Object(l.jsx)("input",{name:"infinite",type:"checkbox",checked:x,onChange:a})]})]}),Object(l.jsx)(o,{images:u,step:j,frameSize:p,itemWidth:d,animationDuration:h,infinite:x})]})};a.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d0e33a80.chunk.js.map