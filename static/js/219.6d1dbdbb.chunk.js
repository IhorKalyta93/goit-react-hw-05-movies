"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{197:function(n,t,e){e.d(t,{Hg:function(){return o},P0:function(){return p},Qw:function(){return f},qF:function(){return s},yJ:function(){return d}});var r=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="283966c6ecdf87ab9325b929855602b9",o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},219:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,c,u=e(439),i=e(791),o=e(689),s=e(197),p=e(168),f=e(766),d=e(444),h=d.ZP.ul(r||(r=(0,f.Z)(["\n  padding: 30px;\n"]))),l=d.ZP.img(a||(a=(0,f.Z)(["\n  width: 100px;\n"]))),v=d.ZP.li(c||(c=(0,f.Z)([""]))),g=e(184),m=function(){var n=(0,i.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,o.UO)().movieId;return(0,i.useEffect)((function(){(0,s.Qw)(a).then((function(n){var t=n.cast;r(t)})).catch((function(n){return console.log(n)}))}),[a]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(h,{children:e.map((function(n){var t=n.credit_id,e=n.name,r=n.character,a=n.profile_path;return(0,g.jsxs)(v,{children:[(0,g.jsx)(p.x,{children:(0,g.jsx)(l,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(a),alt:e})}),(0,g.jsx)("p",{children:e}),(0,g.jsxs)("p",{children:["Character: ",r]})]},t)}))})})}}}]);
//# sourceMappingURL=219.6d1dbdbb.chunk.js.map