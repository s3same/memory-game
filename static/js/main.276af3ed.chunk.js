(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,,,,,,function(c,e,t){},function(c,e,t){},function(c,e,t){},,function(c,e,t){"use strict";t.r(e);var n=t(1),r=t.n(n),a=t(5),i=t.n(a),s=(t(10),t(3)),o=t(2),u=(t(11),t(12),t(0));function l(c){var e=c.card,t=c.handleChoice,n=c.flipped,r=c.disabled;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:n?"flipped":"",children:[Object(u.jsx)("img",{className:"front",src:e.src,alt:"card front"}),Object(u.jsx)("img",{className:"back",src:"/img/cover.png",onClick:function(){r||t(e)},alt:"cover"})]})})}var d=[{src:"/img/helmet.png",matched:!1},{src:"/img/potion.png",matched:!1},{src:"/img/ring.png",matched:!1},{src:"/img/scroll.png",matched:!1},{src:"/img/shield.png",matched:!1},{src:"/img/sword.png",matched:!1}];var j=function(){var c=Object(n.useState)([]),e=Object(o.a)(c,2),t=e[0],r=e[1],a=Object(n.useState)(0),i=Object(o.a)(a,2),j=i[0],m=i[1],b=Object(n.useState)(null),h=Object(o.a)(b,2),f=h[0],O=h[1],p=Object(n.useState)(null),g=Object(o.a)(p,2),v=g[0],x=g[1],N=Object(n.useState)(!1),M=Object(o.a)(N,2),S=M[0],k=M[1],w=function(){var c=function(c){for(var e=c.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),n=[c[t],c[e]];c[e]=n[0],c[t]=n[1]}return c}([].concat(d,d)).map((function(c){return Object(s.a)(Object(s.a)({},c),{},{id:Math.random()})}));O(null),x(null),r(c),m(0)},C=function(c){console.log(c),f?x(c):O(c)};Object(n.useEffect)((function(){f&&v&&(k(!0),f.src===v.src?(r((function(c){return c.map((function(c){return c.src===f.src?Object(s.a)(Object(s.a)({},c),{},{matched:!0}):c}))})),y()):setTimeout((function(){return y()}),1e3))}),[f,v]);var y=function(){O(null),x(null),m((function(c){return c+1})),k(!1)};return Object(n.useEffect)((function(){w()}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Magic Match"}),Object(u.jsx)("button",{onClick:w,children:"New Game"}),Object(u.jsx)("div",{className:"card-grid",children:t.map((function(c){return Object(u.jsx)(l,{card:c,handleChoice:C,flipped:c===f||c===v||c.matched,disabled:S},c.id)}))}),Object(u.jsxs)("p",{children:["Turns: ",j]})]})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.276af3ed.chunk.js.map