"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[573],{197:function(n,e,t){t.d(e,{Hg:function(){return o},P0:function(){return p},Qw:function(){return l},qF:function(){return s},yJ:function(){return f}});var r=t(861),a=t(757),u=t.n(a),i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="283966c6ecdf87ab9325b929855602b9",o=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},573:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,u,i,c,o,s,p,l=t(439),f=t(791),d=t(87),h=t(197),v=t(689),g=t(766),m=t(444),x=m.ZP.ul(r||(r=(0,g.Z)(["\n  padding-left: 40px;\n"]))),Z=m.ZP.li(a||(a=(0,g.Z)(["\n  margin-top: 10px;\n"]))),w=t(184),b=function(n){var e=n.movies,t=(0,v.TH)();return(0,w.jsx)(x,{children:e.map((function(n){var e=n.id,r=n.title;return(0,w.jsx)(Z,{children:(0,w.jsx)(d.OL,{to:"/movies/".concat(e),state:{from:t},children:r})},e)}))})},y=(m.ZP.form(u||(u=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n\n  background-color: white;\n"]))),m.ZP.input(i||(i=(0,g.Z)(["\n  display: inline-block;\n  width: 300px;\n  height: 20px;\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-left: 20px;\n  margin-right: 10px;\n\n  outline: transparent;\n"])))),k=(m.ZP.button(c||(c=(0,g.Z)(["\n  width: 80px;\n  height: 25px;\n\n  background-color: green;\n  color: white;\n  border: transparent;\n  border-radius: 3px;\n"]))),m.ZP.button(o||(o=(0,g.Z)(["\n  padding: 10px 20px;\n\n  color: white;\n  background-color: green;\n  border: transparent;\n  outline: transparent;\n"])))),_=m.ZP.section(s||(s=(0,g.Z)([""]))),P=m.ZP.form(p||(p=(0,g.Z)([""]))),j=function(){var n,e=(0,f.useState)([]),t=(0,l.Z)(e,2),r=t[0],a=t[1],u=(0,f.useState)(!1),i=(0,l.Z)(u,2),c=i[0],o=i[1],s=(0,d.lr)(),p=(0,l.Z)(s,2),v=p[0],g=p[1],m=null!==(n=v.get("query"))&&void 0!==n?n:"";(0,f.useEffect)((function(){return m?""===m.trim()?(alert("Enter a search query!"),void o(!1)):void(0,h.qF)(m.toLowerCase().trim()).then((function(n){var e=n.results,t=n.total_results;a(e),o(!1),0===t&&(o(!1),alert("This movie was not found."))})).catch((function(n){return o(!1),alert("Please retry!")})):(a([]),void o(!1))}),[m]);return(0,w.jsxs)(_,{children:[(0,w.jsx)("div",{children:(0,w.jsxs)(P,{onSubmit:function(n){n.preventDefault(),o(!0);var e=n.target.elements.search.value;if(g(""!==e?{query:e.trim()}:{}),""===e)return o(!1),void alert("Enter a search query!");n.target.reset()},children:[(0,w.jsx)(y,{name:"search"}),(0,w.jsx)(k,{type:"submit",children:"Search"})]})}),c,r.length>0&&!c&&(0,w.jsx)(b,{movies:r})]})}}}]);
//# sourceMappingURL=573.9f058a32.chunk.js.map