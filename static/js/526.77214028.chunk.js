"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[526],{197:function(n,e,t){t.d(e,{Hg:function(){return o},P0:function(){return p},Qw:function(){return f},qF:function(){return s},yJ:function(){return d}});var r=t(861),a=t(757),c=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="283966c6ecdf87ab9325b929855602b9",o=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},526:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,a,c,u=t(439),i=t(197),o=t(791),s=t(168),p=t(87),f=t(766),d=t(444),l=d.ZP.p(r||(r=(0,f.Z)(["\n  margin: 20px;\n\n  font-size: 24px;\n"]))),v=d.ZP.ul(a||(a=(0,f.Z)(["\n  padding-left: 40px;\n"]))),h=d.ZP.li(c||(c=(0,f.Z)(["\n  margin-top: 10px;\n"]))),g=t(184),x=function(){var n=(0,o.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1];return(0,o.useEffect)((function(){(0,i.Hg)().then((function(n){var e=n.results;r(e)})).catch((function(n){return console.log(n)}))}),[]),(0,g.jsx)("div",{children:(0,g.jsxs)(s.x,{display:"flex",flexDirection:"column",children:[(0,g.jsx)(l,{children:"Trendings today"}),(0,g.jsx)(v,{children:t.map((function(n){return(0,g.jsx)(h,{children:(0,g.jsx)(p.OL,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})})}}}]);
//# sourceMappingURL=526.77214028.chunk.js.map