"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[631],{197:function(n,e,t){t.d(e,{Hg:function(){return u},Qw:function(){return l},qF:function(){return s},vJ:function(){return d},yJ:function(){return p}});var r=t(861),a=t(757),i=t.n(a),o=t(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="3229ef67f760562f80f2051ae7184e71",u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},631:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,i,o,c,u,s,d=t(439),l=t(689),p=t(197),f=t(791),h=t(766),v=t(444),x=t(87),g=v.ZP.img(r||(r=(0,h.Z)(["\n  width: 200px;\n  height: 300px;\n  margin: 20px;\n\n  border-radius: 2px;\n"]))),m=v.ZP.div(a||(a=(0,h.Z)(["\n  display: flex;\n"]))),w=v.ZP.div(i||(i=(0,h.Z)([""]))),Z=(0,v.ZP)(x.rU)(o||(o=(0,h.Z)(["\n  max-width: 100px;\n  padding: 10px 20px;\n\n  text-align: center;\n  text-decoration: none;\n  font-weight: 700;\nborder-radius: 5px;\n  color: white;\n  background-color: darkblue;\n"]))),k=(0,v.ZP)(x.OL)(c||(c=(0,h.Z)(["\n  padding: 10px 20px;\n  margin-left: 20px;\n\n  text-decoration: none;\nborder-radius: 5px;\n  color: white;\n  background-color: darkblue;\n"]))),j=v.ZP.ul(u||(u=(0,h.Z)(["\n  padding-left: 40px;\n"]))),b=v.ZP.li(s||(s=(0,h.Z)(["\n  margin-top: 30px;\n"]))),y=t(184),_=function(){var n,e,t=(0,f.useState)(null),r=(0,d.Z)(t,2),a=r[0],i=r[1],o=(0,l.UO)().movieId,c=(0,f.useState)([]),u=(0,d.Z)(c,2),s=u[0],h=u[1],v=(0,l.TH)();(0,f.useEffect)((function(){(0,p.vJ)(o).then((function(n){i(n);var e=[];n.genres.forEach((function(n){var t=n.name;return e.push(t)})),h(e)})).catch((function(n){return console.log(n)}))}),[o]);var x=new Date(null===a||void 0===a?void 0:a.release_date),_=null!==(n=null===(e=v.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,y.jsxs)("div",{children:[(0,y.jsx)(k,{to:_,children:"Go back"}),a&&(0,y.jsxs)(m,{children:[(0,y.jsx)(g,{src:a.poster_path?"".concat("https://image.tmdb.org/t/p/w500").concat(null===a||void 0===a?void 0:a.poster_path):"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:null===a||void 0===a?void 0:a.title,width:"300"}),(0,y.jsxs)(w,{children:[(0,y.jsxs)("h2",{children:[a.title," (",x.getFullYear(),")"]}),(0,y.jsxs)("p",{children:["User score: ",null===a||void 0===a?void 0:a.vote_count," "]}),(0,y.jsx)("h3",{children:"Overview"}),(0,y.jsx)("p",{children:null===a||void 0===a?void 0:a.overview}),(0,y.jsx)("h4",{children:"Genres"}),(0,y.jsx)("p",{children:s.join(", ")})]})]}),(0,y.jsxs)(j,{children:[(0,y.jsx)("p",{children:"Additional information"}),(0,y.jsx)(b,{children:(0,y.jsx)(Z,{to:"cast",state:{from:_},children:"Cast"})}),(0,y.jsx)(b,{children:(0,y.jsx)(Z,{to:"reviews",state:{from:_},children:"Reviews"})})]}),(0,y.jsx)(f.Suspense,{fallback:(0,y.jsx)("h1",{children:"Movie Details to be appeared"}),children:(0,y.jsx)(l.j3,{})})]})}}}]);
//# sourceMappingURL=631.93a323d9.chunk.js.map